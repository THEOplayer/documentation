# How can we track the first play(ing) event?

The question above is commonly asked to assist with the use-cases where the first [`play`](https://docs.theoplayer.com/api-reference/web/theoplayer.playereventmap.md#play) event thrown by THEOplayer for a specific stream needs to be detected. Similar questions are:

- The developer wants to know when a new stream plays for the first time.
- The developer wants to forward a `firstplay` event to an analytics backend.
- The developer has heard of a `firstplay` event, and is interested if THEOplayer provides it.

Although we don't explicitly expose a `firstplay` event, you can implement it yourself, allowing you more control over its logic.

### Table of Contents
- [SDKs](#sdks)
- [Code examples](#code-examples)
- [Resources](#resources)

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |  Yes  |   Yes  | Yes  |      Yes    |      N/A      |

## Code examples

The snippets below demonstrate an example implementation of firstplaying.

If the user pauses the stream, and resumes the video player, the event isn't re-thrown. If the user switches to another video, the `firstplaying` event will be thrown once again.
You can also swap out the `playing` event for a `play` event, or any other event for that matter.

##### Web SDK

```js
function firstplaying(event) {
    player.removeEventListener('playing', firstplaying);
    console.log("first play event!", event);
}
player.addEventListener('sourcechange', function() {
    console.log("A new SourceDescription has been set.");
    player.removeEventListener('playing', firstplaying);
    player.addEventListener('playing', firstplaying);
});
// OR
// player.addEventListener('loadedmetadata', function() {
//    console.log("A new stream has been detected.");
//    player.removeEventListener('playing', firstplaying);
//    player.addEventListener('playing', firstplaying);
// });
```

##### Android SDK

```java
final EventListener<PlayingEvent> firstplaying = new EventListener<PlayingEvent>() {
    @Override
    public void handleEvent(PlayingEvent playingEvent) {
        tpv.getPlayer().removeEventListener(PlayerEventTypes.PLAYING, this);
        System.out.println("First playing event!");
    }
};

tpv.getPlayer().addEventListener(PlayerEventTypes.LOADEDMETADATA, new EventListener<LoadedMetadataEvent>() {
    @Override
    public void handleEvent(LoadedMetadataEvent loadedMetadataEvent) {
        System.out.println("A new stream has been detected.");
        tpv.getPlayer().removeEventListener(PlayerEventTypes.PLAYING, firstplaying);
        tpv.getPlayer().addEventListener(PlayerEventTypes.PLAYING, firstplaying);
    }
});
```

##### iOS SDK

//work in progress

## Resources

- [Reference API - play event](https://docs.theoplayer.com/api-reference/web/theoplayer.playereventmap.md#play): 