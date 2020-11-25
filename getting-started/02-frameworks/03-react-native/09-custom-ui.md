# Custom UI and React Native

This how-to guide describes how to set-up the custom THEOplayer UI in React Native application.

## General Information 

### Android

The below code is tested with following versions:

- Yarn 1.19.1
- React native 0.61.2
- Android studio 3.5.1
- THEOplayer Android SDK 2.59.0
- JAVA 11.0.4

*The THEOplayer Android SDK can be used for Android devices using Android 5.0+ (minSdkVersion 21)*

### iOS

The below code is tested with following versions:

- Yarn 1.19.1
- React native 0.61.2
- Xcode 11.1
- THEOplayer 2.64.0
- Swift 5.1.

*The THEOplayer iOS SDK can be used for iOS devices using iOS 10.0+ and Swift 5.0+*

## UI Customization-THEOplayer 

### Creating Custom `.js` and `.css` File

#### Android

In this example we will show you how to add two custom buttons(forward/rewind) to player.

Create folder `assets` in `android/app/src/main`(this is only example of path to the files, you can set it anywhere you want) and files inside it e.g `theoplayer.js`/`theoplayer.css`.

#### iOS

In this example we will show you how to add two custom buttons(forward/rewind) to the player.

Create folder `TheoPlayerCustomUI` in `iOS`(this is only example of path to the files, you can set it anywhere you want) and files inside it e.g `theoplayer.js`/`theoplayer.css`.

Next add files to workspace in Xcode, right click on `TheoPlayerReactNative` main folder and `add files to....`, select js and css files. To check if links have been added you need to click on workspace, select target main project(TheoPlayerReactNative), Build Phases tab and Copy Bundle Resources dropdown, new `.js` and `.css` resources should be added automatically.

Now add buttons in `theoplayer.js` and connect them to the skip event:

```js
function init({ player }) {
    if (player) {
    // setting up the rewind button by setting up a video-js component
    var Button = THEOplayer.videojs.getComponent('Button');
    var RewindButton = THEOplayer.videojs.extend(Button, {
        constructor: function() {
        Button.apply(this, arguments);
        /* initialize your button */
        },
        handleClick: () => {
        player.currentTime -= 10;
        },
        buildCSSClass: function () {
        return 'custom-icon-rewind'; // insert all class names here
        }
    });
    
    THEOplayer.videojs.registerComponent('RewindButton', RewindButton);
    player.ui.getChild('controlBar').addChild('RewindButton', {});
    
    // setting up the forward button by setting up a video-js component
    var Button = THEOplayer.videojs.getComponent('Button');
    var ForwardButton = THEOplayer.videojs.extend(Button, {
        constructor: function() {
        Button.apply(this, arguments);
        /* initialize your button */
        },
        handleClick: () => {
        player.currentTime += 10;
        },
        buildCSSClass: function () {
        return 'custom-icon-forward'; // insert all class names here
        }
    });
    
    THEOplayer.videojs.registerComponent('ForwardButton', ForwardButton);
    player.ui.getChild('controlBar').addChild('ForwardButton', {});
    }
}
```

And Style them in theoplayer.css

```css
.custom-icon-forward,
.custom-icon-rewind {
    font-family: THEOplayer;
    font-weight: normal;
    font-style: normal;
}
    
.custom-icon-forward:before {
    content: "\f11f";
    font-size: 2em;
}
    
.custom-icon-rewind:before {
    content: "\f120";
    font-size: 2em;
}
```

So now we have two new buttons but we need to add them to the THEOplayer - load files in the player. 

### Load Files to THEOPlayer

#### Android

- **Customisation inside java view manager:**

In `createViewInstance `in `TheoPlayerViewManager.java` add paths to the files and evaluate javascript with player initialisation:

```java
...
    // Add files - as a single string or a list
    THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
                .jsPaths("file:///android_asset/js/theoplayer.js")
                .cssPaths("file:///android_asset/css/theoplayer.css")
                .build();
    
    playerView = new THEOplayerView(reactContext.getCurrentActivity(), playerConfig);
    playerView.setLayoutParams(new LinearLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT));
    // Evaluate java script(init player)
    playerView.evaluateJavaScript("init({player: player})", null);
...
```

#### iOS

- **Customisation inside swift view**

In `init` in `THEOplayerView.swift` add paths to the files and evaluate javascript with player initialisations:

```swift
...
    /*
        If you want to use Google Ima set googleIMA in theoplayer config(set true googleIMA in the line below) and add 'integration: "google-ima"' in js ads declaration.
        You can declarate in THEOplayer configuration builder default js and css paths by using cssPaths() and jsPaths()
        */
    let scripthPaths = [Bundle.main.path(forResource: "theoplayer", ofType: "js")].compactMap { $0 }
    let stylePaths = [Bundle.main.path(forResource: "theoplayer", ofType: "css")].compactMap { $0 }
    let playerConfig = THEOplayerConfiguration(
        chromeless: false,
        cssPaths: stylePaths,
        jsPaths: scripthPaths,
        googleIMA: false
        )
    
    player = THEOplayer(configuration: playerConfig)
    /*
        Evaluate main script function declarated in theoplayer.js(custom js)
        You can init pure js code without file by evaluateJavaScript.
    */
    player.evaluateJavaScript("init({player: player})")
...
```

## Additional Resource

- THEOplayer Custom UI: [http://demo.theoplayer.com/timejump-buttons](http://demo.theoplayer.com/timejump-buttons)

- [How to add CSS or JavaScript files to an Android/iOS project](https://docs.theoplayer.com/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md/)

## Remarks

- **Disclaimer:** THEO Technologies does not provide THEOplayer React Native components. This How-to-Article describes how our current THEOplayer iOS and Android SDKs can be wrapped in React Native Bridges. The sample React Native bridge code is provided AS-IS without any explicit nor implicit guarantees. The React Native bridge sample code only provides mapping for a number of commonly used THEOplayer APIs, it is the customer’s responsibility to further expand the mapping and subsequently maintain the code and ensure compatibility with future versions of THEOplayer SDKs.

- There is a know issue in THEOplayer Android SDK whereby scaling of Video (aspectRatio and scrollView combination) could be an issue while using Full Screen property. Please read the article [How to fix FullScreen issue of THEOplayer in reactNative](./11-fixing-fullscreen-issue.md)


