# How to combat autoplay policies

This short article explains what autoplay is, where autoplay is restricted, and what THEOplayer does to facilitate working with autoplay.

When you enable [autoplay](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#autoplay) for a HTML5 video, you instruct the viewer's browser to automatically play the content as soon as possible without action from the viewer.

## Restrictions

Browsers are restricting their autoplay capabilities. These policies are the result of the continuous misuse of autoplay which causes bad user experiences.

There are two types of autoplay:

- Unmuted Autoplay: autoplay with audio enabled.
- Muted Autoplay: autoplay with audio disabled.

The first type is considered more abrupt, while the second type is considered more user-friendly. Some browsers which normally disallow unmuted autoplay allow it when the viewer explicitly indicates so\*.

## API

##### Web SDK

An HTML5 video player can't circumvent these technical limitations, but it can offer an API which enables you in a smart way to switch between muted and unmuted autoplay.

THEOplayer has the `mutedAutoplay` property in the `PlayerConfiguration`. When you set this property to all, THEOplayer will run in unmuted autoplay on browsers where this is allowed, and in muted autoplay where autoplay with sound is not allowed. You can find a valid example below:

```js
// ...
var player = new THEOplayer.Player(element, {
  // ...
  mutedAutoplay: "all"
  // ...
});
// ...
player.autoplay = true;
// ...
```

There's a possibility that new restrictions will be introduced in the future, so it's advised to keep autoplay restrictions in mind when developing your product.
