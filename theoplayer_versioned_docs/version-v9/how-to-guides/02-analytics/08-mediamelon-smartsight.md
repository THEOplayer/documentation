# MediaMelon SmartSight

MediaMelon SmartSight is an analytics service maintained by MediaMelon. The library is maintained by the MediaMelon team.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |       No       |

## Prerequisites

1. A valid THEOplayer license.
2. A MediaMelon SDK.
3. A MediaMelon Customer ID (**Note:** If you do not know your Customer ID contact MediaMelon at [support@mediamelon.com](mailto:support@mediamelon.com).

## Connecting MediaMelon to THEOplayer

##### Web SDK

For the most up to date information on how to integrate MediaMelon SmartSight with THEOplayer Web SDK, please refer to their integration guide [here](https://docs.mediamelon.com/mediamelon/smartsight-player-sdk-integration/web)

**Step 1: Add THEOplayer and MediaMelon SDK**
Include the following scripts in the web page (before `THEOplayer.js` is loaded):

```html
<script type="text/javascript" src="https://PATH_TO_SMARTSIGHT_SDK/mmsmartstreaming_theoplayer.min.js"></script>
<script type="text/javascript" src="THEOplayer.js"></script>
```

**Step 2: Register and Initialize MediaMelon SDK**
Note: `<customer_id>` is your MediaMelon-assigned Customer ID. If you do not know your Customer ID, contact MediaMelon at [support@mediamelon.com](mailto:support@mediamelon.com).

After the player instance has been created, create a new plugin object, register, report player Info and then initialize the plugin as shown below:

```js
var theoPlayer = new THEOplayer.Player(element, {
  libraryLocation: 'your_library_location',
  license: 'your_license_here',
});

var mmVideoAssetInfo = {
  assetName: 'ASSET_NAME',
  assetId: 'ASSET_ID',
  videoId: 'VIDEO_ID',
  contentType: 'CONTENT_TYPE',
  genre: 'GENRE',
  drmProtection: 'DRM_PROTECTION',
  episodeNumber: 'EPISODE_NUMBER',
  season: 'SEASON',
  seriesTitle: 'SERIES_TITLE',
  videoType: 'VIDEO_TYPE',
  customTags: {
    key1: 'VALUE_STRING1',
    key2: 'VALUE_STRING2',
  },
};

var theoPlugin = new mmTheoJSAdapter();
if (theoPlugin.getRegistrationStatus() === false) {
  theoPlugin.registerMMSmartStreaming('PLAYER_NAME', 'CUSTOMER_ID', 'SUBSCRIBER_ID', 'DOMAIN_NAME', 'SUBSCRIBER_TYPE', 'SUBSCRIBER_TAG');
  theoPlugin.reportPlayerInfo('PLAYER_BRAND', 'PLAYER_MODEL', 'PLAYER_VERSION');
}

theoPlugin.reportAppInfo('APP_NAME', 'APP_VERSION');
theoPlugin.setDeviceInfo('DEVICE_MARKETING_NAME');
theoPlugin.reportVideoQuality('VIDEO_QUALITY');
theoPlugin.reportDeviceId('DEVICE_ID');

var isLive = false; //Set this to true for a live stream or false for a VOD stream
// If isLive is not set here, it will be handled internally by the SDK.
theoPlugin.initialize(theoPlayer, 'STREAM_URL', mmVideoAssetInfo, isLive);

// Call this Error API to report an App Error.
theoPlugin.reportAppError('ERROR_MESSAGE', 'ERROR_CODE');
```

You can find an explanation of the parameters on the snippet above [here](https://docs.mediamelon.com/mediamelon/smartsight-player-sdk-integration/web/theoplayer-web-v2-1#cl-step-4-providing-content-metadata-and-custom-tags).

**Step 3: (Optional) Providing custom metadata and tags**

You can also provide custom metadata and tags as shown below in HTML/JS while setting source information. Please use the `mmVideoAssetInfo` structure to provide this information.

```javascript
player.source = {
  sources: [
    {
      src: '//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',
      type: 'application/x-mpegurl',
    },
  ],
  mmVideoAssetInfo: {
    assetName: 'Elephants Dream',
    assetId: 'ASSETID_STRING',
    videoId: 'VIDEOID_STRING',
    customTags: {
      key1: 'VALUE_STRING1',
      key2: 'VALUE_STRING2',
      key3: 'VALUE_STRING3',
    },
  },
};
```

**Step 4: (Optional) Disable Manifest Fetch**

If your workflow restricts the manifest to be accessible from both player and SDK simultaneously, then, you can disable the fetch of manifest via the `disableManifestsFetch` API:

```javascript
var player = new THEOplayer.Player(element, {
  libraryLocation: 'path_to_your_library/',
  license: 'your_license_here',
});

var theoPlugin = new mmTheoJSAdapter();
if (theoPlugin.getRegistrationStatus() === false) {
  theoPlugin.registerMMSmartStreaming('PLAYER_NAME', 'CUSTOMER_ID', 'SUBSCRIBER_ID', 'DOMAIN_NAME', 'SUBSCRIBER_TYPE', 'SUBSCRIBER_TAG');
  theoPlugin.reportPlayerInfo('PLAYER_BRAND', 'PLAYER_MODEL', 'PLAYER_VERSION');
  theoPlugin.disableManifestsFetch(true);
}

theoPlugin.initialize(theoPlayer);
```

If you now host a page with the logic described above implemented correctly, THEOplayer will start sending beacons to your MediaMelon dashboard and you should be seeing data coming in to the MediaMelon dashboard in no time.

##### Android (TV) SDK

For the most up to date information on how to integrate MediaMelon SmartSight with THEOplayer Android (TV) SDK, please refer to their integration guide [here](https://docs.mediamelon.com/mediamelon/smartsight-player-sdk-integration/android) where you can find step by step guidance as well as code examples.

##### iOS/tvOS SDK

For the most up to date information on how to integrate MediaMelon SmartSight with THEOplayer iOS/tvOS SDK, please refer to their integration guide [here for iOS](https://docs.mediamelon.com/mediamelon/smartsight-player-sdk-integration/ios) and [here for tvOS](https://docs.mediamelon.com/mediamelon/smartsight-player-sdk-integration/tvos-sdk), where you can find step by step guidance as well as code examples.
