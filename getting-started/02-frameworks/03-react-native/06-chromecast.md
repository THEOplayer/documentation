# Chromecast and React Native

This how-to guide describes how to integrate chromecast in the THEOplayer React Native application.

**Note**: THEOplayer supports the Chromecast feature at SDK Level, so the feature needs to be pre-enable.

## General Information 

### Android

The below code is tested with following versions:

- Yarn 1.19.1
- React native 0.61.2
- Android studio 3.5.1
- THEOplayer Android >=SDK 2.59.0
- JAVA 11.0.4
- Cast framework 15.0.1
- Media Router v7 27.1.1
- App Compat v7 27.1.1

*The THEOplayer Android SDK can be used for Android devices using Android 5.0+ (minSdkVersion 21)*

### iOS

The below code is tested with following versions:

- Yarn 1.19.1
- React native 0.61.2
- Xcode 11.1
- THEOplayer >=2.64.0
- Swift 5.1.

*The THEOplayer iOS SDK can be used for iOS devices using iOS 10.0+ and Swift 5.0+. You will need to include Chromecast Framework along with THEOplayer iOS SDK, Download the SDK from here: Download chromecast framework e.g. [http://cdn.theoplayer.com/demos/theoplayer/apps/framework/GoogleCast.framework.zip](http://cdn.theoplayer.com/demos/theoplayer/apps/framework/GoogleCast.framework.zip)*

## Implementing THEOplayer Chromecast

##Android

In main `build.gradle` file add `Cast Framework` and `Media Router` libraries:

```java
...
dependencies {
    ...
    implementation 'com.android.support:appcompat-v7:27.1.1'
    implementation 'com.android.support:mediarouter-v7:27.1.1'
    implementation 'com.google.android.gms:play-services-cast-framework:15.0.1'
    ...
}
...
```java

And then implement your own or add default cast options provider of the THEOplayer and register it in the `AndroidManifest.xml` file in meta data:

```xml
...
    <application
        android:name=".MainApplication"
        android:label="@string/app_name"
        android:icon="@mipmap/ic_launcher"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:allowBackup="false"
        android:theme="@style/AppTheme">
        ...
        <meta-data
            android:name="com.google.android.gms.cast.framework.OPTIONS_PROVIDER_CLASS_NAME"
            //Add the default CastOptionProvider or refer to the Class registered for casting
            android:value="com.theoplayer.android.api.cast.chromecast.DefaultCastOptionsProvider"/>
        ...
    </application>
...
```

Or, If you need custom settings for your chromecast (for example a custom receiver id) you can create your own CastOptionsProvider by subclassing com.google.android.gms.cast.framework.OptionsProvider and implementing the getCastOptions method (`CastOptionsProvider.java`).

```java
import android.content.Context;
import com.google.android.gms.cast.framework.CastOptions;
import com.google.android.gms.cast.framework.OptionsProvider;
import com.google.android.gms.cast.framework.SessionProvider;
import com.theoplayer.android.api.cast.chromecast.DefaultCastOptionsProvider;

import java.util.List;

public class CastOptionsProvider implements OptionsProvider  {
    @Override
    public CastOptions getCastOptions(Context context) {
        return new CastOptions.Builder()
                .setReceiverApplicationId(DefaultCastOptionsProvider.DEFAULT_APP_ID)
                .build();
    }
    @Override
    public List<SessionProvider> getAdditionalSessionProviders(Context context) {
        return null;
    }
}
```

Save changes and sync project with Gradle files.

### iOS

After adding the Google Chromecast Framework to the project like THEOplayer SDK, set custom cast options in the GCKCastContext or use the default THEOPlayer cast options in `THEOplayerView.swift` file:

```swift
...
    init() {
    if let appDelegate = UIApplication.shared.delegate as? AppDelegate, !appDelegate.castContextSet {
        /*
            To use cast uncomment default cast configuration from theoplayer or write your own
        */
        THEOplayerCastHelper.setGCKCastContextSharedInstanceWithDefaultCastOptions()
        appDelegate.castContextSet = true
    }
...
```

Save changes and rebuild project.

## Additional Resources

- Chromecast Framework: [https://developers.google.com/cast/docs/ios_sender/](https://developers.google.com/cast/docs/ios_sender/)

- THEOplayer Chromecast Knowledgebase: https://docs.portal.theoplayer.com/how-to-guides/03-cast/01-chromecast/00-introduction.md

## Remarks

- **Disclaimer:** THEO Technologies does not provide THEOplayer React Native components. This How-to-Article describes how our current THEOplayer iOS and Android SDKs can be wrapped in React Native Bridges. The sample React Native bridge code is provided AS-IS without any explicit nor implicit guarantees. The React Native bridge sample code only provides mapping for a number of commonly used THEOplayer APIs, it is the customer’s responsibility to further expand the mapping and subsequently maintain the code and ensure compatibility with future versions of THEOplayer SDKs.

- There is a know issue in THEOplayer Android SDK whereby scaling of Video (aspectRatio and scrollView combination) could be an issue while using Full Screen property. Please read the article [How to fix FullScreen issue of THEOplayer in reactNative](./11-fixing-fullscreen-issue.md)