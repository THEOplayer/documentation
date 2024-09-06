# Customizing the ad overlay text

This guide explains how to customize the overlay text shown during an ad break. You may ask this question if you want to change the customize the styling or override the texts shown during an ad break.

Depending on the ad integration kind you use, the steps to take differ.

## CSAI integration

The `csai` [ad integration kind](pathname:///theoplayer/v8/api-reference/web/types/AdIntegrationKind.html) is only available on Web SDK and allows customization.

To customize the text here we will be leveraging the language localization mechanism. You can find the API we will be using [here](pathname:///theoplayer/v8/api-reference/web/interfaces/UIConfiguration.html#language).

The second step is to customize the styling of texts. This can be done via CSS.

### Changing or localizing the text

In this section, we will explain how to modify the text. We will take the countdown to the content text as an example (another ad overlay text is the "Skip ad" text, if any). When considering a new text to replace the original one, it is important to take into consideration its length (which should be determined accordingly to the available space) and how it is composed.

The current example is composed of 3 parts: one text ("The content will play in"), a dynamic countdown and another text ("seconds"). For this reason, when changing the text, both text parts need addressing.

An example:

```js
var element = document.querySelector('.video-js');
const player = new THEOplayer.Player(element, {
    license: "your_license_here",
    ui: {
        // your other UI configuration
        language: 'en',
        languages: { 'en':
            {
                    "The content will play in": "Here your customized text",
                    "seconds": "Here your customized text"
                    // any other translation or text change
          }
        }
    },
    libraryLocation: 'https://example.com/',
    });
```

### Changing the styling

If you are interested in changing the aspect of the overlay or its content, you may do so applying the desired CSS properties to the concerned elements.

As mentioned, the following example is only valid for the `csai` ad integration:

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

## Google IMA/DAI

With Google IMA/DAI, it is not possible to directly edit the default UI. You can pass a locale to IMA to completely localize the ad UI. On the following sections we will explain the possibilities.

### Changing or localizing the text

It is not possible to edit the texts on the default UI on Google IMA/DAI SDKs. However, you can pass a locale to IMA to completely localize its ad UI like the following:

##### Web SDK

```javascript
var element = document.querySelector('.video-js');
const player = new THEOplayer.Player(element, {
    license: "your_license_here",
    libraryLocation: 'https://example.com',
    ads: {
        googleIma: {
            language: "nl"
        }
    }
});
```
You can find a list of locales supported by IMA SDK on web [here](https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/localization#locale-codes).

##### Android SDK

You can pass [your preferred language](https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/api/reference/com/google/ads/interactivemedia/v3/api/ImaSdkSettings.html#setLanguage(java.lang.String)) while adding the Google IMA integration to the player:

```kotlin
private fun addGoogleImaIntegration() {
    val settings = ImaSdkFactory.getInstance().createImaSdkSettings()
    settings.language = "nl"

    val imaIntegration = createGoogleImaIntegration(tpv!!, settings)

    tpv?.player?.addIntegration(imaIntegration)
}
```
You can find a list of locales supported by IMA SDK on Android [here](https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/localization#locale-codes).

##### iOS SDK

You can pass [your preferred language](https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/reference/Classes/IMASettings#language) while adding the Google IMA integration to the player:

```swift
private func setupImaIntegration() {
    let imaSettings = IMASettings()
    imaSettings.language = "nl"
        
    let imaIntegration: GoogleImaIntegration = GoogleIMAIntegrationFactory.createIntegration(on: self.theoplayer!, with: imaSettings)

    theoplayer.addIntegration(imaIntegration)
    }
```

You can find a list of locales supported by IMA SDK on Android [here](https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/localization#locale-codes).

### Changing the styling

##### Web SDK

Currently it is not possible to customize the default UI on Google IMA/DAI SDKs on Web with the exception of toggling certain [UiElements](https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima#.UiElements). This can be done like the following:

```javascript
var element = document.querySelector('.video-js');
const player = new THEOplayer.Player(element, {
    license: "your_license_here",
    libraryLocation: 'https://example.com',
    ads: {
        googleIma: {
              uiElements: [google.ima.UiElements.AD_ATTRIBUTION, google.ima.UiElements.COUNTDOWN]
        }
    }
});
```

##### Android SDK

Please refer to the relevant [Google IMA guide](https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/custom-ui) on how to disable the default UI and implement your own ad UI.

##### iOS SDK

Please refer to the relevant [Google IMA guide](https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/custom-ui) on how to disable the default UI and implement your own ad UI.

## Remarks

- If you are using [THEOplayer Open Video UI](https://www.theoplayer.com/product/open-video-ui), there could be alternative ways to edit certain elements depending on the platform and the ad integration kind used. For reference, you can find a demo for the `csai` ad integration on Web SDK [here](https://www.theoplayer.com/docs/open-video-ui/web/examples/ads/).
- The `Why this ad?` text or the `?` (question mark) icon that may appear while using the Google IMA/DAI integration is inserted by the IMA SDK itself and is required to be displayed with any ad that was not manually selected. The  icon is rendered as a VAST icon and is automatically generated by Ad Manager where required.

## Resources

- [How to change the default UI language to other](../../how-to-guides/11-ui/08-how-to-change-default-UI-language-to-other.md)
- [Language localization](https://www.theoplayer.com/theoplayer-demo-language-localization)
- [THEOplayer advertisement tester](https://www.theoplayer.com/theoplayer-demo-advertisement-tester-vpaid-vast-vmap)