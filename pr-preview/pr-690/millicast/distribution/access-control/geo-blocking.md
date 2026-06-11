# Geo-blocking

**Geo-blocking** refers to the action of restricting access to certain content based on the geographical location of the user. Filtering can be allowed or denied by countries as well as IP addresses. Geo-blocking enables content providers to adhere to specific licensing agreements and distribution rights, protect copyrighted material, or service another layer of privacy when working on private content.

[YouTube video player](https://www.youtube.com/embed/n4iXAJuw-aM)

You can set geo-blocking in either your [publish token](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md) or [subscribe token](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md). Geo-location in both tokens refers to the location from which viewers can watch a stream. If you restrict access to a stream in some countries using the publish token, people from those countries will not be able to watch the streamed content, even if the stream is unauthenticated and does not require the subscribe token. Geo-blocking does not impact broadcasting.

## Geo-blocking in the dashboard[​](#geo-blocking-in-the-dashboard "Direct link to Geo-blocking in the dashboard")

There are some settings you can use when configuring geo-blocking.

* **Allow countries** lets you specify one or more countries by name that should be permitted to broadcast or view a stream.
* **Deny countries** lets you specify one or more countries that should be prohibited from broadcasting or viewing a stream.

End viewers that will be blocked from content will see a message in the player stating *Country not allowed* when trying to access the viewer. You can test this by blocking the country from which you are based to access the secure viewer link.

### How-to allow or block countries for all tokens[​](#how-to-allow-or-block-countries-for-all-tokens "Direct link to How-to allow or block countries for all tokens")

You can define token defaults that are applied account wide as a global configuration. They can be overridden on a per-token basis

Log into your account [Streaming Dashboard](/documentation/pr-preview/pr-690/millicast/about-dash.md), click on *Settings* in the left-side menu.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/tokens-main-settings-menu-d4701c1b8804c23134cd2452af9f2181.png)

Navigate to the *Token defaults* tab.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/geo-blocking-tab-b7115463af09fd3edccf9954d9d8ecc8.png)

Select from the countries you want to allow or deny from the alphabetical dropdown list.

Applied to All Tokens

Enabling geo-blocking account wide will have all previous and future publish tokens enabled with this feature. To disable it simply erase the specified countries and the new conditions will be updated.

### How-to allow or block countries for a specific token[​](#how-to-allow-or-block-countries-for-a-specific-token "Direct link to How-to allow or block countries for a specific token")

Getting Started

If you haven't already, begin by following the [Getting Started](/documentation/pr-preview/pr-690/millicast.md) tutorial to create an OptiView Real-time application and start your first broadcast. You will need to have a publishing token.

Open the Streaming section of the [OptiView Real-time Streaming Dashboard](/documentation/pr-preview/pr-690/millicast/about-dash.md) and select an existing token or `+ Create` a new one.

Toggle the Geo-blocking setting to enable it for a token.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dashboard-publish-geoblocking-be107556edf455f3cbbef058d6c4a533.png)

For a new token, you can do this by selecting the **Advanced** tab during creation and toggling the Geo-blocking to be *Enabled*.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/dashboard-create-token-geoblocking-24f1dc4e5f6b128818a97bcfc59b42d8.png)

Select from the countries you want to allow or deny from the alphabetical dropdown list.

Block by IP Address or Domain

You can also deny access to content if you know the [domain name](/documentation/pr-preview/pr-690/millicast/distribution/access-control/allowed-origins.md) or [ip address](/documentation/pr-preview/pr-690/millicast/distribution/access-control/allowed-origins.md) that will be used to broadcast or view a stream.

## Learn more[​](#learn-more "Direct link to Learn more")

Learn more by exploring the [developer blog](https://optiview.dolby.com/resources/blog/tag/distribution/) and [code samples](https://github.com/orgs/dolbyio-samples/repositories?q=distribution).
