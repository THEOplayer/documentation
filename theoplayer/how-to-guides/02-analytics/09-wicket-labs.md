# Wicket Labs

[Wicket Labs](https://www.wicketlabs.com/) is an audience insights platform for video, and offers products like the "[Wicket Scoreboard](https://www.wicketlabs.com/wicket-scorecard/)".

To generate these insights, a video player emits playback events to a third-party database service (e.g. Firebase).
Wicket Labs provides [guidelines](https://www.wicketlabs.com/resources/knowledge-base/how-to-setup-firebase-for-ott-video-services/) on how to format these playback events.
Wicket Labs then pulls the data from the selected third-party database service, and integrates it into their platform.

THEOplayer and Wicket Labs publish [sample integrations on Github](https://github.com/THEOplayer/samples-wicket-labs-html5-sdk) to bootstrap developers.

### Table of Contents

- [SDKs](#sdks)
- [Connecting Wicket Labs with THEOplayer](#connecting-wicket-labs-with-theoplayer)
- [Related links](#related-links)

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
| Custom  |   Custom    | Custom  |  Custom  |     Custom     |     Custom     |

## Connecting Wicket Labs with THEOplayer

An integration with Wicket Labs can be integrated on-top of THEOplayer.

1. As a customer of Wicket Labs, you need to verify that Wicket Labs can ingest data from your selected database solution (e.g. Firebase).
   _(It should be noted that Wicket Labs does not provide its own database service to store playback events.
   Instead, Wicket Labs plugs into your database service.)_
2. As a customer of Wicket Labs and THEOplayer, you need to emit the playback events ([as defined per Wicket Labs](https://www.wicketlabs.com/resources/knowledge-base/how-to-setup-firebase-for-ott-video-services/)) to your database service.
   In other words, you need to hook into certain events emitted by THEOplayer, reformat them, and re-emit them to your database service.

The technologies offered by THEOplayer and Wicket Labs can be combined on all [THEOplayer-supported platforms](https://www.theoplayer.com/).

- To facilitate the implementation of Wicket Labs [related to THEOplayer], Wicket Labs and THEOplayer collaborate on publicly available code samples. These code samples are published as Git repositories on https://github.com/THEOplayer.
- Developers are free to do their custom integration of Wicket Labs and THEOplayer, or may modify the publicly available code samples.
  - Wicket Labs' article on [How to Setup Firebase for OTT Video Services](https://www.wicketlabs.com/resources/knowledge-base/how-to-setup-firebase-for-ott-video-services/) is a great starting point if you're interested in customizing.
  - THEOplayer's article on [Custom Analytics Integration](../../how-to-guides/02-analytics/06-custom-analytics-integration.md) may help developers out.

### Web SDK

THEOplayer and Wicket Labs host a Github repository at [https://github.com/THEOplayer/samples-wicket-labs-html5-sdk](https://github.com/THEOplayer/samples-wicket-labs-html5-sdk).
This repository provides a sample implementation for the THEOplayer Web SDK with Firebase as the database service.

This repository may also be useful if you're using another database service, because the repository demonstrates the correct order of hooking into the playback events related to Wicket Labs,
and how to format them. In other words: if you're using another database service, you just need to emit the events to a different source.

### Android (TV) SDK

THEOplayer and Wicket Labs currently do not host a sample implementation for Android-based platforms on Github.

Developers are encouraged to use https://github.com/THEOplayer/samples-wicket-labs-html5-sdk and https://www.wicketlabs.com/resources/knowledge-base/how-to-setup-firebase-for-ott-video-services/ as a starting point.
Additionally, developers are encouraged to reach out to their contacts at THEOplayer and/or Wicket Labs if they need assistance,
which could prompt THEOplayer and Wicket Labs into publishing a sample implementation on Github.

### iOS (/tvOS) SDK

THEOplayer and Wicket Labs currently do not host a sample implementation for iOS or tvOS on Github.

Developers are encouraged to use https://github.com/THEOplayer/samples-wicket-labs-html5-sdk and https://www.wicketlabs.com/resources/knowledge-base/how-to-setup-firebase-for-ott-video-services/ as a starting point.
Additionally, developers are encouraged to reach out to their contacts at THEOplayer and/or Wicket Labs if they need assistance,
which could prompt THEOplayer and Wicket Labs into publishing a sample implementation on Github.

## Related links

- github.com/THEOplayer: [https://github.com/THEOplayer/samples-wicket-labs-html5-sdk](https://github.com/THEOplayer/samples-wicket-labs-html5-sdk)
- wicketlabs.com: [How to Setup Firebase for OTT Video Services](https://www.wicketlabs.com/resources/knowledge-base/how-to-setup-firebase-for-ott-video-services/)
