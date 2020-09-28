# Fixing Fullscreen issue in React Native

THEOplayer’s Android SDK may have a problem with video scaling when switching from fullscreen to normal view using the button (there is a problem with THEOplayer, aspectRatio and scrollView combination). This article describes how to solve the FullScreen issue using THEOplayer in React Native.

## Instructions

In file where player is initialised (eg: `TheoPlayerViewScreen.js`) add platform detection and set width of the player from e.g device dimension and remove scrollView component parents(set normal view component) of THEOplayerViewNative:

```js
...
render() {
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
    playerStyle.width = Math.floor(Dimensions.get('window').width);
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