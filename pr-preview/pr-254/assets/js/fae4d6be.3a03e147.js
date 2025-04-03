"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["97223"],{88605:function(e,a,t){t.r(a),t.d(a,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>s,contentTitle:()=>c});var i=JSON.parse('{"id":"platform-requirements/update-to-project-and-trackids","title":"Update to Project and TrackIds","description":"This is part of our Multi-view feature and only impacts users who where using the multiview feature and their own player SDK implementation. If you are using the hosted video player, there is no update to apply.","source":"@site/millicast/platform-requirements/update-to-project-and-trackids.md","sourceDirName":"platform-requirements","slug":"/update-to-project-and-trackids","permalink":"/documentation/pr-preview/pr-254/millicast/update-to-project-and-trackids","draft":false,"unlisted":true,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/platform-requirements/update-to-project-and-trackids.md","tags":[],"version":"current","frontMatter":{"title":"Update to Project and TrackIds","slug":"/update-to-project-and-trackids","unlisted":true},"sidebar":"millicast"}'),n=t("85893"),r=t("50065");let d={title:"Update to Project and TrackIds",slug:"/update-to-project-and-trackids",unlisted:!0},c=void 0,o={},s=[{value:"Prior to the January release",id:"prior-to-the-january-release",level:2},{value:"After the release",id:"after-the-release",level:2},{value:"Calling the <code>project()</code> command",id:"calling-the-project-command",level:2},{value:"What happens if I don&#39;t make a change?",id:"what-happens-if-i-dont-make-a-change",level:2}];function l(e){let a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["This is part of our ",(0,n.jsx)(a.a,{href:"/documentation/pr-preview/pr-254/millicast/multiview",children:"Multi-view"})," feature and only impacts users who where using the multiview feature and their own player SDK implementation. If you are using the hosted video player, there is no update to apply."]}),"\n",(0,n.jsxs)(a.p,{children:["In the ",(0,n.jsx)(a.a,{href:"/documentation/pr-preview/pr-254/millicast/viewer-events",children:"Broadcast Events"}),", the ",(0,n.jsx)(a.code,{children:"active"})," event now uses truely dynamic ",(0,n.jsx)(a.code,{children:"trackId"}),". Below you can find the details of what these broadcast events look like. Using ",(0,n.jsx)(a.code,{children:"trackId"})," dynamically has been ",(0,n.jsx)(a.a,{href:"https://github.com/millicast/millicast-sdk/blob/460444aa9e7a37ad2c9c77046a97cdaf6448a76f/packages/millicast-sdk/src/View.js#L163",children:"documented in the SDK"})," for years but we had some hard-coded examples in our multi-view sample code."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"trackId"})," is an optional (future-proofing) parameter when calling the ",(0,n.jsx)(a.code,{children:"project()"})," command and is not required."]}),"\n",(0,n.jsx)(a.h2,{id:"prior-to-the-january-release",children:"Prior to the January release"}),"\n",(0,n.jsxs)(a.p,{children:["Before the 2025-02-12, ",(0,n.jsx)(a.code,{children:"trackId"}),", while ",(0,n.jsx)(a.a,{href:"https://github.com/millicast/millicast-sdk/blob/460444aa9e7a37ad2c9c77046a97cdaf6448a76f/packages/millicast-sdk/src/View.js#L163",children:"intended to be a dynamic value"})," was always returned as ",(0,n.jsx)(a.code,{children:'"video"'})," or ",(0,n.jsx)(a.code,{children:'"audio"'})," depending on the track type."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",metastring:'title="JSON"',children:'{\n  "type": "event",\n  "name": "active",\n  "data": {\n    "streamId": "k9Mwad/multiview",\n    "sourceId": null,\n    "tracks": [\n      {\n        "trackId": "video", // while trackId was intended to be dynamic, this was always set to "video"\n        "media": "video"\n      },\n      {\n        "trackId": "audio", // while trackId was intended to be dynamic, this was always set to "audio"\n        "media": "audio"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"after-the-release",children:"After the release"}),"\n",(0,n.jsxs)(a.p,{children:["After the 2025-02-12 media server release, this value will be dynamic when returned int he ",(0,n.jsxs)(a.a,{href:"/documentation/pr-preview/pr-254/millicast/viewer-events",children:[(0,n.jsx)(a.code,{children:"active"})," Broadcast Event"]})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'{\n  "type": "event",\n  "name": "active", // this is the "active" broadcast event\n  "data": {\n    "streamId": "k9Mwad/multiview",\n    "sourceId": null,\n    "tracks": [\n      {\n        "trackId": "0", // this will be a dynamic value\n        "media": "video"\n      },\n      {\n        "trackId": "1", // this will be a dynamic value\n        "media": "audio"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,n.jsxs)(a.h2,{id:"calling-the-project-command",children:["Calling the ",(0,n.jsx)(a.code,{children:"project()"})," command"]}),"\n",(0,n.jsxs)(a.p,{children:["Prior to the release, our code examples showed a hard-coded ",(0,n.jsx)(a.code,{children:"trackId"})," like this:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",metastring:'title="JavaScript"',children:"await millicastView.project(sourceID, [\n  {\n    trackId: 'video', // this value is hard-coded in the code example\n    mediaId: videoTransceiver.mid,\n    media: 'video',\n  },\n  {\n    trackId: 'audio', // this value is hard-coded in the code example\n    mediaId: audioTransceiver.mid,\n    media: 'audio',\n  },\n]);\n"})}),"\n",(0,n.jsxs)(a.p,{children:["After the release, you can omit ",(0,n.jsx)(a.code,{children:"trackId"})," altogether or use the dynamic value from the ",(0,n.jsx)(a.code,{children:"active"})," event:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:'await millicastView.project(sourceID, [\n  {\n    // when calling project() trackId is optional and we are removing it from our examples.  By specifying a "media" value (eg, "video") the correct media track will be used\n    mediaId: videoTransceiver.mid,\n    media: \'video\',\n  },\n  {\n    // when calling project() trackId is optional and we are removing it from our examples.  By specifying a "media" value (eg, "audio") the correct media track will be used\n    // in the future we will support multi-audio in which case you will need to project the correct trackId to select the correct audio track as recieved from the broadcast event\n    mediaId: audioTransceiver.mid,\n    media: \'audio\',\n  },\n]);\n'})}),"\n",(0,n.jsx)(a.h2,{id:"what-happens-if-i-dont-make-a-change",children:"What happens if I don't make a change?"}),"\n",(0,n.jsx)(a.p,{children:"If you are using the hosted player, this is handled for you."}),"\n",(0,n.jsxs)(a.p,{children:["If you are calling the ",(0,n.jsx)(a.code,{children:"project()"})," command int the SDK:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["If you provide an invalid ",(0,n.jsx)(a.code,{children:"trackId"})," and also a ",(0,n.jsx)(a.code,{children:"media"})," type, the media type will be used."]}),"\n",(0,n.jsxs)(a.li,{children:["If you choose an invalid ",(0,n.jsx)(a.code,{children:"trackId"})," and do not provide a ",(0,n.jsx)(a.code,{children:"media"})," type, the media will fail to render. An error will be visible in the websocket connection."]}),"\n"]})]})}function h(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},50065:function(e,a,t){t.d(a,{Z:function(){return c},a:function(){return d}});var i=t(67294);let n={},r=i.createContext(n);function d(e){let a=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);