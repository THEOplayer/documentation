# How to fix Android DRM in Chrome 74

This page is created to give a guideline on how to fix Android DRM in Chrome 74.

**ORIGIN**: A general issue occurred, affecting playback of DRM content on Android native (THEOplayer Android SDK). According to our findings, the issue appeared with a recent Chromium release which contains a bug causing issues with EME (Widevine) usage in WebView [Chromium Issue 947286: Missing mojo bindings when using EME in WebView](https://bugs.chromium.org/p/chromium/issues/detail?id=947286&q=component%3AInternals%3EMedia%3EEncrypted%20&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified). THEOplayer Web/Mobile Web/iOS should not be affected by this issue.

## Solution (Workaround)
To make sure Android DRM streams do play, you will have to force enable the customWebView in the **Android SDK minapi16 build**. By default the customWebView is selected if your android version is below Lollipop or our customWebView is better suited than the built in one.

1. Request a 2.60.0 beta release. 
   1. DO NOTE: this solution will have an impact on the library size of your app. That aside, this workaround should according to our tests work fine as far as playback of DRM content is concerned, and we think it should be considered as a viable interim solution until the Chromium bug has been resolved.
2. Make sure you are using the Android SDK minapi16 build
3. Force to use the customWebView:
`THEOplayerGlobal.getSharedInstance(context).getWebViewSettings().forceCustomWebView(true);`