---
sidebar_position: 2
---

# Ad tag parameters

With the Google DAI Pod Serving, there is the possibility to pass [a limited set of ad tag parameters](https://support.google.com/admanager/answer/7320899) on your stream request to personalize your streams.
In the player you can easily pass these parameters as key-value pairs via the `TheoAdDescription`. 

:::note
The player will automatically add the custom parameter `theoads_slot` in the `cust_params` when requesting an ad. 
The value of this parameter will be determined by the layout mode.
:::

## Web

For the Web SDK, you can set your desired ad tag parameters via `adTagParameters` in the `TheoAdDescription` as followed: 

```javascript
player.source = {
  sources: {
    src: 'PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI',
    type: 'application/x-mpegurl',
    hlsDateRange: true,
  },
  ads: [
    {
      integration: 'theoads',
      networkCode: 'NETWORK-CODE',
      customAssetKey: 'CUSTOM-ASSET-KEY',
      adTagParameters: {
        "YOUR-AD-TAG-PARAMETER-1" : "VALUE-1", // e.g. "cust_params" : "YOUR-CUSTOM-PARAMETERS",
        "YOUR-AD-TAG-PARAMETER-2" : "VALUE-2",
        ...
      }
    },
  ],
};
```

## Android

This API is currently not available on the Android SDK.

## iOS

This API is currently not available on the iOS SDK.

## More information

- [Ad tag parameters information](https://support.google.com/admanager/answer/7320899)