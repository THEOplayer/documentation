# DRM

Digital Rights Management (DRM) protects live video content by encrypting the stream so that only authorized viewers can watch it. Without DRM, streams can be intercepted, redistributed, or recorded without permission.

info

DRM is a fully managed, premium feature. Contact your account representative to learn more and get started.

DRM is essential for content that requires legal or contractual protection, such as premium sports broadcasts, pay-per-view events, or licensed entertainment. It ensures that content owners retain control over who can access their streams and under what conditions.

## Enabling DRM[​](#enabling-drm "Direct link to Enabling DRM")

DRM is configured per engine, allowing fine-grained control over which streams are protected. To enable DRM, simply enable the DRM option on an engine.

![Enabling DRM on an engine](/documentation/pr-preview/pr-690/assets/images/engine-drm-a1fe35d5baee34893973152eeafce244.png)

## API example[​](#api-example "Direct link to API example")

You can also enable DRM via the API by setting `drm` to `true` when [creating](/documentation/pr-preview/pr-690/theolive/api/create-channel-engine.md) or [updating](/documentation/pr-preview/pr-690/theolive/api/update-engine.md) an engine.

`POST https://api.theo.live/v2/channels/{channelId}/engines`

```json
{
  "name": "my-engine",
  "region": "europe-west",
  "quality": {
    "abrLadderId": "your-abr-ladder-id"
  },
  "drm": true
}

```
