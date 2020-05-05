# How to track ID3 cues / tags?

Thequestion above is commonly asked by the developers who want to introduce a certain behavior depending on the metadata contained by the ID3 cues. For example, the developer wants

- to schedule advertisements dynamically by using information passed on by the ID3 metadata.
- to overlay certain text on top of the player (e.g. the score of a football match).
- ...

[ID3](https://en.wikipedia.org/wiki/ID3) is a type of metadata which can be inserted in HTTP livestreams. Once an ID3 cue is inserted, it'll be added to a THEOplayer [TextTrack](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.texttrack.md).
The demo at [https://demo.theoplayer.com/audio-id3-metadata](https://demo.theoplayer.com/audio-id3-metadata) demonstrates a usage of ID3 metadata. Just before the song changes, an `exit` event will be dispatched, the song information (title, album, etc.) is contained within this `exit` event, and can be used to update the UI.

### Table of Contents
- [SDKs](#sdks)
- [Tracking ID3](#tracking-id3)
- [Code examples](#code-examples)
  - [Listening for timed metadata events](#listening-for-timed-metadata-events)
  - [Track the exit event](#track-the-exit-event)
- [Sample application](#sample-application)
- [Resources](#resources)


## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |  Yes  |   Yes  |  Yes |  Yes  |    N/A      |

## Tracking ID3

This guide will show a couple of examples of tracking ID3 cues / tags, including:

- how to listen for timed metadata events 
- how to track the *exit* event

## Code examples

### Listening for timed metadata events

Below you can find an example of how timed metadata events can be captured when using THEOplayer.

##### Web SDK

```js
var player = theoplayer.player(0);
player.textTracks.addEventListener('addtrack', function (addTrackEvent) {
    var track = addTrackEvent.track;
    // assert track.kind === "metadata"

    track.addEventListener('cuechange', function (cueChangeEvent) {
        // here you can access the cue and other properties of the track and display the metadata to the outside
    });
});
```

##### Android SDK

```java
EventListener<CueChangeEvent> cueChangeListener = (CueChangeEvent event) -> {
    event.getTextTrack().getCues();
};

EventListener<AddTrackEvent> handleTrackCreation = (AddTrackEvent event) -> {
    event.getTrack().addEventListener(TextTrackEventTypes.CUECHANGE, cueChangeListener);
};

this.tpv.getPlayer().getTextTracks().addEventListener(TextTrackListEventTypes.ADDTRACK, handleTrackCreation);
```

##### iOS SDK

```swift
let cueChangeListener = { (event: CueChangeEvent) in
    // do something with the cue
}

let handleTrackCreation = { (event: AddTrackEvent) in
    if let textTrack = event.track as? TextTrack {
        _ = textTrack.addEventListener(type: TextTrackEventTypes.CUE_CHANGE, listener: cueChangeListener)
    }   
}

_ = player.textTracks.addEventListener(type: TextTrackListEventTypes.ADD_TRACK, listener: handleTrackCreation)
```

### Track the exit event

The snippet below explains how you correctly track the `exit` event, which is part of the [TextTrack API](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.texttrack.md). The `exit` event maps to the moment in time when the ID3 cue is relevant.

##### Web SDK

```js
function exitListener(e2) {
    // log exit event
    console.log(e2);
}
function handleTrackCreation (e0) {
    e0.track.cues.forEach(function (cue) {
        cue.addEventListener('exit', exitListener)
    });
    
    // detect cues being added to the track
    e0.track.addEventListener('addcue', function(e1){
        // detect a cue being shown from a track
        e1.cue.addEventListener('exit', exitListener);
        
    })	
}
player.textTracks.addEventListener('addtrack', handleTrackCreation);
```

##### Android SDK

```java
final EventListener<ExitCueEvent> exitListener = new EventListener<ExitCueEvent>() {
    @Override
    public void handleEvent(ExitCueEvent exitCueEvent) {
        System.out.println("exitCueEvent: " + exitCueEvent.getCue().getContent());

    }
};
EventListener<AddTrackEvent> handleTrackCreation = new EventListener<AddTrackEvent>() {
    @Override
    public void handleEvent(AddTrackEvent addTrackEvent) {
        addTrackEvent.getTrack().addEventListener(TextTrackEventTypes.EXITCUE, exitListener);

    }
};
tpv.getPlayer().getTextTracks().addEventListener(TextTrackListEventTypes.ADDTRACK, handleTrackCreation);
```

##### iOS SDK

```swift
let exitListener = { (event: ExitCueEvent) in
    // do something with the cue
}

let handleTrackCreation = { (event: AddTrackEvent) in
    if let textTrack = event.track as? TextTrack {
        _ = textTrack.addEventListener(type: TextTrackEventTypes.EXIT_CUE, listener: exitListener)
    }
}

_ = player.textTracks.addEventListener(type: TextTrackListEventTypes.ADD_TRACK, listener: handleTrackCreation)
```

## Sample application

The demo below illustrates the use of ID3 in production.

- Demo: [https://demo.theoplayer.com/audio-id3-metadata](https://demo.theoplayer.com/audio-id3-metadata)

## Resources

- [Reference API - TextTrack](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.texttrack.md)
- [http://id3.org/](http://id3.org/): ID3.org Home
- [https://en.wikipedia.org/wiki/ID3](https://en.wikipedia.org/wiki/ID3): Wikipedia - ID3
- [https://dev.w3.org/html5/html-sourcing-inband-tracks/](https://dev.w3.org/html5/html-sourcing-inband-tracks/): External resource - Sourcing In-band Media Resource Tracks from Media Containers into HTML