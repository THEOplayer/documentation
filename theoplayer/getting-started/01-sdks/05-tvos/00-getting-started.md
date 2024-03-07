# Getting started on tvOS

The THEOplayer tvOS SDK can be used from within both a client-server app project (TVML) or a traditional app project.

A sample traditional app project is located at [https://github.com/THEOplayer/samples-tvos-sdk/](https://github.com/THEOplayer/samples-tvos-sdk/).

:::info Cocoapods

THEOplayer v2.83.0 and above can be managed through Cocoapods. Refer to <a href="https://github.com/THEOplayer/theoplayer-sdk-ios" target="_blank">https://github.com/THEOplayer/theoplayer-sdk-ios</a> for more information.

:::

## Prerequisites

- Download and install XCode.
- Obtain a THEOplayer tvOS SDK through the THEOplayer Developer Portal at [https://portal.theoplayer.com](https://portal.theoplayer.com/login).
  - And have the license string handy, as depicted in the screenshot below, because you'll need it when configuring your video player to swap out `your_license_string`.
    ![](https://cdn.theoplayer.com/images/git/theoplayer-ios-sdk-license-string.png)

## Getting started with a Client-Server App (TVML)

1.  In the target's General tab, in the Embedded Binaries click (+) and select the THEOplayerSDK.framework
2.  ```js
    import THEOplayerSDK
    ```

3.  Declare a player variable, pass the TVApplicationController instance, and a license

    ```js
    var playerConfig = THEOplayerConfiguration(
       license: "your_license_string"
    )
    var theoplayer = THEOplayer(appController: appController, configuration: playerConfig)
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

3.  Prepare THEOplayer before instantiating it with your view controller, e.g. in the AppDelegate's application(\_:didFinishLaunchingWithOptions:) method.

    ```js
    THEOplayer.prepare(withFirstViewController: UIStoryboard(name: "Main", bundle: nil).instantiateInitialViewController())
    ```

4.  Declare a player variable with a frame and a license

    ```js
    var playerConfig = THEOplayerConfiguration(
       license: "your_license_string"
    )
    var theoplayer = THEOplayer(with: CGRect(x: 0, y: 0, width: 1280, height: 720), configuration: playerConfig)
    ```

5.  Add the player to your controller's view hierarchy

    ```js
    theoplayer.addAsSubview(of: controller.view)
    ```

# Controlling the player

Once a player is created and set in your view, you can start interacting with the player instance using the THEOplayer API.

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
