# THEOplayer React-Native Adobe Connector

An Adobe analytics connector for `@theoplayer/react-native`.

## Installation[​](#installation "Direct link to Installation")

The `@theoplayer/react-native` package has a peer dependency on `react-native-device-info`, which has to be installed as well:

```sh
npm install \
  react-native-device-info \
  @theoplayer/react-native-analytics-adobe

```

## Usage[​](#usage "Direct link to Usage")

### Configuring the connector[​](#configuring-the-connector "Direct link to Configuring the connector")

Create the connector by providing the `THEOplayer` instance, the Media Collection API's end point, Visitor Experience Cloud Org ID, Analytics Report Suite ID and the Analytics Tracking Server URL.

```tsx
import { useAdobe } from '@theoplayer/react-native-analytics-adobe';

const uri = "<Media Collection API's end point>";
const ecid = "<Visitor Experience Cloud Org ID>";
const sid = "<Report Suite ID>";
const trackingUrl = "<Tracking Server URL>";
const metadata = {}; // Optionally provide initial metadata
const userAgent = "<Custom User-Agent>"; // Optionally provide a custom user-agent header value.
const debug = true; // Optionally provide a debug flag for extra logging.
const useNative = true; // Use a native connector on iOS & Android; `false` by default.

const App = () => {
  const [adobe, initAdobe] = useAdobe(uri, ecid, sid, trackingUrl, metadata, userAgent, debug, useNative);

  const onPlayerReady = (player: THEOplayer) => {
    // Initialize Adobe connector
    initAdobe(player);
  }

  return (<THEOplayerView config={playerConfig} onPlayerReady={onPlayerReady}/>);
}

```

The Adobe connector will dispatch player events to Adobe with standard metadata the player has access to, such as duration or whether it is a live or vod.

### Passing metadata dynamically[​](#passing-metadata-dynamically "Direct link to Passing metadata dynamically")

The connector allows passing or updating the current asset's metadata at any time:

```typescript
import { AdobeMetaData } from "./Types";

const onUpdateMetadata = () => {
  const metadata: AdobeMetaData = {
    "params": {
      "media.channelName": "channelName",
      "media.id": "mediaId"
    },
    "customMetadata": {
      "customTag1": "customValue1",
      "customTag2": "customValue2"
    }
  };
  adobe.current?.updateMetadata(metadata);
};

```
