---
title: "Redundant Ingest"
slug: /redundant-ingest
---
To provide a resilient and reliable streaming experience, the Dolby.io Streaming platform allows broadcasting multiple redundant contribution streams. This solution ensures seamless content delivery to viewers, even in the case of unexpected technical issues.

## Recovery mechanism

To ensure that streamed content will be delivered to viewers, you have to consider the potential problems that may affect broadcasting, such as equipment malfunctions or service interruptions caused by technical glitches or network failures. To avoid such problems during an important event, consider using multiple layers of redundancy including encoders, internet service providers (ISPs), and publishing regions offered by Streaming APIs. Using Dolby.io Streaming, you can publish additional redundant streams, which will be automatically delivered to viewers in the case of a problem with the original stream. For example, in the case of a malfunctioning encoder in the primary broadcast, the platform can seamlessly continue the broadcast as long as there is another live contribution stream that uses a different encoder. 

When publishing multiple backup feeds, you can establish an order in which the streams should fail over. The Dolby.io Streaming platform provides the **priority** parameter that lets you set the priority of each contribution stream. In the case of any problem with the primary stream, viewers receive the available stream that has the _highest_ priority. Not setting any `priority` is equivalent setting the lowest priority to that stream. 

The following instructions explain how to publish redundant streams using Streaming APIs. 

> 👍 Geo-cascading Settings
> 
> Be aware that all publishers that contribute to the same stream must have the same [geo-cascading](/millicast/distribution/multi-region-support/geo-cascading.md) settings.

, 

## Publishing redundant feeds using RTMP or SRT

Follow this procedure to broadcast multiple redundant feeds and provide a reliable streaming experience using RTMP or SRT.

### 1\. Establish your broadcasting plan

Decide how many layers of redundancy you want for a given source.  Usually 2 is sufficient for high value streams.

### 2\. Create a publish token

Open the dashboard and click the **Create** button to create a new token. 

Make sure that [geo-cascading](/millicast/distribution/multi-region-support/geo-cascading.md) is also configured the same across both primary and fallback backup feeds.

### 3\. Choose the preferred cluster regions

Select your token name to open token details and locate the **Settings** section. Choose the preferred **Cluster region** from the drop-down list. Selecting a cluster changes the domain name in the publish path. We recommend choosing two different regions in the same geographical area: the closest region to the publisher as the primary region and the farther region as the backup. To use two cluster regions, use two publish paths, one for each region you want to use. 

### 4\. Set priorities

Use the **priority** query parameter to define the order in which your contribution streams should be selected. To set the parameter, add `&priority=X` as publishing parameters to your publish URL.  The higher value will be streamed to viewers first.

For example, if your publish URL is `{StreamName}?token={Token}&sourceId=1`, after adding the priority parameter with a value of 1 you should have the following string: `{StreamName}?token={Token}&sourceId=1&priority=1`.

If you use Multi-bitrate (MBR) contribution where you encode your layers from the studio or video operations center with Redundant Ingest, you need to assign `priority` and `sourceId` as presented in the following example:

| Content | SourceId | Priority | Result  |
| :------ | :------- | :------- | :------ |
| Video 1 | 1low     | 100      | primary |
| Video 1 | 1medium  | 100      | primary |
| Video 1 | 1high    | 100      | primary |
| Video 1 | 1low     | 1        | backup  |
| Video 1 | 1medium  | 1        | backup  |
| Video 1 | 1high    | 1        | backup  |

Notes

- `sourceId` needs to be distinct within the MBR group for each layer but match between your primary and your backup
- If using MBR and _multi-source_ contribution, your `simulcastId`s and `sourceId`s need to be consistent between primary and backup grouping.  More on how to do MBR and Multi-source contribution can be found in our \[Multi-Source builder guide](https://docs.dolby.io/streaming-apis/docs/multi-source-builder).

### 5\. Start broadcasting

Start broadcasting the original feed and all backup feeds. In the case the source disconnects, viewers will be automatically switched over to receive the backup feed that has the next highest priority. The switchover duration varies depending on the used broadcast protocol.

## Publishing redundant feeds using the dashboard, Client SDKs, or WHIP

Follow this procedure to broadcast multiple redundant streams and provide a reliable streaming experience using the dashboard, a Client SDK, or WHIP.

### 1\. Establish your broadcasting plan

Decide how many layers of redundancy you want for a given con.

### 2\. Create a publish token

Open the dashboard and click the **Create** button to create a new token. If you want to use two cluster regions, create two tokens.

Make sure that [geo-cascading](/millicast/distribution/multi-region-support/geo-cascading.md) is also configured the same across both primary and fallback redundant backup feeds.

### 3\. Choose the preferred cluster regions

Select your token name to open token details and locate the **Settings** section. Choose the preferred **Cluster region** from the drop-down list. If you want to use two clusters, additionally open the details of the second token and select a different cluster from the list.

### 4\. Set priorities

Use the **priority**  parameter to define the order in which your contribution streams should be selected. To set the parameter, add `&priority=X` as publishing parameters to your publish URL.  The higher value will be streamed to viewers first.

If you use Simulcast with Redundant Ingest, you can assign priorities and sourceId as presented in the following example:

| Content | SourceId | Priority | Result  |
| :------ | :------- | :------- | :------ |
| Video 1 | 1        | 100      | Primary |
| Video 1 | 1        | 1        | Backup  |

If you use the dashboard, open the [Streaming Dashboard Broadcaster](/millicast/streaming-dashboard/how-to-broadcast-in-dashboard.md) and click the gear icon to open **Media Settings**. Set the **Priority** parameter to a preferred value and click **Update**.

If you use WHIP, set the **priority** query parameter by adding `&priority=X` at the end of your publish URL, where X is the preferred priority. For example, if your publish URL is `{StreamName}?token={Token}&sourceId=1`, after adding the priority parameter with a value of 1 you should have the following string: `{StreamName}?token={Token}&sourceId=1&priority=1`. 

If you use a Client SDK, set the optional **priority** parameter in publisher options, as in the following examples:

```cplusplus
millicast::Publisher::Option options;
options.priority = 1;
publisher->connect();
// Wait for the on_connected callback
publisher->publish(options);
```
```java
Publisher.Option publisherOption = new Publisher.Option();
publisherOption.priority = 1;
publisher.connect();
// Wait for the onConnected callback
publisher.publish(publisherOption);
```
```swift
let publisherOptions = MCClientOptions()
publisherOptions.priority = 1
publisher!.connect()
// Wait for the onConnected callback
publisher!.publish(with: publisherOptions)
```
```javascript
const publishOptions = {
  // Other preferred options
  priority: 1,
};

// Start publishing a stream
try {
  await publisher.connect(publishOptions);
} catch (e) {
  console.error('Connection failed, handle error', e);
}
```

### 5\. Start broadcasting

Start broadcasting the original feed and all backup feeds. In the case the source disconnects, viewers will be automatically switched over to receive the backup feed that has the next highest priority. The switchover duration varies depending on the used broadcast protocol.

## Cost calculation

Pricing is determined based on bandwidth consumption, so each feed is billed independently. For playback, only one feed is distributed, so only data sent to the viewer count as usage, regardless of the number of redundant feeds.

If you have any questions or suggestions, feel free to [contact us](https://support.dolby.io/).
