# How can we disable the right click?

You might need an answer to this question if the customer asks to disable the right click.

**The simple answer is to disable the feature context menu in the licence build.**

If the customer insists on not updating the licence, please provide this alternative.

Include it AFTER the call to THEOplayer ui.css, either:
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
