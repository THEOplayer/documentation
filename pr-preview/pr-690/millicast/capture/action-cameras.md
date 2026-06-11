# Action Cameras

Sports and action cameras are designed to capture fast movements or provide a point-of-view perspective while in motion. Many of these types of cameras support WebRTC or RTMP output that can be used as a broadcast streaming source.

This guide has a few examples:

1. [Using the GoPro Quik App](#using-the-gopro-quik-app)
2. [Using the GoPro Webcam Utility](#using-the-gopro-webcam-utility)

If you are using an action camera that is not listed, you should be able to use similar settings for configuring streaming with an [RTMP](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md) ingestion source.

## GoPro[​](#gopro "Direct link to GoPro")

![GoPro](https://dolby.io/wp-content/uploads/2023/01/Dolby.io_Live-Stream-With-GoPro-Via-Dolby.io-Streaming@3x-100-2048x847.jpg)

[GoPro](https://gopro.com/) is a leader in action cameras. With the latest models of GoPro cameras, you can achieve sub-second latency by streaming with RTMP from your GoPro directly to OptiView Real-time Streaming for [distribution](/documentation/pr-preview/pr-690/millicast/distribution.md) over WebRTC.

* GoPro HERO Black
* GoPro MAX

OptiView Real-time Streaming Dashboard - Publish Token Details

You will need to have your OptiView **publishing token** and **stream name** in order to complete this setup. See the [Getting Started](/documentation/pr-preview/pr-690/millicast/getting-started/using-the-dashboard.md) guide for instructions on creating a new app for the first time. You will also need the **RTMP publish path** from the *Publishing* tab in the OptiView Real-time Streaming Dashboard. See the [RTMP](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md) guide for more detail on where to find it.

### Using the GoPro Quik App[​](#using-the-gopro-quik-app "Direct link to Using the GoPro Quik App")

The GoPro [Quik App](https://gopro.com/en/us/shop/quik-app-video-photo-editor) allows remote connections to manage the camera and its settings since the GoPro HERO7 Black.

An overview of the steps to begin capturing from a GoPro include:

1. Select Live Stream While Connected to Camera
2. Select RTMP as Platform
3. Enter your OptiView RTMP Publish URL
4. Go Live

The **Quick App** is a GoPro product, so the user interface and instructions may change in future releases from what is described below. Visit the official [GoPro Support](https://community.gopro.com/s/?language=en_US) for resources like product manuals, help articles, and video tutorials on using the app if you have any questions.

#### 1. Select live stream while connected to camera[​](#1-select-live-stream-while-connected-to-camera "Direct link to 1. Select live stream while connected to camera")

The *Live Stream* button begins setup of a live stream for the camera.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/go-pro-hero8-camera-quik-app-live-stream-98eb5f4aa3b3e2fde966f2d21636c83e.png)

#### 2. Select RTMP as platform[​](#2-select-rtmp-as-platform "Direct link to 2. Select RTMP as platform")

Some of the popular public streaming options are listed. To set up your private stream using OptiView Real-time Streaming, select *RTMP* from the options.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/go-pro-quik-live-stream-rtmp-8102260764b14fc4c8ea375c2b0d5d86.jpg)

#### 3. Enter your OptiView RTMP publish path[​](#3-enter-your-optiview-rtmp-publish-path "Direct link to 3. Enter your OptiView RTMP publish path")

The *Publishing* tab of the *Live broadcast - Publish tokens* section of the OptiView Real-time Streaming Dashboard includes the details you need.

> `RTMP publish path` + `/` + `RTMP publish stream name`

You can note that the **RTMP publish stream name** is already a concatenation of the *publishing token* and *stream name*. Typically this will look something similar to:

```text
rtmp://rtmp-auto.millicast.com:1935/v2/pub/${streamName}?token=${publishToken}

```

Connect to a local network and include this as the **RTMP URL**. Pick the resolution that best suits your needs.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/gopro-stream-to-rtmp-1aa4ab29b8c41f4dee1b70dd2700946c.png)

Click the *Set Up Live Stream* button.

#### 4. Go live[​](#4-go-live "Direct link to 4. Go live")

When ready to start capturing, click the `Go Live` button.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/gopro-quik-go-live-7a376bf6239f84f8e7a4a78951311729.png)

The Quik app will show you a timecode for the duration of the stream as well as an indicator of *Stream Health* from the local network performance as indicated by the bit rate.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/gopro-stream-health-1de8ea654dbac5798c90f76b12c37501.png)

To verify everything is working, you view the stream using any suitable [playback](/documentation/pr-preview/pr-690/millicast/playback.md) method, such as the hosted web viewer described in the [Getting Started](/documentation/pr-preview/pr-690/millicast.md) guide available directly from the OptiView Real-time Streaming Dashboard.

### Using the GoPro webcam utility[​](#using-the-gopro-webcam-utility "Direct link to Using the GoPro webcam utility")

The GoPro [Webcam](https://community.gopro.com/s/article/GoPro-Webcam?language=en_US) desktop utility for Mac or Windows allows you to configure a GoPro HERO8 Black or later camera to capture a stream much like you would any other [web cameras](/documentation/pr-preview/pr-690/millicast/capture/web-cameras.md) attached to a computer.

The **Webcam Utility** is a GoPro product, so the behavior and instructions may change in future releases from what is described below. Visit the official [GoPro Support](https://community.gopro.com/s/?language=en_US) for resources like Product Manuals, Help Articles, and Video Tutorials on using the app if you have any questions.

#### Stream with the OptiView Real-time Streaming Dashboard[​](#stream-with-the-optiview-real-time-streaming-dashboard "Direct link to Stream with the OptiView Real-time Streaming Dashboard")

With the GoPro Webcam utility, your GoPro camera will be present as an option from the media device selection. Follow the same instructions for broadcasting described in [Part 1: Using the Streaming Dashboard](/documentation/pr-preview/pr-690/millicast/getting-started/using-the-dashboard.md).

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/GoPro_Web_Cam-084b4e33d85f60bdeaec61291ca0c7ca.png)

#### Stream using a GoPro from OBS[​](#stream-using-a-gopro-from-obs "Direct link to Stream using a GoPro from OBS")

Similar to using the OptiView Real-time Streaming Dashboard, you can select the GoPro Webcam from the list of available devices. See the [OBS](/documentation/pr-preview/pr-690/millicast/software-encoders/obs.md) guide for more detail on how to configure OBS to broadcast the captured stream.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/GoProOBS-fa893a74687345862f0299a9c8279e48.png)

### Troubleshooting[​](#troubleshooting "Direct link to Troubleshooting")

If you run into any trouble, see the official [GoPro Support](https://community.gopro.com/s/?language=en_US) for resources like Product Manuals, Help Articles, and Video Tutorials on using the app if you have any questions.

## Learn more[​](#learn-more "Direct link to Learn more")

Once you have configured your camera for capture, visit the [broadcast](/documentation/pr-preview/pr-690/millicast/broadcast.md), [distribution](/documentation/pr-preview/pr-690/millicast/distribution.md), and [playback](/documentation/pr-preview/pr-690/millicast/playback.md) guides to complete your project.

If you have a different type of action camera than the ones listed, reach out to our [support team](https://support.dolby.io/) to ask about compatibility.
