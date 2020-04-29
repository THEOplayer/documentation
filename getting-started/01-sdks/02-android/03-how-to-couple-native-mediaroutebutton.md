# How to couple the native MediaRouteButton to THEOplayer

This page shows how to wire up the Android's native MediaRouteButton to THEOplayer. Your MediaRouteButton will be provided with the following behaviour:

- Clicking the button while disconnected will start a chromecast session. The currently set source will start playing.
- Clicking the button while casting will stop the current session. The player will be paused.

## Objectives

- Extend the MediaRouteButton and MediaRouteActionProvider
- Wire up the button with an activity and THEOplayerView

## Step-by-step guide
You can modify the behaviour of the MediaRouteButton by creating a subclass of the MediaRouteButton and overriding the performClick or showDialog method. Below, we provide an example implementation which uses the cast API of an attached TheoPlayerView.

```java
class TheoMediaRouteButton(context: Context): MediaRouteButton(context) {
    companion object {
        var theoPlayerView: THEOplayerView? = null
    }
 
    override fun showDialog(): Boolean {
        val chromecast = theoPlayerView?.cast?.chromecast
 
        if (chromecast == null) {
            return super.showDialog()
        } else if (chromecast.isCasting) {
            chromecast.stop()
            return false
        } else {
            chromecast.start()
            return true
        }
    }
}
```

You can afterwards create a subclass of the MediaRouteActionProvider, overriding the onCreateMediaRouteButton allows us to insert our previously created MediaRouteButton.

```java
class TheoMediaRouteActionProvider(context: Context) : MediaRouteActionProvider(context) {
    override fun onCreateMediaRouteButton(): MediaRouteButton {
        return TheoMediaRouteButton(context)
    }
}
```

Finally, you will add the cast button to your activity. As explained here, you should first add a menu item or a MediaRouteButton in the xml file that defines your menu, and use CastButtonFactory to wire it up with the framework. THEOplayer requires one extra step, and that is wiring up the TheoPlayerView with the TheoMediaRouteButton. Do not forget to unset the TheoPlayerView when you destroy the activity to avoid memory leaks.

An example menu:

```xml
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto">
    <item
        android:id="@+id/media_route_menu_item"
        android:title="Cast"
        app:actionProviderClass="com.your-project.TheoMediaRouteActionProvider"
        app:showAsAction="always" />
</menu>
```

The wiring code that has to be added to your activity

```java
override fun onCreateOptionsMenu(menu: Menu): Boolean {
    super.onCreateOptionsMenu(menu)
    menuInflater.inflate(R.menu.activity_main_menu, menu)
 
    if (isGooglePlayServicesAvailable(applicationContext)) {
        TheoMediaRouteButton.theoPlayerView = theoPlayerView
        CastButtonFactory.setUpMediaRouteButton(applicationContext, menu, R.id.media_route_menu_item)
    }
 
    return true
}
 
override fun onDestroy() {
    super.onDestroy()
    TheoMediaRouteButton.theoPlayerView = null
    theoPlayerView.onDestroy()
}
```