# How to measure time-to-first-frame?

The question above is related to the following questions:

- How do I measure the time-to-first-frame?
- How do I measure my start-up time?

To measure the time-to-first-frame, you need to measure the time difference between the play event and the playing event.

##### Web SDK

```js
var playEventRegisteredAt;
function playingEventHandler(event) {
    player.removeEventListener('playing', playingEventHandler);
    var timeToFirstFrame = Date.now() - playEventRegisteredAt;
    console.log("Time-to-first-frame:", timeToFirstFrame);
}
function playEventHandler(event) {
    player.removeEventListener('play', playEventHandler);
    playEventRegisteredAt = Date.now();
}
player.addEventListener('playing', playingEventHandler);
player.addEventListener('play', playEventHandler);
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

##### iOS SDK

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