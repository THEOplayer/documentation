# Introduction

This article explains how to configure the license at runtime.
A THEOplayer license is required to use the THEOplayer library for the desired domains. The licensing schema was previously based on the built-in license from the SDK build. THEOplayer now allows to update the license without rebuilding or re-integrating the player SDK.
This guide builds upon the basic player setup, make sure you read our [getting-started guides](https://docs.theoplayer.com/getting-started/01-sdks/00-introduction.md).

### Table of Contents
- [SDKs](#sdks)
- [Web and Chromecast SDK](#web-and-chromecast-sdk)
- [iOS and tvOS SDK](#ios-and-tvos-sdk)
- [Android SDK](#android-sdk)
- [FAQs](#FAQ)

## SDKs

| Web SDK | Android SDK | iOS SDK | Android TV SDK | tvOS SDK | Chromecast SDK |
| ------- | ----------- | ------- | -------------- | -------- | -------------- |
| Yes     | Yes         | Yes     | Yes            | Yes      | Yes            |

## Web and Chromecast SDK

THEOplayer is extended to allow configuring the license at runtime by just passing the license when a player is configured.

#### Passing the license through the PlayerConfiguration

This can be done in two ways: 
- Pass an obfuscated license string which is the actual license for the player by setting it on the `license` property

```js
var player = new THEOplayer.Player(element, { // instantiates video player
  libraryLocation : '/path/to/your-theoplayer-folder/',
  license : 'your_license'
});
```

- Pass a valid URL that can be used to fetch the license for the player by setting it on the `licenseUrl` property

```js
var player = new THEOplayer.Player(element, { // instantiates video player
  libraryLocation : '/path/to/your-theoplayer-folder/',
  licenseUrl : 'your_license_url'
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

Define the same license or a licenseUrl as a new key in the `Info.plist` file.

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

Define the same license or a licenseUrl as a new key in the app's manifest.

Our Android SDK allows configuring the license via metadata keys, which could be either `THEOPLAYER_LICENSE` or `THEOPLAYER_LICENSE_URL`.
- `THEOPLAYER_LICENSE` must be an obfuscated license string
- `THEOPLAYER_LICENSE_URL` must be a valid URL to a license server

The license defined in the player configuration has higher precedence than the license provided in the app's manifest. If neither of these are defined, then the built-in license will be used.

## FAQ

### Why should I pass the license instead of using the built-in license?

The new license configuration provides several advantages:
- You do not have to rebuild and replace the player SDK when the license is expiring.
- You do not have to be concerned about forgetting to update the license in your application as THEOplayer will attempt to renew the license for you.

### Should I prefer passing a license string or a license URL?

We recommend our customers to use the obfuscated license string whenever possible.

In special cases it is possible to use the license URL instead. Use-cases include contractual or legal (f.i privacy) requirements. For more information, please contact support@theoplayer.com. 

### How does THEOplayer update my license?

The player will attempt to update the license up to 72 hours before expiration. If you use the obfuscated license string then the requests will be made to validate.theoplayer.com. Alternatively, if you configure a license Url, then the player will attempt to update the license using this URL. Either way, if the request is successful, then the player will store the license locally.

### If my configured license fails, will the player use the built-in license?

No. The built-in license is kept for backwards compatibility.

### Will I still be able to play offline content with my license still being valid on the Web SDK?

If a licenseText or a localStorage entry with a valid license from the previous session was stored then the player uses it to provide offline playback, else the player throws an error.