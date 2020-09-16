# Conviva Integration for VideoAnalytics & AdsAnalytics

This article describes on how to integrate Conviva pre-integration for VideoAnalytics and AdsAnalytics offered outside THEOplayer SDK. 

- Demo Page: [https://cdn.theoplayer.com/conviva/conviva_test.html](https://cdn.theoplayer.com/conviva/conviva_test.html)
- Github Link: [THEOplayer sample-conviva-analytics-html5-sdk](https://github.com/THEOplayer/sample-conviva-analytics-html5-sdk)

### Table of Contents
- [SDKs](#sdks)
- [Code example](#code-example)
  - [Pre-requirements](#pre-requirements)
  - [Configuration](#configuration)
- [Related links:](#related-links)
  
## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK | Tizen | WebOS |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: | :----: | :----: |
|   Yes   |     No     |   No   | No  |      Yes       |      Unverified       |  Yes | Yes |

## Code example

### Pre-requirements

##### Web SDK

1. Have a THEOplayer SDK.
2. Setup the [Basic Getting Started with THEOplayer](https://docs.portal.theoplayer.com/getting-started/01-sdks/01-web/00-getting-started.md) 
3. Include Conviva's SDK. For example,

```html
//Recommended Conviva Library
<script type='text/javascript' src='//cdn.theoplayer.com/conviva/conviva-4.0.15.js'></script>
```
* Note: You can download the latest conviva library from [Conviva Developer Community](https://community.conviva.com/site/global/home/p_home.gsp)

### Configuration

The snippets below explain how you can pass on Conviva settings to a THEOplayer configuration object.

##### Web SDK

1. Setting up of your conviva configurations like below: 

```js
        var TEST_CUSTOMER_KEY = '876a2328cc34e791190d855daf389567c96d1e86';
        var TOUCHSTONE_SERVICE_URL = 'https://theoplayer-test.testonly.conviva.com';
        var convivaConfigs = {};
        
        convivaConfigs[Conviva.Constants.GATEWAY_URL] = TOUCHSTONE_SERVICE_URL;
        convivaConfigs[Conviva.Constants.LOG_LEVEL] = Conviva.Constants.LogLevel.DEBUG;
        convivaConfigs[Conviva.Constants.CUSTOMER_KEY] = TEST_CUSTOMER_KEY;
```

2. a. Initialise THEOplayer-conviva plugin with the parameters including any manual metatdata for that particular asset.

```js
//Include the Script - THEOplayer Integrated Module with Conviva (Without Content Metadata function)
<script type='text/javascript' src='//cdn.theoplayer.com/conviva/conviva_theoplayer_plugin.js'></script>

//Prepare the metadata Content Info
var contentInfo = {};
contentInfo[Conviva.Constants.ASSET_NAME] = assetName;
contentInfo[Conviva.Constants.STREAM_URL] = url;
contentInfo[Conviva.Constants.IS_LIVE] = Conviva.Constants.StreamType.LIVE; // Or Conviva.Constants.StreamType.VOD
contentInfo[Conviva.Constants.PLAYER_NAME] = playerName;
contentInfo[Conviva.Constants.VIEWER_ID] = viewerId;
contentInfo[Conviva.Constants.DURATION] = duration;
contentInfo[Conviva.Constants.ENCODED_FRAMERATE] = encodedFps;
contentInfo[Conviva.Constants.DEFAULT_RESOURCE] = defaultResource;
contentInfo[ANY_TAG_KEY1] = "VALUE1";
contentInfo[ANY_TAG_KEY2] = "VALUE2";

//Initialise the THEOplayer Conviva Plugin with the defined Content Info 
var integration = new NewConvivaIntegration(player,convivaConfigs,contentInfo);

```

*  Points to Remember:
    -  `player` in the `NewConvivaIntegration` is THEOplayer Object initialised on the web page. `convivaConfigs` are the details of the conviva and `contentMetadata` is the last parameter to add manually metadata associated to that content. All the params added to `contentInfo` should be a string.
 
2. b. Initialise THEOplayer-conviva-metadata plugin with function MetatdataReciever for that asset.

```js
//Include the Script - THEOplayer Integrated Module with Conviva (With Content MetadataReciever function)
<script type='text/javascript' src='//cdn.theoplayer.com/conviva/conviva_theoplayer_metadata_plugin.js'></script>

//Prepare a function which creates metadata ContentInfo when the source of the player is changed
function contentMetadataReceiver(){
var contentInfo = {};
contentInfo[Conviva.Constants.ASSET_NAME] = assetName;
contentInfo[Conviva.Constants.STREAM_URL] = url;
contentInfo[Conviva.Constants.IS_LIVE] = Conviva.Constants.StreamType.LIVE; // Or Conviva.Constants.StreamType.VOD
contentInfo[Conviva.Constants.PLAYER_NAME] = playerName;
contentInfo[Conviva.Constants.VIEWER_ID] = viewerId;
contentInfo[Conviva.Constants.DURATION] = duration;
contentInfo[Conviva.Constants.ENCODED_FRAMERATE] = encodedFps;
contentInfo[Conviva.Constants.DEFAULT_RESOURCE] = defaultResource;
contentInfo[ANY_TAG_KEY1] = "VALUE1";
contentInfo[ANY_TAG_KEY2] = "VALUE2";
return contentInfo;
}

//Initialise the THEOplayer Conviva Plugin with the defined Content Info 
var integration = new NewConvivaIntegration(player,convivaConfigs,contentMetadataReceiver);

```
* Points to Remember: 
    - `contentMetadataReceiver` is `(source) => contentMetadata`, also it might be needed to `bind(this)` the function. This function is automatically called again when the source of the player is changed. 

* Note:  You can also Clone the repo to have the local version of Plugin and include the file in the `script` tag. For debugging and development purposes, we have a debug version as well which can be used by replacing the URL with `conviva_theoplayer_metadata_plugin_debug.js`

## Related links:

- Demo page: [Conviva Analytics Test Page](https://cdn.theoplayer.com/conviva/conviva_test.html).
- Github Link: [THEOplayer sample-conviva-analytics-html5-sdk](https://github.com/THEOplayer/sample-conviva-analytics-html5-sdk)
- [Conviva SDK Documentation](https://cdn.theoplayer.com/conviva/Conviva_Documentation_4.0.14/index.html)


