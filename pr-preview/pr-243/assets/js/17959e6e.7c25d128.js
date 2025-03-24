"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["79259"],{48701:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>o});var i=JSON.parse('{"id":"knowledge-base/content-protection/drm-systems","title":"Digital Rights Management (DRM) Systems","description":"Intellectual property theft has a huge economic impact. The digital media sector is one of its biggest victims with annual losses running into billions of dollars.","source":"@site/theoplayer/knowledge-base/02-content-protection/01-drm-systems.md","sourceDirName":"knowledge-base/02-content-protection","slug":"/knowledge-base/content-protection/drm-systems","permalink":"/documentation/pr-preview/pr-243/theoplayer/knowledge-base/content-protection/drm-systems","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/knowledge-base/02-content-protection/01-drm-systems.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Content protection","permalink":"/documentation/pr-preview/pr-243/theoplayer/knowledge-base/content-protection/introduction"},"next":{"title":"AES-128 Encryption","permalink":"/documentation/pr-preview/pr-243/theoplayer/knowledge-base/content-protection/aes-128-encryption"}}'),s=n("85893"),r=n("50065");let l={},o="Digital Rights Management (DRM) Systems",c={},a=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"MPEG-DASH vs. HLS",id:"mpeg-dash-vs-hls",level:2},{value:"Common Encryption",id:"common-encryption",level:2},{value:"Licensing Servers",id:"licensing-servers",level:2},{value:"Multi-DRM Solutions",id:"multi-drm-solutions",level:2}];function d(e){let t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"digital-rights-management-drm-systems",children:"Digital Rights Management (DRM) Systems"})}),"\n",(0,s.jsx)(t.p,{children:"Intellectual property theft has a huge economic impact. The digital media sector is one of its biggest victims with annual losses running into billions of dollars."}),"\n",(0,s.jsx)(t.p,{children:"Due to its nature and distribution, digital media is one of the most difficult intellectual properties to secure. This is especially the case when it comes to securing digital media without impacting the user experience."}),"\n",(0,s.jsx)(t.p,{children:"In the online streaming market, security is achieved through Digital Rights Management (DRM) Systems. These technologies use a combination of Access Control schemes and encryption to make content transparently available to authorized users, while restricting access for everyone else."}),"\n",(0,s.jsx)(t.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,s.jsx)(t.p,{children:"DRM in HTML5 streaming is achieved by encrypting content with AES-128 Encryption. Subsequently, decryption keys are distributed through a DRM specific licensing server. Which DRM system needs to be used depends on the device and browser that is being used."}),"\n",(0,s.jsxs)(t.p,{children:["The major advantage of DRM systems over standard AES-128 Encryption as it is available in HLS streaming is the ability to pass encrypted content to the browser. For more information on AES-128 Encryption in HLS, you can read our article ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-243/theoplayer/knowledge-base/content-protection/aes-128-encryption",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"mpeg-dash-vs-hls",children:"MPEG-DASH vs. HLS"}),"\n",(0,s.jsxs)(t.p,{children:["HLS was one of the first and is currently most widely used HTML5 adaptive streaming protocol. The specifications for HLS are proprietary to Apple, but are published on the IETF website as the ",(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis",children:"Pantos HTTP Live Streaming Specification"}),". The protocol is regularly updated and enhanced by Apple at a steady pace of a new update every six months."]}),"\n",(0,s.jsx)(t.p,{children:"MPEG-DASH on the other hand is backed by an industry forum with a large number of members in the online streaming market."}),"\n",(0,s.jsx)(t.p,{children:"As you can see from the infographic above, when using a DRM system, encrypted content is passed to the browser. To be able to play the content, the browser needs to have access to a Content Decryption Module (CDM) that can handle the DRM system's security policies."}),"\n",(0,s.jsx)(t.p,{children:"Currently, each device and browser combination provides support for just one DRM technology. Apple's FairPlay is the DRM technology to use on Apple's Safari browser and in iOS apps, while Microsoft PlayReady is available on Edge and Internet Explorer and Google's Widevine DRM is available in Firefox and Chromium based browsers such as Google Chrome, Opera and Vivaldi."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Operating System"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Browser"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"DRM Content Protection"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Windows"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Edge"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + PlayReady (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Internet Explorer 11"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + PlayReady (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Chrome"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + Widevine (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Firefox"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + Widevine (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Opera"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + Widevine (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Vivaldi"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + Widevine (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"OS X"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Safari"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"HLS + FairPlay (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Chrome"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + Widevine (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Firefox"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + Widevine (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Opera"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + Widevine (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Vivaldi"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + Widevine (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Linux"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Chrome"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + Widevine (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Firefox"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + Widevine (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Opera"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + Widevine (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Android"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Chrome for Android"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + Widevine (in HTML5)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Windows Phone 8.1"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Internet Explorer"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"MPEG-DASH + PlayReady (in HTML5)"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"common-encryption",children:"Common Encryption"}),"\n",(0,s.jsx)(t.p,{children:"This divided landscape of DRM technologies, browsers and platforms could potentially mean that a content provider needs a lot of resources available to provide full streaming support for all these platforms."}),"\n",(0,s.jsx)(t.p,{children:"This is however not the case in practice. The MPEG Common Encryption standards defines metadata specific for the container formats in which content can be transported. That way, the player and browser know exactly which encryption schemes were used and how specific parts of the stream were encrypted. As long as the different DRM schemes adhere to these specifications, they can be used in combination with the same stream. This allows to reduce the resources required for the streaming provider. In the end, this currently comes down to setting up an HLS stream with FairPlay and an MPEG-DASH stream with PlayReady and Widevine."}),"\n",(0,s.jsx)(t.h2,{id:"licensing-servers",children:"Licensing Servers"}),"\n",(0,s.jsx)(t.p,{children:"A crucial element in the DRM workflow is the DRM licensing server. These servers control the access that users have to your content. Providing various features to fine-tune license types (subscriptions, rentals, purchases, ...) or create user profiles with fine-grained access control (e.g.: premium customers with access to content in higher quality)."}),"\n",(0,s.jsx)(t.p,{children:"This creates two drawbacks at the moment."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"To be able to support your entire viewer base, most content providers will have to use more than one licensing server."}),"\n",(0,s.jsx)(t.li,{children:"Available features between different DRMs and licensing servers differs, making management of the user base more complex."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"multi-drm-solutions",children:"Multi-DRM Solutions"}),"\n",(0,s.jsx)(t.p,{children:"Leveraging Common Encryption and providing support for all common DRM systems on the market, multi-DRM solutions allow a content provider to reach their entire user base with a single point-of-access for their management backend. Multi-DRM solutions make it very easy to protect content with studio-approved DRM."}),"\n",(0,s.jsx)(t.p,{children:"THEOplayer has proven integrations with a number of vendors in the multi-DRM market, as well as Widevine, PlayReady and FairPlay individually."})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var i=n(67294);let s={},r=i.createContext(s);function l(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);