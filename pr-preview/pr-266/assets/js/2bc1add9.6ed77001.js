"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["53623"],{45240:function(e,n,i){i.r(n),i.d(n,{default:()=>c,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>h,contentTitle:()=>o});var t=JSON.parse('{"id":"how-to-guides/scheduling-breaks","title":"Scheduling breaks","description":"THEOads can insert ad breaks into your content, but it requires placement information to do so. This page will outline the various options for scheduling ad breaks.","source":"@site/theoads/how-to-guides/scheduling-breaks.md","sourceDirName":"how-to-guides","slug":"/how-to-guides/scheduling-breaks","permalink":"/documentation/pr-preview/pr-266/theoads/how-to-guides/scheduling-breaks","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoads/how-to-guides/scheduling-breaks.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"theoads","previous":{"title":"Override ad experience layout","permalink":"/documentation/pr-preview/pr-266/theoads/how-to-guides/override-layout"},"next":{"title":"Scheduling overlays","permalink":"/documentation/pr-preview/pr-266/theoads/how-to-guides/scheduling-overlays"}}'),s=i("85893"),a=i("50065");let r={sidebar_position:4},o="Scheduling breaks",d={},h=[{value:"Using the manifest",id:"using-the-manifest",level:2},{value:"DATERANGE (Manifest)",id:"daterange",level:3},{value:"CUE-OUT (Manifest)",id:"cue-out",level:3},{value:"OATCLS-SCTE35 (Manifest)",id:"oatcls-scte35",level:3},{value:"Using the THEOads service REST API",id:"using-the-theoads-service-rest-api",level:2},{value:"More information",id:"more-information",level:2}];function l(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"scheduling-breaks",children:"Scheduling breaks"})}),"\n",(0,s.jsx)(n.p,{children:"THEOads can insert ad breaks into your content, but it requires placement information to do so. This page will outline the various options for scheduling ad breaks."}),"\n",(0,s.jsx)(n.h2,{id:"using-the-manifest",children:"Using the manifest"}),"\n",(0,s.jsx)(n.p,{children:"There are multiple ways on how to provide the general ad break information in the manifest itself.\nIn this section we'll go through the different options and the minimal requirements."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For HLS live streams, we require the ",(0,s.jsx)(n.code,{children:"#EXT-X-PROGRAM-DATE-TIME"})," tag to be present.\nThis is necessary to have a clear timeline for each viewer and allows accurate scheduling of the ad breaks."]})}),"\n",(0,s.jsx)(n.p,{children:"As mentioned it is possible to schedule the start time and duration of the ad breaks inside of the manifest.\nThe signaling service will recognize this information and will translate it so that the player can request the correct ads and layout for the ad break."}),"\n",(0,s.jsx)(n.p,{children:"There are several options on achieving this:"}),"\n",(0,s.jsx)(n.h3,{id:"daterange",children:"DATERANGE (Manifest)"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"#EXT-X-DATERANGE"})," tag is the recommended approach to signal an ad break due to its standardization.\nTHEOads will recognize any ",(0,s.jsx)(n.code,{children:"#EXT-X-DATERANGE"})," tag as long as the ",(0,s.jsx)(n.code,{children:"CLASS"})," attribute is undefined."]}),"\n",(0,s.jsx)(n.p,{children:"The required attributes for this are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ID"}),": a unique identifier of the Date Range in the playlist."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"START-DATE"}),": A quoted string containing the date/time at which the Date Range begins."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DURATION"})," or ",(0,s.jsx)(n.code,{children:"PLANNED-DURATION"})," of the Date Range.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Optionally ",(0,s.jsx)(n.code,{children:"SCTE35-OUT"})," could contain the duration instead."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"An example snippet can be found below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'#EXTINF:10\n1.ts\n#EXT-X-DATERANGE:ID="1",START-DATE="2022-09-27T18:00:00.000Z",PLANNED-DURATION=30\n#EXTINF:10\n2.ts\n'})}),"\n",(0,s.jsx)(n.h3,{id:"cue-out",children:"CUE-OUT (Manifest)"}),"\n",(0,s.jsxs)(n.p,{children:["Inside the manifest the ad break start can be signaled by adding an ",(0,s.jsx)(n.code,{children:"#EXT-X-CUE-OUT"})," tag.\nThe duration of the ad break should be specified after it.\nThe end of the ad break and start of content would be signaled by an ",(0,s.jsx)(n.code,{children:"#EXT-X-CUE-IN"})," tag.\nThe ",(0,s.jsx)(n.code,{children:"CUE-OUT"})," tag can be accompanied by a ",(0,s.jsx)(n.a,{href:"#daterange",children:"daterange"}),".\nThis is interesting if the ad break start does not correspond with the start of a new segment."]}),"\n",(0,s.jsxs)(n.p,{children:["It is also recommended to add ",(0,s.jsx)(n.code,{children:"#EXT-X-CUE-OUT-CONT"})," tags for each segment inside of the ad break.\nThis enables the tune-in feature which is able to show parts of the ad break even if the viewer joins in the middle of one."]}),"\n",(0,s.jsxs)(n.p,{children:["Similar to the daterange, ",(0,s.jsx)(n.code,{children:"SCTE35"})," markers could optionally be added containing the duration and the ID of the ad break."]}),"\n",(0,s.jsx)(n.p,{children:"An example manifest with these tags can be found below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"#EXTINF:10\n1.ts\n#EXT-X-CUE-OUT:30\n#EXTINF:10\n2.ts\n#EXT-X-CUE-OUT-CONT:ElapsedTime=10,Duration=30\n#EXTINF:10\n3.ts\n#EXT-X-CUE-OUT-CONT:ElapsedTime=20,Duration=30\n#EXTINF:10\n4.ts\n#EXT-X-CUE-IN\n#EXTINF:10\n5.ts\n"})}),"\n",(0,s.jsx)(n.h3,{id:"oatcls-scte35",children:"OATCLS-SCTE35 (Manifest)"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"#EXT-OATCLS-SCTE35"})," tag is a non-standard tag which contains a SCTE marker.\nThe Signaling Service will parse the information in the SCTE marker such as the duration and ID."]}),"\n",(0,s.jsxs)(n.p,{children:["An example snippet for an ",(0,s.jsx)(n.code,{children:"#EXT-OATCLS-SCTE35"})," tag can be found below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"#EXTINF:10,\n1.ts\n#EXT-OATCLS-SCTE35:/DBFAAAAAAAAAP/wFAUAAAI+f+/+yuN1kH4Azf5gAAAAAAAgAh5DVUVJAAABy3//AADN/mAOCk5GTF9saW5lYXIwAACyYCjX\n#EXTINF:10,\n2.ts\n"})}),"\n",(0,s.jsx)(n.h2,{id:"using-the-theoads-service-rest-api",children:"Using the THEOads service REST API"}),"\n",(0,s.jsx)(n.p,{children:"If the ad information won't be present in the provided manifest, it is possible to schedule one through the THEOads service API."}),"\n",(0,s.jsxs)(n.p,{children:["This can be done by a POST request to ",(0,s.jsx)(n.code,{children:"{path}/break"})," where path is the usual url to interact with the THEOads service for a specific monetized stream: ",(0,s.jsx)(n.code,{children:"{theoads-host}/ads-client/api/v1/monetized-streams/:monetizedStreamId"}),". Please see ",(0,s.jsx)(n.a,{href:"/theoads/api/signaling/create-monetized-stream-break/",children:"CreateMonetizedStreamBreak"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The body of the post request can have the following properties:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"{\n  id: string;\n  startDate: string;\n  duration: string;\n  source: string | undefined;\n  layout: string | undefined;\n  assetURI: string | undefined;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"id"})," corresponds to the ID of the DATERANGE which corresponds to the ad break request."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"startDate"})," denotes when the ad break should start. It should be in a Program Date Time format such as such as ",(0,s.jsx)(n.code,{children:"YYYY-MM-DDThh:mm:ss.SSSZ"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"duration"})," is the total duration of the ad break (seconds)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"source"})," is the optional identifier of the source for which the ad needs to be scheduled. The signaling service will only insert the ad for playlists containing part of this in their URL. If not set the ad is scheduled in every playlist."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"layout"})," is the optional THEOads layout, which can be set to ",(0,s.jsx)(n.code,{children:"SINGLE"}),", ",(0,s.jsx)(n.code,{children:"DOUBLE"})," or ",(0,s.jsx)(n.code,{children:"LSHAPE_AD"}),". If it is ",(0,s.jsx)(n.code,{children:"undefined"})," the default layout of the signaling service will be chosen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"assetURI"})," is the optional manifest URI of an alternative ad source. If set it will use this URI during the scheduled ad break instead of Google Pod Serving."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"An example of a schedule ad break request body can be found below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "id": "1",\n  "startDate": "2024-08-09T07:30:11.274Z",\n  "duration": "10",\n  "layout": "DOUBLE"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"more-information",children:"More information"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.theoplayer.com/product/theoads/",children:"Enable Novel Ad Experiences"})}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var t=i(67294);let s={},a=t.createContext(s);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);