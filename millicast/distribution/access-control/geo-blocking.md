---
title: "Geo-blocking"
slug: /geo-blocking
---
**Geo-blocking** refers to the action of restricting access to certain content based on the geographical location of the user. Filtering can be allowed or denied by countries as well as IP addresses. Geo-blocking enables content providers to adhere to specific licensing agreements and distribution rights, protect copyrighted material, or service another layer of privacy when working on private content. 

<div align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/n4iXAJuw-aM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


You can set geo-blocking in either your [publish token](/millicast/streaming-dashboard/managing-your-tokens.md) or [subscribe token](/millicast/streaming-dashboard/subscribe-tokens.md). Geo-location in both tokens refers to the location from which viewers can watch a stream. If you restrict access to a stream in some countries using the publish token, people from those countries will not be able to watch the streamed content, even if the stream is unauthenticated and does not require the subscribe token. Geo-blocking does not impact broadcasting.

# Geo-blocking in the dashboard

There are some settings you can use when configuring geo-blocking.

- **Allow countries** lets you specify one or more countries by name that should be permitted to broadcast or view a stream.
- **Deny countries** lets you specify one or more countries that should be prohibited from broadcasting or viewing a stream.

End viewers that will be blocked from content will see a message in the player stating _Country not allowed_ when trying to access the viewer. You can test this by blocking the country from which you are based to access the secure viewer link.

## How-to allow or block countries for all tokens

You can define token defaults that are applied account wide as a global configuration. They can be overridden on a per-token basis

Log into your account [Streaming Dashboard](/millicast/streaming-dashboard/index.md), click on _Settings_ in the left-side menu. 


![](../../assets/img/tokens-main-settings-menu.png)



Navigate to the _Token defaults_ tab.


![](../../assets/img/geo-blocking-tab.png)



Select from the countries you want to allow or deny from the alphabetical dropdown list. 

> ❗️ Applied to All Tokens
> 
> Enabling geo-blocking account wide will have all previous and future publish tokens enabled with this feature. To disable it simply erase the specified countries and the new conditions will be updated.

## How-to allow or block countries for a specific token

> 👍 Getting Started
> 
> If you haven't already, begin by following the [Getting Started](/millicast/introduction-to-streaming-apis.mdx) tutorial to create a Dolby.io application and start your first broadcast. You will need to have a publishing token.

Open the Streaming section of the [Dolby.io Dashboard](/millicast/streaming-dashboard/index.md) and select an existing token or `+ Create` a new one.

Toggle the Geo-blocking setting to enable it for a token.


![](../../assets/img/dashboard-publish-geoblocking.png)



For a new token, you can do this by selecting the **Advanced** tab during creation and toggling the Geo-blocking to be _Enabled_.


![](../../assets/img/dashboard-create-token-geoblocking.png)



Select from the countries you want to allow or deny from the alphabetical dropdown list.

> 📘 Block by IP Address or Domain
> 
> You can also deny access to content if you know the [domain name](/millicast/distribution/access-control/token-security.md) or [ip address](/millicast/distribution/access-control/token-security.md) that will be used to broadcast or view a stream.

# Learn more

Learn more by exploring the [developer blog](https://dolby.io/blog/tag/distribution/) and [code samples](https://github.com/orgs/dolbyio-samples/repositories?q=distribution).




