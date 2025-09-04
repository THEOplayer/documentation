# Is it possible to hide/disable the Google IMA UI?

You may ask this question if you are trying to determine what controls are visible to the user during ands and want therefore to use your own UI elements.

Unfortunately Google IMA provides very limited control over the UI. The only thing that is possible to change/hide from THEOplayer is the countdown: to do so, you can configure as `*showCountdown: false*` in the AdsConfiguration ([related documentation](pathname:///theoplayer/v10/api-reference/web/classes/Player.html)).

Using other methods, like CSS or JavaScript, to modify the Google IMA UI elements styles will also not work due to:

- the usual higher specificity of the _iframe_ CSS
- the security restrictions on XSS.
