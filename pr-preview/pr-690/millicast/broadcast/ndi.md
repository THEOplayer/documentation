# NDI

**NDI**® Tools is a free suite of applications designed to introduce you to the world of IP. NDI makes it possible to connect to any device, in any location, anywhere in the world – and transmit live video to wherever you are. NDI systems and sources on your network. Combine NDI with OptiView Real-time Streaming to deliver real-time video for remote or interactive experiences.

This guide will outline four options for NDI delivery:

1. [How-to Publish NDI with OptiView Real-time Streaming Dashboard Broadcaster](#how-to-publish-ndi-with-optiview-real-time-streaming-dashboard-broadcaster)
2. [How-to Publish NDI with OBS-WebRTC](#how-to-publish-ndi-with-obs-webrtc)
3. [How-to Publish Video Editor with NDI](#how-to-publish-video-editor-with-ndi)
4. [How-to Publish NDI with vMix](#how-to-publish-ndi-with-vmix)

## NDI publishing[​](#ndi-publishing "Direct link to NDI publishing")

Getting Started

If you haven't already, begin by following the [Getting Started](/documentation/pr-preview/pr-690/millicast.md) tutorial to create an OptiView Real-time application and start your first broadcast. You'll need your *publish token* and *stream name* for the steps described below.

Install the [NDI tools](https://ndi.video/type/ndi-tools/) on your computer. If you do not have a NDI camera, you can download NDI HX Camera or similar to test the below workflows on you mobile device.

### How-to publish NDI with OptiView Real-time Streaming Dashboard broadcaster[​](#how-to-publish-ndi-with-optiview-real-time-streaming-dashboard-broadcaster "Direct link to How-to publish NDI with OptiView Real-time Streaming Dashboard broadcaster")

Sign in to your [OptiView Real-time Streaming dashboard](https://streaming.dolby.io/) and create a stream token. Press the broadcast button, and inside the Broadcaster, select the camera icon on the bottom left. Here you will see a list of possible camera selections. If you have an NDI camera like NewTek, Angekis, or AIDA, it will show up in the dropdown, and you are ready to go.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_12.10.26_PM-7c6b47ea304e55627fe8070f6175ac3c.png)

To enable it, open up the NDI Launcher on your computer.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_12.02.46_PM-7ef22cc5e556ea152939955aceb1c7dc.png)

Select the Virtual Input button. Install and launch the NDI app on your mobile device and tap the NDI button, turning it blue, enabling you to share NDI videos on the network.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/IMG_8035-f957f988c33222c1a542b3464c3f0b0b.png)

Run NDI Virtual Input and select your phone from the list.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_12.07.13_PM-2f0cb3a591e489a338fba9524655aa67.png)

Go back into OptiView Broadcaster and select NDI Video from the video devices option in the camera icon. Now, point your mobile device anywhere, and you will see the stream coming in.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_12.11.03_PM-86d92fe369ea62d5f8ced700c210dac3.png)

From here click the "Start" button to begin broadcasting the camera feed globally in real-time with OptiView Real-time Streaming.

### How-to publish NDI with OBS-WebRTC[​](#how-to-publish-ndi-with-obs-webrtc "Direct link to How-to publish NDI with OBS-WebRTC")

[Open Broadcast Software](https://github.com/CoSMoSoftware/OBS-studio-webrtc), OBS, is a popular screencasting and streaming tool available as free, open-source software. After downloading the forked software, open up the program and create a scene by clicking on the "+" of Scenes.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_12.19.40_PM-c0253d90e818b47d5bd9d1548480cb39.png)

With a scene created, a source needs to be added. Press on the "+" of Sources and select Video Capture Device and create a new label for the camera.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_12.20.58_PM-140283e864acd6ed11e32c6503e51ed7.png)

Inside the properties, indicate which NDI camera you will be using. We will continue using NDI HX from a mobile device for this example. If you do not see the NDI option, you may have to add the plug-in [here](https://github.com/Palakis/obs-ndi).

* Note: Since we are testing with [NDI HX](https://ndi.video/), ensure the NDI Virtual Input app is open on your computer with the phone selected from the list. Otherwise, it will show up as a black screen on OBS.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_12.21.16_PM-e3a0356633b3fbc3b22c7ea02644e89b.png)

After that, OBS needs to connect to our OptiView Real-time account. Go to Settings and click on the Stream button to add our stream token information.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_12.36.26_PM-55862ef05302020a3d204b1fd9e45d4e.png)

To obtain the stream name and publishing token, go into the stream token's settings, and from Token Details, copy the information. Visit [our OBS guide](/documentation/pr-preview/pr-690/millicast/software-encoders/obs.md) for any further questions. Close all of the settings and begin streaming. To see the stream, copy the Hosted Player Path from the stream token's Playback.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_12.28.57_PM-7bd38925ec6f9ff2df9912ff2ead372a.png)

### How-to publish video editor with NDI[​](#how-to-publish-video-editor-with-ndi "Direct link to How-to publish video editor with NDI")

NDI can be very useful for enabling real-time, renderless playback and preview over IP right from the timeline of a video editor. Actions like these can allow remote collaboration with creators all over the globe aside from allowing stakeholders to watch your work, in real-time with minimal delay.

First, open Playback Preferences in Premiere Pro.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_12.52.23_PM-a3b3393dc7c822a21154b17e0b72b5fc.png)

Enable NDI in the Video Preview section with NDI Output selected in the Audio Device list as well as the Video Device list.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_12.53.25_PM-95de7cb073fe6125e22ff0256298efd9.png)

Open NDI Virtual Input to select where the broadcast is coming from.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_12.56.47_PM-8f55db6c9026dea08892c5c90e6bb64c.png)

Inside OptiView's Broadcaster, select the camera option to be the NDI video, and you should see the playback before going live on your stream. Afterward, share the viewer link by pressing on the bottom right corner of the Broadcaster. These same steps can be repeated with Adobe After Effect.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_1.03.28_PM-364d45f882a9847eb691859fe1e4d10f.png)

To stream the playback from Final Cut Pro, go into your System Preferences on the Mac and set the Sound > Sound Output as the NDI Audio. For the configuration of the video, search NDI Output in the System Preferences and set the video format and frame rate to be the same as your Final Cut Pro project.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_1.12.23_PM-8662be030b4e3f21aa47ae016cd0c43c.png)![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_1.12.41_PM-3b8be36412d4ded8613982f82293f6ac.png)

Open up a new Final Cut Pro project with it matching your NDI configuration and enable A/V Output in the Window menu. Check that your NDI Virtual Input is selected as Final Cut Pro, and the NDI Video is checked off in the OptiView Broadcaster to see the playback on the stream.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-07_a_1.15.00_PM-29dae75ee3cde4ebf599abadfa2bf779.png)

### How-to publish NDI with vMix[​](#how-to-publish-ndi-with-vmix "Direct link to How-to publish NDI with vMix")

You can also use [vMix as NDI](/documentation/pr-preview/pr-690/millicast/software-encoders/vmix.md) source if you do not wish to purchase the NDI HDX. This allows will allow vMix to be used as your switcher or remote source and flexibility with OptiView Real-time Streaming codecs with real-time publishing.

## Learn more[​](#learn-more "Direct link to Learn more")

Learn more by exploring the [developer blog](https://optiview.dolby.com/resources/blog/tag/broadcast/) and [code samples](https://github.com/orgs/dolbyio-samples/repositories?q=broadcast).
