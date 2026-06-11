# Getting started

## Usage[​](#usage "Direct link to Usage")

1. Follow [our Getting Started guide](/documentation/pr-preview/pr-690/theoplayer/getting-started/frameworks/react-native/getting-started.md) to set up THEOplayer in your React Native app.
2. Add an OptiView Live source to your player's source.

### Add an OptiView Live source[​](#add-an-optiview-live-source "Direct link to Add an OptiView Live source")

After setting up your THEOplayer on your web page, set its source to a `SourceDescription` containing a `THEOliveSource`. You'll need an OptiView Live channel ID:

```javascript
player.source = {
  sources: {
    type: 'theolive',
    src: 'your-channel-id',
  },
};

```

## More information[​](#more-information "Direct link to More information")

* [API references](https://theoplayer.github.io/react-native-theoplayer/api/)
