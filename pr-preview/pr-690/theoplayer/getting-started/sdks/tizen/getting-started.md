# Getting started on Tizen

This how-to guide describes how to set up a Tizen application using the Dolby OptiView Player SDK on Tizen.

You may also find the [Getting Started on Web](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/web/getting-started.md) to be useful.

## Set-up[​](#set-up "Direct link to Set-up")

For brevity, the set-up is split up over multiple pages:

* [Setting up Tizen Studio](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/tizen/installing-tizen-studio.md)
* [Generating a certificate](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/tizen/generating-a-certificate.md)
* [Setting up and deploying on a physical device (recommended)](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/tizen/setting-up-physical.md)
* [Setting up and deploying on an emulator (less recommended)](/documentation/pr-preview/pr-690/theoplayer/getting-started/sdks/tizen/setting-up-emulator.md)

## Getting started with the THEOplayer Tizen reference app[​](#getting-started-with-the-theoplayer-tizen-reference-app "Direct link to Getting started with the THEOplayer Tizen reference app")

### Prerequisites[​](#prerequisites "Direct link to Prerequisites")

* Generate a Tizen SDK build via the [THEOplayer portal](https://portal.theoplayer.com/).
* Download the [reference app project](https://github.com/THEOplayer/samples-tizen)
* Read the README to get started. There is one at the root level and one in the two examples.
* Import the project in Tizen Studio.

Go to File -> Open Projects from File System.

![](/documentation/pr-preview/pr-690/assets/images/import-1-8aaecab1b94a589fec742e47cd9bd394.jpg)

Select the directory, then press Finish.

![](/documentation/pr-preview/pr-690/assets/images/import-2-abd40c64a1537775af117e7460865ac6.jpg)

### Reference app structure structure[​](#reference-app-structure-structure "Direct link to Reference app structure structure")

* **example-with-ui/**

  * Contains a Tizen project with a UI. Follow the readme for more instructions.
  * **css/**
    * CSS styles as used in the app.
  * **js/**
    * JavaScript files as used in the app. The compiled result of `src/` is put in here.
  * **src/**
    * The source code of the UI application. Change or replace as desired.
  * **libs/**
    * (Insert your THEOplayer Tizen SDK here.)
  * **index.html**
    * Entry point of application.
  * **config.xml**
    * Permissions of the app.
  * **package.json**
    * Contains the commands required to build the UI.

* **minimum-example/**

  * Contains a very minimal Tizen project example. No UI included.
  * **libs/**
    * (Insert your THEOplayer Tizen SDK here.)
  * **index.html**
    * Entry point of application.
  * **config.xml**
    * Permissions of the app.
