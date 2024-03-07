# Widevine CDM deprecation notice for old browser versions

Google announced that the current version of the Widevine Content Decryption Module (CDM), which is a closed environment responsible for handling the DRM restrictions and decryption of media, will stop working on 6 December 2022.

## What is the effect of this?

Users will not be able to view Widevine-protected streams if they are on an older version of their browser since Google is deactivating the older versions of the Widevine CDM.

## What should you do if a certain user has an issue with your DRM-protected streams?

If you get a question on why your DRM streams wouldn't work for some of your users, especially around 6 December 2022, it is best to ask them to make sure they are on the latest version of their browser. Almost every browser nowadays have an auto-update mechanism, however many of us ignore the big `Update` button on Chrome or never fully restart the browser to let it finish an update.

## Which platforms are affected?

According to Google, only desktop browsers are affected. Mobile browsers and Chromium-based Smart TVs like LG webOS or Samsung Tizen SmartTVs are not affected.

## Should you update your THEOplayer SDK if you are on an older version?

The deprecation from Google does not require any changes from our side. If you are on an older THEOplayer version, your Widevine streams will still work as expected as long as the browser you are using the SDK on is on the latest version. However, as always, we recommend staying up to date and using the latest version of our SDKs to make use of the new features and improvements we constantly make.

To summarize, since this change from Google only affects the old CDM versions integrated with the older versions of Widevine supporting browsers, as long as you are on the latest version of your browser of choice, everything should still work after 6 December 2022.

## Related pages

- [How to update an SDK](../getting-started/01-sdks/01-how-to-update-a-sdk.md)
- [THEOplayer Platform Support](https://www.theoplayer.com/platform-support)
- [THEOplayer Changelog](https://docs.theoplayer.com/changelog.md)
