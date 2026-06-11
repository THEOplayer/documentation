# Getting started

## Usage[​](#usage "Direct link to Usage")

1. Follow [our Getting Started guide](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/ios/getting-started.md) to set up THEOplayer in your iOS app.
2. Add an OptiView Live source to your player's source.

### Add an OptiView Live source[​](#add-an-optiview-live-source "Direct link to Add an OptiView Live source")

After setting up your THEOplayer in your app, set its source to a `SourceDescription` containing a `TheoLiveSource`. You'll need an OptiView Live channel ID:

```swift
theoplayer.source = SourceDescription(source: TheoLiveSource(channelId: "3aa5qylwwk7gijsobayq09yee"))

```

## More information[​](#more-information "Direct link to More information")

* [API references](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/ios/)
