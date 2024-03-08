# Wowza streaming engine with secure token version 2

This guide explains how to set up THEOplayer with Wowza Streaming Engine™, using their SecureToken version 2 module, that provides playback protection via a security token that is exchanged between the server and clients. The SecureToken is a challenge/response system that helps to protect content against spoofing threats. Each connection is protected by a random key and a password (shared secret).

An important aspect when generating the hash, is that the client web server should generate the hash when it generates the client webpage. The **client webpage should not** use JavaScript code to generate the hash, as the code is visible in the webpage source and would pose a potential security risk. As a result, our implementation is based on a node/express application to generate the hash.

## SDKs

| Web SDK |                 Android SDK                 |                   iOS SDK                   | tvOS SDK |               Android TV SDK                | Chromecast SDK |
| :-----: | :-----------------------------------------: | :-----------------------------------------: | :------: | :-----------------------------------------: | :------------: |
|   Yes   | Unverified through CSS/JavaScript injection* | Unverified through CSS/JavaScript injection* |    No    | Unverified through CSS/JavaScript injection* |      N/A       |

*CSS/JavaScript injection in the project is only possible with the legacy mobile SDKs (up to 4.12.X).

## How to set up THEOplayer with Wowza Streaming Engine

### Prerequisites

There are three prerequisites in order to continue with this guide:

1. You have a THEOplayer license. If you are not using THEOplayer yet, you can start your free trial [here](https://portal.theoplayer.com/).

2. You are a Wowza Streaming Engine client and are integrated with their streaming infrastructure. Information on Wowza Streaming Engine can be found [here](https://www.wowza.com/docs/wowza-streaming-engine-product-articles/) and information on how to protect your streams, using SecureToken, can be found [here](https://www.wowza.com/docs/how-to-protect-streaming-using-securetoken-in-wowza-streaming-engine).

3. For the purposes of this example, we created a VOD application (this example would also work for live applications), in the Wowza Streaming Engine manager. We then configured our Wowza stream using the below settings in the Playback Security tab:

   i) SecureToken: **Protect all protocols using hash (SecureToken version 2)**

   ii) Shared Secret: **53a0a16b7cde230b**

   iii) Hash Algorithm: **SHA-256**

   iv) Include client IP address in hash generation: **Ticked (yes)**

   v) Hash Query Parameter Prefix: **wowzatoken**

   vi) Client Restrictions: **No client restrictions**

The application was saved and restarted.

### Integrating THEOplayer with Wowza Streaming Engine

##### Web SDK

[Getting Started on Web](../../getting-started/01-sdks/01-web/00-getting-started.md)

#### Server-side hash generation code

The below code makes reference to the above configuration settings specified in the Wowza Streaming Engine manager.

```js
var express = require("express");
var app = express();

var crypto = require("crypto");
var address = require("address");

// add CORS headers
app.use("/generate-hash", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const path = require("path");
const port = 3000;

/****************** START OF CONFIGURATION ******************/

// your hash algorithm: 256, 384 OR 512
const hashAlgorithm = "256";

// your shared Secret
const sharedSecret = "53a0a16b7cde230b";

// the content path to the streaming asset and is the part of the URL that starts with the application name
// (excluding the '/' that precedes the application name) and continues through to the end of the stream name or file name.
// Be sure to exclude all HTTP request keywords after the stream name or file name (for example, /manifest.m3u8, /media.ts, /Manifest, /manifest.f4v, and so on)
const contentPath = "vod/mp4:sample.mp4";

// your token prefix custom parameter
const tokenPrefix = "wowzatoken";

// your random custom parameter (optional - leave as empty string if none)
const customParameter = "myrandomcustomparameter";

// include client IP address in hash generation (yes/no)?
const includeClientIPAddress = "yes";

//const now = new Date();
//const startTime = Math.round(now.getTime() / 1000);
const startTime = "0";
//const validity = 1000; // validity in seconds

//const endTime = Math.round(now.getTime() / 1000) + validity;
const endTime = "0";

/****************** END OF CONFIGURATION ******************/

var params = [];

// create an array with the parameters
if (includeClientIPAddress == "yes") {
  address(function (err, addrs) {
    params.push(addrs.ip);
  });
}

params.push(
  tokenPrefix + "startTime=" + startTime,
  tokenPrefix + "endTime=" + endTime,
  tokenPrefix + "customParameter=" + customParameter,
  sharedSecret
);

// params should be sorted alphabetically before constructing the hash string
params.sort();

// construct the hash string
var hashString = contentPath + "?";

for (var i = 0; i < params.length; i++) {
  if (i + 1 == params.length) {
    hashString = hashString + params[i];
  } else {
    hashString = hashString + params[i] + "&";
  }
}

// the hash generated at the client should be a URL-safe Base64-encoded string.
app.get("/generate-hash", function (req, res, next) {
  var hash = crypto
    .createHash("sha" + hashAlgorithm)
    .update(hashString, "utf8")
    .digest("base64");

  // URL-safe Base64 encoding replaces the '+' character with the '-' character and the '/' character with the '_' character.
  hash = hash.replace(/\+/g, "-");
  hash = hash.replace(/\//g, "_");

  console.log(hashString);

  res.send(hash);
});

// Listen for requests
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port);
```

Save this JavaScript file as wowzasecuretoken.js and then run it with `node wowzasecuretoken.js`

#### Client-side hash generation code

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>THEOplayer Web SDK: Getting Started</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="path/to/theoplayer/ui.css" />
    <!-- adds THEOplayer CSS -->
  </head>
  <body>
    <div class="theoplayer-container video-js theoplayer-skin"></div>
    <script
      type="text/javascript"
      src="path/to/thoeplayer/THEOplayer.js"
    ></script>
    <!-- adds THEOplayer library -->
    <script>
      // Initialize player function once the hash has been retrieved
      var initPlayer = function (hash) {
        console.log(hash);
        // Replace http://192.168.1.34:1935/vod/mp4:sample.mp4/playlist.m3u8 with your stream manifest
        var hlsUrl =
          "http://192.168.1.34:1935/vod/mp4:sample.mp4/playlist.m3u8?" +
          "wowzatokenstartTime=0&" +
          "wowzatokenendTime=0&" +
          "wowzatokencustomParameter=myrandomcustomparameter&" +
          "wowzatokenhash=" +
          hash;

        console.log(hlsUrl);

        var element = document.querySelector(".video-js");
        var player = new THEOplayer.Player(element, {
          libraryLocation: "path/to/theoplayer",
          license: "your-license-here"
        });

        player.src = hlsUrl;
      };

      // Ajax request for the hash to the node/express app
      var requestHash = function (url) {
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.onreadystatechange = function () {
          if (req.readyState === 4) {
            var response = req.responseText;
            if (req.status === 200) {
              initPlayer(response);
            } else {
              console.log("Could not get hash");
            }
          }
        };
        req.onerror = function () {
          console.log("Could not get hash");
        };
        req.send();
      };

      // Start the request to your node/express server. Be sure to replace http://127.0.0.1:3000 with your node IP address and port
      var serverHashUrl = "http://127.0.0.1:3000/generate-hash";
      requestHash(serverHashUrl);
    </script>
  </body>
</html>
```

Save this HTML file as `index.html` and then view it in your browser window.

## Conclusion

THEOplayer partnered with Wowza Streaming Engine to fully integrate their SecureToken version 2 module.

In summary, to integrate Wowza Streaming Engine SecureToken version 2 module, in THEOplayer, you have to implement a client/server side solution using custom code.

## Resources

- [Getting Started on Web](../../getting-started/01-sdks/01-web/00-getting-started.md)

- [Getting Started with Wowza Streaming Engine](https://www.wowza.com/docs/wowza-streaming-engine-product-articles/)

- [Protect your streams using SecureToken in Wowza Streaming Engine](https://www.wowza.com/docs/how-to-protect-streaming-using-securetoken-in-wowza-streaming-engine)
