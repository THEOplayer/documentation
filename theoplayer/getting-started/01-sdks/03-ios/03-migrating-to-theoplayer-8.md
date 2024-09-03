# Migrating to THEOplayer iOS/tvOS SDK 8.x

This article will guide your through updating from THEOplayer iOS/tvOS SDK version 8 (from version 7),
and the changes needed in your code.

## Update THEOplayer

Update THEOplayer iOS/tvOS SDK to version 8 in your Podfile:

```swift
target 'MyApp' do
  pod 'THEOplayerSDK-core', '~> 8'
end
```

If you're using one of [our connectors](/theoplayer/connectors/ios/),
make sure to update them to the latest version too to ensure proper support for THEOplayer version 8.

## Update deployment target to 13.0 or higher

In version 8, the minimum supported version of our iOS/tvOS SDK is raised from 12.0 to 13.0.
This decision was based on metrics provided by [Apple's iOS usage measures by devices that transacted on the App
Store](https://developer.apple.com/support/app-store/), which shows low number of usage of iOS 12.

In your Xcode project settings, make sure the "Deployment target" is set to 13.0 or higher.

![Screenshot of Xcode project settings](../../../assets/img/xcode-deployment-target.png)

## Objective-C support is deprecated

Starting with version 8, support for Objective-C is deprecated for all THEOplayer APIs.
Existing APIs will still continue to work until the next major release, but additional support for new APIs will discontinue.

When it was introduced, the goal of the Objective-C APIs was to provide bindings to bridge our native SDK to React Native.
Over time, that became unneeded as React Native became capable to interact directly with Swift APIs.

Please contact us for support in case your codebase relies on the Objective-C APIs.
