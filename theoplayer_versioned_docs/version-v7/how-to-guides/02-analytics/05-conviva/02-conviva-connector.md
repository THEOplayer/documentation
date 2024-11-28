# Conviva Connector for VideoAnalytics & AdsAnalytics

This article describes on how to integrate Conviva for Video Analytics and Ads Analytics offered as a connector with THEOplayer SDK.

## SDKs

| Web SDK | Android SDK | iOS SDK |  tvOS SDK  | Android TV SDK | Chromecast SDK | Tizen | webOS |
| :-----: | :---------: | :-----: | :--------: | :------------: | :------------: | :---: | :---: |
|   Yes   |     Yes     |   Yes   | Unverified |   Unverified   |   Unverified   |  Yes  |  Yes  |

## Web SDK

### Prerequisites

1. A THEOplayer build with a valid license is required. You can
   - either install the [THEOplayer SDK through NPM](https://www.npmjs.com/package/theoplayer),
   - or generate your custom THEOplayer SDK through the [THEOportal](https://portal.theoplayer.com/login) (this includes also a license).
2. Follow the [Getting started on Web](../../../getting-started/01-sdks/01-web/00-getting-started.mdx) guide to include your player on a simple HTML page.
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

```javascript
const convivaMetadata = {
  ['Conviva.assetName']: 'ASSET_NAME_GOES_HERE',
  ['Conviva.streamUrl']: 'CUSTOMER_STREAM_URL_GOES_HERE',
  ['Conviva.streamType']: 'STREAM_TYPE_GOES_HERE', // VOD or LIVE
  ['Conviva.applicationName']: 'APPLICATION_NAME_GOES_HERE',
  ['Conviva.viewerId']: 'VIEWER_ID_GOES_HERE',
};

const convivaConfig = {
  debug: false,
  gatewayUrl: 'CUSTOMER_GATEWAY_GOES_HERE',
  customerKey: 'CUSTOMER_KEY_GOES_HERE', // Can be a test or production key.
};
```

#### Step 2

Using these configs you can create the Conviva connector with THEOplayer. Alternatives:

- Add as a regular script:

```javascript
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

```javascript
<script type="module">
  import {ConvivaConnector} from "path/to/conviva-connector.esm.js"; const player = new THEOplayer.Player(element, configuration); const
  convivaIntegration = new ConvivaConnector( player, convivaMetadata, convivaConfig );
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

```javascript
async function setupYospaceConnector(player) {
  const source = {
    sources: [
      {
        src: 'https://csm-e-sdk-validation.bln1.yospace.com/csm/extlive/yospace02,hlssample42.m3u8?yo.br=true&yo.av=4',
        ssai: {
          integration: 'yospace',
        },
      },
    ],
  };

  // Create the connectors.
  const yospace = new THEOplayerYospaceConnector.YospaceConnector(player);
  const conviva = new THEOplayerConvivaConnector.ConvivaConnector(player, convivaMetadata, convivaConfig);

  // Link ConvivaConnector with the YospaceConnector.
  conviva.connect(yospace);

  // Set the source.
  await yospace.setupYospaceSession(source);
}
```

## Android SDK

### Prerequisites

1. The THEOplayer Android SDK Conviva Connector requires the application to import the THEOplayer Android SDK since the connector relies on its public APIs. For more details, check out our [Getting started on Android](../../../getting-started/01-sdks/02-android/00-getting-started.mdx) guide.
2. For setting up a valid Conviva session, you must have access to a Conviva developer account with access to a debug or production key.

### Installation

After setting up the THEOplayer Android SDK, in your module level `build.gradle` file add the THEOplayer Android SDK Conviva Connector and the Conviva SDK:

```groovy
implementation 'com.theoplayer.android-connector:conviva:+'
implementation 'com.conviva.sdk:conviva-core-sdk:4.0.33'
```

### Usage

#### Setting up the Conviva Connector

```kotlin
val theoplayerView: THEOplayerView

private fun setupConviva() {
    val customerKey = "your_conviva_customer_key"
    val gatewayUrl = "your_conviva_debug_gateway_url"

    val metadata = hashMapOf(
        "Conviva.applicationName" to "THEOplayer",
        "Conviva.viewerId" to "viewerId"
    )
    val config = ConvivaConfiguration(
        customerKey,
        true, // debug
        gatewayUrl,
    )
    convivaConnector = ConvivaConnector(applicationContext, theoplayerView.player, metadata, config)
}
```

#### Setting asset name

Most media related properties, such as its `streamURL`, `duration` or whether it is a `live` or `vod` stream, are determined and passed by the connector itself when setting a new source.

Whenever a new source is set on the player, the metadata title property is used to pass an asset name.

```kotlin
theoplayerView.player.source = SourceDescription.Builder(
        TypedSource.Builder("https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8").build()
    )
    .metadata(MetadataDescription(mapOf("title" to "Big Buck Bunny")))
    .build()
```

Alternatively, the asset name can be passed to the connector at any time along with additional metadata through an open key-value map, for example:

```kotlin
theoplayerView.player.source = sourceDescription
convivaConnector?.setContentInfo(hashMapOf(
    "Conviva.assetName" to "Big Buck Bunny",
    "customTag1" to "customValue1",
    "customTag2" to "customValue2"
))
```

#### Starting a new session on program boundaries

By default, new sessions are only started on play-out of a new source, or when an ad break starts. During a live stream it is possible to manually mark the start of a new session, for example when a new program starts.

```kotlin
convivaConnector?.stopAndStartNewSession(hashMapOf(
    "Conviva.assetName" to "New program",
    "customTag1" to "customValue1",
    "customTag2" to "customValue2"
))
```

#### Destroying / Cleaning up

To release listeners and resources, call `destroy` whenever the Conviva Connector is no longer needed.

```kotlin
convivaConnector?.destroy()
```

After destroying a Conviva Connector instance, it can no longer be used. If needed, a new instance should be created.

## iOS/tvOS SDK

### Installation

#### [Swift Package Manager](https://swift.org/package-manager/)

1. In Xcode, install the Conviva libraries by navigating to **File > Add Packages**
2. In the prompt that appears, select the iOS-Connector GitHub repository: `https://github.com/THEOplayer/iOS-Connector`
3. Select the version you want to use.
4. Choose the Connector libraries you want to include in your app.

#### [Cocoapods](https://guides.cocoapods.org/using/getting-started.html#getting-started)

1. Create a Podfile if you don't already have one. From the root of your project directory, run the following command: `pod init`
2. To your Podfile, add the Conviva connector pods that you want to use in your app: `pod 'THEOplayer-Connector-Conviva'`
3. Install the pods using `pod install`, then open your `.xcworkspace` file to see the project in Xcode.

### Usage

Import the `THEOplayerConnectorConviva` module:

```swift
import THEOplayerConnectorConviva
```

Create a `ConvivaConfiguration` that contains the info on how to connect to your conviva endpoint:

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

For each asset you play, the **asset name** needs to be reported to Conviva which you can do by providing the asset name as a `title` field inside your `SourceDescription's metadata`:

```swift
let mySource = SourceDescription(source: source, metadata: MetadataDescription(metadataKeys: ["title": "your_asset_name"]))
```

Alternatively, the asset name can be provided as contentInfo (`CIS_SSDK_METADATA_ASSET_NAME`) using the `setContentInfo` method, along with other metadata. For example to report the viewer's ID:

```swift
let contentInfo = [
   CIS_SSDK_METADATA_VIEWER_ID: "your_viewer_id"
]
connector.setContentInfo(contentInfo)
```

**Important note**: setting a new source on the player will reset previously set `contentInfo`. Make sure to use the `setContentInfo` method after receiving the `SOURCE_CHANGE` event.

### Lifecycle

Hold a reference to your connector. Once the connector is released from memory it will clean up itself and stop reporting to Conviva.

## Related links:

- Demo page: [Conviva Analytics Test Page](https://cdn.theoplayer.com/conviva/conviva_test.html)
- [Web SDK connector on GitHub](https://github.com/THEOplayer/sample-conviva-analytics-html5-sdk)
- [Android SDK connector on GitHub](https://github.com/THEOplayer/android-connector/tree/master/connectors/analytics/conviva)
- [iOS SDK connector on GitHub](https://github.com/THEOplayer/iOS-Connector/tree/main/Code/Conviva)
- [Conviva SDK Documentation](https://cdn.theoplayer.com/conviva/Conviva_Documentation_4.0.14/index.html)
- More Information about [Conviva Video Experience](https://www.conviva.com/experience-insights/)
- More Information about [Conviva Ad Insights](https://www.conviva.com/ad-insights/)
