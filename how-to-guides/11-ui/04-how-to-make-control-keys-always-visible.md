# How to make the control bar always visible?

The question above is typically asked by developers who want to be able to see the control bar at all times without having to continuously move the cursor over it (or tap the screen).

## SDKs

| Web SDK |      Android SDK      |        iOS SDK        | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :-------------------: | :-------------------: | :--: | :------------: | :------------: |
|   Yes   | Through CSS injection | Through CSS injection | N/A  |      N/A       |      N/A       |

## Code examples

##### Web SDK

The following CSS line is aimed at overwriting the opacity transition and have the controlbar always visible.

```css
.theo-secondary-color.vjs-control-bar {
  opacity: 1 !important;
}
```

##### Android SDK

To achieve the same result on Android SDK, the same CSS need to be passed to your app.

**Step 1**

To learn how to inject CSS into your Android project, follow the guide  [Android SDK Customization - Custom CSS and JavaScript files](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).

**Step 2**

In the CSS file you created, add the code reported above in the Web SDK section.

##### iOS SDK

To achieve the same result on iOS SDK, the same CSS need to be passed to your app.

**Step 1**

To learn how to inject CSS into your iOS project, follow the guide [iOS SDK Customization - Custom CSS and JavaScript files](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).

**Step 2**

In the CSS file you created, add the code reported above in the Web SDK section.
