"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["88861"],{13744:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"sample-apps/command-line-interface","title":"Command Line Interface","description":"Overview","source":"@site/millicast/sample-apps/command-line-interface.md","sourceDirName":"sample-apps","slug":"/command-line-interface","permalink":"/documentation/pr-preview/pr-256/millicast/command-line-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/sample-apps/command-line-interface.md","tags":[],"version":"current","frontMatter":{"title":"Command Line Interface","slug":"/command-line-interface"},"sidebar":"millicast","previous":{"title":"Studio and Player apps","permalink":"/documentation/pr-preview/pr-256/millicast/client-products"},"next":{"title":"iOS Viewer","permalink":"/documentation/pr-preview/pr-256/millicast/sample-apps-ios-viewer"}}'),s=i("85893"),a=i("50065");let r={title:"Command Line Interface",slug:"/command-line-interface"},o=void 0,l={},c=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Using the CLI",id:"using-the-cli",level:2},{value:"List",id:"list",level:3},{value:"Manage your configuration",id:"manage-your-configuration",level:3},{value:"Setup a basic configuration",id:"setup-a-basic-configuration",level:4},{value:"Custom configuration",id:"custom-configuration",level:4},{value:"Publish / Subscribe",id:"publish--subscribe",level:3},{value:"Errors that can happen",id:"errors-that-can-happen",level:3},{value:"Failed to initialize ADM",id:"failed-to-initialize-adm",level:4}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"This is the Command Line Interface (CLI) by which you can interact with the Millicast Platform from your terminal."}),"\n",(0,s.jsx)(n.p,{children:"This includes getting media sources, capturing, publishing (with or without Scalable Video Coding and simulcast), subscribing, and directing output to NDI, and Blackmagic Decklink cards' SDI and HDMI."}),"\n",(0,s.jsxs)(n.p,{children:["The CLI also allows saving of config in a file and autocompletion on some platforms. More details can be found on this ",(0,s.jsx)(n.a,{href:"https://github.com/millicast/millicast-cli#readme",children:"readme"}),". Get the CLI ",(0,s.jsx)(n.a,{href:"https://github.com/millicast/millicast-cli/releases",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The CLI is currently supported on the following platforms."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Platform"}),(0,s.jsx)(n.th,{children:"Versions"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Windows"}),(0,s.jsx)(n.td,{children:"Win10"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MacOS"}),(0,s.jsxs)(n.td,{children:["_ Catalina (Intel)",(0,s.jsx)("br",{}),"_ Big Sur (Intel)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Linux"}),(0,s.jsx)(n.td,{children:"Ubuntu 20"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to the instructions here ",(0,s.jsx)(n.a,{href:"https://github.com/millicast/millicast-cli#readme",children:"readme"})," to install the CLI on your system."]}),"\n",(0,s.jsx)(n.h2,{id:"using-the-cli",children:"Using the CLI"}),"\n",(0,s.jsxs)(n.p,{children:["The CLI executable is named ",(0,s.jsx)(n.code,{children:"mccli"})," (for MilliCast Command Line Interface).\nTo check all the available commands and what they do, show the help by typing"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mccli help\n"})}),"\n",(0,s.jsx)(n.p,{children:"For now the auto-completion is only available for BASH."}),"\n",(0,s.jsx)(n.p,{children:"With the CLI, you have a command to list available sources, setup a configuration to publish/subscribe with the desired source and your Dolby.io Real-time Streaming credentials, and have the ability to switch between several different configuration."}),"\n",(0,s.jsx)(n.h3,{id:"list",children:"List"}),"\n",(0,s.jsx)(n.p,{children:"With this command, you can list all the input or output sources available and supported codecs.\nBasically, you have two categories : audio and video."}),"\n",(0,s.jsx)(n.p,{children:"So you first need to specify the category, then specify the info you want to get separated by a '.'.\nFor instance, if you want to list all the video input sources just type :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mccli list video.source\n"})}),"\n",(0,s.jsx)(n.p,{children:'All sources name are prefixed by their type followed by "://". After this prefix, you can see their actual name.\nFor video, you can see these prefixes'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"monitor://"})," : This is to capture your entire screen"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"app://"})," : Capture a specific window of an app open on your computer"]}),"\n",(0,s.jsxs)(n.li,{children:['"',(0,s.jsx)(n.strong,{children:'device://"'})," : Camera connected to the computer"]}),"\n",(0,s.jsxs)(n.li,{children:['"',(0,s.jsx)(n.strong,{children:'decklink://"'})," : a DeckLink device."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ndi://"})," : NDI video source"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For audio, you can get"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"mic://"})," : for microphone"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'device://"'})," : for playback device"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ndi://"}),' and "',(0,s.jsx)(n.strong,{children:"decklink://"})," : same as video."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We will now see how to select one of the source to configure the session."}),"\n",(0,s.jsx)(n.h3,{id:"manage-your-configuration",children:"Manage your configuration"}),"\n",(0,s.jsx)(n.h4,{id:"setup-a-basic-configuration",children:"Setup a basic configuration"}),"\n",(0,s.jsxs)(n.p,{children:["With the ",(0,s.jsx)(n.em,{children:"config"})," command, you can set up your configuration.\nThere is two categories, ",(0,s.jsx)(n.strong,{children:"credentials"})," and ",(0,s.jsx)(n.strong,{children:"media"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The credentials are related to your Dolby.io Real-time Streaming account : stream name, account id ...\nYou can find this information on your Dolby.io dashboard."}),"\n",(0,s.jsx)(n.p,{children:"So, to set the stream name for example :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'mccli config credentials.stream_name "kyhuh"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can see the other field in the help to set up completely your Dolby.io Real-time Streaming credentials."}),"\n",(0,s.jsxs)(n.p,{children:["Concerning the media, you have two sub-categories, audio and video, with the exact same fields as the list command.\nYou must copy/paste the name of the source you want use as listed by the ",(0,s.jsx)(n.strong,{children:"list"})," command, and put that name between quote."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ mccli list video.source\n* ndi://NDI_SOURCE_1\n* ndi://NDI_SOURCE_2\n\n$ mccli config media.video.source "ndi://NDI_SOURCE_1"\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For both ",(0,s.jsx)(n.strong,{children:"credentials"})," and ",(0,s.jsx)(n.strong,{children:"media"}),", if you do not specify a value, it will display the current value :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ mccli config media.video.source\nvideo.source = "ndi://NDI_SOURCE_1"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"custom-configuration",children:"Custom configuration"}),"\n",(0,s.jsx)(n.p,{children:"You are able to setup several configurations and switch between them. For example, have a fixed configuration for a specific stream name, or with a different camera."}),"\n",(0,s.jsx)(n.p,{children:"In order to do that, first add your config with your custom name."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ mccli config credentials add custom_name\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then, you have to use it so it can be effective."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ mccli config credentials use custom_name\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, every change you made in your credentials will be saved for that config."}),"\n",(0,s.jsx)(n.p,{children:"If you want to remove it :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ mccli config credentials remove custom_name\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note, that config is only for credentials. You can create one custom config per category."}),"\n",(0,s.jsx)(n.p,{children:'There default config, the one you are using before using any custom config, is named "default". You can switch back to it at any time, without removing the other :'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ mccli config credentials use default\n"})}),"\n",(0,s.jsx)(n.h3,{id:"publish--subscribe",children:"Publish / Subscribe"}),"\n",(0,s.jsx)(n.p,{children:"Just run :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mccli publish\n"})}),"\n",(0,s.jsx)(n.p,{children:"(replace publish with subscribe if you want to subscribe).\nYou can specify a set of options. See the help for those."}),"\n",(0,s.jsx)(n.p,{children:"If you did not configure the media to use, it will publish the first source found when getting the available sources, and same for the codecs (usually VP8 for video and opus for audio by default)."}),"\n",(0,s.jsx)(n.p,{children:"Once the publish is successful, you will stay in a blocking state as long as it is publishing. To stop publishing, either type 'q' and then press enter, or send an EOF signal (CTRL-D on bash/zsh)."}),"\n",(0,s.jsx)(n.h3,{id:"errors-that-can-happen",children:"Errors that can happen"}),"\n",(0,s.jsx)(n.h4,{id:"failed-to-initialize-adm",children:"Failed to initialize ADM"}),"\n",(0,s.jsx)(n.p,{children:"When using the CLI over SSH on Linux, this error can happen:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"##\n## Fatal error in: ../../media/engine/adm_helpers.cc, line 39\n## last system error: 88\n## Check failed: 0 == adm->Init() (0 vs. -1)\n## Failed to initialize the ADM.Aborted (core dumped)\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is because of the linux audio stack not initialized when using ssh.\nYou can fix it by, first, if that was not the case, enable X11 forwarding when connecting to SSH :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ssh -X user@host\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then run these commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pax11publish -r\npulseaudio --start\n"})}),"\n",(0,s.jsx)(n.p,{children:"This should solve the problem."})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var t=i(67294);let s={},a=t.createContext(s);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);