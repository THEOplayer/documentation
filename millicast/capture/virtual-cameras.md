---
title: "Virtual Cameras"
id: virtual-cameras
---
Dolby.io Game Engine Plugins (both for [Unity](unity-getting-started.md) and [Unreal](unreal-player-plugin.md)) offer the ability to both capture and playback streaming content within gaming environments and virtual worlds. To do this, users can create virtual cameras within the experience and control them as directors of the scene. Simultaneously, the entire experience can be streamed to our hosted streaming player.

# Unity

## Publish the main camera in the experience

With [Dolby.io Real-Time Streaming plugin](https://docs.dolby.io/streaming-apis/docs/unity-getting-started) installed, open a new scene, and select your primary camera in Hierarchy. In Unity's Third Person Template, it is named `MainCamera`. Click on top of it to access the inspector window, and make sure the `AudioListener` is unchecked. This component actively allows you to stream whatever audio comes from the `AudioListener`.

Add the `McPublisher` component and fill out all of the appropriate information, follow the guide in [understanding the Unity Publisher](https://docs.dolby.io/streaming-apis/docs/understanding-unity-publisher-subscriber). Now to decide the specific camera being streamed, on **Video Source Type**, specify `Camera` and in **Video Source Camera**, choose the `MainCamera`. Lastly, remember that the **Video Configuration Scriptable Object** adjusts the streaming resolution, video codec, bitrates, and maximum FPS. 

![](https://files.readme.io/c207d6f-Capture_decran_2023-06-21_a_6.00.47_AM.png)

![](https://files.readme.io/1ea1368-Capture_decran_2023-06-21_a_6.55.12_AM.png)

## Publish multiple scenes captured from in-game cameras

Right-click on the Hierarchy to create a new Camera, and repeat this process for each additional angle you'd like to add. Change each camera's position to unique locations to capture multiple perspectives. 

![](https://files.readme.io/7a0cbfc-Capture_decran_2023-06-21_a_6.10.54_AM.png)

![](https://files.readme.io/fab895d-Capture_decran_2023-06-21_a_6.15.32_AM.png)

For each of these cameras, add the `McPublisher` component and fill out their respective information. 

> 🚧 Make sure the **Stream Name** is the same for all to publish the cameras under the same stream.

Additionally, check off the `Enable Multi Source` box. It should ask for a `sourceId`. Label the `sourceID` in order to identify which camera view is being watched. This will enable Multiview, allowing for the monitoring of multiple live streams in one single view.  

![](https://files.readme.io/3879e0e-Capture_decran_2023-06-21_a_6.23.46_AM.png)

Within Dolby.io Streaming Dashboard, go inside the stream token used for this project and open the **Hosted player path** URL. Change _YourPublishName_ to the Stream Name used. Once the project is played, it will start the live stream. However, to enable the viewing of all camera feeds, press on the gear icon and select _Show Multi View_.

![](https://files.readme.io/32d5d18-Capture_decran_2023-06-21_a_6.24.03_AM.png)

![](https://files.readme.io/42f7d7b-Capture_decran_2023-06-21_a_6.23.46_AM.png)

To view additional layouts, click on _Change layout_.

![](https://files.readme.io/75fa925-Capture_decran_2023-06-21_a_6.24.16_AM.png)

# Unreal Engine

To get started setting up a virtual camera in the Unreal Engine, [explore the documentation here](unreal-publisher-plugin.md) or review [this guide on the Dolby.io blog](https://dolby.io/blog/using-webrtc-plugins-to-build-a-scalable-unreal-engine-5-streaming-experience/).
