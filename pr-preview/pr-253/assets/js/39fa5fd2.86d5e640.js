"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["27374"],{70827:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"faq/can-clipping-be-used-in-a-playlist","title":"Can clipping be used on a playlist","description":"Yes. This is in principle not different from using it on a single video: a startTime and an endTime must be given for each video and applied when the video is loaded/played.","source":"@site/theoplayer/faq/36-can-clipping-be-used-in-a-playlist.md","sourceDirName":"faq","slug":"/faq/can-clipping-be-used-in-a-playlist","permalink":"/documentation/pr-preview/pr-253/theoplayer/faq/can-clipping-be-used-in-a-playlist","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/faq/36-can-clipping-be-used-in-a-playlist.md","tags":[],"version":"current","sidebarPosition":36,"frontMatter":{},"sidebar":"faq","previous":{"title":"Does THEOplayer support EXT-X-DATERANGE","permalink":"/documentation/pr-preview/pr-253/theoplayer/faq/does-theoplayer-support-ext-x-daterange"},"next":{"title":"Can timeline thumbnails be made available before playback start","permalink":"/documentation/pr-preview/pr-253/theoplayer/faq/can-timeline-thumbnails-be-made-available-before-playback-start"}}'),a=t("85893"),r=t("50065");let s={},o="Can clipping be used on a playlist",l={},c=[{value:"The same start and end time can be used for all contents",id:"the-same-start-and-end-time-can-be-used-for-all-contents",level:2},{value:"Each content has a different start and end time.",id:"each-content-has-a-different-start-and-end-time",level:2},{value:"Resources",id:"resources",level:2}];function p(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"can-clipping-be-used-on-a-playlist",children:"Can clipping be used on a playlist"})}),"\n",(0,a.jsx)(n.p,{children:"Yes. This is in principle not different from using it on a single video: a startTime and an endTime must be given for each video and applied when the video is loaded/played."}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s expand slightly the idea. You can have 2 use cases:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The same start and end time can be used for all contents."}),"\n",(0,a.jsx)(n.li,{children:"Each content has a different start and end time."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"the-same-start-and-end-time-can-be-used-for-all-contents",children:"The same start and end time can be used for all contents"}),"\n",(0,a.jsxs)(n.p,{children:["In this case, you can apply the Clip API without any further precaution or modification. You can find an example at the page Video clipping in THEOplayer (see below). Please remember to make sure that clipping happens after the source is set (e.g.: use a ",(0,a.jsx)(n.code,{children:"durationchange"})," event)."]}),"\n",(0,a.jsx)(n.h2,{id:"each-content-has-a-different-start-and-end-time",children:"Each content has a different start and end time."}),"\n",(0,a.jsx)(n.p,{children:"In this case, some adjustment is needed to be able to provide and read the right custom start and end time for each content. One possible way to do it is to simply pass such data together with the source data and read it directly from there when clipping the video, like in the example below."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// an array is provided, containing multiple player.source. Each source contains startTime and endTime.\nvar playlist = [\n  {\n    source: {\n      sources: {\n        src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8',\n        startTime: 100,\n        endTime: 150,\n      },\n      title: 'Big Buck Bunny',\n      description: 'Big Buck Bunny',\n      poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg',\n    },\n  },\n  {\n    source: {\n      sources: {\n        src: 'https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8',\n        startTime: 120,\n        endTime: 180,\n      },\n      title: 'Star Wars Reel',\n      description: 'Star Wars Reel',\n      poster: 'https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg',\n    },\n  },\n  {\n    source: {\n      sources: {\n        src: 'https://cdn.theoplayer.com/video/tears_of_steel/index.m3u8',\n        startTime: 50,\n        endTime: 150,\n      },\n      title: 'Tears of Steel',\n      description: 'Tears of Steel',\n      poster: 'https://cdn.theoplayer.com/video/tears_of_steel/poster.jpg',\n    },\n  },\n];\n\n// the desired source is set in the player -\n// this is not reported here as it depends on your implementation,\n// but an example can be seen in the resources linked below.\n// For the purpose of this example\n// player.source = playlist[0];\n\n// the following lines make sure that\n// when the first playing event is fired for each (new) content\n// clipping times are read from directly within the player.source\n\nfunction firstplaying() {\n  player.clip.startTime = player.source.sources.startTime;\n  player.clip.endTime = player.source.sources.endTime;\n  THEOplayer.players[0].removeEventListener('durationchange', firstplaying);\n}\n\nTHEOplayer.players[0].addEventListener('sourcechange', function () {\n  THEOplayer.players[0].removeEventListener('durationchange', firstplaying);\n  THEOplayer.players[0].addEventListener('durationchange', firstplaying);\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"Notes:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"In this example, we are only describing how to apply the clipping, not how to play a playlist. For this, please consult the linked resources."}),"\n",(0,a.jsx)(n.li,{children:"The example is provided only in JavaScript because clipping is currently available only for the JavaScript SDK. It may be used also in other SDKs through JavaScript injection."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsx)(n.p,{children:"The following resources provide more information:"}),"\n",(0,a.jsxs)(n.p,{children:["API reference - ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v9/api-reference/web/interfaces/Clip.html",children:"Clip API"})]}),"\n",(0,a.jsxs)(n.p,{children:["Clipping - ",(0,a.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/miscellaneous/clipping",children:"How-to guide"})]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var i=t(67294);let a={},r=i.createContext(a);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);