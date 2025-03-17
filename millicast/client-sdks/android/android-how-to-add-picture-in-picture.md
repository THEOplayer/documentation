---
title: "How-to Add Picture in Picture"
id: android-how-to-add-picture-in-picture
---
**Picture-in-Picture (PiP) **was introduced with [Android 8.0 (API level 26)](https://developer.android.com/develop/ui/views/picture-in-picture). This feature allows you to support a floating video frame that persists even when the user sends the application to the background or switches to another application.


![](/img/millicast/632bcf2c4c46320da939d2dcb89b95c15e2ba9c29826b7fb28d866c8-mobile-picture-in-picture.png)



Refer to the [Interactive Player](https://github.com/dolbyio-samples/rts-app-android-viewer/tree/main/interactiveplayer) sample application to learn more about implementing the code needed for PiP feature in a fully functioning Android App.

<GettingStartedAndroid />

## 1. Add a Centralized PipViewModel

Create a ViewModel called `PipViewModel` that manages the state of whether PiP mode is enabled or not. This ViewModel should expose a `StateFlow` or a `Flow` that emits the current state of PiP mode. 

Here's an example implementation using Hilt for dependency injection:

```kotlin
@HiltViewModel
class PipViewModel @Inject constructor() : ViewModel() {
    private val _isPipEnabled = MutableStateFlow(false)
    val isPipEnabled = _isPipEnabled.asStateFlow()

    fun enablePip(enable: Boolean) {
        viewModelScope.launch {
            _isPipEnabled.emit(enable)
        }
    }
}
```

### 2. Enable/Disable PiP mode from different screens

In the screens where you want to enable or disable PiP mode, inject the `PipViewModel` and call the `enablePip` method with the desired state.

```kotlin
@Composable
fun ExampleScreen(pipViewModel: PipViewModel) {
    // Disable PiP mode in this screen
    pipViewModel.enablePip(false)
    // ...
}
```

### 3. Add a utility function to enable PiP mode

Create a utility `@Composable` function that listens to the `isPipEnabled` flow from the `PipViewModel` and enters or exits PiP mode accordingly.

```kotlin
@Composable
fun EnablePipMode(enablePipMode: Boolean, content: @Composable () -> Unit) {
    val currentShouldEnterPipMode = rememberUpdatedState(newValue = enablePipMode)
    val context = LocalContext.current

    DisposableEffect(context) {
        val onUserLeaveBehavior: () -> Unit = {
            if (currentShouldEnterPipMode.value) {
                context.findActivity()
                    .enterPictureInPictureMode(PictureInPictureParams.Builder().build())
            }
        }

        context.findActivity().addOnUserLeaveHintListener(onUserLeaveBehavior)

        onDispose {
            context.findActivity().removeOnUserLeaveHintListener(onUserLeaveBehavior)
        }
    }

    content()
}
```

### 4. Add a utility function to check if the app is in PiP mode

Create a utility `@Composable` function that checks if the app is currently in PiP mode or not. This function can be used in different composables to show or hide views based on the PiP mode.

```kotlin
@Composable
fun rememberIsInPipMode(): Boolean {
    val activity = LocalContext.current.findActivity()
    var pipMode by remember { mutableStateOf(activity.isInPictureInPictureMode) }

    DisposableEffect(activity) {
        val observer = Consumer<PictureInPictureModeChangedInfo> { info ->
            pipMode = info.isInPictureInPictureMode
        }

        activity.addOnPictureInPictureModeChangedListener(observer)

        onDispose {
            activity.removeOnPictureInPictureModeChangedListener(observer)
        }
    }

    return pipMode
}
```

### 5. Setup your Activity to use PiP

In your `AndroidManifest.xml`, add the following attributes to your Activity to enable PiP mode:

```kotlin
<activity
    android:name=".MainActivity"
    android:configChanges="orientation|screenLayout|screenSize|smallestScreenSize"
    android:supportsPictureInPicture="true" />
```

### 6. Use the utility functions in your root composable

In your root composable (e.g., MainScreen), use the `EnablePipMode` and `rememberIsInPipMode` functions to manage the PiP mode and show/hide views accordingly.

```kotlin
@Composable
fun MainScreen(appViewModel: PipViewModel) {
    val currentShouldEnterPipMode by appViewModel.isPipEnabled.collectAsStateWithLifecycle()
    val inPipMode = rememberIsInPipMode()

    EnablePipMode(enablePipMode = currentShouldEnterPipMode) {
        // All app screens composable views
        if (!inPipMode) {
            // Show/hide your views
        }
    }
}
```

By following these steps, you should be able to add Picture-In-Picture playback functionality to your application. The `PipViewModel` manages the state of PiP mode, and you can enable or disable it from different screens. The utility functions handle entering and exiting PiP mode, as well as checking if the app is currently in PiP mode.
