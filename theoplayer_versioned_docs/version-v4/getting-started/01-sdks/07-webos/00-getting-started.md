# Getting Started on webOS

This guide will help you integrate your THEOplayer SDK on webOS.

Since webOS IDE is [no longer available](https://webostv.developer.lge.com/develop/tools/ide-introduction) as of February 2022, you will need to set up [webOS CLI](https://webostv.developer.lge.com/develop/tools/cli-installation), optionally in combination with the [webOS TV VS Code Extension](https://webostv.developer.lge.com/develop/tools/vsce-installation).

The focus of this article is using our [sample apps for webOS](https://github.com/THEOplayer/samples-webos).

You may also find the [Getting Started on Web](../01-web/00-getting-started.mdx) guide useful.

## Prerequisites

1. Make sure that the [webOS CLI](https://webostv.developer.lge.com/develop/tools/cli-installation) is correctly installed on your system.
2. Validate that the CLI is correctly set up on your environment by invoking `ares` at the command line of a new terminal. If the command is recognized, you are correctly set up. If not, please go over the steps on the CLI installation guide again.
3. Optionally you can also install the official VS Code extension listed [here](https://marketplace.visualstudio.com/items?itemName=webostvsdk.webostv) to quickly connect/deploy to your devices.

# Download the starter files

- Download the starter code from [our sample repository](https://github.com/THEOplayer/samples-webos).
- The folder contains all the necessary files to quickly deploy a THEOplayer solution to a webOS device.
- The packager will use the `app` folder to build an IPK package
  - the `app` folder contains a crude solution with entry point `index.html`; the only thing left is to put your THEOplayer library files in the `libs` folder.
- The folder `example-with-UI` contains a more elaborate example,
  - To use it, optionally modify the code and run the following commands:
    ```shell
    cd example-with-ui
    npm i
    npm run build
    ```
  - Next, copy the `js` folder, the `css` folder and the `index.html` file to the app folder (overwriting the existing files).

## Setting up the physical device

### Prerequisites

1. Make sure you have created an [LG Developer Account](https://webostv.developer.lge.com/login). You will need this to login to the Developer Tools app on the physical device.
2. Download the Developer Tools app to the TV from the LG Content Store, login with your LG account and follow the instructions to set the device in developer mode (a restart is required).

### Make a connection

- In case you downloaded the webOS TV VS Code extension, you can use it to link your development environment to the physical device (from the webOS TV Devices menu on the left-hand toolbar).
- Manually set up (use the guideline provided by LG):
  1.  Open terminal and enter `ares-setup-device`
      1. Choose `add`.
      2. Enter device name: tv (feel free to use another name).
      3. Enter the IP address of the LG TV (open the Developer Tools app on the device to find out).
      4. Use port `9922` for physical devices (for a simulator the port is 6622).
      5. SSH user: this should be set to `prisoner` (**important note**: do not use the proposed `root`, this will not work).
      6. Enter an optional description.
      7. Authentication: choose option `password`.
      8. Leave the actual password blank.
      9. Save.
  2.  Next, you need to acquire a key from the physical device to be able to securely interact:
      1. Enter `ares-novacom -d tv --getkey` (make sure to use the device name you chose in case you changed it).
      2. You will be prompted for a key; the key will be visible in the Developer Tools app on the physical device.

## Simulator

**Important Note**: the use of a simulator is not recommended as simulators do not implement all features (e.g. DRM).

If you decide to use a simulator, follow the guide [here](https://webostv.developer.lge.com/develop/tools/simulator-installation) to install one.

# Running the app

**Note**: please visit the [LG webOS developer site](https://webostv.developer.lge.com/) to get more info on commands, tools and guidelines.

First make sure to `cd` into the root folder (this is the parent of app folder). Next, run the following commands.

### Packaging

```shell
ares-package  ./app --outdir ./
```

### Installation

Default name for the created package is _webos.theo_1.0.0_all.ipk_, _tv_ is the device name that was given when setting up the device in the previous step.

This step will fail if there is no connection to the device, e.g. the device is offline, not on the same network.

```shell
ares-install webos.theo_1.0.0_all.ipk  -d tv
```

### Launch

App ID is by default _web.theo_ (you can change this in `appinfo.json`)

```shell
ares-launch webos.theo  -d tv
```

### Debug

```shell
ares-inspect webos.theo -d tv --open
```
