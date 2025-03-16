---
title: "Getting Started with Subscribing"
id: ios-getting-started-with-subscribing
---
Follow these steps to add the subscribing capability to your application.

## 1\. Import the SDK

```swift
import MillicastSDK
```

## 2\. Configure the audio session for playback.

```swift
let session = AVAudioSession.sharedInstance()
try session.setCategory(
    .playback,
    mode: .videoChat,
    options: [.mixWithOthers, .allowBluetooth, .allowBluetoothA2DP]
)
try session.setActive(true)
```

## 3\. Create a subscriber

Create a subscriber of type [MCSubscriber](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber).

```swift
let subscriber = MCSubscriber()
```

Optionally implement the [MCSubscriberDelegate](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriberdelegate) to receive callbacks. Set this delegate during the initialization of [MCSubscriber](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber). Ensure to keep the delegate alive throughout the lifetime of the subscriber, since it does not retain its reference.

```swift
let subscriberDelegate = YourSubscriberDelegate() // where the `YourSubscriberDelegate` is a type that you implement, that conforms to `MCSubscriberDelegate` 
let subscriber = MCSubscriber(delegate: subscriberDelegate)
```

## 4\. Setup your credentials

Get your **stream name** and **stream ID** from the dashboard and set them up in the SDK using the [setCredentials](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber/setcredentials(_:completionhandler:)>) method.

```swift
let credentials = MCSubscriberCredentials()
credentials.streamName =  "STREAM_NAME"; // The name of the stream you want to subscribe to
credentials.accountId = "ACCOUNT_ID"; // The ID of your Dolby.io Real-time Streaming account
credentials.apiUrl = "https://director.millicast.com/api/director/subscribe"; // The subscribe API URL

try await subscriber.setCredentials(credentials)
```

## 5\. Subscribe to a stream

Subscribing a stream includes two steps.

### 5.1\. Connect to the Millicast service

Define your connection preferences and [connect](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcclient/connect(completionhandler:)>) to the Millicast platform.

```swift
let connectionOptions = MCConnectionOptions()
// Set to `true` if you would like the SDK to reconnect to stream on a connection error; for example - when the network is lost and later restored.
connectionOptions.autoReconnect = true

try await subscriber.connect(with: connectionOptions)
```

### 5.2\. Subscribe with the preferences

Call the [subscribe(with:)](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber/subscribe(completionhandler:)>) method passing your preferred subscribe options.

```swift
let subscriberOptions = MCClientOptions()
// The main source that will be received by the default media stream
subscriberOptions.pinnedSourceId = "MySource";
// Enables audio multiplexing and denotes the number of audio tracks to receive
// as Voice Activity Detection (VAD) multiplexed audio
subscriberOptions.multiplexedAudioTrack = 3;
// Audio streams that should not be included in the multiplex, for
// example your own audio stream
subscriberOptions.excludedSourceId = [ "excluded" ]
// Delay in milliseconds to configure how frequently would you like to receive the
// stream statistics
subscriberOptions.statsDelayMs = 5000

try await subscriber.subscribe(with: subscriberOptions)
```

Refer [MCClientOptions](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcclientoptions) for more subscriber options.

## 6\. Manage broadcast events

When broadcast events occur, the SDK emits the appropriate event. There are multiple ways to receive those events, using AsyncStream's or by subscribing to Combine Publisher's. Those events can also be received by conforming to [MCSubscriberDelegate](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriberdelegate) delegate methods.
Note: This listener has to be setup before calling the [subscribe(with:)](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber/subscribe(completionhandler:)>) method.

### 6.1\. Receive Audio and Video tracks

[MCRTSRemoteTrack](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcrtsremotetrack) is a fundamental entity that enables us to view a stream. It can either be a video track or an audio track.

Receive newly added tracks by listening to subscriber's [rtsRemoteTrackAdded()](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber/rtsremotetrackadded()>) stream.
Newly added tracks can alternatively be received using [rtsRemoteTrackAddedPublisher](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber/rtsremotetrackaddedpublisher) or the delegate method [subscriber(_:didReceiveRTSRemoteTrack:)](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriberdelegate/subscriber(_:didreceivertsremotetrack:)>)

Define variables to store the tracks and renderers.
Important: Audio and Video tracks of the same source will have the same [sourceId](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcrtsremotetrack/sourceid)

```swift
// `sourceIdToVideoTrackDictionary` is used to retain the video tracks returned by the SDK. This helps setup listeners on track or to enable/disable tracks at a later point in time.
var sourceIdToVideoTrackDictionary: [String: MCRTSRemoteVideoTrack] = [:]

// `sourceIdToAudioTrackDictionary` is used to retain the audio tracks returned by the SDK. This helps setup listeners on track or to enable/disable tracks at a later point in time.
var sourceIdToAudioTrackDictionary: [String: MCRTSRemoteAudioTrack] = [:]

// `sourceIdToRendererDictionary` is used to retain renderer used to enable a video track. The renderers can later be used to display video views on the user interface.
var sourceIdToRendererDictionary: [String: MCRTSRemoteAudioTrack] = [:]
```

Setup listeners to receive audio and video tracks.

```swift
for await track in subscriber.rtsRemoteTrackAdded() {
  if let videoTrack = track.asVideo() {
    // Each video track has a one to one relationship to each renderer.
    // Multiview scenarios require instantiating multiple renderers, one for each track.
    let renderer = MCCMSampleBufferVideoRenderer()
    try await videoTrack.enable(renderer: renderer)
    // Save the renderer and video track
    sourceIdToRendererDictionary[videoTrack.sourceId] = renderer
    sourceIdToVideoTrackDictionary[videoTrack.sourceId] = videoTrack
  } else if let audioTrack = track.asAudio() {
    // Enable an audio track.
    try await audioTrack.enable()
    sourceIdToVideoTrackDictionary[audioTrack.sourceId] = audioTrack
  }
}
```

(or)

Using the combine publisher:

```swift
subscriber.rtsRemoteTrackAddedPublisher
  .sink { track in
    Task {
      if let videoTrack = track.asVideo() {
        // Each video track has a one to one relationship to each renderer.
        // Multiview scenarios require instantiating multiple renderers, one for each track.
        let renderer = MCCMSampleBufferVideoRenderer()
        try await videoTrack.enable(renderer: renderer)
        // Save the renderer and video track
        sourceIdToRendererDictionary[videoTrack.sourceId] = renderer
        sourceIdToVideoTrackDictionary[videoTrack.sourceId] = videoTrack
      } else if let audioTrack = track.asAudio() {
        // Enable an audio track.
        try await audioTrack.enable()
        sourceIdToAudioTrackDictionary[audioTrack.sourceId] = audioTrack
      }
    }
  }
```

### 6.2\. Listen to active/inactive state of tracks

Listen to the active and inactive state of a [MCRTSRemoteTrack](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcrtsremotetrack) using [activity()](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcrtsremotetrack/activity()>) stream.
Alternatively receive this event using the combine publisher [activityPublisher()](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcrtsremotetrack/activitypublisher()>)

If you prefer delegates, conform to [MCRTSRemoteTrackDelegate] of a MCRTSRemoteTrack and the use the delegate methods [rtsRemoteTrackActive(\_:)](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcrtsremotetrackdelegate/rtsremotetrackactive(_:)>) and [rtsRemoteTrackInactive(\_:)](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcrtsremotetrackdelegate/rtsremotetrackinactive(_:)>).

Note: A video track receives video frames only when its enabled.

```swift
for await activity in videoTrack.activity() {
  switch activity {
  case .inactive:
    // Optional.
    // The SDK automatically restores the state of the track when it transitions to `active` from an `inactive` state.
    // You can optionally disable the video track when it becomes inactive. This step is optional. This gives you control on when to enable the track when it comes back active.
    try await videoTrack.disable()

  case .active:
    // Optional.
    // If you choose to disable a track when it became inactive, you have to enable the video track back after it is active again.
    // At any point in time when you wish to start receive video from the track, call -
    try await videoTrack.enable(renderer: renderer)
  }
}
```

Similarly you can listen to active/inactive events of an audio track as below.
Note: An audio track plays audio only when its enabled.

```swift
for await activity in audioTrack.activity() {
  switch activity {
  case .inactive:
    // Optional.
    // The SDK automatically restores the state of the track when it transitions to `active` from an `inactive` state. You can optionally disable the audio track when it becomes inactive, so that the responsibility is on you to enable the track when it becomes active.
    try await audioTrack.disable()

  case .active:
    // Optional.
    // At any point in time where you wish to play audio from the track, call -
    try await audioTrack.enable()
  }
}
```

### 6.3\. Receive layer information

If your video track has multiple layers(spatial or temporal), use the [layers()](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcrtsremotetrack/layers()>) event to receive the list of active layers. The combine alternative for this event is [layersPublisher()](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcrtsremotetrack/layerspublisher()>)

To receive layers from a delegate method, conform to [MCRTSRemoteTrackDelegate], set the delegate of an MCRTSRemoteTrack and then use the delegate method [rtsRemoteTrack(_:didUpdateLayers:)](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcrtsremotetrackdelegate/rtsremotetrack(_:didupdatelayers:)>).

To select a particular layer, re-enable the track by passing the layer that you would like to select.

```swift
for await layerEvent in videoTrack.layers() {
    // If your application requires to select a specific layer based on an application logic -
    // Re-enable the track by passing in the layer that you want to select from the list.
    let selectedLayer = layerEvent.layers[0]
    try await videoTrack.enable(renderer: renderer, layer: selectedLayer)
}
```

## 7\. Listen to Websocket and Peer connection state changes

To monitor the state of the websocket connection of the subscriber, use the [websocketState()](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber/websocketstate()>)

List of possible states are defined in the enum [MCConnectionState](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcconnectionstate)

```swift
for await state in subscriber.websocketState() {
  // Log or handle the state change
}
```

To check whether you are subscribed successfully to a stream or to listen to other states of a subscription; use [peerConnectionState()](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber/peerconnectionstate()>)

```swift
for await state in subscriber.peerConnectionState() {
  // Log or handle the state change
}
```

The delegate method equivalents of these events are defined in [MCDelegate](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate)

See [client(\_:didReceiveRTCPeerConnectionState:)](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivertcpeerconnectionstate:)>) and [client(\_:didReceiveWebsocketConnectionState:)](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivewebsocketconnectionstate:)>)

## 8\. Render video on the UI

The SDK provides SwiftUI Views for rendering a video track. Use [MCVideoSwiftUIView](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcvideoswiftuiview) as in the example below:

```swift
struct VideoView: View {
  private let renderer: MCCMSampleBufferVideoRenderer

  // Important: The renderer passed in for display should be the one that is used to enable a video track.
  init(renderer: MCCMSampleBufferVideoRenderer) {
    self.renderer = renderer
  }

  var body: some View {
    MCVideoSwiftUIView(renderer: .sampleBuffer(renderer))
  }
}
```

If your application uses UIKit; use [MCAcceleratedVideoUIView](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcacceleratedvideouiview) or [MCSampleBufferVideoUIView](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsamplebuffervideouiview)

```swift
let renderer = MCAcceleratedVideoRenderer()
let videoView = MCAcceleratedVideoUIView(frame: view.bounds, renderer: renderer)
view.addSubview(videoView)
```

## 9\. Collecting RTC statistics

You can periodically collect the WebRTC peer connection statistics if you enable them through the [enableStats](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcclient/enablestats(_:completionhandler:)>) method of the subscriber. After enabling the statistics, you will get a report every second through the [statsReport()](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber/statsreport()>) async stream or the [statsReportPublisher](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber/statsreportpublisher) publisher.

Alternatively use the delegate method[client(_:didreceivestatsreport:)](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivestatsreport:)>)

The identifiers and way to browse the stats are following the [RTC specification](https://www.w3.org/TR/webrtc-stats/).
The report contains the [MCStatsReport](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcstatsreport) object, which is a collection of several [MCStats](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcstats) objects. They all have a specific type, whether it is inbound, outbound, codec, or media. Inbound is the statistics of incoming transport for the viewer and outbound is a type of outgoing statistics for the publisher.

```swift
await subscriber.enableStats(true)

for await statsReport in subscriber.statsReport() {
    // Parse the stats report for logging or display on to the user interface
}
```

## 10\. Error handling

To listen to the http errors emitted by the subscriber instance, use the [httpError()](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber/httperror()>) or it's equivalent combine publisher - [httpErrorPublisher()](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber/httperrorpublisher()>)

The emitted error will be of type [MCHttpConnectionError](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mchttpconnectionerror)

```swift
for await error in subscriber.httpError() {
  // Handle http error
}
```

(or)

Using the combine publisher:

```swift
subscriber.httpErrorPublisher()
  .sink { error in
      // Handle http error
  }
```

To listen to the signalling errors emitted by the subscriber or publisher instance, use the [signalingError()](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber/signalingerror()>) or it's equivalent combine publisher - [signalingErrorPublisher()](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber/signalingerrorpublisher()>)

The emitted error will be of type [MCSignalingError](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsignalingerror)

```swift
for await error in subscriber.signalingError() {
  // Handle signalling error
}
```

(or)

Using the combine publisher:

```swift
subscriber.signalingErrorPublisher()
  .sink { error in
  // Handle signalling error
  }
```

The delegate methods to receive http and signalling errors are [client(_:didreceivehttpconnectionerror:)](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivehttpconnectionerror:)>) and [client(_:didreceivesignalingerror:)](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivesignalingerror:)>)

## 11\. Unsubscribe the session

And finally, when you have finished viewing the stream, stop the subscription by calling [unsubscribe()](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsubscriber/unsubscribe(completionhandler:)>) which tell the streaming server that the subscriber is no longer interested in receiving audio and video content. Then disconnect the websocket connection with the server by calling [disconnect()](/millicast/<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcclient/disconnect(completionhandler:)>) method.

```swift
try await subscriber.unsubscribe()
try await subscriber.disconnect()

// Clear the stored tracks and renderers
sourceIdToVideoTrackDictionary.removeAll()
sourceIdToAudioTrackDictionary.removeAll()
sourceIdToRendererDictionary.removeAll()
```
