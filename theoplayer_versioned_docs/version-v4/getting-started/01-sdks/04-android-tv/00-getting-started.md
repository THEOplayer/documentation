# Getting started on Android TV Legacy (4.12.x)

:::info Android TV

The latest THEOplayer Android SDK (5.0.0+) is compatible both with Android mobile and Android TV. We do not have a separate SDK for each platform.

You can follow the guide: [Getting started on Android](../02-android/00-getting-started.md).

:::

This guide will help you to integrate the THEOplayer Android SDK into your project, and cover the following topics:

1. [Importing the THEOplayer SDK](#importing-the-theoplayer-android-sdk)
2. [Using the THEOplayerView](#using-the-theoplayerview)
3. [Setting a video source](#setting-a-video-source)
4. [Adding a player event listener](#adding-a-player-event-listener)

The THEOplayer Android SDK can be used for Android TV devices using Android 5.0+ (minSdkVersion 21).

:::info Maven / Gradle / Jitpack

THEOplayer v2.83.0 and above can be managed through Jitpack. Refer to <a href="https://github.com/THEOplayer/theoplayer-sdk-android" target="_blank">https://github.com/THEOplayer/theoplayer-sdk-android</a> for more information.

:::

## Prerequisites

1. Download and install [Android Studio](https://developer.android.com/studio/index.html).
2. Obtain a THEOplayer Android SDK through the THEOplayer Developer Portal at [https://portal.theoplayer.com](https://portal.theoplayer.com/login).
   - And have the `LICENSE` string handy, as depicted in the screenshot below, because you'll need it when configuring your video player.
     ![](https://cdn.theoplayer.com/images/git/theoplayer-android-sdk-license-string.png)

## Importing the THEOplayer Android SDK

Manually importing the THEOplayer Android SDK Library can be done following these steps:

1. [Prepare your application](https://developer.android.com/training/tv/start/start.html) to be compatible with Android TV.
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

In order to use THEOplayer in an Android TV app, you will need the THEOplayerView as the central component. This class can be loaded in a Layout and this will create a new player object for you to interact with.

**Important:**

- In order to play online streams or ads, the AndroidManifest.xml of your app needs to declare that it [uses the internet permission](https://developer.android.com/training/basics/network-ops/connecting.html).
- In order to react to the activity state, users need to call the onResume, onPause and onDestroy when the matching methods are called in the activity using the THEOplayerView.

```java
public class MainActivity extends Activity

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

```xml
<com.theoplayer.android.api.THEOplayerView
    android:id="@+id/theoplayer_view"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

Once you have the THEOplayerView in your layout, you can get a reference to it by using the findViewById-method.

In addition to setting the `INTERNET` permission in `AndroidManifest.xml`,
you also need to configure your license string in this file, as demonstrated in the snippet below
through the `<meta-data ...` tag.

```xml
<application>
    <meta-data
        android:name="THEOPLAYER_LICENSE"
        android:value="your_license_here" />
</application>
```

Don't forget to swap `your_license_here` with your license string, as mentioned in the ["Prerequisites"](#prerequisites).

## Setting up the THEOplayerView using Java

Next to using XML to configure your view, you can also instantiate the view programmatically in Java. This can be done in the following way:

```java
THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
    .chromeless(false)
    .license("your_license_here")
    .build();
THEOplayerView tpv = new THEOplayerView(activity, playerConfig);
```

Don't forget to swap `your_license_here` with your license string, as mentioned in the ["Prerequisites"](#prerequisites).

This view can then be placed inside another view and positioned in your layout.

## Using the player

Once a player is created and set in your view, you can start interacting with the player instance using the THEOplayer API.

### Setting a video source

Create a SourceDescription object and set the player's source:

```java
SourceDescription sourceDescription = SourceDescription.Builder
    .sourceDescription("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")
    .ads(
            THEOplayerAdDescription.Builder.adDescription("https://cdn.theoplayer.com/demos/preroll.xml")
                    .timeOffset("10")
                    .skipOffset("3")
                    .build())
    .poster("http://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg")
    .build();
tpv.getPlayer().setSource(sourceDescription);
```

Notice how the `getPlayer()` method returns a [`Player`](pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/player/Player.html).
You use the `Player` interface to set a video stream, attach event listeners, configure autoplay, etc.

### Adding a player event listener

This example shows you how to listen to the player play event.

```java
EventListener<PlayEvent> eventListener = new EventListener<PlayEvent>() {
    @Override
    public void handleEvent(PlayEvent event) {
        System.out.println(event.getCurrentTime());
    }
};
tpv.getPlayer().addEventListener(PlayerEventTypes.PLAY, eventListener);
```

### Remove a player event listener

This example shows you how to remove an event listener of the play event.

```java
tpv.getPlayer().removeEventListener(PlayerEventTypes.PLAY, eventListener);
```
