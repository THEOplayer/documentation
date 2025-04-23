---
title: 'Command Line Interface'
slug: /command-line-interface
---

## Overview

This is the Command Line Interface (CLI) by which you can interact with the Millicast Platform from your terminal.

This includes getting media sources, capturing, publishing (with or without Scalable Video Coding and simulcast), subscribing, and directing output to NDI, and Blackmagic Decklink cards' SDI and HDMI.

The CLI also allows saving of config in a file and autocompletion on some platforms. More details can be found on this [readme](https://github.com/millicast/millicast-cli#readme). Get the CLI [here](https://github.com/millicast/millicast-cli/releases).

The CLI is currently supported on the following platforms.
| Platform | Versions |
| --- | --- |
| Windows | Win10 |
| MacOS | _Catalina (Intel)_<br/> Big Sur (Intel) |
| Linux | Ubuntu 20 |

## Installation

Please refer to the instructions here [readme](https://github.com/millicast/millicast-cli#readme) to install the CLI on your system.

## Using the CLI

The CLI executable is named `mccli` (for MilliCast Command Line Interface).
To check all the available commands and what they do, show the help by typing

```bash
mccli help
```

For now the auto-completion is only available for BASH.

With the CLI, you have a command to list available sources, setup a configuration to publish/subscribe with the desired source and your Dolby.io Real-time Streaming credentials, and have the ability to switch between several different configuration.

### List

With this command, you can list all the input or output sources available and supported codecs.
Basically, you have two categories : audio and video.

So you first need to specify the category, then specify the info you want to get separated by a '.'.
For instance, if you want to list all the video input sources just type :

```bash
mccli list video.source
```

All sources name are prefixed by their type followed by "://". After this prefix, you can see their actual name.
For video, you can see these prefixes

- **monitor://** : This is to capture your entire screen
- **app://** : Capture a specific window of an app open on your computer
- "**device://"** : Camera connected to the computer
- "**decklink://"** : a DeckLink device.
- **ndi://** : NDI video source

For audio, you can get

- **mic://** : for microphone
- **device://"** : for playback device
- **ndi://** and "**decklink://** : same as video.

We will now see how to select one of the source to configure the session.

### Manage your configuration

#### Setup a basic configuration

With the _config_ command, you can set up your configuration.
There is two categories, **credentials** and **media**.

The credentials are related to your Dolby.io Real-time Streaming account : stream name, account id ...
You can find this information on your Dolby.io dashboard.

So, to set the stream name for example :

```bash
mccli config credentials.stream_name "kyhuh"
```

You can see the other field in the help to set up completely your Dolby.io Real-time Streaming credentials.

Concerning the media, you have two sub-categories, audio and video, with the exact same fields as the list command.
You must copy/paste the name of the source you want use as listed by the **list** command, and put that name between quote.

```bash
$ mccli list video.source
* ndi://NDI_SOURCE_1
* ndi://NDI_SOURCE_2

$ mccli config media.video.source "ndi://NDI_SOURCE_1"

```

For both **credentials** and **media**, if you do not specify a value, it will display the current value :

```bash
$ mccli config media.video.source
video.source = "ndi://NDI_SOURCE_1"
```

#### Custom configuration

You are able to setup several configurations and switch between them. For example, have a fixed configuration for a specific stream name, or with a different camera.

In order to do that, first add your config with your custom name.

```bash
$ mccli config credentials add custom_name
```

Then, you have to use it so it can be effective.

```bash
$ mccli config credentials use custom_name
```

Now, every change you made in your credentials will be saved for that config.

If you want to remove it :

```bash
$ mccli config credentials remove custom_name
```

Note, that config is only for credentials. You can create one custom config per category.

There default config, the one you are using before using any custom config, is named "default". You can switch back to it at any time, without removing the other :

```bash
$ mccli config credentials use default
```

### Publish / Subscribe

Just run :

```bash
mccli publish
```

(replace publish with subscribe if you want to subscribe).
You can specify a set of options. See the help for those.

If you did not configure the media to use, it will publish the first source found when getting the available sources, and same for the codecs (usually VP8 for video and opus for audio by default).

Once the publish is successful, you will stay in a blocking state as long as it is publishing. To stop publishing, either type 'q' and then press enter, or send an EOF signal (CTRL-D on bash/zsh).

### Errors that can happen

#### Failed to initialize ADM

When using the CLI over SSH on Linux, this error can happen:

```bash
##
## Fatal error in: ../../media/engine/adm_helpers.cc, line 39
## last system error: 88
## Check failed: 0 == adm->Init() (0 vs. -1)
## Failed to initialize the ADM.Aborted (core dumped)
```

This is because of the linux audio stack not initialized when using ssh.
You can fix it by, first, if that was not the case, enable X11 forwarding when connecting to SSH :

```bash
ssh -X user@host
```

Then run these commands:

```
pax11publish -r
pulseaudio --start
```

This should solve the problem.
