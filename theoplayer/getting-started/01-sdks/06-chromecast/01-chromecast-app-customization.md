# Chromecast Application Customization

This article provides information on how to customize the look and feel of a Chromecast [Sender application](https://developers.google.com/cast/glossary#sender) or a Chromecast [Receiver Application](https://developers.google.com/cast/glossary#receiver).
![Casting approaches](../../../assets/img/casting-approaches.png 'Casting approaches')

## Background

This section provides background information on Google, THEOplayer SDKs, Sender apps and Receiver apps. Feel free to skip
directly to the sections on [Customizing a Sender Application](#customizing-a-sender-application) or [Customizing a Receiver application](#customizing-a-receiver-application)
if you are already familiar with these background topics.

### Google, Chromecast and THEOplayer

Google's point of entry to Chromecast is located at [https://developers.google.com/cast/docs/developers](https://developers.google.com/cast/docs/developers). In this article, they write about sender applications and
their three Cast APIs, and about receiver applications and their four options.

#### Sender applications

Google describes three Cast APIs: the Android API, the iOS API and the Web Sender API. The THEOplayer SDKs integrate these Cast APIs and expose a wrapper API for developers to use instead.

1. The THEOplayer Android SDK implements the [Android API](https://developers.google.com/android/reference/com/google/android/gms/cast/package-summary).
2. The THEOplayer iOS SDK implements the [iOS API](https://developers.google.com/cast/docs/reference/ios).
3. The THEOplayer Web SDK implements the [Web Sender API](https://developers.google.com/cast/docs/reference/web_sender).

#### Receiver applications

Google describes four types of receiver applications:

1. [Default Media Receiver](https://developers.google.com/cast/docs/web_receiver#default_media_web_receiver)
2. [Styled Media Receiver](https://developers.google.com/cast/docs/styled_receiver)
3. [Custom Receiver](https://developers.google.com/cast/docs/web_receiver#custom_web_receiver)
4. [Android TV Receiver](https://developers.google.com/cast/docs/android_tv_receiver)

The THEOplayer Chromecast Receiver SDK fits in the category of a "Custom Receiver". You integrate this THEOplayer SDK in your HTML5 Chromecast Receiver application.

### Sender application vs Receiver application

When talking about customizing a Chromecast application, one needs to make a distinction between customizing [a Sender application versus a Receiver application](../../../how-to-guides/03-cast/01-chromecast/00-introduction.md).

A **Chromecast Sender application** is the application on a "sender device" (e.g. smartphone, browser, ...) which initiates
the Chromecast session. You use the Sender application to start (and stop) Chromecast playback, to pause the video or to mute it,
to seek to a different position in the scrub bar, and so on.
The unique UI components related to Chromecast in a Sender application are limited to a Chromecast button which starts/stops a Chromecast session.
The default controls (e.g. play, pause, scrub bar) are used to control the Receiver application.

**In a Sender application, you use either the THEOplayer [Web](https://www.theoplayer.com/sdk/html5), [iOS](https://www.theoplayer.com/sdk/ios) or [Android](https://www.theoplayer.com/sdk/android) SDK.**

A **Chromecast Receiver application** is the application which is loaded on your Chromecast-enabled device (e.g. Chromecast Ultra, Android TV, ...).
The UI of a Receiver application is typically quite simple:

1. When a video is playing, the video is playing fullscreen without any elements overlaying it.
2. When a video is paused, there is timeline indicating the playhead position and an element (e.g. a pause button)
   indicating that the playback is paused. Sometimes, when a video is paused, a poster image (i.e. thumbnail) and some text are shown
   to describe the active content.
3. When an app and/or stream starts to load, you might see a brand logo and/or a spinning wheel.

**In a Receiver application, you use the THEOplayer [Chromecast Receiver SDK](https://www.theoplayer.com/sdk/chromecast).**

## Customizing a Sender application

_If you are using the THEOplayer Web, iOS or Android SDK in your Sender application, confirm that the `chromecast` [module is enabled](../../../faq/53-theoplayer-features-modules.md) for your SDK.
This feature exposes a Chromecast API you can benefit from. Additionally, ensure that you [include the Chromecast library](../../../how-to-guides/03-cast/01-chromecast/06-enable-chromecast-on-the-sender.md)._

_Please refer to
["Connecting from custom Sender applications"](../../../how-to-guides/03-cast/01-chromecast/01-connecting-from-custom-sender-applications.md)
if you are not using THEOplayer's `chromecast` feature._

Generally speaking, there are three types of user interfaces:

1. Default UI: you use THEOplayer's default UI, and you're happy with it.
2. Chromeless UI: you've build a Chromeless UI from scratch on top of THEOplayer.
3. Altering Default UI: you use THEOplayer's default UI, but you've changed some things around. (e.g. different colors, a new button, ....)

### Default UI

THEOplayer automatically inserts a Chromecast button in its default video player UI if you are using THEOplayer's default UI.
![Chromecast button](../../../assets/img/chromecast-active.png 'Chromecast button')
The UI of this button changes when the [Chromecast state](pathname:///theoplayer/v10/api-reference/web/types/CastState.html) changes.
Please see below if you want to alter this default UI.

### Chromeless UI

You are in charge of all UI components if you are using THEOplayer's Chromeless UI.
Typically, you want to insert a Chromecast button, and connect that button with our Cast API to start
(e.g. `player.cast.chromecast.start()`) and stop (`player.cast.chromecast.stop()`) a Chromecast session. Additionally, you might want to change the appearance of this
button when the state of your casting session transitions (e.g. `player.cast.chromecast.addEventListener('statechange', function() {...});`).

- Web: [Chromecast API](pathname:///theoplayer/v10/api-reference/web/interfaces/Chromecast.html), [Cast API](pathname:///theoplayer/v10/api-reference/web/interfaces/VendorCast.html), [Cast Events API](pathname:///theoplayer/v10/api-reference/web/interfaces/VendorCastEventMap.html)
- iOS: [Chromecast API](pathname:///theoplayer/v10/api-reference/ios/Protocols/Chromecast.html), [Chromecast Events API](pathname:///theoplayer/v10/api-reference/ios/ChromeCast%20Events.html#/s:13THEOplayerSDK16StateChangeEventC)
- Android: [Chromecast API](pathname:///theoplayer/v10/api-reference/android/com/theoplayer/android/api/cast/chromecast/Chromecast.html), [Chromecast Events API](pathname:///theoplayer/v10/api-reference/android/com/theoplayer/android/api/event/chromecast/CastStateChangeEvent.html)

Familiarize yourself with the above APIs if you want to change the appearance of your Chromeless UI and its relation to Chromecast.

### Altering Default UI

If you are using THEOplayer's default UI, but want to use your own button instead, then you can hide THEO's default button, and [insert a new one](../../../how-to-guides/11-ui/07-how-to-insert-a-button.md) instead. You also need to use our Cast API described in the above "Chromeless UI" section.

## Customizing a Receiver application

[Three Receiver application set-ups](../../../how-to-guides/03-cast/01-chromecast/00-introduction.md) are common:

1. You connect with THEOplayer's default Receiver application.
2. You connect with a custom Receiver application powered by the THEOplayer Chromecast Receiver SDK.
3. You connect with a custom Receiver application which doesn't contain any THEOplayer SDK or code.

You can provide Chromecast metadata in all three set-ups. Providing [Chromecast metadata](pathname:///theoplayer/v10/api-reference/web/interfaces/SourceDescription.html#metadata) will make your Receiver application show relevant info (e.g. a title, a thumbnail, ...) when
your application is buffering or paused.

### Default Receiver application

If you are connected to THEOplayer's default Receiver application, you cannot modify its appearance.

If you want to change the UI, you need to [connect your sender application with a different Receiver application ID](../../../how-to-guides/03-cast/01-chromecast/01-connecting-from-custom-sender-applications.md).

### Custom Receiver application with THEOplayer Chromecast SDK

You can build a custom Receiver application by using our [Chromecast Receiver SDK](https://www.theoplayer.com/sdk/chromecast).
Once you went through its [Getting Started Guide](../../../getting-started/01-sdks/06-chromecast/00-getting-started.md), you'll notice
that the UI is similar to the default UI. However, through this approach, you have the option to alter the UI as described by the [Getting Started Guide](../../../getting-started/01-sdks/06-chromecast/00-getting-started.md#optional-alter-default-ui).

### Custom Receiver application without THEOplayer Chromecast SDK

You can [connect your sender application with a custom Receiver application](../../../how-to-guides/03-cast/01-chromecast/01-connecting-from-custom-sender-applications.md) which does not use the THEOplayer Chromecast SDK.
Naturally, you're responsibile for the look and feel of this custom Receiver application.

## Conclusion

Identify whether you want to adjust the UI and UX of the Sender application or the Receiver application.

- If it's the Sender application, determine whether you are changing
  a Sender app which leverages the THEOplayer Web, iOS or Android SDK to enable casting.
- If it's the Receiver application, determine whether you are changing our default Receiver application,
  a custom Receiver application using the THEOplayer Chromecast SDK or 3) a custom Receiver application which is not using the THEOplayer Chromecast.

Then, decide which states and which components you want to customize. Finally, identify which THEOplayer APIs are relevant
for your use-cases.

## Notes

- Google describes their Chromecast UX guideliness at https://developers.google.com/cast/docs/ux_guidelines/.
- This article is currently categorized under the "Getting Started" guides of our Chromecast SDK, which is also known as our Chromecast Receiver SDK.
  Naturally: you leverage a Chromecast Receiver SDK in a Chromecast Receiver application. In result, this categorization might be confusing to some readers,
  because we have discussed concepts and APIs which relate to a Sender application.
  However, we do feel that it's valuable to discuss the bigger picture surrounding a Chromecast Receiver SDK, and that includes its relationship
  with a Sender application, and how to customize both.

## Resources

- [Getting started on Chromecast](../../../getting-started/01-sdks/06-chromecast/00-getting-started.md). This article contains sample code. Note that the THEOplayer
  Chromecast SDK also contains a sample Receiver application.
- [Enable Chromecast on the Sender](../../../how-to-guides/03-cast/01-chromecast/06-enable-chromecast-on-the-sender.md)
- [Chromecast Introduction](../../../how-to-guides/03-cast/01-chromecast/00-introduction.md)
- [How to configure a different stream to Chromecast](../../../how-to-guides/03-cast/01-chromecast/03-how-to-configure-to-a-different-stream.md)
