# Why the Visibility API does not work through an iframe on Safari and IE11

This question may be asked when you observe a different behavior of the Visibility API on different browsers.

The [Visibility API](pathname:///theoplayer/v6/api-reference/web/interfaces/Visibility.html) provides developers a way to observe how much of the player is visible.

When the player is embedded in an iframe, this API does not work on Safari and IE11. This depends on the fact that the player uses the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Browser_compatibility) if it's available in the browser. Unfortunately, IE and Safari do not have support for this, so the player necessarily falls back to scroll events for these environments.

This is the reason why on those browsers the Visibility API works correctly when the player is on the page but it is not functional through an iframe.

February 2019: A piece of good news: the Intersection Observer API is now in beta in Safari: https://webkit.org/blog/8582/intersectionobserver-in-webkit/
