# Other HLS player

When using OptiView Player, the player automatically discovers a distribution and selects the appropriate streaming protocol. However, for certain use cases you may need direct access to the HLS manifest URL — for example, to cast to a Chromecast device, play on a set-top box, or integrate with a third-party player.

The HLS manifest is accessible at a deterministic URL:

```text
https://discovery.theo.live/v2/distributions/<distributionId>/hls/main.m3u8

```

Replace `<distributionId>` with your distribution identifier.

For HLS-TS specifically, the manifest is available at:

```text
https://discovery.theo.live/v2/distributions/<distributionId>/hls-ts/main.m3u8

```

warning

The HLS-TS URL only works if HLS-TS output is enabled on the engine. See the [streaming protocols](/documentation/pr-preview/pr-690/theolive/media-engine/streaming-protocols.md) guide for more information.
