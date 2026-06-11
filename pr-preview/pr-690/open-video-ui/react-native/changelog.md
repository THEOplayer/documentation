# @theoplayer/react-native-ui

## 0.23.2[​](#0232 "Direct link to 0.23.2")

### 🐛 Issues[​](#-issues "Direct link to 🐛 Issues")

* Fixed an issue where the playhead on the `<SeekBar>` would occasionally snap back after scrubbing on iOS Safari.

## 0.23.1[​](#0231 "Direct link to 0.23.1")

### 🐛 Issues[​](#-issues-1 "Direct link to 🐛 Issues")

* Improve labels for text tracks and audio tracks in the `<LanguageMenuView>`.

## 0.23.0[​](#0230 "Direct link to 0.23.0")

### ✨ Features[​](#-features "Direct link to ✨ Features")

* Added support for React Native THEOplayer v11.

## 0.22.0[​](#0220 "Direct link to 0.22.0")

### ✨ Features[​](#-features-1 "Direct link to ✨ Features")

* Exposed `onUserAction()` via a ref in `UiContainer`, enabling parent components to programmatically trigger the UI fade-in animation.

## 0.21.3[​](#0213 "Direct link to 0.21.3")

### 🐛 Issues[​](#-issues-2 "Direct link to 🐛 Issues")

* Resolved an issue where button presses occasionally failed to register in fullscreen presentation mode on iOS and Android.

## 0.21.2[​](#0212 "Direct link to 0.21.2")

### 🐛 Issues[​](#-issues-3 "Direct link to 🐛 Issues")

* Fixed an issue where the `<SeekBar>` would occasionally jump back after seeking.

## 0.21.1[​](#0211 "Direct link to 0.21.1")

### 🐛 Issues[​](#-issues-4 "Direct link to 🐛 Issues")

* Fixed an issue where the `GoToLiveButton` was not available as an exported component.

## 0.21.0[​](#0210 "Direct link to 0.21.0")

### ✨ Features[​](#-features-2 "Direct link to ✨ Features")

* Added a `<GoToLiveButton>` component that only renders itself while playing a DVR stream and being behind the live point.

## 0.20.2[​](#0202 "Direct link to 0.20.2")

### 🐛 Issues[​](#-issues-5 "Direct link to 🐛 Issues")

* Fixed an issue on Web where it was not possible to dismiss the UI by clicking or tapping.
* Fixed an issue on iOS where the UI would not reappear when tapping the screen.

## 0.20.1[​](#0201 "Direct link to 0.20.1")

### 🐛 Issues[​](#-issues-6 "Direct link to 🐛 Issues")

* Fixed an issue where the `<SeekBar>` would be disabled for live content.

## 0.20.0[​](#0200 "Direct link to 0.20.0")

### ✨ Features[​](#-features-3 "Direct link to ✨ Features")

* Fixed an issue where the clickthough of an ad could not be tapped/clicked.
* Added usage of `adTop`, `adCenter` and `adBottom` UI slots to define a custom ad lay-out on both Web and mobile platforms.

## 0.19.0[​](#0190 "Direct link to 0.19.0")

### ✨ Features[​](#-features-4 "Direct link to ✨ Features")

* Added support for feature exclusion in `<THEOplayerDefaultUI>` using the `excludedFeatures` property.

### 🐛 Issues[​](#-issues-7 "Direct link to 🐛 Issues")

* Fixed an issue where the seekable ranges passed to the Seekbar could contain NaN values

## 0.18.0[​](#0180 "Direct link to 0.18.0")

### ✨ Features[​](#-features-5 "Direct link to ✨ Features")

* Added support for THEOplayer v10 and React Native THEOplayer v10.

## 0.17.0[​](#0170 "Direct link to 0.17.0")

### 🐛 Issues[​](#-issues-8 "Direct link to 🐛 Issues")

* Fixed an issue on Android where the controls would not be visible when returning from PiP in paused state.
* Fixed an issue where the skip buttons would sometimes not be visible.
* Fixed an issue where buttons in the `center` slot would not be tappable on smaller player views.
* Optimized UI performance by disabling component rendering while the UI is not visible.

## 0.16.0[​](#0160 "Direct link to 0.16.0")

### 🐛 Issues[​](#-issues-9 "Direct link to 🐛 Issues")

* Fixed an issue where the `<CenteredDelayedActivityIndicator>` was not shown in all platforms when the `waiting` was fired.
* Fixed an issue where high-frequency `progress` events would trigger excessive re-renders and cause memory buildup.
* Fixed an issue on iOS and Android where the `<SeekBar>` time would sometimes jump while seeking to a new position.
* Fixed an issue where menu items with long labels would not be properly displayed.

## 0.15.0[​](#0150 "Direct link to 0.15.0")

### 🐛 Issues[​](#-issues-10 "Direct link to 🐛 Issues")

* Prevent a fade out of the UI while the skip buttons are being used.
* Fixed an issue where the playback rate setting label text didn't fit in its `Text` component.
* Fixed the `useEnded` hook to take into account a `currentTime` that can become slightly larger than the expected stream duration.
* Fixed an issue on Android where a thumbnail preview would contain multiple tiles when the tile image was larger than 2048px.
* Fixed an issue where `<TimeLabel>` would briefly show an invalid duration when playing a live stream.
* Fixed an issue on iOS where both Chromecast and AirPlay buttons were shown as "connected" when connecting to a Chromecast receiver.

### ✨ Features[​](#-features-6 "Direct link to ✨ Features")

* Added a `renderAboveThumbComponent` property to the `SeekBar` component that allows customizing an optional component that is rendered above the `SeekBar`'s thumbnail. The `ThumbnailView` remains the default component.

## 0.14.0[​](#0140 "Direct link to 0.14.0")

### 🐛 Issues[​](#-issues-11 "Direct link to 🐛 Issues")

* Fixed an issue where the UI would fade-out while scrubbing the seekbar.

### ✨ Features[​](#-features-7 "Direct link to ✨ Features")

* Added `onScrubbing` callback for the Slider component.
* Added `scrubTime` property to the `ChapterLabel` component.
* Added a `<ConditionalPlayButton>` component that only renders itself while the player is not waiting on media content.

## 0.13.0[​](#0130 "Direct link to 0.13.0")

### ✨ Features[​](#-features-8 "Direct link to ✨ Features")

* Added an AutoFocusGuide component to be used on tvOS as a wrapper around for example a controlBar. It catches the focus while navigating the UI with the Apple TV remote.

### 🐛 Issues[​](#-issues-12 "Direct link to 🐛 Issues")

* Fixed an issue where the UI became unreponsive for a short while after switching the presentationMode or after the stream has ended.

## 0.12.0[​](#0120 "Direct link to 0.12.0")

### ✨ Features[​](#-features-9 "Direct link to ✨ Features")

* Added localization support.
* Added support for rendering chapter markers & label.

### 🐛 Issues[​](#-issues-13 "Direct link to 🐛 Issues")

* Fixed an issue where the play button would stay in the paused state after starting the stream.

## 0.11.0[​](#0110 "Direct link to 0.11.0")

### ✨ Features[​](#-features-10 "Direct link to ✨ Features")

* Added `testID` properties on button and seekBar components to support automated testing.
* Added support for THEOplayer 9.0.

## 0.10.1[​](#0101 "Direct link to 0.10.1")

### 🐛 Issues[​](#-issues-14 "Direct link to 🐛 Issues")

* Fixed an issue for Web where the `SeekBar` component would throw an infinite loop error on Safari browsers.

## 0.10.0[​](#0100 "Direct link to 0.10.0")

### 📦 Dependency Updates[​](#-dependency-updates "Direct link to 📦 Dependency Updates")

* Replaced slider component as a dependency of the seek bar.

### 🐛 Issues[​](#-issues-15 "Direct link to 🐛 Issues")

* Fixed an issue where an app using the UI would crash when using the `SeekBar` component while streaming a live asset.

## 0.9.0[​](#090 "Direct link to 0.9.0")

### ✨ Features[​](#-features-11 "Direct link to ✨ Features")

* Ad play-out is resumed when the app is foregrounded again after tapping the ad `clickthrough`. This feature requires `react-native-theoplayer` v8.6.0.

## 0.8.0[​](#080 "Direct link to 0.8.0")

### ✨ Features[​](#-features-12 "Direct link to ✨ Features")

* Added support for THEOplayer 8.0.

### 🐛 Issues[​](#-issues-16 "Direct link to 🐛 Issues")

* Fixed a deprecation warning by removing `defaultProps`.

## 0.7.2[​](#072 "Direct link to 0.7.2")

### 🐛 Issues[​](#-issues-17 "Direct link to 🐛 Issues")

* Fixed an issue where the `SeekBar`'s seekable state was not updated when switching to a MP4 source.
* Fixed an issue where the `SkipButton` components are not rendered when switching sources while casting.

## 0.7.1[​](#071 "Direct link to 0.7.1")

### 🐛 Issues[​](#-issues-18 "Direct link to 🐛 Issues")

* Fixed an issue where the mute button sometimes did not update its icon after toggling.

## 0.7.0[​](#070 "Direct link to 0.7.0")

### ✨ Features[​](#-features-13 "Direct link to ✨ Features")

* Added support for THEOplayer 7.0 and React Native THEOplayer 7.0.

### 🐛 Issues[​](#-issues-19 "Direct link to 🐛 Issues")

* Fixed TypeScript type definitions to export interfaces describing the props for all components.

## 0.6.0[​](#060 "Direct link to 0.6.0")

### 🐛 Issues[​](#-issues-20 "Direct link to 🐛 Issues")

* Fixed an issue where the skip buttons would remain disabled for MP4 sources.

## 0.5.0[​](#050 "Direct link to 0.5.0")

### ✨ Features[​](#-features-14 "Direct link to ✨ Features")

* Added support for CSAI.

### 🐛 Issues[​](#-issues-21 "Direct link to 🐛 Issues")

* Fixed connected state for chromecastButton to not take into account the casting state in general (e.g. airplay should not influence this state).

## 0.4.0[​](#040 "Direct link to 0.4.0")

### ✨ Features[​](#-features-15 "Direct link to ✨ Features")

* Added support for overriding button icons.

## 0.3.0[​](#030 "Direct link to 0.3.0")

### 🐛 Issues[​](#-issues-22 "Direct link to 🐛 Issues")

* Fixed several transitioning issues related to PiP state changes and closing menus.

## 0.2.0[​](#020 "Direct link to 0.2.0")

### 🐛 Issues[​](#-issues-23 "Direct link to 🐛 Issues")

* Fixed an issue where components were still tappable after the UI had faded out.

### ✨ Features[​](#-features-16 "Direct link to ✨ Features")

* Assume `PlayerConfiguration.chromeless` to be `true` if not specified.

## 0.1.1[​](#011 "Direct link to 0.1.1")

### 🐛 Issues[​](#-issues-24 "Direct link to 🐛 Issues")

* Fixed an issue on Web where using the `ChromecastButton` component would result in a crash.

## 0.1.0[​](#010 "Direct link to 0.1.0")

### ✨ Features[​](#-features-17 "Direct link to ✨ Features")

* Initial release.
