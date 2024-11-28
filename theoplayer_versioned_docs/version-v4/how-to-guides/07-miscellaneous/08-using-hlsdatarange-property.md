# Using hlsDateRange property

This article explains how to enable the DateRange feature, so that a text track and cues are created.

The EXT-X-DATERANGE tag associates a Date Range (i.e., a range of time defined by a starting and ending date) with a set of attribute/value pairs

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |   N/A    |      Yes       |      N/A       |

## Instructions

`#EXT-X-DATERANGE` is a way of providing timed metadata in an HLS manifest. It is used to define date range metadata in a media playlist. A possible use case is defining timed metadata for interstitial regions such as advertisements, but can be used to define any timed metadata needed by your stream.

`#EXT-X-DATERANGE` is supported in THEOplayer as of 2.61.0. However, the feature is not enabled by default. To enable it, add _hlsDateRange_ to the player configuration and set it to true. You can also choose (instead) to enable/disable the feature per source by adding the same option to a source in your source description.

##### Web SDK

```js
//in playerConfiguration
var element = document.querySelector('.theoplayer-container');

var player = new THEOplayer.Player(element, {
  libraryLocation: libraryLocation,
  license: 'your-license-here',
  hlsDateRange: true,
});

//in the source description
player.source = {
  hlsDateRange: true,
  sources: {
    src: 'Example-Stream.m3u8',
    type: 'application/x-mpegurl',
  },
};
```

##### Legacy iOS/tvOS SDK (4.12.x)

```swift
//in playerConfiguration
func setupTheoPlayer() {
    var frame: CGRect = UIScreen.main.bounds
    frame.size.height = 350
    let stylePath1 = Bundle.main.path(forResource:"style1", ofType: "css")!
    let scriptPath = Bundle.main.path(forResource:"script1", ofType: "js")!
    //Add here at the end of playerConfig
    let playerConfig = THEOplayerConfiguration(defaultCSS: true, cssPaths:[stylePath1, stylePath2], jsPaths: [scriptPath], googleIMA: true, hlsDateRange: true)
    self.theoplayer = THEOplayer(configuration: playerConfig)
    self.theoplayer.frame = frame
    self.theoplayer.addAsSubview(of: playerView)
}

//in the source description
SourceDescription(
    source: TypedSource(
    src: src,
    type: stream,
    hlsDateRange: true
)
```

##### Android SDk

```java
//in playerConfiguration
THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
        .ui(new UIConfiguration.Builder().language("nl").build())
        .hlsDateRange(true)
        .build();
THEOplayerView tpv = new THEOplayerView(this, playerConfig);
```

The TextTrack API is used to retrieve the timed metadata. A MetadataTextTrack will provide cues which contain the timed metadata and will dispatch an event when started and ended.

## Using and interacting with date-range variables

##### Web SDK

```js
function handleTimedMetadata(player, onTimeMetadataEnter, onTimeMetadataExit) {
  console.log('function handleTimedMetadata is starting! yeeee');
  const onTrackAdded = (event) => {
    const track = event.track;
    console.log('track', track.kind, track.cues);
    if (track.kind !== 'metadata') {
      return;
    }
    track.mode = 'hidden'; // By default, tracks are disabled and do not expose cues
    track.addEventListener('addcue', onCueAdded);
    track.addEventListener('removecue', onCueRemoved);
  };
  const onTrackRemoved = (event) => {
    const track = event.track;
    if (track.kind !== 'metadata') {
      return;
    }
    track.removeEventListener('addcue', onCueAdded);
    track.removeEventListener('removecue', onCueRemoved);
  };
  const onCueAdded = (event) => {
    const cue = event.cue;
    console.log('cueadded', cue);
    cue.addEventListener('enter', onTimeMetadataEnter);
    cue.addEventListener('exit', onTimeMetadataExit);
  };
  const onCueRemoved = (event) => {
    const cue = event.cue;
    cue.removeEventListener('enter', onTimeMetadataEnter);
    cue.removeEventListener('exit', onTimeMetadataExit);
  };
  player.textTracks.addEventListener('addtrack', onTrackAdded);
  player.textTracks.addEventListener('removetrack', onTrackRemoved);
}
handleTimedMetadata(
  player,
  (event) => console.log('Do something with timed metadata starting', event),
  (event) => console.log('Do something with metadata ending', event)
);
```

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x) and Android

To be added

## Resources

HLS spec. : [https://tools.ietf.org/html/draft-pantos-hls-rfc8216bis-04#section-4.4.2.7](https://tools.ietf.org/html/draft-pantos-hls-rfc8216bis-04#section-4.4.2.7)
