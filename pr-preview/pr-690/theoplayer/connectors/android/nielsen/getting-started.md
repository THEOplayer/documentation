# THEOplayer Android SDK Nielsen Connector

The Nielsen connector provides a Nielsen integration for THEOplayer Android SDK.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

The THEOplayer Android SDK Nielsen Connector requires the application to import the THEOplayer Android SDK since the connector relies on its public APIs. For more details, check out our [Getting started on Android](https://www.theoplayer.com/docs/theoplayer/getting-started/sdks/android/getting-started/) guide.

## Installation[​](#installation "Direct link to Installation")

After setting up the THEOplayer Android SDK, in your **module** level `build.gradle` file add the THEOplayer Android SDK Nielsen Connector and the Nielsen SDK dependencies:

```groovy
implementation 'com.theoplayer.android-connector:nielsen:+'
implementation 'com.nielsenappsdk.global:ad:9.1.0.0'

```

Also in the `build.gradle` file, specify the Nielsen maven repository inside the repositories section:

```groovy
repositories {
    maven { url 'https://maven.theoplayer.com/releases/' }
    maven { url 'https://raw.githubusercontent.com/NielsenDigitalSDK/nielsenappsdk-android/master/'}
}

```

## Usage[​](#usage "Direct link to Usage")

### Setting up the Nielsen Connector[​](#setting-up-the-nielsen-connector "Direct link to Setting up the Nielsen Connector")

```kotlin
val theoplayerView: THEOplayerView

private fun setupNielsen() {
    val appId = "your_nielsen_app_id"
    val debug = true
    nielsenConnector = NielsenConnector(applicationContext, theoplayerView.player, appId, debug)
}

```

### Updating metadata[​](#updating-metadata "Direct link to Updating metadata")

Whenever a new source is set on the player, update the current metadata as follows:

```kotlin
theoplayerView.player.source = sourceDescription
nielsenConnector?.updateMetadata(hashMapOf(
    "assetid" to "C112233",
    "program" to "programName"
))

```

### Destroying / Cleaning up[​](#destroying--cleaning-up "Direct link to Destroying / Cleaning up")

To release listeners and resources, call destroy whenever the Nielsen Connector is no longer needed.

```kotlin
nielsenConnector?.destroy()

```

Note:

* After destroying a Nielsen Connector instance, it can no longer be used. If needed, a new instance should be created.
