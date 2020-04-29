# Youbora

This article is a good place to start if you are looking for information on how to configure the THEOplayer Youbora integration. The THEOplayer Youbora pre-integration is part of the [Analytics API](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.youboraanalyticsintegrationid.md).
On that page you will find detailed information on how to get started by setting up the Web SDK integration. An example implementation can be seen here: [http://demo.theoplayer.com/youbora-analytics-test-page-20171025](http://demo.theoplayer.com/youbora-analytics-test-page-20171025)

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | No  |      Yes       |      Yes       |
## Code example

If you are configuring the Android SDK (or iOS SDK) you should use the put method. As an example, in order to achieve a similar setting as on [http://demo.theoplayer.com/youbora-analytics-test-page-20171025](http://demo.theoplayer.com/youbora-analytics-test-page-20171025), you would use the following:

##### Web SDK

Make sure you load the Youbora plugin in the head of the page:

```html
<script src="http://smartplugin.youbora.com/v6/js/adapters/theoplayer2/6.5.7/sp.min.js"></script>
```

Include the following in the SourceDescription object:
```js
var youbora = {
    "integration": "youbora",
    "accountCode": "YOUR_YOUBORA_ACCOUNT_CODE",
    "enableAnalytics": true,
    "username": "THEO",
    "content.title": "THEO 1 (VOD)",
    "content.duration": 653,
    "content.isLive": false
};
var SourceDescription = {
    "sources": [typedSource]
    "analytics": [youbora],
};
```

##### Android (TV) SDK

There are two approaches to configuring Youbora.

- Through the Player's Source

```java
YouboraOptions youbora = YouboraOptions.Builder.youboraOptions("YOUR_YOUBORA_ACCOUNT_CODE")
    .put("enableAnalytics", "true")
    .put("username", "THEO")
    .put("content.title", "THEO 1 (VOD)")
    .put("content.duration", "653")
    .put("content.isLive", "false")
    .build();
SourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()
    .sources(typedSource)
    .analytics(youbora)
    .build();
tpv.getPlayer().setSource(sourceDescription );
```

- Through the Player's Configuration - Programmatically:

```java
// create player config
THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
        .analytics(YouboraOptions.Builder.youboraOptions("YOUR_YOUBORA_ACCOUNT_CODE").build())
        .build();

// create player
THEOplayerView tpv = new THEOplayerView(this, playerConfig);
```

- Or through the Players' Configuration -  XML configuration:

```java
<com.theoplayer.android.api.THEOplayerView
    android:id="@+id/theo_player_view"
    app:youboraAccountCode="YOUR_YOUBORA_ACCOUNT_CODE" />
```

##### iOS (/tvOS) SDK

First, create a YouboraOptions object and provide it to the player's configuration. This step is required to load the Youbora plugin adapter.

```swift
let youboraOptions = YouboraOptions(accountCode: "YOUR_YOUBORA_ACCOUNT_CODE")
youboraOptions.put(key: "enableAnalytics", value: "true")
let playerConfiguration = THEOplayerConfiguration(chromeless: true, analytics: [youboraOptions])
```

You can then provide different Youbora option objects per source you set:
```swift
let youbora = YouboraOptions(accountCode: "YOUR_YOUBORA_ACCOUNT_CODE")
youbora.put(key: "enableAnalytics", value: "true")
youbora.put(key: "username", value: "THEO")
youbora.put(key: "content.title", value: "THEO 1 (VOD)")
youbora.put(key: "content.duration", value: "653")
youbora.put(key: "content.isLive", value: "false")
let sourceDescription = SourceDescription(source : typedSource, analytics: [youbora])
```

<!-- ## Related links:

- Analytics API: [https://support.theoplayer.com/hc/en-us/articles/115003779985-Analytics-API](https://support.theoplayer.com/hc/en-us/articles/115003779985-Analytics-API)
- Youbora demo page: [http://demo.theoplayer.com/youbora-analytics-test-page-20171025](http://demo.theoplayer.com/youbora-analytics-test-page-20171025)
- Youbora documentation on NPAW's web site: [http://developer.nicepeopleatwork.com/plugins/general/setting-youbora-options/](http://developer.nicepeopleatwork.com/plugins/general/setting-youbora-options/) (login required)
- NPAW's Youbora THEOplayer plugin: [http://developer.nicepeopleatwork.com/plugins/integration/js-browser/theo-player-2-v6/](http://developer.nicepeopleatwork.com/plugins/integration/js-browser/theo-player-2-v6/)

## Related articles

- 
Page:

[Customize UI during ad playback](/wiki/spaces/THEOSD/pages/462323713/Customize+UI+during+ad+playback)

- 
Page:

[Youbora](/wiki/spaces/THEOSD/pages/350126110/Youbora)

- 
Page:

[Why does fullscreen not behave as expected on iOS browsers](/wiki/spaces/THEOSD/pages/371818499/Why+does+fullscreen+not+behave+as+expected+on+iOS+browsers)

- 
Page:

[How to set up VAST and VMAP ads](/wiki/spaces/THEOSD/pages/517341194/How+to+set+up+VAST+and+VMAP+ads)

- 
Page:

[Why doesn't Chromecast work when embedded in an iframe on iOS?](/wiki/spaces/THEOSD/pages/690913344) -->