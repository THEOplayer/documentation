---
title: "Ingest Raw Frames"
id: using-native-sdk-ingest-raw-frames
---
Ingesting raw video and audio frames can be useful for creating and managing unique WebRTC encoding workflows. Whilst [traditional encoders](/millicast/hardware-encoders/index.md) provide general-purpose encoding solutions, there are some use cases such as [real-time streaming from drones](/millicast/capture/live-streaming-from-drones-rtmp.md) where traditional encoding solutions are too heavy, power consumptive, or expensive to suffice.

This guide is designed to help you leverage the Dolby.io Streaming Native SDKs to ingest raw audio and video frames, allowing the stream encoding to be handled by the SDK. There are three ways to accomplish raw frame ingestion: 

1. [Using the Core API](/millicast/broadcast/using-native-sdk-ingest-raw-frames.md)creating-custom-audio-and-video-frame-classes): For desktop applications such as Windows, Mac, or Linux
2. [Using the iOS API](/millicast/broadcast/using-native-sdk-ingest-raw-frames.md)using-the-ios-api): Including tvOS
3. [Using the Android API](/millicast/broadcast/using-native-sdk-ingest-raw-frames.md)using-the-android-api)

## Using the Core API

### Creating custom audio and video frame classes

To ingest raw frames, you first must download and install the appropriate [Millicast Native SDK](https://github.com/millicast/millicast-native-sdk/releases). Before you begin using the SDK, it is recommended you review the list of [supported operating systems](https://github.com/millicast/millicast-native-sdk#millicast-native-sdk), [audio encoding limitations](https://github.com/millicast/millicast-native-sdk#audio-codecs-and-quality---encoding), and [video encoding limitations](https://github.com/millicast/millicast-native-sdk#video-codecs-and-quality---encoding) as various limitations may impact your project. Additionally, if you encounter a bug, please [open an issue](https://github.com/millicast/millicast-native-sdk/issues) on the native project.

To get started providing custom video and audio frames, we will first create a video frame class that represents a static RGB color and an audio frame class that generates a SINE tone. 

```cplusplus
#include <vector>
#include <cmath>
#include <millicast-sdk/frames.h>
 
/**
 We are required to implement the millicast::VideoFrame interface with our
 own logic. Realistically, this class should be more sophisticated in that
 it takes an input your raw frame buffers, but for now, we generate a static
 frame of one RGB color passed as input.
*/
class CustomVideoFrame: public millicast::VideoFrame {
private:
    int _r, _g, _b;
    static constexpr auto WIDTH = 640;
    static constexpr auto HEIGHT = 480;
public:
  CustomVideoFrame(int r, int g, int b) : _r(r), _g(g), _b(b) {}
   
  int width() const override { return WIDTH; }
  int height() const override { return HEIGHT; }
 
  /**
    Override this to return the corresponding frame type to the frame buffer you store
    within the frame buffer. VideoType values supported can be found here:
    https://millicast.github.io/doc/latest/cpp/namespacemillicast.html#a3e878ddbbd034e20ba1b96575ac0fd2a
  */
  millicast::VideoType frame_type() const override { return millicast::VideoType::ARGB; }
 
  millicast::PrimaryID primaries() const override { return {}; }
  millicast::TransferID transfer() const override { return {}; }
  millicast::MatrixID matrix() const override { return {}; }
  millicast::RangeID range() const override { return {}; }
 
  /**
    This should return the size of the frame buffer, and depends on the frame type. You only need
    to return the size for the frame type that you support in this class. For example, the formula
    for calculating the size of an I420 frame is frame_size = width * height * 3 / 2 .
  */
  uint32_t size(millicast::VideoType type) const override { return width() * height() * 4; };
 
  /**
    Buffer is pre-allocated based on size. You are required to fill
    the provided buffer with the frames you have, which should also correspond
    to the frame_type() you defined earlier. For example, if you would like to
    pass I420 frames, then frame_type() should return millicast::VideoType::I420.
  */
  void get_buffer(millicast::VideoType type, uint8_t *buffer) const override
  {
    // We will always request the type to be the same you declared in frame_type,
    // so no need to worry about other frame types.
 
    using namespace millicast;
 
    if (!buffer) return;
    std::memset(buffer, 0, size(type));
     
    for (int i = 0; i < size(frame_type()); i += 4)
    {
      buffer[i] = 255; // This is the alpha channel which WebRTC does not use.
      buffer[i + 1] = _r;
      buffer[i + 2] = _g;
      buffer[i + 3] = _b;
    }
  }
};
 
 
class CustomSineAudioFrame {
private:
    std::vector<float> _audio_data;
 
    const int _sample_rate{};
    const size_t _num_channels{}, _chunk_time{};
     
 
    size_t _sini{0};
 
    static constexpr auto PI = 3.14159264;
    static constexpr auto TONE_FREQUENCY = 480; // 480Hz
public:
    /**
      chunk_time has to be in milliseconds.
      sample_rate has to be in Hz  
    */
    CustomSineAudioFrame(
        int sample_rate,
        size_t num_channels,
        size_t chunk_time)
    : _sample_rate(sample_rate),
      _num_channels(num_channels),
      _chunk_time(chunk_time) {
 
        // Calculate buffer size, and resize accordingly.
        const auto buffer_size = num_channels * sample_rate * chunk_time / 1000;
        _audio_data.resize(buffer_size);
    }
 
    millicast::AudioFrame generate_sine_audio_frame() {
      millicast::AudioFrame frame;
      frame.bits_per_sample = sizeof(float) * 8;
      frame.number_of_channels = _num_channels;
      frame.sample_rate = _sample_rate;
      frame.number_of_frames = _sample_rate * _chunk_time / 1000;
       

  
      for(int j = 0; j < _audio_data.size(); j+=_num_channels) {
        float value = sin(_sini * TONE_FREQUENCY * 2.f * PI / _sample_rate);
        for(int k = 0; k < _num_channels; k++) _audio_data[j+k] = value;

        // Our cycle
        _sini = (++_sini) % (_sample_rate / TONE_FREQUENCY);
      }
 
      frame.data = _audio_data.data();
      return frame;
    }
};
```

The video frame class is essentially generating a static RGB frame every time `CustomVideoFrame::get_buffer` gets called. For your scenario, you should create your video frame class so that it takes your raw frame data as input, as well as any other important information, like the size and pixel format. `VideoFrame::get_buffer` should fill the provided buffer, which is pre-allocated before calling the function, with data that is of the same frame type as what is returned by `VideoFrame::get_type`.

For audio, you need to instantiate a `millicast::AudioFrame` object, and fill that object with the following information: 

- A pointer to the audio data (for which the SDK holds no ownership and needs to be managed)
- The bit depth (or bits per sample)
- The number of channels
- The sample rate, **which must be 48 kHz**.
- The number of frames. This is dependent on the length of each frame. For example, if each frame equates to 10 milliseconds, then the number of frames should be `10 ms * 48 kHz = 480 frames`. 

With the information above, make sure your audio data buffer's size is equal to the following:

```
CHUNK_SIZE = 10 // milliseconds. this is an example length of each frame
NUMBER_OF_FRAMES = CHUNK_SIZE * SAMPLE_RATE
BUFFER_SIZE = NUMBER_OF_FRAMES * (BIT_DEPTH / 8) * NUMBER_OF_CHANNELS // in bytes.
```

In this specific example, we have created a `CustomSineAudioFrame` class that generates Sine audio at a specific frequency. 

### Creating and publishing a custom source

Now that we have our Audio/Video frame classes ready, we can start instantiating an audio and video source:

```cplusplus
#include <chrono>
#include <thread>

#include <millicast-sdk/client.h>
#include <millicast-sdk/media.h>
#include <millicast-sdk/publisher.h>

//... Include the frame classes here...

void create_custom_source_and_publish() {
  auto vsource = millicast::CustomVideoSource::Builder{}.build();
  auto asource = millicast::CustomAudioSource::Builder{}.build();

  // Those tracks can now be added just as any other track to our publisher.
  // (Refer to the other documentation to learn how to perform a simple
  // publishing scenario)
  auto video_track = vsource->start_capture();
  auto audio_track = asource->start_capture();

  // Create publisher and add tracks here ...

  // Start two simple threads to generate audio and video frames
  std::thread audio_thread([asource]() {
    constexpr auto SAMPLE_RATE = 48000;  // 48kHz
    constexpr auto NUM_CHANNELS = 2;     // Stereo
    constexpr auto CHUNK_TIME = 10;  // Each sample equates to 10ms of playtime.
    constexpr auto TOTAL_TRACK_LENGTH =
        25000;  // 25 seconds of playtime (arbitrary length)

    CustomSineAudioFrame frame_generator(SAMPLE_RATE, NUM_CHANNELS, CHUNK_TIME);

    for (auto i = 0; i < TOTAL_TRACK_LENGTH / CHUNK_TIME; i++) {
      millicast::AudioFrame audio_frame =
          frame_generator.generate_sine_audio_frame();
      asource->on_audio_frame(audio_frame);
      std::this_thread::sleep_for(std::chrono::milliseconds(CHUNK_TIME));
    }
  });

  std::thread video_thread([vsource]() {
    constexpr auto FPS = 60;                  // 60 frames per second
    constexpr auto NUM_FRAMES = 60 * 25;      // 25 seconds of playtime
    CustomVideoFrame video_frame(255, 0, 0);  // Just a red frame

    for (auto i = 0; i < NUM_FRAMES; i++) {
      vsource->on_video_frame(video_frame);
      std::this_thread::sleep_for(std::chrono::milliseconds(1000 / FPS));
    }
  });

  // Connect and publish here ...

  // When done, stop the capture
  asource->stop_capture();
  vsource->stop_capture();

  // Make sure to join the threads here
  audio_thread.join();
  video_thread.join();
}
```

With the audio and video source instantiated, the frames can now be passed as inputs to the `Publisher` object. To learn more about publishing a stream from the native SDKs explore the [Native SDK guides](/millicast/client-sdks/index.md) in the Client SDKs section of the documentation.

## Using the iOS API

### Creating custom audio and video frame classes

To ingest raw frames, you first must download and install the appropriate [Millicast Native SDK](https://github.com/millicast/millicast-native-sdk/releases). Before you begin using the SDK, it is recommended you review the list of [supported operating systems](https://github.com/millicast/millicast-native-sdk#millicast-native-sdk), [audio encoding limitations](https://github.com/millicast/millicast-native-sdk#audio-codecs-and-quality---encoding), and [video encoding limitations](https://github.com/millicast/millicast-native-sdk#video-codecs-and-quality---encoding) as various limitations may impact your project. Additionally, if you encounter a bug, please [open an issue](https://github.com/millicast/millicast-native-sdk/issues) on the native project.

Similarly to the Core API, in Swift, we need to create a custom video frame class that represents a static RGB color and an audio frame class that generates a SINE tone.

```swift
import MillicastSDK

class CustomVideoFrame: NSObject, MCVideoFrame {

  /**
  		This should return the correct frame type to what you
  		store in this frame buffer. Video types supported can be found
		here: https://millicast.github.io/doc/latest/cpp/objc_2_millicast_s_d_k_2capabilities_8h.html#ac37bb3c55eced5c69ad84759f23e6c90
  */
  func frameType() -> MCVideoType {
    return ARGB;
  }
  
  static let WIDTH: Int32 = 640;
  static let HEIGHT: Int32 = 480;
  
  var _r, _g, _b: UInt8;
  
  init(_r: UInt8, _g: UInt8, _b: UInt8) {
    self._r = _r
    self._g = _g
    self._b = _b
  }
  
  func width() -> Int32 {
    return CustomVideoFrame.WIDTH;
  }
  
  func height() -> Int32 {
    return CustomVideoFrame.HEIGHT;
  }
  
  /**
  		This should return the size of the frame buffer if your frame is an RGB frame. 
  */ 
  func sizeRgb() -> UInt32 {
    return UInt32(width() * height() * 4);
  }

  /**
    	This should return the size of the frame buffer if your frame is an I420 frame. For example, the formula
    	for calculating the size of an I420 frame is frame_size = width * height * 3 / 2 . 
		Ignore this if your frame is not I420.
  */
  func sizeI420() -> UInt32 {
    return 0;
  }

  /**
        Implementing as empty since our frame is RGB.
  */
  func sizeI444() -> UInt32 {
    return 0;
  }

  /**
        Implementing as empty since our frame is RGB.
  */
  func getI444Buffer(_ buffer: UnsafeMutablePointer<UInt8>!) {
    return;
  }
  
  /**
        If your frame buffer is I420, you should implement this instead.
		You need to fill the provided buffer with your frame buffer.
  */
  func getI420Buffer(_ buffer: UnsafeMutablePointer<UInt8>!) {
    return;
  }


  func getRgbBuffer(_ buffer: UnsafeMutablePointer<UInt8>!) {
    let size = Int(sizeRgb());
    for i in stride(from: 0, to: size - 1, by: 4) {
      buffer[i] = 255; // Alpha-channel
      buffer[i + 1] = _r;
      buffer[i + 2] = _g;
      buffer[i + 3] = _b;
    }
  }

  func getI420Buffer(_ buffer: UnsafeMutablePointer<UInt8>!) {
	// If your frame type is I420, you need to fill the buffer
	// here instead. 
  } 
}

class CustomSineAudioFrame {
  
  var _audioData: UnsafeMutablePointer<Float32>;
  var _bufferSize: Int;
  
  var _sampleRate: Int;
  var _numChannels, _chunkTime: Int;
  
  var _sini: Int;
  
  static let PI: Float = 3.14159264;
  static let TONE_FREQUENCY: Int = 480 // 480 Hz
  
  init(_sampleRate: Int, _numChannels: Int, _chunkTime: Int) {
    self._sini = 0;
    self._sampleRate = _sampleRate;
    self._numChannels = _numChannels;
    self._chunkTime = _chunkTime;
    
    self._bufferSize = _numChannels * _sampleRate * _chunkTime / 1000;
    self._audioData = UnsafeMutablePointer<Float32>.allocate(capacity: self._bufferSize);
  }
  
  func generate_sine_audio_frame() -> MCAudioFrame {
    var frame: MCAudioFrame = MCAudioFrame();
    frame.bitsPerSample = 32; // We are using Float32
    frame.channelNumber = self._numChannels;
    frame.sampleRate = Int32(self._sampleRate);
    frame.frameNumber = Int(self._sampleRate * self._chunkTime / 1000);
    

    
    for j in stride(from:0, to: self._bufferSize, by: self._numChannels) {
      let constant = 2.0 * Float(CustomSineAudioFrame.TONE_FREQUENCY) * CustomSineAudioFrame.PI;
      let x: Float = Float(_sini) *  constant / Float(_sampleRate);
      let value: Float = sin(x);
      for k in 0...Int(self._numChannels) - 1 {
        self._audioData[j+k] = value;
      }

      // Our cycle
      self._sini += 1 ;
      self._sini %= (self._sampleRate / CustomSineAudioFrame.TONE_FREQUENCY);
    }
    
    frame.data = UnsafeRawPointer(self._audioData);
    
    return frame;
  }
  
  deinit {
    self._audioData.deallocate();
  }
  
}
```

We also will create threads in Swift to handle feeding the source with raw audio and video frames: 

```swift
class VideoThread: Thread {
  
  var _source: MCCoreVideoSource;
  let waiter = DispatchGroup()

  static let FPS: Int = 60; // Running at 60 frames per second
  static let DURATION: Int = 25 // 25 seconds of playtime per thread
  
  init(_source: MCCoreVideoSource) {
    self._source = _source;
    super.init();
  }
  
  override func start() {
      waiter.enter()
      super.start()
  }

  override func main() {
      task()
      waiter.leave()
  }

  func task() {
    var pixelBuffer: CVPixelBuffer? = nil
    CVPixelBufferCreate(kCFAllocatorDefault, 1280, 720, kCVPixelFormatType_32BGRA, nil, &pixelBuffer);
    for _ in 0...Int(VideoThread.FPS * VideoThread.DURATION) {
      _source.onPixelBuffer(pixelBuffer);
      Thread.sleep(forTimeInterval:1.0/Double(VideoThread.FPS));
    }
  }

  func join() {
      waiter.wait()
  }
}

class AudioThread: Thread {
  
  var _source: MCCustomAudioSource;
  let waiter = DispatchGroup()

  static let SAMPLE_RATE = 48000; // 48kHz
  static let NUM_CHANNELS = 2; // Stereo
  static let CHUNK_TIME = 10; // Each sample equates to 10ms of playtime.
  static let TOTAL_TRACK_LENGTH = 25000; // 25 seconds of playtime (arbitrary length)

  init(_source: MCCustomAudioSource) {
    self._source = _source;
    super.init();
  }
  
  override func start() {
      waiter.enter()
      super.start()
  }

  override func main() {
      task()
      waiter.leave()
  }

  func task() {
    var frame_generator: CustomSineAudioFrame = CustomSineAudioFrame(
      _sampleRate: AudioThread.SAMPLE_RATE,
      _numChannels: AudioThread.NUM_CHANNELS,
      _chunkTime: AudioThread.CHUNK_TIME);
    
    let duration: Int = Int(AudioThread.TOTAL_TRACK_LENGTH / AudioThread.CHUNK_TIME);
    for _ in 0...duration {
      _source.onAudioFrame(frame_generator.generate_sine_audio_frame());
      Thread.sleep(forTimeInterval:Double(AudioThread.CHUNK_TIME)/1000.0);
    }
  }

  func join() {
      waiter.wait()
  }
}
```

### Creating and publishing a custom source

As with the Core API example, the only thing left now is to instantiate the custom sources, add them to the publisher, and start up the threads:

```swift
func createCustomSourceAndPublish() {
  var vsource: MCCoreVideoSource = MCCoreVideoSourceBuilder().build();
  var asource: MCCustomAudioSource = MCCustomAudioSourceBuilder().build();

  // Those tracks can now be added just as any other track to our publisher.
  // (Refer to the other documentation to learn how to perform a simple publishing scenario)
  var video_track = vsource.startCapture();
  var audio_track = asource.startCapture();

  // Create publisher and add tracks here ...

  // Create and start threads
  var videoThread: VideoThread = VideoThread(_source: vsource);
  var audioThread: AudioThread = AudioThread(_source: asource);
  videoThread.start();
  audioThread.start();

  // Connect and publish here ...
  

  // Once done, stop the capture
  asource.stopCapture();
  vsource.stopCapture();

  // Join the threads
  videoThread.join();
  audioThread.join();
}
```

With the audio and video source instantiated, the frames can now be passed as inputs to the `Publisher` object. To learn more about publishing a stream from the native SDKs explore the [Native SDK guides](/millicast/client-sdks/index.md) in the Client SDKs section of the documentation.

## Using the Android API

### Creating custom audio and video frame classes

To ingest raw frames, you first must download and install the appropriate [Millicast Native SDK](https://github.com/millicast/millicast-native-sdk/releases). Before you begin using the SDK, it is recommended you review the list of [supported operating systems](https://github.com/millicast/millicast-native-sdk#millicast-native-sdk), [audio encoding limitations](https://github.com/millicast/millicast-native-sdk#audio-codecs-and-quality---encoding), and [video encoding limitations](https://github.com/millicast/millicast-native-sdk#video-codecs-and-quality---encoding) as various limitations may impact your project. Additionally, if you encounter a bug, please [open an issue](https://github.com/millicast/millicast-native-sdk/issues) on the native project.

Similar to the core API, we should begin by implementing the `VideoFrame` interface and create a wrapper class for `AudioFrame`:

> 🚧 The Java API uses short to store the audio data.
> 
> In generating the sine values, which range between [0-1], we are required to scale the value to a larger range. Therefore, we use an amplitude of 2^15, which is essentially the size of a signed short.

```java
import com.millicast.VideoFrame;
import com.millicast.VideoType;
import com.millicast.AudioFrame;

class CustomVideoFrame implements VideoFrame {

	private static final int WIDTH = 640;
	private static final int HEIGHT = 480;

    private byte _r, _g, _b;
    
    public CustomVideoFrame(byte r, byte g, byte b) {
        this._r = r;
        this._g = g;
        this._b = b;
    }
    
    @Override
    public int width() {
        return WIDTH;
    }

    @Override
    public int height() {
        return HEIGHT;
    }    

	/**
		Override this to return the corresponding frame type to the frame buffer you store
    	within the frame buffer. Video types supported can be found here
		https://millicast.github.io/doc/latest/android/com/millicast/VideoType.html
    */
    @Override
    public VideoType getType() {
        return VideoType.ARGB;
    }  	

	/**
		Override this to return the size corresponding to the frame type you
    	store within the frame buffer. For example, for I420 frames, the formula for calculating
		the size is width * height * 3/2
  	*/       
	@Override
    public int size(VideoType videoType) {
        return width() * height() * 4;
    } 
   
	/**
    	Buffer is pre-allocated based on size. You are required to fill
		the provided buffer with the frames you have, which should also correspond
    	to the getType() you defined earlier. For example, if you would like to
    	pass I420 frames, then getType() should return VideoType.I420
		and your buffer should be of that type, and you should copy it into "buffer".
  	*/
    @Override
    public void getBuffer(VideoType videoType, byte[] buffer) {
        for(int i = 0; i < size(videoType); i+=4) {
            buffer[i] = (byte) 255;
            buffer[i+1] = _r;
            buffer[i+2] = _g;
            buffer[i+3] = _b;
        }
    }
}

class CustomSineAudioFrame {
    private final byte[] _audioData;

    private int _sampleRate = 0;
    private int _numChannels = 0;
    private int _chunkTime = 0;

    private int _sini = 0;

    static final int TONE_FREQUENCY = 480; // 480Hz
    static final int AMPLITUDE = (int) Math.pow(2, 15); // We will be amplifying the SINE since we are storing in
    // short instead of float.
    public CustomSineAudioFrame(int sampleRate, int numChannels, int chunkTime) {
        _sampleRate = sampleRate;
        _numChannels = numChannels;
        _chunkTime = chunkTime;

        int bufferSize = 2 * numChannels * sampleRate * chunkTime / 1000;


        _audioData = new byte[bufferSize];
    }
    AudioFrame generate_sine_audio_frame() {
        AudioFrame frame = new AudioFrame();
        frame.bitsPerSample = 16;
        frame.numChannels = _numChannels;
        frame.sampleRate = _sampleRate;
        frame.numFrames = _sampleRate * _chunkTime / 1000;

        // our cycle

        for(int j = 0; j < _audioData.length / 2; j+=_numChannels * 2) {
            short value = (short) (AMPLITUDE * (Math.sin(_sini * TONE_FREQUENCY * 2.f * Math.PI / _sampleRate)));
            byte[] valueAsBytes = ByteBuffer.allocate(2).putShort(value).order(ByteOrder.LITTLE_ENDIAN).array();
            for(int k = 0; k < _numChannels; k++){
                _audioData[j+2*k]   = valueAsBytes[0];
                _audioData[j+2*k+1] = valueAsBytes[1];
            }
            _sini = (_sini + 1) % (_sampleRate / TONE_FREQUENCY);
        }

        frame.audioData = _audioData;
        return frame;
    }
}
```

### Creating and publishing a custom source

Similarly to the Core API example, do the following in order to create and publish a custom stream:

```java
//... Include the frame classes here...
import com.millicast.CustomSource;
 
 
 
/**
    We will create timer tasks to perform our audio and video input. Assuming you
    insert this in your class somewhere.
*/
private final Timer videoTimer = new Timer();
private final Timer audioTimer = new Timer();
 
private final TimerTask videoTask = new TimerTask() {
    // Red frame
    CustomVideoFrame frame = new CustomVideoFrame((byte) 255, (byte) 0, (byte) 0);
 
    @Override
    public void run() {
        customSource.onVideoFrame(frame);
    }
};
 
private final TimerTask audioTask = new TimerTask() {
    final int SAMPLE_RATE = 48000; // 48kHz
    final int NUM_CHANNELS = 2; // Stereo
    final int CHUNK_TIME = 10; // Each sample equates to 10ms of playtime.
 
    CustomSineAudioFrame frame_generator = new CustomSineAudioFrame(
            SAMPLE_RATE, NUM_CHANNELS, CHUNK_TIME);
    @Override
    public void run() {
        AudioFrame audio_frame = frame_generator.generate_sine_audio_frame();
        customSource.onAudioFrame(audio_frame);
    }
};
 
/**
    Some method in your class
*/
void create_custom_source_and_publish() {
  CustomSource source = CustomSource.create();
 
  // Those tracks can now be added just as any other track to our publisher.
  // (Refer to the other documentation to learn how to perform a simple publishing scenario)
  VideoTrack videoTrack = (VideoTrack) source.startCaptureVideo();
  AudioTrack audioTrack = (AudioTrack) source.startCaptureAudio();
     
 
  // Start our timers
  final int CHUNK_TIME = 10; // Each audio chunk is 10ms
  final int FPS = 60; // We will be inputting frames at 60 frames per second.
  videoTimer.schedule(videoTask, 0, 1000/FPS);
  audioTimer.schedule(audioTask, 0, CHUNK_TIME);

  // Connect and publish here ...

  // When done, stop the capture
  source.stopCapture();

  // Make sure to join the threads here
  videoThread.join();
  audioThread.join(); 
}
```

With the audio and video source instantiated, the frames can now be passed as inputs to the `Publisher` object. To learn more about publishing a stream from the native SDKs explore the [Native SDK guides](/millicast/client-sdks/index.md) in the Client SDKs section of the documentation.
