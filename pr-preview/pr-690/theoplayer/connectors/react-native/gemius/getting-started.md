# THEOplayer React-Native Gemius Connector

A Gemius analytics connector for `@theoplayer/react-native`.

## Installation[​](#installation "Direct link to Installation")

```sh
npm install @theoplayer/react-native-analytics-gemius

```

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

### Android[​](#android "Direct link to Android")

The Gemius Android SDK is not publicly available as a Maven module, so additional work is needed to include it as connector dependency. It requires downloading the private `GemiusSDK_2.0.8.aar` module into the app's `libs/` folder. The SDK location needs to be passed to the connector by setting the `gemiusSdkDir` in your app's `gradle.properties` file:

```bash
# Location of the Gemius SDK
gemiusSdkDir=./app/libs/

```

If a different version of the Gemius SDK is used than the default (v2.0.8), make sure to update the version in the `gradle.properties` file accordingly:

```text
THEOplayerGemius_gemiusVersion=2.0.8

```

### iOS & tvOS[​](#ios--tvos "Direct link to iOS & tvOS")

On Apple platforms, the connector requires downloading the private `GemiusSDK_iOS` archive, which contains a multiplatform binary platform module for both iOS and tvOS.

Create a `Frameworks` folder in your app's `ios` folder, copy the Gemius SDK XCFrameworks in it and add this `GemiusSDK.podspec` file inside, which describes the structure and metadata of Gemius's CocoaPod:

```ruby
Pod::Spec.new do |spec|
  spec.name         = "GemiusSDK"
  spec.version      = "2.0.6"
  spec.summary      = "The Gemius SDK for iOS"

  spec.homepage     = 'https://github.com/THEOplayer/iOS-Connector'
  spec.license      = { :type => 'MIT', :file => 'LICENSE' }
  spec.author       = "Dolby Laboratories, Inc."
  spec.source       = { :git => 'https://github.com/THEOplayer/iOS-Connector.git', :tag => spec.version.to_s }

  spec.source_files  = "Classes", "Classes/**/*.{h,m}"
  spec.ios.vendored_frameworks = "GemiusSDK.xcframework"
  spec.tvos.vendored_frameworks = "GemiusSDKtvOS.xcframework"
end

```

Finally, include the Gemius SDK as dependency in your app's `Podfile`:

```ruby
  pod 'GemiusSDK', :path => 'Frameworks/'

```

## Usage[​](#usage "Direct link to Usage")

### Configuring the connector[​](#configuring-the-connector "Direct link to Configuring the connector")

Create the connector by providing the `THEOplayer` instance and a `GemiusConfiguration` object.

```tsx
import { useGemius, GemiusConfiguration, ProgramType } from '@theoplayer/react-native-analytics-gemius';

const gemiusConfig: GemiusConfiguration = {
  applicationName: "Demo",
  applicationVersion: "1.0",
  hitCollectorHost: "your_hit_collector_host",
  gemiusId: "your_gemius_id",
  debug: true
}

const App = () => {
  const [gemius, initGemius] = useGemius(gemiusConfig);

  const onPlayerReady = (player: THEOplayer) => {
    // Initialize Gemius connector
    initGemius(player);
  };

  return <THEOplayerView config={playerConfig} onPlayerReady={onPlayerReady} />;
};

```

### Passing metadata dynamically[​](#passing-metadata-dynamically "Direct link to Passing metadata dynamically")

The connector allows passing or updating the current asset's metadata at any time:

```typescript
const onUpdateMetadata = () => {
  gemius.current?.update('programId', {
    name: 'Demo asset',
    duration: 1200,
    programType: ProgramType.VIDEO,
    customKey: 'customValue',
    // ...
  });
}

```
