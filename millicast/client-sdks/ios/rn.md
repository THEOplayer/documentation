---
title: "React Native"
id: rn
---
Dolby.io Streaming APIs support using the [Web SDK](/millicast/client-sdks/web.md) with React Native WebRTC to support creating iOS, Android, AndroidTV, and tvOS applications.

<div class="dolbyio-cards-container">
  
  <a class="dolbyio-card dolbyio-card-1" href="https://github.com/millicast/millicast-sdk/releases">
     <div class="dolbyio-card-image">
      <img width="40px" src="https://files.readme.io/3f65ad7-github_svg.svg"/>
    </div>
    <div class="dolbyio-card-header">GitHub</div>
    <div class="dolbyio-card-description">
       Access the Web SDK releases
    </div>
  </a>
  
  <a class="dolbyio-card dolbyio-card-2" href="https://millicast.github.io/millicast-sdk/">
    <div class="dolbyio-card-image">
      <img width="40px" class="dolbyio-card-svg-icon" src="https://files.readme.io/049dc13-documentation_icon.svg"/>
    </div>
    <div class="dolbyio-card-header">Documentation</div>
    <div class="dolbyio-card-description">
      Find more information about Web SDK APIs
    </div>
  </a>
  
  <a class="dolbyio-card dolbyio-card-3" href="https://github.com/millicast/streaming-sdk-react-native-getting-started">
    <div class="dolbyio-card-image">
      <img width="45px" class="dolbyio-card-svg-icon" src="https://files.readme.io/0c11f2f-sampleapp_icon.svg"/>
    </div>
    <div class="dolbyio-card-header">Sample app</div>
    <div class="dolbyio-card-description">
      Test features and capabilities
    </div>
  </a>
  
</div>



# React Native SDK

Before you start, make sure that you use  [React Native WebRTC plugin](https://www.npmjs.com/package/react-native-webrtc) 106.0.0 or later.

# Getting started

> 📘 
> 
> Before we start, you can find more information in the [Web SDK Documentation](/millicast/client-sdks/web.md), which contains more examples and descriptions of the available modules.

## Initializing your project

Initialize your React Native project using the expo tool:

```bash
yarn create expo-app GettingStarted
cd GettingStarted/
# Run expo eject to get all the platform specific folders generated
expo eject
```

## Dependencies

By default, React Native does not contain a native implementation of WebRTC, which is required by the Millicast SDK. The [react-native-webrtc](https://github.com/react-native-webrtc/react-native-webrtc) project implements all the required WebRTC APIs needed by our SDK to function. A patch has been released that integrates WebRTC's Unified Plan, which is required by the Millicast SDK to function. However, there is still some small setup needed. We need to install the mentioned dependency:

```bash
npm install --save react-native-webrtc
npm install @millicast/sdk
# OR if you use yarn:
yarn add react-native-webrtc
yarn add @millicast/sdk
```

On iOS, install the native Pods that are required for [react-native-webrtc](https://github.com/react-native-webrtc/react-native-webrtc) to run. Navigate to the `ios/`  directory in your `react-native` app and run the following: 

```bash
pod install --clean-install
 
# On M1 architectures, you need to prefix with `arch -x86_64` as follows:
 
arch -x86_64 pod install --clean-install
```

Now you should be able to run the expo sample app to verify that all necessary tools have been successfully installed.

## Application setup

Before using the Millicast SDK, import a function from [react-native-webrtc](https://github.com/react-native-webrtc/react-native-webrtc), which registers the shim implementations of the WebRTC data structures as globals, so that the SDK finds it without having to change anything. Add the following:

```js
import { registerRootComponent } from 'expo';
import { registerGlobals } from 'react-native-webrtc';                                                                                                                                
                           
// This registers the shim WebRTC data structures, like RTCPeerConnection as global variables so the SDK can find them anywhere.                                                                                                                               
registerGlobals();
 
// Here we can import the SDK and use it normally.
// The Millicast Logger will help you debug your app.
import { Logger as MillicastLogger } from '@millicast/sdk'
 
// Initialize Logger
window.Logger = MillicastLogger
 
Logger.setLevel(MillicastLogger.DEBUG);
 
// Use either Viewer or Publisher example as the App.js script
import App from './App';
 
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// The environment is set up appropriately
registerRootComponent(App);
```

## Permissions

### iOS permissions

If the application is running natively on iOS, we need to grant the application permissions to use the camera and microphone, which is required by React Native WebRTC. Navigate to the `Info.plist` file (by default, it is located in the previously mentioned `ios/`  directory mentioned) and add the following dictionary values if they do not exist:  

```xml
<key>NSMicrophoneUsageDescription</key>
<string>Need microphone access for uploading videos</string>
<key>NSCameraUsageDescription</key>
<string>Need camera access for uploading images</string>
```

For additional information, see: [React Native WebRTC iOS Installation](https://github.com/react-native-webrtc/react-native-webrtc/blob/master/Documentation/iOSInstallation.md).

### Android permissions

Similarly, we need to provide the application with permissions to be able to run it. Add the following to the `android/app/src/main/AndroidManifest.xml` before the application section:

```xml
<uses-feature android:name="android.hardware.camera" />
<uses-feature android:name="android.hardware.camera.autofocus" />
<uses-feature android:name="android.hardware.audio.output" />
<uses-feature android:name="android.hardware.microphone" />
 
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.INTERNET" />
```

Add the following to support Bluetooth:

```xml
<uses-permission android:name="android.permission.BLUETOOTH" android:maxSdkVersion="30" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" android:maxSdkVersion="30" />
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
```

For additional information, see the [React Native WebRTC Android Installation](https://github.com/react-native-webrtc/react-native-webrtc/blob/master/Documentation/AndroidInstallation.md).

## Gradle v3.5

If using Grade v3.5, an additional line is required in `android/gradle.properties` to prevent a crash at startup. This is required by [react-native-webrtc](https://github.com/react-native-webrtc/react-native-webrtc):

```xml
android.enableDexingArtifactTransform.desugaring=false
```

## Examples

Prior to using the viewer and publisher examples, you have to get your tokens. Use the [this guide](/millicast/streaming-dashboard/managing-your-tokens.md) to manage your Dolby.io Real-time Streaming tokens.

In your App.js file, decide whether you want to test a viewer or publisher based on your needs.

### Viewer example

The following example widget subscribes to a stream and uses React Native WebRTC's RTCView to view the received remote track.

Since React Native already has a class called `View`, when subscribing, you must alias Millicast's View class. For example:

```js
import { Director, View as MillicastView } from '@millicast/sdk'
```

```js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { RTCView } from 'react-native-webrtc';
import { Director, View as MillicastView } from '@millicast/sdk'
 
class MillicastWidget extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      streamURL: null
    }
  
    this.styles = StyleSheet.create({
      video: {
        width: 480,
        height: 320
      }
    })
    this.subscribe(props.streamName, props.accountID)
  }
   
  async subscribe(streamName, accountID) {
  
    console.log(streamName, accountID)
    const tokenGenerator = () => Director.getSubscriber({
        streamName: streamName,
        streamAccountId: accountID
      })
     
    // Create a new instance
    const millicastView = new MillicastView(streamName, tokenGenerator, null)
      
    // Set track event handler to receive streams from Publisher.
    millicastView.on('track', (event) => {
      console.log(`My event is ${event}`);
      const videoUrl = event.streams[0].toURL()
      if (!videoUrl) return null
  
      this.setState({
        streamURL: videoUrl
      })
    })
      
    // Start connection to viewer
    try {
      await millicastView.connect()
    } catch (e) {
      console.log('Connection failed. Reason:', e)
    }
  }
  
  reconnect = () => {
    millicastView.reconnect()
  }
 
  render() {
    return (
        <RTCView streamURL={this.state.streamURL} style ={this.styles.video}/>
    );
  }
};
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={{}} />
      <MillicastWidget streamName=<YOUR_STREAM_NAME> accountID=<YOUR_ACCOUNT_ID>/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
```

Once the MillicastWidget component is defined, you can embed this widget into your app as follows:

```xml
<MillicastWidget streamName=... accountID=.../>
```

### Publisher example

The following is a publisher example:

```js
import {
    Button,
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React, { useState } from 'react';
import { mediaDevices, RTCView } from 'react-native-webrtc';
 
// Import the required classes
import { Director, Publish } from '@millicast/sdk'
 
class MillicastWidget extends React.Component {
 
   
  constructor(props) {
    super(props)
        this.millicastPublish = null
        this.state = {
            mediaStream: null,
            stream: null
        }
 
        this.styles = StyleSheet.create({
            video: {
              width: '100%',
              height: '100%'
            }
        })
    }
 
 
    start = async () => {
        console.log('start');
        if (!this.state.mediaStream) {
            let s;
            try {
                s = await mediaDevices.getUserMedia({ video: true, audio: true });
                this.setState({
                    mediaStream: s
                });
                this.publish(this.props.streamName, this.props.token)
            } catch (e) {
                console.error(e);
            }
        }
    };
 
    stop = () => {
        console.log('stop');
        this.millicastPublish.stop();
        if (this.state.mediaStream) {
          this.state.mediaStream.release();
            this.setState({
                mediaStream: null
            });
        }
    };
 
    async publish(streamName, token) {
 
        const tokenGenerator = () => Director.getPublisher({
            token,
            streamName
        })
        // Create a new instance
        this.millicastPublish = new Publish(streamName, tokenGenerator)
 
        this.setState({
            streamURL: this.state.mediaStream
        })
        // Publishing Options
        const broadcastOptions = {
            mediaStream: this.state.mediaStream,
            codec: 'vp8'
        }
 
 
        // Start broadcast
        try {
            await this.millicastPublish.connect(broadcastOptions)
        } catch (e) {
            console.log('Connection failed, handle error', e)
        }
    }
 
    render() {
        return (
          <View style={styles.body}>
            {
              this.state.mediaStream ?
              <RTCView streamURL={this.state.mediaStream.toURL()} style={this.styles.video} objectFit='contain' />
              :
              null
            }
            <View style={styles.footer}>
              <Button
                  title="Start"
                  onPress={this.start} />
              <Button
                  title="Stop"
                  onPress={this.stop} />
            </View>
          </View>
        )
    }
};
 
export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <MillicastWidget streamName=<YOUR_STREAM_NAME> token=<YOUR_PUBLISHER_TOKEN> />
      </SafeAreaView>
    </>
    );
}
 
 
const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.white,
        ...StyleSheet.absoluteFill
    },
    stream: {
        flex: 1
    },
    footer: {
        backgroundColor: Colors.lighter,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});
```

Once the MillicastWidget component is defined, you can embed this widget into your app as follows:

```xml
<MillicastWidget streamName=... token=.../>
```

## Build and run the application

If you are using yarn:

```bash
yarn run [android|ios]
```

## Windows troubleshooting

If you have issues installing on Windows, we suggest following these steps:

- Move to android directory and run `.\gradlew clean`
- Go to `<USERNAME>\AppData\Local\Android\Sdk\ndk`
- Delete all the versions of NDK installed on your system.
- When you execute `npm run android`, the correct version of NDK will be installed.
