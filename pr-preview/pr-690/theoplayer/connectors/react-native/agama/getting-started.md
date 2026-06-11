# THEOplayer React-Native Agama Connector

An Agama analytics connector for `@theoplayer/react-native`. Currently only the Android/Android TV platforms is supported.

## Installation[​](#installation "Direct link to Installation")

### Dependencies[​](#dependencies "Direct link to Dependencies")

The `@theoplayer/react-native` package has peer dependencies on these packages, which have to be installed as well:

* `react-native-device-info` to obtain extra device information;
* `@react-native-async-storage/async-storage` to persistently store a unique deviceId across sessions;
* `@react-native-community/netinfo` to obtain information on network connection and quality.

```sh
npm install \
  react-native-device-info \
  @react-native-async-storage/async-storage \
  @react-native-community/netinfo \
  @theoplayer/react-native-analytics-agama

```

Some of these dependencies explicitly rely on `react-native` as a peer dependency. If you are using the `react-native-tvos` fork, it is necessary to specify this override in your package.json:

```json
  "overrides": {
    "react-native": "npm:react-native-tvos@^0.76.5-0"
  }

```

### Agama library[​](#agama-library "Direct link to Agama library")

The Agama libraries need to be provided by the hosting app. Since they are privately hosted, you need to download them from [Agama's support site](https://support.agama.tv/). Put the libraries next to the source and load them at the start of the app, along with the necessary polyfills:

```typescript
import { AgamaPolyfills } from "@theoplayer/react-native-analytics-agama";

AgamaPolyfills.install();
require('./static/empclient.min');
require('./static/empclient.compat5.min');

```

## Usage[​](#usage "Direct link to Usage")

### Configuring the connector[​](#configuring-the-connector "Direct link to Configuring the connector")

Create the connector by providing the `THEOplayer` instance and a [configuration object](https://github.com/THEOplayer/react-native-connectors/blob/-/agama/src/api/AgamaConfiguration.ts). A `useAgama` React hook is provided for convenience. It takes care of initialization and clean-up of the connector. It is also possible to create the connector explicitly by creating an instance of `AgamaConnector`, in which case the `destroy()` method must be called when destroying either the connector or the player.

```tsx
import { useAgama, AgamaConfiguration } from '@theoplayer/react-native-analytics-agama';

const config: AgamaConfiguration = {
  config: 'emp_service=http://127.0.0.1:8191/report;report_interval=60;id_report_interval=240;operator_id=fooSoo',
  logLevel: 'debug',
  application: 'React-Native THEOplayer',
  applicationVersion: '1.0.0'
}

const App = () => {
  const [agama, initAgama] = useAgama(config);

  const onPlayerReady = (player: THEOplayer) => {
    // Initialize Agama connector
    initAgama(player);
  }

  return (<THEOplayerView config={playerConfig} onPlayerReady={onPlayerReady}/>);
}

```

### Source description[​](#source-description "Direct link to Source description")

Source-related [analytics properties](https://github.com/THEOplayer/react-native-connectors/blob/-/agama/src/api/AgamaSourceConfiguration.ts) can be passed in the source description as follows:

```typescript
player.source = {
  "sources": {
    "src": "https://cdn.theoplayer.com/video/adultswim/clip.m3u8",
    "type": "application/x-mpegurl"
  },
  "analytics": [{
    "integration": "agama",
    "asset": "The Venture Bros",
    "cdn": "theoplayer",
    "serviceName": "svod",
    "contentTitle": "The Venture Bros",
    "streamType": "vod",
    "contentType": "movie",
    "contentDescription": "Agama demo movie"
  }]
}

```

As it is possible to configure more than one analytics integration, it is important to include the `integration: 'agama'` property to let the connector known which object to use.
