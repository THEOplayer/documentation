# Getting started with Millicast for iOS

<!-- -->

## Usage[​](#usage "Direct link to Usage")

1. Follow our [Getting Started guide](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/ios/getting-started.md) to set up THEOplayer in your iOS app.
2. Add the `THEOplayer-Integration-Millicast` dependency to your project.
3. Add the `THEOplayerMillicastIntegration` to the player.
4. Add a `MillicastSource` to your player's source.

### Add the `THEOplayer-Integration-Millicast` dependency[​](#add-the-theoplayer-integration-millicast-dependency "Direct link to add-the-theoplayer-integration-millicast-dependency")

Add the Millicast integration as a dependency in to your project:

* Swift Package Manager
* Cocoapods

```swift
.package(url: "https://github.com/THEOplayer/theoplayer-sdk-apple.git", from: "8.10.0")
.product(name: "THEOplayerMillicastIntegration", package: "theoplayer-sdk-apple")

```

```ruby
pod 'THEOplayer-Integration-Millicast', '~> 8.10'

```

### Add the Millicast integration to the player[​](#add-the-millicast-integration-to-the-player "Direct link to Add the Millicast integration to the player")

First import the integration into your project:

```swift
import THEOplayerMillicastIntegration

```

Create and add the `THEOplayerMillicastIntegration` to your `THEOplayer`:

```swift
let millicastIntegration = MillicastIntegrationFactory.createIntegration()
theoplayer.addIntegration(millicastIntegration)

```

### Add a `MillicastSource`[​](#add-a-millicastsource "Direct link to add-a-millicastsource")

After setting up a `THEOplayer` in your app, set its source to a `SourceDescription` containing a `MillicastSource`. You'll need a Millicast account ID and stream name to identify your Millicast stream:

```swift
let millicastSource = SourceDescription(source: MillicastSource(src: "multiview", streamAccountId: "k9Mwad"))
theoplayer.source = millicastSource

```

Here `src` refers to the stream name. Make sure to replace the above `src` and `streamAccountId` with your own. If your source is a secure stream, then you will also need to add a subscriber token to the source as follows:

```swift
MillicastSource(src: ..., streamAccountId: ..., subscriberToken: "Your token")

```

### Add configuration[​](#add-configuration "Direct link to Add configuration")

Optionally, you can provide additional configuration to the source, specific for working with Millicast streams. To configure these settings, add a `MCClientOptions` object as the `connectOptions` parameter of the source object and specify the options.

In the example below, the configuration is used to disable any audio from the Millicast stream. For an exhaustive list of these options, visit the [documentation](https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcclientoptions).

```swift
let connectOptions: MCClientOptions = .init()
connectOptions.disableAudio = true
MillicastSource(src: ..., streamAccountId: ..., connectOptions: connectOptions)

```

### Background playback[​](#background-playback "Direct link to Background playback")

In order to play Millicast sources in the background, ensure you've configured a `backgroundPlaybackDelegate` on the player. A simple example for always allowing background playback is shown below:

```swift
class BackgroundDelegate: BackgroundPlaybackDelegate {
    func shouldContinueAudioPlaybackInBackground() -> Bool {
        return true
    }
}
theoplayer.backgroundPlaybackDelegate = BackgroundDelegate()

```

## More information[​](#more-information "Direct link to More information")

* [API references](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/ios/Millicast/index.html)
