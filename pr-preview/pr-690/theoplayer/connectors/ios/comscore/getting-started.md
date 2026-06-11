# THEOPlayer 🤝 Comscore

THEOplayer-Connector-Comscore provides an integration between the THEOplayerSDK and ComScore.

## Installation[​](#installation "Direct link to Installation")

### [Cocoapods](https://guides.cocoapods.org/using/getting-started.html#getting-started)[​](#cocoapods "Direct link to cocoapods")

1. Create a Podfile if you don't already have one. From the root of your project directory, run the following command: `pod init`
2. To your Podfile, add links to the registry of Cocoapods: `source 'https://cdn.cocoapods.org/'`. If this fails, bypass their CDN by using `source 'https://github.com/CocoaPods/Specs.git'`
3. To your Podfile, add the connector pods that you want to use in your app: `pod 'THEOplayer-Connector-Comscore'`
4. Install the pods using `pod install` , then open your `.xcworkspace` file to see the project in Xcode.

To support custom feature builds of THEOplayerSDK perform the following steps:

1. Clone this repository to your computer.
2. Use a [local override](https://guides.cocoapods.org/using/the-podfile.html#using-the-files-from-a-folder-local-to-the-machine) of the `THEOplayerSDK-basic` pod by adding the following line to your projects Podfile: `pod 'THEOplayerSDK-basic', :path => 'iOS-Connector/Helpers/TheoPod'` and make sure the path points to the [TheoPod folder](https://github.com/THEOplayer/iOS-Connector/blob/-/Helpers/TheoPod).

## Usage[​](#usage "Direct link to Usage")

Import the `THEOplayerConnectorComscore` module

```swift
import THEOplayerConnectorComscore

```

Create a ComScoreConfiguration that contains your publisherId (also referred to as customer or c2 id), app name, an indication of whether the user has granted his/her consent for tracking, an adIdProcessor (if you want to extract and manipulate ad id's that will be reported to ComScore, by default we use THEOplayerSDK.Ad.id) and a debugging flag (for extra logging) :

```swift
let configuration = ComScoreConfiguration(
    publisherId: "<your id>",
    applicationName: "<your application name>",
    usagePropertiesAutoUpdateMode: .foregroundOnly,
    userConsent: .granted,
    adIdProcessor: nil,
    debug: true
)

```

Create a `ComscoreConnector` that uses this `configuration`, your `THEOplayer` instance and a valid `ComScoreMetadata` instance for the first content you will load to the player. You can change the metadata dynamically later on if necessary:

```swift
let connector = ComscoreConnector(
    configuration: configuration,
    player: yourTHEOplayer,
    metadata: ComScoreMetadata(
        mediaType: .shortFormOnDemand,
        uniqueId: "0123ABC",
        length: 596,
        stationTitle: "THEO TV",
        programTitle: "Big Buck Bunny",
        episodeTitle: "Example Title",
        genreName: "animation",
        classifyAsAudioStream: false)
)

```

Note that if you are using Google IMA connector, you must make sure it's registered before you initialize the `ComscoreConnector`. Otherwise it will fail to hook into the ad related events.

## Which metadata do I need to provide?[​](#which-metadata-do-i-need-to-provide "Direct link to Which metadata do I need to provide?")

### ComscoreMetadata fields[​](#comscoremetadata-fields "Direct link to ComscoreMetadata fields")

Based on the `ComScoreMetadata` constructor, you can tell which fields are mandatory and which aren't. Note that this is purely for the integration to work correctly. Depending on the Comscore solution you are using, different fields are required/optional. The mandatory fields in the `ComScoreMetadata` type are the ones that are mandatory for all three Comscore solutions:

* Video Metrix (V)
* Cross Platform Product Suite (X)
* Cross Media Audience Measurement (C)

| Property                           | Required | Optional |
| ---------------------------------- | -------- | -------- |
| `mediaType`                        | All      |          |
| `uniqueId`                         | All      |          |
| `length`                           | All      |          |
| `c3?`                              | V        |          |
| `c4?`                              | V        |          |
| `c6?`                              | V        |          |
| `stationTitle`                     | All      |          |
| `stationCode?`                     |          | All      |
| `networkAffiliate?`                |          | All      |
| `publisherName?`                   | X C      | V        |
| `programTitle`                     | All      |          |
| `programId?`                       |          | V C      |
| `episodeTitle`                     | All      |          |
| `episodeId?`                       |          | X C      |
| `episodeSeasonNumber?`             | X C      |          |
| `episodeNumber?`                   | X C      |          |
| `genreName`                        | All      |          |
| `genreId?`                         |          | All      |
| `carryTvAdvertisementLoad?`        | X        |          |
| `classifyAsCompleteEpisode?`       | X        |          |
| `dateOfProduction?`                |          | C        |
| `timeOfProduction?`                |          | C        |
| `dateOfTvAiring?`                  | X C      |          |
| `timeOfTvAiring?`                  |          | X C      |
| `dateOfDigitalAiring?`             | X C      |          |
| `timeOfDigitalAiring?`             |          | X C      |
| `feedType?`                        | X        |          |
| `classifyAsAudioStream`            | Al       |          |
| `deliveryMode?`                    |          | All      |
| `deliverySubscriptionType?`        |          | All      |
| `deliveryComposition?`             |          | All      |
| `deliveryAdvertisementCapability?` |          | All      |
| `mediaFormat?`                     |          | All      |
| `distributionModel?`               |          | All      |
| `playlistTitle?`                   |          | C        |
| `totalSegments?`                   |          | V C      |
| `clipUrl?`                         |          | V C      |
| `videoDimension?`                  |          | C        |
| `customLabels?`                    |          | All      |
