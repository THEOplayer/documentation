# Why does the player load only one audio track (even though there are several in the manifest)

You may be asking this question if you notice a discrepancy in the number of audio tracks present in the manifest and the audio tracks that you can select from the player UI.

Similar questions may be:

- How to make all audio tracks in of my stream appear in THEOplayer
- Why the player does not return the correct audio tracks?
- Why does the player detect only one of the audio tracks of my manifest?

First of all, a reassuring word: if your manifest is well formed and contains multiple audio tracks, you do not need to do anything to import them all, as the player does this by default.

However, if your audio tracks are missing, it usually means that something in the manifest is wrong. **If the manifest is indeed correct according to specs, this kind of behavior may occur if the video track includes also audio** (even in the presence of separated audio tracks). In this case, the player considers that audio track as primary and ignores all the others.

In other words, when you want to be able to switch between different audio tracks, take care that all of them are included in the manifest separately from the video and that the video track does not include any audio track. This will also result in a slightly faster download time.