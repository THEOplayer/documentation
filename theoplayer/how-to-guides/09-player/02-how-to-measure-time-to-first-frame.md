# How to measure time-to-first-frame?

The question above is related to the following questions:

- How do I measure my start-up time?

To measure the time-to-first-frame, you need to measure the time difference between the `play` event and the `playing` event.

##### Web SDK

```js
var playEventRegisteredAt;
function playingEventHandler(event) {
  player.removeEventListener("playing", playingEventHandler);
  var timeToFirstFrame = Date.now() - playEventRegisteredAt;
  console.log("Time-to-first-frame:", timeToFirstFrame);
}
function playEventHandler(event) {
  player.removeEventListener("play", playEventHandler);
  playEventRegisteredAt = Date.now();
}
player.addEventListener("playing", playingEventHandler);
player.addEventListener("play", playEventHandler);
```

##### Android SDK

```java
long playEventRegisteredAt = 0; // global variable
...
EventListener<PlayingEvent> playingEventHandler = new EventListener<PlayingEvent>() {
    @Override
    public void handleEvent(PlayingEvent playingEvent) {
        tpv.getPlayer().removeEventListener(PlayerEventTypes.PLAYING, this);
        long timeToFirstFrame = System.currentTimeMillis() - playEventRegisteredAt;
        System.out.println("Time-to-first-frame: " + timeToFirstFrame);
    }
};
EventListener<PlayEvent> playEventHandler = new EventListener<PlayEvent>() {
    @Override
    public void handleEvent(PlayEvent playgEvent) {
        tpv.getPlayer().removeEventListener(PlayerEventTypes.PLAY, this);
        playEventRegisteredAt = System.currentTimeMillis();
    }
};
tpv.getPlayer().addEventListener(PlayerEventTypes.PLAYING, playingEventHandler);
tpv.getPlayer().addEventListener(PlayerEventTypes.PLAY, playEventHandler);
```

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

```swift
var playEventRegisteredAt: Date!
...
playingeventlistener = theoplayer.addEventListener(type:
PlayerEventTypes.PLAYING, listener: playingEventHandler)

playeventlistener = theoplayer.addEventListener(type:
PlayerEventTypes.PLAY, listener: playEventHandler)

func playingEventHandler (event : PlayingEvent) {
        theoplayer.removeEventListener(type: PlayerEventTypes.PLAY,  listener: playingeventlistener);

        let components = NSCalendar.current.dateComponents([.second], from: playEventRegisteredAt, to: Date())

        let timeToFirstFrame = components.second

        print("Time-to-first-frame:", timeToFirstFrame!,"second(s)");
}

func playEventHandler(event :PlayEvent) {
        theoplayer.removeEventListener(type: PlayerEventTypes.PLAY,  listener: playeventlistener)
        playEventRegisteredAt = Date()
}
```

##### Roku SDK

To measure the time to the first frame, we will use [roTimespan](https://developer.roku.com/en-gb/docs/references/brightscript/interfaces/iftimespan.md). Starting measurement will take place just before setting the source of the player and finishing measurement will occur in "playing" event callback.

```xml
<?xml version="1.0" encoding="utf-8" ?>
<component name="TestScene" extends="Scene">
    <interface>
        <function name="callbackOnEventPlayerPlay"/>
        <function name="callbackOnEventPlayerPlaying"/>
    </interface>

    <script type = "text/brightscript" >

        <![CDATA[

        function Init()
            m.player = m.top.findNode("TestPlayer")
            m.player.configuration = {
              "license": "" ' put the THEOplayer license between apostrophes
            }
            m.player.listener = m.top
            m.player.callFunc("addEventListener", m.player.Event.play, "callbackOnEventPlayerPlay")
            m.player.callFunc("addEventListener", m.player.Event.playing, "callbackOnEventPlayerPlaying")
            m._ts = CreateObject("roTimespan")

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

        function callbackOnEventPlayerPlay(eventData)
            ? "Event <play>: "; eventData
            m._ts.Mark()
        end function

        function callbackOnEventPlayerPlaying(eventData)
            ? "Event <playing>: "; eventData
            ? "Time-to-first-frame: "; m._ts.TotalMilliseconds()
        end function

        ]]>

    </script>

    <children>
	    <THEOsdk:THEOplayer id="TestPlayer"/>
    </children>
</component>
```
