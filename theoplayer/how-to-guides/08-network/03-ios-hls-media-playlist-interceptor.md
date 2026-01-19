# iOS HLS Media Playlist Interceptor

THEOplayer iOS SDK makes a number of network requests and receives responses while playing video. These requests and responses can be intercepted to make a new or modified request, or respond with a new response to the HLS playlist requests.

This guide explains how you set up THEOplayer iOS SDK to add and remove request/response interceptors.

We will use a simple UIKit UIViewController for this guide.

## Set up THEOplayer

```swift
class ViewController: UIViewController {
    private var player: THEOplayer?

    override func viewDidLoad() {
        super.viewDidLoad()
        let player = THEOplayer()
        self.player = player
        player.frame = view.bounds
        player.addAsSubview(of: self.view)
        player.network.addMediaPlaylistInterceptor(self)
    }
}
```

## Intercepting the requests and/or responses

Use the `type` parameter on each method below to filter for HLS playlist types ie. master, video, subtitles, etc...
The rest of the usage is explained in comments in the code snippet below.

```swift
extension ViewController: MediaPlaylistInterceptor {
    // For modifications that you would make to the request, ie. add custom headers, query parameters, etc...
    func shouldInterceptPlaylistRequest(type: THEOplayerSDK.HlsPlaylistType) -> Bool { true }

    // For modifications that you would make to the response, ie. edit the m3u8 file content, vtt file content etc...
    func shouldInterceptPlaylistResponse(type: THEOplayerSDK.HlsPlaylistType) -> Bool { true }

    // Will be called if shouldInterceptPlaylistRequest returns true
    func didInterceptPlaylistRequest(type: THEOplayerSDK.HlsPlaylistType, request: URLRequest) async throws -> URLRequest {
        var modifiedRequest = request
        // modify
        // ...
        //...
        return modifiedRequest
    }

    // Will be called if shouldInterceptPlaylistResponse returns true
    func didInterceptPlaylistResponse(type: THEOplayerSDK.HlsPlaylistType, url: URL, response: URLResponse, data: Data) async throws -> Data {
        var modifiedResponseData = ""
        // customize the data string that you would like to return, should be a valid HLS playlist file
        // ...
        // ...
        let customDataResponse = modifiedResponseData.data(using: .utf8)
        return customDataResponse ?? data // `customDataResponse` is empty so playback will fail in this demo; return `data` to play
    }

    // Handle failure.
    func failedToPerformURLRequest(request: URLRequest, response: URLResponse) {}
}
```

## DRM request interception

The `MediaPlaylistInterceptor` API does not intercept DRM requests. To interecept fairplay DRM requests, take a look at the following solution: https://github.com/THEOplayer/samples-drm-integration/blob/master/ios/README.md
