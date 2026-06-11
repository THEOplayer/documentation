# Publish Tokens

To [broadcast](/documentation/pr-preview/pr-690/millicast/broadcast.md) a real-time stream the connection must be authenticated with a valid **publish token**. The OptiView Real-time platform uses token authentication for publishing to prevent unauthorized distribution of streaming content from your OptiView Real-time account. Without a valid token, publish requests will be rejected by the servers.

This guide outlines the following:

1. [How-to Create a Publish Token in the Streaming Dashboard](#create-a-publish-token)
2. [How-to Manage Publish Tokens](#managing-and-editing-existing-publish-tokens)
3. [Deleting a Publish Token](#deleting-a-token)
4. [Using the Token REST API](#using-the-token-api)

Subscribe Tokens

To restrict who may *view* a stream, you would use a separate [subscribe token](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md) after enabling the **Secure Viewer** setting.

## Create a publish token[​](#create-a-publish-token "Direct link to Create a publish token")

Log into your [OptiView Real-time Streaming Account](https://streaming.dolby.io/signin) and select **Live Broadcast** from the left menu. This is where you can view and manage all of your *Publish tokens*.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/tokens-main-8d1bfa5fcaa7d9990558456bc81e64c6.png)

Select the `Create (+)` button. This opens a pop-up window with options for configuring your new *Publish token*. Each option can be changed again later after the token has been created.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/token-create-4975c967581908f3de52838bbb82d750.jpg)

### Basic settings[​](#basic-settings "Direct link to Basic settings")

Let's go over each section in a bit more detail:

* **Token label** gives you a naming system you can use to keep track of your tokens. You can use it to label what the tokens are used for by application, event, user or to differentiate testing from production use.

* **Record broadcast** when enabled will allow you to record broadcasts using this token. After a broadcast is completed, you can find the recordings in the [Recordings](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings.md) section of the dashboard. This feature can incur additional charges.

* **Secure viewer** has two settings, "*No Restrictions*" (default) which allow anyone with the link to your viewer to watch a live broadcast without requiring authorization. The alternate setting, "*Token Required*", restricts your broadcast to only allow viewing the stream if provided a valid [Subscribe Token](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md).

* **Add stream names** allows you to indicate how many broadcasts, called "*Token Streams*", you want to be managed by this *Publishing token*. A token can manage an unlimited number of streams as long as each has a unique alphanumeric name. Stream names are case sensitive.

  <!-- -->

  * **Create stream name** allows you to specify a specific stream name such as *"MainCameraFeed"*.
  * **Create random stream names** will generate a stream name dynamically to insure uniqueness, such as *"hl7iqst"*.
  * **Allow any stream name** gives your token the ability to use ANY arbitrary stream name in the publishing path. The only rule to note here is that anyone using their own viewer must know what stream name the broadcaster is using in order to view the stream correctly.

Stream names are required to broadcast

To publish a stream, a *stream name* is required. Unless the Publish Token is set to **Allow any stream name**, the stream name must be equal to one of the created or generated stream names.

* **Temporary token** allows you to specify an expiration date for the token. Click on the arrows above and below each section respectively, to set the expiration date. Once the date and time have passed, the token will automatically become invalid.
  <!-- -->
  * If a token expires in the middle of a broadcast, the broadcast will continue until the publisher ends it or if the [Stop an active stream](/documentation/pr-preview/pr-690/millicast/api/stream-stop-stream.md) API is called for that token. The Temporary token feature prevents expired tokens from being able to *start* new streams, but doesn't impact already running streams.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/expiredate-8da0bae9cdb0d02ac7550e2ed5e7bf8e.jpg)

Temporary Publish tokens are recommended

Having an expiration date can prevent old or exposed tokens from becoming a long term vulnerability by limiting the duration they are valid. Tokens can always be deleted manually but if you know you only need the token for a set period of time it is more secure to create a token that is only valid for that duration.

### Advanced settings[​](#advanced-settings "Direct link to Advanced settings")

You will also see an **Advanced tab** at the top of the token creation interface; in this tab, you can configure more advanced settings.

* [Allowed Origins:](/documentation/pr-preview/pr-690/millicast/distribution/access-control/allowed-origins.md#allowed-origins) If specified, only the domains listed will be allowed in requests to [Director API](/documentation/pr-preview/pr-690/millicast/api/director/director-publish.md). Wildcard subdomains are also allowed, such as *"\*.demo.com"*. When unspecified (empty), there are no domain restrictions.

* [IP Filter Type:](/documentation/pr-preview/pr-690/millicast/distribution/access-control/allowed-origins.md#ip-filters)

  * **Allowed IP Addresses:** Allows you to specify multiple IPv4 addresses or CIDR notated network blocks. If specified, the token will only be usable by those addresses.
  * **Bind IPs on usage:** If specified, Bind IPs on usage will bind the token to the first *X* IP addresses used with a token in requests to [Director API](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-read-token.md), thus restricting the token to those IP addresses without them being known beforehand. Mutually exclusive with the *AllowedIpAddresses* option. Not currently supported with RTMP.

* [Cluster region:](/documentation/pr-preview/pr-690/millicast/distribution/multi-region-support.md) Specifies the cluster used for streaming. This setting is configured to use the default regional cluster set for the account. If `Auto` is selected, the regional cluster will be selected based on the publisher's location.

* [Geo-Blocking:](/documentation/pr-preview/pr-690/millicast/distribution/access-control/geo-blocking.md) Enables blocking by location at a country level for this specific Token.

* [Multisource:](/documentation/pr-preview/pr-690/millicast/broadcast/multi-source-broadcasting.md) Enables streaming multiple feeds at once with one Publish token and Stream name combination, allowing for [Multi-view playback](/documentation/pr-preview/pr-690/millicast/playback/multiview.md).

* [Thumbnail previews:](/documentation/pr-preview/pr-690/millicast/webhooks/thumbnail.md) Enables previewing a thumbnail image of your video stream. Thumbnails are delivered via a webhook.

After you have successfully created your token, it will be displayed in a scrollable list.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/token-first-31920ae40935346eb936caf3b77fda8f.png)

Once created, your Publish token can be used to broadcast in a variety of different ways using different [hardware](/documentation/pr-preview/pr-690/millicast/hardware-encoders.md) and [software](/documentation/pr-preview/pr-690/millicast/software-encoders.md) solutions. To learn more about how to broadcast with your Publish token, explore [the Broadcast guide](/documentation/pr-preview/pr-690/millicast/broadcast.md).

## Managing and editing existing publish tokens[​](#managing-and-editing-existing-publish-tokens "Direct link to Managing and editing existing publish tokens")

Once a Publish token is created, it is displayed on the **Live Broadcast** page. From this page, you can [start a broadcast using the Dashboard Broadcaster](/documentation/pr-preview/pr-690/millicast/getting-started/using-the-dashboard.md#b-start-broadcast), enable or disable, delete, or edit the settings for each Publish token.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/tempsnip-4b615d6473f84c1cb82d50a62b23f475.png)

Even though the *quick action menu* provides you with a certain level of token control, the real control lies within the *manage* UI for each token. To open the manage view, simply click the **Token Name** on the item’s action menu.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dashboard-tabs-40a5546ee3bfdcc95eee6b73509bb9fb.png)

Once opened, you will see multiple tabs to explore.

1. Token details - token identification, security, and overall feature capabilities
2. Token streams - configure stream names that the token can publish
3. Publishing - settings for configuring broadcast encoders such as [RTMP](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md), [SRT](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md), and [WebRTC](/documentation/pr-preview/pr-690/millicast/broadcast/webrtc-and-whip.md) settings
4. Distribution - configuration for distribution content such as [Geo-cascading](/documentation/pr-preview/pr-690/millicast/distribution/multi-region-support/geo-cascading.md) and [Re-streaming](/documentation/pr-preview/pr-690/millicast/distribution/re-streaming.md)
5. Playback - path and settings available with the hosted [Millicast Player](/documentation/pr-preview/pr-690/millicast/playback/hosted-viewer.md)
6. Recordings - media files that are captured from stream recordings
7. API - publishing token, ids, and endpoints for use with [Client SDKs](/documentation/pr-preview/pr-690/millicast/playback/players-sdks.md)
8. Multi-source - a convenient tool for setting up [multi-source](/documentation/pr-preview/pr-690/millicast/broadcast/multi-source-broadcasting.md) contribution

### 1. Token details[​](#1-token-details "Direct link to 1. Token details")

The **Token details** tab allows you to view and edit settings specified during token creation. For a full list of these settings and their definitions, see [Creating a Publishing token](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md#create-a-publish-token). The Token details page also includes the **Publish token** string and the **Account ID** string, which can both be copied and used for [starting a broadcast](/documentation/pr-preview/pr-690/millicast/broadcast.md).

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/publish-token-details-bf3a0030dbc6ae0b7dd0917425b46b82.png)

Renew your token

If your token has been compromised you can renew it by clicking the **renew button** under the *"Publishing token"* string.

### 2. Token streams[​](#2-token-streams "Direct link to 2. Token streams")

As mentioned in [Creating a Publish token](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md#create-a-publish-token), when a stream name is specified, it will require the user of the token to use a specific stream name in order to broadcast. Within the management view, you are able to add and delete stream names as you see fit.

To add a new name, simply click on the **(+) CREATE** button on the Token Streams tab, which will initiate a popup similar to the add token interface.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/token-add-streamname-86c8abc564802982e01c3723ba594107.png)

To delete a stream name, simply select it from the list and click the remove button.

### 3. Publishing[​](#3-publishing "Direct link to 3. Publishing")

The publishing tab includes all information relating to [broadcasting](/documentation/pr-preview/pr-690/millicast/broadcast.md) a stream with the Publish token. This tab can be broken down into four sections:

* [WHIP](/documentation/pr-preview/pr-690/millicast/broadcast/webrtc-and-whip.md): The *WHIP endpoint* and *Bearer token* can be used to publish a WebRTC stream with WebRTC-compatible software and hardware.
* [RTMP](/documentation/pr-preview/pr-690/millicast/broadcast/rtmp-and-rtmps.md): The *RTMP/s publish paths* and *RTMP publish stream name* can be used for publishing streams with RTMP-compatible software and hardware.
  <!-- -->
  * RTMP multi-bitrate can be enabled from this section. When enabled, the dashboard will create three RTMP publish stream names for **low** bitrate, **medium** bitrate, and **high** bitrate.
* [SRT](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md): The *SRT publish path*, *SRT stream ID*, and *SRT publish URL* can be used for publishing with SRT-compatible software and hardware.
  <!-- -->
  * Passphrase encryption can be enabled from this section. When enabled, the dashboard will generate a passphrase for encrypting the SRT stream.
* Publish token: The *Publishing token* and *Stream name* can be used to authenticate and start a broadcast from the [OptiView Real-time Streaming Client SDKs](/documentation/pr-preview/pr-690/millicast/playback/players-sdks.md) or compatible [software](/documentation/pr-preview/pr-690/millicast/software-encoders.md) and [hardware encoders](/documentation/pr-preview/pr-690/millicast/hardware-encoders.md).

To learn more about publishing and broadcasting with OptiView Real-time Streaming, check out the [Broadcast](/documentation/pr-preview/pr-690/millicast/broadcast.md) guide, which provides more in-depth resources and examples on how to use the Publish token once it is created.

### 4. Distribution[​](#4-distribution "Direct link to 4. Distribution")

The Distribution tab includes settings that can modify how the CDN distributes the stream to end viewers. This includes a few important configurations such as:

* [Re-streaming](/documentation/pr-preview/pr-690/millicast/distribution/re-streaming.md): fan-out a stream to multiple endpoints that are able to accept incoming connections for syndicated broadcasting and distribution
* [Geo-cascading](/documentation/pr-preview/pr-690/millicast/distribution/multi-region-support/geo-cascading.md): configuration of edge servers that handle the last-mile distribution of a stream for playback

### 5. Playback[​](#5-playback "Direct link to 5. Playback")

The Playback tab includes all relevant information for playing back a live stream. OptiView Real-time Streaming provides an [out-of-the-box hosted player experience](https://viewer.millicast.com/?streamId=k9Mwad/multiview\&multisource=true), which can be viewed at the **Hoster player path** URL or by embedding the **Hosted embedded player** as an `<iframe>` into your webpage.

From this tab, you can customize the player by altering settings such as the inclusion of the "Volume button" or if the stream is "Muted on start". To learn more about the hosted player or how you can build or use your own player, explore the [Playback](/documentation/pr-preview/pr-690/millicast/playback.md) guide.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/playback-4dfa2f06d4ef59ca52fefdb779b4af81.png)

The playback tab also includes a [WHEP](/documentation/pr-preview/pr-690/millicast/api/director/whep-whep-subscribe.md) endpoint. This can be used for devices that support WebRTC egress. To learn more about WHEP, explore the [Playback](/documentation/pr-preview/pr-690/millicast/playback.md) section of the documentation.

### 6. Recordings[​](#6-recordings "Direct link to 6. Recordings")

The *Recordings* tab can be used to view and download all recordings associated with this Publish token.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/recordings-63ea2d886d7bcf128214c9b968eacc34.png)

To learn more about recording, visit the [Recordings guide](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings.md).

### 7. API[​](#7-api "Direct link to 7. API")

The API tab includes information needed to publish a stream with the [Client SDKs](/documentation/pr-preview/pr-690/millicast/playback/players-sdks.md) or from a [third-party software or hardware source](/documentation/pr-preview/pr-690/millicast/broadcast.md). The tab includes details in a few sections:

* **Publish token**:

  <!-- -->

  * **Publishing token**: The Publishing token is a unique string that is required for authenticating a request to publish via the Dolbyio servers. This string should be protected and **if exposed, should be cycled immediately** to prevent unwanted broadcasts and charges.
  * **Stream ID**: The Stream ID is a combination of your *Account ID* and *Stream name* used for [publishing](/documentation/pr-preview/pr-690/millicast/getting-started/creating-real-time-streaming-web-app.md) or viewing the stream. If your stream\*\* is not secured\*\* with a [subscribe token](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md), you'll be able to view it at `https://viewer.millicast.com?streamId=[Account ID]/[Stream name]` when it is live.
  * **Stream name**: Your Stream name is used to manage and distinguish streams using the same token. You can edit the Stream name in the "[Token streams](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md#2-token-streams)" tab.
  * **Account ID**: The Account ID is a unique account identifier used for [publishing](/documentation/pr-preview/pr-690/millicast/getting-started/creating-real-time-streaming-web-app.md) and viewing streams.
  * **Token ID**: The Token ID can be used for [Reading](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-read-token.md), [Deleting](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-delete-token.md), and [Updating](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-update-token.md) Publish tokens via the [REST APIs](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-read-token.md).

* **Sample API calls**: The Sample API calls section includes some basic examples of [Publishing](/documentation/pr-preview/pr-690/millicast/token-api.md#creating-publishing-tokens) and [Subscribing](/documentation/pr-preview/pr-690/millicast/token-api.md#creating-subscribe-tokens) calls that can be made with the credentials provided in the Publish token section. To learn more about API calls, explore the [Token API](/documentation/pr-preview/pr-690/millicast/token-api.md) guide.

* **API endpoints**: The API endpoints section provides a [Publish API URL](/documentation/pr-preview/pr-690/millicast/token-api.md#creating-publishing-tokens) and a [Subscribe API URL](/documentation/pr-preview/pr-690/millicast/token-api.md#creating-subscribe-tokens), which can be used with the Publish token credentials and [Subscribe token credentials](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md), respectively.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/api-4aca51722951858eb52dbbff43588c15.png)

### 8. Multi-source[​](#8-multi-source "Direct link to 8. Multi-source")

The multi-source builder is a tool to help you construct and configure publishing endpoint arguments to power a multi-view experience. You can add multiple SRT, RTMP, or WebRTC sources and can configure Multi-Bitrate publishing. The Multi-source tab also includes a URL to launch the hosted player in the multi-viewer configuration, customizable `<iframe>` code to add the hosted embedded player into your webpage, and the ability to export your multi-source file.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/multi-source-977ce2814071e91d3a5a357c33f6da60.png)

## Deleting a token[​](#deleting-a-token "Direct link to Deleting a token")

Once you've finished using a Publish token, it is **recommended that you retire the token** by deleting it to prevent accidental vulnerabilities. Deleting the token can be done from the *quick action menu* found at the top-level Live Broadcast page by clicking on the trash can icon.

## Using the Token API[​](#using-the-token-api "Direct link to Using the Token API")

This guide provides a high-level understanding of managing your tokens via the OptiView Real-time Streaming Dashboard. Whilst the dashboard is a great choice for managing Publish and [Subscribe](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md) tokens, **all aspects of token creation and management can be programmatically controlled via the OptiView Real-time Streaming Token REST APIs**. By utilizing the Token APIs to automate workflows, you can create scalable streaming solutions for your application or platform.

To learn more about using the REST APIs for token creation and management, check out:

* [The Platform Guide for Token APIs](/documentation/pr-preview/pr-690/millicast/token-api.md)
* [The REST API reference](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-read-token.md)
