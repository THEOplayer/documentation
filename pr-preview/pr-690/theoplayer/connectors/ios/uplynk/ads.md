# Uplynk Ads

Uplynk offers support for server-side ad-insertion or in-short SSAI.

This article explains how to use the THEOplayer's Ads APIs to interact with the Uplynk Ads service

## Global Configuration[​](#global-configuration "Direct link to Global Configuration")

The examples below demonstrate how to pass along global configuration for Uplynk Ads in the Connector.

```swift
let uplynkConfiguration = UplynkConfiguration(defaultSkipOffset: ..., skippedAdStrategy: ...)

```

> `defaultSkipOffset` describes how many seconds the user has to wait before an ad is skippable. `skippedAdStrategy` controls how the connector behaves when seeking over ads. There are three values: `playAll`, `playLast` and `playNone`. The first option forces playback of all the unwatched ads before the seek point. `playLast` forces playback of the last ad before the seek point.

## Uplynk Ads API[​](#uplynk-ads-api "Direct link to Uplynk Ads API")

Specifying a source which contains server-side ads configured through Uplynk will have the THEOplayer instance report such ads through its Ads API.

Users can use the THEOplayer Ads events to interact with Uplynk Ads:

```swift
 func addAdsEventListeners() {
        listeners["ADD_AD_BREAK"] = player.ads.addEventListener(type: AdsEventTypes.ADD_AD_BREAK) { [weak self] in
            os_log("--------------------------------------->")
            os_log("--> Add Ad Break Event occured: \($0)")
            os_log("--------------------------------------->")
        }
        
        listeners["AD_BREAK_BEGIN"] = player.ads.addEventListener(type: AdsEventTypes.AD_BREAK_BEGIN) { [weak self] in
            os_log("--------------------------------------->")
            os_log("--> Ad break begin Event occured: \($0)")
            os_log("--------------------------------------->")
        }
        
        listeners["AD_BREAK_END"] = player.ads.addEventListener(type: AdsEventTypes.AD_BREAK_END) { [weak self] in
            os_log("--------------------------------------->")
            os_log("--> Ad break end Event occured: \($0)")
            os_log("--------------------------------------->")
        }
        
        listeners["ADD_AD"] = player.ads.addEventListener(type: AdsEventTypes.ADD_AD) {
            os_log("--------------------------------------->")
            os_log("--> Add Ad Event occured: \($0)")
            os_log("--------------------------------------->")
        }
        
        listeners["AD_BEGIN"] = player.ads.addEventListener(type: AdsEventTypes.AD_BEGIN) {
            os_log("--------------------------------------->")
            os_log("--> Ad Begin Event occured: \($0)")
            os_log("--------------------------------------->")
        }
        
        listeners["AD_FIRST_QUARTILE"] = player.ads.addEventListener(type: AdsEventTypes.AD_FIRST_QUARTILE) {
            os_log("--------------------------------------->")
            os_log("--> Ad First Quartile Event occured: \($0)")
            os_log("--------------------------------------->")
        }
        
        listeners["AD_MIDPOINT"] = player.ads.addEventListener(type: AdsEventTypes.AD_MIDPOINT) {
            os_log("--------------------------------------->")
            os_log("--> Ad Mid Point Event occured: \($0)")
            os_log("--------------------------------------->")
        }
        
        listeners["AD_THIRD_QUARTILE"] = player.ads.addEventListener(type: AdsEventTypes.AD_THIRD_QUARTILE) {
            os_log("--------------------------------------->")
            os_log("--> Ad Third Quartile Event occured: \($0)")
            os_log("--------------------------------------->")
        }
        
        listeners["AD_END"] = player.ads.addEventListener(type: AdsEventTypes.AD_END) {
            os_log("--------------------------------------->")
            os_log("--> Ad End Event occured: \($0)")
            os_log("--------------------------------------->")
        }
        
        listeners["AD_ERROR"] = player.ads.addEventListener(type: AdsEventTypes.AD_ERROR) {
            os_log("--------------------------------------->")
            os_log("--> Ad Error Event occured: \($0.error ?? "")")
            os_log("--------------------------------------->")
        }
        
        listeners["AD_SKIP"] = player.ads.addEventListener(type: AdsEventTypes.AD_SKIP) {
            os_log("--------------------------------------->")
            os_log("--> Ad Skip Event occured: \($0)")
            os_log("--------------------------------------->")
        }

```

Users can also skip Ads through the `skip` API in THEOplayer:

```swift
player.ads.skip()

```

> Calling the `player.ads.skip()` function on a live stream will not have any effect.

## Related articles[​](#related-articles "Direct link to Related articles")

* [Uplynk - Preplay](/documentation/pr-preview/pr-690/theoplayer/connectors/ios/uplynk/preplay.md)
* [Uplynk - Ping](/documentation/pr-preview/pr-690/theoplayer/connectors/ios/uplynk/ping.md)
