# iOS SDK Touch-events (gestures)

## Introduction

This page describes how to implement Touch-events (gestures recognizers) for THEOplayer in your iOS app. This is useful if you want to add specific behaviors for some or all gestures and need therefore to recognize them.

Note: To this end, the UIGestureRecognizerDelegate protocol needs to be implemented into the THEOplayerInternal_iOS class.  

#### General Notions about gestures recognizers

This section contains some general notions about gesture-recognizers. For more complete information in this regard, please consult the Apple documentation pages (see link in Resources), from which most of the content of this section is a (though rearranged) quotation:

1. A gesture recognizer decouples the logic for recognizing a sequence of touches (or other input) and acting on that recognition. 

2. A gesture recognizer has one or more target-action pairs associated with it. If there are multiple target-action pairs, they are discrete, and not cumulative. Recognition of a gesture results in the dispatch of an action message to a target for each of the associated pairs. 

3. The interpreted gesture can be either discrete or continuous. A discrete gesture (e.g.: double tap) results in a single action sent. A continuous gesture (e.g.: rotation gesture), an action message is sent for each incremental change until the multi-touch sequence concludes. 

4. A gesture recognizer operates on touches hit-tested to a specific view (and all its subviews). Therefore, it must be associated with that view.

5. The THEOplayer css is not loaded when chromeless is enabled.

#### Supported Usecases 

| Description      | Supported SDK's    |  Description |
| :---             |    :----           |:---          |
| UITapGestureRecognizer   | iOS 3.2+        | Single or multiple taps. For this gesture to be recognized, the specified number of fingers must tap the view a specified number of times.      |
| UIPinchGestureRecognizer   | iOS 3.2+        | Pinching gestures involving two touches. When the user moves the two fingers toward each other, the conventional meaning is zoom-out; when the user moves the two fingers away from each other, the conventional meaning is zoom-in.      |
| UIRotationGestureRecognizer   | iOS 3.2+        | Rotation gestures involving two touches. When the user moves the fingers opposite each other in a circular motion, the underlying view should rotate in a corresponding direction and speed.      |
| UISwipeGestureRecognizer   | iOS 3.2+        | Swiping gestures in one or more directions. A swipe is a discrete gesture, and thus the associated action message is sent only once per gesture.      |
| UIPanGestureRecognizer   | iOS 3.2+        | Panning (dragging) gestures. The user must be pressing one or more fingers on a view while they pan it. Clients implementing the action method for this gesture recognizer can ask it for the current translation and velocity of the gesture.      |
| UIScreenEdgePanGestureRecognizer   | iOS 3.2+        | A gesture recognizer that looks for panning (dragging) gestures that start near an edge of the screen. The system uses screen edge gestures in some cases to initiate view controller transitions. You can use this class to replicate the same gesture behavior for your own actions.      |
| UILongPressGestureRecognizer   | iOS 3.2+        | Long-press gestures. The user must press one or more fingers on a view and hold them there for a minimum period of time before the action triggers. While down, the user’s fingers may not move more than a specified distance; if they move beyond the specified distance, the gesture fails.      |

#### How to use in THEOplayer iOS SDK

```swift
// create the Gesture Recognizer
let tapGesture = UITapGestureRecognizer(target: self, action: #selector(self.tapGestureFired(sender:))) 
tapGesture.numberOfTapsRequired = 1

// attach the gesture to THEOplayer
self.theoplayer.addGestureRecognizer(tapG)

// get an array of all the attached Gesture Recognizers on THEOplayer
self.theoplayer.gestureRecognizers

// remove the gesture from THEOplayer
self.theoplayer.removeGestureRecognizer(tapG)
```

## Resources

The following resources provide more information:

- [Apple Touch Gestures Documentation](https://developer.apple.com/documentation/uikit/uigesturerecognizer)

