# SpotX

SpotX is a global video ad serving platform providing digital media owners with a solution that allows them to monetize their content with video advertising across desktop, mobile and connected devices.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     No      |   No    |    No    |       No       |       No       |

## Prerequisites

Your THEOplayer SDK must have the `SpotX` module enabled. You can enable this module when building your THEOplayer SDK through the [THEOplayer Development Portal](https://portal.theoplayer.com).

## Integrating SpotX

### Web SDK

Add the SpotX ad integration when configuring the player

```javascript
player.source = {
    sources: ...,
    ads: [{
        integration: 'spotx',
        ...
    }]
}
```

the `{{SpotXAdDescription}}` object provides the following properties:

|      Method       |       Type       | Optional |                                                                                                                                                                                  Description                                                                                                                                                                                   |
| :---------------: | :--------------: | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    integration    |      string      |   yes    | Use the value 'spotx' to use the SpotX ad integration. The SpotX integration uses Google IMA. To use Google IMA, it is required to load the SDK first. You can find the getting started of Google IMA sdk at: [https://developers.google.com/interactive-media-ads/docs/sdks/html5/quickstart](https://developers.google.com/interactive-media-ads/docs/sdks/html5/quickstart) |
|        id         | number or string |    no    |                                                                                                                                                                                 Your SpotX id                                                                                                                                                                                  |
|    cacheBuster    |     boolean      |   yes    |                                                                                                                                                          Add the cb parameter with a random number to the SpotX tag.                                                                                                                                                           |
| maximumAdDuration | number or string |   yes    |                                                                                                                                                                                                                                                                                                                                                                                |
|      custom       |    SpotXData     |   yes    |                                                                                                                                                                               SpotX custom data                                                                                                                                                                                |
|        app        |    SpotXData     |   yes    |                                                                                                                                                                                 SpotX app data                                                                                                                                                                                 |
|      device       |    SpotXData     |   yes    |                                                                                                                                                                               SpotX device data                                                                                                                                                                                |
|       user        |    SpotXData     |   yes    |                                                                                                                                                                                SpotX user data                                                                                                                                                                                 |
|      sources      |      string      |   yes    |                                                                                                                                                              SpotX ad tag (to directly set the SpotX source link)                                                                                                                                                              |

Example:

```javascript
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

### iOS/tvOS SDK

This API is currently not available on the iOS/tvOS SDK.

### Android (TV) SDK

This API is currently not available on the Android (TV) SDK.
