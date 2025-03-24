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
