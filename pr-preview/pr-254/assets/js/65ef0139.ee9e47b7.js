"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["95545"],{20642:function(e,t,i){i.r(t),i.d(t,{default:()=>d,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"client-sdks/ios/ios-getting-started-with-publishing","title":"Getting Started with Publishing","description":"Follow these steps to add the publishing capability to your application.","source":"@site/millicast/client-sdks/ios/ios-getting-started-with-publishing.md","sourceDirName":"client-sdks/ios","slug":"/ios-getting-started-with-publishing","permalink":"/documentation/pr-preview/pr-254/millicast/ios-getting-started-with-publishing","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/client-sdks/ios/ios-getting-started-with-publishing.md","tags":[],"version":"current","frontMatter":{"title":"Getting Started with Publishing","slug":"/ios-getting-started-with-publishing"},"sidebar":"millicast","previous":{"title":"iOS","permalink":"/documentation/pr-preview/pr-254/millicast/ios"},"next":{"title":"Getting Started with Subscribing","permalink":"/documentation/pr-preview/pr-254/millicast/ios-getting-started-with-subscribing"}}'),n=i("85893"),a=i("50065");let l={title:"Getting Started with Publishing",slug:"/ios-getting-started-with-publishing"},r=void 0,o={},c=[{value:"1. Capture audio and video",id:"1-capture-audio-and-video",level:2},{value:"2. Publish a stream",id:"2-publish-a-stream",level:2},{value:"2.1 Instantiate a publisher",id:"21-instantiate-a-publisher",level:3},{value:"2.2 Set publisher credentials",id:"22-set-publisher-credentials",level:3},{value:"2.3 Add video and audio tracks to the publisher",id:"23-add-video-and-audio-tracks-to-the-publisher",level:3},{value:"2.4 Configure publishing options",id:"24-configure-publishing-options",level:3},{value:"2.5 Publish your stream",id:"25-publish-your-stream",level:3},{value:"3. Observe state changes",id:"3-observe-state-changes",level:2},{value:"3.1 Connection state to the Millicast service",id:"31-connection-state-to-the-millicast-service",level:3},{value:"3.2 Publishing state",id:"32-publishing-state",level:3},{value:"3.3 Viewers of your stream",id:"33-viewers-of-your-stream",level:3},{value:"4. Collect WebRTC statistics",id:"4-collect-webrtc-statistics",level:2},{value:"5. Disable automatic reconnection",id:"5-disable-automatic-reconnection",level:2},{value:"6. Error handling",id:"6-error-handling",level:2},{value:"7. Stop publishing",id:"7-stop-publishing",level:2}];function h(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Follow these steps to add the publishing capability to your application."}),"\n",(0,n.jsx)(t.h2,{id:"1-capture-audio-and-video",children:"1. Capture audio and video"}),"\n",(0,n.jsxs)(t.p,{children:["Import ",(0,n.jsx)(t.code,{children:"MillicastSDK"}),", get an array of available audio and video sources, and choose the preferred sources from the list. When you start capturing audio and video, the SDK will return an audio and video track."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'import MillicastSDK\n\n// Configure the audio session for capturing\nlet session = AVAudioSession.sharedInstance()\ntry session.setCategory(\n    .playAndRecord,\n    mode: .videoChat,\n    options: [.mixWithOthers, .allowBluetooth, .allowBluetoothA2DP]\n)\ntry session.setActive(true)\n\n// Create an audio track\nvar audioTrack : MCAudioTrack? = nil\nif\n    let audioSources = MCMedia.getAudioSources(), // Get an array of audio sources\n    !audioSources.isEmpty // There is at least one audio source\n{\n    // Choose the preferred audio source and start capturing\n    let audioSource = audioSources[0]\n    audioTrack = audioSource.startCapture() as? MCAudioTrack\n}\n\n// Create a video track\nvar videoTrack : MCVideoTrack? = nil\nif\n    let videoSources = MCMedia.getVideoSources(), // Get an array of available video sources\n    !videoSources.isEmpty // There is at least one video source\n{\n    // Choose the preferred video source\n    let videoSource = videoSources[0];\n\n    // Get capabilities of the available video sources, such as\n    // width, height, and frame rate of the video sources\n    guard let capabilities = videoSource.getCapabilities() else {\n        fatalError("No capability is available!") // In production replace with a throw\n    }\n\n    let capability = capabilities[0]; // Get the first capability\n    videoSource.setCapability(capability);\n\n    // Start video recording and create a video track\n    videoTrack = videoSource.startCapture() as? MCVideoTrack\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"2-publish-a-stream",children:"2. Publish a stream"}),"\n",(0,n.jsx)(t.h3,{id:"21-instantiate-a-publisher",children:"2.1 Instantiate a publisher"}),"\n",(0,n.jsxs)(t.p,{children:["Create a publisher object of type ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher",children:"MCPublisher"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"let publisher = MCPublisher()\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can optionally implement the ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisherdelegate",children:"MCPublisherDelegate"})," to receive callbacks:"]}),"\n",(0,n.jsxs)(t.p,{children:["You can set this delegate during the initialization of ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher",children:"MCPublisher"})," instead. Ensure to keep the delegate alive throughout the lifetime of the publisher."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"let publisherDelegate = YourPublisherDelegate() // where the `YourPublisherDelegate` is a type that you implement, that conforms to `MCPublisherDelegate`\nlet publisher = MCPublisher(delegate: publisherDelegate)\n"})}),"\n",(0,n.jsx)(t.h3,{id:"22-set-publisher-credentials",children:"2.2 Set publisher credentials"}),"\n",(0,n.jsxs)(t.p,{children:["Create a stream in your Dolby.io developer dashboard or using the Dolby.io Streaming REST API. Then, set the credentials from the dashboard. All of the ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher",children:"MCPublisher"})," APIs are asynchronous, so call them from asynchronous contexts."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'// Get the credentials structure from your publisher instance, fill it in,\n// and set the modified credentials\nlet credentials = MCPublisherCredentials()\ncredentials.streamName = "streamName"; // The name of the stream you want to publish\ncredentials.token = "aefea56153765316754fe"; // The publishing token\ncredentials.apiUrl\n    = "https://director.millicast.com/api/director/publish"; // The publish API URL\n\ndo {\n  try await publisher.setCredentials(credentials);\n} catch MCGenericError.noCredentials {\n  // You have provided incomplete credentials\n  // such as an empty streamName, token, or url\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"23-add-video-and-audio-tracks-to-the-publisher",children:"2.3 Add video and audio tracks to the publisher"}),"\n",(0,n.jsx)(t.p,{children:"To publish media, add to the publisher the tracks that you have captured earlier."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"await publisher.addTrack(with: audioTrack)\nawait publisher.addTrack(with: videoTrack)\n"})}),"\n",(0,n.jsx)(t.h3,{id:"24-configure-publishing-options",children:"2.4 Configure publishing options"}),"\n",(0,n.jsx)(t.p,{children:"Configure publishing options in the publisher, such as selecting the audio and video codecs or enabling multi-source on the publisher."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'let publisherOptions = MCClientOptions()\n\n// Get a list of supported codecs\nif let audioCodecs = MCMedia.getSupportedAudioCodecs() {\n    // Choose the preferred audio codec\n    publisherOptions.audioCodec = audioCodecs[0]\n\n} else {\n    print("No audio codecs available!") // In production, replace it with proper error handling\n}\n\nif let videoCodecs = MCMedia.getSupportedVideoCodecs() {\n    // Choose the preferred video codec\n    publisherOptions.videoCodec = videoCodecs[0]\n\n} else {\n    print("No video codecs available!") // In production, replace it with proper error handling\n}\n\n// To use multi-source, set a source ID of the publisher and\n// enable discontinuous transmission\npublisherOptions.sourceId = "MySource"\npublisherOptions.dtx = true\n\n// Enable stereo\npublisherOptions.stereo = true\n'})}),"\n",(0,n.jsx)(t.h3,{id:"25-publish-your-stream",children:"2.5 Publish your stream"}),"\n",(0,n.jsx)(t.p,{children:"Connect to the Millicast service and publish your streams."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"do {\n  try await publisher.connect()\n  // using publisherOptions from step 2.4\n  try await publisher.publish(with: publisherOptions)\n} catch MCGenericError.restAPIError {\n  // Handle invalid credentials passed to the publisher\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"3-observe-state-changes",children:"3. Observe state changes"}),"\n",(0,n.jsx)(t.p,{children:"There are different publishers that emit events informing you of the state of your stream. Please note, the listeners should be setup before you start publishing so you receive all the events from a publisher."}),"\n",(0,n.jsx)(t.h3,{id:"31-connection-state-to-the-millicast-service",children:"3.1 Connection state to the Millicast service"}),"\n",(0,n.jsxs)(t.p,{children:["To monitor the state of the websocket connection of the publisher, use the ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/websocketstate",children:"websocketState()"}),". This informs you are connected to the Millicast service or when you are disconnected."]}),"\n",(0,n.jsxs)(t.p,{children:["To see the list of possible states refer: ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcconnectionstate",children:"MCConnectionState"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"for await state in publisher.websocketState() {\n  // Log or handle the state change\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can also receive other events on the publisher, like ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/activity",children:"viewer activity"})," and ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/viewercount",children:"viewer count"}),":"]}),"\n",(0,n.jsxs)(t.p,{children:["The delegate equivalent for this event is defined in ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivewebsocketconnectionstate:)",children:"client(_:didreceivewebsocketconnectionstate:)"})]}),"\n",(0,n.jsx)(t.h3,{id:"32-publishing-state",children:"3.2 Publishing state"}),"\n",(0,n.jsxs)(t.p,{children:["To monitor the state of the publishing, listen to the events emitted by ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/peerconnectionstate",children:"peerConnectionState()"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"for await state in publisher.peerConnectionState() {\n  // Log or handle the state change\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The delegate equivalent for this event is defined in ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivertcpeerconnectionstate:)",children:"client(_:didreceivertcpeerconnectionstate:)"})]}),"\n",(0,n.jsx)(t.h3,{id:"33-viewers-of-your-stream",children:"3.3 Viewers of your stream"}),"\n",(0,n.jsxs)(t.p,{children:["Listen to the viewer activity events of your stream using ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/activity",children:"activity()"})," or the combine publisher ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/activitypublisher",children:"activityPublisher"}),".\nThis event can also be listen from the ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisherdelegate/publisherdidreceivefirstvieweractive(_:)",children:"publisherDidReceiveFirstViewerActive(_:)"})," and ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisherdelegate/publisherdidreceivelastviewerinactive(_:)",children:"publisherDidReceiveLastViewerInactive(_:)"})," delegate methods defined in ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisherdelegate",children:"MCPublisherDelegate"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"for await activity in publisher.activity() {\n  case .inactive:\n    // TODO: Received when the last viewer of your stream goes inactive\n    break\n  case .active:\n    // TODO: Received when the first viewer starts viewing your stream\n    break\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Number of viewers viewing your stream in a given time is yet another vital aspect for you as a publisher. To listen to viewer count updates, use ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/viewercount",children:"viewerCount()"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"for await viewerCount in publisher.viewerCount() {\n  // use the `viewerCount` for displaying on the UI\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The Combine Publisher for this event is ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/viewercountpublisher",children:"viewercountpublisher"})," and the delegate equivalent is ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceiveviewercount:)",children:"client(_:didreceiveviewercount:)"})]}),"\n",(0,n.jsx)(t.h2,{id:"4-collect-webrtc-statistics",children:"4. Collect WebRTC statistics"}),"\n",(0,n.jsxs)(t.p,{children:["Set the ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcclient/enablestats(_:completionhandler:)",children:"enableStats"})," method to true to collect statistics."]}),"\n",(0,n.jsxs)(t.p,{children:["WebRTC peer connection statistics can be periodically collected by enabling them through the ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcclient/enablestats(_:completionhandler:)",children:"enableStats"})," method of the publisher. After enabling the statistics, you will get a report every second or at the preset frequency you scheduled through the ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/statsreport",children:"statsReport()"})," async stream or the ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/statsreportpublisher",children:"statsReportPublisher"})," publisher."]}),"\n",(0,n.jsxs)(t.p,{children:["Alternatively use the delegate method",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivestatsreport:)",children:"client(_:didreceivestatsreport:)"})]}),"\n",(0,n.jsxs)(t.p,{children:["The identifiers and way to browse the stats are following the ",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/webrtc-stats/",children:"RTC specification"}),".\nThe report contains the ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcstatsreport",children:"MCStatsReport"})," object, which is a collection of several ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcstats",children:"MCStats"})," objects. They all have a specific type, whether it is inbound, outbound, codec, or media. Inbound is the statistics of incoming transport for the viewer and outbound is a type of outgoing statistics for the publisher."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"await publisher.enableStats(true)\n\nfor await statsReport in publisher.statsReport() {\n    // Parse the stats report for logging or display on to the user interface\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"5-disable-automatic-reconnection",children:"5. Disable automatic reconnection"}),"\n",(0,n.jsx)(t.p,{children:"By default, the publisher and subscriber attempt to reconnect automatically in case of network errors. To disable auto reconnection in connection options, use the following code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"let connectionOptions = MCConnectionOptions()\nconnectionOptions.autoReconnect = false\n\ndo {\n  try await publisher.connect(with: connectionOptions)\n} catch error {\n  //...\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"In the case of network issues when auto reconnection is enabled, the connect method does not return as long as there is no network connection. You can abort the method at any time using the following code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"Task {\n  for await state in publisher.state() {\n    if case .connectionError(let status, let reason) = state {\n      try await publisher.disconnect()\n    }\n  }\n}\n\ndo {\n  try await publisher.connect(with: connectionOptions)\n} catch MCAsyncOperationCancelledError.aborted {\n  // The operation has been aborted by the disconnect call above\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"6-error-handling",children:"6. Error handling"}),"\n",(0,n.jsxs)(t.p,{children:["To listen to the http errors emitted by the publisher, use the ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/httperror",children:"httpError()"})," or it's equivalent combine publisher - ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/httperrorpublisher",children:"httpErrorPublisher()"})]}),"\n",(0,n.jsxs)(t.p,{children:["The emitted error will be of type ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mchttpconnectionerror",children:"MCHttpConnectionError"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"for await error in publisher.httpError() {\n  // Handle http error\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"(or)"}),"\n",(0,n.jsx)(t.p,{children:"Using the combine publisher:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"publisher.httpErrorPublisher()\n  .sink { error in\n      // Handle http error\n  }\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To listen to the signalling errors emitted by the publisher, use the ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/signalingerror",children:"signalingError()"})," or it's equivalent combine publisher - ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/signalingerrorpublisher",children:"signalingErrorPublisher()"})]}),"\n",(0,n.jsxs)(t.p,{children:["The emitted error will be of type ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcsignalingerror",children:"MCSignalingError"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"for await error in publisher.signalingError() {\n  // Handle signalling error\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"(or)"}),"\n",(0,n.jsx)(t.p,{children:"Using the combine publisher:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"publisher.signalingErrorPublisher()\n  .sink { error in\n  // Handle signalling error\n  }\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The delegate methods to receive http and signalling errors are ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivehttpconnectionerror:)",children:"client(_:didReceiveHTTPConnectionError:)"})," and ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcdelegate/client(_:didreceivesignalingerror:)",children:"client(_:didReceiveSignalingError:)"})]}),"\n",(0,n.jsx)(t.h2,{id:"7-stop-publishing",children:"7. Stop publishing"}),"\n",(0,n.jsxs)(t.p,{children:["When you finish publishing your content, stop the publishing by calling ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/unpublish(completionhandler:)",children:"unpublish()"})," and clear the tracks [clearTracks()](",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/cleartracks(completionhandler",children:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcpublisher/cleartracks(completionhandler"}),":). Then disconnect from the millicast server by calling ",(0,n.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/apple/documentation/millicastsdk/mcclient/disconnect(completionhandler:)",children:"disconnect()"})," method."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"// Stop publishing your content\ntry await publisher.unpublish()\n\n// Clears all tracks added to the publisher.\nawait publisher.clearTracks()\n\n// Disconnect the millicast service\ntry await publisher.disconnect()\n"})})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return r},a:function(){return l}});var s=i(67294);let n={},a=s.createContext(n);function l(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);