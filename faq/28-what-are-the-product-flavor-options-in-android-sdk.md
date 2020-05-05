# What are the Product Flavor options in the Android SDK (minApi16 and minApi21)

This question is typically asked by developers who browse our documentation and are unsure on when to use minApi16 and minApi21.

The THEOplayer Android SDK exists in two flavors:

- **minApi21, aimed at Android 5.0 and onwards**.
- **minApi16, aimed at Android 4.1 and onwards**. This .aar file is bigger, because extra APIs are included to offer support on these devices.

The set of supported features are the same for both flavors.

Note that some (older) Android devices have limited DRM playback support. For example, some older Android devices only support baseline encoding and Widevine L3.

Links:

- Overview of Android SDK Platform releases: https://developer.android.com/studio/releases/platforms