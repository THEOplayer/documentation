# MPEG-DASH Content Steering on web

This article explains how to implement MPEG-DASH Content Steering with THEOplayer Web SDK.

MPEG-DASH Content Steering allows the player to communicate with a steering server to receive a personalized priority list 
for all the available CDN endpoints. This helps optimize the streaming experience by directing the player to use the 
best possible CDN based on various factors such as network conditions, user location, and server load.

## Enabling/Disabling Content Steering

By default, Content Steering in MPEG-DASH is enabled, however, it can be explicitly enabled or disabled using a flag in 
your `SourceDescription`.

You can also override the `clientRequirement="false"` property in the MPEG-DASH manifest to enable Content Steering for 
a specific playback session. by explicitly setting it to `true`.

```javascript
player.source = {
    sources: {
        src: 'https://your-dash-source-with-content-steering.mpd',
        dash: {
            contentSteering: true // Default is true; set to false to disable.
        }
    }
};
```

## Events for Content Steering

THEOplayer provides events to monitor the Content Steering process. For more details, check the 
[API documentation](pathname:///theoplayer/v10/api-reference/web/#ContentSteeringStartEvent-1).

```javascript
player.addEventListener('contentsteeringstart', console.log)
player.addEventListener('contentsteeringstop', console.log)
player.addEventListener('contentsteeringlocationchange', console.log)
player.addEventListener('contentsteeringupdate', console.log)
player.addEventListener('contentsteeringerror', console.log)
```

## Known Limitations

- `PATHWAY-CLONE` from the Content Steering server response is not supported yet.
- Extended HTTP GET request parametrization instructions are not supported yet. You can add custom parameters to Content Steering requests by using a `RequestInterceptor` to intercept and modify network requests with the type `content-steering`.
