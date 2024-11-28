# How to reduce data usage on mobile devices

Customers that use THEOplayer in mobile web which leverage THEOplayer's preloading capabilities (`preload = "auto"`), or provide very high qualities, sometimes receive complaints about data usage.

You can combat this by leveraging the [ABR API](pathname:///theoplayer/v7/api-reference/web/interfaces/ABRConfiguration.html) and the [MediaTrack API](pathname:///theoplayer/v7/api-reference/web/interfaces/MediaTrack.html).

## Step-by-step guide

### 1. Set the ABR targetBuffer property to lower number of seconds

You can set the `player.abr.targetBuffer` property, which allows you to configure the amount of seconds to buffer ahead of the current playback position. The standard buffer time is 20 seconds. Setting a lower number (e.g.: 6 seconds) allows you to download less information in front of the playhead position.
This value is also employed when preloading content.

#### Web SDK

The snippet below sets the targetBuffer to 6 seconds.

```js
player.abr.targetBuffer = 6;
```

If necessary add a mobile check like this:

```js
if (THEOplayer.videojs.browser.IS_ANDROID || THEOplayer.videojs.browser.IS_IOS || ... ) {
    player.abr.targetBuffer = 6;
}
```

This snippet leverages THEOplayer's Video.js component.

#### Android SDK

The snippet below sets the targetBuffer to 6 seconds.

```java
theoplayer.getPlayer().getAbr().setTargetBuffer(6);
```

#### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

The iOS SDK does not allow you to change the targetBuffer. The iOS SDK's ABR API only allows you to change the ABRStrategyType.

### 2. Manage preloading

Preloading is a powerful feature when trying to reduce the Join Time. It is more effective in some situations than others and managing it correctly will help you reduce the data usage:

- preloading a live stream may entail appending in the buffer information that will never be played, if the user waits enough time before clicking "Play"
- in those situations when a user is not yet likely to be playing a stream (e.g.: the player is not yet in view), preloading may also mean downloading information that the user will not consume.

So, based on your use case, you might decide whether to enable preloading.
The following snippets showcase how to do so.

#### Web SDK

```js
player.preload = 'auto'; // "metadata" is also a valid value
```

#### Android SDK

```java
theoplayer.getPlayer().setPreload(PreloadType.AUTO);
```

#### iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

```swift
theoplayer.setPreload(.auto)
```

### 3. Choose the renditions considered for ABR

On mobile devices, THEOplayer by default takes into account the player size for ABR: this lets it avoid selecting renditions too big to be appreciated on the current device, thus avoiding wasting data. As of THEOplayer 5.7, it is also possible to configure the SourceAbrConfiguration property `restrictToPlayerSize` which also replicates this behaviour on laptop/desktop browsers.

Leveraging the `targetQuality` property of the MediaTrack API, you can refine the rendition choice further and indicate yourself to the player which qualities should be considered for ABR. For example, you could configure that THEOplayer should only do ABR on the lowest 3 qualities of a stream containing 5.

For further information about both strategies, please check the documentation linked below.

## Conclusion

There are several actions that can be taken to drastically reduce data usage on mobile devices, both in the player and at other levels.
As far as the player is concerned, by leveraging its API as described you can filter different use cases and handle several aspects related to media download for each use case. This enables you to manage the precise behaviour in each case and optimize data usage.

## Related articles

- [How to start with a specific quality?](05-how-to-start-with-specific-quality.md)
- [How to programmatically select a video track quality](03-how-to-select-video-track-quality.md)
- [Web SDK API reference: restrictToPlayerSize](pathname:///theoplayer/v7/api-reference/web/interfaces/SourceAbrConfiguration.html#restrictToPlayerSize)
- [Preloading](../07-miscellaneous/09-preloading.md)
