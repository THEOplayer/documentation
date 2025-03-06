# Google Dynamic Ad Insertion (DAI)

Google DAI is a Server-Side Ad-Insertion solution offered by Google where THEOplayer is pre-integrated and offers playback for HLS and DASH Streams. A demo can be found at [https://demo.theoplayer.com/google-dai](https://demo.theoplayer.com/google-dai).

## SDKs

| Web SDK | Android SDK | iOS SDK |  tvOS SDK  | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | Unverified |   Unverified   |      Yes       |

## Web SDK

### Prerequisites

1. Your THEOplayer SDK needs to have the `google-dai` module enabled.
2. You need to include the Google DAI JavaScript SDK as this is a dependency.

### Starting Template

The first thing you need is a valid THEOplayer setup. If you have no experience with setting up our player, we have an excellent [getting started guide](../../getting-started/01-sdks/01-web/00-getting-started.mdx).

To get THEOplayer to work, you only need to do three things:

1. Reference the THEOplayer JavaScript library (and optionally the default CSS styles).
2. Add a container which can hold your video player with HTML.
3. Create your player through JavaScript using our [API](pathname:///theoplayer/v8/api-reference/web/classes/Player.html).

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

### Integrating Google DAI

Add a Google DAI JavaScript library.

```javascript
<script type="text/javascript" src="//imasdk.googleapis.com/js/sdkloader/ima3_dai.js"></script>
```

Add a Google DAI ad configuration to the sources.

```javascript
const TYPES = {
  hls: 'application/vnd.apple.mpegurl',
  dash: 'application/dash+xml',
};

// example and reference tester at https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai/vastinspector
const SOURCES = {
  dash: {
    vod: {
      integration: 'google-dai',
      availabilityType: 'vod',
      apiKey: null,
      contentSourceID: '<contentSourceID>',
      videoID: '<videoID>',
    },
    live: {
      integration: 'google-dai',
      availabilityType: 'live',
      apiKey: null,
      assetKey: '<assetKey>',
    },
  },
  hls: {
    vod: {
      integration: 'google-dai',
      availabilityType: 'vod',
      apiKey: null,
      contentSourceID: '<contentSourceID>',
      videoID: '<videoID>',
    },
    live: {
      integration: 'google-dai',
      availabilityType: 'live',
      apiKey: null,
      assetKey: '<assetKey>',
    },
  },
};
// Configure THEOplayer Source
const MANIFEST_TYPE = 'hls'; // 'hls' / 'dash'
const AVAILABILITY_TYPE = 'vod'; // 'vod' or 'live'

player.source = {
  sources: {
    type: TYPES[MANIFEST_TYPE],
    ssai: SOURCES[MANIFEST_TYPE][AVAILABILITY_TYPE],
  },
};
```

## Android SDK

Using Google DAI in the Android SDK consists of 3 steps:

### Importing Google DAI feature module

Add `implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-dai:+'` to your module `build.gradle` file, as demonstrated below:

```groovy
dependencies {
    // ...
    implementation 'com.theoplayer.theoplayer-sdk-android:core:+'
    implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-dai:+'
    // ...
}
```

### Creating an instance of Google DAI Integration

:::tip

If you're using [automatic integrations](../../getting-started/01-sdks/02-android/01-features.md#adding-integrations-automatically), you can skip this step.

:::

Create a `GoogleDaiIntegration` through the `GoogleDaiIntegrationFactory`, and add it to your player instance, as demonstrated below:

```kotlin
val theoplayerView = THEOplayerView(context)
val daiIntegration = GoogleDaiIntegrationFactory.createGoogleDaiIntegration(theoplayerView)
theoplayerView.player.addIntegration(daiIntegration)
```

### Using a Google DAI Source

Use a [GoogleDaiVodConfiguration](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/source/ssai/dai/GoogleDaiVodConfiguration.html)
or [GoogleDaiLiveConfiguration](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/source/ssai/dai/GoogleDaiLiveConfiguration.html)
to create a `GoogleDaiTypedSource` to request stream, as demonstrated below:

```kotlin
theoplayerView.player.source = SourceDescription.Builder(
    GoogleDaiTypedSource.Builder(
        GoogleDaiVodConfiguration.Builder("api_key", "content_source_id", "video_id")
            .build()
    )
    .type(SourceType.DASH)
    .build()
).build()
```

or:

```kotlin
theoplayerView.player.source = SourceDescription.Builder(
    GoogleDaiTypedSource.Builder(
        GoogleDaiLiveConfiguration.Builder("api_key", "asset_key")
            .build()
    )
    .type(SourceType.DASH)
    .build()
).build()
```

### Notes

The Google DAI integration exposes events through the Ads API. More information is available at ["How to subscribe to ad events"](11-how-to-subscribe-to-ad-events.md#android-sdk).

The integration exposes a number of additional methods.
These are available directly on the [`GoogleDaiIntegration`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html) object,
or indirectly through `player.ads.dai` (only for Kotlin).
For example:

- [requestStream(StreamRequest, AdsRenderingSettings)](<pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html#requestStream(StreamRequest,AdsRenderingSettings)>) can be used to request stream through the native Google DAI API.
- [contentTimeForStreamTime(double)](<pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html#contentTimeForStreamTime(double)>)
  / [streamTimeForContentTime(double)](<pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/dai/GoogleDaiIntegration.html#streamTimeForContentTime(double)>) can be used to convert content time to stream time and vice versa.

## iOS SDK

To use Google DAI with the THEOplayer iOS SDK, the **THEOplayer GoogleIMA Integration** should be integrated. For instructions on installation, importing and adding the integration, [please refer to this guide](./10-google-ima.md#ios-sdk).

### Usage

Define a `GoogleDAITypedSource` and a `GoogleDAIVodConfiguration` to pass to theoplayer's source:

```swift
let daiConfig = GoogleDAIVodConfiguration(videoID: "tears-of-steel", contentSourceID: "2548831", apiKey: "", authToken: nil, streamActivityMonitorID: nil, adTagParameters: nil)
let typedSource = GoogleDAITypedSource(ssai: daiConfig)
theoplayer.source = SourceDescription(source: typedSource)
```

or

```swift
let daiConfig = GoogleDAILiveConfiguration(assetKey: "c-rArva4ShKVIAkNfy6HUQ", apiKey: "", authToken: nil, streamActivityMonitorID: nil, adTagParameters: nil)
let typedSource = GoogleDAITypedSource(ssai: daiConfig)
theoplayer.source = SourceDescription(source: typedSource)
```

And THEOplayer will take care of the rest.

Additional DAI APIs can be found on the `imaIntegration.dai` endpoint.

## Conclusion

THEOplayer SDK and Google DAI are fully pre-integrate to deliver Server-Side Ad Insertion solution, allowing customers to play streams in a breeze.

Extra resources:

1. [Google DAI Pre-Integration API](pathname:///theoplayer/v8/api-reference/web/interfaces/GoogleDAIConfiguration.html)
2. [THEOplayer Getting Started Guide](../../getting-started/01-sdks/01-web/00-getting-started.mdx)
3. [Google DAI website](https://developers.google.com/interactive-media-ads)

Related articles

- [Google DAI HTML Reference](https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai)
- [Google DAI Android Reference](https://developers.google.com/interactive-media-ads/docs/sdks/android/dai)
- [Google DAI iOS Reference](https://developers.google.com/interactive-media-ads/docs/sdks/ios/dai)
