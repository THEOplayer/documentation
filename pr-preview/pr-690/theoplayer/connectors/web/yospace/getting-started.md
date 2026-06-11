# yospace-connector-web

The Yospace connector provides a Yospace integration for THEOplayer.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

In order to use this connector, a [THEOplayer](https://www.npmjs.com/package/theoplayer) build with a valid license is required. You can use your existing THEOplayer HTML5 SDK license or request yours via [THEOportal](https://portal.theoplayer.com/).

For setting up a valid Yospace session, the Yospace Ad Management SDK is required. For more information on how to install the Ad Management SDK, please refer to the documentation of [Yospace](https://docs.yospace.com/library/technical/sdks/en/ad-management-sdks-v3/javascript.html).

**Remark:** This version of the Yospace Connector is compatible with Yospace Ad Management SDK version 3.10.0 or higher. If you still want to use an older Ad Management SDK, please use the connector version 2.8.0 or earlier.

## Installation[​](#installation "Direct link to Installation")

Install using your favorite package manager for Node (such as `npm` or `yarn`):

### Install via npm[​](#install-via-npm "Direct link to Install via npm")

```bash
npm install @theoplayer/yospace-connector-web

```

### Install via yarn[​](#install-via-yarn "Direct link to Install via yarn")

```bash
yarn add @theoplayer/yospace-connector-web

```

## Usage[​](#usage "Direct link to Usage")

First you need to add the Yospace connector to your app :

* Add as a regular script

```html
<script type="text/javascript" src="path/to/yospace-connector.umd.js"></script>
<script type="text/javascript">
    const player = new THEOplayer.Player(element, configuration);
    const yospaceConnector = new THEOplayerYospaceConnector.YospaceConnector(player);
</script>

```

* Add as an ES2015 module

```html
<script type="module">
    import { YospaceConnector } from "path/to/yospace-connector.esm.js";
    const player = new THEOplayer.Player(element, configuration);
    const yospaceConnector = new YospaceConnector(player);
</script>

```

To make use of the Yospace integration, you need to set up a session for your Yospace source :

```javascript
const source = {
    sources: [
        {
            src: "YOUR_YOSPACE_SRC",
            ssai: {
                integration: "yospace"
                // If necessary, you can define your streamType.
                // streamType: 'vod' | 'live' | 'livepause'
            }
        }
    ]
}

await yospaceConnector.setupYospaceSession(source);

```

If you want to customize your session, you can also pass your customized `SessionProperties` from the Yospace Ad Management SDK :

```javascript
// create a new SessionProperties object using the Ad Management SDK.
const sessionProperties = new YospaceAdManagement.SessionProperties();
const source = {
    sources: [
        {
            src: "YOUR_YOSPACE_SRC",
            ssai: {
                integration: "yospace"
                // If necessary, you can define your streamType.
                // streamType: 'vod' | 'live' | 'livepause'
            }
        }
    ]
}

await yospaceConnector.setupYospaceSession(source, sessionProperties);

```

Once the setup of the Yospace session is done, you can continue to use the player and the connector will handle everything related to Yospace.
