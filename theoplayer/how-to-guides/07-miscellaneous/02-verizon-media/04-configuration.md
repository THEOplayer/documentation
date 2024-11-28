# Verizon Media Configuration

This article explains what is possible with a Verizon Media Configuration when setting up a THEOplayer instance.

## SDKs

|   Web SDK    | Android SDK  |   iOS SDK    | tvOS SDK | Android TV SDK | Chromecast SDK |
| :----------: | :----------: | :----------: | :------: | :------------: | :------------: |
| Yes (2.63.0) | Yes (2.66.0) | Yes (2.65.0) |    No    |  Yes (2.66.0)  |       No       |

## Features

Developers can set a Verizon Media Configuration when creating their video player instance. Through this Verizon Media Configuration, developers can set some UX and UI preferences related to the Verizon Media integration.

- `defaultSkipOffset`: specifies when an ad break can be skipped. The default value is `-1`, which means that the ad break cannot be skipped.
- `onSeekOverAd`: specifies what should happen when viewers try to seek over an ad. By default, no ad are played when seeking over ads. As an alternative, you can A) only play the last ad break (before the requested playhead position) or B) play all ad breaks (before the requested playhead position).
- `ui`
  - `adBreakMarkers`: specifies that a (red) ad break marker should be rendered in the scrub bar. (Enabled by default.)
  - `assetMarkers`: specifies that a (black) asset marker should be rendered in the scrub bar. (Enabled by default.)
  - `adNotification`: specifies that a count-down timer must be rendered when an ad is playing. (Enabled by default.)
  - `contentNotification`: specifies that a count-down timer to the next asset must be rendered when the viewer is close to the transition of another asset of a multi-asset stream. (Enabled by default.)

You can toggle this features at https://cdn.theoplayer.com/demos/verizon-media/index.html. _(Note: technically, this demo doesn't use `defaultSkipOffset` to configure the skip offset. Instead, this demo uses `player.verizonMedia.ads.adBreaks[<element>].skipOffset` to adjust this dynamically at run-time.)_

![VerizonMediaDemo](../../../assets/img/VerizonMediaConfiguration.png 'Verizon Media Configuration')

The examples below demonstrate how to use a Verizon Media Configuration per platform.

##### Web SDK

```js
const player = new THEOplayer.Player(element, {
    libraryLocation: '...',
    verizonMedia: { // optional
        onSeekOverAd: 'play-all', // default to 'play-none'. Other values: 'play-all' and 'play-last'
        ui: {
            contentNotification: true, // optional; defaults to true
            adNotification: true, // optional; defaults to true
            assetMarkers: true, // optional; defaults to true
            adBreakMarkers: true, // optional; defaults to true
        },
        defaultSkipOffset: 5 // ad break can be skipped after 5 seconds. (defaults to -1)
    },
    ...
});
```

Refer to the [VerizonMediaConfiguration API reference](pathname:///theoplayer/v8/api-reference/web/interfaces/VerizonMediaConfiguration.html) for more information.

##### Legacy Android SDK (4.12.x)

```java
VerizonMediaUiConfiguration verizonMediaUiConfiguration = new VerizonMediaUiConfiguration.Builder()
    .assetMarkers(true) // optional; defaults to true
    .adBreakMarkers(true) // optional; defaults to true
    .contentNotification(true) // optional; defaults to true
    .adNotification(true) // optional; defaults to true
    .build();
VerizonMediaConfiguration verizonMediaConfiguration = new VerizonMediaConfiguration.Builder()
    .defaultSkipOffset(5) // optional; defaults to -1 (=unskippable)
    .skippedAdStrategy(SkippedAdStrategy.PLAY_ALL) // optional; defaults to PLAY_NONE
    .ui(verizonMediaUiConfiguration)
    .build();
THEOplayerConfig theoplayerConfig = new THEOplayerConfig.Builder()
    .verizonMediaConfiguration(verizonMediaConfiguration)
    .build();
THEOplayerView theoplayerView = new THEOplayerView(this, theoplayerConfig);
```

Refer to the documentation at [VerizonMediaConfiguration](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/verizonmedia/VerizonMediaConfiguration.html) for more information.

##### Legacy iOS/tvOS SDK (4.12.x)

```swift
let theoplayerConfiguration = THEOplayerConfiguration(
    verizonMedia: VerizonMediaConfiguration(
        defaultSkipOffset: 15, // optional; defaults to -1 (=unskippable)
        onSeekOverAd: SkippedAdStrategy.PLAY_LAST, // optional; default to PLAY_NONE
        ui: VerizonMediaUiConfiguration(
            contentNotification: true, // optional; default to true
            adNotification: true, // optional; default to true
            assetMarkers: true, // optional; default to true
            adBreakMarkers: true // optional; default to true
        )
    )
)
let theoplayer = THEOplayer(configuration: theoplayerConfiguration)
```

Refer to the documentation at [VerizonMediaConfiguration](pathname:///theoplayer/v8/api-reference/ios/Classes/VerizonMediaConfiguration.html) for more information.

# Related articles

- [Verizon Media - Ads](../../../how-to-guides/07-miscellaneous/02-verizon-media/02-ads.md): this article zooms in on `defaultSkipOffset` and ``onSeekOverAd`.
- [Verizon Media - Introduction](../../../how-to-guides/07-miscellaneous/02-verizon-media/00-introduction.md): this article links to sample Git projects which implement a `VerizonMediaConfiguration`.
