# Using OBS with OptiView Live

**Open Broadcaster Software (OBS)** is a free open-source software created for broadcasting and recording on your desktop. You can take advantage of this tool to stream high-quality video to your viewers using OptiView Live.

tip

See the official [obsproject.com](https://obsproject.com) documentation for installation instructions and additional support.

## Setting up a broadcast[​](#setting-up-a-broadcast "Direct link to Setting up a broadcast")

### 1. Add a source[​](#1-add-a-source "Direct link to 1. Add a source")

In the *Source* section at the bottom of the OBS application, hit the + sign to add a new source. For example, selecting "Media Source" allows you to select an existing media file stored on your machine. Selecting "Display Capture" will record your screen. Selecting "Video capture device" will allow you to select a video input device like a webcam.

![Selecting a source](/documentation/pr-preview/pr-690/assets/images/obssource-511db5ab1dc347288c34a945cae1cd70.png)

### 2. Configure stream settings[​](#2-configure-stream-settings "Direct link to 2. Configure stream settings")

Select *Settings* in the *Controls* section at the bottom right of the OBS application. Click on the *Stream* tab on the left menu bar and configure the following:

* Select "Custom..." as the *Service*
* Copy your `rtmpPushUrl` from the channel details page in the dashboard URL as *Server*
* Copy your `streamKey` from the channel details page in the dashboard as *Stream Key*

![Defining stream settings](/documentation/pr-preview/pr-690/assets/images/obsoutputsettings-e09a09f0f2adef5ecc9352c8bf4dee3f.png)

Next, go to the *Output* tab in the *Settings* menu, and configure the following settings in order to achieve the lowest possible latency using OptiView Live.

* Output Mode: `Advanced`
* Bitrate: match the max bitrate of the profile used in your channel (e.g.: 4500Kbps for "sport"). [More details](/documentation/pr-preview/pr-690/theolive/media-engine/abr.md).
* Keyframe interval: `2s`
* CPU Usage Preset (higher = less CPU): `veryfast`
* Profile: `main`
* Tune: `zerolatency`

![Defining output settings](/documentation/pr-preview/pr-690/assets/images/obsoutput-b29f07744f2ded2ec2e70e8a59d20e90.png)

Lastly, go to the *Video* tab and set the frame rate to the same value you have set in your channel. See [Stream configuration](/documentation/pr-preview/pr-690/theolive/media-engine/abr.md) for more details.

![Defining output settings](/documentation/pr-preview/pr-690/assets/images/obsfps-fdf564b490026cec4f916540d4b68a4c.png)

🚧 Upload bandwidth

Make sure that your encoder has a stable connection and enough upload bandwidth. This will ensure all data is correctly sent to the channel.

### 3. Start streaming[​](#3-start-streaming "Direct link to 3. Start streaming")

Hit apply on settings, close the window, and click on *Start Streaming* in the *Controls* panel in the bottom right corner of the OBS application.

![Start streaming your video content](/documentation/pr-preview/pr-690/assets/images/obsstartstreaming-1d4e35b5870a9ea4ff95e1087cbd92b1.png)

### 4. Start your channel[​](#4-start-your-channel "Direct link to 4. Start your channel")

Your channel must be started in order to receive video ingest from OBS. You can choose to start up your channel before or after you start streaming via OBS.

## Feature compatibility and limitations[​](#feature-compatibility-and-limitations "Direct link to Feature compatibility and limitations")

* Ingest protocol must be RTMP push
