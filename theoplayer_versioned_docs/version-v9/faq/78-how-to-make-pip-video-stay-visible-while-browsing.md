# What PiP options to use to make the video stay visible while browsing or on other applications

When it comes to Picture-in-Picture (PiP), there are different options, each with its advantages and disadvantages. To have the floating video remain visible during browsing, you need an out-of-app PiP, but not all features are available (or the same) everywhere.  
The following gives a short general description of the most commonly used options.

## THEOplayer PiP

[This guide](../how-to-guides/07-miscellaneous/07-picture-in-picture.md) will help you get started with THEOplayer PiP in your implementation.  
Highlights:

- <u>Pros</u>: easily configured within the playerConfig; it will automatically trigger when the visible video portion is below the declared threshold; the pause/resume behaviour with a click on any part of the video is maintained; CSAI ads and subtitles are correctly rendered in the floating window
- <u>Cons</u>: the floating player can't be resized at runtime and it sticks to its predefined position; it is in-app, meaning that it won't stay visible if you browse to other tabs or applications

## Native PiP

The [documentation available here](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API) describes the API and you can easily get it working with the described methods.  
Highlights:

- <u>Pros</u>: the user is in control of when the feature is active; this is out-of-app, meaning that the floating video element can be resized and moved, and it stays visible while browsing other tabs or apps.
- <u>Cons</u>: this requires a user action to be triggered; CSAI ads and subtitles may not be rendered in the floating video; resetting the source while in PiP may need additional logic for correct handling; it is not supported on all platforms (e.g.: Firefox and old versions of Safari, see [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API#browser_compatibility)); different browsers may have a somewhat different UI in the floating video;

## Firefox PiP

Firefox has its own version of PiP, which includes by default a button on the video element. [More information](https://support.mozilla.org/en-US/kb/about-picture-picture-firefox).  
Highlights:

- pros and cons are mainly the same as for the native PiP, although the UI is different
- as this is a native Firefox feature, the button and context menu option to enable PiP cannot be hidden by the implementer. The users can, however, decide in their settings if the button will be visible for them.
