---
title: Getting Started with Publishing
---

Follow these steps to add the publishing capability to your application.

## 1\. Capture audio and video

Import `MillicastSDK`, get an array of available audio and video sources, and choose the preferred sources from the list. When you start capturing audio and video, the SDK will return an audio and video track.

```swift
import MillicastSDK

// Configure the audio session for capturing
let session = AVAudioSession.sharedInstance()
try session.setCategory(
    .playAndRecord,
    mode: .videoChat,
    options: [.mixWithOthers, .allowBluetooth, .allowBluetoothA2DP]
)
try session.setActive(true)

// Create an audio track
var audioTrack : MCAudioTrack? = nil
if
    let audioSources = MCMedia.getAudioSources(), // Get an array of audio sources
    !audioSources.isEmpty // There is at least one audio source
{
    // Choose the preferred audio source and start capturing
    let audioSource = audioSources[0]
    audioTrack = audioSource.startCapture() as? MCAudioTrack
}

// Create a video track
var videoTrack : MCVideoTrack? = nil
if
    let videoSources = MCMedia.getVideoSources(), // Get an array of available video sources
    !videoSources.isEmpty // There is at least one video source
{
    // Choose the preferred video source
    let videoSource = videoSources[0];

    // Get capabilities of the available video sources, such as
    // width, height, and frame rate of the video sources
    guard let capabilities = videoSource.getCapabilities() else {
        fatalError("No capability is available!") // In production replace with a throw
    }

    let capability = capabilities[0]; // Get the first capability
    videoSource.setCapability(capability);

    // Start video recording and create a video track
    videoTrack = videoSource.startCapture() as? MCVideoTrack
}
```

## 2\. Publish a stream

### 2.1 Instantiate a publisher

Create a publisher object of type [MCPublisher](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher).

```swift
let publisher = MCPublisher()
```

You can optionally implement the [MCPublisherDelegate](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisherdelegate) to receive callbacks:

You can set this delegate during the initialization of [MCPublisher](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher) instead. Ensure to keep the delegate alive throughout the lifetime of the publisher.

```swift
let publisherDelegate = YourPublisherDelegate() // where the `YourPublisherDelegate` is a type that you implement, that conforms to `MCPublisherDelegate`
let publisher = MCPublisher(delegate: publisherDelegate)
```

### 2.2 Set publisher credentials

Create a stream in your Dolby.io developer dashboard or using the Dolby.io Streaming REST API. Then, set the credentials from the dashboard. All of the [MCPublisher](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher) APIs are asynchronous, so call them from asynchronous contexts.

```swift
// Get the credentials structure from your publisher instance, fill it in,
// and set the modified credentials
let credentials = MCPublisherCredentials()
credentials.streamName = "streamName"; // The name of the stream you want to publish
credentials.token = "aefea56153765316754fe"; // The publishing token
credentials.apiUrl
    = "https://director.millicast.com/api/director/publish"; // The publish API URL

do {
  try await publisher.setCredentials(credentials);
} catch MCGenericError.noCredentials {
  // You have provided incomplete credentials
  // such as an empty streamName, token, or url
}
```

### 2.3 Add video and audio tracks to the publisher

To publish media, add to the publisher the tracks that you have captured earlier.

```swift
await publisher.addTrack(with: audioTrack)
await publisher.addTrack(with: videoTrack)
```

### 2.4 Configure publishing options

Configure publishing options in the publisher, such as selecting the audio and video codecs or enabling multi-source on the publisher.

```swift
let publisherOptions = MCClientOptions()

// Get a list of supported codecs
if let audioCodecs = MCMedia.getSupportedAudioCodecs() {
    // Choose the preferred audio codec
    publisherOptions.audioCodec = audioCodecs[0]

} else {
    print("No audio codecs available!") // In production, replace it with proper error handling
}

if let videoCodecs = MCMedia.getSupportedVideoCodecs() {
    // Choose the preferred video codec
    publisherOptions.videoCodec = videoCodecs[0]

} else {
    print("No video codecs available!") // In production, replace it with proper error handling
}

// To use multi-source, set a source ID of the publisher and
// enable discontinuous transmission
publisherOptions.sourceId = "MySource"
publisherOptions.dtx = true

// Enable stereo
publisherOptions.stereo = true
```

### 2.5 Publish your stream

Connect to the Millicast service and publish your streams.

```swift
do {
  try await publisher.connect()
  // using publisherOptions from step 2.4
  try await publisher.publish(with: publisherOptions)
} catch MCGenericError.restAPIError {
  // Handle invalid credentials passed to the publisher
}
```

## 3\. Observe state changes

There are different publishers that emit events informing you of the state of your stream. Please note, the listeners should be setup before you start publishing so you receive all the events from a publisher.

### 3.1 Connection state to the Millicast service

To monitor the state of the websocket connection of the publisher, use the [websocketState()](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/websocketstate). This informs you are connected to the Millicast service or when you are disconnected.

To see the list of possible states refer: [MCConnectionState](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcconnectionstate)

```swift
for await state in publisher.websocketState() {
  // Log or handle the state change
}
```

You can also receive other events on the publisher, like [viewer activity](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/activity) and [viewer count](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/viewercount):

The delegate equivalent for this event is defined in [client(\_:didreceivewebsocketconnectionstate:)](<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivewebsocketconnectionstate:)>)

### 3.2 Publishing state

To monitor the state of the publishing, listen to the events emitted by [peerConnectionState()](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/peerconnectionstate)

```swift
for await state in publisher.peerConnectionState() {
  // Log or handle the state change
}
```

The delegate equivalent for this event is defined in [client(\_:didreceivertcpeerconnectionstate:)](<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivertcpeerconnectionstate:)>)

### 3.3 Viewers of your stream

Listen to the viewer activity events of your stream using [activity()](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/activity) or the combine publisher [activityPublisher](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/activitypublisher).
This event can also be listen from the [publisherDidReceiveFirstViewerActive(\_:)](<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisherdelegate/publisherdidreceivefirstvieweractive(_:)>) and [publisherDidReceiveLastViewerInactive(\_:)](<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisherdelegate/publisherdidreceivelastviewerinactive(_:)>) delegate methods defined in [MCPublisherDelegate](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisherdelegate)

```swift
for await activity in publisher.activity() {
  case .inactive:
    // TODO: Received when the last viewer of your stream goes inactive
    break
  case .active:
    // TODO: Received when the first viewer starts viewing your stream
    break
}
```

Number of viewers viewing your stream in a given time is yet another vital aspect for you as a publisher. To listen to viewer count updates, use [viewerCount()](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/viewercount)

```swift
for await viewerCount in publisher.viewerCount() {
  // use the `viewerCount` for displaying on the UI
}
```

The Combine Publisher for this event is [viewercountpublisher](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/viewercountpublisher) and the delegate equivalent is [client(\_:didreceiveviewercount:)](<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceiveviewercount:)>)

## 4\. Collect WebRTC statistics

Set the [enableStats](<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcclient/enablestats(_:completionhandler:)>) method to true to collect statistics.

WebRTC peer connection statistics can be periodically collected by enabling them through the [enableStats](<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcclient/enablestats(_:completionhandler:)>) method of the publisher. After enabling the statistics, you will get a report every second or at the preset frequency you scheduled through the [statsReport()](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/statsreport) async stream or the [statsReportPublisher](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/statsreportpublisher) publisher.

Alternatively use the delegate method[client(\_:didreceivestatsreport:)](<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivestatsreport:)>)

The identifiers and way to browse the stats are following the [RTC specification](https://www.w3.org/TR/webrtc-stats/).
The report contains the [MCStatsReport](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcstatsreport) object, which is a collection of several [MCStats](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcstats) objects. They all have a specific type, whether it is inbound, outbound, codec, or media. Inbound is the statistics of incoming transport for the viewer and outbound is a type of outgoing statistics for the publisher.

```swift
await publisher.enableStats(true)

for await statsReport in publisher.statsReport() {
    // Parse the stats report for logging or display on to the user interface
}
```

## 5\. Disable automatic reconnection

By default, the publisher and subscriber attempt to reconnect automatically in case of network errors. To disable auto reconnection in connection options, use the following code:

```swift
let connectionOptions = MCConnectionOptions()
connectionOptions.autoReconnect = false

do {
  try await publisher.connect(with: connectionOptions)
} catch error {
  //...
}
```

In the case of network issues when auto reconnection is enabled, the connect method does not return as long as there is no network connection. You can abort the method at any time using the following code:

```swift
Task {
  for await state in publisher.state() {
    if case .connectionError(let status, let reason) = state {
      try await publisher.disconnect()
    }
  }
}

do {
  try await publisher.connect(with: connectionOptions)
} catch MCAsyncOperationCancelledError.aborted {
  // The operation has been aborted by the disconnect call above
}
```

## 6\. Error handling

To listen to the http errors emitted by the publisher, use the [httpError()](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/httperror) or it's equivalent combine publisher - [httpErrorPublisher()](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/httperrorpublisher)

The emitted error will be of type [MCHttpConnectionError](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mchttpconnectionerror)

```swift
for await error in publisher.httpError() {
  // Handle http error
}
```

(or)

Using the combine publisher:

```swift
publisher.httpErrorPublisher()
  .sink { error in
      // Handle http error
  }
```

To listen to the signalling errors emitted by the publisher, use the [signalingError()](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/signalingerror) or it's equivalent combine publisher - [signalingErrorPublisher()](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/signalingerrorpublisher)

The emitted error will be of type [MCSignalingError](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsignalingerror)

```swift
for await error in publisher.signalingError() {
  // Handle signalling error
}
```

(or)

Using the combine publisher:

```swift
publisher.signalingErrorPublisher()
  .sink { error in
  // Handle signalling error
  }
```

The delegate methods to receive http and signalling errors are [client(\_:didReceiveHTTPConnectionError:)](<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivehttpconnectionerror:)>) and [client(\_:didReceiveSignalingError:)](<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivesignalingerror:)>)

## 7\. Stop publishing

When you finish publishing your content, stop the publishing by calling [unpublish()](<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/unpublish(completionhandler:)>) and clear the tracks [clearTracks()](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/cleartracks(completionhandler:). Then disconnect from the millicast server by calling [disconnect()](<https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcclient/disconnect(completionhandler:)>) method.

```swift
// Stop publishing your content
try await publisher.unpublish()

// Clears all tracks added to the publisher.
await publisher.clearTracks()

// Disconnect the millicast service
try await publisher.disconnect()
```
