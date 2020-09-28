# Analtyics and React Native

This how-to guide describes how to use analytics to the THEOplayer in React Native application.

**Note:** THEOplayer supports the following Analytics engines which are pre-integrated:

- Conviva 
- Youbora
- Moat
- SmartSight
- StreamOne
- Agama

*Note:* 

- Examples and testings are only done with Youbora and Conviva at the moment. 
- THEOplayer SDK should be pre-enabled with the feature of the analytics you would like to you use. 
- The code must be tested on a real device, without this analytics data will not be sent.


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

## Implementing THEOplayer Youbora

### Android

In `TheoPlayerViewManager.java` declare Youbora and add it to player settings configuration(remember to add your unique youbora account code):

```java
import com.theoplayer.android.api.source.analytics.YouboraOptions;
...
    
public class TheoPlayerViewManager extends SimpleViewManager<THEOplayerView> implements LifecycleEventListener {
    ...
    @Override
    protected THEOplayerView createViewInstance(final ThemedReactContext reactContext) {
        /*
            Example youbora usage, add account code & uncomment analytics config declaration
        */
        YouboraOptions youbora = YouboraOptions.Builder.youboraOptions("<Your youbora account code>").build();
        /*
            If you want to use Google Ima set googleIma in theoplayer config(uncomment line below) and add `integration: "google-ima"`
            in js ads source declaration.
            You can declarate in THEOplayer configuration builder default js and css paths by using cssPaths() and jsPaths()
        */
        THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
                // .googleIma(true)
                .analytics(youbora)
                .build();
    
        playerView = new THEOplayerView(reactContext.getCurrentActivity(), playerConfig);
        playerView.setLayoutParams(new LinearLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT));
    
        addPropertyChangeListeners(reactContext);
        reactContext.addLifecycleEventListener(this);
    
        return playerView;
    }
...
```


In (`TheoPlayerViewManager.java`) configuration you can add additional Youbora options e.g. 'content title' for tracking:

```java
YouboraOptions youbora = YouboraOptions.Builder.youboraOptions("<Your youbora account code>")
                .put("enableAnalytics", "true")
                .put("username", "THEO user")
                .put("content.title", "Demo")
                .build();
```

### iOS

In `THEOplayerView.swift` declare Youbora and add it to player settings configuration(remember to add your unique Youbora account code):

```swift
...
    init() {
    /*
        Example youbora usage, add account code & uncomment analytics config declaration
        */
    let youbora = YouboraOptions(accountCode: "<Your youbora account code>")
    
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
        googleIMA: false,
        analytics: [youbora]
        )
    
    player = THEOplayer(configuration: playerConfig)
...
```

In configuration you can add additional Youbora options e.g. 'content title' for tracking:

```swift
youbora.put(key: "username", value: "THEO user")
youbora.put(key: "enableAnalytics", value: "true")
youbora.put(key: "content.title", value: "Demo")
```

## Implementing THEOplayer Conviva

### Android

In `TheoPlayerViewManager.java` declare Conviva and add it to player settings configuration(remember to add your unique Conviva account code and gateway url):

```java
import com.theoplayer.android.api.source.analytics.YouboraOptions;
...
    
public class TheoPlayerViewManager extends SimpleViewManager<THEOplayerView> implements LifecycleEventListener {
    ...
    @Override
    protected THEOplayerView createViewInstance(final ThemedReactContext reactContext) {
            /*
            Example conviva usage, add account code & uncomment analytics config declaration, if you need
            custom conviva metadata add customConvivaMetadata with key and value
        */
        HashMap<String, String> customConvivaMetadata = new HashMap<>();
        //customConvivaMetadata.put("<KEY>", "<VALUE>");
    
        ConvivaConfiguration conviva = new ConvivaConfiguration.Builder("<Your conviva account code>",
                new ConvivaContentMetadata.Builder("THEOPlayer")
                        .applicationName("THEOPlayer demo")
                        .live(false)
                        .custom(customConvivaMetadata)
                        .build())
                .gatewayUrl("<Your gateway url>")
                .heartbeatInterval(5)
                .manualSessionControl(false)
                .build();
    
        THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
                // .googleIma(true)
                .analytics(conviva)
                .build();
    
        playerView = new THEOplayerView(reactContext.getCurrentActivity(), playerConfig);
        playerView.setLayoutParams(new LinearLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT));
    
        addPropertyChangeListeners(reactContext);
        reactContext.addLifecycleEventListener(this);
    
        return playerView;
    }
...
```

In configuration you can add additional Conviva options and meta data.

### iOS

In `THEOplayerView.swift` declare Conviva and add it to player settings configuration(remember to add your unique Conviva account code and gateway url):

```swift
...
    init() {
        /*
        Example conviva usage, add account code, gateway url & uncomment analytics config declaration(add or change to conviva configuration)
    */
    let convivaMetadata = ConvivaContentMetadata(
        assetName: "THEOPlayer demo",
        live: false
    )
    let conviva = ConvivaConfiguration(
        customerKey: "<Your conviva account code>",
        heartbeatInterval: 5,
        gatewayURL: "<Your conviva gateway url>",
        contentMetadata: convivaMetadata
    )
    
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
        googleIMA: false,
        analytics: [conviva]
        )
    
    player = THEOplayer(configuration: playerConfig)
...
```

In configuration you can add additional Conviva options and meta data.

## Remarks
- **Disclaimer:** THEO Technologies does not provide THEOplayer React Native components. This How-to-Article describes how our current THEOplayer iOS and Android SDKs can be wrapped in React Native Bridges. The sample React Native bridge code is provided AS-IS without any explicit nor implicit guarantees. The React Native bridge sample code only provides mapping for a number of commonly used THEOplayer APIs, it is the customer’s responsibility to further expand the mapping and subsequently maintain the code and ensure compatibility with future versions of THEOplayer SDKs.

- There is a know issue in THEOplayer Android SDK whereby scaling of Video (aspectRatio and scrollView combination) could be an issue while using Full Screen property. Please read the article [How to fix FullScreen issue of THEOplayer in reactNative](./11-fixing-fullscreen-issue.md)