# React Native THEOplayer DRM

The `@theoplayer/react-native-drm` package provides a set of connectors for [react-native-theoplayer](https://github.com/THEOplayer/react-native-theoplayer), allowing playback of DRM-protected content.

## Installation[​](#installation "Direct link to Installation")

```sh
npm install @theoplayer/react-native-drm

```

## Usage[​](#usage "Direct link to Usage")

The connector needs to be registered to the `ContentProtectionRegistry`, providing both `integrationId` and `keySystemId`:

```typescript
import { ContentProtectionRegistry } from 'react-native-theoplayer';
import { EzdrmFairplayContentProtectionIntegrationFactory } from 'react-native-theoplayer-drm';

ContentProtectionRegistry.registerContentProtectionIntegration(
  'ezdrm',   // integrationId
  'fairplay', // keySystemId
  new EzdrmFairplayContentProtectionIntegrationFactory()
);

```

The combination of both `integrationId` and `keySystemId` points the player towards the connector for a specific source, in this case the `ezdrm` connector for `fairplay`:

```typescript
const source = {
  "sources": {
    "src": "<source_url>",
    "contentProtection": {
      "integration": "ezdrm",
      "fairplay": {
        "certificate": "<base64encoded_certificate>",
        "licenseAcquisitionURL": "<license_url>"
      },
    }
  }
};

```

## Connectors[​](#connectors "Direct link to Connectors")

The [THEOplayer DRM integrations repository](https://github.com/THEOplayer/samples-drm-integration) contains a list of integrations for native Web, Android & iOS THEOplayer SDKs.

As the content protection API of `react-native-theoplayer` is very similar to that of THEOplayer's native Web SDK, the available Web connectors can mostly be reused as-is. These connectors are not available as npm packages however, and sometimes have dependencies on web-specific utilities. Because of this, the `@theoplayer/react-native-drm` package provides the following connectors, readily available to be used by `react-native-theoplayer`:

| Vendor                       | Widevine | Playready | FairPlay |
| ---------------------------- | -------- | --------- | -------- |
| BuyDRM KeyOS                 | ✓        | ✓         | ✓        |
| EZDRM                        | ✓ (\*)   | ✓ (\*)    | ✓        |
| Verimatrix MultiDRM Core DRM | ✓        | ✓         | ✓        |
| Anvato                       | ✓        | ✗         | ✓        |
| Axinom                       | ✓        | ✗         | ✓        |
| CastLabs                     | ✓        | ✓         | ✓        |
| PallyCon                     | ✗        | ✗         | ✓        |
| MediaKind                    | ✓ (\*)   | ✓ (\*)    | ✓        |

(\*) No connector is needed for these DRM vendors; it is handled by the player's default DRM flow.
