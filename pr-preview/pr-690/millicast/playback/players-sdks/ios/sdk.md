# Millicast SDK

The Native SDK for creating iOS and tvOS applications. You may use it to connect, capture, publish, or subscribe to streams using the OptiView Real-time Streaming Platform.

Player vs SDK

**Dolby OptiView Player** (formerly THEOplayer) now supports real-time streaming (formerly Millicast). Unless directed by your onboarding team, please use the [Dolby OptiView Player](/documentation/pr-preview/pr-690/millicast/playback/players-sdks/ios/player.md) and not the Millicast SDKs.

<!-- -->

## [![](/documentation/pr-preview/pr-690/img/github.svg)![](/documentation/pr-preview/pr-690/img/github_dark.svg)GitHub](https://github.com/millicast/millicast-native-sdk/releases)

## [📖Reference](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk)

## [📱Sample app](https://github.com/dolbyio-samples/stream-sdk-ios-getting-started)

## [🚀Getting Started](/documentation/pr-preview/pr-690/millicast/playback/players-sdks/ios/sdk/getting-started-with-publishing.md)

The package name of the Native SDK for iOS is *millicast-native-sdk-{version}-XCFramework.zip*.

Note

If you want to use Streaming APIs on Android and iOS, you can also use the [Flutter SDK](/documentation/pr-preview/pr-690/millicast/playback/players-sdks/flutter.md) or the [React Native](/documentation/pr-preview/pr-690/millicast/playback/players-sdks/react-native.md) plugin.

## Requirements[​](#requirements "Direct link to Requirements")

* [OptiView Real-time account](https://streaming.dolby.io)
* A working video camera and microphone
* iOS [14.5](https://support.apple.com/en-us/HT211808) or later
* Client SDK [1.8.0](https://github.com/millicast/millicast-native-sdk/releases) or later

## Adding the SDK to a project[​](#adding-the-sdk-to-a-project "Direct link to Adding the SDK to a project")

To add the SDK to your project, you can either use Swift Package Manager or CocoaPods.

### Swift Package Manager[​](#swift-package-manager "Direct link to Swift Package Manager")

1. Go to your project settings in Xcode.
2. Go to the **Package Dependencies** tab and click on the **+** icon to add a new dependency.
3. In the line edit, enter the following package URL: <https://github.com/millicast/millicast-sdk-swift-package>. You should see the package appear.
4. Choose the version you want to use and click on **add package**.

### CocoaPods[​](#cocoapods "Direct link to CocoaPods")

1. Install CocoaPods if you have not already.
2. Open a terminal in the root of your XCode project.
3. Type `pod init` to create a `Podfile`.
4. Open the created file in a text editor and add the Millicast SDK as a dependency.

```ruby
target 'MyProject' do
  platform :ios, '14.5'
  # Comment the next line if you do not want to use dynamic frameworks
  use_frameworks!
  pod 'MillicastSDK' '~> 2.5'
  # Pods for MyProject iOS
end

```

5. Type `pod install` in the terminal to install the SDK.

This step downloads and installs all needed dependencies and creates a `.xcworkspace` file. From now on, use this file instead of `.xcodeproj`.

6. You can update the SDK version in the podfile by running `pod update` in the terminal.

## Tutorials[​](#tutorials "Direct link to Tutorials")

* [Getting Started with Publishing](/documentation/pr-preview/pr-690/millicast/playback/players-sdks/ios/sdk/getting-started-with-publishing.md)
* [Getting Started with Subscribing](/documentation/pr-preview/pr-690/millicast/playback/players-sdks/ios/sdk/getting-started-with-subscribing.md)
* [How-to Add Picture in Picture](/documentation/pr-preview/pr-690/millicast/playback/players-sdks/ios/sdk/how-to-add-picture-in-picture.md)
* [Migration Guide for iOS SDK](/documentation/pr-preview/pr-690/millicast/playback/players-sdks/ios/sdk/sdk-migration-guide.md)
