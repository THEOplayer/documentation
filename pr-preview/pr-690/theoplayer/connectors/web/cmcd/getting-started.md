# cmcd-connector-web

A connector between a THEOplayer instance and a Common Media Client Data (CMCD) server for the THEOplayer HTML5/Tizen/webOS SDK. This implementation supports CMCD data as defined in CTA-5004, published in September 2020.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

In order to use this connector, a [THEOplayer](https://www.npmjs.com/package/theoplayer) build with a valid license is required. You can use your existing THEOplayer HTML5 SDK license or request yours via [THEOportal](https://portal.theoplayer.com/).

## Installation[​](#installation "Direct link to Installation")

Install using your favorite package manager for Node (such as `npm` or `yarn`):

### Install via npm[​](#install-via-npm "Direct link to Install via npm")

```bash
npm install @theoplayer/cmcd-connector-web

```

### Install via yarn[​](#install-via-yarn "Direct link to Install via yarn")

```bash
yarn add @theoplayer/cmcd-connector-web

```

## Usage[​](#usage "Direct link to Usage")

First you need to add the CMCD connector to your app :

* Add as a regular script

```html
<script type="text/javascript" src="path/to/cmcd-connector.umd.js"></script>
<script type="text/javascript">
  const player = new THEOplayer.Player(element, playerConfiguration);
  const connector = THEOplayerCMCDConnector.createCMCDConnector(player);
</script>

```

* Add as an ES2015 module

```html
<script type="module">
    import { createCMCDConnector } from "path/to/cmcd-connector.esm.js";
    const player = new THEOplayer.Player(element, playerConfiguration);  
    const connector = createCMCDConnector(player);
</script>

```

By default, the data is sent via query arguments, but you can configure the transmission mode before creating the CMCD connector. For example, to transmit via HTTP headers:

* regular script

```html
<script type="text/javascript" src="path/to/cmcd-connector.umd.js"></script>
<script>
  const player = new THEOplayer.Player(element, playerConfiguration);
  const configuration = {
    transmissionMode: THEOplayerCMCDConnector.TransmissionMode.HTTP_HEADER
  }
  const connector = THEOplayerCMCDConnector.createCMCDConnector(player, configuration);
</script>

```

* ES2015 module

```html
<script type="module">
    import { createCMCDConnector, TransmissionMode } from "path/to/cmcd-connector.esm.js";
    const player = new THEOplayer.Player(element, playerConfiguration);
    const configuration = {
      transmissionMode: TransmissionMode.HTTP_HEADER
    }
    const connector = createCMCDConnector(player, configuration);
</script>

```

The connector will be automatically destroyed upon destruction of the provided player. When changing the player source and a content ID is being passed in, this is to be reset through `reconfigure()` as it will not be cleared automatically.

## Remarks[​](#remarks "Direct link to Remarks")

Note that when native playback is being used, either through THEOplayer's configuration, or due to absence of MSE/EME APIs, the JSON Object transmission mode should be used.

Currently, all standardized reserved keys are reported, except:

* Object duration (`d`)
* Next object request (`nor`)
* Next range request (`nrr`)
