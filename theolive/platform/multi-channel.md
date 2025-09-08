---
sidebar_position: 2
sidebar_label: Alias
---

# Multi-channel: aliases for channels

This guide outlines THEOlive’s multi-channel approach: ingest your stream once and create multiple channel aliases, each with its own unique playout configuration. In addition to customized settings per alias, THEOlive also allows you to apply individual security features—such as geoblocking and token-based authentication on a per-alias basis.

You can configure this via the [THEOlive management console](https://console.theo.live), as well via the [THEOlive API](/theolive/api/channels/create-channel-alias).

## Multi-channel: player aliases

Do you want to deliver your live stream to multiple customers at the same time—each with a personalized player experience, region-specific access restrictions, and separate usage analytics? THEOlive’s player alias capability makes this easy.

From the "_Channel Details_" page, you can create channel aliases under the "_Playout Configurations section_". Each alias can be customized with its own playout settings, including player colors, poster image, announcement message, logo, and more.

![Create a new channel alias under the "Playout configurations" tab](../assets/img//9ce6eb8-Create_channel_alias.jpg)

The key advantage of this approach is that you only need to configure your ingest once, and then distribute your content across multiple web pages—each using a different channel alias with its own unique Channel ID.

Including an alias is straightforward: Copy the alias’s Channel ID and paste it as the value of the `data-theo-live-id` attribute. For detailed instructions, go to the "_Include channel on your page_" tab, where you’ll find a step-by-step guide on embedding a specific playout configuration (alias) into your web page.

![Find the unique channel ID of your alias in the "Include channel on your page" tab](../assets/img/6a57e61-channel-alias-include.png)

### Managing your alias

At any time, you can [update](/theolive/api/channels/update-channel-alias), [enable](/theolive/api/channels/enable-channel-alias), [disable](/theolive/api/channels/disable-channel-alias) or [delete](/theolive/api/channels/delete-channel-alias) a channel alias. The default alias can't be deleted, you'll have to delete your whole channel in case you want to do so.

![Icon buttons to disable, enable or delete an alias](../assets/img/8751d4a-alias-settings.PNG)

### Analytics per channel alias

You can visualize data for each channel alias individually. In the Console, the Analytics section of the Channel Details page provides insights such as concurrent viewers, latency, viewer locations, browser and operating system breakdowns, and total viewing minutes. Click on any of the links in the Analytics section to view detailed metrics for a specific alias.

THEOlive also offers an API endpoint where you can query the minutes viewed on an hourly basis per channel alias. You can read more about it [here](/theolive/api/channels/get-channel-alias-analytics).

![Link to viewing insights and channel usage page where analytics are stored per channel alias](../assets/img/3c77b57-channel-alias-analytics.png)

# Multi-channel: Use-cases for channel aliases

Creating channel aliases can serve useful in a couple of different ways. Here are a couple of examples where creating a channel alias can simplify your workflow

- Creating a stream that requires multiple stream [redundancy](/theolive/platform/redundancy/) or fallback solutions 
- Creating a stream that requires different [geo-blocking](/theolive/platform/security/geo-blocking) rules for different countries
