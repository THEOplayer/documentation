---
title: "Multi-source Playback"
slug: /source-and-layer-selection
---
Dolby.io supports ingesting [Multi-source Streams](/millicast/broadcast/multi-source-broadcasting.md) and rendering multiple audio and video streams for building [Multi-view](/millicast/playback/multiview.md) and [Audio Multiplexing](/millicast/playback/audio-multiplexing.md) experiences. 

To get started building multi-stream experiences it's important to understand how Dolby.io handles multi-source playback. This guide outlines:

- [How to manage source selection](/millicast/playback/source-and-layer-selection.md)managing-source-and-layer-selection)
- [How to project feeds](/millicast/playback/source-and-layer-selection.md)project-feeds)
- [Media layer forwarding](/millicast/playback/source-and-layer-selection.md)media-layer-forwarding)
- [How to dynamically manage viewer tracks](/millicast/playback/source-and-layer-selection.md)dynamic-viewer-track)

## Managing source selection

> 📘 Multi-source broadcasting
> 
> To manage multiple sources, you first must have a [Multi-source Stream](/millicast/broadcast/multi-source-broadcasting.md) broadcasting.

Dolby.io streaming supports scalable WebRTC streaming thanks to a "smart" cascading node system that manages the peer-to-peer connections. These nodes are key to understanding how to manage multiple sources for playback and can be divided into two types:

- **Publisher nodes**: These nodes manage [the ingest of multiple sources](/millicast/broadcast/multi-source-broadcasting.md) during the broadcast. They can then forward these feeds to the CDN for the Viewer node to manage.
- **Viewer nodes**: Viewer nodes are created depending on the quantity and location of viewers, allowing Dolby.io to support large-scale global streams. When rendering streams in your app or platform, you can communicate with the viewer node to negotiate what feeds to project and simulcast layers to receive.

When the publisher node has a feed ready to be passed to a viewer node, it triggers a [broadcastEvent](/millicast/playback/viewer-events.md). This event can be listened to by taking the [millicast.View](https://millicast.github.io/millicast-sdk/View.html) object and [adding an event listener](/millicast/playback/viewer-events.md)using-events) to it:

```javascript
const tokenGenerator = () => millicast.Director.getSubscriber({
  streamName: streamName,
  streamAccountId: streamAccountId,
});

viewer = new millicast.View(streamName, tokenGenerator);
viewer.on("broadcastEvent", async (event) => {
  console.log("broadcastEvent", event);
}
```

A [broadcastEvent](https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent) is triggered whenever a feed is added to the multi-source broadcast. Hence, the platform can trigger several broadcast events as feeds are added or removed. As outlined in [Multi-source Streams](/millicast/broadcast/multi-source-broadcasting.md) and [Broadcast](/millicast/broadcast/index.mdx) guides, each stream must be distinguished by a unique source ID. As a [broadcastEvent](https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent) are triggered, you can manage which broadcasts to render for the end users by their feed's source ID.

Here is an example of an `active` [broadcastEvent](https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent) event, note the `sourceId`:

```json
{
  "name": "active",
  "data": {
    "streamId": "accoundId/streamName",
    "sourceId": "uniqueSourceID",
    "tracks": [
      {
        "trackId": "audio0",
        "media": "audio"
      },
      {
        "trackId": "video0",
        "media": "video"
      }
    ]
  }
}
```

An active [broadcastEvent](https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent) includes the `sourceId` of the stream, `trackID`, and `media` type, which are all used to establish a connection for playback. These values can be stored in an array or map.

## Projecting feeds

Once a feed has been published to the stream, you can project it using the viewer. The [project](https://millicast.github.io/millicast-sdk/View.html#project) function allows you to map a feed onto the track, signalling to the CDN you are ready to receive data via a peer connection. Once a feed is mapped to a track, it can be rendered natively or in a browser.

```javascript Projecting a source
viewer.project("uniqueSourceID",[
  {
    trackId: "audio0",
    mediaId: audioTransceiver.mid,
    media: "audio"
  },
  {
    trackId: "video0",
    mediaId: videoTransceiver.mid,
    media: "video"
  }
]);
```

The [project](https://millicast.github.io/millicast-sdk/View.html#project) function allows you to project only audio, only video, or both, each for multiple published sources. These sources can be projected as they are published by triggering [broadcastEvent](https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent) or all at once when they all arrive.

The viewer\` also supports an [unproject](https://millicast.github.io/millicast-sdk/View.html#unproject) function that lets you signal to the CDN that you want to stop receiving media from that source. 

```javascript Removing projection
viewer.unproject([videoTransceiver.mid]);
```

## Media layer forwarding

> 👍 Simulcast or SVC layer forwarding
> 
> By default, the Dolby.io Real-time Streaming server chooses the best Simulcast or SVC layer to forward to the viewer based on the bandwidth estimation calculated by the server.

In addition to selecting the origin source for the media, it is also possible to choose a specific [Simulcast](/millicast/distribution/using-webrtc-simulcast.md) or SVC layer for each video track delivered by the Dolby.io Real-time Streaming server. You can do it either by specifying the `layer`  attribute on the [project](https://millicast.github.io/millicast-sdk/View.html#project) command or using the [select](https://millicast.github.io/millicast-sdk/View.html#select) command for the main video track:

~~~javascript Projecting with layer selection using \`project\`
viewer.project("mysource",[
  {
    trackId: "video0",
    mediaId: videoTransceiver.mid,
    layer: {
      encodingId : "l",
      temporalLayerId : 1
    }
  }
]);
~~~

~~~javascript Projecting with layer selection using \`select\`
async select (layer = {}) {
    logger.debug('Viewer select layer values: ', layer);
    await this.signaling.cmd('select', "layer");
    logger.info('Connected to streamName: ', this.streamName);
}
~~~

The layer information available for each video source is provided periodically by the `layers` event as shown above. If you want to switch back to the automatic layer selection, you just need to send a [project](https://millicast.github.io/millicast-sdk/View.html#project) or [select](https://millicast.github.io/millicast-sdk/View.html#select) command without layer details.

To force layer selection, [listen to the incoming layers in the layer broadcast event](/millicast/client-sdks/web.mdx)broadcast-events) and then select the active layer using the following command:

```javascript
millicastView.select({'encodingId': '1'});
```

Where `millicastView` is the instance of the [View](https://millicast.github.io/millicast-sdk/View.html) class and `encodingId` is the field of the layer that you wan to force.

> 📘 Track limits for viewer
> 
> Dolby.io Real-time Streaming does not limit the number of tracks that a viewer can receive; it limits the maximum bitrate per viewer to a maximum of 12 Mbps across all media tracks. You should configure the Simulcast or SVC bitrate of all the sources carefully within your applications so they can receive the desired amount of video tracks in the viewer session.

### Managing layers

To avoid problems with the maximum bitrate per viewer when using multi-view with Simulcast, you can limit the quality of sources by selecting the lowest quality layers. To do it, analyze the received [broadcastEvents](https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent) to select a layer with the lowest bitrate and project it, as in the following example:

```javascript Layer selection
let lowestLayer = event.data.medias[videoTransceiver.mid].layers.reduce((min, el) => { return min.bitrate > el.bitrate ? el : min}) 

//Specify the source you want to modify and select the lowest layer
viewer.project('sourceId2', [{media: 'video', layer: {encodingId:lowestLayer.encodingId,spatialLayerId:lowestLayer.spatialLayerId,temporalLayerId:lowestLayer.temporalLayerId} }])
```
```json Example of the received event
{
  "type": "event",
  "name": "layers",
  "data": {
    "medias": {
      "0": {
        "active": [
          ...
        ],
        "inactive": [],
        "layers": [
          ...
        ]
      },
      "2": {
        "active": [
          ...
        ],
        "inactive": [],
        "layers": [
          {
            "encodingId": "8",
            "simulcastIdx": 2,
            "spatialLayerId": 255,
            "temporalLayerId": 255,
            "bitrate": 1085112,
            "totalBitrate": 1107688,
            "targetBitrate": 733000,
            "targetWidth": 960,
            "targetHeight": 540
          },
          {
            "encodingId": "7",
            "simulcastIdx": 1,
            "spatialLayerId": 255,
            "temporalLayerId": 255,
            "bitrate": 678864,
            "totalBitrate": 696928,
            "targetBitrate": 488000,
            "targetWidth": 640,
            "targetHeight": 360
          },
          {
            "encodingId": "6",
            "simulcastIdx": 0,
            "spatialLayerId": 255,
            "temporalLayerId": 255,
            "bitrate": 226344,
            "totalBitrate": 237608,
            "targetBitrate": 195000,
            "targetWidth": 416,
            "targetHeight": 234
          }
        ]
      }
    }
  }
}

```

### Promoting feeds

If you want to remove all existing limitations from the promoted feed, such as restricted bitrate or resolution, set the `promote` attribute to true,  as in the following example:

```javascript
// promoting a source
viewer.project("uniqueSourceID",[
    {
        trackId: "video0",
        mediaId: videoTransceiver.mid,
        media: "video",
        promote: true
    }
]); 
```

## Dynamic viewer track

The [addRemoteTrack](https://millicast.github.io/millicast-sdk/View.html#addRemoteTrack) method on [Javascript SDK](https://millicast.github.io/millicast-sdk/View.html#addRemoteTrack) provides the ability to add new tracks on demand on the viewer side. This method will perform a local renegotiation and create the [track](https://millicast.github.io/millicast-sdk/PeerConnection.html#event:track) event with the added track and transceiver. 

```javascript Dynamically adding a remote track on the viewer
// Add remote track and wait until the SDP O/A is performed and mid is assigned to the transceiver
const transceiver = await viewer.addRemoteTrack("video",[new MediaStream()]);
// Get mid for new created remote track
const mediaId = transceiver.mid;
```

After the renegotiation is done, you can use the newly created transceiver `mid` attribute on the projection or layer selection methods to receive media from any source on the new track.
