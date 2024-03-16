# Can we show a custom message on 403 on mp4

Yes, this is possible, but not as easy as for DASH and HLS. To address this specific use case no internal THEOplayer tool exists yet (2019) and a separate XHR call needs to be done to determine the exact status of the request. Custom texts, overlays and buttons can be showed on the player following the instructions from the related linked resource.

It is easier to address this question in two steps: detection and message.

## Detection

The current (2019) error detection and differentiation in THEOplayer is not yet as specific as we would like and as detailed as some particular use cases, such as this one, may have a use for.

For HLS and DASH, the Network API (see Resources) can be used to intercept, filter and “read” the requests one is interested in, to determine whether something should happen (an error message, for example).

This is not possible with mp4, however, as it is played natively and the Network API cannot be applied. The solution in this case is to do a separate XHR request and read its status. Something along the lines of:

```js
var XMLHttpRequestObject;
var requestObject;

function reqListener() {
  XMLHttpRequestObject = this;
}
requestObject = new XMLHttpRequest();
requestObject.addEventListener("load", reqListener);
requestObject.open("GET", "https://httpstat.us/403?sleep=100");
requestObject.send();

XMLHttpRequestObject.status; // result should be 403 - this may be used for a control that, if true, prints on the overlay the desired error message.
```

One disadvantage of this is that additional data is requested and it may slow down the page and increase the start-up time, especially if you implement an autoplay behavior.

## Message

Back to our specific use case, once you have determined that your mp4 returns a 403 status, you will need to add a custom overlay on the player, showing a message of your choosing. This is because the generic error message “Something went wrong during native playback” that will show up is no longer editable at this point (see remarks), so you will need to cover it up with your own message. This can be done player following the instructions from the related linked resource: “Adding buttons and text to the default UI”.

## Remarks

- This specific use case is different from the more generic personalization of texts and messages on the player, that can be done through language localization (please check the linked resources). Language localization is applied at the moment in which the player instance is created, so it cannot be used to alter texts once the player has been generated.

## Resources

The following resources provide more information:

- [API reference - Network API events](pathname:///theoplayer/v4/api-reference/web/interfaces/NetworkEventMap.html)
- [How to use Network API](../how-to-guides/08-network/00-introduction.md)
- [What does the error message "Something went wrong with Native playback" mean?](19-what-does-error-something-went-wrong-during-playback-mean.md)
- [Demo page - Adding buttons and text to the default UI](http://demo.theoplayer.com/adding-buttons-text-overlay-to-theoplayer)
- [How to change text in THEOplayer](41-how-to-change-text-in-theoplayer.md)
- [Which error related events does the player expose?](15-which-error-related-events-does-player-expose.md)
- [How to do error handling](../how-to-guides/07-miscellaneous/04-error/01-how-to-do-error-handling.md)
