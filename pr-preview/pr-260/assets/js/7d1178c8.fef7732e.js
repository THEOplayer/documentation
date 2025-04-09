"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["18651"],{38371:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"software-encoders/using-whip-with-gstreamer","title":"Gstreamer","description":"GStreamer is a free open-source software project and multimedia framework to build media processing pipelines that support complex workflows. You may want to broadcast over WebRTC from a file on disk or another Real-time Streaming Protocol (RTSP). You can originate the broadcast through GStreamer that ingests the stream utilizing WHIP or forwards with WHEP.","source":"@site/millicast/software-encoders/using-whip-with-gstreamer.md","sourceDirName":"software-encoders","slug":"/using-whip-with-gstreamer","permalink":"/documentation/pr-preview/pr-260/millicast/using-whip-with-gstreamer","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/software-encoders/using-whip-with-gstreamer.md","tags":[],"version":"current","frontMatter":{"title":"Gstreamer","slug":"/using-whip-with-gstreamer"},"sidebar":"millicast","previous":{"title":"Drastic Technologies","permalink":"/documentation/pr-preview/pr-260/millicast/using-whip-with-flowcaster"}}'),r=n("85893"),s=n("50065");let o={title:"Gstreamer",slug:"/using-whip-with-gstreamer"},a=void 0,d={},c=[{value:"Get your Dolby.io WHIP publish URL",id:"get-your-dolbyio-whip-publish-url",level:2},{value:"Get your Dolby.io WHEP playback URL",id:"get-your-dolbyio-whep-playback-url",level:2},{value:"GStreamer",id:"gstreamer",level:2},{value:"How-to broadcast the video test source",id:"how-to-broadcast-the-video-test-source",level:3},{value:"Video test source with audio",id:"video-test-source-with-audio",level:4},{value:"How-to broadcast the audio-only test source",id:"how-to-broadcast-the-audio-only-test-source",level:3},{value:"How-to broadcast a media file",id:"how-to-broadcast-a-media-file",level:3},{value:"Using a specific codec",id:"using-a-specific-codec",level:4},{value:"Using audio-only MP3 file with custom encoding",id:"using-audio-only-mp3-file-with-custom-encoding",level:4},{value:"How-to broadcast a RTSP video source",id:"how-to-broadcast-a-rtsp-video-source",level:3},{value:"Source with Opus audio",id:"source-with-opus-audio",level:4},{value:"How-to broadcast audio in surround sound",id:"how-to-broadcast-audio-in-surround-sound",level:3},{value:"Using 5.1 source media",id:"using-51-source-media",level:4},{value:"Simple WHIP client",id:"simple-whip-client",level:2},{value:"Testing your setup",id:"testing-your-setup",level:3},{value:"Publishing an RTSP video-only source",id:"publishing-an-rtsp-video-only-source",level:3},{value:"Publishing an RTSP audio and video source",id:"publishing-an-rtsp-audio-and-video-source",level:3},{value:"Publishing an RTSP source with authentication",id:"publishing-an-rtsp-source-with-authentication",level:3}];function l(e){let i={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"GStreamer"})," is a free open-source software project and multimedia framework to build media processing pipelines that support complex workflows. You may want to broadcast over WebRTC from a file on disk or another Real-time Streaming Protocol (",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/rtsp",children:"RTSP"}),"). You can originate the broadcast through GStreamer that ingests the stream utilizing ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/webrtc-whip",children:"WHIP"})," or forwards with ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/api/director/whep-whep-subscribe",children:"WHEP"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"This guide includes a number of examples:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["GStreamer WHIP Examples","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Using the Video Test Source"}),"\n",(0,r.jsx)(i.li,{children:"Using a Media File on Disk"}),"\n",(0,r.jsx)(i.li,{children:"Using an RTSP Video Source"}),"\n",(0,r.jsx)(i.li,{children:"Using Surround Sound Content"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.li,{children:"GStreamer WHEP Examples"}),"\n",(0,r.jsx)(i.li,{children:"Simple WHIP Client"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["See the official ",(0,r.jsx)(i.a,{href:"https://gstreamer.freedesktop.org/",children:"gstreamer.freedesktop.org"})," documentation for installation instructions and additional support."]}),"\n",(0,r.jsx)(i.h2,{id:"get-your-dolbyio-whip-publish-url",children:"Get your Dolby.io WHIP publish URL"}),"\n",(0,r.jsxs)(i.p,{children:["You will need a ",(0,r.jsx)(i.em,{children:"WHIP endpoint"})," and ",(0,r.jsx)(i.em,{children:"Bearer token"})," in order to broadcast. From the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/about-dash",children:"Dolby.io Dashboard"}),", navigate to the ",(0,r.jsx)(i.em,{children:"Publishing"})," tab of your token. Under the ",(0,r.jsx)(i.em,{children:"Live broadcast - Publish tokens"})," section, retrieve the ",(0,r.jsx)(i.em,{children:"WHIP endpoint"})," and ",(0,r.jsx)(i.em,{children:"Bearer token"}),"."]}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:"\uD83D\uDC4D Getting Started"}),"\n",(0,r.jsxs)(i.p,{children:["If you haven't already, begin by following the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/getting-started",children:"Getting Started"})," tutorial to create a Dolby.io application and start your first broadcast."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["See the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/webrtc-whip",children:"WHIP"})," broadcast guide for more specific instructions on retrieving these values from the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/about-dash",children:"Streaming Dashboard"}),"."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"WHIP endpoint"}),"\n",(0,r.jsx)(i.li,{children:"Bearer token"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["In the examples below, these values are referenced as environment variables. You may need to adjust how you reference these values depending on the specific ",(0,r.jsx)(i.code,{children:"shell"})," you use when running GStreamer."]}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:"\uD83D\uDD34 Recording Streams"}),"\n",(0,r.jsxs)(i.p,{children:["If your token has ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/recordings",children:"recordings"})," enabled you will also want to specify the ",(0,r.jsx)(i.code,{children:"codec"})," with the WHIP URL to specify one of the supported recording formats. You can append the query string at the end of the URL such as:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"https://director.millicast.com/api/whip/{Stream Name}?codec=vp8\n"})}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"get-your-dolbyio-whep-playback-url",children:"Get your Dolby.io WHEP playback URL"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.strong,{children:"WHEP endpoint"})," is available from the ",(0,r.jsx)(i.em,{children:"Playback"})," tab of your publish token in the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/about-dash",children:"Streaming Dashboard"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"It will follow a pattern similar to:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"https://director.millicast.com/api/whep/{Account ID}/{Stream Name}\n"})}),"\n",(0,r.jsx)(i.h2,{id:"gstreamer",children:"GStreamer"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.a,{href:"https://gstreamer.freedesktop.org/releases/1.22/",children:"1.22.0 release"})," of GStreamer (January 2023) includes support for WebRTC that enables:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"WebRTC HTTP ingest (WHIP) to a MediaServer (whipsink)"}),"\n",(0,r.jsx)(i.li,{children:"WebRTC HTTP egress (WHEP) from a MediaServer (whepsrc)"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.a,{href:"https://gstreamer.freedesktop.org/documentation/webrtchttp/whipsink.html",children:"whipsink"})," element can be used to ",(0,r.jsx)(i.strong,{children:"publish"})," a gstreamer pipeline out to a Dolby.io real-time stream. The attributes that must be defined:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"auth-token"}),": should be set with your publishing bearer token"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"whip-endpoint"}),": should be set with the Dolby.io ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/api/director/whip-whip-publish",children:"WHIP"})," endpoint"]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.a,{href:"https://gstreamer.freedesktop.org/documentation/autodetect/autovideosink.html",children:"autovideosink"})," element can be used to ",(0,r.jsx)(i.strong,{children:"playback"})," a Dolby.io real-time stream being broadcast into a gstreamer pipeline. The attribute that must be defined:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"whep-endpoint"}),": should be set with the Dolby.io ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/api/director/whep-whep-subscribe",children:"WHEP"})," endpoint"]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["You can use the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/about-dash",children:"Hosted Viewer"})," and ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/how-to-broadcast-in-dashboard",children:"Live Broadcaster"})," to test your setups."]}),"\n",(0,r.jsx)(i.h3,{id:"how-to-broadcast-the-video-test-source",children:"How-to broadcast the video test source"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.a,{href:"https://gstreamer.freedesktop.org/documentation/videotestsrc/index.html?gi-language=c",children:"videotestsrc"})," element can be used to produce a simple test video and has a few patterns. Here is a simple example of a bouncing ball:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",metastring:'title="bash"',children:"gst-launch-1.0 videotestsrc pattern=ball ! videoconvert ! x264enc ! rtph264pay ! \\\n  whip.sink_0 audiotestsrc wave=5 ! audioconvert ! opusenc ! rtpopuspay ! \\\n  whip.sink_1 whipsink name=whip \\\n  auth-token=$DOLBYIO_BEARER_TOKEN \\\n  whip-endpoint=$DOLBYIO_WHIP_ENDPOINT\n"})}),"\n",(0,r.jsx)(i.h4,{id:"video-test-source-with-audio",children:"Video test source with audio"}),"\n",(0,r.jsxs)(i.p,{children:["The default ",(0,r.jsx)(i.code,{children:"videotestsrc"})," shows a more complex stream that includes audio and a color test. To view this locally run ",(0,r.jsx)(i.code,{children:"gst-launch-1.0 videotestsrc ! autovideosink"}),":"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:n(74597).Z+"",width:"624",height:"520"})}),"\n",(0,r.jsx)(i.p,{children:"In order to stream this video test variation you need to specify some additional steps for the audio encode settings:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",metastring:'title="bash"',children:"gst-launch-1.0 videotestsrc ! videoconvert ! x264enc ! rtph264pay ! \\\n  'application/x-rtp,media=video,encoding-name=H264,payload=97,clock-rate=90000' ! \\\n  whip.sink_0 audiotestsrc wave=5 ! audioconvert ! opusenc ! rtpopuspay ! \\\n  'application/x-rtp,media=audio,encoding-name=OPUS,payload=96,clock-rate=48000,encoding-params=(string)2' ! \\\n  whip.sink_1 whipsink name=whip auth-token=$DOLBYIO_BEARER_TOKEN \\\n  whip-endpoint=$DOLBYIO_WHIP_ENDPOINT\n"})}),"\n",(0,r.jsxs)(i.p,{children:["You can watch these streams from a ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/playback",children:"playback"})," viewer."]}),"\n",(0,r.jsx)(i.h3,{id:"how-to-broadcast-the-audio-only-test-source",children:"How-to broadcast the audio-only test source"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.a,{href:"https://gstreamer.freedesktop.org/documentation/audiotestsrc/index.html?gi-language=c#audiotestsrc-page",children:"audiotestsrc"})," element can be used to produce a simple test of audio-only streaming. Here's an example:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",metastring:'title="bash"',children:"gst-launch-1.0 audiotestsrc wave=sine !\n    audioconvert ! opusenc ! rtpopuspay !\n    'application/x-rtp,media=audio,encoding-name=OPUS,payload=96,clock-rate=48000,encoding-params=(string)2' !\n    whipsink name=whip auth-token=$DOLBYIO_BEARER_TOKEN \\\n    whip-endpoint=$DOLBYIO_WHIP_ENDPOINT\n"})}),"\n",(0,r.jsx)(i.h3,{id:"how-to-broadcast-a-media-file",children:"How-to broadcast a media file"}),"\n",(0,r.jsxs)(i.p,{children:["Instead of using the video test source, this example demonstrates reading and looping a media file from disk using the ",(0,r.jsx)(i.a,{href:"https://gstreamer.freedesktop.org/documentation/multifile/multifilesrc.html",children:"multifilesrc"})," element. You can find example media to try this with such as ",(0,r.jsx)("a",{href:"<https://peach.blender.org/download/>",target:"_blank",children:"Big Buck Bunny"})]}),"\n",(0,r.jsx)(i.h4,{id:"using-a-specific-codec",children:"Using a specific codec"}),"\n",(0,r.jsxs)(i.p,{children:["If there is a requirement to use a specific codec such as with recordings you should use the ",(0,r.jsx)(i.strong,{children:"codec"})," query parameter of the ",(0,r.jsx)(i.a,{href:"/documentation/pr-preview/pr-260/millicast/api/director/whip-whip-publish",children:"WHIP"})," endpoint."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",metastring:'title="bash"',children:"gst-launch-1.0 multifilesrc location=bbb_sunflower_1080p_30fps_normal.mp4 loop=true ! \\\n  qtdemux ! decodebin ! videorate ! videoconvert ! timeoverlay ! \\\n  video/x-raw,format='(string)I420' ! vp9enc target-bitrate=4000000 keyframe-max-dist=2 deadline=1 \\\n  end-usage=1 cpu-used=8 lag-in-frames=0 ! video/x-vp9,profile='(string)0' ! \\\n  rtpvp9pay pt=100 ssrc=2 ! \\\n  whipsink name=whip auth-token=$DOLBYIO_BEARER_TOKEN \\\n  whip-endpoint=$DOLBYIO_WHIP_ENDPOINT?codec=vp9\n"})}),"\n",(0,r.jsx)(i.h4,{id:"using-audio-only-mp3-file-with-custom-encoding",children:"Using audio-only MP3 file with custom encoding"}),"\n",(0,r.jsxs)(i.p,{children:["This example demonstrates using ",(0,r.jsx)(i.a,{href:"https://gstreamer.freedesktop.org/documentation/opus/opusenc.html?gi-language=c",children:"opusenc"})," with additional configured encoding options. These can also be omitted to use the defaults."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",metastring:'title="bash"',children:"gst-launch-1.0 multifilesrc location=bbb_sunflower_1080p_30fps_normal.mp4 loop=true ! \\\n  qtdemux ! decodebin ! videorate ! videoconvert ! timeoverlay ! \\\n  video/x-raw,format='(string)I420' ! vp9enc target-bitrate=4000000 keyframe-max-dist=2 deadline=1 \\\n  end-usage=1 cpu-used=8 lag-in-frames=0 ! video/x-vp9,profile='(string)0' ! \\\n  rtpvp9pay pt=100 ssrc=2 ! \\\n  whipsink name=whip auth-token=$DOLBYIO_BEARER_TOKEN \\\n  whip-endpoint=$DOLBYIO_WHIP_ENDPOINT?codec=vp9\n"})}),"\n",(0,r.jsx)(i.h3,{id:"how-to-broadcast-a-rtsp-video-source",children:"How-to broadcast a RTSP video source"}),"\n",(0,r.jsx)(i.p,{children:"This example demonstrates using a RTSP source such as with an IP camera while"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:'gst-launch-1.0 rtspsrc location="rtsp://192.168.1.168/0" latency=0 name=rtsp ! \\\n  rtph264depay ! rtph264pay config-interval=-1 ! \\\n  application/x-rtp,media=video,encoding-name=H264 ! \\\n  whipsink name=whip auth-token=$DOLBYIO_BEARER_TOKEN \\\n  whip-endpoint=$DOLBYIO_WHIP_ENDPOINT\n\n'})}),"\n",(0,r.jsx)(i.h4,{id:"source-with-opus-audio",children:"Source with Opus audio"}),"\n",(0,r.jsx)(i.p,{children:"You can ingest with support for an audio codec such as Opus:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:'gst-launch-1.0 rtspsrc location="rtsp://192.168.1.168/0" latency=0 \\\n  ! decodebin ! `application/x-rtp,media=video,encoding-name=H264` ! \\\n  rtph264pay config-interval=-1 name=rtsp rtsp. ! \\\n  decodebin ! audioconvert ! audioresample ! \\\n  audiobuffersplit output-buffer-duration=2/50 ! opusenc ! \\\n  rtpopuspay ! application/x-rtp,media=audio,encoding-name=OPUS,payload=100 ! \\\n  whipsink name=whip auth-token=$DOLBYIO_BEARER_TOKEN \\\n  whip-endpoint=$DOLBYIO_WHIP_ENDPOINT\n\n'})}),"\n",(0,r.jsx)(i.h3,{id:"how-to-broadcast-audio-in-surround-sound",children:"How-to broadcast audio in surround sound"}),"\n",(0,r.jsx)(i.p,{children:"You can broadcast media files that include surround sound audio."}),"\n",(0,r.jsx)(i.h4,{id:"using-51-source-media",children:"Using 5.1 source media"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"gst-launch-1.0 multifilesrc location=big_buck_bunny_720p_surround.avi loop=true ! \\\n  decodebin name=decoder ! queue ! video/x-raw ! \\\n  videoconvert ! queue ! video/x-raw,format='(string)I420' ! \\\n  vp9enc target-bitrate=6000000 keyframe-max-dist=24 deadline=1 end-usage=1 cpu-used=8 lag-in-frames=0 ! \\ video/x-vp9,profile='(string)0' ! \\\n  rtpvp9pay pt=100 ssrc=2 ! queue ! \\\n  whipsink name=ws use-link-headers=true auth-token=$DOLBYIO_BEARER_TOKEN \\\n  whip-endpoint=$DOLBYIO_WHIP_ENDPOINT?codec=vp decoder. ! queue ! audio/x-raw,rate=48000,channels=6 ! \\\n  decodebin ! audioconvert ! opusenc ! rtpopuspay ! queue ! ws.\n"})}),"\n",(0,r.jsx)(i.h2,{id:"simple-whip-client",children:"Simple WHIP client"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.a,{href:"https://github.com/lminiero/simple-whip-client",children:"Simple WHIP client"})," is an open-source implementation of a WHIP client that can be useful for testing. It requires a build of the C libraries including GStreamer."]}),"\n",(0,r.jsx)(i.p,{children:"You can find more details on the GitHub project:"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://github.com/meetecho/simple-whip-client",children:"https://github.com/meetecho/simple-whip-client"})}),"\n",(0,r.jsx)(i.h3,{id:"testing-your-setup",children:"Testing your setup"}),"\n",(0,r.jsx)(i.p,{children:"First test your setup by using a video test source to a WHIP GStreamer pipeline."}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Note:"})," If you have recording enabled, you will need to add ",(0,r.jsx)(i.code,{children:"?codec=h264"}),".",(0,r.jsx)(i.br,{}),"\n","For the example below, if recording is enabled: ",(0,r.jsx)(i.code,{children:"https://director.millicast.com/api/whip/streamName"})," and ",(0,r.jsx)(i.code,{children:"?codec=vp8"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:'./whip-client -u https://director.millicast.com/api/whip/kxhqovek \\\n-t 09598571d36bc70dd59871be7a322d0fd688d05decbd619db88ced1f780987a7 \\\n-V "videotestsrc is-live=true pattern=ball ! videoconvert ! queue !\n    vp8enc deadline=1 ! rtpvp8pay pt=96 ssrc=2 ! queue !\n    application/x-rtp,media=video,encoding-name=VP8,payload=96"\n'})}),"\n",(0,r.jsx)(i.p,{children:"If everything is correct, you should see a command output like this:"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:n(6441).Z+"",width:"1573",height:"752"})}),"\n",(0,r.jsx)(i.p,{children:"And if you connect to the viewer, a bouncing ball will be shown:"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:n(77242).Z+"",width:"1444",height:"1054"})}),"\n",(0,r.jsx)(i.h3,{id:"publishing-an-rtsp-video-only-source",children:"Publishing an RTSP video-only source"}),"\n",(0,r.jsx)(i.p,{children:"Now, to connect to an RTSP source like an axis camera, you need to replace the GStreamer pipeline with one that connects to the Camera and passes the video data to Dolby.io Real-time Streaming without transcoding the content."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:'./whip-client -u https://director.millicast.com/api/whip/kxhqovek \\\n  -t  09598571d36bc70dd59871be7a322d0fd688d05decbd619db88ced1f780987a7 \\\n  -V "rtspsrc location=rtsp://98.100.xxx.xxx:5545/axis-media/media.amp latency=0 name=rtsp !\n      rtph264depay ! rtph264pay config-interval=-1 !\n      application/x-rtp,media=video,encoding-name=H264"\n'})}),"\n",(0,r.jsx)(i.h3,{id:"publishing-an-rtsp-audio-and-video-source",children:"Publishing an RTSP audio and video source"}),"\n",(0,r.jsx)(i.p,{children:"If your camera also supports audio, you just need to add the GStreamer audio pipeline:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:'./whip-client -u https://director.millicast.com/api/whip/kxhqovek \\\n  -t 09598571d36bc70dd59871be7a322d0fd688d05decbd619db88ced1f780987a7 \\\n  -A "rtsp. ! decodebin ! audioconvert ! audioresample !\n      audiobuffersplit output-buffer-duration=2/50 ! queue ! opusenc !\n      rtpopuspay pt=100 ssrc=1 ! queue !\n      application/x-rtp,media=audio,encoding-name=OPUS,payload=100" \\\n  -V "rtspsrc location=rtsp://98.100.xxx.xxx:5545/axis-media/media.amp latency=0 name=rtsp !\n      rtph264depay ! rtph264pay config-interval=-1 !\n      application/x-rtp,media=video,encoding-name=H264"\n'})}),"\n",(0,r.jsx)(i.h3,{id:"publishing-an-rtsp-source-with-authentication",children:"Publishing an RTSP source with authentication"}),"\n",(0,r.jsx)(i.p,{children:"Finally, if your setup requires authentication, pass the username and password to the GStreamer RTSP plugin"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:'./whip-client -u https://director.millicast.com/api/whip/kxhqovek \\\n	-t 09598571d36bc70dd58971be7a322d0fd688d05decbd619db88ced1f780987a7\n	-A "rtsp. ! decodebin ! audioconvert ! audioresample !\n      audiobuffersplit output-buffer-duration=2/50 ! queue ! opusenc !\n      rtpopuspay pt=100 ssrc=1 ! queue !\n      application/x-rtp,media=audio,encoding-name=OPUS,payload=100" \\\n  -V "rtspsrc location="rtsp://admin:admin@XXX.XXX.XX.XXX:855/live latency=0 name=rtsp\n      user-id=admin user-pw=admin ! rtph264depay ! rtph264pay config-interval=-1 !\n      application/x-rtp,media=video,encoding-name=H264"\n'})})]})}function h(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},6441:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/cmd_line-bcbc06385eae72b030bfc82403cab448.png"},74597:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/gstreamer-videotestsrc-c6ab43f7303ee7c38e075d9799385569.png"},77242:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/viewer-0f2b039c6728c436cdefc36f53f23b2f.png"},50065:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return o}});var t=n(67294);let r={},s=t.createContext(r);function o(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);