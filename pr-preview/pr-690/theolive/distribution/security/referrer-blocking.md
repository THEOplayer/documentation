# Referrer blocking

Referrer blocking restricts access to your stream based on the HTTP `Referer` header sent by the viewer's browser. This allows you to control which websites are allowed to embed and play your content.

When enabled, the platform checks the `Referer` header of each playback request against a list of allowed or blocked domains. Requests originating from unauthorized websites are rejected, preventing third parties from embedding your stream on their pages without permission.

## Use cases[​](#use-cases "Direct link to Use cases")

* **Embed protection** — ensure your stream can only be played on your own website or approved partner sites.
* **Content piracy prevention** — block unauthorized websites from hotlinking your stream.
* **Partner control** — allow specific resellers or affiliates to embed the stream while blocking everyone else.

Referrer blocking can be configured via the API or the dashboard on a per-distribution basis.

![Referrer blocking settings](/documentation/pr-preview/pr-690/assets/images/referrer-blocking-7e2c08eaf3358ccd797d2b50aa133c50.png)

## API example[​](#api-example "Direct link to API example")

You can also configure referrer blocking via the API using the `security.refererBlocking` object when [creating](/documentation/pr-preview/pr-690/theolive/api/create-channel-distribution.md) or [updating](/documentation/pr-preview/pr-690/theolive/api/update-distribution.md) a distribution.

`POST https://api.theo.live/v2/channels/{channelId}/distributions`

```json
{
  "name": "my-distribution",
  "security": {
    "refererBlocking": {
      "enabled": true,
      "allowedDomains": ["example.com", "partner.com"],
      "allowNativeApps": true
    }
  }
}

```
