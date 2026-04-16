# How to remove unwanted CC track in iOS or Safari

This article is intended to show how to remove any unwanted CC tracks that might be showing up in iOS or Safari. This can be done by editing the HLS master playlist.

**Unwanted CC in Safari native**

![Unwanted CC in Safari](../../../theoplayer/assets/img/unwanted-cc-safari.png)

**Unwanted CC in THEOplayer iOS**

![Unwanted CC in iOS](../../../theoplayer/assets/img/unwanted-cc-ios.png)

## How to remove unwanted cc tracks?

To remove any unwanted cc tracks, the “CLOSED-CAPTION” attribute has to be set to “NONE” inside the HLS master playlist. This is to be compatible with the HLS specification: https://tools.ietf.org/html/rfc8216#section-4.3.4.2

If it is a multi-variant stream, this has to be done for all variants.

```text
CLOSED-CAPTION=NONE
```
