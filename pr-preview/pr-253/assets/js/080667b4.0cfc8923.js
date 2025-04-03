"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["8485"],{52309:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"how-to-guides/cast/chromecast/sending-messages-from-to-sender-to-from-receiver","title":"Sending messages from/to Sender to/from Receiver","description":"This article will explain how to send data to an active receiver and how to respond on the receiver.","source":"@site/theoplayer/how-to-guides/03-cast/01-chromecast/04-sending-messages-from-to-sender-to-from-receiver.md","sourceDirName":"how-to-guides/03-cast/01-chromecast","slug":"/how-to-guides/cast/chromecast/sending-messages-from-to-sender-to-from-receiver","permalink":"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/cast/chromecast/sending-messages-from-to-sender-to-from-receiver","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/03-cast/01-chromecast/04-sending-messages-from-to-sender-to-from-receiver.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to configure a different stream to Chromecast","permalink":"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/cast/chromecast/how-to-configure-to-a-different-stream"},"next":{"title":"Pass subtitle selection on to Chromecast","permalink":"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/cast/chromecast/pass-subtitle-section-on-to-chromecast"}}'),a=n("85893"),t=n("50065");let c={},o="Sending messages from/to Sender to/from Receiver",i={},d=[{value:"Send data to the receiver",id:"send-data-to-the-receiver",level:2},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",level:5},{value:"Receive data from the receiver",id:"receive-data-from-the-receiver",level:2},{value:"Web SDK",id:"web-sdk-1",level:5},{value:"Android SDK",id:"android-sdk-1",level:5},{value:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",level:5},{value:"Receive data on the receiver",id:"receive-data-on-the-receiver",level:2},{value:"Send data from the receiver",id:"send-data-from-the-receiver",level:2},{value:"Related articles",id:"related-articles",level:2}];function l(e){let s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"sending-messages-fromto-sender-tofrom-receiver",children:"Sending messages from/to Sender to/from Receiver"})}),"\n",(0,a.jsx)(s.p,{children:"This article will explain how to send data to an active receiver and how to respond on the receiver."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"On our Web SDK, this functionality was implemented from 2.79.0 onwards."})}),"\n",(0,a.jsx)(s.h2,{id:"send-data-to-the-receiver",children:"Send data to the receiver"}),"\n",(0,a.jsx)(s.p,{children:"The Google Cast SDK has a global object that everyone can access. This global object is also being used by THEOplayer. The general idea is to retrieve the current active cast session and send a message on a specific namespace."}),"\n",(0,a.jsx)(s.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"// Retrieve the current cast session\nvar castSession = cast.framework.CastContext.getInstance().getCurrentSession();\n// Send message on defined namespace channel\ncastSession.sendMessage('namespace', 'message');\n"})}),"\n",(0,a.jsx)(s.p,{children:"Reference:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/cast/docs/reference/chrome/cast.framework.CastSession",children:"https://developers.google.com/cast/docs/reference/chrome/cast.framework.CastSession"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/cast/docs/reference/chrome/cast.framework.CastSession#sendMessage",children:"https://developers.google.com/cast/docs/reference/chrome/cast.framework.CastSession#sendMessage"})}),"\n"]}),"\n",(0,a.jsx)(s.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'// Retrieve the current cast session\nCastSession castSession = CastContext.getSharedInstance(this).getSessionManager().getCurrentCastSession();\n// Send message on defined namespace channel\ncastSession.sendMessage("namespace", "message");\n'})}),"\n",(0,a.jsx)(s.p,{children:"Reference:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/android/reference/com/google/android/gms/cast/framework/CastSession",children:"https://developers.google.com/android/reference/com/google/android/gms/cast/framework/CastSession"})}),"\n"]}),"\n",(0,a.jsx)(s.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,a.jsx)(s.p,{children:"On iOS, we need a component that implements the GCKGenericChannelDelegate protocol."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-swift",children:'// Retrieve the current cast session\nlet castSession = GCKCastContext.sharedInstance().sessionManager.currenCastSession\n// Create the defined namespace channel\nlet channel = GCKGenericChannel(namespace: "namespace")\n// Set the delegate for the namespace channel (GCKGenericChannelDelegate)\nchannel.delegate = self\n// Add the channel to the current cast session\ncastSession?.add(channel)\n// Send message on channel (the error parameter is a pointer at which to store the error result, this may be nil)\nchannel.sendTextMessage("message", error: nil)\n'})}),"\n",(0,a.jsx)(s.p,{children:"Reference:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/cast/docs/reference/ios/protocol_g_c_k_generic_channel_delegate-p",children:"https://developers.google.com/cast/docs/reference/ios/protocol_g_c_k_generic_channel_delegate-p"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_cast_session",children:"https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_cast_session"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_generic_channel",children:"https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_generic_channel"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_cast_session.html#a3514b6933a579d4255702375f542c16a",children:"https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_cast_session.html#a3514b6933a579d4255702375f542c16a"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_cast_channel.html#ab7f595487ce145f38b2e82e55126789b",children:"https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_cast_channel.html#ab7f595487ce145f38b2e82e55126789b"})}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"receive-data-from-the-receiver",children:"Receive data from the receiver"}),"\n",(0,a.jsx)(s.p,{children:"The general idea is to retrieve the current active cast session and add an event listener on the specific namespace."}),"\n",(0,a.jsx)(s.h5,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"// Retrieve the current cast session\nvar castSession = cast.framework.CastContext.getInstance().getCurrentSession();\n// Add an event listener to the defined namespace channel\ncastSession.addMessageListener('namespace', (namespace, message) => {\n  console.log(namespace, message);\n});\n"})}),"\n",(0,a.jsx)(s.p,{children:"Reference:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/cast/docs/reference/chrome/cast.framework.CastSession#addMessageListener",children:"https://developers.google.com/cast/docs/reference/chrome/cast.framework.CastSession#addMessageListener"})}),"\n"]}),"\n",(0,a.jsx)(s.h5,{id:"android-sdk-1",children:"Android SDK"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'// Retrieve the current cast session\nCastSession castSession = CastContext.getSharedInstance(this).getSessionManager().getCurrentCastSession();\n// Create callback handler\nCast.MessageReceivedCallback callback = new Cast.MessageReceivedCallback() {\n    @Override\n    public void onMessageReceived(CastDevice castDevice, String namespace, String message) {\n        // Do something with the message\n    }\n};\n// Add the message listener to the current cast session\ncastSession.setMessageReceivedCallbacks("namespace", callback);\n'})}),"\n",(0,a.jsx)(s.p,{children:"Reference:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/android/reference/com/google/android/gms/cast/framework/CastSession.html#setMessageReceivedCallbacks(java.lang.String,%20com.google.android.gms.cast.Cast.MessageReceivedCallback)",children:"https://developers.google.com/android/reference/com/google/android/gms/cast/framework/CastSession.html#setMessageReceivedCallbacks(java.lang.String,%20com.google.android.gms.cast.Cast.MessageReceivedCallback)"})}),"\n"]}),"\n",(0,a.jsx)(s.h5,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-1",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,a.jsx)(s.p,{children:"The delegate of the channel will handle the receiving of messages."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-swift",children:'extension ChromecastController : GCKGenericChannelDelegate {\n    func cast(_ channel: GCKGenericChannel, didReceiveTextMessage message: String, withNamespace protocolNamespace: String) {\n        print("Channel didReceiveTextMessage", message)\n    }\n}\n'})}),"\n",(0,a.jsx)(s.p,{children:"Reference:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/cast/docs/reference/ios/protocol_g_c_k_generic_channel_delegate-p",children:"https://developers.google.com/cast/docs/reference/ios/protocol_g_c_k_generic_channel_delegate-p"})}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"receive-data-on-the-receiver",children:"Receive data on the receiver"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.em,{children:"This example is for receiver version 2."})}),"\n",(0,a.jsxs)(s.p,{children:["The general idea is to retrieve the receiver manager and add a message listener for the specific namespace. ",(0,a.jsx)(s.strong,{children:"This needs to be done before a THEOplayer instance is created. THEOplayer will call the start method of the receiverManager on initialization."})]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"// Retrieve the cast receiver manager\nvar castReceiverManager = cast.receiver.CastReceiverManager.getInstance();\n// Retrieve the message bus from the cast receiver manager\nvar messageBus = castReceiverManager.getCastMessageBus('namespace');\n// Add message listener to the message bus\nmessageBus.onMessage = function (event) {\n  console.log(event);\n};\n"})}),"\n",(0,a.jsx)(s.p,{children:"Reference:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus",children:"https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus#onMessage",children:"https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus#onMessage"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus.Event",children:"https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus.Event"})}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"send-data-from-the-receiver",children:"Send data from the receiver"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.em,{children:"This example is for receiver version 2."})}),"\n",(0,a.jsx)(s.p,{children:"There are multiple possibilities to send data from the receiver:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"When a message is received on the receiver, you can answer the sender"}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Broadcast to all connected senders"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"// 1.\nmessageBus.onMessage = function (event) {\n  messageBus.send(event.senderId, 'message');\n};\n// 2.\nmessageBus.broadcast('message');\n"})}),"\n",(0,a.jsx)(s.p,{children:"Reference:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus#broadcast",children:"https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus#broadcast"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus#send",children:"https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastMessageBus#send"})}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/cast/chromecast/pass-subtitle-section-on-to-chromecast",children:"Pass subtitle selection on to Chromecast"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"/documentation/pr-preview/pr-253/theoplayer/getting-started/sdks/chromecast/getting-started",children:"Chromecast SDK Setup"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/cast/chromecast/how-to-configure-to-a-different-stream",children:"How to configure a different stream to Chromecast"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"/documentation/pr-preview/pr-253/theoplayer/how-to-guides/cast/chromecast/connecting-from-custom-sender-applications",children:"Connecting from custom Sender applications"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},50065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return c}});var r=n(67294);let a={},t=r.createContext(a);function c(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);