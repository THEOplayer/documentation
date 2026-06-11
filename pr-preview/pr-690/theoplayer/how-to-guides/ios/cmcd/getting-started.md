# Getting started with CMCD on iOS

<!-- -->

Media player clients can transmit useful information to Content Delivery Networks (CDNs) with each object request. This implementation is planned to fully support Common Media Client Data (CMCD) as defined in [CTA-5004-B](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-b.html), published in April 2026.

CMCD supports two modes of transmission:

* **Request mode**: CMCD data is sent as HTTP headers or query parameters on manifest and media segment requests.
* **Event mode** (available since v11.4.0): CMCD events are POSTed to configured HTTP endpoints.

## Request Mode[​](#request-mode "Direct link to Request Mode")

To enable CMCD, developers can set the `cmcd` parameter inside a SourceDescription.

```swift
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", cmcd: true)
let sourceDescription = SourceDescription(source: typedSource)
theoplayer.source = sourceDescription

```

### Remarks[​](#remarks "Direct link to Remarks")

Note that request mode is only supported on iOS 18.0+.

## Event Mode[​](#event-mode "Direct link to Event Mode")

Event mode allows posting CMCD events to configured HTTP endpoints.

info

Event mode is supported starting from version 11.4.0.

### Player-level configuration[​](#player-level-configuration "Direct link to Player-level configuration")

```swift
let cmcdConfig = CMCDConfiguration(
    externalSessionId: "YOUR-EXTERNAL-SESSION-ID", // optional
    userId: "YOUR-USER-ID", // optional
    eventEndpoints: [
        CMCDEndpointConfiguration(url: "https://example.com/cmcd-event-endpoint")
    ]
)
let config = THEOplayerConfigurationBuilder()
config.cmcd = cmcdConfig
let player = THEOplayer(configuration: config.build())

```

### Source-level configuration[​](#source-level-configuration "Direct link to Source-level configuration")

```swift
let sourceConfig = CMCDSourceConfiguration(
    externalSessionId: "YOUR-EXTERNAL-SESSION-ID", // optional
    sessionId: "YOUR-SESSION-ID", // optional
    userId: "YOUR-USER-ID", // optional
    eventEndpoints: [
        CMCDEndpointConfiguration(url: "https://example.com/cmcd-event-other-endpoint")
    ]
)
player.source = SourceDescription(
    source: TypedSource(src: "<HLS_STREAM_URL>"),
    cmcdConfiguration: sourceConfig
)

```

### Merging behavior[​](#merging-behavior "Direct link to Merging behavior")

* Source-level values take precedence for `externalSessionId` and `userId`.
* `eventEndpoints` from both levels are **merged** (both player and source endpoints receive events).

warning

Event mode reporting currently only supports DRM and ad events.
