---
title: "Hardware Encoders"
id: hardware-encoders
---
In today's digital landscape, the demand for real-time streaming content has skyrocketed, prompting broadcasters and video creators to prioritize the efficient delivery of high-quality video and audio streams. Hardware-based encoders play a crucial role in this process with their offerings of superior encoding capabilities and seamless transmission. Needless to say, workflows don't have to be interrupted in order to better a stream. Using the Dolby.io Streaming API protocols like [SRT](/millicast/using-srt.md), [NDI](/millicast/using-ndi.md), and [WHIP](/millicast/webrtc-whip.md) can be ingested directly from the encoders like [Teradek](/millicast/broadcasting-teradek-vidiu.md), [Osprey](/millicast/using-osprey-talon-whip-hardware-encoder.md), and [Videon](/millicast/videon.md) and distributed in WebRTC.

# Integration guides

Review these guides for how to setup your preferred tools for real-time streaming integrations.

<div class="small-image-and-text-btn-container">
  <a href="./using-elgato-stream-deck-with-obs-studio-webrtc-version" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div align="center">
        <img class="logo-img" src="https://images.ctfassets.net/h50kqpe25yx1/3iIxXlFKpglC4wZISzo2XK/ed9542d4bcb717751c143c56518867cf/Elgato_Logo_Black.png"/>
      </div>
      <div class="small-image-and-text-btn-title"> </div>
    </div>
  </a>

  <a href="./using-haivision-kb-encoder" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div align="center">
      <img class="logo-img" src="data:image/png;base64,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"/>
      </div>
      <div class="small-image-and-text-btn-title"> </div>
    </div>
  </a>
  
  <a href="./using-osprey-talon-whip-hardware-encoder" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
      <img class="gray-svg" src="https://static.wixstatic.com/media/2c643c_93683bf3749b47f5957df20f77047228~mv2.png"/>
      </div>
      <div class="small-image-and-text-btn-title"> </div>
    </div>
  </a>
  
  <a href="./broadcasting-teradek-vidiu" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
      <img class="gray-svg" src="https://teradek.com/cdn/shop/files/teradek-logo-social.png?v=2615974949159750763"/>
      </div>
      <div class="small-image-and-text-btn-title"> </div>
    </div>
  </a>
  
  
  <a href="./videon" class="small-image-and-text-btn">
    <div class="small-image-and-text-btn-inner-container">
      <div>
      <img class="gray-svg" src="https://www.nomad-cms.com/wp-content/uploads/2020/10/videon-logo-dark-orange-3x2-1.png"/>
      </div>
      <div class="small-image-and-text-btn-title"> </div>
    </div>
  </a>  
</div>



## Elgato

[How-to integrate using Elgato Stream Deck](/millicast/using-elgato-stream-deck-with-obs-studio-webrtc-version.md)

**Elgato Stream Deck** is a versatile control panel that simplifies from broadcasting to editing with programmable keys. This tool can help in managing [OBS](/millicast/using-obs.md) streams by automating specific actions in a physical board. 

## Haivision

[How-to integrate using Haivision KB Encoder](/millicast/using-haivision-kb-encoder.md)

The **Haivision KB Encoder** is a high-performance video encoding device that efficiently converts video signals into compressed formats for reliable live streaming and distribution over IP networks.

## Osprey

[How-to integrate using Osprey Talon Encoder](/millicast/using-osprey-talon-whip-hardware-encoder)

**Osprey Talon** is a form-factor H.264 (AVC) and H.265 (HEVC) encoder designed to be easy to use, portable, and easily stream low latency 4k and UHD video encoding from SDI and HDMI. By supporting [WHIP](/millicast/webrtc-whip.md), Osprey is able to offer an encoder that can natively encode WebRTC streams at broadcast-level quality.

## Teradek

[How-to integrate using Teradek VidiU Go](/millicast/broadcasting-teradek-vidiu)

**Teradek VidiU Go** is a portable and reliable streaming encoder with broadcast quality of 1080p60 video, bonded network redundancy, and cutting-edge HEVC compression designed for the most challenging production environments. 

## Videon

[How-to integrate using Videon EdgeCaster](/millicast/videon.md)

**Videon EdgeCaster** is a versatile and powerful edge compute encoder that securely delivers high-quality live video streams to multiple platforms simultaneously, offering a comprehensive solution for efficient video distribution.

# Learn more

You can find examples of using [Videon EdgeCaster](https://dolby.io/blog/unleash-superior-streaming-harnessing-dolby-io-streaming-api-and-videon-edgecaster-encoder-for-multi-bitrate-simulcasting/), [Osprey Talon](https://dolby.io/blog/webrtc-hardware-encoding-and-streaming/), and more on the [developer blog](https://dolby.io/blog/tag/encoder/).

<div>
  <div class="small-text-only-btn-container">

    <a class="small-text-only-btn" href="https://github.com/orgs/dolbyio-samples/repositories?q=encoder">
      <div class="model-card"><svg viewBox="0 0 16 16" width="16" height="16" class="octicon octicon-mark-github" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg> Explore GitHub sample code</div>
    </a>    
      
    <a class="small-text-only-btn" href="https://dolby.io/blog/tag/encoder/">
      <div class="model-card">Find related blog posts</div>
    </a>
      
  </div>
</div>






