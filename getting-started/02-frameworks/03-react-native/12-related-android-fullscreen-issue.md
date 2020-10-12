# Related Android Fullscreen issue in React Native

THEOplayer’s Android SDK may have a problem with video scaling when switching from fullscreen to normal view using the button (there is a problem with THEOplayer, aspectRatio and scrollView combination). 

You might encounter an issue with Android Full Screen while using THEOplayer Android SDK. This article decribes how to over come the issue. 

## Instructions

Player isn't scaled properly after exit from Fullscreen, because initial player styles aren't reloaded.
To reload styles, we need to know if current state is fullscreen or not.
To know when player is fullscreen, change component state, when opening fullscreen player by pressing a button:

```js
toggleFullscreen = () => {
  // Only turn on fullscreen, all fullscreen logic is managed by native fullscreen
  NativeModules.THEOplayerViewManager.fullscreenOn();
  // Change component state
  this.setState({isFullscreen: true})
}

...

<TouchableHighlight
  style={styles.button}
  onPress={this.toggleFullscreen}
  >
  <Text>
    Fullscreen ON
  </Text>
</TouchableHighlight>
```

All fullscreen logic is managed by native code, we have to add listener, and listen for event when full screen is closed by native code.
Also it is good to lock orientation, for portrait player, to portriat.

```js
componentDidMount() {
  theoEventEmitter.addListener('fullscreenOff', () => {
    this.setState({isFullscreen: false})
  })

  Orientation.lockToPortrait()
}
```

To force the player to adopt, or actually reload, the same styles. At the moment of switching from the portrait to the full screen, when the player is invisible because it is covered by the new fullscreen screen, we render the player with a slightly modified width: `playerStyle.width = Math.min(width, height) + 1;`. Then when returning from full screen, we pass the correct styles, the player will notice the difference and load the new (initial) styles.

```js
render() {
    
    ...

    let width = Math.floor(Dimensions.get('window').width);
    let height = Math.floor(Dimensions.get('window').height);
    if(isFullscreen) {
        playerStyle.width = Math.min(width, height) + 1;
    } else {
        playerStyle.width = Math.min(width, height);
    }
}
```

Because this problem only occurs for Android SDK add platform detection, and remove ScrollView for Android:
```js
if (Platform.OS === 'android') {
  this._listeners['fullscreenOff'] = theoEventEmitter.addListener('fullscreenOff', () => {
    this.setState({isFullscreen: false})
  })
  Orientation.lockToPortrait()
}
```
```js
render() {
    
    ...

    let BaseComponent = View;

    if (Platform.OS === 'android') {
        let width = Math.floor(Dimensions.get('window').width);
        let height = Math.floor(Dimensions.get('window').height);
        if(isFullscreen) {
            playerStyle.width = Math.min(width, height) + 1;
        } else {
            playerStyle.width = Math.min(width, height);
        }
    } else {
        BaseComponent = ScrollView;
    }
}
```

Full code snippet:

```js
import Orientation from 'react-native-orientation';

...

componentDidMount() {
  if (Platform.OS === 'android') {
    this._listeners['fullscreenOff'] = theoEventEmitter.addListener('fullscreenOff', () => {
      this.setState({isFullscreen: false})
    })
    Orientation.lockToPortrait()
  }
}

...

toggleFullscreen = () => {
  NativeModules.THEOplayerViewManager.fullscreenOn();
  // Only turn on fullscreen, all fullscreen logic is managed by native fullscreen
  this.setState({isFullscreen: true})
}

...

render() {
    const { isFullscreen } = this.state;

    /*
    Problem on android fullscreen change with theoplayer scaling when ScrollView component is set
    */
    let BaseComponent = View;
    
    /*
    If there are scaling issues during the change of the fullscreen remove 'aspectRatio' & set player height
    */
    let playerStyle = {
        ...styles.player,
    };
    
    if (Platform.OS === 'android') {
        let width = Math.floor(Dimensions.get('window').width);
        let height = Math.floor(Dimensions.get('window').height);
        if(isFullscreen) {
            playerStyle.width = Math.min(width, height) + 1;
        } else {
            playerStyle.width = Math.min(width, height);
        }
    } else {
        BaseComponent = ScrollView;
    }
    
    return (
    <BaseComponent style={styles.container}>
        <THEOplayerViewNative
            autoplay={true}
            fullscreenOrientationCoupling={true}
            style={playerStyle}
            source={
                {
                sources: [{
                    type: 'application/x-mpegurl',
                    src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
                }],
                poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg'
                }
            }
        />;
    </BaseComponent>
    );
}
...
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    player: {
        backgroundColor: "black",
        aspectRatio: 1.7,
    },
});
```

And in `TheoPlayerViewManager.java` file overwrite lifecycle events:

```java
...
import com.facebook.react.bridge.LifecycleEventListener;
...
    
public class TheoPlayerViewManager extends SimpleViewManager<THEOplayerView> implements LifecycleEventListener {
    ...
        @Override
    protected THEOplayerView createViewInstance(final ThemedReactContext reactContext) {
        ...
        // Add lifecycle listeners
        reactContext.addLifecycleEventListener(this);
        ...
    }
    ...
    //lifecycle events
    @Override
    public void onHostResume() {
        playerView.onResume();
    }
    
    @Override
    public void onHostPause() {
        playerView.onPause();
    }
    
    @Override
    public void onHostDestroy() {
        playerView.onDestroy();
    }
    ...
}
```

## Remarks

- **Disclaimer**: THEO Technologies does not provide THEOplayer React Native components. This How-to-Article describes how our current THEOplayer iOS and Android SDKs can be wrapped in React Native Bridges. The sample React Native bridge code is provided AS-IS without any explicit nor implicit guarantees. The React Native bridge sample code only provides mapping for a number of commonly used THEOplayer APIs, it is the customer’s responsibility to further expand the mapping and subsequently maintain the code and ensure compatibility with future versions of THEOplayer SDKs.