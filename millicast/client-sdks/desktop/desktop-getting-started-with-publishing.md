---
title: "Getting Started with Publishing"
slug: /desktop-getting-started-with-publishing
---
Follow these steps to add the publishing capability to your application.

## 1. Capture audio and video

To capture media, get an array of available audio and video sources and choose the preferred sources from the list. After you start capturing audio and video, the SDK will return an audio and video track that you can add to the publisher later.

```cplusplus
// Get an array of audio sources
auto sources = millicast::Media::get_audio_sources();

// Choose the preferred audio source and start capturing
auto src = sources[0]; // Get the first available source
auto audioTrack = src->start_capture();
if(audioTrack == nullptr)
{
 	// Error could not start capture 
}

// Get an array of available video sources
auto sources = millicast::Media::get_video_sources();

// Get capabilities of the available video sources, such as width, height, and frame rate of the video sources
auto capabilities = sources[0]->capabilities(); // Get the capabilities of first source

// Set the preferred capability; not setting any capability object results in setting the first one from the list
source[0]->set_capability(capabilities[0]); // Set the first capability object

// Start capturing video
auto src = sources[0]; // Get the first available source
auto vidoeTrack = src->start_capture();
if(videoTrack == nullptr)
{
 	// Error could not start capture 
}
```

## 2. Set logger

Optionally, set your own logger function to print Dolby.io Real-time Streaming logs according to the severity. By default, the SDK prints the standard output, where the severity is first and then the message.

```cplusplus
millicast::Logger::set_logger([](/millicast/const std::string& msg, millicast::LogLevel lvl) {
  // Print your message here
  std::cout << msg << std::endl;
});
```

## 3. Publish a stream

Create a publisher object and set a listener object to the publisher to receive proper events. This requires creating a class that inherits the publisher's listener interface. Then, create a stream in your Dolby.io developer dashboard or using the Dolby.io Streaming REST API and set your credentials.

```cplusplus
// Create a publisher object
std::unique_ptr<millicast::Publisher> publisher = millicast::Publisher::create();

// Set a listener object to the publisher
class PubListener : public millicast::Publisher::Listener
{
 public:
  PubListener() = default;
  virtual ~PubListener() = default;

  void on_connection_error(int code, const std::string& message) override {}
  void on_connected() override { publisher->publish(); }
  void on_stats_report(const millicast::StatsReport &) override {}

  void on_signaling_error(const std::string& reason) override {}

  void on_publishing() override {}
  void on_publishing_error(const std::string& reason) override {}
  
  void on_active() override {}
  void on_inactive() override {}

  void on_viewer_count(int count) override {}
};

// Create an instance of your listener and set it to the publisher
auto listener = std::make_unique<PublisherListener>();
publisher->set_listener(listener.get());

// Get the credentials structure from your publisher instance, fill it in, and set the modified credentials
auto credentials = publisher->get_credentials(); // Get the current credentials
credentials.stream_name = "streamName"; // The name of the stream you want to publish
credentials.token = "aefea56153765316754fe"; // The publishing token
credentials.api_url = "https://director.millicast.com/api/director/publish"; // The publish API URL
publisher->set_credentials(std::move(credentials)); // Set the new credentials
```

## 4. Configure your publishing session

Get a list of the available codecs and set the codecs that you want to use. By default, the SDK uses VP8 as the video codec and Opus as the audio codec.

Additionally, to publish several sources from the same application, create a publisher instance for each source. We recommend enabling discontinuous transmission that detects audio input and sends audio only when it is detected.

The SDK also offers Simulcast that allows sending three different resolutions at once. It is disabled by default and only available for VP8 and H264. Optionally, when using the VP9 or AV1 video codec, you can choose to use SVC instead of Simulcast. The SVC mode sends several spatial and temporal layers encoded within the same stream. To enable SVC, set the layer ID you want to use in the options; only the following modes are available: L2T1, L2T2, L2T3, L3T1, L3T2, and L3T3.

```cplusplus
millicast::Publisher::Option options;

// Get a list of supported codecs
auto audio_codecs = millicast::Client::get_supported_audio_codecs();
auto video_codecs = millicast::Client::get_supported_video_codecs();

// Choose the preferred codecs
options.codecs.video = video_codecs.front(); // Setting the first video codec of the list
options.codecs.audio = audio_codecs.front(); // Setting the first audio codec of the list

// Optionally, enable Simulcast
options.simulcast = true;

// Optionally, enable SVC
options.svc_mode = millicast::ScalabilityMode::L3T3; // Set the L3T3 SVC mode

//Optionally, set a source ID of the publisher and enable discontinuous transmission to enable multi-source
options.multisource.source_id = "YourId";
options.dtx = true;

// Enable stereo
options.stereo = true;

// Set the selected options to the publisher
publisher->set_options(options);
```

## 5. Add the audio and video track

Add the audio and video track that you created earlier when you started capturing media.

```cplusplus
publisher->add_track(video_track);
publisher->add_track(audio_track);
```

## 6. Authenticate using the Director API

Authenticate to access Dolby.io Real-time Streaming through the Director API. 

```cplusplus
publisher->connect();
```

Successful authentication results in opening a WebSocket connection that allows using the Dolby.io Real-time Streaming server and calling the listener's [on_connected](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_client_listener.html#a50511fbcaf9ac3dd4fc54c4e94e74982) method.

## 7. Start publishing

```cplusplus
publisher->publish();
```

Once the publisher starts sending media, the SDK calls the listener's [on_publishing](https://millicast.github.io/doc/latest/cpp/structmillicast_1_1_publisher_listener.html#ae3509ed7fac92914761036b014be7f43) method.

## Collecting RTC statistics

You can periodically collect the WebRTC peer connection statistics if you enable them through the [enable_stats](https://millicast.github.io/doc/latest/cpp/protocol_m_c_client-p.html#ade56fc01941986fd5da5d02b7aba1a18) method of the viewer or publisher. After enabling the statistics, you will get a report every second through the [on_stats_report](https://millicast.github.io/doc/latest/cpp/protocol_m_c_delegate-p.html#a5dc7c879a257706e788f606d04e0ebd0) callback in the listener object. The identifiers and way to browse the stats are following the [RTC specification](https://www.w3.org/TR/webrtc-stats/).  
The report contains the [StatsReport](https://millicast.github.io/doc/latest/cpp/classmillicast_1_1_stats_report.html) object, which is a collection of several [Stats](https://millicast.github.io/doc/latest/cpp/namespacemillicast.html#aa1e2b03e1cd334be99d54a6318653ef3) objects. They all have a specific type, whether it is inbound, outbound, codec, or media. Inbound is the statistics of incoming transport for the viewer and outbound is a type of outgoing statistics for the publisher.
