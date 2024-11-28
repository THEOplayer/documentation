# How to set up VAST and VMAP ads?

This article explains how to schedule client-side VAST and VMAP advertisements through THEOplayer.

- a VAST advertisement is a single ad break, and you can position it as a pre-roll, mid-roll or post-roll.
- a VMAP advertisement is a playlist of ad breaks, and can contain any combination of pre-rolls, mid-rolls and/or post-rolls.

Through the THEOplayer API, app developers can define which "ad integration" they want to use.
THEOplayer currently supports 4 types of client-side ad integrations:

1. Default
2. [Google IMA](../../how-to-guides/01-ads/10-google-ima.md)
3. [SpotX](../../how-to-guides/01-ads/07-spotx.md)
4. [FreeWheel](../../how-to-guides/01-ads/06-freewheel.md)

This article explains scheduling VAST and VMAP ads through the "default" ad integration.
Scheduling VAST and VMAP ads through other ad integrations is very similar,
so consider this article as a reference guide.
For example, if you use Google Ad Manager (i.e. DoubleClick), then this article allows you to better understand
how to schedule VAST and VMAP ads, but you want to use the [Google IMA](../../how-to-guides/01-ads/10-google-ima.md) integration (and API)
to actually implement it in your app.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | -------- |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |       No       | No       |

## VAST

Setting up a client-side VAST advertisement means scheduling a VAST ad tag.
As an app developer, you associate a VAST ad tag (URL) (e.g. `//cdn.theoplayer.com/demos/ads/vast/vast.xml`) with a time offset.
Additionally, when using the default ad integration, you can also specify after how many seconds a VAST ad may be skipped.
You may also schedule multiple ad tags.

Let's consider the following common use-cases:

1. [Scheduling a single pre-roll](#scheduling-a-single-pre-roll)
2. [Scheduling two pre-rolls, two mid-rolls and one post-roll](#scheduling-two-pre-rolls-two-mid-rolls-and-one-post-roll)
3. [Scheduling a skippable mid-roll](#scheduling-a-skippable-mid-roll)

### Scheduling a single pre-roll

The following snippets demonstrate how to schedule a single pre-roll.

#### Web SDK

You configure one [`AdDescription`](pathname:///theoplayer/v6/api-reference/web/interfaces/AdDescription.html) in the `ads` property of your [`SourceConfiguration`](pathname:///theoplayer/v6/api-reference/web/interfaces/SourceConfiguration.html).
In this `AdDescription`,

- you set the value of `sources` to your ad tag URL.
- you set the value of `timeOffset` to `"start"` (or `00:00:00` or `0%`) to indicate that it's a pre-roll.

```js
player.source = {
  sources: [
    {
      src: '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',
    },
  ],
  ads: [
    {
      sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',
      timeOffset: 'start',
    },
  ],
};
```

If you wanted to schedule a post-roll instead of a pre-roll, you set the value of `timeOffset` to `"end"`.

If you want to schedule a mid-roll instead of a pre-roll, you set the value of `timeOffset` to the `HH:MM:SS` format.
For example, to schedule an advertisement at the 15s mark, you set the value of `timeOffset` to `"00:00:15"`.

#### Android SDK

You configure one [`AdDescription`](pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/source/addescription/GoogleImaAdDescription.Builder.html) in the `ads` property of your [`SourceDescription`](pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/source/SourceDescription.Builder.html#ads-com.theoplayer.android.api.source.addescription.AdDescription...-).
In this `AdDescription`,

- you set the value of `sources` to your ad tag URL.
- you set the value of [`timeOffset`](pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/source/addescription/GoogleImaAdDescription.Builder.html#timeOffset-java.lang.String-) to `"start"` (or `00:00:00` or `0%`) to indicate that it's a pre-roll.

```java
TypedSource typedSource = new TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")
    .build();

String vastAdTag = "//cdn.theoplayer.com/demos/ads/vast/vast.xml";
String offset = "start";
AdDescription ad = new GoogleImaAdDescription.Builder(vastAdTag).timeOffset(offset).build();

SourceDescription sourceDescription = new SourceDescription.Builder(typedSource)
    .ads(ad)
    .build();
theoplayerView.getPlayer().setSource(sourceDescription);
```

If you wanted to schedule a post-roll instead of a pre-roll, you set the value of `timeOffset` to `"end"`.

If you want to schedule a mid-roll instead of a pre-roll, you set the value of `timeOffset` to the `HH:MM:SS` format.
For example, to schedule an advertisement at the 15s mark, you set the value of `timeOffset` to `"00:00:15"`.

#### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

You configure one [`THEOAdDescription`](pathname:///theoplayer/v6/api-reference/ios/Classes/THEOAdDescription.html) in the `ads` property of your [`SourceDescription`](pathname:///theoplayer/v6/api-reference/ios/Classes/SourceDescription.html#/s:13THEOplayerSDK17SourceDescriptionC3adsSayAA02AdD0_pGSgvp).
In this `AdDescription`,

- you set the value of `sources` to your ad tag URL.
- you set the value of [`timeOffset`](<pathname:///theoplayer/v6/api-reference/ios/Classes/THEOAdDescription.html#/c:@M@THEOplayerSDK@objc(cs)THEOAdDescription(py)timeOffset>) to `"start"` (or `00:00:00` or `0%`) to indicate that it's a pre-roll.

```swift
let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")

let vastAdTag = "//cdn.theoplayer.com/demos/ads/vast/vast.xml"
let offset = "start"
let ad = THEOAdDescription(src : vastAdTag, timeOffset: offset)

let source = SourceDescription(source : typedSource, ads: [ad])
theoplayer.source = source
```

If you wanted to schedule a post-roll instead of a pre-roll, you set the value of `timeOffset` to `"end"`.

If you want to schedule a mid-roll instead of a pre-roll, you set the value of `timeOffset` to the `HH:MM:SS` format.
For example, to schedule an advertisement at the 15s mark, you set the value of `timeOffset` to `"00:00:15"`.

### Scheduling two pre-rolls, two mid-rolls and one post-roll

Scheduling multiple VAST ads is only slightly different from scheduling a single VASt ad.
Instead of passing along one ad description to your array, you pass along multiple ad descriptions to the array.

The following snippets demonstrate how you'd configure two pre-rolls, two mid-rolls and one post-roll through the usage of VAST ads.

#### Web SDK

```js
player.source = {
  sources: [
    {
      src: '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',
    },
  ],
  ads: [
    {
      sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',
      timeOffset: 'start',
    },
    {
      sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',
      timeOffset: 'start',
    },
    {
      sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',
      timeOffset: '00:00:15',
    },
    {
      sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',
      timeOffset: '00:00:30',
    },
    {
      sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',
      timeOffset: 'end',
    },
  ],
};
```

#### Android SDK

```java
TypedSource.Builder typedSource = new TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8");
SourceDescription.Builder sourceDescription = new SourceDescription.Builder(typedSource.build());

sourceDescription.ads(
    new GoogleImaAdDescription.Builder("//cdn.theoplayer.com/demos/ads/vast/vast.xml")
        .timeOffset("start")
        .build(),
    new GoogleImaAdDescription.Builder("//cdn.theoplayer.com/demos/ads/vast/vast.xml")
        .timeOffset("start")
        .build(),
    new GoogleImaAdDescription.Builder("//cdn.theoplayer.com/demos/ads/vast/vast.xml")
        .timeOffset("00:00:15")
        .build(),
    new GoogleImaAdDescription.Builder("//cdn.theoplayer.com/demos/ads/vast/vast.xml")
        .timeOffset("00:00:15")
        .build(),
    new GoogleImaAdDescription.Builder("//cdn.theoplayer.com/demos/ads/vast/vast.xml")
        .timeOffset("end")
        .build()
);

theoplayerView.getPlayer().setSource(sourceDescription.build());
```

#### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

```swift
let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")

let vastAdTag = "//cdn.theoplayer.com/demos/ads/vast/vast.xml"
let ad1 = THEOAdDescription(src : vastAdTag, timeOffset: "start")
let ad2 = THEOAdDescription(src : vastAdTag, timeOffset: "start")
let ad3 = THEOAdDescription(src : vastAdTag, timeOffset: "00:00:15")
let ad4 = THEOAdDescription(src : vastAdTag, timeOffset: "00:00:15")
let ad5 = THEOAdDescription(src : vastAdTag, timeOffset: "stop")
let source = SourceDescription(source : typedSource, ads: [ad1, ad2, ad3, ad4, ad5])

theoplayer.source = source
```

### Scheduling a skippable mid-roll

When using the "default" ad integration, you can define when an VAST ad can be skipped through the `skipOffset` property.

However, it is recommended to leverage the `skipOffset` property in your VAST (or VMAP) file instead, and adhere to the [VAST standard](https://iabtechlab.com/standards/vast/),
because this offers the widest support across ad integrations and platforms.

The following snippets demonstrate how to allow viewers to skip a mid-roll after 5 seconds.
Note that the `skipOffset` property is not supported when using other ad integrations, such as Google IMA, SpotX and FreeWheel (because we're dependent on third-party APIs).

#### Web SDK

```javascript
player.source = {
  sources: [
    {
      src: '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',
    },
  ],
  ads: [
    {
      sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',
      timeOffset: '00:00:15',
      skipOffset: '5',
    },
  ],
};
```

#### Android SDK

```java
TypedSource.Builder typedSource = new TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8");
SourceDescription.Builder sourceDescription = new SourceDescription.Builder(typedSource.build());

sourceDescription.ads(
    GoogleImaAdDescription.Builder("//cdn.theoplayer.com/demos/ads/vast/vast.xml")
        .timeOffset("00:00:15")
        .skipOffset("5")
        .build()
);

theoplayerView.getPlayer().setSource(sourceDescription.build());
```

#### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

```swift
let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")

let ad = THEOAdDescription(src : "//cdn.theoplayer.com/demos/ads/vast/vast.xml", timeOffset: "00:00:15", skipOffset: "5")
let source = SourceDescription(source : typedSource, ads: [ad])

theoplayer.source = source
```

## VMAP

Scheduling a VMAP advertisement is similar to scheduling a VAST advertisement.
However, you don't define the `timeOffset`, because the VMAP playlist defines the offsets of each ad break it contains.

The snippets below demonstrate how to configure a VMAP advertisement.

### Web SDK

```js
// Declare a VMAP ad source. No timeOffset here, because the VMAP itself arranges this.
let vmapSource = '//cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml';
let ad = [{ sources: vmapSource }];

let source = {
  sources: [typedSource],
  ads: ad,
};
player.source = source;
```

### Android SDK

```java
TypedSource typedSource = TypedSource.Builder(getString(R.string.defaultSourceUrl))
    .build();

String vmapSource = "//cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml";
AdDescription ad = GoogleImaAdDescription.Builder(vmapSource).build();

SourceDescription sourceDescription = SourceDescription.Builder(typedSource)
    .ads(ad)
    .build();
tpv.getPlayer().setSource(sourceDescription);
```

### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

```swift
let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")

let vmapSource = "//cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml"
let ad = THEOAdDescription(src : vmapSource)

let source = SourceDescription(source : typedSource, ads: [ad])
theoplayer.source = source
```

## Dynamic scheduling

If you've read our [Advertising User Guide](../../knowledge-base/01-advertisement/01-user-guide.md#dynamic-ad-scheduling),
you might have picked up that you can also dynamically schedule VAST advertisements in THEOplayer.
All previous samples in this article use static, pre-defined scheduling -- you schedule the ads whenever you schedule the stream.
With dynamic scheduling, you schedule ads at runtime.

You use the `Ads` interface to schedule an `Ad Description` at runtime.
More specifically, you invoke the `ads.schedule(<yourAdDescription>)` function when your video is already playing.

Note that specifying the `timeOffset` is optional, and that this value is an absolute value.
For example, let's consider that your current playhead position is at the 20 seconds mark,
and that you want a and you schedule an ad at the 30 seconds mark. To achieve this, you would set `timeOffset: "00:00:30"`,
and not to `timeOffset: "00:00:10"`, because this would be 10 seconds in the past, and the ad would instantly start playing.

The following samples illustrate the `schedule` function across different SDKs.

### Web SDK

Invoking the following function when the video is already playing will instantly schedule the VAST ad to be played.

```javascript
player.ads.schedule({
  sources: '//cdn.theoplayer.com/demos/ads/vast/vast.xml',
});
```

### Android SDK

Invoking the following function when the video is already playing will instantly schedule the VAST ad to be played.

```java
theoplayerView.getPlayer().getAds().schedule(new GoogleImaAdDescription.Builder("//cdn.theoplayer.com/demos/ads/vast/vast.xml").build());
```

### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

Invoking the following function when the video is already playing will instantly schedule the VAST ad to be played.

```swift
player.ads.schedule(adDescription: THEOAdDescription(src: "//cdn.theoplayer.com/demos/ads/vast/vast.xml"))
```
