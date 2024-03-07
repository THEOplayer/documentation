# Introduction

This article explains how to configure the license at runtime.

A THEOplayer license is required to use the THEOplayer library for the desired domains. The licensing schema was previously based on the built-in license from the SDK build. THEOplayer now allows to update the license without rebuilding or re-integrating the player SDK.

This guide builds upon the basic player setup, make sure you read our [getting-started guides](../../getting-started/01-sdks/00-introduction.md).

### Table of Contents

- [SDKs](#sdks)
- [Web and Chromecast SDK](#web-and-chromecast-sdk)
- [iOS and tvOS SDK](#ios-and-tvos-sdk)
- [Android SDK](#android-sdk)
- [FAQ](#faq)

## SDKs

| Web SDK | Android SDK | iOS SDK | Android TV SDK | tvOS SDK | Chromecast SDK |
| ------- | ----------- | ------- | -------------- | -------- | -------------- |
| Yes     | Yes         | Yes     | Yes            | Yes      | Yes            |

## Web and Chromecast SDK

THEOplayer is extended to allow configuring the license at runtime by just passing the license when a player is configured.

#### Passing the license through the PlayerConfiguration

This can be done in two ways:

- Pass an obfuscated license string which is the actual license for the player by setting it on the `license` property:

```js
var player = new THEOplayer.Player(element, {
  // instantiates video player
  libraryLocation: "/path/to/your-theoplayer-folder/",
  license: "your_license"
});
```

- Pass a valid URL that can be used to fetch the license for the player by setting it on the `licenseUrl` property:

```js
var player = new THEOplayer.Player(element, {
  // instantiates video player
  libraryLocation: "/path/to/your-theoplayer-folder/",
  licenseUrl: "your_license_url"
});
```

If the player is configured with either `license` or `licenseUrl`, the player will first validate the `license` string. If license is either undefined or expired, the player will attempt to request the `licenseUrl` instead, if no `licenseUrl` is defined, then a default license Url will be used. If neither of these options is provided, the player will default to the built-in license in the SDK.

If no valid license can be found, the player will throw a license error.

## iOS and tvOS SDK

When building an iOS application, a player license can be defined in one of the following ways:

#### Passing the license through the PlayerConfiguration

Include the license parameter in the player configuration either by passing the license as a string or a license URL as shown below

```swift
// passing license as a string
let playerConfig = THEOplayerConfiguration(license: "your_license_here")
var theoplayer = THEOplayer(configuration: playerConfig)
```

```swift
// passing license as a URL
let playerConfig = THEOplayerConfiguration(licenseUrl: "your_licenseUrl_here")
var theoplayer = THEOplayer(configuration: playerConfig)
```

#### Passing the license through the Info.plist

Define the same `license` or a `licenseUrl` as a new key in the `Info.plist` file.

Our iOS SDK allows configuring the license via Info.plist keys, which could be either `THEOplayerLicense` or `THEOplayerLicenseUrl`.

- `THEOplayerLicense` must be an obfuscated license string
- `THEOplayerLicenseUrl` must be a valid URL to a license server

The license defined in the player configuration has higher precedence than the license provided in the `Info.plist`. If neither of these are defined, then the built-in license will be used.

## Android SDK

When building an Android application, a player license can be defined in one of the following ways:

#### Passing the license through the PlayerConfiguration

Include the license parameter in the player configuration either by passing the license as a string or a license URL as described below

```java
// passing license as a string
public static THEOplayerConfig.Builder getTHEOplayerConfigBuilder() {
return new THEOplayerConfig.Builder()
    .license("your_license_here");
}
```

```java
// passing license as a URL
public static THEOplayerConfig.Builder getTHEOplayerConfigBuilder() {
return new THEOplayerConfig.Builder()
    .licenseUrl("your_licenseUrl_here");
}
```

#### Passing the license through the manifest

Define the same `license` or a `licenseUrl` as a new key in the app's manifest.

Our Android SDK allows configuring the license via metadata keys, which could be either `THEOPLAYER_LICENSE` or `THEOPLAYER_LICENSE_URL`.

- `THEOPLAYER_LICENSE` must be an obfuscated license string
- `THEOPLAYER_LICENSE_URL` must be a valid URL to a license server

The license defined in the player configuration has higher precedence than the license provided in the app's manifest. If neither of these are defined, then the built-in license will be used.

## FAQ

### Why do I have to configure a license?

In order to provide THEOplayer insights if a stream can be played, it needs to have access to an active license. You can choose to either configure this license, or configure a URL where this license can be retrieved. If you are using an old SDK, it is also possible to have a license configured by default in the THEOplayer library itself. We recommend everyone to configure an active license or a license URL.

### How do I avoid introducing any dependencies on THEOplayer servers?

There are two important aspects which can introduce a dependency on THEOplayer servers:

#####1. Loading a THEOplayer SDK from the THEOplayer CDN

This issue is only relevant for the THEOplayer HTML5 / Tizen / webOS SDK. In order to avoid this dependency, we recommend to self-host your THEOplayer SDK. The easiest approach is to load the player through NPM, or download the player SDK as a zip-file from the developer portal. More information on how to self-host your player can be found [here](../../faq/34-self-hosting-theoplayer.md).

#####2. Loading a THEOplayer license from the THEOplayer license system

In order to avoid this dependency, it is important to always keep your license up to date, either by configuring an updated license or by configuring your own license URL. When your THEOplayer license expires, a new player instance will actively check against THEOplayer’s license system if there is an updated license available. This system should however only serve as a fallback for applications which cannot be updated.

### Should I pass a license string or a license URL?

We recommend our customers to use the license string whenever possible.

In special cases it is possible to use the license URL instead. Use-cases include contractual or legal (f.i privacy) requirements. For more information, please contact support@theoplayer.com.

If the player is configured both with a license string and license URL, it will first try to validate the license string. If the license string is either not configured or expired, the player will attempt to request the license URL instead. If no license URL is defined, then a default license URL will be used. If neither is defined, the player will default to the built-in license in the SDK. If no valid license can be found, the player will throw a license error.

### Should I update my application upon license renewal?

Yes. After renewing your license, you should make sure to include the new THEOplayer license in your next app update.

### What happens if I don’t timely update the license in my application?

The player will attempt to update the license up to 72 hours before expiration. For this, the player will request a new license either from the configured license URL or as a fallback (when there is no license URL configured) from `validate.theoplayer.com`. Either way, if the request is successful, the player will store the license locally. We highly recommend you to self-host the license using the license URL in the player configuration.

For self-hosting, the license file with the latest license string for your application should be hosted. The full URL to this file should then be configured as the license URL in the player configuration.

### Will I still be able to play offline content with my THEOplayer SDK if my license expires?

When your license expires, THEOplayer will attempt to load an updated license. If an updated license is available, offline playback will still function. If no valid license is available, and no license server can be reached (due to the client being offline), the player will throw an error and stop playback. For this reason, it is important to always keep your license up to date.
