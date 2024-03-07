# How to do error handling

As a developer, you could be interested in error handling for any of the following reasons:

- You want to render human-friendly error messages inside the video player. Reading this error message,
  - the user can either remediate the issue by themselves (e.g. by refreshing the page, by checking again in some time, ...),
  - or contact a support service with this error code.
- You want to send error-data to an analytics service. (And this service helps you to identify frequent issues.)
- You want to self-remediate the issue. For example, if a stream is unavailable, they want to retry to load the stream, or load a different stream.
- ...

THEOplayer exposes different types of errors, and they can be accessed and intercepted in different ways.

### Table of Contents

- [SDKs](#sdks)
- [Intercepting errors](#intercepting-errors)
- [Types of errors](#types-of-errors)
- [Remarks](#remarks)

## SDKs

Error handling is available across platforms and SDKs.

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |      Yes       |

## Intercepting errors

Developers can programmatically interact with errors in two ways:

1. Through an event listener, and attaching an event handler to this listener
2. Through a getter, which holds data when an error has occurred.

### Event Listener

Developers can subscribe to events and attach a callback function.
This callback function implements the error handling.

This section describes how to use event handlers for the "top-level", "generic", "player" `error` event.
This is the [`error`](pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#error) event which is dispatched through the `Player` interface.
This event is fatal and prevents playback.
(There are also `error` events, for example the [`error`](pathname:///theoplayer/v6/api-reference/web/interfaces/ChromecastEventMap.html#error) event which is dispatched through the `Chromecast` interface.
You handle these `error` events in the same fashion.)

#### Web

```js
player.addEventListener("error", function (errorEvent) {
  console.log(errorEvent);
});
```

#### Android

```java
theoPlayerView.getPlayer().addEventListener(PlayerEventTypes.ERROR, new EventListener<ErrorEvent>() {
    @Override
    public void handleEvent(ErrorEvent errorEvent) {
        System.out.println(errorEvent.getErrorObject());
    }
});
```

#### iOS

```swift
let listener = self.theoplayer?.addEventListener(type: PlayerEventTypes.ERROR, listener: { error in print(error.error)})
```

### Getter

Developers can query an occurred "generic player error" through the `errorObject` property of its related interface.
For example, if the `error` event of the top-level `Player` interface would be dispatched for the Web SDK,
then you can access the `errorObject` property of this interface.

```js
player.addEventListener("error", function (errorEvent) {
  // console.log(errorEvent);
  console.log(player.errorObject);
});
```

Note that other types of errors are not available through this approach.

## Types of errors

"[Which error related events does the player expose](../../../faq/15-which-error-related-events-does-player-expose.md)" lists which
types of errors there are. Note that generally speaking only the "generic error event" is fatal.
Other events, like the "Chromecast error event" and the "ad error event", are considered non-fatal because some type of playback can style continue.

"[Error codes](02-error-codes.md)" lists which error codes are available for the "generic error event".

## Remarks

- We encourage developers to use event listeners to handle errors.
  - The data in this event can be processed (e.g. stringified) and transferred (e.g. sent to an analytics service).
- You could render your own error messages inside the video player.
  - The article at [http://demo.theoplayer.com/using-custom-error-messages](http://demo.theoplayer.com/using-custom-error-messages) offers some help on this for the Web SDK.
