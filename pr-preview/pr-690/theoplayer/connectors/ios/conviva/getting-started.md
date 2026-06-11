# THEOPlayer 🤝 Conviva

THEOplayer-Connector-Conviva for iOS provides an integration between the THEOplayerSDK and ConvivaSDK. It connects to the Conviva backend and reports events fired from THEOplayer instances.

For example xcode projects with this connector see [Conviva-Examples](/documentation/pr-preview/pr-690/theoplayer/connectors/ios/conviva/examples.md).

## Installation[​](#installation "Direct link to Installation")

### [Swift Package Manager](https://swift.org/package-manager/)[​](#swift-package-manager "Direct link to swift-package-manager")

1. In Xcode, install the Conviva libraries by navigating to **File > Add Packages**
2. In the prompt that appears, select the iOS-Connector GitHub repository: `https://github.com/THEOplayer/iOS-Connector`
3. Select the version you want to use.
4. Choose the Connector libraries you want to include in your app.

To support custom feature builds of THEOplayerSDK perform the following steps:

1. Clone this repository to your computer.

2. Use a [local override](https://developer.apple.com/documentation/xcode/editing-a-package-dependency-as-a-local-package) of the `theoplayer-sdk-ios` package by selecting the folder `../../Helpers/TheoSPM/theoplayer-sdk-ios` in Finder and dragging it into the Project navigator of your Xcode project.

3. Place your custom THEOplayerSDK.xcframework at `../../Helpers/TheoSPM/theoplayer-sdk-ios/THEOplayerSDK.xcframework`. (It is also possible to place your xcframework somewhere else. In that case make sure to update the [Package.swift](https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoSPM/theoplayer-sdk-ios/Package.swift) manifest inside the your local override so that it points to your custom THEOplayer build)

4. If Xcode complains about a missing xcframework

   <!-- -->

   1. Choose `File` > `Packages` > `Reset Package Caches` from the menu bar.
   2. If it is still not working, make sure to remove any `THEOplayerSDK.xcframework` inclusions that you manually installed before installing this THEOplayer-Connector-Conviva package.

### [Cocoapods](https://guides.cocoapods.org/using/getting-started.html#getting-started)[​](#cocoapods "Direct link to cocoapods")

1. Create a Podfile if you don't already have one. From the root of your project directory, run the following command: `pod init`
2. To your Podfile, add the Conviva connector pods that you want to use in your app: `pod 'THEOplayer-Connector-Conviva'`
3. Install the pods using `pod install` , then open your `.xcworkspace` file to see the project in Xcode.

To support custom feature builds of THEOplayerSDK perform the following steps:

1. Clone this repository to your computer.
2. Use a [local override](https://guides.cocoapods.org/using/the-podfile.html#using-the-files-from-a-folder-local-to-the-machine) of the `THEOplayerSDK-basic` pod by adding the following line to your projects Podfile: `pod 'THEOplayerSDK-basic', :path => 'iOS-Connector/Helpers/TheoPod'` and make sure the path points to the [TheoPod folder](https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoPod).

## Usage[​](#usage "Direct link to Usage")

Import the `THEOplayerConnectorConviva` module

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

Alternatively, the **asset name** can be provided as contentInfo (`CIS_SSDK_METADATA_ASSET_NAME`) using the setContentInfo method, along with other metadata. For example to report the **viewer's ID**:

```swift
let contentInfo = [ 
   CIS_SSDK_METADATA_VIEWER_ID: "your_viewer_id"
]
connector.setContentInfo(contentInfo)

```

**Important note**: setting a new source on the player will reset previously set contentInfo. Make sure to use the `setContentInfo` method after receiving the SOURCE\_CHANGE event.

## Lifecycle[​](#lifecycle "Direct link to Lifecycle")

Hold a reference to your connector. Once the connector is released from memory it will clean up itself and stop reporting to Conviva.
