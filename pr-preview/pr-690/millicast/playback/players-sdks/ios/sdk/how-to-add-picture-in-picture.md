# How-to Add Picture in Picture

**Picture-in-Picture (PiP)** is compatible with iOS 16+. This feature allows you to support a floating video frame that persists even when the user sends the application to the background or switches to another application.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/632bcf2c4c46320da939d2dcb89b95c15e2ba9c29826b7fb28d866c8-mobile-picture-in-picture-9985e78ef10631919ba2acb13c518574.png)

Refer to the [Interactive Player](https://github.com/dolbyio-samples/rts-app-ios-viewer/tree/main/interactive-player) sample application to learn more about implementing the code needed for PiP feature in a fully functioning iOS App.

<!-- -->

Getting Started with iOS SDK

If you haven't already, begin by following the [Getting Started](/documentation/pr-preview/pr-690/millicast/playback/players-sdks/ios/sdk/getting-started-with-subscribing.md) tutorial to become familiar with the concepts to create an application that can publish and/or subscribe using the [iOS](/documentation/pr-preview/pr-690/millicast/playback/players-sdks/ios/sdk.md) SDK.

## 1. Setup AVPictureInPictureController[​](#1-setup-avpictureinpicturecontroller "Direct link to 1. Setup AVPictureInPictureController")

Once you have subscribed to a stream and have access to the video tracks available in the stream, follow the steps below to add Picture-In-Picture (PiP) Support.

### 1.1 Confirm that current OS/Device supports PiP[​](#11-confirm-that-current-osdevice-supports-pip "Direct link to 1.1 Confirm that current OS/Device supports PiP")

It is common practice to make sure that PiP is available on the current device given the wide range of applications and iOS versions currently in use. The `isPictureInPictureSupported()` method allows you to check before proceeding with the necessary changes.

For more information on the `isPictureInPictureSupported()` method, check out Apple's [documentation](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/ispictureinpicturesupported\(\)).

```swift
guard AVPictureInPictureController.isPictureInPictureSupported() else { return }

```

### 1.2 Prepare the video view(MCSampleBufferVideoUIView) to show in PiP[​](#12-prepare-the-video-viewmcsamplebuffervideouiview-to-show-in-pip "Direct link to 1.2 Prepare the video view(MCSampleBufferVideoUIView) to show in PiP")

Create a video view to show in PiP by passing in the renderer, where renderer is an instance of **MCCMSampleBufferVideoRenderer**.

```swift
let videoView = MCSampleBufferVideoUIView(frame: .zero, renderer: renderer)
videoView.translatesAutoresizingMaskIntoConstraints = false
videoView.layer.bounds = sourceView.bounds

```

*Note: Only one renderer can be attached to a video track at a given time, so reuse the renderer(MCCMSampleBufferVideoRenderer) used to receive video in the app.*

### 1.3 Add the video view to AVPictureInPictureVideoCallViewController[​](#13-add-the-video-view-to-avpictureinpicturevideocallviewcontroller "Direct link to 1.3 Add the video view to AVPictureInPictureVideoCallViewController")

The **AVPictureInPictureVideoCallViewController** serves as a source for the **AVPictureInPictureController** (iOS Only). Create an instance **AVPictureInPictureVideoCallViewController** and add your video view as a subview.<br />**MCSampleBufferVideoUIView** has properties to query for video size changes and notifies frame changes via **MCVideoViewDelegate**. This can be used to set the `preferredContentSize`.

```swift
let pipVideoCallViewController = AVPictureInPictureVideoCallViewController()
pipVideoCallViewController.preferredContentSize = videoSize
pipVideoCallViewController.view.addSubview(videoView)

// Setup layout constraints.
NSLayoutConstraint.activate([
    pipVideoCallViewController.view.topAnchor.constraint(equalTo: pipView.topAnchor),
    pipVideoCallViewController.view.leadingAnchor.constraint(equalTo: pipView.leadingAnchor),
    pipView.bottomAnchor.constraint(equalTo: pipVideoCallViewController.view.bottomAnchor),
    pipView.trailingAnchor.constraint(equalTo: pipVideoCallViewController.view.trailingAnchor)
])

```

### 1.4 Create the PiP content source[​](#14-create-the-pip-content-source "Direct link to 1.4 Create the PiP content source")

Use the `sourceView` and the `pipViewCallViewController` to create a **ContentSource** for **AVPictureInPictureController**.

```swift
let pipContentSource = AVPictureInPictureController.ContentSource(activeVideoCallSourceView: sourceView, contentViewController: pipVideoCallViewController)

```

*Note: Setting* `canStartPictureInPictureAutomaticallyFromInline` *ensures PiP playback is automatically started when your app moves to background.*

## 2. Listen to Picture-in-Picture lifecycle events[​](#2-listen-to-picture-in-picture-lifecycle-events "Direct link to 2. Listen to Picture-in-Picture lifecycle events")

Conform to the **AVPictureInPictureControllerDelegate** protocol to receive PiP lifecycle events and manage any activities that need to occur when starting and stopping PiP.

For more information on implementing the **AVPictureInPictureControllerDelegate** method, check out Apple's [documentation](https://developer.apple.com/documentation/avkit/avpictureinpicturecontrollerdelegate/).

```swift
func pictureInPictureControllerDidStartPictureInPicture(_ pictureInPictureController: AVPictureInPictureController) {
    print("Started picture in picture")
}

func pictureInPictureControllerWillStartPictureInPicture(_ pictureInPictureController: AVPictureInPictureController) {
    print("Will start picture in picture")
}

func pictureInPictureControllerWillStopPictureInPicture(_ pictureInPictureController: AVPictureInPictureController) {
    print("Will stop picture in picture")
    // Use the pictureInPictureControllerWillStopPictureInPicture delegate function to clean up the class instances created
    pipController = nil
}

func pictureInPictureControllerDidStopPictureInPicture(_ pictureInPictureController: AVPictureInPictureController) {
     print("Stopped picture in picture")
}

func pictureInPictureController(_ pictureInPictureController: AVPictureInPictureController, failedToStartPictureInPictureWithError error: Error) {
    print("Failed to start picture in picture \(error.localizedDescription)")
}

```
