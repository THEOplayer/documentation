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

## Builds generated with Xcode 16

In an effort to align with the changes made by Apple regarding the [App Store publishing policy](https://developer.apple.com/news/upcoming-requirements/?id=02212025a), starting from THEOplayer 10.0 we will distribute our SDK builds using Xcode 16.
Effectively, this means that developing a client application using THEOplayer iOS/tvOS SDK will require a minimum version of Xcode 16.

## Single THEOlive playback pipeline

In THEOplayer 9.7.0 we introduced an improved THEOlive playback engine as a default option.
The `useLegacyPlaybackEngine` flag on `THEOliveConfiguration` allowed customers to switch back to the legacy pipeline in case of unforeseen issues.

The discrepancies between the two pipelines were fully ironed out during the transition period.

The legacy playback pipeline is now has been fully retired, and the `useLegacyPlaybackEngine` property on `THEOliveConfiguration` has been removed.

## Replace usages of deprecated APIs

- Removed the `destroy()` method. Instead, destroy the player by removing its reference `self.player = nil`.
- Removed the `set` from the subscript of the `MediaTrackList` API. The `MediaTrackList` is a read-only list.
- Removed the `goLive()` method from THEOliveAPI. Instead, use `player.play()` which will seek to live and play.
- Removed the flag `useLegacyPlaybackEngine` in the initializer of `THEOliveConfiguration`
- Removed THEOlive publication events (`PublicationLoadStartEvent`, `PublicationLoadedEvent` and `PublicationOfflineEvent`), use the equivalent distribution events instead (`DistributionLoadStartEvent`, `EndpointLoadedEvent` and `DistributionOfflineEvent` respectively).
