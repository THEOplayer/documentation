# Network Request/Response Interceptors

THEOplayer makes a number of network requests and receives responses while playing content video, these requests and responses can be intercepted to make a new or modified request or respond with a new response. The network object thus allows easy access to handle the network efficiently.

This guide explains how you set up THEOplayer to add and remove request/response interceptors. This document guides you through setting up a demo just like the one that's showcased in our [Demo Zone](https://www.theoplayer.com/demo-zone).

### Table of Contents

1. [Prerequisites](#prerequisites)
2. [Starting Template](#starting-template)
3. [Adding and removing Request Interceptors](#adding-and-removing-request-interceptors)
4. [Adding and removing Response Interceptors](#adding-and-removing-response-interceptors)
5. [Adding a waitUntil in Request and Response Interceptors](#adding-a-waituntil-in-request-and-response-interceptors)
6. [HTTP Errors](#6-http-errors)
7. [Adding and Removing Event Listeners](#adding-and-removing-event-listeners)

## Prerequisites

This guide expects that you have a THEOplayer license. If you aren't using THEOplayer yet, you can start by registering at THEOportal [here](https://portal.theoplayer.com) to get access to THEOplayer. Be sure to have THEOplayer version 2.21.0 or higher.

## Starting Template

The first thing you need is a valid THEOplayer set-up. If you have no experience with setting up our player, we have an excellent [getting started guide](../../getting-started/01-sdks/01-web/00-getting-started.md).

To get THEOplayer to work, you only need to do three things:

1.  Reference the THEOplayer JavaScript library (and optionally the default CSS styles).
2.  Add a container which can hold your video player with HTML.
3.  Create your player through JavaScript using our [API](https://docs.theoplayer.com/api-reference/web/theoplayer.player.md).

A basic HTML page with a working THEOplayer could look like the following:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>THEOplayer Web SDK: Getting Started</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="/path/to/ui.css" />
  </head>
  <body>
    <div
      class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"
    ></div>
    <script type="text/javascript" src="/path/to/THEOplayer.js"></script>
    <!-- ads THEOplayer library -->
    <script>
      var element = document.querySelector(".theoplayer-container")
      var player = new THEOplayer.Player(element, {
        libraryLocation: '/path/to/libraryLocation/',
        license: 'your_license_here'
      },

      player.source = {
        sources: [
          {
            src: "https://cdn.theoplayer.com/video/sintel/nosubs.m3u8",
            type: "application/x-mpegurl",
          },
        ],
      }
    </script>
  </body>
</html>
```

The two snippets below are the references to the JS and CSS library.

```html
<link rel="stylesheet" type="text/css" href="/path/to/ui.css" />
```

```html
<script type="text/javascript" src="/path/to/THEOplayer.js"></script>
```

The following snippet is your HTML container.

```html
<div
  class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"
></div>
```

This snippet initializes your player, including an HLS source.

```html
<script>
  var element = document.querySelector(".theoplayer-container");
  var player = new THEOplayer.Player(element);
  player.source = {
    sources: [
      {
        src: "https://cdn.theoplayer.com/video/sintel/nosubs.m3u8",
        type: "application/x-mpegurl"
      }
    ]
  };
</script>
```

## Adding and removing Request Interceptors

Starting from the basic template above, you need to add a `RequestInterceptor` on the network object's addRequestInterceptor method. By adding a request interceptor, the original request made by HTTP can be modified so that specific properties of the original request can be altered to contain the necessary information, before it is sent to the server. The interceptors are added in a stack and the last interceptor to be added is the first one to intercept the original request.

A request interceptor can modify the request with a `[redirect](https://docs.theoplayer.com/api-reference/web/theoplayer.request.md)` or a `[respondWith](https://docs.theoplayer.com/api-reference/web/theoplayer.request.md)` method.

```js
var interceptor = function (request) {
  if (request.type === "manifest") {
    request.redirect({
      url: "https://cdn.theoplayer.com/video/elephants-dream/448/chunklist_w370587926_b688000_vo_slen_t64TWFpbg==.m3u8",
      method: "GET",
      headers: {
        "Content-Type": "application/x-mpegurl"
      }
    });
  }
};
```

The code sample above intercepts manifest requests made by the player and redirects them to the provided request URL.

If the properties of the given `RequestInit` object are missing, the API uses the properties values from the original request.

A response to the request can be added in an interceptor as follows:

```js
var interceptor = function (request) {
  if (request.type === "manifest") {
    request.respondWith({
      body: "#EXTM3U\n#EXTINF:6,\nhttps://cdn.theoplayer.com/video/elephants-dream/448/media_w370587926_b688000_vo_slen_t64TWFpbg==_0.ts\n#EXT-X-ENDLIST",
      status: 200,
      statusText: "OK"
    });
  }
};
```

The code sample above intercepts manifest requests made by the player and responds with a manifest containing a single segment.

The above defined interceptors can be added to the player as follows:

```js
player.network.addRequestInterceptor(interceptor);
```

Interceptors can be removed similarly, as follows:

```js
player.network.removeRequestInterceptor(interceptor);
```

## Adding and removing Response Interceptors

A `ResponseInterceptor` responds with the given response for the original request.

A `ResponseInterceptor` can be added on the network object's addResponseInterceptor method. By adding a response interceptor, the original response can be modified so that specific properties of the original response can be altered to contain the necessary information, before the server responds. The interceptors are added in a stack and the last interceptor to be added is the first one to intercept the original response.

A ResponseInterceptor can modify the response with the `[respondWith](https://docs.theoplayer.com/api-reference/web/theoplayer.request.md)` method.

```js
var interceptor = function (response) {
  response.respondWith({
    body: "#EXTM3U\n#EXTINF:6,\nhttps://cdn.theoplayer.com/video/elephants-dream/448/media_w370587926_b688000_vo_slen_t64TWFpbg==_0.ts\n#EXT-X-ENDLIST",
    status: 200,
    statusText: "OK"
  });
};
```

The code sample above intercepts manifest responses received by the player and responds with a manifest containing a single segment. The `respondWith` method accepts a `[ResponseInit](https://docs.theoplayer.com/api-reference/web/theoplayer.request.md)` object as its argument.

The above defined interceptor can be added to the player as follows:

```js
player.network.addResponseInterceptor(interceptor);
```

Interceptors can be removed similarly, as follows:

```js
player.network.removeResponseInterceptor(interceptor);
```

## Adding a waitUntil in Request and Response Interceptors

The `waitUntil` method can be used to execute synchronous and asynchronous processes before the `request` or the `response` can be closed. A waitUntil method can throw an error if, for a single Interceptor, a request or a response was already closed.

The waitUntil method can receive one of the following as its argument :

- A Done callback
- A function which returns a promise
- A PromiseLike

#### Done callback

When using a done callback, the waitUntil method needs to wait until the method finishes executing before the request or the response can be closed by calling the done callback. Failing to call this callback may result in the request or the response never being delivered.

The waitUntil method can be defined with a `done` callback as follows

```js
var interceptor = function (request) {
  request.waitUntil(function (done) {
    setTimeout(function () {
      request.redirect({
        url: "https://cdn.theoplayer.com/video/elephants-dream/448/chunklist_w370587926_b688000_vo_slen_t64TWFpbg==.m3u8",
        method: "GET",
        headers: modifyRequestHeaders(request.headers)
      });
      done();
    }, 100);
  });
};
```

The code sample above waits for 100 milliseconds before it redirects to another URL and then the done call is executed which means that the request can now be closed.

#### Function returns a promise

When the waitUntil method receives a function that returns a promise, the promise needs to resolve before the request or the response can be closed.

The waitUntil method that receives a function that returns a promise can be defined as follows

```js
var interceptor = function (request) {
  request.waitUntil(function () {
    return delay(100).then(function () {
      request.redirect({
        url: "https://cdn.theoplayer.com/video/elephants-dream/448/chunklist_w370587926_b688000_vo_slen_t64TWFpbg==.m3u8",
        method: "GET",
        headers: modifyRequestHeaders(request.headers)
      });
    });
  });
};
```

The code sample above waits for 100 milliseconds before it redirects to another URL after which the request can be closed.

#### PromiseLike

When using a `PromiseLike`, the waitUntil method needs to wait until the provided promise argument resolves before the request or the response can be closed.

The waitUntil method can be defined with a `PromiseLike` as follows

```js
var interceptor = function (request) {
  var promise = delay(100).then(function () {
    request.redirect({
      url: "https://cdn.theoplayer.com/video/elephants-dream/448/chunklist_w370587926_b688000_vo_slen_t64TWFpbg==.m3u8",
      method: "GET",
      headers: modifyRequestHeaders(request.headers)
    });
  });
  request.waitUntil(promise);
};
```

The code sample above waits until the modifyRequestHeaders promise is resolved and then the redirect method is executed which means that the request can now be closed.

## HTTP Errors

If the status code is set to a code between 200-299, the player responds with a successful response, in any other cases the player will respond with an HTTP error.

If the player originally responded with an HTTP error, the interceptor can change the response to a successful response and vice versa.

## Adding and Removing Event Listeners

The 'online' and 'offline' events can be added to the network as follows:

```js
player.network.addEventListener("online", handleOnlineEvent);
```

Events can be removed similarly, as follows:

```js
player.network.removeEventListener("online", handleOnlineEvent);
```
