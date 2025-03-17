---
title: "360 VR Cameras"
slug: /360-cameras
---
Dolby.io Real-time Streaming allows for 360-degree [Real-time broadcasts](https://dolby.io/products/real-time-streaming/). 

Create a 360/VR experience delivered to your audience for real time engagement.

## Simple set up with [Insta360](https://www.insta360.com/) cameras and app

Download the Insta360 [App](https://www.insta360.com/download/hot-download).

1. Connect your phone to the Insta360 app.
2. Enter the shooting preview interface. 
3. Select the the bottom right bars and scroll down.
4. Select the shooting mode to "360 Live".
5. Select RTMP.


![](/img/millicast/insta360.png)



6. Enter you Dolby.io RTMP publishing path.


![](/img/millicast/insta360rtmp.png)



7. Tap the shutter button, and start livestreaming! (Note: During the live stream, please keep the app running in the foreground.)
8. Scroll down to select Viewing options.
9. To stop the live streaming, tap the shutter button again

## Additional 360 camera live-streaming options

This set up be will using a Ricoh Theta 360 camera with a USB connection. It can also be used with any 360 camera that supports camera capture with via USB, NDI or HDMI output. 

The built in Dolby.io Broadcaster can be used or you can also use a 360 video with OBS if no 360 camera is available.

## Installing software required for the computer

Use a high-performance computer and install the required software. This guide uses Windows 11.  
Refer to each software website for details on the installation method.

- [Dolby.io](https://dolby.io) account. The portal can be used to publish your stream.
- [Millicast OBS version](https://github.com/CoSMoSoftware/OBS-studio-webrtc/releases) for maximum bitrate and  
   resolution.
- Web browser Google Chrome for VP9 codec and AV1. 
- AV1 will require Millicast browser publisher with OBS set as a virtual cam. 
- Live streaming drivers for PC [RICOH THETA UVC 4K](https://topics.theta360.com/uk/faq/c_06_v/304_1/)                   
- USB micro cable Theta V plugged into PC. 

## Setting up OBS for your 360 live stream

1. Start OBS WebRTC and select "Settings">"Stream" from the menu.
2. Enter your Dolby.io Real-time Streaming Stream Name and Publishing Token.
3. Select the preferred codec. For best reach, use H264 or VP8. Here I am using VP9 for the best compression at 8000 Kbps.

![](https://files.readme.io/2721a04-3601.png "3601.png")

4. Go to the output settings and select Output Mode > Advanced.

![](https://files.readme.io/66cd58f-3602.png "3602.png")

5. Go to Video Settings and match the base to output 3840x1920 of the Ricoh Theta V.

![](https://files.readme.io/c71ee45-3603.png "3603.png")

7. Add your scene > Create a name for your scene > Add the 360 Camera source. Make sure the output matches the resolution.

![](https://files.readme.io/8e6c839-3604.png "3604.png")

9. Select custom audio at the bottom of your scene selection if you want audio from your 360 camera.

![](https://files.readme.io/4efff43-3605.png "3605.png")

10. To enable the Theta V, power on the camera and tap the mode on the camera until you see the blue mode live on. You should see a blue live flashing.

11. If you have a black screen and the live light is on, deactivate the cam and reactivate the cam on OBS.

12. Start your stream. 

## Viewing your Dolby.io Real-time Streaming 360 stream

1. Go to this [360 VR player](https://rnkvogel.github.io/dolby360-VR/) using Chrome for VP9.  
   _Use codec H264 or VP8 if you would like to view it on mobile devices._
2. Enter your AccountID and StreamName from your Dolby.io developer portal and start player.

 Your 360 stream should now be viewable.  
 You can use your mouse to select your view. 

![](https://files.readme.io/54d84fc-3609.png "3609.png")

The player can be downloaded and customized as needed. 

## VR player

1. Go to this [360 VR player](https://rnkvogel.github.io/dolby360-VR/) using Chrome for VP9.  
   _Use codec H264 or VP8 if you would like to view it on mobile devices._
2. Enter your AccountID and StreamName from your Dolby.io developer portal and start player.

![](https://files.readme.io/54e32f3-vr1.png "vr1.png")

## Video JS

1. Go to this [360 player](https://rnkvogel.github.io/VideoJS-WebRTC/360.html).  
   _Use codec H264 or VP8 if you would like to view it on mobile devices._
2. Enter your AccountID and StreamName from your Dolby.io developer portal and start player.

![](https://files.readme.io/6b9fbd4-videoJS360.png "videoJS360.png")
