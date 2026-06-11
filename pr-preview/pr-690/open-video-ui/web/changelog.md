# @theoplayer/web-ui

## 2.2.0[​](#220 "Direct link to 2.2.0")

### ✨ Features[​](#-features "Direct link to ✨ Features")

* Added localization support. Use `addLocale()` to register a locale, and set the `lang` attribute on the UI to apply it.

## 2.1.3[​](#213 "Direct link to 2.1.3")

### 🐛 Issues[​](#-issues "Direct link to 🐛 Issues")

* Fixed infinite `SET_VOLUME` loop when casting to receivers that don't support master volume control.

## 2.1.2[​](#212 "Direct link to 2.1.2")

### 🐛 Issues[​](#-issues-1 "Direct link to 🐛 Issues")

* Fixed a brief tap highlight appearing behind button icons on iOS Safari.

## 2.1.1[​](#211 "Direct link to 2.1.1")

### 🐛 Issues[​](#-issues-2 "Direct link to 🐛 Issues")

* Fixed `<theoplayer-time-range>` repeatedly triggering seeks when updating its value from the player's current time, which caused noticeable stutters on Safari.

## 2.1.0[​](#210 "Direct link to 2.1.0")

### ✨ Features[​](#-features-1 "Direct link to ✨ Features")

* Added support for THEOplayer 11.x.

## 2.0.0[​](#200 "Direct link to 2.0.0")

### 💥 Breaking Changes[​](#-breaking-changes "Direct link to 💥 Breaking Changes")

* Open Video UI for Web is now built using [Lit](https://lit.dev/).

  <!-- -->

  * All components now extend [`LitElement`](https://lit.dev/docs/api/LitElement/) and use [reactive rendering](https://lit.dev/docs/components/rendering/), making it much easier to build custom UI components. While existing custom UI components should mostly continue to work, we highly recommend updating them to use a `render()` method instead.
  * For older browsers that don't support Custom Elements, we recommend loading our new polyfills library from `@theoplayer/web-ui/polyfills`.

### ✨ Features[​](#-features-2 "Direct link to ✨ Features")

* Added settings menu to default UI.

## 1.16.3[​](#1163 "Direct link to 1.16.3")

### 🐛 Issues[​](#-issues-3 "Direct link to 🐛 Issues")

* Improve labels for text tracks and audio tracks in the `<theoplayer-language-menu>`.

## 1.16.2[​](#1162 "Direct link to 1.16.2")

### 🐛 Issues[​](#-issues-4 "Direct link to 🐛 Issues")

* Language names in the language menu are now capitalized according to that language's case mappings.

## 1.16.1[​](#1161 "Direct link to 1.16.1")

### 🐛 Issues[​](#-issues-5 "Direct link to 🐛 Issues")

* Fixed a regression where menus would always fill the entire player on desktop (rather than opening as a small popup in the bottom right corner).

## 1.16.0[​](#1160 "Direct link to 1.16.0")

### ✨ Features[​](#-features-3 "Direct link to ✨ Features")

* Added `centered-chrome` slot to `<theoplayer-default-ui>` to replace all controls in the center of the player.

### 🐛 Issues[​](#-issues-6 "Direct link to 🐛 Issues")

* Fixed an issue where buttons inside the default UI could accidentally be clicked even when they were hidden because of user inactivity.

## 1.15.0[​](#1150 "Direct link to 1.15.0")

### ✨ Features[​](#-features-4 "Direct link to ✨ Features")

* The UI now takes `SourceDescription.streamType` into account when computing its own `stream-type` attribute. This is now the preferred method of overriding the stream type.

### 🐛 Issues[​](#-issues-7 "Direct link to 🐛 Issues")

* Fixed `<theolive-default-ui>` to stop using deprecated OptiView Live events.
* Fixed an issue where the `<theoplayer-time-range>` inside the default UI could accidentally be clicked even when it was hidden because of user inactivity.

## 1.14.0[​](#1140 "Direct link to 1.14.0")

### ✨ Features[​](#-features-5 "Direct link to ✨ Features")

* `<theoplayer-default-ui>` now hides all controls except the center play button when the player size is very small on desktop.
* Add `--theoplayer-centered-chrome-button-icon-width` CSS property to change the icon width of *only* the buttons in the center slot in a `<theoplayer-default-ui>`.
* Add `--theoplayer-aspect-ratio` CSS property to change the aspect ratio of a `<theoplayer-default-ui>` or `<theoplayer-ui>`.
* Add `--theoplayer-min-width` CSS property to override the `min-width` of a `<theoplayer-default-ui>` or `<theoplayer-ui>`.
* Add `--theoplayer-height` CSS property to override the height of the inner `<theoplayer-ui>` within a `<theoplayer-default-ui>`.

### 🐛 Issues[​](#-issues-8 "Direct link to 🐛 Issues")

* Fixed an issue where the menus didn't cover the entire player when the player is too small.

## 1.13.1[​](#1131 "Direct link to 1.13.1")

### 🐛 Issues[​](#-issues-9 "Direct link to 🐛 Issues")

* When entering fullscreen, the player will now always hide the browser's navigation UI. (This can be overridden by setting [`ui.fullscreenOptions.navigationUI`](https://optiview.dolby.com/docs/theoplayer/v10/api-reference/web/interfaces/FullscreenOptions.html#navigationUI) in your player configuration.)

## 1.13.0 (2025-09-12)[​](#1130-2025-09-12 "Direct link to 1.13.0 (2025-09-12)")

* 🚀 Added support for THEOplayer 10.0. ([#112](https://github.com/THEOplayer/web-ui/pull/112))

## 1.12.0 (2025-09-10)[​](#1120-2025-09-10 "Direct link to 1.12.0 (2025-09-10)")

* 🚀 Fill the entire window when fullscreen is not natively supported. ([#94](https://github.com/THEOplayer/web-ui/issues/94), [#110](https://github.com/THEOplayer/web-ui/pull/110))
* 🐛 Fix settings menu and subtitle options menu not displaying correctly on older smart TVs. ([#108](https://github.com/THEOplayer/web-ui/pull/108), [#109](https://github.com/THEOplayer/web-ui/pull/109))

## 1.11.3 (2025-07-22)[​](#1113-2025-07-22 "Direct link to 1.11.3 (2025-07-22)")

* 🐛 Fix issue with the `<theoplayer-ad-clickthrough-button>` component that was triggering the error `Failed to execute 'createElement' on 'Document': The result must not have attributes` when loaded into a React application. ([#106](https://github.com/THEOplayer/web-ui/pull/106))

## 1.11.2 (2025-06-30)[​](#1112-2025-06-30 "Direct link to 1.11.2 (2025-06-30)")

* 🚀 Add `--theoplayer-play-button-icon-color` CSS property to change the icon color of *only* the `<theoplayer-play-button>`. ([#104](https://github.com/THEOplayer/web-ui/pull/104))
* 🚀 Add `--theoplayer-center-play-button-icon-color` CSS property to change the icon color of *only* the centered play button in a `<theoplayer-default-ui>`. ([#104](https://github.com/THEOplayer/web-ui/pull/104))

## 1.11.1 (2025-06-30)[​](#1111-2025-06-30 "Direct link to 1.11.1 (2025-06-30)")

* 🐛 Fix pressing `Enter` on TV remote triggering click twice. ([#101](https://github.com/THEOplayer/web-ui/pull/101))
* 🚀 Add `error` slot to default UI, to allow for a custom error display. ([#102](https://github.com/THEOplayer/web-ui/pull/102))

## 1.11.0 (2025-06-12)[​](#1110-2025-06-12 "Direct link to 1.11.0 (2025-06-12)")

* 🚀 Add settings menu button to default UI. ([#99](https://github.com/THEOplayer/web-ui/pull/99))

## 1.10.0 (2025-04-02)[​](#1100-2025-04-02 "Direct link to 1.10.0 (2025-04-02)")

* 🚀 Added support for THEOplayer 9.0. ([#95](https://github.com/THEOplayer/web-ui/pull/95))

## 1.9.5 (2025-03-20)[​](#195-2025-03-20 "Direct link to 1.9.5 (2025-03-20)")

* 💅 Forced subtitles are no longer shown in the subtitle menu. ([#92](https://github.com/THEOplayer/web-ui/pull/92))

## 1.9.4 (2025-02-19)[​](#194-2025-02-19 "Direct link to 1.9.4 (2025-02-19)")

* No changes

## 1.9.3 (2024-12-03)[​](#193-2024-12-03 "Direct link to 1.9.3 (2024-12-03)")

* 🚀 Added support for MBR Millicast streams. ([#81](https://github.com/THEOplayer/web-ui/pull/81))

## 1.9.2 (2024-11-20)[​](#192-2024-11-20 "Direct link to 1.9.2 (2024-11-20)")

* 🐛 Fixed live UI not showing for Millicast streams. ([#79](https://github.com/THEOplayer/web-ui/pull/79))

## 1.9.1 (2024-09-27)[​](#191-2024-09-27 "Direct link to 1.9.1 (2024-09-27)")

* 🐛 Fixed `Enter` and `Space` keys not working to activate buttons in the UI. ([#76](https://github.com/THEOplayer/web-ui/pull/76))

## 1.9.0 (2024-09-06)[​](#190-2024-09-06 "Direct link to 1.9.0 (2024-09-06)")

* 🚀 Added support for THEOplayer 8.0. ([#72](https://github.com/THEOplayer/web-ui/pull/72))

## 1.8.2 (2024-08-29)[​](#182-2024-08-29 "Direct link to 1.8.2 (2024-08-29)")

* 🐛 Fixed blank space below UI when using `<theoplayer-default-ui>`.

* 💅 Optimized performance of `<theoplayer-time-range>`. ([#70](https://github.com/THEOplayer/web-ui/issues/70))

  <!-- -->

  * Optimized the `requestAnimationFrame` callback used to update the seekbar's progress to avoid synchronous re-layouts as much as possible.
  * When playing a long video, the seek bar no longer uses `requestAnimationFrame` at all to update its progress. Instead, it updates using only less frequent `timeupdate` events.

## 1.8.1 (2024-04-18)[​](#181-2024-04-18 "Direct link to 1.8.1 (2024-04-18)")

* 🐛 Fixed `ui.player.destroy()` not working. ([#59](https://github.com/THEOplayer/web-ui/issues/59), [#62](https://github.com/THEOplayer/web-ui/pull/62))

## 1.8.0 (2024-04-12)[​](#180-2024-04-12 "Direct link to 1.8.0 (2024-04-12)")

* 💥 **Breaking Change**: This project now requires THEOplayer version 7.0.0 or higher. ([#60](https://github.com/THEOplayer/web-ui/pull/60))
* 🚀 Added `<theolive-default-ui>` that provides a default UI for THEOlive streams. ([#58](https://github.com/THEOplayer/web-ui/pull/58))

## 1.7.2 (2024-03-18)[​](#172-2024-03-18 "Direct link to 1.7.2 (2024-03-18)")

* 🚀 Added `<theoplayer-slot-container>`. ([#55](https://github.com/THEOplayer/web-ui/pull/55))

## 1.7.1 (2024-02-15)[​](#171-2024-02-15 "Direct link to 1.7.1 (2024-02-15)")

* 💅 Export `version` in public API. ([#53](https://github.com/THEOplayer/web-ui/pull/53))
* 💅 Allow importing `@theoplayer/web-ui/package.json`. ([#53](https://github.com/THEOplayer/web-ui/pull/53))

## 1.7.0 (2024-02-15)[​](#170-2024-02-15 "Direct link to 1.7.0 (2024-02-15)")

* 🚀 Added support for loading in Node for static site generation (SSG) or server-side rendering (SSR). ([#50](https://github.com/THEOplayer/web-ui/pull/50))

  <!-- -->

  * ⚠️ Although the Node entry point exports all custom element classes as usual, attempting to actually construct those classes will result in errors. Most dependencies are either replaced with stubs (using [`@lit-labs/ssr-dom-shim`](https://lit.dev/docs/ssr/dom-emulation/)) or removed altogether (such as THEOplayer itself).
  * This should always be used together with an SSG or SSR solution. For example, you can use [Open Video UI for React](https://www.npmjs.com/package/@theoplayer/react-ui) together with [React server rendering](https://react.dev/reference/react-dom/server).

* 🐛 Fixed an issue where `<theoplayer-ui>` could throw an error when the player changes sources before all custom elements are properly registered. ([#49](https://github.com/THEOplayer/web-ui/pull/49))

## 1.6.0 (2024-02-08)[​](#160-2024-02-08 "Direct link to 1.6.0 (2024-02-08)")

* 🚀 Introducing [Open Video UI for React](https://www.npmjs.com/package/@theoplayer/react-ui). ([#48](https://github.com/THEOplayer/web-ui/pull/48))
  <!-- -->
  * Idiomatic React components make the Open Video UI feel right at home in your existing React web app.
* 🚀 Added support for advertisements while casting to Chromecast. This requires THEOplayer version 6.8.0 or higher. ([#47](https://github.com/THEOplayer/web-ui/pull/47))
* 🚀 Added `theoplayerready` event to `<theoplayer-default-ui>` and `<theoplayer-ui>`, which is fired once the backing THEOplayer instance is created. ([#48](https://github.com/THEOplayer/web-ui/pull/48)).

## 1.5.0 (2023-11-27)[​](#150-2023-11-27 "Direct link to 1.5.0 (2023-11-27)")

* 🚀 Added support for smart TVs. ([#40](https://github.com/THEOplayer/web-ui/pull/40))

  <!-- -->

  * Updated `<theoplayer-default-ui>` to automatically switch to an optimized layout when running on a smart TV. For custom UIs using `<theoplayer-ui>`, you can use the `tv-only` and `tv-hidden` attributes to show or hide specific UI elements on smart TVs.
  * Added support for navigating the UI using a TV remote control.
  * Added a `tv-focus` attribute to specify which UI element should receive the initial focus when showing the controls on a TV. In the default UI, initial focus is on the seek bar.

* 🚀 Allow overriding more CSS properties of `<theoplayer-default-ui>`. ([#42](https://github.com/THEOplayer/web-ui/pull/42))

* 💅 Renamed project to "THEOplayer Open Video UI for Web". ([#43](https://github.com/THEOplayer/web-ui/pull/43))

## 1.4.0 (2023-10-04)[​](#140-2023-10-04 "Direct link to 1.4.0 (2023-10-04)")

* 💥 **Breaking Change**: This project now requires THEOplayer version 6.0.0 or higher.
* 🚀 Open Video UI now imports THEOplayer as a JavaScript module using `import from 'theoplayer/chromeless'`. See the [README](https://github.com/THEOplayer/web-ui/blob/v1.4.0/README.md#installation) for updated installation instructions.
* 🐛 When the player's source is empty, the UI will no longer attempt to play when clicked. ([#37](https://github.com/THEOplayer/web-ui/pull/37))

## 1.3.0 (2023-05-16)[​](#130-2023-05-16 "Direct link to 1.3.0 (2023-05-16)")

* 💥 **Breaking Change**: This project now requires THEOplayer version 5.1.0 or higher.
* 🏠 This project now depends on the chromeless version of THEOplayer, rather than the full version which includes the old video.js-based UI. ([#31](https://github.com/THEOplayer/web-ui/pull/31))
* 🐛 Fix `has-error` attribute not cleared on source change ([#29](https://github.com/THEOplayer/web-ui/pull/29))

## 1.2.0 (2023-04-26)[​](#120-2023-04-26 "Direct link to 1.2.0 (2023-04-26)")

* 🚀 Improved support for advertisements ([#28](https://github.com/THEOplayer/web-ui/pull/28))

  <!-- -->

  * Reworked the ad control bar in `<theoplayer-default-ui>`.
  * Added a `show-ad-markers` attribute to `<theoplayer-time-range>`, to show markers on the progress bar indicating when the content will be interrupted by an advertisement.
  * `<theoplayer-ad-skip-button>` and `<theoplayer-ad-clickthrough-button>` are automatically hidden while playing a Google IMA ad. (This is unfortunately necessary, because Google IMA doesn't provide a way to modify or replace its own buttons.)

* 🐛 When the player changes sources, any open menu is now automatically closed

## 1.1.0 (2023-04-12)[​](#110-2023-04-12 "Direct link to 1.1.0 (2023-04-12)")

* 💥 **Breaking Change**: This project now targets modern browsers, so `dist/THEOplayerUI.js` and `dist/THEOplayerUI.mjs` now use ES2017 syntax (such as `class` and `async`/`await`). See "Legacy browser support" in the [README](https://github.com/THEOplayer/web-ui/blob/v1.1.0/README.md) for more information about targeting older browsers. ([#26](https://github.com/THEOplayer/web-ui/issues/26), [#27](https://github.com/THEOplayer/web-ui/pull/27))
* 🚀 Added support for THEOplayer 5.0
* 💅 Improved accessibility ([#21](https://github.com/THEOplayer/web-ui/pull/21))
* 💅 Make menus fill entire player when player is small ([#22](https://github.com/THEOplayer/web-ui/pull/22))
* 🐛 Ensure `player` property is initialized immediately when calling `new UIContainer(configuration)` with a valid player configuration ([#24](https://github.com/THEOplayer/web-ui/pull/24))

## 1.0.0 (2023-04-05)[​](#100-2023-04-05 "Direct link to 1.0.0 (2023-04-05)")

* 🚀 Initial release
