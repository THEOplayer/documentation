Updates to the [Native SDK](https://github.com/millicast/millicast-native-sdk) for Android, iOS, macOS, Linux, and Windows applications.

> 📘 Release History
> 
> You can find the full history of previous releases with downloadable assets from the [millicast/millicast-native-sdk](https://github.com/millicast/millicast-native-sdk/releases) repository.

# 2024-08-21 | Native SDK [2.0.0](https://github.com/millicast/millicast-native-sdk/releases/tag/v2.0.0)

We've made some major changes including updates that greatly improve the experience of using the SDK but are no longer backward compatible. 

To help transition your applications  with these changes we've created migration guides that may be helpful: 

- [Migration Guide for iOS SDK](/millicast/client-sdks/ios/ios-sdk-migration-guide.md)
- [Migration Guide for Android SDK](/millicast/client-sdks/android/android-sdk-migration-guide.md)

## :new: Viewer and Track Management

Changing the APIs related to projecting sources on the subscriber. Now, subscribers  
do not need to manage WebRTC remote tracks, project sources and manage their state.  
Subscribers now receive a notion of a remote track, which can either be audio/video  
and manage their own state. These tracks can be enabled with a renderer/view, query  
the source they belong to, receive events such as Activity status (Inactive/Active),  
layers (for video), etc.

```kotlin Kotlin/Android
subscriber.onRemoteTrack.collect { track ->
    if (track is RemoteVideoTrack) {
        track.enableAsync(videoSink);
    }
}
```
```swift Swift/iOS
let subscriber = MCSubscriber()

// iOS views now take renderers in the initializer instead of tracks directly. Keep
// a reference to the renderer so that the renderer can be attached to tracks to receive media.
let renderer = MCAcceleratedVideoRenderer() // or MCCMSampleBufferVideoRenderer

Task {
  for await track in subscriber.rtsRemoteTrackAdded() {
    // Only use one renderer per video track.
    if let videoTrack = track.asVideo() {
      try await videoTrack.enable(renderer:renderer)
    }

    if let audioTrack = track.asAudio() {
      try await audioTrack.enable()
    }
  }
}
```
```cplusplus
std::vector<millicast::EventConnectionPtr> handlers;
handlers.push_back(viewer->add_event_handler(
      [](const millicast::Viewer::RtsTrackAdded& evt) {
        if (evt.track.as_video()) {
          evt.track.as_video()->enable(track_manager.add_renderer())
                         .on_result([]() {});
        } else {
          evt.track.as_audio->enable().on_result([]() { });
        }
      }));
```

To see these APIs in practice, refer to the subscriber sample app which is included in the package.

## :new: Asynchronous Model

The synchronous APIs have been fully removed on the publisher and subscriber. You can see this in action from the updated Getting Started guides.

Android / Kotlin

- [Getting Started with Subscribing](/millicast/client-sdks/android/android-getting-started-with-subscribing.md)
- [Getting Started with Publishing](/millicast/client-sdks/android/android-getting-started-with-publishing.md)

iOS / Swift

- [Getting Started with Subscribing](/millicast/client-sdks/ios/ios-getting-started-with-subscribing.md)
- [Getting Started with Publishing](/millicast/client-sdks/ios/ios-getting-started-with-publishing.md)

Desktop

- [Getting Started with Subscribing](/millicast/client-sdks/desktop/desktop-getting-started-with-subscribing.md)
- [Getting Started with Publishing](/millicast/client-sdks/desktop/desktop-getting-started-with-publishing.md)

## :new: Playout Delay

To better manage tradeoffs with latency and quality, you can use the `ForcePlayoutDelay` to set a **min** and **max** buffer size.

```cplusplus
  /**
   * @brief Structure describing playout delay to be enforced on the client.
   * https://webrtc.googlesource.com/src/+/refs/heads/main/docs/native-code/rtp-hdrext/playout-delay
   * Setting both of these values to 0,0 will ensure that there is no
   * playout delay added.
   */
  struct ForcePlayoutDelay {
    int min; /** The minimum playout delay desired. */
    int max; /** The maximum playout delay desired. */
  };

  /**
   * @brief The playout delay to enforce on the client side.
   */
  std::optional<ForcePlayoutDelay> force_playout_delay;
```

## 🆒 Logging and Stats

Improve logger so that when applications provide their own logging callback when using the set_logger function default logging to stderr will be disabled (unless force enabled by app):

```cplusplus
MILLICAST_API static void set_logger(
    std::function<void(const std::string& component,
                       const std::string& msg,
                       LogLevel)> f,
    std::vector<Logger::LogComponent>&& components,
    bool force_stderr_log = false);
```

The logger method's have been removed. Only a method to set the logger callback remains, which is the one which also takes the component being logged in the lambda

```cplusplus
class MCLoggerOSLog: NSObject, MCLoggerDelegate {
  func onLog(withMessage message: String, level: MCLogLevel) {
    switch(level) {
    case .LOG:
      Logger.sdk.info("\(message)")
      break
    case .DEBUG, .VERBOSE:
      Logger.sdk.debug("\(message)")
      break
    case .WARNING:
      Logger.sdk.warning("\(message)")
      break
    case .ERROR:
      Logger.sdk.error("\(message)")
      break
    case .OFF:
      break
    }
  }
}
```

Enrichments made to data that can be valuable for troubleshooting issues such as poor network conditions:

- Exposed stats information for: [freeze_count](https://www.w3.org/TR/webrtc-stats/#dom-rtcinboundrtpstreamstats-freezecount) , [pause_count](https://www.w3.org/TR/webrtc-stats/#dom-rtcinboundrtpstreamstats-pausecount), [total_freezes_duration](https://www.w3.org/TR/webrtc-stats/#dom-rtcinboundrtpstreamstats-totalfreezesduration) , and [total_pauses_duration](https://www.w3.org/TR/webrtc-stats/#dom-rtcinboundrtpstreamstats-totalpausesduration).
- For debugging and analytic purposes the Stats object now contains StreamDetails vartiant which holds either StreamViewDetails/StreamPublishDetails based on if you are viewing/publishing a stream.  
  The StreamViewDetails object contains strings describing stream ID, cluster ID, stream viewer ID, subscriber ID.  
  The StreamPublishDetails object contains strings describing stream ID, cluster ID, uuid, feed ID, publisher ID.

```kotlin Kotlin/Android
data class StreamPublishDetails(
    val publisherId: String,
    val clusterId: String,
    val streamId: String,
    val feedId: String,
    val uuid: String
) : StreamDetails()
data class StreamViewDetails(
    val subscriberId: String,
    val clusterId: String,
    val streamId: String,
    val streamViewId: String
) : StreamDetails()
```
```swift Swift/iOS
MILLICAST_API @interface MCStreamPublishDetails: NSObject
@property(nonatomic, copy) NSString * publisherId;
@property(nonatomic, copy) NSString * clusterId;
@property(nonatomic, copy) NSString * streamId;
@property(nonatomic, copy) NSString * feedId;
@property(nonatomic, copy) NSString * uuid;
@end
MILLICAST_API @interface MCStreamViewDetails: NSObject
@property(nonatomic, copy) NSString * subscriberId;
@property(nonatomic, copy) NSString * clusterId;
@property(nonatomic, copy) NSString * streamId;
@property(nonatomic, copy) NSString * streamViewId;
@end
MILLICAST_API @interface MCStreamDetails: NSObject
-(MCStreamPublishDetails* _Nullable) asPublishDetails;
-(MCStreamViewDetails* _Nullable) asViewDetails;
@end
```
```cplusplus
struct MILLICAST_API StreamViewDetails {
  std::string stream_view_id;
  std::string subscriber_id;
  std::string cluster_id;
  std::string stream_id;
};
struct MILLICAST_API StreamPublishDetails {
  std::string uuid;
  std::string feed_id;
  std::string publisher_id;
  std::string cluster_id;
  std::string stream_id;
};
using StreamDetails = std::variant<StreamViewDetails, StreamPublishDetails>;
```

## Additional Updates

**General**

- Fixed an issue where an H.264 stream encoded with zero latency and sliced-threads options enabled would have artifacts in the decoded frames when packet loss would occur.
- For H.264 decoders update support for missing HIGH profiles and 1080p.
- Fix C++ publisher sample app crash when not providing credentials.
- Fixing stability of the C++ AudioCapturer.
- Introduce RTCIceCandidatePair statistics in the stats report.

**Android**

- Improved Android SDK playback experience following simulcast layer switches.
  - Fixed extended freeze of frame during the switch between simulcast layers, especially prevelant during frequent switchines.
    - Greatly reduced the number of freezes when packet loss experienced.
- Improved Android SDK playback in constrained bandwidth scenarios.
- Added multiple MCCMSampleBufferVideoRendererDelegate to MCCMSampleBufferVideoRenderer
  - Supports multiple MCSampleBufferVideoUIView to use a same renderer object
- Fix crash related to JNI layer overflow when reporting statistics
- Fixing frameWidth, frameHeight and timestamp stats values being incorrect.

**Apple / iOS**

- Fix jagged lines that occur when using the Metal video renderer (Apple platforms)
- On MacOS platforms the SDK will check for microphone/camera/screen-share permissions.
  - It will also request permissions if not previously requested.
- Improve certain public API naming in ObjC/Swift APIs.
- Added layer event members target fps/height/width/bitrate.
- Obj-C enums are changed to utilise NS_ENUM rather than being global C based  
  enums
- Removing OpenGL as an option in favor of using Metal.
- Enabling the Metal Video renderer on macOS. Now,
- MCIosVideoRenderer has been renamed to MCAcceleratedVideoRenderer and the corresponding  
  header files ios_renderer.h to accelerated_video_renderer.h



# 2024-04-25 | Native SDK [1.8.4](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.8.4)

### Fixes

- Fixed a bug where invalid metadata information was placed when creating debian packages. The `Architecture` field would always default to amd64. This caused issues when unpacking the `debian11-armv8a` packages.
- Introduced a new method to ObjC SDK to allow setting the log levels for the Sdk/Webrtc/Websocket components

```
+ (void)setLogLevelWithSdk:(MCLogLevel)sdkLogLevel
                    Webrtc:(MCLogLevel)webrtcLogLevel
                 Websocket:(MCLogLevel)websocketLogLevel;
```

- Added auto collection of WebRTC logs in ObjC SDK. This is inline with what was done for Android in the [1.8.2](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.8.2) release.

***

# 2024-04-18 - [1.7.5](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.7.5) and [1.8.3](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.8.3)

### Fixes

- Fixed a crash in the Objective C SDK caused by calling the [frameType](https://millicast.github.io/doc/latest/cpp/protocol_m_c_video_frame-p.html#aef4bd364903f2b7b78fcb7d3c4b47168) method, which resulted in the **NSInvalidArgumentException** exception.

- Introduced a new **Native** video type ([Desktop](https://millicast.github.io/doc/latest/cpp/namespacemillicast.html#a3e878ddbbd034e20ba1b96575ac0fd2a), [Apple](https://millicast.github.io/doc/latest/cpp/objc_2_millicast_s_d_k_2capabilities_8h.html#ac37bb3c55eced5c69ad84759f23e6c90), [Android](https://millicast.github.io/doc/latest/android/android/com.millicast.utils/-video-type/index.html)) to describe the native frames.

- Fixed an issue where VideoType incorrectly returned the **Unknown** type.

***

# 2024-04-12 - [1.8.2](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.8.2)

### Features

Introduced a new API for setting logger callbacks. The API accepts the components for which log callbacks are desired to be received.

```cpp
/**
 * @brief The LogComponent enum describes which components are possible to
 * receive logs from in the log callback.
 */
enum class LogComponent { SDK, WEBRTC, WEBSOCKET };

/**
 * @brief Sets the object that will receive the logs from the SDK.
 * @param f The logger object with first parameter being the description of the
 * component the log came from, the second being the message itself, and
 * the log level.
 * @param components A vector containing the list of components you would like
 * to receive log callbacks for.
 */
MILLICAST_API static void set_logger(
  std::function<void(const std::string& component,
                     const std::string& msg,
                     LogLevel)> f,
  std::vector<Logger::LogComponent>&& components);
```

### Fixes

- Fixed an issue on Android where decoding H.264 Simulcast streams would result in low frame rates after layer changes.
- Fixed an issue where applications that set logger callback would not receive logs from WebRTC. The issue was fixed by introducing a new C++ API, as described in the features section.

***

# 2024-04-04 - [1.8.1](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.8.1)

### Fixes

Fixed an issue on Android where calling the [connect](https://millicast.github.io/doc/latest/android/android/com.millicast/-client/connect.html?query=suspend%20fun%20connect(connectionOptions:%20ConnectionOptions?%20=%20null):%20Boolean) method on a non-live stream led to unresolved asynchronous operations and hanging the Subscriber until the stream went live, which resulted in blocking subsequent calls to [disconnect](https://millicast.github.io/doc/latest/android/android/com.millicast/-client/disconnect.html). The fix maintains the necessity of calling [subscribe](https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/subscribe.html?query=suspend%20fun%20subscribe(options:%20Option%20=%20Option())) after connecting and receiving the SubscriberConnectionState.Connected event.

***

# 2024-03-20 - [1.8.0](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.8.0)

### Features

- Introduced a new asynchronous API for all Apple platforms, such as iOS, tvOS, and macOS. This change impacts the way of publishing streams. For more information, see the updated [Getting Started](/millicast/client-sdks/ios/index.md) document.
- Enabled the use of Simulcast and Scalable Video Coding (SVC) at the same time when using the VP8 codec.
- Reduced the package size of the Android SDK by removing unused NDI library. The total `aar` size is reduced by 7.1 MB. Approximate per-architecture reductions in size:
  - `x86_64`: 2.9 MB, the total `aar` size is 6.5 MB
  - `x86`: 1.5 MB, the total `aar` size is 6.4 MB
  - `arm64-v8a`: 1.3 MB, the total `aar` size is 5.7 MB
  - `armeabi-v7a`: 1.4 MB, the total `aar` size is 4.7 MB

### Fixes

- Fixed an issue that blocked applications from enabling SVC when using the AV1 codec. Now applications can use either VP8 with Simulcast and SVC or AV1 with SVC.
- Fixed an issue where elements were unnecessarily prefixed `video/` or `audio/` in the active event's tracks on the subscriber.
- Fixed the generation of audio and video source statistics.
- Improved stability.

### Breaking changes

#### Android

- Separated the Subscriber/Publisher connection `com.millicast.clients.state.ConnectionState` states into `com.millicast.subscribers.state.SubscriberConnectionState` and `com.millicast.publishers.state.PublisherConnectionState`. These two state classes now contain the full life cycle.
- Removed the NDI library, which means that there are no more NDI references in the Android SDK.

#### Apple platforms

The new asynchronous API replaced the previous synchronous one, which impacts the way of publishing streams. For more information, see the updated [Getting Started](/millicast/client-sdks/ios/index.md) document.

***

# 2024-03-18 - [1.8.0-beta.1](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.8.0-beta.1)

### Features

- Introduced a new asynchronous API for all Apple platforms, such as iOS, tvOS, and macOS. This change impacts the way of publishing streams.
- Enabled the use of Simulcast and Scalable Video Coding (SVC) at the same time when using the VP8 codec.
- Reduced the package size of the Android SDK by removing unused NDI library. The total `aar` size is reduced by 7.1 MB. Approximate per-architecture reductions in size:
  - `x86_64`: 2.9 MB
  - `x86`: 1.5 MB
  - `arm64-v8a`: 1.3 MB
  - `armeabi-v7a`: 1.4 MB

### Fixes

- Fixed an issue that blocked applications from enabling SVC when using the AV1 codec. Now applications can use either VP8 with Simulcast and SVC or AV1 with SVC.
- Fixed an issue where elements were unnecessarily prefixed `video/` or `audio/` in the active event's tracks on the subscriber.
- Fixed the generation of audio and video source statistics.
- Improved stability.

### Breaking changes

#### Android

- Separated the Subscriber/Publisher connection `com.millicast.clients.state.ConnectionState` states into `com.millicast.subscribers.state.SubscriberConnectionState` and `com.millicast.publishers.state.PublisherConnectionState`. These two state classes now contain the full life cycle.
- Removed the NDI library for Android, this means that there are no more NDI references in the Android SDK.

#### Apple platforms

The new asynchronous API replaced the previous synchronous one.

***

# 2024-03-15 - [1.8.0-alpha.2](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.8.0-alpha.2)

### Features

- Introduced a new asynchronous API for all Apple platforms, such as iOS, tvOS, and macOS. This change impacts the way of publishing streams.
- Enabled the use of Simulcast and Scalable Video Coding (SVC) at the same time when using the VP8 codec.
- Reduced the package size of the Android SDK by removing unused NDI library. The total `aar` size is reduced by 7.1 MB. Approximate per-architecture reductions in size:
  - `x86_64`: 2.9 MB
  - `x86`: 1.5 MB
  - `arm64-v8a`: 1.3 MB
  - `armeabi-v7a`: 1.4 MB

### Fixes

- Fixed an issue that blocked applications from enabling SVC when using the AV1 codec. Now applications can use either VP8 with Simulcast and SVC or AV1 with SVC.
- Fixed an issue where elements were unnecessarily prefixed `video/` or `audio/` in the active event's tracks on the subscriber.
- Fixed the generation of audio and video source statistics.
- Improved stability.

### Breaking changes

#### Android

- Separated the Subscriber/Publisher connection `com.millicast.clients.state.ConnectionState` states into `com.millicast.subscribers.state.SubscriberConnectionState` and `com.millicast.publishers.state.PublisherConnectionState`. These two state classes now contain the full life cycle.
- Removed the NDI library for Android, this means that there are no more NDI references in the Android SDK.

#### Objective C/Swift SDK

The new asynchronous API replaced the previous synchronous one.

***

# 2024-03-14 - [1.8.0-alpha.1](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.8.0-alpha.1)

### Features

- Introduced a new asynchronous API for all Apple platforms, such as iOS, tvOS, and macOS. This change impacts the way of publishing streams.
- Enabled the use of Simulcast and Scalable Video Coding (SVC) at the same time when using the VP8 codec.

### Fixes

- Fixed an issue that blocked applications from enabling SVC when using the AV1 codec. Now applications can use either VP8 with Simulcast and SVC or AV1 with SVC.
- Fixed the generation of audio and video source statistics.
- Improved stability.

***

# 2024-03-14 - [1.7.4](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.7.4)

### Fixes

Fixed a string conversion issue that affected UTF-formatted strings on Android.

***

# 2024-02-28 - [1.7.3](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.7.3)

### Fixes

#### General

- Fixed a race condition when rendering video tracks.
- Fixed a race condition inside the NDI Video Renderer implementation.

#### Android

- Fixed an issue with an internal queue that could cause inconsistencies.
- Improved the [isConnected](https://millicast.github.io/doc/latest/android/android/com.millicast/-client/is-connected.html), [isSubscribed](https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/is-subscribed.html), and [isPublishing](https://millicast.github.io/doc/latest/android/android/com.millicast/-publisher/is-publishing.html) method to prevent blocking.
- Fixed the missing reset for the subscriber's and publisher's state.
- Modified the [release](https://millicast.github.io/doc/latest/android/android/com.millicast.devices.source/-source/release.html) function to prevent suspending it.

***

# 2024-02-14 - [1.7.2](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.7.2)

### Fixes

- Fixed an issue causing a crash when using video rendering on Windows.
- Fixed incorrect Android stats generation.
- Fixed an issue related to the absence of the optional `android.hardware.microphone` requirement.
- Fixed an issue where a disconnection did not flush the Subscriber's state object on Android.

### Changes

Introduced the `addRemoteTrackForResult` Android API to improve the management of the subscriber's tracks. The API is similar to [addRemoteTrack](https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/add-remote-track.html) but it returns a `TrackHolder` directly. The subscriber's [state](https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/state.html) now contains a list of tracks, their activity, and the existing flow.

***

# 2024-02-09 - [1.7.1](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.7.1)

### Fixes

Fixed a race condition leading to a crash on Linux after stopping video capture.

***

# 2024-02-08 - [1.7.0](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.7.0)

### Features

- Refactored the Android SDK to introduce the following changes:
  - Prioritization of the Kotlin implementation to make Kotlin the primary language for developing and interacting with the Android SDK.
  - Key instantiation for classes instead of builders to streamline the codebase for greater clarity and conciseness.
  - A coroutine-based implementation for both Subscriber and Publisher calls that enhances the SDK's responsiveness and efficiency.
  - A flow-based eventing system that is useful for handling and reacting to events.
- Introduced macOS and iOS support for H.265.
- Introduced **GNU libstdc++** versions of the SDK for the proper Ubuntu compatibility.
- Introduced the **debian11-armv8a** version of the SDK with no X11 and PulseAudio dependencies, which is useful for publishing from ARM64 Linux boards.
- Added the H.264 hardware encoding support for Raspberry Pi3b+/4/5 boards with the **debian11-armv8a** package.
- Improved the [on_layers](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#ada345cbb1f379fc37b1a5bbbf13e33e4) event and the respective [ViewerLayerData](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_layer_data.html) structure to include fields for the `resolution` of the layer.
- Upgraded the WebRTC version to 118.

### Fixes

- Introduced Simulcast publishing support for macOS and iOS platforms.
- Fixed JNI-related issues on Android.
- Fixed an issue that prevented using the SDK on iOS or tvOS simulators. 
- Introduced stability improvements.

### Changes

- The SDK now links FFmpeg dynamically on Linux and Windows. The SDK package provides a dynamic FFmpeg library. 
- Created macOS universal framework. 

### Breaking Changes

This release introduces several braking changes and requires familiarizing with the following chapters.

#### New signature of the on_layers event

The [on_layers](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#ada345cbb1f379fc37b1a5bbbf13e33e4) event has a new signature to accept an array of strings for the inactive layers. The following code presents the current signature of the callback:

```cplusplus
virtual void on_layers( const std::string& mid,
      const std::vector<ViewerLayerData>& active_layers,
      const std::vector<std::string>& inactive_layers) = 0;
```

This change is propagated to the iOS layer. The following example presents the current signature of the callback for the Objective C SDK:

```objectivec
(void) onLayers: (nonnull NSString*) mid activeLayers:(nonnull NSArray<MCLayerData*>*) activeLayers inactiveLayers:(nonnull NSArray<NSString*>*) inactiveLayers;
```

The Kotlin SDK is also impacted by this modification and requires applications to listen for the Subscriber's layers `Flow<Layers>`:

```kotlin
subscriber.layers.collect { layers ->
  // manage the layers object here
}
```

The following code presents the current signature for the SDK:

```kotlin
data class Layers(
    val mid: String,
    val activeLayers: Array<LayerData>,
    val inactiveLayersEncodingIds: Array<String>
)
```

#### Modified values of the ViewerLayerData structure

Values of the [ViewerLayerData](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_layer_data.html) structure that may not be present for a layer, such as spatial ID or temporal ID, are now optional. The following example presents the new signature of the structure:

```cplusplus
struct ViewerLayerData {
  struct Resolution {
    int width;
    int height;
  };
  std::string encoding_id;
  int bitrate = 0;
  std::optional<int> temporal_layer_id;
  std::optional<int> spatial_layer_id;
  std::optional<Resolution> layer_resolution;
  std::optional<int> max_temporal_layer_id;
  std::optional<int> max_spatial_layer_id;
};
```

This change is propagated to the iOS layer. The current [MCLayerData](https://millicast.github.io/doc/latest/cpp/interface_m_c_layer_data.html) structure in the Objective C SDK is presented in the following example:

```objectivec
@interface MCLayerResolution : NSObject
@property int height;
@property int width;
@end

MILLICAST_API @interface MCLayerData : NSObject
@property (nonatomic, strong, nonnull) NSString* encodingId;
@property int bitrate;
@property(nonatomic, assign, nullable) NSNumber *spatialLayerId;
@property(nonatomic, assign, nullable) NSNumber *temporalLayerId;
@property(nonatomic, assign, nullable) NSNumber *maxTemporalLayerId;
@property(nonatomic, assign, nullable) NSNumber *maxSpatialLayerId;
@property(nonatomic, assign, nullable) MCLayerResolution* layerResolution;
@end
```

This change also impacts the Kotlin implementation. The following example presents the new signature of the structure:

```kotlin
data class LayerResolution(
    val width: Int = 0,
    val height: Int = 0
)

data class LayerData(
    val encodingId: String = "",
    val bitrate: Int = 0,
    val temporalLayerId: Int? = null,
    val spatialLayerId: Int? = null,

    val maxSpatialLayerId: Int? = null,
    val maxTemporalLayerId: Int? = null,
    val resolution: LayerResolution? = null
)
```

#### Modified Kotlin implementation

In the Kotlin implementation, the **getStats** method is now removed in favor of [enableStats](https://millicast.github.io/doc/latest/android/android/com.millicast/-client/enable-stats.html?query=suspend%20fun%20enableStats(enabled:%20Boolean)), which emits reports asynchronously via the corresponding SharedFlow.

Using the Kotlin SDK to create a Publisher or Subscriber now requires calling the Core class implementation, as in the following example:

```kotlin
Core.createPublisher()

Core.createSubscriber()
```

Additionally, the SDK now provides an asynchronous implementation, so to consume the Subscriber and Publisher features, perform coroutines.

The Listener implementation is now removed and replaced with SharedFlow, which is now provided by both main classes. For the Subscriber class, several new SharedFlow events have been introduced:

- [state](https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/state.html): Provides information about the state of the subscriber.
- [signalingError](https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/signaling-error.html): Provides all propagated errors.
- [rtcStatsReport](https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/rtc-stats-report.html): Provides WebRTC statistics when stats reporting is enabled. The statistics report provides the Stats object based on a Sealed class. Using a `when` statement helps find various statistics.
- [track](https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/track.html): Provides all audio and video track events, including the track itself and its associated Media ID identifier.
- [activity](https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/activity.html): Provides information about the active and inactive states of the subscriber's activity.
- [layers](https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/layers.html): Corresponds to all layers events, providing information about the layers associated with the subscriber.
- [vad](https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/vad.html): Provides voice activity events.

For more information on SharedFlow, see the following example:

```kotlin
data class SubscriberState(
    val connectionState: ConnectionState = ConnectionState.Default,
    val subscriptionState: SubscriptionState = SubscriptionState.Default,
    val viewers: Int = 0
)

sealed class TrackHolder(
    val mid: String?,
    val track: Track
) {
    class AudioTrackHolder(
        mid: String?,
        val audioTrack: AudioTrack
    ) : TrackHolder(mid, audioTrack)

    class VideoTrackHolder(
        mid: String?,
        val videoTrack: VideoTrack
    ) : TrackHolder(mid, videoTrack)
}

sealed class ActivityStream {
    data class Active(
        val streamId: String,
        val track: Array<String>,
        val sourceId: String?
    ) : ActivityStream()

    data class Inactive(
        val streamId: String,
        val sourceId: String?
    ) : ActivityStream()
}

data class Layers(
    val mid: String,
    val activeLayers: Array<LayerData>,
    val inactiveLayersEncodingIds: Array<String>
)
```

#### The auto reconnect property removal

The auto reconnect property is removed from publisher and subscriber options in favour of using connection options. Use **ConnectionOptions** to set the **autoReconnect** ([Android](https://millicast.github.io/doc/latest/android/android/com.millicast.clients/-connection-options/auto-reconnect.html?query=val%20autoReconnect:%20Boolean), [iOS](https://millicast.github.io/doc/latest/cpp/interface_m_c_connection_options.html#af9e0ed6b2affd725634db6d158ea7ab3), [Desktop](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_client_connection_options.html#a78e72d74ccdbb7df4e85725a067b83e1)) property:

```cplusplus
//file: millicast-sdk/client.h

struct MILLICAST_API ClientConnectionOptions {
  bool auto_reconnect{true};
};
```
```objectivec
//file: MillicastSDK/client.h
MILLICAST_API @interface MCConnectionOptions: NSObject
@property(nonatomic, assign) BOOL autoReconnect;
@end
```
```kotlin
package com.millicast.clients;

public class ConnectionOptions {
    public boolean autoReconnect;
}
```

***

# 2024-02-04 - [1.7.0-beta.1](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.7.0-beta.1)

### Features

- Refactored the Android SDK to introduce the following changes:
  - Prioritization of the Kotlin implementation to make Kotlin the primary language for developing and interacting with the Android SDK.
  - Key instantiation for classes instead of builders to streamline the codebase for greater clarity and conciseness.
  - A coroutine-based implementation for both Subscriber and Publisher calls that enhances the SDK's responsiveness and efficiency.
  - A flow-based eventing system that is useful for handling and reacting to events.
- Introduced macOS and iOS support for H.265.
- Introduced `GNU libstdc++` versions of the SDK for the proper Ubuntu compatibility.
- Introduced the `debian11-armv8a` version of the SDK with no X11 and PulseAudio dependencies, which is useful for publishing from ARM64 Linux boards.
- Added the H.264 hardware encoding support for Raspberry Pi3b+/4/5 boards with the `debian11-armv8a` package.
- Improved the `millicast::ViewerListener::on_layers` event and the respective `millicast::ViewerLayerData` structure to include fields for the `resolution` of the layer.
- Upgraded the WebRTC version to 118.

### Fixes

- Introduced Simulcast publishing support for macOS and iOS platforms.
- Fixed JNI-related issues on Android.
- Fixed an issue that prevented using the SDK on iOS or tvOS simulators. 
- Introduced stability improvements.

### Changes

- The SDK now links FFmpeg dynamically on Linux and Windows. The SDK package provides a dynamic FFmpeg library. 
- Created macOS universal framework. 

### Breaking Changes

This release introduces several braking changes and requires familiarizing with the following chapters.

#### New signature of the on_layers event

The `millicast::ViewerListener::on_layers` event has a new signature to accept an array of strings for the `inactive` layers. The following code presents the current signature of the callback:

```cplusplus
virtual void on_layers( const std::string& mid,
      const std::vector<ViewerLayerData>& active_layers,
      const std::vector<std::string>& inactive_layers) = 0;
```

This change is propagated to the iOS layer. The following example presents the current signature of the callback for the Objective C SDK:

```objectivec
(void) onLayers: (nonnull NSString*) mid activeLayers:(nonnull NSArray<MCLayerData*>*) activeLayers inactiveLayers:(nonnull NSArray<NSString*>*) inactiveLayers;
```

The Kotlin SDK is also impacted by this modification and requires applications to listen for the Subscriber's layers `Flow<Layers>`:

```kotlin
subscriber.layers.collect { layers ->
  // manage the layers object here
}
```

The following code presents the current signature for the SDK:

```kotlin
data class Layers(
    val mid: String,
    val activeLayers: Array<LayerData>,
    val inactiveLayersEncodingIds: Array<String>
)
```

#### Modified values of the ViewerLayerData structure

Values of the `millicast::ViewerLayerData` structure that may not be present for a layer, such as spatial ID or temporal ID, are now optional. The following example presents the new signature of the structure:

```cplusplus
struct ViewerLayerData {
  struct Resolution {
    int width;
    int height;
  };
  std::string encoding_id;
  int bitrate = 0;
  std::optional<int> temporal_layer_id;
  std::optional<int> spatial_layer_id;
  std::optional<Resolution> layer_resolution;
  std::optional<int> max_temporal_layer_id;
  std::optional<int> max_spatial_layer_id;
};
```

This change is propagated to the iOS layer. The current MCLayerData structure in the Objective C SDK is presented in the following example:

```objectivec
@interface MCLayerResolution : NSObject
@property int height;
@property int width;
@end

MILLICAST_API @interface MCLayerData : NSObject
@property (nonatomic, strong, nonnull) NSString* encodingId;
@property int bitrate;
@property(nonatomic, assign, nullable) NSNumber *spatialLayerId;
@property(nonatomic, assign, nullable) NSNumber *temporalLayerId;
@property(nonatomic, assign, nullable) NSNumber *maxTemporalLayerId;
@property(nonatomic, assign, nullable) NSNumber *maxSpatialLayerId;
@property(nonatomic, assign, nullable) MCLayerResolution* layerResolution;
@end
```

This change also impacts the Kotlin implementation. The following example presents the new signature of the structure:

```kotlin
data class LayerResolution(
    val width: Int = 0,
    val height: Int = 0
)

data class LayerData(
    val encodingId: String = "",
    val bitrate: Int = 0,
    val temporalLayerId: Int? = null,
    val spatialLayerId: Int? = null,

    val maxSpatialLayerId: Int? = null,
    val maxTemporalLayerId: Int? = null,
    val resolution: LayerResolution? = null
)
```

#### Modified Kotlin implementation

In the Kotlin implementation, the `getStats(boolean)` method is now removed in favor of `enableStats(boolean)`, which emits reports asynchronously via the corresponding SharedFlow.

Using the Kotlin SDK to create a Publisher or Subscriber now requires calling the Core class implementation, as in the following example:

```kotlin
Core.createPublisher()

Core.createSubscriber()
```

Additionally, the SDK now provides an asynchronous implementation, so to consume the Subscriber and Publisher features, perform coroutines.

The Listener implementation is now removed and replaced with SharedFlow, which is now provided by both main classes. For the Subscriber class, several new SharedFlow events have been introduced:

- **Subscriber#state**: Provides information about the state of the subscriber. 
- **Subscriber#signalingError**: Provides all propagated errors.
- **Subscriber#rtcStatsReport**: Provides WebRTC statistics when stats reporting is enabled. The statistics report provides the Stats object based on a Sealed class. Using a `when` statement helps find various statistics.
- **Subscriber#track**: Provides all audio and video track events, including the track itself and its associated Media ID identifier.
- **Subscriber#activity**: Provides information about the active and inactive states of the subscriber's activity.
- **Subscriber#layers**: Corresponds to all layers events, providing information about the layers associated with the subscriber.

For more information on SharedFlow, see the following example:

```kotlin
data class SubscriberState(
    val connectionState: ConnectionState = ConnectionState.Default,
    val subscriptionState: SubscriptionState = SubscriptionState.Default,
    val viewers: Int = 0
)

sealed class TrackHolder(
    val mid: String?,
    val track: Track
) {
    class AudioTrackHolder(
        mid: String?,
        val audioTrack: AudioTrack
    ) : TrackHolder(mid, audioTrack)

    class VideoTrackHolder(
        mid: String?,
        val videoTrack: VideoTrack
    ) : TrackHolder(mid, videoTrack)
}

sealed class ActivityStream {
    data class Active(
        val streamId: String,
        val track: Array<String>,
        val sourceId: String?
    ) : ActivityStream()

    data class Inactive(
        val streamId: String,
        val sourceId: String?
    ) : ActivityStream()
}

data class Layers(
    val mid: String,
    val activeLayers: Array<LayerData>,
    val inactiveLayersEncodingIds: Array<String>
)
```

#### Setting automatic reconnection

The `auto_reconnect` property is no longer available in Publisher and Subscriber options. Use `ConnectionOptions` to set the `auto_reconnect` property, as in the following examples:

```cplusplus
//file: millicast-sdk/client.h

struct MILLICAST_API ClientConnectionOptions {
  bool auto_reconnect{true};
};
```
```objectivec
//file: MillicastSDK/client.h

MILLICAST_API @interface MCConnectionOptions: NSObject

@property(nonatomic, assign) BOOL autoReconnect;

@end
```
```kotlin
package com.millicast.clients;

public class ConnectionOptions {
    public boolean autoReconnect;
}
```

***

# 2023-12-15 - [1.6.0](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.6.0)

### Features

- Introduced the ability to write macOS applications using the Objective-C/Swift API.
- Introduced a new **priority** parameter to support setting the priority of each feed when publishing multiple backup feeds.
- Introduced a new **recording** parameter that you can set to true to record published streams.
- Added support for SwiftUI view and two UIKit views to simplify displaying video tracks and enhance development flexibility.
- Added support for application-level screen sharing on iOS. The following code sample presents how you can use it:
  ```swift
  import MillicastSDK
  import ReplayKit 
  func exampleScreenShareFunc() async {
    let publisher = MCPublisher.create()
    let screenShareSource = MCAppShareSource(name: "example-screen-share-source", recorder: RPScreenRecorder.shared())
    do {
        let (audioTrack, videoTrack) = try await screenShareSource.startCapture()
        if let audioTrack = audioTrack {
            publisher.add(audioTrack)
        }
        if let videoTrack = videoTrack {
            publisher.add(videoTrack)
        }
        // continue with the publisher setup (connection, publishing, etc.)
    } catch {
        // Handle error
        // for example
        // os_log(.error, log: log, "Could not start capture: %s", error.localizedDescription)
    }
  }
  ```

### Fixes

Introduced general stability and performance improvements.

### Deprecations

- The `setOptions` method is deprecated and replaced with a new `connect` method from the `ConnectionOptions` class, which connects the SDK with the Millicast platform. Additionally, the `autoReconnect` method is deprecated on iOS and desktop platforms.

- The `hardware_support` method is deprecated and no longer supported.

- The `CustomSource` class is deprecated and replaced with `CustomVideoSource` and `CustomAudioSource` on iOS and desktop platforms.

- The `enableSvcWithMode` and `disableSvc` methods are now deprecated and replaced with `svcMode` from the `ClientOptions` class.

- The `enableSimulcast` method is deprecated and replaced with the `simulcast` method from `ClientOptions`.

***

# 2023-09-28 - [1.5.2](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.5.2)

### Features

Upgraded WebRTC version to 112.

### Fixes

Refactored WebSocket timeout to prevent logging overload.

***

# 2023-07-04 - [1.5.1](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.5.1)

### Features

- Added an option to enable and disable bandwidth in OBS WebRTC and the Native SDK. This can be useful when publishing in suboptimal network conditions.
- Added automatic resumption of publishing and subscribing upon recovery from a network disruption.
- The client auto_reconnect option can now be set to false to disable automatic reconnection.
- The Publisher and subscriber listeners now have an onDisconnected callback and their onConnectionError callbacks now include an integer status in addition to the reason.

### Fixes

- The onDisconnected event is now triggered much faster and more reliably.
- Fixed an iOS AVAudioEngine crash.
- Fixed an issue where Bluetooth headsets did not work on iPadOS/iOS 16.4.1.
- The Publisher sample application now uses the first listed audio/video device if unable to find the provided audio/video device name.

### Known Issues

- When publishing in 4:4:4, the client sends 4:2:0 instead of 4:4:4.

***

# 2023-03-16 - [1.5.0](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.5.0)

### Features

- Added the ability to switch a video source when a stream is in progress.
- Added the ability to render VP9 with 4:4:4 chroma subsampling on Android.
- Added the NV12 video format as a VideoType.
- Upgraded libWebRTC to m108.

### Fixes

- Fixed an issue related to a root certificate issue on Windows.
- Fixed an issue where audio did not play when streamed from an external source on iOS.
- Deprecated the possibility to set the maximum bitrate using the client. Instead, we introduced the ability to set the minimum and maximum bitrate using the options structure.
- Improved the stream statistics reporting.

***

# 2022-12-09 - [1.4.2](https://github.com/millicast/millicast-native-sdk/releases/tag/v1.4.2)

### Deprecated APIs

Replaced the SetMaxBitrate API with settings for min, max, and start bitrates via [publisher options](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_bitrate_settings.html).

### Fixes

- Fixed an issue where a crash occurred after providing YUY2 frames.
- Fixed an issue where a crash occurred after enabling stats reporting.