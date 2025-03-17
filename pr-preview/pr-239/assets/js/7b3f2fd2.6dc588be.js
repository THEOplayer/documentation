"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["64557"],{50458:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"faq/can-we-show-custom-message-on-403-on-mp4","title":"Can we show a custom message on 403 on mp4","description":"Yes, this is possible, but not as easy as for DASH and HLS. To address this specific use case no internal THEOplayer tool exists yet (2019) and a separate XHR call needs to be done to determine the exact status of the request. Custom texts, overlays and buttons can be showed on the player following the instructions from the related linked resource.","source":"@site/theoplayer_versioned_docs/version-v4/faq/47-can-we-show-custom-message-on-403-on-mp4.md","sourceDirName":"faq","slug":"/faq/can-we-show-custom-message-on-403-on-mp4","permalink":"/documentation/pr-preview/pr-239/theoplayer/v4/faq/can-we-show-custom-message-on-403-on-mp4","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/faq/47-can-we-show-custom-message-on-403-on-mp4.md","tags":[],"version":"v4","sidebarPosition":47,"frontMatter":{},"sidebar":"faq","previous":{"title":"How can we avoid that the player keeps looking for chunks/segments if they are not found","permalink":"/documentation/pr-preview/pr-239/theoplayer/v4/faq/how-to-avoid-loading-chuncks-when-not-found"},"next":{"title":"Can we prevent UpNext feature from redirecting","permalink":"/documentation/pr-preview/pr-239/theoplayer/v4/faq/prevent-up-next-from-redirecting"}}'),o=n("85893"),r=n("50065");let a={},i="Can we show a custom message on 403 on mp4",l={},d=[{value:"Detection",id:"detection",level:2},{value:"Message",id:"message",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Resources",id:"resources",level:2}];function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"can-we-show-a-custom-message-on-403-on-mp4",children:"Can we show a custom message on 403 on mp4"})}),"\n",(0,o.jsx)(t.p,{children:"Yes, this is possible, but not as easy as for DASH and HLS. To address this specific use case no internal THEOplayer tool exists yet (2019) and a separate XHR call needs to be done to determine the exact status of the request. Custom texts, overlays and buttons can be showed on the player following the instructions from the related linked resource."}),"\n",(0,o.jsx)(t.p,{children:"It is easier to address this question in two steps: detection and message."}),"\n",(0,o.jsx)(t.h2,{id:"detection",children:"Detection"}),"\n",(0,o.jsx)(t.p,{children:"The current (2019) error detection and differentiation in THEOplayer is not yet as specific as we would like and as detailed as some particular use cases, such as this one, may have a use for."}),"\n",(0,o.jsx)(t.p,{children:"For HLS and DASH, the Network API (see Resources) can be used to intercept, filter and \u201Cread\u201D the requests one is interested in, to determine whether something should happen (an error message, for example)."}),"\n",(0,o.jsx)(t.p,{children:"This is not possible with mp4, however, as it is played natively and the Network API cannot be applied. The solution in this case is to do a separate XHR request and read its status. Something along the lines of:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"var XMLHttpRequestObject;\nvar requestObject;\n\nfunction reqListener() {\n  XMLHttpRequestObject = this;\n}\nrequestObject = new XMLHttpRequest();\nrequestObject.addEventListener('load', reqListener);\nrequestObject.open('GET', 'https://httpstat.us/403?sleep=100');\nrequestObject.send();\n\nXMLHttpRequestObject.status; // result should be 403 - this may be used for a control that, if true, prints on the overlay the desired error message.\n"})}),"\n",(0,o.jsx)(t.p,{children:"One disadvantage of this is that additional data is requested and it may slow down the page and increase the start-up time, especially if you implement an autoplay behavior."}),"\n",(0,o.jsx)(t.h2,{id:"message",children:"Message"}),"\n",(0,o.jsx)(t.p,{children:"Back to our specific use case, once you have determined that your mp4 returns a 403 status, you will need to add a custom overlay on the player, showing a message of your choosing. This is because the generic error message \u201CSomething went wrong during native playback\u201D that will show up is no longer editable at this point (see remarks), so you will need to cover it up with your own message. This can be done player following the instructions from the related linked resource: \u201CAdding buttons and text to the default UI\u201D."}),"\n",(0,o.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"This specific use case is different from the more generic personalization of texts and messages on the player, that can be done through language localization (please check the linked resources). Language localization is applied at the moment in which the player instance is created, so it cannot be used to alter texts once the player has been generated."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,o.jsx)(t.p,{children:"The following resources provide more information:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/web/interfaces/NetworkEventMap.html",children:"API reference - Network API events"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-239/theoplayer/v4/how-to-guides/network/introduction",children:"How to use Network API"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-239/theoplayer/v4/faq/what-does-error-something-went-wrong-during-playback-mean",children:'What does the error message "Something went wrong with Native playback" mean?'})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"http://demo.theoplayer.com/adding-buttons-text-overlay-to-theoplayer",children:"Demo page - Adding buttons and text to the default UI"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-239/theoplayer/v4/faq/how-to-change-text-in-theoplayer",children:"How to change text in THEOplayer"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-239/theoplayer/v4/faq/which-error-related-events-does-player-expose",children:"Which error related events does the player expose?"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-239/theoplayer/v4/how-to-guides/miscellaneous/error/how-to-do-error-handling",children:"How to do error handling"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return a}});var s=n(67294);let o={},r=s.createContext(o);function a(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);