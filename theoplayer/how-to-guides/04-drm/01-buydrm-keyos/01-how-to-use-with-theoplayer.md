# How to use THEOplayer with KeyOS BuyDRM

This guide explains how you set up THEOplayer in combination with the [KeyOS BuyDRM](https://www.buydrm.com/keyosplayer), a partnered **multi-DRM vendor**. THEOplayer is pre-integrated with KeyOS and provides a user-friendly API to connect to their **Widevine** and **PlayReady** DRM solutions.

If you are already comfortable with the THEOplayer API, you can go straight over to [DRM Pre-Integration API](pathname:///theoplayer/v8/api-reference/web/interfaces/DRMConfiguration.html).

## Prerequisites

This guide expects you to:

1. Have a THEOplayer license. If you aren't using THEOplayer yet, you can start your free trial [here](https://portal.theoplayer.com).

2. Be a client of KeyOS's BuyDRM, and that you are integrated with their streaming infrastructure. Information on BuyDRM can be found at [https://buydrm.com/multikey-demo/](https://buydrm.com/multikey-demo/).

If you can place a checkmark next to these two fields, you are good to go.

You will also need a valid THEOplayer set-up. If you have no experience with setting up our player, we have an excellent [getting started guide](../../../getting-started/01-sdks/01-web/00-getting-started.mdx).

## Integrating KeyOS BuyDRM

Starting from the basic template above, you only need to add your BuyDRM token (=**customdata**) to your source configuration, and tell THEOplayer that you are using KeyOS.

##### Web SDK

```js
player.source = {
  sources: {
    src: "your.mpd",
    type: "application/dash+xml",
    drm: {
      integration: "keyos",
      customdata: "PEtleU9T...blhNTD4=",
      playready: {
        licenseAcquisitionURL: "<LICENSE_KEY_URL_PLAYREADY>"
      },
      widevine: {
        licenseAcquisitionURL: "<LICENSE_KEY_URL_WIDEVINE>"
      }
    }
  }
};
```

Your updated starting template would now look like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>THEOplayer Web SDK: Getting Started</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="/path/to/ui.css" />
    <!-- adds THEOplayer CSS -->
  </head>
  <body>
    <div
      class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"
    ></div>

    <script type="text/javascript" src="/path/to/THEOplayer.js"></script>
    <!-- adds THEOplayer library -->

    <script>
      var element = document.querySelector(".theoplayer-container");
      var player = new THEOplayer.Player(element, {
        license: "your_license_string",
        //...
      });

      player.source = {
        sources: [
          {
            src: "your.mpd",
            type: "application/dash+xml",
            drm: {
              integration: "keyos",
              customdata: "PEtleU9T...blhNTD4=",
              playready: {
                licenseAcquisitionURL: "<LICENSE_KEY_URL_PLAYREADY>"
              },
              widevine: {
                licenseAcquisitionURL: "<LICENSE_KEY_URL_WIDEVINE>"
              }
            }
          }
        ]
      };
    </script>
  </body>
</html>
```

##### Legacy iOS/tvOS SDK (4.12.x)

A KeyOS DRM integration is added to the source configuration by adding the keyOsDrm() parameter to drm as such:

```swift
public static var buyDRMkeyOS: SourceDescription {
    let licenseAcquisitionURL: String = "<LICENSE_KEY_URL_FAIRPLAY>"
    let certificateURL: String = "<CERTIFICATE_URL_FAIRPLAY>"
    let token: String = "<TOKEN_FAIRPLAY>"
    let type: String = "application/x-mpegURL"
    let src = "<HLS_STREAM_URL>"
    let drm: KeyOSDRMConfiguration = KeyOSDRMConfiguration(licenseAcquisitionURL: licenseAcquisitionURL, certificateURL: certificateURL, customdata: token)
    let typedSource: TypedSource = TypedSource(src: src, type: type, drm: drm)
    let source: SourceDescription = SourceDescription(source: typedSource)
    return source
}

// Configure the player's source to initilaise playback
        THEOplayer.source = buyDRMkeyOS

```

Where `token` for customdata is the Authentication XML generated from their platform.

##### Android SDK

A KeyOS DRM integration is added to the source configuration by adding the keyOsDrm() parameter to DRM as such:

```java
SourceDescription dashWithDRM = sourceDescription()
        .sources(
            typedSource("//sourceUrl")
                .drm(
                        keyOsDrm()
                            .customdata("//token")
                            .playready("//playReadyKeyServer")
                            .widevine("//widevineKeyServer")
                            .build()
                ).build()
        ).build();
```

Where:
`token` for customdata is the Authentication XML generated from their platform.

## Conclusion

THEOplayer partnered with KeyOS to fully pre-integrate their BuyDRM solution, saving you tons of time. This pre-integration brings along multiple advantages:

- It's very simple to set up KeyOS BuyDRM through THEOplayer.
- No surprises - you know that we are compatible with each other. We also regularly validate our integration, and are the first to know about changes to KeyOS.
- It offers extra maintainability. Even if the KeyOS infrastructure changes, we attempt to be backwards compatible.

## Extra resources:

1. [DRM Pre-Integration API](pathname:///theoplayer/v8/api-reference/web/interfaces/DRMConfiguration.html)

2. [THEOplayer Getting Started Guide](../../../getting-started/01-sdks/01-web/00-getting-started.mdx)

3. [KeyOS BuyDRM](https://www.buydrm.com/keyosplayer)
