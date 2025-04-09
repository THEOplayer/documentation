"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["11181"],{38367:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>a,assets:()=>d,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"how-to-guides/web/theolive/metadata","title":"Metadata","description":"The messages added to your stream using the Backend Metadata guide, you can access","source":"@site/theoplayer/how-to-guides/web/theolive/03-metadata.mdx","sourceDirName":"how-to-guides/web/theolive","slug":"/how-to-guides/web/theolive/metadata","permalink":"/documentation/pr-preview/pr-260/theoplayer/how-to-guides/web/theolive/metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/web/theolive/03-metadata.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"web","previous":{"title":"Airplay","permalink":"/documentation/pr-preview/pr-260/theoplayer/how-to-guides/web/theolive/airplay"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-260/theoplayer/how-to-guides/web/uplynk/introduction"}}'),o=n("85893"),r=n("50065");let s={},i="Metadata",d={},c=[];function l(e){let t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"metadata",children:"Metadata"})}),"\n",(0,o.jsxs)(t.p,{children:["The messages added to your stream using the ",(0,o.jsx)(t.a,{href:"/theolive/guides/sei-messages",children:"Backend Metadata guide"}),", you can access\nas a metadata text track."]}),"\n",(0,o.jsxs)(t.p,{children:["First listen to the event to see if a new metadata track has been added, and add an ",(0,o.jsx)(t.code,{children:"onTimeCode"})," listener:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"player.textTracks.addEventListener('addTrack', (event) => {\n  const track = event.track;\n  if (track.id === 'timecode') {\n    track.mode = 'showing'; // Setting the mode to showing will enable the entercue events\n    track.addEventListener('entercue', this.onTimeCode);\n  }\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:"The actual onTimeCode listener could look like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const onTimeCode = (event) => {\n  const timeCode = event.cue.content;\n  // Insert other code here\n};\n"})}),"\n",(0,o.jsx)(t.p,{children:"Where the timecode has the following type:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"export interface TimeCode {\n  readonly hours: number;\n  readonly minutes: number;\n  readonly seconds: number;\n  readonly frames: number;\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"So a full example could be as follows:"}),"\n",(0,o.jsxs)(t.p,{children:["You distribute sports matches and want to display an overlay on the player when the score changes. Every time a score change happens, you add a picture timing SEI message to the stream and store in your backend that this time corresponds with this score. (You could also just add the timing message to all frames if this is easier, but this requires more processing both server and player side). This information can then be retrieved by the application running on the device of a viewer. You then add the event listener and listen for the ",(0,o.jsx)(t.code,{children:"entercue"})," events. In the listener you check whether the ",(0,o.jsx)(t.code,{children:"TimeCode"})," corresponds with a score change event you recorded earlier and if so, display an overlay over the player."]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return s}});var a=n(67294);let o={},r=a.createContext(o);function s(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);