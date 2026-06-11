# Social Sharing

This article describes how to implement common use cases related to Social Sharing feature.

The Social Sharing feature adds a component to the UI which enables the viewers to share the page across media, for example through Twitter and Facebook.

The Social Sharing feature exposes the Social API. This API allows developers to configure the URLs and (social) channels.

![Social Sharing](/documentation/pr-preview/pr-690/assets/images/social-sharing-92115ada8662968068768f40ccf41832.png "Social Sharing")

## SDKs[​](#sdks "Direct link to SDKs")

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| ------- | ----------- | ------- | -------- | -------------- | -------------- |
| Yes     | No          | No      | No       | No             | N/A            |

The Social Sharing API is a UI feature. It's currently unavailable on all SDKs except the Web SDK because the underlying THEOplayer CSS and JavaScript modules aren't activated. This means that you also can't enable it using the guide located at [How to add CSS or JavaScript files to an Android/iOS project](/documentation/pr-preview/pr-690/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios/).

## Code examples[​](#code-examples "Direct link to Code examples")

##### Web SDK[​](#web-sdk "Direct link to Web SDK")

The Social Sharing API is currently only available on the Web SDK.

* Reference API: [Social Sharing API](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/interfaces/SocialSharing.html)
* Online demo: [Social Sharing Demo](https://demo.theoplayer.com/social-sharing)

```js
player.social.url = 'https://demo.theoplayer.com/social-sharing';
player.social.items = [
  {
    label: 'Facebook',
    icon: 'https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png',
    src: 'http://www.facebook.com/sharer/sharer.php?u=<URL>',
  },
  {
    label: 'Twitter',
    icon: 'https://s-media-cache-ak0.pinimg.com/originals/f3/6f/51/f36f511b261596a2debe85d844bb1b87.png',
    src: 'http://twitter.com/intent/tweet?url=<URL>',
  },
  {
    label: 'Reddit',
    icon: 'https://vignette3.wikia.nocookie.net/hayday/images/1/10/Reddit.png/revision/latest?cb=20160713122603',
    src: 'http://www.reddit.com/submit?url=<URL>',
  },
  {
    label: 'Direct link',
    src: 'http://demo.theoplayer.com/social-sharing',
  },
  {
    label: 'Embed',
    text: '<iframe width="640" height="360" src="http://demo.theoplayer.com/social-sharing" frameborder="0" allowfullscreen>\n</iframe>',
  },
];

```

##### Android (TV) SDK[​](#android-tv-sdk "Direct link to Android (TV) SDK")

This API is currently not available on the Android (TV) SDK.

##### iOS (/tvOS) SDK[​](#ios-tvos-sdk "Direct link to iOS (/tvOS) SDK")

This API is currently not available on the iOS (/tvOS) SDK.

## Related articles[​](#related-articles "Direct link to Related articles")

* [Why does the Network API not work on iOS devices?](/documentation/pr-preview/pr-690/theoplayer/faq/why-does-network-api-not-work-on-ios-devices.md)
