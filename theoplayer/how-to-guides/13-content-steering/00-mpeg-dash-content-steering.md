# MPEG-DASH Content Steering on web

This guide shows you how to use MPEG-DASH Content Steering in the THEOplayer Web SDK.

MPEG-DASH Content Steering is a server-driven mechanism that allows content providers to dynamically control CDN selection
across large groups of clients. While players can independently respond to local network conditions and switch between CDNs,
Content Steering enables centralized decision-making at scale. By communicating with a steering server, the player receives
a prioritized list of CDN endpoints that reflects real-time information about CDN performance, capacity, and cost across
your entire user base. This allows you to proactively route traffic away from overloaded or underperforming CDNs,
balance load across multiple providers, or implement cost optimization strategies—all without requiring player-side logic
or client updates.

## Enabling/Disabling Content Steering

By default, Content Steering in MPEG-DASH is enabled, however, it can be explicitly enabled or disabled using a flag in
your `SourceDescription`.

You can also override the `clientRequirement="false"` property in the MPEG-DASH manifest to enable Content Steering for
a specific playback session by explicitly setting it to `true`.

```javascript
player.source = {
  sources: {
    src: 'https://your-dash-source-with-content-steering.mpd',
    dash: {
      contentSteering: true, // Default is true; set to false to disable.
    },
  },
};
```

## Events for Content Steering

THEOplayer provides events to monitor the Content Steering process. For more details, check the
[API documentation](pathname:///theoplayer/v10/api-reference/web/#ContentSteeringStartEvent-1).

```javascript
player.addEventListener('contentsteeringstart', console.log);
player.addEventListener('contentsteeringstop', console.log);
player.addEventListener('contentsteeringlocationchange', console.log);
player.addEventListener('contentsteeringupdate', console.log);
player.addEventListener('contentsteeringerror', console.log);
```

## Known Limitations

- `PATHWAY-CLONE` from the Content Steering server response is not supported yet.
- Extended HTTP GET request parametrization instructions are not supported yet. You can add custom parameters to Content Steering requests by using a `RequestInterceptor` to intercept and modify network requests with the type `content-steering`.
- Targeting a specific set of clients as part of a ServiceDescription element is not supported.
