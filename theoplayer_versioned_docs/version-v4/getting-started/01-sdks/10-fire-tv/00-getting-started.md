# Getting started on Fire TV Legacy (4.12.x)

:::info Fire TV

The latest THEOplayer Android SDK (5.0.0+) is compatible both with Android mobile and Fire TV. We do not have a separate SDK for each platform.

You can follow the guide: [Getting started on Android](../../../../../theoplayer/getting-started/01-sdks/02-android/00-getting-started.md).

:::

This guide will help you to integrate the THEOplayer Android SDK into your Fire TV project.

## Prerequisites

To start this guide you need the following:

1. An Amazon account linked to a Fire TV device (see how to set up your Fire TV [here](https://www.amazon.com/gp/help/customer/display.html?nodeId=G7HTKNXBW4GPXSH6)).
2. A Fire TV device with development mode activated.
3. A television/screen which supports an HDMI input.
4. Development workstation with an IDE and a web browser ( Firefox, Chrome, Safari etc. ).
5. Make sure that the Fire TV device and workstation are on the same local network (you should be able to ping the Fire TV device from your workstation).
6. An internet connection.
7. An Amazon development environment to connect to your Amazon Fire TV device [How to setup an Amazon development environment](https://developer.amazon.com/docs/fire-tv/setting-up-your-development-environment.html).

## System requirements

The THEOplayer Android SDK can be used for Fire TV devices using Android 5.0+ (minSdkVersion 21). Build your Android SDK through our [portal](https://portal.theoplayer.com).

Enable the `ExoPlayer` but exclude the `Chromecast` feature flags.

Clone the THEOplayer Android TV SDK - Starter project: https://github.com/THEOplayer/android-tv-sdk-starter-project or build your own, following [these guidelines](../04-android-tv/00-getting-started.md).

Make sure `minSdkVersion` is set to 21 in `app/build.gradle`.

There is no need to add any Amazon ExoPlayer dependencies, as these are built into the Fire TV SDK.

### THEOplayer license

Your SDK will include a THEOplayer license which you must specify as part of your setup. Your player license can be defined in one of the following ways:

**Passing the license through the PlayerConfiguration**

```java
// passing your license as a string
public static THEOplayerConfig.Builder getTHEOplayerConfigBuilder() {
return new THEOplayerConfig.Builder()
    .license("your_license_here");
}
```

```java
// passing your license as a URL
public static THEOplayerConfig.Builder getTHEOplayerConfigBuilder() {
return new THEOplayerConfig.Builder()
    .licenseUrl("your_licenseUrl_here");
}
```

**Passing the license through the manifest**

Define your `license` or a `licenseUrl` as a new key in the app's manifest.

Our Fire TV SDK allows configuring the license via metadata keys, which could be either `THEOPLAYER_LICENSE` or `THEOPLAYER_LICENSE_URL`.

`THEOPLAYER_LICENSE` must be an obfuscated license string.
`THEOPLAYER_LICENSE_URL` must be a valid URL to a license server.

You can define your license string, in the `AndroidManifest.xml`, which should look similar to the below snippet of code (replace `THEOPLAYER_LICENSE` with `THEOPLAYER_LICENSE_URL` if specifying the URL):

```java
<application>
    <meta-data
        android:name="THEOPLAYER_LICENSE"
        android:value="your_license_here" />
</application>
```

The license defined in the player configuration has higher precedence than the license provided in the app's manifest. If neither of these are defined, then the built-in license will be used.

## Importing the library

Importing the THEOplayer Android SDK Library can be done following these steps:

1. Prepare your application to be compatible with Fire TV.
2. In your Android Studio, go to File > New Module > Import .JAR / .AAR Package.
3. Navigate to the location where the THEOplayer Android SDK aar file is stored and select it.
4. Go to your project dependencies by going to File > Project Structure > dependencies tab.
5. Add a new dependency by clicking the plus sign in the top-right corner and choose Module Dependency. Select the THEOplayer SDK aar file and click OK.

Additionally, you can import the sources jar to be able to immediately see the API java source files with their documentation in Android Studio. Follow the following after successfully importing the library steps for that:

1. In the Projects Overview, set the view to the project view. You should now see “External Libraries”
2. Under “External Libraries” you should be able to find the theoplayer-android-tv SDK library, right click and select “Library Properties”.
3. In the top left corner of the Library Properties window, click the first green plus sign.
4. Find and select the theoplayer-android-tv SDK jar file and click ok.

## Using the THEOplayerView

In order to use THEOplayer in a Fire TV app, you will need the THEOplayerView as the central component. This class can be loaded in a Layout and this will create a new player object for you to interact with.

**Important:**

- In order to play online streams or ads, the `AndroidManifest.xml` of your app needs to declare that it [uses the internet permission](https://developer.android.com/training/basics/network-ops/connecting.html).
- In order to react to the activity state, users need to call the onResume, onPause and onDestroy when the matching methods are called in the activity using the THEOplayerView.

**N.B. If you cloned the [THEOplayer Android TV SDK - Starter project](https://github.com/THEOplayer/android-tv-sdk-starter-project) on GitHub, you can exclude this step.**

```java
public class MainActivity extends Activity {
    // ...
    @Override
    protected void onPause() {
        super.onPause();
        tpv.onPause();
    }
    @Override
    protected void onResume() {
        super.onResume();
        tpv.onResume();
    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
        tpv.onDestroy();
    }
    // ...
}
```

### Setting up the THEOplayerView using XML

When using XML to set your layout, you can add the following code to your XML file:

```java
<com.theoplayer.android.api.THEOplayerView
    android:id="@+id/theoplayer_view"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

Once you have the THEOplayerView in your layout, you can get a reference to it by using the findViewById-method.

**N.B. If you cloned the [THEOplayer Android TV SDK - Starter project](https://github.com/THEOplayer/android-tv-sdk-starter-project) on GitHub, you can exclude this step.**

## Setting up the THEOplayerView using Java

Next to using XML to configure your view, you can also instantiate the view programmatically in Java. This can be done in the following way:

```java
THEOplayerView view = new THEOplayerView(activity);
```

This view can then be placed inside another view and positioned in your layout.

**N.B. If you cloned the [THEOplayer Android TV SDK - Starter project](https://github.com/THEOplayer/android-tv-sdk-starter-project) on GitHub, you can exclude this step.**

## Using the player

Once a player is created and set in your view, you can start interacting with the player instance using the THEOplayer API.

### Setting a source

Create a SourceDescription object and set the player's source.

**N.B. If you cloned the [THEOplayer Android TV SDK - Starter project](https://github.com/THEOplayer/android-tv-sdk-starter-project) on GitHub, you can exclude this step.**

```java
SourceDescription sourceDescription = SourceDescription.Builder.sourceDescription("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")
        .ads(
                THEOplayerAdDescription.Builder.adDescription("https://cdn.theoplayer.com/demos/preroll.xml")
                        .timeOffset("10")
                        .skipOffset("3")
                        .build())
        .poster("http://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg")
        .build();
tpv.getPlayer().setSource(sourceDescription);
```

### Add a player event listener

This example shows you how to listen to the player play event.

**N.B. If you cloned the [THEOplayer Android TV SDK - Starter project](https://github.com/THEOplayer/android-tv-sdk-starter-project) on GitHub, you can exclude this step.**

```java
EventListener<PlayEvent> eventListener = new EventListener<PlayEvent>() {
    @Override
    public void handleEvent(PlayEvent event) {
        System.out.println(event.getCurrentTime());
    }
};
tpv.getPlayer().addEventListener(PlayerEventTypes.PLAY, eventListener);
```

### Add listeners for remote controls to your Activity (e.g. PlayerActivity.java)

This example shows you how to add listeners for your remote control.

**N.B. If you cloned the [THEOplayer Android TV SDK - Starter project](https://github.com/THEOplayer/android-tv-sdk-starter-project) on GitHub, you can exclude this step.**

````java
@Override
public boolean onKeyDown(int keyCode, KeyEvent event){
 boolean handled = false;
 System.out.println("KEY --" + keyCode + " -- " + event.getKeyCode());
 switch (keyCode){
   case KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE:
     if (theoPlayer.isPaused()) {
       theoPlayer.play();
     } else {
       theoPlayer.pause();
     }
   case KeyEvent.KEYCODE_BUTTON_A:
     // ... handle selections
     handled = true;
     break;
   case KeyEvent.KEYCODE_DPAD_LEFT:
     // ... handle left action
     handled = true;
     break;
   case KeyEvent.KEYCODE_DPAD_RIGHT:
     // ... handle right action
     handled = true;
     break;
 }
 return handled || super.onKeyDown(keyCode, event);
}
```pass the license in the manifest
````
