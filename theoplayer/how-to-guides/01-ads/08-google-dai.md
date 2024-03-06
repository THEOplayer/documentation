# Google Dynamic Ad Insertion (DAI)

Google DAI is a Server-Side Ad-Insertion solution offered by Google where THEOplayer is pre-integrated and offers playback for HLS and DASH Streams. A demo can be found at [https://demo.theoplayer.com/google-dai](https://demo.theoplayer.com/google-dai).

### Table of Contents

- [SDKs](#sdks)
- [Web SDK](#web-sdk)
- [Android (TV) SDK](#android-sdk)
- [iOS (tvOS) SDK](#iostvos-sdk-and-legacy-iostvos-sdk--412x-)
- [Conclusion](#conclusion)

## SDKs

| Web SDK | Android SDK | iOS SDK |  tvOS SDK  | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | Unverified |   Unverified   |      Yes       |

## Web SDK

### Prerequisites

1. Your THEOplayer SDK needs to have the `google-dai` module enabled.
2. You need to include the Google DAI JavaScript SDK as this is a dependency.

### Starting Template

The first thing you need is a valid THEOplayer setup. If you have no experience with setting up our player, we have an excellent [getting started guide](../../getting-started/01-sdks/01-web/00-getting-started.md).

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
        <title>THEOplayer Web SDK: Getting Started</title>
        <metaname="viewport"content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href='/path/to/ui.css'><!-- ads THEOplayer CSS -->
    </head>
    <body>

        <div class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"></div>

        <script type='text/javascript' src='/path/to/THEOplayer.js'></script><!-- ads THEOplayer library -->
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
<link rel="stylesheet" type="text/css" href="/path/to/ui.css" />
```

```html
<script type="text/javascript" src="/path/to/THEOplayer.js"></script>
```

The two snippets above are the references to the JS and CSS library.

```html
<div
  class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"
></div>
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

### Integrating Google DAI

Add a Google DAI JavaScript library.

```javascript
<script
  type="text/javascript"
  src="//imasdk.googleapis.com/js/sdkloader/ima3_dai.js"
></script>
```

Add a Google DAI ad configuration to the sources.

```javascript
const TYPES = {
  hls: "application/vnd.apple.mpegurl",
  dash: "application/dash+xml"
};

// example and reference tester at https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai/vastinspector
const SOURCES = {
  dash: {
    vod: {
      integration: "google-dai",
      availabilityType: "vod",
      apiKey: null,
      contentSourceID: "<contentSourceID>",
      videoID: "<videoID>"
    },
    live: {
      integration: "google-dai",
      availabilityType: "live",
      apiKey: null,
      assetKey: "<assetKey>"
    }
  },
  hls: {
    vod: {
      integration: "google-dai",
      availabilityType: "vod",
      apiKey: null,
      contentSourceID: "<contentSourceID>",
      videoID: "<videoID>"
    },
    live: {
      integration: "google-dai",
      availabilityType: "live",
      apiKey: null,
      assetKey: "<assetKey>"
    }
  }
};
// Configure THEOplayer Source
const MANIFEST_TYPE = "hls"; // 'hls' / 'dash'
const AVAILABILITY_TYPE = "vod"; // 'vod' or 'live'

player.source = {
  sources: {
    type: TYPES[MANIFEST_TYPE],
    ssai: SOURCES[MANIFEST_TYPE][AVAILABILITY_TYPE]
  }
};
```

## Android SDK

The usage of Google IMA differs across the two Android-based SDKs.

- The Android SDK requires you to add the `GoogleDaiIntegration`.
- The Legacy Android SDK (4.12.x) requires you to:
  1.  Have the `google-dai` feature flag enabled.
  2.  Include the Google DAI dependency library in your Android project.

#### Android SDK

Using Google DAI in the Android SDK consists of 3 steps:

##### 1. Importing Google DAI feature module.

Add `implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-dai:+'` to your module `build.gradle` file, as demonstrated below:

```groovy
dependencies {
    // ...
    implementation 'com.theoplayer.theoplayer-sdk-android:core:+'
    implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-dai:+'
    // ...
}
```

##### 2. Creating an instance of Google DAI Integration.

Create a `GoogleDaiIntegration` through the `GoogleDaiIntegrationFactory`, and add it to your player instance, as demonstrated below:

```java
THEOplayerView theoPlayerView = ...;
GoogleDaiIntegration daiIntegration = GoogleDaiIntegrationFactory.createGoogleDaiIntegration(theoPlayerView);
theoPlayerView.getPlayer().addIntegration(daiIntegration);
```

##### 3. Using a Google DAI Source.

Use a [GoogleDaiVodConfiguration](https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/source/ssai/dai/GoogleDaiVodConfiguration.html)
or [GoogleDaiLiveConfiguration](https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/source/ssai/dai/GoogleDaiLiveConfiguration.html)
to create a `GoogleDaiTypedSource` to request stream, as demonstrated below:

```java
SourceDescription sourceDescription = new SourceDescription.Builder(
    new GoogleDaiTypedSource.Builder(
        new GoogleDaiVodConfiguration.Builder("api_key", "content_source_id", "video_id")
            .build()
    )
    .type(SourceType.DASH)
    .build()
)
.build();
```

OR

```java
SourceDescription sourceDescription = new SourceDescription.Builder(
    new GoogleDaiTypedSource.Builder(
        new GoogleDaiLiveConfiguration.Builder("api_key", "asset_key")
            .build()
    )
    .type(SourceType.DASH)
    .build()
)
.build();
```

Then, set the source on the player:

```java
playerView.getPlayer().setSource(sourceDescription);
```

##### Notes

The available ad events are different between the Android SDK and the Legacy Android SDK (4.12.x).
More information is available at ["How to subscribe to ad events"](11-how-to-subscribe-to-ad-events.md#android-sdk).

The [GoogleDaiIntegration](https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html) instance exposes a number of methods. For example:

- [requestStream(StreamRequest, AdsRenderingSettings)](<https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html#requestStream(StreamRequest,AdsRenderingSettings)>) can be used to request stream through the native Google DAI API.
- [contentTimeForStreamTime(double)](<https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html#contentTimeForStreamTime(double)>)
  / [streamTimeForContentTime(double)](<https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html#streamTimeForContentTime(double)>) can be used to convert content time to stream time and vice versa.

#### Legacy Android SDK (4.12.x)

Using Google DAI in the Android SDK consists of 2 steps:

##### 1. Importing Google DAI dependency.

Add `implementation 'com.google.ads.interactivemedia.v3:interactivemedia:3.25.1'` to your module `build.gradle` file, as demonstrated below:

```groovy
dependencies {
    // ...
    implementation files('libs/theoplayer.aar')
    implementation 'com.google.ads.interactivemedia.v3:interactivemedia:3.25.1'
    // ...
}
```

##### 2. Using a Google DAI Source.

Use a [GoogleDaiVodConfiguration](https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/source/ssai/dai/GoogleDaiVodConfiguration.html)
or [GoogleDaiLiveConfiguration](https://docs.theoplayer.com/api-reference/android/com/theoplayer/android/api/source/ssai/dai/GoogleDaiLiveConfiguration.html)
to create a `GoogleDaiTypedSource` to request stream, as demonstrated below:

```java
SourceDescription sourceDescription = new SourceDescription.Builder(
    new GoogleDaiTypedSource.Builder(
        new GoogleDaiVodConfiguration.Builder("api_key", "content_source_id", "video_id")
            .build()
    )
    .type(SourceType.DASH)
    .build()
)
.build();
```

OR

```java
SourceDescription sourceDescription = new SourceDescription.Builder(
    new GoogleDaiTypedSource.Builder(
        new GoogleDaiLiveConfiguration.Builder("api_key", "asset_key")
            .build()
    )
    .type(SourceType.DASH)
    .build()
)
.build();
```

Then, set the source on the player:

```java
playerView.getPlayer().setSource(sourceDescription);
```

## iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

First, your THEOplayer SDK needs to have the `google-dai` module enabled.

Then, you need to include the Google DAI (Interactive Media Ads SDK) framework to your project following these steps:

Step 1: Download [Google DAI (Interactive Media Ads SDK) framework](https://developers.google.com/interactive-media-ads/docs/sdks/ios/dai/download)

Step 2: Check [How to Configure Framework Section to add Google DAI Framework](https://docs.theoplayer.com/getting-started/01-sdks/03-ios/00-getting-started.md)

Finally, add a Google DAI ad configuration to the sources.

```swift
//Google DAI HLS VOD Stream
private var GoogleDAIVOD: SourceDescription {
           let daiConfig = GoogleDAIVodConfiguration(videoID: "tears-of-steel", contentSourceID: "19463", apiKey: "", authToken: nil, streamActivityMonitorID: nil, adTagParameters: nil)
           let typedSource = GoogleDAITypedSource(ssai: daiConfig)
           return SourceDescription(source: typedSource)
    }
//Google DAI HLS VOD Stream
private var GoogleDAILIVE: SourceDescription {
           let daiConfig = GoogleDAILiveConfiguration(assetKey: "sN_IYUG8STe1ZzhIIE_ksA", apiKey: "", authToken: nil, streamActivityMonitorID: nil, adTagParameters: nil)
           let typedSource = GoogleDAITypedSource(ssai: daiConfig)
           return SourceDescription(source: typedSource)
       }
// Configure the player's source to initilaise playback
theoplayer.source = GoogleDAIVOD  //VOD Source
theoplayer.source = GoogleDAILIVE  //Live Source
```

## Conclusion

THEOplayer SDK and Google DAI are fully pre-integrate to deliver Server-Side Ad Insertion solution, allowing customers to play streams in a breeze.

Extra resources:

1. [Google DAI Pre-Integration API](https://docs.theoplayer.com/api-reference/web/theoplayer.googledaiconfiguration.md)
2. [THEOplayer Getting Started Guide](web/../../../getting-started/01-sdks/01-web/00-getting-started.md)
3. [Google DAI website](https://developers.google.com/interactive-media-ads)

Related articles

- [Google DAI HTML Reference](https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai)
- [Google DAI Android Reference](https://developers.google.com/interactive-media-ads/docs/sdks/android/dai)
- [Google DAI iOS Reference](https://developers.google.com/interactive-media-ads/docs/sdks/ios/dai)
