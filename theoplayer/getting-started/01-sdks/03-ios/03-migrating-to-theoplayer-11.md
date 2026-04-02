# Migrating to THEOplayer iOS/tvOS SDK 11.x

This article will guide you through updating from THEOplayer iOS/tvOS SDK version 11 (from version 10),
and the changes needed in your code.

## Update THEOplayer

Update THEOplayer iOS/tvOS SDK to version 11 in your Podfile:

```ruby
target 'MyApp' do
  pod 'THEOplayerSDK-core', '~> 11'
end
```

If you're using one of [our connectors](/theoplayer/connectors/ios/),
make sure to update them to the latest version too to ensure proper support for THEOplayer version 11.

## Replace usages of deprecated APIs
