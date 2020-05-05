# How to use THEOplayer with KeyOS BuyDRM

This guide explains how you set-up THEOplayer in combination with the [KeyOS BuyDRM](https://www.buydrm.com/keyosplayer), a partnered **multi-DRM vendor**. THEOplayer is pre-integrated with KeyOS and provides a user-friendly API to connect to their **Widevine** and **PlayReady** DRM solutions.

If you are already comfortable with the THEOplayer API, you can go straight over to [DRM Pre-Integration API](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.drmconfiguration.md). 

The following topics will be covered:

### Table of Contents
- [Prerequirements](#prerequirements)
- [Integrating KeyOS BuyDRM](#integrating-keyos-buydrm)
- [Conclusion](#conclusion)
- [Extra resources:](#extra-resources)


## Prerequirements

There are two prerequirements in order to continue with this guide:

1. This guide expects that you have a THEOplayer license. If you aren't using THEOplayer yet, you can start your free trial [here](https://portal.theoplayer.com).

2. This guide expects that you are a client of KeyOS's BuyDRM, and that you are integrated with their streaming infrastructure. Information on BuyDRM can be found at [https://www.buydrm.com/keyosplayer](https://www.buydrm.com/keyosplayer).

If you can place a checkmark next to these two fields, you are good to go.

You will need a valid THEOplayer set-up. If you have no experience with setting up our player, we have an excellent [getting started guide](../../../getting-started/01-sdks/01-web/00-getting-started.md).

## Integrating KeyOS BuyDRM

Starting from the basic template above, you only need to add your BuyDRM token (=**customdata**) to your source configuration, and tell THEOplayer that you are using KeyOS.

##### Web SDK

```js
player.source = {
    sources : {
        src : 'your.mpd',
        type : 'application/dash+xml',
        drm : {
                integration : 'keyos',
                customdata : 'PEtleU9T...blhNTD4='
        }
    }
}
```

Your updated starting template would now look like this:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>THEOplayer 2.X: Getting Started</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href='/path/to/ui.css'> <!-- ads THEOplayer CSS -->
    </head> 
    <body>

        <div class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"></div>
        
        <script type='text/javascript' src='/path/to/THEOplayer.js'></script> <!-- ads THEOplayer library -->
    
    <script>

    var element = document.querySelector('.theoplayer-container'); 
    var player = new THEOplayer.Player(element);

    player.source = {
    sources : [{
        src : 'your.mpd',
        type : 'application/dash+xml',
        drm: {
            integration: 'keyos',
            customdata: 'PEtleU9T...blhNTD4='
        }
    }]
    };

    </script>

    </body>
</html>
```

##### iOS SDK

There is currently no KeyOS DRM integration for iOS. Please make a request at Service Desk should this be a requirement for you.

##### Android SDK

A KeyOS DRM integration is added to the source configuration by adding the keyOsDrm() parameter to drm as such:

```java
SourceDescription dashWithDRM = sourceDescription()
        .sources(
            typedSource("//sourceUrl")
                .drm(
                        keyOsDrm()
                            .customdata("//customData")
                            .playready("//playReadyKeyServer")
                            .widevine("//widevineKeyServer")
                            .build()
                ).build()
        ).build();
```

with customData being the field to add your KeyOS customdata.

We believe that a user-friendly, battle-tested pre-integration like this should be the de facto standard. Information on how you would set-up a more advanced integration can be found at the [DRM Pre-Integration API documentation pages](https://support.theoplayer.com/hc/en-us/articles/115002819629).

## Conclusion

THEOplayer partnered with KeyOS to fully pre-integrate their BuyDRM solution, saving you tons of time. This pre-integration brings along multiple advantages.

- Firstly, it's very simple to set-up KeyOS BuyDRM through THEOplayer.
- Secondly, no surprises - you know that we are compatible with each other. We also regularly validate our integration, and are the first to know about changes to KeyOS.
- Thirdly, it offers extra maintainability. Even if the KeyOS infrastructure changes, we attempt to be backwards compatible.
- Lastly, it just works!

## Extra resources:

1. [DRM Pre-Integration API](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.drmconfiguration.md)

2. [THEOplayer Getting Started Guide](../../../getting-started/01-sdks/01-web/00-getting-started.md)

3. [KeyOS BuyDRM](https://www.buydrm.com/keyosplayer)