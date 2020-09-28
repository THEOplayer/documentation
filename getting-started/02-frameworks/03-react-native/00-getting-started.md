# Getting started with React Native

This article describes how the THEOplayer iOS and Android SDKs can be wrapped to be used in a React Native project. 

## Creating a basic React Native project

The following instructions demonstrate how you can create a sample React Native project which contains THEOplayer. You can also clone a [sample React Native project](https://github.com/THEOplayer/samples-react-native) from our GitHub.

### Android

#### Pre-requisites

- React Native
- Node.js (NPM or yarn)
- Android Studio or SDK for Android
- Text Editor or IDE eg. SublimeText
- Terminal (OSX/Linux) or Command Line (Windows)
- THEOplayer Android SDK 

#### Steps

Start project:

- install app libs yarn,
- run project yarn run start.

Run emulator:

- open project folder `<path to project>/android`,
- add emulator device configuration(AVD Manager).

Add THEOplayer library in  project:
- go to File > New Module > Import .JAR / .AAR Package,
- navigate to the location where the lib .aar file is stored and select it,
- go to project dependencies by going to File > Project Structure > dependencies tab,
- add a new dependency by clicking the plus sign in the top-right corner and choose Module dependency. Select the lib .aar file and click OK.

SDK version project:

- open project build.gradle,
- in buildscript ext, change minSdkVersion to 21.

### iOS

#### Pre-requisites

- React Native
- Node.js (NPM or yarn)
- Android Studio or SDK for Android
- Text Editor or IDE eg. SublimeText
- Terminal (OSX/Linux) or Command Line (Windows)
- THEOplayer Android SDK 

#### Steps

Start Project:

- install app libs yarn,
- install pods pod install.

Run Project:

- open Xcode, add new project -> select workspace file in iOS folder generated after pod install,
- click run project, project will start automatically -> terminal & emulator will start.

## Getting Started with React Native and THEOplayer SDK [Android [TV], iOS and tvOS]

The following articles help you get started on React Native.

- [How to get started with React Native](./01-how-to-get-started-with-theo.md)
- [How to add tvOS project in React Native and THEOplayer](./02-add-tvos.md)
- How to add features of THEOplayer in React Native:
    - [DRM](./03-drm.md)
    - [Advertisements](./04-advertisements.md)
    - [Analytics](./05-analytics.md)
    - [Chromecast/Airplay](./06-chromecast.md)
- How to use Event-handlers of THEOplayer in React Native:
    - [EventListeners](./07-event-listeners.md)
    - [tvOS Remote Control Event Handlers](./08-add-tvos-remote-control-event-handlers.md)
- [How to customise the UI of THEOplayer in React Native](./09-custom-ui.md)
- [How to implement Chromeless (Without default UI) using THEOplayer in React Native](./10-how-to-implement-chromeless.md)


## Remarks
Disclaimer: THEO Technologies does not provide THEOplayer React Native components. This How-to-Article describes how our current THEOplayer iOS and Android SDKs can be wrapped in React Native Bridges. The sample React Native bridge code is provided AS-IS without any explicit nor implicit guarantees. The React Native bridge sample code only provides mapping for a number of commonly used THEOplayer APIs, it is the customer’s responsibility to further expand the mapping and subsequently maintain the code and ensure compatibility with future versions of THEOplayer SDKs.