# How to prevent screen recording

This article explains what screen recording is, and how to counter it.

**Table of Contents**

1. [What is screen recording](#what-is-screen-recording)
2. [How to counter screen recording](#how-to-counter-screen-recording)
3. [Video players and screen recording](#video-players-and-screen-recording)
   1. [THEOplayer and screen recording](#theoplayer-and-screen-recording)
4. [Conclusion](#conclusion)

## What is screen recording

We define "screen recording" (also known as "screen capturing") as the malpractice of illegally recording video streams on a website or application of a content provider.

- These screen recordings may be redistributed on platforms which are not owned by the content provider.
- This unconsented redistribution may impact the business of the content provider.

Screen recordings - and redistribution of screen recordings - is considered a major, (arguably) unsolved issue in the video industry.
All content providers - including Netflix, Disney+ and Hulu - struggle to counter screen recordings.
Most popular providers employ strategies to counter screen recordings, or to reduce the impact of screen recordings.

Creating a screen recording doesn't have to be difficult.

- The camera of a smartphone can be aimed at a screen. Your screen wouldn't know that a smartphone is recording it.
- The record function of Apple's Quicktime Player (or Window's Xbox Game Bar) can be used to record video content playing on Chrome on Windows, macOS and Linux.
  Chrome on Windows, macOS and Linux doesn't offer a native mechanism to prevent screen recording, even when DRM protects the content.

The quality (and bitrate) of a video stream degrades through a screen recording, which is a useful property when the recording leaks.

<details>
<summary>Screen recording versus downloading</summary>
We do not define "screen recording" as the malpractice of illegally downloading and/or decrypting the original video streams on the website or application of a content provider.
* For example, if a pirate (i.e. a user with the intention to steal and/or illegally redistribute content) downloads the source files of an HLS stream (and perhaps removes the encryption),
then they are not doing "screen recording".
* On the other hand, if a "pirate"  uses Quicktime Player to record their screen (which is playing a video in Chrome),
then they are doing "screen recording".
</details>

## How to counter screen recording

There are strategies to prevent screen recordings, and strategies to cope with screen recordings.

- A preventive strategy involves making it more challenging to create screen recordings. (e.g. DRM, plug-ins)
- A coping strategy involves responding to unprevented screen recordings. (e.g. watermarking, limited quality)

You want to consider both strategies as a content provider.

### Strategies to prevent screen recording

Strategies such as [using DRM](#drm) and [restricting the allowed platforms](#restrict-allowed-platforms) make it more challenging to create a screen recording.

However, never assume that you can make screen recording impossible, as "content pirates" will keep identifying and using workarounds.
For example, a common workaround is "Digital-to-Analog", where a smartphone camera could record a screen.
Alternatively, dedicated hardware may also be able to screen recording, such as an HDMI recorder which does follow HDCP, but uses leaked certificates to record the output regardless.

#### DRM

Using an appropriate multi-DRM set-up prevents screen recording.
Many devices and platforms allow you to configure FairPlay, PlayReady and Widevine in such a way that the device and platform
automatically prevents screen recording tools. These configurations rely on the availability on support for hardware DRM.

Reach out to your multi-DRM provider to understand which options they offer to prevent screen recordings,
and how these options affect your targeted platforms.

The following statements are generally true for multi-DRM:

- You can prevent screen recordings on platforms which support hardware DRM.
  The list below represents a set of popular platforms which support hardware DRM:
  _ Windows Edge
  _ macOS Safari
  _ iOS and iPadOS, both for apps and browsers
  _ Android, but only for apps \* Chromecast
- You cannot prevent screen recordings on platforms which do not support hardware DRM.
  The list below represents a set of popular platforms which do not support hardware DRM: \* Chrome browsers (neither Windows nor Apple), because this platform only supports Widevine L3 (and not Widevine L1)

#### Restrict allowed platforms

The previous section establishes that you can prevent screen recordings on many platforms, but not all platforms.
As a content provider, you could decide to only distribute your content on the set of platforms which allow for the prevention of
screen recording through multi-DRM.

In this strategy, you could be forcing users to use another platform than their preferred choice.
For example, disallowing your viewers to use Chrome, means that about 50% of your browser viewers need to switch to another browser.

#### Conclusion on the prevention of screen recording

There are other strategies beyond only allowing your users to watch content on platforms where DRM prevents screen recording.

- For Desktop users, you could try to force your viewers to install a desktop app which prevents screen recording.
  For example, you could offer a HTML5 Electron app which utilizes the [`setContentProtection`](https://www.electronjs.org/docs/api/browser-window#winsetcontentprotectionenable-macos-windows) method to prevent
  screen recording.
- You could try to use technology which prevents screen recording through third-party plugins.
  - This approach (usually) requires the viewer to install an additional piece of software.
  - For example, the viewer may have to install a Chrome extension which monitors computer services, and prevent video playback.
- You could try to use technology which renders the video in such a way that screen recording programs cannot properly capture the video.

The arguably primary industry problem w.r.t. screen recording is the prevention of screen recording on Chrome for Windows and Apple machines,
due to the sheer popularity of this platform.
Should Windows and Apple add support for Widevine L1, then screen recording becomes more challenging on Chrome.
This change would grant a large coverage of protection on the browser market through multi-DRM.

That being said, platform developers are engaging in efforts to make hardware DRM available on an increasing amount of platforms.

### Strategies to cope with screen recording

When you are not able to prevent screen recording, you can employ strategies to cope with it.
For example, you can use [watermarking](#watermarking), or only [allow a limited stream quality](#restrict-qualities) on platforms which cannot prevent screen recording.

#### Watermarking

A forensic or digital watermark allows you to embed an identifier in a video stream.
You can trace the identifier of a leaked screen recording. This tracking allows you to take punitive actions towards users who
created the screen recording.

A forensic watermark should be imperceptible and robust.

- It should not be possible to visually recognize the watermark.
- It should not be possible to remove the watermark.

#### Restrict qualities

You can restrict the available video stream quality to users.
For example, if your viewer is accessing the video stream on a platform which doesn't prevent screen recording through DRM,
you don't allow them to access any quality above 720p.
(_This is a popular strategy among top content providers, including Netflix and Disney+._)

A low-quality, leaked recording (which is even further degraded through the recording process) may reduce its appeal.

#### Conclusion on coping with screen recordings

Watermarking and restricting the quality allow you to react to leaks, and to further reduce its impact.

You may also consider different strategies to reduce the impact of screen recordings.
For example, an AVOD business model would arguably suffer less from this, because viewers can access your content for free,
but you would monetize it through advertisements.

## Video players and screen recording

The influence of a video player on the prevention of screen recording is mainly through its support for DRM.
Meaning, a video player can "indirectly" support the prevention of screen recording,
if the video player is running on a website or app where screen recording is not allowed by the platform due to the employed
DRM strategy.

For example,

- a video player prevents the screen recording of HLS streams protected with FairPlay on macOS,
  because the macOS platform prevents this for FairPlay on Safari.
- a video player does not prevent the screen recording of MPEG-DASH streams protected with Widevine on macOS,
  because the macOS platform doesn't prevent this for Chrome.

The technological limitations of a platform are also the technological limitations of a video player.
The strategies discussed in this article are used in combination with a video player,
but they are not the responsibility of a video player.
For these strategies to work, the implementation and configuration of additional components (e.g. multi-DRM, watermarking, third-party plugin) is mandatory.
These components are not offered by a single video player SDK out-of-the-box.
This means that you have to combine a video player which external components.

### THEOplayer and screen recording

The previous section explains that video players indirectly prevent screen recordings when using the appropriate multi-DRM set-up.
This statement is also true for THEOplayer.

Additionally, THEOplayer is partnered with vendors which offer multi-DRM and watermarking.
These partners are listed at [https://www.theoplayer.com/partners](https://www.theoplayer.com/partners).

## Conclusion

You should tailor your strategy to your needs. Four valid strategies are listed below.

1. Do prevention through DRM, and coping through watermarking and restricting the qualities.
   On platforms which do not prevent screen recording through DRM, you limit your video quality (e.g. 720p).
   If a screen recording leaks, you have reduced the impact. Additionally, through the watermark, you can identify the source of the leak.
   This strategy might frustrate viewers, because they might not be able to view the best quality on their preferred platform.
   (_This approach is used by popular streaming services, including Netflix._)

2. Do prevention through DRM and restricting the allowed platforms, and coping through watermarking.
   You don't allow viewers to watch your content on platforms which do not prevent the screen recording of DRM-protected streams.
   You identify the source of leaks through watermarks.
   This strategy might frustrate viewers, because they might not be able to view the stream on their preferred platform.

3. Do prevention through DRM and plugins, and coping through watermarking.
   You force viewers to install a plugin to view the stream on a platform which don't prevent the screen recording of DRM-protected streams.
   You identify the source of leaks through watermarks.
   This strategy might frustrate viewers, because they need to install a plugin to view the stream on their preferred platform.

4. Do coping through watermarking.
   This strategy doesn't prevent screen recording, but doesn't frustrate viewers. You identify the source of leaks through watermarks.
