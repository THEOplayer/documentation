---
title: "Migration Guide for iOS SDK"
id: ios-sdk-migration-guide
---
This migration guide provides some tips for upgrading or downgrading between releases of the iOS SDK.

<GettingStartedIOS />

# 1.8.x to 2.x

Below you'll find examples for migrating your applications from [v1.8.9](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.8.9) to [v2.0.0](https://github.com/millicast/millicast-native-sdk/releases/tag/v2.0.0) of the [iOS](/millicast/client-sdks/ios/index.md) SDK.

> **_NOTE:_** Publisher classes remain unchanged and do not require any migration.

## Subscribing Single Source Streams

For applications that only have a single source available for playback, track management has changed.

```swift 1.8.x
let subscriber = MCSubscriber()

var receivedVideoTrack: MCVideoTrack?

Task {
    for await track in subscriber.tracks() {
        switch track {
        case .audio(track: let audioTrack, mid: _):
            audioTrack.enable(true)
        case .video(track: let videoTrack, mid: _):
            videoTrack.enable(true)
            receivedVideoTrack = videoTrack // Use the received video track for rendering on the UI
        }
    }
}

let credentials = MCSubscriberCredentials()
credentials.streamName =  "STREAM_NAME";
credentials.accountId = "ACCOUNT_ID";
credentials.apiUrl = "https://director.millicast.com/api/director/subscribe";

try await subscriber.setCredentials(credentials)
try await subscriber.connect()
try await subscriber.subscribe()

// For displaying on the SwiftUI view
MCVideoSwiftUIView(videoTrack: receivedVideoTrack)
```
```swift 2.x
let subscriber = MCSubscriber()
let renderer = MCAcceleratedVideoRenderer()

Task {
    for await track in subscriber.rtsRemoteTrackAdded() {
        if let videoTrack = track.asVideo() {
            try await videoTrack.enable(renderer: renderer) // Use the renderer for displaying video views on the UI
        } else if let audioTrack = track.asAudio() {
            try await audioTrack.enable()
        }
    }
}

let credentials = MCSubscriberCredentials()
credentials.streamName =  "STREAM_NAME";
credentials.accountId = "ACCOUNT_ID";
credentials.apiUrl = "https://director.millicast.com/api/director/subscribe";

try await subscriber.setCredentials(credentials)
try await subscriber.connect()
try await subscriber.subscribe()

// For displaying on the SwiftUI view
MCVideoSwiftUIView(renderer: renderer)
```

## Subscribing Multi-View Streams

There were a lot of complicated steps involved in projecting the sources for a multi-stream view. This complex workflow requires a lot of understanding of the WebRTC remote tracks. Using the new 2.0.0 implementation removes the need to handle sourceIds, mids and the projection data directly. This solves a lot of complexities from the old implementation.

```swift 1.8.x
let subscriber = MCSubscriber()

// Managing tracks
var projectedVideoTracks: [String: MCVideoTrack] = [:]
var projectedAudioTracks: [String: MCAudioTrack] = [:]
var activeProjectionRequestsForVideo: [String] = []
var activeProjectionRequestsForAudio: [String] = []

Task {
    for await activity in subscriber.activity() {
        switch activity {
        case .active(let streamId, let tracks, let sourceId):
            // Check if the track is already projected
            // if not, we add a remote track to accept it
            if tracks.contains("video"), projectedVideoTracks[sourceId] == nil {
                // This will add the track which will later be received by the task below
                activeProjectionRequestsForVideo.append(sourceId)
                await subscriber.addRemoteTrack("video");
                return
            } else if tracks.contains("audio"), projectedAudioTracks[sourceId] == nil {
                activeProjectionRequestsForAudio.append(sourceId)
                await subscriber.addRemoteTrack("audio");
                return
            }

            // if video or audio track already exists, just reproject the track
            var projectionRequests : [MCProjectionData] = []
            if projectedVideoTracks[sourceId] != nil {
                projectionRequests.append(createProjectionInfoWithTrack(projectedVideoTracks[sourceId]))
            }
            if projectedAudioTracks[sourceId] != nil, shouldProjectAudioTrack(for: sourceId) {
                projectionRequests.append(createProjectionInfoWithTrack(projectedAudioTracks[sourceId]))
            }
            if (projectionRequests.count > 0) {
                await subscriber.project(sourceId, projectionRequests)
            }
        case .inactive(let streamId, let sourceId):
            await subscriber.unproject([projectedVideoTracks[sourceId]!.mid, projectedAudioTracks[sourceId]!.mid])
        }
    }
}

Task {
    for await track in subscriber.tracks() {
        switch track {
        case .video(let videoTrack, _):
          videoTrack.enable(true)
          // We actually have to somehow know which source ID was requested
          // to be projected. Since we don't know, we have to cache that information
          // since the SDK returns the track here rather than when calling addRemoteTrack
          if let sourceId = activeProjectionRequestsForVideo.popFirst() {
            await subscriber.project(sourceId, createProjectionInfoWithTrack(videoTrack))
            projectedVideoTracks[sourceId] = videoTrack
          }
          // Use `projectedVideoTracks` for display in SwiftUIView

        case .audio(let audioTrack, _):
          audioTrack.enable(true)
          if let sourceId = activeProjectionRequestsForAudio.popFirst(), shouldProjectAudioTrack(for: sourceId) {
            await subscriber.project(sourceId, createProjectionInfoWithTrack(audioTrack))
            projectedAudioTracks[sourceId] = audioTrack
          }
        }
    }
}

let credentials = MCSubscriberCredentials()
credentials.streamName =  "STREAM_NAME";
credentials.accountId = "ACCOUNT_ID";
credentials.apiUrl = "https://director.millicast.com/api/director/subscribe";

try await subscriber.setCredentials(credentials)
try await subscriber.connect()
try await subscriber.subscribe()

// For displaying on the SwiftUI view
ForEach(projectedVideoTracks.values) { videoTrack in
    MCVideoSwiftUIView(videoTrack: videoTrack)
}
```
```swift 2.x
var videoRenderers: [String: MCCMSampleBufferVideoRenderer] = [:]

Task {
    for await track in subscriber.rtsRemoteTrackAdded() {
        if let videoTrack = track.asVideo() {
            let renderer = MCCMSampleBufferVideoRenderer()
            try await videoTrack.enable(renderer: renderer) // Use the renderer for displaying video views on the UI
            videoRenderers[videoTrack.sourceId] = renderer
            listenActivityEvent(for: videoTrack, renderer: renderer)
        } else if let audioTrack = track.asAudio(), shouldProjectAudioTrack(for: audioTrack.sourceId) {
            try await audioTrack.enable()
            listenActivityEvent(for: audioTrack)
        }
    }
}

func listenActivityEvent(for track: MCRTSRemoteVideoTrack, renderer: MCCMSampleBufferVideoRenderer) {
    Task {
        for await activity in track.activity() {
            switch activity {
            case .inactive:
                try await track.disable()
                videoRenderers[videoTrack.sourceId] = nil

            case .active:
                try await track.enable(renderer: renderer)
                videoRenderers[videoTrack.sourceId] = renderer
            }
        }
    }
}

func listenActivityEvent(for track: MCRTSRemoteAudioTrack) {
    Task {
        for await activity in track.activity() {
            switch activity {
            case .inactive:
                try await track.disable()
            case .active:
                try await track.enable()
            }
        }
    }
}

let credentials = MCSubscriberCredentials()
credentials.streamName =  "STREAM_NAME";
credentials.accountId = "ACCOUNT_ID";
credentials.apiUrl = "https://director.millicast.com/api/director/subscribe";

try await subscriber.setCredentials(credentials)
try await subscriber.connect()
try await subscriber.subscribe()

// For displaying on the SwiftUI view
ForEach(videoRenderers.values) { renderer in
    MCVideoSwiftUIView(renderer: renderer)
}
```

### Some key differences in track management

1.8.x 2.x Track event emitted is of type TrackEvent which has two types .audio(track: MCAudioTrack, mid: String) and .video(track: MCVideoTrack, mid: String) Track event emits MCRTTSRemoteTrack. This new track type can be a video or audio track, using asVideo() you can verify if it's a video track. Use asAudio() to check if the track is an audio track. Enabling(projecting) tracks is a multistep process - Subscribe to activity() async stream to receive active and inactive sourceId's - Request tracks by calling the addRemoteTrack(:) function - Receive tracks using tracks() async stream - Project mid's using the project(:) API by passing in the MCProjectionData Enabling tracks is now easy - Receive tracks using the rtsRemoteTrackAdded() async stream API - Enable track by calling the enable() for an audio track or enable(renderer:) API for a video track Disable(unproject) tracks using the unproject(:) function Disable tracks using the disable() function layers() async stream is part of MCSubscriber layers() async stream is now part of MCRTSRemoteTrack To select a layer create a new MCProjectionData, set the appropriate layerData and then call project(:) To select a layer call the enable(:) function and pass the MCRTSRemoteVideoTrackLayer to select Activity async stream was part of the MCSubscriber. inactive() event for a particular sourceId indicates the tracks associated with that sourceId are now inactive and active(:) event represents the tracks associated with the sourceId in the event is now active Activity async stream is now part of the MCRTSRemoteTrack. There are two possible values .active and .inactive No APIs to query video and audio tracks You can query video and audio tracks using subscriber.videoTracks() and subscriber.audioTracks()



## Initialising Video Views

Initialising a video view for display on the UI has also changed:

```swift 1.8.x
// Using SwiftUI
MCVideoSwiftUIView(videoTrack: videoTrack)

// Using UIKit
let pipView = MCSampleBufferVideoUIView()
pipView.scalingMode = .aspectFit
pipView.attach(videoTrack: videoTrack, mirrored: false)

// Note: Where `videoTrack` is the instance of MCVideoTrack received
```
```swift 2.x
// Using SwiftUI
MCVideoSwiftUIView(renderer: renderer)

// Using UIKit
let videoView = MCSampleBufferVideoUIView(frame: .zero, renderer: renderer)

// Note: Where `renderer` is the instance of MCCMSampleBufferVideoRenderer or MCAccelaratedVideoRenderer used to enable the video track
```

## Querying Video Size and Notifying Video Size changes

[MCSampleBufferVideoUIView](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsamplebuffervideouiview) or [MCAcceleratedVideoUIView](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcacceleratedvideouiview) has properties to query for [videoSize](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsamplebuffervideouiview/videosize) and notifies any changes via [MCVideoViewDelegate](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcvideoviewdelegate).

These API provide an easy way of querying the videoSize. For example this can be used to set the [preferredContentSize](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621476-preferredcontentsize) in a Picture In Picture presentation.

```swift 1.8.x
let renderer = MCIosVideoRenderer()
videoTrack.add(renderer)

// Get the video size at any given time using the getWidth() and getHeight() APIs
// Note: There is no API to receive video size changes.
let videoSize = CGSizeMake(width: renderer.getWidth(), height: renderer.getHeight())
```
```swift 2.x
let videoSize = videoView.videoSize

// In UIKit: listen to the video size changes by conforming to `MCVideoViewDelegate`
extension MyView: MCVideoViewDelegate {
    func didChangeVideoSize(_ size: CGSize) {
        videoSize = size
    }
}

// In SwiftUI: use the [onVideoSizeChange](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcvideoswiftuiview/onvideosizechange(_:)) view modifier
MCVideoSwiftUIView(renderer: renderer)
    .onVideoSizeChange {
        videoSize = $0
    }
```

## Changelog Overview

Please refer to the changelog for [What's new in 2.0.0 SDK Release](https://github.com/millicast/millicast-native-sdk/releases/tag/v2.0.0)
