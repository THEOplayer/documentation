---
sidebar_position: 5
sidebar_label: Videon
---

# Using Videon VersaStreamer / EdgeCaster with THEOlive

This guide explains to you how to set up Videon VersaStreamer and Videon EdgeCaster correctly so they can be used to stream your content with THEOlive.

## 1. Input settings

In your Videon VersaStreamer / EdgeCaster Streaming Dashboard configure the following settings:

- Under the "AV Input" section, please select "Input Settings".
- Select your Video Input (SDI/HDMI) and Audio Input audio (Embedded Audio/3.5mm Audio). The "Video Input Resolution" will automatically be detected. In the example below this is 1080p25.
- Click on the "Save" button.

![Defining the input settings](../../assets/img/ad14aad-1.Videon_Edgecaster_-_Input_Settings.jpg)

:::info 🚧 Frame rate and bandwidth

Remember to set the frame rate to the same value as in your THEOlive channel ingest configuration and make sure that your encoder has a stable connection and enough upload bandwidth. See [Stream configuration](../stream-configuration.mdx) for more details.
:::

## 2. Set your Video Profile

- Under the "Video Profiles" section, please select your profile, or create a new one. In the example below we have selected the profile "hesp.live". If you would create a new profile, you can change the name by clicking on the pencil.
- Under Video Scaling, select the desired resolution. Note that THEOlive support resolutions up to 1080p. The resolution of your ingested stream can be found under "Encoded Video Resolution". In the example below we have selected pass through, which means we keep our "Encoded Video Resolution" of 1080p25.
- Match the "Video bitrate" value to the maximum value of the channel preset you are using. See [Stream configuration](../stream-configuration.mdx) for more details.
- Further configure your encoding settings. Select `Lowest`, `Low`, `Normal` or `High` in the Quality/Latency drop-down menu, depending on your preference. Selecting `Lowest` will give you lower quality but also the lowest latency and the other way around for `High` which gives the `Highest` quality but with slightly higher latency.
- Click on the "Save" button.

![Setting up the video profile](../../assets/img/c5767b3-2.Videon_Edgecaster_-_Video_Profile.jpg)

## Set your Audio profile

- Under the "Audio Profiles" section, please select your profile, or create a new one. In the example below we have selected the profile "hesp.live". If you would create a new profile, you can change the name by clicking on the pencil.
- Select your audio encoding settings. In the example below ´MPEG-4 AAC-LC\` has been selected with 128kbps audio bitrate.
- Click on the "Save" button.

![Setting the audio profile](../../assets/img/fad7ad2-3.Videon_Edgecaster_-_Audio_Profile.jpg)

## 4. Setting the Outputs

- Under the Section "Outputs", select an RTMP output. ´RTMP 1´ has been selected in the example below.
- Select the "Video Source" and "Audio Source" previously defined under sections 2 and 3.
- Select `Genetic RTMP` under the "Streaming Providers" dropdown menu.
- Use your RTMP Push URL and stream key to complete the "Stream URL". The stream key should be copied after the RTMP Push URL. So if your RTMP Push URL is `rtmps://rtmp.<my-channel-region>.hesp.live/live` and your stream key `<my-stream-key>`, then you should complete after the "rtmps://" `rtmps://rtmp.<my-channel-region>.hesp.live/live/<my-stream-key>`
- Click on the "Save" button.
- You are now ready to start streaming! Switch on the "Output" by moving the orange button to "On".

![Setting the outputs](../../assets/img/15eb115-4.Videon_Edgecaster_-_Output.jpg)
