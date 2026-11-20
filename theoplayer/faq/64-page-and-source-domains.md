# Page and source domains

Page and source domains prevent unauthorized users from embedding your SDK on their website. We highly recommend configuring both page and source domains carefully to protect your player license.

## Page domains

Page domains (available only on Web SDK, React Native SDK and Flutter SDK) specify on which domains the player can be loaded.

Imagine your website has the following domain: `example.com`, you have configured your page domains and the player SDK is installed on your website. When a malicious user copies your SDK and installs it on their domain, `other.com`, the player will throw an error that the license is invalid.

Whitelisting `example.com` will also whitelist all its subdomains such as `a.example.com` or `a.b.example.com` so you don't have to enter each of them one by one. Please note that whitelisting `*.example.com` <u>will not</u> whitelist the subdomains.

Your page domains are included on your player [license](/theoplayer/how-to-guides/web/license/introduction/). If you make any changes on your page domain configuration, you should update the license on your website.

## Source domains

Source domains specify from which domains the player is allowed to play streams. When the source domains are configured to `example.com` the player will only play streams from this domain. If the player attempts to play a stream from `other.com`, it will result in an error stating that the license is invalid.

Similar to page domains, whitelisting `example.com` will also whitelist all its subdomains such as `a.example.com` or `a.b.example.com` so you don't have to enter each of them one by one. Please note that whitelisting `*.example.com` <u>will not</u> whitelist the subdomains.

For sources with `type: 'millicast'`, you can restrict playback to specific streaming accounts by adding `millicast://<streamAccountId>` entries to the source domains, for example: `millicast://k9Mwad`. When the license contains one or more such entries, the source's `streamAccountId` must match one of them. Matching is exact and case-sensitive, so an account ID such as `k9Mwad` must use the same casing in the license. A license without `millicast://` entries allows sources from all streaming accounts.

Every source in a source description is checked individually. For example, a source with `type: 'millicast'` and an HLS/DVR fallback on a customer domain requires both the matching `millicast://<streamAccountId>` entry and the customer domain in the license. If either is missing, the entire source description is rejected.

THEOlive-resolved endpoints are subject to the same source-domain check as other sources. THEO-hosted endpoints on `theo.live` or `dolby.com`, including their subdomains, are implicitly allowed. Endpoints on other domains, such as customer-configured delivery domains, must be included in the license's source domains. An empty source domains list or the “Allow all” option continues to allow all sources.

Your source domains are included on your player [license](/theoplayer/how-to-guides/web/license/introduction/). If you make any changes on your source domain configuration, you should update the license on your application/website.

## How to configure page and source domains

Page and source domains can be configured in the [Developer Portal](https://portal.theoplayer.com) when creating a license or a custom SDK. On an existing license/SDK, you can find the page and source domains under the “Configure” section of the SDK overview page. The “Allow all” option can be selected when you are not certain on which domains the player will be loaded or from which domains the player will play streams. This option is separately configurable for both page and source domains.
