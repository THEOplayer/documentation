# How to get started with React Native and THEOplayer

This how-to guide describes how to set-up the THEOplayer in React Native application.

## General Information

### Android

The below code is tested with following versions:

- Yarn 1.19.1
- React Native 0.61.2
- Android studio 3.5.1
- THEOplayer Android SDK 2.59.0
- JAVA 11.0.4

The THEOplayer Android SDK can be used for Android devices using Android 5.0+ (minSdkVersion 21)

### iOS

- Yarn 1.19.1
- React Native 0.61.2
- Xcode 11.1
- THEOplayer 2.64.0
- Swift 5.1.

The THEOplayer iOS SDK can be used for iOS devices using iOS 10.0+ and Swift 5.0+

## Importing THEOplayer SDK

### Android

Importing the THEOplayer Android SDK Library can be done following these steps:

1. In your Android Studio, go to File > New Module > **Import .JAR / .AAR Package**.
2. Navigate to the location where the **THEOplayer SDK aar** file is stored and select it.
3. Go to your project dependencies by going to File > Project Structure > **dependencies tab**.
4. Add a new dependency by clicking the plus sign in the top-right corner and choose **Module Dependency**. Select the THEOplayer SDK aar file and click OK.

Additionally, you can import the sources jar to be able to immediately see the API java source files with their documentation in Android Studio. Follow the following after successfully importing the library steps for that:

1. In the Projects Overview, set the view to the project view. You should now see “**External Libraries**”.
2. Under “External Libraries” you should be able to find the theoplayer-android SDK library, right click and select “**Library Properties**”.
3. In the top left corner of the Library Properties window, click the **first green plus sign**.
4. Find and select the **theoplayer-android SDK** jar file and click ok.

### iOS

Importing the THEOplayer SDK Library can be done following these steps:

1. Open finder and **add your THEOplayerSDK.framework** to the project directory.
2. Go to the project configuration, select the General tab, and finally scroll down to the **Embedded Binaries section and click '+'**.
3. Click **'Add Other'** and select previously added THEOPlayerSDK.framework.
4. Click **'Finish'**.

Check that the framework was correctly added:

- Go to the **Build Phases** tab in the project configuration, go to the **Embed Frameworks** section,
- Check that the **THEOplayerSDK.framework** is present.

## Native Module Implementation

### Android

- Check if theoplayer library dependency implementation was automatically added to build.gradle(path: android/app/build.gradle at section dependencies): **implementation project(path: ':theoplayer')**
- Check if gson(JSON serialization/deserialization) library dependecy implementation is added to build.gradle(path: android/app/build.gradle at section dependencies): **implementation 'com.google.code.gson:gson:2.8.2'**. This library is needed to SourceHelper class.

Firstly add native module. Add new Java class inside `android/app/src/main/java/com/<your-app-name>/` e.g. **TheoPlayerViewModule.java**

```java
package com.theoplayerreactnative;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class TheoPlayerViewModule extends ReactContextBaseJavaModule {
    private static final String RCT_MODULE_NAME = "THEOplayerViewManager";
    private TheoPlayerViewManager theoPlayerViewManager;

    TheoPlayerViewModule(ReactApplicationContext reactContext, TheoPlayerViewManager theoPlayerViewManager) {
        super(reactContext);
        this.theoPlayerViewManager = theoPlayerViewManager;
    }

    @Override
    public String getName() {
        return RCT_MODULE_NAME;
    }
}
```

New module is declarated and new theoPlayerViewManager instance is initialized.

Secondly add native view manager. Add new Java class inside `android/app/src/main/java/com/<your-app-name>/` e.g. **TheoPlayerViewManager.java**

```java
package com.theoplayerreactnative;

import android.util.Log;
import android.view.View;
import android.widget.LinearLayout;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.theoplayer.android.api.THEOplayerView;
import com.theoplayer.android.api.source.SourceDescription;

import static android.view.ViewGroup.LayoutParams.MATCH_PARENT;

public class TheoPlayerViewManager extends SimpleViewManager<THEOplayerView> {
    private static final String TAG = TheoPlayerViewManager.class.getSimpleName();
    private static final String RCT_MODULE_NAME = "THEOplayerView";


    THEOplayerView playerView;

    @Override
    public String getName() {
        return RCT_MODULE_NAME;
    }

    @Override
    protected THEOplayerView createViewInstance(final ThemedReactContext reactContext) {
        playerView = new THEOplayerView(reactContext.getCurrentActivity());
        playerView.setLayoutParams(new LinearLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT));

        return playerView;
    }

    // Setting autoplay prop
    @ReactProp(name = "autoplay", defaultBoolean = false)
    public void setAutoplay(View view, boolean autoplay) {
        playerView.getPlayer().setAutoplay(autoplay);
    }

    // Setting fullscreenOrientationCoupling prop
    @ReactProp(name = "fullscreenOrientationCoupling", defaultBoolean = false)
    public void setFullscreenOrientationCoupling(View view, boolean fullscreenOrientationCoupling) {
        playerView.getSettings().setFullScreenOrientationCoupled(fullscreenOrientationCoupling);
    }

    // Setting source prop
    @ReactProp(name = "source")
    public void setSource(View view, ReadableMap source) {
        SourceDescription sourceDescription = SourceHelper.parseSourceFromJS(source);
        if (sourceDescription != null) {
            playerView.getPlayer().setSource(sourceDescription);
        }
    }
}
```

New manager contains declarations of react props for *`autoplay`* & *`source`*. Prop *`source`* uses *`SourceHelper`* class needed for source parsing.

Thirdly add source helper class. Add new Java class inside `android/app/src/main/java/com/<your-app-name>/SourceHelper.java`
Check code below or implement your own source parser.

```java
package com.theoplayerreactnative;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.google.gson.Gson;
import com.theoplayer.android.api.source.SourceDescription;
import com.theoplayer.android.api.source.SourceType;
import com.theoplayer.android.api.source.TypedSource;
import com.theoplayer.android.api.source.addescription.AdDescription;
import com.theoplayer.android.api.source.addescription.GoogleImaAdDescription;
import com.theoplayer.android.api.source.addescription.THEOplayerAdDescription;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
    * Source parsing helper class, because we don't support GSON object deserialization currently
    */
public class SourceHelper {

    public static SourceDescription parseSourceFromJS(ReadableMap source) {
        HashMap<String, Object> hashmap = eliminateReadables(source);
        //SourceDescription sd = new Gson().fromJson(new Gson().toJson(hashmap), SourceDescription.class);

        try {
            String json = new Gson().toJson(hashmap);
            JSONObject jsonSourceObject = new JSONObject(json);
            JSONArray jsonSources = jsonSourceObject.getJSONArray("sources");

            //typed sources
            ArrayList<TypedSource> typedSources = new ArrayList<>();
            for (int i = 0 ; i < jsonSources.length(); i++) {
                JSONObject jsonTypedSource = (JSONObject) jsonSources.get(i);

                SourceType sourceType = null;
                if (jsonTypedSource.getString("type").equals("application/x-mpegurl")) {
                    sourceType = SourceType.HLSX;
                }

                TypedSource ts = TypedSource.Builder.typedSource().src(jsonTypedSource.getString("src")).type(sourceType).build();
                typedSources.add(ts);
            }

            //poster
            String poster = jsonSourceObject.optString("poster");

            //ads
            JSONArray jsonAds = jsonSourceObject.optJSONArray("ads");
            ArrayList<AdDescription> ads = new ArrayList<>();
            if (jsonAds != null) {
                for (int i = 0 ; i < jsonAds.length(); i++) {
                    JSONObject jsonAdDescription = (JSONObject) jsonAds.get(i);
                    String integration = "";
                    String integrationGoogleIma = "google-ima";

                    if (jsonAdDescription.has("integration")) {
                        integration = jsonAdDescription.getString("integration");
                    }

                    if (integration.equals(integrationGoogleIma)) {
                        ads.add(parseTheoGoogleImaAdFromJS(jsonAdDescription));
                    } else {
                        ads.add(parseTheoAdFromJS(jsonAdDescription));
                    }
                }
            }
            return SourceDescription.Builder.sourceDescription(typedSources.toArray(new TypedSource[]{})).poster(poster).ads(ads.toArray(new AdDescription[]{})).build();
        } catch (JSONException e) {
            e.printStackTrace();
        }

        return null;
    }

    public static THEOplayerAdDescription parseTheoAdFromJS(ReadableMap adDescription) {
        HashMap<String, Object> hashmap = eliminateReadables(adDescription);

        try {
            String json = new Gson().toJson(hashmap);
            JSONObject jsonAdObject = new JSONObject(json);
            return parseTheoAdFromJS(jsonAdObject);
        } catch (JSONException e) {
            e.printStackTrace();
        }

        return null;
    }

    private static THEOplayerAdDescription parseTheoAdFromJS(JSONObject jsonAdDescription) throws JSONException {
        String timeOffset = "", skipOffset = "";

        if (jsonAdDescription.has("timeOffset")) {
            timeOffset = jsonAdDescription.getString("timeOffset");
        }

        if (jsonAdDescription.has("skipOffset")) {
            skipOffset = jsonAdDescription.getString("skipOffset");
        }

        return THEOplayerAdDescription.Builder
            .adDescription(jsonAdDescription.getString("sources"))
            .timeOffset(timeOffset)
            .skipOffset(skipOffset)
            .build();
    }

    private static GoogleImaAdDescription parseTheoGoogleImaAdFromJS(JSONObject jsonAdDescription) throws JSONException {
        return GoogleImaAdDescription.Builder
                .googleImaAdDescription(jsonAdDescription.getString("sources"))
                .build();
    }

    /**
        * Eliminate all the Readable* classes from the map
        * @param readableMap
        * @return
        */
    protected static HashMap<String, Object> eliminateReadables(ReadableMap readableMap){
        HashMap<String, Object> hashMap = readableMap.toHashMap();
        HashMap<String, Object> eliminatedHashMap = new HashMap<>();

        for (Map.Entry<String, Object> entry : hashMap.entrySet()) {
            Object value = entry.getValue();
            if (value != null && value instanceof ReadableMap) {
                value = eliminateReadables((ReadableMap) value);
            } else if (value != null && value instanceof ReadableArray) {
                value = eliminateReadables((ReadableArray) value);
            }
            eliminatedHashMap.put(entry.getKey(), value);
        }
        return eliminatedHashMap;
    }

    /**
        * Eliminate all the Readable* classes from the array
        * @param readableArray
        * @return
        */
    protected static ArrayList<Object> eliminateReadables(ReadableArray readableArray){
        ArrayList<Object> arrayList = readableArray.toArrayList();
        ArrayList<Object> eliminatedArrayList = new ArrayList<>();

        for (Object o : arrayList) {
            Object value = o;

            if (value != null && value instanceof ReadableMap) {
                value = eliminateReadables((ReadableMap) value);
            } else if (value != null && value instanceof ReadableArray) {
                value = eliminateReadables((ReadableArray) value);
            }
            eliminatedArrayList.add(value);
        }
        return eliminatedArrayList;
    }
}
```

### iOS

Firstly add view of native module. Add new swift class inside `ios/` **e.g. **THEOplayerView.swift**:

```swift
import Foundation
import UIKit
import THEOplayerSDK

@objc(THEOplayerView)
class THEOplayerView: UIView {
    var player: THEOplayer

    init() {
    // Set delegate
    if let appDelegate = UIApplication.shared.delegate as? AppDelegate, !appDelegate.castContextSet {
        appDelegate.castContextSet = true
    }

    // Init player
    player = THEOplayer(configuration: THEOplayerConfiguration(chromeless: false))

    // Set frame
    super.init(frame: .zero)
    // Add as subview
    player.addAsSubview(of: self)
    }

    required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
    }

    // View property to set source which uses SourceDescription(check view+convert)
    @objc(setSource:) func setSource(source: SourceDescription) {
    player.source = source
    }

    // View property to set autoplay
    @objc(setAutoplay:) func setAutoplay(autoplay: Bool) {
    player.autoplay = autoplay
    }

    // Declarate subview for video scalling
    override func layoutSubviews() {
    super.layoutSubviews()
    player.frame = frame
    player.autoresizingMask = [.flexibleBottomMargin, .flexibleHeight, .flexibleLeftMargin, .flexibleRightMargin, .flexibleTopMargin, .flexibleWidth]
    }
}
```

Secondly add bridge for the view which will export properties, modules, methods. Add new Objective-C class inside `ios/` e.g. **THEOplayerViewBridge.h**:

```
#ifndef THEOplayerViewBridge_h
#define THEOplayerViewBridge_h

#import <React/RCTBridgeModule.h>

#endif /* THEOplayerViewBridge_h */
```

In this example, we will export two props ``source`` and *`*`autoplay`` decelerated previously in player view. Add new Objective-C class inside `ios/`  e.g. **THEOplayerViewBridge.m**:

```
#import "React/RCTView.h"
#import "React/RCTBridgeModule.h"
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(THEOplayerViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(source, SourceDescription);
RCT_EXPORT_VIEW_PROPERTY(autoplay, BOOL);

@end
```

Thirdly add initialisation of view manager. Add new swift class inside `ios/` e.g. **THEOplayerViewManager.swift**:

```swift
import Foundation
import THEOplayerSDK

@objc(THEOplayerViewManager) class THEOplayerViewManager: RCTViewManager {
    var playerView = THEOplayerView()

    override func view() -> UIView! {
    return playerView
    }

    // Override implementation of queue setup
    // - Returns: when true class initialized on the main thread,
    //            when false class initialized on a background thread
    @objc
    override static func requiresMainQueueSetup() -> Bool {
    return true;
    }
}
```

Finally add view convert which will manage source prop  structure. Add new swift class inside `ios/` e.g. **THEOplayerView+Convert.swift**:

```swift
import THEOplayerSDK
    
@objc extension RCTConvert {
    @objc(TypedSource:)
    class func typedSource(_ json: [String:AnyObject]) -> TypedSource? {
        if let src = RCTConvert.nsString(json["src"]),
            let type = RCTConvert.nsString(json["type"]) {
    
            if let drm = RCTConvert.nsDictionary(json["drm"]),
                let fairplay = RCTConvert.nsDictionary(drm["fairplay"]),
                let integrationType = RCTConvert.nsString(drm["integration"]) {
                let licenseAcquisitionURL = RCTConvert.nsString(fairplay["licenseAcquisitionURL"]);
                let certificateURL = RCTConvert.nsString(fairplay["certificateURL"]);
                var baseDrm: THEOplayerSDK.DRMConfiguration? = nil
    
                // If you want other integration add next case and drm configurator supported by theoplayer sdk
                switch integrationType {
                    case "ezdrm":
                    baseDrm = EzdrmDRMConfiguration(licenseAcquisitionURL: licenseAcquisitionURL!, certificateURL: certificateURL!)
                    break
                    case "uplynk":
                    baseDrm = UplynkDRMConfiguration(licenseAcquisitionURL: licenseAcquisitionURL, certificateURL: certificateURL!)
                    break
                    default:
                    break
                }
    
                return TypedSource(src: src, type: type, drm: baseDrm)
            } else {
                return TypedSource(src: src, type: type)
            }
    
        } else {
            return nil
        }
    }
    
    @objc(TypedSourceArray:)
    class func typedSourceArray(_ json: [AnyObject]) -> [TypedSource]? {
        let sources = RCTConvertArrayValue(#selector(typedSource), json)
            .compactMap { $0 as? TypedSource }
        return sources.count > 0 ? sources : nil
    }
    
    @objc(AdDescription:)
    class func adDescription(_ json: [String:AnyObject]) -> THEOAdDescription? {
        if let src = RCTConvert.nsString(json["sources"]) {
            return THEOAdDescription(
                src: src,
                timeOffset: RCTConvert.nsString(json["timeOffset"]),
                skipOffset: RCTConvert.nsString(json["skipOffset"])
            )
        } else {
            return nil
        }
    }
    
    @objc(AdDescriptionArray:)
    class func adDescriptionArray(_ json: [AnyObject]) -> [THEOAdDescription]? {
        let sources = RCTConvertArrayValue(#selector(adDescription), json)
            .compactMap { $0 as? THEOAdDescription }
        return sources.count > 0 ? sources : nil
    }
    
    @objc(TextTrack:)
    class func textTrack(_ json: [String:AnyObject]) -> TextTrackDescription? {
        if let src = json["src"].flatMap(RCTConvert.nsString),
            let srclang = json["srcLang"].flatMap(RCTConvert.nsString) {
            return TextTrackDescription(
                src: src,
                srclang: srclang,
                isDefault: json["default"].flatMap(RCTConvert.bool),
                kind: json["kind"].flatMap(RCTConvert.nsString).flatMap {
                    TextTrackKind.init(rawValue: $0)
                },
                label: json["label"].flatMap(RCTConvert.nsString)
            )
        } else {
            return nil
        }
    }
    
    @objc(TextTrackArray:)
    class func textTrackArray(_ json: [AnyObject]) -> [TextTrackDescription]? {
        let sources = RCTConvertArrayValue(#selector(textTrack), json)
            .compactMap { $0 as? TextTrackDescription }
        return sources.count > 0 ? sources : nil
    }
    
    @objc(SourceDescription:)
    class func sourceDescription(_ json: [String:AnyObject]) -> SourceDescription? {
        if let sources = (json["sources"] as? [AnyObject]).flatMap(RCTConvert.typedSourceArray) {
            return SourceDescription(
                sources: sources,
                ads: (json["ads"] as? [AnyObject]).flatMap(RCTConvert.adDescriptionArray),
                textTracks: (json["textTracks"] as? [AnyObject]).flatMap(RCTConvert.textTrackArray),
                poster: RCTConvert.nsString(json["poster"]),
                analytics: nil,
                metadata: nil
            )
        } else {
            return nil
        }
    }
}
```

## Player Module Registration 

### Android

So now we have working player structure but we need to register it to our application.

Add new Java class inside `android/app/src/main/java/com/<your-app-name>/` e.g. **TheoPlayerPackage.java**

```java
package com.theoplayerreactnative;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class TheoPlayerPackage implements ReactPackage {
    private TheoPlayerViewManager theoPlayerViewManager = new TheoPlayerViewManager();

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(
                new TheoPlayerViewModule(reactContext, theoPlayerViewManager)
        );
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.<ViewManager>singletonList(
                theoPlayerViewManager
        );
    }
}

Package needs to be provided in main application.

package com.theoplayerreactnative;

import android.app.Application;
import android.webkit.WebView;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
    private final ReactNativeHost mReactNativeHost =
        new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new TheoPlayerPackage() /* Created theoplayer package */
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
        };

    @Override
    public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
    }

    @Override
    public void onCreate() {
    super.onCreate();
    if (BuildConfig.DEBUG) {
        WebView.setWebContentsDebuggingEnabled(true);
    }
    SoLoader.init(this, /* native exopackage */ false);
    }
}
```

### iOS

So now we have working player structure but we need to register it to our application.

Configure an Objective-C bridging header(Objective-C and Swift code will be mixed so bridging is required), go to `ios/<your-project-name>-Bridging-Header.h` and add:

```swift
#import <React/RCTViewManager.h>
#import "AppDelegate.h"
```

Now we have to create implementation that will delegate THEOplayer. In `ios/<your-project-name` e.g. TheoPlayerReactNative>/AppDelegate.m add:

```swift
#import "AppDelegate.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <THEOplayerSDK/THEOplayerSDK-Swift.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                    moduleName:@"TheoPlayerReactNative"
                                            initialProperties:nil];

    rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    UIViewController *rootViewController = [UIViewController new];
    rootViewController.view = rootView;
    self.window.rootViewController = rootViewController;
    [self.window makeKeyAndVisible];
    return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
    return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
    return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
```

## React Native Implementation

Now we can use theoplayer in react.

1. Import requireNativeComponent: **import { requireNativeComponent } from 'react-native';**

2. Create react native component: **const THEOplayerViewNative = requireNativeComponent('THEOplayerView', THEOplayerView);**

3. Use in JSX:

```js
...
render() {
    return (
    <THEOplayerViewNative
        autoplay={true}
        fullscreenOrientationCoupling={true}
        source={
        {
            sources: [{
                type: 'application/x-mpegurl',
                src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
            }],
            poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg'
        }
        }
    />;
    );
}
...
```

## Remarks

- **Disclaimer:** THEO Technologies does not provide THEOplayer React Native components. This How-to-Article describes how our current THEOplayer iOS and Android SDKs can be wrapped in React Native Bridges. The sample React Native bridge code is provided AS-IS without any explicit nor implicit guarantees. The React Native bridge sample code only provides mapping for a number of commonly used THEOplayer APIs, it is the customer’s responsibility to further expand the mapping and subsequently maintain the code and ensure compatibility with future versions of THEOplayer SDKs.

- 
**Note:** There is a know issue in THEOplayer Android SDK whereby scaling of Video (aspectRatio and scrollView combination) could be an issue while using Full Screen property. Please read the article [How to fix FullScreen issue of THEOplayer in React Native](./03-fixing-fullscreen-issue.md)