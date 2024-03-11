# What does the error message 'can only be initiated by a user gesture' imply? Can I still force the desired action

You may get this error if you are trying to have the player execute an action without it being initiated by the user. A typical example is going fullscreen or automatically starting playback (often on mobile).

Related questions are:

- Why can’t I set the player to fullscreen mode on screenrotation? (Related error message: “Failed to execute 'requestFullScreen' on 'Element': API can only be initiated by a user gesture.”)
- Why is an error generated if I want to automatically start playback when certain conditions are met (Related error message: DOMException: play() can only be initiated by a user gesture)

The short answer is no, you cannot (and should not) force an action that gets this kind of error message: this is a block implemented by the browser to protect the user.

The details:

In some cases, the browser deems that a certain behavior cannot be initiated automatically and needs instead to be started by the user (or user action). This happens because these behaviors may be perceived as bad or harmful by a user, if automated. In other words, this limitation is implemented by the browser to protect the user from (for example) invasive pop ups, advertisement, etc., as well as from more serious threats to a good and safe web surfing.

To our knowledge, there is no way to force the browser to ignore this error, and you probably shouldn't want to do so, for the above-mentioned reasons. Therefore, if you incur in this situation you may want to find an alternative way to achieve the desired result (or take the hint from the browser and reconsider whether what you want to achieve is appropriate for your use case and good for the user).

Update 7/12/2018

This behavior is common on devices and on Safari.

Chrome 71, released a few days ago, also introduces the need for user interaction to go fullscreen.
