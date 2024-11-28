# How to play a Clear-Key-protected stream in THEOplayer?

This article provides a simple example of how to use Clear Key with THEOplayer.

Usually, DRM systems require you to specify a `licenseAcquisitionURL` and additional optional data (e.g.: certificate, credentials, headers). Clear Key does not need a DRM provider. You can provide the key(s) directly to the player (hence "clear" key) through the `keys` property in its `LicenseAcquisitionDescription` (in fact, this property is only available for Clear Key). Alternatively, you can have the player fetch the keys from a `licenseAcquisitionURL`, which returns a JSON object containing the same keys.

Please check also our related [API documentation](pathname:///theoplayer/v8/api-reference/web/interfaces/SourceDescription.html) on how to set these.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |      Yes       |

## How to use Clear Key

Below you can find examples on how the clear key source descriptions look like on Web and Android SDKs:

##### Web SDK

With keys:

```js
player.source = {
  sources: {
    src: 'your-manifest-URL',
    useCredentials: false,
    contentProtection: {
      clearkey: {
        keys: [
          {
            id: 'id',
            value: 'value',
          },
        ],
      },
    },
  },
};
```

With a license URL:

```js
player.source = {
  sources: {
    src: 'https://storage.googleapis.com/shaka-demo-assets/angel-one-clearkey/dash.mpd',
    useCredentials: false,
    contentProtection: {
      clearkey: {
        licenseAcquisitionURL: 'https://cwip-shaka-proxy.appspot.com/clearkey?_u3wDe7erb7v8Lqt8A3QDQ=ABEiM0RVZneImaq7zN3u_w',
      },
    },
  },
};
```

##### Android SDK

```java
SourceDescription.Builder clearKey = new SourceDescription.Builder(
        new TypedSource.Builder("https://storage.googleapis.com/shaka-demo-assets/angel-one-clearkey/dash.mpd")
                .drm(
                        new DRMConfiguration.Builder()
                                .clearkey(
                                        new ClearkeyKeySystemConfiguration.Builder("https://cwip-shaka-proxy.appspot.com/clearkey?_u3wDe7erb7v8Lqt8A3QDQ=ABEiM0RVZneImaq7zN3u_w")
                                                .useCredentials(false)
                                                .build()
                                )
                                .build()
                )
                .build()
);

tpv.getPlayer().setSource(clearKey.build());
```

## Resources

- [API Reference - ClearkeyDecryptionKey](pathname:///theoplayer/v8/api-reference/web/interfaces/ClearkeyDecryptionKey.html)
- [Generate MPEG DASH content encrypted with MPEG CENC ClearKey](https://github.com/Dash-Industry-Forum/dash.js/wiki/Generate-MPEG-DASH-content-encrypted-with-MPEG-CENC-ClearKey): DASH IF on GitHub
- [Clear Key license format](https://w3c.github.io/encrypted-media/#clear-key-license-format): W3C - Encrypted Media Extensions
