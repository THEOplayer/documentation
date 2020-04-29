# How to do error handling?

Error handling comes in different sizes and shapes due to different needs:

- The developer wants to render human-friendly error messages inside of the video player. Reading this error message,
- the user can either remediate the issue by themselves (e.g. by refreshing the page, by checking again in some time, ...),
- or contact a support service with this error code.
- The developer wants to send error-data to an analytics service. This service helps identify frequent issues.
- The developer wants to self-remediate the issue. For example, if a stream is unavailable, they want to retry to load the stream, or load a different stream.

THEOplayer exposes multiple events related to errors. Some events are exposed on platform X, but not on platform Y. The article at Which error related events does the player expose? overviews the error related events. Developers can subscribe to events and attach a callback function. The error handling is implemented inside of the callback function. 

##### Web
```js
player.addEventListener('error', function(errorEvent) {
        console.log(errorEvent);
    });
```

##### Android

```java
theoPlayerView.getPlayer().addEventListener(PlayerEventTypes.ERROR, new EventListener<ErrorEvent>() {
                @Override
                public void handleEvent(ErrorEvent errorEvent) {
                    System.out.println(errorEvent.getError());
                }
    });
```

##### iOS
```swift
let listener = self.theoplayer?.addEventListener(type: PlayerEventTypes.ERROR, listener: { error in print(error.error)})
```

During error handling, we encourage developers to process the data inside of the callback event. The data in this event can be stringified, which can then be stored as a log, and be sent to the support service or an analytics service. Additionally, you could decide to render your own error messages inside of the video player. The article at http://demo.theoplayer.com/using-custom-error-messages illustrates this for the Web SDK.

THEOplayer does not expose a strict set of error codes at this time.