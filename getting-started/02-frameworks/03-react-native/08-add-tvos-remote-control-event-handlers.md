# tvOS Remote Control Handlers in React Native and THEOplayer

This article describes how to React Native TV event handler for remote controls with THEOplayer implementation.

## General Information

### tvOS

- Yarn 1.19.1
- React native TVOS 0.62.2-1
- Xcode 11.3
- THEOplayer 2.77.0
- Swift 5.1.

THEOplayer tvOS SDK can be used for tvOS devices using iOS 10.0+ and Swift 5.0+

## React native TV event handler implementation

Majority of the `TVEventHandler` are provided in the React Native library so all the main logic is implemented on the JavaScript side only.

1. Enable event handler from the React Native Library: 

    - With the latest version of React Native, it's not required to import directly TVEventHandler

    - For older version of React Native, import `let TVEventHandler = require('TVEventHandler');`:

It would now be required to implement in main Javascript implementation e.g. `TheoPlayerViewScreen.js`:

```js
import { ..., TVEventHandler } from 'react-native';
...
export default class TheoPlayerViewScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        paused: true
      };
 
      this._tvEventHandler = null;
    }
    componentDidMount() {
      this._enableTVEventHandler(); // Initialize tv event handler
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
      });
    }
...
```

**Note:** It would be good to **disable event handler** on unmount e.g. `TheoPlayerViewScreen.js`:

```js
...
export default class TheoPlayerViewScreen extends React.Component {
    ...
    componentWillUnmount() {
      this._disableTVEventHandler(); // Destroy tv event handler
    }
 
    _disableTVEventHandler = () => {
      // If platform is not TV then don't implement TV event handler
      if (!Platform.isTV) {
        return;
      }
 
      if (this._tvEventHandler) {
        this._tvEventHandler.disable(); // Disable handler
        delete this._tvEventHandler; // Remove handler
      }
    }
...
```

2. Add Play/Plause Management Controls e.g. `TheoPlayerViewScreen.js`:

```js
...
export default class TheoPlayerViewScreen extends React.Component {
    ...
    togglePlayPause = () => {
      const { paused } = this.state;
      if (paused) {
        NativeModules.THEOplayerViewManager.play(); // Use play method declared in the THEOplayerViewManager
      } else {
        NativeModules.THEOplayerViewManager.paused(); // Use pause method declared in the THEOplayerViewManager
      }
    }
...
```

3. Implementing/Listening to identify **player state changed** to know the state of the player e.g. `TheoPlayerViewScreen.js`:

```js
...
export default class TheoPlayerViewScreen extends React.Component {
    ...
    updatePausedState = (paused) => {
      this.setState({paused});
    }
 
    render() {
        ...
        return (
          <BaseComponent style={styles.containerBase}>
              <View style={styles.container}>
                  <THEOplayerView
                      style={playerStyle}
                      fullscreenOrientationCoupling={true}
                      autoplay={true}
                      onPause={(e) => this.updatePausedState(true)} // Use declared theoplayer pause event call
                      onPlay={(e) => this.updatePausedState(false)} // Use declarated theoplayer play event call
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
              </View>
          </BaseComponent>
        );
    }
...
```

## Additional Resources

- React Native tvOS Documentation: https://github.com/react-native-community/react-native-tvos
- THEOplayer Event Listeners: [Documentation](https://docs.portal.theoplayer.com/getting-started/02-frameworks/03-react-native/07-event-listeners.md)
- THEOplayer Github Demo Project: https://github.com/THEOplayer/samples-react-native

## Remarks

- **Disclaimer:** THEO Technologies does not provide THEOplayer React Native components. This How-to-Article describes how our current THEOplayer iOS and Android SDKs can be wrapped in React Native Bridges. The sample React Native bridge code is provided AS-IS without any explicit nor implicit guarantees. The React Native bridge sample code only provides mapping for a number of commonly used THEOplayer APIs, it is the customer’s responsibility to further expand the mapping and subsequently maintain the code and ensure compatibility with future versions of THEOplayer SDKs.

- **Note:** There is a know issue in THEOplayer Android SDK whereby scaling of Video (aspectRatio and scrollView combination) could be an issue while using Full Screen property. Please read the article [How to fix FullScreen issue of THEOplayer in React Native](./11-fixing-fullscreen-issue.md)