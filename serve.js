const http = require('http');
const path = require('path');
const serveHandler = require('serve-handler');

const port = 3000;
const baseUrl = process.env.DOCUSAURUS_BASE_URL || '/docs/';
const buildDir = 'build';
const outDir = path.resolve('.', buildDir);
const servingUrl = `http://localhost:${port}`;

// Based on `docusaurus serve`
// https://github.com/facebook/docusaurus/blob/v3.1.1/packages/docusaurus/src/commands/serve.ts#L27
const server = http.createServer((req, res) => {
  // Automatically redirect requests to /baseUrl/
  if (!req.url?.startsWith(baseUrl)) {
    res.writeHead(302, {
      Location: baseUrl,
    });
    res.end();
    return;
  }

  // Remove baseUrl before calling serveHandler, because /baseUrl/ should
  // serve /build/index.html, not /build/baseUrl/index.html (does not exist)
  req.url = req.url.replace(baseUrl, '/');

  // HACK: serve-handler doesn't know about baseUrl, add it back when redirecting
  // https://github.com/vercel/serve-handler/blob/6.1.5/src/index.js#L586-L588
  // https://github.com/facebook/docusaurus/issues/7991
  const originalWriteHead = res.writeHead;
  res.writeHead = function (statusCode, statusMessage, headers) {
    if (typeof statusMessage !== 'string') {
      headers ??= statusMessage;
      statusMessage = undefined;
    }
    if (statusCode >= 300 && statusCode < 400) {
      const location = headers['Location'];
      if (location.startsWith('/') && !location.startsWith(baseUrl)) {
        headers['Location'] = location.replace('/', baseUrl);
      }
    }
    return originalWriteHead.call(this, statusCode, statusMessage, headers);
  };

  return serveHandler(req, res, {
    cleanUrls: [
      // Clean URLs ending in /index.html or /index
      '/**/index.html',
      '/**/index',
      // Don't clean URLs ending in /some-page.html, since that breaks our demos
      '!/**/*.html',
    ],
    public: outDir,
    trailingSlash: true,
    directoryListing: false,
  });
});

const url = servingUrl + baseUrl;
console.log(`Serving path=${buildDir} directory at: url=${url}`);
server.listen(port);
