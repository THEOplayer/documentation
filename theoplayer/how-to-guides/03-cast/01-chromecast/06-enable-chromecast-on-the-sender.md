# Enable Chromecast on the Sender

This article explains how to enable the Chromecast Sender capabilities on the Web SDK, iOS SDK and Android SDK.
This article also documents how you can connect with a customer Chromecast Receiver application.

## Prerequisites

1. The Chromecast feature needs to be enabled for your THEOplayer SDK.
   (THEOplayer is built in a modular fashion, and this feature might be disabled for your SDK.)
2. You need to import the Chromecast Sender SDK

## Import Chromecast Sender SDK

### Web SDK

To allow Chromecast playback you need to include Google's Chromecast Sender SDK, which is a JavaScript file.
The JavaScript snippet below illustrates how you include this Sender SDK. You can read more about it at [https://developers.google.com/cast/docs/web_sender](https://developers.google.com/cast/docs/web_sender).

```javascript
<script type="text/javascript" src="//www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"></script>
```

Once this SDK is imported, THEOplayer will automatically add the Chromecast casting capability to your player (if you've enabled the Chromecast feature for your THEOplayer SDK).

### Android SDK

Importing the Chromecast feature differs between the Android SDK and Legacy Android SDK (4.12.x) but the usage is similar.
Therefore, the points 1 & 2 below are SDK specific meanwhile from point 3 and on they are similar.

**Notes**

- Please note that Chromecast support is not available for the Android TV and Fire TV SDKs.

#### Android SDK

In order to enable Chromecast on the THEOplayer Android SDK:

1. Use a version of THEOplayer’s Android SDK ≥ 3.4.0

2. Add the feature integration dependency in your `build.gradle` file.

```java
implementation 'com.theoplayer.theoplayer-sdk-android:core:+'
implementation 'com.theoplayer.theoplayer-sdk-android:integration-cast:+' // add cast dependency
```

#### Legacy Android SDK (4.12.x)

In order to enable Chromecast on the THEOplayer Android SDK:

1. Use a version of THEOplayer’s Android SDK ≥ 1.0.9

2. Include the Cast Framework and Media Router libraries

   To add Chromecast support you need to include the Cast Framework and Media Router libraries under the dependencies node in your `build.gradle` file.

   ```java
   implementation 'androidx.mediarouter:mediarouter:1.1.0'
   implementation 'com.google.android.gms:play-services-cast-framework:19.0.0'
   ```

   Note: you may need to adjust the above snippet to match your Android setup.

3. Set `CastOptionsProvider`:

   To enable Chromecast on Android a `CastOptionsProvider` should be specified.
   This class contains the configuration for Chromecast on Android.
   A `DefaultCastOptionsProvider` is provided as part of the THEOplayer Android SDK.
   This `DefaultCastOptionsProvider` associates the default THEOplayer Chromecast receiver application with your Sender application.
   You will need to register this class in your `AndroidManifest.xml` file within a meta-data tag under your application node,
   as demonstrated at [https://github.com/THEOplayer/samples-android-sdk/blob/master/Google-Cast/app/src/main/AndroidManifest.xml#L17-L19](https://github.com/THEOplayer/samples-android-sdk/blob/master/Google-Cast/app/src/main/AndroidManifest.xml#L17-L19).

   ```java
   <meta-data
       android:name="com.google.android.gms.cast.framework.OPTIONS_PROVIDER_CLASS_NAME"
       android:value="com.theoplayer.android.api.cast.chromecast.DefaultCastOptionsProvider"/>
   ```

**Optional: Add routing button to your app**

In order to get this button to appear in your application's Toolbar,
the easiest way is to include it in the menu XML file for your Activity.

1. In your `res` folder add a menu folder

2. Add an `activity_main_menu.xml` file

3. Add the following contents to this file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto">
    <item
    android:id="@+id/media_route_menu_item"
    android:title="Cast"
    app:actionProviderClass="android.support.v7.app.MediaRouteActionProvider"
    app:showAsAction="always" />
</menu>
```

4. Initialize this new `MenuItem` in the `onCreateOptionsMenu` method of your Activity.
   (Make sure you have an `AppCompatActivity`).

```java
@Override
public boolean onCreateOptionsMenu(Menu menu) {
    super.onCreateOptionsMenu(menu);
    getMenuInflater().inflate(R.menu.activity_main_menu, menu);
    CastButtonFactory.setUpMediaRouteButton(getApplicationContext(), menu, R.id.media_route_menu_item);
    return true;
}
```

**Optional: Add MiniController to your app**

In your main activity xml add the following fragment:

```java
<fragment
    android:id="@+id/castMiniController"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_alignParentBottom="true"
    android:visibility="gone"
    class="com.google.android.gms.cast.framework.media.widget.MiniControllerFragment" />
```

**Optional: Set a `CastStrategy` to your THEOplayerConfig**

THEOplayer Android SDK support Chromecast CastStrategy to define the joining behavior.

```java
new THEOplayerConfig.Builder()
    .castStrategy(CastStrategy.AUTO)
    .build();
```

### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

In order to enable Chromecast on the iOS SDK:

1. Use a version of THEOplayer’s iOS SDK ≥ 1.0.3

2. Set up the Cast Framework:

   **iOS 14 Warning:** Changes to iOS 14 local network access permissions have impacted the Google Cast iOS SDK in a number of ways. Please see the [iOS 14 Changes](https://developers.google.com/cast/docs/ios_sender/permissions_and_discovery#ios_14) document to see how your app is affected.

   THEOplayer iOS SDK version 2.85.0 upgrades Google Cast SDK to 4.6.0 which contains the iOS 14 specific changes from Google.

   **iOS 13 Warning:** Apple permissions changes to iOS 13 and Xcode 11 have impacted the Google Cast iOS SDK in a number of ways. Please see the [iOS 13 Changes](https://developers.google.com/cast/docs/ios_sender/ios13_changes) document to see how your app will be impacted.

   **iOS 12 Warning:** If developing using Xcode 10 and targeting iOS devices running iOS 12 or higher, the "Access Wi-Fi Information" capability is required in order to discover and connect to Cast devices.

   [https://developers.google.com/cast/docs/ios_sender_setup](https://developers.google.com/cast/docs/ios_sender_setup)

   **Static vs Dynamic Framework:** Because the THEOplayer iOS SDK is a Dynamic Framework, it should not include any dependency frameworks on which it relies (e.g. the Chromecast SDK). Instead, developers should include the dependencies on which THEOplayer relies.
   Therefore, using a Dynamic Framework ensures that there are no symbol clashes.
   More info can be found in this article: https://medium.com/onfido-tech/reusing-code-and-resources-with-swift-static-libraries-and-resource-bundles-d070e82d3b3d

   **Cocoapods setup**

   Supported until version '4.3.0', pending further investigation for versions above '4.3.0'.

   ```swift
   # Comment the next line if you are not using Swift and do not want to use dynamic frameworks
   use_frameworks!

   # Uncomment the next line to define a global platform for your project
   # platform :ios, '9.0'

   def target_pods
     pod 'google-cast-sdk'
   end

   target'YourProjectTarget' do
       # Select one of the chromecast versions
       pod 'google-cast-sdk', '4.3.0'
   end
   ```

   **Manual setup**

   Download the Dynamic Cast Framework from the [google developer website](https://developers.google.com/cast/docs/ios_sender/). Libraries without [guest mode](https://developers.google.com/cast/docs/guest_mode) have been provided for situations where your app does not require the feature or you do not wish to require Bluetooth® permissions, which have been introduced in iOS 13. Please see the [iOS 13 Changes](https://developers.google.com/cast/docs/ios_sender/ios13_changes) document for more information.

3. Set GCKCastContext

   To enable Chromecast on iOS the `GCKCastContext` shared instance should be set with a `GCKCastOptions`.

   ```swift
   let options = GCKCastOptions(receiverApplicationID: "A1B2C3D4")
   GCKCastContext.setSharedInstanceWith(options)
   ```

   or use the default THEOplayer cast options.

   ```swift
   THEOplayerCastHelper.setGCKCastContextSharedInstanceWithDefaultCastOptions()
   ```

   That's it. When Chromecast-enabled devices are discovered, the player will display a Chromecast button. The player also works nicely together with the Chromecast controls that are part of the Chromecast Framework, (e.g. [GCKUICastButton](https://developers.google.com/cast/docs/ios_sender_integrate#add_a_cast_button) or [the mini controller](https://developers.google.com/cast/docs/ios_sender_integrate#add_mini_controllers)).

## Connect with custom Chromecast Receiver application {#custom-receiver-app}

The THEOplayer SDK on your Sender application connects with THEO Chromecast Receiver application by default,
but you can connect it to a custom Chromecast Receiver application instead.

### Web SDK

If you have your own Receiver app, then you adjust the [PlayerConfiguration](pathname:///theoplayer/v10/api-reference/web/interfaces/CastConfiguration.html) to connect with a specific `appID` as demonstrated below.

```javascript
let customChromecastReceiverAppID = '8E80B9CE';
let player = new THEOplayer.Player(element, {
  libraryLocation: '...',
  license: '...',
  cast: {
    chromecast: {
      appID: customChromecastReceiverAppID,
    },
  },
});
```

### Android SDK

To connect with a custom Chromecast Receiver application, you can create your own `CastOptionsProvider` by subclassing `com.google.android.gms.cast.framework.OptionsProvider` and implementing the `getCastOptions` method.
This approach is further demonstrated at [https://github.com/THEOplayer/samples-android-sdk/tree/master/Google-Cast/guides/howto-google-cast-integration#initializing-cast-context](https://github.com/THEOplayer/samples-android-sdk/tree/master/Google-Cast/guides/howto-google-cast-integration#initializing-cast-context),
and in the snippet below.

```java
@Override
public CastOptions getCastOptions(Context context) {
    return new CastOptions.Builder()
        .setReceiverApplicationId(DEFAULT_APP_ID)
        .build();
}
```

### Legacy iOS/tvOS SDK (4.12.x)

By default, THEOplayer’s Receiver app will be set when you set `THEOplayerCastHelper.setGCKCastContextSharedInstanceWithDefaultCastOptions()`.

You can connect with a custom Receiver app by configuring its ID through `GCKCastContext.setSharedInstanceWith(GCKCastOptions(receiverApplicationID: "A1B2C3D4"))`.

This approach is further demonstrated at [https://github.com/THEOplayer/samples-ios-sdk/tree/master/Google-Cast/Guides/howto-google-cast-integration#gckcastcontext](https://github.com/THEOplayer/samples-ios-sdk/tree/master/Google-Cast/Guides/howto-google-cast-integration#gckcastcontext).
