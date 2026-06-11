# Nielsen Web Connector

A connector implementing Nielsen with THEOplayer.

## Installation[​](#installation "Direct link to Installation")

```sh
npm install @theoplayer/nielsen-connector-web

```

## Usage[​](#usage "Direct link to Usage")

### Configuring the connector[​](#configuring-the-connector "Direct link to Configuring the connector")

Create the connector by providing the following mandatory parameters:

* The `THEOplayer` instance
* the Nielsen App ID
* the channelName for the asset

and optionally the following parameters:

* a `NielsenOptions` object
* a `NielsenConfiguration` object (if none is provided, the default configuration disables DCR, enables DTVR and sets the country to US)

```js
import { NielsenConnector } from '../../dist/THEOplayerNielsenConnector';

const appId = '<your app ID>';
const channelName = '<your channel name>';

// Non-mandatory options
const options: NielsenOptions = {
    containerId: 'THEOplayer',
    optout: false
};

// Non-mandatory configuration (e.g. for DCR tracking with the Czech Republic SDK)
const configuration: NielsenConfiguration = {
    country: NielsenCountry.CZ,
    enableDTVR: false,
    enableDCR: true
};
const nielsenConnector = new NielsenConnector(player, appId, channelName, options);

```

The `NielsenOptions` can have the following fields:

| Key            | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| `containerId`  | HTML DOM element id of the player container.                    |
| `nol_sdkDebug` | Enables Debug Mode which allows output to be viewed in console. |
| `optout`       | Whether to opt-out of Nielsen Measurement.                      |

### Passing metadata dynamically (DTVR)[​](#passing-metadata-dynamically-dtvr "Direct link to Passing metadata dynamically (DTVR)")

The connector allows updating the current asset's metadata at any time. Note that Nielsen's [documentation](https://engineeringportal.nielsen.com/wiki/updateMetadata_\(Browser\)) prohibits updating of the values for `type`, `vidtype` or `assetid` parameters

```js
const metadata = {
    ['channelName']: 'newChannelName',
    ['customTag1']: 'customValue1',
    ['customTag2']: 'customValue2'
};
nielsenConnector.updateMetadata(metadata);

```

### Passing metadata when setting a source to the player (DCR)[​](#passing-metadata-when-setting-a-source-to-the-player-dcr "Direct link to Passing metadata when setting a source to the player (DCR)")

This can be achieved through the `updateDCRContentMetadata` method, e.g.:

```js
const metadata: NielsenDCRContentMetadataCZ = {
    assetid: 'cz-500358-98731568435405',
    program: 'Animated Test Content',
    title: 'Big Buck Bunny',
    length: '596',
    airdate: '20230620 20:00:00',
    isfullepisode: true,
    crossId1: '915 954 39504',
    c2: '651678089925925',
    segB: '011',
    adloadtype: AdLoadType.linear,
    hasAds: HasAds.supports_ads
};

nielsenConnector.updateDCRContentMetadata(metadata);

```

Note that types are included in the package: `NielsenDCRContentMetadataUS`, `NielsenDCRContentMetadataCZ`. Please contact your THEO Technologies representative if you need support for another International DCR SDK.
