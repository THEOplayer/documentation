# THEOPlayer 🤝 Yospace

THEOplayer-Connector-Yospace provides an integration between the THEOplayerSDK and Yospace to allow playback of server-side ad inserted streams.

## Installation[​](#installation "Direct link to Installation")

### [Swift Package Manager](https://swift.org/package-manager/)[​](#swift-package-manager "Direct link to swift-package-manager")

1. In Xcode, install the Yospace connector by navigating to **File > Add Packages**
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
2. To your Podfile, add the Yospace connector pod that you want to use in your app: `pod 'THEOplayer-Connector-Yospace'`
3. Add the following post-install hook in your Podfile:

```ruby
post_install do |installer|
    custom_framework_path = "#{installer.sandbox.root}/YOAdManagement-Release/YOAdManagement.xcframework"

    installer.pods_project.targets.each do |target|
      if target.name == 'THEOplayer-Connector-Yospace'
        framework_build_phase = target.frameworks_build_phase
        file_ref = installer.pods_project.new_file(custom_framework_path)

        framework_build_phase.add_file_reference(file_ref)
      end
    end
end

```

Check the Dependencies section below to get information on how to obtain the `YOAdManagement.xcframework` as a pod. 4. Install the pods using `pod install` , then open your `.xcworkspace` file to see the project in Xcode.

To support custom feature builds of THEOplayerSDK perform the following steps:

1. Clone this repository to your computer.
2. Use a [local override](https://guides.cocoapods.org/using/the-podfile.html#using-the-files-from-a-folder-local-to-the-machine) of the `THEOplayerSDK-basic` pod by adding the following line to your projects Podfile: `pod 'THEOplayerSDK-basic', :path => 'iOS-Connector/Helpers/TheoPod'` and make sure the path points to the [TheoPod folder](https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoPod).

## Dependencies[​](#dependencies "Direct link to Dependencies")

The THEOPlayer Yospace connector has two dependency frameworks: THEOplayerSDK and YOAdManagement.

THEOplayerSDK is added as a dependency on both Cocoapods and SPM and will be fetched by each dependency manager. YOAdManagement is published as a private pod hosted on Artifactory by jfrog. In order to get the framework you will need to:

1. Setup a Yospace developer account at <https://www.yospace.com/developer>
2. Login to the Yospace Apple docs at <https://docs.yospace.com/library/technical/sdks/en/ad-management-sdks-v3/apple.html>
3. Follow the instructions to setup the artifactory, authenticate, and fetch the framework at <https://docs.yospace.com/library/technical/sdk-api/ad-management/apple/previous/index.html>

## Usage[​](#usage "Direct link to Usage")

Import the `THEOplayerConnectorYospace` module

```swift
import THEOplayerConnectorYospace

```

Create a `SourceDescription` that defines the Yospace stream:

```swift
let streamType: YospaceStreamType = .live
let typedSource: TypedSource = .init(
    src: "yospace_live_stream_url",
    type: "application/x-mpegurl",
    ssai: YospaceServerSideAdInsertionConfiguration(streamType: streamType)
)
let source: SourceDescription = SourceDescription(source: typedSource)

```

Create a `YospaceConnector` that uses a `THEOplayer` instance:

```swift
let theoplayer: THEOplayer = .init()
let connector: YospaceConnector = .init(player: theoplayer)

```

**Note:** Hold a reference to your connector instance by storing it as a property. Keeping it inline will get it auto-released from memory. Once the connector is released from memory it will reset and unload autonomously.

Set the source and play. There are 2 ways to set a Yospace source:

1. Through the API provided by the YospaceConnector:

```swift
connector.setupYospaceSession(sourceDescription: source)

```

The connector will then fire a `SESSION_AVAILABLE` event once the setup is successful. The client can track this event to start playback:

```swift
_ = connector.addEventListener(type: YospaceEventTypes.SESSION_AVAILABLE, listener: { event in
    theoplayer.play()
})

```

When using the `setupYospaceSession` API, the connector will throw an error in case the `TypedSource` is not of type `YospaceServerSideAdInsertionConfiguration`.

2. Through the player:

```swift
theoplayer.source = source
theoplayer.play()

```
