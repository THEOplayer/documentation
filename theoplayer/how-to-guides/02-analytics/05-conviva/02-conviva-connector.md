# Conviva Connector for VideoAnalytics & AdsAnalytics

This article describes on how to integrate Conviva for Video Analytics and Ads Analytics offered as a connector with THEOplayer SDK.

### Table of Contents

- [SDKs](#sdks)
- [Web SDK](#web-sdk)
- [Android SDK](#android-sdk)
- [iOS SDK](#iostvos-sdk-and-legacy-iostvos-sdk--412x-)
- [Related links](#related-links)

## SDKs

| Web SDK | Android SDK | iOS SDK |  tvOS SDK  | Android TV SDK | Chromecast SDK | Tizen | webOS |
| :-----: | :---------: | :-----: | :--------: | :------------: | :------------: | :---: | :---: |
|   Yes   |     Yes     |   Yes   | Unverified |   Unverified   |   Unverified   |  Yes  |  Yes  |

## Web SDK

### Prerequisites

1. A THEOplayer build with a valid license is required. You can
   - either install the [THEOplayer SDK through NPM](https://www.npmjs.com/package/theoplayer),
   - or generate your custom THEOplayer SDK through the [THEOportal](https://portal.theoplayer.com/login) (this includes also a license).
2. Follow the [Getting started on Web](https://docs.theoplayer.com/getting-started/01-sdks/01-web/00-getting-started.md) guide to include your player on a simple HTML page.
3. For setting up a valid Conviva session, you must have access to a Conviva developer account with access to a debug or production key.

### Installation

Install using your favorite package manager for Node (such as npm or yarn):

**Install via npm**

`npm install @theoplayer/conviva-connector-web`

**Install via yarn**

`yarn add @theoplayer/conviva-connector-web`

### Usage

#### Step 1

Define the Conviva metadata and configuration:

```js
const convivaMetadata = {
  ["Conviva.assetName"]: "ASSET_NAME_GOES_HERE",
  ["Conviva.streamUrl"]: "CUSTOMER_STREAM_URL_GOES_HERE",
  ["Conviva.streamType"]: "STREAM_TYPE_GOES_HERE", // VOD or LIVE
  ["Conviva.applicationName"]: "APPLICATION_NAME_GOES_HERE",
  ["Conviva.viewerId"]: "VIEWER_ID_GOES_HERE"
};

const convivaConfig = {
  debug: false,
  gatewayUrl: "CUSTOMER_GATEWAY_GOES_HERE",
  customerKey: "CUSTOMER_KEY_GOES_HERE" // Can be a test or production key.
};
```

#### Step 2

Using these configs you can create the Conviva connector with THEOplayer. Alternatives:

- Add as a regular script:

```html
<script type="text/javascript" src="path/to/conviva-connector.umd.js"></script>
<script type="text/javascript">
  const player = new THEOplayer.Player(element, configuration);
  const convivaIntegration = new THEOplayerConvivaConnector.ConvivaConnector(
    player,
    convivaMetadata,
    convivaConfig
  );
</script>
```

- Add as an ES2015 module:

```html
<script type="module">
  import { ConvivaConnector } from "path/to/conviva-connector.esm.js";
  const player = new THEOplayer.Player(element, configuration);
  const convivaIntegration = new ConvivaConnector(
    player,
    convivaMetadata,
    convivaConfig
  );
</script>
```

The Conviva connector is now ready to start a session once THEOplayer starts playing a source.

#### Notes

- You can download the latest Conviva library from [Conviva Developer Community](https://community.conviva.com/site/global/home/p_home.gsp).
- You can use any version of Conviva library supporting Video and Ads Analytics.
- The THEOplayer instance (variable `player`) needs to be initialized before Conviva connector.
- `convivaConfig` contains the details of the Conviva configuration and `convivaMetadata` is used to add manually metadata associated to that content.
- The Conviva connector has full support for Video and Ad Analytics offered by Conviva. This connector can be maintained and managed by across teams as it is built using all public APIs of THEOplayer and Conviva. Any new updates or changes can be easily modified and customized as per customer requirements. (There is no dependency on the THEOplayer or Conviva library version)

### Usage with Yospace connector

If you have a Yospace SSAI stream and want to also report ad related events to Conviva, you can use this connector in combination with the Yospace connector: [@theoplayer/yospace-connector-web](https://www.npmjs.com/package/@theoplayer/yospace-connector-web)

After configuring the Yospace connector, you can link it to the Conviva connector:

```js
async function setupYospaceConnector(player) {
  const source = {
    sources: [
      {
        src: "https://csm-e-sdk-validation.bln1.yospace.com/csm/extlive/yospace02,hlssample42.m3u8?yo.br=true&yo.av=4",
        ssai: {
          integration: "yospace"
        }
      }
    ]
  };

  // Create the connectors.
  const yospace = new THEOplayerYospaceConnector.YospaceConnector(player);
  const conviva = new THEOplayerConvivaConnector.ConvivaConnector(
    player,
    convivaMetadata,
    convivaConfig
  );

  // Link ConvivaConnector with the YospaceConnector.
  conviva.connect(yospace);

  // Set the source.
  await yospace.setupYospaceSession(source);
}
```

## Android SDK

### Prerequisites

1. The THEOplayer Android SDK Conviva Connector requires the application to import the THEOplayer Android SDK since the connector relies on its public APIs. For more details, check out our [Getting started on Android](../../../getting-started/01-sdks/02-android/00-getting-started.md) or [Getting started on Legacy Android SDK (4.12.x)](<../../../getting-started/01-sdks/02-android-legacy-v4/00-getting-started.md>) guide.
2. For setting up a valid Conviva session, you must have access to a Conviva developer account with access to a debug or production key.

### Installation

After setting up the THEOplayer Android SDK, in your module level `build.gradle` file add the THEOplayer Android SDK Conviva Connector and the Conviva SDK:

```java
implementation 'com.theoplayer.android-connector:conviva:+'
implementation 'com.conviva.sdk:conviva-core-sdk:4.0.23'
```

### Usage

#### Setting up the Conviva Connector

```java
val theoplayerView: THEOplayerView

private fun setupConviva() {
    val customerKey = "your_conviva_customer_key"
    val gatewayUrl = "your_conviva_debug_gateway_url"

    val settings = HashMap<String, Any>()
    settings[ConvivaSdkConstants.GATEWAY_URL] = gatewayUrl
    settings[ConvivaSdkConstants.LOG_LEVEL] = SystemSettings.LogLevel.DEBUG

    convivaConnector = ConvivaConnector(applicationContext, theoplayerView.player, customerKey, settings)
    convivaConnector?.setViewerId("viewer ID")
}
```

#### Setting asset name

Whenever a new source is set on the player, follow it by setting the new asset name. For example:

```java
theoplayerView.player.source = sourceDescription
convivaConnector?.setAssetName("BigBuckBunny with Google IMA ads")
```

#### Destroying / Cleaning up

To release listeners and resources, call `destroy` whenever the Conviva Connector is no longer needed.

```java
convivaConnector?.destroy()
```

After destroying a Conviva Connector instance, it can no longer be used. If needed, a new instance should be created.

## iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

### Installation

#### Swift Package Manager

1. In Xcode, install the Conviva libraries by navigating to **File > Add Packages**
2. In the prompt that appears, select the iOS-Connector GitHub repository: `https://github.com/THEOplayer/iOS-Connector`
3. Select the version you want to use.
4. Choose the Connector libraries you want to include in your app.

To support custom feature builds of THEOplayerSDK perform the following steps:

1. Clone the [THEOplayer Conviva connector repository](https://github.com/THEOplayer/iOS-Connector/tree/main/Code/Conviva) to your computer.
2. Use a [local override](https://developer.apple.com/documentation/xcode/editing-a-package-dependency-as-a-local-package) of the theoplayer-sdk-ios package by selecting the folder `../../Helpers/TheoSPM/theoplayer-sdk-ios` in Finder and dragging it into the Project navigator of your Xcode project.
3. Place your custom `THEOplayerSDK.xcframework` at `../../Helpers/TheoSPM/theoplayer-sdk-ios/THEOplayerSDK.xcframework`. (It is also possible to place your xcframework somewhere else. In that case make sure to update the [Package.swift](https://github.com/THEOplayer/iOS-Connector/blob/main/Helpers/TheoSPM/theoplayer-sdk-ios/Package.swift) manifest inside your local override so that it points to your custom THEOplayer build)
4. If Xcode complains about a missing xcframework
   1. Choose `File` > `Packages` > `Reset Package Caches` from the menu bar.
   2. If it is still not working, make sure to remove any `THEOplayerSDK.xcframework` inclusions that you manually installed before installing this THEOplayer-Connector-Conviva package.

#### Cocoapods

1. Create a Podfile if you don't already have one. From the root of your project directory, run the following command: `pod init`
2. To your Podfile, add the Conviva connector pods that you want to use in your app: `pod 'THEOplayer-Connector-Conviva'`
3. Install the pods using `pod install`, then open your `.xcworkspace` file to see the project in Xcode.

To support custom feature builds of THEOplayerSDK perform the following steps:

1. Clone this repository to your computer.
2. Use a [local override](https://guides.cocoapods.org/using/the-podfile.html#using-the-files-from-a-folder-local-to-the-machine) of the `THEOplayerSDK-basic` pod by adding the following line to your projects Podfile: `pod 'THEOplayerSDK-basic', :path => 'iOS-Connector/Helpers/TheoPod'` and make sure the path points to the [TheoPod folder](https://github.com/THEOplayer/iOS-Connector/tree/main/Helpers/TheoPod).

### Usage

Import the `THEOplayerConnectorConviva` module:

```swift
import THEOplayerConnectorConviva
```

Create a `ConvivaConfiguration` that contains the info on how to connect to your Conviva endpoint:

```swift
let configuration = ConvivaConfiguration(
      customerKey: "put your customer key here",
      gatewayURL: " put your  gateway URL here ",
      logLevel: .LOGLEVEL_FUNC
)
```

Create a `ConvivaConnector` that uses this `configuration` and your `THEOplayer` instance:

```swift
let connector = ConvivaConnector(
      configuration: configuration,
      player: yourTHEOplayer
)
```

Report the viewer's ID:

```swift
connector.report(viewerID: "John Doe")
```

For each asset that you play, set its name using:

```swift
connector.report(assetName: "Star Wars - Episode II")
```

Hold a reference to your connector. Once the connector is released from memory it will clean up itself and stop reporting to Conviva.

## Related links:

- Demo page: [Conviva Analytics Test Page](https://cdn.theoplayer.com/conviva/conviva_test.html)
- [Web SDK connector on Github](https://github.com/THEOplayer/sample-conviva-analytics-html5-sdk)
- [Android SDK connector on Github](https://github.com/THEOplayer/android-connector/tree/master/connectors/analytics/conviva)
- [iOS SDK connector on Github](https://github.com/THEOplayer/iOS-Connector/tree/main/Code/Conviva)
- [Conviva SDK Documentation](https://cdn.theoplayer.com/conviva/Conviva_Documentation_4.0.14/index.html)
- More Information about [Conviva Video Experience](https://www.conviva.com/experience-insights/)
- More Information about [Conviva Ad Insights](https://www.conviva.com/ad-insights/)
