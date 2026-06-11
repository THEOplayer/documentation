# comscore-connector-web

The Comscore connector provides a Comscore integration for THEOplayer.

## Installation[​](#installation "Direct link to Installation")

```sh
npm install @theoplayer/comscore-connector-web

```

This connector depends on the JavaScript ComScore SDK, which should be loaded and available in the global scope before the connector. Get it from your ComScore dashboard or talk to a ComScore representative. This connector was developed and tested with versions 7.2.0.200214 and 7.6.1.210506

```html
<script src="/path/to/comscore.js">

```

## Usage[​](#usage "Direct link to Usage")

### Configuring the connector[​](#configuring-the-connector "Direct link to Configuring the connector")

Create the connector by providing the `THEOplayer` instance, a ComscoreConfiguration (which contains your publisher id, also referred to as the c2 value) and the ComscoreMetadata of the first source being set to the player. You can change the metadata dynamically throughout the lifecycle of the connector.

```js
import { ComscoreConnector } from '../../dist/comscore-connector.esm.js';

const comscoreConfig = {
    publisherId: '<your publisher id>',
    applicationName: 'Test App',
    userConsent: '1',
    platformApi: ns_.analytics.PlatformAPIs.WebBrowser,
    debug: true
};

const comscoreMetadata = {
    mediaType: 'longFormOnDemand',
    uniqueId: 'testuniqueId',
    length: 634566, // in milliseconds
    stationTitle: 'THEOTV',
    programTitle: 'Big Buck Bunny',
    episodeTitle: 'Intro',
    genreName: 'Animation',
    classifyAsAudioStream: false,
    customLabels: {
        testcustomlabel: 'testcustomvalue'
    }
};

const comscoreConnector = new ComscoreConnector(player, comscoreConfig, comscoreMetadata);

```

### Optional ComscoreConfiguration properties[​](#optional-comscoreconfiguration-properties "Direct link to Optional ComscoreConfiguration properties")

#### `usagePropertiesAutoUpdateMode`[​](#usagepropertiesautoupdatemode "Direct link to usagepropertiesautoupdatemode")

When omitted this wil default to foregroundOnly.

#### `skeleton`[​](#skeleton "Direct link to skeleton")

Pass an interface object with target platform specific implementations for the necessary Platform APIs. E.g.

```js
analytics.PlatformApi.setPlatformApi(analytics.PlatformApi.PlatformApis.Skeleton, {
    onDataFetch: function (onSuccessCallback, onErrorCallback) {
        // Execute a function with platform-specific code to retrieve up-to-date information.
        runPlatformSpecificCodeToRetrieveValues(onSuccessCallback, onErrorCallback);
    }

    // Other overridden PlatformAPI methods, as needed.
});

```

For more information, please consult the [Skeleton PlatformAPI Implementation Guide](https://mymetrix-support.comscore.com/hc/en-us/article_attachments/31257678886299)

Note that if the skeleton property is defined, the connector will always use `setPlatformAPI(ns_.analytics.PlatformAPIs.Skeleton)`.

#### `platformApi`[​](#platformapi "Direct link to platformapi")

Pass a valid value from `ns_.analytics.PlatformAPIs`. When omitted, the connector will report `setPlatformAPI(ns_.analytics.PlatformAPIs.html5)`.

#### `adIdProcessor`[​](#adidprocessor "Direct link to adidprocessor")

Pass a function with the following signature if you require custom ad id handling: `(ad: Ad) => string`. When omitted, the connector will use `(ad) => ad.id`. Consult THEOplayer's types for more info about the `Ad` interface.

#### `debug`[​](#debug "Direct link to debug")

A flag to enable verbose logging.

### Passing metadata dynamically[​](#passing-metadata-dynamically "Direct link to Passing metadata dynamically")

The connector allows updating the current asset's metadata at any time. Do it when setting a new source to the player.

```js
comscoreConnector.update(newMetadata);

```

### ComscoreMetadata fields[​](#comscoremetadata-fields "Direct link to ComscoreMetadata fields")

Based on the `ComscoreMetadata` type, you can tell which fields are mandatory and which aren't. Note that this is purely for the integration to work correctly. Depending on the Comscore solution you are using, different fields are required/optional. The mandatory fields in the `ComscoreMetadata` type are the ones that are mandatory for all three Comscore solutions:

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

## Documentation[​](#documentation "Direct link to Documentation")

The integration guidelines from ComScore can be found on their [Unified Digital Measurements page](https://www.comscore.com/Products/Digital/Unified-Digital-Measurement-Enhanced) in the Tagging section.
