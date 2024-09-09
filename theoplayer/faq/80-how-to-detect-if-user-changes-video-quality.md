# How to detect if the user changes the video quality

It is possible to distinguish between when the quality is changed by ABR or by the user and, in the latter case, which quality has been selected.

This can be easily achieved listening to the `targetqualitychanged` event ([documentation](pathname:///theoplayer/v8/api-reference/web/interfaces/TargetQualityChangedEvent.html)) such as in the snippet below:
```js   
player.videoTracks[0].addEventListener('targetqualitychanged', (e)=>{  
 let selectedTrack = e.qualities[0];
});
```  

**The possible cases**
* <u>ABR changes the quality being played</u>: this event is not fired
* <u>the user selects a specific quality</u>: an Object describing the quality is returned: the `height` and `bandwidth` properties may be checked to distinguish it from the other qualities
* <u>the user restores ABR</u>: `undefined` is returned

**Notes**
* The event returns an Array because the implementer may also use the targetQuality feature to select a subset of the available qualities to limit ABR to those qualities. If this is part of your use case, the snippet above might need to be tweaked to account for that case (e.g.: filter it out).
* when resetting the player.source, the videoTracks object is also reset, so the event will need to be appended again
