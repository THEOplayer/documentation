# Getting started with CMCD on Web

<!-- -->

Media player clients can transmit useful information to Content Delivery Networks (CDNs) with each object request. This implementation is planned to fully support Common Media Client Data (CMCD) as defined in [CTA-5004-B](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-b.html), published in April 2026.

CMCD supports two modes of transmission:

* **Request mode**: CMCD data is sent as HTTP headers or query parameters on manifest and media segment requests.
* **Event mode** (available since v11.4.0): CMCD events are POSTed to configured HTTP endpoints.

## Request Mode[​](#request-mode "Direct link to Request Mode")

For request mode, use the [CMCD connector for Web](/documentation/pr-preview/pr-690/theoplayer/connectors/web/cmcd/getting-started.md).

## Event Mode[​](#event-mode "Direct link to Event Mode")

Event mode allows posting CMCD events to configured HTTP endpoints.

info

Event mode is supported starting from version 11.4.0.

### Player-level configuration[​](#player-level-configuration "Direct link to Player-level configuration")

```javascript
const player = new THEOplayer.Player(element, {
  cmcd: {
    externalSessionId: 'YOUR-EXTERNAL-SESSION-ID', // optional
    userId: 'YOUR-USER-ID', // optional
    eventEndpoints: [{ url: 'https://example.com/cmcd-event-endpoint' }],
  },
});

```

### Source-level configuration[​](#source-level-configuration "Direct link to Source-level configuration")

```javascript
player.source = {
  sources: [{ src: 'https://example.com/stream.m3u8' }],
  cmcd: {
    externalSessionId: 'YOUR-EXTERNAL-SESSION-ID', // optional
    sessionId: 'YOUR-SESSION-ID', // optional
    userId: 'YOUR-USER-ID', // optional
    eventEndpoints: [{ url: 'https://example.com/cmcd-event-other-endpoint' }],
  },
};

```

### Merging behavior[​](#merging-behavior "Direct link to Merging behavior")

* Source-level values take precedence for `externalSessionId` and `userId`.
* `eventEndpoints` from both levels are **merged** (both player and source endpoints receive events).

warning

Event mode reporting currently only supports DRM and ad events.
