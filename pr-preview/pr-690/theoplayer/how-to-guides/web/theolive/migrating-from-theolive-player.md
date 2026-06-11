# Migrating from deprecated THEOlive player to THEOplayer on Web

The goal of this guide is to help you migrate from the deprecated [theolive player](https://www.npmjs.com/package/@theolive/player) to the recommended [THEOplayer](https://www.npmjs.com/package/theoplayer). If you haven't integrated with any player, please follow the [recommended](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/web/theolive/getting-started.md) guide instead of this one.

## Dependencies[​](#dependencies "Direct link to Dependencies")

First remove the old player dependency:

```text
npm uninstall @theolive/player

```

And replace with theoplayer using:

```text
npm install theoplayer

```

## Setting up a player[​](#setting-up-a-player "Direct link to Setting up a player")

Player creation is quite similar, instead of

```javascript
const player = new THEOLive.Player(element);

```

Create the player like this:

```javascript
var player = new THEOplayer.Player(element, {
  license: 'your-license',
  // This is needed for fallback to work properly
  retryConfiguration: {
    maxRetries: 6,
  },
  theoLive: {
    // these are optional
    externalSessionId: 'my-external-session-id',
    fallbackEnabled: true,
  },
});

```

Note that you now need a license, either use the THEOplayer license you had before, or use the one provided in the [OptiView Live dashboard](https://dashboard.optiview.dolby.com) when creating a channel.

## Loading a channel[​](#loading-a-channel "Direct link to Loading a channel")

After setting up your THEOplayer on your web page, we will set the source to a channel. The old way was calling loadChannel on the player.

```javascript
player.loadChannel('<your-channel-id>').catch(console.error);

```

With THEOplayer you just set a [SourceDescription](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/interfaces/TheoLiveSource.html).

```javascript
player.source = {
  sources: {
    type: 'theolive',
    src: 'your-channel-id',
  },
};

```

## Calling methods and listening to events[​](#calling-methods-and-listening-to-events "Direct link to Calling methods and listening to events")

Most of the old functionality is right there on THEOplayer and can be found in the [THEOplayer docs](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/classes/ChromelessPlayer.html). For OptiView Live specific API, check out [player.theolive](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/interfaces/TheoLiveApi.html).

## More information[​](#more-information "Direct link to More information")

* [API references](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/interfaces/TheoLiveSource.html)
