# What are the recommended stream settings?

There are many different options to encode your streams. These encoding are often related to the content you are streaming. For example, fast motion movies like sporting events might require higher frame rates and more bandwidth compared to video of static landscape webcams.

The video and audio codecs which are recommended are:

- Video: H.264 in Baseline Profile, Main Profile or High Profile. We advise against the usage of B-frames as this requires the entire chunk to be available before playback can start. It is important to take into account not all platforms will be able to play back the High profile. When setting up encoding profiles, keep in mind the platforms you intend to support.

- Audio: AAC-LC or HE-AAC. It is however important to use the same codec for all audio tracks. Using the same sampling frequency and bitrate is not required, but deviating from this might result in audible changes between streams. Also, when using HE-AAC it is highly recommended to state this in the stream's CODEC-attribute.

With regards to packaging, both raw-audio files (.aac, .mp3, ...) and MPEG Transport Streams can be used. For video, it is recommended to add a full IDR frame (keyframe) at the start of each video chunk.

The following configurations for adaptive streams have proven to work well on most content. Keep in mind some content can be displayed better when tweaking these parameters:

| #    | Resolution | Video settings | Video bitrate | Frame rate | Audio settings | Audio bitrate | Audio sample rate |
| :--: | :--------: | :------------: | :-----------: | :--------: | :------------: | :-----------: | :---------------: |
| 1 | 480x270 | Baseline 3.0 | 500k | 25 fps | HE-AAC | 128k | 44.1kHz |
| 2 | 640x360 | Baseline 3.0 | 900k | 25 fps | HE-AAC | 128k | 44.1kHz |
| 3 | 960x540 | Baseline 3.1 | 1800k | 25 fps | HE-AAC | 128k | 44.1kHz |
| 4 | 1280x720 | Main 3.1 | 4500k | 25 fps | HE-AAC | 128k | 44.1kHz |
| 5 | 1920x1080 | High 4.0 | 8500k | 25 fps | HE-AAC | 128k | 44.1kHz |



For manifest generation, we always advice to add at least the CODECS and RESOLUTION as they will speed up the adaptive bitrate capabilities of the player.

As a reference, Apple also provides a list of recommendations with regards to HLS: [TN2224](https://developer.apple.com/library/ios/technotes/tn2224/_index.html#//apple_ref/doc/uid/DTS40009745-CH1-SETTINGSFILES)