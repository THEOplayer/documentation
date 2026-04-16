# Custom Server Side Ad Insertion

THEOplayer provides a way to integrate with third-party advertisement providers,
and have them report their ads and ad-related events through the THEOplayer APIs.

## Android SDK

### Prerequisites

Your THEOplayer SDK needs to be on version 7.6.0 or higher.

### Integration ID

To make use of the custom server side ad insertion, first you need an integration ID which will identify the provided sources and ads to the specific ad provider.

### ServerSideAdIntegrationFactory

You would also need to register a `ServerSideAdIntegrationFactory` that will receive a `ServerSideAdIntegrationController`.
The controller can be used to create the THEOplayer `AdBreak`/`Ad` objects using the `AdBreakInit`/`AdInit` data.
Additionally, it can be used to keep the player's state up-to-date such as when an ad begins or ends.

The `ServerSideAdIntegrationFactory` requires an implementation of the `ServerSideAdIntegrationHandler` interface.
The handler will provide few callbacks that can be overridden which allows you to setup and clear the integration as needed.

A concrete implementation can be found [in the Yospace Connector](https://github.com/THEOplayer/android-connector/blob/master/connectors/yospace/src/main/java/com/theoplayer/android/connector/yospace/internal/YospaceAdIntegration.kt).

Meanwhile, an empty implementation would look like below. Details to follow.

```kotlin
player.ads.registerServerSideIntegration("integrationID") { controller ->
    object : ServerSideAdIntegrationHandler {

        override suspend fun setSource(source: SourceDescription): SourceDescription {
            return super.setSource(source)
        }

        override fun skipAd(ad: Ad) {
            super.skipAd(ad)
        }

        override suspend fun resetSource() {
            super.resetSource()
        }

        override suspend fun destroy() {
            super.destroy()
        }
    }
}
```

#### Setting a Source

When a new source is loaded into the player the `setSource(source: SourceDescription)` callback is triggered.
It allows the integration to transform the source description, e.g. by calling an external service to replace the content URL (`TypedSource.src`),
or by adding a fixed pre-roll linear ad to the list of ads (`SourceDescription.ads`).

#### Skipping an Ad

When an ad is requested to be skipped, the `skipAd(ad: Ad)` is called.
At this point the controller should call its own `skipAd()` method.

#### Resetting a Source

Before a new source is loaded into the player, or before the player is destroyed, `resetSource()` is triggered.
This allows the integration to clean up any source-specific resources, such as scheduled ads or pending HTTP requests.

#### Destroying the player

When the player is destroyed, the `destroy()` is called.
This allows the integration to clean up any resources, such as UI views or event listeners.

#### Creating Ad objects

When the advertisement provider reports an ad, an `AdBreak` and an `Ad` object should be created using
`createAdBreak(props: AdBreakInit)` and `createAd(props: AdInit, adBreak: AdBreak?)` methods respectively from the controller.
For example, for a preroll `AdBreak` containing 2 advertisements it would be:

```kotlin
val adBreak = controller.createAdBreak(AdBreakInit(timeOffset = 0))

val firstAdInit = AdInit(
    type = "linear",
    skipOffset = 5,
    id = "first_ad_id",
    duration = 10,
    clickThrough = first_ad_click_through_url,
    resourceURI = first_ad_resource_url
)
val firstAd = controller.createAd(firstAdInit, adBreak)

val secondAdInit = AdInit(
    type = "linear",
    skipOffset = 5,
    id = "second_ad_id",
    duration = 10,
    clickThrough = second_ad_click_through_url,
    resourceURI = second_ad_resource_url
)
val secondAd = controller.createAd(secondAdInit, adBreak)
```

#### Playing an Ad

When an Ad begins the playback, the controller must inform the player by calling `beginAd(ad: Ad)`, this will trigger the relevant AdBreak and Ad events.

Additionally, during the playback of the Ad, calling `updateAdProgress(ad: Ad, progress: Double)` is needed to keep the player in sync with the progress.

Finally, when the playback of the Ad is completed, `endAd(ad: Ad)` should be called to notify about it.

### CustomSsaiDescriptionSerializer

To hold the configuration parameters specific to your integration, you can create a new class that inherits from `CustomSsaiDescription`.
This allows it to be set on a `TypedSource` through [`TypedSource.Builder.ssai()`](<pathname:///theoplayer/v10/api-reference/android/com/theoplayer/android/api/source/TypedSource.Builder.html#ssai(com.theoplayer.android.api.source.ssai.SsaiDescription)>).
Then, register a `CustomSsaiDescriptionSerializer` using the integration ID and provide a way to serialize/deserialize the new `CustomSsaiDescription`.

Below is an example of a [YoSpace integration](https://github.com/THEOplayer/android-connector/tree/master/connectors/yospace) showing `YospaceSsaiDescription` extending `CustomSsaiDescription`:

```kotlin
data class YospaceSsaiDescription constructor(
    /**
     * The type of the requested stream.
     *
     * Default: [YospaceStreamType.LIVE]
     */
    val streamType: YospaceStreamType = YospaceStreamType.LIVE,
    /**
     * Custom properties to set when initializing the Yospace session.
     */
    val sessionProperties: Session.SessionProperties = Session.SessionProperties()
) : CustomSsaiDescription() {
    override val customIntegration = YospaceConnector.INTEGRATION_ID
}
```

And then, the implementation of the `CustomSsaiDescriptionSerializer` specific for YoSpace:

```kotlin
class YospaceSsaiDescriptionSerializer : CustomSsaiDescriptionSerializer {
    override fun fromJson(json: String): YospaceSsaiDescription {
        return Json.decodeFromString(json)
    }

    override fun toJson(value: CustomSsaiDescription): String {
        return Json.encodeToString(value)
    }
}
```

Finally, registering the `YospaceSsaiDescriptionSerializer`:

```kotlin
CustomSsaiDescriptionRegistry.register(YospaceConnector.INTEGRATION_ID, YospaceSsaiDescriptionSerializer())
```

:::note

Registering the `CustomSsaiDescriptionSerializer` should happen before registering the `ServerSideAdIntegrationFactory`.

:::
