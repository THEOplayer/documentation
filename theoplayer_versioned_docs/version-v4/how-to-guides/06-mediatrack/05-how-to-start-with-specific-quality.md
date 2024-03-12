# How to start with a specific quality?

This question is typically asked because developers want their HLS or MPEG-DASH stream to start with a specific rendition of the manifest. They want to implement this use-case to speed up the time-to-first frame, or to serve a better quality to the customer, or to serve a different quality on different platforms.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   No    |    No    |      Yes       |      N/A       |

## Code examples

##### Web SDK

```js
var player = new THEOplayer.Player(element, playerConfig);
player.videoTracks.addEventListener("addtrack", function (e0) {
  player.videoTracks[0].targetQuality = player.videoTracks[0].qualities[0]; // start with a specific quality
  player.addEventListener("progress", attachABRResetLogic);
});

function attachABRResetLogic() {
  if (player.buffered.length > 0) {
    // switch to normal ABR when THEOplayer buffered beyond 10 seconds
    if (player.buffered.end(player.buffered.length - 1) > 10) {
      player.videoTracks[0].targetQuality = null;
      player.removeEventListener("progress", attachABRResetLogic);
    }
  }
}

player.source = {
  sources: [
    {
      src: "//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8"
    }
  ]
};
```

Use the `targetQuality` property to pass on an array of qualities. THEOplayer will only be able to render qualities belonging to this array through its ABR algorithm. Viewers can still select the quality through the quality selector.

When the `addtrack` event is dispatched, THEOplayer has not yet started buffered, so you can adjust the `targetQuality`. The `targetQuality` property allows you to specify a set of qualities that THEOplayer can use for ABR selection. THEOplayer will have to select the set quality if only one quality is provided. You reset the ABR selection by setting `targetQuality` to null.

##### Android SDK

```java
private Player theoplayer;
private TimeRanges buffered;

theoplayer.getVideoTracks().addEventListener(VideoTrackListEventTypes.ADDTRACK, new EventListener<AddTrackEvent>() {
    @Override
    public void handleEvent(AddTrackEvent addTrackEvent) {
        theoplayer.getVideoTracks().getItem(0).setTargetQuality(theoplayer.getVideoTracks().getItem(0).getQualities().getItem(0));
        theoplayer.addEventListener(PlayerEventTypes.PROGRESS, new EventListener<ProgressEvent>() {
            @Override
            public void handleEvent(ProgressEvent progressEvent) {
                attachABRResetLogic();
            }
        });
    }
});
private void attachABRResetLogic() {
    theoplayer.requestBuffered(result -> buffered = result);
    if (buffered.length() > 0){
        //Switch to normal ABR when THEOplayer buffered beyond 10 seconds
        if (buffered.getEnd(buffered.length() - 1) > 10) {
            theoplayer.getVideoTracks().getItem(0).setTargetQuality(null);
            theoplayer.removeEventListener(PlayerEventTypes.PROGRESS, new EventListener<ProgressEvent>() {
                @Override
                public void handleEvent(ProgressEvent progressEvent) {
                    attachABRResetLogic();
                }
            });
        }
    }
}
```

## Remarks

- This is not possible on iOS (and with DRM streams in MacOS Safari) due to the fact that playback control on the Apple HLS-playback pipeline is very limited.

## Resources

- [MediaTrack API](pathname:///theoplayer/v4/api-reference/web/interfaces/MediaTrack.html)
