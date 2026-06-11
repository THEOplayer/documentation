# Removing context menu 'Powered by THEOplayer...'

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

## Related articles[​](#related-articles "Direct link to Related articles")

* [How can we disable the right click?](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/miscellaneous/context-menu/how-to-disable-right-click.md)
* [How to change the Context Menu?](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/miscellaneous/context-menu/how-to-change-context-menu.md)
