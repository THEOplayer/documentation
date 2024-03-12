# How to implement custom local network access (LNA) interstitial dialog for Chromecast

## Prerequisites

THEOplayer is built in a modular way, and a THEOplayer library has a set of features enabled (e.g. HLS playback, MPEG-DASH playback, advertisements, etc.).

1. The Chromecast feature needs to be enabled in your library. Please reach out to your THEOplayer contact to ensure that this feature is enabled.

## Setup Chromecast SDK

Please follow [our guide on how to setup the Google Cast SDK](../../../how-to-guides/03-cast/01-chromecast/06-enable-chromecast-on-the-sender.md#iostvos-sdk-and-legacy-iostvos-sdk-412x) in your application when using THEOplayer.

## Implement custom LNA screen

We can create a simple `ViewController` that will present our custom screen about LNA permission for the user.

```swift
import Foundation
import GoogleCast

class CustomChromecastLNAScreen: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = .green

        let introText: UILabel = UILabel(frame: CGRect(x: 0, y: 0, width: UIScreen.main.bounds.width, height: 800))

        introText.text =

            "This is the first time you use Chromecast!\nAccept the permission popup and enjoy!\n\n(Pull down to close)"

        introText.numberOfLines = 5
        introText.textColor = .black
        introText.lineBreakStrategy = .pushOut
        introText.lineBreakMode = .byWordWrapping
        introText.adjustsFontSizeToFitWidth = true

        view.addSubview(introText)
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
    }

    override func viewDidDisappear(_ animated: Bool) {
    // When the user close the ViewController, we trigger the discovery. This will trigger the Apple LNA popup too.
        GCKCastContext.sharedInstance().discoveryManager.startDiscovery()
        super.viewDidDisappear(animated)
    }

}
```

Be aware once you opt-in for a custom LNA screen the Cast SDK will not do anything anymore regarding device discovery and device selection. (These are all part of the default LNA logic from Google)

So the device discovery needs to be started manually by calling `GCKCastContext.sharedInstance().discoveryManager.startDiscovery()`

## Use custom LNA screen

To present the new LNA screen we have 2 options:

- connect it to a native Cast button
- connect it to the in-player Cast button inside THEOplayer UI

On a `ViewController` where we have access to THEOplayer we can do something like this:

```swift
// Set up ChromeCast Button

self.castButton = GCKUICastButton(frame: CGRect(x: CGFloat(0), y: CGFloat(0), width: CGFloat(24), height: CGFloat(24)))
self.castButton!.tintColor = UIColor.white
self.navigationItem.rightBarButtonItem = UIBarButtonItem(customView: self.castButton!)

self.castButton?.delegate = self // native button

self.theoplayer?.cast?.chromecast?.setCastButtonDelegate(self) // in-player button
```

As you can see `self.castButton?.delegate` is used for the native Cast button and `self.theoplayer?.cast?.chromecast?.setCastButtonDelegate()` is a THEOplayer API that allows you to connect custom logic for the in-player Cast button.

Both methods request a `GCKUICastButtonDelegate` ([API](https://developers.google.com/cast/docs/reference/ios/protocol_g_c_k_u_i_cast_button_delegate-p))

If you implement the delegate on the ViewController itself you will have something similar:

```swift

func castButtonDidTap(toPresentLocalNetworkAccessPermissionDialog castButton: GCKUICastButton) {
    self.navigationController?.present(CustomChromecastLNAScreen(), animated: true, completion: nil)
}


func castButtonDidTap(_ castButton: GCKUICastButton, toPresentDialogFor castState: GCKCastState) {
    GCKCastContext.sharedInstance().presentCastDialog()
}
```

The first method is called when you have to present your LNA screen, the second method is called when you can show the device selection screen.

That's all!

Now your custom logic will be triggered whenever the user clicks on the native or on the in-player Chromecast button!
