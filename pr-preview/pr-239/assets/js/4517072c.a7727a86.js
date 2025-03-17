"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["16449"],{45209:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>d,toc:()=>a,contentTitle:()=>r});var i=JSON.parse('{"id":"getting-started/sdks/webos/getting-started","title":"Getting Started on webOS","description":"This guide will help you integrate your THEOplayer SDK on webOS.","source":"@site/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/07-webos/00-getting-started.md","sourceDirName":"getting-started/01-sdks/07-webos","slug":"/getting-started/sdks/webos/getting-started","permalink":"/documentation/pr-preview/pr-239/theoplayer/v7/getting-started/sdks/webos/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/01-sdks/07-webos/00-getting-started.md","tags":[],"version":"v7","sidebarPosition":0,"frontMatter":{},"sidebar":"web","previous":{"title":"How to use MultiView","permalink":"/documentation/pr-preview/pr-239/theoplayer/v7/getting-started/sdks/web/how-to-use-multiview"},"next":{"title":"Getting Started on webOS","permalink":"/documentation/pr-preview/pr-239/theoplayer/v7/getting-started/sdks/webos/getting-started"}}'),s=n("85893"),o=n("50065");let l={},r="Getting Started on webOS",d={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting up the physical device",id:"setting-up-the-physical-device",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Make a connection",id:"make-a-connection",level:3},{value:"Simulator",id:"simulator",level:2},{value:"Packaging",id:"packaging",level:3},{value:"Installation",id:"installation",level:3},{value:"Launch",id:"launch",level:3},{value:"Debug",id:"debug",level:3}];function c(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"getting-started-on-webos",children:"Getting Started on webOS"})}),"\n",(0,s.jsx)(t.p,{children:"This guide will help you integrate your THEOplayer SDK on webOS."}),"\n",(0,s.jsxs)(t.p,{children:["Since webOS IDE is ",(0,s.jsx)(t.a,{href:"https://webostv.developer.lge.com/develop/tools/ide-introduction",children:"no longer available"})," as of February 2022, you will need to set up ",(0,s.jsx)(t.a,{href:"https://webostv.developer.lge.com/develop/tools/cli-installation",children:"webOS CLI"}),", optionally in combination with the ",(0,s.jsx)(t.a,{href:"https://webostv.developer.lge.com/develop/tools/vsce-installation",children:"webOS TV VS Code Extension"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The focus of this article is using our ",(0,s.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-webos",children:"sample apps for webOS"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You may also find the ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-239/theoplayer/v7/getting-started/sdks/web/getting-started",children:"Getting Started on Web"})," guide useful."]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Make sure that the ",(0,s.jsx)(t.a,{href:"https://webostv.developer.lge.com/develop/tools/cli-installation",children:"webOS CLI"})," is correctly installed on your system."]}),"\n",(0,s.jsxs)(t.li,{children:["Validate that the CLI is correctly set up on your environment by invoking ",(0,s.jsx)(t.code,{children:"ares"})," at the command line of a new terminal. If the command is recognized, you are correctly set up. If not, please go over the steps on the CLI installation guide again."]}),"\n",(0,s.jsxs)(t.li,{children:["Optionally you can also install the official VS Code extension listed ",(0,s.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=webostvsdk.webostv",children:"here"})," to quickly connect/deploy to your devices."]}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"download-the-starter-files",children:"Download the starter files"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Download the starter code from ",(0,s.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-webos",children:"our sample repository"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"The folder contains all the necessary files to quickly deploy a THEOplayer solution to a webOS device."}),"\n",(0,s.jsxs)(t.li,{children:["The packager will use the ",(0,s.jsx)(t.code,{children:"app"})," folder to build an IPK package","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["the ",(0,s.jsx)(t.code,{children:"app"})," folder contains a crude solution with entry point ",(0,s.jsx)(t.code,{children:"index.html"}),"; the only thing left is to put your THEOplayer library files in the ",(0,s.jsx)(t.code,{children:"libs"})," folder."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["The folder ",(0,s.jsx)(t.code,{children:"example-with-UI"})," contains a more elaborate example,","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["To use it, optionally modify the code and run the following commands:","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"cd example-with-ui\nnpm i\nnpm run build\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Next, copy the ",(0,s.jsx)(t.code,{children:"js"})," folder, the ",(0,s.jsx)(t.code,{children:"css"})," folder and the ",(0,s.jsx)(t.code,{children:"index.html"})," file to the app folder (overwriting the existing files)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"setting-up-the-physical-device",children:"Setting up the physical device"}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Make sure you have created an ",(0,s.jsx)(t.a,{href:"https://webostv.developer.lge.com/develop/getting-started/preparing-lg-account",children:"LG Developer Account"}),". You will need this to login to the Developer Tools app on the physical device."]}),"\n",(0,s.jsx)(t.li,{children:"Download the Developer Tools app to the TV from the LG Content Store, login with your LG account and follow the instructions to set the device in developer mode (a restart is required)."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"make-a-connection",children:"Make a connection"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"In case you downloaded the webOS TV VS Code extension, you can use it to link your development environment to the physical device (from the webOS TV Devices menu on the left-hand toolbar)."}),"\n",(0,s.jsxs)(t.li,{children:["Manually set up (use the guideline provided by LG):","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Open terminal and enter ",(0,s.jsx)(t.code,{children:"ares-setup-device"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Choose ",(0,s.jsx)(t.code,{children:"add"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Enter device name: tv (feel free to use another name)."}),"\n",(0,s.jsx)(t.li,{children:"Enter the IP address of the LG TV (open the Developer Tools app on the device to find out)."}),"\n",(0,s.jsxs)(t.li,{children:["Use port ",(0,s.jsx)(t.code,{children:"9922"})," for physical devices (for a simulator the port is 6622)."]}),"\n",(0,s.jsxs)(t.li,{children:["SSH user: this should be set to ",(0,s.jsx)(t.code,{children:"prisoner"})," (",(0,s.jsx)(t.strong,{children:"important note"}),": do not use the proposed ",(0,s.jsx)(t.code,{children:"root"}),", this will not work)."]}),"\n",(0,s.jsx)(t.li,{children:"Enter an optional description."}),"\n",(0,s.jsxs)(t.li,{children:["Authentication: choose option ",(0,s.jsx)(t.code,{children:"password"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Leave the actual password blank."}),"\n",(0,s.jsx)(t.li,{children:"Save."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Next, you need to acquire a key from the physical device to be able to securely interact:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.code,{children:"ares-novacom -d tv --getkey"})," (make sure to use the device name you chose in case you changed it)."]}),"\n",(0,s.jsx)(t.li,{children:"You will be prompted for a key; the key will be visible in the Developer Tools app on the physical device."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"simulator",children:"Simulator"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Important Note"}),": the use of a simulator is not recommended as simulators do not implement all features (e.g. DRM)."]}),"\n",(0,s.jsxs)(t.p,{children:["If you decide to use a simulator, follow the guide ",(0,s.jsx)(t.a,{href:"https://webostv.developer.lge.com/develop/tools/simulator-installation",children:"here"})," to install one."]}),"\n",(0,s.jsx)(t.h1,{id:"running-the-app",children:"Running the app"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": please visit the ",(0,s.jsx)(t.a,{href:"https://webostv.developer.lge.com/",children:"LG webOS developer site"})," to get more info on commands, tools and guidelines."]}),"\n",(0,s.jsxs)(t.p,{children:["First make sure to ",(0,s.jsx)(t.code,{children:"cd"})," into the root folder (this is the parent of app folder). Next, run the following commands."]}),"\n",(0,s.jsx)(t.h3,{id:"packaging",children:"Packaging"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"ares-package  ./app --outdir ./\n"})}),"\n",(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(t.p,{children:["Default name for the created package is ",(0,s.jsx)(t.em,{children:"webos.theo_1.0.0_all.ipk"}),", ",(0,s.jsx)(t.em,{children:"tv"})," is the device name that was given when setting up the device in the previous step."]}),"\n",(0,s.jsx)(t.p,{children:"This step will fail if there is no connection to the device, e.g. the device is offline, not on the same network."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"ares-install webos.theo_1.0.0_all.ipk  -d tv\n"})}),"\n",(0,s.jsx)(t.h3,{id:"launch",children:"Launch"}),"\n",(0,s.jsxs)(t.p,{children:["App ID is by default ",(0,s.jsx)(t.em,{children:"web.theo"})," (you can change this in ",(0,s.jsx)(t.code,{children:"appinfo.json"}),")"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"ares-launch webos.theo  -d tv\n"})}),"\n",(0,s.jsx)(t.h3,{id:"debug",children:"Debug"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"ares-inspect webos.theo -d tv --open\n"})})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var i=n(67294);let s={},o=i.createContext(s);function l(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);