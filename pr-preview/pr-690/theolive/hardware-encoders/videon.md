# Videon

**Videon** is a leading video streaming company offering innovative solutions to enhance content delivery and quality. Their flagship product, [EdgeCaster](https://www.videonlabs.com/edgecaster), optimizes video streaming with low-latency and high-quality playback across platforms, empowering service providers to deliver seamless and engaging viewing experiences.

See the official [VideonLabs](https://www.videonlabs.com/) site for documentation, installation instructions, and additional support.

## 1. Input settings[​](#1-input-settings "Direct link to 1. Input settings")

In your Videon EdgeCaster Streaming Dashboard configure the following settings:

* Under the "AV Input" section, please select "Input Settings".
* Select your Video Input (SDI/HDMI) and Audio Input audio (Embedded Audio/3.5mm Audio). The "Video Input Resolution" will automatically be detected. In the example below this is 1080p25.
* Click on the "Save" button.

<!-- -->

![Defining the input settings](/documentation/pr-preview/pr-690/assets/images/Videon_Edgecaster_-_Input_Settings-626035fdb4cd659910aaac7fbe22555c.jpg)

🚧 Frame rate and bandwidth

Remember to set the frame rate to the same value as in your channel ingest configuration and make sure that your encoder has a stable connection and enough upload bandwidth. See [Stream configuration](/documentation/pr-preview/pr-690/theolive/media-engine/abr.md) for more details.

## 2. Set your Video Profile[​](#2-set-your-video-profile "Direct link to 2. Set your Video Profile")

* Under the "Video Profiles" section, please select your profile, or create a new one. In the example below we have selected the profile "hesp.live". If you would create a new profile, you can change the name by clicking on the pencil.
* Under Video Scaling, select the desired resolution. Note that OptiView Live supports resolutions up to 1080p. The resolution of your ingested stream can be found under "Encoded Video Resolution". In the example below we have selected pass through, which means we keep our "Encoded Video Resolution" of 1080p25.
* Match the "Video bitrate" value to the maximum value of the channel preset you are using. See [Stream configuration](/documentation/pr-preview/pr-690/theolive/media-engine/abr.md) for more details.
* Further configure your encoding settings. Select `Lowest`, `Low`, `Normal` or `High` in the Quality/Latency drop-down menu, depending on your preference. Selecting `Lowest` will give you lower quality but also the lowest latency and the other way around for `High` which gives the `Highest` quality but with slightly higher latency.
* Click on the "Save" button.

<!-- -->

![Setting up the video profile](/documentation/pr-preview/pr-690/assets/images/Videon_Edgecaster_-_Video_Profile-9a29caa4d180e432209cb7431ccc4860.jpg)

## 3. Set your Audio profile[​](#3-set-your-audio-profile "Direct link to 3. Set your Audio profile")

* Under the "Audio Profiles" section, please select your profile, or create a new one. In the example below we have selected the profile "hesp.live". If you would create a new profile, you can change the name by clicking on the pencil.
* Select your audio encoding settings. In the example below ´MPEG-4 AAC-LC\` has been selected with 128kbps audio bitrate.
* Click on the "Save" button.

<!-- -->

![Setting up the video profile](/documentation/pr-preview/pr-690/assets/images/Videon_Edgecaster_-_Audio_Profile-ba1c98312d3bfad4d009d8f954542acd.jpg)

## 4. Setting the Outputs[​](#4-setting-the-outputs "Direct link to 4. Setting the Outputs")

* Under the Section "Outputs", select an RTMP output. ´RTMP 1´ has been selected in the example below.
* Select the "Video Source" and "Audio Source" previously defined under sections 2 and 3.
* Select `Genetic RTMP` under the "Streaming Providers" dropdown menu.
* Use your RTMP Push URL and stream key to complete the "Stream URL". The stream key should be copied after the RTMP Push URL. So if your RTMP Push URL is `rtmps://rtmp.<my-channel-region>.theo.live/live` and your stream key `<my-stream-key>`, then you should complete after the "rtmps\://" `rtmp.<my-channel-region>.theo.live/live/<my-stream-key>`
* Click on the "Save" button.
* You are now ready to start streaming! Switch on the "Output" by moving the orange button to "On".

<!-- -->

![Setting the outputs](/documentation/pr-preview/pr-690/assets/images/Videon_Edgecaster_-_Output-19f421c1fc4f1dfd3dde1e872875c077.jpg)
