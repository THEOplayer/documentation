# Moat

Moat is an analytics service maintained by Oracle. THEOplayer offers a pre-integration for this solution. A demo can be found at [https://demo.theoplayer.com/moat-analytics-pre-integration](https://demo.theoplayer.com/moat-analytics-pre-integration).

### Table of Contents

- [SDKs](#sdks)
- [Code example](#code-example)
  - [Prerequisites](#prerequisites)
  - [Configuration](#configuration)
- [Related links:](#related-links)

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |    No    |      Yes       |   Unverified   |

## Code example

### Prerequisites

##### Android (TV) SDK

The THEOplayer Android SDK supports Moat analytics (version 2.4.3+) out-of-the-box. Below you can find the steps to enable Moat tracking.

1. Include the Moat native Android SDK in the gradle file:

```java
repositories {
    flatDir {
    dirs 'libs'
    }
}

dependencies {
    compile (name: 'moat-mobile-app-kit', ext:'aar')
}
```

2. (Optional for Moat 2.4.2+) Ensure Google Play Ads dependencies are included.
   If this is omitted, this functionality will be limited.

```java
dependencies {
    compile 'com.google.android.gms:play-services-ads:+'
    compile 'com.android.support:support-v4:+'
}
```

3. Set your application for THEOplayer when the Application is created:

```java
import android.app.Application;
import com.moat.analytics.mobile.moatnamespace.MoatAnalytics;

public class MyApplication extends Application {
    @Overridepublic void onCreate() {
    super.onCreate();
    THEOplayerGlobal.getSharedInstance(this).setApplicationInstance(this);
    }
}
```

##### iOS (/tvOS) SDK

THEOplayer supports Moat Analytics integration from Moat SDK version 3.6.0+. This integration is only available upon request.

Once you've received a build which has THEOplayer's Moat integration, you have to import the Moat framework:

```swift
import DMSMoatMobileAppKit
```

### Configuration

The snippets below explain how you can pass on Moat settings to a THEOplayer configuration object.

##### Web SDK

Configure the Moat partner code.

```js
new THEOplayer.Player(containerElement, {
  libraryLocation: "https://cdn.theoplayer.com/dash/theoplayer/",
  analytics: [
    {
      integration: "moat",
      partnerCode: "<PARTNER_CODE>"
    }
  ]
});
```

When you want to make use of Moat for tracking advertisements, you should make use of the [GoogleImaAdDescription](https://docs.theoplayer.com/api-reference/web/theoplayer.imaaddescription.md).

##### Android (TV) SDK

Configure the Moat **partner code** and **namespace** and enable Google IMA

```java
new THEOplayerConfig.Builder()
    .googleIma(true)
    .analytics(new MoatOptions.Builder("NAMESPACE", "<PARTNER_CODE>").loggingEnabled(true).build())
    .build();
```

When you want to make use of Moat for tracking advertisements, you should make use of the [GoogleImaAdDescription](https://docs.theoplayer.com/api-reference/web/theoplayer.imaaddescription.md).

##### iOS (/tvOS) SDK

Enable Google IMA in your THEOplayer instance:

```swift
let config = THEOplayerConfiguration(defaultCSS: true, googleIMA: true)
let theoplayer = THEOplayer(configuration: config)
```

Configure a Google IMA source with Moat Analytics enabled:

```swift
public static var moatPreroll : SourceDescription {
    let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl")
    return SourceDescription(
        source : typedSource,
        ads: [
            GoogleImaAdDescription(src: "<AD_TAG_URL>")],
        analytics: [MoatOptions(partnerCode: "<PARTNER_CODE>", debugLoggingEnabled: true)]
    )
}
```

## Related links:

- Demo page: [https://demo.theoplayer.com/moat-analytics-pre-integration](https://demo.theoplayer.com/moat-analytics-pre-integration)
- [Analytics API (Web SDK)](https://docs.theoplayer.com/api-reference/web/theoplayer.analytics.md)
- [Analytics API (Android SDK)](pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/source/analytics/package-summary.html)
- [Analytics API (iOS SDK)](<pathname:///theoplayer/v6/api-reference/ios/Analytics.html#/c:@M@THEOplayerSDK@objc(pl)THEOplayerAnalyticsDescription>)
