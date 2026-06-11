# Using vMix with OptiView Live

This guide explains to you how to set up vMix correctly so it can be used to stream your content with OptiView Live.

## 1. Set up sources[​](#1-set-up-sources "Direct link to 1. Set up sources")

Make sure all your sources are set up and in order. As an example, you could add simple colour bars as a source by left-clicking the *up arrow* next to *Add Input*, which you can find at the left bottom of the vMIX screen, and select *Colour Bars*. Similarly, you could add other input e.g. your webcam by selecting *Camera* or a stream by selecting *Stream/SRT*. In order to see these options, you'll have to select *More* in the *Add Input* menu.

![vMix setup example](/documentation/pr-preview/pr-690/assets/images/bcb0dde-vmix0-c7bdb87b569cea5336c33c1363b8652f.png)

**Note:** The colour bars input are only an example. You can stream whatever input you like.

📘 How to burn in a clock

If you want to burn in a clock you can follow the steps documented by vMix. You can create a *Production clock* input and burn it into the colour bars input by configuring *Multiview*<br />[Production clock documentation](https://www.vmix.com/help23/index.htm?ProductionClocks.html)<br />[Multiview documentation](https://www.vmix.com/help23/index.htm?InputSettingsMultiView.html)

## 2. Configure stream settings[​](#2-configure-stream-settings "Direct link to 2. Configure stream settings")

* Left-click the cogwheel next to *Stream* at the bottom of the vMix screen.

![vMix settings](/documentation/pr-preview/pr-690/assets/images/447bd06-vmix1-d2b79e3defef1169daa1d036ae6c1037.png)

**Note:** Make sure you set up your settings first before clicking the *Stream* button.

* In the *Streaming Settings* select *Custom RTMP Server* as your destination and enter *your RTMP push URL and Streamkey* as follows:

![vMix streaming settings](/documentation/pr-preview/pr-690/assets/images/38e11d9-vmix-streaming-setting-605f8b4589304e5778ab8ba91d3a0971.PNG)

**Note:** You can find your RTMP push URL and streamkey in the management dashboard.

* Next, choose a set of stream values such as aspect ratio and bitrate from the *Quality* list and click the cogwheel for advanced *Streaming Quality* settings.

![vMix quality settings](/documentation/pr-preview/pr-690/assets/images/73abc63-vmix3-013025853d3210ddbcc3052e58e819f1.png)

**Note:** If you have the hardware available: it's always a good idea to enable the *Hardware Ecoder* setting.

* In the *Streaming Quality* menu you can make some more advanced changes to your stream settings. Please use the settings that are highlighted in yellow in the following image to achieve optimal performance when streaming to OptiView Live. You are free to change the *Video Bit Rates* and *Encode Size* settings depending on your use case.

![stream quality settings](/documentation/pr-preview/pr-690/assets/images/fae9921-streaming-quality-settings-0dd4e8f9c28be862878a8096914337a8.jpg)

**Note:\*** You are free to experiment with your encoding settings but the values shown in this image reflect the encoding setting used on the server side.

🚧 Frame rate and bandwidth

Remember to set the frame rate to the same value as in your channel ingest configuration and make sure that your encoder has a stable connection and enough upload bandwidth. See [Stream configuration](/documentation/pr-preview/pr-690/theolive/media-engine/abr.md) for more details.

## 3. Start streaming[​](#3-start-streaming "Direct link to 3. Start streaming")

You can now save and exit out of all the *Streaming Settings* menus and click the *Stream* button to start streaming.

## 4. Start your channel[​](#4-start-your-channel "Direct link to 4. Start your channel")

Your channel must be started in order to receive video ingest from vMix. You can choose to start up your channel before or after you start streaming via vMix.
