# How to implement a basic latency manager for CMAF Low Latency DASH Streams

This how-to-guide explains how to implement a basic latency manager for the THEOplayer SDK's. This plugin is only applicable for CMAF Low Latency DASH streams. 

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   Yes   |      Yes     |    No   |  No  |        Yes      |        Yes      |

## Prerequisites

##### Web SDK

1. Setup a basic HTML file and include the THEOplayer library and Low latency DASH stream. You can also follow this guide: [How to get started with THEOplayer Web SDK](../../getting-started/01-sdks/01-web/00-getting-started.md).

2. You would need a Web SDK of THEOplayer with basic configuration to setup your environment. You can create an SDK by logging into your [THEO Portal](https://portal.theoplayer.com/login) account.

##### Android [TV] SDK

1. Setup a Android Project and include the THEOplayer library and Low latency DASH stream. You can also follow this guide: [How to get started with THEOplayer Android SDK](../../getting-started/01-sdks/02-android/00-getting-started.md).

2. You would need a Android SDK of THEOplayer with basic configuration to setup your environment. You can create an SDK by logging into the your [THEO Portal](https://portal.theoplayer.com/login) account.

## Latency manager setup

##### Web SDK

1. Download the [latency-manager js file (zipped)](https://cdn.theoplayer.com/LatencyManager.zip). Extract the zipped file and save it in the same location as your index.html file.

2. Add the latencymanager.js file in your script tags:

```html
<script type='text/javascript' src='latencymanager.js'></script> <!-- adds the Latency manager JS file -->
```

3. Initialise the `latencymanager` with the following properties for the player. Example as below: 

```html
<script>
  var element = document.querySelector('.theoplayer-container'); 
  var player = new THEOplayer.Player(element, { 
    libraryLocation : 'https://cdn.myth.theoplayer.com/<your key from the THEO portal>/'
  });

  player.source = {
    sources : [{
      src : '<DASH stream (.mpd format)>',
      type : 'application/dash+xml',
      lowLatency: true,  //This setting must be true when using Low-Latency CMAF with ABR.
      liveOffset : 1.0   //The offset in seconds used to determine the live point. This live point is the end of the manifest minus the provided offset.
    }]
  };

  // using JSON syntax, create an array with the stated objects, and initialise the appConfig variable
  var appConfig = {
    "config" : [{
    "targetlatency" : 2000,
    "seekwindow"    : 1000,
    "latencywindow" : 100,
    "encoderlatency" : 0,
    "useencodertime" : false,
    "interval"      : 40,
    "fireupdate"    : false,
    "ratechange"    : 0.08,
    "sync"          : true,
    "disableonpause" : false,
    "timeserver": "https://time.akamai.com/?iso&ms"}]};

    // initialise the latency manager
    latencymanager = THEOplayer.initializeLatencyManager(player, appConfig);
    latencymanager.configure (appConfig.config[0]);
</script>
```

##### Android [TV] SDK

1. Download the [latency-manager js file (zipped)](https://cdn.theoplayer.com/LatencyManager.zip). Extract the zipped file and save it in the assests folder of the Android project. 

2. Add the Custom JS code to the `theoplayerView`, You can also read the article [How to add CSS or JavaScript files to an Android/iOS project](https://docs.portal.theoplayer.com/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)

3. Add a new `LatencyManger`, `LatencyManagerConfiguration`, `LatencyManagerConfigurationBuilder` & `LatencyParameters` Java class and add repective code as like [demo project](https://github.com/THEOplayer/android-sdk-low-latency-project)

4. Add the below params of THEOplayer Source as well:

```java
// Creating a TypedSource builder that defines the location of a single stream source
TypedSource typedSource = TypedSource.Builder
        .typedSource()
        .src(getString(R.string.defaultSourceUrl))
        .liveOffset(1.0)
        .lowLatency(true)
        .timeServer("https://time.akamai.com/?iso&ms=true") //There is a Timeserver Offered by THEOplayer also https://time.theoplayer.com
        .type(SourceType.DASH)
        .build();


// Creating a SourceDescription builder that contains the settings to be applied as a new THEOplayer source.
SourceDescription.Builder sourceDescription = sourceDescription(typedSource);

//Setting the source to the player
player.setSource(sourceDescription.build());
```

4. Initialise the `latencymanager` with the following properties for the player. Example as below: 

```java
//Intialise the Latency Manager Configuration
LatencyManagerConfiguration config = new LatencyManagerConfigurationBuilder()
        .targetLatency(2000)  //target latency value the player must acheive
        .timeServer("https://time.theoplayer.com") //instance of TimeServer must support timeserver.getServerTime() : Date()
        .interval(200) //frequency of the update event to be fired 200 is in ms
        .fireUpdate(true) //To keep sending the data between the Javascript and Java
        .latencyWindow(250) //window around targetlatency the manager will consider in sync
        .rateChange(0.08)  ////maximum increase/decrease in speed of the player
        .seekWindow(5000)  // //window around targetlatency the manager considers to fire seek command rather than change playbackrate
        .sync(true).build(); //Set to true to use the Latency Manager to sync with the configs 

//Intialise the Latency Manager with the defined config
latencyManager = new LatencyManager(viewBinding.theoPlayerView,config);
```

Note: The default values of the Latency Manager params are as below:

```javascript
this.targetlatency = 5000;
this.timeserver = "https://time.theoplayer.com";
this.interval = 200;
this.fireupdate = true;
this.latencywindow = 250;
this.ratechange = 0.08;
this.seekwindow = 5000;
this.sync = true;            
```

## Resources
- [Getting started with the Web SDK](https://docs.portal.theoplayer.com/getting-started/01-sdks/01-web/00-getting-started.md)
- [How to get started with THEOplayer Android SDK](https://docs.portal.theoplayer.com/getting-started/01-sdks/02-android/00-getting-started.md)
- [How to add CSS or JavaScript files to an Android/iOS project](https://docs.portal.theoplayer.com/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)
- [Low Latency Android demo project](https://github.com/THEOplayer/android-sdk-low-latency-project)