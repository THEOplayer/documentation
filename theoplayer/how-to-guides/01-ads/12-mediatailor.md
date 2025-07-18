# MediaTailor

[AWS Elemental MediaTailor](https://docs.aws.amazon.com/mediatailor/index.html) is a service that provides scalable ad insertion and channel assembly. It is able to serve targeted ad content to viewers and create linear streams while maintaining broadcast quality in over-the-top (OTT) video applications. It supports HLS and DASH for both VOD and live workflows.

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

Optionally, you can pass parameters regarding e.g. session data and device type by using the `adsParams` property, as
described in the [MediaTailor documentation](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-reporting-client-side.html#ad-reporting-client-side-enabling).

```js
player.source = {
  sources: [
    {
      src: '...',
      integration: 'mediatailor',
      adsParams: {
        param1: 'value1', // key is not case sensitive
        param2: 'value2', // Values can contain spaces. For example, 'value 2' is an allowed value.
      },
    },
  ],
};
```

#### Limitations

The scope of the MediaTailor integration for now is limited to sending the tracking beacons. This encapsulates only the events that can be sent with the default implementation of THEOplayer. For example skipping an ad is not yet supported so the events that correspond to skipping an ad will never occur.

Seeking is only disabled during an ad, no logic is in place for playing an ad if the user _seeked_ past it.

### Android SDK

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

Finally, set a [`MediaTailorSource`](pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/source/mediatailor/MediaTailorSource.html) to play.

```kotlin
val mediaTailorSource = MediaTailorSource(src = "<mediatailorURL>/v1/session/<hashed-account-id>/<origin-id>/<asset-id>")

theoplayerView.player.source = SourceDescription(listOf(mediaTailorSource))

// or using the Builder pattern

val mediaTailorSource = MediaTailorSource
    .Builder("<mediatailorURL>/v1/session/<hashed-account-id>/<origin-id>/<asset-id>")
    .build()

theoplayerView.player.source = SourceDescription
    .Builder(mediaTailorSource)
    .build()
```

Optionally, you can pass parameters regarding e.g. session data and device type by using the `adsParams` property, as
described in the [MediaTailor documentation](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-reporting-client-side.html#ad-reporting-client-side-enabling).

```kotlin
val adsParams = emptyMap<String, String>().toMutableMap()
adsParams["param1"] = "value1"
adsParams["param2"] = "value 2"
val mediaTailorSource = MediaTailorSource(
    src = "<mediatailorURL>/v1/session/<hashed-account-id>/<origin-id>/<asset-id>",
    adParams = adsParams    // Note the deprecated parameter name
)

// or using the Builder pattern

val mediaTailorSource = MediaTailorSource
    .Builder("<mediatailorURL>/v1/session/<hashed-account-id>/<origin-id>/<asset-id>")
    .adsParams(adsParams)
    .build()
```

:::note Deprecated

The source definition currently still uses the deprecated `adParams` property. This will be
replaced by the `adsParams` property in a future version.

:::
