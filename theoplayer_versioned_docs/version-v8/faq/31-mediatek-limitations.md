# MediaTek limitations

This page overviews a list of known issues caused by the MediaTek chipset.

## 1. Switching to fullscreen halts playback for approximately 10 seconds

The MediaTek decoder seems lackluster at handling a transition to fullscreen when **experimental rendering** is enabled because THEOplayer uses a separate Android Activity for fullscreen. Using the default rendering pipeline does not trigger this issue. A workaround is doing fullscreen without detaching the SurfaceView from the window.

### Why does THEOplayerView use a separate activity for fullscreen?

THEOplayerView uses a separate Activity for fullscreen so that the fullscreen view is completely isolated from the Activity the THEOplayerView is in.
The Activity has its own orientation, window settings, and back button behavior.
By using a separate Activity, we can leave those settings and the view hierarchy intact in the Activity in which the THEOplayerView is embedded.

A downside of this in case of experimental rendering is that we need to move the SurfaceView that holds the Surface on which video is rendered.
This, however, means that the Surface is destroyed and a new one is created.
On newer devices, this is normally no problem because the decoder is decoupled from the Surface.
When the Surface is destroyed, a new one can be attached to the same decoder.
On devices with an API lower than 23 (and some other devices which bug) however, the decoder can not change the Surface on which it draws without re-initialization.
This means that on older and some buggy devices, switching to fullscreen will make the video hang until the next keyframe is reached in the stream.

### Solution: Fullscreen without detaching the SurfaceView from the window

If an implementer does not want the Surface to be destroyed when going fullscreen, the implementer needs to implement this themself to fit within the Activity.

A few things are needed for this:

1. FullscreenCoupling needs to be disabled (with `getTPV().getSettings().setFullScreenOrientationCoupled(false)`).
2. If the UI is enabled, the fullscreen button needs to be hidden or overwritten. This needs to be done with [custom CSS and/or custom JavaScript](../../version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).
3. Orientation needs to be handled in the Activity.
   3.1 To change the orientation of the Activity, [`setRequestedOrientation`](<https://developer.android.com/reference/android/app/Activity.html#setRequestedOrientation(int)>) has to be called on the Activity or the Activity needs to be allowed to rotate. Allowing the activity to rotate means that the android:screenOrientation property in the [manifest](https://developer.android.com/guide/topics/manifest/manifest-intro) needs to be set to multiple values or not set.
   3.2 To make sure that the Activity is not recreated on an orientationchange,android:configChanges field in the manifest need to include "orientation|screenSize".
   3.3 To detect the change, the onConfigurationChanged method needs to be overridden in the Activity. In the implementation the orientation can be checked and fullscreen can be initiated or stopped depending on it.
4. To make the THEOplayerView fill the whole Activity without moving the view, the THEOplayerView and all of its parents view's width and height layout parameters need to be set to "match_parent" and they all need to be the first child-view (with a non-zero surface area).
5. To hide the navigation buttons and status bar, the Activity should change the window and visibility flags. this can be done with:
   5.1 getWindow().getDecorView().[setSystemUiVisibility](<https://developer.android.com/reference/android/view/View#setSystemUiVisibility(int)>)(SYSTEM_UI_FLAG_LOW_PROFILE|SYSTEM_UI_FLAG_FULLSCREEN|SYSTEM_UI_FLAG_LAYOUT_STABLE| SYSTEM_UI_FLAG_IMMERSIVE_STICKY|SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION|SYSTEM_UI_FLAG_HIDE_NAVIGATION);
   5.2 getWindow().[setFlags](<https://developer.android.com/reference/android/view/Window.html#setFlags(int,%20int)>)(FLAG_FULLSCREEN, FLAG_FULLSCREEN);
6. To let the player exit fullscreen on a back button press instead of stopping the Activity, the onBackPressed method of the Activity should be overridden with the desired behavior.
7. When going back from fullscreen, the original settings for the window and back button behavior need to be set back to desired values.
