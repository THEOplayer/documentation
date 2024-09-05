---
sidebar_position: 1
---

# Ad impression tracking

When inserting an ad experience using THEOads, the player sends a beacon to THEO's server to track the ad impression usage. An ad impression refers to each ad experience inserted into the content and presented to the viewer using THEOads, counted from the first presentation of the experience.

:::note
The ad impression is beaconed simultaneously with the firing of the player's `adbreakbegin` event.
:::

## Information tracked

The information passed only contains an identifier of the THEOplayer license build so the impressions are linked to the customer.
No information about the viewers is passed along.

## View my impression usage

You can view your ad impressions on the portal dashboard underneath the THEOplayer license impressions.

![Portal_dashboard](../assets/img/THEOads-impressions.png)

## More information

- [Flexible, Usage-Based Pricing](https://www.theoplayer.com/product/theoads/pricing/)
- [THEOplayer self-service portal](https://portal.theoplayer.com/login/)
