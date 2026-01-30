# Customizing the UI: vertical volume slider

This article provides information regarding the implementation of a vertical volume slider instead of the default horizontal one.

**Please note that the following page is meant as a general example and need in all cases to be further personalised. The aim is to show you the process of implementing a vertical volume slider.**

**In other words, this is a first step in a work in progress as it does not yet account for color and aspect customization, as well as for a series of other small details.**

There is currently no ready-made option in THEOplayer for changing the orientation of the volume slider with a simple parameter. However, good results can be achieved with a [custom button]([http://demo.theoplayer.com/adding-buttons-text-overlay-to-theoplayer](https://www.theoplayer.com/theoplayer-demo-adding-buttons-to-the-ui-with-custom-logic)).

Notes about the current example:

- it has been successfully tested on major browsers (Chrome, Firefox, Safari) but no complete investigation has been performed. In Edge the slider still does not appear correctly and needs some more CSS tinkering.
- it has been successfully tested in several conditions (fullscreen and inline presentation mode and on different resolutions). However, it still needs testing in your specific implementation and use case.
- The aspect of the current volume slider differs depending on the browser: we encourage you to replace it with your favorite one and customize it
- The volume icon changes when the player is muted, but otherwise do not reflect volume increases/decreases.
- When the player is muted, the slider and the aria values do not go to 0 yet
