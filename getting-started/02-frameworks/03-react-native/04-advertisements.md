# Advertisements and React Native

This how-to guide describes how to set-up the THEOplayer advertisement in React Native application.

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

### tvOS 

The below code is tested with following versions:

- Yarn 1.19.1
- React native TVOS 0.62.2-1
- Xcode 11.3
- Theoplayer TVOS 2.77.0
- Swift 5.1.

## THEOplayer Advertisement Management Implementation

### As default property

#### Android

In main JavaScript file(e.g. `TheoPlayerViewScreen.js`) where native module is implemented add to source props advertisement link where file with advertisement is declared. Additionally you can determinate time offset and skip offset, for more informations read more about THEOplayer Ads. After files rebuild advertisement with the possibility of skip will start before the movie.

```js
...
<THEOplayerView
    style={styles.player}
    autoplay={true}
    source={
                {
                    sources: [{
                        type: 'application/x-mpegurl',
                        src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
                    }],
                    poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg',
                    ads: [
                        // THEOplayer adv management
                        {
                            sources: "https://cdn.theoplayer.com/demos/preroll.xml",
                            timeOffset: "start",
                            skipOffset: "3",
                        },
                    ]
                    }
                }
/>
...
```

If you are using android source helper(`SourceHelper.java`) DRM parsing should work automatically:

```java
...
public static SourceDescription parseSourceFromJS(ReadableMap source) {
    ...
    // Ads array
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
    
    // Add source
    return SourceDescription.Builder.sourceDescription(typedSources.toArray(new TypedSource[]{})).poster(poster).ads(ads.toArray(new AdDescription[]{})).build();
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
...
```

#### iOS

In main JavaScript file(e.g. `TheoPlayerViewScreen.js`) where native module is implemented add to source props advertisement link where file with advertisement is declared. After files rebuild advertisement will start before the movie.

```js
...
<THEOplayerView
    style={styles.player}
    autoplay={true}
    source={
                {
                    sources: [{
                        type: 'application/x-mpegurl',
                        src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
                    }],
                    poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg',
                    ads: [
                        // THEOplayer adv management
                        {
                            sources: "https://cdn.theoplayer.com/demos/preroll.xml"
                        },
                    ]
                    }
                }
/>
...
```

If you are using swift view converter(`THEOplayerView+Converter.swift`) DRM parsing should work automatically:

```swift
...
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
...
```

### Set Advertisement Schedule

#### Android

Firstly add new react method scheduleAd in `TheoPlayerViewModule.java`:

```java
    ...
    @ReactMethod
    public void scheduleAd(ReadableMap ad) {
        THEOplayerAdDescription adDescription = SourceHelper.parseTheoAdFromJS(ad);
        if (adDescription != null) {
            theoPlayerViewManager.playerView.getPlayer().getAds().schedule(adDescription);
        }
    }
    ...
```

Then add e.g. Button component in React Native (`TheoPlayerViewScreen.js`)

```js
import { ..., Button, NativeModules, ... } from 'react-native';
    
...
onPressSheduleAd = async () => {
    NativeModules.THEOplayerViewManager.scheduleAd({
        sources: "//cdn.theoplayer.com/demos/preroll.xml",
        timeOffset: "start",
    });
}
    
render() {
    ....
    <View style={styles.buttonContainer}>
        <Button
            style={styles.button}
            onPress={this.onPressSheduleAd}
            title="Schedule an ad"
        />
    </View>
    ....
}
...
```

#### iOS

Firstly add new react method scheduleAd in manager `THEOplayerViewManager.swift`:

```swift
...
@objc
func scheduleAd(_ jsAdDescription: [String : Any]) {
    do {
    let data = try JSONSerialization.data(withJSONObject: jsAdDescription)
    let adDescription = try JSONDecoder().decode(THEOAdDescription.self, from: data)
    playerView.player.ads.schedule(adDescription: adDescription)
    } catch {
    print(error)
    }
}
...
```

Then add e.g. Button component in React Native (`TheoPlayerViewScreen.js`)

```js
import { ..., Button, NativeModules, ... } from 'react-native';
    
...
onPressSheduleAd = async () => {
    NativeModules.THEOplayerViewManager.scheduleAd({
        sources: "//cdn.theoplayer.com/demos/preroll.xml",
    });
}
    
render() {
    ....
    <View style={styles.buttonContainer}>
        <Button
            style={styles.button}
            onPress={this.onPressSheduleAd}
            title="Schedule an ad"
        />
    </View>
    ....
}
...
```

### Set Advertisement Listener

#### Android

Firstly add new react method getCurrentAds in `TheoPlayerViewModule.java`:

```java
...
@ReactMethod
public void getCurrentAds(final Promise promise) {
    theoPlayerViewManager.playerView.getPlayer().getAds().requestCurrentAds(new RequestCallback<List<Ad>>() {
        @Override
        public void handleResult(List<Ad> ads) {
            promise.resolve(ads.size());
        }
    });
}
...
```

Then add e.g. Button component in React Native (`TheoPlayerViewScreen.js`):

```js
import { ..., Alerts, Button, NativeModules, ... } from 'react-native';
    
...
onPressGetAd = async () => {
    const currentAds = await NativeModules.THEOplayerViewManager.getCurrentAds();
    Alert.alert(currentAds + " ad(s) currently active.")
}
    
render() {
    ....
    <View style={styles.buttonContainer}>
        <Button
            style={styles.button}
            onPress={this.onPressGetAd}
            title="Get current ads"
        />
    </View>
    ....
}
...
```

#### iOS

Firstly add new react method getCurrentAds in manager `THEOplayerViewManager.swift`:

```swift
...
@objc(getCurrentAds:reject:)
func getCurrentAds(_ resolve: @escaping RCTPromiseResolveBlock, _ reject: @escaping RCTPromiseRejectBlock) {
    playerView.player.ads.requestCurrentAds{ result, error in
    if error != nil || result == nil {
        reject(nil, nil, error!)
    } else {
        resolve(result!.count)
    }
    }
}
...
```

Then add e.g. Button component in React Native (`TheoPlayerViewScreen.js`):

```js
import { ..., Alerts, Button, NativeModules, ... } from 'react-native';
    
...
onPressGetAd = async () => {
    const currentAds = await NativeModules.THEOplayerViewManager.getCurrentAds();
    Alert.alert(currentAds + " ad(s) currently active.")
}
    
render() {
    ....
    <View style={styles.buttonContainer}>
        <Button
            style={styles.button}
            onPress={this.onPressGetAd}
            title="Get current ads"
        />
    </View>
    ....
}
...
```

### Set again source with advertisement

#### Android

Firstly add new react method setSource in `TheoPlayerViewModule.java`:

```java
...
@ReactMethod
public void setSource(ReadableMap source) {
    SourceDescription sourceDescription = SourceHelper.parseSourceFromJS(source);
    if (sourceDescription != null) {
        theoPlayerViewManager.playerView.getPlayer().setSource(sourceDescription);
    }
}
...
```

Then add e.g. Button component in React Native(`TheoPlayerViewScreen.js`):

```js
import { ..., Button, NativeModules, ... } from 'react-native';
    
...
onPressSetSourceAd = async () => {
    NativeModules.THEOplayerViewManager.setSource(
        {
            sources: [{
                type: 'application/x-mpegurl',
                src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8'
            }],
            ads: [
                {
                    sources: "https://cdn.theoplayer.com/demos/preroll.xml",
                    timeOffset: "start",
                    skipOffset: "3"
                }
            ]
        }
    );
}
    
render() {
    ....
    <View style={styles.buttonContainer}>
        <Button
            style={styles.button}
            onPress={this.onPressSetSourceAd}
            title="Set ad source"
        />
    </View>
    ....
}
...
```

#### iOS

Firstly add new react method setSource in manager `THEOplayerViewManager.swift`:

```swift
...
@objc
func setSource(_ newValue: [String : Any]) {
    do {
    let data = try JSONSerialization.data(withJSONObject: newValue)
    let sourceDescription = try JSONDecoder().decode(SourceDescription.self, from: data)
    playerView.player.source = sourceDescription
    } catch {
    print(error)
    }
}
...
```

Then add e.g. Button component in React Native(`TheoPlayerViewScreen.js`):

```js
import { ..., Button, NativeModules, ... } from 'react-native';
    
...
onPressSetSourceAd = async () => {
    NativeModules.THEOplayerViewManager.setSource(
        {
            sources: [{
                type: 'application/x-mpegurl',
                src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8'
            }],
            ads: [
                {
                    sources: "https://cdn.theoplayer.com/demos/preroll.xml"
                }
            ]
        }
    );
}
     
render() {
    ....
    <View style={styles.buttonContainer}>
        <Button
            style={styles.button}
            onPress={this.onPressSetSourceAd}
            title="Set ad source"
        />
    </View>
    ....
}
...
```

## Google IMA Advertisement Management Implementation

### Android

Firstly set player configuration in view manager file e.g. `TheoPlayerViewManager.java `at creating view instance:

```java
...
@Override
    protected THEOplayerView createViewInstance(final ThemedReactContext reactContext) {
    /*
        If you want to use Google Ima set googleIma in theoplayer config(uncomment line below) and add integration: "google-ima"`
        in js ads source declaration
    */
    THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
            .googleIma(true)
            .build();
    
    // Add configuration to player view
    playerView = new THEOplayerView(reactContext.getCurrentActivity(), playerConfig);
    playerView.setLayoutParams(new LinearLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT));
    
    reactContext.addLifecycleEventListener(this);
    
    return playerView;
}
...
```

Next add integration type to main JavaScript file(e.g. `TheoPlayerViewScreen.js`):

```js
...
<THEOplayerView
    style={styles.player}
    autoplay={true}
    source={
                {
                    sources: [{
                        type: 'application/x-mpegurl',
                        src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
                    }],
                    poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg',
                    ads: [
                        // Google ima adv management
                        {
                            sources: "https://cdn.theoplayer.com/demos/preroll.xml",
                            integration: "google-ima"
                        }
                    ]
                    }
                }
/>
...
```

### iOS

Firstly set player configuration in view manager file e.g. `THEOplayerView.swift `at creating view instance:

```swift
...
init() {
    if let appDelegate = UIApplication.shared.delegate as? AppDelegate, !appDelegate.castContextSet {
    //THEOplayerCastHelper.setGCKCastContextSharedInstanceWithDefaultCastOptions()
    appDelegate.castContextSet = true
    }
    
    /*
    To activate the native Google IMA integration activate the native ima property in the player config. 
    */
    let playerConfig = THEOplayerConfiguration(
        chromeless: false, 
        ads: AdsConfiguration(showCountdown: true, preload: .MIDROLL_AND_POSTROLL, googleImaConfiguration: GoogleIMAConfiguration(useNativeIma: true))
        )
    player = THEOplayer(configuration: playerConfig)
    super.init(frame: .zero)
    player.addAsSubview(of: self)
}
...
```

Next add integration type to main JavaScript file(e.g. `TheoPlayerViewScreen.js`):

```js
...
<THEOplayerView
    style={styles.player}
    autoplay={true}
    source={
                {
                    sources: [{
                        type: 'application/x-mpegurl',
                        src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
                    }],
                    poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg',
                    ads: [
                        // Google ima adv management
                        {
                            sources: "https://cdn.theoplayer.com/demos/preroll.xml",
                            integration: "google-ima"
                        }
                    ]
                    }
                }
/>
...
```
### tvOS

In main JavaScript file(e.g. `TheoPlayerViewScreen.js`) where native module is implemented, add the advertisement descriptions in the source property:

```js
...
export default class TheoPlayerViewScreen extends React.Component {
    return (
          <BaseComponent style={styles.containerBase}>
              <View style={styles.container}>
                  <THEOplayerView
                      style={playerStyle}
                      autoplay={true}
                      source={
                        {
                            sources: [{
                                type: 'application/x-mpegurl',
                                src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
                            }],
                            poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg',
                            ads: [
                                {
                                    sources: "https://cdn.theoplayer.com/demos/preroll.xml",
                                    integration: "google-ima"
                                }
                            ]
                        }
                     }
                  />
              </View>
          </BaseComponent>
        );
...
```

Declare Google IMA in the file `CommonRCTConvertExtension.swift` which is common for both iOS and tvOS:

```swift
...
  @objc(AdDescription:)
  class func adDescription(_ json: [String:AnyObject]) -> THEOAdDescription? {
    guard let src = RCTConvert.nsString(json["sources"]) else {
      return nil
    }
 
    return THEOAdDescription(
      src: src,
      timeOffset: RCTConvert.nsString(json["timeOffset"]),
      skipOffset: RCTConvert.nsString(json["skipOffset"])
    )
  }
 
   @objc(AdDescriptionArray:)
   class func adDescriptionArray(_ json: [AnyObject]) -> [THEOAdDescription]? {
       let sources = RCTConvertArrayValue(#selector(adDescription), json)
           .compactMap { $0 as? THEOAdDescription }
       return sources.count > 0 ? sources : nil
   }
...
```

Next add `Ad description` property to the source description decalred in file `RCTConvertExtension.swift` in `ios\TheoPlayerReactNative\tvOS\`:

```swift
...
  @objc(SourceDescription:)
  class func sourceDescription(_ json: [String:AnyObject]) -> SourceDescription? {
    guard let sources = (json["sources"] as? [AnyObject]).flatMap(RCTConvert.typedSourceArray) else {
      return nil
    }
     
    return SourceDescription(
      sources: sources,
      ads: (json["ads"] as? [AnyObject]).flatMap(RCTConvert.adDescriptionArray),
      textTracks: (json["textTracks"] as? [AnyObject]).flatMap(RCTConvert.textTrackArray),
      poster: RCTConvert.nsString(json["poster"]),
      metadata: nil
    )
  }
...
```

Finally Google Native IMA needs to be set in THEOplayer configuration Object in file `THEOplayerView.swift`:

```swift
...
@objc(THEOplayerView)
class THEOplayerView: BaseTHEOplayerView {
 
  init() {
    let playerConfig = THEOplayerConfiguration(
        chromeless: false,
        ads:AdsConfiguration())
    let player = THEOplayer(configuration: playerConfig)
    super.init(player: player)
  }
  ...
}
```
**Note**: `AdsConfiguration()` in the player config enables native implementations for Ads like Google IMA or SpotX. 

## Additional Resources

- THEOplayer currently supports two ad playback implementation:
    - THEOplayer (default)- VAST 3.0, VMAP & VPAID 2.0
    - Google IMA

- Google IMA samples: https://developers.google.com/interactive-media-ads/docs/sdks/html5/tags
- THEOplayer Github Sample Project : https://github.com/THEOplayer/samples-react-native

## Remarks

- **Disclaimer:** THEO Technologies does not provide THEOplayer React Native components. This How-to-Article describes how our current THEOplayer iOS and Android SDKs can be wrapped in React Native Bridges. The sample React Native bridge code is provided AS-IS without any explicit nor implicit guarantees. The React Native bridge sample code only provides mapping for a number of commonly used THEOplayer APIs, it is the customer’s responsibility to further expand the mapping and subsequently maintain the code and ensure compatibility with future versions of THEOplayer SDKs.

- There is a know issue in THEOplayer Android SDK whereby scaling of Video (aspectRatio and scrollView combination) could be an issue while using Full Screen property. Please read the article [How to fix FullScreen issue of THEOplayer in React Native](./11-fixing-fullscreen-issue.md)

