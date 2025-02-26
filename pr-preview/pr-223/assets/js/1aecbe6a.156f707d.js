"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["30926"],{87351:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"getting-started/getting-started-web","title":"Getting started with THEOads on Web","description":"This guide will get you started with THEOads in your THEOplayer Web SDK: configure the license, update dependencies and set the source description.","source":"@site/theoads/getting-started/00-getting-started-web.mdx","sourceDirName":"getting-started","slug":"/getting-started/getting-started-web","permalink":"/documentation/pr-preview/pr-223/theoads/getting-started/getting-started-web","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoads/getting-started/00-getting-started-web.mdx","tags":[],"version":"current","sidebarPosition":0.2,"frontMatter":{"sidebar_position":0.2,"sidebar_label":"Web","sidebar_custom_props":{"icon":"web"}},"sidebar":"theoads","previous":{"title":"Signaling service","permalink":"/documentation/pr-preview/pr-223/theoads/getting-started/getting-started-signaling-service"},"next":{"title":"Android","permalink":"/documentation/pr-preview/pr-223/theoads/getting-started/getting-started-android"}}'),r=t("85893"),s=t("50065");let a={sidebar_position:.2,sidebar_label:"Web",sidebar_custom_props:{icon:"web"}},o="Getting started with THEOads on Web",d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integration",id:"integration",level:2},{value:"Google DAI library",id:"google-dai-library",level:3},{value:"Player configuration",id:"player-configuration",level:3},{value:"Integrating with Open Video UI",id:"integrating-with-open-video-ui",level:2},{value:"More information",id:"more-information",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started-with-theoads-on-web",children:"Getting started with THEOads on Web"})}),"\n",(0,r.jsx)(n.p,{children:"This guide will get you started with THEOads in your THEOplayer Web SDK: configure the license, update dependencies and set the source description."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["You need to have a THEOplayer license which is compatible with THEOads.\nThis can be done through ",(0,r.jsx)(n.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["You need a working ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-223/theoads/getting-started/getting-started-signaling-service",children:"THEOads signaling service"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Your THEOplayer SDK needs to have the ",(0,r.jsx)(n.code,{children:"theoads"})," feature enabled."]}),"\n",(0,r.jsxs)(n.p,{children:["As of THEOplayer version 8.2.0, this feature is enabled in the main ",(0,r.jsx)(n.code,{children:"theoplayer"})," package.\nYou can install this package with the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install theoplayer\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,r.jsxs)(n.p,{children:["This guide assumes you know how to set up THEOplayer. For more information regarding this check out the ",(0,r.jsx)(n.a,{href:"/theoplayer/getting-started/sdks/web/getting-started/",children:"THEOplayer getting started"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"google-dai-library",children:"Google DAI library"}),"\n",(0,r.jsx)(n.p,{children:"Since THEOads integrates with Google DAI Pod Serving, it is required to load the Google DAI script on your page:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<script src="https://imasdk.googleapis.com/js/sdkloader/ima3_dai.js"><\/script>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"player-configuration",children:"Player configuration"}),"\n",(0,r.jsx)(n.p,{children:"To make use of the THEOads integration, first enable the feature in your player configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const player = new THEOplayer.Player(element, {\n  libraryLocation: 'YOUR-LIBRARY-LOCATION',\n  license: 'YOUR-LICENSE-WITH-THEOADS',\n  ads: {\n    theoads: true,\n  },\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then, specify a source with a THEOads-enabled ad description:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"player.source = {\n  sources: {\n    src: 'PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI',\n    type: 'application/x-mpegurl',\n    hlsDateRange: true,\n  },\n  ads: [\n    {\n      integration: 'theoads',\n      networkCode: 'NETWORK-CODE',\n      customAssetKey: 'CUSTOM-ASSET-KEY',\n      backdropDoubleBox: 'PATH-TO-DOUBLE-BOX-BACKDROP-IMAGE', // Optional\n      backdropLShape: 'PATH-TO-L-SHAPE-BACKDROP-IMAGE', // Optional\n    },\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Notice that the ",(0,r.jsx)(n.code,{children:"src"})," is different as usual. For THEOads, a signaling server needs to be set up which acts as a proxy to parse the given manifest and insert the ad interstitials.\nMore information can be found ",(0,r.jsx)(n.a,{href:"/documentation/pr-preview/pr-223/theoads/getting-started/getting-started-signaling-service",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"hlsDateRange"})," flag needs to be set to ",(0,r.jsx)(n.code,{children:"true"})," as the ad markers are done using ",(0,r.jsx)(n.code,{children:"EXT-X-DATERANGE"})," tags."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"ads"})," object needs to have its integration set to ",(0,r.jsx)(n.code,{children:"theoads"}),". Furthermore, the ",(0,r.jsx)(n.code,{children:"networkCode"})," and ",(0,r.jsx)(n.code,{children:"customAssetKey"})," needs to be set according to your configured Google account."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"integrating-with-open-video-ui",children:"Integrating with Open Video UI"}),"\n",(0,r.jsxs)(n.p,{children:["THEOads works seamlessly together with ",(0,r.jsx)(n.a,{href:"/open-video-ui/web/",children:"Open Video UI for Web"}),".\nYou can pass your THEOads-enabled source directly to the UI's ",(0,r.jsx)(n.code,{children:"source"})," property:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<theoplayer-default-ui></theoplayer-default-ui>\n<script>\n  const ui = document.querySelector('theoplayer-default-ui');\n  ui.configuration = {\n    libraryLocation: 'YOUR-LIBRARY-LOCATION',\n    license: 'YOUR-LICENSE-WITH-THEOADS',\n    ads: {\n      theoads: true,\n    },\n  };\n  ui.source = {\n    sources: {\n      src: 'PATH-TO-SIGNALING-SERVER/hls/MANIFEST-URI',\n      type: 'application/x-mpegurl',\n      hlsDateRange: true,\n    },\n    ads: [\n      {\n        integration: 'theoads',\n        networkCode: 'NETWORK-CODE',\n        customAssetKey: 'CUSTOM-ASSET-KEY',\n      },\n    ],\n  };\n<\/script>\n"})}),"\n",(0,r.jsx)(n.p,{children:"It should look something like this:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Screenshot of Open Video UI playing a THEOads stream",src:t(44515).Z+"",width:"1432",height:"804"})}),"\n",(0,r.jsx)(n.h2,{id:"more-information",children:"More information"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/TheoAdDescription.html",children:"API references"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.theoplayer.com/product/theoads/",children:"What is THEOads?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.theoplayer.com/solutions/server-guided-ad-insertion-sgai/",children:"The Advantages of Server-Guided Ad Insertion"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.theoplayer.com/product/theoads/pricing/",children:"Flexible, Usage-Based Pricing"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.theoplayer.com/blog/server-guided-ad-insertion-sgai-revolutionizing-streaming-monetization/",children:"Is Server-Guided Ad-Insertion (SGAI) revolutionizing streaming monetization? (blog)"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},44515:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/theoads-web-ui-3acb223351d35b877fa419c80ef1782f.png"},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var i=t(67294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);