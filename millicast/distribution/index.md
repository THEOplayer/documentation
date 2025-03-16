---
title: "Distribution"
id: distribution
---
The Dolby.io Streaming Content Delivery Network (CDN) offers a range of server-side features that users can toggle and adjust via the REST APIs or your account Dashboard to ensure streams are secure, stable, and scalable. 

<div style="margin-left: 20px">

✓ **Scalability** to distribute content to large audiences across [multiple regions](multi-region-support.md) in real-time.

✓ ** Stability** with features like [simulcast with WebRTC](using-webrtc-simulcast.md) that provide redundancy and adaptability to maintain a good user experience across different network and device conditions while maintaining a high uptime and Quality of Experience (QoE).

✓ **Security** through features that protect your content by securing streams with subscriber tokens, [self-signed tokens](subscribe-tokens.md#creating-a-self-signed-token), allowing only [specific origins](token-security.md), [geo-blocking](geo-blocking.md), and [IP filtering](token-security.md).

</div>

Distribution of streaming content requires scalability, stability, and security along with a robust platform with features including [stream recordings](recordings.md), [multi-source broadcasting](multi-source-broadcasting.md), [multi-bitrate delivery](using-webrtc-simulcast.md), [backup publishing](backup-publishing.md), [stream syndication](syndication.md), and  [streaming analytics](analytics-api.md).

# Start building

<div class="dolbyio-cards-container" style="width: 50%">
  
  <a class="dolbyio-card dolbyio-card-1" href="/streaming-apis/docs/getting-started">
    <div class="dolbyio-card-image">
      <img width="40px" class="dolbyio-card-svg-icon" src="https://files.readme.io/dde6508-GettingStarted-default.svg"/>
    </div>
    <div class="dolbyio-card-header">Getting Started</div>
    <div class="dolbyio-card-description">
      Quick start for using REST APIs to control content distribution.
    </div>
  </a>
  
</div>

<style> 
  
  .dolbyio-card-svg-icon {
    -webkit-filter: invert(100%);
    filter: invert(100%);
  }
  
</style>


# Distribution of streaming content

Distribution of high-value content and intellectual property requires a platform that values security, stability, and scalability.

## Security

[How-to Manage Your Tokens](managing-your-tokens.md)  
**Tokens** are generated to authenticate and give access to a stream for a specific period of time. You will use separate tokens for publishing and subscribing to a stream so that only appropriate authorizations are granted depending on your requirements, such as:

- Specifying specific domain names or allowed origins
- Identifying IP addresses to filter

[How-to Setup Geo-blocking](geo-blocking.md)  
**Geo-blocking** can be enabled to block specific geographic areas, such as countries or regions where you do not want the content to be streamed.

<div style="display: flex; justify-content: center; align-items: center;">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/n4iXAJuw-aM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


### ISO/IEC 27001:2022 Certification


![](https://cdn.TODO.io/docs/readme/097ae33-ISO-IEC-27001-2022-005.webp)



The Dolby.io Millicast platform has been assessed and found to be in accordance with the management system requirements in [ISO/IEC 27001:2022](https://www.iso.org/standard/27001). 

ISO 27001 is an internationally recognized standard for information security management systems (ISMS). Dolby.io's conformity to ISO/IEC standards means that we've established systems, plans, and security measures to protect and safely handle user data, along with general information security.

If you'd like confirmation of our certification, please see [the IAF's accreditation verification tool](https://www.iafcertsearch.org/certification/DQmrsq4w4DnUf2KBVA3WYdmR).

## Stability

Whether the stream has one viewer or hundreds of thousands, the stability of the stream is a top priority. To support stream stability and adaptability, Dolby.io provides several important features.

[Multi-source streaming](multi-source-broadcasting.md)  
Add redundancy with multiple independent broadcast sources as part of the same stream. This distribution of multiple audio and video tracks enables the viewer to playback a different feed in case an incoming source becomes unavailable.

[Audio multiplexing](audio-multiplexing.md)  
With **multiplexing**, this enables end users to receive multiple audio feeds as part of a single broadcast such that viewers can toggle between different audio tracks, such as variations in language, quality, etc.

[Simulcast](using-webrtc-simulcast.md)  
**Simulcast** is a mechanism that allows for the distribution of a media stream composed of multiple bitrates and resolutions. The user can then view a stream that has a quality determined by network or device type allowing low-bandwidth conditions to receive an appropriate quality stream for the most stable experience possible in that scenario.


![](https://cdn.TODO.io/docs/readme/44df552-8c0d37a-Simulcast.png)



[Backup publishing](backup-publishing.md)  
Similar to multi-source streaming, **backup publishing** allows for a parallel broadcast to be ingested from the same encoding source. In case of a failure, the system can fall over to another active backup stream.

## Scalability

To support global audiences into the hundreds of thousands of viewers, Dolby.io provides features that help with scaling streams to meet those demands without impacting the quality or stability of the stream.

[Multi-region support](multi-region-support.md)  
We utilize a network of data centers distributed around the globe. This allows streams to maintain ultra-low latency and high scalability to audiences that may be scattered to many different regions.

[Stream syndication](syndication.md)  
Through distribution partners, **syndication** allows you to send the same stream to multiple platforms. A tracking id can be used to correlate and analyze distribution data to monitor bandwidth utilization, viewer attendance with each provider, and other statistics that can help with billing.

[Recordings](recordings.md)  
A live broadcast can be archived by enabling the storage of a recording of the stream.

[Self-signed tokens](subscribe-tokens.md#creating-a-self-signed-token)  
To improve performance when tracking many individual streams among your users, you only need to generate one Dolby.io token and can then delegate that authorization by generating new self-signed **JWT tokens** in your application without needing to fetch a new subscriber token from Dolby.io for each new stream.

[Streaming analytics](analytics-api.md)  
The Dolby.io dashboard provides data-rich information about streaming usage for your individual account. There are also **REST** and **GraphQL** endpoints to generate custom reports and behaviors by querying that data.

# Learn more

<div>
  <div class="small-text-only-btn-container">

    <a class="small-text-only-btn" href="https://github.com/orgs/dolbyio-samples/repositories?q=distribution">
      <div class="model-card"><svg viewBox="0 0 16 16" width="16" height="16" class="octicon octicon-mark-github" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg> <span> Explore GitHub sample code</div>
    </a>    
      
    <a class="small-text-only-btn" href="https://dolby.io/blog/tag/distribution/">
      <div class="model-card">Find related blog posts</div>
    </a>
      
  </div>
</div>

<style>
  .small-text-only-btn-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 0.1rem;
  }

  .small-text-only-btn {
    border: solid 1px rgba(0,0,0,.1);
    background-color: white;
    border-radius: 7px;
    text-align: center;
    text-decoration: none !important; 
    box-shadow: 0 4px 10px rgba(62,62,62,.03);
    transition: all .2s ease .01s !important;
    padding: 5px;
    color: black !important;
    margin:5px; 
    font-size: 13px;
    font-weight: 400;
  }

 .small-text-only-btn:hover {
    border: solid 1px #cbadff;
    top: -2px;
    box-shadow: 0 5px 8px rgba(81,111,247,.2); 
  }
  
  .octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
    overflow: visible;
  } 

</style> 




<div class="blog-widget-container">
  
  <a href="https://dolby.io/blog/using-the-dolby-io-streaming-rest-api-and-postman-to-generate-new-broadcasting-tokens/" class="blog-widget">
    <div class="blog-widget-inner-container">
      <div class="blog-widget-content">
        <div class="blog-widget-image card__image--left">
        </div>
        <div class="blog-widget-title">Generating Tokens with Postman</div>
        <div class="blog-widget-description">Learn how to create and configure tokens.</div>
        <button class="blog-widget-cta-btn">Read More</button>
      </div>
    </div>
  </a>
  
  <a href="https://dolby.io/blog/secure-token-authentication-with-dolby-io-millicast-streaming-webrtc/" class="blog-widget">
    <div class="blog-widget-inner-container">
      <div class="blog-widget-content">
        <div class="blog-widget-image card__image--center">
        </div>
        <div class="blog-widget-title">Enabling Secure Token Authentication</div>
        <div class="blog-widget-description">Use the dashboard and APIs to generate tokens.</div>
        <button class="blog-widget-cta-btn">Read More</button>
      </div>
    </div>
  </a>
  
  <a href="https://dolby.io/blog/ending-live-streams-with-automation-and-apis/" class="blog-widget">
    <div class="blog-widget-inner-container">
      <div class="blog-widget-content">
        <div class="blog-widget-image card__image--right">
        </div>
        <div class="blog-widget-title">End Live Streams with Automation and APIs</div>
        <div class="blog-widget-description">Learn how to stop a live stream remotely using the REST APIs.</div>
        <button class="blog-widget-cta-btn">Read More</button>
      </div>
    </div>
  </a>
  
</div>

<style> 
  .blog-widget-container {
    display: flex;
    flex-wrap: wrap; 
    column-gap: 20px; 
  }
  
  .blog-widget {
    display: flex; 
    flex: 1; 
    align-items: center; 
    justify-content: center; 
    border: solid 1px rgba(0,0,0,.1);
    background-color: white;
    border-radius: 7px;
    /* text-align: center; centered version */
    text-decoration: none !important; 
    box-shadow: 0 4px 10px rgba(62,62,62,.03);
    transition: all .2s ease .01s !important;
    color: black !important;
  }
  
  .blog-widget:hover {
    border: solid 1px #cbadff;
    top: -2px;
    box-shadow: 0 5px 8px rgba(81,111,247,.2); 
  }
  
  .blog-widget-inner-container {
    display: flex; 
    flex: 1 1 auto;
    flex-direction: column;
    padding: 1rem;
  }
  
  .blog-widget-content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
  }
  
  .blog-widget-image {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    position: relative;
    margin-bottom: 15px; 
  }
  
  .blog-widget-image::before {
    content: "";
	  display: block;
    padding-top: 56.25%; 
  }
  
  .card__image--left {
  background-image: url(https://dolby.io/wp-content/uploads/2023/01/Dolby.io_Streaming-REST-API.png);
	} 
  
  .card__image--center {
  background-image: url(https://dolby.io/wp-content/uploads/2022/08/Dolby.io_Millicast_Security-Practices-page-001-scaled.jpg);
	} 
  
    .card__image--right {
  background-image: url(https://dolby.io/wp-content/uploads/2023/01/Dolby.io_How-to-Stop-your-live-stream-via-API-80.jpg);
	} 
  
  .blog-widget-title {
    margin-bottom: 15px; 
    font-size: 1.25rem;
    font-weight: 300; 
  }
  
  .blog-widget-description {
    flex: 1 1 auto; 
    font-size: 0.875rem; 
    margin-bottom: 15px; 
  }
  
  .blog-widget-cta-btn {
    display: block; 
    width: 100%; 
    padding: 0.5rem; 
    background-color: white; 
    border: 1px solid gray; 
    cursor: pointer; 
  }
  
</style>
