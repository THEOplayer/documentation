"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["27837"],{92376:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"how-to-guides/miscellaneous/vr","title":"VR","description":"This article describes how to implement common use cases related to VR / 360 - for example how to use the API.","source":"@site/theoplayer/how-to-guides/07-miscellaneous/04-vr.md","sourceDirName":"how-to-guides/07-miscellaneous","slug":"/how-to-guides/miscellaneous/vr","permalink":"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/miscellaneous/vr","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/07-miscellaneous/04-vr.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"roku","previous":{"title":"Up Next","permalink":"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/miscellaneous/up-next"},"next":{"title":"Web Audio","permalink":"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/miscellaneous/webaudio"}}'),r=i("85893"),o=i("50065");let s={},l="VR",a={},d=[{value:"360 / VR",id:"360--vr",level:2},{value:"SDKs",id:"sdks",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Initialization",id:"initialization",level:3},{value:"Web SDK",id:"web-sdk",level:4},{value:"Manipulating the viewing direction within a 360 video",id:"manipulating-the-viewing-direction-within-a-360-video",level:3},{value:"Web SDK",id:"web-sdk-1",level:4},{value:"Setting stereoMode",id:"setting-stereomode",level:3},{value:"Web SDK",id:"web-sdk-2",level:4},{value:"Listening to VR related events",id:"listening-to-vr-related-events",level:3},{value:"Web SDK",id:"web-sdk-3",level:4},{value:"Request Permissions",id:"request-permissions",level:2},{value:"Sample Application",id:"sample-application",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"vr",children:"VR"})}),"\n",(0,r.jsx)(n.p,{children:"This article describes how to implement common use cases related to VR / 360 - for example how to use the API."}),"\n",(0,r.jsx)(n.p,{children:"The VR feature enables video to be rendered in a VR / 360 - experience. The input should be a video source in an equirectangular format, and the output is a container where viewers can navigate around the scene."}),"\n",(0,r.jsx)(n.p,{children:"The VR feature exposes the VR API. This API allows developers to change the pitch, direction and more."}),"\n",(0,r.jsx)(n.h2,{id:"360--vr",children:"360 / VR"}),"\n",(0,r.jsx)(n.p,{children:"360-degree video is a type of video where every angle from a single viewpoint is recorded and can played back. It offers a great sense of immersion for panoramic imagery or simulation purposes."}),"\n",(0,r.jsx)(n.p,{children:"THEOplayer allows you to render these videos in your browser or on your mobile device, with a full set of API controls to control the viewing direction."}),"\n",(0,r.jsx)(n.p,{children:'Next to the spherical or 360\xb0 video playback, THEOplayer also offers integration with VR devices through stereoscopic view, dubbed "stereo mode".'}),"\n",(0,r.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["No",(0,r.jsx)("sup",{children:"*"})]}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["No",(0,r.jsx)("sup",{children:"*"})]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("sup",{children:"*"})," VR is currently not supported in the native Android and iOS SDKs. Please reach out to us for VR support on the native SDKs."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.h3,{id:"initialization",children:"Initialization"}),"\n",(0,r.jsx)(n.h4,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsxs)(n.p,{children:["The Web SDK uses the ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API",children:"WebXR API"})," for virtual reality playback.\nFor platforms that do not natively support WebXR, you can add the ",(0,r.jsx)(n.a,{href:"https://github.com/immersive-web/webxr-polyfill",children:"WebXR polyfill"})," to your web page."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Bug in official polyfill",type:"warning",children:[(0,r.jsxs)(n.p,{children:["The official polyfill has a bug in its rendering, see ",(0,r.jsx)(n.a,{href:"https://github.com/immersive-web/webxr-polyfill/issues/167",children:"issue 167"}),".\nOur team has already ",(0,r.jsx)(n.a,{href:"https://github.com/immersive-web/webxr-polyfill/pull/168",children:"proposed and submitted a fix"}),",\nbut this fix has not yet been published in a new release of the polyfill."]}),(0,r.jsx)(n.p,{children:"In the meantime, you can use a patched build from our CDN.\nWe highly recommend you to download and host this build on your own web server,\nsince it will no longer be available once the official polyfill has been fixed."})]}),"\n",(0,r.jsx)(n.p,{children:"Add the polyfill to your page:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<script src="//cdn.theoplayer.com/webxr/webxr-polyfill-patched.js"><\/script>\n'})}),"\n",(0,r.jsx)(n.p,{children:"And enable it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const POLYFILL_CONFIG = {\n  allowCardboardOnDesktop: true,\n};\nnew WebXRPolyfill(POLYFILL_CONFIG);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To indicate that your stream contains 360\xb0 content, pass a valid ",(0,r.jsx)(n.code,{children:"VRConfiguration"})," as ",(0,r.jsx)(n.code,{children:"vr"})," property when setting ",(0,r.jsx)(n.code,{children:"player.source"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For the full list of properties and events related to 360\xb0 video and VR, go to our ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v9/api-reference/web/interfaces/VR.html",children:"API"})," page."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"var element = document.querySelector('.theoplayer');\nvar player = new THEOplayer.Player(element, {\n  fluid: true,\n});\n\nplayer.vr.useDeviceMotionControls = true;\n\nplayer.source = {\n  sources: {\n    type: 'application/x-mpegurl',\n    src: 'http://example.com/example-stream.m3u8',\n  },\n  vr: {\n    360: true,\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"manipulating-the-viewing-direction-within-a-360-video",children:"Manipulating the viewing direction within a 360 video"}),"\n",(0,r.jsx)(n.p,{children:"Below you can find an example querying the VR viewing direction and one setting the viewing direction."}),"\n",(0,r.jsx)(n.h4,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"/* reading the current position */\nvar currentViewingDirection = player.vr.direction; // e.g. {pitch: 0, yaw: 0, roll: 0}\n\n/* setting the position */\nplayer.vr.direction = { pitch: 0, yaw: 180, roll: 0 };\n\n/* example of how you can update only one direction property */\nvar currentViewingDirection = player.vr.direction; /* e.g. {pitch: 0, yaw: 30, roll: 0} */\ncurrentViewingDirection.pitch = 180; /* {pitch: 180, yaw:30, roll: 0} */\nplayer.vr.direction = currentViewingDirection;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"setting-stereomode",children:"Setting stereoMode"}),"\n",(0,r.jsx)(n.h4,{id:"web-sdk-2",children:"Web SDK"}),"\n",(0,r.jsxs)(n.p,{children:["The snippet below enables stereo mode by setting the ",(0,r.jsx)(n.code,{children:"stereoMode"})," variable to ",(0,r.jsx)(n.code,{children:"horizontal"}),"/",(0,r.jsx)(n.code,{children:"vertical"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"player.source = {\n  sources: [\n    {\n      src: 'http://example.com/example-stream.m3u8',\n      type: 'application/x-mpegurl',\n    },\n  ],\n  vr: {\n    360: true,\n    stereoMode: 'horizontal', // or 'vertical'\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"listening-to-vr-related-events",children:"Listening to VR related events"}),"\n",(0,r.jsxs)(n.p,{children:["The following code sample listens to ",(0,r.jsx)(n.code,{children:"stereochange"})," and ",(0,r.jsx)(n.code,{children:"directionchange"})," events thrown by THEOplayer and stores the new values in a variable."]}),"\n",(0,r.jsx)(n.h4,{id:"web-sdk-3",children:"Web SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"player.vr.addEventlistener('stereochange', () => {\n  const isStereoEnabled = player.vr.stereo; // (boolean)\n  // do something with it\n});\n\nplayer.vr.addEventlistener('directionchange', () => {\n  const { yaw, roll, pitch } = player.vr.direction; // (object)\n  // do something with it\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"request-permissions",children:"Request Permissions"}),"\n",(0,r.jsx)(n.p,{children:"Since iOS 13, access to device orientation and motion data is disabled by default. You will need to include code to request the necessary permission, triggered by a user action."}),"\n",(0,r.jsx)(n.p,{children:"You can do this by using the following function to handle a user interaction triggered event"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function requestPermissions() {\n  DeviceMotionEvent.requestPermission()\n    .then((response) => {\n      if (response == 'granted') {\n        window.addEventListener('devicemotion', (e) => {\n          console.log('Device motion permissions granted');\n        });\n      }\n    })\n    .catch(console.error);\n  DeviceOrientationEvent.requestPermission()\n    .then((response) => {\n      if (response == 'granted') {\n        window.addEventListener('deviceorientation', (e) => {\n          console.log('Device orient permissions granted');\n        });\n      }\n    })\n    .catch(console.error);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"sample-application",children:"Sample Application"}),"\n",(0,r.jsxs)(n.p,{children:["The following demo illustrates the VR API in production for Web SDK: ",(0,r.jsx)(n.a,{href:"https://www.theoplayer.com/theoplayer-demo-virtual-reality-360-degree-view",children:"https://www.theoplayer.com/theoplayer-demo-virtual-reality-360-degree-view"})]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["When trying to use the ",(0,r.jsx)(n.code,{children:"StereoMode"})," functionality, the device must have the automatic rotation feature enabled."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return s}});var t=i(67294);let r={},o=t.createContext(r);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);