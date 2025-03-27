# Can we prevent UpNext feature from redirecting

Yes, this is possible. You need to modify the countdownDuration value in your UpNextPanel to Infinity.

The THEOplayer UpNext feature is generally used to play another content or redirect to another page, after a small delay. It is also possible to simply suggest the next content, but never actually redirect to it.

This is done by setting the value of the countdownDuration property of your UpNextPanel interface to Infinity: no countdown will happen, only the play button will appear to go to the video that is up next.

## Resources

The following resources provide more information:

- [API reference](pathname:///theoplayer/v8/api-reference/web/interfaces/UpNextPanel.html#countdownDuration)
- [Demo page – Up Next](https://www.theoplayer.com/theoplayer-demo-up-next)
