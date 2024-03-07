# Customizing the ad overlay text

This guide explains how to customize the overlay texts during an adbreak, if any. You may ask this question if you want to change the aspect or the content of the overlay displaying the countdown to content on top of the ads.

This is done in two steps: the first is to customize the text, if you so desire. For this we will be leveraging the language localization mechanism. You can find further information on this regard at [UIConfiguration.language](pathname:///theoplayer/v6/api-reference/web/interfaces/UIConfiguration.html#language).

The second step is to change the aspect of such text. This can be done via CSS.

### Table of Contents

- [SDKs](#sdks)
- [Changing the text](#changing-the-text)
  - [Code examples](#code-examples)
- [Changing the aspect](#changing-the-aspect)
  - [Code examples](#code-examples-1)
- [Remarks](#remarks)
- [Resources](#resources)

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |   Yes    |       No       |      N/A       |

## Changing the text

In this paragraph, we will explain how to modify the text. We will take the countdown to the content text as an example (another ad overlay text is the "Skip ad" text, if any). When considering a new text to replace the original one, it is important to take into consideration its length (which should be determined accordingly to the available space) and how it is composed.

The current example is composed of 3 parts: one text ("The content will play in"), a dynamic countdown and another text ("seconds"). For this reason, when changing the text, both text parts need addressing.

### Code examples

##### Web SDK

```js
ui: {
        // your other UI configuration
        language: 'en',
        languages: { 'en':
                    {
                        "The content will play in": "Here your customised text",
                           "seconds": "Here your customised text"
                        // any other translation or text change
                    }
                }
}
```

##### Legacy Android SDK (4.12.x)

```java
//Example of THEOplayerConfig with language localization enabled
THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
    .cssPaths("style.css")
    .jsPaths("script.js")
    .ui(new UIConfiguration.Builder().language("nl").build())
    .build();
```

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

```swift
//to be added
```

## Changing the aspect

If you are interested in changing the aspect of the overlay or its content, you may do so applying the desired CSS properties to the concerned elements.

### Code examples

##### Web SDK

```css
/* This modifies the countdown div */
.theo-ad-remaining-container {
  /* your styles here */
}

/* This modifies the skip ads div */
.theoplayer-ad-skip {
  /* your styles here */
}

/* this can also be further differentiated in 2 cases:*/

/* the countdown */
.theoplayer-ad-skip.theoplayer-ad-skip-countdown {
  /* your styles here */
}

/* the button */
.theoplayer-ad-skip.theoplayer-ad-skip-button {
  /* your styles here */
}
```

##### Legacy Android SDK (4.12.x)

The Web SDK code should be included in your Android (TV) project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project.

##### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

TheWeb SDKcode should be included in your iOS project. The article at [How to add CSS or JavaScript files to an Android/iOS project](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) explains how you can add CSS and JavaScript files to your project.

## Remarks

- This will have no effect when using the Google IMA integration: in this case, google IMA manages its own language localization. Also, no countdown to the content is currently displayed when using the Google-IMA integration, so this is to me remarked only for the text about skipping the ads, if any.

## Resources

- [How to change the default UI language to other](../../how-to-guides/11-ui/08-how-to-change-default-UI-language-to-other.md)
- [API Reference - UIConfiguration.language](pathname:///theoplayer/v6/api-reference/web/interfaces/UIConfiguration.html#language)
- [http://demo.theoplayer.com/language-localization](http://demo.theoplayer.com/language-localization)
