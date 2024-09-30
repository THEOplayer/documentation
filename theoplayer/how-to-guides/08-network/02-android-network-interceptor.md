# Android Network Request/Response Interceptor

THEOplayer Android SDK makes a number of network requests and receives responses while playing video. These requests and responses can be intercepted to make a new or modified request or respond with a new response.

The Network API thus allows easy access to handle the network efficiently.

This guide explains how you set up THEOplayer Android SDK to add and remove request/response interceptors.

## Prerequisites

- This guide expects that you have a THEOplayer license. If you aren't using THEOplayer yet, you can start by registering at THEOportal [here](https://portal.theoplayer.com) to get access to THEOplayer.

- You need to be using at least THEOplayer Android SDK version 5.11.0.

## Set up THEOplayer in your app

To set up THEOplayer Android SDK in your app follow the steps in our [Getting started on Android](../../getting-started/01-sdks/02-android/00-getting-started.mdx) guide.

## Adding and removing an interceptor

The THEOplayer Android SDK provides the `HTTPInterceptor` interface which contains 2 methods (`onRequest`, `onResponse`)
where each can be optionally implemented based on the use-case.

- `suspend fun onRequest(request: InterceptableHTTPRequest)`: Intercepts an HTTP request before opening the connection.
- `suspend fun onResponse(response: InterceptableHTTPResponse)`: Intercepts an HTTP response before consuming the response body.

To start intercepting HTTP requests, add the interceptor to our Network API:

```kotlin
theoPlayerView.player.network.addHTTPInterceptor(httpInterceptor)
```

To stop intercepting HTTP requests, remove the interceptor from our Network API:

```kotlin
theoPlayerView.player.network.removeHTTPInterceptor(httpInterceptor)
```

## Intercepting a request

The `suspend fun onRequest(request: InterceptableHTTPRequest)` provides a `request` parameter that can be used to read/write properties or to interrupt the request providing a direct response.

In the below snippet, we show some common use-cases.

```kotlin
override suspend fun onRequest(request: InterceptableHTTPRequest) {
    // Read request properties
    Log.d("Interceptor", "onRequest - url: ${request.url}")

    // Add/override request headers
    request.headers["newKey"] = "newValue"

    // Replace properties
    request.method = "GET|POST|.."
    request.url = URL("new_url")
    request.headers = HashMap()

    // Replace POST/PUT request body
    request.body = "new post body".toByteArray()

    // Perform another async computation
    delay(1000) // simulating an async call

    // Interrupt the request and respond with a CompleteHTTPResponse
    request.respondWith(
        CompleteHTTPResponse(
            request,
            request.url,
            request.headers,
            200,
            "OK",
            "new post body".toByteArray()
        )
    )
}
```

## Intercepting a response

The `suspend fun onResponse(response: InterceptableHTTPResponse)` provides a `response` parameter that can be used to read and write properties from the received response.

In the below snippet we show some common use-cases.

```kotlin
override suspend fun onResponse(response: InterceptableHTTPResponse) {
    // Read response properties
    Log.d("Interceptor", "onResponse - headers: ${response.headers}")

    // Add/override response headers
    response.headers["newKey"] = "newValue"

    // Replace properties
    response.url = URL("new_url")
    response.headers = HashMap()
    response.status = 200
    response.statusText = "OK"

    // Get the chunks of the response body as they are read from the HTTP connection
    response.onChunk { chunk: ByteArray ->
        Log.d("Interceptor", "onResponse - onChunk: ${chunk.size}")
        delay(100)
        chunk
    }

    // Read the complete response body
    response.onBody { body: ByteArray ->
        Log.d("Interceptor", "onResponse - onBody: ${body.size}")

        // Read response body
        val string = body.decodeToString()
        val json = JSONObject(string)

        // Perform another async computation
        delay(1000) // simulating an async call

        // Replace response body
        "new response body".toByteArray()
    }
}
```
