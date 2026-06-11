# Setting up Chromecast

The Open Video UI for Android has integrated support for Chromecast.

* When using the `DefaultUI`, the Chromecast button is automatically added in the top right corner of the player.
* When creating a custom UI using a `UIController`, you can add a `ChromecastButton` component anywhere you like. You should also add a `ChromecastDisplay` to show a "Playing on Chromecast" message while casting.

However, you need to perform some additional setup to get it fully working.

## Install the THEOplayer Cast integration[​](#install-the-theoplayer-cast-integration "Direct link to Install the THEOplayer Cast integration")

The Chromecast support requires the THEOplayer Cast integration to be included in your app. We'll also need to interact with the Cast Application Framework directly, so we'll include that too:

build.gradle

```groovy
dependencies {
    implementation "com.theoplayer.theoplayer-sdk-android:core:7.+"
    implementation "com.theoplayer.theoplayer-sdk-android:integration-cast:7.+"
    implementation "com.google.android.gms:play-services-cast-framework:21.5.0"
    implementation "com.theoplayer.android-ui:android-ui:1.+"
}

```

Create the player manually using `rememberPlayer()`, and then create and add the cast integration:

MainActivity.kt

```kotlin
import com.theoplayer.android.api.cast.CastConfiguration
import com.theoplayer.android.api.cast.CastIntegrationFactory
import com.theoplayer.android.api.cast.CastStrategy

setContent {
    val player = rememberPlayer()
    LaunchedEffect(player) {
        player.theoplayerView?.let { theoplayerView ->
            // Add Chromecast integration
            val castConfiguration = CastConfiguration.Builder().apply {
                castStrategy(CastStrategy.AUTO)
            }.build()
            theoplayerView.player.addIntegration(
                CastIntegrationFactory.createCastIntegration(theoplayerView, castConfiguration)
            )
        }
    }

    DefaultUI(
        player = player
    )
}

```

## Initialize the `CastContext` during activity creation[​](#initialize-the-castcontext-during-activity-creation "Direct link to initialize-the-castcontext-during-activity-creation")

The Cast Application Framework handles automatic discovery of Chromecast receivers. However, this only works correctly if the `CastContext` is initialized immediately when your app's activity is constructed.

Therefore, make sure to call `CastContext.getSharedInstance(this)` inside `Activity.onCreate()`:

MainActivity.kt

```kotlin
import com.google.android.gms.cast.framework.CastContext

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Initialize Chromecast immediately, for automatic receiver discovery to work correctly.
        CastContext.getSharedInstance(this)

        setContent {
            // ...
        }
    }
}

```

## Use an `AppCompat` theme[​](#use-an-appcompat-theme "Direct link to use-an-appcompat-theme")

The Cast Application Framework creates dialogs such as [MediaRouteChooserDialog](https://developer.android.com/reference/androidx/mediarouter/app/MediaRouteChooserDialog) and [MediaRouteControllerDialog](https://developer.android.com/reference/androidx/mediarouter/app/MediaRouteControllerDialog) to start and control a cast session. However, because these dialogs inherit from [AppCompatDialog](https://developer.android.com/reference/androidx/appcompat/app/AppCompatDialog), you need to use theme based on `Theme.AppCompat` in your app:

src/main/res/values/themes.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- don't do this:
    <style name="Theme.MyAppTheme" parent="android:Theme.Material.Light.NoActionBar">
         instead, do this:
    -->
    <style name="Theme.MyAppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <!-- your app's theme colors go here -->
    </style>
</resources>

```
