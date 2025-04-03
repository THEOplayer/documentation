# OBS WebRTC Changes

Releases of the [open-source WebRTC fork](https://github.com/CoSMoSoftware/OBS-studio-webrtc) of Open Broadcaster Software (OBS).

## 2024-03-25 - [1.5.3](https://github.com/CoSMoSoftware/OBS-studio-webrtc/releases/tag/1.5.3-28.1.2-m112)

#### Changes

The macOS x64 deployment target is now set to 10.14.

---

## 2023-11-07 - [1.5.2](https://github.com/CoSMoSoftware/OBS-studio-webrtc/releases/tag/1.5.2-28.1.2-m112)

#### Fixes

Fixed an issue where WebRTC did not reach the turn server.

---

## 2023-09-01 - [1.5.1](https://github.com/CoSMoSoftware/OBS-studio-webrtc/releases/tag/1.5.1-28.1.2-m112)

#### Features

- The product now uses WebRTC m112.
- Added a user agent string for WebSocket.
- Added support for HDR color space Rec. 2100 in VP9 10 bit.
- Added the I010 color format.

#### Fixes

- Fixed Rec. 601 color rendering issue.
- Fixed HDR white color level issue.

---

## 2023-04-18 - [1.5.0](https://github.com/CoSMoSoftware/OBS-studio-webrtc/releases/tag/1.5.0-28.1.2-m108)

#### Features

- The product now uses OBS-Studio 28.1.2, WebRTC m108, and obs-ndi 4.11.1.
- Introduced the ability to enable and disable congestion control bandwidth estimation from the settings panel and the stream / advanced settings.

#### Fixes

Fixed a crash that occurred after starting and stopping a stream repeatedly.
