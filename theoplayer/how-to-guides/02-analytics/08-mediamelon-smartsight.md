# MediaMelon SmartSight
MediaMelon SmartSight is an analytics service maintained by MediaMelon. THEOplayer offers a pre-integration for this solution.

### Table of Contents

- [SDKs](#sdks)
- [Prerequisites](#prerequisites)
- [Connecting MediaMelon to THEOplayer](#connecting-mediamelon-to-theoplayer)
- [Related links](#related-links)

## SDKs

| Web SDK |           Android SDK            |             iOS SDK              | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :------------------------------: | :------------------------------: | :------: | :------------: | :------------: |
|   Yes   | Through CSS/JavaScript injection* | Through CSS/JavaScript injection* |    ?     |       ?        |   Unverified   |

*CSS/JavaScript injection in the project is only possible with the legacy mobile SDKs (up to 4.12.X).

## Prerequisites

1. A valid THEOplayer license.
2. A MediaMelon SDK `mmsmartstreaming-theo-sdk.js`.
3. A MediaMelon Customer ID (**Note:** If you do not know your Customer ID contact MediaMelon at [support@mediamelon.com](support@mediamelon.com).

## Connecting MediaMelon to THEOplayer

##### Web SDK

**Step 1: Add THEOplayer & MediaMelon SDK**
Include the following scripts in the web page (before THEOplayer.js files are loaded):

```html
<script
  type="text/javascript"
  src="https://PATH_TO_SMARTSIGHT_SDK/mmsmartstreaming-theo-sdk.js"
></script>
<script type="text/javascript" src="THEOplayer.js"></script>
```

**Step 2: Register and Initialize MediaMelon SDK**
Note: `<customer_id>` is your MediaMelon-assigned Customer ID. If you do not know your Customer ID, contact MediaMelon at [support@mediamelon.com](support@mediamelon.com).

After the player instance has been created, create a new plugin object, register, report player Info and then initialize the plugin as shown below:

```js
var player = new THEOplayer.Player(element, {
    libraryLocation : 'path_to_your_library/',
    license: 'your_license_here'
});

var theoPlugin = new mmTheoJSAdapter();
if(theoPlugin.getRegistrationStatus() === false){
    theoPlugin.registerMMSmartStreaming(<player_name>, <customer_id>, <subscriber_id>, <domain_name>, <subscriber_type> , <subscriber_tag>);
    theoPlugin.reportPlayerInfo(<player_brand>, <player_model>, <player_version>);
    }
theoPlugin.initialize(player);
```

Below, you’ll find an explanation of the parameters in the snippet above:

|      Variable       |                                                                                     Description                                                                                      |
| :-----------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   `<player_name>`   |                                                                String containing the player name (e.g. “THEOplayer”).                                                                |
|   `<customer_id>`   |                                                               String containing your MediaMelon-assigned Customer ID.                                                                |
|  `<subscriber_id>`  |                                              String containing your subscriber’s ID. If you do not use subscriber IDs, enter “unknown”.                                              |
|   `<domain_name>`   |                                                         String containing the website address where the player is embedded.                                                          |
| `<subscriber_type>` |                                    String containing the subscriber type (e.g. “Free”, “Paid”). If you do not use subscriber types, enter a null.                                    |
| `<subscriber_tag>`  | String containing an additional subscriber-specific information. This is sent in clear (not hashed) to SmartSight and it is advised to not send sensitive information in this field. |
|  `<player_brand>`   |                                                                         String containing the player brand.                                                                          |
|  `<player_model>`   | String containing the player model. For example - This could be a variant of player. Say name of third party player used by organization. Or any human readable name of the player.  |
| `<player_version>`  |                                                                        String containing the player version.                                                                         |

**Step 3: (Optional) Providing assetId, assetName, videoId, and custom tags**

You can also provide the assetId, assetName, videoId, and custom tags as shown below in HTML/JS while setting source information. Please use the mmVideoAssetInfo structure to provide this information.

```js
player.source = {
  sources: [
    {
      src: "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",
      type: "application/x-mpegurl"
    }
  ],
  mmVideoAssetInfo: {
    assetName: "Elephants Dream",
    assetId: "ASSETID_STRING",
    videoId: "VIDEOID_STRING",
    customTags: {
      key1: "VALUE_STRING1",
      key2: "VALUE_STRING2",
      key3: "VALUE_STRING3"
    }
  }
};
```

_Note: There is an upper limit of 3 custom tags that can be sent to SmartSight. If you need to send more tags, please contact your MediaMelon sales representative._

**Step 4: (Optional) Disable Manifest Fetch**

If your workflow restricts the manifest to be accessible from both player and SDK simultaneously, then, you can disable the fetch of manifest via the disableManifestsFetch API:

```js
var player = new THEOplayer.Player(element, {
    libraryLocation : 'path_to_your_library/',
    license: 'your_license_here'
});

var theoPlugin = new mmTheoJSAdapter();
if(theoPlugin.getRegistrationStatus() === false){
    theoPlugin.registerMMSmartStreaming(<player_name>, <customer_id>, <subscriber_id>, <domain_name>, <subscriber_type> , <subscriber_tag>);
    theoPlugin.reportPlayerInfo(<player_brand>, <player_model>, <player_version>);
    theoPlugin.disableManifestsFetch(true);
    }
theoPlugin.initialize(theoPlayer);
```

If you now host a page with the logic described above implemented correctly, THEOplayer will start sending beacons to your MediaMelon dashboard, and you should be seeing data coming in to the MediaMelon dashboard in no time.

##### Android SDK

Please reach out to us if you need more info on Android SDK.

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

Please reach out to us if you need more info on iOS/tvOS SDKs.

## Related links

[https://smartsight.mediamelon.com/docs/theojsplayer/source/stepbystepguide.html](https://smartsight.mediamelon.com/docs/theojsplayer/source/stepbystepguide.html)
