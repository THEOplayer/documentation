---
title: 'OBS Enhanced Multitrack Video'
slug: /obs-enhanced-broadcasting-multitrack-video
---

> 🚧 Beta: This feature is in the works
>
> This feature is still under development and may be updated, changed, or deprecated without notice. We welcome your feedback.
>
> For OBS support, you can follow the following pull-request for the OBS project to merge this functionality with Millicast. Once this PR is merged the functionality will be put into the next release of OBS: https://github.com/obsproject/obs-studio/pull/11509

# MultiTrack Video with OBS

Multitrack video in OBS support creating multiple "renditions" or qualities that OBS sends to Millicast so that the end-viewer can choose which quality to watch or let it happen automatically. This is called Adaptive Bitrate (ABR).

![](../assets/img/842826436d56486b6a0a14b06bbcda1958658d3cfa5d010236934915-abr.png)

To use this feature, _you will need OBS version 30.2 at a minimum_. Then, enable Enhanced Broadcasting within the broadcast software settings.

![](../assets/img/7850cb180ea40539c6c3c9755d788a26911d7131aeaf6ca760e0601b-obs-multi-track-video.png)

## Automatic Stream Configuration

Understanding complicated video settings to achieve the highest video quality can be time consuming and frustrating. By sending information about your setup to Dolby Millicast, automatic stream configuration removes the need for offline trial and error to find the correct settings. A server-side algorithm then returns the best possible configuration for broadcast software that optimizes the viewer experience given constraints in your setup.

## Minimum System Requirements

While we work to increase support for other systems, these are the minimum requirements:

- GPU and Driver Version
  - NVIDIA GeForce 900-series or newer with NVIDIA driver 545.92 or newer, AMD Radeon RX 6000/7000 Series or newer with AMD Adrenalin 24.4.1 minimum
- Operating System
  - Windows 10 or Windows 11
- Broadcast Software
  - OBS Studio v30.2 (or newer), XSplit Broadcaster 4.5.2406.1801 (or newer)
- Network
  - We recommend a minimum sustained upload bandwith availability of 12 mbps
