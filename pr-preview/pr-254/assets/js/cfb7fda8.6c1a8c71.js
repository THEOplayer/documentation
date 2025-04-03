"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["78528"],{42493:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>a});var i=JSON.parse('{"id":"how-to-guides/scheduling-overlays","title":"Scheduling overlays","description":"THEOads can insert overlays into your content, but it requires placement information to do so. This page will outline the various options for scheduling overlays.","source":"@site/theoads/how-to-guides/scheduling-overlays.md","sourceDirName":"how-to-guides","slug":"/how-to-guides/scheduling-overlays","permalink":"/documentation/pr-preview/pr-254/theoads/how-to-guides/scheduling-overlays","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoads/how-to-guides/scheduling-overlays.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"theoads","previous":{"title":"Scheduling breaks","permalink":"/documentation/pr-preview/pr-254/theoads/how-to-guides/scheduling-breaks"},"next":{"title":"Workflow integration","permalink":"/documentation/pr-preview/pr-254/theoads/how-to-guides/workflow-integration"}}'),s=t("85893"),o=t("50065");let r={sidebar_position:5},a="Scheduling overlays",d={},l=[{value:"Using the THEOads service REST API",id:"using-the-theoads-service-rest-api",level:2},{value:"Custom Creatives via Google Ad Manager",id:"custom-creatives-via-google-ad-manager",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"scheduling-overlays",children:"Scheduling overlays"})}),"\n",(0,s.jsx)(n.p,{children:"THEOads can insert overlays into your content, but it requires placement information to do so. This page will outline the various options for scheduling overlays."}),"\n",(0,s.jsx)(n.h2,{id:"using-the-theoads-service-rest-api",children:"Using the THEOads service REST API"}),"\n",(0,s.jsx)(n.p,{children:"The recommended way to schedule overlays is through the THEOads service API."}),"\n",(0,s.jsxs)(n.p,{children:["This can be done by a POST request to ",(0,s.jsx)(n.code,{children:"{path}/overlay"})," where path is the usual url to interact with the THEOads service for a specific monetized stream: ",(0,s.jsx)(n.code,{children:"{theoads-host}/ads-client/api/v1/monetized-streams/:monetizedStreamId"}),". Please see ",(0,s.jsx)(n.a,{href:"/theoads/api/signaling/create-monetized-stream-overlay/",children:"CreateMonetizedStreamOverlay"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The body of the post request can have the following properties:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"{\n  id: string;\n  name: string | undefined;\n  startDate: string;\n  duration: string;\n  type: string;\n  position: {\n    left: number | undefined;\n    right: number | undefined;\n    top: number | undefined;\n    bottom: number | undefined;\n  };\n  size: {\n    width: number;\n    height: number;\n  };\n  opacity: number | undefined;\n  gamProperties: {\n    iu: string;\n    sz: {\n      default: string;\n      phone: string | undefined;\n      tv: string | undefined;\n    }\n  } | undefined;\n  resourceURI: {\n    type: string;\n    default: string;\n    phone: string | undefined;\n    tv: string | undefined;\n  }[] | undefined;\n  clickThroughURI: string | undefined;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"id"})," uniquely identifies the overlay inside the monetized stream."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," is used to optionally identify the overlay presentation with a human-friendly name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"startDate"})," denotes when the overlay presentation should start. It should be in a Program Date Time format such as ",(0,s.jsx)(n.code,{children:"YYYY-MM-DDThh:mm:ss.SSSZ"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"duration"})," is the total duration of the overlay presentation (in seconds)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"})," can only be 'image' for now. In the future we might extend this."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"position"})," is required to know where the overlay needs to be presented on top of the video content. It requires a combination of either one of ",(0,s.jsx)(n.code,{children:"left"})," or ",(0,s.jsx)(n.code,{children:"right"})," and ",(0,s.jsx)(n.code,{children:"top"})," or ",(0,s.jsx)(n.code,{children:"bottom"}),". All values are percentage based and non-zero. The values denote the location from the specified side. For example: ",(0,s.jsx)(n.code,{children:"left: 10"})," denotes ",(0,s.jsx)(n.code,{children:"10% from the left edge of the video"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"size"})," is required to know what the overlay presentation's width and height need to be relative to the video content display size. All values are percentage based and non-zero. For example: ",(0,s.jsx)(n.code,{children:"width: 20"})," denotes 20% of the current video display width."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"opacity"})," can optionally be used to make the overlay less opaque. This value is percentage based and non-zero. The default is ",(0,s.jsx)(n.code,{children:"100"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gamProperties"})," can optionally be used to specify the values required for requesting a pre-configured custom creative from GAM (See below). It follows the ",(0,s.jsx)(n.a,{href:"https://support.google.com/admanager/answer/2623168#zippy=%2Crequired-parameters",children:"specifications"})," for a tagless request to load a creative. If ",(0,s.jsx)(n.code,{children:"gamProperties"})," is not defined, you need to specify at least one ",(0,s.jsx)(n.code,{children:"resourceURI"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"iu"})," specifies the Google Ad Manager ad unit code, including your Google Ad Manager network code."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sz"})," specifies the creative size configured in GAM. Aside from the required ",(0,s.jsx)(n.code,{children:"default"})," value, you can optionally specify alternative values for either ",(0,s.jsx)(n.code,{children:"phone"})," or ",(0,s.jsx)(n.code,{children:"tv"})," devices."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"resourceURI"})," can optionally be used to specify one or more types required for requesting a custom overlay via a URI. If ",(0,s.jsx)(n.code,{children:"resourceURI"})," is not defined, you need to specify ",(0,s.jsx)(n.code,{children:"gamProperties"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"})," is used to specify the resource type. Currently, only ",(0,s.jsx)(n.code,{children:"png"})," and ",(0,s.jsx)(n.code,{children:"svg"})," are supported. Based on the underlying platform, the suitable format will be chosen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"default"}),", ",(0,s.jsx)(n.code,{children:"phone"})," and ",(0,s.jsx)(n.code,{children:"tv"})," can be used to specify the corresponding resource URI to load when presenting the overlay. While ",(0,s.jsx)(n.code,{children:"default"})," is required, ",(0,s.jsx)(n.code,{children:"phone"})," and ",(0,s.jsx)(n.code,{children:"tv"})," are optional."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"clickThroughURI"})," is an optional field used to enable the clickthrough function on the overlay for both the ",(0,s.jsx)(n.code,{children:"gamProperties"})," and ",(0,s.jsx)(n.code,{children:"resourceURI"})," options."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"An example of a schedule overlay request body for a GAM based image overlay can be found below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "id": "1",\n  "name": "Test overlay 1",\n  "startDate": "2024-12-09T07:30:11.274Z",\n  "duration": "30",\n  "type": "image",\n  "position": {\n    "left": 5,\n    "top": 5\n  },\n  "size": {\n    "width": 10,\n    "height": 10\n  },\n  "opacity": 50,\n  "gamProperties": {\n    "iu": "/12345678/overlay_1",\n    "sz": {\n      "default": "400x225",\n      "phone": "400x225",\n      "tv": "400x225"\n    }\n  },\n  "clickThroughURI": "https://www.theoplayer.com/product/theoads"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"An example of a schedule overlay request body for a custom image overlay can be found below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "id": "2",\n  "name": "Test overlay 2",\n  "startDate": "2024-12-09T07:30:11.274Z",\n  "duration": "30",\n  "type": "image",\n  "position": {\n    "left": 5,\n    "top": 5\n  },\n  "size": {\n    "width": 10,\n    "height": 10\n  },\n  "opacity": 50,\n  "resourceURI": [\n    {\n      "type": "svg",\n      "default": "https://<PATH_TO_IMAGE>/image.svg",\n      "phone": "https://<PATH_TO_IMAGE>/image_phone.svg",\n      "tv": "https://<PATH_TO_IMAGE>/image_tv.svg"\n    },\n    {\n      "type": "png",\n      "default": "https://<PATH_TO_IMAGE>/image.png",\n      "phone": "https://<PATH_TO_IMAGE>/image_phone.png",\n      "tv": "https://<PATH_TO_IMAGE>/image_tv.png"\n    }\n  ],\n  "clickThroughURI": "https://www.theoplayer.com/product/theoads"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"custom-creatives-via-google-ad-manager",children:"Custom Creatives via Google Ad Manager"}),"\n",(0,s.jsxs)(n.p,{children:["When using GAM for delivering dynamic image overlays through the ",(0,s.jsx)(n.code,{children:"gamProperties"})," property of the overlay object, you need to first configure corresponding Creatives in the GAM console."]}),"\n",(0,s.jsxs)(n.p,{children:["First off, you need to define a custom creative template specifically for THEOads image overlays as documented ",(0,s.jsx)(n.a,{href:"https://support.google.com/admanager/answer/1138308#custom-templates",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can either import this ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(19061).Z+"",children:"pre-defined template"}),", or follow the steps below."]}),"\n",(0,s.jsxs)(n.p,{children:["Apart from assigning a ",(0,s.jsx)(n.code,{children:"Name"})," and optional ",(0,s.jsx)(n.code,{children:"Description"}),", you need to perform the following changes:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Configure a File type variable ",(0,s.jsx)(n.code,{children:"Image"}),", optionally limiting the allowed file types:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Configure a File type variable Image",src:t(21978).Z+"",width:"2090",height:"1818"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Optionally configure a URL type variable ",(0,s.jsx)(n.code,{children:"ClickThrough"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Configure a URL type variable ClickThrough",src:t(33286).Z+"",width:"2090",height:"1818"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Configure the ",(0,s.jsx)(n.code,{children:"Code snippet"})," as follows:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "image": "[%Image%]",\n  "clickThrough": "[%ClickThrough%]",\n  "impression": "%%VIEW_URL_ESC%%"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Note the ",(0,s.jsx)(n.code,{children:"impression"})," field which is needed for the player to properly handle impression tracking. The special macro ",(0,s.jsx)(n.code,{children:"%%VIEW_URL_ESC%%"})," is supplied by GAM and will contain a GAM specfic impression URL which is called when the overlay is shown on the client."]}),"\n",(0,s.jsx)(n.p,{children:"In the end it should look like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create custom creative template",src:t(67972).Z+"",width:"2090",height:"1818"})}),"\n",(0,s.jsx)(n.p,{children:"Now that the template is set up, you can start adding creatives as you would otherwise when using standard image creative, except you need to select this Custom creative template when adding the new creatives:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create custom creative template",src:t(42799).Z+"",width:"2290",height:"1322"})}),"\n",(0,s.jsxs)(n.p,{children:["When editing the creative itself, make sure to select an appropriate ",(0,s.jsx)(n.code,{children:"Target ad unit size"})," as you would with a standard image creative also. This size corresponds to the ",(0,s.jsx)(n.code,{children:"sz"})," property values inside the ",(0,s.jsx)(n.code,{children:"gamProperties"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Besides that, you need to at least also upload or select a suitable image for display."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create custom creative template",src:t(47948).Z+"",width:"1586",height:"2566"})}),"\n",(0,s.jsxs)(n.p,{children:["Now that the creatives are defined, make sure to add them to a line item that is at least in status 'Ready' so delivery can commence (Ref GAM ",(0,s.jsx)(n.a,{href:"https://support.google.com/admanager/answer/82991?hl=en&ref_topic=7506394&sjid=17311913585360515246-EU",children:"documentation"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"That's it! You should now be able to add image overlays which should show up inside the player at the appropriate time and location."})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},19061:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/files/THEOads_Image_Overlay_gam_template-da699d328d68f5fd1fa3707a81903bc3.json"},67972:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/overlay_gam_1-83e1b2dfd72ae96e842cfd278b216a3d.png"},21978:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/overlay_gam_2a-7c025733c58c0bd23d7260c620973cd5.png"},33286:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/overlay_gam_2b-cca42fde47bef1054a14e6922c094ca2.png"},42799:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/overlay_gam_3-72f4d39c71702a2d6948c02d31a8aa0d.png"},47948:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/overlay_gam_4-079f5ea7f5a53336b3fc300b4ce0d26d.png"},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(67294);let s={},o=i.createContext(s);function r(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);