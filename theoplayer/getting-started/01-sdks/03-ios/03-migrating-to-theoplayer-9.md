# Migrating to THEOplayer iOS/tvOS SDK 9.x

This article will guide your through updating from THEOplayer iOS/tvOS SDK version 9 (from version 8),
and the changes needed in your code.

## Update THEOplayer

Update THEOplayer iOS/tvOS SDK to version 9 in your Podfile:

```ruby
target 'MyApp' do
  pod 'THEOplayerSDK-core', '~> 9'
end
```

If you're using one of [our connectors](/theoplayer/connectors/ios/),
make sure to update them to the latest version too to ensure proper support for THEOplayer version 9.

## Objective-C support has been removed

In version 9, the THEOplayer API is no longer available through Objective-C.
It was [deprecated since version 8](03-migrating-to-theoplayer-8.md#objective-c-support-is-deprecated).

When it was introduced, the goal of the Objective-C APIs was to provide bindings to bridge our native SDK to React Native.
Over time, that became unneeded as React Native became capable to interact directly with Swift APIs.
