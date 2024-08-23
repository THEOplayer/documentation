# Signaling Server

THEO develops and provides this component. It will be integrated between your CDN and media origin.
It performs manifest manipulation to insert ad breaks and additional metadata for the player. 
Additionally, it ensures scalability of the end-to-end system through integration with the early ad break notification API of the Google Ad Server.


## Requirements (WIP)

Aside from having a valid manifest, we do have some requirements to make THEOads work:

- Use a HLS manifest. For now this is the only one supported. Other protocols will follow in the future.
- We require an `EXT-X-PROGRAM-DATE-TIME` tag to be present. This is needed to accurately schedule the ad breaks.
- SCTE markers should be provided either in an `EXT-X-DATERANGE` tag, an `EXT-X-OATCLS-SCTE35` tag or with the `EXT-X-CUE-OUT` and `EXT-X-CUE-OUT-CONT` tags.
  - `EXT-X-DATERANGE` is recommended due to its standardization and ability to provide more comprehensive data for improved integration.
- To make use of the tune-in feature, we require `EXT-X-CUE-OUT-CONT` tags to be present between the `EXT-X-CUE-OUT` and `EXT-X-CUE-IN` markers.


## Deployment

TODO
