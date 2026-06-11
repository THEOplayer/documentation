# Using Wirecast with OptiView Live

This guide explains to you how to set up Wirecast correctly so it can be used to stream your content with OptiView Live.

## 1. Configure Output Settings[​](#1-configure-output-settings "Direct link to 1. Configure Output Settings")

* Select "Output" from the toolbar
* Subsequently select "Output Settings..."

![Selecting Output Settings](/documentation/pr-preview/pr-690/assets/images/17980ac-Wirecast_-_Output_Settings-a857dbdf51629075df18e9f98b7b6b46.jpg)

* Select "RTMP Server" as the output destination and choose "OK".

![Selecting RTMP server as Destination](/documentation/pr-preview/pr-690/assets/images/94e8600-Wirecast_-_Output_Destination-7f5c94bc83bf6f29aece88d569d02a97.JPG)

* Go to the management dashboard, and copy the RTMP Push URL and Stream key of your channel.
* Paste the RTMP Push URL into "Address".

Not all versions/editions of Wirecast support RTMPS

Definitely check whether your Wirecast version/edition supports RTMPS. Older versions typically do not support RTMPS, whereas for example the most recent version Professional version does support RTMPS. In case your version/edition does not accept RTMPS, then definitely change "RTMPS" to "RTMP" in your RTMP push URL. As an example rtmps\://rtmp.europe-west.hesp.live/live will have to be changed to rtmp\://rtmp.europe-west.hesp.live/live for RTMP-based streaming.

* Paste the Streamkey into "Stream:"

![Setting the Address and Stream](/documentation/pr-preview/pr-690/assets/images/b212f75-Wirecast_-_RTMPurl__Streamkey-fe4cc4e47c0f429116c74706b4157bdb.jpg)

* Select your "Encoding" settings (max 1080p)
* Subsequently review your detailed encoding settings by clicking the settings button next to encoding, and selecting "view details"

![Showing the detailed encoding settings](/documentation/pr-preview/pr-690/assets/images/42264c9-Wirecast_-_Detailed_Encoder_Settings-ccd8b39cf9b3954c12891ca740455e0d.JPG)

* Define the appropriate encoder latency, taking into account your computer performance. "1 - (Ultra Fast encoding)" will give the lowest latency as it requires the least CPU time.
* Also select the encoding "Profile". For example, "Main" will give lower latencies than "High" but on the other hand "High" will provide for better quality than "Main".
* Lastly, set "Frames per second" to the same value used in the channel ingest config and set "Average bit rate" to match the max bitrate of the channel preset. See [Stream configuration](/documentation/pr-preview/pr-690/theolive/media-engine/abr.md) for more details.
* Click "OK" and move to step 2 to add your live stream.

![Wirecast encoding quality](/documentation/pr-preview/pr-690/assets/images/48bc7d6-Wirecast_-_Encoding_Quality-b59ba11010718aa49e3b0913a47ddb1b.png)

🚧 Upload bandwidth

Make sure that your encoder has a stable connection and enough upload bandwidth. This will ensure all data is correctly sent to the channel.

## 2. Add a New Layer[​](#2-add-a-new-layer "Direct link to 2. Add a New Layer")

* Click the ‘+’ button on the top layer to add your live stream.

![Adding a new layer](/documentation/pr-preview/pr-690/assets/images/fea4c5a-Wirecast_-_New_Layer-51f4c040d439cc07c17827e06bf1df68.JPG)

* Subsequently add your layer. In order to capture your webcam, for example, click on ‘Video Capture’ from the left. Next, select the video capture device you wish to add.

![Selecting an option that should function as the layer](/documentation/pr-preview/pr-690/assets/images/7b3faa5-Wirecast_-_Select_Source-23e27bd7120048b8a91b758a33eef7c8.jpg)

* You'll then need to activate the layer by clicking on the white arrow.

![Activating the layer](/documentation/pr-preview/pr-690/assets/images/b4945ca-Wirecast_-_Activate_Layer-87021696b182f400ab009e61168f2d46.jpg)

## 3. Start Streaming[​](#3-start-streaming "Direct link to 3. Start Streaming")

Click the "Stream" button. Wirecast will make a connection to the OptiView Live RTMP server.

![Start streaming](/documentation/pr-preview/pr-690/assets/images/2416285-Wirecast_-_Start_Streaming-7bc6d4be3dfd907b869e10cb089cd2a4.jpg)

## 4. Start your channel[​](#4-start-your-channel "Direct link to 4. Start your channel")

Your channel must be started in order to receive video ingest from Wirecast. You can choose to start up your channel before or after you start streaming via Wirecast.
