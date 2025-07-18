# DoveRunner

This article describes how to configure [DoveRunner Multi-DRM](https://doverunner.com/docs/content-security/multi-drm/) with THEOplayer. This content is based on DoveRunner's documentation.

Head to our page on [DRM](../../how-to-guides/04-drm/00-introduction.md) for more general information.

**Note**: The details in the guide apply for DoveRunner (formerly known as "PallyCon"). While most details, API hostnames and variables have been updated to reflect DoveRunner, certain configurations such as the `pallycon-customdata-v2` HTTP request header will still apply.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |   Unverified   |

## Code Examples

##### Web SDK

```js
if (HLS) {
    const certificateUrl = "<CERTIFICATE_URL>";

    // a response interceptor for the certificate URL might be required.
    player.network.addResponseInterceptor(function(response) {
        if(response.url == certificateUrl) {
            const rawResponse = response.body;
            const responseText = String.fromCharCode.apply(null, new Uint8Array(rawResponse));
            const raw = window.atob(responseText);
            const rawLength = raw.length;
            let certificate = new Uint8Array(new ArrayBuffer(rawLength));

            for(let i = 0; i < rawLength; i++)
                certificate[i] = raw.charCodeAt(i);
            response.respondWith({body: certificate})
        }
    });

    const drmConfiguration = {
        "fairplay": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_FAIRPLAY>",
            "certificateURL": certificateUrl,
            "headers": {
                "<CUSTOM_HEADER_NAME>" : "<CUSTOM_HEADER_VALUE>" // e.g. 'pallycon-customdata-v2': 'eyJkYXRhIjoibWJLV1NjSUNIU25WMjZQWFB4cGlDQUJVbnZsOGxCOWRNZDhHZ3dhbjZqRDFwNFZoQk51VlhQY2RMaG9nNTNYbngyTjFaalwvQ3BxZ3RUS2k5Rzd3MUZ3PT0iLCJzaXRlX2lkIjoiREVNTyIsImRybV90eXBlIjoiUGxheVJlYWR5In0='
            }
        }
    };
    player.source = {
        "sources": {
            "src": "<HLS_STREAM_URL>",
            "type": "application/x-mpegurl",
            "contentProtection": drmConfiguration
        }
    }
} else if (DASH) {
    const drmConfiguration = {
        "playready": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_PLAYREADY>",
            "headers": {
                "<CUSTOM_HEADER_NAME>" : "<CUSTOM_HEADER_VALUE>"
            }
        },
        "widevine": {
            "licenseAcquisitionURL": "<LICENSE_KEY_URL_WIDEVINE>",
            "headers": {
                "<CUSTOM_HEADER_NAME>" : "<CUSTOM_HEADER_VALUE>"
            }
        }
    };
    player.source = {
        "sources": {
            "src": "<DASH_STREAM_URL>",
            "type": "application/dash+xml",
            "contentProtection": drmConfiguration
        }
    }
}"
```

##### Android SDK

```java
// Map<String, String> headers =  new HashMap<String, String>();
// headers.put("<CUSTOM_HEADER_NAME>", "<CUSTOM_HEADER_VALUE>"); // e.g. "pallycon-customdata-v2", "eyJkYXRhIjoibWJLV1NjSUNIU25WMjZQWFB4cGlDQUJVbnZsOGxCOWRNZDhHZ3dhbjZqRDFwNFZoQk51VlhQY2RMaG9nNTNYbngyTjFaalwvQ3BxZ3RUS2k5Rzd3MUZ3PT0iLCJzaXRlX2lkIjoiREVNTyIsImRybV90eXBlIjoiUGxheVJlYWR5In0="
DRMConfiguration drmConfiguration = new DRMConfiguration.Builder()
    .widevine(
        new KeySystemConfiguration(
            "<LICENSE_KEY_URL_WIDEVINE>", headers, false, null
        )
    )
    .build();
TypedSource typedSource = new TypedSource.Builder()
    .src("<DASH_STREAM_URL>")
    .drm(drmConfiguration)
    .build();
SourceDescription sourceDescription = SourceDescription.Builder.sourceDescription()
    .sources(typedSource)
    .build();
theoplayer.getPlayer().setSource(sourceDescription);
```

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

```swift
let drmConfiguration = FairPlayDRMConfiguration(
    licenseAcquisitionURL: "<LICENSE_KEY_URL_FAIRPLAY>",
    certificateURL: "<CERTIFICATE_URL>",
    headers: [["<CUSTOM_HEADER_NAME>": "<CUSTOM_HEADER_VALUE>"]] // e.g. "pallycon-customdata-v2": "eyJkYXRhIjoibWJLV1NjSUNIU25WMjZQWFB4cGlDQUJVbnZsOGxCOWRNZDhHZ3dhbjZqRDFwNFZoQk51VlhQY2RMaG9nNTNYbngyTjFaalwvQ3BxZ3RUS2k5Rzd3MUZ3PT0iLCJzaXRlX2lkIjoiREVNTyIsImRybV90eXBlIjoiUGxheVJlYWR5In0="
)
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl", drm: drmConfiguration)
let sourceDescription = SourceDescription(source: typedSource)
theoplayer.source = sourceDescription
```

## Resources

- https://doverunner.com/docs/content-security/multi-drm/
- https://doverunner.com/docs/content-security/multi-drm/clients/html5-player/
- https://doverunner.com/docs/content-security/multi-drm/clients/widevine-android/
- https://doverunner.com/docs/content-security/multi-drm/clients/fairplay-ios/

## Related Articles

- [Uplynk](./12-uplynk.md)
- [Xstream](./13-xstream.md)
- [Vualto VuDRM](./11-vualto-vudrm.md)
- [Vimond](./10-vimond.md)
- [Verimatrix MultiRights](./09-verimatrix-multirights.md)
- [Nagra Conax Contego](./08-nagra-conax-contego.md)
