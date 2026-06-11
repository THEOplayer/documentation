# THEOplayer Android Comscore Connector

A Comscore analytics connector for use with THEOplayer in Android applications.

## Usage[​](#usage "Direct link to Usage")

### Configuring the Connector[​](#configuring-the-connector "Direct link to Configuring the Connector")

Create the connector by providing the `THEOplayer` instance, a `ComscoreConfiguration` (which contains your publisher id), and the `ComscoreMetadata` of the first source you will set to the player (you can change it dynamically throughout the entire lifecycle of the connector):

```kotlin
val comscoreConfiguration = ComscoreConfiguration(
    publisherId = "<your publisher ID here>", // Can be a test or production key.
    applicationName = "THEOplayer Demo",
    userConsent = "1",
    childDirected = false,
    secureTransmission = true,
    usagePropertiesAutoUpdateMode = 1,
    debug = true
)
val metadata = ComscoreMetaData(
    mediaType = ComscoreMediaType.LONG_FORM_ON_DEMAND,
    uniqueId = "testuniqueId",
    length = 634,
    stationTitle = "THEOTV",
    programTitle = "Big Buck Bunny",
    episodeTitle = "Intro",
    genreName = "Animation",
    classifyAsAudioStream = false,
    c3 = "c3value",
    c4 = "c4value",
    c6 = "c6value",
    stationCode = null,
    networkAffiliate = null,
    publisherName = null,
    programId = null,
    episodeId = null,
    episodeSeasonNumber = null,
    episodeNumber = null,
    genreId = null,
    carryTvAdvertisementLoad = null,
    classifyAsCompleteEpisode = null,
    dateOfProduction = null,
    timeOfProduction = null,
    dateOfTvAiring = null,
    timeOfTvAiring = null,
    dateOfDigitalAiring = null,
    timeOfDigitalAiring = null,
    feedType = null,
    deliveryMode = null,
    deliverySubscriptionType = null,
    deliveryComposition = null,
    deliveryAdvertisementCapability = null,
    mediaFormat = null,
    distributionModel = null,
    playlistTitle = null,
    totalSegments = null,
    clipUrl = null,
    videoDimension = null,
    customLabels = emptyMap(),
)

val comscore = ComscoreConnector(this, theoplayerView.player, comscoreConfiguration, metadata)

val playerConfig = THEOplayerConfig.Builder()
    .analytics(comscore)
    .build()

val theoplayerView = THEOplayerView(this)
theoplayerView.config = playerConfig

val theoplayer = theoplayerView.theoplayer
theoplayer.source = SourceDescription.Builder()
    .sources("YOUR_SOURCE_URL_HERE")
    .build()

theoplayerView.onCreatePlayer { player ->
    // Initialize Comscore connector
    comscore.init(player)
}

```

### Passing Metadata Dynamically[​](#passing-metadata-dynamically "Direct link to Passing Metadata Dynamically")

The connector allows passing or updating the current asset's metadata at any time:

```kotlin
comscoreConnector.update(ComscoreMetaData())

```

### ComscoreMetadata Fields[​](#comscoremetadata-fields "Direct link to ComscoreMetadata Fields")

Based on the `ComscoreMetaData` type, you can tell which fields are mandatory and which aren't. Note that this is purely for the integration to work correctly. Depending on the Comscore solution you are using, different fields are required/optional. The mandatory fields in the `ComscoreMetadata` type are the ones that are mandatory for all three Comscore solutions:

* Video Metrix (V)
* Cross Platform Product Suite (X)
* Cross Media Audience Measurement (C)

| Property                          | Required | Optional |
| --------------------------------- | -------- | -------- |
| `mediaType`                       | All      |          |
| `uniqueId`                        | All      |          |
| `length`                          | All      |          |
| `c3`                              | V        |          |
| `c4`                              | V        |          |
| `c6`                              | V        |          |
| `stationTitle`                    | All      |          |
| `stationCode`                     |          | All      |
| `networkAffiliate`                |          | All      |
| `publisherName`                   | X C      | V        |
| `programTitle`                    | All      |          |
| `programId`                       |          | V C      |
| `episodeTitle`                    | All      |          |
| `episodeId`                       |          | X C      |
| `episodeSeasonNumber`             | X C      |          |
| `episodeNumber`                   | X C      |          |
| `genreName`                       | All      |          |
| `genreId`                         |          | All      |
| `carryTvAdvertisementLoad`        | X        |          |
| `classifyAsCompleteEpisode`       | X        |          |
| `dateOfProduction`                |          | C        |
| `timeOfProduction`                |          | C        |
| `dateOfTvAiring`                  | X C      |          |
| `timeOfTvAiring`                  |          | X C      |
| `dateOfDigitalAiring`             | X C      |          |
| `timeOfDigitalAiring`             |          | X C      |
| `feedType`                        | X        |          |
| `classifyAsAudioStream`           | All      |          |
| `deliveryMode`                    |          | All      |
| `deliverySubscriptionType`        |          | All      |
| `deliveryComposition`             |          | All      |
| `deliveryAdvertisementCapability` |          | All      |
| `mediaFormat`                     |          | All      |
| `distributionModel`               |          | All      |
| `playlistTitle`                   |          | C        |
| `totalSegments`                   |          | V C      |
| `clipUrl`                         |          | V C      |
| `videoDimension`                  |          | C        |
| `customLabels`                    |          | All      |
