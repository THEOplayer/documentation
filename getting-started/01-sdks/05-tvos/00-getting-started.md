# Getting started with the tvOS SDK

The THEOplayer tvOS SDK can be used from within both a client-server app project or a traditional app project.

## Getting started with a Client-Server App

1.  In the target's General tab, in the Embedded Binaries click (+) and select the THEOplayerSDK.framework
2.  ```js
    import THEOplayerSDK
    ```

3.  Declare a player variable and pass it the TVApplicationController instance  

    ```js
    var theoplayer = THEOplayer(appController: appController)
    ```

4.  Position and size your player

    ```js
    theoplayer.frame = CGRect(x: 0, y: 0, width: 1280, height: 720)
    ```

5.  Add the player to your controller's view hierarchy

    ```js
    theoplayer.addAsSubview(of: controller.view)
    ```

## Getting started with a Traditional App

1.  In the target's General tab, in the Embedded Binaries click (+) and select the THEOplayerSDK.framework
2.  ```js
    import THEOplayerSDK
    ```

3.  Prepare THEOplayer before instantiating it with your view controller, e.g. in the AppDelegate's application(_:didFinishLaunchingWithOptions:) method.

    ```js
    THEOplayer.prepare(withFirstViewController: UIStoryboard(name: "Main", bundle: nil).instantiateInitialViewController())
    ```

4.  Declare a player variable with a frame  

    ```js
    var theoplayer = THEOplayer(with: CGRect(x: 0, y: 0, width: 1280, height: 720))
    ```

5.  Add the player to your controller's view hierarchy

    ```js
    theoplayer.addAsSubview(of: controller.view)
    ```

# Controlling the player

Once a player is created and set in your view, you can start interacting with the player instance using the THEOplayer API.

#### Setting a source

Create a SourceDescription object and set the player's source

```js
let source = SourceDescription(sources: TypedSource(src: "https://www.examples.com/index.m3u8", type: "application/x-mpegurl"))
theoplayer.source = source
```

#### Add a player event listener

This example shows you how to listen to the player play event.

```js
var playListener = theoplayer.addEventListener(type: PlayerEventTypes.PLAY, listener: handlePlayEvent)

func handlePlayEvent(event : PlayEvent) {
    print("Received \(event.type) event at \(event.currentTime)")
}
```

#### Remove a player event listener

```js
theoplayer.removeEventListener(type: PlayerEventTypes.PLAY, listener: playListener)
```