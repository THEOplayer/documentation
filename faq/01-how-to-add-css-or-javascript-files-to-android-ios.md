# How to add CSS or JavaScript files to an Android/iOS project

This guide describes how to add CSS or JavaScript files to an Android or iOS project, and manipulate the player using CSS and/or JavaScript.

Including these files allows you to create a hybrid application to increase code re-usability:

- You can build a UI for Web, and re-use it in your Android or iOS application.
- You can add JavaScript logic, and re-use it in your Android or iOS application.

Through JavaScript, you have access to some THEOplayer features which aren't exposed in the iOS or Android SDK, such as the Network API.

How to communicate with messages between your Android/iOS application, and your JavaScript logic, will be discussed in a follow-up article.

## Pre-requirements

### Android

Add or confirm you have an assets folder in your project. In Android Studio, if you do not have an assets directory, you can simply add it by right-clicking > new > folder > assets folder.

## Add the JavaScript and/or CSS file

### Android 

You can drag and drop files into the assets directory, or right-click and create a new file.

The JavaScript-file can directly refer to the player variable on which you can perform many actions, for example:

```js
player.source = {
    "sources": {
    "src": "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",
    "useCredentials": false
    }
}
```

### iOS 
You can `Add Files to <YOUR_PROJECT>` by right clicking on your project to include new JavaScript or CSS files.

## Link the JavaScript and/or CSS file to the player 

### Android 

This can be done through XML:

```xml
<com.theoplayer.android.api.THEOplayerView
        android:id="@+id/theo_player_view"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        app:defaultCss="true"
        app:cssPaths="path/to/style1.css" 
        app:jsPaths="path/to/script1.js" />
```

Or directly in the player config in Java: 

```java
THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
            .chromeless(false)
            .defaultCss(true)
            .cssPaths("path/to/style1.css","path/to/style2.css") // Path is relative to the location of the assets directory
            .jsPaths("path/to/script1.js","path/to/script2.js")
            .build();
THEOplayerView tpv = new THEOplayerView(this, playerConfig);
```

### iOS
You can do this programmatically through Swift when initialising your THEOplayer instance.

```swift
let stylePath = Bundle.main.path(forResource:"style1", ofType: "css")! // style1.css
let scriptPath = Bundle.main.path(forResource:"script1", ofType: "js")! // script1.css
let playerConfig = THEOplayerConfiguration(defaultCSS: true, cssPaths:[stylePath], jsPaths: [scriptPath])
self.theoplayer = THEOplayer(configuration: playerConfig)
```