---
title: "iOS"
slug: /ios
---
The Native SDK for creating iOS and tvOS applications. You may use it to connect, capture, publish, or subscribe to streams using the Dolby.io Streaming Platform.

<div class="dolbyio-cards-container">
 
 <a class="dolbyio-card dolbyio-card-1" href="https://github.com/millicast/millicast-native-sdk/releases">
 <div class="dolbyio-card-image">
 <img width="40px" src="https://files.readme.io/3f65ad7-github_svg.svg"/>
 </div>
 <div class="dolbyio-card-header">GitHub</div>
 <div class="dolbyio-card-description">
 </div>
 </a>
 
 <a class="dolbyio-card dolbyio-card-2" href="https://millicast.github.io/doc/latest/apple/documentation/millicastsdk">
 <div class="dolbyio-card-image">
 <img width="40px" class="dolbyio-card-svg-icon" src="https://files.readme.io/049dc13-documentation_icon.svg"/>
 </div>
 <div class="dolbyio-card-header">Documentation</div>
 <div class="dolbyio-card-description">
 </div>
 </a>
 
 <a class="dolbyio-card dolbyio-card-3" href="https://github.com/dolbyio-samples/stream-sdk-ios-getting-started">
 <div class="dolbyio-card-image">
 <img width="45px" class="dolbyio-card-svg-icon" src="https://files.readme.io/0c11f2f-sampleapp_icon.svg"/>
 </div>
 <div class="dolbyio-card-header">Sample app</div>
 <div class="dolbyio-card-description">
 </div>
 </a>
 
 <a class="dolbyio-card dolbyio-card-4" href="/millicast/client-sdks/ios-getting-started-with-publishing">
 <div class="dolbyio-card-image">
 <img width="40px" class="dolbyio-card-svg-icon" src="https://files.readme.io/dde6508-GettingStarted-default.svg"/>
 </div>
 <div class="dolbyio-card-header">Getting Started</div>
 <div class="dolbyio-card-description">
 </div>
 </a>
 
</div>

The package name of the Native SDK for iOS is _millicast-native-sdk-\{version\}-XCFramework.zip_.

> 📘 Note
> 
> If you want to use Streaming APIs on Android and iOS, you can also use the [Flutter SDK](/millicast/client-sdks/flutter.md) or the [React Native](/millicast/client-sdks/rn.md) plugin.

# Requirements

- [Dolby.io account](https://dashboard.dolby.io/signup)
- A working video camera and microphone
- iOS [14.5](https://support.apple.com/en-us/HT211808) or later
- Client SDK [1.8.0](https://github.com/millicast/millicast-native-sdk/releases) or later

# Adding the SDK to a project

To add the SDK to your project, you can either use Swift Package Manager or CocoaPods.

## Swift Package Manager

1. Go to your project settings in Xcode.

2. Go to the **Package Dependencies** tab and click on the **+** icon to add a new dependency.

3. In the line edit, enter the following package URL: https://github.com/millicast/millicast-sdk-swift-package. You should see the package appear.

4. Choose the version you want to use and click on **add package**.

## CocoaPods

1. Install CocoaPods if you have not already.

2. Open a terminal in the root of your XCode project.

3. Type `pod init` to create a `Podfile`.

4. Open the created file in a text editor and add the Millicast SDK as a dependency.

```ruby
target 'MyProject' do
  platform :ios, '14.5'
  # Comment the next line if you do not want to use dynamic frameworks
  use_frameworks!
  pod 'MillicastSDK' '~> 2.0'
  # Pods for MyProject iOS
end
```

5. Type `pod install` in the terminal to install the SDK.

This step downloads and installs all needed dependencies and creates a `.xcworkspace` file. From now on, use this file instead of `.xcodeproj`.

6. You can update the SDK version in the podfile by running `pod update` in the terminal.

# Tutorials

- [Getting Started with Publishing](/millicast/client-sdks/ios/ios-getting-started-with-publishing.md)
- [Getting Started with Subscribing](/millicast/client-sdks/ios/ios-getting-started-with-subscribing.md)
- [How-to Add Picture in Picture](/millicast/client-sdks/ios/ios-how-to-add-picture-in-picture.md)
- [Migration Guide for iOS SDK](/millicast/client-sdks/ios/ios-sdk-migration-guide.md)
