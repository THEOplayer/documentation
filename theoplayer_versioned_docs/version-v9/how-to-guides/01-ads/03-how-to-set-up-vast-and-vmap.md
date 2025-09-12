# How to set up VAST and VMAP ads?

This article explains how to schedule client-side VAST and VMAP advertisements through THEOplayer.

- A VAST advertisement is a single ad break, and you can position it as a pre-roll, mid-roll or post-roll.
- A VMAP advertisement is a playlist of ad breaks, and can contain any combination of pre-rolls, mid-rolls and/or post-rolls.

Through the THEOplayer API, app developers can define which "ad integration" they want to use.

THEOplayer currently supports 4 types of client-side ad integrations:

1. CSAI
2. [Google IMA](../../how-to-guides/01-ads/10-google-ima.md)
3. [SpotX](../../how-to-guides/01-ads/07-spotx.md)
4. [FreeWheel](../../how-to-guides/01-ads/06-freewheel.md)

This article explains scheduling VAST and VMAP ads.
Scheduling VAST and VMAP ads through all ad integrations is very similar, so consider this article as a reference guide.

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: | -------- |
|   Yes   |     Yes     |   Yes   |   Yes    |      Yes       |       No       | No       |

## VAST

Setting up a client-side VAST advertisement means scheduling a VAST ad tag.

As an app developer, you associate a VAST ad tag (URL) (e.g. `https://cdn.theoplayer.com/demos/ads/vast/vast.xml`) with a time offset.

Additionally, when using the default, `csai` ad integration, you can also specify after how many seconds a VAST ad may be skipped. If you are using Google IMA, the skip offset should be set inside the ad tag instead.

You may also schedule multiple ad tags.

Let's consider the following common use-cases:

1. [Scheduling a single pre-roll](#scheduling-a-single-pre-roll)
2. [Scheduling two pre-rolls, two mid-rolls and one post-roll](#scheduling-two-pre-rolls-two-mid-rolls-and-one-post-roll)
3. [Scheduling a skippable mid-roll](#scheduling-a-skippable-mid-roll)

### Scheduling a single pre-roll

The following snippets demonstrate how to schedule a single pre-roll.

#### Web SDK

You configure an [AdDescription](pathname:///theoplayer/v9/api-reference/web/interfaces/AdDescription.html) in the `ads` property of your [SourceConfiguration](pathname:///theoplayer/v9/api-reference/web/interfaces/SourceConfiguration.html).

In this `AdDescription`,

- You set the value of `sources` to your ad tag URL.
- You set the value of `timeOffset` to `"start"` (or `00:00:00` or `0%`) to indicate that it's a pre-roll.
- You set its `type` to `"vast"`. When this isn't provided, the player will still try to figure out its `type` after making the ad request.

```js
player.source = {
  sources: [
    {
      src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',
    },
  ],
  ads: [
    {
      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',
      timeOffset: 'start',
      type: 'vast',
      integration: 'csai', // When no integration is provided, the player defaults to `csai`.
    },
  ],
};
```

If you wanted to schedule a post-roll instead of a pre-roll, you set the value of `timeOffset` to `"end"`.

If you want to schedule a mid-roll instead of a pre-roll, you set the value of `timeOffset` to the `HH:MM:SS` format.

For example, to schedule an advertisement at the 15s mark, you set the value of `timeOffset` to `"00:00:15"`.

If you wanted to use Google IMA as an example, you would replace `integration: "csai"` with `integration: "google-ima"`. Before doing so, make sure you have [set up Google IMA](https://www.theoplayer.com/docs/theoplayer/how-to-guides/ads/google-ima/) correctly.

#### Android SDK

We will be using Google IMA here so [make sure to set it up](https://www.theoplayer.com/docs/theoplayer/how-to-guides/ads/google-ima/) before starting.

You configure a [GoogleImaAdDescription](pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/source/addescription/GoogleImaAdDescription.Builder.html) in the `ads` property of your [`SourceDescription`](pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/source/SourceDescription.Builder.html#ads-com.theoplayer.android.api.source.addescription.AdDescription...-).

In this `GoogleImaAdDescription`,

- You set an ad tag URL.
- You set the value of [`timeOffset`](pathname:///theoplayer/v9/api-reference/android/com/theoplayer/android/api/source/addescription/GoogleImaAdDescription.Builder.html#timeOffset-java.lang.String-) to `"start"` (or `00:00:00` or `0%`) to indicate that it's a pre-roll.

```kotlin
theoPlayer.source = SourceDescription.Builder(
    TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8").build())
    .ads(
        GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/dfp-linear-inline-no-skip.xml")
            .timeOffset("start")
            .build())
    .build()
```

If you wanted to schedule a post-roll instead of a pre-roll, you set the value of `timeOffset` to `"end"`.

If you want to schedule a mid-roll instead of a pre-roll, you set the value of `timeOffset` to the `HH:MM:SS` format.

For example, to schedule an advertisement at the 15s mark, you set the value of `timeOffset` to `"00:00:15"`.

#### iOS/tvOS SDK

We will be using Google IMA here so [make sure to set it up](https://www.theoplayer.com/docs/theoplayer/how-to-guides/ads/google-ima/) before starting.

You configure a [GoogleImaAdDescription](pathname:///theoplayer/v9/api-reference/ios/Classes/GoogleImaAdDescription.html) in the `ads` property of your [`SourceDescription`](pathname:///theoplayer/v9/api-reference/ios/Classes/SourceDescription.html#/s:13THEOplayerSDK17SourceDescriptionC3adsSayAA02AdD0_pGSgvp).

In this `GoogleImaAdDescription`,

- You set an ad tag URL.
- You set the value of [`timeOffset`](<pathname:///theoplayer/v9/api-reference/ios/Classes/THEOAdDescription.html#/c:@M@THEOplayerSDK@objc(cs)THEOAdDescription(py)timeOffset>) to `"start"` (or `00:00:00` or `0%`) to indicate that it's a pre-roll.

```swift
private var source: SourceDescription {
    // Declare a TypedSource object with a stream URL and its type
    let typedSource = TypedSource(
        src: videoUrl,
        type: mimeType
    )

    // The AdDescription object that defines the IMA ad to be played.
    let offset = "start",
    let adDescription: GoogleImaAdDescription = GoogleImaAdDescription(src: adTagUrl, timeOffset: offset)

    // Returns a computed SourceDescription object
    return SourceDescription(
        source: typedSource,
        ads: [adDescription],
        poster: posterUrl
    )
}
```

If you wanted to schedule a post-roll instead of a pre-roll, you set the value of `timeOffset` to `"end"`.

If you want to schedule a mid-roll instead of a pre-roll, you set the value of `timeOffset` to the `HH:MM:SS` format.

For example, to schedule an advertisement at the 15s mark, you set the value of `timeOffset` to `"00:00:15"`.

### Scheduling two pre-rolls, two mid-rolls and one post-roll

Scheduling multiple VAST ads is only slightly different from scheduling a single VAST ad. Instead of passing along one ad description to your array, you pass along multiple ad descriptions to the array.

The following snippets demonstrate how you would configure two pre-rolls, two mid-rolls and one post-roll through the usage of VAST ads.

#### Web SDK

```js
player.source = {
  sources: [
    {
      src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',
    },
  ],
  ads: [
    {
      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',
      timeOffset: 'start',
    },
    {
      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',
      timeOffset: 'start',
    },
    {
      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',
      timeOffset: '00:00:15',
    },
    {
      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',
      timeOffset: '00:00:30',
    },
    {
      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',
      timeOffset: 'end',
    },
  ],
};
```

#### Android SDK

```kotlin
val typedSource = TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")
val sourceDescription = SourceDescription.Builder(typedSource.build())

sourceDescription.ads(
    GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")
        .timeOffset("start")
        .build(),
    GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")
        .timeOffset("start")
        .build(),
    GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")
        .timeOffset("00:00:15")
        .build(),
    GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")
        .timeOffset("00:00:15")
        .build(),
    GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")
        .timeOffset("end")
        .build()
)

theoPlayer.source = sourceDescription.build()
```

#### iOS/tvOS SDK

```swift
let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")

let vastAdTag = "https://cdn.theoplayer.com/demos/ads/vast/vast.xml"
let ad1 = GoogleImaAdDescription(src : vastAdTag, timeOffset: "start")
let ad2 = GoogleImaAdDescription(src : vastAdTag, timeOffset: "start")
let ad3 = GoogleImaAdDescription(src : vastAdTag, timeOffset: "00:00:15")
let ad4 = GoogleImaAdDescription(src : vastAdTag, timeOffset: "00:00:15")
let ad5 = GoogleImaAdDescription(src : vastAdTag, timeOffset: "end")
let source = SourceDescription(source : typedSource, ads: [ad1, ad2, ad3, ad4, ad5])

theoplayer.source = source
```

### Scheduling a skippable mid-roll

When using the `csai` ad integration, you can define when an VAST ad can be skipped through the `skipOffset` property.

However, it is recommended to leverage the `skipOffset` property in your VAST (or VMAP) file instead, and adhere to the [VAST standard](https://iabtechlab.com/standards/vast/),
because this offers the widest support across ad integrations and platforms.

The following snippets demonstrate how to allow viewers to skip a mid-roll after 5 seconds.

Note that the `skipOffset` property is not supported when using other ad integrations, such as Google IMA, SpotX and FreeWheel because we are dependent on third-party APIs.

#### Web SDK

```javascript
player.source = {
  sources: [
    {
      src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',
    },
  ],
  ads: [
    {
      sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',
      type: 'vast',
      timeOffset: '00:00:15',
      skipOffset: '5',
    },
  ],
};
```

## VMAP

Scheduling a VMAP advertisement is similar to scheduling a VAST advertisement. However, you don't define the `timeOffset`, because the VMAP playlist defines the offsets of each ad break it contains. The time offset helps VAST ads to play at a specific timestamp. VMAP ads can define that behavior inside their manifest file, thus they should not have a timeOffset parameter. This property may not be configured for ad types other than `VAST`. Setting a `timeOffset` on a `VMAP` ad will cause your ads not to be scheduled correctly, unless you explicitly configured an `AdSource.type`, in which case `timeOffset` will be ignored. This is because the player must decide up front when to load the ad source: `VMAP` ads must be loaded immediately in order to schedule them correctly, while loading a `VAST` ad can be deferred until right before the `timeOffset` at which to play them. Therefore, if a `timeOffset` is configured without an explicit `AdSource.Type`, the player will assume that it's a `VAST` ad.

The snippets below demonstrate how to configure a VMAP advertisement.

#### Web SDK

```js
// Declare a VMAP ad source. No timeOffset here, because the VMAP itself arranges this.
player.source = {
  sources: [
    {
      src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',
    },
  ],
  ads: [
    {
      sources: 'https://cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml',
      type: 'vmap',
      integration: 'csai', // When no integration is provided, the player defaults to `csai`.
    },
  ],
};
```

#### Android SDK

```kotlin
val typedSource = TypedSource.Builder("https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8")
val sourceDescription = SourceDescription.Builder(typedSource.build())

sourceDescription.ads(
    GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml")
        .build()
)

theoPlayer.source = sourceDescription.build()
```

#### iOS/tvOS SDK

```swift
let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")

let vmapSource = "https://cdn.theoplayer.com/demos/ads/vmap/single-pre-mid-post-no-skip.xml"
let ad = GoogleImaAdDescription(src : vmapSource)

let source = SourceDescription(source : typedSource, ads: [ad])
theoplayer.source = source
```

## Dynamic scheduling

If you've read our [Advertising User Guide](../../knowledge-base/01-advertisement/01-user-guide.md#dynamic-ad-scheduling), you might have picked up that you can also dynamically schedule VAST advertisements in THEOplayer.
All previous samples in this article use static, pre-defined scheduling; you schedule the ads whenever you schedule the stream. With dynamic scheduling, you schedule ads at runtime.

You use the `Ads` interface to schedule an `AdDescription` at runtime. More specifically, you invoke the `ads.schedule(<yourAdDescription>)` function when your video is already playing.

Note that specifying the `timeOffset` is optional, and that this value is an absolute value. For example, let's consider that your current playhead position is at the 20 seconds mark,
and that you want a and you schedule an ad at the 30 seconds mark. To achieve this, you would set `timeOffset: "00:00:30"`,
and not to `timeOffset: "00:00:10"`, because this would be 10 seconds in the past, and the ad would instantly start playing.

The following samples illustrate the `schedule` function across different SDKs. Invoking the following example functions when the video is already playing will instantly schedule the VAST ad to be played:

#### Web SDK

```javascript
player.ads.schedule({
  sources: 'https://cdn.theoplayer.com/demos/ads/vast/vast.xml',
});
```

#### Android SDK

```kotlin
theoPlayer.ads.schedule(
    GoogleImaAdDescription.Builder("https://cdn.theoplayer.com/demos/ads/vast/vast.xml")
        .build()
)
```

#### iOS/tvOS SDK

```swift
theoplayer.ads.schedule(adDescription: GoogleImaAdDescription(src: "https://cdn.theoplayer.com/demos/ads/vast/vast.xml"))
```

## Resources

- [Samples for Web SDK](https://github.com/THEOplayer/samples-html5-sdk)
- [Samples for Android SDK](https://github.com/THEOplayer/samples-android-sdk)
- [Samples for iOS SDK](https://github.com/THEOplayer/samples-ios-sdk)
