# Google Dynamic Ad Insertion (DAI)

Google DAI is a Server-Side Ad-Insertion solution offered by Goggle where THEOplayer is pre-integrated and offers playback for HLS and DASH Streams. A demo can be found at [https://demo.theoplayer.com/google-dai](https://demo.theoplayer.com/google-dai).


### Table of Contents
- [SDKs](#sdks)
- [Pre-requirements](#pre-requirements)
- [Starting Template](#starting-template)
- [Integrating Yospace](#integrating-yospace)
- [Conclusion](#conclusion)
  
## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   | Unverified  |      Unverified       |      Yes       |

## Pre-requirements

##### Web SDK

1. Your THEOplayer SDK needs to have the Google-dai module enabled.
2. You need to include the Google-dai JavaScript SDK as this is a dependency.

##### Android SDK

1. Your THEOplayer SDK needs to have the Google-dai module enabled.
2. You need to include the Google-dai Dependancy library in your Android project.

##### iOS SDK

1. Your THEOplayer SDK needs to have the Google-dai module enabled.
2. You need to include the Google-dai (Interactive Media Ads SDK) framework.

## Starting Template

##### Web SDK

The first thing you need is a valid THEOplayer set-up. If you have no experience with setting up our player, we have an excellent [getting started guide](../../getting-started/01-sdks/01-web/00-getting-started.md).

To get THEOplayer to work, you only need to do three things:

1. Reference the THEOplayer JavaScript library (and optionally the default CSS styles).
2. Add a container which can hold your video player with HTML.
3. Create your player through JavaScript using our [API](https://docs.theoplayer.com/api-reference/web/theoplayer.player.md).

A basic HTML page with a working THEOplayer could like the following:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>THEOplayer 2.X: Getting Started</title>
        <metaname="viewport"content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href='/path/to/ui.css'><!-- ads THEOplayer CSS -->
    </head>
    <body>
    
        <div class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"></div>
        
        <script type='text/javascript'src='/path/to/THEOplayer.js'></script><!-- ads THEOplayer library -->
        <script>
        
            var element = document.querySelector('.theoplayer-container'); 
            var player = new THEOplayer.Player(element);
            
            player.source = {
                sources : [{
                    src : 'your.m3u8',
                    type : 'application/x-mpegurl'
                }]
            };
        
        </script>
    </body>
</html>
```

 Pretty self-explanatory, isn't it?

```html    
<link rel="stylesheet" type="text/css" href='/path/to/ui.css'>
```
```html
<script type='text/javascript'src='/path/to/THEOplayer.js'></script>
```
The two snippets above are the references to the JS and CSS library.

```html
<div class="theoplayer-container video-js theoplayer-skin theo-seekbar-above-controls"></div>
```
The snippet above is your HTML container.

```javascript
<script>

var element = document.querySelector('.theoplayer-container'); 
var player = new THEOplayer.Player(element);

player.source = {
    sources : [{
        src : 'your.mpd',
        type : 'application/dash+xml'
    }]
};

</script>
```

The snippet above initializes your player, including a HLS source.


## Integrating Google-DAI

##### Web SDK

Add a Google DAI javascript library.

```javascript
 <script type="text/javascript" src="//imasdk.googleapis.com/js/sdkloader/ima3_dai.js"></script>
```

Add a Google DAI ad configuration to the sources.

```javascript
const TYPES = {
        hls: 'application/vnd.apple.mpegurl',
        dash: 'application/dash+xml'
};

// example and reference tester at https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai/vastinspector
    const SOURCES = {
        dash: {
            vod: {
                integration: 'google-dai',
                availabilityType: 'vod',
                apiKey: null,
                contentSourceID: '<contentSourceID>',
                videoID: '<videoID>',
            },
            live: {
                integration: 'google-dai',
                availabilityType: 'live',
                apiKey: null,
                assetKey: '<assetKey>',
            }
        },
        hls: {
            vod: {
                integration: 'google-dai',
                availabilityType: 'vod',
                apiKey: null,
                contentSourceID: '<contentSourceID>',
                videoID: '<videoID>'
            },
            live: {
                integration: 'google-dai',
                availabilityType: 'live',
                apiKey: null,
                assetKey: '<assetKey>',
            }
        }
    };
    // Configure THEOplayer Source
    const MANIFEST_TYPE = 'hls'; // 'hls' / 'dash'
    const AVAILABILITY_TYPE = 'vod'; // 'vod' or 'live'

    player.source = {
        sources: {
            type: TYPES[MANIFEST_TYPE],
            ssai: SOURCES[MANIFEST_TYPE][AVAILABILITY_TYPE]
        }
    };

```

##### Android SDK

Add a Google DAI dependancy in the build.gradle file of your project.

```java
//Google Dai library
implementation 'com.google.ads.interactivemedia.v3:interactivemedia:3.19.0'
```

Add a Google DAI ad configuration to the sources.

```java
//Dash Vod
SourceDescription sourceVod = sourceDescription(
                daiTypedSource(
                        new GoogleDaiVodConfiguration.Builder("api_key", "content_source_id", "video_id").build()
                ).type(SourceType.DASH).build()
        ).build();

 //HLS Vod       
SourceDescription sourceVod = sourceDescription(
                daiTypedSource(
                         new GoogleDaiVodConfiguration.Builder("api_key", "content_source_id", "video_id").build()
                ).type(SourceType.HLS).build()
        ).build();
//HLS Live
SourceDescription sourceLive = sourceDescription(
                daiTypedSource(
                         new GoogleDaiLiveConfiguration.Builder("api_key", "asset_key").build()
                ).type(SourceType.HLS).build()
        ).build();
//DASH Live       
SourceDescription sourceLive = sourceDescription(
                daiTypedSource(
                         new GoogleDaiLiveConfiguration.Builder("api_key", "asset_key").build()
                ).type(SourceType.DASH).build()
        ).build();     
// Configuring THEOplayer with defined SourceDescription object.
        theoPlayer.setSource(sourceVod);      //VOD Source
      //theoPlayer.setSource(sourceLive);     //Live Source   
```

##### iOS SDK

Add a Google-dai (Interactive Media Ads SDK) framework to your project.

Step 1. 
Download [Google-dai (Interactive Media Ads SDK) framework](https://developers.google.com/interactive-media-ads/docs/sdks/ios/dai/download)

Step 2. 
Check [How to Configure Framework Section to add Googel-dai Framework](https://docs.theoplayer.com/getting-started/01-sdks/03-ios/00-getting-started.md)


Add a Google DAI ad configuration to the sources.

```swift
//Google DAI HLS VOD Stream
private var GoogleDAIVOD: SourceDescription {
           let daiConfig = GoogleDAIVodConfiguration(videoID: "tears-of-steel", contentSourceID: "19463", apiKey: "", authToken: nil, streamActivityMonitorID: nil, adTagParameters: nil)
           let typedSource = GoogleDAITypedSource(ssai: daiConfig)
           return SourceDescription(source: typedSource)
    }
//Google DAI HLS VOD Stream
private var GoogleDAILIVE: SourceDescription {
           let daiConfig = GoogleDAILiveConfiguration(assetKey: "sN_IYUG8STe1ZzhIIE_ksA", apiKey: "", authToken: nil, streamActivityMonitorID: nil, adTagParameters: nil)
           let typedSource = GoogleDAITypedSource(ssai: daiConfig)
           return SourceDescription(source: typedSource)
       }
// Configure the player's source to initilaise playback
theoplayer.source = GoogleDAIVOD  //VOD Source    
theoplayer.source = GoogleDAILIVE  //Live Source    
```

## Conclusion

THEOplayer SDK and Google-DAI are fully pre-integrate to deliver Server-Side Ad Insertion solution, allowing customers to play streams in a breeze.

Extra resources:

1. [Google DAI Pre-Integration API](https://docs.theoplayer.com/api-reference/web/theoplayer.googledaiconfiguration.md)
2. [THEOplayer Getting Started Guide](web/../../../getting-started/01-sdks/01-web/00-getting-started.md)
3. [Google DAI website](https://developers.google.com/interactive-media-ads)

Related articles

- [Google DAI HTML Reference](https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai)
- [Google DAI Android Reference](https://developers.google.com/interactive-media-ads/docs/sdks/android/dai)
- [Google DAI iOS Reference](https://developers.google.com/interactive-media-ads/docs/sdks/ios/dai)