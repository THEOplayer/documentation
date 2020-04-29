# Custom Analytics Integration

Video analytics provide tremendous insights into your user's QoE, bring extra business intelligence and enhance decision making. There are a wide selection of analytics systems in the current landscape (e.g. Google Analytics, Conviva, ...), often with their own focus, expertise and value.

What most video analytic systems have in common  is that their insights (partly) originate from video events:

- play event: a user clicks the play button, or resumes playback after a pause
- fullscreen event: a user goes fullscreen on their device
- quality change event: the video quality switches from a lower resolution to a higher one
- waiting event: the video is stalled and unable to continue playback for some time
- ...

These systems gather raw data like the events above and convert it into understandable insights.

This guide will explain how to do a custom integration with an analytics system and will be useful in case THEOplayer isn't pre-integrated with the system, or you want to fully control which data gets sent over.

Google Analytics (GA) is used as an example, due to its widespread use for analytics in general.

**Keep in mind** that GA is not the only system out there. You can easily swap out the Google Analytics example for something like [Nielsen](http://www.nielsen.com/eu/en/solutions/capabilities/media-analytics.html) or [Youbora](https://nicepeopleatwork.com/youbora/) (Nice People At Work), or even your own analytics back-end.

A custom integration for the systems above is most likely not needed. We constantly validate our pre-integrations, ensuring you that they are up-to-standard and up-to-date.

## Prerequirements

There are two prerequirements in order to continue with this guide:

1. You have a THEOplayer license. If you aren't using THEOplayer yet, you can start your free trial [here](https://portal.theoplayer.com).

2. You have some [basic knowledge](../../getting-started/01-sdks/01-web/00-getting-started.md) on how to use THEOplayer, and can navigate comfortable through [the API](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.md) to find [relevant events](http://demo.theoplayer.com/using-events-examples).

This guide will not discuss how to set-up a basic template, and how to understand it. We dive in to the analytics code, which could be placed as mentioned in the code comment below. Please refer to this [guide for a starting template](../../getting-started/01-sdks/01-web/00-getting-started.md)

## Integrating Google Analytics

##### Web SDK

Google Analytics (GA) requires you to [load in the GA library](https://developers.google.com/analytics/devguides/collection/analyticsjs/) and configure it through JavaScript.

```html
<head>
...
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-XXXXXXXX-XX', 'auto');
    ga('send', 'pageview');
...
</head>
```

Secondly, you want to [set-up trackers](https://developers.google.com/analytics/devguides/collection/analyticsjs/creating-trackers), which can store data and send it to Google Analytics.

```js
var tracker = {
    entries : [],
    send : function (entry) {
        this.entries.push(entry);
    }
};

if (!window.GoogleAnalyticsObject || !window[window.GoogleAnalyticsObject]) {
    // TODO: If code is set in configuration and no analytics initialised on page with said code -> initialise it
    // There is no Google Analytics initiated on the web page - do nothing.
    return;
}

ga(function() {
    var t = ga.getAll()[0];

    for (var i = 0; i < tracker.entries.length; i += 1) {
        t.send(tracker.entries[i]);
    }

    tracker = t;
});
```

The remaining part is to send relevant events to Google Analytics. The easiest method is to subscribe to a lot of THEOplayer events, and send them over through the tracker.

```js
player.addEventListener(['durationchange', 'stalled', 'ended', 'seeking', 'seeked', 'waiting', 'playing', 'pause', 'volumechange'], function (event) {
    tracker.send({
        hitType: 'event',
        eventCategory: 'video',
        eventAction: event.type,
        eventLabel: player.src,
        eventValue: Math.floor(player.currentTime)
    });
});
```

Of course, you control the code, so you could send custom "made-up" events. A useful example would be the firstplay event, which would map to the first play event for a session.

```js
var firstplay = true;
player.addEventListener('play', function (event) {
    if (firstplay) {
        tracker.send({
            hitType: 'event',
            eventCategory: 'video',
            eventAction: 'firstplay',
            eventLabel: player.src,
            eventValue: Math.floor(player.currentTime)
        });
        firstplay = false;
    }
    tracker.send({
        hitType: 'event',
        eventCategory: 'video',
        eventAction: event.type,
        eventLabel: player.src,
        eventValue: Math.floor(player.currentTime)
    });
})
```

Keep in mind that it would be wise to set firstplay to true again when you change the player's source.

Remember that not every event is accessible through the player property. For example, if you want to notify GA of a video quality change event, you have to subscribe to the correct video track.

```js
    player.videoTracks.addEventListener('addtrack', function(e0) {
        e0.track.addEventListener('activequalitychanged', function(e1) {
            tracker.send({
            hitType: 'event',
            eventCategory: 'video',
            eventAction: e1.type,
            eventLabel: player.src,
            eventValue: Math.floor(player.currentTime)
        });
    });
```

##### Android (/TV) SDK

##### iOS (/tvOS) SDK

## Conclusion

A custom analytics integration gives you full control over your code, and the data you want to submit to your analytics system. This data is exposed through the THEOplayer API, and allows you to subscribe to events such as the [start of an ad](https://support.theoplayer.com/hc/en-us/articles/115000275789-Ads-API), or a [direction change event in 360/VR](https://support.theoplayer.com/hc/en-us/articles/115003088225-360-Video-and-VR-API) playback.

<!-- Extra resources:

1. 
[THEOplayer API](https://support.theoplayer.com/hc/en-us/sections/203124169-Javascript-API-2-x)

2. 
[THEOplayer Getting Started Guide](https://support.theoplayer.com/hc/en-us/articles/115001933305-Getting-Started-with-THEOplayer-2-X)

3. 
[Examples of using 2.X events](http://demo.theoplayer.com/using-events-examples) -->