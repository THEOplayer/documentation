# Removing context menu/'Powered by THEOplayer v2...'

The context menu can be removed while building your player by disabling the "contextmenu" feature or by adding a CSS rule on your page.

You can disable the context menu in the style sheet like this:

```html
<link rel="stylesheet" type="text/css" href="/path/to/ui.css" />

<style>
  .theo-context-menu {
    display: none;
  }
</style>
```

## Related articles

- [How can we disable the right click?](../how-to-guides/07-miscellaneous/01-context-menu/01-how-to-disable-right-click.md)
- [How to change the Context Menu?](../how-to-guides/07-miscellaneous/01-context-menu/02-how-to-change-context-menu.md)
