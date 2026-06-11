# Workflow integration

For implementing OptiView Ads, the Signaling Service must be integrated within your existing video workflow. This service acts as an intermediary between the media origin and the CDN, enabling ad insertion and metadata enrichment.

## Existing Video Workflow[​](#existing-video-workflow "Direct link to Existing Video Workflow")

In a typical video delivery workflow, the CDN fetches the manifest directly from the media origin, and all subsequent requests for video segments are also routed from the CDN to the origin.

![Video workflow before](/documentation/pr-preview/pr-690/assets/images/workflow-optiview-ads-before-a5c6cc9dd5c6f153095ac57136601e70.png).

## Integrating the Signaling Service[​](#integrating-the-signaling-service "Direct link to Integrating the Signaling Service")

By introducing the Signaling Service, the manifest requests from the CDN are intercepted before reaching the origin. The Signaling Service augments the manifest with ad break signals and any necessary metadata. Notably, video segment requests bypass the Signaling Service and continue to be fetched directly from the CDN to the origin, ensuring minimal impact on content delivery performance.

![Video workflow after](/documentation/pr-preview/pr-690/assets/images/workflow-optiview-ads-after-295a6900fcd1607212656ea2ce0be0d0.png).

## Configuring the Signaling Service[​](#configuring-the-signaling-service "Direct link to Configuring the Signaling Service")

To integrate the Signaling Service with your workflow, the properties origin and segmentOrigin are crucial when setting up a new monetized stream:

* `origin`: This property specifies where the original manifest should be fetched from. It points to the media origin that provides the main content.
* `segmentOrigin`: This property ensures that the segment URLs within the augmented manifest are absolute. It defines the path from which the segments should be requested, typically directly from the origin or CDN. By configuring these properties, the Signaling Service seamlessly inserts ad breaks without affecting the video segment delivery flow.

## More information[​](#more-information "Direct link to More information")

* [Getting Started](/documentation/pr-preview/pr-690/ads/getting-started.md)
* [API reference](/documentation/pr-preview/pr-690/ads/api/signaling/theoads-api.md)
