import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const DEFAULT_SPEC_REF = '76b8e3996237ea4b7b4c2297caeb2f5e8514a3c7';
const OUTPUT_PATH = resolve('.docusaurus/openapi/ads-v2/openapi.json');

const specRef = process.env.ADS_OPENAPI_REF ?? DEFAULT_SPEC_REF;
const rawUrl = `https://raw.githubusercontent.com/Dolby-OptiView/optiview-ads/${specRef}/openapi.json`;
const apiUrl = `https://api.github.com/repos/Dolby-OptiView/optiview-ads/contents/openapi.json?ref=${encodeURIComponent(specRef)}`;
const specUrl = process.env.ADS_OPENAPI_SPEC_URL ?? rawUrl;
const token = process.env.ADS_OPENAPI_TOKEN ?? process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;

const headers = {
  Accept: 'application/vnd.github.raw+json',
  'User-Agent': 'optiview-docs-openapi-fetcher',
};

if (token) {
  headers.Authorization = `Bearer ${token}`;
}

const source = specUrl.startsWith('file://') || specUrl.startsWith('/') ? await readFile(specUrl.replace(/^file:\/\//, ''), 'utf8') : undefined;

const spec = source
  ? JSON.parse(source)
  : await (async () => {
      const remoteUrl = token && !process.env.ADS_OPENAPI_SPEC_URL ? apiUrl : specUrl;
      const response = await fetch(remoteUrl, { headers });

      if (!response.ok) {
        throw new Error(`Failed to fetch Ads OpenAPI spec from ${remoteUrl}: ${response.status} ${response.statusText}`);
      }

      return response.json();
    })();

if (spec.openapi !== '3.0.3' || !spec.paths || !spec.components) {
  throw new Error(`Fetched Ads OpenAPI spec from ${specUrl} is not the expected OpenAPI 3.0.3 document.`);
}

const httpMethods = new Set(['get', 'put', 'post', 'delete', 'patch', 'options', 'head', 'trace']);
const titleCase = (value) =>
  value
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ');
const operationName = (method, path) =>
  `${method}-${path
    .replace(/^\/api\/v1\//, '')
    .replace(/[{}]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`;
const tagForPath = (path) => {
  const segments = path.split('/').filter(Boolean);
  const resource = segments[2] === 'channels' && segments[4] ? segments[4] : segments[2];

  return titleCase(resource ?? 'Ads');
};

for (const [path, pathItem] of Object.entries(spec.paths)) {
  for (const [method, operation] of Object.entries(pathItem)) {
    if (!httpMethods.has(method)) {
      continue;
    }

    operation.operationId ??= operationName(method, path);
    operation.summary ??= `${titleCase(method)} ${path.replace(/^\/api\/v1/, '') || '/'}`;
    operation.tags ??= [tagForPath(path)];
  }
}

await mkdir(dirname(OUTPUT_PATH), { recursive: true });
await rm('ads/api/reference', { recursive: true, force: true });
await mkdir('ads/api/reference', { recursive: true });
await writeFile('ads/api/reference/.gitignore', '*\n!.gitignore\n');
await writeFile(OUTPUT_PATH, `${JSON.stringify(spec, null, 2)}\n`);

console.log(`Fetched Ads OpenAPI spec from ${specUrl} into ${OUTPUT_PATH}`);
