# FreeWheel

This guide explains how to set up THEOplayer in combination with FreeWheel, an advertisement vendor.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     No      |   No    |    No    |       No       |      N/A       |

## Prerequisites

There are prerequisites when using FreeWheel through THEOplayer.

1. You must enable the `freewheel` module when building your THEOplayer SDK through the [THEOplayer Development Portal](https://portal.theoplayer.com).
2. This guide expects that you are a FreeWheel client and that you have ad campaigns ready for use. Information on FreeWheel can be found at [https://freewheel.com](https://freewheel.com).
3. You must have access to the `FreeWheel SDK`, as explained further in this guide.

## How to integrate FreeWheel

### Code Examples

This example explains how you do a basic implementation of FreeWheel in THEOplayer.

##### Web SDK

The FreeWheel integration is currently only available on the Web SDK.

After setting up your basic page containing THEOplayer, you need to add the FreeWheel MRM client SDK to the page:

`<script type='text/javascript' src='https://mssl.fwmrm.net/libs/adm/6.xx.x/AdManager.js'></script>`

Next, you add a [`FreeWheelAdDescription`](pathname:///theoplayer/v6/api-reference/web/interfaces/FreeWheelAdDescription.html) to your source that specifies the FreeWheel tokens. An example sourceDescription could look like this:

```html
...
<!-- make sure to link to a valid version number -->
<script type="text/javascript" src="https://mssl.fwmrm.net/libs/adm/6.xx.x/AdManager.js"></script>
... player.source = { sources : [{ src : 'your.m3u8', type : 'application/x-mpegurl' }], ads: [{ integration: 'freewheel', networkId: 96749, assetId:
'DemoVideoGroup.01', profile: 'global-js', assetDuration: 22, adServerUrl: 'https://demo.v.fwmrm.net/ad/g/1', siteSectionId: 'DemoSiteGroup.01',
cuePoints: [{ adUnit: 'preroll' }] }] };
```

We configure cuePoints in this example. This is needed for some set-ups or completely optional for others. THEOplayer will create a FreeWheel temporalSlot behind the screens, which is a request to schedule an advertisement at said point. It is up to FreeWheel (and the campaign settings) to decide whether it will insert an advertisement at this requested time. Not all campaigns need it and for some campaigns the requested cuePoints might even be ignored by FreeWheel.

##### Android SDK

This API is currently not available on the Android (TV) SDK.

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

This API is currently not available on the iOS (/tvOS) SDK.

## Resources

The following resources provide more information:

1. [THEOplayer Getting Started Guide](../../getting-started/01-sdks/01-web/00-getting-started.mdx)

2. [FreeWheelAdDescription](pathname:///theoplayer/v6/api-reference/web/interfaces/FreeWheelAdDescription.html)

3. [FreeWheel website](https://freewheel.com)
