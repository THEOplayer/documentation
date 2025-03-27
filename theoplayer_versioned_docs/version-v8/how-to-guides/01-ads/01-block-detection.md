# Adblock detection

The THEOplayer Ads API allows developers to detect adblockers, and react accordingly.
More specifically, you can either A) specify a stream configuration that disables playback when an ad blocker
is detected, and show a default error message, or either B) detect an `aderror` event and implement a custom handler.

The screenshot below illustrates the default error message.

![Ad block detection](../../assets/img/ad-blocker-detected-2021.png 'Adblock detection')

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     N/A     |   N/A   |   N/A    |      N/A       |      N/A       |

## Usage

Adblock detection is typically a challenge in browsers. Hence, SDKs other than the Web SDK are considered "N/A" (i.e. not applicable).
THEOplayer does not prevent playback by default when an ad blocker is detected.

As explained in the intro, you can either A) configure your stream configuration to prevent playback and show a default error message,
or either B) implement an error event handler to implement a custom behavior.

### Stream configuration

When you set the `blockContentIfAdError` to `true` in your stream configuration (i.e. [SourceConfiguration](pathname:///theoplayer/v8/api-reference/web/interfaces/SourceConfiguration.html#blockContentIfAdError)),
then playback will be stopped, and a default error message will be shown.

The snippet below demonstrates how you could implement this `blockContentIfAdError` property in a stream configuration.

```js
player.source = {
  sources: {
    src: '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',
  },
  ads: [
    {
      sources:
        'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=',
    },
  ],
  blockContentIfAdError: true,
};
```

Through localization, you could rename the default error message, as demonstrated below.

```javascript
var player = new THEOplayer.Player(document.querySelector('.video-js'), {
  ui: {
    language: 'en',
    languages: {
      en: {
        'Starting ads was not possible. Turn off your AdBlocker and try again.': 'Disable your AdBlocker.',
      },
    },
  },
  libraryLocation: '<your-library-location>',
});
```

When you go for this approach, it's important that you validate and correctly specify the current default error message.
For example, in THEOplayer 2.81.0, the default error message was `Starting ads was not possible. Turn off your AdBlocker and try again.`.

If you want to customize beyond renaming the default error message,
then you could try to do custom DOM manipulation and custom CSS queries.
However, it might be advised to leverage the `aderror` event, as explained in the next section, if you truly want to customize the behavior.

### Error event

Alternatively, you can detect an ad blocker through the `aderror` event.
If you detect this event, you could implement a custom behavior, such as stopping playback (e.g. through `player.stop()`) and drawing an overlay.

The callback event may be differently formatted depending on your selected ad integration.

If you're using the [Google IMA](10-google-ima.md) ad integration, your callback event will have a `problemType` property that will equal `"adblock"`.

```javascript
player.ads.addEventListener('aderror', function (event) {
  // if using the Google IMA SDK, then your event looks like this:
  // {
  //  "type": "aderror",
  //  "date": "2021-03-09T18:18:03.093Z",
  //  "ad": null,
  //  "problemType": "adblock",
  //  "message": "adblock",
  //  "source": {
  //    "src": "https://pubads.g.doubleclick.net/gampad/ads?..."
  //  }
  // }
  // so, to detect an ad blocker, you can do
  if (event.problemType == 'adblock') {
    // and do something else
  }
});
```

If you're using the default ad integration, your callback event will have a `problemType` property that will equal `"network"`.

```javascript
player.ads.addEventListener('aderror', function (event) {
  // if using the default ad integration, then your event looks like this:
  // {
  //   "type": "aderror",
  //   "date": "2021-03-09T19:22:15.171Z",
  //   "ad": null,
  //   "problemType": "network",
  //   "message": "The ad source could not be loaded.",
  //   "errorCode": 100,
  //   "source": {
  //     "src": "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator="
  //   }
  // }
  // so, to detect an ad blocker, you can do
  if (event.problemType == 'network') {
    // and do something else
  }
});
```

## Resources

Below are some resources on adblock detection through the Ads API:

- API reference: [Ads API](pathname:///theoplayer/v8/api-reference/web/interfaces/Ads.html)
- Online demo: [Adblock Detection Demo](https://demo.theoplayer.com/adblock-detection)
- Advertisement guide: [Advertising User Guide](../../knowledge-base/01-advertisement/01-user-guide.md) (mentions adblock detection)
