# Event Listeners and React Native

This how-to guide describes how to add and manage event listeners of THEOplayer in React Native application.

## General Information

### Android

The below code is tested with following versions:

- Yarn 1.19.1
- React Native 0.61.2
- Android studio 3.5.1
- THEOplayer Android SDK 2.59.0
- JAVA 11.0.4

The THEOplayer Android SDK can be used for Android devices using Android 5.0+ (minSdkVersion 21)

### iOS

The below code is tested with following versions:

- Yarn 1.19.1
- React Native 0.61.2
- Xcode 11.1
- THEOplayer 2.64.0
- Swift 5.1.

The THEOplayer iOS SDK can be used for iOS devices using iOS 10.0+ and Swift 5.0+

## Lifecycle Event Listener Implementation

### Android

This subsection implements lifecycle events listener – called when the host activity receive events.

The following example shows implementations and calls to destroy a player object.

Firstly in module view manager file (`TheoPlayerViewManager.java`) add to class implementation of LifecycleEventListener:

```java
import com.facebook.react.bridge.LifecycleEventListener;
    
public class TheoPlayerViewManager extends SimpleViewManager<THEOplayerView> implements LifecycleEventListener {
...
```

Then add lifecycle event listeners to the React context and override lifecycle events:

```java
...
@Override
protected THEOplayerView createViewInstance(final ThemedReactContext reactContext) {
    playerView = new THEOplayerView(reactContext.getCurrentActivity());
    playerView.setLayoutParams(new LinearLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT));
    
    // Add lifecycle event listener to react context
    reactContext.addLifecycleEventListener(this);
    
    return playerView;
}
    
@Override
public void onHostDestroy() {
    playerView.onDestroy();
}
...
```

Secondly in native view module file (`TheoPlayerViewModule.java`) add React method to call on destroy.

```java
import com.facebook.react.bridge.ReactMethod;
    
public class ...
...
@ReactMethod
public void destroy() {
    theoPlayerViewManager.playerView.onDestroy();
}
...
```

Finally use the call in JavaScript (`TheoPlayerViewScreen.js`):

```java
import { NativeModules, ... } from 'react-native';
    
export default class ...
...
componentWillUnmount() {
    NativeModules.THEOplayerViewManager.destroy();
}
...
```

### iOS

Nothing needs to be done on iOS.


## Player Event Listener Logic Implementation

### Android

Firstly declare a property change listener in `THEOplayerViewManager.java`, as method prop set React context. Add event listener on video play by override handle play event:

```java
private void addPropertyChangeListeners(final ThemedReactContext reactContext) {
    // Add listener on video play
    playerView.getPlayer().addEventListener(PlayerEventTypes.PLAY, new EventListener<PlayEvent>() {
        @Override
        public void handleEvent(final PlayEvent playEvent) {
            WritableMap event = Arguments.createMap();
    
            // Local property change
            reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                playerView.getId(),
                InternalAndGlobalEventPair.onPlay.internalEvent,
                event);
        }
    });
    
}
```

Now we need internal and global event pair write it manually or add class enum:

```java
...
private enum InternalAndGlobalEventPair {
    onPlay("onPlayEventInternal", "onPlay");
    
    String internalEvent;
    String globalEvent;
    
    InternalAndGlobalEventPair(String internalEvent, String globalEvent) {
        this.internalEvent = internalEvent;
        this.globalEvent = globalEvent;
    }
}
...
```

And finally call it in createViewInstance:

```java
...
private enum InternalAndGlobalEventPair {
    onPlay("onPlayEventInternal", "onPlay");
    
    String internalEvent;
    String globalEvent;
    
    InternalAndGlobalEventPair(String internalEvent, String globalEvent) {
        this.internalEvent = internalEvent;
        this.globalEvent = globalEvent;
    }
}
...
```

And one last thing, add map builder:

```java
...
@Override
public Map getExportedCustomBubblingEventTypeConstants() {
    return MapBuilder.builder()
        .put(
            InternalAndGlobalEventPair.onPlay.internalEvent,
            MapBuilder.of(
                "phasedRegistrationNames",
                MapBuilder.of("bubbled", InternalAndGlobalEventPair.onPlay.globalEvent)))
        .build();
}
...
```

### iOS

Firstly declare Player event and listeners list in view(`THEOplayerView.swift`):

```swift
...
class THEOplayerView: UIView {
    var player: THEOplayer
    // Declarate onPlay
    var onPlay: RCTBubblingEventBlock?
    
    // Declarate listeners
    private var listeners: [String: EventListener] = [:]
...
```

In class init register player on event emitter(event emitter class will be described at the next section) and set play listener:

```swift
...
init() {
    ...
    // Register player on event emitter
    EventEmitter.sharedInstance.registerPlayer(player: player)
    
    // Set listener
    let playListener = player.addEventListener(type: PlayerEventTypes.PLAY) { [unowned self] event in
        print("Received \(event.type) event at \(event.currentTime)")
        guard self.onPlay != nil else {
        return
        }
    
        self.onPlay!([:])
    }
    listeners[PlayerEventTypes.PLAY.name] = playListener
...
```

Next add view property:

```swift
...
// View property to listen event play
@objc(setOnPlay:) func setOnPlay(play: @escaping RCTBubblingEventBlock) {
    onPlay = play
}
...
```

At the end de-init listeners:

```swift
...
// De-init listeners
deinit {
    for (eventName, listener) in listeners {
    switch eventName {
    case "play":
        player.removeEventListener(type: PlayerEventTypes.PLAY, listener: listener)
    default:
        break
    }
    }
}
...
```

Finally set bridge in `THEOplayerViewBridge.m`:

```swift
...
RCT_EXPORT_VIEW_PROPERTY(onPlay, RCTBubblingEventBlock);
...
```

## Declare EventListener

### Android

In native module we have declared communication between java THEOplayer library and react native, so now we need to declare manually new EventListeners.

- Add new Java class inside `android/app/src/main/java/com/<your-app-name>/` e.g.`EventListenersManager.java`. This class will be responsible for register and unregister our events listeners:

```java
public class EventListenersManager {

    private final THEOplayerView playerView;
    private final ReactNativeEventEmitter eventEmitter;

    public EventListenersManager(THEOplayerView playerView, ReactNativeEventEmitter eventEmitter) {
        this.playerView = playerView;
        this.eventEmitter = eventEmitter;
    }

    public void registerListeners() {
        Player player = playerView.getPlayer();
        //Register events listeners here
    }

    public void unregisterListeners() {
        Player player = playerView.getPlayer();
        //Unregister events listeners here
    }
}
```

 - Add new Java class responsible for handling event e.g. `PlayEvent`
 
```java
public class PlayEventListener implements EventListener<PlayEvent> {

        public static final EventType<PlayEvent> TYPE = PlayerEventTypes.PLAY;
        private DeviceEventManagerModule.RCTDeviceEventEmitter eventEmitter;

        public PlayEventListener(DeviceEventManagerModule.RCTDeviceEventEmitter eventEmitter) {
                this.eventEmitter = eventEmitter;
        }

        @Override
        public void handleEvent(PlayEvent playEvent) {
                WritableMap eventGlobal = Arguments.createMap();
                eventEmitter.emit(TYPE.getName(), eventGlobal);
        }
}
```

 - Now  create instance of this class in `EventListenersManager`, add register and unregister implementation:
 
```java
public class PlayEventListener implements EventListener<PlayEvent> {

    public static final EventType<PlayEvent> TYPE = PlayerEventTypes.PLAY;
    private DeviceEventManagerModule.RCTDeviceEventEmitter eventEmitter;

    private PlayEventListener playEventListener;

    public PlayEventListener(DeviceEventManagerModule.RCTDeviceEventEmitter eventEmitter) {
        this.eventEmitter = eventEmitter;
    }

    public void registerListeners() {
        Player player = playerView.getPlayer();
        player.addEventListener(PlayEventListener.TYPE, getPlayEventListener());
    }
    
    public void unregisterListeners() {
        Player player = playerView.getPlayer();
        player.removeEventListener(PlayEventListener.TYPE, getPlayEventListener());
    }
    
    @Override
    public void handleEvent(PlayEvent playEvent) {
        WritableMap eventGlobal = Arguments.createMap();
        eventEmitter.emit(TYPE.getName(), eventGlobal);
    }

    private PlayEventListener getPlayEventListener() {
        if (playEventListener == null) {
            playEventListener = new PlayEventListener(eventEmitter);
        }
        return playEventListener;
    }
} 
```

 - Add similar classes for other events. Available events types:
     - `PLAY`
     - `PAUSE`
     - `RATECHANGE`
     - `VOLUMECHANGE`
     - `PROGRESS`
     - `DURATIONCHANGE`
     - `SOURCECHANGE`
     - `READYSTATECHANGE`
     - `TIMEUPDATE`
     - `WAITING`
     - `PLAYING`
     - `ENDED`
     - `LOADEDMETADATA`
     - `LOADEDDATA`
     - `CANPLAY`
     - `CANPLAYTHROUGH`
     - `SEGMENTNOTFOUND`
     - `ERROR`
     - `ENCRYPTED`
     - `CONTENTPROTECTIONERROR`
     - `CONTENTPROTECTIONSUCCESS`
     - `NOSUPPORTEDREPRESENTATIONFOUND`
     - `SEEKING`
     - `SEEKED`
     - `PRESENTATIONMODECHANGE`
     - `DESTROY`
     - `LOADSTART`
     
 - Last step is to call register and unregister methods.
 
 Call register method when `View` is created in method `createViewInstance`, in class `TheoPlayerViewManager.java`.
 ```java

private EventListenersManager listenersManager;

@Override
protected THEOplayerView createViewInstance(final ThemedReactContext reactContext) {
    
    ...    

    if(listenersManager == null) {
        listenersManager = new EventListenersManager(playerView, reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class));
    }
    listenersManager.registerListeners();

    return playerView;
}
```

Call unregister method when host is destroyed in class `TheoPlayerViewManager.java`

```java
@Override
public void onHostDestroy() {
    playerView.onDestroy();
    if(listenersManager != null) {
        listenersManager.unregisterListeners();
        listenersManager = null;
    }
}
```

### iOS

In native module we have declared communication between java THEOplayer library and react native, so now we need to declare manually new EventListeners or better dynamically.

- Add new swift class inside `ios/` e.g. `ReactNativeEventEmitter.swift` and declare class, which will extends react context module:

```swift
import Foundation
    
@objc(ReactNativeEventEmitter)
class ReactNativeEventEmitter: RCTEventEmitter {
    
    var hasListeners : Bool = false
    
    // All Events which must be support by React Native.
    var allEvents: [String] = []
    
    override init() {
    super.init()
    print("ReactNativeEventEmitter init")
    EventEmitter.sharedInstance.registerEventEmitter(eventEmitter: self)
    }
    
    // Override implementation of queue setup
    // - Returns: when true class initialized on the main thread,
    //            when false class initialized on a background thread
    @objc
    override static func requiresMainQueueSetup() -> Bool {
    return true;
    }
    
    // Base override for RCTEventEmitter.
    //
    // - Returns: all supported events
    @objc open override func supportedEvents() -> [String] {
    return allEvents
    }
    
    // Will be called when this module's first listener is added.
    override func startObserving() {
    print("ReactNativeEventEmitter startObserving")
    
    hasListeners = true
    
    super.startObserving()
    
    }
    
    // Will be called when this module's last listener is removed, or on dealloc.
    override func stopObserving() {
    print("ReactNativeEventEmitter stopObserving")
    
    hasListeners = false
    
    EventEmitter.sharedInstance.removeAllEventListeners()
    allEvents = []
    
    super.stopObserving()
    
    }
    
    override func addListener(_ eventName: String!) {
    print("ReactNativeEventEmitter addListener: ", eventName)
    
    if EventEmitter.sharedInstance.addEventListener(eventName: eventName) {
        allEvents.append(eventName)
    }
    
    super.addListener(eventName)
    }
    
}
```

- Add next new swift class inside `ios/` e.g. `EventEmitter.swift` and declare interface for events emitter:

```swift
import Foundation
import THEOplayerSDK
    
class EventEmitter {
    
    /// Shared Instance.
    public static var sharedInstance = EventEmitter()
    
    // ReactNativeEventEmitter is instantiated by React Native with the bridge.
    private static var eventEmitter: ReactNativeEventEmitter!
    private static var player: THEOplayer!
    
    private var listeners: [String: EventListener] = [:]
    
    private init() {}
    
    // When React Native instantiates the emitter it is registered here.
    func registerEventEmitter(eventEmitter: ReactNativeEventEmitter) {
    EventEmitter.eventEmitter = eventEmitter
    }
    
    func registerPlayer(player: THEOplayer) {
    EventEmitter.player = player
    }
    
    // Dispatch one event
    func dispatch(name: String, body: Any?) {
    EventEmitter.eventEmitter.sendEvent(withName: name, body: body)
    }
    
    // Dispatch event to all listeners
    func dispatchToAll(body: Any?) {
    for event in EventEmitter.eventEmitter.allEvents {
        EventEmitter.eventEmitter.sendEvent(withName: event, body: body)
    }
    }
    
    func addEventListener(eventName : String) -> Bool {
    
    if listeners[eventName] != nil {
        return true
    }
    
    switch eventName {
        case "play":
        listeners[eventName] = EventEmitter.player.addEventListener(type: PlayerEventTypes.PLAY) { event in
            print("Received \(event.type) event at \(event.currentTime)")
            EventEmitter.sharedInstance.dispatch(name: event.type, body: ["currentTime": event.currentTime])
        }
        default:
        return false
    }
    
    return true
    }
    
    func removeAllEventListeners() {
    for (eventName, listener) in listeners {
        switch eventName {
        case "play":
        EventEmitter.player.removeEventListener(type: PlayerEventTypes.PLAY, listener: listener)
        default:
        break
        }
    }
    listeners = [:]
    }
}
```

- Declare EventListener in new Object-C class inside `ios/` e.g. `ReactNativeEventEmitter.m`:

```swift
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
    
@interface RCT_EXTERN_MODULE(ReactNativeEventEmitter, RCTEventEmitter)
    
RCT_EXTERN_METHOD(supportedEvents)
    
@end
```

- Import RTC event emitter in birdge inside`ios/TheoPlayerReactNative-Bridging-Header.h`:

```swift
...
#import <React/RCTEventEmitter.h>
...
```

## React Listener Implementation

Now we can use THEOplayer events in React Native:

1. In constructor declare listeners object in `TheoPlayerViewScreen.js`: 

```js
...
constructor(props) {
    super(props);
    
    this.listeners = {}; // Declarate listeners
}
...
```

2. On component unmount remove all declared listeners in `TheoPlayerViewScreen.js`:

```js
...
componentWillUnmount() {
    Object.keys(this.listeners).forEach(key => {
        this.listeners[key].remove();
    });
}
...
```

3. Use previously declared listener in native module and add listeners manually or declare manager in `TheoEventEmitter.js`:

```js
import {NativeEventEmitter, NativeModules} from 'react-native';

const {ReactNativeEventEmitter} = NativeModules;
const theoEventEmitter = new NativeEventEmitter(ReactNativeEventEmitter)

export default class TheoEventEmitter {

    addListener(eventType, listener) {
        return theoEventEmitter.addListener(eventType, listener);
    }
}
```

4. Import TheoEventEmitter & create instance of THEOplayer event emitter object in `THEOplayerView.js`:

```js
import THEOeventEmitter from './TheoEventEmitter';
    
const theoEventEmitter = new THEOeventEmitter(); // Create instance of theoplayer event emitter object
...
```

5. Declare e.g. react native button and on press add listener in `TheoPlayerViewScreen.js`:

```js
...
onPressAddEventListener = () => {
    if (!this.listeners['play']) {
        this.listeners['play'] = theoEventEmitter.addListener(
            'play',
            (event) => Alert.alert('Play event')
        );
    }
}
...
```

## Remarks
- **Disclaimer:** THEO Technologies does not provide THEOplayer React Native components. This How-to-Article describes how our current THEOplayer iOS and Android SDKs can be wrapped in React Native Bridges. The sample React Native bridge code is provided AS-IS without any explicit nor implicit guarantees. The React Native bridge sample code only provides mapping for a number of commonly used THEOplayer APIs, it is the customer’s responsibility to further expand the mapping and subsequently maintain the code and ensure compatibility with future versions of THEOplayer SDKs.

- There is a know issue in THEOplayer Android SDK whereby scaling of Video (aspectRatio and scrollView combination) could be an issue while using Full Screen property. Please read the article [How to fix FullScreen issue of THEOplayer in reactNative](11-fixing-fullscreen-issue.md)