# THEOplayer iOS/tvOS 5.0 Feature Integrations

## Modularization

The THEOplayer iOS 5.0 SDK uses modularized features, which means there is a base SDK that can handle basic playback and additional feature integrations are provided as separate modules that can be added as desired.
This approach gives more flexibility and results in a reduced application size, since non-required parts are not included in the build of the application.

For example, the core SDK is provided by:

```swift
import THEOplayerSDK
```

Meanwhile, additional features such as Google IMA and Google Cast are provided by:

```swift
import THEOplayerGoogleIMAIntegration
import THEOplayerGoogleCastIntegration
```

## Importing additional integration modules

As shown in the previous section, importing additional integration modules can be done by simply adding the dependency to your swift source file.

For more information on how to fetch the dependencies to your Xcode project, [please check the getting started guide.](./00-getting-started.md)

**Important Note:**
It is required to keep the THEOplayer core SDK and all the required feature modules on the **same** version number.
For example one should **not** import `THEOplayerSDK-core~>5.6.0` and `THEOplayer-Integration-GoogleIMA~>5.5.0` in the same project.

## Adding integrations

After importing the dependencies, it's time to create the integrations and connect them to THEOplayer.

Each module provides a **Factory** class that allows the creation of that specific integration.
For example, the Google IMA module provides `GoogleImaIntegrationFactory` and the Google Cast module provides `GoogleCastIntegrationFactory`.

Additionally, the `THEOplayer` class provides the `addIntegration(_ integration: Integration)` API which allows adding the integration to the player.

Connecting the feature integration with the `THEOplayer` will make them available to be used.
Otherwise, calling an API from an integration without adding it to the `THEOplayer` will cause an error to be thrown.

## Available feature integrations

With THEOplayer iOS 5.0 SDK we currently support the following feature integrations:

| Feature    | Dependency                        | Release |                                                  Documentation                                                  |
| :--------- | :-------------------------------- | :-----: | :-------------------------------------------------------------------------------------------------------------: |
| Google IMA | `THEOplayerGoogleIMAIntegration`  |  5.0.0  | [documentation](https://github.com/THEOplayer/theoplayer-sdk-ios/tree/master/THEOplayer-Integration-GoogleIMA)  |
| Chromecast | `THEOplayerGoogleCastIntegration` |  5.0.0  | [documentation](https://github.com/THEOplayer/theoplayer-sdk-ios/tree/master/THEOplayer-Integration-GoogleCast) |
