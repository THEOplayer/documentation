# Amino

**Amino.tv** is a leading provider of media and entertainment technology solutions, specializing in IPTV and hybrid TV devices that deliver content across various platforms. Known for their high-quality set-top boxes and software, Amino empowers service providers to offer seamless streaming experiences. The Amino H200 stands out as a high-performance, flexible set top box supporting the latest streaming protocols and standards. Additionally, Amino's Orchestrate platform offers powerful fleet management, with centralized control and monitoring for efficient and reliable operations across large deployments.

Getting started

If you haven't already, begin by following the [Getting Started](https://docs.dolby.io/streaming-apis/docs/getting-started) tutorial to start your first broadcast. You'll need your Millicast account ID and stream name for the steps described below.

See the official [Amino website](https://www.amino.tv/) for documentation, installation instructions, and additional support.

## Amino H200[​](#amino-h200 "Direct link to Amino H200")

You'll need a few things to get started with this integration:

* An Amino H200 device with stable internet connection.
* A video monitor or TV with HDMI input.
* The serial number for your Amino H200 device.
* Appropriate access to Amino Orchestrate System and Manage Dashboards.
* Installation of the channel Zapper application along with firmware version 25.6.2420.5R or later.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Amino-Website-H200Series-1b622c596af7da15fc6c55a24ada71ef.png)

### 1. Register Your Amino Device[​](#1-register-your-amino-device "Direct link to 1. Register Your Amino Device")

*If you are familiar with the Amino H200 and already registered your device you can skip this step.*

You'll need to take a few steps to get the H200 up and running:

* Log into [Amino Orchestrate](https://system.amino-orchestrate.com/system/#dashboard/main).
* Select Manage Devices and register your new hardware.
* Enter the unique serial number so the device is available for configuration.
* Install the Zapper application.

Once successful, you should be able to open the Zapper application from the welcome screen.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/amino-h200-welcome-screen-c427cc0b678ce9bd5504f93bd1832808.jpeg)

You can find more detailed instructions from here: <https://www.amino.tv/welcome-to-the-h200>

### 2. Create a Management Group and Update Firmware[​](#2-create-a-management-group-and-update-firmware "Direct link to 2. Create a Management Group and Update Firmware")

Amino Orchestrate uses groups to make fleet management and deploying simple. To create a new group for your device(s), click on the *Manage Groups* tab and the *Create Group* button. Give your group a name, device type, and any other tags to help you manage your devices.

Select your group and then click on *Group details* from the right side of the interface.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/amino-group-details-bff96abaa0ac662437a71a10c72a26bc.png)

Select the *Target Firmware* you want to run on the device. This is maintained by the Amino team and should be 25.6.2420.5R or more recent.

### 3. Add Millicast Streams to Channel Zapper[​](#3-add-millicast-streams-to-channel-zapper "Direct link to 3. Add Millicast Streams to Channel Zapper")

From the same *Group details* view, you will need to update your *Application Settings*. The Channel Zapper application is a streamlined and user-friendly interface designed for fast channel switching between streaming sources.

Click the *+ Add / Remove Parameters* button to add these Application Settings:

* tvapp.package\_id
* webapp.lineup\_json

Optional parameter:

* player.dolby.min\_jitter\_delay\_ms

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Screenshot_2024-10-17_at_2.33.48_PM-2257ae4161a2f261fa6d8673e6c6e76b.png)

Once you've hit apply on the set of parameters to be added to Application Settings, enter in the corresponding Values for each parameter (Key = Value):

* tvapp.package\_id = zapper

The *webapp.lineup\_json* parameter defines the streams that you can toggle between when using the channel up and channel down buttons on the remote and is defined by a JSON.

The format for the JSON will look like this and will be what you enter in as the *Value* for *webapp.lineup\_json*:

```json
[
  {
    "name": "1",
    "desc": "Dolby Trailer",
    "url": ["dolbyio://7csQUs/trailer"]
  }
]

```

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Screenshot_2024-10-17_at_2.31.18_PM-9a85fa5927f045c666bd7349064b76e9.png)

The url follows the pattern **`dolbyio://{Account ID}/{Stream Name}`** and the name and desc are displayed on the screen briefly upon changing channels.

You can add as many streams as you need to the list, enter this as the value, separated by comma and then click the Save button. Clicking on the *Group reboot* will restart any devices in the group so that they have the latest channel list.

For the optional *player.dolby.min\_jitter\_delay\_ms* parameter, you can specify the amount of delay in milliseconds to be added to your stream.

Example:

* player.dolby.minjitter\_delay\_ms = 100

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/Screenshot_2024-10-17_at_2.53.10_PM-370a0e595727b754c5097cbb153a5538.png)

### 4. View Your Streams[​](#4-view-your-streams "Direct link to 4. View Your Streams")

After the devices have restarted, launch the Zapper application and you should begin seeing your real-time streams.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/amino-dolby-trailer-0bdc05ebba9c22f1982a7ee3621637a8.jpeg)

## Troubleshooting[​](#troubleshooting "Direct link to Troubleshooting")

### Cannot Access Manage Devices or Manage Groups[​](#cannot-access-manage-devices-or-manage-groups "Direct link to Cannot Access Manage Devices or Manage Groups")

If you are unable to complete some of the steps above such as Managing Groups or Devices, insure that you have the appropriate levels of access control for setting up the device.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/amino-roles_2-62a30862f02c17e8ff542fa7ae9b6d67.png)
