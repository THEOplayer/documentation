# Hosted Player

The **Hosted Player** refers to the streaming video player that can be used as a standalone web application or embedded into a website to meet the needs of many workflows without requiring extensive software development.

The player is similar to the [Live Broadcast](/documentation/pr-preview/pr-690/millicast/how-to-broadcast-in-dashboard.md) application in the dashboard but is for the audience to use to view the published stream.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dolbyio-hosted-viewer-preview-6c1677a8855fa8fa4e9f7f9754d4a609.png)

Getting Started

If you haven't already, begin by following the [Getting Started](/documentation/pr-preview/pr-690/millicast.md) tutorial to create an OptiView Real-time application and start your first broadcast.

You can follow the steps in [Part 1](/documentation/pr-preview/pr-690/millicast/getting-started/using-the-dashboard.md) to learn how to use the [Live Broadcast](/documentation/pr-preview/pr-690/millicast/how-to-broadcast-in-dashboard.md) and [Hosted Player](/documentation/pr-preview/pr-690/millicast/playback/hosted-viewer.md).

## White label playback[​](#white-label-playback "Direct link to White label playback")

The standalone streaming player is a hosted web application that allows somebody to view an active stream. While it is a website itself, it does not include any account sign-up, branding, menus, or navigation elements that would make it unsuitable for use in any other product or service.

### Hosted player path[​](#hosted-player-path "Direct link to Hosted player path")

When viewed as a single-page application the URL follows this pattern:

```text
https://viewer.millicast.com?streamId={Account ID}/{Stream Name}

```

### How-to embed the hosted player in a web site[​](#how-to-embed-the-hosted-player-in-a-web-site "Direct link to How-to embed the hosted player in a web site")

You can embed the player in any website or application by using the HTML `<iframe>` element. This solution is compatible whether using a CMS like Drupal or Wordpress or more complex custom JavaScript web applications built with frameworks like React, VueJS, or Angular.

The code would be something similar to this with your own stream name and account identifiers:

```html
<iframe src="https://viewer.millicast.com?streamId={Account ID}/{Stream Name}" allowfullscreen width="640" height="480"> </iframe>

```

### How-to secure the hosted player[​](#how-to-secure-the-hosted-player "Direct link to How-to secure the hosted player")

If your publish token is configured with the **Secure viewer** requirement than you must also include a [subscribe token](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md) for playback. The token is provided as a query string parameter such as:

```text
https://viewer.millicast.com?streamId={Account ID}/{Stream Name}?token={Subscribe Token}

```

See the [Securing Stream Playback](/documentation/pr-preview/pr-690/millicast/playback/securing-stream-playback.md) guide for more details and options.

## Hosted player components[​](#hosted-player-components "Direct link to Hosted player components")

There are a few controls and status indicators in the hosted player.

| Upper Left Corner | Upper Right Corner |
| ----------------- | ------------------ |
| Viewer count      | Stream status      |

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dolbyio-streaming-dashboard-playback-viewer-2b79f59ed6eca10211d41b64ecd3b76c.png)

| Lower Left Corner                     | Lower Right Corner                       |
| ------------------------------------- | ---------------------------------------- |
| Play / Pause, Audio control, Timecode | Settings, Picture-in-Picture, Fullscreen |

### Stream status[​](#stream-status "Direct link to Stream status")

Along the top of the player are some stream status indicators such as:

* Total number of stream viewers
* **Live** / **Not Live** status badge

### Player controls[​](#player-controls "Direct link to Player controls")

The controls along the bottom of the stream give the viewer control over a few elements of the playback experience.

#### Play / Pause[​](#play--pause "Direct link to Play / Pause")

There are some [browser policies](https://github.com/orgs/dolbyio-samples/discussions/3#discussioncomment-6601624) that influence whether or not the audio and video will be available upon page load.

The end user is expected to click on the image or play button to begin viewing the stream and receiving audio.

#### Mute and volume[​](#mute-and-volume "Direct link to Mute and volume")

You can mute the stream to stop playing audio or control the volume.

#### Timecode[​](#timecode "Direct link to Timecode")

The timecode of the stream is displayed as an indication of the duration for the broadcast.

#### Settings[​](#settings "Direct link to Settings")

From the settings menu you can open the [Media Stats](/documentation/pr-preview/pr-690/millicast/analytics-api/media-stats.md) and also see the **version** of the player. The details contained there can be very helpful with diagnosing any broadcast or playback issues by the support team. There is also an option to directly *Report Playback Issue* should something happen.

In addition, if [Multi-view](/documentation/pr-preview/pr-690/millicast/playback/multiview.md) is enabled then there will be controls to adjust the layout for multiple incoming streams.

#### Google Cast[​](#google-cast "Direct link to Google Cast")

The cast icon lets you forward the stream to a compatible device such as Google Cast compatible televisions.

#### Picture-in-picture[​](#picture-in-picture "Direct link to Picture-in-picture")

The Picture-in-Picture (PiP) button can be used to toggle between a mini player view.

#### Fullscreen[​](#fullscreen "Direct link to Fullscreen")

The full screen button will expand the player to take up the full available display.

## Customize the hosted player[​](#customize-the-hosted-player "Direct link to Customize the hosted player")

There are some options available for customizing the hosted player to determine whether or not various controls will be made available to the audience. You can update these settings when clicking the **Share** button of the [Live Broadcast](/documentation/pr-preview/pr-690/millicast/how-to-broadcast-in-dashboard.md) or from the *Playback* section of the [Streaming Dashboard](/documentation/pr-preview/pr-690/millicast/about-dash.md).

### Playback controls[​](#playback-controls "Direct link to Playback controls")

The following controls have a toggle so you can enable or disable whether or not they will appear in the player:

* Play / pause control
* Mute / volume control
* Google cast
* Picture in picture
* Fullscreen

You can also toggle whether or not to display basic stream status details:

* Live / Not live badge
* Viewer count

For convenience there is also a toggle to hide all controls.

### Playback display[​](#playback-display "Direct link to Playback display")

#### Height and width[​](#height-and-width "Direct link to Height and width")

You can set the height and width of the iFrame window that will contain the player.

#### Autoplay[​](#autoplay "Direct link to Autoplay")

Choose whether or not to autoplay the stream.

#### Muted on start[​](#muted-on-start "Direct link to Muted on start")

Choose whether the stream should begin muted or with audio.

### Offline image URL[​](#offline-image-url "Direct link to Offline image URL")

See [Stream Preview](/documentation/pr-preview/pr-690/millicast/playback/hosted-player/customization.md) for more details about setting the poster image.

### Adjusting Adaptive Bitrate (ABR) behavior[​](#adjusting-adaptive-bitrate-abr-behavior "Direct link to Adjusting Adaptive Bitrate (ABR) behavior")

Control how the adaptive bitrate of the player behaves and choose an [ABR strategy](/documentation/pr-preview/pr-690/millicast/playback/players-sdks/web/player.md#controlling-abr-strategies).

* `&abrStrategy=quality`: an example of setting the `quality` ABR strategy
* `&abrStrategy=quality&abrInitialBandwidth=1200000`: an example choosing the `quality` ABR strategy with a 1.2 Mbps bitrate (this value is in bits-per-second)

### Settings[​](#settings-1 "Direct link to Settings")

You can also launch the [Media Stats](/documentation/pr-preview/pr-690/millicast/analytics-api/media-stats.md) to get diagnostic details about the stream performance from the perspective of the end-user audience experienced during playback.
