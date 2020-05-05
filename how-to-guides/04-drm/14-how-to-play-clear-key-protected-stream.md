# How to play a Clear Key protected stream in THEOplayer?

This article provides a simple example of how to use Clear Key with THEOplayer.

Usually, DRM systems require you to specify a *licenseAcquisitionURL* and additional optional data (e.g.: certificate, credentials, headers). Clear Key does not need a DRM provider: you can provide the key(s) directly to the player (hence "clear" key) through the *keys* property in its LicenseAcquisitionDescription (in fact, this property is only available for Clear Key). Alternatively, you can have the player fetch the keys from a "license server" (`licenseAcquisitionURL`), but really that just returns a JSON object containing the same keys. Please check also our related [API documentation](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.sourcedescription.md).

### Table of Contents
- [SDKs](#sdks)
- [How to use Clear Key](#how-to-use-clear-key)
- [Resources](#resources)

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | Yes  |      Yes      |      Yes       |

## How to use Clear Key

How does a sourceDescription with Clear Key look like? Below you find snippets for Web, Android and iOS SDKs:

##### Web SDK

```js
player.source = {
    sources: {
        src: "your-manifest-URL",
        contentProtection: {
            clearkey: {
                keys : [{
                    // your decryption key(s)
                }]
            }
        }
    }
};
```

##### Android SDK

// to be added

##### Web SDK

// to be added

## Resources

- [API Reference - ClearkeyDecryptionKey](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.clearkeydecryptionkey.md)

- [Generate MPEG DASH content encrypted with MPEG CENC ClearKey](https://github.com/Dash-Industry-Forum/dash.js/wiki/Generate-MPEG-DASH-content-encrypted-with-MPEG-CENC-ClearKey): DASH IF on GitHub
- [Clear Key license format](https://w3c.github.io/encrypted-media/#clear-key-license-format): W3C - Encrypted Media Extensions