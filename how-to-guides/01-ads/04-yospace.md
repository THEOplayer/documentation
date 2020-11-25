# Yospace

YoSpace is a Server-Side Ad-Insertion solution. A demo can be found at [http://demo.theoplayer.com/ssai](http://demo.theoplayer.com/ssai).


### Table of Contents
- [SDKs](#sdks)
- [Pre-requirements](#pre-requirements)
- [Starting Template](#starting-template)
- [Integrating Yospace](#integrating-yospace)
- [Conclusion](#conclusion)
  
## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | Unverified  |      Yes       |      Yes       |

## Pre-requirements

##### Web SDK

1. Your THEOplayer SDK needs to have the YoSpace module enabled.
2. You need to include the YoSpace's JavaScript SDK as this is a dependency.

##### Android (TV) SDK

1. Your THEOplayer SDK needs to have the YoSpace module enabled.
2. You need to include the yoAdManagement.aar and yoUtil.aar libraries in your Android project.

##### iOS (/tvOS) SDK

1. Your THEOplayer SDK needs to have the YoSpace module enabled.
2. 
You need to include the YoSpace framework.

## Starting Template

##### Web SDK

The first thing you need is a valid THEOplayer set-up. If you have no experience with setting up our player, we have an excellent [getting started guide](../../getting-started/01-sdks/01-web/00-getting-started.md).

To get THEOplayer to work, you only need to do three things:

1. Reference the THEOplayer JavaScript library (and optionally the default CSS styles).
2. Add a container which can hold your video player with HTML.
3. Create your player through JavaScript using our [API](https://docs.theoplayer.com/api-reference/web/theoplayer.player.md).

A basic HTML page with a working THEOplayer could like the following:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>THEOplayer 2.X: Getting Started</title>
        <metaname="viewport"content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href='/path/to/ui.css'><!-- ads THEOplayer CSS -->
    </head>
    <body>
    
        <div class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"></div>
        
        <script type='text/javascript'src='/path/to/THEOplayer.js'></script><!-- ads THEOplayer library -->
        <script>
        
            var element = document.querySelector('.theoplayer-container'); 
            var player = new THEOplayer.Player(element);
            
            player.source = {
                sources : [{
                    src : 'your.m3u8',
                    type : 'application/x-mpegurl'
                }]
            };
        
        </script>
    </body>
</html>
```

 Pretty self-explanatory, isn't it?

```html    
<link rel="stylesheet" type="text/css" href='/path/to/ui.css'>
```
```html
<script type='text/javascript'src='/path/to/THEOplayer.js'></script>
```
The two snippets above are the references to the JS and CSS library.

```html
<div class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"></div>
```
The snippet above is your HTML container.

```javascript
<script>

var element = document.querySelector('.theoplayer-container'); 
var player = new THEOplayer.Player(element);

player.source = {
    sources : [{
        src : 'your.mpd',
        type : 'application/dash+xml'
    }]
};

</script>
```

The snippet above initializes your player, including a HLS source.


## Integrating Yospace

##### Web SDK

Add a YoSpace ad configuration to the sources.

```javascript
var yoSpaceConfiguration = {
    "integration": "yospace"
}
var SourceDescription = {
    "sources": [
    {
        "src": "http://csm-e-ces1eurxaws101j8-iyypj6ugos2.cds1.yospace.com/csm/extlive/yospace02,sampledroid.m3u8;jsessionid=502C66F7C767AB994AFEAFADCFB822C2.csm-e-ces1eurxaws101j8-iyypj6ugos2.cds1.yospace.com?yo.br=false&yo.ac=true",
        "type": "application/x-mpegurl",
        "ssai": yoSpaceConfiguration
    }
    ]
}
```

You can also access the extended YoSpace API.

```javascript
player.yospace.session; // the YoSpace session object
player.yospace.addEventListener('sessionavailable', console.log);
```

You can also detect ad-related events.
```javascript
player.yospace.registerPlayer(
    {
        AdBreakStart: function() {
            console.log("AdBreakStart", player.yospace.session);
        },
        AdvertStart: function() {
            console.log("AdvertStart", player.yospace.session);
        },
        AdvertEnd: function() {
            console.log("AdvertEnd", player.yospace.session);
        },
        AdBreakEnd: function() {
            console.log("AdBreakEnd", player.yospace.session);
        },
        UpdateTimeline: function() {
            console.log("UpdateTimeline", player.yospace.session);
        },
    }
)
```

##### Android (TV) SDK

Add a YoSpace ad configuration to the sources.

```java
YoSpaceDescription yoSpaceDescription = new YoSpaceDescription.Builder()
    .streamType(StreamType.LIVE)
    // .logLevel(YoSpaceLogLevelConfiguration.Builder.yoSpaceLogLevelConfiguration().http(true).build())
    .build();
TypedSource typedSource = new TypedSource.Builder()
    .src("http://csm-e.cds1.yospace.com/csm/extlive/yospace02,hlssample.m3u8?yo.br=true&yo.ac=true")
    .ssai(yoSpaceDescription)
    .build();
SourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()
    .sources(typedSource)
    .build();
```

You can also access the extended YoSpace API. (**WARNING!** this gives you access to the Yospace Session object! Be careful with your modifications, it could affect how THEOplayer works!)
```java
theoplayer.getPlayer().getYospace().getActiveSession(); // the YoSpace session object
theoplayer.getPlayer().getYospace().addEventListener(YospaceEventTypes.SESSIONCHANGED, new EventListener<SessionChangedEvent>() {
    @Override
    public void handleEvent(SessionChangedEvent event) {
        //from this moment you can access the Yospace session object:
        com.yospace.android.hls.analytic.Session currentSession =
                                tpv.getPlayer().getYospace().getActiveSession();
    }
});
```

You can also detect ad-related events.
```java
theoplayer.getPlayer().getYospace().getActiveSession().addAnalyticListener(new AnalyticEventListener() {
    @Override
    public void onAdvertBreakEnd(AdBreak adBreak) {
        
    }

    @Override
    public void onAdvertBreakStart(AdBreak adBreak) {

    }

    @Override
    public void onAdvertEnd(Advert advert) {

    }

    @Override
    public void onAdvertStart(Advert advert) {

    }

    @Override
    public void onTimelineUpdateReceived(VmapPayload vmapPayload) {

    }

    @Override
    public void onTrackingUrlCalled(Advert advert, String s, String s1) {

    }

    @Override
    public void onVastReceived(VastPayload vastPayload) {

    }
});
```

##### iOS (/tvOS) SDK

Add a YoSpace ad configuration to the sources.

```swift
let yoSpaceConfiguration = YospaceServerSideAdInsertionConfiguration(
    streamType: .live
    //, logLevel: YospaceLogLevelConfiguration(id3Tags: true, rawXml: true)
)
let typedSource = TypedSource(
    src: "http://csm-e.cds1.yospace.com/csm/extlive/yospace02,hlssample.m3u8?yo.br=true&yo.ac=true", 
    type: "application/x-mpegurl", 
    ssai: yoSpaceConfiguration
)
let sourceDescription = SourceDescription(source: typedSource)
```

You can also access the extended YoSpace API. (**WARNING!** this gives you access to the Yospace Session object! Be careful with your modifications, it could affect how THEOplayer works!)

```swift
theoplayer.yospace?.addEventListener(type: YospaceEventTypes.YOSPACE_SESSION_CHANGED, listener: { (e) in
    print("Yospace session received ", e)
    theo
    player.yospace?.activeSession?.subscribe(toAnalyticEvents: YourYospaceAnalyticsListener())
})
```

You can also detect ad-related events. To use Yospace classes and object, you need to include the Yospace headers in your project as described by [http://developer.yospace.com/SDK/iOS/AdManagementSDK/Documentation/HTML5/en/UUID-5bbf1596-4359-83bd-a0c9-cb7d896d1e64.html#UUID-5bbf1596-4359-83bd-a0c9-cb7d896d1e64_UUID-66847d25-2b9b-eb87-aca9-b0114d53a176](http://developer.yospace.com/SDK/iOS/AdManagementSDK/Documentation/HTML5/en/UUID-5bbf1596-4359-83bd-a0c9-cb7d896d1e64.html#UUID-5bbf1596-4359-83bd-a0c9-cb7d896d1e64_UUID-66847d25-2b9b-eb87-aca9-b0114d53a176).

```swift
class YourYospaceAnalyticsListener : NSObject, YSAnalyticObserver {
    func advertDidStart(_ advert: YSAdvert) -> [Any]? {
        print("Yospace advertDidStart")
        return nil
    }
    
    func advertDidEnd(_ advert: YSAdvert) {
        print("Yospace advertDidEnd")
    }
}
```

## Conclusion

THEOplayer partnered with Yospace to fully pre-integrate their Server-Side Ad Insertion solution, allowing you to play their streams in a breeze.

This partnership means that we are compatible with each other: THEOplayer has a long history with and is optimized to play Yospace streams. We regularly validate our integration and are the first to know about changes to the Yospace infrastructure.

Extra resources:

1. [Server-Side Ad Insertion Pre-Integration API](https://docs.theoplayer.com/api-reference/web/theoplayer.serversideadinsertionconfiguration.md)
2. [THEOplayer Getting Started Guide](web/../../../getting-started/01-sdks/01-web/00-getting-started.md)
3. [Yospace website](http://www.yospace.com/)

Related articles

- [Yospace API](https://docs.theoplayer.com/api-reference/web/theoplayer.yospace.md)