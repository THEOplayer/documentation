---
title: 'High Availability Management'
slug: /high-availability-management
---

_Note: To make use of this feature, please be familiar with the concept of [Redundant Ingest](/millicast/broadcast/redundant-ingest/index.mdx)_

This feature allows for effective switching between primary and redundant stream(s) through reassignment of priority for specified streams. This could be useful under the following scenarios:

- Managing Encoder Issues
  - If the primary encoder starts to misbehave, for example by either remaining connected to the service and sending bad video or continually disconnecting and reconnecting, stream switching by assigning the primary stream a lower priority would help promote a redundant stream as the new primary stream.
- Maintenance Window
  - During scheduled maintenance, viewers can be transitioned away from unhealthy/offline infrastructure until maintenance is complete. Switching to a secondary setup can be achieved by lowering the priority of streams that need maintenance and/or increasing the priority of backup streams.
- Service Outage
  - In the event that the service becomes unhealthy in a specific region, there is the option to initiate automatic failover to backup streams in healthy regions. This can be achieved by reducing the priority of the streams within the unhealthy region.

## Assigning Priority to Streams

To enable the High Availability Management feature and allow for dynamic stream switching, stream priority _must_ be assigned via the [Publish Token](/millicast/streaming-dashboard/managing-your-tokens.md). A guide on this topic can be found in our [Redundant Ingest Guide](/millicast/broadcast/redundant-ingest/index.mdx).

Any streams broadcasted using the priority parameter under [Publishing Parameters](/millicast/broadcast/broadcast-parameters.md) will _not_ be responsive to dynamic priority allocation. The priority value specified via [Publishing Parameters](/millicast/broadcast/broadcast-parameters.md) overrides the respective setting on the token.

## Identifying Primary and Redundant Stream Priority

If you don't know which token (`tokenId`) is being used to publish your primary you can get it from the Monitoring section of the dashboard or use the [List Token By Name](/millicast/api/publish-token-v-1-list-tokens-by-name.api.mdx) API and filter by `StreamName` to get the tokens used for primary and redundant streams that share the same streamName. The response of this endpoint assists with the identification of:

- the token associated with the primary stream i.e. the token in the list with the highest `priority` value
- the tokens associated with a specific cluster/region

After identifying the `tokenId` to deprioritize or increase the priority for, you can reprioritize the stream.

## Reprioritize Stream via TokenId

Using the `tokenId` of the target active stream, call [Reprioritize Stream](/millicast/api/stream-reprioritize-stream.api.mdx) to assign it a new priority value and reset the primary/redundant stream arrangement. Remember that the highest value "wins" and is the stream that is broadcast to viewers. Reducing the priority of a primary stream below that of a redundant stream essentially renders it redundant and the viewer will show a new primary stream.

Priority changes should always be made using [Reprioritize Stream](/millicast/api/stream-reprioritize-stream.api.mdx) for immediate effect rather than changing it on a token. Any changes made through [Update Token](/millicast/api/publish-token-v-1-update-token.api.mdx) will only take effect after the stream is manually restarted. This is because [Reprioritize Stream](/millicast/api/stream-reprioritize-stream.api.mdx) is effectively a shortcut API that updates the token `priority` then triggers a disconnection of the associated streams. Therefore, to use [Reprioritize Stream](/millicast/api/stream-reprioritize-stream.api.mdx), encoders and publishing clients must be configured to automatically restart on disconnection.
