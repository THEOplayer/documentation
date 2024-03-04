# How to use THEOplayer iOS SDK on an M1 mac

The iPhone simulators on M1 MacBooks use the arm64 architecture, therefore any binaries linked during compilation time that do not support the architecture will result in compilation error. Many third party frameworks lack the support for this particular architecture, and this causes unfortunate limitations for development.

Previous to writing this article (specifically with THEOplayer **versions 3.0.0 and below**), THEOplayer depended on few of these frameworks that lack the arm64 architecture, which in turn resulted in deciding to omit it. As of **version 3.1.0** and in part of our effort to optimize our modularization, the THEOplayer framework will be delivered with the arm64 architecture support as long as no feature is included that adds a dependency to an unsupported third party framework.

:::important

To include the new architecture, import the **.xcframework** package into your project instead of the **.framework** package. The **.framework** is a fat framework and cannot include two arm64 architectures for device and simulator.

:::

#### What are the features that lack arm64 simulator support?

**Google IMA / Google DAI**
The Google IMA & DAI features rely on the [GoogleInteractiveMediaAds](https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/download) framework which lacks the architecture in its fat framework binary. You can follow developer requests and updates from the IMA team in this [Google Groups conversation](https://groups.google.com/g/ima-sdk/c/y-5OHtAQ5rk?pli=1).

**Google Cast / Chromecast**
The Chromecast feature relies on the [GoogleCast](https://developers.google.com/cast/docs/ios_sender#manual_setup) framework which lacks the architecture in its fat framework binary.

Other features that do not support the architecture are: **Agama, Moat & Yospace.**

#### What is the alternative solution?

In case you require one of the features in the section above to be included in your THEOplayer iOS SDK, then the suggested temporary solution is to use Apple's [Rosetta](https://support.apple.com/en-us/HT211861) to be able to run the framework on an iPhone simulator on an M1 mac. Rosetta will launch the simulator in **x86_64** architecture instead of **arm64** and the framework will successfully be linked during compilation.

#### What about the future?

Whenever a third party dependency adds support to the architecture, we will address the situation and update our SDK framework. To stay up to date with changes related to our iOS SDK, check out our [CHANGELOG](https://docs.theoplayer.com/changelog.md) where we post new updates and features with every new release.
