# Sending messages from/to Sender to/from Receiver

This article will explain how to send data to an active receiver and how to respond on the receiver.

**This is currently not working on the Web SDK, even though it's documented below.**

### Table of Contents
- [Send data to the receiver](#send-data-to-the-receiver)
- [Receive data from the receiver](#receive-data-from-the-receiver)
- [Receive data on the receiver](#receive-data-on-the-receiver)
- [Send data from the receiver](#send-data-from-the-receiver)
- [Related articles](#related-articles)


## Send data to the receiver

The Google Cast SDK has a global object that everyone can access. This global object is also being used by THEOplayer. The general idea is to retrieve the current active cast session and send a message on a specific namespace.

##### Web SDK

```js
// Retrieve the current cast session
var castSession = cast.framework.CastContext.getInstance().getCurrentSession();
// Send message on defined namespace channel
castSession.sendMessage('namespace', 'message');
```

Reference:

- [https://developers.google.com/cast/docs/reference/chrome/cast.framework.CastSession](https://developers.google.com/cast/docs/reference/chrome/cast.framework.CastSession)
- [https://developers.google.com/cast/docs/reference/chrome/cast.framework.CastSession#sendMessage](https://developers.google.com/cast/docs/reference/chrome/cast.framework.CastSession#sendMessage)

##### Android SDK
```java
// Retrieve the current cast session
CastSession castSession = CastContext.getSharedInstance(context).getSessionManager().getCurrentCastSession();
// Send message on defined namespace channel
castSession.sendMessage('namespace', 'message');
```

Reference:

- [https://developers.google.com/android/reference/com/google/android/gms/cast/framework/CastSession](https://developers.google.com/android/reference/com/google/android/gms/cast/framework/CastSession)

##### iOS SDK

On iOS we need a component that implements the GCKGenericChannelDelegate protocol.
```swift
// Retrieve the current cast session
let castSession = GCKCastContext.sharedInstance().sessionManager.currenCastSession
// Create the defined namespace channel
let channel = GCKGenericChannel(namespace: "namespace")
// Set the delegate for the namespace channel (GCKGenericChannelDelegate)
channel.delegate = self
// Add the channel to the current cast session
castSession?.add(channel)
// Send message on channel (the error parameter is a pointer at which to store the error result, this may be nil)
channel.sendTextMessage("message", error: nil)
```

Reference:

- [https://developers.google.com/cast/docs/reference/ios/protocol_g_c_k_generic_channel_delegate-p](https://developers.google.com/cast/docs/reference/ios/protocol_g_c_k_generic_channel_delegate-p)
- [https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_cast_session](https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_cast_session)
- [https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_generic_channel](https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_generic_channel)
- [https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_cast_session.html#a3514b6933a579d4255702375f542c16a](https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_cast_session.html#a3514b6933a579d4255702375f542c16a)
- [https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_cast_channel.html#ab7f595487ce145f38b2e82e55126789b](https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_cast_channel.html#ab7f595487ce145f38b2e82e55126789b)

## Receive data from the receiver

The general idea is to retrieve the current active cast session and add an event listener on the specific namespace.

##### Web SDK
```js
// Retrieve the current cast session
var castSession = cast.framework.CastContext.getInstance().getCurrentSession();
// Add an event listener to the defined namespace channel
castSession.addMessageListener('namespace', (namespace, message) => {
    console.log(namespace, message);
})
```

Reference:

- [https://developers.google.com/cast/docs/reference/chrome/cast.framework.CastSession#addMessageListener](https://developers.google.com/cast/docs/reference/chrome/cast.framework.CastSession#addMessageListener)

##### Android SDK
```java
// Retrieve the current cast session
CastSession castSession = CastContext.getSharedInstance(context).getSessionManager().getCurrentCastSession();
// Create callback handler
Cast.MessageReceivedCallback callback = new Cast.MessageReceivedCallback() {
    @Override
    public void onMessageReceived(CastDevice castDevice, String namespace, String message) {
    // Do something with the message
    }
};
// Add the message listener to the current cast session
castSession.setMessageReceivedCallbacks('namespace', callback);
```

Reference:

- [https://developers.google.com/android/reference/com/google/android/gms/cast/framework/CastSession.html#setMessageReceivedCallbacks(java.lang.String,%20com.google.android.gms.cast.Cast.MessageReceivedCallback)](https://developers.google.com/android/reference/com/google/android/gms/cast/framework/CastSession.html#setMessageReceivedCallbacks(java.lang.String,%20com.google.android.gms.cast.Cast.MessageReceivedCallback))

##### iOS SDK

The delegate of the channel will handle the receiving of messages.
```swift
extension ChromecastController : GCKGenericChannelDelegate {
    func cast(_ channel: GCKGenericChannel, didReceiveTextMessage message: String, withNamespace protocolNamespace: String) {
        print("Channel didReceiveTextMessage", message)
    }
}
```

Reference:

- [https://developers.google.com/cast/docs/reference/ios/protocol_g_c_k_generic_channel_delegate-p](https://developers.google.com/cast/docs/reference/ios/protocol_g_c_k_generic_channel_delegate-p)

## Receive data on the receiver

*This example is for receiver version 2.*

The general idea is to retrieve the receiver manager and add a message listener for the specific namespace. **This needs to be done before a THEOplayer instance is created. THEOplayer will call the start method of the receiverManager on initialisation.**

```js
// Retrieve the cast receiver manager
var castReceiverManager =  cast.receiver.CastReceiverManager.getInstance();
// Retrieve the message bus from the cast receiver manager
var messageBus =  castReceiverManager.getCastMessageBus('namespace');
// Add message listener to the message bus
messageBus.onMessage = function(event) {
    console.log(event);
}
```

Reference:

- [https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus](https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus)
- [https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus#onMessage](https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus#onMessage)
- [https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus.Event](https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus.Event)

## Send data from the receiver

*This example is for receiver version 2.*

There are multiple possibilities to send data from the receiver:

1. When a message is received on the receiver, you can answer the sender

2. Broadcast to all connected senders
```js
// 1. 
messageBus.onMessage = function(event) {
    messageBus.send(event.senderId, 'message');
}
// 2.
messageBus.broadcast('message');
```
    

Reference:

- [https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus#broadcast](https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus#broadcast)
- [https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus#send](https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus#send)

## Related articles

- [Pass subtitle selection on to Chromecast](05-pass-subtitle-section-on-to-chromecast.md)

- [Chromecast SDK Setup](../../../getting-started/01-sdks/06-chromecast/00-getting-started.md)

- [How to configure a different stream to Chromecast](03-how-to-configure-to-a-different-stream.md)

- [Connecting from custom Sender applications](01-connecting-from-custom-sender-applications.md)