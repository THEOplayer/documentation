# THEOplayer Features/Modules

THEOplayer is built in a modular manner. Per license, we can activate (or disable) certain features, such as the Cache API.
Only a small subset of features are enabled by default. Commonly activated features are DASH, HLS, UI, Chromecast, Airplay, Ads, and Text Track Rendering. There are tens of features which aren't activated by default.

If you are configuring a specific feature through the THEOplayer API, and it's not working, odds are high that the feature isn't activated for your license.
You can call the snippet below to know which features are enabled for your license.

```js
THEOplayer.features
// (29) ["dash", "hls", "chromecast", "ads", "airplay", "yospace", "spotx", "vr", "conviva", "cache", "visibility", "webaudio", "youbora", "mediamelon", "moat", "texttrackrendering", "google-dai", "streamone", "v-nova", "freewheel", "agama", "ui", "relatedcontent", "social", "upnext", "contextmenu", "texttrackstyle-ui", "activequalitylabel", "upcomingadnotification"]
```

Please reach out to us if you need additional features enabled, or do it yourself using our [THEOportal][https://portal.theoplayer.com].