# Introduction

THEOplayer and Uplynk are partners in the streaming industry. The [Uplynk Platform](https://www.uplynk.com/) offers services like encoding, transcoding, server-side ad-insertion, a CDN and more.

> Uplynk was previously known as EdgeIO or Verizon Media. The iOS and Android connector will refer to the new name which is Uplynk.

Uplynk offers services which can enhance the API, UI and UX of video players and applications. The most popular services are called Preplay, Ping and Asset Info. THEOplayer integrates these services so that developers and viewers can benefit from them.

For example,

* Viewers can skip over ads;
* Viewers can see when an ad is playing (and stopping);
* Developers can define the behavior when viewers try to seek over an ad;
* Developers can query metadata to render a playlist in their application.

A live demo of THEOplayer's integration of Uplynk on the Web is available [here](https://cdn.theoplayer.com/demos/verizon-media/index.html).

Once the connector is added to your project, you can import it like so:

```kotlin
import com.theoplayer.android.connector.uplynk.UplynkConnector

```

To instantiate the connector, we first need to create a configuration for it, to describe how the connector should be behave when it comes to Ads:

```kotlin
val uplynkConfiguration = UplynkConfiguration(defaultSkipOffset: ..., onSeekOverAd: ...)

```

> `defaultSkipOffset` describes how many seconds the user has to wait before an ad is skippable. `onSeekOverAd` controls how the connector behaves when seeking over ads. There are three values: `PLAY_ALL`, `PLAY_LAST` and `PLAY_NONE`. The first option forces playback of all the unwatched ads before the seek point. `PLAY_LAST` forces playback of the last ad before the seek point.

We can now instantiate the `UplynkConnector` provided that you have an available `THEOplayer` instance:

```kotlin
val uplynkConnector = UplynkConnector(theoplayerView = yourTHEOplayer, uplynkConfiguration = uplynkConfiguration)

```

For more information on the connector and available APIs, continue to read on the pages below.

* [Preplay](/documentation/pr-preview/pr-690/theoplayer/connectors/android/uplynk/preplay.md): this article provides information on how to configure a Uplynk source.
* [Ads](/documentation/pr-preview/pr-690/theoplayer/connectors/android/uplynk/ads.md): this article provides information on which APIs can be leveraged to track and enhance the ad-viewing experience.
* [Ping](/documentation/pr-preview/pr-690/theoplayer/connectors/android/uplynk/ping.md): this article provides information on how to leverage the Ping service and which THEOplayer APIs you should use.
