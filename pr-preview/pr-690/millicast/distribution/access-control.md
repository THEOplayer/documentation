# Access Control

Stream security is a priority for the OptiView Real-time platform. Along with stream protocol encryption, OptiView Real-time Streaming provides a number of different server-side features to help protect both broadcasting (*Publishing*) a stream and viewing (*Subscribing*) to a stream, all managed via their respective tokens.

Looking for Dolby.io Account Access Management?

To manage access for your team to share the same OptiView Real-time account, visit the [Dolby.io support portal FAQ section](https://support.dolby.io/hc/en-au/articles/4411755046159-FAQs-Account-Management) to learn more.

## Publishing access control[​](#publishing-access-control "Direct link to Publishing access control")

A [Publish token](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md) is **required** for [broadcasting](/documentation/pr-preview/pr-690/millicast/broadcast.md) a stream. The Publish token protects your account from unauthorized broadcasters and fraudulent users by adding a layer of server-side authentication to the broadcast process. In addition to the token itself, you can add access controls to the Publish token to further limit and secure the broadcast.

During the Publish token creation process, you can further limit access in a few ways:

* [Temporary Token](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md#create-a-publish-token): By making a token expire after a set period of time, you limit the window of opportunity for someone to misuse the resource. Tokens expiration is defined by the number of seconds until it expires, with one second being the shortest possible token duration.
* [Allowed Origins](/documentation/pr-preview/pr-690/millicast/distribution/access-control/allowed-origins.md#allowed-origins): If specified, only the domains in the list will be allowed to broadcast with the Publish token. Wildcard subdomains are also allowed, e.g.: `*.demo.com`. When unspecified (*an empty list*), there are no domain restrictions.
* [IP Filtering](/documentation/pr-preview/pr-690/millicast/distribution/access-control/allowed-origins.md#ip-filters): With IP Address Filters, you can impose restrictions that limit access to a real-time stream by specifying specific IP network addresses.
* [Geo-Blocking](/documentation/pr-preview/pr-690/millicast/distribution/access-control/geo-blocking.md): Geo-blocking refers to restricting access to certain content based on the geographic location of the user. It can be filtered by "allowed" and "denied" countries. With geo-blocking, providers can adhere to specific licensing agreements and distribution rights, protect copyrighted material, or service another layer of privacy when working on classified content.

These restrictions can be implemented in the [Dashboard](https://streaming.dolby.io/signin) or [via the token REST APIs](/documentation/pr-preview/pr-690/millicast/token-api.md).

## Subscribing access control[​](#subscribing-access-control "Direct link to Subscribing access control")

A Subscribe token is **optional** for [playing back](/documentation/pr-preview/pr-690/millicast/playback.md) a stream but can provide extra security for your content. [When enabled](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md), streams that require a Subscribe token will block access to users not in possession of a valid token coming from a valid domain. This makes Subscribe tokens useful for protecting paywalled content or non-public content. Subscribe tokens also allow you to add time limits, specify IPs, and even set the token to only work from single or multiple specified domains.

During the Subscribe token creation process, you can further limit access in a few ways:

* [Temporary Token](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md#creating-a-subscribe-token): By making a token expire after a set period of time, you limit the window of opportunity for someone to misuse the resource. Tokens expiration is defined by the number of seconds until it expires, with one second being the shortest possible token duration.
* [Allowed Origins](/documentation/pr-preview/pr-690/millicast/distribution/access-control/allowed-origins.md#allowed-origins): If specified, only the domains in the list will be allowed in requests to Director API with the Subscribe token. Wildcard subdomains are also allowed, e.g.: `*.demo.com`. When unspecified (*an empty list*), there are no domain restrictions.
* [IP Filtering](/documentation/pr-preview/pr-690/millicast/distribution/access-control/allowed-origins.md#ip-filters): With IP Address Filters, you can impose restrictions that limit access to a stream by specifying specific IP network addresses.
* [Geo-Blocking](/documentation/pr-preview/pr-690/millicast/distribution/access-control/geo-blocking.md): Geo-blocking refers to restricting access to certain content based on the geographic location of the user. It can be filtered by "allowed" and "denied" countries. With geo-blocking, providers can adhere to specific licensing agreements and distribution rights, protect copyrighted material, or service another layer of privacy when working on classified content.

Tracking bandwidth consumption can help detect stream sharing

The **Tracking ID** lets you create an alphanumeric ID that can be used to track and associate streaming statistics, such as bandwidth consumption, to various viewers on a stream. This can be useful for detecting token sharing and disabling misused tokens. For more information, see [Syndication](/documentation/pr-preview/pr-690/millicast/distribution/syndication.md#creating-a-subscribe-token-with-tracking-id).

These restrictions can be implemented in the [Dashboard](https://streaming.dolby.io/signin) or via the [token REST APIs](/documentation/pr-preview/pr-690/millicast/token-api.md).
