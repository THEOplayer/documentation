---
title: "Camera Drones"
slug: /live-streaming-from-drones-rtmp
---
Using a drone, unmanned aerial vehicles (UAVs), or other flying cameras can be a way to provide a unique perspective on any real-time activities. Many of these remote-controlled devices can support network connectivity that enables either direct WebRTC or RTMP output that can be used as a broadcast streaming source.

This guide includes some examples:

1. [Capture from a DJI Mavic Mini](/millicast/capture/live-streaming-from-drones-rtmp.md)capture-from-a-dji-mavic-mini)
2. [Record Drone Footage](/millicast/capture/live-streaming-from-drones-rtmp.md)record-drone-footage)

If you are using a drone that is not listed, you should be able to use similar settings for configuring streaming with an [RTMP](/millicast/broadcast/using-rtmp-and-rtmps.md) ingestion source.

> 🚧 Reliable Networks
> 
> A stable internet connection is always required to achieve real-time streaming. Some aerial devices support cellular connectivity or can be used within range of a mobile device or network access point.
> 
> _Please observe any safety protocols and regulations for drone usage in your region._

# DJI

[DJI](https://www.dji.com/) is a leader in consumer and professional drones used for aerial videography. Several models support networking and RTMP streaming from the device that can be sent directly to Dolby.io for [distribution](/millicast/distribution/index.md) over WebRTC.

Some examples:

<div style={{marginLeft: "20px"}}>

✓ [DJI Phantom](https://www.dji.com/phantom)

✓ [DJI Mavic 3](https://www.dji.com/mavic-3)

</div>

## Simple set up using the DJI Fly App

### 1. Download the DJI Fly App

Download the [DJI Fly App](https://www.dji.com/au/downloads) compatible with your model. This is a DJI product, so the user interface and instructions may vary from what is shown below. Visit the official [DJI Support](https://www.dji.com/au/support?site=brandsite&from=nav) for resources like product manuals, user guides, and news for the latest instructions.

The DJI Fly App with livestream RTMP supports the following DJI drones: 

**Mavic Mini, DJI Air 3, DJI Mavic 3 Pro, DJI Mini2 SE, DJI Mini 3, DJI Mavic 3 Classic,DJI Avata, DJI Mini 3 Pro,  DJI Mini Pro 4, DJI Mavic 3, DJI Air 2S, DJI FPV, DJI Mini SE, DJI Mini 2, Mavic Air 2.**

Many of the DJI controllers already include the DJI Fly App.

### 2. Start the drone, controller, and app

When you are ready to setup your device, start the drone and the controller. Connect to the drone from the DJI  application. 

### 3. Open the settings menu to configure RTMP

Select the menu in the upper right corner to open the available settings.


![](/img/millicast/dolbyio-dji-drone-streaming-menu.jpg)



Select the **Transmission** tab and open **Live Streaming Platforms**.


![](/img/millicast/dolbyio-dji-drone-transmission-menu.jpg)



Choose the **RTMP** option.


![](/img/millicast/dolbyio-dji-drone-live-streaming-menu.jpg)



### 4. Enter Livestream settings

> 📘 Dolby.io Dashboard - Publish Token Details
> 
> You will need to have your Dolby.io **publishing token** and **stream name** in order to complete this setup. See the [Getting Started](/millicast/getting-started/getting-started-using-the-dashboard.md) guide for instructions on creating a new app for the first time. You will also need the **RTMP publish path** from the _Publishing_ tab in the Dolby.io Dashboard. See the [RTMP](/millicast/broadcast/using-rtmp-and-rtmps.md) guide for more detail on where to find it.

For the Livestream settings, you must provide a URL for the **RTMP Address**. This is constructed from a few of your publisher token settings gathered from the Dolby.io Dashboard.

<div style={{marginLeft: "20px"}}>

`RTMP publish path` + `/` + `RTMP publish stream name`

</div>

Note that the **RTMP publish stream name** is already a concatenation of the _publishing token_ and _stream name_. Typically this will look something similar to:

```
rtmp://rtmp-auto.millicast.com:1935/v2/pub/${streamName}?token=${publishToken}
```

### 5. Tune settings

Choose a _Resolution_ and _Bitrate_ that meets your needs, and then select the **Start** button to begin the live stream. These settings will typically persist so that you don't have to configure each flight.


![](/img/millicast/Screenshot_20220113-112623.jpg)



After a countdown, you will see your live stream icon as active on the top of the application.


![](/img/millicast/Screenshot_20220113-112908.jpg)



### Viewing

You can now share your viewer link provided from your Dolby.io developer portal under the API tab.  
Example:  https://viewer.millicast.com/?streamId=k9Mwad/multiview

## Record drone footage

By configuring your publish token to [record](/millicast/distribution/stream-recordings/index.md) footage you can maintain a copy of anything that is captured to your [Dolby.io Recording Archive](/millicast/distribution/stream-recordings/index.md)managing-recording). This feature can incur additional charges, see the [pricing](https://dolby.io/pricing) page for additional detail.

, 

### Video: Real-time Streaming drone latency test

This example demonstrates an archive recording captured from a DJI Mavic for a 1920x1080 latency test.

<div style={{display: "flex", justifycontent: "center", alignitems: "center"}}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/44GWULy5Jlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>



## Additional options to capture and publish your drone live stream

### Controller or receiver with HDMI output

Several drone providers, including enterprise level drones, have hardware devices that include video outputs allowing you to stream using any hardware or software encoder. 

The devices shown have HDMI outputs that provide multiple options to broadcast your drone's live stream.

This option allows near real time live-streaming with additional codec options, quality settings or simulcast options.

Streams can also benefit from constrained network environments with these options.


![](/img/millicast/Dji_Pro_Controller.png)




![](/img/millicast/DJI_Plus_Controller.png)




![](/img/millicast/Autel_Drones_Smart_Controller.png)




![](/img/millicast/Autel_Live_Deck.png)



Connect to a PC or Mobile device a simple HDMI capture device can be used.


![](/img/millicast/hdmi.png)



### Publishing options

Web based broadcaster

1. Web Based publisher with additional codecs can take advantage of low-bandwidth environments while still publishing an HD stream to your audience at sub-second latency.
2. OBS WebRTC allows transmission of drone streams with advanced codecs.  
   OBS WebRTC with VP9 or AV1 can take advantage of low-bandwidth environments while still publishing an HD stream to your audience at sub-second latency.
3. Mobile device with Web broadcaster.
4. Hardware Encoder

### Learn more

Once you have configured your camera for capture, visit the [broadcast](/millicast/broadcast/index.md), [distribution](/millicast/distribution/index.md), and [playback](/millicast/playback/index.md) guides to complete your project.

If you have a different type of drone than the ones listed, reach out to our [support team](https://support.dolby.io/) to ask about compatibility.
