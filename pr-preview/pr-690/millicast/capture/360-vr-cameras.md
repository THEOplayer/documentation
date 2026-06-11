# 360 VR Cameras

OptiView Real-time Streaming allows for 360-degree [Real-time broadcasts](https://optiview.dolby.com/solutions/real-time-streaming/).

Create a 360/VR experience delivered to your audience for real time engagement.

## Simple set up with [Insta360](https://www.insta360.com/) cameras and app[​](#simple-set-up-with-insta360-cameras-and-app "Direct link to simple-set-up-with-insta360-cameras-and-app")

Download the Insta360 [App](https://www.insta360.com/download/hot-download).

1. Connect your phone to the Insta360 app.
2. Enter the shooting preview interface.
3. Select the the bottom right bars and scroll down.
4. Select the shooting mode to "360 Live".
5. Select RTMP.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/insta360-9bd363273de7d44e12a35668f21ff04b.png)

6. Enter your OptiView Real-time RTMP publishing path.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/insta360rtmp-74f6aa35f8267c6ce32579221fee61f7.png)

7. Tap the shutter button, and start livestreaming! (Note: During the live stream, please keep the app running in the foreground.)
8. Scroll down to select Viewing options.
9. To stop the live streaming, tap the shutter button again

## Additional 360 camera live-streaming options[​](#additional-360-camera-live-streaming-options "Direct link to Additional 360 camera live-streaming options")

This set up be will using a Ricoh Theta 360 camera with a USB connection. It can also be used with any 360 camera that supports camera capture with via USB, NDI or HDMI output.

The built in OptiView Broadcaster can be used or you can also use a 360 video with OBS if no 360 camera is available.

## Installing software required for the computer[​](#installing-software-required-for-the-computer "Direct link to Installing software required for the computer")

Use a high-performance computer and install the required software. This guide uses Windows 11.<br /><!-- -->Refer to each software website for details on the installation method.

* [OptiView Real-time Streaming](https://optiview.dolby.com) account. The portal can be used to publish your stream.
* [Millicast OBS version](https://github.com/CoSMoSoftware/OBS-studio-webrtc/releases) for maximum bitrate and resolution.
* Web browser Google Chrome for VP9 codec and AV1.
* AV1 will require Millicast browser publisher with OBS set as a virtual cam.
* Live streaming drivers for PC [RICOH THETA UVC 4K](https://topics.theta360.com/uk/faq/c_06_v/304_1/)
* USB micro cable Theta V plugged into PC.

## Setting up OBS for your 360 live stream[​](#setting-up-obs-for-your-360-live-stream "Direct link to Setting up OBS for your 360 live stream")

1. Start OBS WebRTC and select "Settings">"Stream" from the menu.
2. Enter your OptiView Real-time Streaming Stream Name and Publishing Token.
3. Select the preferred codec. For best reach, use H264 or VP8. Here I am using VP9 for the best compression at 8000 Kbps.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/2721a04-3601-5a9cacd2c328e31a73c4969d1f7f5297.png)

4. Go to the output settings and select Output Mode > Advanced.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/66cd58f-3602-3f7c67ac232c433af497a622efacb02d.png)

5. Go to Video Settings and match the base to output 3840x1920 of the Ricoh Theta V.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/c71ee45-3603-6b84d507c5c13bf7d81f819f488d29ae.png)

7. Add your scene > Create a name for your scene > Add the 360 Camera source. Make sure the output matches the resolution.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/8e6c839-3604-0952d37426468f233df9fa4fd5cecef0.png)

9. Select custom audio at the bottom of your scene selection if you want audio from your 360 camera.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/4efff43-3605-39db157a272aa8049f68057a954c0d1c.png)

10. To enable the Theta V, power on the camera and tap the mode on the camera until you see the blue mode live on. You should see a blue live flashing.

11. If you have a black screen and the live light is on, deactivate the cam and reactivate the cam on OBS.

12. Start your stream.

## Viewing your OptiView Real-time Streaming 360 stream[​](#viewing-your-optiview-real-time-streaming-360-stream "Direct link to Viewing your OptiView Real-time Streaming 360 stream")

1. Go to this [360 VR player](https://rnkvogel.github.io/dolby360-VR/) using Chrome for VP9.
   <br />
   *Use codec H264 or VP8 if you would like to view it on mobile devices.*
2. Enter your AccountID and StreamName from your OptiView developer portal and start player.

Your 360 stream should now be viewable.<br /><!-- -->You can use your mouse to select your view.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/54d84fc-3609-aa833789d534e6e2ea348b15815b4497.png)

The player can be downloaded and customized as needed.

## VR player[​](#vr-player "Direct link to VR player")

1. Go to this [360 VR player](https://rnkvogel.github.io/dolby360-VR/) using Chrome for VP9.
   <br />
   *Use codec H264 or VP8 if you would like to view it on mobile devices.*
2. Enter your AccountID and StreamName from your OptiView developer portal and start player.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/54e32f3-vr1-a4b27596870adf9930c21ca9df813422.png)
