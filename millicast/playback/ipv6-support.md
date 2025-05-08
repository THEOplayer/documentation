---
title: IPv6 Support
slug: /playback/ipv6-support
unlisted: true # Note: unlisted pages still show up in dev mode
---

IPv6 is a communications protocol used by some ISP and cellular networks. In most cases end users will have either an IPv4 or IPv4 + IPv6 network connection. If you have viewers that only have IPv6 connectivity, then you will need to opt-in to IPv6 support with Millicast. This document describes how to opt-in and how IPv6 interacts with other features of the Millicast service.

## How to opt-in for IPv6

To opt-in to IPv6 support the player or SDK connecting to Millicast must override the director URL. The default value is https://director.millicast.com. To use IPv6 this must be set to https://director-ipv6.millicast.com.
https://director-ipv6.millicast.com supports both IPv4 and IPv6 connections.

### Millicast hosted player

To opt-in with the Millicast hosted player, simply add _ipv6=true_ to query string of the player URL.
For example, if the URL you use today is: https://viewer.millicast.com/?streamId=k9Mwad/multiview
It becomes: https://viewer.millicast.com/?streamId=k9Mwad/multiview&ipv6=true

This also works when the player is embedded in an iframe.

### Millicast JS SDK

To opt-in to with the Millicast JS SDK, call the setEndpoint method on the Director object prior to connecting the View and pass "https://director-ipv6.millicast.com"

```javascript
millicast.Director.setEndpoint('https://director-ipv6.millicast.com');
```

See also: https://millicast.github.io/millicast-sdk/module-Director.html#~setEndpoint

### Millicast iOS SDK

To opt-in to with the Millicast iOS SDK, set the apiUrl in the credentials object to "https://director-ipv6.millicast.com/api/director/subscribe"

```swift
let credentials = MCSubscriberCredentials()
credentials.streamName =  "STREAM_NAME"; // The name of the stream you want to subscribe to
credentials.accountId = "ACCOUNT_ID"; // The ID of your Dolby.io Real-time Streaming account
credentials.apiUrl = "https://director-ipv6.millicast.com/api/director/subscribe"; // The subscribe API URL

try await subscriber.setCredentials(credentials)
```

### Millicast Android SDK

To opt-in to with the Millicast Android SDK, set the apiUrl in the credentials object to "https://director-ipv6.millicast.com/api/director/subscribe"

```kotlin
launchDefaultScope {
  val credentials = Credential(
    streamName = "STREAM_NAME",
    accountId = "ACCOUNT_ID",
    apiUrl = "https://director-ipv6.millicast.com/api/director/subscribe"
  )
  subscriber.setCredentials(credentials)
}
```

## Interaction with other features

### TURN

TURN services are not provided by Millicast if IPv6 is used at this time. If your viewers' network can only support TCP over IPv6, then a media connection will not be correctly established to Millicast.
Please contact sales if this is a requirement.

### IP allow lists and IP binding

If you use these IP access control features, be aware that connections that support both IPv4 and IPv6 have more than one IP address. Each time the viewer connects it may use a different IP address (depending on whether IPv4 or IPv6 is used for the connection).
If you opt-in to IPv6 support and allow only certain IP addresses or ranges to connect then you must add both IPv4 and IPv6 addresses for the allowed viewers. If you do not, then viewer connections may be rejected.

If you automatically bind a limited number of IP addresses to the subscribe token, be aware that each viewer with an IPv4 and IPv6 address may bind more than one allowed IP address.

## Publishing with IPv6

IPv6 is not supported for publishing at this time. Please contact sales if this is a requirement.
