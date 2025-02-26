"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["38637"],{48506:function(e,t,a){a.r(t),a.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>s});var n=JSON.parse('{"id":"how-to-guides/web/millicast/metadata","title":"Frame metadata with Millicast on Web","description":"In addition to streaming audio and video, Millicast also supports inserting additional metadata about what is happening","source":"@site/theoplayer/how-to-guides/web/millicast/metadata.mdx","sourceDirName":"how-to-guides/web/millicast","slug":"/how-to-guides/web/millicast/metadata","permalink":"/documentation/pr-preview/pr-221/theoplayer/how-to-guides/web/millicast/metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/web/millicast/metadata.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"web","previous":{"title":"Getting started with Millicast on Web","permalink":"/documentation/pr-preview/pr-221/theoplayer/how-to-guides/web/millicast/getting-started"},"next":{"title":"Getting started with THEOlive on Web","permalink":"/documentation/pr-preview/pr-221/theoplayer/how-to-guides/web/theolive/getting-started"}}'),i=a("85893"),r=a("50065");let o={},s="Frame metadata with Millicast on Web",c={},l=[{value:"Enable metadata on your Millicast source",id:"enable-metadata-on-your-millicast-source",level:2},{value:"Listen for metadata text track events",id:"listen-for-metadata-text-track-events",level:2},{value:"More information",id:"more-information",level:2}];function d(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"frame-metadata-with-millicast-on-web",children:"Frame metadata with Millicast on Web"})}),"\n",(0,i.jsxs)(t.p,{children:["In addition to streaming audio and video, Millicast also supports inserting additional metadata about what is happening\nin the stream. This is known as ",(0,i.jsx)(t.em,{children:"Frame Metadata"}),", which allows for embedding and extracting custom application data\nwith frame-level accuracy. For example, this can be used to transport timecodes, bounding boxes, and overlays."]}),"\n",(0,i.jsx)(t.h2,{id:"enable-metadata-on-your-millicast-source",children:"Enable metadata on your Millicast source"}),"\n",(0,i.jsxs)(t.p,{children:["First, follow ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-221/theoplayer/how-to-guides/web/millicast/getting-started",children:"our Getting Started with Millicast on Web guide"}),"\nto set up Millicast with THEOplayer in your web app or website."]}),"\n",(0,i.jsxs)(t.p,{children:["Then, enable the ",(0,i.jsx)(t.code,{children:"metadata"})," option in your ",(0,i.jsxs)(t.a,{href:"/documentation/pr-preview/pr-221/theoplayer/how-to-guides/web/millicast/getting-started#add-configuration",children:["Millicast source's ",(0,i.jsx)(t.code,{children:"connectOptions"})]}),"\nin order to receive frame metadata:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"player.source = {\n  sources: {\n    type: 'millicast',\n    /* ... */\n    connectOptions: {\n      // highlight-next-line\n      metadata: true,\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(t.h2,{id:"listen-for-metadata-text-track-events",children:"Listen for metadata text track events"}),"\n",(0,i.jsxs)(t.p,{children:["THEOplayer exposes Millicast metadata as cues on a metadata text track. First, listen for the ",(0,i.jsx)(t.code,{children:"addtrack"})," event\nto receive the Millicast metadata track. Then, listen for the ",(0,i.jsx)(t.code,{children:"entercue"})," event to be notified whenever new metadata\nis added to the track."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"player.textTracks.addEventListener('addtrack', function (addTrackEvent) {\n  const track = addTrackEvent.track;\n  if (track.kind === 'metadata' && track.type === 'millicast') {\n    track.addEventListener('entercue', function (event) {\n      const cue = event.cue;\n      console.log(`Received frame metadata at timecode ${cue.timecode} with data:`, cue.unregistered);\n    });\n  }\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-221/theoplayer/how-to-guides/texttrack/how-to-detect-active-text-track-cues",children:"our guide on how to detect active text track cues"}),"\nfor more information."]}),"\n",(0,i.jsx)(t.h2,{id:"more-information",children:"More information"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/MillicastMetadataCue.html",children:"API references"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.dolby.io/streaming-apis/docs/frame-metadata",children:"Millicast documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return s},a:function(){return o}});var n=a(67294);let i={},r=n.createContext(i);function o(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);