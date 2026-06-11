# Uplynk Ads

Uplynk offers support for server-side ad-insertion or in-short SSAI.

This article explains how to use the THEOplayer's Ads APIs to interact with the Uplynk Ads service

## Global Configuration[​](#global-configuration "Direct link to Global Configuration")

The examples below demonstrate how to pass along global configuration for Uplynk Ads in the Connector.

```kotlin
val uplynkConfiguration = UplynkConfiguration(defaultSkipOffset: ..., onSeekOverAd: ...)

```

> `defaultSkipOffset` describes how many seconds the user has to wait before an ad is skippable. `onSeekOverAd` controls how the connector behaves when seeking over ads. There are three values: `PLAY_ALL`, `PLAY_LAST` and `PLAY_NONE`. The first option forces playback of all the unwatched ads before the seek point. `PLAY_LAST` forces playback of the last ad before the seek point.

## Uplynk Ads API[​](#uplynk-ads-api "Direct link to Uplynk Ads API")

Specifying a source which contains server-side ads configured through Uplynk will have the THEOplayer instance report such ads through its Ads API.

Users can use the THEOplayer Ads events to interact with Uplynk Ads:

```kotlin
player.ads.addEventListener(AdsEventTypes.ADD_AD_BREAK) {
    Log.d("UplynkConnectorEvents", "ADD_AD_BREAK ")
}

player.ads.addEventListener(AdsEventTypes.AD_BREAK_BEGIN) {
    Log.d("UplynkConnectorEvents", "AD_BREAK_BEGIN ")
}

player.ads.addEventListener(AdsEventTypes.AD_BEGIN) {
    Log.d("UplynkConnectorEvents", "AD_BEGIN ")
}

player.ads.addEventListener(AdsEventTypes.AD_FIRST_QUARTILE) {
    Log.d("UplynkConnectorEvents", "AD_FIRST_QUARTILE ")
}

player.ads.addEventListener(AdsEventTypes.AD_MIDPOINT) {
    Log.d("UplynkConnectorEvents", "AD_MIDPOINT ")
}

player.ads.addEventListener(AdsEventTypes.AD_THIRD_QUARTILE) {
    Log.d("UplynkConnectorEvents", "AD_THIRD_QUARTILE ")
}

player.ads.addEventListener(AdsEventTypes.AD_END) {
    Log.d("UplynkConnectorEvents", "AD_END ")
}

player.ads.addEventListener(AdsEventTypes.AD_BREAK_END) {
    Log.d("UplynkConnectorEvents", "AD_BREAK_END ")
}

player.ads.addEventListener(AdsEventTypes.AD_ERROR) {
    Log.d("UplynkConnectorEvents", "AD_ERROR " + it.error)
}

player.ads.addEventListener(AdsEventTypes.AD_SKIP) {
    Log.d("UplynkConnectorEvents", "AD_SKIP ")
}

player.addEventListener(PlayerEventTypes.ERROR) {
    Log.d("UplynkConnectorEvents", "ERROR " + it.errorObject)
}

```

Users can also skip Ads through the `skip` API in THEOplayer:

```kotlin
player.ads.skip()

```

> Calling the `player.ads.skip()` function on a live stream will not have any effect.

## Related articles[​](#related-articles "Direct link to Related articles")

* [Uplynk - Preplay](/documentation/pr-preview/pr-690/theoplayer/connectors/android/uplynk/preplay.md)
* [Uplynk - Ping](/documentation/pr-preview/pr-690/theoplayer/connectors/android/uplynk/ping.md)
