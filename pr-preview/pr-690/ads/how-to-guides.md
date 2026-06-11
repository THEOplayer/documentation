# How-to guides

These guides provide detailed information on specific features of OptiView Ads (SGAI). They cover how ad impressions are tracked, how custom ad tag parameters can be included in the ad decisioning request, how ad formats can be overridden client-side, and how breaks can be signaled.

<!-- -->

## [📄️Workflow integration](/documentation/pr-preview/pr-690/ads/how-to-guides/workflow-integration.md)

[For implementing OptiView Ads, the Signaling Service must be integrated within your existing video workflow. This service acts as an intermediary between the media origin and the CDN, enabling ad insertion and metadata enrichment.](/documentation/pr-preview/pr-690/ads/how-to-guides/workflow-integration.md)

## [📄️Ad impression tracking](/documentation/pr-preview/pr-690/ads/how-to-guides/ad-impressions.md)

[When inserting an ad experience using OptiView Ads, the player sends a beacon to OptiView's server to track the ad impression usage. An ad impression refers to each ad experience inserted into the content and presented to the viewer using OptiView Ads, counted from the first presentation of the experience.](/documentation/pr-preview/pr-690/ads/how-to-guides/ad-impressions.md)

## [📄️Ad targeting parameters](/documentation/pr-preview/pr-690/ads/how-to-guides/ad-tag-parameters.md)

[With the Google DAI Pod Serving, there is the possibility to pass a limited set of ad targeting parameters on your stream request to personalize your streams.](/documentation/pr-preview/pr-690/ads/how-to-guides/ad-tag-parameters.md)

## [📄️Override ad experience layout](/documentation/pr-preview/pr-690/ads/how-to-guides/override-layout.md)

[OptiView Ads is able to insert ad breaks into your content via the signaling server. The layout that is used while playing is usually determined by the signaling server. Currently, you can have the following layout modes :](/documentation/pr-preview/pr-690/ads/how-to-guides/override-layout.md)

## [📄️Scheduling breaks](/documentation/pr-preview/pr-690/ads/how-to-guides/scheduling-breaks.md)

[OptiView Ads can insert ad breaks into your content, but it requires placement information to do so. This page will outline the various options for scheduling ad breaks.](/documentation/pr-preview/pr-690/ads/how-to-guides/scheduling-breaks.md)

## [📄️Scheduling overlays](/documentation/pr-preview/pr-690/ads/how-to-guides/scheduling-overlays.md)

[OptiView Ads can insert overlays into your content, but it requires placement information to do so. This page will outline the various options for scheduling overlays.](/documentation/pr-preview/pr-690/ads/how-to-guides/scheduling-overlays.md)

## [📄️Create backdrop images](/documentation/pr-preview/pr-690/ads/how-to-guides/create-backdrop-layout.md)

[A backdrop is an companion image that is shown along with the player during an ad.](/documentation/pr-preview/pr-690/ads/how-to-guides/create-backdrop-layout.md)

## [📄️Dynamic backdrops](/documentation/pr-preview/pr-690/ads/how-to-guides/dynamic-backdrops.md)

[Some layouts, such as L-shape and Double Box, make use of a backdrop. These can be specified on both the monetized stream and the ad break in 2 ways:](/documentation/pr-preview/pr-690/ads/how-to-guides/dynamic-backdrops.md)

## [📄️Custom GAM Creatives](/documentation/pr-preview/pr-690/ads/how-to-guides/gam-custom-creatives.md)

[When using GAM for delivering dynamic backdrops or overlays respectively through the backdropURIGamProperties or gamProperties properties, you need to first configure corresponding Creatives in the GAM console.](/documentation/pr-preview/pr-690/ads/how-to-guides/gam-custom-creatives.md)
