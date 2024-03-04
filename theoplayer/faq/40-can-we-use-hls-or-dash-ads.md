# Can we use HLS or DASH ads

Yes, we support HLS and DASH ads through a `THEOAdDescription` for the THEOplayer Web SDK 2.84.0 and up. HLS and DASH ads are currently not supported on any other SDKs. Our Google IMA integration does not support HLS or DASH ads.

To be able to play HLS or DASH advertisements, make sure to add `allowedMimeTypes` with the corresponding mime-types to your player configuration. When no `allowedMimeTypes` are specified, THEOplayer will only play progressive media types (non-streaming) as advertisements. When `allowedMimeTypes` are specified, THEOplayer will first prioritize DASH, then HLS, then progressive media types.

```js
new THEOplayer.Player(element, {
  ads: {
    allowedMimeTypes: [
      "application/dash+xml",
      "application/x-mpegURL",
      "application/vnd.apple.mpegurl",
      "video/mp4",
      "video/3gpp", // See the Remark about 3gpp at the bottom.
      "video/webm"
    ]
  }
});
```

This is currently only supported using the web pipeline. There is no support for native iOS or Android.

Using HLS ads is useful for preloading advertisements on low-end devices such as older smart TVs.

THEOplayer supports various media file formats for ads. This includes mp4-based progressive download, by far the most used format for ads, currently providing the widest coverage across devices.

If your reason for using HLS ads is the wish to use ABR to be more flexible regarding bandwidth, rest assured: VAST can (and usually does) contain multiple media files in several resolutions, qualities and formats. Among these, the most appropriate will be chosen to be played on your device or desktop browser.

## Remarks

- With the Google IMA integration, HLS and DASH ads are never played, even on platforms with native support.
- Although browsers consider `3gpp` a video codec, sometimes their support is just for the audio part. There could be cases where no video is shown. Avoid this legacy format when possible.

## Resources

The following resources provide more information:

- [IAB Standards, Guidelines & Best Practices](https://www.iab.com/guidelines/?post_type=iab_guideline)
- [API reference – Ads interface](https://docs.theoplayer.com/api-reference/web/theoplayer.ads.md)
- [THEOplayer Advertising User Guide](../knowledge-base/01-advertisement/01-user-guide.md)
