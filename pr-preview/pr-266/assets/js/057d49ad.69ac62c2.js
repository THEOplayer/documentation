"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["23896"],{63604:function(e,i,n){n.r(i),n.d(i,{default:()=>p,frontMatter:()=>s,metadata:()=>l,assets:()=>o,toc:()=>r,contentTitle:()=>d});var l=JSON.parse('{"id":"client-sdks/desktop/desktop-building-test-applications","title":"Building Test Applications","description":"The Native SDK offers simple test applications for checking whether the SDK installation is correct. The following instructions explain how to build the applications.","source":"@site/millicast/client-sdks/desktop/desktop-building-test-applications.md","sourceDirName":"client-sdks/desktop","slug":"/desktop-building-test-applications","permalink":"/documentation/pr-preview/pr-266/millicast/desktop-building-test-applications","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/client-sdks/desktop/desktop-building-test-applications.md","tags":[],"version":"current","frontMatter":{"title":"Building Test Applications","slug":"/desktop-building-test-applications"},"sidebar":"millicast","previous":{"title":"Desktop","permalink":"/documentation/pr-preview/pr-266/millicast/desktop"},"next":{"title":"Getting Started with Publishing","permalink":"/documentation/pr-preview/pr-266/millicast/desktop-getting-started-with-publishing"}}'),t=n("85893"),a=n("50065");let s={title:"Building Test Applications",slug:"/desktop-building-test-applications"},d=void 0,o={},r=[{value:"Mac",id:"mac",level:2},{value:"Windows",id:"windows",level:2},{value:"Linux x64",id:"linux-x64",level:2},{value:"Installing dependencies",id:"installing-dependencies",level:3},{value:"Ubuntu GNU libstdc++ library",id:"ubuntu-gnu-libstdc-library",level:4},{value:"Ubuntu LLVM libc++ library",id:"ubuntu-llvm-libc-library",level:4},{value:"Debian11 arm-v8a GNU libstdc++ library",id:"debian11-arm-v8a-gnu-libstdc-library",level:4},{value:"Building applications",id:"building-applications",level:3}];function c(e){let i={br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"The Native SDK offers simple test applications for checking whether the SDK installation is correct. The following instructions explain how to build the applications."}),"\n",(0,t.jsx)(i.h2,{id:"mac",children:"Mac"}),"\n",(0,t.jsxs)(i.p,{children:["Use the following commands in the ",(0,t.jsx)(i.strong,{children:"SDK"})," folder to build the application:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"mkdir build && cd build\n\ncmake .. -DMillicastSDK_DIR=/path_to_millicastSDK/lib/cmake\n\ncmake --build .\n"})}),"\n",(0,t.jsx)(i.h2,{id:"windows",children:"Windows"}),"\n",(0,t.jsxs)(i.p,{children:["Use the following commands in the ",(0,t.jsx)(i.strong,{children:"example"})," folder to build the application:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"mkdir build && cd build\n\ncmake .. -DMillicastSDK_DIR=/path_to_millicastSDK/lib/cmake\n\ncmake --build . --config Debug\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Before running, you might want to add the bin directory to your path as it contains the NDI DLLs, which are required in your path environment variable to start the application. After using the command, open the ",(0,t.jsx)(i.strong,{children:"debug"})," directory and execute the application."]}),"\n",(0,t.jsx)(i.h2,{id:"linux-x64",children:"Linux x64"}),"\n",(0,t.jsx)(i.h3,{id:"installing-dependencies",children:"Installing dependencies"}),"\n",(0,t.jsx)(i.h4,{id:"ubuntu-gnu-libstdc-library",children:"Ubuntu GNU libstdc++ library"}),"\n",(0,t.jsxs)(i.p,{children:["The application requires the following dependencies: X11, Xtst, Xfixes, Xdamage, Xrandr, Xcomposite,",(0,t.jsx)(i.br,{}),"\n","avahi-common, and avahi-client. You may install them using the following command:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"sudo apt install -y libx11-dev libxfixes-dev libxdamage-dev libxcomposite-dev libxtst-dev \\\n  libxrandr-dev libavahi-client3 libavahi-common3\n"})}),"\n",(0,t.jsx)(i.h4,{id:"ubuntu-llvm-libc-library",children:"Ubuntu LLVM libc++ library"}),"\n",(0,t.jsxs)(i.p,{children:["The application requires the following dependencies: X11, Xtst, Xfixes, Xdamage, Xrandr, Xcomposite,",(0,t.jsx)(i.br,{}),"\n","avahi-common, and avahi-client. You may install them using the following command:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"sudo apt install -y libx11-dev libxfixes-dev libxdamage-dev libxcomposite-dev libxtst-dev \\\n  libxrandr-dev libavahi-client3 libavahi-common3\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Compile with clang to have ",(0,t.jsx)(i.em,{children:"libc++-dev"})," and ",(0,t.jsx)(i.em,{children:"libc++abi-dev"})," installed:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"export CC=/usr/bin/clang\nexport CXX=/usr/bin/clang++\n"})}),"\n",(0,t.jsx)(i.h4,{id:"debian11-arm-v8a-gnu-libstdc-library",children:"Debian11 arm-v8a GNU libstdc++ library"}),"\n",(0,t.jsxs)(i.p,{children:["Applications built with the ",(0,t.jsx)(i.code,{children:"debian11-armv8a-nox11-nopulse"})," package have no extra dependencies required for the system. They do require the kernel to have V4L2 and ALSA. When run on the Raspberry Pi 3b+ and higher the SDK provides H264 hardware encoding support for applications."]}),"\n",(0,t.jsx)(i.h3,{id:"building-applications",children:"Building applications"}),"\n",(0,t.jsxs)(i.p,{children:["The test applications are built in the same way on all Linux platforms. Build applications using the following commands in the ",(0,t.jsx)(i.strong,{children:"SDK"})," folder:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"mkdir build && cd build\ncmake .. -DMillicastSDK_DIR=/path_to/MillicastSDK/lib/cmake\nmake -j4\n"})})]})}function p(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return d},a:function(){return s}});var l=n(67294);let t={},a=l.createContext(t);function s(e){let i=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(a.Provider,{value:i},e.children)}}}]);