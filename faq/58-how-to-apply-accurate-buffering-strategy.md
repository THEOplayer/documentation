# How to apply accurate buffering strategy

By default THEOplayer buffers 20 seconds of video including audio/subtitles in order to guarantee smooth playout. 
THEOplayer (alike other Web players) is relying on [HTML SourceBuffer API](https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer) for buffering purposes. 
Unfortunately there is no method which informs you how big the buffer size of given browser/device is. Of course it can be different for device, and even browser. 
In consequence in edge circumstances might happen that the following error is encountered: 
`Player error: Failed to execute 'appendBuffer' on 'SourceBuffer': The SourceBuffer is full, and cannot free space to append additional buffers.`

## Proactive strategy
One of the approach to deal with above issue is to apply proactive strategy which adjust `player.abr.targetBuffer` depending on what quality is currently used. 
The below table presents what apprximately bandwidth is required for video streaming:

| Resolutions | Required Bandwidth (H264) | Required Bandwidth (H265) |
| ------- | ----------- | ------- | 
| 1280x720 (HD)  | 3Mbps      | 1.5Mbps  | 
| 1920x1080 (FHD)  | 6Mbps      | 3Mbps  | 
| 3840x2160 (UHD)  | 25Mbps      | 12Mbps  | 
| 4096x2160 (4K)  | 32Mbps      | 15Mbps  | 

Taking above table into account, the logic responsible for the proactive strategy can look like:

```javascript
        player.addEventListener("representationchange", function (event) {
          
          // specifies how big bandwidth is required for the current quality
          var representationBandwidth = event.representation.bandwidth;
          // player.abr.targetBuffer is 20 by default
          var targetBuffer = player.abr.targetBuffer;

          // SD
          if (representationBandwidth < 3000000) {
            targetBuffer = 20;
          } else if (representationBandwidth > 3000000 && representationBandwidth < 6000000) {
            // HD
            targetBuffer = 10;
          } else if (representationBandwidth > 6000000) {
            //FHD, UHD, 4K
            targetBuffer = 5;
          } 

          player.abr.targetBuffer = targetBuffer;
          console.log('representationchange - updated player.abr.targetBuffer: ' + player.abr.targetBuffer);
        });
```		

Please note that the above numbers should be adjusted depending on the video content used.

## Resources
* [Bandwidth Required For HD FHD 4K Video Streaming](https://www.synopi.com/bandwidth-required-for-hd-fhd-4k-video/)
