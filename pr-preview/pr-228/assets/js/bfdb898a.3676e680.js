"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["61460"],{4476:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>n});var i=JSON.parse('{"id":"how-to-guides/analytics/wicket-labs","title":"Wicket Labs","description":"Wicket Labs is an audience insights platform for video, and offers products like the \\"Wicket Scoreboard\\".","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/02-analytics/09-wicket-labs.md","sourceDirName":"how-to-guides/02-analytics","slug":"/how-to-guides/analytics/wicket-labs","permalink":"/documentation/pr-preview/pr-228/theoplayer/v6/how-to-guides/analytics/wicket-labs","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/02-analytics/09-wicket-labs.md","tags":[],"version":"v6","sidebarPosition":9,"frontMatter":{},"sidebar":"roku","previous":{"title":"MediaMelon SmartSight","permalink":"/documentation/pr-preview/pr-228/theoplayer/v6/how-to-guides/analytics/mediamelon-smartsight"},"next":{"title":"Tealium","permalink":"/documentation/pr-preview/pr-228/theoplayer/v6/how-to-guides/analytics/tealium"}}'),a=s("85893"),r=s("50065");let o={},n="Wicket Labs",l={},c=[{value:"SDKs",id:"sdks",level:2},{value:"Connecting Wicket Labs with THEOplayer",id:"connecting-wicket-labs-with-theoplayer",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"Android (TV) SDK",id:"android-tv-sdk",level:3},{value:"iOS (/tvOS) SDK",id:"ios-tvos-sdk",level:3},{value:"Related links",id:"related-links",level:2}];function d(e){let t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"wicket-labs",children:"Wicket Labs"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.wicketlabs.com/",children:"Wicket Labs"}),' is an audience insights platform for video, and offers products like the "',(0,a.jsx)(t.a,{href:"https://www.wicketlabs.com/wicket-scorecard/",children:"Wicket Scoreboard"}),'".']}),"\n",(0,a.jsxs)(t.p,{children:["To generate these insights, a video player emits playback events to a third-party database service (e.g. Firebase).\nWicket Labs provides ",(0,a.jsx)(t.a,{href:"https://www.wicketlabs.com/resources/knowledge-base/how-to-setup-firebase-for-ott-video-services/",children:"guidelines"})," on how to format these playback events.\nWicket Labs then pulls the data from the selected third-party database service, and integrates it into their platform."]}),"\n",(0,a.jsxs)(t.p,{children:["THEOplayer and Wicket Labs publish ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-wicket-labs-html5-sdk",children:"sample integrations on Github"})," to bootstrap developers."]}),"\n",(0,a.jsx)(t.h2,{id:"sdks",children:"SDKs"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"Custom"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"connecting-wicket-labs-with-theoplayer",children:"Connecting Wicket Labs with THEOplayer"}),"\n",(0,a.jsx)(t.p,{children:"An integration with Wicket Labs can be integrated on-top of THEOplayer."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["As a customer of Wicket Labs, you need to verify that Wicket Labs can ingest data from your selected database solution (e.g. Firebase).\n",(0,a.jsx)(t.em,{children:"(It should be noted that Wicket Labs does not provide its own database service to store playback events.\nInstead, Wicket Labs plugs into your database service.)"})]}),"\n",(0,a.jsxs)(t.li,{children:["As a customer of Wicket Labs and THEOplayer, you need to emit the playback events (",(0,a.jsx)(t.a,{href:"https://www.wicketlabs.com/resources/knowledge-base/how-to-setup-firebase-for-ott-video-services/",children:"as defined per Wicket Labs"}),") to your database service.\nIn other words, you need to hook into certain events emitted by THEOplayer, reformat them, and re-emit them to your database service."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The technologies offered by THEOplayer and Wicket Labs can be combined on all ",(0,a.jsx)(t.a,{href:"https://www.theoplayer.com/",children:"THEOplayer-supported platforms"}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["To facilitate the implementation of Wicket Labs [related to THEOplayer], Wicket Labs and THEOplayer collaborate on publicly available code samples. These code samples are published as Git repositories on ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer",children:"https://github.com/THEOplayer"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Developers are free to do their custom integration of Wicket Labs and THEOplayer, or may modify the publicly available code samples.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Wicket Labs' article on ",(0,a.jsx)(t.a,{href:"https://www.wicketlabs.com/resources/knowledge-base/how-to-setup-firebase-for-ott-video-services/",children:"How to Setup Firebase for OTT Video Services"})," is a great starting point if you're interested in customizing."]}),"\n",(0,a.jsxs)(t.li,{children:["THEOplayer's article on ",(0,a.jsx)(t.a,{href:"/documentation/pr-preview/pr-228/theoplayer/v6/how-to-guides/analytics/custom-analytics-integration",children:"Custom Analytics Integration"})," may help developers out."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,a.jsxs)(t.p,{children:["THEOplayer and Wicket Labs host a Github repository at ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-wicket-labs-html5-sdk",children:"https://github.com/THEOplayer/samples-wicket-labs-html5-sdk"}),".\nThis repository provides a sample implementation for the THEOplayer Web SDK with Firebase as the database service."]}),"\n",(0,a.jsx)(t.p,{children:"This repository may also be useful if you're using another database service, because the repository demonstrates the correct order of hooking into the playback events related to Wicket Labs,\nand how to format them. In other words: if you're using another database service, you just need to emit the events to a different source."}),"\n",(0,a.jsx)(t.h3,{id:"android-tv-sdk",children:"Android (TV) SDK"}),"\n",(0,a.jsx)(t.p,{children:"THEOplayer and Wicket Labs currently do not host a sample implementation for Android-based platforms on Github."}),"\n",(0,a.jsxs)(t.p,{children:["Developers are encouraged to use ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-wicket-labs-html5-sdk",children:"https://github.com/THEOplayer/samples-wicket-labs-html5-sdk"})," and ",(0,a.jsx)(t.a,{href:"https://www.wicketlabs.com/resources/knowledge-base/how-to-setup-firebase-for-ott-video-services/",children:"https://www.wicketlabs.com/resources/knowledge-base/how-to-setup-firebase-for-ott-video-services/"})," as a starting point.\nAdditionally, developers are encouraged to reach out to their contacts at THEOplayer and/or Wicket Labs if they need assistance,\nwhich could prompt THEOplayer and Wicket Labs into publishing a sample implementation on Github."]}),"\n",(0,a.jsx)(t.h3,{id:"ios-tvos-sdk",children:"iOS (/tvOS) SDK"}),"\n",(0,a.jsx)(t.p,{children:"THEOplayer and Wicket Labs currently do not host a sample implementation for iOS or tvOS on Github."}),"\n",(0,a.jsxs)(t.p,{children:["Developers are encouraged to use ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-wicket-labs-html5-sdk",children:"https://github.com/THEOplayer/samples-wicket-labs-html5-sdk"})," and ",(0,a.jsx)(t.a,{href:"https://www.wicketlabs.com/resources/knowledge-base/how-to-setup-firebase-for-ott-video-services/",children:"https://www.wicketlabs.com/resources/knowledge-base/how-to-setup-firebase-for-ott-video-services/"})," as a starting point.\nAdditionally, developers are encouraged to reach out to their contacts at THEOplayer and/or Wicket Labs if they need assistance,\nwhich could prompt THEOplayer and Wicket Labs into publishing a sample implementation on Github."]}),"\n",(0,a.jsx)(t.h2,{id:"related-links",children:"Related links"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["github.com/THEOplayer: ",(0,a.jsx)(t.a,{href:"https://github.com/THEOplayer/samples-wicket-labs-html5-sdk",children:"https://github.com/THEOplayer/samples-wicket-labs-html5-sdk"})]}),"\n",(0,a.jsxs)(t.li,{children:["wicketlabs.com: ",(0,a.jsx)(t.a,{href:"https://www.wicketlabs.com/resources/knowledge-base/how-to-setup-firebase-for-ott-video-services/",children:"How to Setup Firebase for OTT Video Services"})]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return n},a:function(){return o}});var i=s(67294);let a={},r=i.createContext(a);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);