# Geo-blocking

Geo-blocking restricts or allows access to your stream based on the geographical location of the viewer. This is commonly used to comply with licensing agreements, enforce regional distribution rights, or protect content from unauthorized access.

## Configuration[​](#configuration "Direct link to Configuration")

To configure geo-blocking, navigate to your distribution's security settings and enable geo-blocking. You can then choose between two modes:

* **Allow list** — only viewers in the listed countries can access the stream. All other countries are blocked.
* **Deny list** — viewers in the listed countries are blocked. All other countries can access the stream.

Add countries to the list to define which regions are affected.

![Geo-blocking settings](/documentation/pr-preview/pr-690/assets/images/geo-blocking-d91232ae7997a55cb6d63669a47e969f.png)

## Example: regional distribution[​](#example-regional-distribution "Direct link to Example: regional distribution")

Suppose you are distributing a live event with the following regional rights:

* Customer 1 can only show the stream to Belgian viewers
* Customer 2 can only show the stream to UK and USA viewers
* Customer 3 can only show the stream to French viewers

Create a separate distribution for each customer and configure geo-blocking with an allow list containing only the permitted countries.

![Example of geo-blocking setup with multiple distributions](/documentation/pr-preview/pr-690/assets/images/48b69bf-Geoblocking-84c6d55a2e618fe948637bb7c1e56730.png)

## API example[​](#api-example "Direct link to API example")

You can also configure geo-blocking via the API using the `security.geoBlocking` object when [creating](/documentation/pr-preview/pr-690/theolive/api/create-channel-distribution.md) or [updating](/documentation/pr-preview/pr-690/theolive/api/update-distribution.md) a distribution.

`POST https://api.theo.live/v2/channels/{channelId}/distributions`

```json
{
  "name": "my-distribution",
  "security": {
    "geoBlocking": {
      "enabled": true,
      "mode": "allow",
      "countries": ["BE", "NL"]
    }
  }
}

```

## Notes[​](#notes "Direct link to Notes")

* Geo-blocking can be enabled or disabled while a stream is live — no restart is needed.
* Geo-blocking is applied per distribution, so different distributions on the same engine can have different rules.
