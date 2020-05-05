# UI Skinning

THEOplayer allows you to style the player to your own needs. This guide will give an in-depth explanation of which colors can be changed and which parts of the player are affected. First it will explain how to change the skin of your player using 6 custom CSS classes. Afterwards, an overview follows explaining which parts of the players are affected by each class. If you don't already have an up-and-running version of THEOplayer, take a look at our [getting started guide](https://support.theoplayer.com/hc/en-us/articles/115001933305-Getting-Started-with-THEOplayer-2-X).

### Table of Contents
- [SDKs](#sdks)
- [CSS properties to override](#css-properties-to-override)
- [Affected Components](#affected-components)
- [Summary](#summary)
- [Mobile](#mobile)


## SDKs

| Web SDK | Android SDK |  iOS SDK  | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-------: | :--: | :------------: | :------------: |
|   Yes   | 	Yes |	Yes | No  |  No   |  No  |


## CSS properties to override

THEOplayer provides multiple colors you can change to create your desired look-and-feel. These colors can be changed easily by including a custom CSS file which overrides some classes. An example of such a file is given below. There is also a demo page available where you can interactively change these colors and immediately see the effect [here](https://demo.theoplayer.com/ui-skinning). **NOTE:** The vjs-selected is needed to change the color of selected items in the menus.

```html
<style> 
.theo-primary-color, .vjs-selected { 
    color: #ffc50f !important; 
}
    
.theo-primary-background {
    color: #000000 !important;
    background-color: #ffc50f !important; 
}

.theo-secondary-color { 
    color: #ffffff !important;
}

.theo-secondary-background {
    color: #000000 !important; 
    background-color: #ffffff !important; 
}

.theo-tertiary-color { 
    color: #000000 !important; 
} 

.theo-tertiary-background { 
    color: #ffffff !important; 
    background-color: #000000 !important; 
} 

</style>
```

## Affected Components

This section discusses which parts of the components are affected by each CSS class. 

When the player is added to the page, the only visible control is the **big-play-button**. The color of this component is equal to the *theoplayer-primary-color.*

When the big-play-button is clicked, the player starts playing the video. Two components are visible now: the **control-bar** and the **sharing button**.

The background color of the** control bar** can be styled using *theoplayer-tertiary-color*.

The **control bar** exists of: **control-bar-icons**, the **progress bar** and **menu**s.

- The color of the control bar icons can be set using `theoplayer-secondary-color`.

- The color of the progress bar can be set using `theoplayer-primary-color`.

- The color and background color of the header of the menu can be set using `theoplayer-primary-background`.

- The color and background color of the content of the menu can be set using `theoplayer-tertiary-background`.

- The color of the selected text of the menu can be set using `theoplayer-primary-color`.

## Summary

After this tutorial, you should be able to style your THEOplayer to your own needs. All CSS properties and the components they affect were discussed. A brief summary of these properties is given below:

| Color | Affected components | 
| :---: | :-----------------: | 
| Primary color  | Big play button, progress bar, menu text  |
| Primary background  | Menu header |
| Secondary color  | Control bar icons (including time and tooltips) |
| Secondary background  | Social sharing close button |
| Tertiary color  | Control bar background |
| Teriary background  | Menu content background |

## Mobile

Our mobile player uses the same class naming as our web version, so this is applicable to mobile as well. The CSS changes are to be gathered in a custom .CSS file, added to your project and then loaded into the PlayerConfiguration. More information on  [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) .

##### iOS SDK

```swift
let cssPath = Bundle.main.path(forResource: "style", ofType: "css")!
let theoConfig = THEOplayerConfiguration(cssPaths: [cssPath])
let theoplayer = THEOplayer(with: //frame, configuration: theoConfig)
```

##### Android SDK

You can do this either by XML:

```java
<com.theoplayer.android.api.THEOplayerView
    android:id="@+id/theo_player_view"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    app:defaultCss="true"
    app:cssPaths="path/to/style1.css"/>
```

Or directly in the player config in Java:

```java
THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
        .chromeless(false)
        .defaultCss(true)
        .cssPaths("path/to/style1.css","path/to/style2.css") // Path is relative to the location of the assets directory
        .build();
THEOplayerView tpv = new THEOplayerView(this, playerConfig);
```

It is also possible to change certain parts of the UI by editing the xml resources directly.
E.g. colors.xml:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="colorPrimary">#E361FF</color>
    <color name="colorPrimaryDark">#00574B</color>
    <color name="colorAccent">#D81B60</color>
</resources>
```