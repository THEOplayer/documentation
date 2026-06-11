# Debugging

This how-to guide describes how to debug a Chromecast Receiver application using the THEOplayer Web SDK.

## Step-by-step guide[​](#step-by-step-guide "Direct link to Step-by-step guide")

1. Ensure that you are on the same network as your Chromecast device.
2. Publish a new device at <https://cast.google.com/u/1/publish/#/devices> by clicking "ADD NEW DEVICE". ![Chromecast debugging 1](/documentation/pr-preview/pr-690/assets/images/chromecast_debugging_1-0040e1d6eeca0a6b5501cef46a031989.png "Chromecast debugging 1")
3. Wait until the status is "Ready For Testing". ![Chromecast debugging 2](/documentation/pr-preview/pr-690/assets/images/chromecast_debugging_2-c399ddb9c096aab91c30293a8a9e9f50.png "Chromecast debugging 2")
4. Find out what the IP-address of your Chromecast device is. (Tip: Use the Google Home app to look this up.)
5. Go to chrome://inspect and add the IP-address (plus port 9222) of your Chromecast device.
6. Start your Chromecast session.
7. Go to chrome://inspect and wait until your Chromecast device appears in the list.
8. Press "inspect". ![Chromecast debugging 3](/documentation/pr-preview/pr-690/assets/images/chromecast_debugging_3-ef34a49f03eb6830f56bfdaf20a04fb5.png "Chromecast debugging 3")
9. You should now have access to the Chrome Developer Tools of your Chromecast Receiver application. If you are familiar with debugging through Chrome's Developer Tools, you can look into issues, try out new CSS styles and monitor network traffic. ![Chromecast debugging 4](/documentation/pr-preview/pr-690/assets/images/chromecast_debugging_4-17c946d842f3a40de725316bce17a9f7.png "Chromecast debugging 4")

## Related articles[​](#related-articles "Direct link to Related articles")

* [Pass subtitle selection on to Chromecast](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/cast/chromecast/pass-subtitle-section-on-to-chromecast.md)

* [Chromecast SDK Setup](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/chromecast/getting-started.md)

* [How to configure a different stream to Chromecast](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/cast/chromecast/how-to-configure-to-a-different-stream.md)
