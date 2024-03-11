# Page and Source domains

Page and Source domains prevent unauthorized users from embedding your SDK on their website.

## Page domains (web only)

Page domains specify on which domains the player can be loaded. Imagine your website has the following domain: `example.com`, you have configured your Page domains and the THEOplayer SDK is installed on your website. When a malicious user copies your SDK and installs it on their domain: `other.com`, the player will throw an error that the license is invalid.

## Source domains

Source domains specify from which domains the player is allowed to play streams. When the Source domains are configured to `example.com` the player will only play streams from this domain. If the player plays a stream from `other.com`, it will throw an error that the license is invalid.

## How to configure Page and Source domains

Page and Source domains can be configured in the [Developer Portal](https://portal.theoplayer.com) when creating an SDK under the “Configure the SDK” section. When the SDK already exists you can find the Page and Source domains under the “Configure” section of the SDK overview page. The “Allow all” option can be selected when you are not certain on which domains the player will be loaded or from which domains the player will play streams. This option is separately configurable for both Page and Source domains.

## Remarks

- This feature is supported as of version 2.78.0.
- Page domains are only available for our HTML5 SDK.
