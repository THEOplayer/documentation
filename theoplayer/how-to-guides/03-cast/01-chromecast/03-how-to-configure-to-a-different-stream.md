# How to configure a different stream to Chromecast

Some streaming setups require you to cast a different stream to a Chromecast Receiver device than the one playing on a Chromecast Receiver device.
For example, if your playing HLS + FairPlay DRM on your iOS application, you need to cast a different source with DASH + Widevine DRM to your Chromecast application,
because Chromecast applications aren't able to support FairPlay.

There are two approaches to achieve this use case:

1. [ChromecastConnection API](#chromecastconnection-api) (available as of THEOplayer 2.90.0)
2. [Chromecast source API](#chromecast-source-api) (deprecated as of THEOplayer 2.90.0)

You should no longer use the second approach as of THEOplayer 2.90.0 because this API is no longer maintained (even though it _may_ be available).

## ChromecastConnection API

The ChromecastConnection API allows you to implement callbacks related to Chromecast playback.
To achieve the described use case you can use the `onStart` (i.e. the start of a Chromecast session) to set a new stream,
and `onStop` (i.e. the end of a Chromecast session) to (re)set your previous stream.

You may also be interested in `onJoin` (i.e. joining an existing Chromecast session with a new device) or
`onLeave` (i.e. leaving an existing Chromecast session on a device).

### SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | :------: |
|   Yes   |     Yes     |   Yes   |   N/A    |      N/A       |      N/A       |   N/A    |

#### Web SDK

The snippet below has two [sources](pathname:///theoplayer/v10/api-reference/web/interfaces/SourceDescription.html):

1. `senderSource` is intended for playback on your sender device (i.e. your browser)
2. `chromecastSource` is intended for playback on your Chromecast application

The [`ChromecastConnectionCallback`](pathname:///theoplayer/v10/api-reference/web/interfaces/ChromecastConnectionCallback.html) interface is used to:

1. Set the `chromecastSource` when Chromecast playback starts through the `onStart` callback.
2. Revert to the `senderSource` when Chromecast playback stops through the `onStop` callback.

```js
var senderSource = {
  sources: {
    src: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',
    type: 'application/x-mpegurl',
  },
};
var chromecastSource = {
  sources: {
    src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',
    type: 'application/x-mpegurl',
  },
};
player.source = senderSource;
player.cast.chromecast.connectionCallback = {
  onStart: function (source) {
    return chromecastSource;
  },
  onStop: function (source) {
    return senderSource;
  },
  onJoin: function (source) {
    return source;
  },
  onLeave: function (source) {
    return source;
  },
};
```

The `onJoin` and `onLeave` implementations in the above snippet adhere to the default behavior.

#### Android SDK

The snippet below has two [sources](pathname:///theoplayer/v10/api-reference/android/com/theoplayer/android/api/source/SourceDescription.Builder.html):

1. `senderSource` is intended for playback on your sender device (i.e. your Android app)
2. `chromecastSource` is intended for playback on your Chromecast application

The [`setConnectionCallback`](pathname:///theoplayer/v10/api-reference/android/com/theoplayer/android/api/cast/chromecast/Chromecast.html#setConnectionCallback-com.theoplayer.android.api.cast.chromecast.ChromecastConnectionCallback-) method is used to
through the [`THEOplayerView'](pathname:///theoplayer/v10/api-reference/android/com/theoplayer/android/api/THEOplayerView.html) object:

1. Set the `chromecastSource` when Chromecast playback starts through the `onStart` callback.
2. Revert to the `senderSource` when Chromecast playback stops through the `onStop` callback.

```java
SourceDescription senderSource = new SourceDescription.Builder(new TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8").type(SourceType.HLS).build())
        .build();
SourceDescription chromecastSource = new SourceDescription.Builder(new TypedSource.Builder("https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8").type(SourceType.HLS).build())
        .build();
theoPlayerView.getPlayer().setSource(senderSource);
theoPlayerView.getCast().getChromecast().setConnectionCallback(new ChromecastConnectionCallback() {
    @Nullable
    @Override
    public SourceDescription onStart(@Nullable SourceDescription sourceDescription) {
        return chromecastSource;
    }

    @Nullable
    @Override
    public SourceDescription onStop(@Nullable SourceDescription sourceDescription) {
        return senderSource;
    }

    @Nullable
    @Override
    public SourceDescription onJoin(@Nullable SourceDescription sourceDescription) {
        return sourceDescription;
    }

    @Nullable
    @Override
    public SourceDescription onLeave(@Nullable SourceDescription sourceDescription) {
        return sourceDescription;
    }
});
```

The `onJoin` and `onLeave` implementations in the above snippet adhere to the default behavior.

#### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

To achieve this use case on the iOS SDK, you have to leverage the [`ChromecastConnectionDelegate`](<pathname:///theoplayer/v10/api-reference/ios/Protocols/Chromecast_Objc.html#/c:@M@THEOplayerSDK@objc(pl)THEOplayerChromecast(im)setConnectionDelegate:>)
of your [`THEOplayer`](pathname:///theoplayer/v10/api-reference/ios/Classes/THEOplayer.html) object.

The snippet below is an example of how your `ChromecastConnectionDelegate` could look like.
This particular snippet has two [sources](pathname:///theoplayer/v10/api-reference/ios/Classes/SourceDescription.html):

1. `senderSource` is intended for playback on your sender device (i.e. your iOS app)
2. `chromecastSource` is intended for playback on your Chromecast application

The [`ChromecastConnectionCallback`](pathname:///theoplayer/v10/api-reference/web/interfaces/ChromecastConnectionCallback.html) interface is used to:

1. Set the `chromecastSource` when Chromecast playback starts through the `onStart` callback.
2. Revert to the `senderSource` when Chromecast playback stops through the `onStop` callback.

```swift
import UIKit
import THEOplayerSDK

class ChromecastController: ChromecastConnectionDelegate {

    weak var theoplayer : THEOplayer?

    private var senderSource: SourceDescription {
        let typedSource = TypedSource(
            src: "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8",
            type: "application/x-mpegurl"
        )
        return SourceDescription(source: typedSource)
    }

    private var chromecastSource: SourceDescription {
        let typedSource = TypedSource(
            src: "https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)",
            type: "application/dash+xml",
            drm: WidevineDRMConfiguration(licenseAcquisitionURL: "https://amssamples.keydelivery.mediaservices.windows.net/Widevine/?KID=1ab45440-532c-4399-94dc-5c5ad9584bac")
        )
        return SourceDescription(source: typedSource)
    }

    init(theo : THEOplayer) {
        self.theoplayer = theo
        self.theoplayer?.cast?.chromecast?.setConnectionDelegate(self)
    }

    func onStart(sourceDescription: SourceDescription?) -> SourceDescription? {
        return chromecastSource
    }

    func onStop(sourceDescription: SourceDescription?) -> SourceDescription? {
        return senderSource
    }

    func onJoin(sourceDescription: SourceDescription?) -> SourceDescription? {
        return sourceDescription
    }

    func onLeave(sourceDescription: SourceDescription?) -> SourceDescription? {
        return sourceDescription
    }

}
```

The `onJoin` and `onLeave` implementations in the above snippet adhere to the default behavior.

Once you've implemented your `ChromecastConnectionDelegate`, you have to initialize an instance of this near the code of your where
you're setting your `player.source` (e.g. [https://github.com/THEOplayer/samples-ios-sdk/blob/master/Google-Cast/Google_Cast/PlayerViewController.swift](https://github.com/THEOplayer/samples-ios-sdk/blob/master/Google-Cast/Google_Cast/PlayerViewController.swift)).
The snippet below demonstrates this concept:

```swift
...
class PlayerViewController: UIViewController {

    ...
    var chromecastController : ChromecastController!
    var senderSource: SourceDescription {
        let typedSource = TypedSource(
            src: "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8",
            type: "application/x-mpegurl"
        )
        return SourceDescription(source: typedSource)
    }
    ...

    override func viewDidLoad() {

        ...
        player.source = senderSource
        chromecastController = ChromecastController(theo: theoplayer)
        ...

    }

    ...

}
...
```

## Chromecast source API

The Chromecast source API is a straightforward technique to configure a different [`source`](pathname:///theoplayer/v10/api-reference/web/interfaces/SourceDescription.html) to be loaded for Chromecast playback.

This API is unmaintained (and deprecated) as of THEOplayer 2.90.0, and developers should use the [ChromecastConnection API](#chromecastconnection-api) instead.

### SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | :------: |
|   Yes   |     Yes     |   Yes   |   N/A    |      N/A       |      N/A       |   N/A    |

#### Web SDK

The [Chromecast API](pathname:///theoplayer/v10/api-reference/web/interfaces/Chromecast.html) allows you to configure a different source (i.e. [`SourceDescription`](pathname:///theoplayer/v10/api-reference/web/interfaces/SourceDescription.html)) to be Chromecasted.
The snippet below demonstrates this API.

```js
const source = {
  sources: [
    {
      src: '//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8',
      type: 'application/x-mpegurl',
    },
  ],
};
player.cast.chromecast.source = source;
```

#### Android SDK

The [Chromecast API](https://cdn.theoplayer.com/doc/android/2.55.1/com/theoplayer/android/api/cast/chromecast/Chromecast.html#setSource-com.theoplayer.android.api.source.SourceDescription-) allows you to configure a different SourceDescription to be Chromecasted
through the [`Cast`](pathname:///theoplayer/v10/api-reference/android/com/theoplayer/android/api/cast/Cast.html) of your [`THEOplayerView'](pathname:///theoplayer/v10/api-reference/android/com/theoplayer/android/api/THEOplayerView.html) object.

```java
SourceDescription source = new SourceDescription.Builder("//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8").build();
theoPlayerView.getCast().getChromecast().setSource(source);
```

#### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

The [Chromecast API](https://cdn.theoplayer.com/doc/ios/2.55.1/Protocols/Chromecast.html#/s:13THEOplayerSDK10ChromecastP6sourceAA17SourceDescriptionCSgvp) allows you to configure a different SourceDescription to be Chromecasted
through the [`Cast`](pathname:///theoplayer/v10/api-reference/ios/Protocols/Cast.html) instance of your [`THEOplayer`](pathname:///theoplayer/v10/api-reference/ios/Classes/THEOplayer.html) object.

```swift
var theoplayerChromecast = theoplayer.cast?.chromecast
theoplayerChromecast?.source = SourceDescription(
    source: TypedSource(
        src: "https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)",
        type: "application/dash+xml",
        drm: WidevineDRMConfiguration(licenseAcquisitionURL: "https://amssamples.keydelivery.mediaservices.windows.net/Widevine/?KID=1ab45440-532c-4399-94dc-5c5ad9584bac")
    )
)
```
