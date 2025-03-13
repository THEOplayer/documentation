---
sidebar_position: 3
---

# Using Wirecast with THEOlive

This guide explains to you how to set up Wirecast correctly so it can be used to stream your content with THEOlive.

## 1. Configure Output Settings

- Select "Output" from the toolbar
- Subsequently select "Output Settings..."

![Selecting Output Settings](../assets/img/17980ac-Wirecast_-_Output_Settings.jpg)

- Select "RTMP Server" as the output destination and choose "OK".

![Selecting RTMP server as Destination](../assets/img/94e8600-Wirecast_-_Output_Destination.JPG)

- Go to the THEOlive management console, and copy the RTMP Push URL and Stream key of your channel.
- Paste the RTMP Push URL into "Address".

:::warning ❗️ Not all versions/editions of Wirecast support RTMPS
Definitely check whether your Wirecast version/edition supports RTMPS. Older versions typically do not support RTMPS, whereas for example the most recent version Professional version does support RTMPS. In case your version/edition does not accept RTMPS, then definitely change "RTMPS" to "RTMP" in your RTMP push URL. As an example rtmps://rtmp.europe-west.hesp.live/live will have to be changed to rtmp://rtmp.europe-west.hesp.live/live for RTMP-based streaming.
:::

- Paste the Streamkey into "Stream:"

![Setting the Address and Stream](../assets/img/b212f75-Wirecast_-_RTMPurl__Streamkey.jpg)

- Select your "Encoding" settings (max 1080p)
- Subsequently review your detailed encoding settings by clicking the settings button next to encoding, and selecting "view details"

![Showing the detailed encoding settings](../assets/img/42264c9-Wirecast_-_Detailed_Encoder_Settings.JPG)

- Define the appropriate encoder latency, taking into account your computer performance. "1 - (Ultra Fast encoding)" will give the lowest latency as it requires the least CPU time.
- Also select the encoding "Profile". For example, "Main" will give lower latencies than "High" but on the other hand "High" will provide for better quality than "Main".
- Lastly, set "Frames per second" to the same value used in the THEOlive channel ingest config and set "Average bit rate" to match the max bitrate of the channel preset. See [Stream configuration](./stream-configuration.mdx) for more details.
- Click "OK" and move to step 2 to add your live stream.

![Wirecast encoding quality](../assets/img/48bc7d6-Wirecast_-_Encoding_Quality.png)

:::info 🚧 Upload bandwidth

Make sure that your encoder has a stable connection and enough upload bandwidth. This will ensure all data is correctly sent to the THEOlive channel.
:::

## 2. Add a New Layer

- Click the ‘+’ button on the top layer to add your live stream.

![Adding a new layer](../assets/img/fea4c5a-Wirecast_-_New_Layer.JPG)

- Subsequently add your layer. In order to capture your webcam, for example, click on ‘Video Capture’ from the left. Next, select the video capture device you wish to add.

![Selecting an option that should function as the layer](../assets/img/7b3faa5-Wirecast_-_Select_Source.jpg)

- You'll then need to activate the layer by clicking on the white arrow.

![Activating the layer](../assets/img/b4945ca-Wirecast_-_Activate_Layer.jpg)

## 3. Start Streaming

Click the "Stream" button. Wirecast will make a connection to the THEOlive RTMP server.

![Start streaming](../assets/img/2416285-Wirecast_-_Start_Streaming.jpg)

## 4. Start your THEOlive channel

This can be done either through the [API](https://developers.theo.live/reference/start-channel) or via the [management console](https://console.theo.live/).
