# How can we disable the right click?

There are 2 ways of disabling the right click menu on the player.

1. Disable the context menu feature while you are building your SDK

By default, the <code>contextmenu</code> is included between the basic features of Web SDK. If you build your SDK with this feature disabled, your player will not have the context menu.

2. Add a CSS rule on your page

If you do not want to re-build your player, you can simply add the following CSS rule after calling your THEOplayer <code>ui.css</code>. You can add this rule in either:
a) in a style element (see below) or
b) in an external style.

See example:

```html
<link rel="stylesheet" type="text/css" href="/path/to/ui.css" />

<style>
  .theo-context-menu {
    display: none;
  }
</style>
```
