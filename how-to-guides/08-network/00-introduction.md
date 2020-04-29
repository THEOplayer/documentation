# Introduction

This article explains how to use the Network API.

On iOS browsers, the Network API can only be used to intercept and alter DRM-related requests and responses.

The technical documentation on the Network API can be found [here](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.network.md).

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Through JS injection     |   Through JS injection   | No  |      Through JS injection      |      Yes       |

## Instructions

1. Add/use request interceptor
2. Add/use response interceptor

###  1. Add/use request interceptor

The request interceptor can, as the handle suggests, be used to intercept requests. The method is available under `player.network` and requires a request object. Within the request object, you can change headers, redirect a license request, etc. You can't change the response with this interceptor, because that's covered with the response interceptor below.
In the example below, the request interceptor is used to redirect certain URL to another URL.

#### Code examples

Web SDK

```js
// Add a request interceptor
player.network.addRequestInterceptor(request => {
  // The interceptor intercepts ALL requests and we only want to redirect one specific url
  if (request.url == "https://link-to-specific-url") {
    // Redirect the request
    request.redirect({
      url: "https://link-to-new-url",
      method: request.method, // Keep the methods the same
      headers: request.headers, // Keep the headers the same
      closed: request.closed,
      useCredentials: request.useCredentials,
      type: request.type,
      subType: request.subType,
      responseType: request.responseType,
      body: request.body
    });
  }
});
```

##### Android (TV) SDK

Add the above JavaScript snippet to your Android (TV) SDK project as demonstrated at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).

##### iOS SDK

Add the above JavaScript snippet to your iOS SDK project as demonstrated at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).

###  2. Add/use response interceptor

The response interceptor is used to intercept/change responses. You can overwrite any response that the player receives. It is important to respond in the proper format (with JSON, base-64 body, ...)

Like the example above, this example will overwrite a response:

#### Code examples

##### Web SDK

```js
player.network.addResponseInterceptor(response => {
  // If the response comes from a specific URL
  if (response.url == "https://specific-url") {
    // Requests run async, therefore make sure to execute after the request is finished
    response.waitUntil(done => {
      response.respondWith({
        closed: response.closed,
        headers: response.headers,
        request: response.request,
        respondWith: response.respondWith,
        status: 201, // Updated status code as example
        statusText: "All cool bro", // Updated status text as example
        url: response.url,
        waitUntil: response.waitUntil,
        body: "New body"
      });
      done();
    });
  }
});
```

##### Android (TV) SDK

Add the above JavaScript snippet to your Android (TV) SDK project as demonstrated at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).

##### iOS SDK

Add the above JavaScript snippet to your iOS SDK project as demonstrated at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).
