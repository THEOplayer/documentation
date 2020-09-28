# DRM and React Native

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

### tvOS 

The below code is tested with following versions:

- Yarn 1.19.1
- React native TVOS 0.62.2-1
- Xcode 11.3
- Theoplayer TVOS 2.77.0
- Swift 5.1.

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

In main JavaScript file (e.g. `TheoPlayerViewScreen.js`) where native module is implemented, add a source object with `src` for fairplay, application `type` and `drm` object with `integration`, fairplay `certificateURL` and `licenseAcquisitionURL`:

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
### tvOS

After a base tvOS project is added to the existing project and structure is defined as stated in the article [How to add tvOS project in React Native and THEOplayer](./02-add-tvos.md), In main JavaScript file (e.g. `TheoPlayerViewScreen.js`) where native module is implemented, add a source object with `src` for fairplay, application `type` and `drm` object with `integration`, fairplay `certificateURL` and `licenseAcquisitionURL`:

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
                          /* Uncomment wanted drm(base keyOS)*/
                          sources: [
                            /* KeyOS */
                            {
                              src: 'https://cdn.theoplayer.com/demos/keyos-drm/fairplay/master.m3u8',
                              type: 'application/x-mpegurl',
                              drm: {
                                integration: 'keyos',
                                customdata: 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPEtleU9TQXV0aGVudGljYXRpb25YTUw+CiAgICA8RGF0YT4KICAgICAgICA8R2VuZXJhdGlvblRpbWU+MjAyMC0wNi0wMyAxNDozOToyNS4zMjc8L0dlbmVyYXRpb25UaW1lPgogICAgICAgIDxFeHBpcmF0aW9uVGltZT4yMDI1LTA2LTAyIDE0OjM5OjI1LjMyODwvRXhwaXJhdGlvblRpbWU+CiAgICAgICAgPFVuaXF1ZUlkPjhkNzliZDMyNzQ0MWFmYWY3ZTUyOWFlMTE4MzFhODAzPC9VbmlxdWVJZD4KICAgICAgICA8UlNBUHViS2V5SWQ+YWI2NjFiMGI0NmU1ODYxMzFkYmFhMTk5NTA3NTZiOTI8L1JTQVB1YktleUlkPgogICAgICAgIDxXaWRldmluZVBvbGljeSBmbF9DYW5QbGF5PSJ0cnVlIiBmbF9DYW5QZXJzaXN0PSJ0cnVlIj4KICAgICAgICAgICAgPExpY2Vuc2VEdXJhdGlvbj4xNTc2ODAwMDA8L0xpY2Vuc2VEdXJhdGlvbj4KICAgICAgICA8L1dpZGV2aW5lUG9saWN5PgogICAgICAgIDxXaWRldmluZUNvbnRlbnRLZXlTcGVjIFRyYWNrVHlwZT0iSEQiPgogICAgICAgICAgICA8U2VjdXJpdHlMZXZlbD4xPC9TZWN1cml0eUxldmVsPgogICAgICAgIDwvV2lkZXZpbmVDb250ZW50S2V5U3BlYz4KICAgICAgICA8RmFpclBsYXlQb2xpY3kgcGVyc2lzdGVudD0idHJ1ZSI+CiAgICAgICAgICAgIDxQZXJzaXN0ZW5jZVNlY29uZHM+MTU3NjgwMDAwPC9QZXJzaXN0ZW5jZVNlY29uZHM+CiAgICAgICAgPC9GYWlyUGxheVBvbGljeT4KICAgICAgICA8TGljZW5zZSB0eXBlPSJzaW1wbGUiPgogICAgICAgICAgICA8UG9saWN5PgogICAgICAgICAgICAgICAgPElkPmMyYTM4OTMyLTBhNjktNDFjYy1hZDA2LWQ0MWM3NTRhM2RiYzwvSWQ+CiAgICAgICAgICAgIDwvUG9saWN5PgogICAgICAgIDwvTGljZW5zZT4KICAgICAgICA8UG9saWN5IGlkPSJjMmEzODkzMi0wYTY5LTQxY2MtYWQwNi1kNDFjNzU0YTNkYmMiIHBlcnNpc3RlbnQ9InRydWUiPgogICAgICAgICAgPEV4cGlyYXRpb25BZnRlckZpcnN0UGxheT4xNTc2ODAwMDA8L0V4cGlyYXRpb25BZnRlckZpcnN0UGxheT4KICAgICAgICA8L1BvbGljeT4KICAgIDwvRGF0YT4KICAgIDxTaWduYXR1cmU+TEN2UVhIbU5ndXJkR01KQUdjL2YxRStLNjFFR1Q2M3BMRFNhTlVmMTlFMjFjSDl1V3o5aVM0cThoSnRQbmVySkRkUnBWc3ZmWnBLa3hYd1I0VEZ6dkRCazc5T2JlWTVnZTZKMXpxWkdZR0NRZkkvMnBrMEwwU2xNU2hzSDFZcm04MTlxd3ZOZjIwRi8zZDEzZzRuREtpRk5VSGpLTUVYZDJlRDcveWlpbE9lNk1hZmVra285bUNZWURRdmJIMmo2TFV3bnRDazJlblhhRFhNSExRK1lQRWFuSnRsL2NML3R4SGpkREdOWHZ3ZGtpU3ovcmNuU21RMEswTTlKRnVJbmZTMEV5Mk9tRmg1RzRCSmFPRUx6MDVka2pqV2YrcENDS0x2c0Y2aDZEZWFySXViSnB6MGhBaWpwMDFuM2NaQUI4ZkZOZ3E5UXB5WVVvSlhyVzdIT05RPT08L1NpZ25hdHVyZT4KPC9LZXlPU0F1dGhlbnRpY2F0aW9uWE1MPg==',
                                fairplay: {
                                  licenseAcquisitionURL: '//fp-keyos.licensekeyserver.com/getkey',
                                  certificateURL: '//fp-keyos.licensekeyserver.com/cert/8bca5aab1e7856cc2593c5b7a4b16446.der'
                                }
                              }
                            }
                            /* Ezdrm */
                            /*
                            {
                              src: 'https://fps.ezdrm.com/demo/video/ezdrm.m3u8',
                              type: 'application/x-mpegURL',
                              drm: {
                                integration: 'ezdrm',
                                fairplay: {
                                  licenseAcquisitionURL: 'https://fps.ezdrm.com/api/licenses/09cc0377-6dd4-40cb-b09d-b582236e70fe',
                                  certificateURL: 'https://fps.ezdrm.com/demo/video/eleisure.cer'
                                }
                              }
                            }
                            /* Uplynk drm */
                            /*
                            {
                                type: 'application/x-mpegurl',
                                src: 'https://content.uplynk.com/ext/XXXXXX.m3u8?rmt=fps',
                                drm: {
                                    integration: 'uplynk',
                                    fairplay: {
                                      certificateURL: "https://x-drm.uplynk.com/fairplay/public_key/xxxxxx.cer"
                                    }
                                }
                            }
                            */
                            ],
                            poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg',
                        }
                    }
                  />
              </View>
          </BaseComponent>
        );
...
```
In the file `CommonRCTConvertExtension.swift` for both iOS and tvOS declare the drm configuration:

```swift
...
  @objc(TypedSource:)
  class func typedSource(_ json: [String:AnyObject]) -> TypedSource? {
    guard
      let src = RCTConvert.nsString(json["src"]),
      let type = RCTConvert.nsString(json["type"])
      else {
        return nil
    }
     
    if let drm = RCTConvert.nsDictionary(json["drm"]),
      let fairplay = RCTConvert.nsDictionary(drm["fairplay"]),
      let integrationType = RCTConvert.nsString(drm["integration"]),
      let customData = RCTConvert.nsString(drm["customdata"]) {
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
      case "keyos":
        baseDrm = KeyOSDRMConfiguration(licenseAcquisitionURL: licenseAcquisitionURL!, certificateURL: certificateURL!, customdata: customData)
        break
      default:
        break
      }
      return TypedSource(src: src, type: type, drm: baseDrm)
    } else {
      return TypedSource(src: src, type: type)
    }
  }
...
```

**Note:** DRM is blocked on the ios simulator it must be tested on a real device.

## Aditional Resources

- Support Matrix -[Knowledge base DRM article](../../../knowledge-base/02-content-protection/01-drm-systems.md)

## Remarks

- **Disclaimer:** THEO Technologies does not provide THEOplayer React Native components. This How-to-Article describes how our current THEOplayer iOS and Android SDKs can be wrapped in React Native Bridges. The sample React Native bridge code is provided AS-IS without any explicit nor implicit guarantees. The React Native bridge sample code only provides mapping for a number of commonly used THEOplayer APIs, it is the customer’s responsibility to further expand the mapping and subsequently maintain the code and ensure compatibility with future versions of THEOplayer SDKs.

- There is a know issue in THEOplayer Android SDK whereby scaling of Video (aspectRatio and scrollView combination) could be an issue while using Full Screen property. Please read the article [How to fix FullScreen issue of THEOplayer in React Native](./11-fixing-fullscreen-issue.md)
