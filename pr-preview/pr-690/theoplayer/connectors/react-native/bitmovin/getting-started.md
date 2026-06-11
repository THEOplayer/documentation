# THEOplayer React-Native Bitmovin Connector

A Bitmovin analytics connector for `@theoplayer/react-native`.

## Installation[​](#installation "Direct link to Installation")

Using npm:

```sh
npm install @theoplayer/react-native-analytics-bitmovin

```

Using yarn:

```sh
yarn add @theoplayer/react-native-analytics-bitmovin

```

## Usage[​](#usage "Direct link to Usage")

### Configuring the connector[​](#configuring-the-connector "Direct link to Configuring the connector")

Create the connector using the `useBitmovin` hook with the initial configuration.

Once the player is ready, initialize the connector by calling the `initBitmovin` function with the `THEOplayer` instance and the **default metadata**, which contains properties that do not change during the session.

Finally, before the player source is set, update first the **source metadata** by calling the `updateSourceMetadata` function.

> **IMPORTANT:** Call `updateSourceMetadata` before setting the player source, otherwise the source metadata will not be included in the analytics events.

```tsx
import {
  useBitmovin,
  AnalyticsConfig,
  DefaultMetadata,
  SourceMetadata
} from '@theoplayer/react-native-analytics-bitmovin';

const bitmovinConfig: AnalyticsConfig = {
  licenseKey: 'license-key-here',
  logLevel: 'DEBUG'
}

const defaultMetadata: DefaultMetadata = {
  cdnProvider: 'akamai',
  customUserId: 'custom-user-id-1234',
  customData: {
    customData1: 'value1',
    customData2: 'value2'
  }
};

const sourceMetadata: SourceMetadata = {
  title: 'Sample Video',
  videoId: 'video-1234',
  cdnProvider: 'akamai',
  path: '/home/videos/sample-video',
  isLive: false,
  customData: {
    customData10: 'value10',
    customData11: 'value11'
  }
}

const App = () => {
  const [bitmovin, initBitmovin] = useBitmovin(bitmovinConfig);

  const onPlayerReady = (player: THEOplayer) => {
    // Initialize connector with player & default metadata.
    initBitmovin(player, defaultMetadata);

    // Update source metadata.
    bitmovin.updateSourceMetadata(sourceMetadata);

    // Set player source after updating source metadata.
    player.source = {/*...*/}
  }

  return (<THEOplayerView config={playerConfig} onPlayerReady={onPlayerReady}/>);
}

```

### Dynamically updating custom data[​](#dynamically-updating-custom-data "Direct link to Dynamically updating custom data")

The connector allows updating the **custom data** at any time during the playback session, which will cause the new custom data to be merged with the existing custom data and included in all subsequent analytics events:

```tsx
bitmovin.updateCustomData({
  customData0: 'newValue0',
  customData1: 'newValue1'
});

```

### Updating source metadata during a live stream[​](#updating-source-metadata-during-a-live-stream "Direct link to Updating source metadata during a live stream")

The connector allows dynamically updating the **source metadata**, for example during a live stream when the program changes:

```tsx
bitmovin.programChange({
  title: 'New Live Program',
  videoId: 'live-program-5678',
  customData: {
    customData10: 'newValue10'
  }
});

```
