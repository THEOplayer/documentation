# Youbora

This article is a good place to start if you are looking for information on how to configure the THEOplayer Youbora pre-integration, which is part of the [Analytics API](https://docs.theoplayer.com/api-reference/web/theoplayer.youboraanalyticsintegrationid.md).

### Table of Contents

- [SDKs](#sdks)
- [Code example](#code-example)
- [Related links](#related-links)
- [Related articles](#related-articles)

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |    No    |      Yes       |      Yes       |

## Code example

##### Web SDK
Make sure you load the Youbora plugin in the head of the page.

```html  
<script src="https://smartplugin.youbora.com/v6/js/adapters/theoplayer2/6.8.10/sp.min.js"></script>  
```  

Include the following in your `SourceDescription` object:

```js  
var youbora = {  integration: "youbora",  
  accountCode: "YOUR_YOUBORA_ACCOUNT_CODE",  
  enableAnalytics: true,  
  username: "THEO",  
 "content.title": "THEO 1 (VOD)", "content.duration": 653, "content.isLive": false,}  
  
var SourceDescription = {  sources: [typedSource],  
  analytics: [youbora],  
}  
```  

##### Android (TV) SDK

You need to first initialize the Youbora library on your application. You can do this in two different ways:

- While creating the player programmatically:

```java  
// create player config  
THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()  
 .analytics(new YouboraOptions.Builder("YOUR_YOUBORA_ACCOUNT_CODE").build()) .build();  
// create player  
THEOplayerView tpv = new THEOplayerView(this, playerConfig);  
```  

- Or through the player's XML configuration:

```java  
<com.theoplayer.android.api.THEOplayerView  
 android:id="@+id/theo_player_view" app:youboraAccountCode="YOUR_YOUBORA_ACCOUNT_CODE" />```  
  
You can then set a Youbora source like the following:  
  
```java  
YouboraOptions youbora = new YouboraOptions.Builder("YOUR_YOUBORA_ACCOUNT_CODE")  
 .put("enableAnalytics", "true") .put("username", "THEO") .put("content.title", "VOD") .put("content.duration", "653") .put("content.isLive", "false") .build();  
SourceDescription elephantsDream = SourceDescription.Builder  
 .sourceDescription(TypedSource.Builder.typedSource().src("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8").build()) .analytics(youbora) .build();  
tpv.getPlayer().setSource(elephantsDream);  
```

:::info

Starting from Android SDK API 28, Google introduced some additional network security configurations. By default, http requests are blocked by the OS unless the application explicitly allows it.

In order to allow http requests (and allow Youbora data to be sent to the dashboard), you should follow the instructions in their guide: [Network security configuration](https://developer.android.com/training/articles/security-config).

Basically there are 2 different ways to solve this on your app:

1. Set the `android:usesCleartextTraffic="true"` flag under your application tag.
2. If you are using a network security config such as: `android:networkSecurityConfig="@xml/network_security_config"`, include this flag on your configuration, for example:

```java  
<?xml version="1.0" encoding="utf-8"?>  
<network-security-config>  
 <domain-config cleartextTrafficPermitted="true"> .... </domain-config> <base-config cleartextTrafficPermitted="false"/></network-security-config>  
``` 

:::

##### Legacy iOS/tvOS SDK (4.12.x)

You need to first initialize the Youbora library on your application. You can do this on your player's configuration object:

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

## Related links

- [Analytics API](https://docs.theoplayer.com/api-reference/web/theoplayer.analytics.md)
- NPAW's own Youbora THEOplayer plugin: [Web](https://bitbucket.org/npaw/theoplayer2-adapter-js/src/master/), [iOS](https://bitbucket.org/npaw/theoplayer-adapter-ios/src/master/), [Android](https://bitbucket.org/npaw/theoplayer-adapter-android/src/master/)
- Youbora documentation on NPAW's website: [Web](https://documentation.npaw.com/integration-docs/docs/theoplayer), [iOS](https://documentation.npaw.com/integration-docs/docs/theoplayer-ios), [Android](https://documentation.npaw.com/integration-docs/docs/theoplayer-android) (login required)

## Related articles

- [Customize UI during ad playback](../11-ui/09-customize-ui-during-playback.md)

- [Why does fullscreen not behave as expected on iOS browsers?](../../faq/04-why-does-fullscreen-not-behave-as-expected-on-ios.md)

- [How to set up VAST and VMAP ads](../01-ads/03-how-to-set-up-vast-and-vmap.md)
