# How do you know when a stream or an advertisement is playing?

This short how-to guide explains how to determine programmatically when the player is playing and whether it is playing a stream or a client-side advertisement. This may be useful if you need to determine different behavior (or UI) relating to the 2 mentioned options.

The question above is related to the following questions:

- How do you know when a video plays?
- How do I know whether the `playing` event is triggered for an advertisement, or for the main content/stream?

### Table of Contents

- [SDKs](#sdks)
- [How to detect an ad playing](#how-to-detect-an-ad-playing)
  - [Code examples](#code-examples)
- [Remarks](#remarks)
- [Resources](#resources)

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |      N/A       |

## How to detect an ad playing

There are certainly different ways to do so: it is enough to have a look at your player; or at the Network tab of your dev tools; or even directly at the manifest. Usually, the UI also has telltale signs. But there are many cases in which you may want to determine this programmatically, for example if you are to apply a different UI to your player depending on this factor.

### Code examples

You can use the `playing` event to know when content (or an ad) starts playing. Its event handler is the correct scope to check whether an advertisement is playing through the [`player.ads.playing`](pathname:///theoplayer/v6/api-reference/web/interfaces/Ads.html#playing) property.

Let's see some code examples for the various SDKs.

##### Web SDK

```js
function playingEventHandler(event) {
  var adIsPlaying = player.ads.playing;
  console.log("PLAYING", adIsPlaying ? "Advertisement" : "Content", event);
}
player.addEventListener("playing", playingEventHandler);
```

##### Android SDK

```java
final EventListener<PlayingEvent> playingEventHandler = new EventListener<PlayingEvent>() {
    @Override
    public void handleEvent(PlayingEvent playingEvent) {

        boolean adIsPlaying = tpv.getPlayer().getAds().isPlaying();
        System.out.println("PLAYING " + (adIsPlaying ? "Advertisement" : "Content"));
    }
};
tpv.getPlayer().addEventListener(PlayerEventTypes.PLAYING, playingEventHandler);
```

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

```swift
self.eventListener = self.theoplayer.addEventListener(type: PlayerEventTypes.PLAYING) { [weak self] event in
                                      self.theoplayer?.ads.requestPlaying() { (result, _) in
                                      print("player.ads.playing = ", result!)
                                      }
                              }
```

## Remarks

- This approach helps you detect when client-side ads are playing, but it will not work for server-side ads.

- Please refer to [How can we track the first play(ing) event?](../../how-to-guides/09-player/03-how-can-we-track-the-first-playing-event.md) to read more about capturing the first `playing` event.

## Resources

- [Reference API - Ads.playing property](pathname:///theoplayer/v6/api-reference/web/interfaces/Ads.html#playing)
- [Reference API - playing property](pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#playing)
