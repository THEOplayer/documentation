# Migrating to THEOplayer Web SDK 10.x

This article will guide you through updating from THEOplayer Web SDK version 10 (from version 9),
and the changes needed in your code.

## Update THEOplayer

Run the following command to install THEOplayer Web SDK version 10:

```bash
npm install theoplayer@10
```

If you're using the [Open Video UI for Web](/open-video-ui/web/) or one
of [our connectors](/theoplayer/connectors/web/),
make sure to update them to the latest version too to ensure proper support for THEOplayer version 10.

```bash
npm update @theoplayer/web-ui
npm update @theoplayer/conviva-connector-web
```

## Replace usages of deprecated APIs

Some properties and methods that were previously deprecated have been removed from the API.
Update your code to use the new APIs instead.
