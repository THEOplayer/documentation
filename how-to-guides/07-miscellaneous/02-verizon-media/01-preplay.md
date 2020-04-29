# Preplay

This article explains how to use the Verizon Media's Preplay API. This API allows developers to pre-integrate with Verizon's Preplay service.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes (2.63.0)  |     Yes (2.66.0)     |   Yes (2.65.0)   | No  |      Yes (2.66.0)      |      No      |

Verizon Media offers an API on their end to perform asset stitching and SSAI on content hosted on Verizon servers, and an API to retrieve information about the stream and spliced ads. This document describes the setting of a THEOplayer source for content on the Verizon servers. It also touches on asset stitching, which will be a precursor for doing SSAI.

Assumptions

- THEOplayer assumes the availability of the Preplay API and Verizon content servers to be 100%, since these identify and provide the necessary streams for playback with this feature.
- THEOplayer assumes application developers have a notion of the Preplay API, namely any extra parameters to be appended to the requests to Verizon (e.g. for correct ad insertion). As documented in [https://docs.vdms.com/video/Content/Develop/Preplayv2.htm](https://docs.vdms.com/video/Content/Develop/Preplayv2.htm)
- THEOplayer assumes application developers provide proper ID's of the Assets they want to play back, as well as the proper content protection level.

## Stream Configuration (without ads)

The examples below demonstrate how to configure a stream through the Verizon Media pre-integration.

##### Web SDK

```js
player.source = {
    sources: [{
        integration: 'verizon-media',
        id: 'verizon-media_content_id',
        preplayParameters: {}, // Optional, defaults to an empty object. These will be added as query parameters to the Preplay API call.
        assetType: 'asset', // Optional, defaults to 'asset'. Can also be 'channel' or 'event', following the Verizon Media semantics, where 'asset' is On-demand content.
        contentProtected: false // Optional, defaults to false.
    }]
}
    
// Source example for an external id (with optional properties omitted)
player.source = {
    sources: [{
        integration: 'verizon-media',
        id: {
            userId: 'verizon-media_user_id',
            externalId: 'verizon-media_external_content_id'
        },
    }]
}
    
// Source example for a regular asset id with e.g. 'delay' parameter and 'sig' token parameter.
player.source = {
    sources: [{
        integration: 'verizon-media',
        id: 'verizon-media_content_id',
        preplayParameters: {
            delay: '7200',
            rays: 'dcba',
            sig: '2ff94739b021912712adafeccd6fa291f11eef0648c3b18b30224b84e0590b4f'
        }, // Optional, defaults to an empty object. These will be added as query parameters to the Preplay API call.
        assetType: 'asset', // Optional, defaults to 'asset'. Can also be 'channel' or 'event', following the Verizon Media semantics, where 'asset' is On-demand content.
        contentProtected: false // Optional, defaults to false.
    }]
}
```

The snippets above gives a quick overview of the structure of the Verizon Media-specific source. More information on certain properties:

- `id`: The ID field can instead of an asset id as a single string also specify an array of asset ids as strings, which will be stitched into a continuous stream. The same goes for the`externalId`property in case an external ID is used in the source.
- `parameters`: Optional, defaults to an empty object. The parameters specified here will be added as query parameters to the Preplay API call. ('`parameters`' is deprecated beyond 2.63.0 integration build)

- `preplayParameters`: The `preplayParameters` object should have string-key-string-value combinations, which will be used as query parameters for the Preplay API call. Nested objects are not supported.

- `contentProtected`: Boolean value which will internally set any necessary content-protection information. No content-protection details have to be specified by the customer.

- **A Preplay request must include all parameters defined within the playback request, hence these parameters must be included in the THEOplayer source**. This request must also include adigital signatureif the 'Require a token for playback'option is enabled in the back-end on the corresponding live channel. (See also : [Basic Setup > Playback URL's > Signing a Playback URL Tutorial](https://docs.vdms.com/video/index.html#Tutorials/Signed-Playback-URL-Tutorial.htm%3FTocPath%3DBasic%2520Setup%7CPlayback%2520URLs%7C_____2))
- Verizon Media specific documentation on the available playback URL query parameters can be found on the Verizon Media documentation site under [Basic Setup > Playback URL's > Customizing Playback via Parameters](https://docs.vdms.com/video/index.html#Setup/Customizing-Playback.htm%3FTocPath%3DBasic%2520Setup%7CPlayback%2520URLs%7C_____1)
- Some parameters can be  excluded from the digital signature calculation. These parameters may enable certain use cases (e.g. DVR) and would for this reason be excluded from the digital signature.*What parameters are excluded needs to be documented by Verizon to ensure it is clear what query parameters can be used on the playback URL *that* is returned in the preplay request response. Until further notice there are no parameters that can be exposed **according** to **the** Verizon documentation.  *

- **Currently, the playback URL in the preplay response should not be modified. Also, do not depend on the format of this URL. Verizon Media reserves the right to change the format of this URL as needed**.*Only parameters that are *excluded* from the digital signature would enable the possibility to use those parameters for certain usecases whereby the playback URL in the preplay response can be 'tuned'  using these parameters as extra query parameters we can add to the actual playout URL issued by the player.  At this point in time there are no supported usecases that involve adding extra query parameters to the playback URL that is in the preplay request response. Future usecases that would have this requirement need to be handled as new features and THEOplayer will handle them as Change Requests. (e.g. DVR/Timeshift)*

##### Android (TV) SDK

```java
// Java examples

// Single asset
Map<String, String> preplayParameters = new HashMap<>(); 
VerizonMediaSource verizonMediaSource = new VerizonMediaSource.Builder("assetID")
                .parameters(preplayParameters)
                .assetType(VerizonMediaAssetType.ASSET)
                .contentProtected(false)
                .build();

// Multiple assets
VerizonMediaSource verizonMediaSource = new VerizonMediaSource.Builder(new String[]{"firstAsset", "secondAsset", "thirdAsset"}).build();

// External id single asset
VerizonMediaExternalId externalId = new VerizonMediaExternalId("userID", "externalAssetID");

// External id multiple assets
VerizonMediaExternalId externalId = new VerizonMediaExternalId("userID", new String[]{"firstExternalAsset", "secondExternalAsset", "thirdExternalAsset"});

// Source example for a regular asset id with e.g. 'delay' parameter and 'sig' token parameter.
Map<String, String> preplayParameters = new HashMap<>();
        preplayParameters.put("delay", "7200");
        preplayParameters.put("rays", "dcba");
        preplayParameters.put("sig", "2ff94739b021912712adafeccd6fa291f11eef0648c3b18b30224b84e0590b4f");
        
VerizonMediaSource verizonMediaSource = new VerizonMediaSource.Builder("assetID")
        .parameters(preplayParameters)
        .assetType(VerizonMediaAssetType.ASSET)
        .contentProtected(false)
        .build();

SourceDescription mySourceDescription = SourceDescription.Builder.sourceDescription(verizonMediaSource).build();
this.tpv.getPlayer().setSource(mySourceDescription);
```

##### iOS (/tvOS) SDK

```
// Swift examples
    
let verizonMediaSource = VerizonMediaSource(
    assetId: "verizonMedia_content_id",
    preplayParameters: [:], // Optional, defaults to an empty object. These will be added as query parameters to the Preplay API call.
    assetType: .ASSET, // Optional, defaults to ".ASSET". Can also be ".CHANNEL" or ".EVENT", following the Verizon Media semantics, where 'asset' is On-demand content.
    contentProtected: false // Optional, defaults to false.
)
    
// Source example for an external id (with optional properties omitted)
let externalId = VerizonMediaExternalId(
    userId: "verizonMedia_user_id",
    externalId: "verizonMedia_external_content_id"
)
let VerizonMediaSource = VerizonMediaSource(externalId: externalId)
    
// Source example for a regular asset id with e.g. 'delay' parameter and 'sig' token parameter.
let VerizonMediaSource = VerizonMediaSource(
    assetId: "verizonMedia_content_id",
    preplayParameters: [
        "delay":"7200",
        "rays":"dcba",
        "sig":"2ff94739b021912712adafeccd6fa291f11eef0648c3b18b30224b84e0590b4f"
    ], // Optional, defaults to an empty object. These will be added as query parameters to the Preplay API call.
    assetType: .ASSET, // Optional, defaults to ".ASSET". Can also be ".CHANNEL" or ".EVENT", following the Verizon Mediasemantics, where 'asset' is On-demand content.
    contentProtected: false // Optional, defaults to false.
)
    
let sourceDescription = SourceDescription(VerizonMediaSource: verizonMediaSource)
self.theoplayer.source = sourceDescription
```

The snippets above gives a quick overview of the structure of the Verizon Media-specific source. More information on certain properties:

- `id`: The ID field can instead of an asset id as a single string also specify an array of asset ids as strings, which will be stitched into a continuous stream. The same goes for the`externalId`property in case an external ID is used in the source.
- `parameters`: Optional, defaults to an empty object. The parameters specified here will be added as query parameters to the Preplay API call.

- `preplayParameters`: The `preplayParameters` object should have string-key-string-value combinations, which will be used as query parameters for the Preplay API call. Nested objects are not supported.

- `contentProtected`: Boolean value which will internally set any necessary content-protection information. No content-protection details have to be specified by the customer.

- **A Preplay request must include all parameters defined within the playback request, hence these parameters must be included in the THEOplayer source**. This request must also include adigital signatureif the 'Require a token for playback'option is enabled in the back-end on the corresponding live channel. (See also : [Basic Setup > Playback URL's > Signing a Playback URL Tutorial](https://docs.vdms.com/video/index.html#Tutorials/Signed-Playback-URL-Tutorial.htm%3FTocPath%3DBasic%2520Setup%7CPlayback%2520URLs%7C_____2))
- Verizon Mediaspecific documentation on the available playback URL query parameters can be found on the Verizon Mediadocumentation site under [Basic Setup > Playback URL's > Customizing Playback via Parameters](https://docs.vdms.com/video/index.html#Setup/Customizing-Playback.htm%3FTocPath%3DBasic%2520Setup%7CPlayback%2520URLs%7C_____1)
- Some parameters can be  excluded from the digital signature calculation. These parameters may enable certain use cases (e.g. DVR) and would, for this reason, be excluded from the digital signature.*What parameters are excluded needs to be documented by Verizon to ensure it is clear what query parameters can be used in the playback URL *that* is returned in the preplay request response. Until further notice there are no parameters that can be exposed **according** to **the** Verizon documentation.  *

- **Currently, the playback URL in the preplay response should not be modified. Also, do not depend on the format of this URL. Verizon Mediareserves the right to change the format of this URL as needed**.*Only parameters that are *excluded* from the digital signature would enable the possibility to use those parameters for certain use cases whereby the playback URL in the preplay response can be 'tuned'  using these parameters as extra query parameters we can add to the actual playout URL issued by the player.  At this point in time, there are no supported use cases that involve adding extra query parameters to the playback URL that is in the preplay request response. Future use cases that would have this requirement need to be handled as new features and THEOplayer will handle them as Change Requests. (e.g. DVR/Timeshift)*

## Stream Configuration (with ads)

The examples below demonstrate how to configure a stream with server-side ads through the Verizon Media pre-integration.

##### Web SDK

```js
player.source = {
    sources: [{
        integration: 'verizon-media',
        id: ['verizonMedia_content_first', 'verizonMedia_ad_break_1', 'verizonMedia_content_middle', 'verizonMedia_ad_break_2', 'verizonMedia_content_last'],
        preplayParameters: {
            // Parameters here should specify the necessary ad parameters for the Preplay API
            ad.param1: 'param_val1',
            ad.param2: 'param_val2'
        },
    }]
}
```

- `parameters`: Optional, defaults to an empty object. The parameters specified here will be added as query parameters to the Preplay API call. *('parameters' is deprecated beyond 2.63.0 integration build)*

- `preplayParameters`: The `preplayParameters` object should have string-key-string-value combinations, which will be used as query parameters for the Preplay API call. Nested objects are not supported.

- **A Preplay request must include all parameters defined within the playback request, hence these parameters must be included in the THEOplayer source**. This request must also include adigital signatureif the 'Require a token for playback'option is enabled in the back-end on the corresponding live channel. (See also : [Basic Setup > Playback URL's > Signing a Playback URL Tutorial](https://docs.vdms.com/video/index.html#Tutorials/Signed-Playback-URL-Tutorial.htm%3FTocPath%3DBasic%2520Setup%7CPlayback%2520URLs%7C_____2))

- Verizon Media specific documentation on the available playback URL query parameters can be found on the Verizon Media documentation site under [Basic Setup > Playback URL's > Customizing Playback via Parameters](https://docs.vdms.com/video/index.html#Setup/Customizing-Playback.htm%3FTocPath%3DBasic%2520Setup%7CPlayback%2520URLs%7C_____1)

- Some parameters can be  excluded from the digital signature calculation. These parameters may enable certain use cases (e.g. DVR) and would for this reason be excluded from the digital signature.*What parameters are excluded needs to be documented by Verizon to ensure it is clear what query parameters can be used on the playback URL *that* is returned in the preplay request response. Until further notice there are no parameters that can be exposed **according** to **the** Verizon documentation.  *

- **Currently, the playback URL in the preplay response should not be modified. Also, do not depend on the format of this URL. Verizon Media reserves the right to change the format of this URL as needed**.*Only parameters that are *excluded* from the digital signature would enable the possibility to use those parameters for certain usecases whereby the playback URL in the preplay response can be 'tuned'  using these parameters as extra query parameters we can add to the actual playout URL issued by the player.  At this point in time there are no supported usecases that involve adding extra query parameters to the playback URL that is in the preplay request response. Future usecases that would have this requirement need to be handled as new features and THEOplayer will handle them as Change Requests. (e.g. DVR/Timeshift)*

##### Android (TV) SDK

```java
Map<String, String> preplayParameters = new HashMap<>();
        preplayParameters.put("ad", "exampleadserver");

VerizonMediaSource verizonMediaSource = new VerizonMediaSource.Builder(new String[]{"verizonMedia_content_first", "verizonMedia_ad_break_1", "verizonMedia_content_middle", "verizonMedia_ad_break_2", "verizonMedia_content_last"})
                .parameters(preplayParameters)
                .build();
```

##### iOS (/tvOS) SDK

```swift
let verizonMediaSource = VerizonMediaSource(assetIds: ["verizonMedia_content_first", "verizonMedia_ad_break_1", "verizonMedia_content_middle", "verizonMedia_ad_break_2", "verizonMedia_content_last"], parameters: ["ad": "exampleadserver"])
```

## Preplay Response

If the customer wants to perform their own operations with the Preplay API response, we expose those as events on our player API.

##### Web SDK

```js
const listener = (event) => {
    console.log('Do something with the raw response of the Preplay API call', event.response);
}
    
player.verizonMedia.addEventListener('preplayresponse', listener);
```

##### Android (TV) SDK
```java
EventListener<VerizonMediaPreplayResponseEvent> myListener = (VerizonMediaPreplayResponseEvent event) -> {
            // Do something with the preplay response
            event.getResponse();
        };
        
this.tpv.getPlayer().getVerizonMedia().addEventListener(VerizonMediaEventTypes.PREPLAYRESPONSE, myListener);
```

##### iOS (/tvOS) SDK
```swift
let eventListener = self.theoplayer.verizonMedia.addEventListener(type: VerizonMediaEventTypes.VerizonMedia_PREPLAY_RESPONSE) { event in
    // do something with the preplay response           
}
```