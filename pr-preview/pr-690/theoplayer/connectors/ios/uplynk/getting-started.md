# THEOplayer 🤝 Uplynk

THEOplayer-Connector-Uplynk for iOS provides an integration between the THEOplayerSDK and the Uplynk CMS. It allows the `THEOplayerSDK` to playback uplynk sources.

For example xcode projects with this connector see [Uplynk-Examples](/documentation/pr-preview/pr-690/theoplayer/connectors/ios/uplynk/examples.md).

## Installation[​](#installation "Direct link to Installation")

### [Swift Package Manager](https://swift.org/package-manager/)[​](#swift-package-manager "Direct link to swift-package-manager")

1. In Xcode, install the THEOplayer iOS-Connector package by navigating to **File > Add Packages**
2. In the prompt that appears, select the iOS-Connector GitHub repository: `https://github.com/THEOplayer/iOS-Connector`
3. Select the version you want to use.

> the Uplynk connector is available for versions >= 8.11 only.

4. Choose the Connector libraries you want to include in your app.

To support custom feature builds of THEOplayerSDK perform the following steps:

1. Clone this repository to your computer.

2. Use a [local override](https://developer.apple.com/documentation/xcode/editing-a-package-dependency-as-a-local-package) of the `theoplayer-sdk-ios` package by selecting the folder `../../Helpers/TheoSPM/theoplayer-sdk-ios` in Finder and dragging it into the Project navigator of your Xcode project.

3. Place your custom THEOplayerSDK.xcframework at `../../Helpers/TheoSPM/theoplayer-sdk-ios/THEOplayerSDK.xcframework`. (It is also possible to place your xcframework somewhere else. In that case make sure to update the [Package.swift](https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoSPM/theoplayer-sdk-ios/Package.swift) manifest inside the your local override so that it points to your custom THEOplayer build)

4. If Xcode complains about a missing xcframework

   <!-- -->

   1. Choose `File` > `Packages` > `Reset Package Caches` from the menu bar.
   2. If it is still not working, make sure to remove any `THEOplayerSDK.xcframework` inclusions that you manually installed before installing this THEOplayer-Connector-Uplynk package.

### [Cocoapods](https://guides.cocoapods.org/using/getting-started.html#getting-started)[​](#cocoapods "Direct link to cocoapods")

1. Create a Podfile if you don't already have one. From the root of your project directory, run the following command: `pod init`
2. To your Podfile, add the Uplynk connector pods that you want to use in your app: `pod 'THEOplayer-Connector-Uplynk'`
3. Install the pods using `pod install` , then open your `.xcworkspace` file to see the project in Xcode.

To support custom feature builds of THEOplayerSDK perform the following steps:

1. Clone this repository to your computer.
2. Use a [local override](https://guides.cocoapods.org/using/the-podfile.html#using-the-files-from-a-folder-local-to-the-machine) of the `THEOplayerSDK-basic` pod by adding the following line to your projects Podfile: `pod 'THEOplayerSDK-basic', :path => 'iOS-Connector/Helpers/TheoPod'` and make sure the path points to the [TheoPod folder](https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoPod).

## Related articles[​](#related-articles "Direct link to Related articles")

Learn more about Uplynk and how to use the connector in the following list of articles:

* [Introduction](/documentation/pr-preview/pr-690/theoplayer/connectors/ios/uplynk/introduction.md): this article provides information on what Uplynk provides as a service.
* [Preplay](/documentation/pr-preview/pr-690/theoplayer/connectors/ios/uplynk/preplay.md): this article provides information on how to configure a Uplynk source.
* [Ads](/documentation/pr-preview/pr-690/theoplayer/connectors/ios/uplynk/ads.md): this article provides information on which APIs can be leveraged to track and enhance the ad-viewing experience.
* [Ping](/documentation/pr-preview/pr-690/theoplayer/connectors/ios/uplynk/ping.md): this article provides information on how to leverage the Ping service and which THEOplayer APIs you should use.
