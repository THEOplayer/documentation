# How to investigate a ticket

This article describes how our team typically investigates an issue (i.e. bug) reported to us through a Service Desk ticket.
We encourage you to go through these steps before creating a ticket, and to document your findings in your ticket.

## Prerequisites

- The ticket is well-described and/or [C.R.U.S.P.](69-how-to-create-a-ticket.md#creating-a-great-ticket).
- The reported 'Current behavior' can be easily understood.
  - Illustrations, screenshots or screen recordings are provided to further elaborate on the issue.
- The reported 'Expected behavior' can be easily understood.
  - The affected SDK(s) are correctly labelled.
  - (The affected browsers are correctly labelled.)
- A reliable and simple reproduction page, stream or application has been shared.
  - Customer-specific application logic has been stripped when a reproduction page or application has been shared.

## Guide

Investigating an issue typically consists of 4 phases:

1. Reproducing the issue;
2. Checking whether it can be reproduced with the latest version (or other versions) of THEOplayer;
3. Pre-investigating the issue, and narrowing down the scope;
4. Investigating the root cause and determine the next action item.

![THEOplayer Jira Service Desk](../assets/img/ticket-4-stages.png)

### Reproduce the issue

The first step is to reproduce the issue. Take the reproduction stream/page/application, and confirm the issue.

- If the issue can be reproduced: continue the investigation.
- If the issue cannot be reproduced: request more information from the reporter.

![THEOplayer Jira Service Desk](../assets/img/ticket-reproduce.png)

### Check other versions

The second step is to check if the issue can still be reproduced with the latest version (or other versions) of THEOplayer.

- If using a more recent version fixes the issue: deploy the latest version of THEOplayer.
- If an older version addresses the issue: investigate a potential regression.
- If this doesn't fix the issue: continue scoping the issue.

### Narrow the scope

The goal of this step is to narrow down the scope of the issue.
After this phase, we want to determine the influence of the following components.

- Affected platforms;
  - Affected browsers;
  - Affected operating systems;
  - Affected SDKs;
- Affected THEOplayer versions;
- Affected video players.

![THEOplayer Jira Service Desk](../assets/img/tickets-scope.png)

#### Scope affected platforms

It's always useful to know which browsers, SDKs and operating systems are affected by the issue.

#### Scope affected THEOplayer versions

Whilst it's critical to share which THEOplayer versions are affected, it's even more useful to identify older (or newer) versions which are unaffected by the issue. If that's the case, THEOplayer can identify a regression, which speeds up the R&D-process.

Check which older versions are unaffected.

#### Scope affected video players

In case of an AV playback issue (e.g. freezes, errors, ...),
comparing with other video players can help in understanding whether there's a server-side issue (e.g. encoding, packaging, CDN)
or a client-side video player issue.
If all video players suffer from the issue, it's possible that the stream is not optimally encoded, packaged, etc.

Tips for comparing with other video players:

- If it's an HLS stream: Native Safari, AVPlayer, HLS.js, Shaka Player
- If it's an MPEG-DASH stream: DASH.js, ExoPlayer, Shaka Player

### Investigation

The goal of this step is to identify the cause.
Let's discuss causes related to the API, Playback, Advertisements, Analytics and DRM.

#### API

Developers implement THEOplayer through a specific API related to a specific feature.
Sometimes, an issue is caused by using a set of API-logic which triggers an edge-case.
Sometimes, a nice-to-have API might break in a new update, which in turn breaks a must-have feature.

If you can identify which API-statement causes the issue,

- you can evaluate if you can temporarily disable the statement, and potentially identify a workaround,
- and the R&D-team knows to what the root cause is related.

Below is a list of proposed action items:

1. Use a near-empty THEOplayer page (or application). Don't use autoplay or preload, or poster images, or ...; limit the API to the absolute minimum.
2. Gradually, add new statements, until the issue can be reproduced.
3. Try alternative approaches, values and states.

#### Playback

Playback issues are related to video and audio freezes, start-up failures, and crashes during playback.

1. Double-check the pre-investigation.
2. Extract information from the reporter why the issue is surfacing just now. Often, playback issues are caused by server-side changes.
3. Extract information from the reporter whether every asset is suffering from the issue.
4. Check whether the issue can be reproduced with other streams:
   - HLS: [https://cdn.theoplayer.com/video/star*wars_episode_vii-the_force_awakens_official_comic-con_2015_reel*(2015)/index.m3u8](<https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8>)
   - MPEG-DASH: [https://amssamples.streaming.mediaservices.windows.net/634cd01c-6822-4630-8444-8dd6279f94c6/CaminandesLlamaDrama4K.ism/manifest(format=mpd-time-csf)](<https://amssamples.streaming.mediaservices.windows.net/634cd01c-6822-4630-8444-8dd6279f94c6/CaminandesLlamaDrama4K.ism/manifest(format=mpd-time-csf)>)
5. Check if the issue is related to a specific video or audio quality. Manually switch to a specific quality or track, and verify whether the issue can still be reproduced. Often, the issues are caused by glitching quality-changes, or a badly encoded quality.
6. Check what is logged in chrome://media-internals.
7. Check whether there are [CORS-issues](22-how-to-remove-cors-restrictions.md).
8. In-case DRM is used, check whether the issue can also be reproduced if the asset is unprotected.

#### Advertisements

Advertisement set-ups can be quite complex, and the related issues can be quite subtle.

1. Check whether simpler versions of your set-up suffers from the issue:
   - In-case multiple ads are scheduled, check whether single ads suffer from the issue.
   - In-case pre-rolls/mid-rolls are scheduled, check whether the issue is still present if you schedule it as a post-roll/mid-roll instead.
   - In-case multiple ad pods are used inside an ad-break, check whether the issue can be reproduced with single ad pods.
   - In-case a VPAID is scheduled, check whether a VAST works instead.
   - In-case a VMAP is scheduled, check whether an altered VMAP works instead.
2. In-case Google IMA is used, check whether the issue can be reproduced at https://developers.google.com/interactive-media-ads/docs/sdks/html5/vastinspector.
3. In-case a SSAI solution is used, check whether other clients also suffer from the issue.

#### Analytics

Issues related to an analytics service usually comes in three shapes:

1. No data is being logged in the analytics service:
   - Check whether the analytics service requires a third-party SDK. If so, check whether this has been included.
2. Data is being logged incorrectly:
   1. Try alternative configurations. When is it working incorrectly?
   2. Identify the maintainer: is it THEOplayer or the analytics vendor?
   3. Find the reference implementation or documentation, and compare with the current implementation.

#### DRM

Sometimes issues are flagged as a DRM issue, whilst they are actually more generic playback issues:

- Check whether the issue can also be reproduced with unprotected streams.

In-case the issue is related to adding DRM:

- Double-check the pre-investigation. It's valuable information if -for example- the issue can be reproduced on Chrome, but not on Firefox, as this could imply that this is a platform-specific decoding issue.
- Check whether the issue is related to Widevine, PlayReady, FairPlay, or all.
- Extract information from the customer whether every DRM-protected asset is suffering from this issue.
- Check whether the issue can be reproduced with reference DRM streams. (e.g. https://demo.theoplayer.com/drm-aes-protection-128-encryption)

## Remarks

- The following resources might assist in your debugging efforts:
  - https://demo.theoplayer.com/test-your-stream-with-statistics: logs a number of events and states.
  - https://www.chromium.org/audio-video/media-internals: chrome://media-internals can help with identifying A/V decoding issues.
  - [ffprobe](https://ffmpeg.org/ffprobe.html) can help with analyzing streams and segments.
  - [MP4Box.js](https://gpac.github.io/mp4box.js/test/filereader.html) can help with analyzing MP4 files.
  - Apple's [HLS Tools](https://developer.apple.com/documentation/http_live_streaming/about_apple_s_http_live_streaming_tools) can help (e.g. Media Stream Validator).
