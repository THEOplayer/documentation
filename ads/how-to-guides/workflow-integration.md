---
sidebar_position: 1
---

# Workflow integration

OptiView Ads is designed to integrate with your existing video workflow with minimal changes. There is no proxy or manifest manipulation service to place between your origin and your CDN: your content keeps flowing from your origin, through your CDN, to your players exactly as it does today.

Integrating OptiView Ads comes down to two things:

1. **Provide a publicly accessible origin** so OptiView Ads can detect the ad breaks in your stream.
2. **Integrate the OptiView Ads SDK** with your content player so it can render the breaks.

## Your media delivery path stays untouched

OptiView Ads works with a side-loaded [Break Manifest](../concepts/break-manifest.mdx): a small document, served separately from your media manifest, that describes the upcoming ad breaks for a channel. Because the ad instructions travel next to your stream instead of inside it, OptiView Ads never sits in the critical path of your content delivery — your playback performance and availability are unaffected, even if you stop using the product tomorrow.

## Provide a publicly accessible origin

When you create a [channel](../concepts/channels.mdx), you point it at your [origin](../concepts/origins.mdx): the publicly accessible URL of your stream. OptiView Ads reads the stream from that URL to:

- detect ad break markers (such as SCTE-35 signals) through [marker detection](../concepts/marker-detection.mdx), and
- read the timing metadata it needs to schedule breaks against your stream's timeline.

The only requirement is that the origin is reachable over the public internet. If your origin is locked down, expose a publicly accessible endpoint for it (for example through your CDN).

## Integrate the OptiView Ads SDK

On the playback side, you add the [OptiView Ads SDK](../player-integration/optiview-ads-sdk/index.mdx) to your application. The SDK is player-agnostic — you bring your own player — and handles everything ad-related:

- it polls the channel's Break Manifest,
- schedules the breaks against your player's timeline,
- plays the ads and renders the [layouts](../concepts/breaks.mdx#layouts), and
- reports the [ad impressions](./ad-impressions.md).

Ready-made adapters are available for the OptiView Player (THEOplayer), HLS.js, Shaka Player, ExoPlayer, AVPlayer, and more — see the platform guides for [Web](../player-integration/optiview-ads-sdk/web.mdx), [Android](../player-integration/optiview-ads-sdk/android.mdx), [iOS](../player-integration/optiview-ads-sdk/ios.mdx), and [React Native](../player-integration/optiview-ads-sdk/react-native.mdx).

## How the pieces fit together

1. Your origin serves your stream, publicly accessible.
2. OptiView Ads reads the stream, detects the markers, and publishes the breaks in the channel's Break Manifest.
3. The OptiView Ads SDK polls the Break Manifest and renders the breaks in your player.

That is the whole integration for server-guided ad insertion (SGAI). For platforms where a client-side SDK is not an option — such as Roku or older connected TV devices — OptiView Ads also supports server-side ad insertion (SSAI) through [Google DAI](../integrations/google/dai.mdx).

For an end-to-end walkthrough — from creating a channel to seeing a break play out — follow the [Getting started](../getting-started/index.mdx) guide.

## Related resources

| Resource                                              | Description                                              |
| ----------------------------------------------------- | -------------------------------------------------------- |
| [Getting started](../getting-started/index.mdx)       | End-to-end walkthrough of setting up OptiView Ads.       |
| [Origins](../concepts/origins.mdx)                    | How OptiView Ads connects to your stream.                |
| [Marker detection](../concepts/marker-detection.mdx)  | How ad break markers in your stream are detected.        |
| [Break Manifest](../concepts/break-manifest.mdx)      | The side-loaded contract between the backend and player. |
| [Player integration](../player-integration/index.mdx) | Integrating the OptiView Ads SDK or the OptiView Player. |
| [Google Ad Manager](../integrations/google/index.mdx) | Monetizing breaks through Google Pod Serving or DAI.     |
