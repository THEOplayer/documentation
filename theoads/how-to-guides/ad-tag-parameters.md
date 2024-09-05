---
sidebar_position: 2
---

# Ad targeting parameters

With the Google DAI Pod Serving, there is the possibility to pass [a limited set of ad targeting parameters](https://support.google.com/admanager/answer/7320899) on your stream request to personalize your streams.
In the player you can easily pass these parameters as key-value pairs via the `TheoAdDescription`.

:::note
The player will automatically add the custom parameter `theoads_slot` in the `cust_params` when requesting an ad.
The value of this parameter will be determined by the layout mode.
:::

## Web SDK

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

## React Native SDK

For the React Native SDK, you can set your desired ad tag parameters via `adTagParameters` in the `TheoAdDescription` as followed:

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

## Android SDK

This API is currently under development and will become available soon.

## iOS SDK

This API is currently under development and will become available soon.

## More information

- [Supply targeting parameters to your stream](https://support.google.com/admanager/answer/7320899)
