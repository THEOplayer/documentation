# Is it possible to hide/disable the google-IMA UI?

You may ask this question if you are trying to determine what controls are visible to the user during ands and want therefore to use your own UI elements.

Unfortunately google-IMA provides very limited control over the UI. The only thing that is possible to change/hide from THEOplayer is the countdown: to do so, you can configure as `*showCountdown: false*` in the AdsConfiguration ([related documentation](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.player.md)).

Using other methods, like CSS or Javascript, to modify the google-IMA UI elements styles will also not work due to:

- the usual higher specificity of the *iframe* CSS 
- the security restrictions on XSS.