# Agama

Agama is an analytics solution maintained by [Agama Technologies](https://www.agama.tv/). THEOplayer offers a pre-integration for this service.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     No      |   No    |    No    |       No       |   Unverified   |

## Prerequisites

##### Web SDK

Agama requires you to load the Agama library and configure it through JavaScript. Agama needs to be configured through the PlayerConfiguration and through the SourceConfiguration. The following section describes how this can be done.

##### Android (TV) SDK

Agama requires you to have the `agama` feature enabled in your SDK build. Agama needs to be configured through the PlayerConfiguration and through the SourceConfiguration. The following section describes how this can be done.
If you do not have this feature enabled in your SDK, or are unsure, please contact your CSM or Service Desk for confirmation.

##### iOS (/tvOS) SDK

Agama requires you to have the `agama` feature enabled in your SDK build. Agama needs to be configured through the PlayerConfiguration and through the SourceConfiguration. The following section describes how this can be done.
If you do not have this feature enabled in your SDK, or are unsure, please contact your CSM or Service Desk for confirmation.

## Documentation

##### Web SDK

The player configuration should include the [AgamaPlayerConfiguration](pathname:///theoplayer/v7/api-reference/web/interfaces/AgamaPlayerConfiguration.html) object.

```js
var player = new THEOplayer.Player(element, {
  libraryLocation: '/path/to/your-theoplayer-folder/',
  analytics: [
    {
      integration: 'agama',
      config: 'emp_service=http://127.0.0.1:8191/report;report_interval=60;id_report_interval=240;operator_id=fooSoo',
    },
  ],
});
```

Once a player is configured, an Agama EMP client instance is created.

The player's source configuration should include the [AgamaSourceConfiguration](pathname:///theoplayer/v7/api-reference/web/interfaces/AgamaSourceConfiguration.html) object.

```js
player.source = {
    [...]
    analytics : [{
        integration : 'agama',
        asset : 'Asset Name',
        streamType : 'vod'
    }]
};
```

Once the player's source is set, a dynamic streaming session is started, and Agama EMP is ready to monitor the usage and quality of the video.

##### Android (TV) SDK

The player configuration should include the [AgamaPlayerConfiguration](pathname:///theoplayer/v7/api-reference/web/interfaces/AgamaPlayerConfiguration.html) object:

```java
public THEOplayerConfig theoplayerConfig = new THEOplayerConfig.Builder()
    ...
    .analytics(
        agamaPlayerConfiguration("//config")
        .application("//applicationName")
        .applicationVersion("//applicationVersion")
        .userAccountID("//userAccountID")
        .logLevel(//AgamaLogLevel)
        .build()
    )
    .castStrategy(CastStrategy.AUTO)
    .hlsDateRange(true);
}
public THEOplayerView tpv = new THEOplayerView(this, theoplayerConfig)
```

Once the player is configured, an Agama EMP client is created.
The player source configuration should include the [AgamaSourceConfiguration](pathname:///theoplayer/v7/api-reference/web/interfaces/AgamaSourceConfiguration.html) object in the analytics tag while configuring the [SourceDescription](pathname:///theoplayer/v7/api-reference/web/interfaces/SourceDescription.html):

```java
public SourceDescription sourceDescription =
    sourceDescription(
            ...
    ).analytics(
        agamaSourceConfiguration(asset: //agama asset name, streamType: //StreamType (.LIVE or .VOD))
            .cdn("Agama CDN")
            .contentDescription("//Your content description")
            .contentTitle("//Your content title")
            .contentType("//Your content type")
            .serviceName(//AgamaServiceName.)
    ).build())
tpv.getPlayer().setSource(sourceDescription)
```

Once the player's source is set, a dynamic streaming session is started, and Agama EMP is ready to monitor the usage and quality of the video.

Example Setup:

```java
public THEOplayerConfig theoplayerConfig = THEOplayerConfig.Builder()
                .chromeless(false)
                .cssPaths("/data/data/com.theoplayer.demo/appDataCss.css",
                        "style.css")
                .jsPaths("script.js")
                .googleIma(true)
                .ads(ads)
                .analytics(
                    agamaPlayerConfiguration("agg_server_ip=test-1.agamatech.se;agg_server_port=8050;report_interval=60;id_report_interval=240;operator_id=fooSoo;")
                    .application("THEO application demo")
                    .applicationVersion("1.0.0")
                    .userAcountID("THEO user demo")
                    .logLevel(AgamaLogLevel.FATAL)
                    .build()
                )
                .castStrategy(CastStrategy.AUTO)
                .hlsDateRange(true);

THEOplayerView tpv = new THEOplayerView(this, theoplayerConfig);

public SourceDescription agamaSourceDescription =
    sourceDescription(
                typedSource("http://contentserver-1.kanto.indigo:8080/videos/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd")
                    .setExperimentalRenderingEnabled(experimental)
                    .build()
            ).analytics(
                agamaSourceConfiguration("agama", StreamType.VOD)
                    .cdn("THEO cdn demo")
                    .contentDescription("THEO content description demo")
                    .contentTitle("THEO title demo")
                    .contentType("THEO content type demo")
                    .serviceName(AgamaServiceName.SVOD)
                    .build());

tpv.getPlayer().setSource(agamaSourceDescription);
```

##### iOS (/tvOS) SDK

The player configuration should include the [AgamaPlayerConfiguration](pathname:///theoplayer/v7/api-reference/web/interfaces/AgamaPlayerConfiguration.html) object:

```swift
let agamaPlayerConfiguration = AgamaPlayerConfiguration(
    config: //String,
    logLevel: //THEOplayerSDK.AgamaLogging,
    application: //String?, automatically detected from host if nil is provided,
    applicationVersion: //String?, automatically detected from host if nil is provided,
    userAccountID: //String?
)
var theoplayer = THEOplayer(configuration: THEOplayerConfiguration(..., analytics: [agamaPlayerConfiguration]))
...
```

Once the player is configured, an Agama EMP client is created.
The player source configuration should include the [AgamaSourceConfiguration](pathname:///theoplayer/v7/api-reference/web/interfaces/AgamaSourceConfiguration.html) object in the analytics tag:

```swift
let agamaSourceConfiguration = AgamaSourceConfiguration(
    asset: //String,
    streamType: //StreamType, either live or vod,
    serviceName: //AgamaServiceName, name of the service,
    cdn: //String?,
    contentTitle: //String?,
    contentType: //String?,
    contentDescription: //String?
)
theoplayer.source = SourceDescription(..., analytics: [agamaSourceConfiguration], ...)
```

Once the player's source is set, a dynamic streaming session is started, and Agama EMP is ready to monitor the usage and quality of the video.

Example Setup:

```swift
let agamaPlayerConfiguration = AgamaPlayerConfiguration(
    config: "emp_service=http://127.0.0.1:8191/report;report_interval=60;id_report_interval=240;operator_id=fooSoo",
    logLevel: .fatal,
)
var theoplayer = THEOplayer(configuration: THEOplayerConfiguration(chromeless: false, analytics: [agamaPlayerConfiguration]))
...
let agamaSourceConfiguration = AgamaSourceConfiguration(
    asset: //String,
    streamType: StreamType.live,
    serviceName: AgamaServiceName.live
)
theoplayer.source = SourceDescription(
    sources: TypedSource(src: "elephantsdream", type: "application/xmpegurl"),
    analytics: [agamaSourceConfiguration]
)
```

## Related resources

- [Custom Analytics Integration](06-custom-analytics-integration.md)
