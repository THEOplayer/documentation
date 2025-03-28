---
title: "Playback"
slug: /playback
---
The final stage of the streaming workflow is taking the stream and playing it back for the end user. Similar to broadcasting, decoding the stream for playback is supported with a viewer for a wide range of devices and environments.

<div style={{marginLeft: "20px"}}>

✓ Hosted streaming player with low-code drop-in support for many applications.

✓ Interactive playback for streams that support dynamic tracks, multiple layers, multiple views, and playback events.

✓ Support with [Client SDKs](/millicast/client-sdks/index.md) for building custom playback viewers for [Web](/millicast/client-sdks/web.md), [iOS](/millicast/client-sdks/ios/index.md), [Android](/millicast/client-sdks/android/index.md), [React-Native](/millicast/client-sdks/rn.md), [Flutter](/millicast/client-sdks/flutter.md), or desktop environments.

✓ Preview streams with poster images and thumbnails.

✓ **REST and GraphQL APIs** that provide analytics for tracking individual streams and user bandwidth tracking for who is viewing a stream.

✓ Broad support is made possible through implementations of [WebRTC HTTP Egress Protocol (WHEP)](https://dolby.io/blog/what-is-whep-intro-to-webrtc-streaming-part-2/).

</div>

# Start building

<div class="dolbyio-cards-container" style={{width: "50%"}}>
  
  <a class="dolbyio-card dolbyio-card-1" href="/streaming-apis/docs/getting-started">
    <div class="dolbyio-card-image">
      <img width="40px" class="dolbyio-card-svg-icon" src="https://files.readme.io/dde6508-GettingStarted-default.svg"/>
    </div>
    <div class="dolbyio-card-header">Getting Started</div>
    <div class="dolbyio-card-description">
      Quick start for playback of a stream in your application.
    </div>
  </a>
  
</div>


## Client SDKs

<div class="small-image-and-text-btn-container">
  <a href="/millicast/client-sdks/web.md" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/web.svg)
      </div>
      <div class="small-image-and-text-btn-title">Web SDK</div>
    </div>
  </a>
  
  <a href="/millicast/client-sdks/ios" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/apple.svg)
      </div>
      <div class="small-image-and-text-btn-title">iOS SDK</div>
    </div>
  </a>
  
  <a href="/millicast/client-sdks/android" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/android.svg)
      </div>
      <div class="small-image-and-text-btn-title">Android SDK</div>
    </div>
  </a>    
  
  <a href="/millicast/client-sdks/rn.md" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/react.svg)
      </div>
      <div class="small-image-and-text-btn-title">React Native</div>
    </div>
  </a>    
  
  <a href="/millicast/client-sdks/desktop" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/apple.svg)
      </div>
      <div class="small-image-and-text-btn-title">Mac SDK</div>
    </div>
  </a>    
  
  <a href="/millicast/client-sdks/desktop" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/electron.svg)
      </div>
      <div class="small-image-and-text-btn-title">Linux SDK</div>
    </div>
  </a>    
  
  <a href="/millicast/client-sdks/flutter.md" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/flutter.svg)
      </div>
      <div class="small-image-and-text-btn-title">Flutter SDK</div>
    </div>
  </a>    
    <a href="/millicast/client-sdks/desktop" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
        ![](/img/dotnet.svg)
      </div>
      <div class="small-image-and-text-btn-title">.NET SDK</div>
    </div>
  </a>
</div>



# Playback streaming media

The previous stages of [Capture](/millicast/capture/index.md), [Broadcast](/millicast/broadcast/index.mdx), and [Distribution](/millicast/distribution/index.md) all lead up to making the content available for the end-user to view.

## Using the streaming viewer

[Dolby.io Dashboard Viewer](/millicast/streaming-dashboard/how-to-broadcast-in-dashboard.md)  
The quickest and easiest way to test playback is to use your account dashboard. The streaming viewer is built into the Dolby.io Dashboard, so you can test out streaming right away. To build a more customized application, the [Client SDKs](/millicast/client-sdks/index.md) provide support for the most popular programming platforms.

[How-to Create Subscriber Tokens](/millicast/streaming-dashboard/subscribe-tokens.md)  
To broadcast, you need a _publishing_ token. Similarly, to support playback in your application, you will need to be able to generate a _subscriber_ token. This can be done either in a web application or with an [API](/millicast/distribution/access-control/index.md).

<div style={{display: "flex", justifycontent: "center", alignitems: "center"}}>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/Tj4miDHMwSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


## Previewing a stream

[How-to Add a Poster Image](/millicast/playback/customize-your-player.md)  
A **poster image** is a graphic that lets the audience know that a session exists but that a broadcast has not yet begun.

[How-to Provide Thumbnail Image Previews](/millicast/webhooks/thumbnail-webhooks.md)  
A **thumbnail** is a static frame image that is captured at regular intervals during a broadcast. The thumbnail image offers a preview of what is being streamed to allow users to preview what is being presented before joining.

## Interactive viewer features

[How-to Create a Multi-view Web Application](/millicast/playback/multiview.md)  
When more than one streaming source is being broadcast, the viewer is capable of presenting a lower-resolution preview of each incoming feed. The application can then let the user choose from these multi-view options.

[Source and Layer Selection](/millicast/playback/source-and-layer-selection.md)  
For some applications, you may need to create more than one experience. The **multi-view application** can allow a host to choose which source layer should be sent as the primary stream that will be distributed for end-user playback. This feature can create the effect of switching between camera feeds and make dynamic cuts over the duration of the stream.

## Integrating third-party capabilities

<div style={{display: "flex", justifycontent: "center", alignitems: "center"}}>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/MrCbnQ0NyaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


You can find examples of more third-party viewer integrations, such as [Adding Graphics with Singular.live](https://dolby.io/blog/adding-real-time-graphics-to-your-webrtc-stream-with-singular-live/) on the [developer blog](https://dolby.io/blog/category/streaming/).

## Playback events and analytics

<div style={{display: "flex", justifycontent: "center", alignitems: "center"}}>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/v45XTACc5D8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


[Webhooks](/millicast/webhooks/index.md)  
A **webhook** is a registered URL that will be called back from the Dolby.io platform with details about an event as it occurs. You can create webhooks for when a thumbnail is generated, a recording is complete, or when streams begin and end.

[Viewer events](/millicast/playback/viewer-events.md)  
Viewer events occur when a component of a stream changes, such as when a new source is published, simulcast layer information has changed, etc.

[Syndication](https://dolby-io.readme.io/streaming-apis/docs/syndication) 

**Syndication** refers to the process of distributing or sharing content with multiple streaming partners while tracking and analyzing viewer data on bandwidth consumption. 

[Streaming analytics](/millicast/analytics/index.md)  
The account dashboard provides data-rich information about streaming usage for your individual account. There are also **REST** and **GraphQL** endpoints to generate custom reports and behaviors by querying that data.

## Playback on devices

The **WebRTC-HTTP Egress Protocol (WHEP) is an IETF standard developed to leverage the capabilities of WebRTC to distribute and playback content onto a WebRTC-enabled device over HTTP. WHEP addresses problems with Real-time Streaming by removing translation layers during decoding.

 **Real-time Streaming Monitor** apps were created to allow your users to quickly and easily view live streams powered by Dolby.io. Plug in your Dolby.io subscriber token to view streams on any Apple iOS, iPadOS, tvOS, or Android TV device.

- [iOS/iPadOS Stream Monitoring App](https://dolby.io/project-gallery/real-time-streaming-monitor-apps/)
- [tvOS Stream Monitoring App](https://dolby.io/project-gallery/real-time-streaming-monitor-apps/)
- [Android TV Stream Monitoring App](https://dolby.io/project-gallery/real-time-streaming-monitor-apps/)

Download one of these apps or create and customize your own Real-time Streaming Monitor apps with a native [Client SDK](/millicast/client-sdks/index.md).

# Learn more

<div>
  <div class="small-text-only-btn-container">

    <a class="small-text-only-btn" href="https://github.com/orgs/dolbyio-samples/repositories?q=playback">
      <div class="model-card"><svg viewBox="0 0 16 16" width="16" height="16" class="octicon octicon-mark-github" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>Explore GitHub sample code</div>
    </a>    
      
    <a class="small-text-only-btn" href="https://dolby.io/blog/tag/playback/">
      <div class="model-card">Find related blog posts</div>
    </a>
      
  </div>
</div>





