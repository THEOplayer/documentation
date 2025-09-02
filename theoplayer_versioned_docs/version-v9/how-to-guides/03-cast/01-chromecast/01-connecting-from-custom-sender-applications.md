# Connecting from custom Sender applications

## General

In general, the following flow should be followed:

1. Set up Google Cast context with correct receiver application ID.
2. Connect to Chromecast device.
3. Set up Google Cast MediaInfo object with correct contentID and contentType.
4. Send Google Cast LoadRequest with a serialized THEOplayer SourceDescription object as a key in the customData of the LoadRequest. So something like `{sourceDescription: ${SourceDescription you want to cast}}`.

Let's discuss this in more detail for custom [Web](#web), [Android](#android) and [iOS](#ios) applications.

### Web

The following web page should suffice:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"></script>
    <script>
      window['__onGCastApiAvailable'] = function (isAvailable) {
        if (isAvailable) {
          cast.framework.CastContext.getInstance().setOptions({
            receiverApplicationId: '$YOUR_APP_ID', // Adapt this
            autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED, // And this if you want to
          });
        }
      };
    </script>
    <script>
      function startCasting(sourceDescription) {
        var castSession = cast.framework.CastContext.getInstance().getCurrentSession();
        var mediaInfo = new chrome.cast.media.MediaInfo(sourceDescription.sources[0].src, sourceDescription.sources[0].type);
        var request = new chrome.cast.media.LoadRequest(mediaInfo);
        request.customData = { sourceDescription: sourceDescription };
        castSession.loadMedia(request).then(
          function () {
            console.log('Load succeed');
          },
          function (errorCode) {
            console.log('Error code: ' + errorCode);
          }
        );
        var player = new cast.framework.RemotePlayer();
        var playerController = new cast.framework.RemotePlayerController(player);
        return playerController;
      }
    </script>
  </head>
  <body></body>
</html>
```

Load this in Google Chrome, connect to a Chromecast device, and then you can do the following:

```js
startCasting({
  sources: [
    {
      src: 'https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)',
      type: 'application/dash+xml',
      contentProtection: {
        widevine: {
          licenseAcquisitionURL: 'https://amssamples.keydelivery.mediaservices.windows.net/Widevine/?KID=1ab45440-532c-4399-94dc-5c5ad9584bac',
        },
      },
    },
  ],
});
```

This will start playback.

### Android

First, set up your `CastOptionsProvider`:

```java
package com.yourcomp.chromecastSender;

import android.content.Context;

import com.google.android.gms.cast.framework.CastOptions;
import com.google.android.gms.cast.framework.OptionsProvider;
import com.google.android.gms.cast.framework.SessionProvider;

import java.util.List;

public class THEOCastOptionsProvider implements OptionsProvider {

    public static String DEFAULT_APP_ID = "8E80B9CE";

    @Override
    public CastOptions getCastOptions(Context context) {
        return new CastOptions.Builder()
                .setReceiverApplicationId(DEFAULT_APP_ID)
                .build();
    }

    @Override
    public List<SessionProvider> getAdditionalSessionProviders(Context context) {
        return null;
    }
}
```

And link to it in your `AndroidManifest.xml` file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.yourcomp.chromecastSenderApp">
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />

    <application
    ...
        <meta-data
            android:name="com.google.android.gms.cast.framework.OPTIONS_PROVIDER_CLASS_NAME"
            android:value="com.yourcomp.chromecastSender.CastOptionsProvider" />
    </application>

</manifest>
```

Fill in the correct class name by replacing `com.yourcomp.chromecastSender.CastOptionsProvider`!
You can change the `DEFAULT_APP_ID` to direct to your own Chromecast app. Next you can actually do the casting like the following:

```java
package com.yourcomp.chromecastSender;

import android.app.Activity;
import android.support.v7.app.MediaRouteChooserDialog;

import com.google.android.gms.cast.MediaInfo;
import com.google.android.gms.cast.MediaLoadOptions;
import com.google.android.gms.cast.framework.CastContext;
import com.google.android.gms.cast.framework.CastSession;
import com.google.android.gms.cast.framework.SessionManagerListener;

import org.json.JSONException;
import org.json.JSONObject;

public class ChromecastSender {
    public ChromecastSender() {
    }

    public void sendSourceToChromecast(Activity context) throws JSONException {
        CastContext castContext = CastContext.getSharedInstance(context);
        showCastChooserDialog(context, castContext);

        JSONObject sourceDescriptionJson = new JSONObject("{"sourceDescription":{"sources":[{"src":"https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)","type":"application/dash+xml","contentProtection":{"widevine":{"licenseAcquisitionURL":"https://amssamples.keydelivery.mediaservices.windows.net/Widevine/?KID=1ab45440-532c-4399-94dc-5c5ad9584bac"}}}]}}");
        MediaLoadOptions mediaLoadOptions = new MediaLoadOptions.Builder().setCustomData(sourceDescriptionJson).build();
        MediaInfo mediaInfo = new MediaInfo.Builder("https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)").setContentType("application/dash+xml")
                .build();

        castContext.getSessionManager().addSessionManagerListener(new SessionManagerListener<CastSession>() {
            @Override
            public void onSessionStarting(CastSession castSession) {

            }

            @Override
            public void onSessionStarted(CastSession castSession, String s) {

                castSession.getRemoteMediaClient().load(mediaInfo,mediaLoadOptions);
            }

            @Override
            public void onSessionStartFailed(CastSession castSession, int i) {

            }

            @Override
            public void onSessionEnding(CastSession castSession) {

            }

            @Override
            public void onSessionEnded(CastSession castSession, int i) {

            }

            @Override
            public void onSessionResuming(CastSession castSession, String s) {

            }

            @Override
            public void onSessionResumed(CastSession castSession, boolean b) {

            }

            @Override
            public void onSessionResumeFailed(CastSession castSession, int i) {

            }

            @Override
            public void onSessionSuspended(CastSession castSession, int i) {

            }
        }, CastSession.class);


    }

    private void showCastChooserDialog(Activity context, CastContext castContext) {
        MediaRouteChooserDialog mediaRouteChooserDialog = new MediaRouteChooserDialog(context);
        mediaRouteChooserDialog.setRouteSelector(castContext.getMergedSelector());
        mediaRouteChooserDialog.show();
    }
}
```

Instantiate this class and then connect to a device.
This will start casting the source listed in the class to the Chromecast receiver.

### iOS

When launching your application, start your Google Cast context using the following snippet:

```swift
let options = GCKCastOptions(receiverApplicationID: "8E80B9CE")
GCKCastContext.setSharedInstanceWith(options)
```

Once this is done, it’s necessary to start a session.
This is usually done by creating a cast button somewhere in your UI using `GCKUICastButton`, which when pressed opens up a dialog allowing you to select a device and start a session.

Once a session is started, you can start playing back content.
The THEOplayer Chromecast receiver is capable of playing back content easily using the default Google Cast APIs (with `GCKMediaInformationBuilder` and `LoadRequest`).
However, to use the more advanced functionality, you will need to pass in custom data in the [`GCKMediaLoadOptions`](https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_media_load_options) object.

This custom data follows the structure of `SourceDescription` as used in the web version of THEOplayer, except we have to use `NSDictionary` notation.

```swift
let metadata = GCKMediaMetadata()
metadata.setString("Title", forKey: kGCKMetadataKeyTitle)
metadata.setString("Subtitle", forKey: kGCKMetadataKeySubtitle)

let contentURL = "https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)"
let contentID = "622b189f-ec39-43f2-93a2-201ac4e31ce1"

let informationBuilder = GCKMediaInformationBuilder(contentURL: contentURL)
informationBuilder.contentID = contentID
informationBuilder.streamType = .unknown
informationBuilder.contentType = "application/dash+xml"
informationBuilder.streamDuration = 0.0
informationBuilder.mediaTracks = nil
informationBuilder.metadata = metadata
let information = informationBuilder.build()

let sourceDescription = [
    "sources": [
        [
            "src": "https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)",
            "type": "application/dash+xml",
            "contentProtection": [
                "widevine": [
                    "licenseAcquisitionURL": "https://amssamples.keydelivery.mediaservices.windows.net/Widevine/?KID=1ab45440-532c-4399-94dc-5c5ad9584bac"
                ]
            ]
        ]
    ]
]

let loadOptions = GCKMediaLoadOptions()
loadOptions.autoplay = true
loadOptions.playPosition = 0.0
loadOptions.customData = ["sourceDescription": sourceDescription]

castSession!.remoteMediaClient?.loadMedia(mediaInfo, with: loadOptions)
```

Note that you should also adapt the contentID and contentType in the arguments for the `GCKMediaInformation` initializer.

You have to use the Chromecast API to implement additional logic such as pausing the Chromecast Receiver application, fetching the video's progress, ...

## Related articles

- [How can we track the first play(ing) event?](../../09-player/03-how-can-we-track-the-first-playing-event.md)

- [How to start with a specific quality?](../../06-mediatrack/05-how-to-start-with-specific-quality.md)

- [Pass subtitle selection on to Chromecast](05-pass-subtitle-section-on-to-chromecast.md)

- [How to know whether a live stream is playing?](../../../faq/14-how-to-know-when-livestream-is-playing.md)

- [Getting started on Chromecast](../../../getting-started/01-sdks/06-chromecast/00-getting-started.md)
