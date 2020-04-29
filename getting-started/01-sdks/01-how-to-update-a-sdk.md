# How to update a SDK?

This how-to guide describes how to update the library in your project once you have received a new version.

## Update Web SDK

Typically, you receive a CDN url and a ZIP file, which look like this:

- CDN: https://cdn.theoplayer.com/dash/xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx/THEOplayer.js
- ZIP: https://cdn.theoplayer.com/dash/xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx/THEOplayer-2.41.0-example2018.zip

This means that there are two ways to include the library in your project: **cloud hosted (CDN)** or **self hosted (ZIP file)**.

### 1. Cloud hosted

In the `head` section of you project, include the library link like this:

```html
<script type="text/javascript" src="https://cdn.theoplayer.com/dash/xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx/THEOplayer.js"></script>
 
// the default stylesheet of the player is hosted under the same folder, which you can include like this:
<link rel="stylesheet" type="text/css" href="https://cdn.theoplayer.com/dash/xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx/ui.css">
```

*NOTE:* The chromeless version of the player (THEOplayer.chromeless.js) is also available in the folder.

The next step is to update the libraryLocation to point to the parent folder of the library as you can see below:

```js
libraryLocation: https://cdn.theoplayer.com/dash/xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx/
```

### 2. Self hosted
*NOTE:* this option is only available for enterprise customers. Pay-as-you-go customers are not allowed to self-host.

Alternatively, you could extract the included zip file and host the library yourself.

In this case, the steps are the same as above, but you would need to point to the path where you store the library instead of "https://cdn.theoplayer.com/dash ...".

When you extract the ZIP file, you will see the following 'helper files':
- `theoplayer.d.js`
- `theoplayer.e.js`
- `theoplayer.p.js`

It is **important** these files are placed in the **same directory as the core library (THEOplayer.js)**.

**It is crucial to also update the libraryLocation as seen in the snippet above. Not doing will result in playback failure.**

## Android SDK

Typically, you receive a ZIP file, which look like this:

`AndroidSDK-[version-number]-[your-android-license-key].zip`

To access the documentation and be able to import the library, unzip the file.

Importing the THEOplayer Android SDK Library can be done following these steps:

1. In your Android Studio, go to File > New Module > Import .JAR / .AAR Package.
2. Navigate to the location where the THEOplayer SDK aar file is stored and select it.
3. Go to your project dependencies by going to File > Project Structure > dependencies tab.
4. Add a new dependency by clicking the plus sign in the top-right corner and choose Module Dependency. Select the THEOplayer SDK aar file and click OK.

Additionally, you can import the sources jar to be able to immediately see the API java source files with their documentation in Android Studio. Follow the following after successfully importing the library steps for that:

1. In the Projects Overview, set the view to the project view. You should now see “External Libraries”
2. Under “External Libraries” you should be able to find the theoplayer-android SDK library, right click and select “Library Properties”.
3. In the top left corner of the Library Properties window, click the first green plus sign.
4. Find and select the theoplayer-android SDK jar file and click ok.

See [this link](https://developer.android.com/studio/projects/android-library#AddDependency) to learn how to add a dependency to your Android project.

## iOS SDK
Typically, you receive a ZIP file, which look like this:

`iOSSDK-[version-number]-[your-iOS-license-key].zip`

To access the documentation and be able to import the library, unzip the file.

Steps for adding a framework: 

1. Open finder and add your THEOplayerSDK.framework to the project directory
2. Go to the project configuration (1), select the General tab (2), and finally scroll down to the Embedded Binaries section and click '+' (3)
3. A submenu will open, click 'Add Other...'
4. Select the previously added THEOplayerSDK.framework
5. A menu will open. They have sufficient defaults. Click 'Finish'


Validate that the framework will correctly be added during builds

1. Go to the Build Phases tab in the project configuration, go to the Embed Frameworks section
2. Check that the THEOplayerSDK.framework is present