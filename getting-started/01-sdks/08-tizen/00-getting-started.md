# Getting started with the Tizen SDK
This how-to guide describes how to set-up a Tizen application using the THEOplayer Tizen SDK.

## Set-up
For brevity, set-up is split up over multiple pages:
* [Setting up Tizen Studio](01-installing-tizen-studio.md)
* [Generating a certificate](02-generating-a-certificate.md)
* [Setting up and deploying on a physical device (recommended)](03-setting-up-physical.md)
* [Setting up and deploying on an emulator (less recommended)](04-setting-up-emulator.md)

## Getting started with the THEOplayer Tizen reference app

### Prerequisites
* Generate a Tizen SDK build via the [https://portal.theoplayer.com/](THEOplayer portal).
* Download the [reference app project](https://github.com/THEOplayer/tizen-app)
* Read the README to get started. There is one at the root level and one in the two examples.
* Import the project in Tizen Studio

Go to File -> Open Projects from File System

![](../../../assets/img/import-1.jpg)

Select the directory. Then press Finish.

![](../../../assets/img/import-2.jpg)

### Reference app structure structure

*   **example-with-ui/**
    *   Contains a Tizen project with a UI. Follow the readme for more instructions.
    *   **css/**
        *   CSS styles as used in the app.
    *   **js/**
        *   Javascript files as used in the app. The compiled result of `src/` is put in here.
    *   **src/**
        *   The source code of the UI application. Change or replace as desired.
    *   **libs/**
        *   (Insert your THEOplayer Tizen SDK here)
    *   **index.html**
        *   Entry point of application.
    *   **config.xml**
        *   Permissions of the app.
    *   **package.json**
        *   Contains the commands required to build the UI.
*   **minimum-example/**
    *   Contains a very minimal Tizen project example. No UI included. 
    *   **libs/**
        *   (Insert your THEOplayer Tizen SDK here)
    *   **index.html**
        *   Entry point of application.
    *   **config.xml**
        *   Permissions of the app.