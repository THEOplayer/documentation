---
title: NDI
sidebar_position: 5
---

**NDI**® Tools is a free suite of applications designed to introduce you to the world of IP. NDI makes it possible to connect to any device, in any location, anywhere in the world – and transmit live video to wherever you are. NDI systems and sources on your network. Combine NDI with Dolby.io Real-time Streaming to deliver real-time video for remote or interactive experiences.

This guide will outline four options for NDI delivery:

1. [How-to Publish NDI with Dolby.io Dashboard Broadcaster](#how-to-publish-ndi-with-dolbyio-dashboard-broadcaster)
2. [How-to Publish NDI with OBS-WebRTC](#how-to-publish-ndi-with-obs-webrtc)
3. [How-to Publish Video Editor with NDI](#how-to-publish-video-editor-with-ndi)
4. [How-to Publish NDI with vMix](#how-to-publish-ndi-with-vmix)

## NDI publishing

:::tip Getting Started
If you haven't already, begin by following the [Getting Started](/millicast/introduction-to-streaming-apis.mdx) tutorial to create a Dolby.io application and start your first broadcast. You'll need your _publish token_ and _stream name_ for the steps described below.
:::

Install the [NDI tools](https://ndi.video/type/ndi-tools/) on your computer. If you do not have a NDI camera, you can download NDI HX Camera or similar to test the below workflows on you mobile device.

### How-to publish NDI with Dolby.io dashboard broadcaster

Sign in to your [Dolby.io Real-Time Streaming dashboard](https://dashboard.dolby.io/) and create a stream token. Press the broadcast button, and inside the Broadcaster, select the camera icon on the bottom left. Here you will see a list of possible camera selections. If you have an NDI camera like NewTek, Angekis, or AIDA, it will show up in the dropdown, and you are ready to go.

import CaptureScreen1 from '../assets/img/Capture_decran_2023-07-07_a_12.10.26_PM.png';

<div class="center-container">
    <img src={CaptureScreen1} width="600" />
</div>

To enable it, open up the NDI Launcher on your computer.

import CaptureScreen2 from '../assets/img/Capture_decran_2023-07-07_a_12.02.46_PM.png';

<div class="center-container">
    <img src={CaptureScreen2} width="600" />
</div>

Select the Virtual Input button. Install and launch the NDI app on your mobile device and tap the NDI button, turning it blue, enabling you to share NDI videos on the network.

import IMG8035 from '../assets/img/IMG_8035.png';

<div class="center-container">
    <img src={IMG8035} width="600" />
</div>

Run NDI Virtual Input and select your phone from the list.

import CaptureScreen3 from '../assets/img/Capture_decran_2023-07-07_a_12.07.13_PM.png';

<div class="center-container">
    <img src={CaptureScreen3} width="600" />
</div>

Go back into Dolby.io Broadcaster and select NDI Video from the video devices option in the camera icon. Now, point your mobile device anywhere, and you will see the stream coming in.

import CaptureScreen4 from '../assets/img/Capture_decran_2023-07-07_a_12.11.03_PM.png';

<div class="center-container">
    <img src={CaptureScreen4} width="600" />
</div>

From here click the "Start" button to begin broadcasting the camera feed globally in real-time with Dolby.io.

### How-to publish NDI with OBS-WebRTC

[Open Broadcast Software](https://github.com/CoSMoSoftware/OBS-studio-webrtc), OBS, is a popular screencasting and streaming tool available as free, open-source software. After downloading the forked software, open up the program and create a scene by clicking on the "+" of Scenes.

import CaptureScreen5 from '../assets/img/Capture_decran_2023-07-07_a_12.19.40_PM.png';

<div class="center-container">
    <img src={CaptureScreen5} width="600" />
</div>

With a scene created, a source needs to be added. Press on the "+" of Sources and select Video Capture Device and create a new label for the camera.

import CaptureScreen6 from '../assets/img/Capture_decran_2023-07-07_a_12.20.58_PM.png';

<div class="center-container">
    <img src={CaptureScreen6} width="600" />
</div>

Inside the properties, indicate which NDI camera you will be using. We will continue using NDI HX from a mobile device for this example. If you do not see the NDI option, you may have to add the plug-in [here](https://github.com/Palakis/obs-ndi).

- Note: Since we are testing with [NDI HX](https://ndi.video/), ensure the NDI Virtual Input app is open on your computer with the phone selected from the list. Otherwise, it will show up as a black screen on OBS.

import CaptureScreen7 from '../assets/img/Capture_decran_2023-07-07_a_12.21.16_PM.png';

<div class="center-container">
    <img src={CaptureScreen7} width="600" />
</div>

After that, OBS needs to connect to our Dolby.io account. Go to Settings and click on the Stream button to add our stream token information.

import CaptureScreen8 from '../assets/img/Capture_decran_2023-07-07_a_12.36.26_PM.png';

<div class="center-container">
    <img src={CaptureScreen8} width="600" />
</div>

To obtain the stream name and publishing token, go into the stream token's settings, and from Token Details, copy the information. Visit [our OBS guide](/millicast/broadcast/software-encoders/obs/index.mdx) for any further questions. Close all of the settings and begin streaming. To see the stream, copy the Hosted Player Path from the stream token's Playback.

import CaptureScreen9 from '../assets/img/Capture_decran_2023-07-07_a_12.28.57_PM.png';

<div class="center-container">
    <img src={CaptureScreen9} width="600" />
</div>

### How-to publish video editor with NDI

NDI can be very useful for enabling real-time, renderless playback and preview over IP right from the timeline of a video editor. Actions like these can allow remote collaboration with creators all over the globe aside from allowing stakeholders to watch your work, in real-time with minimal delay.

First, open Playback Preferences in Premiere Pro.

import CaptureScreen10 from '../assets/img/Capture_decran_2023-07-07_a_12.52.23_PM.png';

<div class="center-container">
    <img src={CaptureScreen10} width="600" />
</div>

Enable NDI in the Video Preview section with NDI Output selected in the Audio Device list as well as the Video Device list.

import CaptureScreen11 from '../assets/img/Capture_decran_2023-07-07_a_12.53.25_PM.png';

<div class="center-container">
    <img src={CaptureScreen11} width="600" />
</div>

Open NDI Virtual Input to select where the broadcast is coming from.

import CaptureScreen12 from '../assets/img/Capture_decran_2023-07-07_a_12.56.47_PM.png';

<div class="center-container">
    <img src={CaptureScreen12} width="600" />
</div>

Inside Dolby.io's Broadcaster, select the camera option to be the NDI video, and you should see the playback before going live on your stream. Afterward, share the viewer link by pressing on the bottom right corner of the Broadcaster. These same steps can be repeated with Adobe After Effect.

import CaptureScreen13 from '../assets/img/Capture_decran_2023-07-07_a_1.03.28_PM.png';

<div class="center-container">
    <img src={CaptureScreen13} width="600" />
</div>

To stream the playback from Final Cut Pro, go into your System Preferences on the Mac and set the Sound > Sound Output as the NDI Audio. For the configuration of the video, search NDI Output in the System Preferences and set the video format and frame rate to be the same as your Final Cut Pro project.

import CaptureScreen14 from '../assets/img/Capture_decran_2023-07-07_a_1.12.23_PM.png';
import CaptureScreen15 from '../assets/img/Capture_decran_2023-07-07_a_1.12.41_PM.png';

<div class="center-container">
    <img src={CaptureScreen14} width="600" />
    <img src={CaptureScreen15} width="600" />
</div>

Open up a new Final Cut Pro project with it matching your NDI configuration and enable A/V Output in the Window menu. Check that your NDI Virtual Input is selected as Final Cut Pro, and the NDI Video is checked off in the Dolby.io Broadcaster to see the playback on the stream.

import CaptureScreen16 from '../assets/img/Capture_decran_2023-07-07_a_1.15.00_PM.png';

<div class="center-container">
    <img src={CaptureScreen16} width="600" />
</div>

### How-to publish NDI with vMix

You can also use [vMix as NDI](/millicast/broadcast/software-encoders/vmix.mdx) source if you do not wish to purchase the NDI HDX. This allows will allow vMix to be used as your switcher or remote source and flexibility with Dolby.io Real-time Streaming codecs with real-time publishing.

## Learn more

Learn more by exploring the [developer blog](https://dolby.io/blog/tag/broadcast/) and [code samples](https://github.com/orgs/dolbyio-samples/repositories?q=broadcast).
