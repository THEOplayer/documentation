# Is it possible to have multiple player instances play at the same time

Yes, this is possible, provided there are enough bandwidth and RAM for this to work (considering both server and client side). Although we don’t explicitly advise against this, we see how this could not be an ideal solution for the viewers. Please also keep in mind that this incurs into some limitations.

If your use case reckons on having multiple player instances play at the same time, this is indeed possible. In addition to the concerns expressed above, some precautions are to be considered. In fact, you may want to:

- find an alternative solution for mobile devices and in case of slow connection or low RAM, not to aggravate the user experience
- set to 0 the volume of all players (or all except one), to avoid cacophony
- consider strategies to activate and pause player instances when they are not used (e.g.: when they are out of the visible portion of the screen) to reduce RAM and bandwidth consumption
- check whether your use case can be achieved with gif replacing some of the player instances, especially in the case of short loop videos (e.g.: used as icons or to give a brief preview of your content).

One other thing to take into account are the possible platform/browser limitations.

From iOS-Specific Considerations:

> Currently, all devices running iOS are limited to playback of a single audio or video stream at any time. Playing more than one video—side by side, partly overlapping, or completely overlaid—is not currently supported on iOS devices. Playing multiple simultaneous audio streams is also not supported. You can change the audio or video source dynamically, however.

## Remarks

It is also worth mentioning that iOS loads a maximum of 16 (non-simultaneous) videos on a single web page and then gives a black display for any additional one. The page documenting this has disappeared (fall 2019), though, so this may have changed (or be changed) in newer iOS versions.

## Resources

The following resources provide more information:

- https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#//apple_ref/doc/uid/TP40009523-CH5-SW1
