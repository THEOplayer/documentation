# Can we use HLS ads

No, THEOplayer does not support HLS ads currently (2020). They can still be played through the player on the platforms that support such format natively, but we advise to use other formats for your ads (e.g.: mp4).

Theoplayer supports various media file formats for ads. This includes mp4-based progressive download, by far the most used format for ads, currently providing the widest coverage across devices. It is our standpoint that doing HLS ABR-based ads would not give a very good user experience in a lot of cases.

Theoplayer will only play HLS based ads on platforms that natively support HLS. As a result, m3u8 will be played on iOS, Android, Edge, Safari. Not so on other platforms, where a HLS ad will be skipped.

If your reason for doing HLS ads is the wish to use ABR to be more flexible regarding bandwidth, rest assured: VAST can (and usually does) contain multiple media files in several resolutions, qualities and formats. Among these, the most appropriate will be chosen to be played on your device or desktop browser.


## Remarks
- With the google-IMA integration, HLS ads are never played, even on platforms with HLS native support
- HLS ads were supported in THEOplayer1.X. For the reasons explained above, in 2.X we stopped support.
- IAB does not recommend against using HLS or DASH.

## Resources

The following resources provide more information:

- [Digital Video In-Stream Ad Format Guidelines](https://www.iab.com/wp-content/uploads/2016/01/DVAFG_2015-01-08.pdf)
- [API reference – Ads interface](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.ads.md)
- [THEOplayer Advertising User Guide](../knowledge-base/01-advertisement/01-user-guide.md)