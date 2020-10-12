# Chromeless THEOplayer and React Native 

This how-to guide describes how to set-up the THEOplayer chromeless (Without default UI) in React Native application.

## General Information

The below code is tested with following versions:

- Yarn 1.19.1
- React Native 0.61.2
- React native TVOS 0.62.2-1
- Android studio 4.0
- JAVA 1.8
- Xcode 11.3
- THEOplayer 2.77.0
- Swift 5.1.

## Importing THEOplayer SDK

To import THEOplayer SDK in iOS, Android and tvOS, check out the article - [How to get started with React Native and THEOplayer](00-getting-started.md)

## Enable Chromless in THEOplayer SDK

### Android

1. Open file `TheoPlayerViewManager.java` in folder `app/src/main/java/com/theoplayerreactnative/`

2. In THEOplayer Configuration, set the `Chromeless` flag to `true`

```java
...  
    @Override
    protected THEOplayerView createViewInstance(final ThemedReactContext reactContext) {
        ...
        THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
                .chromeless(true) // Turn on chromeless
                .build();
 
        playerView = new THEOplayerView(reactContext.getCurrentActivity(), playerConfig);
        playerView.setLayoutParams(new LinearLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT));
 
        addPropertyChangeListeners(reactContext);
        reactContext.addLifecycleEventListener(this);
 
        return playerView;
    }
...
```

### iOS

1. Open file `THEOplayerView.swift` in folder `ios/TheoPlayerReactNative/ios`

2. In THEOplayer Configuration, set the `Chromeless` flag to `true`

```swift
import Foundation
import UIKit
import THEOplayerSDK
 
@objc(THEOplayerView)
class THEOplayerView: BaseTHEOplayerView {
 
  init() {
    ...
    let playerConfig: THEOplayerConfiguration
     
    playerConfig = THEOplayerConfiguration(
      chromeless: true, // Turn on chromeless
      pip: nil
    )
     
    let player = THEOplayer(configuration: playerConfig)
    player.evaluateJavaScript("init({player: player})")
     
    super.init(player: player)
  }
  ...
}
```

### tvOS

1. Open file `THEOplayerView.swift` in folder `ios/TheoPlayerReactNative/tvos`

2. In THEOplayer Configuration, set the `Chromeless` flag to `true`

```swift
import Foundation
import UIKit
import THEOplayerSDK
 
@objc(THEOplayerView)
class THEOplayerView: BaseTHEOplayerView {
 
  init() {
    let playerConfig = THEOplayerConfiguration(chromeless: true) // Turn on chromeless
    let player = THEOplayer(configuration: playerConfig)
    super.init(player: player)
  }
 
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
}
```

## Preparing Player React Native Module 

Next step is to set proper view controls in react native along with the native code for proper communication. 

**Note:** Most of the integration can be found in other articles, like Event listeners etc..

We will start from the render view and adding some listeners and view elements in `TheoPlayerViewScreen.js`:

```js
return (
          <BaseComponent style={styles.containerBase}>
              <View style={styles.container}>
                  <THEOplayerView
                      style={playerStyle}
                      fullscreenOrientationCoupling={true}
                      autoplay={true}
                      onPause={(e) => this.updatePausedState(true)}
                      onPlay={(e) => this.updatePausedState(false)}
                      onEnded={(e) => this.updatePausedState(true)}
                      source={
                          {
                              sources: [{
                                  type: 'application/x-mpegurl',
                                  src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
                              }],
                              poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg',
                          }
                      }
                  />
                <View>
                  <TouchableHighlight
                    style={styles.timelineTouchable}
                    onPress={(event) => !Platform.isTV && this.onTimelinePress(event)}
                    >
                    <View
                      style={styles.timelineContainer}
                      onLayout={(event) => {
                        const { width } = event.nativeEvent.layout;
                        this._timelineWidth = width;
                      }}
                      >
                      <View style={[styles.timelineBar, timelineBarStyle]} />
                    </View>
                  </TouchableHighlight>
                </View>
                <View style={styles.controlsContainer}>
                  <View style={styles.buttonsContainer}>
                    <TouchableHighlight
                      style={styles.button}
                      onPress={this.togglePlayPause}
                      >
                      <Text style={styles.playPause}>
                        {playPauseButtonTitle}
                      </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      style={styles.button}
                      onPress={this.toggleFullscreen}>
                      <Text style={styles.fullscreen}>
                        {fullscreenTitle}
                      </Text>
                    </TouchableHighlight>
                  </View>
 
                  <Text style={styles.currentTimeDuration}>{this.formatTime(currentTime)} / {this.formatTime(duration)}</Text>
                </View>
              </View>
          </BaseComponent>
        );
```
Next we need to add management for previously declared elements:

```js
componentDidMount() {
   // Add duration and time listeners
   this._listeners['durationchange'] = theoEventEmitter.addListener('durationchange', (event) => {
     this.setState({ duration: event.duration });
   })
 
   this._listeners['timeupdate'] = theoEventEmitter.addListener('timeupdate', (event) => {
     this.setState({ currentTime: event.currentTime });
   })
 
   ...
 }
 
 componentWillUnmount() {
   // Remove all listeners
   Object.keys(this._listeners).forEach(key => {
     this._listeners[key].remove();
   });
   ...
 }
 
 formatTime = (time = 0) => {
   // Format time for the readable value
   const { duration } = this.state;
   const _time = Math.min(Math.max(time, 0), duration);
   let formattedMinutes = padStart(Math.floor(_time / 60).toFixed(0), 2, '0')
   let formattedSeconds = padStart(Math.floor(_time % 60).toFixed(0), 2, '0')
 
   formattedMinutes === '-1' && (formattedMinutes = '00');
   formattedSeconds === '-1' && (formattedSeconds = '00');
 
   return `${ formattedMinutes }:${ formattedSeconds }`;
 }
 
 togglePlayPause = () => {
   const { paused } = this.state;
 
   if (paused) {
     NativeModules.THEOplayerViewManager.play(); // Use play method declarated in the THEOplayerViewManager(check article React native - ios event listeners)
   } else {
     NativeModules.THEOplayerViewManager.pause(); // Use pause method declarated in the THEOplayerViewManager(check article React native - ios event listeners)
   }
 }
 
 toggleFullscreen = () => {
   // Only turn on fullscreen, all fullscreen logic is managed by native fullscreen
   NativeModules.THEOplayerViewManager.fullscreenOn();
 }
 
 updatePausedState= (paused) => {
   // Set btn state & label name
   this.setState({
     paused,
     playPauseButtonTitle: paused ? 'Play' : 'Pause'
   });
 }
 
 getProgressPosition = () => {
   const { currentTime, duration } = this.state;
   return currentTime / duration * 100;
 }
 
 getPositionFromEvent = (event) => {
   let mX = event.nativeEvent.pageX;
   let position = mX - this._timelineLeftDistance;
   return position;
}
 onTimelinePress = (event) => {
   const { duration } = this.state;
   const position = this.getPositionFromEvent(event);
   const selectedTime = position / this._timelineWidth * duration;
   NativeModules.THEOplayerViewManager.setCurrentTime(Math.round(selectedTime));
 }
 
 onForwardBackwardPress = (add = true, time = 15) => {
   const { currentTime } = this.state;
   const selectedTime = add ? currentTime + time : currentTime - time;
   NativeModules.THEOplayerViewManager.setCurrentTime(selectedTime);
 }
```

Also add `tvOS` Event handlers:

```js
componentDidMount() {
  ...
  this._enableTVEventHandler(); // Initialize tv event handler
}
 
componentWillUnmount() {
  ...
  this._disableTVEventHandler(); // Destroy tv event handler
}
 
_enableTVEventHandler = () => {
  // If platform is not TV then don't implement TV event handler
  if (!Platform.isTV) {
    return;
  }
 
  this._tvEventHandler = new TVEventHandler();
  this._tvEventHandler.enable(this, (cmp, evt) => {
    if (evt && evt.eventType === 'playPause' && Platform.isTVOS) { // Detect event e.g. playPause from TVOS
      this.togglePlayPause(); // Call method for event
    }
    if (evt && evt.eventType === 'up' || evt.eventType === 'swipeUp' && Platform.isTVOS) { // Detect event e.g. select from TVOS
      this.toggleFullscreen(); // Call method for event
    }
    if (evt && evt.eventType === 'left' || evt.eventType === 'swipeLeft' && Platform.isTVOS) { // Detect event e.g. left from TVOS
      this.onForwardBackwardPress(false); // Call method for event
    }
    if (evt && (evt.eventType === 'right' || evt.eventType === 'swipeRight')&& Platform.isTVOS) { // Detect event e.g. right from TVOS
      this.onForwardBackwardPress(); // Call method for event
    }
  });
}
```

### Add additional required React Native Bridge methods

As a next step we need to declare native method and bridge to turn on the fullscreen.

### Android

Add the below in `TheoPlayerViewModule.java` file in `app/src/main/java/com/theoplayerreactnative/` to create the logic and bridge:

```java
...
    @ReactMethod
    public void fullscreenOn() {
        if (!fullscreenConfigured) {
            configureTHEOplayer();
        }
 
        theoPlayerViewManager.playerView.getContext().startActivity(new Intent(theoPlayerViewManager.playerView.getContext(), CustomFullScreenActivity.class));
    }
...
```

### iOS/tvOS

Add the below in `THEOplayerViewManager.swift` file in `ios/` folder to create the method logic:

```swift
...
  @objc
  func fullscreenOn() {
    DispatchQueue.main.async { [weak self] in
      self?.playerView.theoplayer.presentationMode = .fullscreen
    }
  }
...
```

And add the bridge in `THEOplayerViewBridge.m` in `ios/` folder:

```swift
...
  RCT_EXTERN_METHOD(fullscreenOn)
...
```

## Create Native Fullscreen handling

The level at which the React Native is created, does not allow any changes like fullscreen etc. to the tvos/ios/android application layer, so a custom native view needs to be created. Only main core files will be represented here.

### Android

In case of the Android, a new view activity is created and proper method `theoPlayerViewManager.playerView.getContext().startActivity(new Intent(theoPlayerViewManager.playerView.getContext(), CustomFullScreenActivity.class));` need to be called.

Create a new Class file `CustomFullScreenActivity.java` in `app/src/java/com/theoplayerreactnative` for custom fullscreen activity control:

```java
package com.theoplayerreactnative;
 
 
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.SeekBar;
 
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatDelegate;
 
import com.theoplayer.android.api.event.player.DurationChangeEvent;
import com.theoplayer.android.api.event.player.LoadedDataEvent;
import com.theoplayer.android.api.event.player.PlayerEventTypes;
import com.theoplayer.android.api.event.player.ProgressEvent;
import com.theoplayer.android.api.event.player.TimeUpdateEvent;
import com.theoplayer.android.api.fullscreen.FullScreenActivity;
import com.theoplayer.android.api.fullscreen.FullScreenManager;
import com.theoplayer.android.api.player.Player;
import com.theoplayerreactnative.databinding.ActivityFullscreenBinding;
 
import static android.view.ViewGroup.LayoutParams.MATCH_PARENT;
 
public class CustomFullScreenActivity extends FullScreenActivity implements SeekBar.OnSeekBarChangeListener {
    private final int rewindStepLengthInSeconds = 10;
    private final int progressMaxValue = 100;
 
    private AppCompatDelegate appCompatDelegate;
    private ActivityFullscreenBinding viewBinding;
    private Player theoPlayer;
    private FullScreenManager theoFullScreenManager;
    private boolean isTrackingSeekBarTouch = false;
    private boolean controlsVisible = true;
 
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // Adding support for extended AppCompat features.
        // It allows to use styles and themes defined for material components.
        getDelegate().installViewFactory();
        getDelegate().onCreate(savedInstanceState);
        super.onCreate(savedInstanceState);
 
        // Inflating custom view and obtaining an instance of the binding class.
        viewBinding = ActivityFullscreenBinding.inflate(LayoutInflater.from(this), null, false);
        getDelegate().addContentView(viewBinding.getRoot(), new ViewGroup.LayoutParams(MATCH_PARENT, MATCH_PARENT));
 
        // Gathering THEO objects references.
        theoPlayer = getTHEOplayerView().getPlayer();
        theoFullScreenManager = getTHEOplayerView().getFullScreenManager();
 
        // Configuring UI behavior.
        adjustPlayPauseButtonIcon();
        viewBinding.playPauseButton.setOnClickListener((button) -> onPlayPauseClick());
        viewBinding.exitFullScreenButton.setOnClickListener((button) -> onFullScreenExit());
        viewBinding.controlsOverlay.setOnClickListener((button) -> toggleControlsVisibility());
        viewBinding.controlsContainer.setOnClickListener((button) -> toggleControlsVisibility());
        viewBinding.replayButton.setOnClickListener((button) -> onReplayClicked());
        viewBinding.forwardButton.setOnClickListener((button) -> onForwardClicked());
        viewBinding.seekBar.setOnSeekBarChangeListener(this);
 
        // Configuring THEOplayer.
        theoPlayer.addEventListener(PlayerEventTypes.PLAY, (event) -> adjustPlayPauseButtonIcon());
        theoPlayer.addEventListener(PlayerEventTypes.PAUSE, (event) -> adjustPlayPauseButtonIcon());
        theoPlayer.addEventListener(PlayerEventTypes.TIMEUPDATE, this::onTimeUpdate);
        theoPlayer.addEventListener(PlayerEventTypes.DURATIONCHANGE, this::onDurationChanged);
        theoPlayer.addEventListener(PlayerEventTypes.LOADEDDATA, this::onDataLoaded);
        theoPlayer.addEventListener(PlayerEventTypes.PROGRESS, this::onProgressEvent);
 
        viewBinding.totalTime.setText(formatTime(theoPlayer.getDuration()));
    }
 
    @Override
    protected void onDestroy() {
        super.onDestroy();
        getDelegate().onDestroy();
    }
 
    @NonNull
    public AppCompatDelegate getDelegate() {
        if (appCompatDelegate == null) {
            appCompatDelegate = AppCompatDelegate.create(this, null);
        }
        return appCompatDelegate;
    }
 
    private void onFullScreenExit() {
        theoFullScreenManager.exitFullScreen();
        finish();
    }
 
    private void onPlayPauseClick() {
        if (theoPlayer.isPaused()) {
            theoPlayer.play();
        } else {
            theoPlayer.pause();
        }
    }
 
    private void adjustPlayPauseButtonIcon() {
        if (theoPlayer.isPaused()) {
            viewBinding.playPauseButton.setIconResource(R.drawable.ic_play);
        } else {
            viewBinding.playPauseButton.setIconResource(R.drawable.ic_pause);
        }
    }
 
    private void onTimeUpdate(TimeUpdateEvent event) {
        if (!isTrackingSeekBarTouch) {
            viewBinding.progressText.setText(formatTime(event.getCurrentTime()));
            viewBinding.seekBar.setProgress((int) (event.getCurrentTime() * progressMaxValue / theoPlayer.getDuration()));
        }
    }
 
    private void onDurationChanged(DurationChangeEvent event) {
        viewBinding.totalTime.setText(formatTime(event.getDuration()));
    }
 
    private void onDataLoaded(LoadedDataEvent event) {
        viewBinding.totalTime.setText(formatTime(theoPlayer.getDuration()));
    }
 
    private void onProgressEvent(ProgressEvent event) {
        if (!isTrackingSeekBarTouch) {
            viewBinding.progressText.setText(formatTime(event.getCurrentTime()));
        }
    }
 
    @Override
    public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
        if (fromUser) {
            viewBinding.progressText.setText(formatTime(getCurrentTimeByProgress(seekBar.getProgress())));
        }
    }
 
    @Override
    public void onStartTrackingTouch(SeekBar seekBar) {
        isTrackingSeekBarTouch = true;
    }
 
    @Override
    public void onStopTrackingTouch(SeekBar seekBar) {
        theoPlayer.setCurrentTime(getCurrentTimeByProgress(seekBar.getProgress()), () -> isTrackingSeekBarTouch = false);
    }
 
    private String formatTime(double doubleTimeInSeconds) {
        int totalTimeInSeconds = (int) doubleTimeInSeconds;
        int seconds = totalTimeInSeconds % 60;
        int minutes = totalTimeInSeconds / 60;
        int hours = totalTimeInSeconds / 3600;
        String result;
        if (hours > 0) {
            result = String.format("%d:%02d:%02d", hours, minutes, seconds);
 
        } else {
            result = String.format("%02d:%02d", minutes, seconds);
        }
        return result;
    }
 
    private double getCurrentTimeByProgress(double progress) {
        return theoPlayer.getDuration() * progress / progressMaxValue;
    }
 
    private void toggleControlsVisibility() {
        controlsVisible = !controlsVisible;
        viewBinding.controlsOverlay.setVisibility(controlsVisible ? View.VISIBLE : View.INVISIBLE);
    }
 
    private void onReplayClicked() {
        theoPlayer.requestCurrentTime(aDouble -> theoPlayer.setCurrentTime(aDouble - rewindStepLengthInSeconds));
    }
 
    private void onForwardClicked() {
        theoPlayer.requestCurrentTime(aDouble -> theoPlayer.setCurrentTime(aDouble + rewindStepLengthInSeconds));
    }
}
```
And update manager file `TheoPlayerViewManager.java` in `app/src/java/com/theoplayerreactnative`:

```java
package com.theoplayerreactnative;

import android.util.Log;
import android.util.DisplayMetrics;
import android.view.View;
import android.widget.LinearLayout;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import com.theoplayer.android.api.THEOplayerView;
import com.theoplayer.android.api.THEOplayerConfig;
import com.theoplayer.android.api.event.EventListener;
import com.theoplayer.android.api.event.player.EndedEvent;
import com.theoplayer.android.api.event.player.PauseEvent;
import com.theoplayer.android.api.event.player.PlayEvent;
import com.theoplayer.android.api.event.player.PlayerEventTypes;
import com.theoplayer.android.api.event.player.SeekedEvent;
import com.theoplayer.android.api.event.player.PresentationModeChange;
import com.theoplayer.android.api.source.SourceDescription;
import com.theoplayer.android.api.source.analytics.YouboraOptions;
import com.theoplayer.android.api.source.analytics.ConvivaConfiguration;
import com.theoplayer.android.api.source.analytics.ConvivaContentMetadata;

import java.util.Map;
import java.util.HashMap;

import com.theoplayerreactnative.events.EventListenersManager;

import static android.view.ViewGroup.LayoutParams.MATCH_PARENT;

public class TheoPlayerViewManager extends SimpleViewManager<THEOplayerView> implements LifecycleEventListener {

    //static
    private static final String TAG = TheoPlayerViewManager.class.getSimpleName();
    private static final String RCT_MODULE_NAME = "THEOplayerView";

    private enum InternalAndGlobalEventPair {
        onSeek("onSeekEventInternal", "onSeek"),
        onPlay("onPlayEventInternal", "onPlay"),
        onPause("onPauseEventInternal", "onPause"),
        onPresentationModeChange("onPresentationModeChangeEventInternal", "onPresentationModeChange"),
        onEnded("onEndedEventInternal", "onEnded");

        String internalEvent;
        String globalEvent;

        InternalAndGlobalEventPair(String internalEvent, String globalEvent) {
            this.internalEvent = internalEvent;
            this.globalEvent = globalEvent;
        }
    }
    private EventListenersManager listenersManager;

    THEOplayerView playerView;

    @Override
    public String getName() {
        return RCT_MODULE_NAME;
    }

    @Override
    protected THEOplayerView createViewInstance(final ThemedReactContext reactContext) {
        /*
          Example conviva usage, add account code & uncomment analytics config declaration, if you need
          custom conviva metadata add customConvivaMetadata with key and value
        */
        HashMap<String, String> customConvivaMetadata = new HashMap<>();
        //customConvivaMetadata.put("<KEY>", "<VALUE>");

        ConvivaConfiguration conviva = new ConvivaConfiguration.Builder("<Your conviva account code>",
                new ConvivaContentMetadata.Builder("THEOPlayer")
                        .applicationName("THEOPlayer demo")
                        .live(false)
                        .custom(customConvivaMetadata)
                        .build())
                .gatewayUrl("<Your gateway url>")
                .heartbeatInterval(5)
                .manualSessionControl(false)
                .build();

        /*
          Example youbora usage, add account code & uncomment analytics config declaration
        */
        YouboraOptions youbora = YouboraOptions.Builder.youboraOptions("<Your youbora account code>")
                .put("enableAnalytics", "true")
                .put("username", "THEO user")
                .put("content.title", "Demo")
                .build();
        /*
          If you want to use Google Ima set googleIma in theoplayer config(uncomment line below) and add `integration: "google-ima"`
          in js ads source declaration.
          You can declarate in THEOplayer configuration builder default js and css paths by using cssPaths() and jsPaths()
        */
        THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
                .chromeless(true)
                // .googleIma(true)
                // .analytics(youbora)
                .build();

        playerView = new THEOplayerView(reactContext.getCurrentActivity(), playerConfig);
        playerView.setLayoutParams(new LinearLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT));

        addPropertyChangeListeners(reactContext);
        reactContext.addLifecycleEventListener(this);
        if(listenersManager == null) {
            listenersManager = new EventListenersManager(playerView, reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class));
        }
        listenersManager.registerListeners();

        return playerView;
    }

    private void addPropertyChangeListeners(final ThemedReactContext reactContext) {
        playerView.getPlayer().addEventListener(PlayerEventTypes.SEEKED, new EventListener<SeekedEvent>() {
            @Override
            public void handleEvent(final SeekedEvent seekedEvent) {
                Log.d(TAG, "seeked native: " + seekedEvent);
                WritableMap event = Arguments.createMap();
                event.putDouble("currentTime", seekedEvent.getCurrentTime());
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        playerView.getId(),
                        InternalAndGlobalEventPair.onSeek.internalEvent,
                        event);
            }
        });

        playerView.getPlayer().addEventListener(PlayerEventTypes.PLAY, new EventListener<PlayEvent>() {
            @Override
            public void handleEvent(final PlayEvent playEvent) {
                Log.d(TAG, "play native");
                WritableMap event = Arguments.createMap();

                //local property change
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        playerView.getId(),
                        InternalAndGlobalEventPair.onPlay.internalEvent,
                        event);
            }
        });

        playerView.getPlayer().addEventListener(PlayerEventTypes.ENDED, new EventListener<EndedEvent>() {
            @Override
            public void handleEvent(final EndedEvent endedEvent) {
                Log.d(TAG, "ended native");
                WritableMap event = Arguments.createMap();

                //local property change
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        playerView.getId(),
                        InternalAndGlobalEventPair.onEnded.internalEvent,
                        event);
            }
        });

        playerView.getPlayer().addEventListener(PlayerEventTypes.PAUSE, new EventListener<PauseEvent>() {
            @Override
            public void handleEvent(final PauseEvent pauseEvent) {
                Log.d(TAG, "pause native");
                WritableMap event = Arguments.createMap();
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        playerView.getId(),
                        InternalAndGlobalEventPair.onPause.internalEvent,
                        event);
            }
        });

        playerView.getPlayer().addEventListener(PlayerEventTypes.PRESENTATIONMODECHANGE, new EventListener<PresentationModeChange>() {
            @Override
            public void handleEvent(final PresentationModeChange presentationModeChangeEvent) {
                DisplayMetrics displayMetrics = new DisplayMetrics();
                reactContext.getCurrentActivity().getWindowManager().getDefaultDisplay().getMetrics(displayMetrics);
                // Orientation detection
                int orientation = reactContext.getResources().getConfiguration().orientation;

                if(playerView.getFullScreenManager().isFullScreen()) {
                    /*
                        If needed set additional functionality when fullscreen is on, examples below
                    */
                    //playerView.getPlayer().pause();
                    //playerView.getPlayer().play();
                } else {
                    /*
                        If needed set additional functionality when fullscreen is on, examples below
                    */
                    //playerView.getPlayer().pause();
                    //playerView.getPlayer().play();
                }

                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit(InternalAndGlobalEventPair.onPresentationModeChange.internalEvent, playerView.getFullScreenManager().isFullScreen());
            }
        });
    }

    @ReactProp(name = "autoplay", defaultBoolean = false)
    public void setAutoplay(View view, boolean autoplay) {
        playerView.getPlayer().setAutoplay(autoplay);
    }

    @ReactProp(name = "fullscreenOrientationCoupling", defaultBoolean = false)
    public void setFullscreenOrientationCoupling(View view, boolean fullscreenOrientationCoupling) {
        playerView.getSettings().setFullScreenOrientationCoupled(fullscreenOrientationCoupling);
    }

    @ReactProp(name = "source")
    public void setSource(View view, ReadableMap source) {
        SourceDescription sourceDescription = SourceHelper.parseSourceFromJS(source);
        if (sourceDescription != null) {
            playerView.getPlayer().setSource(sourceDescription);
        }
    }

    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put(
                        InternalAndGlobalEventPair.onSeek.internalEvent,
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", InternalAndGlobalEventPair.onSeek.globalEvent)))
                .put(
                        InternalAndGlobalEventPair.onPlay.internalEvent,
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", InternalAndGlobalEventPair.onPlay.globalEvent)))
                .put(
                        InternalAndGlobalEventPair.onEnded.internalEvent,
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", InternalAndGlobalEventPair.onEnded.globalEvent)))
                .put(
                        InternalAndGlobalEventPair.onPause.internalEvent,
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", InternalAndGlobalEventPair.onPause.globalEvent)))
                .put(
                        InternalAndGlobalEventPair.onPresentationModeChange.internalEvent,
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", InternalAndGlobalEventPair.onPresentationModeChange.globalEvent)))
                .build();
    }

    //lifecycle events
    @Override
    public void onHostResume() {
        playerView.onResume();
    }

    @Override
    public void onHostPause() { playerView.onPause(); }

    @Override
    public void onHostDestroy() {
        playerView.onDestroy();
        if(listenersManager != null) {
            listenersManager.unregisterListeners();
            listenersManager = null;
        }
    }

}
```
So we have manager `configureTHEOplayer()` and run method fullscreenOn with `theoPlayerViewManager.playerView.getContext().startActivity(new Intent(theoPlayerViewManager.playerView.getContext(), CustomFullScreenActivity.class));`. And additionally property for the fullscreen `private boolean fullscreenConfigured = false;`

### iOS

Create a new Class for base interface view like below in file `PlayerInterfaceView.swift` in `ios/TheoPlayerReactNative/IOS` :

```swift
import UIKit
 
final class PlayerInterfaceView: UIView {
   
  // MARK: - Public properties
   
  var playButton: UIButton!
  var pauseButton: UIButton!
  var skipBackwardButton: UIButton!
  var skipForwardButton: UIButton!
  var closeFullscreen: UIButton!
   
  var seek: ((Float)-> Void)?
   
  // MARK: - Private properties
   
  private var containerView: UIView!
  private var controllerStackView: UIStackView!
  private var footerView: UIView!
  private var activityIndicatorView: UIActivityIndicatorView!
   
  private var slider: UISlider!
  private var progressLabel: UILabel!
   
  // Auto hide timer variable and interval constant
  private var autoHideTimer: Timer? = nil
  private let autoHideTimeInSeconds: Double = 5.0
   
  // Boolean flag to show/hide the interface
  var showInterface: Bool = true {
    didSet {
      // Start / stop auto hide timer and show / hide interface accordingly
      showInterface ? startAutoHideTimer() : stopAutoHideTimer()
      containerView.isHidden = !showInterface
    }
  }
  private var isInterfaceShowing: Bool {
    return state == .initialise || !containerView.isHidden
  }
  private var isOverHourLong: Bool = false
  private var isDraggingSlider: Bool = false
  private var durationString: String = "00:00"
  private var currentTimeString: String = "00:00" {
    didSet {
      // Update progress label when curent time string is set
      progressLabel.text = "\(currentTimeString) / \(durationString)"
    }
  }
   
  // Public properties
  // Display corresponding UI components based on the view state
  var state: PlayerInterfaceViewState! {
    didSet {
      stopAutoHideTimer()
      activityIndicatorView.stopAnimating()
      playButton.isHidden = true
      pauseButton.isHidden = true
      skipBackwardButton.isHidden = true
      skipForwardButton.isHidden = true
      footerView.isHidden = true
       
      switch state {
      case .initialise:
        containerView.isHidden = false
        currentTime = 0.0
        playButton.isHidden = false
        isDraggingSlider = false
      case .buffering:
        containerView.isHidden = false
        activityIndicatorView.startAnimating()
        skipBackwardButton.isHidden = false
        skipForwardButton.isHidden = false
        footerView.isHidden = false
      case .playing:
        startAutoHideTimer()
        pauseButton.isHidden = false
        skipBackwardButton.isHidden = false
        skipForwardButton.isHidden = false
        footerView.isHidden = false
      case .paused:
        playButton.isHidden = false
        skipBackwardButton.isHidden = false
        skipForwardButton.isHidden = false
        footerView.isHidden = false
      default:
        break
      }
    }
  }
  var duration: Float = 0.0 {
    didSet {
      // Set duration as the slider maximum value
      slider.maximumValue = duration
       
      isOverHourLong = (duration / 3600) >= 1
      durationString = Utilities.convertTimeString(time: duration, isOverHourLong: isOverHourLong)
    }
  }
  var currentTime: Float = 0.0 {
    didSet {
      if !isDraggingSlider {
        // Update slider value
        slider.value = currentTime
        currentTimeString = Utilities.convertTimeString(time: currentTime, isOverHourLong: isOverHourLong)
      }
    }
  }
   
  // MARK: - View life cycle
  init() {
    super.init(frame: .zero)
     
    setupView()
    setupContainerView()
    setupControllerStackView()
    setupControllerStackViewItems()
    setupFooterView()
    setupTransparentSubview()
    setupSlider()
    setupProgressLabel()
  }
   
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
   
  // MARK: - View setup
  private func setupView() {
    self.translatesAutoresizingMaskIntoConstraints = false
     
    let tapGestureReconizer = UITapGestureRecognizer(target: self, action: #selector(onTapped))
    tapGestureReconizer.delegate = self
    self.addGestureRecognizer(tapGestureReconizer)
  }
   
  private func setupContainerView() {
    containerView = THEOComponent.view()
     
    self.addSubview(containerView)
    containerView.leadingAnchor.constraint(equalTo: self.leadingAnchor).isActive = true
    containerView.trailingAnchor.constraint(equalTo: self.trailingAnchor).isActive = true
    containerView.topAnchor.constraint(equalTo: self.topAnchor).isActive = true
    containerView.bottomAnchor.constraint(equalTo: self.bottomAnchor).isActive = true
     
    closeFullscreen = THEOComponent.button(text: "Close fullscreen", image: nil)
    containerView.addSubview(closeFullscreen)
    closeFullscreen.leadingAnchor.constraint(equalTo: containerView.leadingAnchor, constant: 10).isActive = true
    closeFullscreen.topAnchor.constraint(equalTo: containerView.topAnchor, constant: 30).isActive = true
  }
   
  private func setupControllerStackView() {
    controllerStackView = THEOComponent.stackView(axis: .horizontal, spacing: 40)
    controllerStackView.alignment = .center
     
    containerView.addSubview(controllerStackView)
    controllerStackView.centerXAnchor.constraint(equalTo: containerView.centerXAnchor).isActive = true
    controllerStackView.centerYAnchor.constraint(equalTo: containerView.centerYAnchor).isActive = true
    controllerStackView.widthAnchor.constraint(lessThanOrEqualTo: containerView.widthAnchor).isActive = true
    controllerStackView.heightAnchor.constraint(lessThanOrEqualTo: containerView.heightAnchor, multiplier: 0.6).isActive = true
  }
   
  private func setupButton(imageName: String, isLarge: Bool) -> UIButton {
    let button = THEOComponent.button(text: nil, image: UIImage(named: imageName))
    button.backgroundColor = .clear
     
    controllerStackView.addArrangedSubview(button)
    button.widthAnchor.constraint(equalTo: button.heightAnchor).isActive = true
    button.widthAnchor.constraint(equalToConstant: isLarge ? 100 : 60).isActive = true
     
    return button
  }
   
  private func setupActivityIndicatorView() {
    activityIndicatorView = UIActivityIndicatorView(style: .whiteLarge)
     
    controllerStackView.addArrangedSubview(activityIndicatorView)
    activityIndicatorView.widthAnchor.constraint(equalTo: activityIndicatorView.heightAnchor).isActive = true
    activityIndicatorView.widthAnchor.constraint(equalToConstant: 100).isActive = true
  }
   
  private func setupControllerStackViewItems() {
    setupActivityIndicatorView()
    skipBackwardButton = setupButton(imageName: "skip-backward", isLarge: false)
    playButton = setupButton(imageName: "play", isLarge: true)
    pauseButton = setupButton(imageName: "pause", isLarge: true)
    skipForwardButton = setupButton(imageName: "skip-forward", isLarge: false)
  }
   
  private func setupFooterView() {
    footerView = THEOComponent.view()
    footerView.backgroundColor = .clear
    footerView.layoutMargins = UIEdgeInsets(top: 10, left: 10, bottom: 10, right: 10)
     
    containerView.addSubview(footerView)
    footerView.leadingAnchor.constraint(equalTo: containerView.leadingAnchor).isActive = true
    footerView.bottomAnchor.constraint(equalTo: containerView.bottomAnchor).isActive = true
    footerView.widthAnchor.constraint(equalTo: containerView.widthAnchor).isActive = true
    footerView.heightAnchor.constraint(equalToConstant: 50).isActive = true
  }
   
  private func setupTransparentSubview() {
    let view = THEOComponent.view()
    view.backgroundColor = UIColor(white: 0, alpha: 0.4)
     
    footerView.addSubview(view)
    view.leadingAnchor.constraint(equalTo: footerView.leadingAnchor).isActive = true
    view.trailingAnchor.constraint(equalTo: footerView.trailingAnchor).isActive = true
    view.topAnchor.constraint(equalTo: footerView.topAnchor).isActive = true
    view.bottomAnchor.constraint(equalTo: footerView.bottomAnchor).isActive = true
  }
   
  private func setupSlider() {
    slider = THEOComponent.slider()
    // Add callback to monitor valueChanged
    slider.addTarget(self, action: #selector(onSliderValueChange), for: .valueChanged)
    // Add tap gesture recognizer to the slider to support tap to set value
    let tapGestureRecognizer = UITapGestureRecognizer(target: self, action: #selector(onSliderTapped))
    slider.addGestureRecognizer(tapGestureRecognizer)
     
    footerView.addSubview(slider)
    let layoutMarginsGuide = footerView.layoutMarginsGuide
    slider.leadingAnchor.constraint(equalTo: layoutMarginsGuide.leadingAnchor).isActive = true
    slider.topAnchor.constraint(equalTo: layoutMarginsGuide.topAnchor).isActive = true
    slider.bottomAnchor.constraint(equalTo: layoutMarginsGuide.bottomAnchor).isActive = true
  }
   
  private func setupProgressLabel() {
    progressLabel = THEOComponent.label(text: "00:00 / 00:00")
    progressLabel.textColor = .theoWhite
    progressLabel.textAlignment = .center
     
    footerView.addSubview(progressLabel)
    progressLabel.widthAnchor.constraint(equalToConstant: 130).isActive = true
    let layoutMarginsGuide = footerView.layoutMarginsGuide
    progressLabel.trailingAnchor.constraint(equalTo: layoutMarginsGuide.trailingAnchor).isActive = true
    progressLabel.centerYAnchor.constraint(equalTo: layoutMarginsGuide.centerYAnchor).isActive = true
    progressLabel.leadingAnchor.constraint(equalTo: slider.trailingAnchor, constant: 10).isActive = true
  }
   
  // MARK: - Start/stop auto hide timer
  private func stopAutoHideTimer() {
    guard autoHideTimer != nil else { return }
    autoHideTimer?.invalidate()
    autoHideTimer = nil
  }
   
  private func startAutoHideTimer() {
    // Always terminate previous timer
    stopAutoHideTimer()
    // Create new timer
    autoHideTimer =  Timer.scheduledTimer(withTimeInterval: autoHideTimeInSeconds, repeats: false) { [weak self] _ in
      guard let self = self else { return }
      self.showInterface = false
    }
  }
   
  // MARK: - Gesture callback
  @objc private func onTapped(sender: UITapGestureRecognizer) {
    // Placeholder. All tap logics are handled in the shouldReceive callback of gestureRecognizer
  }
   
  // MARK: - Slider callbacks
  @objc private func onSliderTapped(gestureRecognizer: UIGestureRecognizer) {
    let tappedPoint: CGPoint = gestureRecognizer.location(in: self)
    let xOffset: CGFloat = tappedPoint.x - slider.frame.origin.x
    var tappedValue: Float = 0.0
    // X offset can not be smaller than 0
    if xOffset > 0 {
      // Multiply current X offset to the 'max value' : 'width' ratio to work out the tapped value
      tappedValue = Float((xOffset * CGFloat(slider.maximumValue) / slider.frame.size.width))
    }
     
    showInterface = true
    slider.setValue(tappedValue, animated: true)
    seek?(tappedValue)
  }
   
  @objc private func onSliderValueChange(slider: UISlider, event: UIEvent) {
    if let touch = event.allTouches?.first {
      switch touch.phase {
      case .began:
        isDraggingSlider = true
        showInterface = true
        // Stop timer to prevent auto hide during dragging
        stopAutoHideTimer()
      case .moved:
        // Update time label to reflect the dragged time
        currentTimeString = Utilities.convertTimeString(time:slider.value, isOverHourLong: isOverHourLong)
      case .ended:
        isDraggingSlider = false
        seek?(slider.value)
      default:
        break
      }
    }
  }
}
 
// MARK: - UIGestureRecognizerDelegate
extension PlayerInterfaceView: UIGestureRecognizerDelegate {
  func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldReceive touch: UITouch) -> Bool {
    /* UIStackView is non-drawing view and controllerStackView
     covers big part of the screen which can be tapped by user
     easily. Since touch event for items on controllerStackView
     will be handled with their own handler; tapping
     controllerStackView will be considered as tapping the
     controller interface view
     */
    let isControlViewTapped = (touch.view == containerView || touch.view == controllerStackView)
    // Toggle to show/hide interface is only needed in the playing state. The interface stays on for other states
    if state == .playing {
      if isInterfaceShowing && isControlViewTapped {
        // If interface is currently showing and user tapped on empty area, hide interface and stop auto hide timer
        showInterface = false
      } else {
        // Else show interface and set auto hide timer
        showInterface = true
      }
    }
    return isControlViewTapped
  }
}
```

Create a new Video Controler and add the file `PlayerInterfaceVC.swift` in `ios/TheoPlayerReactNative/IOS`:

```swift
import UIKit
 
class PlayerInterfaceVC: UIViewController {
   
  var delegate: PlayerInterfaceViewDelegate? = nil
   
  var state: PlayerInterfaceViewState = .initialise {
    didSet {
      playerInterfaceView.state = state
    }
  }
   
  var duration: Float = 0.0 {
    didSet {
      playerInterfaceView.duration = duration
    }
  }
   
  var currentTime: Float = 0.0 {
    didSet {
      playerInterfaceView.currentTime = currentTime
    }
  }
   
  private var playerInterfaceView = PlayerInterfaceView()
   
  override func viewDidLoad() {
    super.viewDidLoad()
    self.view.backgroundColor = .clear
    self.view.translatesAutoresizingMaskIntoConstraints = false
     
    view.addSubview(playerInterfaceView)
    playerInterfaceView.leadingAnchor.constraint(equalTo: view.leadingAnchor).isActive = true
    playerInterfaceView.trailingAnchor.constraint(equalTo: view.trailingAnchor).isActive = true
    playerInterfaceView.topAnchor.constraint(equalTo: view.topAnchor).isActive = true
    playerInterfaceView.bottomAnchor.constraint(equalTo: view.bottomAnchor).isActive = true
     
    playerInterfaceView.skipBackwardButton.addTarget(self, action: #selector(onSkipBackward), for: .touchUpInside)
    playerInterfaceView.playButton.addTarget(self, action: #selector(onPlay), for: .touchUpInside)
    playerInterfaceView.pauseButton.addTarget(self, action: #selector(onPause), for: .touchUpInside)
    playerInterfaceView.skipForwardButton.addTarget(self, action: #selector(onSkipForward), for: .touchUpInside)
    playerInterfaceView.closeFullscreen.addTarget(self, action: #selector(onCloseFullscreen), for: .touchUpInside)
     
    playerInterfaceView.seek = { [weak self] value in
      self?.delegate?.seek(timeInSeconds: value)
    }
  }
   
  // MARK: - Button callbacks
  @objc private func onSkipBackward() {
    playerInterfaceView.showInterface = true
    delegate?.skip(isForward: false)
  }
   
  @objc private func onPlay() {
    playerInterfaceView.showInterface = true
    delegate?.play()
  }
   
  @objc private func onPause() {
    playerInterfaceView.showInterface = true
    delegate?.pause()
  }
   
  @objc private func onSkipForward() {
    playerInterfaceView.showInterface = true
    delegate?.skip(isForward: true)
  }
   
  @objc private func onCloseFullscreen() {
    playerInterfaceView.showInterface = true
    delegate?.closeFullscreen()
  }
   
}
```

### tvOS

Create a new Class for base interface view like below in file `PlayerInterfaceView.swift` in `ios/TheoPlayerReactNative/tvOS` :

```swift
import UIKit
 
final class PlayerInterfaceView: UIView {
   
  //MARK: - Public properties
   
  var delegate: PlayerInterfaceViewDelegate? = nil
   
  var progressViewWidthConstraint: NSLayoutConstraint!
  var progressViewBorder: UIView!
   
  var currentTime: Float = 0.0 {
    didSet {
      currentTimeString = Utilities.convertTimeString(time: currentTime,
                                                      isOverHourLong: isOverHourLong)
      if duration > 0 {
        DispatchQueue.main.async {
          let progress = self.currentTime / self.duration
          let progressWidth = Float(self.progressViewBorder.bounds.width) *  progress
          self.progressViewWidthConstraint.constant = CGFloat(progressWidth)
        }
      }
    }
  }
   
  var duration: Float = 0.0 {
    didSet {
      isOverHourLong = (duration / 3600) >= 1
      durationString = Utilities.convertTimeString(time: duration, isOverHourLong: isOverHourLong)
    }
  }
   
  var state: PlayerInterfaceViewState! {
    didSet {
      stopAutoHideTimer()
      switch state {
      case .initialise:
        containerView.isHidden = false
        currentTime = 0.0
        playPauseIcon.image = UIImage(named: "play")
      case .buffering:
        containerView.isHidden = false
        playPauseIcon.image = UIImage(named: "play")
        activityIndicatorView.isHidden = false
        activityIndicatorView.startAnimating()
      case .playing:
        startAutoHideTimer()
        playPauseIcon.image = UIImage(named: "pause")
        activityIndicatorView.isHidden = true
        activityIndicatorView.stopAnimating()
      case .paused:
        containerView.isHidden = false
        playPauseIcon.image = UIImage(named: "play")
        activityIndicatorView.isHidden = true
        activityIndicatorView.stopAnimating()
      default:
        break
      }
    }
  }
   
  // MARK: - Private properties
   
  private var containerView: UIView!
  private var playPauseIcon: UIImageView!
  private var progressView: UIView!
  private var isOverHourLong: Bool = false
  private var progressLabel: UILabel!
  private var activityIndicatorView: UIActivityIndicatorView!
  private var durationString: String = "00:00"
   
  // Auto hide timer variable and interval constant
  private var autoHideTimer: Timer? = nil
  private let autoHideTimeInSeconds: Double = 5.0
   
  // Boolean flag to show/hide the interface
  private var showInterface: Bool = true {
    didSet {
      // Start / stop auto hide timer and show / hide interface accordingly
      showInterface ? startAutoHideTimer() : stopAutoHideTimer()
      containerView.isHidden = !showInterface
    }
  }
   
  private var currentTimeString: String = "00:00" {
    didSet {
      DispatchQueue.main.async {
        self.progressLabel.text = "\(self.currentTimeString) / \(self.durationString)"
      }
    }
  }
   
  //MARK: - Initialization
   
  init() {
    super.init(frame: .zero)
    translatesAutoresizingMaskIntoConstraints = false
    setupView()
  }
   
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
   
  //MARK: - View configuration
   
  private func setupView() {
    containerView = UIView()
    containerView.translatesAutoresizingMaskIntoConstraints = false
    self.addSubview(containerView)
    containerView.leadingAnchor.constraint(equalTo: self.leadingAnchor).isActive = true
    containerView.trailingAnchor.constraint(equalTo: self.trailingAnchor).isActive = true
    containerView.heightAnchor.constraint(equalToConstant: 120).isActive = true
    containerView.bottomAnchor.constraint(equalTo: self.bottomAnchor).isActive = true
    containerView.backgroundColor = UIColor(white: 0.0, alpha: 0.5)
     
    playPauseIcon = UIImageView()
    playPauseIcon.translatesAutoresizingMaskIntoConstraints = false
    playPauseIcon.image = UIImage(named: "play")
    playPauseIcon.widthAnchor.constraint(equalToConstant: 100).isActive = true
    playPauseIcon.heightAnchor.constraint(equalToConstant: 100).isActive = true
    containerView.addSubview(playPauseIcon)
    playPauseIcon.leadingAnchor.constraint(equalTo: containerView.leadingAnchor, constant: 20).isActive = true
    playPauseIcon.bottomAnchor.constraint(equalTo: containerView.bottomAnchor, constant: -10).isActive = true
     
    progressLabel = UILabel()
    progressLabel.textColor = .white
    progressLabel.font = UIFont.systemFont(ofSize: 30)
    progressLabel.textAlignment = .center
    progressLabel.translatesAutoresizingMaskIntoConstraints = false
    containerView.addSubview(progressLabel)
    progressLabel.trailingAnchor.constraint(equalTo: containerView.trailingAnchor, constant: -20).isActive = true
    progressLabel.centerYAnchor.constraint(equalTo: playPauseIcon.centerYAnchor).isActive = true
    progressLabel.widthAnchor.constraint(equalToConstant: 250).isActive = true
     
    progressViewBorder = UIView()
    progressViewBorder.translatesAutoresizingMaskIntoConstraints = false
    containerView.addSubview(progressViewBorder)
    progressViewBorder.leadingAnchor.constraint(equalTo: playPauseIcon.trailingAnchor, constant: 40).isActive = true
    progressViewBorder.trailingAnchor.constraint(equalTo: progressLabel.leadingAnchor, constant: -20).isActive = true
    progressViewBorder.centerYAnchor.constraint(equalTo: playPauseIcon.centerYAnchor).isActive = true
    progressViewBorder.layer.borderWidth = 2
    progressViewBorder.layer.borderColor = UIColor.white.cgColor
    progressViewBorder.heightAnchor.constraint(equalToConstant: 10).isActive = true
     
    progressView = UIView()
    progressView.backgroundColor = .white
    progressView.translatesAutoresizingMaskIntoConstraints = false
    progressViewBorder.addSubview(progressView)
    progressView.leadingAnchor.constraint(equalTo: progressViewBorder.leadingAnchor).isActive = true
    progressView.topAnchor.constraint(equalTo: progressViewBorder.topAnchor).isActive = true
    progressView.bottomAnchor.constraint(equalTo: progressViewBorder.bottomAnchor).isActive = true
    progressViewWidthConstraint = progressView.widthAnchor.constraint(equalToConstant: 0)
    progressViewWidthConstraint.isActive = true
     
    activityIndicatorView = UIActivityIndicatorView(style: .white)
    activityIndicatorView.color = .white
    activityIndicatorView.translatesAutoresizingMaskIntoConstraints = false
    self.addSubview(activityIndicatorView)
    activityIndicatorView.widthAnchor.constraint(equalToConstant: 100).isActive = true
    activityIndicatorView.heightAnchor.constraint(equalToConstant: 100).isActive = true
    activityIndicatorView.centerYAnchor.constraint(equalTo: self.centerYAnchor).isActive = true
    activityIndicatorView.centerXAnchor.constraint(equalTo: self.centerXAnchor).isActive = true
  }
   
  // MARK: - Start/stop auto hide timer
   
  private func stopAutoHideTimer() {
    guard autoHideTimer != nil else { return }
    autoHideTimer?.invalidate()
    autoHideTimer = nil
  }
   
  private func startAutoHideTimer() {
    // Always terminate previous timer
    stopAutoHideTimer()
    // Create new timer
    autoHideTimer =  Timer.scheduledTimer(withTimeInterval: autoHideTimeInSeconds, repeats: false) { [weak self] _ in
      guard let self = self else { return }
      self.showInterface = false
    }
  }
   
}
```

Create a new View Controller like below in file `PlayerInterfaceVC.swift` in `ios/TheoPlayerReactNative/tvOS`:

```swift
import UIKit
 
final class PlayerInterfaceVC: UIViewController {
   
  // MARK: - Public properties
   
  var delegate: PlayerInterfaceViewDelegate? = nil
   
  var state: PlayerInterfaceViewState = .initialise {
    didSet {
      playerInterfaceView.state = state
    }
  }
   
  var duration: Float = 0.0 {
    didSet {
      playerInterfaceView.duration = duration
    }
  }
   
  var currentTime: Float = 0.0 {
    didSet {
      playerInterfaceView.currentTime = currentTime
    }
  }
   
  // MARK: - Private properties
   
  private var playerInterfaceView = PlayerInterfaceView()
  private var panGestureRecognizer: UIPanGestureRecognizer!
  private var progressViewWidth: Int = 0
  private var currentProgressWidth: Int = 0
   
  // MARK: - UIViewController Lifecycle
 
  override func viewDidLoad() {
    super.viewDidLoad()
    self.view.backgroundColor = .clear
     
    self.view.addSubview(self.playerInterfaceView)
    self.playerInterfaceView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor).isActive = true
    self.playerInterfaceView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor).isActive = true
    self.playerInterfaceView.topAnchor.constraint(equalTo: self.view.topAnchor).isActive = true
    self.playerInterfaceView.bottomAnchor.constraint(equalTo: self.view.bottomAnchor).isActive = true
  }
   
  override func viewWillAppear(_ animated: Bool) {
    super.viewWillAppear(animated)
     
    let menuPressRecognizer = UITapGestureRecognizer()
    menuPressRecognizer.addTarget(self, action: #selector(menuButtonAction(recognizer:)))
    menuPressRecognizer.allowedPressTypes = [NSNumber(value: UIPress.PressType.menu.rawValue)]
    self.view.addGestureRecognizer(menuPressRecognizer)
 
    let playPausePressRecognizer = UITapGestureRecognizer()
    playPausePressRecognizer.addTarget(self, action: #selector(playPauseButtonAction(recognizer:)))
    playPausePressRecognizer.allowedPressTypes = [NSNumber(value: UIPress.PressType.playPause.rawValue)]
    self.view.addGestureRecognizer(playPausePressRecognizer)
     
    let selectButtonPressRecognizer = UITapGestureRecognizer()
    selectButtonPressRecognizer.addTarget(self, action: #selector(selectButtonAction(recognizer:)))
    selectButtonPressRecognizer.allowedPressTypes = [NSNumber(value: UIPress.PressType.select.rawValue)]
    self.view.addGestureRecognizer(selectButtonPressRecognizer)
     
    let panGestureRecognizer = UIPanGestureRecognizer(target: self,
                                                      action: #selector(panGestureWasTriggered(panGestureRecognizer:)))
    self.view.addGestureRecognizer(panGestureRecognizer)
  }
   
  // MARK: - UITapGestureRecognizer actions handling
   
  @objc func menuButtonAction(recognizer: UITapGestureRecognizer) {
    delegate?.closeFullscreen()
  }
 
  @objc func playPauseButtonAction(recognizer: UITapGestureRecognizer) {
    delegate?.play()
  }
   
  @objc func selectButtonAction(recognizer: UITapGestureRecognizer) {
    delegate?.play()
  }
   
  // MARK: - UITapGestureRecognizer actions handling
   
  @objc private func panGestureWasTriggered(panGestureRecognizer: UIPanGestureRecognizer) {
    guard self.state == .paused && self.state != .buffering else {
      return
    }
     
    let translation = Int(panGestureRecognizer.translation(in: self.view).x)
     
    switch panGestureRecognizer.state {
    case .began:
      progressViewWidth = Int(playerInterfaceView.progressViewBorder.bounds.width)
      currentProgressWidth = Int(playerInterfaceView.progressViewWidthConstraint.constant)
       
    case .changed:
      let newProgressWidth = currentProgressWidth + translation
      var percentOfProgressBarFilling = Float(newProgressWidth) / Float(progressViewWidth)
       
      if percentOfProgressBarFilling > 1 {
        percentOfProgressBarFilling = 1
      }
       
      let newTime = duration * percentOfProgressBarFilling
      if newTime <= duration && newTime >= 0 {
        currentTime = newTime
      }
    case .ended, .cancelled:
      delegate?.seek(timeInSeconds: currentTime)
    default:
      break
    }
  }
   
}
```

## Additional Resources:

- THEOplayer Github demo Project: https://github.com/THEOplayer/samples-react-native
- For more informations, check native modules for IOS/TVOS/Android: https://facebook.github.io/react-native/docs


## Remarks

- **Disclaimer:** THEO Technologies does not provide THEOplayer React Native components. This How-to-Article describes how our current THEOplayer iOS and Android SDKs can be wrapped in React Native Bridges. The sample React Native bridge code is provided AS-IS without any explicit nor implicit guarantees. The React Native bridge sample code only provides mapping for a number of commonly used THEOplayer APIs, it is the customer’s responsibility to further expand the mapping and subsequently maintain the code and ensure compatibility with future versions of THEOplayer SDKs.

- There is a know issue in THEOplayer Android SDK whereby scaling of Video (aspectRatio and scrollView combination) could be an issue while using Full Screen property. Please read the article [How to fix FullScreen issue of THEOplayer in reactNative](11-fixing-fullscreen-issue.md)