# Getting started

Dolby OptiView Rebranding

Dolby OptiView Live Streaming is the new name for THEOlive as part of the OptiView product suite. During the transition, you may still see references to THEOlive. OptiView Live and THEOlive refer to the same product.

This guide walks you through creating your first stream, from setting up an account to embedding the player on your page.

OptiView live streaming provides a REST API to manage channels, configure them and start / stop them. Each possible call can be found in the [API Reference](/documentation/pr-preview/pr-690/theolive/api.md). On top there also is a [management dashboard](https://dashboard.optiview.dolby.com/) on top of these API calls, making it straightforward to perform the basic actions without writing code.

### Prerequisites[​](#prerequisites "Direct link to Prerequisites")

* An OptiView account
* An RTMP/SRT-capable encoder — see our [software encoder](/documentation/pr-preview/pr-690/theolive/software-encoders.md) and [hardware encoder](/documentation/pr-preview/pr-690/theolive/hardware-encoders.md) guides
* A web page or app to embed the player

## 1. Create your first channel[​](#1-create-your-first-channel "Direct link to 1. Create your first channel")

Time to start streaming! In the dashboard, click "create channel" and fill in a name. You will end up on the overview page for your channel, where you can configure the different components.

There are other options during channel creation that are more advanced and are explained in their respective guides, you can ignore them for now:

* [DVR](/documentation/pr-preview/pr-690/theolive/channel/dvr.md)
* [Nielsen](/documentation/pr-preview/pr-690/theolive/channel/nielsen.md)

![Dashboard: Details page with the possibility to configure and start your channel.](/documentation/pr-preview/pr-690/assets/images/channel-overview-1ef42f1678cf11266bfb2cae4c5a2ca5.png)

## 2. Configure your channel[​](#2-configure-your-channel "Direct link to 2. Configure your channel")

This section focuses on getting a simple example up and running. For a full breakdown of the platform architecture, see the [Architecture](/documentation/pr-preview/pr-690/theolive/architecture.md) page.

A channel consists of three main components that need to be configured:

* **Ingest** — where the media is retrieved from. This is the entry point for your content and multiple protocols are supported like RTMP and SRT.
* **Engine** — processes the incoming media, handling transcoding and packaging.
* **Distributions** — different output versions of an engine. Each distribution lets you enable or disable protocols, set security, choose latency targets, and more.

![](/documentation/pr-preview/pr-690/assets/images/full-channel-pipeline-7da2a165e3402073a379d9066a4f9d0d.svg)

Example diagram of a channel setup with redundant ingests

### 2.1 Ingest[​](#21-ingest "Direct link to 2.1 Ingest")

Create a new ingest, give it a name, and select the protocol you want to use (RTMP or SRT) and which mode (pull or push).

tip

You only need a single ingest to start streaming but, for high availability and redundancy multiple ingests and engines should be utilized.

![Create an ingest](/documentation/pr-preview/pr-690/assets/images/create-ingest-44f0ebb7bf22505001386d565fbb925f.png)

### 2.2 Engine[​](#22-engine "Direct link to 2.2 Engine")

The engine is responsible for transcoding and packaging the incoming media. Create a new engine and configure the following properties:

![Create an engine](/documentation/pr-preview/pr-690/assets/images/create-engine-ef16574016a9ec645c350a3569e3c2f0.png)

* **Name** — a human-readable, descriptive name for your engine.
* **Priority** — determines which engine takes precedence when multiple engines are configured. A lower number means higher priority.
* **Ingest** — select which ingest this engine should use as its source.
* **Region** — the region where the transcoding takes place. Choose one close to your ingest location.
* **ABR Ladder** — the adaptive bitrate ladder used for transcoding, defining the resolution and bitrate combinations.
* **Enable DRM** — secure your content with Digital Rights Management.
* **Enable HESP** — output content in HESP format for low latency delivery.
* **Enable HLS** — output content in HLS format for broad platform compatibility.
* **Enable HLS MPEG-TS** — output content in HLS MPEG-TS format. Only recommended for very specific platforms that don't support HLS with CMAF segments. This feature needs to be explicitly enabled in your account by an admin and isn't compatible with some other features like DRM.
* **DAI Asset Key** — asset key for [OptiView Ads](/documentation/pr-preview/pr-690/ads/getting-started.md). To learn more, contact your Dolby team.

### 2.3 Distributions[​](#23-distributions "Direct link to 2.3 Distributions")

A distribution represents an output media stream from an engine. Create a new distribution, give it a name and a connected engine. The default properties are fine to get started, but a lot of properties can be configured:

![Configure a distribution](/documentation/pr-preview/pr-690/assets/images/configure-distribution-ea4a58a861b5d4c9fe44b6b8cc39922d.png)

* **Endpoints** — the connected engines that feed into this distribution.
* **Outputs** — enable or disable streaming protocols (HESP, HLS, HLS MPEG-TS).
* **Player** — configure player settings such as target latency and max bitrate.
* **WebRTC** — optional WebRTC configuration for real-time delivery with [OptiView Real-time streaming](/documentation/pr-preview/pr-690/millicast/getting-started.md).
* **Overrides** — add custom overrides for specific settings.
* **Security** — configure access restrictions including geo blocking, IP blocking, referrer blocking and JWT security.

## 3. Start the channel[​](#3-start-the-channel "Direct link to 3. Start the channel")

When you're all set, you can start your channel from the channel details page by clicking the `Start all` button. This will start all engines at once. Starting your channel means your transcoding time will start counting for billing purposes, even if a stream is not connected.

For advanced use cases such as production updates, you can start and stop individual engines separately. However, for most use cases all engines will be started and stopped at the same time.

![](/documentation/pr-preview/pr-690/assets/images/start-channel-222a6d2952997b743e03fa7f3cbcc515.png)

## 4. Verify playback[​](#4-verify-playback "Direct link to 4. Verify playback")

Now we have to make sure that our viewers have access to the stream. In the dashboard you can already see the preview of the stream.

![Live stream preview in the dashboard](/documentation/pr-preview/pr-690/assets/images/optiview-live-preview-dca5c9f168095cd1cd43c65b5b458def.png)

For production use cases, you should connect [OptiView Player](/documentation/pr-preview/pr-690/theolive/playback/optiview-player.md).

## 5. Stop the channel[​](#5-stop-the-channel "Direct link to 5. Stop the channel")

When you are done streaming, make sure to stop your channel to avoid unnecessary transcoding costs.
