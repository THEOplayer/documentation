# How can I distribute 4K content?

The ability to play 4k mostly depends on hardware.
While the video player is responsible for passing on the data to the decoders, limitations to 4K playback often stem from the device, hardware, operating system or platform (e.g. Chrome, iOS app, Android TV app, ...).
When either of these is unable to handle 4K content, you might be out of luck. It's important to ensure all of these boxes are checked.

_Why?_ Streams above 1080p, like 4K (i.e. 2160p) and 8K, are usually packaged through codecs like HEVC (H.265), VP9 and AV1. Your device, hardware, operating system or platform might not be able to decode the selected codec. For example, Chrome lacks support for decoding HEVC. It's also possible that your platform doesn't support a specific codec profile or feature (e.g. HDR through Dolby Vision at 60fps) of a selected codec.
While technically you can also do 4K streaming with AVC (H.264), it is often too inefficient from a bandwidth perspective.
We will leave this out of scope for the remainder of the document.

## Common issues when playing 4K content

Let's zoom in on our previous statement:

> Limitations to playback of 4K often stem from the device, hardware, operating system or platform.

One of these individual components could be disrupting support for 4K streaming.

- Device ─ Your device might not have the capabilities to render the codec which represents your stream, or you might be using a model which doesn't support the selected codec. For example, Chromecast devices from Generation 1, 2, 3 and 4 only support H.264 and VP8 up until 1080p, and don't offer any support for 4K. However, the [Chromecast Ultra](https://developers.google.com/cast/docs/media#video_codecs) does offer 4K streaming through HEVC and VP9 including HDR at 60fps.
- Hardware ─ You might be connecting a device to a monitor incapable of rendering 4K, or you might be using a cable which cannot transfer your stream at the required rate. The leveraged hardware will usually downscale your video or even provide no feed at all.
- Operating System & Environment ─ Your operating system might not offer decoding support for a specific codec. For example, Apple didn't add support for 4K to iPhones until iOS 11 through HEVC. Chrome still doesn't support HEVC across any platform (except for on the iOS platform), and you have to use VP9 or AV1 to decode a 4K stream when using the browser.
- Platform ─ Your platform might not offer decoding support for a specific codec. For example, Android offers decoding support for 4K through HEVC through Android applications, but not through Android browsers like Chrome.

## 4K supported platforms

It's tough to provide a global view on platforms which support 4K streaming. In theory, you would have to maintain an overview of all supported codecs (and codec profiles and features) per version per model per platform.
You could then consult this overview to check if your selected codec (and profiles/features) are supported on your targeted platforms.
This overview would be challenging to maintain, because updates to platforms change the support for certain codecs, and new models of a specific platform could offer different support for a specific codec. For example, while the Chromecast Generation 4 offers no support for 4K through HEVC, Chromecast Ultra does.

Please consider the table below as a generic snapshot in time. The platforms below can handle 4K streaming, but only if the appropriate codecs, platform versions and device (models) are used.
It's perfectly possible that you're not able to get your 4K stream to run on one of the platforms listed below, for example because you're using an unsupported codec.

| Platform                                                                                        | Notes                                                                                                 | THEOplayer SDK          |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------- |
| Browser                                                                                         | Depends on the device, browser and codec                                                              | Web SDK                 |
| [iOS](https://www.apple.com/iphone/)                                                            | Depends on the device and codec, but could support:<br>HDR10, Dolby Vision, HEVC                      | iOS/tvOS SDK            |
| [iPadOS](https://www.apple.com/ipad-pro/specs/)                                                 | Depends on the device and codec, but could support:<br>HDR10, Dolby Vision, HEVC                      | iOS/tvOS SDK            |
| [Apple TV](https://www.apple.com/lae/apple-tv-4k/specs/)                                        | Depends on the device and codec, but could support:<br>HDR10, Dolby Vision, HEVC SDR with 60fps, HEVC | iOS/tvOS SDK            |
| [Android](https://developer.android.com/guide/topics/media/media-formats)                       | Depends on the device and codec                                                                       | Android/Fire TV SDK     |
| [Android TV](https://developer.android.com/guide/topics/media/media-formats)                    | Depends on the device and codec                                                                       | Android/Fire TV SDK     |
| [AirPlay](https://www.apple.com/airplay/)                                                       | Depends on the device and codec                                                                       | Web SDK, iOS SDK        |
| [AirPlay 2](https://www.apple.com/lae/ios/home/accessories/#section-tv)                         | Depends on the device and codec                                                                       | Web SDK, iOS SDK        |
| [Chromecast Receiver](https://developers.google.com/cast/docs/media)                            | Depends on the device and codec, but could support:<br>HDR10, Dolby Vision, HEVC, VP9, 60fps          | Web SDK, Chromecast SDK |
| [Chromecast TV](https://www.google.com/chromecast/built-in/tv/)                                 | Depends on the device and codec.                                                                      | Web SDK, Chromecast SDK |
| [Fire TV](https://developer.amazon.com/docs/fire-tv/device-specifications.html)                 | Depends on the device and codec, but could support:<br>HDR10, Dolby Vision, HEVC, VP9, AV1, 60fps     | Android/Fire TV SDK     |
| [Roku](https://developer.roku.com/en-gb/docs/specs/streaming.md)                                | Depends on the device and codec, but could support:<br>HDR10, Dolby Vision, HEVC, VP9, 60fps          | Roku SDK                |
| [Tizen](https://developer.samsung.com/smarttv/develop/specifications/media-specifications.html) | Depends on the device and codec, but could support:<br>HEVC, VP9, AV1, 60fps, 8K                      | Web SDK                 |
| [webOS](https://webostv.developer.lge.com/develop/specifications/video-audio-230)               | Depends on the device and codec, but could support:<br>HEVC, AV1, 60fps, 8K                           | Web SDK                 |
| [Xbox](https://www.xbox.com/en-US/consoles/xbox-one-x)                                          | Depends on the device and codec                                                                       | Web SDK                 |
| [PlayStation](https://www.playstation.com/en-us/ps5/ps5-entertainment)                          | Depends on the device and codec                                                                       | Web SDK                 |

As this table is in flux, when you decide to implement 4K we encourage you to investigate if anything has changed for the platforms you are targeting (tip: searching for keywords like "Chromecast Media Capabilities 4K" often provides good results) or to reach out to the THEO support team with specific questions.

## Video players and decoding

Video players usually don't do software decoding and instead rely on the native decoding capabilities offered by the selected platform through a native API as player-based decoding would be highly inefficient for power consumption and often requires a lot of computational performance.
For example, on Desktop Chrome, video players leverage the [Media Source Extensions API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API) to decode the actual H.264 (or VP9 or AV1 or ...) codec representing your stream.

That being said, a video player might still be the one to blame when your viewers aren't seeing the beautiful 4K representation of your stream. Your video player should be able to correctly parse, extract and leverage the 4K stream from your HLS or MPEG-DASH manifest when your 4K representation can be applied. This functionality might not be implemented in your video player.

THEOplayer supports 4K streaming out of the box. For specific devices, specific configuration recommendations can apply in order to achieve 4K streaming efficiently.
