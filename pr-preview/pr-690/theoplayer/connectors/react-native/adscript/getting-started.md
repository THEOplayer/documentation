# THEOplayer React-Native AdScript Connector

A [Nielsen AdScript](https://adscript.admosphere.cz/) analytics connector for `@theoplayer/react-native`.

## Installation[​](#installation "Direct link to Installation")

```sh
npm install @theoplayer/react-native-analytics-adscript

```

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

### Android[​](#android "Direct link to Android")

On Android, the connector requires downloading the private [AdScript client library](https://adscript.admosphere.cz/download/AdScriptApiClient_v1.0.10.aar.gz) module into the app's `libs/` folder. Pass the SDK location to the connector by setting the `adScriptSdkDir` in your app's `gradle.properties` file:

```bash
# Location of the AdScript SDK
adScriptSdkDir=./app/libs/

```

### iOS & tvOS[​](#ios--tvos "Direct link to iOS & tvOS")

On Apple platforms, the connector requires downloading the private `AdScriptAPIClient` archive.

Create a `Frameworks` folder in your app's `ios` folder, copy the Adscript SDK XCFramework in it and add this `AdScriptApiClient.podspec` file inside, which describes the structure and metadata of Adscript's CocoaPod:

```ruby
Pod::Spec.new do |spec|
  spec.name         = "AdScriptApiClient"
  spec.version      = "1.0.8"
  spec.summary      = "The Adscript Api Client for iOS"

  spec.homepage     = 'https://github.com/THEOplayer/iOS-Connector'
  spec.license      = { :type => 'MIT', :file => 'LICENSE' }
  spec.author       = "Dolby Laboratories, Inc."
  spec.source       = { :git => 'https://github.com/THEOplayer/iOS-Connector.git', :tag => spec.version.to_s }

  spec.source_files  = "Classes", "Classes/**/*.{h,m}"
  spec.ios.vendored_frameworks = "AdScriptApiClient.xcframework"
end

```

To enable IDFA (Identifier for Advertisers), replace the framework reference:

```text
spec.ios.vendored_frameworks = "AdScriptApiClient.xcframework"

```

with

```text
spec.ios.vendored_frameworks = "AdScriptApiClient_withidfa.xcframework"

```

Finally, include the AdScript SDK as dependency in your app's `Podfile`:

```ruby
  pod 'AdScriptApiClient', :path => 'Frameworks/'

```

## Usage[​](#usage "Direct link to Usage")

### Configuring the connector[​](#configuring-the-connector "Direct link to Configuring the connector")

Create the connector by providing the `THEOplayer` instance, an `implementationId`, and a `metadata` object.

```tsx
import { useAdScript, AdScriptMetadata } from '@theoplayer/react-native-analytics-adscript';

const adscriptImplementationId = "myImplementionId";
const adscriptContentMetadata: AdScriptMetadata = {
  assetId: "abc98731568435405",
  type: "content"
};

const App = () => {
  const [adscript, initAdScript] = useAdScript(adscriptImplementationId, adscriptContentMetadata, true /*debug*/);

  const onPlayerReady = (player: THEOplayer) => {
    // Initialize AdScript connector
    initAdScript(player);
  };

  return <THEOplayerView config={playerConfig} onPlayerReady={onPlayerReady} />;
};

```

### Passing metadata dynamically[​](#passing-metadata-dynamically "Direct link to Passing metadata dynamically")

The connector allows passing or updating the current asset's metadata at any time:

```typescript
const onUpdateMetadata = () => {
  adscript.current?.updateMetadata({
    assetId: 'updatedId',
    type: "content",
    // ...
  });
}

```

### Passing additional information[​](#passing-additional-information "Direct link to Passing additional information")

Additional information about the logged-in user from the client database:

```typescript
const onUpdateUser = () => {
  adscript.current?.updateUser([
    "866d3a3c-aa87-4fe7-9066-8286641edd17",     // client-side user identifier (customerId)
    "cf895a00-a987-4501-ac00-6adb57014129",     // client-side user device identifier (Android_ID)
    "9530321a-d3d0-4bda-8704-1eb94a5940c3",     // client-side profile identifier of the logged-in user (profileId)
    "jsg75682-k276t-kw82-k8d5-8926sh6528j2",    // optional - SW device identifier for a situation where there are multiple device IDs in the client DB (typically a) HW ID - fill in i2, b) SW ID - fill in i4).
    "ef3c6dc72a26912f07f0e733d51b46c771d807bf"  // fingerprint of the user's email address
  ]);
}

```
