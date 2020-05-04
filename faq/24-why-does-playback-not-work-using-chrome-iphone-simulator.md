# Why does the playback not work when using the Chrome iPhone/iPad simulator

You might need an answer to this question if you are testing your page using the Chrome iPhone/iPad simulator and notice that, reloading the page, the video player stops working (even though the ads, if any, are displayed correctly) and some errors are displayed in the console.

Similar questions are:

- hy does the playback not work when using Mozilla in Responsive Design Mode?
- Why does the playback not work when using the Edge emulator to test my page on other platforms?
- Why does the playback not work when testing device-specific viewports with the browser dev tools?

The simple answer is that this occurs because the video player gets confused between the user agent (set as iOS during the simulation) and the browser actually in use. This does not imply that there is any problem with the video player. In fact, when the tested page will be accessed by an actual iOS device, the video player will work fine, in absence of other (unrelated) issues.

The same behavior is to be expected in similar tests, that is to say when a platform is emulated on another and they do not share the same playback logic of the native video element. 

Some more details:

If you use Chrome + iOS simulator, your user-agent will change to iOS/Safari. THEOplayer detects this new user-agent, and because it's iOS it'll think that the MSE API is not available, and that they need to use the playback logic of the native video element.  However, you're still on Chrome, so this alternate native iOS playback logic is not available. These circumstances lead to playback failure. It works for ads because they typically do not use the HLS protocol, so we do not have to leverage MSE.

It is not advisable to use (or rely on) the Chrome + iOS simulator mode to test anything else than the viewmode. The native APIs which iOS offers are not available in this mode, so it's not really a useful testing mode.