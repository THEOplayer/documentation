# DRM and React Native

> *Disclaimer: THEO Technologies does not provide THEOplayer ReactNative components. This How-to-Article describes how our current THEOplayer iOS and Android SDKs can be wrapped in ReactNative Bridges. The sample ReactNative bridge code is provided AS-IS without any explicit nor implicit guarantees. The ReactNative bridge sample code only provides mapping for a number of commonly used THEOplayer APIs, it is the customer’s responsibility to further expand the mapping and subsequently maintain the code and ensure compatibility with future versions of THEOplayer SDKs.* 

This how-to guide describes how to set-up DRM in a React Native application.

## General Information

### Android

The below code is tested with following versions:

- Yarn 1.19.1
- React Native 0.61.2
- Android studio 3.5.1
- THEOplayer Android SDK 2.59.0
- JAVA 11.0.4

*The THEOplayer Android SDK can be used for Android devices using Android 5.0+ (minSdkVersion 21)*

### iOS

The below code is tested with following versions:

- Yarn 1.19.1
- React Native 0.61.2
- Xcode 11.1
- THEOplayer 2.64.0
- Swift 5.1.

*The THEOplayer iOS SDK can be used for iOS devices using iOS 10.0+ and Swift 5.0+*

## Implementing THEOplayer DRM

### Android

In main JavaScript file(e.g. `TheoPlayerViewScreen.js`) where native module is implemented add to source object with `src` for widevine, application `type` and `drm` object with `widevine` and `licenseAcquisitionURL`:

```js
...
<THEOplayerView
    style={styles.player}
    autoplay={true}
    source={
                {
                    sources: [{
                        type: 'application/dash+xml',
                        src: 'https://amssamples.streaming.mediaservices.windows.net/622b189f-ec39-43f2-93a2-201ac4e31ce1/BigBuckBunny.ism/manifest(format=mpd-time-csf)',
                        drm: {
                            widevine: {
                                licenseAcquisitionURL: "https://amssamples.keydelivery.mediaservices.windows.net/Widevine/?KID=1ab45440-532c-4399-94dc-5c5ad9584bac"
                            },
                        }
                    }],
                    poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg',
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
    //typed sources
        ArrayList<TypedSource> typedSources = new ArrayList<>();
        for (int i = 0 ; i < jsonSources.length(); i++) {
            JSONObject jsonTypedSource = (JSONObject) jsonSources.get(i);
    
            SourceType sourceType = null;
            if (jsonTypedSource.getString("type").equals("application/x-mpegurl")) {
                sourceType = SourceType.HLSX;
            }
    
            JSONObject drm = null;
            Iterator<String> drmKeys = new ArrayList().iterator();
            @Nullable FairPlayKeySystemConfiguration fairplay = null;
            @Nullable KeySystemConfiguration playready = null;
            @Nullable KeySystemConfiguration widevine = null;
            @Nullable ClearkeyKeySystemConfiguration clearkey = null;
    
            if (jsonTypedSource.has("drm")) {
                drm = jsonTypedSource.getJSONObject("drm");
                drmKeys = drm.keys();
            }
    
            while(drmKeys.hasNext()) {
                String key = drmKeys.next();
                JSONObject drmObject = drm.getJSONObject(key);
    
                /*
                    Set selected drm type, if you need extend key system configuration or add other cases.
                    Android mobile supports only widevine:
                    - https://www.theoplayer.com/solutions/android-sdk
                    - https://castlabs.com/resources/drm-comparison/
                */
                switch (key) {
                    case "widevine":
                        widevine = new KeySystemConfiguration(drmObject.getString("licenseAcquisitionURL"));
                        break;
                }
            }
    
            DRMConfiguration drmConfiguration = new DRMConfiguration(fairplay, playready, widevine, clearkey);
            TypedSource ts = TypedSource.Builder.typedSource().src(jsonTypedSource.getString("src")).type(sourceType).drm(drmConfiguration).build();
            typedSources.add(ts);
...
```

### iOS

In main JavaScript file(e.g. `TheoPlayerViewScreen.js`) where native module is implemented add to source object with `src` for fairplay, application `type and `drm` object with integration, fairplay `certificateURL` and `licenseAcquisitionURL`:

```js
...
<THEOplayerView
    style={styles.player}
    autoplay={true}
    sources: [{
                type: 'application/x-mpegurl',
                src: 'https://fps.ezdrm.com/demo/video/ezdrm.m3u8',
                drm: {
                    integration: 'ezdrm',
                    fairplay: {
                        licenseAcquisitionURL: 'https://fps.ezdrm.com/api/licenses/09cc0377-6dd4-40cb-b09d-b582236e70fe',
                        certificateURL: "https://fps.ezdrm.com/demo/video/eleisure.cer"
                    }
                }
            }
/>
...
```

If you are using swift view converter(`THEOplayerView+Converter.swift`) DRM parsing should work automatically:

```js
...
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
...
```

## Remarks

- **Note:** There is a know issue in THEOplayer Android SDK whereby scaling of Video (aspectRatio and scrollView combination) could be an issue while using Full Screen property. Please read the article [How to fix FullScreen issue of THEOplayer in React Native](./03-fixing-fullscreen-issue.md)

- **Note**: THEOplayer DRM support on Android (Only Widevine) and iOS (Only Fairplay)

- **What is DRM**: [knowledge base article](../../../knowledge-base/02-content-protection/01-drm-systems.md)