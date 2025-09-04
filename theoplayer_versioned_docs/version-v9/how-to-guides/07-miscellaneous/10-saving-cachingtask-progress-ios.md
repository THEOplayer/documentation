# Saving the progress of a caching task in iOS

This guide explains how to save the progress of an ongoing caching task and what the limitations of the iOS platform are.

The THEOplayer iOS SDK provides the capability to pause an ongoing task. Doing so will store the file state of the partially downloaded stream to disk, and allow the task to be resumed even after the application runtime has been terminated.
Note: See [CachingTask](pathname:///theoplayer/v9/api-reference/ios/Protocols/CachingTask.html) for the `pause()` method.

## Code Examples

The code example below demonstrates how to save the progress of ongoing caching tasks upon app termination from the app delegate.

```swift
import THEOplayerSDK

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
	...
    ...

    func applicationWillTerminate(_ application: UIApplication) {
        for task in THEOplayer.cache.tasks {
            if task.status == .loading {
                task.pause()
            }
        }
    }

    ...
    ...
```

Alternatively, Apple's [NotificationCenter](https://developer.apple.com/documentation/foundation/notificationcenter) provides an observer to receive app termination events:

```swift
import THEOplayerSDK

NotificationCenter.default.addObserver(self, selector: #selector(willTerminate), name: UIApplication.willTerminateNotification, object: nil)

...
...

@objc func willTerminate() {
    for task in THEOplayer.cache.tasks {
        if task.status == .loading {
            task.pause()
        }
    }
}

```

## Limitations

The THEOplayer iOS SDK allows the caching task to continue while running in the background, however, control in the background thread is limited and the termination signal falls short as noted in this [article](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623111-applicationwillterminate).
