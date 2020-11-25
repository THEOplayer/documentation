# Picture-in-Picture

This guide explains what Picture-in-Picture (PiP) is, describes how to implement it and links relevant resources.

The Picture-in-Picture feature allows developers to create a floating player. This is commonly used to let the video remain playing on screen even if the user scrolls to another section of the page and the original location of the player is no longer shown. 

![Picture-in-Picture](../../assets/img/picture-in-picture.PNG "Picture-in-Picture")

### Table of Contents
- [SDKs](#sdks)
- [How to use Picture-in-Picture](#how-to-use-picture-in-picture)
- [Code Examples](#code-examples)
  - [Enable Picture-In-Picture mode](#enable-picture-in-picture-mode)
  - [Configure the Picture-In-Picture mode](#configure-the-picture-in-picture-mode)
  - [Observe when the Picture-In-Picture moves](#observe-when-the-picture-in-picture-moves)
- [Sample applications](#sample-applications)
- [Remarks](#remarks)
- [Resources](#resources)


## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |     No     |   Yes   | Yes  |      No      |      N/A       |

## How to use Picture-in-Picture

Picture-in-Picture is an interesting option on both desktop and mobile to keep showing the video while the user scrolls to different parts of the content. PiP in THEOplayer presents several possibilities: this section shows how to enable, configure and observe the Picture-in-Picture option for all available SDKs. 

## Code Examples

### Enable Picture-In-Picture mode

##### Web SDK

In this SDK, PiP is enabled by default if the player configuration contains any PiP configuration (see next paragraph). For this reason, there is no need to use any specific snippet to enable it. 

For more details about the player configuration see the paragraph resources at the bottom of this page.

##### iOS SDK

If you want to use Picture-In-Picture in your app you can instantiate the player with a THEOplayerConfiguration object that enables the Picture-In-Picture mode.

```swift
let playerConfig = THEOplayerConfiguration(pictureInPicture: true)
var theoplayer = THEOplayer(configuration: playerConfig)
```

Once the Picture-In-Picture mode is enabled, the player's *pip* property can be accessed.

### Configure the Picture-In-Picture mode

##### Web SDK

The PiP configuration for this SDK includes 3 properties:

- `position`:(optional, possible values: "top-left", "top-right", "bottom-left", "bottom-right")
The corner in which the player should be shown while in PiP mode. Defaults to the bottom right corner.

- `visibility`: (optional, a number from 0 to 1)
The maximum percentage of the original player position that should be visible to enable PiP automatically. If not configured, PiP can only be turned on by setting [presentationMode](https://docs.theoplayer.com/api-reference/web/theoplayer.presentationmode.md) to "picture-in-picture".

- `retainPresentationModeOnSourceChange`:(optional, possible values: true or false)
If set to true, the previous [presentationMode](https://docs.theoplayer.com/api-reference/web/theoplayer.presentationmode.md) is retained even as the source changes. It is set to false by default.

```js
var playerConfig = {
                ...
                pip: {
                        visibility: 0.7,
                        position: "bottom-left",
                        retainPresentationModeOnSourceChange: true           
                        }                 
                };
```

##### iOS SDK

Using the *configure(movable:defaultCorner:)* method of the player's *pip* property you can configure the picture-in-picture.

You can configure:

- whether the PiP view is movable or not (default to true);

- the default corner of the PiP view (default to bottom right);

```swift
theoplayer.pip!.configure(movable: false, defaultCorner: .bottomLeft)
```

### Observe when the Picture-In-Picture moves

##### iOS SDK

Using the notification center you can listen to the *PictureInPictureMoved* notification. This notification will be pushed every time the picture-in-picture view moves to a different corner.

In the callback, you can retrieve the previous and the new corner in the userInfo dictionary respectively with the *PictureInPictureOldCornerUserInfoKey* and the *PictureInPictureNewCornerUserInfoKey* keys.

```swift
NotificationCenter.default.addObserver(self, selector: #selector(onPiPMoved), name: Notification.Name.PictureInPictureMoved, object: nil)

@objc func onPiPMoved(notif: Notification) {
    let userInfo = notif.userInfo as! [String: Any]
    let oldCorner : PictureInPictureCorner = userInfo[PictureInPictureOldCornerUserInfoKey]! as! PictureInPictureCorner
    let newCorner : PictureInPictureCorner = userInfo[PictureInPictureNewCornerUserInfoKey]! as! PictureInPictureCorner
    print("PiP has moved from \(oldCorner) to \(newCorner)")
}
```

## Sample applications

A demo of this feature can be found at 

- [https://demo.theoplayer.com/picture-in-picture](https://demo.theoplayer.com/picture-in-picture)

To see PiP in action, scroll down the page.

## Remarks

The following remarks can help:

- PiP is a presentation mode of the player. As such, you can listen for a *presentationmodechange *event or verify the presentationMode of the player in case you need to find out what the presentation mode is at a given moment or detect a change.

- This feature is not completely the same on all SDKs, as the options may vary. For example, in the Web SDK it is not possible to drag and drop the floating player to a new position (PiP is not *movable*). 

## Resources
The following resources provide more information:

- [PipConfiguration API Reference](https://docs.theoplayer.com/api-reference/web/theoplayer.pipconfiguration.md)
- [PlayConfiguration API Reference](https://docs.theoplayer.com/api-reference/web/theoplayer.playerconfiguration.md)