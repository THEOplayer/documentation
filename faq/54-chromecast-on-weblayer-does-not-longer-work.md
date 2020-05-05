# Chromecast on my webplayer does not work any longer despite no change in my implementation

This or a similar question may be asked in case your Chromecast stops working. There may indeed be different causes why your Chromecast is not working, especially if

- you changed or updated something in your implementation (Steps: review which change broke the feature)
- it's the first time you are trying it out (Steps: make sure your license includes the chromecast feature; have a look at our online documentation)
- you are trying to connect to a custom Chromecast Receiver application (Steps: check our online setup documentation and this article; check this article for a guide to debug your custom Chromecast Receiver application)

(Note: if the error is not found, please log a ticket into our service desk)

> However, in this article we are not covering all possible causes for a broken Chromecast: we are here referring specifically to a previously working implementation that has not been changed, and on which the Chromecast icon is no longer appearing.

So, if there have been no changes on your page but the Chromecast icon in your webplayer does not appear any longer, you might want to check that:

- The Chromecast device is connected and on the same network as the sender webplayer
- If on Chrome version 72.0.3626.81 or superior, you are casting over https (not on http)

The latest version of chrome (72.0.3626.81),  does indeed no longer allow to cast over http, but this will work properly over https.