# Migrating to THEOplayer Web SDK 11.x

This article will guide you through updating to THEOplayer Web SDK version 11 (from version 10), and the changes needed in your code.

## Update THEOplayer[​](#update-theoplayer "Direct link to Update THEOplayer")

Run the following command to install THEOplayer Web SDK version 11:

```bash
npm install theoplayer@11

```

If you're using the [Open Video UI for Web](/documentation/pr-preview/pr-690/open-video-ui/web.md) or one of [our connectors](/documentation/pr-preview/pr-690/theoplayer/connectors/web.md), make sure to update them to the latest version too to ensure proper support for THEOplayer version 11.

```bash
npm update @theoplayer/web-ui
npm update @theoplayer/conviva-connector-web

```

## Replace or remove usages of deprecated APIs[​](#replace-or-remove-usages-of-deprecated-apis "Direct link to Replace or remove usages of deprecated APIs")

Some properties and methods that were previously deprecated have been removed from the API. Update your code to use the new APIs instead.

* Removed `preloadPublications` in THEOlive API.
