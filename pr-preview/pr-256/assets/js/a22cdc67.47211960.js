"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["30276"],{86386:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"software-encoders/using-ffmpeg","title":"FFmpeg","description":"FFmpeg is a free open-source software project with command-line tools for handling video, audio, and other multimedia. It is common practice to use Ffmpeg in production workflows when broadcasting from a media file on disk.","source":"@site/millicast/software-encoders/using-ffmpeg.md","sourceDirName":"software-encoders","slug":"/using-ffmpeg","permalink":"/documentation/pr-preview/pr-256/millicast/using-ffmpeg","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/software-encoders/using-ffmpeg.md","tags":[],"version":"current","frontMatter":{"title":"FFmpeg","slug":"/using-ffmpeg"},"sidebar":"millicast","previous":{"title":"OBS Enhanced Multitrack Video","permalink":"/documentation/pr-preview/pr-256/millicast/obs-enhanced-broadcasting-multitrack-video"},"next":{"title":"OBS","permalink":"/documentation/pr-preview/pr-256/millicast/using-obs"}}'),r=i("85893"),n=i("50065");let l={title:"FFmpeg",slug:"/using-ffmpeg"},a=void 0,o={},d=[{value:"General",id:"general",level:2},{value:"Common Settings",id:"common-settings",level:3},{value:"RTMP",id:"rtmp",level:2},{value:"How-to Publish an H.264 RTMP Video Stream",id:"how-to-publish-an-h264-rtmp-video-stream",level:3},{value:"How-to Publish an H.265 RTMP Video Stream",id:"how-to-publish-an-h265-rtmp-video-stream",level:3},{value:"How-to Publish an AV1 RTMP Video Stream",id:"how-to-publish-an-av1-rtmp-video-stream",level:3},{value:"How-to Publish an RTSP Video Stream",id:"how-to-publish-an-rtsp-video-stream",level:3},{value:"How-to Simulcast a Multi-Source MBR Video Stream",id:"how-to-simulcast-a-multi-source-mbr-video-stream",level:3},{value:"SRT",id:"srt",level:2},{value:"How-to Check if SRT is Supported in Your Installation",id:"how-to-check-if-srt-is-supported-in-your-installation",level:3},{value:"How-to Simulcast a Redundant Ingest SRT Video Stream",id:"how-to-simulcast-a-redundant-ingest-srt-video-stream",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Stuttering video",id:"stuttering-video",level:3},{value:"Learn more",id:"learn-more",level:2}];function c(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"FFmpeg"})," is a free open-source software project with command-line tools for handling video, audio, and other multimedia. It is common practice to use Ffmpeg in production workflows when broadcasting from a media file on disk."]}),"\n",(0,r.jsxs)(t.p,{children:["Broadcasts are started using the ",(0,r.jsx)(t.code,{children:"ffmpeg"})," command-line to forward a source using either ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/using-rtmp-and-rtmps",children:"RTMP"})," or ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/using-srt",children:"SRT"})," broadcast contribution protocols which are then streamed as ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/webrtc-whip",children:"WebRTC"})," for global real-time distribution."]}),"\n",(0,r.jsxs)(t.p,{children:["See the official ",(0,r.jsx)(t.a,{href:"https://ffmpeg.org/",children:"ffmpeg.org"})," documentation for installation instructions and additional support."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\uD83D\uDC4D Getting Started"}),"\n",(0,r.jsxs)(t.p,{children:["If you haven't already, begin by following the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/getting-started",children:"Getting Started"})," tutorial to create a Dolby.io application and start your first broadcast."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,r.jsx)(t.h3,{id:"common-settings",children:"Common Settings"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-stream_loop -1"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Loop the video indefinitely"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-vb 3000k"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Video Bitrate setting of 3Kbps"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-acodec aac"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"AAC audio codec"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-ac 2"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Audio channels for stereo"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-ab 96000"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Audio Bitrate setting of 96Kbps"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-ar 48000"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Audio Sample Rate of 48Kbps"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-bf 0"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Disable bframes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-g 60"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Group of pictures (GOP) size"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-f flv"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Package flash video"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"-preset veryfast"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Video encoding speed to compression ratio preset"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"rtmp",children:"RTMP"}),"\n",(0,r.jsxs)(t.p,{children:["In order to broadcast with RTMP, you will need to have your ",(0,r.jsx)(t.strong,{children:"RTMP publish path"})," and ",(0,r.jsx)(t.strong,{children:"RTMP publish stream name"})," available. See the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/using-rtmp-and-rtmps#how-to-find-your-rtmp-publish-url",children:"RTMP Broadcast Guide"})," for details on how to retrieve these values."]}),"\n",(0,r.jsxs)(t.p,{children:["The examples on the remainder of the page will reference these as environment variables: ",(0,r.jsx)(t.code,{children:"$RTMP_PUBLISH_PATH"})," and ",(0,r.jsx)(t.code,{children:"$RTMP_PUBLISH_STREAM_NAME"}),". You can replace these or set them as appropriate for the shell environment and operating system you are using."]}),"\n",(0,r.jsx)(t.h3,{id:"how-to-publish-an-h264-rtmp-video-stream",children:"How-to Publish an H.264 RTMP Video Stream"}),"\n",(0,r.jsx)(t.p,{children:"The Millicast platform supports AVC (H264) broadcast pass-through which is widely supported across platforms and browsers. Of note are two flags you should use:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"-vcodec libx264"})," identifies the video codec"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"-vprofile baseline -level 3.0"})," is the H.264 profile and level for maximum decoding speed, frame size, and bit rate"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:'title="bash"',children:"ffmpeg -re -stream_loop -1 -i $VIDEO_FILE_PATH \\\n  -vcodec libx264 \\\n  -preset veryfast \\\n  -bf 0 -g 60 \\\n  -vb 3000k \\\n  -vprofile baseline \\\n  -level 3.0 \\\n  -acodec aac \\\n  -ab 96000 -ar 48000 -ac 2 \\\n  -strict experimental \\\n  -f flv \\\n  -rtmp_playpath $RTMP_PUBLISH_STREAM_NAME \\\n  -rtmp_live live $RTMP_PUBLISH_PATH\n"})}),"\n",(0,r.jsx)(t.h3,{id:"how-to-publish-an-h265-rtmp-video-stream",children:"How-to Publish an H.265 RTMP Video Stream"}),"\n",(0,r.jsxs)(t.p,{children:["The Millicast platform supports HEVC (H265) broadcast pass-through, but playback of this codec is not widely supported across all web browsers and devices. To view an HEVC stream, you should use Safari 17.2+ or the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/ios",children:"iOS"})," Client SDK which provide decoding support."]}),"\n",(0,r.jsxs)(t.p,{children:["To stream HEVC via RTMP you can use the ",(0,r.jsx)(t.code,{children:"libx265"})," codec and the ",(0,r.jsx)(t.code,{children:"flv"})," packager:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Text",metastring:'title="bash"',children:'YOUR_RTMP_PUBLISH_PATH_WITH_STREAM_NAME="rtmp://rtmp-auto.millicast.com:1935/v2/pub"+YOUR_RTMP_STREAM_NAME_AND_TOKEN\n\nffmpeg -re -stream_loop -1 -i demo.mp4 -c:v libx265 -x265-params bframes=0 \\\n-preset fast -crf 23 -b:v 1000k -maxrate 1000k -bufsize 2000k -c:a aac -b:a 96k \\\n-ar 44100 \\\n-f flv $YOUR_RTMP_PUBLISH_PATH_WITH_STREAM_NAME\n'})}),"\n",(0,r.jsx)(t.h3,{id:"how-to-publish-an-av1-rtmp-video-stream",children:"How-to Publish an AV1 RTMP Video Stream"}),"\n",(0,r.jsxs)(t.p,{children:["The Millicast platform supports AV1 broadcast pass-through with an RTMP-enhanced stream, but playback of this codec has varying support across web browsers and devices. To view an AV1 stream ",(0,r.jsx)(t.a,{href:"https://caniuse.com/av1",children:"check your chosen platform/device's support"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["To stream AV1 via RTMP you can use ",(0,r.jsx)(t.code,{children:"librav1e"}),", ",(0,r.jsx)(t.code,{children:"SVT-av1"})," or ",(0,r.jsx)(t.code,{children:"libaom-av1"})," and the ",(0,r.jsx)(t.code,{children:"flv"})," packager:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:'title="bash"',children:"ffmpeg -re -stream_loop -1 -i demo.mp4 \\\n  -b:a 1M -b:v 1M \\\n  -c:v librav1e  -f flv \\\n  -rtmp_playpath $RTMP_PUBLISH_STREAM_NAME \\\n  -rtmp_live live $RTMP_PUBLISH_PATH\n"})}),"\n",(0,r.jsx)(t.p,{children:"AV1 encoding can be quite processor-intensive and usually requires GPU-enabled hardware acceleration. For testing, we recommend including a few additional settings that can boost encoding speed:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:'title="bash"',children:"-speed 10  -qp 63 -g 120 -keyint_min 120 -tile-columns 4 -tile-rows 2\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\uD83D\uDEA7 AV1 Encoder Required"}),"\n",(0,r.jsxs)(t.p,{children:["FFmpeg doesn't include an AV1 encoder with standard installs. You must install one separately by following FFmpeg's official ",(0,r.jsx)(t.a,{href:"https://trac.ffmpeg.org/wiki/Encode/AV1",children:"AV1 installation guide"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"how-to-publish-an-rtsp-video-stream",children:"How-to Publish an RTSP Video Stream"}),"\n",(0,r.jsxs)(t.p,{children:["Support for ",(0,r.jsx)(t.strong,{children:"Real-time Streaming Protocol (RTSP)"})," can be done with ",(0,r.jsx)(t.code,{children:"ffmpeg"})," by changing the input source. All of the other parameters are consistent with streaming a media file from disk."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:'title="bash"',children:"ffmpeg -re -i rtsp://98.116.xx.xx:5545/axis-media/media.amp \\\n  -vcodec libx264  \\\n  -preset veryfast \\\n  -bf 0 -g 60 \\\n  -vb 3000k \\\n  -vprofile baseline \\\n  -level 3.0 \\\n  -acodec aac \\\n  -ab 96000 -ar 48000 -ac 2 \\\n  -strict experimental \\\n  -f flv \\\n  -rtmp_playpath $RTMP_PUBLISH_STREAM_NAME \\\n  -rtmp_live live $RTMP_PUBLISH_PATH\n"})}),"\n",(0,r.jsx)(t.h3,{id:"how-to-simulcast-a-multi-source-mbr-video-stream",children:"How-to Simulcast a Multi-Source MBR Video Stream"}),"\n",(0,r.jsxs)(t.p,{children:["This example demonstrates sending the same video with multiple contribution layers. The ",(0,r.jsx)(t.code,{children:"&sourceId"})," ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/broadcast-parameters",children:"publishing parameter"})," is used to distinguish each source while using ",(0,r.jsx)(t.code,{children:"&videoOnly"})," so the audio is only sent with the main feed. Also see the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/multi-source-broadcasting",children:"Multi-Source Broadcasting"})," for more about Multi-bitrate contribution."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:'title="bash"',children:'ffmpeg -re -stream_loop -1 -i demo.mp4 \\\n  -c:v libx264 -preset medium -b:v:0 800k -maxrate:v:0 856k -bufsize:v:0 1200k -s:v:0 640x360 -profile:v:0 main -f flv "$RTMP_PUBLISH_PATH$RTMP_PUBLISH_STREAM_NAME&sourceId=1&simulcastId" \\\n  -c:v libx264 -preset medium -b:v:0 1200k -maxrate:v:0 1280k -bufsize:v:0 1600k -s:v:0 854x480 -profile:v:0 main -f flv "$RTMP_PUBLISH_PATH$RTMP_PUBLISH_STREAM_NAME&sourceId=2&simulcastId&videoOnly" \\\n  -c:v libx264 -preset medium -b:v:0 2500k -maxrate:v:0 2600k -bufsize:v:0 3000k -s:v:0 1280x720 -profile:v:0 main -f flv "$RTMP_PUBLISH_PATH$RTMP_PUBLISH_STREAM_NAME&sourceId=3&simulcastId&videoOnly"\n'})}),"\n",(0,r.jsx)(t.h2,{id:"srt",children:"SRT"}),"\n",(0,r.jsxs)(t.p,{children:["In order to broadcast with SRT, you will need to have your ",(0,r.jsx)(t.strong,{children:"SRT publish path"})," and ",(0,r.jsx)(t.strong,{children:"SRT stream ID"})," available. See the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/using-srt",children:"SRT Broadcast Guide"})," for details on how to retrieve these values."]}),"\n",(0,r.jsxs)(t.p,{children:["The examples on the remainder of the page will reference these as environment variables: ",(0,r.jsx)(t.code,{children:"$SRT_PUBLISH_PATH"})," and ",(0,r.jsx)(t.code,{children:"$SRT_STREAM_ID"}),". You can replace these or set them as appropriate for the shell environment and operating system you are using."]}),"\n",(0,r.jsx)(t.h3,{id:"how-to-check-if-srt-is-supported-in-your-installation",children:"How-to Check if SRT is Supported in Your Installation"}),"\n",(0,r.jsxs)(t.p,{children:["Some installations of ",(0,r.jsx)(t.code,{children:"ffmpeg"})," may not have SRT available. This can be verified by running:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:'title="bash"',children:"ffmpeg -buildconf | grep enable-libsrt\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The output should show that ",(0,r.jsx)(t.code,{children:"--enable-libsrt"})," is present."]}),"\n",(0,r.jsx)(t.h3,{id:"how-to-simulcast-a-redundant-ingest-srt-video-stream",children:"How-to Simulcast a Redundant Ingest SRT Video Stream"}),"\n",(0,r.jsxs)(t.p,{children:["This example demonstrates [redundant ingest]/millicast/broadcast/redundant-ingest/index.mdx) where a second publishing source is used to recover from a failed broadcast source. The ",(0,r.jsx)(t.code,{children:"&priority=100"})," ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/broadcast-parameters",children:"publishing parameter"})," is used to indicate which is the primary and which is the backup feed. ",(0,r.jsx)(t.strong,{children:"The SRT URL must be URLencoded."})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:'title="bash"',children:'ffmpeg -nostdin -fflags +genpts -re -stream_loop -1 -i demo.mp4 \\\n  -map 0 -vcodec libx264 -c:a copy -b:a 128k -preset veryfast -bf 0 -g 60 -vb 4500k -vprofile baseline -level 3.0 -f mpegts "$SRT_URL%26priority%3D100" \\\n  -map 0 -vf scale=720:-2,setsar=1:1 -vcodec libx264 -an -preset veryfast -bf 0 -g 60 -vb 3000k -vprofile baseline -level 3.0 -f mpegts "$SRT_URL%26priority%3D100%26videoOnly%26sourceId%3D1" \\\n  -map 0 -vf scale=480:-2,setsar=1:1 -vcodec libx264 -an -preset veryfast -bf 0 -g 60 -vb 1500k -vprofile baseline -level 3.0 -f mpegts "$SRT_URL%26priority%3D100%26videoOnly%26sourceId%3D2"\n'})}),"\n",(0,r.jsxs)(t.p,{children:["For the backup source, we'd use ",(0,r.jsx)(t.code,{children:"&priority=-100"})," and run it from a secondary piece of hardware or secondary network in case of failures. The rest of the command is identical otherwise."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:'title="bash"',children:'ffmpeg -nostdin -fflags +genpts -re -stream_loop -1 -i demo.mp4 \\\n  -map 0 -vcodec libx264 -c:a copy -b:a 128k -preset veryfast -bf 0 -g 60 -vb 4500k -vprofile baseline -level 3.0 -f mpegts "$SRT_URL%26priority%3D-1" \\\n  -map 0 -vf scale=720:-2,setsar=1:1 -vcodec libx264 -an -preset veryfast -bf 0 -g 60 -vb 3000k -vprofile baseline -level 3.0 -f mpegts "$SRT_URL%26priority%3D-100%26videoOnly%26sourceId%3D1" \\\n  -map 0 -vf scale=480:-2,setsar=1:1 -vcodec libx264 -an -preset veryfast -bf 0 -g 60 -vb 1500k -vprofile baseline -level 3.0 -f mpegts "$SRT_URL%26priority%3D-100%26videoOnly%26sourceId%3D2"\n'})}),"\n",(0,r.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsxs)(t.p,{children:["These examples were verified with ",(0,r.jsx)(t.code,{children:"ffmpeg"})," version 6.0 on MacOS."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:'title="bash"',children:"> ffmpeg -version\nffmpeg version 6.0 Copyright (c) 2000-2023 the FFmpeg developers\nbuilt with Apple clang version 14.0.3 (clang-1403.0.22.14.1)\n"})}),"\n",(0,r.jsx)(t.p,{children:"If you are using a different version or operating system please include these details when reporting any issues."}),"\n",(0,r.jsx)(t.h3,{id:"stuttering-video",children:"Stuttering video"}),"\n",(0,r.jsx)(t.p,{children:"If you experience stutter in your streaming video, make sure you are using the options:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"-vprofile baseline -bf 0\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can also modify the ",(0,r.jsx)(t.code,{children:"-preset"})," to adjust the compression speed to quality ratio."]}),"\n",(0,r.jsx)(t.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,r.jsxs)(t.p,{children:["This guide covered broadcasting with ",(0,r.jsx)(t.code,{children:"ffmpeg"}),". To test and view the stream you can use the dashboard or any of the other ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/playback",children:"playback"})," methods."]}),"\n",(0,r.jsxs)(t.p,{children:["Continue exploring other ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/software-encoders",children:"software encoders"})," and solutions you can use for ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-256/millicast/broadcast",children:"broadcasting"})," your real-time stream."]})]})}function h(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return a},a:function(){return l}});var s=i(67294);let r={},n=s.createContext(r);function l(e){let t=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);