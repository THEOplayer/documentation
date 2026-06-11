# conviva-connector-web

The Conviva connector provides a Conviva integration for THEOplayer.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

In order to use this connector, a [THEOplayer](https://www.npmjs.com/package/theoplayer) build with a valid license is required. You can use your existing THEOplayer HTML5 SDK license or request yours via [THEOportal](https://portal.theoplayer.com/).

For setting up a valid Conviva session, you must have access to a [Conviva developer account](https://pulse.conviva.com/) with access to a debug or production key.

## Installation[​](#installation "Direct link to Installation")

Install using your favorite package manager for Node (such as `npm` or `yarn`):

### Install via npm[​](#install-via-npm "Direct link to Install via npm")

```bash
npm install @theoplayer/conviva-connector-web

```

### Install via yarn[​](#install-via-yarn "Direct link to Install via yarn")

```bash
yarn add @theoplayer/conviva-connector-web

```

## Usage[​](#usage "Direct link to Usage")

First you need to define the Conviva metadata and configuration:

```javascript
    const convivaMetadata = {
        ['Conviva.assetName']: 'ASSET_NAME_GOES_HERE',
        ['Conviva.streamUrl']: 'CUSTOMER_STREAM_URL_GOES_HERE',
        ['Conviva.streamType']: 'STREAM_TYPE_GOES_HERE', // VOD or LIVE
        ['Conviva.applicationName']: 'APPLICATION_NAME_GOES_HERE',
        ['Conviva.viewerId']: 'VIEWER_ID_GOES_HERE'
    };

    const convivaConfig = {
        debug: false,
        gatewayUrl: 'CUSTOMER_GATEWAY_GOES_HERE',
        customerKey: 'CUSTOMER_KEY_GOES_HERE' // Can be a test or production key.
    };

```

Optionally, you can include device metadata in the ConvivaConfiguration object. Note that `SCREEN_RESOLUTION_WIDTH`, `SCREEN_RESOLUTION_HEIGHT` and `SCREEN_RESOLUTION_SCALE_FACTOR` are the only fields that Conviva will auto-collect on most web-based platforms.

```typescript
const exampleDeviceMetadata: ConvivaDeviceMetadata = {
    [Constants.DeviceMetadata.BRAND]: "Samsung",
    [Constants.DeviceMetadata.MANUFACTURER]: "Samsung",
    [Constants.DeviceMetadata.MODEL]: "QE43Q64BAUXXN",
    [Constants.DeviceMetadata.TYPE]:  Constants.DeviceType.SMARTTV,
    [Constants.DeviceMetadata.VERSION]: "6.5.0",
    [Constants.DeviceMetadata.OS_NAME]: "Tizen",
    [Constants.DeviceMetadata.OS_VERSION]: "6.5.0",
    [Constants.DeviceMetadata.CATEGORY]: Constants.DeviceCategory.SAMSUNG_TV,
    [Constants.DeviceMetadata.SCREEN_RESOLUTION_WIDTH]: 3840,
    [Constants.DeviceMetadata.SCREEN_RESOLUTION_HEIGHT]: 2160,
    [Constants.DeviceMetadata.SCREEN_RESOLUTION_SCALE_FACTOR]: 1
}

convivaMetadata.deviceMetadata = exampleDeviceMetadata

```

Using these configs you can create the Conviva connector with THEOplayer.

* Add as a regular script:

```html
<script type="text/javascript" src="path/to/conviva-connector.umd.js"></script>
<script type="text/javascript">
    const player = new THEOplayer.Player(element, configuration);
    const convivaIntegration = new THEOplayerConvivaConnector.ConvivaConnector(
            player,
            convivaMetadata,
            convivaConfig
    );
</script>

```

* Add as an ES2015 module:

```html
<script type="module">
    import { ConvivaConnector } from "path/to/conviva-connector.esm.js";
    const player = new THEOplayer.Player(element, configuration);
    const convivaIntegration = new ConvivaConnector(player, convivaMetadata, convivaConfig);
</script>

```

The Conviva connector is now ready to start a session once THEOplayer starts playing a source.

Note that the `convivaMetadata` provided to the `ConvivaConnector` constructor is primarily used to pass application specific information to Conviva. Source specific metadata can be provided through the connector's `setContentInfo` method. This data does not carry over to the following sources and needs to be set after the `sourcechange` event has been received.

```js
player.source = exampleSource;

const onSourceChange = () => {
    convivaIntegration.setContentInfo(exampleSourceMetadata);
}
player.addEventListener('sourcechange', onSourceChange);

```

## Usage with Yospace connector[​](#usage-with-yospace-connector "Direct link to Usage with Yospace connector")

If you have a Yospace SSAI stream and want to also report ad related events to Conviva, you can use this connector in combination with the Yospace connector: [@theoplayer/yospace-connector-web](https://www.npmjs.com/package/@theoplayer/yospace-connector-web)

After configuring the Yospace connector, can link it to the Conviva connector:

```javascript
async function setupYospaceConnector(player) {
        const source = {
            sources: [
                {
                    src: "https://csm-e-sdk-validation.bln1.yospace.com/csm/extlive/yospace02,hlssample42.m3u8?yo.br=true&yo.av=4",
                    ssai: {
                        integration: "yospace"
                    }
                }
            ]
        };
        
        // Create the connectors.
        const yospace = new THEOplayerYospaceConnector.YospaceConnector(player);
        const conviva = new THEOplayerConvivaConnector.ConvivaConnector(player, convivaMetadata, convivaConfig);
    
        // Link ConvivaConnector with the YospaceConnector.
        conviva.connect(yospace);
        
        // Set the source.
        await yospace.setupYospaceSession(source);
    }

```
