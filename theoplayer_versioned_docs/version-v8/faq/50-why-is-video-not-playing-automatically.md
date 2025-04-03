# Why is my video not playing automatically

There is a wide variety of possible causes that bring to a video not being automatically played. These may have to do with autoplay policies, iframes, Media Engagement Index and more. Please read the full answer in this article for more information. Also, please keep in mind that this is not an extensive list of causes for autoplay failure and that, as time goes by, browsers autoplay management and autoplay policies may change.

If you want your video to play automatically once the player is available, you should set the `autoplay` feature to `true`.

However, sometimes this does not lead directly to the desired result: different issues may be preventing the automatic reproduction of your video. In the following we will be listing some of the most common causes for this.

### Play

Some issues depend on the fact that autoplay is not really implemented, but the method `play()` is called on the player instead. Although in specific cases this may work, we do not advise to use this instead of the autoplay, as often this is more strictly blocked by autoplay policies and may produce, in certain cases, desync with the UI buttons (e.g.: the button suggests that the stream is playing although it’s not) or other issues.

**Solution**: for autoplay behavior, use the provided `autoplay` feature.

### Autoplay policies

Different browsers have different autoplay policies. For the specifics, please consult the policies themselves, as they may get updated. In general, though, when an autoplay policy is applied, it is possible to still autoplay a video if the player is muted.

**Solution**: to enable this, please use the `mutedAutoplay` property in your player configuration and set it to `all`.

### Chrome Media Engagement Index (MEI)

On the desktop-version of Chrome (unmuted) autoplay may also appear not to be working on your web page (while it does on your localhost). In this case the problem may be due to the Media Engagement Index. The MEI measures an individual's propensity to consume media on a site. The MEI score is highest on sites where media are played on a regular basis. When it is high enough, media playback is allowed to autoplay on desktop only.

**Solution**: the following article explains two ways to avoid this problem.

[How does Media Engagement Index (MEI) affect Autoplay on Chrome?](17-how-does-mei-affect-autoplay-on-chrome.md)

### Iframes

When playing a video through an iframe, your autoplaying issues may be due to the iframe itself. In this case the issue comes from the fact that the iframe does not allow autoplay. Although this shouldn’t be a common problem when using a player, there have been cases in which this piece of advice was useful.

**Solution**: include the attribute `allow="autoplay"` in your iframe.

### iOS 11 and following

Apple made it that from iOS 11 and onwards autoplay is automatically muted from the start and added some settings that can remove autoplay from any site.

So it is possible that on your device autoplay is not working on Safari while it is working elsewhere.

**Solution**: check if the feature is disabled on the device. If it's explicitly disabled, the setting would be under Accessibility > Per App Settings > Add App > Safari > Safari > Auto-Playing Video Previews. Otherwise it would be enabled.

## Resources

The following resources provide more information:

- [Autoplay policy in Chrome](https://developer.chrome.com/blog/autoplay/)
- [Stop autoplay videos in Safari on Mac](https://support.apple.com/en-gb/guide/safari/ibrw29c6ecf8/mac)
- [Allow or block media autoplay in Firefox](https://support.mozilla.org/en-US/kb/block-autoplay)
- [How does Media Engagement Index (MEI) affect Autoplay on Chrome?](17-how-does-mei-affect-autoplay-on-chrome.md)
- [API reference - mutedAutoplay](pathname:///theoplayer/v8/api-reference/web/interfaces/PlayerConfiguration.html#mutedAutoplay)
- [How to combat autoplay policies](02-how-to-combat-autoplay-policies.md)
