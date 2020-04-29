# Pass subtitle selection on to Chromecast

Currently it is intended behaviour that when you start casting the player to a chromecast device the subtitle selection setting isn't carried over. A new player is generated with the SourceConfiguration of the sender, but not any adjustments. A client might not believe in our philosophy and request it gets send as well

*PS: That might change in the future when Product decides it should be carried over.*

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |  N/A |      N/A       |      N/A       |

## Solution

Should this not be the expected behaviour of the player, then the customer can work around the default behaviour by adding the following eventlisteners to the player.

The code adds an event on textTracks 'change'. Whenever the subtitles change, this event is called and stores the current active texttrack in 'currentTextTrack' by iterating over the textTracks array and checking wether .mode is on 'showing'. Once a Chromecast session is created, the code will check if the ID of the textTracks in the new player corresponds with the ID of the stored currentTextTrack. If so, it will activate that textTrack.

## Code Examples

This example explains how you pass the current active subtitle track to the Chromecast session:

##### Web SDK

```js
var currentTextTrack;

player.textTracks.addEventListener('change', function(){
    for(var t in player.textTracks){
        if (player.textTracks[t].mode === 'showing') {
            currentTextTrack = player.textTracks[t];
        }
    }
});

player.cast.chromecast.addEventListener('statechange', (event) => {
    if(event.state === 'connected'){
        player.addEventListener('playing', function(){
            for(var tt in player.textTracks){
                if (player.textTracks[tt].id === currentTextTrack.id) {
                    player.textTracks[tt].mode = 'showing';
                }
            }
        });
    }
})
``` 

##### iOS SDK

TO BE TESTED
```swift
var currentTextTrack: TextTrack?
        
    self.theoplayer.textTracks.addEventListener(type: TextTrackListEventTypes.CHANGE) { (result) in
        for i in 0..<self.theoplayer.textTracks.count {
        if self.theoplayer.textTracks[i].mode == .showing {
            currentTextTrack = self.theoplayer.textTracks[i]
        }
        }
    }
        
    self.theoplayer.cast?.chromecast?.addEventListener(type: ChromecastEventTypes.STATE_CHANGE, listener: { (result) in
    if result.state == .connected {
            self.theoplayer.addEventListener(type: PlayerEventTypes.PLAYING) { (result) in
                for i in 0..<self.theoplayer.textTracks.count {
                    var tt = self.theoplayer.textTracks[i]
                        if tt.id == currentTextTrack?.id {
                        tt.mode = .showing
                        }
                    }
                }
            }
            
        })
}
```

##### Android SDK

TO BE TESTED

```java
final TextTrack currentTextTrack;

tpv.getPlayer().getTextTracks().addEventListener(TextTrackListEventTypes.TRACKLISTCHANGE, new EventListener<TrackListChangeEvent>() {
    @Override
    public void handleEvent(TrackListChangeEvent trackListChangeEvent) {
        for (TextTrack t : tpv.getPlayer().getTextTracks()) {
            if (t.getMode() == TextTrackMode.SHOWING) {
                currentTextTrack = t;
            }
        }
    }
});

tpv.getCast().getChromecast().addEventListener(ChromecastEventTypes.STATECHANGE, new EventListener<CastStateChangeEvent>() {
    @Override
    public void handleEvent(CastStateChangeEvent castStateChangeEvent) {
        if (tpv.getCast().getChromecast().getState() == PlayerCastState.CONNECTED) {
            tpv.getPlayer().addEventListener(PlayerEventTypes.PLAYING, new EventListener<PlayingEvent>() {
                @Override
                public void handleEvent(PlayingEvent playingEvent) {
                    for (TextTrack t : tpv.getPlayer().getTextTracks()) {
                        if (t.getId() == currentTextTrack.getId()) {
                            t.setMode(TextTrackMode.SHOWING);
                        }
                    }
                }
            });
        }
    }
});
```