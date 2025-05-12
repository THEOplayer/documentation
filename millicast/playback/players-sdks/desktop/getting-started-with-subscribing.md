---
title: Getting Started with Subscribing
slug: /playback/players-sdks/desktop/getting-started-with-subscribing
---

Follow these steps to add the subscribing capability to your application.

## 1. Create a subscriber object

```cpp
std::unique_ptr<millicast::Viewer> viewer = millicast::Viewer::create();
```

## 2. Create a listener class

Create a viewer's listener class by inheriting the viewer listener's interface.

```cpp
class ViewerListener : public millicast::Viewer::Listener
{
 public:
  // Your own code

  ViewerListener() = default;
  virtual ~ViewerListener() = default;

  // Overrides from millicast::Viewer::Listener
  void on_connected()  override { viewer->subscribe(); }
  void on_connection_error(int code, const std::string& message) override {}
  void on_stats_report(const millicast::StatsReport &) override {};

  void on_signaling_error(const std::string& reason) override {};

  void on_subscribed() override {};
  void on_subscribed_error(const std::string& error) override {};

  void on_track(std::weak_ptr<millicast::AudioTrack> track,
                const std::optional<std::string>& mid) override {};
  void on_track(std::weak_ptr<millicast::VideoTrack> track,
                const std::optional<std::string>& mid) override {};

  void on_vad(const std::string& mid, const std::optional<std::string>& source_id) override {};
  void on_stopped() override {};
  void on_active(const std::string& stream_id,
                 const std::vector<millicast::TrackInfo>& tracks,
                 const std::optional<std::string>& source_id) override {};
  void on_inactive(const std::string& stream_id, const std::optional<std::string>& source_id) override {};
  void on_layers(const std::string& mid,
		 const std::vector<millicast::Viewer::LayerData>& active_layers,
		 const std::vector<millicast::Viewer::LayerData>& inactive_layers) override {};

  void on_viewer_count(int count) override {};
};
```

## 3. Create an instance and set it to the viewer

```cpp
auto listener = std::make_unique<ViewerListener>();
viewer->set_listener(listener.get());
```

## 4. Set up credentials

Get your **stream name** and **stream ID** from the dashboard and set them up in the SDK.

```cpp
auto credentials = viewer->get_credentials(); // Get the current credentials
credentials.stream_name = "streamName"; // The name of the stream you want to subscribe to
credentials.account_id = "ACCOUNT"; // The ID of your Dolby.io Real-time Streaming account
credentials.token = "aefea56153765316754fe"; // Optionally set the subscribing token
credentials.api_url = "https://director.millicast.com/api/director/subscribe"; // The subscribe API URL
publisher->set_credentials(std::move(credentials)); // Set the new credentials
```

## 5. Configure the viewer by setting your preferred options

Configure your stream to receive multi-source content.

```cpp
millicast::Viewer::Option options;

options.multisource.pinned_source_id = "main"; // The main source that will be received by the default media stream
options.multisource.mutiplexed_audio_track = 3; // Enables  audio multiplexing and denotes the number of audio tracks to receive as Voice Activity Detection (VAD) multiplexed audio
options.multisource.excluded_source_id = { "toexclude" }; // Audio streams that should not be included in the multiplex, for example your own audio stream

// Set the selected options
viewer->set_options(options);
```

## 6. Create a WebSocket connection

Authenticate and create a WebSocket connection to connect with the Dolby.io Real-time Streaming server.

```cpp
viewer->connect();
```

If the connection fails, the listener's [on_connection_error](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_client_listener.html#a363bc633ec37886cc00654526080e11c) method is called with the HTTP error code and failure message. If the code is 0, double-check your internet connection or the API URL set in the credentials. If the connection is successful, the SDK calls the [on_connected](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_client_listener.html#a50511fbcaf9ac3dd4fc54c4e94e74982) method.

## 7. Subscribe to the streamed content

```cpp
viewer->subscribe();
```

When the operation is successful, the SDK calls [on_subscribed](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#aba1f2c831e69d430a26693945d20ac61) and sends you an event in the listener with the created audio and video tracks. Otherwise, the SDK calls [on_subscribed_error](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#af1e8df1bdae14acea62b39eb9f420be1) with an error message.

## 8. Project media

If publishers use the multi-source feature, you need to project tracks into a specified transceiver using its media ID (mid). By default, if you do not project anything, you receive no media. When you start subscribing, you receive the `active` event with the track IDs and the source ID. In order to project a track into a transceiver, you must use the [project](https://millicast.github.io/doc/latest/cpp/classmillicast_1_1promises_1_1_viewer.html#a6ba7dff8f19485e268aa623fe6162969) method of the viewer. You need to specify the source ID you are targeting and an array of the tracks you want to project.

By default, only one video and audio track is negotiated in the SDP. If there are several publishers sending media in one stream, you can dynamically add more tracks using the [add_remote_track](https://millicast.github.io/doc/latest/cpp/classmillicast_1_1promises_1_1_viewer.html#ad8f350406f874776c0b10a6edd9775aa) method each time you receive an active event. The method adds a new transceiver and renegotiates locally SDP. When successful, the SDK creates a new track and calls the [on_track](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#a663a46b27c6626d85089d4150bbd5416) callback, so you can get the track and its corresponding mid.

```cpp
// Get mid either from the `on_track` callback of the listener object or by calling the `get_mid` method with the track ID
/* option 1 */

 struct Listener : public Client::Listener
  {
	/* ... */
    void on_track(std::weak_ptr<VideoTrack> track,
			  const std::optional<std::string>& mid) {
     	// Keep the mid value somewhere
    }
 }

/* option 2 */
// Let's say you have video track named track

auto mid = viewer->get_mid(track->id());

// Project a video track
millicast::Viewer::ProjectionData data;
data.mid = mid; // The media ID of the transceiver you want to project into
data.media = "video"; // The media track type, either video or audio
data.track_id = track_id; // The name of the track on the media server side, which is the track ID you get in the active event

viewer->project(source_id, { data });

viewer.add_remote_track("video"); // "Audio" or "video" depending on the type of track you want to add
```

To stop projecting the track, call the [unproject](https://millicast.github.io/doc/latest/cpp/interface_m_c_subscriber.html#acbb979241b31a3274cfbbae412130416) method, which requires an array of the media IDs that you want to stop projecting.

## 9. Select a layer that you want to receive

When a publisher uses Simulcast or the SVC mode when sending a video feed, the media server automatically chooses the right layer to send to the viewer according to the bandwidth estimation. However, you can force the server to send you a specific layer by calling the [select](https://millicast.github.io/doc/latest/cpp/interface_m_c_subscriber.html#a10827a5b60afc01671779c3b847dcfbc) method.

For example, if the sender uses Simulcast, it is possible to receive three different encoding IDs: 'h' for the high resolution, 'm' for the medium one, and 'l' for the low. In order to choose the medium resolution, you have to do the following:

```cpp
millicast::Viewer::LayerData data;
data.encoding_id = "m"; // The encoding ID, which is the ID of the Simulcast or SVC layer
data.temporal_layer_id = 1; // The ID of the temporary layer
data.spatial_layer_id = 0; // The ID of the spatial layer

viewer->select(data);
```

You can retrieve all the available layers with their corresponding IDs by calling the [layer](https://millicast.github.io/doc/latest/cpp/interface_m_c_projection_data.html#a078c3db7875f446538238f4e317e2a9b) event.

## 10. Manage broadcast events

When broadcast events occur, the SDK calls the corresponding callback in the listener object. The following Viewer event listeners are available:

- [on_active](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#acc60201710f50bcc6bb5dce2d3971bd1): Called when a new source starts publishing a stream. It contains the stream ID, the track information, and the source ID.
- [on_inactive](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#ad3c5a31f746678a36a1f97f6d86e33ce): Called when a source is no longer published within a stream. It contains the stream ID and the source ID.
- [on_stopped](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#a01bec721aec75124df5f12f25a3a66fa): Called when a stream stops.
- [on_vad](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#ad3ea212b97cf9b57072e9da150df5cc6): Called when a source ID is multiplexed into an audio track based on the voice activity level. It contains media ID (mid) of the track and the source ID.
- [on_layers](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_viewer_listener.html#ada345cbb1f379fc37b1a5bbbf13e33e4): Called when Simulcast or Scalable Video Coding (SVC) layers become available. It contains arrays of the [LayerData](https://millicast.github.io/doc/latest/cpp/classmillicast_1_1compat_1_1_viewer.html#a98ea440337a0e93d62e95979ce632716) object that you can use in the [select](https://millicast.github.io/doc/latest/cpp/interface_m_c_subscriber.html#a10827a5b60afc01671779c3b847dcfbc) command.
- [on_viewer_count](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_client_listener.html#af76589a88e386d598115a96b16b884d7): Called each time a new viewer enters or leaves a stream. All clients connected to the stream are notified about the current number of viewers.

## 11. Render video

The SDK provides an interface that lets you implement a class responsible for receiving video frames.

```cpp
// Write a class that inherits _VideoRenderer_
class MyRenderer : public millicast::VideoRenderer
{
	public:

  void on_frame(const millicast::VideoFrame& frame) override;
}
```

After this step, you will get the [VideoFrame](https://millicast.github.io/doc/latest/cpp/classmillicast_1_1_video_frame.html) whenever it is available. You can render the frame using any graphic library.

To get video data from the [VideoFrame](https://millicast.github.io/doc/latest/cpp/classmillicast_1_1_video_frame.html), use the [get_buffer](https://millicast.github.io/doc/latest/cpp/classmillicast_1_1_video_frame.html#a0aeb850fd7e741e809047ae8afd5980a) method. Allocate a buffer with the correct size beforehand. You can get the size of the buffer according to its [VideoType](https://millicast.github.io/doc/latest/cpp/namespacemillicast.html#a3e878ddbbd034e20ba1b96575ac0fd2a) using the [size](https://millicast.github.io/doc/latest/cpp/classmillicast_1_1_video_frame.html#a016442afcd01fa8b67cfc24212454130) method. Both [get_buffer](https://millicast.github.io/doc/latest/cpp/classmillicast_1_1_video_frame.html#a0aeb850fd7e741e809047ae8afd5980a) and [size](https://millicast.github.io/doc/latest/cpp/classmillicast_1_1_video_frame.html#a016442afcd01fa8b67cfc24212454130) have a template parameter that lets you choose in which [VideoType](https://millicast.github.io/doc/latest/cpp/namespacemillicast.html#a3e878ddbbd034e20ba1b96575ac0fd2a) you want your video data, either `millicast::VideoType::ARGB` or `millicast::VideoType::I420`.

Then, create an instance of your renderer and add it to a local or remote video track, select one playback device to be able to play audio, adjust the volume of remote tracks, and clean the memory.

```cpp
// Create an instance of your renderer and add it to a local or remote video track
MyRenderer * renderer = new MyRenderer();
track->add_renderer(renderer);

// Select one playback device
auto playback_list = millicast::Media::get_playback_devices(); // Get the playback devices
auto playback = playback_list[0]; // Get the first device
playback->init_playback(); // Set this playback as the one to play audio

// Adjust the volume of remote tracks
audio_track->set_volume(1.0); // Volume can be between 0 and 1

// To clean the memory at the end of your program
millicast::Client::cleanup();
```
