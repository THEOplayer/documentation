# How to change the default UI language to other

This article describes how to change the default UI language to other. 

The UIConfiguration Object uses a property *language *&* languages *to change the default UI language i.e English to any other language. This is an optional property of the player whereby if defined then the language code must have a matching language dictionary in the languages configuration. 

When this configuration is set, the labels and tooltips in the UI will be replaced by their translated version from the language. If no translation is found for a label or tooltip, the original English version will be used instead.

### Table of Contents
- [SDKs](#sdks)
- [Prerequisites](#prerequisites)
- [Code examples](#code-examples)
- [Reference Material](#reference-material)
  
## SDKs

| Web SDK |           Android SDK            |             iOS SDK              | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :------------------------------: | :------------------------------: | :--: | :------------: | :------------: |
|   Yes   | Yes | Yes |   |   |  |

## Prerequisites

- THEOplayer valid licence SDK for respective platform (Web, iOS & Android)
- Download the specific language JSONS to add into your project

**Language JSON Links**

Arabic : [http://cdn.theoplayer.com/demos/theoplayer/lang/ar.js](http://cdn.theoplayer.com/demos/theoplayer/lang/ar.js)

Bashkir: [http://cdn.theoplayer.com/demos/theoplayer/lang/ba.js](http://cdn.theoplayer.com/demos/theoplayer/lang/ba.js)

Bulgarian: [http://cdn.theoplayer.com/demos/theoplayer/lang/bg.js](http://cdn.theoplayer.com/demos/theoplayer/lang/bg.js)

Catalan: [http://cdn.theoplayer.com/demos/theoplayer/lang/ca.js](http://cdn.theoplayer.com/demos/theoplayer/lang/ca.js)

Czech: [http://cdn.theoplayer.com/demos/theoplayer/lang/cs.js](http://cdn.theoplayer.com/demos/theoplayer/lang/cs.js)

Danish: [http://cdn.theoplayer.com/demos/theoplayer/lang/da.js](http://cdn.theoplayer.com/demos/theoplayer/lang/da.js)

German: [http://cdn.theoplayer.com/demos/theoplayer/lang/de.js](http://cdn.theoplayer.com/demos/theoplayer/lang/de.js)

Greek: [http://cdn.theoplayer.com/demos/theoplayer/lang/el.js](http://cdn.theoplayer.com/demos/theoplayer/lang/el.js)

Spanish: [http://cdn.theoplayer.com/demos/theoplayer/lang/es.js](http://cdn.theoplayer.com/demos/theoplayer/lang/es.js)

Persian: [http://cdn.theoplayer.com/demos/theoplayer/lang/fa.js](http://cdn.theoplayer.com/demos/theoplayer/lang/fa.js)

Finnish: [http://cdn.theoplayer.com/demos/theoplayer/lang/fi.js](http://cdn.theoplayer.com/demos/theoplayer/lang/fi.js)

French: [http://cdn.theoplayer.com/demos/theoplayer/lang/fr.js](http://cdn.theoplayer.com/demos/theoplayer/lang/fr.js)

Croatian: [http://cdn.theoplayer.com/demos/theoplayer/lang/hr.js](http://cdn.theoplayer.com/demos/theoplayer/lang/hr.js)

Hungarian: [http://cdn.theoplayer.com/demos/theoplayer/lang/hu.js](http://cdn.theoplayer.com/demos/theoplayer/lang/hu.js)

Italian: [http://cdn.theoplayer.com/demos/theoplayer/lang/it.js](http://cdn.theoplayer.com/demos/theoplayer/lang/it.js)

Japanese: [http://cdn.theoplayer.com/demos/theoplayer/lang/ja.js](http://cdn.theoplayer.com/demos/theoplayer/lang/ja.js)

Korean: [http://cdn.theoplayer.com/demos/theoplayer/lang/ko.js](http://cdn.theoplayer.com/demos/theoplayer/lang/ko.js)

Dutch: [http://cdn.theoplayer.com/demos/theoplayer/lang/nl.js](http://cdn.theoplayer.com/demos/theoplayer/lang/nl.js)

Polish: [http://cdn.theoplayer.com/demos/theoplayer/lang/pl.js](http://cdn.theoplayer.com/demos/theoplayer/lang/pl.js)

Portuguese: [http://cdn.theoplayer.com/demos/theoplayer/lang/pt-BR.js](http://cdn.theoplayer.com/demos/theoplayer/lang/pt-BR.js)

Russian: [http://cdn.theoplayer.com/demos/theoplayer/lang/ru.js](http://cdn.theoplayer.com/demos/theoplayer/lang/ru.js)

Serbian: [http://cdn.theoplayer.com/demos/theoplayer/lang/sr.js](http://cdn.theoplayer.com/demos/theoplayer/lang/sr.js)

Swedish: [http://cdn.theoplayer.com/demos/theoplayer/lang/sv.js](http://cdn.theoplayer.com/demos/theoplayer/lang/sv.js)

Turkish: [http://cdn.theoplayer.com/demos/theoplayer/lang/tr.js](http://cdn.theoplayer.com/demos/theoplayer/lang/tr.js)

Ukrainian: [http://cdn.theoplayer.com/demos/theoplayer/lang/uk.js](http://cdn.theoplayer.com/demos/theoplayer/lang/uk.js)

Vietnamese: [http://cdn.theoplayer.com/demos/theoplayer/lang/vi.js](http://cdn.theoplayer.com/demos/theoplayer/lang/vi.js)

Chinese: [http://cdn.theoplayer.com/demos/theoplayer/lang/zh-CN.js](http://cdn.theoplayer.com/demos/theoplayer/lang/zh-CN.js) |  [http://cdn.theoplayer.com/demos/theoplayer/lang/zh-TW.js](http://cdn.theoplayer.com/demos/theoplayer/lang/zh-TW.js)

## Code examples

##### Web SDK

Each language should be described as a [UIConfiguration](https://docs.portal.theoplayer.com/api-reference/web/theoplayer.uiconfiguration.md)

```js
player = new THEOplayer.Player(playerElement, {
    libraryLocation: 'https://cdn.theoplayer.com/dash/........./',
    ui: {

        language: 'esp',
        languages: {
            'esp':
            {
                "Play": "Reproducir",
                "Pause": "Pausa",
                "Current Time": "Tiempo actual",
                "Duration Time": "Duración",
                "Remaining Time": "Tiempo restante"
            }
        }
    }
});
```

##### Android SDK

In the implementation for Android SDK, the addition of language needs to be done in 2 following Steps:

1. An Additional separate javascript file needs to be added to your Android project. You can follow the instructions presented in this article: [How to add/customise the Android THEOplayer SDK](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) 

2. After a JS file is added to your project, Please add the specific language to the JS file 

Sample Code to Add new langauage

```java
//add this code to pre.js file
THEOplayer.videojs.addLanguage("nl",{
    "Play": "Afspelen",
    "Pause": "Pauze",
    "Current Time": "Huidige tijd",
    "Duration Time": "Looptijd",
    "Remaining Time": "Resterende tijd",
    "Stream Type": "Streamtype",
    "LIVE": "LIVE",
    "Loaded": "Geladen",
    "Progress": "Status",
    "Fullscreen": "Volledig scherm",
    "Non-Fullscreen": "Geen volledig scherm",
    "Mute": "Geluid uit",
    "Unmute": "Geluid aan",
    "Settings": "Instellingen",
    "Quality": "Kwaliteit",
    "Speed": "Snelheid",
    "Normal": "Normaal",
    "AUTOMATIC": "AUTOMATISCH",
    "Automatic": "Automatisch",
    "Playback Rate": "Weergavesnelheid"
});
```
3.  Create a new player configuration with declared new UIConfiguration:

Sample Code to create a new player config

```java
//declare the variable for THEOplayerView
THEOplayerView theoPlayerView;

//Create a new player config in onCreate(Bundle savedInstanceState): 
THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
                .jsPathsPre("pre.js")
                .ui(new UIConfiguration.Builder().language("nl").build())
                .build();
theoPlayerView = new THEOplayerView(this, playerConfig);
```

##### iOS SDK

In the implementation for iOS SDK, the addition of language needs to be done in 2 following Steps:

1. An Additional separate javascript file needs to be added to your Android project. You can follow the instructions presented in this article: [How to add/customise the iOS THEOplayer SDK](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md) 

 2. After a JS file is added to your project, Please add the specific language to the JS file 

Sample Code to add new language

```swift
//add this code to pre.js file
THEOplayer.videojs.addLanguage("nl",{
    "Play": "Afspelen",
    "Pause": "Pauze",
    "Current Time": "Huidige tijd",
    "Duration Time": "Looptijd",
    "Remaining Time": "Resterende tijd",
    "Stream Type": "Streamtype",
    "LIVE": "LIVE",
    "Loaded": "Geladen",
    "Progress": "Status",
    "Fullscreen": "Volledig scherm",
    "Non-Fullscreen": "Geen volledig scherm",
    "Mute": "Geluid uit",
    "Unmute": "Geluid aan",
    "Settings": "Instellingen",
    "Quality": "Kwaliteit",
    "Speed": "Snelheid",
    "Normal": "Normaal",
    "AUTOMATIC": "AUTOMATISCH",
    "Automatic": "Automatisch",
    "Playback Rate": "Weergavesnelheid"
});
```
3.  Create a new player configuration with declared new UIConfiguration:

Sample Code to create a new player config

```swift
//declare the variable for THEOplayerView
var theoplayer: THEOplayer!

//Create a new player config in ViewDidLoad()
let jsPath = Bundle.main.path(forResource:"pre", ofType: "js")!
let playerConfig = THEOplayerConfiguration(defaultCSS: true, jsPathsPre: [jsPath], ui: UIConfiguration(language: "nl"))
self.theoplayer = THEOplayer(configuration: playerConfig)
```

## Reference Material 

A Sample project to demonstrate the above use-case: 

1. Include THEOplayer Android SDK before compiling the entire project. 

      Download Here: [http://cdn.theoplayer.com/demos/theoplayer/apps/lang/android-sdk-starter-project-master.zip](http://cdn.theoplayer.com/demos/theoplayer/apps/lang/android-sdk-starter-project-master.zip)

2. Include THEOplayer iOS SDK before compiling the entire project. 

      Download Here: [http://cdn.theoplayer.com/demos/theoplayer/apps/lang/ios-sdk-starter-project-master.zip](http://cdn.theoplayer.com/demos/theoplayer/apps/lang/ios-sdk-starter-project-master.zip)