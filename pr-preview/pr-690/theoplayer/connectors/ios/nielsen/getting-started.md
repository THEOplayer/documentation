# THEOPlayer 🤝 Nielsen

THEOplayer-Connector-Nielsen provides an integration between the THEOplayerSDK and NielsenAppSDK & NielsenTVOSAppSDK. It connects to the Nielsen backend and reports events fired from THEOplayer instances.

## Installation[​](#installation "Direct link to Installation")

### [Swift Package Manager](https://swift.org/package-manager/)[​](#swift-package-manager "Direct link to swift-package-manager")

1. In Xcode, install the Nielsen connector by navigating to **File > Add Packages**
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
   2. If it is still not working, make sure to remove any `THEOplayerSDK.xcframework` inclusions that you manually installed before installing this connector package.

### [Cocoapods](https://guides.cocoapods.org/using/getting-started.html#getting-started)[​](#cocoapods "Direct link to cocoapods")

1. Create a Podfile if you don't already have one. From the root of your project directory, run the following command: `pod init`
2. To your Podfile, add links to the registries of Cocoapods and Nielsen: `source 'https://cdn.cocoapods.org/'` and `source 'https://github.com/NielsenDigitalSDK/nielsenappsdk-ios-specs-dynamic.git'`
3. To your Podfile, add the connector pods that you want to use in your app: `pod 'THEOplayer-Connector-Nielsen'`
4. Install the pods using `pod install` , then open your `.xcworkspace` file to see the project in Xcode.

To support custom feature builds of THEOplayerSDK perform the following steps:

1. Clone this repository to your computer.
2. Use a [local override](https://guides.cocoapods.org/using/the-podfile.html#using-the-files-from-a-folder-local-to-the-machine) of the `THEOplayerSDK-basic` pod by adding the following line to your projects Podfile: `pod 'THEOplayerSDK-basic', :path => 'iOS-Connector/Helpers/TheoPod'` and make sure the path points to the [TheoPod folder](https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoPod).

## Usage[​](#usage "Direct link to Usage")

Import the `THEOplayerConnectorNielsen` module

```swift
import THEOplayerConnectorNielsen

```

Create a Dictionary that contains the info on how to connect to your Nielsen endpoint:

```swift
let configuration = [
  "appid": "XXYnnnnnn-XnnX-nXXn-nXnn-XnnnnXnnnXnX",
  "appversion": "n.n",
  "appname": "Theo Nielsen Sample App",
  "nol_devDebug": "DEBUG"
]

```

Create a `NielsenConnector` that uses this `configuration` and your `THEOplayer` instance:

```swift
let connector = NielsenConnector(
    configuration: configuration,
    player: yourTHEOplayer
)

```

Hold a reference to your connector. Once the connector is released from memory it will clean up itself and stop reporting to Nielsen.

## What events does this connector report to Nielsen?[​](#what-events-does-this-connector-report-to-nielsen "Direct link to What events does this connector report to Nielsen?")

### Basic playback events[​](#basic-playback-events "Direct link to Basic playback events")

| THEOplayer event                    | NielsenAppApi report func       |
| ----------------------------------- | ------------------------------- |
| PlayerEventTypes.LOADED\_META\_DATA | loadMetadata(\_ metadata: Any?) |
| PlayerEventTypes.PAUSE              | stop()                          |
| PlayerEventTypes.SOURCE\_CHANGE     | end()                           |
| PlayerEventTypes.ENDED              | end()                           |
| PlayerEventTypes.DESTROY            | end()                           |
| TextTrackEventTypes.ENTER\_CUE      | sendID3(\_ data: String)        |
