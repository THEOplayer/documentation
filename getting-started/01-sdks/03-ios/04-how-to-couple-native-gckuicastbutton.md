# How to couple the native GCKUICastButton to THEOplayer

This page shows how to wire up iOS's native GCKUICastButton to THEOplayer. Your native button will be provided with the following behaviour:

- Clicking the button while disconnected will start a chromecast session. The currently set source will start playing.
- Clicking the button while casting will stop the current session. The player will be paused.

## Objectives
- Create a GCKUICastButton
- Override the behaviour of this button

## Step-by-step guide

You can modify the behaviour of the GCKUICastButton by disabling triggering the default cast dialog and adding a new target for the button. Below, we provide an example implementation which uses the cast API of a previously created THEOplayer.

```swift
override func viewDidLoad() {
    self.theoplayer = THEOplayer()
    self.castButton = GCKUICastButton(frame: CGRect(x: CGFloat(0), y: CGFloat(0), width: CGFloat(24), height: CGFloat(24)))
    self.castButton.triggersDefaultCastDialog = false
    self.castButton.addTarget(self, action: #selector(handleCastButtonTap), for: UIControlEvents.touchUpInside)    
}
 
@objc func handleCastButtonTap() {
    guard let chromecast = self.theoplayer.cast?.chromecast else {
        return
    }
    if chromecast.state == PlayerCastState.available {
        chromecast.start()
    } else if chromecast.state == PlayerCastState.connected || chromecast.state == PlayerCastState.connecting {
        chromecast.stop()
    }
}
```