# Getting started

<!-- -->

OptiView Rebranding

OptiView Player is the new name for THEOplayer as part of the OptiView product suite. During the transition, you may still see references to THEOplayer. OptiView Player and THEOplayer refer to the same product.

## Installation[​](#installation "Direct link to Installation")

1. Create a new Jetpack Compose app or set up Compose in your existing Android app by following [the Compose quick start guide](https://developer.android.com/jetpack/compose/setup).

2. Add the native OptiView Player Android SDK to your project by following [these installation instructions](https://github.com/THEOplayer/theoplayer-sdk-android#installation).

3. Add the OptiView Player Maven repository to your project-level `settings.gradle` file:

   <!-- -->

   * Groovy
   * Kotlin

   ```groovy
   dependencyResolutionManagement {
       repositories {
           google()
           mavenCentral()
           maven { url "https://maven.theoplayer.com/releases" }
       }
   }

   ```

   ```kotlin
   dependencyResolutionManagement {
       repositories {
           google()
           mavenCentral()
           maven { url = uri("https://maven.theoplayer.com/releases") }
       }
   }

   ```

4. Add Open Video UI as a dependency in your module-level `build.gradle` file:

   <!-- -->

   * Groovy
   * Kotlin

   ```groovy
   dependencies {
       implementation "com.theoplayer.theoplayer-sdk-android:core:5.+"
       implementation "com.theoplayer.android-ui:android-ui:1.+"
   }

   ```

   ```kotlin
   dependencies {
       implementation("com.theoplayer.theoplayer-sdk-android:core:5.+")
       implementation("com.theoplayer.android-ui:android-ui:1.+")
   }

   ```

## Usage[​](#usage "Direct link to Usage")

### Default UI[​](#default-ui "Direct link to Default UI")

`DefaultUI` provides a fully-featured video player experience with minimal setup.

```kotlin
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.theoplayer.android.api.THEOplayerConfig
import com.theoplayer.android.api.source.SourceDescription
import com.theoplayer.android.ui.DefaultUI
import com.theoplayer.android.ui.theme.THEOplayerTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            THEOplayerTheme(useDarkTheme = true) {
                DefaultUI(
                    config = THEOplayerConfig.Builder().build(),
                    source = SourceDescription.Builder("https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8")
                        .build(),
                    title = "Big Buck Bunny"
                )
            }
        }
    }
}

```

See [the demo app](https://github.com/THEOplayer/android-ui/blob/main/app/src/main/java/com/theoplayer/android/ui/demo/MainActivity.kt) for a complete and working example.

### Custom UI[​](#custom-ui "Direct link to Custom UI")

If you want to fully customize your video player layout, you can use a `UIController` instead.

```kotlin
setContent {
    UIController(
        config = THEOplayerConfig.Builder().build(),
        source = SourceDescription.Builder("https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8")
            .build(),
        // Choose your own layout using the provided components (or your own!)
        bottomChrome = {
            SeekBar()
            Row {
                PlayButton()
                MuteButton()
                Spacer(modifier = Modifier.weight(1f))
                FullscreenButton()
            }
        }
    )
}

```
