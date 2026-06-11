# Multi-distribution

A distribution connects to one or more engines and delivers the stream to viewers with its own configuration. Multiple distributions can share the same engines, and a single distribution can draw from multiple engines for redundancy. This many-to-many relationship gives you full flexibility to serve different audiences, regions, or partners independently.

## How it works[​](#how-it-works "Direct link to How it works")

A channel only needs one ingest and one engine to transcode and package the stream once. You can then create multiple distributions that connect to that engine. Each distribution acts as an independent output endpoint with its own configuration, including geo-blocking rules, security policies, and player settings.

Because distributions can also connect to multiple engines, you get both **redundancy** (multiple engines backing the same distribution) and **flexibility** (different distributions with different settings) — all while keeping transcoding costs low.

## Example: regional rights management[​](#example-regional-rights-management "Direct link to Example: regional rights management")

Suppose you are streaming a live event and have sold the rights to three resellers:

* **Reseller A** has the rights for Europe
* **Reseller B** has the rights for North America
* **Reseller C** has the rights for Asia-Pacific

You would set up your channel as follows:

1. Create a single **ingest** and **engine** for transcoding.
2. Create three **distributions** connected to that engine — one per reseller.
3. Apply [geo-blocking](/documentation/pr-preview/pr-690/theolive/distribution/security/geo-blocking.md) rules to each distribution so that only viewers in the licensed region can access the stream.
4. Optionally, apply [token-based security](/documentation/pr-preview/pr-690/theolive/distribution/security/token-based-security.md) per distribution so each reseller authenticates their own viewers.

Each reseller receives their own channel alias and can only serve the stream to viewers within their licensed territory. From an operational perspective, you manage a single pipeline while maintaining full control over regional access.

## Benefits[​](#benefits "Direct link to Benefits")

* **Cost-efficient** — transcoding and packaging happens once, regardless of the number of resellers.
* **Independent configuration** — each distribution has its own security, geo-blocking, and delivery settings.
* **Scalable** — adding a new reseller is as simple as creating a new distribution with the appropriate rules.
