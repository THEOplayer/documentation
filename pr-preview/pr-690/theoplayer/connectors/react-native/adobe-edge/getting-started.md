# THEOplayer React-Native Adobe Edge Connector

An Adobe analytics connector for `@theoplayer/react-native` using the [Media Edge API](https://developer.adobe.com/client-sdks/edge/media-for-edge-network/).

Media Edge API is the third generation of solution for tracking Media Events. It features more analytics data, and the delay before the data can be analysed is much shorter: \~15 minutes compared to \~45 minutes with Media Heartbeats.

To set up terminology, in chronological order, media tracking solutions were:

1. Media Heartbeats solution
2. Media Collection API
3. Media Edge API

## Installation[​](#installation "Direct link to Installation")

```sh
npm install @theoplayer/react-native-analytics-adobe-edge

```

## Usage[​](#usage "Direct link to Usage")

### Configuring the connector[​](#configuring-the-connector "Direct link to Configuring the connector")

Create the connector by providing the `THEOplayer` instance and a configuration object with separate parts for Web and mobile platforms.

```tsx
import {useAdobe} from '@theoplayer/react-native-analytics-adobe-edge';

const config = {
  web: {
    datastreamId: 'abcde123-abcd-1234-abcd-abcde1234567',
    orgId: 'ADB3LETTERSANDNUMBERS@AdobeOrg',
    edgeBasePath: 'ee',
    edgeDomain: 'my.domain.com',
    debugEnabled: true,
  },
  mobile: {
    environmentId: 'abcdef123456/abcdef123456/launch-1234567890abcdef1234567890abcdef12',
    debugEnabled: true,
  },
}

/**
 * An optional custom identity map to associate the media session with user identities.
 */
const customIdentityMap = {
  EMAIL: [
    {
      id: 'user@example.com',
      authenticatedState: 'authenticated',
      primary: false,
    },
  ],
}

const App = () => {
  const [adobe, initAdobe] = useAdobe(config, /* optional */ customIdentityMap);

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
import {AdobeCustomMetadataDetails} from "@theoplayer/react-native-analytics-adobe-edge";

const onUpdateMetadata = () => {
  const metadata: AdobeCustomMetadataDetails[] = [
    {name: 'title', value: 'test'},
    {name: 'custom1', value: 'value1'},
  ]
  adobe.current?.updateMetadata(metadata);
};

```

### Setting an custom identity map[​](#setting-an-custom-identity-map "Direct link to Setting an custom identity map")

Besides passing a custom identity map during initialization, you can also set or update the identity map at any time:

```typescript
import {AdobeIdentityMap} from "@theoplayer/react-native-analytics-adobe-edge";

const onUpdateIdentityMap = () => {
  const identityMap: AdobeIdentityMap = {
    CUSTOMER_ID: [
      {
        id: 'customer-12345',
        authenticatedState: 'authenticated',
        primary: true,
      },
    ],
  };
  adobe.current?.setIdentityMap(identityMap);
};

```

### Starting a new session during a live stream[​](#starting-a-new-session-during-a-live-stream "Direct link to Starting a new session during a live stream")

By default, the connector will start a new session when a new asset is loaded. However, during live streams, you might want to start a new session periodically when a new program starts. You can do this by calling `stopAndStartNewSession` with the new program's metadata:

```typescript
const onNewProgram = () => {
  adobe.current?.stopAndStartNewSession({
    'friendlyName': 'Evening News',
  });
};

```
