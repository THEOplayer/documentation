# 1. Use the Dashboard

This part explains how to get started using just the OptiView Real-time Streaming Dashboard to both broadcast and playback a real-time stream without writing any code.

This tutorial is split into two sections:

* [Broadcast from the Dashboard](#capture-and-broadcast-from-the-dashboard)
* [Playback with the Streaming Viewer](#playback-content-with-the-streaming-viewer)

## Capture and broadcast from the dashboard[​](#capture-and-broadcast-from-the-dashboard "Direct link to Capture and broadcast from the dashboard")

We will begin by [broadcasting](/documentation/pr-preview/pr-690/millicast/broadcast.md) directly from the OptiView Real-time Streaming Dashboard, [capturing](/documentation/pr-preview/pr-690/millicast/capture.md) audio and video with a web camera.

### a. Create a publish token[​](#a-create-a-publish-token "Direct link to a. Create a publish token")

When you log into your OptiView Real-time account you should select the **Streaming** tab. If you haven't used your account before, you'll see a screen similar to Figure 1a below.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dashboard-tokens-empty-9a3a6c96eee4b449ffd5c1f179850305.png)

Click the `+ CREATE` button and you'll be prompted to configure a new token. The token is used to authenticate an application for publishing a live stream from your account.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dolbyio-streaming-add-new-token-popup-0d8803caf75b7e1100360a5fce2ff95b.png)

Give this token a meaningful label such as *gettingStarted* and click the `CONFIRM` button. You can have more than one stream using the same token, so each can be labeled independently such as this one having the default *myStreamName*.

### b. Start broadcast[​](#b-start-broadcast "Direct link to b. Start broadcast")

Return to the *Live broadcast* section and click the `BROADCAST` button.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dolbyio-streaming-broadcast-button-b5a488018b4037660855e8ee1d679e31.png)

From the dashboard broadcast application that opens, click the green `Start` button to begin a broadcast. You will need to give permission to access your microphone and camera. Once the stream begins, you can see the *LIVE* box in the upper right corner and a timecode for the duration of the stream above the `Stop` button.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dolbyio-streaming-dashboard-broadcast-fba2b3a46246f8b7de23c39adf8fb5f7.png)

Broadcast Guide

Visit the [How to Broadcast in Dashboard](/documentation/pr-preview/pr-690/millicast/how-to-broadcast-in-dashboard.md) guide to learn more details about the options available for configuring the publish token and working with this dashboard broadcast application.

## Playback content with the streaming viewer[​](#playback-content-with-the-streaming-viewer "Direct link to Playback content with the streaming viewer")

In the previous section, you created a publishing token and started to broadcast. Next, we will open a hosted streaming viewer to [playback](/documentation/pr-preview/pr-690/millicast/playback.md) the real-time stream.

In the lower right-hand corner of the dashboard broadcast application are some icons. Click on the sharing icon like the one circled in Figure 2a.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dolbyio-share-broadcast-icon-dccf94ab85eca5a65a67583ca5eed699.png)

Click the `LAUNCH` button to open the hosted live viewer.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dolbyio-share-broadcast-launch-c1646364035779457db38dbe2bc3c2f4.png)

It may seem like you are watching a local mirror of your video camera, but this feed is making a full round-trip to the servers and back to the browser again. Note the low delay between capture from the webcam and playback within the browser.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dolbyio-streaming-dashboard-playback-viewer-2b79f59ed6eca10211d41b64ecd3b76c.png)

The viewer has some user controls to pause the stream, configure settings, and view the number of other stream viewers.

## Continue learning[​](#continue-learning "Direct link to Continue learning")

In this tutorial, we were able to start and view a real-time stream. To continue with your project, you may want to customize the experience. The next part will help with getting started to build [a custom web application](/documentation/pr-preview/pr-690/millicast/getting-started/creating-real-time-streaming-web-app.md).
