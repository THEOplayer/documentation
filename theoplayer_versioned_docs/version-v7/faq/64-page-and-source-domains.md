# Page and Source domains

Page and Source domains prevent unauthorized users from embedding your SDK on their website. We highly recommend configuring both Page and Source domains carefully to protect your THEOplayer license.

## Page domains



Page domains (available only on Web SDK, React Native SDK and Flutter SDK) specify on which domains the player can be loaded. 

Imagine your website has the following domain: `example.com`, you have configured your Page domains and the THEOplayer SDK is installed on your website. When a malicious user copies your SDK and installs it on their domain, `other.com`, the player will throw an error that the license is invalid.

Whitelisting `example.com` will also whitelist all its subdomains such as `a.example.com` or `a.b.example.com` so you don't have to enter each of them one by one. Please note that whitelisting `*.example.com` <u>will not</u> whitelist the subdomains.

Your page domains are included on your player [license](https://www.theoplayer.com/docs/theoplayer/how-to-guides/license/introduction/). If you make any changes on your page domain configuration, you should update the license on your website.

## Source domains

Source domains specify from which domains the player is allowed to play streams. When the Source domains are configured to `example.com` the player will only play streams from this domain. If the player attempts to play a stream from `other.com`, it will result in an error stating that the license is invalid.

Similar to Page domains, whitelisting `example.com` will also whitelist all its subdomains such as `a.example.com` or `a.b.example.com` so you don't have to enter each of them one by one. Please note that whitelisting `*.example.com` <u>will not</u> whitelist the subdomains.

Your source domains are included on your player [license](https://www.theoplayer.com/docs/theoplayer/how-to-guides/license/introduction/). If you make any changes on your source domain configuration, you should update the license on your application/website.

## How to configure Page and Source domains

Page and Source domains can be configured in the [Developer Portal](https://portal.theoplayer.com) when creating a license or a custom SDK. On an existing license/SDK, you can find the Page and Source domains under the “Configure” section of the SDK overview page. The “Allow all” option can be selected when you are not certain on which domains the player will be loaded or from which domains the player will play streams. This option is separately configurable for both Page and Source domains.