# Migrating to THEOplayer iOS/tvOS SDK 10.x

This article will guide you through updating from THEOplayer iOS/tvOS SDK version 10 (from version 9),
and the changes needed in your code.

## Update THEOplayer

Update THEOplayer iOS/tvOS SDK to version 10 in your Podfile:

```ruby
target 'MyApp' do
  pod 'THEOplayerSDK-core', '~> 10'
end
```

If you're using one of [our connectors](/theoplayer/connectors/ios/),
make sure to update them to the latest version too to ensure proper support for THEOplayer version 10.
