# IP-blocking

IP-blocking restricts access to your stream based on specific IP addresses. This can be used to lock down access to known networks or block unwanted traffic. Only IPv4 and IPv6 CIDRs (Classless Inter-Domain Routing) are supported.

## Configuration[​](#configuration "Direct link to Configuration")

To configure IP-blocking, navigate to your distribution's security settings and enable IP-blocking. You can then choose between two modes:

* **Allow list** — only the listed CIDRs can access the stream. All other IP addresses are blocked.
* **Deny list** — the listed CIDRs are blocked. All other IP addresses can access the stream.

Add CIDRs to the list to define which IP addresses are affected.

![IP-blocking settings](/documentation/pr-preview/pr-690/assets/images/ip-blocking-201da08582d0ce76fba4b1bc81a41d12.png)

## API example[​](#api-example "Direct link to API example")

You can also configure IP-blocking via the API using the `security.ipBlocking` object when [creating](/documentation/pr-preview/pr-690/theolive/api/create-channel-distribution.md) or [updating](/documentation/pr-preview/pr-690/theolive/api/update-distribution.md) a distribution.

`POST https://api.theo.live/v2/channels/{channelId}/distributions`

```json
{
  "name": "my-distribution",
  "security": {
    "ipBlocking": {
      "enabled": true,
      "mode": "allow",
      "cidrs": ["203.0.113.0/24", "198.51.100.0/24"]
    }
  }
}

```

## Notes[​](#notes "Direct link to Notes")

* IP-blocking can be enabled or disabled while a stream is live — no restart is needed.
* IP-blocking is applied per distribution, so different distributions on the same engine can have different rules.
* If [geo-blocking](/documentation/pr-preview/pr-690/theolive/distribution/security/geo-blocking.md) is enabled for a country, IP-blocking rules for CIDRs originating from that country will not take effect.
