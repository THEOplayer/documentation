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

#### Add the `integration-ads-ima` dependency

Add `implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:+'` to your module `build.gradle` file, as demonstrated below:

```groovy

dependencies {
    // ...
    implementation 'com.theoplayer.theoplayer-sdk-android:core:+'
    implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:+'
    // ...
}
```

#### Use the `GoogleImaIntegrationFactory`

Create a `GoogleImaIntegration` through the `GoogleImaIntegrationFactory`, and add it to your player instance, as demonstrated below:

```kotlin
import com.theoplayer.android.api.ads.ima.GoogleImaIntegrationFactory

val theoplayerView = THEOplayerView(context)
val imaIntegration = GoogleImaIntegrationFactory.createGoogleImaIntegration(theoplayerView)
theoplayerView.player.addIntegration(imaIntegration)
```

#### Use a `GoogleImaAdDescription`

Use a [`GoogleImaAdDescription`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/source/addescription/GoogleImaAdDescription.html) to schedule advertisements,
as demonstrated below:

```kotlin
val typedSource = TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")
    .build()

val imaAdDescription = GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")
    .timeOffset("start")
    .build()

val sourceDescription = SourceDescription.Builder(typedSource)
    .ads(imaAdDescription)
    .build()

theoplayerView.player.source = sourceDescription
```

#### Next steps

The Google IMA integration exposes events through the Ads API. More information is available at ["How to subscribe to ad events"](11-how-to-subscribe-to-ad-events.md#android-sdk).

The [`GoogleImaIntegration`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegration.html) instance exposes a number of methods. For example, [`schedule()`](<pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegration.html#schedule(GoogleImaAdDescription)>) can be used to schedule ads dynamically, and [`requestAds()`](<pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/ima/GoogleImaIntegration.html#requestAds(AdsRequest,AdsRenderingSettings)>)
can be used to request ads through the native Google IMA API.

When you add your THEOplayer IMA dependency to your module `build.gradle` file (i.e. `implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-ima:+'`), we will automatically add `com.google.ads.interactivemedia.v3:interactivemedia` with the version specified [here](https://github.com/THEOplayer/theoplayer-sdk-android/blob/master/app/build.gradle). You can overwrite this with a later version of the Google IMA SDK by adding this dependency to your module `build.gradle` file, but at your own risk.

### iOS SDK

To use Google IMA with the THEOplayer iOS SDK, the **THEOplayer GoogleIMA Integration** should be integrated. The integration is a lightweight module written in Swift, for serving advertisements from the Google IMA SDK.

:::info
The THEOplayer GoogleIMA integration supports both iOS and tvOS platforms.
:::

#### Installation

The THEOplayer GoogleIMA integration is published on the following package managers:

##### Cocoapods

Simply add the following to your project's Podfile:

```ruby
pod 'THEOplayer-Integration-GoogleIMA'
```

The above entry automatically manages the fetching of the IMA SDK dependency.

In case where the integrator would want to manage fetching a specific version of the IMA SDK, then replace the Podfile entry with:

```ruby
pod 'THEOplayer-Integration-GoogleIMA/Base'
pod 'GoogleAds-IMA-iOS-SDK', '3.24.0' # specify the desired version
# or
pod 'GoogleAds-IMA-tvOS-SDK', '4.14.1' # specify the desired version
```

##### Swift Package Manager

Please check the [installation instruction found here](https://github.com/THEOplayer/theoplayer-sdk-apple/README.md#installation)

:::info
This will not get the IMA SDK, but only the THEOplayer IMA integration. The IMA SDKs can be found at https://github.com/googleads/swift-package-manager-google-interactive-media-ads-ios and https://github.com/googleads/swift-package-manager-google-interactive-media-ads-tvos. You should add these to your Xcode project's `Package Dependencies` for SPM to fetch.
:::

#### Import

Import the framework in the source files where it will be used:

```swift
import THEOplayerGoogleIMAIntegration
```

You will also need the THEOplayer core SDK since the THEOplayer GoogleIMA integration extends its functionality.
<br />To import the THEOplayer core SDK framework add:

```swift
import THEOplayerSDK
```

#### Usage

Initialize the integration and pass it to the `THEOplayer` instance:

```swift
let configBuilder = THEOplayerConfigurationBuilder()
configBuilder.license = "your_theoplayer_license"
let theoplayer = THEOplayer(configuration: configBuilder.build()
let imaIntegration = GoogleIMAIntegrationFactory.createIntegration(on: theoplayer)
theoplayer.addIntegration(imaIntegration)
```

Optionally, the `createIntegration` accepts a configuration argument of type IMASetting:

```swift
import GoogleInteractiveMediaAds // required to access definitions such as `IMASettings`
..
..
..
let settings = IMASettings()
settings.language = "en"
let imaIntegration = GoogleIMAIntegrationFactory.createIntegration(on: theoplayer, with: settings)
```

Define a `GoogleImaAdDescription` in your source object to specify the advertisement:

```swift
let adSrc = "https://cdn.theoplayer.com/demos/ads/vast/dfp-preroll-skip-5s.xml"
let adDescription = GoogleImaAdDescription(src: adSrc)
// or
let adDescriptionWithOffset = GoogleImaAdDescription(src: adSrc, timeOffset: "10")
```

The time offset helps VAST ads to play at a specific timestamp. VMAP ads can define that behavior inside their manifest file, thus they should not have a timeOffset parameter.

Finally, we pass the ad description to the player either by setting it in the source:

```swift
let source = "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"
let mimeType = "application/x-mpegurl"
let typedSource = TypedSource(src: source, type: mimeType)
let sourceDescription = SourceDescription(source: typedSource, ads: [adDescription])
theoplayer.source = sourceDescription
```

Or by calling the ad schedule API:

```swift
theoplayer.ads.schedule(adDescription: adDescription)
```

> **A VAST ad without a timeOffset argument in the description will be scheduled to play at the player's currentTime. If the source is not loaded yet, it will be scheduled as a preroll.**

#### Limitations

1. Prerolls must be loaded after the player view is fully rendered and ready. This means attempting to load the ad in the `viewDidLoad` lifecycle will result in a failed request.
2. There is a known bug by Apple that throws runtime warnings concerning the main thread. If you run into this warning while using the IMA SDK, please check [this thread for more information.](https://developer.apple.com/forums/thread/714467?answerId=734799022#734799022)

## Remarks

- The release notes for IMA SDK can be found on their respective pages: [IMA HTML5 SDK release history](https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/history), [IMA iOS SDK release history](https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/history) and [IMA Android SDK release history](https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/history).
- THEOplayer internally supports IMA SDK up until a certain version across different SDKs. We regularly update the internal code to stay up to date with the latest version of IMA SDK. Later versions of IMA SDK should work as expected, however there could be cases where a fix for a breaking change or a newly introduced API is required. Please reach out to us if you require support for a more recent IMA SDK since we intend to rectify this limitation.
- The limitations documented on the support and compatibility pages of IMA SDK also apply to THEOplayer SDK when IMA integration is used. You can find the support matrix of IMA SDK on platform specific pages: [HTML5](https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/compatibility), [Android](https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/compatibility) and [iOS](https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/compatibility).
- You can try out the snippets mentioned here on our samples apps for [Web SDK](https://github.com/THEOplayer/samples-html5-sdk), [iOS SDK](https://github.com/THEOplayer/samples-ios-sdk) and [Android SDK](https://github.com/THEOplayer/samples-android-sdk/).
