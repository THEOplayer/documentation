# THEOplayer React-Native Mux Connector

A Mux analytics connector for `@theoplayer/react-native`, supporting Web, iOS and Android.

## Installation[​](#installation "Direct link to Installation")

```sh
npm install @theoplayer/react-native-analytics-mux

```

## Usage[​](#usage "Direct link to Usage")

### Configuring the connector[​](#configuring-the-connector "Direct link to Configuring the connector")

Create the connector by providing the `THEOplayer` instance, some initial metadata and a config object:

```jsx
import { useMux } from '@theoplayer/react-native-analytics-mux';

const muxOptions = {
  debug: true,
  data: {
    env_key: 'ENV_KEY', // required
    // Site Metadata
    viewer_user_id: '12345',
    experiment_name: 'player_test_A',
    sub_property_id: 'cus-1',
    // Player Metadata
    player_name: 'My Main Player',
    player_version: '1.0.0',
    player_init_time: 1451606400000,
    // Video Metadata
    video_id: 'abcd123',
    video_title: 'My Great Video',
    video_series: 'Weekly Great Videos',
    video_duration: 12000, // in milliseconds
    video_stream_type: 'on-demand', // 'live' or 'on-demand'
    video_cdn: 'Akamai'
  }
};

const App = () => {
  const [mux, initMux] = useMux();

  const onPlayerReady = (player: THEOplayer) => {
    // Initialize connector
    initMux(player, muxOptions);
  }

  return (<THEOplayerView config={playerConfig} onPlayerReady={onPlayerReady}/>);
}

```

### Change program within a stream[​](#change-program-within-a-stream "Direct link to Change program within a stream")

In some cases, you may have the program change within a stream, and you may want to track each program as a view on its own. An example of this is a live stream that streams multiple programs back to back.

For this purpose, the `changeProgram` method can signal the start of a new program and pass updated metadata to the connector.

```typescript
mux.current?.changeProgram({
  video_title: 'New program',
  video_duration: 160000
});

```
