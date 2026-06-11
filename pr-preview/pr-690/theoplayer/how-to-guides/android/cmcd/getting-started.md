# Getting started with CMCD on Android

<!-- -->

Media player clients can transmit useful information to Content Delivery Networks (CDNs) with each object request. This implementation is planned to fully support Common Media Client Data (CMCD) as defined in [CTA-5004-B](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-b.html), published in April 2026.

CMCD supports two modes of transmission:

* **Request mode**: CMCD data is sent as HTTP headers or query parameters on manifest and media segment requests.
* **Event mode** (available since v11.4.0): CMCD events are POSTed to configured HTTP endpoints.

## Request Mode[​](#request-mode "Direct link to Request Mode")

To enable CMCD, developers can add a CMCDTransmissionMode inside a SourceDescription.

```kotlin
val typedSource = TypedSource.Builder("<HLS_STREAM_URL>")
    .cmcdTransmissionMode(CMCDTransmissionMode.HTTP_HEADER)
    .build()

val sourceDescription = SourceDescription.Builder(typedSource)
    .build()

theoPlayerView.player.source = sourceDescription

```

The preferred mode of transmission for HTTP requests is to use custom headers, but you can configure the transmission mode when creating the CMCD source. For example, to transmit via query arguments:

```kotlin
val typedSource = TypedSource.Builder("<HLS_STREAM_URL>")
    .cmcdTransmissionMode(CMCDTransmissionMode.QUERY_ARGUMENT)
    .build()

val sourceDescription = SourceDescription.Builder(typedSource)
    .build()

theoPlayerView.player.source = sourceDescription

```

## Event Mode[​](#event-mode "Direct link to Event Mode")

Event mode allows posting CMCD events to configured HTTP endpoints.

info

Event mode is supported starting from version 11.4.0.

### Player-level configuration[​](#player-level-configuration "Direct link to Player-level configuration")

```kotlin
val config = THEOplayerConfig.Builder()
    .cmcd(CMCDConfiguration(
        externalSessionId = "YOUR-EXTERNAL-SESSION-ID", // optional
        userId = "YOUR-USER-ID", // optional
        eventEndpoints = listOf(
            CMCDEndpointConfiguration(url = "https://example.com/cmcd-event-endpoint")
        )
    ))
    .build()

val player = THEOplayerView(context, config)

```

### Source-level configuration[​](#source-level-configuration "Direct link to Source-level configuration")

```kotlin
player.player.source = SourceDescription.Builder(
    TypedSource("<HLS_STREAM_URL>")
)
    .cmcd(CMCDSourceConfiguration(
        externalSessionId = "YOUR-EXTERNAL-SESSION-ID", // optional
        sessionId = "YOUR-SESSION-ID", // optional
        userId = "YOUR-USER-ID", // optional
        eventEndpoints = listOf(
            CMCDEndpointConfiguration(url = "https://example.com/cmcd-event-other-endpoint")
        )
    ))
    .build()

```

### Merging behavior[​](#merging-behavior "Direct link to Merging behavior")

* Source-level values take precedence for `externalSessionId` and `userId`.
* `eventEndpoints` from both levels are **merged** (both player and source endpoints receive events).

warning

Event mode reporting currently only supports DRM and ad events.
