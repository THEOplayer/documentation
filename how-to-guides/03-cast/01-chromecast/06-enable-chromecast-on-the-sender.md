# Enable Chromecast on the Sender

This article explains how to enable the Chromecast Sender Capabilities on the Web SDK, iOS SDK and Android SDK.

### Table of Contents
- [Prerequirements](#prerequirements)
- [Import Chromecast SDK](#import-chromecast-sdk)
- [Chromecast Receiver app](#chromecast-receiver-app)

## Prerequirements

THEOplayer is built in a modular way, and a THEOplayer library has a set of features enabled (e.g. HLS playback, MPEG-DASH playback, advertisements, etc.).

1. The Chromecast feature needs to be enabled in your library. Please reach out to your THEOplayer contact to ensure that this feature is enabled.

## Import Chromecast SDK

##### Web SDK

To allow Chromecast playback you need to include Google's Chromecast SDK, which is a JavaScript file. Please check the link below to learn how to include this library:

- [https://developers.google.com/cast/docs/developers#chrome](https://developers.google.com/cast/docs/developers#chrome)

- `<script type="text/javascript" src="//www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"></script>`

Once this SDK is imported THEOplayer will automatically add the Chromecast casting capability to your player.

##### Android SDK

In order to enable chromecast, a few extra steps need and can be taken. 

1. Upgrade THEOplayer: Use a version of THEOplayer’s Android SDK ≥ 1.0.9.

2. Include the Cast Framework and Media Router libraries

To add chromecast support the first thing you need is to include the Cast Framework and Media Router libraries under the dependencies node in your build.gradle file.

    implementation 'com.android.support:mediarouter-v7:25.3.1'
    implementation 'com.google.android.gms:play-services-cast-framework:10.2.1'

3. Set CastOptionsProvider

To enable chromecast on android a CastOptionsProvider should be specified. This class contains the configuration for chromecast on Android. A DefaultCastOptionsProvider is provided as part of the THEOplayer Android SDK. This OptionsProvider associates the THEOplayer chromecast receiver with your sender application. You will need to register this class in your AndroidManifest.xml file within a meta-data tag under your application node.

```java
<meta-data
        android:name="com.google.android.gms.cast.framework.OPTIONS_PROVIDER_CLASS_NAME"
        android:value="com.theoplayer.android.api.cast.chromecast.DefaultCastOptionsProvider"/>
```

**Optional: Add routing button to your app**

In order to get this button to appear in your application's Toolbar, the easiest way is to include it in the menu XML file for your Activity.

1. In your res folder add a menu folder

2. Add a activity_main_menu.xml file

3. Add the following contents to this file

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

4. Initialize this new MenuItem in the onCreateOptionsMenu method of your Activity (Make sure you have an AppCompatActivity).
```java
@Override
public boolean onCreateOptionsMenu(Menu menu) {
        super.onCreateOptionsMenu(menu);
        getMenuInflater().inflate(R.menu.activity_main_menu, menu);
        CastButtonFactory.setUpMediaRouteButton(getApplicationContext(),
            menu, R.id.media_route_menu_item);
        return true;
}
```
    
**Optional: Add MiniController to your app**

In your main activity xml add the following fragment

```java
<fragment
        android:id="@+id/castMiniController"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        android:visibility="gone"
        class="com.google.android.gms.cast.framework.media.widget.MiniControllerFragment" />
```

**Optional: Set a CastStrategy to your THEOplayerConfig**

THEOplayer Android SDK support Chromecast CastStrategy to define the joining behaviour.

```java
new THEOplayerConfig.Builder()
    .castStrategy(CastStrategy.AUTO)
    .build();
```

**Notes**

- Please not that chromecast support is not available for the Android TV SDK.  

- For more information please visit this [link](https://support.theoplayer.com/hc/en-us/articles/214343065-Player-API#CastConfiguration).

##### iOS SDK

In order to enable Chromecast, a few extra steps need to be taken.

1. Upgrade THEOplayer: Use a version of THEOplayer’s iOS SDK ≥ 1.0.3

2. Setup the Cast Framework

**iOS 13 Warning:** Apple permissions changes to iOS 13 and Xcode 11 have impacted the Google Cast iOS SDK in a number of ways. Please see the [iOS 13 Changes](https://developers.google.com/cast/docs/ios_sender/ios13_changes) document to see how your app will be impacted.

**iOS 12 Warning:** If developing using Xcode 10 and targeting iOS devices running iOS 12 or higher, the "Access WiFi Information" capability is required in order to discover and connect to Cast devices.

    https://developers.google.com/cast/docs/ios_sender_setup

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

Download the Dynamic Cast Framework from the [google developer website](https://developers.google.com/cast/docs/ios_sender/). Libraries without [guest mode](https://developers.google.com/cast/docs/guest_mode) have been provided for situations where your app does not require the feature or you do not wish to require Bluetooth® permissions, which have been introduced in iOS 13. Please see the [iOS 13 Changes](https://developers.google.com/cast/docs/ios_sender/ios13_changes) document for more information.

3. Set GCKCastContext

To enable Chromecast on iOS the GCKCastContext shared instance should be set with a GCKCastOptions.

```swift
let options = GCKCastOptions(receiverApplicationID: "A1B2C3D4")
GCKCastContext.setSharedInstanceWith(options)
```

or use the default THEOplayer cast options.

```swift
THEOplayerCastHelper.setGCKCastContextSharedInstanceWithDefaultCastOptions()
```
That 's it. When chromecast enabled devices are discovered, the player will display a Chromecast button. The player also works nicely together with the Chromecast controls that are part of the Chromecast Framework, (e.g. [GCKUICastButton](https://developers.google.com/cast/docs/ios_sender_integrate#add_a_cast_button) or [the mini controller](https://developers.google.com/cast/docs/ios_sender_integrate#add_mini_controllers)).

## Chromecast Receiver app

##### Web SDK

By default THEOplayer's receiver app will be used. If you have your own receiver app than you can overwrite this by adjusting the [PlayerConfiguration](https://support.theoplayer.com/hc/en-us/articles/214343065-Player-API#CastConfiguration)'s cast property.

##### Android SDK

If you need custom settings for your Chromecast integration (e.g. a custom receiver id) you can create your own CastOptionsProvider by subclassing com.google.android.gms.cast.framework.OptionsProvider and implementing the getCastOptions method.

```java
@Override
public CastOptions getCastOptions(Context context) {
        return new CastOptions.Builder()
            .setReceiverApplicationId(DEFAULT_APP_ID)
            .build();
}
```

##### iOS SDK
By default THEOplayer’s receiver app will be set when you set `THEOplayerCastHelper.setGCKCastContextSharedInstanceWithDefaultCastOptions()`. A custom receiver app can be configured through `GCKCastContext.setSharedInstanceWith(GCKCastOptions(receiverApplicationID: "A1B2C3D4"))`