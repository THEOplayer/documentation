# SpotX

SpotX is a global video ad serving platform providing digital media owners with a solution that allows them to monetize their content with video advertising across desktop, mobile and connected devices.

### Table of Contents
- [SDKs](#sdks)
- [Pre-requirements](#pre-requirements)
- [Integrating SpotX](#integrating-spotx)


## SDKs

The table shows the availability of SpotX on our different SDK


| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     Yes     |  Yes   | Unverified  |      TBD       |      TBD       |

## Pre-requirements

1. 
Your THEOplayer SDK needs to have the SpotX module enabled.

## Integrating SpotX

##### Web SDK

Add the SpotX ad integration when configuring the player

```js
player.source = {
    sources: ...,
    ads: [{   
        integration: 'spotx'
        ...
    }]
}
```

the `{{SpotXAdDescription}}` object provides the following properties:

| Method | Type | Optional | Description |
| :----: | :--: | :------: | :---------: | 
|   integration   |     string     |  yes   | Use the value 'spotx' to use the SpotX ad integration. The SpotX integration uses Google IMA. To use Google IMA, it is required to load the SDK first. You can find the getting started of Google IMA sdk at: [https://developers.google.com/interactive-media-ads/docs/sdks/html5/quickstart](https://developers.google.com/interactive-media-ads/docs/sdks/html5/quickstart)  |
|   id   |     number or string     |  no   | Your SpotX id  | 
|   cacheBuster   |     boolean     |  yes   | Add the cb parameter with a random number to the SpotX tag.  | 
|   maximumAdDuration   |     number or string     |  yes   |   |
|   custom   |     SpotXData     |  yes   | SpotX custom data  |
|   app   |     SpotXData     |  yes   | SpotX app data  | 
|   device   |     SpotXData     |  yes   | SpotX device data  | 
|   user   |     SpotXData     |  yes   | SpotX user data  |
|   sources   |     string     |  yes   | SpotX ad tag (to directly set the SpotX source link) | 


Example: 

```js
player.source = {
    sources: ...,
    ads: [{   
        integration: 'spotx',
        id: 123456,
        cacheBuster: true,
        app: {
            bundle: 'com.exampleapps.example',
            name: 'My CTV App'
        },
        device: {
            ifa: '38400000-8cf0-11bd-b23e-10b96e40000d',
            ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',
            geo: {
                lat: -24.378528,
                lon: -128.325119
            },
            dnt: 1,
            lmt: 1,
        },
        custom: {
            category: ['category1', 'category2'],
            somekey: 'somevalue'
        },
        user: {
            yob: 1984,
            gender: 'm'
        }
    }
]};
```

##### iOS SDK

Add a `SpotXAdDescription `to the player before initializing:

```swift
let spotxAdDescription = SpotXAdDescription(id)
var source = SourceDescription(..., ads: [spotxAdDescription])
```

A `SpotXAdDescription` has the following properties:

| Method | Type | Optional | Description |
| :----: | :--: | :------: | :---------: | 
|   id   |     number or string     |  no   | Your SpotX id  | 
|   cacheBuster   |     boolean     |  yes   | Add the cb parameter with a random number to the SpotX tag.  | 
|   maximumAdDuration   |     number or string     |  yes   | Add the VMaxd parameter with a duration to the SpotX tag  |
|   ipAddress   |     string     |  yes   | Add an IP Address to the SpotX configuration |
|   custom   |     SpotXData     |  yes   | SpotX custom data  |
|   app   |     SpotXData     |  yes   | SpotX app data  | 
|   device   |     SpotXData     |  yes   | SpotX device data  | 
|   user   |     SpotXData     |  yes   | SpotX user data  |
|   sources   |     string     |  yes   | SpotX ad tag (to directly set the SpotX source link) | 
|   queryParameters   |     [String: SpotXQueryParameter]     |  yes   | Add custom query parameters to the SpotX tag | 

Code Sample:
```swift
var player = THEOplayer()
var spotx: SpotXAdDescription {
        let app = SpotXData(stringParameters: ["bundle": "com.exampleapps.example", "name": "My CTV App"])
        let device = SpotXData(stringParameters: ["ifa": "38400000-8cf0-11bd-b23e-10b96e40000d"],  intParameters: ["dnt": 1, "lmt": 1], geoParameter: Geo(lat: -24.378528, lon: -128.325119))
        let user = SpotXData(stringParameters: ["gender": "m"], intParameters: ["yob": 1984])
        let custom = SpotXData(stringParameters: ["my-custom-label": "my-custom-value"])
        return  SpotXAdDescription(id: "85394", cacheBuster: true, app: app, device: device, user: user, custom: custom)
}
    
var source = SourceDescription {
        let typedSource = TypedSource(src: sourceUrl, type: streamType)
        return SourceDescription(source: typedSource, ads: [spotx])
}

player.source = source
```

##### Android SDK

Add a `SpotXAdDescription` to the player before initializing:
```java
THEOplayerConfig = new THEOplayerConfig.Builder()
    .ui(uiConfig)
    .build();
THEOplayerView tpv = new THEOplayerView(this, playerConfig);
```
OR
```java    
tpv = findViewById(R.id.theoplayer_view);
```

A `SpotXAdDescription.Builder` has the following properties:

| Method | Type | Optional | Description |
| :----: | :--: | :------: | :---------: | 
|   spotxAdDescription   |     number or string     |  no   | Your SpotX id  | 
|   cacheBuster   |     boolean     |  yes   | Add the cb parameter with a random number to the SpotX tag.  | 
|   maximumAdDuration   |     number or string     |  yes   | Add the VMaxd parameter with a duration to the SpotX tag  |
|   ipAddress   |     string     |  yes   | Add an IP Address to the SpotX configuration |
|   queryParameters   |     [String: SpotXQueryParameter]     |  yes   | Add custom query parameters to the SpotX tag. Used to list data like: custom data, device, user, app | 

Code Sample:

```java
SourceDescription source = sourceDescription("http://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")
            .ads(spotxAdDescription("85394")
            .cacheBuster(false)
            .maximumAdDuration(5)
            .queryParameters(
                            spotxDataQueryParameters()
                                    //.param("key1", "value1")
                                    .param("device", spotxData().param("ua", "TEST").param("ifa", "IFA").build())
                                    .param("myCustomObject", spotxData().param("myCustomString", "abcd").build())
                                    .param("app", spotxData().param("appName", "TestApp").param("appVersion", "1.0").build())
                                    .param("nested",
                                            spotxDataQueryParameters()
                                                    .param("nestedObjectKey", "nestedObjectValue")
                                                    .param("nestedInNested", spotxDataQueryParameters().param("nestedInNestedObjectKey", "nestedInNestedObjectValue").build())
                                                    .build())
                                    .build())
                    .build())
            .build();
tpv.getPlayer().setSource(source);
```