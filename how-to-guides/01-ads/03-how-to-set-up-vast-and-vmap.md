# How to set up VAST and VMAP ads?

This article explains how to integrate a VAST and VMAP through THEOplayer's own Advertisement system, as well as through Google IMA.

### Table of Contents
- [Prerequirements](#prerequirements)
- [VAST](#vast)
- [VMAP](#vmap)
- [Google IMA](#google-ima)
  - [Pre-requirements](#pre-requirements)
- [Details](#details)


## Prerequirements

##### Android SDK

- Android Studio installed on your machine
- Some basic java development knowledge
- A THEOplayer license
- An Android device you can test on, since the Android emulators are not as reliable as they should be.

##### iOS SDK

- A Mac device with Xcode
- Some basic iOS development knowledge
- A THEOplayer license
- An iOS device you can test on, since the Xcode emulators are not as reliable as they should be.

## VAST

The snippets below demonstrate how to configure a VAST advertisement to be scheduled at second 15.

##### Web SDK

```js
let vmapSource =
  "//cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml";
let offset = "00:00:15";
let ad = [{ sources: vmapSource, timeOffset: offset }];

let source = {
  sources: [typedSource],
  ads: ad,
};
player.source = source;
```

##### Android SDK

```java
String vmapSource = "//cdn.theoplayer.com/demos/preroll.xml";
String offset = "00:00:15";
AdDescription ad = THEOplayerAdDescription.Builder.adDescription(vmapSource).timeOffset(offset).build();

SourceDescription sourceDescription = SourceDescription.Builder.sourceDescription(typedSource)
        .ads(ad)
        .build();
tpv.getPlayer().setSource(sourceDescription);
```

##### iOS SDK

```swift
let vmapSource = "//cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml"
let offset = "00:00:15"
let ad = THEOAdDescription(src : vmapSource, timeOffset: offset)

let source = SourceDescription(source : typedSource, ads: [ad])
theoplayer.source = source
```

Set `offset` in the snippets above to `"start"` to schedule the ad as a pre-roll, and to `"end"` to schedule the ad as a post-roll.

## VMAP

The snippets below demonstrate how to configure a VMAP advertisement.

##### Web SDK

```js
// Declare a VMAP ad source. No timeOffset here, because the VMAP itself arranges this.
let vmapSource =
  "//cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml";
let ad = [{ sources: vmapSource }];

let source = {
  sources: [typedSource],
  ads: ad,
};
player.source = source;
```

##### Android SDK

```java
// Declare a VMAP ad source. No timeOffset here, because the VMAP itself arranges this.
String vmapSource = "//cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml";
AdDescription ad = THEOplayerAdDescription.Builder.adDescription(vmapSource).build();

SourceDescription sourceDescription = SourceDescription.Builder.sourceDescription(typedSource)
        .ads(ad)
        .build();
tpv.getPlayer().setSource(sourceDescription);
```

##### iOS SDK

```swift
// Declare a VMAP ad source. No timeOffset here, because the VMAP itself arranges this.
let vmapSource = "//cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml"
let ad = THEOAdDescription(src : vmapSource)

let source = SourceDescription(source : typedSource, ads: [ad])
theoplayer.source = source
```

## Google IMA

Advertisement can also be scheduled through Google IMA.

### Pre-requirements

Google IMA has a dependency on the IMA library. Hence, this library needs to be included.

##### Web SDK

Include the IMA's JavaScript library:

```html
<script
  type="text/javascript"
  src="//imasdk.googleapis.com/js/sdkloader/ima3.js"
></script>
```

##### Android SDK

Google IMA has to be enabled in the `THEOplayerConfig`:

```java
THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
                .googleIma(true)
                .build();
```

##### iOS SDK

Google IMA has to be enabled in the `THEOplayerConfiguration:`

```swift
let playerConfig = THEOplayerConfiguration(chromeless: false, jsPaths: [], googleIMA: true, analytics : [])
```

## Details

##### Web SDK

You have to set integration to "google-ima". For example, in the above VMAP example, you have to use

`let ad = [{ sources: vmapSource, integration: "google-ima" }];`

instead of

`let ad = [{ sources: vmapSource }];`

##### Android SDK

You have to use a `GoogleImaAdDescription�`instead of a `THEOAdDescription`. For example, in the above VMAP example, you have to use

`GoogleImaAdDescription ad = GoogleImaAdDescription.Builder.googleImaAdDescription(vmapSource).build();`

instead of

`AdDescription ad = THEOplayerAdDescription.Builder.adDescription(vmapSource).timeOffset(offset).build();`

##### iOS SDK

You have to use a `GoogleImaAdDescription�`instead of a `THEOAdDescription`. For example, in the above VMAP example, you have to use

`let ad = GoogleImaAdDescription(src : vmapSource)`

instead of

`let ad = THEOAdDescription(src : vmapSource)`


