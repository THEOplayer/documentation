# Google IMA

THEOplayer offer supports for Google IMA as an ad integration system.
Users of Google Ad Manager (formerly known as DoubleClick for Publishers) should use this ad integration.

Scheduling and tracking ads through the Google IMA ad integration is similar to the default ad integration, so you're advised to read through ["How to set-up VAST and VMAP](03-how-to-set-up-vast-and-vmap.md).

The main difference with the default THEO ad integration is that you need to indicate through the API that you want to use Google IMA as the ad integration, and that you need to include the Google IMA SDK.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |       No       |

### Web SDK

To use Google IMA in the Web SDK,

1. You need to include the Google IMA SDK,
2. You need to specify `integration: "google-ima"` in your `AdDescription`.

#### Include the IMA SDK

Google IMA has a dependency on the IMA SDK. Hence, this library needs to be included. The following snippet demonstrates how the IMA SDK can be included:

```html
<script type="text/javascript" src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
```

Alternatively, you can include the debug version of the IMA SDK for troubleshooting, which will provide extra logs from IMA on console:

```html
<script type="text/javascript" src="https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js"></script>
```

#### Specify the integration

You need to set integration to `"google-ima"`, as demonstrated by the snippet below which configures a pre-roll VAST ad.

```javascript
player.source = {
  sources: [
    {
      src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',
    },
  ],
  ads: [
    {
      integration: 'google-ima',
      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',
      timeOffset: 'start',
    },
  ],
};
```

#### Limitations

- There's a known issue within the IMA HTML5 SDK where it does not work well with multiple VPAID ads in a VMAP. More specifically when the `ImaSdkSetting` `vpaidMode` is set to `enabled` and the `AdsRenderingSetting` `enablePreloading` is set to `true`, it will not manage to play all ads (these are the default configurations when using the Google IMA integration in THEOplayer). The production IMA SDK doesn't throw any error in this scenario, the [debug SDK](https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js), however, prints `Vpaid Error: VPAID ad called play on video element before start was called on VPAID manager` in the console in this case. This can be resolved by either using `vpaidMode` `insecure` or by disabling preloading. Both can be achieved by specifying your preference in the [AdsConfiguration](pathname:///theoplayer/v8/api-reference/web/interfaces/AdsConfiguration.html).

### Android SDK

Using Google IMA in the Android SDK consists of 3 steps:

1. Add the `integration-ads-ima` dependency to your module's `build.gradle`.
2. Use the `GoogleImaIntegrationFactory` to create and add a `GoogleImaIntegration`.
3. Use a `GoogleImaAdDescription` to schedule ads.

##### Add the `integration-ads-ima` dependency

Add `implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:+'` to your module `build.gradle` file, as demonstrated below:

```groovy

dependencies {
    // ...
    implementation 'com.theoplayer.theoplayer-sdk-android:core:+'
    implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:+'
    // ...
}
```

##### Use the `GoogleImaIntegrationFactory`

Create a `GoogleImaIntegration` through the `GoogleImaIntegrationFactory`, and add it to your player instance, as demonstrated below:

```java
// THEOplayerView theoPlayerView = ...;
GoogleImaIntegration imaIntegration = GoogleImaIntegrationFactory.createGoogleImaIntegration(theoPlayerView);
theoPlayerView.getPlayer().addIntegration(imaIntegration);
```

##### Use a `GoogleImaAdDescription`

Use a [`GoogleImaAdDescription`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/source/addescription/GoogleImaAdDescription.html) to schedule advertisements,
as demonstrated below:

```java
TypedSource typedSource = new TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")
    .build();

GoogleImaAdDescription imaAdDescription = new GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")
    .timeOffset("start")
    .build();

SourceDescription sourceDescription = new SourceDescription.Builder(typedSource)
    .ads(imaAdDescription)
    .build();

playerView.getPlayer().setSource(sourceDescription);
```

##### Other

The available ad events are different between the Android SDK and the Legacy Android SDK (4.12.x). More information is available at ["How to subscribe to ad events"](11-how-to-subscribe-to-ad-events.md#android-sdk).

The [`GoogleImaIntegration`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegration.html) instance exposes a number of methods. For example, [`schedule()`](<pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegration.html#schedule(GoogleImaAdDescription)>) can be used to schedule ads dynamically, and [`requestAds()`](<pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegration.html#requestAds(AdsRequest,AdsRenderingSettings)>)
can be used to request ads through the native Google IMA API.

When you add your THEOplayer IMA dependency to your module `build.gradle` file (i.e. `implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:+'`), we will automatically add `com.google.ads.interactivemedia.v3:interactivemedia` with the version specified [here](https://github.com/THEOplayer/theoplayer-sdk-android/blob/master/app/build.gradle). You can overwrite this with a later version of the Google IMA SDK by adding this dependency to your module `build.gradle` file, but at your own risk.

### iOS/tvOS SDK

The documentation of the current version [can be found at this URL](https://github.com/THEOplayer/theoplayer-sdk-apple/tree/master/docsTHEOplayer-Integration-GoogleIMA/README.md).

## Remarks

- The release notes for IMA SDK can be found on their respective pages: [IMA HTML5 SDK release history](https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/history), [IMA iOS SDK release history](https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/history) and [IMA Android SDK release history](https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/history).
- THEOplayer internally supports IMA SDK up until a certain version across different SDKs. We regularly update the internal code to stay up to date with the latest version of IMA SDK. Later versions of IMA SDK should work as expected, however there could be cases where a fix for a breaking change or a newly introduced API is required. Please reach out to us if you require support for a more recent IMA SDK since we intend to rectify this limitation.
- The limitations documented on the support and compatibility pages of IMA SDK also apply to THEOplayer SDK when IMA integration is used. You can find the support matrix of IMA SDK on platform specific pages: [HTML5](https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/compatibility), [Android](https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/compatibility) and [iOS](https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/compatibility).
- You can try out the snippets mentioned here on our samples apps for [Web SDK](https://github.com/THEOplayer/samples-html5-sdk), [iOS SDK](https://github.com/THEOplayer/samples-ios-sdk) and [Android SDK](https://github.com/THEOplayer/samples-android-sdk/).
