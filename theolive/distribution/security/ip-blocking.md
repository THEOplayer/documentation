---
sidebar_label: IP-blocking
sidebar_custom_props:
  icon: 🚫
description: Block or allow access based on IP addresses.
---

# IP-blocking

---

IP-blocking restricts access to your stream based on specific IP addresses. This can be used to lock down access to known networks or block unwanted traffic. Only IPv4 and IPv6 CIDRs (Classless Inter-Domain Routing) are supported.

## Configuration

To configure IP-blocking, navigate to your distribution's security settings and enable IP-blocking. You can then choose between two modes:

- **Allow list** — only the listed CIDRs can access the stream. All other IP addresses are blocked.
- **Deny list** — the listed CIDRs are blocked. All other IP addresses can access the stream.

Add CIDRs to the list to define which IP addresses are affected.

<figure style={{ textAlign: 'center' }}>

![IP-blocking settings](../../assets/img/ip-blocking.png)

</figure>

## Notes

- IP-blocking can be enabled or disabled while a stream is live — no restart is needed.
- IP-blocking is applied per distribution, so different distributions on the same engine can have different rules.
- If [geo-blocking](./geo-blocking.md) is enabled for a country, IP-blocking rules for CIDRs originating from that country will not take effect.
