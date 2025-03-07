"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["71578"],{25284:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>r,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>s});var a=JSON.parse('{"id":"getting-started/index","title":"Welcome","description":"---","source":"@site/theolive/getting-started/index.mdx","sourceDirName":"getting-started","slug":"/getting-started/","permalink":"/documentation/pr-preview/pr-232/theolive/getting-started/","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/getting-started/index.mdx","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0,"pagination_next":"getting-started/authorization"},"sidebar":"theolive","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-232/theolive/"},"next":{"title":"Authorization","permalink":"/documentation/pr-preview/pr-232/theolive/getting-started/authorization"}}'),i=n("85893"),o=n("50065");let r={sidebar_position:0,pagination_next:"getting-started/authorization"},s="Welcome",l={},c=[{value:"1. Create an account in the management console",id:"1-create-an-account-in-the-management-console",level:2},{value:"2. Create your first channel",id:"2-create-your-first-channel",level:2},{value:"3. Start streaming",id:"3-start-streaming",level:2},{value:"4. Player embed script",id:"4-player-embed-script",level:2},{value:"5. Start the channel",id:"5-start-the-channel",level:2},{value:"6. Stop the channel",id:"6-stop-the-channel",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"welcome",children:"Welcome"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["THEOlive allows you to stream video real-time to your viewers, and to get started in minutes instead of days or weeks. Leveraging the ",(0,i.jsx)(t.a,{href:"https://www.hespalliance.org/",children:"High Efficiency Streaming Protocol"}),", THEOlive aims to provide real-time streaming to large audiences, with high quality video, up to HD 1080p."]}),"\n",(0,i.jsxs)(t.p,{children:['THEOlive lives by the "API first" mantra: each action can be performed using API calls. Each possible call can be found at our ',(0,i.jsx)(t.a,{href:"https://developers.theo.live/reference/create-channel",children:"API Reference"}),". However, to make things easier for non-developers, we built a management console on top of these API calls which makes it straightforward to perform the basic actions. To be able to create and use a THEOlive channel, you should register for an account and get a token to perform ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-232/theolive/getting-started/authorization",children:"authenticated requests"})," to our API."]}),"\n",(0,i.jsx)(t.h2,{id:"1-create-an-account-in-the-management-console",children:"1. Create an account in the management console"}),"\n",(0,i.jsxs)(t.p,{children:["To start your journey, you'll have to create a THEOlive account in the ",(0,i.jsx)(t.a,{href:"https://console.theo.live/",children:"management console"})," ."]}),"\n",(0,i.jsxs)(t.p,{children:["Once you've entered your user name and password, you can already create your first channel and start streaming. There will be a 5-minute streaming cap and a THEOlive watermark in this free environment. To get access to unlimited streaming, you will have to complete your account and credit card details in the 'my account' section. Find more information on ",(0,i.jsx)(t.a,{href:"./billing",children:"How billing works for THEOlive"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(75791).Z+"",title:"Homepage of the THEOlive management console",width:"1903",height:"1052"})}),"\n",(0,i.jsx)(t.admonition,{title:"\uD83D\uDCD8 API reference",type:"info",children:(0,i.jsxs)(t.p,{children:["This guide describes how to get started with the THEOlive management console. Please consult the ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/reference/create-channel",children:"API reference"})," and ",(0,i.jsx)(t.a,{href:"/documentation/pr-preview/pr-232/theolive/getting-started/authorization",children:"Authorization"})," if you would like to work with API calls. There is also a guide ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/docs/how-to-use-postmans-api-client-with-theolive",children:"Using Postman with THEOlive"})," which describes how to use ",(0,i.jsx)(t.a,{href:"https://www.postman.com/product/api-client/",children:"Postman"})," for THEOlive API calls."]})}),"\n",(0,i.jsx)(t.h2,{id:"2-create-your-first-channel",children:"2. Create your first channel"}),"\n",(0,i.jsxs)(t.p,{children:['Time to start streaming! In the management console, please click "create channel", which will return the following screen: here you can enter a name for your channel, choose the ingest location, and define your ',(0,i.jsx)(t.a,{href:"./stream-configuration",children:"Stream configuration"}),". It is important to choose a location as close as possible to you to reduce latency. An overview of possible ingest locations can be found ",(0,i.jsx)(t.a,{href:"./regions",children:"here"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(8122).Z+"",title:"Create a channel",width:"1898",height:"1054"})}),"\n",(0,i.jsx)(t.p,{children:"When hitting 'Create', you will be navigated towards the Details page of your newly created channel."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(63786).Z+"",title:"Management console: Details page with the possibility to start your channel and options to customize your player.",width:"1896",height:"1053"})}),"\n",(0,i.jsxs)(t.p,{children:["A channel can also be created through an API call to the ",(0,i.jsx)(t.code,{children:"channels"})," endpoint, passing an ingest location and a name. It will return an ",(0,i.jsx)(t.code,{children:"id"})," that you can use to start, stop, update or delete the channel later on. Also, a ",(0,i.jsx)(t.code,{children:"streamKey"})," and ",(0,i.jsx)(t.code,{children:"rtmpPushUrl"})," will be returned to stream your content to. More information about the Create channel endpoint and how to pass advanced properties can be found ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/reference/create-channel",children:"here"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-curl",children:'curl --location --request POST \'https://api.theo.live/channels\'\n--header \'Authorization: Basic dG9rZW46c2VjcmV0\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "ingestLocation": "europe-west",\n    "metadata": {\n        "name": "a-name"\n    }\n}\'\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Note that for this API call you'll need a token that you can generate in the management console. More information can be found at the ",(0,i.jsx)(t.a,{href:"./authorization",children:"Authorization"})," guide."]}),"\n",(0,i.jsx)(t.h2,{id:"3-start-streaming",children:"3. Start streaming"}),"\n",(0,i.jsx)(t.p,{children:"Using the RTMP push URL and the stream key you have received when creating a channel, you can start streaming content to that RTMP endpoint."}),"\n",(0,i.jsx)(t.admonition,{title:"\uD83D\uDEA7 RTMP pull",type:"info",children:(0,i.jsx)(t.p,{children:"If you would like to do pull-based streaming instead of push-based streaming, you can also use your own RTMP pull endpoint and specify this when starting the channel in the next step."})}),"\n",(0,i.jsxs)(t.p,{children:["One option to start streaming content is making use of ",(0,i.jsx)(t.a,{href:"https://obsproject.com/",children:"OBS"}),". It's an easy, free and quick way to get you started. More information on how to get started with OBS can be found in our guide ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/docs/using-obs-with-theolive",children:"Using OBS with THEOlive"}),". If you would be using ",(0,i.jsx)(t.a,{href:"https://www.telestream.net/wirecast",children:"Wirecast"})," for your live streaming, then more information on how to get started can be found in the guide ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/docs/using-wirecast-with-theolive",children:"Using Wirecast with THEOlive"}),". There are also guides for ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/docs/using-vmix-with-theolive",children:"vMix"})," and ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/docs/using-videon-edgecaster-with-theolive",children:"Videon Edgecaster"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"\u2757\uFE0F RTMPS vs RTMP",type:"info",children:(0,i.jsxs)(t.p,{children:['The RTMP push URL generated by THEOlive shows as RTMPS. If you would like to do RTMP streaming then you will have to change "rtmps" to "rtmp". As an example, ',(0,i.jsx)(t.code,{children:"rtmps://rtmp.europe-west.theo.live/live"})," will have to be changed to ",(0,i.jsx)(t.code,{children:"rtmp://rtmp.europe-west.theo.live/live"})," for RTMP-based streaming."]})}),"\n",(0,i.jsx)(t.h2,{id:"4-player-embed-script",children:"4. Player embed script"}),"\n",(0,i.jsxs)(t.p,{children:["Now we have to make sure that our viewers have access to the stream! Including a THEOlive channel on your page is very simple: all you need is our embed script and the channel ID. The ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/docs/including-a-theolive-player-on-your-page",children:"Player"})," guide gives more information on how to do this, including a code snippet example."]}),"\n",(0,i.jsx)(t.h2,{id:"5-start-the-channel",children:"5. Start the channel"}),"\n",(0,i.jsxs)(t.p,{children:["When you're all set, you can start your THEOlive channel. Starting your channel also means your ",(0,i.jsx)(t.a,{href:"https://www.theoplayer.com/pricing/theolive",children:"transcoding time"})," will start counting for billing purposes."]}),"\n",(0,i.jsx)(t.p,{children:'You can easily start your channel on the channel details page, by clicking on the green "start" button.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(91574).Z+"",width:"1349",height:"574"})}),"\n",(0,i.jsxs)(t.p,{children:["In the background this will make a ",(0,i.jsx)(t.code,{children:"POST"})," request to the ",(0,i.jsx)(t.code,{children:"channels/start"})," endpoint. You can also start a channel via the Start channel API call, for which you can find more information ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/reference/start-channel",children:"here"}),". As mentioned in the last section, you can optionally pass the ",(0,i.jsx)(t.code,{children:"rtmpPullUrl"})," property in the body of the request for pull-based streaming. Don't forget to stop streaming when you are done!"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-curl",children:"curl --location --request POST 'https://api.theo.live/channels/{channel-id}/start' \\\n--header 'Authorization: Basic dG9rZW46c2VjcmV0' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"rtmpPullUrl\": \"your-optional-rtmp-pull-url\"\n}'\n"})}),"\n",(0,i.jsx)(t.h2,{id:"6-stop-the-channel",children:"6. Stop the channel"}),"\n",(0,i.jsxs)(t.p,{children:["Have you finished your real-time streaming? Make sure to stop your channel by making a request to the ",(0,i.jsx)(t.code,{children:"channels/stop"})," endpoint, either through a ",(0,i.jsx)(t.a,{href:"https://developers.theo.live/reference/stop-channel",children:"Stop channel"}),' API call or by pressing the red "stop" button in the management console.']}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-curl",children:"curl --location --request POST 'https://api.theo.live/channels/{channel-id}/stop' \\\n--header 'Authorization: Basic dG9rZW46c2VjcmV0' \\\n--header 'Content-Type: application/json'\n"})})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},75791:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/302e789-dashboard-2fb8cc2cbd44158aecaecce517242784.png"},63786:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/467abb8-overview-af2921a960164fe9a345adcd3b0c6cee.PNG"},8122:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/b636bf5-create-channel-7c0497378da8fd1f130ff69d5b4690bf.PNG"},91574:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/cbe288c-start-a20b2ac2a86a4545e5fd0a7db8b767d7.PNG"},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return r}});var a=n(67294);let i={},o=a.createContext(i);function r(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);