# adscript-connector-web

The AdScript connector provides an AdScript integration for THEOplayer.

## Installation[​](#installation "Direct link to Installation")

Install using your favorite package manager for Node (such as `npm` or `yarn`):

### npm[​](#npm "Direct link to npm")

```bash
npm install @theoplayer/adscript-connector-web

```

### yarn[​](#yarn "Direct link to yarn")

```bash
yarn add @theoplayer/adscript-connector-web

```

## Usage[​](#usage "Direct link to Usage")

First you need to add the AdScript connector to your app :

* Add as a regular script

```html

<script type="text/javascript" src="path/to/adscript-connector.umd.js"></script>
<script type="text/javascript">
    const player = new THEOplayer.Player(element, configuration);

    // Define your configuration for the connector:
    const adScriptConfig = {
        implementationId: 'your-implementation-id', // Replace this!
        metadata: {
            "assetid": "v0000001",
            "type": "content",
            "program": "Big Buck Bunny",
            "title": "Sample Video - Extended",
            "length": "635",
            "crossId": "000 111 22222",
            "livestream": "0",
            "channelId": "",
            "attribute": "1"
        },
        debug: false
    }

    // Create the AdScriptConnector:
    const adScriptConnector = new THEOplayerAdScriptConnector.AdScriptConnector(player, adScriptConfig);
</script>

```

* Add as an ES2015 module

```html

<script type="module">
    import {AdScriptConnector} from "@theoplayer/adscript-connector-web";

    const player = new THEOplayer.Player(element, configuration);

    // Define your configuration for the connector:
    const adScriptConfig = {
        implementationId: 'your-implementation-id', // Replace this!
        metadata: {
            "assetid": "v0000001",
            "type": "content",
            "program": "Big Buck Bunny",
            "title": "Sample Video - Extended",
            "length": "635",
            "crossId": "000 111 22222",
            "livestream": "0",
            "channelId": "",
            "attribute": "1"
        },
        debug: false
    }

    // Create the AdScriptConnector:
    const adScriptConnector = new AdScriptConnector(player, adScriptConfig);
</script>

```

## Updating metadata[​](#updating-metadata "Direct link to Updating metadata")

If the metadata has changed during playback, you can update it with:

```javascript
adScriptConnector.updateMetadata(newMetadata);

```

## Updating userInfo[​](#updating-userinfo "Direct link to Updating userInfo")

If the user info has changed during playback, you can update it with:

```javascript
adScriptConnector.updateUser(i12n);

```
