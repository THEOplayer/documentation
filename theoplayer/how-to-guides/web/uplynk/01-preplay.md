# Preplay

This article explains how to leverage the Uplynk Preplay API through THEOplayer. This API allows developers to pre-integrate with Uplynk's Preplay service.

Uplynk users can use an API (i.e. `Preplay`) to generate a streaming playlist given one or more assets or advertisements. The Uplynk back-end stitches the content together and allows for server-side ad-insertion (SSAI) when applicable. This document describes how THEOplayer users should configure their source to leverage this Preplay service.

Assumptions:

- THEOplayer assumes the availability of the Preplay API and Uplynk content servers to be 100%, since these identify and provide the necessary streams for playback with this feature.
- THEOplayer assumes that developers who are interested in this feature have a basic understanding of the Preplay API. Uplynk documents this service in the [API docs](https://api-docs.uplynk.com/#Develop/Preplayv2.htm).
- THEOplayer assumes that developers provide correct asset identifiers, as well as the proper content protection level.

## Stream Configuration (without ads)

The examples below demonstrate how to configure a stream through the Uplynk pre-integration.

```js
player.source = {
  sources: [
    {
      integration: 'uplynk',
      id: '<your_uplynk_asset_id>',
      preplayParameters: {}, // Optional, defaults to an empty object. These will be added as query parameters to the Preplay API call.
      assetType: 'asset', // Optional, defaults to 'asset'. Can also be 'channel' or 'event', following the Uplynk semantics, where 'asset' is On-demand content.
      contentProtected: false, // Optional, defaults to false.
    },
  ],
};

// Source example for an external id (with optional properties omitted)
player.source = {
  sources: [
    {
      integration: 'uplynk',
      id: {
        userId: '<your_uplynk_user_id>',
        externalId: '<your_uplynk_external_id>',
      },
    },
  ],
};

// Source example for a regular asset id with e.g. 'delay' parameter and 'sig' token parameter (with optional properties omitted)
player.source = {
  sources: [
    {
      integration: 'uplynk',
      id: '<your_uplynk_asset_id>',
      preplayParameters: {
        delay: '7200',
        rays: 'dcba',
        sig: '2ff94739b021912712adafeccd6fa291f11eef0648c3b18b30224b84e0590b4f',
      },
    },
  ],
};
```

The snippet above gives a quick overview of the structure of an Uplynk-specific source, also known as an [UplynkSource](pathname:///theoplayer/v9/api-reference/web/interfaces/UplynkSource.html). More information on certain properties:

- `id`: The ID field identifies the asset. Instead of a single string, developers can also specify an array of asset IDs as strings, which will be stitched into a continuous stream. The same goes for the `externalId` property in case an external ID is used in the source.
- `preplayParameters`: The `preplayParameters` object should have string-key-string-value combinations, which will be used as query parameters for the Preplay API call. Nested objects are not supported.

- `contentProtected`: Boolean value which will internally set any necessary content-protection information. No content-protection details have to be specified by the customer.

- **A Preplay request must include all parameters defined within the playback request, hence these parameters must be included in the THEOplayer source**. This request must also include a digital signature if the 'Require a token for playback' option is enabled in the back-end on the corresponding live channel. (See also : [Signing a Playback URL Tutorial](https://api-docs.uplynk.com/#Tutorials/Signed-Playback-URL-Tutorial.htm))
- Uplynk specific documentation on the available playback URL query parameters can be found on the Uplynk documentation site under [Customizing Playback via Parameters](https://api-docs.uplynk.com/#Setup/Customizing-Playback.htm).
- Some parameters can be excluded from the digital signature calculation. These parameters may enable certain use cases (e.g. DVR) and would for this reason be excluded from the digital signature.

## Stream Configuration (with ads)

The examples below demonstrate how to configure a stream with server-side ads through an [UplynkSource](pathname:///theoplayer/v9/api-reference/web/interfaces/UplynkSource.html).

```js
player.source = {
    sources: [{
        integration: 'uplynk',
        id: [
            '<your_uplynk_content_first_part>',
            '<your_uplynk_ad_break_1>',
            '<your_uplynk_content_middle_part>',
            '<your_uplynk_ad_break_2>',
            '<your_uplynk_content_last_part>'
        ],
        preplayParameters: {
            // Parameters here should specify the necessary ad parameters for the Preplay API
            ad.param1: 'param_val1',
            ad.param2: 'param_val2'
        },
    }]
}
```

More information on certain properties:

- `preplayParameters`: The `preplayParameters` object should have string-key-string-value combinations, which will be used as query parameters for the Preplay API call. Nested objects are not supported.
- **A Preplay request must include all parameters defined within the [playback request](https://api-docs.uplynk.com/#Setup/Playback-URLs.htm#LiveChannelPURLs), hence these parameters must be included in the THEOplayer source**. This request must also include a digital signature if the 'Require a token for playback' option is enabled in the back-end on the corresponding live channel. (See also : [Signing a Playback URL Tutorial](https://api-docs.uplynk.com/#Tutorials/Signed-Playback-URL-Tutorial.htm))
  > Note the confusion that the provided link only mentions signing the **playback URL**, even though we are describing using
  > tokens for the call to the Preplay API. However, this process is also valid for signing the `preplayParameters`.
- Uplynk specific documentation on the available playback URL query parameters can be found on the Uplynk documentation site under [Customizing Playback via Parameters](https://api-docs.uplynk.com/#Setup/Customizing-Playback.htm).
- Some parameters can be excluded from the digital signature calculation. These parameters may enable certain use cases (e.g. DVR) and would for this reason be excluded from the digital signature.

## Preplay Response

THEOplayer automatically interprets the response returned by the Preplay service. However, if a developer wants to perform their own logic with the Preplay API response, then they can intercept the `preplayresponse` event.

```js
const listener = (event) => {
  console.log('Do something with the raw response of the Preplay API call', event.response);
};

player.uplynk.addEventListener('preplayresponse', listener);
```

## Using Tokens

Uplynk users often leverage URL signatures (i.e. tokens) to further secure their content -- on top of AES-128 encryption or studio DRM.
A token is (typically) generated on back-end using an API key and a set of parameters, as described on
[Signing a Playback URL Tutorial](https://api-docs.uplynk.com/#Tutorials/Signed-Playback-URL-Tutorial.htm).

> Note the confusion that the provided link only mentions signing the **playback URL**, even though we are describing using
> tokens for the call to the Preplay API. However, this process is also valid for signing the `preplayParameters`.

This set of parameters should also be passed along to the `preplayParameters` in an [UplynkSource](pathname:///theoplayer/v9/api-reference/web/interfaces/UplynkSource.html).
If you do not configure the `preplayParameters` correctly in relation to your signature parameters, then the Preplay request made by THEOplayer will most likely return an invalid Preplay response, preventing THEOplayer from setting up your stream.

Let's consider a set-up where an Uplynk customer uses both URL signatures and multi-DRM.
[When you do DRM, you must specify the `rmt` and `manifest` parameter](https://api-docs.uplynk.com/#Develop/Preplayv2.htm?Highlight=rmt),
**or** you can set `allowrmt` to `1` instead. We recommend using the latter, as demonstrated in our Node.js reference project at [GitHub](https://github.com/THEOplayer/theoplayer-verizon-media-node-js).

So, let's say you want to generate a signature on your back-end that is compatible with HLS + FairPlay, MPEG-DASH + Widevine and MPEG-DASH + PlayReady,
then it could look like the snippet below using `allowrmt`.

```js
let params = {
  v: '2',
  tc: '1',
  exp: 36000,
  rn: 12345,
  ct: 'a',
  cid: '<your_uplynk_asset_id>',
  allowrmt: 1,
};
let query = Object.keys(params)
  .map((key) => key + '=' + params[key])
  .join('&');
let sig = CryptoJS.HmacSHA256(query, '<your_api_secret>').toString();
params['sig'] = sig;
```

Now you want to communicate this entire `params` object to your client-side, and set it as the value for `preplayParameters`:

```js
player.source = {
  sources: {
    integration: 'uplynk',
    id: '<your_uplynk_asset_id>',
    preplayParameters: params,
    assetType: 'asset',
    contentProtected: true,
  },
};
```

When there's a mismatch between signature parameters and Preplay parameters, the Preplay response usually returns `Invalid token signature` and playback is not possible.

Having difficulties figuring out tokens, DRM and THEOplayer? Check out the Node.js reference project at [GitHub](https://github.com/THEOplayer/theoplayer-verizon-media-node-js).

# Related articles

- [Uplynk - Ads](02-ads.md)
- [Uplynk - Ping](03-ping.md)
