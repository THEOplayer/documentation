# OBS

**Open Broadcaster Software (OBS)** is a free open-source software created for broadcasting and recording on your desktop. You can take advantage of this tool to stream high-quality video to your viewers in real time using the [OptiView Real-time Streaming](https://optiview.dolby.com/solutions/real-time-streaming/) service.

See the official [obsproject.com](https://obsproject.com) documentation for installation instructions and additional support about using OBS.

Getting Started

If you haven't already, begin by following the [Getting Started](/documentation/pr-preview/pr-690/millicast/getting-started.md) tutorial to start your first broadcast.

## Setting Up a Broadcast[​](#setting-up-a-broadcast "Direct link to Setting Up a Broadcast")

With OBS, you can broadcast using [RTMP](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md), [SRT](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md), or [WHIP](/documentation/pr-preview/pr-690/millicast/broadcast/webrtc-and-whip.md).

### RTMP[​](#rtmp "Direct link to RTMP")

Setting up an RTMP broadcast with OBS is a common workflow. You can use the Dolby OptiView Real-time Service provider to configure your broadcast.

It should be noted that broadcasting with RTMP may add some additional latency between the broadcast location and the origin server.

#### Dolby OptiView Real-time Service[​](#dolby-optiview-real-time-service "Direct link to Dolby OptiView Real-time Service")

The Dolby OptiView Real-time Service was added as a Stream option in more recent releases (after 30.x) of OBS.

##### 1. Choose Dolby OptiView Real-time as the Stream Service[​](#1-choose-dolby-optiview-real-time-as-the-stream-service "Direct link to 1. Choose Dolby OptiView Real-time as the Stream Service")

Open profile **Settings** and select the **Stream** section. From the **Service** dropdown you should see `Dolby OptiView Real-time` (`Dolby Millicast` in OBS version older than 32.0.2) among the options.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/obs-30-stream-dolby-millicast-f43db50dfaaabf4993ec4898ca578bca.png)

##### 2. Pick Your Server and Enter Your Stream Key[​](#2-pick-your-server-and-enter-your-stream-key "Direct link to 2. Pick Your Server and Enter Your Stream Key")

From the **Server** dropdown menu, you can select *Global* to have your broadcast location automatically determined or choose from any of our [cluster regions](/documentation/pr-preview/pr-690/millicast/distribution/multi-region-support.md).

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/obs-30-stream-server-key-f259927a45d13705377dbcbe7ca1c8b7.png)

You'll need to copy your *RTMP publish stream name* from the [Streaming Dashboard](/documentation/pr-preview/pr-690/millicast/about-dash.md) and enter it as the **Stream Key**. For RTMP, this value would be the name of your stream with the publishing token as a query parameter and can be found on the Publishing tab.

##### 3. Start Streaming[​](#3-start-streaming "Direct link to 3. Start Streaming")

You'll be able to start broadcasting by clicking the `Start Streaming` button. You can verify this by using the [Hosted Player](/documentation/pr-preview/pr-690/millicast/playback/hosted-viewer.md) in the dashboard.

### WHIP[​](#whip "Direct link to WHIP")

The introduction of WHIP support in OBS 30.0 has made it easier to configure a WebRTC broadcast with OBS. For workflows that must use prior versions, we've also provided a WebRTC fork of OBS to use.

#### OBS 30.x Setup[​](#obs-30x-setup "Direct link to OBS 30.x Setup")

##### 1. Choose WHIP[​](#1-choose-whip "Direct link to 1. Choose WHIP")

Open profile **Settings** and select the **Stream** section. From the **Service** dropdown you should see `WHIP` among the options.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/obs-30-whip-server-token-31d6e81ce79d25848c5c0edc486ee2e9.png)

##### 2. Copy WHIP Settings[​](#2-copy-whip-settings "Direct link to 2. Copy WHIP Settings")

From the [Streaming Dashboard](/documentation/pr-preview/pr-690/millicast/about-dash.md) you can select the *Publishing* tab to find the WHIP settings you'll need to configure your broadcast.

| OBS Setting  | Streaming Dashboard                              |
| ------------ | ------------------------------------------------ |
| Server       | This is your **WHIP endpoint**.                  |
| Bearer Token | This should be set to the WHIP **Bearer token**. |

##### 3. Start Streaming[​](#3-start-streaming-1 "Direct link to 3. Start Streaming")

You'll be able to start broadcasting by clicking the `Start Streaming` button. You can verify this by using the [Hosted Player](/documentation/pr-preview/pr-690/millicast/playback/hosted-viewer.md) in the dashboard.

#### OBS WebRTC Fork[​](#obs-webrtc-fork "Direct link to OBS WebRTC Fork")

Prior to OBS 30.0 it was necessary to use a custom fork. For certain workflows this may be desirable so you can continue to download releases from the project GitHub repository: [OBS-studio-webrtc](https://github.com/CoSMoSoftware/OBS-studio-webrtc/releases).

You can choose either WebRTC or RTMP from the Stream menu. There are additional configuration options as well for [multi-source broadcasting](/documentation/pr-preview/pr-690/millicast/broadcast/multi-source-broadcasting.md) or [simulcast](/documentation/pr-preview/pr-690/millicast/distribution/using-webrtc-simulcast.md).

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/obs-webrtc-stream-settings-95c0ca680e57b48ed2aba79e0b3b1b1c.png)

### SRT[​](#srt "Direct link to SRT")

Beginning with OBS 25.x you can stream with [SRT](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md).

#### Configure Custom Stream Settings[​](#configure-custom-stream-settings "Direct link to Configure Custom Stream Settings")

##### 1. Open Settings[​](#1-open-settings "Direct link to 1. Open Settings")

Open the **Settings** panel to configure your broadcast.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/obs-settings-4261aacb13f0c92df6ce499a793565e8.png)

Select *Custom* for the **Service**.

##### 2. Enter Publish Token Settings[​](#2-enter-publish-token-settings "Direct link to 2. Enter Publish Token Settings")

You'll need to gather a few details from the [Streaming Dashboard](/documentation/pr-preview/pr-690/millicast/about-dash.md) for your publish token.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/obs-set-srt-9f41fdb61049c1c8668cdf22960c9f18.png)

| OBS Setting | Streaming Dashboard                                      |
| ----------- | -------------------------------------------------------- |
| Server      | This is the **SRT publish path** for your publish token. |
| Stream Key  | This is the **SRT stream ID** for your publish token.    |

##### 3. Start Streaming[​](#3-start-streaming-2 "Direct link to 3. Start Streaming")

You'll be able to start broadcasting by clicking the `Start Streaming` button. You can verify this by using the [Hosted Player](/documentation/pr-preview/pr-690/millicast/playback/hosted-viewer.md) in the dashboard.

## Multi-bitrate Simulcast Contribution[​](#multi-bitrate-simulcast-contribution "Direct link to Multi-bitrate Simulcast Contribution")

**Simulcast** is a mechanism for distributing streaming content with renditions that are optimized for viewers who may be under constrained network or device conditions. With Dolby Millicast, you can contribute multiple sources that contribute layers that are passed through for playback.

### Configuring MBR with Multi-Source RTMP[​](#configuring-mbr-with-multi-source-rtmp "Direct link to Configuring MBR with Multi-Source RTMP")

You will need adequate bandwidth to stream to multiple destinations from the broadcast location.

#### 1. Install obs-multi-rtmp Plugin[​](#1-install-obs-multi-rtmp-plugin "Direct link to 1. Install obs-multi-rtmp Plugin")

To begin, install the [obs-multi-rtmp](https://github.com/sorayuki/obs-multi-rtmp/releases/) plugin. This is a plugin for streaming to multiple RTMP servers concurrently.

The plugin can also be used with standalone encoders and basic configurations (bitrate). See the troubleshooting section if you run into trouble installing the plugin.

#### 2. Configure Publish Token[​](#2-configure-publish-token "Direct link to 2. Configure Publish Token")

Enable multisource on your publish token

Make sure you have enabled multi-source on your publish token. For more information explore the [Multi-source guide](/documentation/pr-preview/pr-690/millicast/broadcast/multi-source-broadcasting.md). The [Multi-source Builder](/documentation/pr-preview/pr-690/millicast/multi-source-builder.md) may also be particularly helpful to get your settings.

#### 3. Add RTMP Destinations[​](#3-add-rtmp-destinations "Direct link to 3. Add RTMP Destinations")

You'll use the **multiple output** dock or panel to enter the RTMP connection details. You'll be using [Publishing Parameters](/documentation/pr-preview/pr-690/millicast/broadcast/publishing-parameters.md) to uniquely identify each layer.

The format will follow the pattern:

```text
{StreamName}?token={Token}&sourceId={number of source}&simulcastId

```

The **sourceId** should be a number (1, 2, or 3) with `simulcastId` enabled (boolean).

Here is example using 3 bitrates (1080p, 720p, 360p) as inputs using the obs-multi-rtmp plugin:

| RTMP 1      |                                                         |
| ----------- | ------------------------------------------------------- |
| Name        | 1080p                                                   |
| RTMP Server | rtmp\://rtmp-auto.millicast.com:1935/v2/pub/            |
| RTMP Key    | *{StreamName}*?token=*{Token}*\&sourceId=1\&simulcastId |
| Encoder     | x264 or nvenc                                           |
| Resolution  | 1920x1080                                               |
| Bitrate     | 6000kbps                                                |
| Keyframe    | 2                                                       |
| BFrames     | 0                                                       |

| RTMP 2      |                                                                    |
| ----------- | ------------------------------------------------------------------ |
| Name        | 720p                                                               |
| RTMP Server | rtmp\://rtmp-auto.millicast.com:1935/v2/pub/                       |
| RTMP Key    | *{StreamName}*?token=*{Token}*\&sourceId=2\&simulcastId\&videoOnly |
| Encoder     | x264 or nvenc                                                      |
| Resolution  | 1280x720                                                           |
| Bitrate     | 2000kbps                                                           |
| Keyframe    | 2                                                                  |
| BFrames     | 0                                                                  |

| RTMP 2      |                                                                    |
| ----------- | ------------------------------------------------------------------ |
| Name        | 360p                                                               |
| RTMP Server | rtmp\://rtmp-auto.millicast.com:1935/v2/pub/                       |
| RTMP Key    | *{StreamName}*?token=*{Token}*\&sourceId=3\&simulcastId\&videoOnly |
| Encoder     | x264 or nvenc                                                      |
| Resolution  | 640x360                                                            |
| Bitrate     | 500kbps                                                            |
| Keyframe    | 2                                                                  |
| BFrames     | 0                                                                  |

#### 4. Start Streaming[​](#4-start-streaming "Direct link to 4. Start Streaming")

Click the **start** button for each target.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/obs3-ab104b16fe1af68a46d4c8e3de8dcb9e.png)

You may need to click **start streaming in OBS** to update the current configuration, then click **stop streaming** and return to the **multiple output panel**. When you click **start streaming** again, the config will be updated, and the RTMP MBR renditions will stream to OptiView Real-time Streaming CDN.

#### 5. Playback[​](#5-playback "Direct link to 5. Playback")

You can verify that simulcast is working by using the [Hosted Player](/documentation/pr-preview/pr-690/millicast/playback/hosted-viewer.md) in the dashboard. Selecting the gear / settings menu will show each video quality allowing you to manually switch to a lower quality layer.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/rtmp-mbr-webrtc-simulcast-674701f55fa790b4e09aad41731a71f4.jpeg)

### Configuring MBR with Single-Source WHIP[​](#configuring-mbr-with-single-source-whip "Direct link to Configuring MBR with Single-Source WHIP")

You'll need to use the [OBS-studio-webrtc](https://github.com/CoSMoSoftware/OBS-studio-webrtc/releases) fork because advanced simulcast settings are not yet available in OBS 30.x with WHIP support.

Add your stream name and token from your OptiView Real-time Streaming token into OBS's settings. Select either \_ H.264\_ or *VP8* for the **codec** as Simulcast only works for those two codecs. Click on the **advanced settings** button and check the **Simulcast** box to enable the feature inside OBS. Finally, apply the changes.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-24_a_2.51.38_PM-04ef1aae20614b54eddab16fe6add3bd.png)

Next, we are going to set the output settings in OBS to see the different video qualities. Under **stream**, click on **output** and set the **output mode** to *advanced*. Set the **encoder** to *NVIDIA NVENC H.264* (if available). Next, change the **rate control** to *CBR (Constant Bitrate)*, and modify the **bitrate** to *6000 Kbps*.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-24_a_2.51.44_PM-639f5508928caa8ba5c6f24915c96597.png)

Next, set the **Base Resolution** and your **Output Resolution** to be matching. Apply all changes, and you are now ready to start your stream.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-24_a_2.52.27_PM-5cc13ec9421957cb1dbad79d3f59fcb7.png)

## Troubleshooting[​](#troubleshooting "Direct link to Troubleshooting")

### B-Frames May Cause Stream Stuttering[​](#b-frames-may-cause-stream-stuttering "Direct link to B-Frames May Cause Stream Stuttering")

You should disable B-Frames.

Review your Encoder Settings from the **Output** configuration with *Advanced* Output Mode.

### Surround Sound Audio[​](#surround-sound-audio "Direct link to Surround Sound Audio")

Dolby Millicast supports delivering up to 8 audio channels enabling \*\* surround sound\*\*. The audio channels can be surround sound channels or more general multichannel ones. The [Hosted Player](/documentation/pr-preview/pr-690/millicast/playback/hosted-viewer.md) will support the playback of surround sound.

#### 1. Setup Your DAW[​](#1-setup-your-daw "Direct link to 1. Setup Your DAW")

Digital Audio Workstations (DAW) are used to manage media tracks as inputs for OBS studio. You need to download and install one and assign it as an input source for the audio on OBS. Some common ones include:

| Windows                                                                          | MacOS                                                  |
| -------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [SAR](http://sar.audio/) (requires an ASIO driver)                               | [Soundflower](https://soundflower.en.softonic.com/mac) |
| [Voicemeeter](https://vb-audio.com/Voicemeeter/index.htm)                        | [Jack server](https://github.com/jackaudio)            |
| [Virtual Audio Cable](https://vac.muzychenko.net/en/) (requires v.4.50 or later) | [Loopback](https://rogueamoeba.com/loopback/)          |

Reroute (from Reaper, with up to 256 channels) if using the [ASIO plugin](https://github.com/Andersama/obs-asio)

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/surround_3-c74b779dc253cccc1ed8a799717aee7e.png)

##### Ambisonics[​](#ambisonics "Direct link to Ambisonics")

If you have an Ambisonic it is also possible to publish spatial audio using the same setup. Here for the demo a [Zoom H3-VR](https://zoomcorp.com/en/us/handheld-recorders/handheld-recorders/h3-vr-360-audio-recorder/) can be used. Set for OptiView OBS WebRTC is the same as 5.1 and with Zoom mic you will see for channels to capture and stream to your surround sound set up.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/amb-8f1c5f5eb17c39146538942fa76c60e7.png)

Properly set up for 4-channel ambisonics. This can be paired with a 360 camera.

#### 2. Configure OBS[​](#2-configure-obs "Direct link to 2. Configure OBS")

To get started make sure you have OBS installed on your device. Once installed head to **settings** then **audio**. Select a channel different from *mono* or *stereo* in the **channels** list in general.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Surround_1-39c25979f05411843a2e52d51b7148ea.png)

Click **OK** on the warning pop-up and restart OBS.

#### 3. Set Audio Bitrates[​](#3-set-audio-bitrates "Direct link to 3. Set Audio Bitrates")

Next switch to **output** and select *advanced* for **output mode**. Select the **audio** tab and pick a large bitrate. By default, OBS-Studio selects 160 kbps for stereo. This is insufficient for surround sound. As a rule of thumb, 64 kbps multiplied by the number of channels should be an appropriate amount of bandwidth.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/surround_2-b3aa550cffcff750454262656a8b3d62.png)

#### 4. Start Streaming and Playback[​](#4-start-streaming-and-playback "Direct link to 4. Start Streaming and Playback")

When you begin streaming with surround sound you'll need an appropriate player to verify the experience.

##### Windows[​](#windows "Direct link to Windows")

Set up requires proper sound settings enabled on your speakers. The setup shown is on a Vizio 5.1.2 Atmos sound bar.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Screenshot_2023-03-30_at_9.59.46_AM-1cf3c95280010c522d09b992c67e4130.png)

On your Windows make sure you are using Chrome browser for your viewer.

##### Mac[​](#mac "Direct link to Mac")

Surround sound playback should be enabled by default on your Mac. You can listen to the stream in-browser or via the OptiView Stream Monitor app can be installed for free on your iPad or AppleTV.

### Installing OBS-Multi-RTMP Plugin[​](#installing-obs-multi-rtmp-plugin "Direct link to Installing OBS-Multi-RTMP Plugin")

Additional instructions for installing the [obs-multi-rtmp](https://github.com/sorayuki/obs-multi-rtmp/releases/) plugin.

#### Windows[​](#windows-1 "Direct link to Windows")

For Windows broadcasting:

1. Download the latest release from [OBS-Multi-RTMP](https://github.com/sorayuki/obs-multi-rtmp/releases/).
2. Unzip the zip file and extract it into the OBS folder.
   <br />
   **OBS Studio** `C:\\Program Files\\obs studio`
   <br />
   **OBS WebRTC** default location. `C:\\Program Files\\OBS WebRTC (64bit)\\obs-plugins`

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/SimulcastR1-c0a13784d61811c35034511faadac43e.png)

You should see the following `obs-multi-rtmp.dll` in your plugins folder.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/SimulcastR2-b55de9e849e5ef484a25f692b2de1022.png)

Once you have the `obs-multi-rtmp.dll` in your `C:\\Program Files\\OBS WebRTC (64bit)\\obs-plugins folder`, you can start OBS.

When you open OBS-WebRTC now, you will see the ability to add multiple RTMP targets.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/SimulcastS3-1c10dfb824c92f29d118ae7578886dee.png)

#### Mac[​](#mac-1 "Direct link to Mac")

Additional instructions for installing the [obs-multi-rtmp](https://github.com/kilinbox/obs-multi-rtmp) plugin.

Match OBS Plugin Versions

For macOS, an alternate plugin can be found at [kilinbox/obs-multi-rtmp](https://github.com/kilinbox/obs-multi-rtmp). The plugin's version needs to match the OBS-WebRTC's version.

For this setup, download the ZIP file and unpack it. Copy the *obs-multi-rtmp.plugin*.

1. Next, go to *Applications*, right-click on OBS-WebRTC, and select show package content.
2. Inside go to `Contents > PlugIns` and paste within the folder's content.
3. Open OBS-WebRTC, and on the top menu bar, under **docks**, **multiple output** will be checked off.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-25_a_10.12.18_AM-6323dc53656793486991173db95ceec0.png)

Next, go to the **multiple output** dock. If it is not showing up on your OBS, visit the dock menu at the top and reset it. Enable the **multiple output** option. Click on **Add new target** to create an RTMP destination.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Capture_decran_2023-07-25_a_10.27.42_AM-0152ced305bd0390e455b6b4fa7278cd.png)

## Learn More[​](#learn-more "Direct link to Learn More")

### A Deep Dive Into WHIP, WebRTC, RTMP & SRT[​](#a-deep-dive-into-whip-webrtc-rtmp--srt "Direct link to A Deep Dive Into WHIP, WebRTC, RTMP & SRT")

This video guide walks through setup and capabilities of an OBS workflow.

[YouTube video player](https://www.youtube.com/embed/B1rjc14FzDc?si=Pztx7kiNwtC6GjO8)
