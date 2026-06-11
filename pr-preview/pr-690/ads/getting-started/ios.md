# Getting started with OptiView Ads on iOS

This guide will get you started to integrate OptiView Ads in your OptiView Player iOS SDK: configure the license, update dependencies and set the source description.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

<!-- -->

1. You need to have an OptiView Player license which is compatible with OptiView Ads. This can be done through the [player portal](https://portal.theoplayer.com).

2. You need a correctly deployed [OptiView Ads signaling service](/documentation/pr-preview/pr-690/ads/getting-started/signaling-service.md).

3. Add the OptiView Player iOS SDK to your project by following our [Getting started](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/ios/getting-started.md) guide. Make sure to [set up an OptiView Ads-compatible license](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/ios/getting-started.md#theoplayer-license) in your app.

4. Add the OptiView Ads integration as a dependency to your project:

   * CocoaPods
   * SwiftPM

   1. Add the `THEOplayer-Integration-THEOads` pod to your Podfile:

   ```sh
   pod 'THEOplayer-Integration-THEOads', '~> <YOUR_INTEGRATION_VERSION>'

   ```

   2. Install the new pod:

   ```sh
   pod install

   ```

   1. Open your Xcode project and navigate to File > Add Package Dependencies...

   ![Screenshot of Xcode file menu](/documentation/pr-preview/pr-690/assets/images/ios-xcode-file-menu-e8f297910dd358c7a8ef64f4d7130c5b.png)

   2. Add `theoplayer-sdk-apple` package by entering the following url:

   ```sh
   https://github.com/THEOplayer/theoplayer-sdk-apple

   ```

   ![Screenshot of SwiftPM menu](/documentation/pr-preview/pr-690/assets/images/ios-swiftpm-menu-c207b6501f931613f819a1772ab95e56.png)

   3. Select `THEOplayerTHEOadsIntegration` from the package products list and add it to your target.

   ![Screenshot of SwiftPM  product selection](/documentation/pr-preview/pr-690/assets/images/ios-swiftpm-product-selection-e36076bec4468c2ff11c0fc2c8a629c8.png)

5. Add Google IMA SDK as a dependency to your project:

   * CocoaPods
   * SwiftPM

   1. The `THEOplayer-Integration-THEOads` pod has a dependency on `GoogleAds-IMA-iOS-SDK` which should be installed automatically.

   1) Open your Xcode project and navigate to File > Add Package Dependencies...

   ![Screenshot of Xcode file menu](/documentation/pr-preview/pr-690/assets/images/ios-xcode-file-menu-e8f297910dd358c7a8ef64f4d7130c5b.png)

   2. Add `swift-package-manager-google-interactive-media-ads-ios` package by entering the following url:

   ```sh
   https://github.com/googleads/swift-package-manager-google-interactive-media-ads-ios

   ```

   ![Screenshot of SwiftPM menu](/documentation/pr-preview/pr-690/assets/images/ios-swiftpm-menu-google-21b537bc3bafd83d9d644d078ce46b17.png)

   3. Select `GoogleInteractiveMediaAds` from the package products list and add it to your target.

   ![Screenshot of SwiftPM  product selection](/documentation/pr-preview/pr-690/assets/images/ios-swiftpm-product-selection-google-2fac68582649398baf8e7bdd86c51893.png)

## Integration[​](#integration "Direct link to Integration")

To make use of the OptiView Ads integration, create and add the `THEOadsIntegration` to your `THEOplayer` instance:

```swift
import UIKit
import THEOplayerSDK
import THEOplayerTHEOadsIntegration

class ViewController: UIViewController {
    var theoplayer: THEOplayer!
    var theoads: THEOadsIntegration!

    override func viewDidLoad() {
        super.viewDidLoad()
        self.theoplayer = THEOplayer(configuration: THEOplayerConfigurationBuilder().build())
        self.theoplayer.frame = view.bounds
        self.theoplayer.addAsSubview(of: view)
        self.theoads = THEOadsIntegrationFactory.createIntegration(on: self.theoplayer)
        self.theoplayer.addIntegration(self.theoads)
    }

}

```

Then, configure a source containing a `THEOAdDescription`:

```swift
import UIKit
import THEOplayerSDK
import THEOplayerTHEOadsIntegration

class ViewController: UIViewController {
    var theoplayer: THEOplayer!
    var theoads: THEOadsIntegration!

    override func viewDidLoad() {
        super.viewDidLoad()
        self.theoplayer = THEOplayer(configuration: THEOplayerConfigurationBuilder().build())
        self.theoplayer.frame = view.bounds
        self.theoplayer.addAsSubview(of: view)
        self.theoads = THEOadsIntegrationFactory.createIntegration(on: self.theoplayer)
        self.theoplayer.addIntegration(self.theoads)

        let source = "PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI"
        let typedSource = TypedSource(
            src: source,
            type: "application/x-mpegurl",
            hlsDateRange: true
        )
        let theoad = THEOAdDescription(
            networkCode: "NETWORK-CODE",
            customAssetKey: "CUSTOM-ASSET-KEY"
        )
        let sourceDescription = SourceDescription(source: typedSource, ads: [theoad])
        self.theoplayer.source = sourceDescription
        self.theoplayer.play()
    }

}

```

* Notice that the `src` is different as usual. For OptiView Ads, a signaling server needs to be set up which acts as a proxy to parse the given manifest and insert the ad interstitials. More information can be found [here](/documentation/pr-preview/pr-690/ads/getting-started/signaling-service.md).
* The `hlsDateRange` flag needs to be set to `true` as the ad markers are done using `EXT-X-DATERANGE` tags.
* The `ads` array needs to contain a `THEOAdDescription`. Furthermore, the `networkCode` and `customAssetKey` needs to be set according to your configured Google account.

## More information[​](#more-information "Direct link to More information")

* [What is OptiView Ads?](https://optiview.dolby.com/products/server-guided-ad-insertion/)
* [The Advantages of Server-Guided Ad Insertion](https://optiview.dolby.com/solutions/personalized-advertising/)
* [Is Server-Guided Ad Insertion (SGAI) revolutionizing streaming monetization? (blog)](https://optiview.dolby.com/resources/blog/advertising/what-is-sgai-server-guided-ad-insertion-in-streaming/)
