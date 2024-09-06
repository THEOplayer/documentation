# How can we track the first play(ing) event?

The question above is commonly asked to assist with the use-cases where the first [`play`](pathname:///theoplayer/v7/api-reference/web/interfaces/PlayerEventMap.html#play) event thrown by THEOplayer for a specific stream needs to be detected. Similar questions are:

- The developer wants to know when a new stream plays for the first time.
- The developer wants to forward a `firstplay` event to an analytics backend.
- The developer has heard of a `firstplay` event, and is interested if THEOplayer provides it.

Although we don't explicitly expose a `firstplay` event, you can implement it yourself, allowing you more control over its logic.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | :------: |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |      N/A       |   Yes    |

## Code examples

The snippets below demonstrate an example implementation of firstplaying.

If the user pauses the stream, and resumes the video player, the event isn't re-thrown. If the user switches to another video, the `firstplaying` event will be thrown once again.
You can also swap out the `playing` event for a `play` event, or any other event for that matter.

##### Web SDK

```js
function firstplaying(event) {
  player.removeEventListener("playing", firstplaying);
  console.log("first play event!", event);
}
player.addEventListener("sourcechange", function () {
  console.log("A new SourceDescription has been set.");
  player.removeEventListener("playing", firstplaying);
  player.addEventListener("playing", firstplaying);
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

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

//work in progress

##### Roku SDK

To track only the first `playing` event we will add a "playing" event and a callback function. We will remove this event listener to make sure that the event callback will only be executed once.

```xml
<?xml version="1.0" encoding="utf-8" ?>
<component name="TestScene" extends="Scene">
    <interface>
        <function name="callbackOnEventPlayerFirstPlaying"/>
        <function name="callbackOnEventPlayerSourcechange"/>
    </interface>

    <script type = "text/brightscript" >

        <![CDATA[

        function Init()
            m.player = m.top.findNode("TestPlayer")
            m.player.configuration = {
              "license": "" ' put the THEOplayer license between apostrophes
            }
            m.player.listener = m.top
            m.player.callFunc("addEventListener", m.player.Event.sourcechange, "callbackOnEventPlayerSourcechange")

            setSource()
            m.player.setFocus(true)
            m.player.callFunc("play")
        end function

        function setSource()
            sourceDescription = {
                "sources": [
                    {
                        "src": "http://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",
                        "type": "application/x-mpegURL"
                    }
                ]
            }
            m.player.source = sourceDescription
            m.player.source.Live = false
            m.player.source.LiveBoundsPauseBehavior = "pause"
        end function

        function callbackOnEventPlayerSourcechange(eventData)
            ? "Event <sourcechange>: "; eventData
            m.player.callFunc("removeEventListener", m.player.Event.playing, "callbackOnEventPlayerFirstPlaying")
            m.player.callFunc("addEventListener", m.player.Event.playing, "callbackOnEventPlayerFirstPlaying")
        end function

        function callbackOnEventPlayerFirstPlaying(eventData)
            m.player.callFunc("removeEventListener", m.player.Event.playing, "callbackOnEventPlayerFirstPlaying")
            ? "Event <firstplaying>: "; eventData
        end function

        ]]>

    </script>

    <children>
	    <THEOsdk:THEOplayer id="TestPlayer"/>
    </children>
</component>
```

## Resources

- [Reference API - play event](pathname:///theoplayer/v7/api-reference/web/interfaces/PlayerEventMap.html#play):
