# MediaTailor

[MediaTailor](https://docs.aws.amazon.com/mediatailor/index.html) is a service that provides scalable ad insertion and channel assembly. It is able to serve targeted ad content to viewers and create linear streams while maintaining broadcast quality in over-the-top (OTT) video applications. It supports HLS and DASH for both VOD and live workflows.

At the moment of writing only linear ads are supported, but it is possible to expand it to non-linear and companion ads as well.

### Web SDK

#### Configuration

There are three requirements to use a MediaTailor stream with THEOplayer:

- Have a THEOplayer build with the `mediatailor` feature flag set.
- The `src` is set to the session initialization URL.
- The integration parameter is set with the value `mediatailor`.

If everything is set up correctly, THEOplayer will play the stream and send the necessary tracking beacons.

```js
const player = new THEOplayer.Player(element, {
    libraryLocation: 'path/to/theoplayer',
    license: 'your-license-here',
    ...
});

player.source = {
    sources: [
        {
            src: '<mediatailorURL>/v1/session/<hashed-account-id>/<origin-id>/<asset-id>',
            integration: 'mediatailor'
        }
    ]
}
```

#### Limitations

The scope of the MediaTailor integration for now is limited to sending the tracking beacons. This encapsulates only the events that can be sent with the default implementation of THEOplayer. For example skipping an ad is not yet supported so the events that correspond to skipping an ad will never occur.

Seeking is only disabled during an ad, no logic is in place for playing an ad if the user _seeked_ past it.

### Android SDK

#### Android SDK

To use a MediaTailor stream with THEOplayer on Android SDK, first import our MediaTailor module dependency in your `build.gradle` file.

```groovy
implementation 'com.theoplayer.theoplayer-sdk-android:core:+'
implementation 'com.theoplayer.theoplayer-sdk-android:integration-ads-mediatailor:+' // add MediaTailor dependency
```

Then, add the MediaTailor integration to the `Player`.

:::tip

If you're using [automatic integrations](../../getting-started/01-sdks/02-android/01-features.md#adding-integrations-automatically), you can skip this step.

:::

```kotlin
val theoplayerView = THEOplayerView(context)
val mediaTailorIntegration = MediaTailorIntegrationFactory.createMediaTailorIntegration(theoPlayerView);
theoplayerView.player.addIntegration(mediaTailorIntegration)
```

Finally, set a [`MediaTailorSource`](pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/source/mediatailor/MediaTailorSource.html) to play.

```kotlin
val mediaTailorSource = MediaTailorSource.Builder()
    .src("<mediatailorURL>/v1/session/<hashed-account-id>/<origin-id>/<asset-id>")
    .build()

theoplayerView.player.source = SourceDescription.Builder()
    .sources(mediaTailorSource)
    .build()
```

#### Legacy Android SDK (4.12.x)

For the Legacy Android SDK (4.12.x), make sure to have a THEOplayer build with the `mediatailor` feature flag set.
And then set a MediaTailorSource to play similar to the Android SDK shown above.

### Legacy iOS/tvOS SDK (4.12.x)

To use a MediaTailor stream with THEOplayer on the iOS SDK, you have to:

- make sure that your SDK build has the `mediatailor` flag enabled (similarly to the other SDKs)
- set a MediaTailorSource to play, as follows

```swift
player.source = SourceDescription(
    source: MediaTailorSource(
        src: "<mediatailorURL>/v1/session/<hashed-account-id>/<origin-id>/<asset-id>",
        type: "application/x-mpegurl"
    )
)
```

Note that the MediaTailor URL must have the same structure as described above (Web SDK). Different URL structures may result in playback errors.
