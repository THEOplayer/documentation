# THEOplayer React-Native Youbora Connector

A Youbora analytics connector for `@theoplayer/react-native`.

## Installation[​](#installation "Direct link to Installation")

```sh
npm install @theoplayer/react-native-analytics-youbora

```

## Usage[​](#usage "Direct link to Usage")

### Configuring the connector[​](#configuring-the-connector "Direct link to Configuring the connector")

Create the connector by providing the `THEOplayer` instance, the `appId` provided by Youbora, and `instanceName` that describes the player or site, and an optional set of `YouboraOptions`:

```tsx
import { useYoubora, youbora } from '@theoplayer/react-native-analytics-youbora';

const youboraOptions: youbora.Options = {
  'accountCode': 'powerdev',
  // 'username': 'dev',
  // 'parse.HLS': true,
  // 'parse.CDNNode': true,
  // 'network.ip': '1.1.1.1',
  // 'network.isp': 'MyISP',
  // 'network.connectionType': 'dialup',
  // 'content.transactionCode': 'myTransCode',
  // 'content.resource': 'mysrc.mp4',
  'content.isLive': true,
  'content.title': 'My Title',
  // 'content.title2': 'My Title2',
  // 'content.duration': 100,
  // 'content.fps': '100',
  // 'content.bitrate': 1000000,
  // 'content.throughput': 8000000,
  // 'content.rendition': 'My Rendition',
  // 'content.cdn': 'NICE264',
  // 'content.metadata': {
  //   custom_info: 'info'
  // },
  // 'ad.metadata': {
  //   custom_info: 'info'
  // },
  // 'extraparam.1': 'myExtraParam1',
  // 'extraparam.2': 'myExtraParam2'
};

const App = () => {
  const [_youboraConnector, initYoubora] = useYoubora(youboraOptions, youbora.Log.Level.DEBUG);

  const onPlayerReady = (player: THEOplayer) => {
    // Initialize Youbora connector
    initYoubora(player);
  }

  return (<THEOplayerView config={playerConfig} onPlayerReady={onPlayerReady}/>);
}

```

### Configuration on iOS[​](#configuration-on-ios "Direct link to Configuration on iOS")

As outlined on the native iOS connector's [git repository](https://bitbucket.org/npaw/theoplayer-adapter-ios), the app's Podfile still needs to include a dependency to the THEOplayerSDK by adding a pre-install script:

```ruby
  pre_install do |installer|
    ios_youbora_target = installer.pod_targets.find { |t| t.name == "YouboraTHEOPlayerAdapter-iOS" }
    ios_theoplayer_target = installer.pod_targets.find { |t| t.name == "THEOplayerSDK-core-iOS"}
    puts "Adding THEOplayerSDK-core-iOS as a target dependency to YouboraTHEOPlayerAdapter-iOS"
    ios_youbora_target.dependent_targets <<= ios_theoplayer_target
    tvos_youbora_target = installer.pod_targets.find { |t| t.name == "YouboraTHEOPlayerAdapter-tvOS"}
    tvos_theoplayer_target = installer.pod_targets.find { |t| t.name == "THEOplayerSDK-core-tvOS"}
    puts "Adding THEOplayerSDK-core-tvOS as a target dependency to YouboraTHEOPlayerAdapter-tvOS"
    tvos_youbora_target.dependent_targets <<= tvos_theoplayer_target
  end

```

If you are using a single target project this reduces to

```ruby
  pre_install do |installer|
    youbora_target = installer.pod_targets.find { |t| t.name == "YouboraTHEOPlayerAdapter" }
    theoplayer_target = installer.pod_targets.find { |t| t.name == "THEOplayerSDK-core"}
    puts "Adding THEOplayerSDK-core as a target dependency to YouboraTHEOPlayerAdapter"
    youbora_target.dependent_targets <<= theoplayer_target
  end

```
