# Introduction

In this section you will learn everything about how THEOplayer works with Chromecast.

## API

As a developer, you might need to use the THEOplayer Chromecast API to build a custom Chromecast UI and UX,
or to dispatch an event to an analytics service, or for workflow purposes.

The Chromecast interface is a sub-interface of the Cast interface on THEOplayer Web and on both mobile (Android & iOS) SDKs.

The API reference is available through the following links:

- Web SDK: [Chromecast](pathname:///theoplayer/v8/api-reference/web/interfaces/Chromecast.html), which inherits from [VendorCast](pathname:///theoplayer/v8/api-reference/web/interfaces/VendorCast.html)
- Android SDK: [Chromecast](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/cast/chromecast/Chromecast.html)
- iOS SDK: [Chromecast](pathname:///theoplayer/v8/api-reference/ios/Protocols/Chromecast.html)

Use the API as demonstrated below:

### Web SDK

```javascript
// const player = new THEOplayer.Player(...)
const chromecastState = player.cast.chromecast.state;
const isCasting = player.cast.chromecast.casting; // true or false
// ...
// if (want to start Chromecast)
player.cast.chromecast.start();
// ...
// if (want to stop Chromecast)
player.cast.chromecast.stop();
// ...
if (chromecastState != 'unavailable') {
  // Chromecast is possible
  player.cast.chromecast.addEventListener('statechange', function (event) {
    switch (event.state) {
      case 'connecting':
        // show Chromecast trying-to-connect icon
        break;
      case 'available':
        // show Chromecast available icon
        break;
      case 'connected':
        // show Chromecast connected icon
        break;
      case 'unavailable':
        // hide Chromecast icon
        break;
    }
  });
}
```

### Android SDK

```java
// Verify the Cast dependency is present in your build.gradle file.
// Add Cast Integration to the player.
CastIntegration castIntegration = CastIntegrationFactory.createCastIntegration(theoplayerView);
theoplayerView.getPlayer().addIntegration(castIntegration);

// For actions you can use both the THEOplayerView and the CastIntegration object.
theoplayerView.getCast().getChromecast().start();
// or
castIntegration.start();

// For listening to events nothing changed.
theoplayerView.getCast().getChromecast().addEventListener(ChromecastEventTypes.STATECHANGE, event -> {
    // See Android section.
});
```

### iOS SDK

To use Google Cast, also known as Chromecast, with the THEOplayer iOS SDK, the **THEOplayer GoogleCast Integration** should be integrated. The integration is a lightweight module written in Swift, to enable casting playback from an iOS device to a receiver application.

#### Installation

The THEOplayer GoogleCast integration is published on the following package managers:

##### Cocoapods

Simply add the following to your project's Podfile:

```ruby
pod 'THEOplayer-Integration-GoogleCast'
```

The above entry automatically manages the fetching of the GoogleCast SDK dependency.

In case where the integrator would want to manage fetching a specific version of the GoogleCast SDK, then replace the Podfile entry with:

```ruby
pod 'THEOplayer-Integration-GoogleIMA/Base'
pod 'google-cast-sdk-dynamic-xcframework', '4.8.3' # specify the desired version
```

##### Swift Package Manager

Please check the [installation instruction found here](https://github.com/THEOplayer/theoplayer-sdk-apple/README.md#installation)

:::warning
This will not get the GoogleCast SDK, but only the THEOplayer GoogleCast integration. You need to manage fetching the GoogleCast SDK dependency.
:::

#### Import

Import the framework in the source files where it will be used:

```swift
import THEOplayerGoogleCastIntegration
```

You will also need the THEOplayer core SDK since the THEOplayer GoogleCast integration extends its functionality.
<br/>To import the THEOplayer core SDK framework add:

```swift
import THEOplayerSDK
```

#### Usage

First set the context in your `AppDelegate` file's `didFinishLaunchingWithOptions` method:

```swift
THEOplayerGoogleCastIntegration.CastIntegrationHelper.setGCKCastContextSharedInstanceWithDefaultCastOptions()
```

:::note
The above method will set the options for `GCKCastContext` with a CAF receiver application. If a custom context must be set, instead of calling the `setGCKCastContextSharedInstanceWithDefaultCastOptions` method, the implementation should specify an `GCKDiscoveryCriteria` in the context with an `applicationID` parameter. You can find the default THEOplayer CAF V3 default application ID at `CastIntegrationHelper.defaultV3ReceiverApplicationID`.
:::

:::info
The THEOplayer Google Cast integration only supports CAF receivers.
:::

Second, you will need to provide some privacy permissions and network discovery allowances. For more information on this, please check the [following documentation about permissions and discovery.](https://developers.google.com/cast/docs/ios_sender/permissions_and_discovery)

After initializing your `THEOplayer` instance, initialize the integration and pass it to the `THEOplayer` instance:

```swift
let configBuilder = THEOplayerConfigurationBuilder()
configBuilder.license = "your_theoplayer_license"
let theoplayer = THEOplayer(configuration: configBuilder.build()

let castConfiguration: CastConfiguration = CastConfiguration(strategy: .auto)
let castIntegration: THEOplayerSDK.Integration = GoogleCastIntegrationFactory.createIntegration(on: theoplayer, with: castConfiguration)
theoplayer.addIntegration(castIntegration)
```

:::info
Additional APIs can be found on the `castIntegration` or `theoplayer.cast.chromecast` endpoints.
:::

<br/>For more extensive example on how to implement GoogleCast with THEOplayer, please check [this sample app](https://github.com/THEOplayer/samples-ios-sdk/tree/master/Native-GoogleCast).

## Related articles

- [Connecting from custom Sender applications](../../../how-to-guides/03-cast/01-chromecast/01-connecting-from-custom-sender-applications.md)
- [Debugging](../../../how-to-guides/03-cast/01-chromecast/02-debugging.md)
- [How to configure a different stream to Chromecast](../../../how-to-guides/03-cast/01-chromecast/03-how-to-configure-to-a-different-stream.md)
- [Sending messages from/to Sender to/from Receiver](../../../how-to-guides/03-cast/01-chromecast/04-sending-messages-from-to-sender-to-from-receiver.md)
- [Pass subtitle selection on to Chromecast](../../../how-to-guides/03-cast/01-chromecast/05-pass-subtitle-section-on-to-chromecast.md)
- [Enable Chromecast on the Sender](../../../how-to-guides/03-cast/01-chromecast/06-enable-chromecast-on-the-sender.md)

## Sender Applications vs Receiver Applications

When a viewer is streaming through a Chromecast device, they are actually casting content from a sender application (e.g. an Android application) to a receiver application. A sender application informs a physical Chromecast device which receiver application it should load through an application ID.

If you have implemented THEOplayer in your sender application, you can [enable Chromecast](../../../how-to-guides/03-cast/01-chromecast/06-enable-chromecast-on-the-sender.md). Furthermore, you can also [specify the application ID](../../../how-to-guides/03-cast/01-chromecast/06-enable-chromecast-on-the-sender.md#custom-receiver-app) in your sender application.

![Casting approaches](../../../../../theoplayer/assets/img/casting-approaches.png 'Casting approaches')

By specifying the application ID, you implicitly connect it with a type of receiver application. The following three types of receiver applications are common:

| Type                                    | Maintainer             | Info                                                                                                                                                                                | Benefits                                                                                                                                                                                                      | Disadvantages                                                                                                                       |
| --------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Default THEOplayer Receiver Application | THEOplayer             | This is the default receiver application THEOplayer SDKs will connect with. The app ID of this default THEOplayer receiver application is `8E80B9CE`.                               | You (i.e. the developer) do not need to do anything extra on the Chromecast receiver application side. You don't need to create a Chromecast receiver, you don't need to register it at, ... - it just works. | You are limited w.r.t. customizing the UI and integrating custom logic.                                                             |
| Custom THEOplayer Receiver Application  | Developer + THEOplayer | This is a custom receiver application you can build, and where you integrate the [THEOplayer Chromecast SDK](../../../getting-started/01-sdks/06-chromecast/00-getting-started.md). | You (i.e. the developer) can adjust the look and feel, and integrate custom logic.                                                                                                                            | You need to create a Chromecast receiver, register it, maintain it, ...                                                             |
| Customer Receiver Application           | Developer              | This is a custom receiver application you can build, but without using the THEOplayer Chromecast SDK.                                                                               | The THEOplayer Chromecast Receiver SDK is not a dependency.                                                                                                                                                   | You are responsible for building and maintaining the receiver application, and its connection with the various sender applications. |

## Whitelisting Receiver Applications

Streaming services and products often require you to whitelist domain names to allow playback.
When viewers are casting content to a Chromecast receiver application, your Chromecast device
will actually stream the content on a domain name. In other words: CORS and whitelisting/blacklisting policies do apply to Chromecast sessions.
Ensure that you've whitelisted the domain name which hosts your Chromecast receiver application. (You can look up the domain name of your receiver application at https://cast.google.com/publish/#/overview.)

If you're using the Default THEOplayer Receiver Application you may whitelist `https://d3ojqkc95d8mrd.cloudfront.net/`.
