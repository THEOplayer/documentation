# How to remove unwanted CC track in iOS or Safari

This article is intended to show how to remove any unwanted CC tracks that might be showing up in iOS or Safari. This can be done by editing the HLS master playlist.

**Unwanted CC in Safari native**

![Unwanted CC in Safari](/documentation/pr-preview/pr-690/assets/images/unwanted-cc-safari-afa200bfd56332b7a019c6a8b4d2ce62.png)

**Unwanted CC in THEOplayer iOS**

![Unwanted CC in iOS](/documentation/pr-preview/pr-690/assets/images/unwanted-cc-ios-9ca2c0569660319c77f96ecf29561a5a.png)

## How to remove unwanted cc tracks?[​](#how-to-remove-unwanted-cc-tracks "Direct link to How to remove unwanted cc tracks?")

To remove any unwanted cc tracks, the “CLOSED-CAPTION” attribute has to be set to “NONE” inside the HLS master playlist. This is to be compatible with the HLS specification: <https://tools.ietf.org/html/rfc8216#section-4.3.4.2>

If it is a multi-variant stream, this has to be done for all variants.

```text
CLOSED-CAPTION=NONE

```
