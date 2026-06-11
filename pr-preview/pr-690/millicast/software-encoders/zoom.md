# Zoom

[Zoom](https://zoom.us/) is a video collaboration tool for hosting conferences and meetings. Zoom supports streaming to consumer platforms or any [RTMP](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md) source such as distributing Real-time Streaming content with OptiView Real-time Streaming.

See the official [Zoom](https://zoom.us/) site for documentation, installation instructions, and additional support.

## Get your OptiView RTMP publish URL[​](#get-your-optiview-rtmp-publish-url "Direct link to Get your OptiView RTMP publish URL")

In order to broadcast with RTMP, you will need to have your **RTMP publish path** and **RTMP publish stream name** available.

See the [RTMP Broadcast Guide](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md#how-to-find-your-rtmp-publish-url) for details on how to retrieve these values.

## How-to stream a Zoom meeting or webinar with RTMP[​](#how-to-stream-a-zoom-meeting-or-webinar-with-rtmp "Direct link to How-to stream a Zoom meeting or webinar with RTMP")

First, you must need a Zoom paid account in order to ingest your Zoom meetings into OptiView Real-time Streaming via RTMP so you can broadcast it massively in almost real-time.

* Note: The account needs to be either a Pro, Business, Education, or Enterprise plan.

To enable all members of your organization to have access to live-streaming meetings

### 1. Start a webinar[​](#1-start-a-webinar "Direct link to 1. Start a webinar")

Start the webinar as usual by doing one of the following:

* From your calendar — if you have added the webinar to your calendar, click the link displayed on your calendar reminder.
* From the Zoom website — sign into Zoom, find the webinar in the My Webinars tab and click Start.

### 2. View more settings[​](#2-view-more-settings "Direct link to 2. View more settings")

Click the **More** button on your control panel to view available options.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/zoom1-a03d9d3fee64c704d6bc5f091dd1600b.png)

### 3. Choose custom live stream service[​](#3-choose-custom-live-stream-service "Direct link to 3. Choose custom live stream service")

Choose Live on Custom Live Stream Service. A browser window will open to show the progress as Zoom prepares the live stream of your webinar. If you haven’t set up this webinar for live custom streaming, you should simply enter the values provided in the instructions.

### 4. Enter your OptiView RTMP publish details[​](#4-enter-your-optiview-rtmp-publish-details "Direct link to 4. Enter your OptiView RTMP publish details")

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/zoom1-a03d9d3fee64c704d6bc5f091dd1600b.png)

Enter your OptiView Real-time Streaming RTMP publish token details.

| Zoom field | Dolby.io field           | Example value                                                                       |
| ---------- | ------------------------ | ----------------------------------------------------------------------------------- |
| Stream URL | RTMP publish path        | `rtmp://live-rtmp-pub.millicast.com:1935/v2/pub/`                                   |
| Stream key | RTMP publish stream name | `kxhtzabx`?token=`0a0d272fd50eec7d477aa85d72504cf0968bc82c63b1931386e7c062341807ce` |
