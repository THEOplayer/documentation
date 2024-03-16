# Legacy Android SDK (4.12.x) customization

If you want to use custom CSS or JavaScript files you can add the cssPaths and jsPaths properties to your layout.

When a relative path is used, it will be relative to the assets folder.

XML Configuration

```xml
<com.theoplayer.android.api.THEOplayerView
    android:id="@+id/theo_player_view"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    app:defaultCss="true"
    app:cssPaths="path/to/style1.css"
    app:jsPaths="path/to/script1.js" />
```

Java Configuration:

```java
THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
        .chromeless(false)
        .defaultCss(true)
        .cssPaths("path/to/style1.css","path/to/style2.css")
        .jsPaths("path/to/script1.js","path/to/script2.js")
        .build();
THEOplayerView tpv = new THEOplayerView(this, playerConfig);
```

## Custom CSS and the Chromeless flag

You can send messages from within a custom JavaScript file to the Legacy Android SDK (4.12.x).

### 1. Register a message listener in your Legacy Android app:

```java
THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
        .jsPaths("path/to/script.js")
        .build();
THEOplayerView tpv = new THEOplayerView(this, playerConfig);
tpv.addJavaScriptMessageListener("messagetype", new MessageListener() {
    @Override public void handleMessage(String message) {
        System.out.println("Received message from JavaScript: " + message);
    }
});
```

### 2. Send a message in your custom JavaScript file (script.js):

To send a message the theoplayerAndroid.sendMessage object should be used. The theoplayerAndroid object is provided in the global scope by the THEOplayer Legacy Android SDK (4.12.x).

```java
/* this example sends a message every 10 seconds */
setInterval(function() {
    theoplayerAndroid.sendMessage('messagetype', 'message');
}, 10000)
```

## Custom FullScreen Activity

If you want to customize the behavior and/or look of the full screen activity, you can do this by using a custom full screen activity class. The steps to take this are given below.

### Extend the FullScreenActivity class

To do this, you first need to make a class that extends FullScreenActivity, for example:

```java
public class CustomFullScreenActivity extends FullScreenActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        View overLay = this.getLayoutInflater().inflate(R.layout.fullscreen_overlay, null);
        this.addContentView(overLay, new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
    }

    public void onPauseButtonClick(View view) {
        getTHEOplayerView().getPlayer().pause();
    }
}
```

Of which their layout xml could be like this:

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
 xmlns:tools="http://schemas.android.com/tools"
 android:layout_width="match_parent"
 android:layout_height="match_parent"
 android:orientation="vertical"
 tools:context=".mainactivity.CustomFullScreenActivity">
    <Button
     android:layout_width="wrap_content"
     android:layout_height="wrap_content"
     android:onClick="onPauseButtonClick"
     android:text="pause" />
</FrameLayout>
```

### Set your custom FullScreenActivity class for a THEOplayerView

This class could then be set for a certain THEOplayerView object (tpv) like this:

```java
tpv.getFullScreenManager().setFullscreenActivity(CustomFullScreenActivity.class);
```
