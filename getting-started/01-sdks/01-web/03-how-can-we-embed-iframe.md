# How can we embed Iframe?

Embedding a player in an iframe can be interesting to facilitate social sharing, or to decouple the player service from the rest of the website. THEOplayer allows you to embed your player in external websites.

There are two important things to take into account:

- Allowing embedding
- Enabling fullscreen for players in an iframe

## Allowing embedding

Embedding is disabled by default in order to disallow external sites from using your license and impressions. You can however easily activate embedding by setting the `isEmbeddable`-flag in the THEOplayer's [`PlayerConfiguration`](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.playerconfiguration.md) to `true`.

```js
var playerConfiguration = {
    // ...
    libraryLocation: '</path-to-library>/',
    isEmbeddable: true,
    // ...
};
var player = new THEOplayer.Player(element, playerConfiguration);
```

The domain hosting the THEOplayer instance needs to be whitelisted, but the domain embedding the iframe doesn't have to be.

## Enabling fullscreen for players in an iframe

When embedding a player, it is important to know about the restrictions an iframe brings. One such restriction is the restriction on the content of the iframe going fullscreen. This can however be enabled using the`allowfullscreen`-attribute.

```html
<iframe
    src="player.html"
    title="Embedded THEOplayer"
    frameborder="0"
    scrolling="no"
    width="100%"
    height="100%"
    allowfullscreen="">
</iframe>
```

## Resources

- [Player API - PlayerConfiguration](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.playerconfiguration.md)