"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["31788"],{48255:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"client-sdks/android/android-getting-started-with-subscribing","title":"Getting Started with Subscribing","description":"Follow these steps to add the subscribing capability to your application.","source":"@site/millicast/client-sdks/android/android-getting-started-with-subscribing.md","sourceDirName":"client-sdks/android","slug":"/android-getting-started-with-subscribing","permalink":"/documentation/pr-preview/pr-266/millicast/android-getting-started-with-subscribing","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/client-sdks/android/android-getting-started-with-subscribing.md","tags":[],"version":"current","frontMatter":{"title":"Getting Started with Subscribing","slug":"/android-getting-started-with-subscribing"},"sidebar":"millicast","previous":{"title":"Getting Started with Publishing","permalink":"/documentation/pr-preview/pr-266/millicast/android-getting-started-with-publishing"},"next":{"title":"How-to Add Picture in Picture","permalink":"/documentation/pr-preview/pr-266/millicast/android-how-to-add-picture-in-picture"}}'),r=n("85893"),s=n("50065");let a={title:"Getting Started with Subscribing",slug:"/android-getting-started-with-subscribing"},o=void 0,c={},l=[{value:"1. Add SDK to Gradle",id:"1-add-sdk-to-gradle",level:2},{value:"2. Initialize the SDK",id:"2-initialize-the-sdk",level:2},{value:"3. Create a subscriber object",id:"3-create-a-subscriber-object",level:2},{value:"4. Setup your credentials",id:"4-setup-your-credentials",level:2},{value:"5. Subscribe to a stream",id:"5-subscribe-to-a-stream",level:2},{value:"5.1 Connect to the Millicast service",id:"51-connect-to-the-millicast-service",level:3},{value:"5.2 Subscribe with the preferences",id:"52-subscribe-with-the-preferences",level:3},{value:"6. Manage broadcast events",id:"6-manage-broadcast-events",level:2},{value:"6.1 Receive Audio and Video tracks",id:"61-receive-audio-and-video-tracks",level:3},{value:"6.2 Listen to Active/Inactive state of tracks",id:"62-listen-to-activeinactive-state-of-tracks",level:3},{value:"6.3 Receive layer information",id:"63-receive-layer-information",level:3},{value:"7. Listen to Websocket and Peer connection state changes",id:"7-listen-to-websocket-and-peer-connection-state-changes",level:2},{value:"8. Render video on the UI",id:"8-render-video-on-the-ui",level:2},{value:"9. Collecting RTC statistics",id:"9-collecting-rtc-statistics",level:2},{value:"10. Error handling",id:"10-error-handling",level:2},{value:"11. Unsubscribe and disconnect the session",id:"11-unsubscribe-and-disconnect-the-session",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Follow these steps to add the subscribing capability to your application."}),"\n",(0,r.jsx)(t.h2,{id:"1-add-sdk-to-gradle",children:"1. Add SDK to Gradle"}),"\n",(0,r.jsxs)(t.p,{children:["You can get the SDK library from ",(0,r.jsx)(t.a,{href:"https://central.sonatype.com/artifact/com.millicast/millicast-sdk-android",children:"MavenCentral"}),". If you haven't already, add the following to your gradle dependencies."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'implementation("com.millicast:millicast-sdk-android:2.0.0")\n'})}),"\n",(0,r.jsx)(t.h2,{id:"2-initialize-the-sdk",children:"2. Initialize the SDK"}),"\n",(0,r.jsxs)(t.p,{children:["Call the ",(0,r.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/android/android/com.millicast/-core/initialize.html",children:"initialize"})," method to initialize the SDK. This needs to be done only once at the start of the App."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",metastring:'title="Kotlin"',children:"import android.app.Application\nimport com.millicast.Core\n\nclass MainApplication : Application() {\n  override fun onCreate() {\n    super.onCreate()\n    Core.initialize()\n  }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"3-create-a-subscriber-object",children:"3. Create a subscriber object"}),"\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/android/android/com.millicast/-core/create-subscriber.html",children:"createSubscriber"})," method to create a subscriber object."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"launchDefaultScope {\n    // Creating the subscriber\n    val subscriber = Core.createSubscriber()\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"4-setup-your-credentials",children:"4. Setup your credentials"}),"\n",(0,r.jsxs)(t.p,{children:["Get your ",(0,r.jsx)(t.strong,{children:"stream name"})," and ",(0,r.jsx)(t.strong,{children:"stream ID"})," from the dashboard and set them up in the SDK using the ",(0,r.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/set-credentials.html",children:"setCredentials"})," method."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'launchDefaultScope {\n  val credentials = Credential(\n    streamName = "STREAM_NAME",\n    accountId = "ACCOUNT_ID",\n    apiUrl = "https://director.millicast.com/api/director/subscribe"\n  )\n  subscriber.setCredentials(credentials)\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"5-subscribe-to-a-stream",children:"5. Subscribe to a stream"}),"\n",(0,r.jsx)(t.p,{children:"Subscribing a stream includes two steps."}),"\n",(0,r.jsx)(t.h3,{id:"51-connect-to-the-millicast-service",children:"5.1 Connect to the Millicast service"}),"\n",(0,r.jsx)(t.p,{children:"Define your connection options and connect to the Millicast platform."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"launchDefaultScope {\n    // autoReconnect - Set to `true` if you would like the SDK to reconnect to stream on a connection error; for example - when\n    // the network is lost and later restored.\n    val connectionOptions = ConnectionOptions(autoReconnect: true)\n    subscriber.connect(connectionOptions)\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"52-subscribe-with-the-preferences",children:"5.2 Subscribe with the preferences"}),"\n",(0,r.jsx)(t.p,{children:"Once the connection is successful, call the subscribe method with your preferred subscribe options. To monitor the connection state, please refer to the section 7 - Listen to Websocket and Peer connection state changes."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'launchDefaultScope {\n  subscriber.state.map { it.connectionState }.distinctUntilChanged().collect {\n    if (it == SubscriberConnectionState.Connected) {\n        val option = Option(\n        // The main source that will be received by the default media stream\n        pinnedSourceId = "mainSource",\n        // Enables audio multiplexing and denotes the number of audio tracks to receive as Voice Activity Detection (VAD)\n        // multiplexed audio\n        multiplexedAudioTrack = 3U,\n        // Audio streams that should not be included in the multiplex, for example your own audio stream\n        excludedSourceId = arrayOf("excluded")\n        )\n      subscriber.subscribe(option)\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Refer to ",(0,r.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/android/android/com.millicast.subscribers/-option/index.html",children:"Option"})," for more subscriber options."]}),"\n",(0,r.jsx)(t.h2,{id:"6-manage-broadcast-events",children:"6. Manage broadcast events"}),"\n",(0,r.jsx)(t.p,{children:"When broadcast events occur, the SDK publishes the update to one of the flows maintained by the client object. The following Subscriber event listeners are available:"}),"\n",(0,r.jsx)(t.h3,{id:"61-receive-audio-and-video-tracks",children:"6.1 Receive Audio and Video tracks"}),"\n",(0,r.jsxs)(t.p,{children:["RemoteTrack is a fundamental entity that enables us to view a stream. It can either be a video track (RemoteVideoTrack) or an audio track (RemoteAudioTrack). You can just call enableAsync() or disableAsync() to enable or disable the track.\nYou should store the tracks and renderers for later use.\nImportant: Audio and Video tracks of the same source will have the same ",(0,r.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/android/android/com.millicast.publishers/-option/source-id.html",children:"sourceId"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"launch {\n  subscriber.onRemoteTrack.collect { trackHolder ->\n      when (trackHolder) {\n          is RemoteAudioTrack -> {\n          // Store audio tracks for later usage\n            audioTracks.add(trackHolder)\n          }\n\n          is RemoteVideoTrack -> {\n            // Store video tracks for later usage\n            videoTracks.add(trackHolder)\n          }\n      }\n  }\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"62-listen-to-activeinactive-state-of-tracks",children:"6.2 Listen to Active/Inactive state of tracks"}),"\n",(0,r.jsxs)(t.p,{children:["For each RemoteTrack, listen to its active and inactive state by moniting its ",(0,r.jsx)(t.code,{children:"onState"})," stateFlow. This will receive a RemoteVideoTrackState object with an ",(0,r.jsx)(t.code,{children:"isActive"})," field, which signals if that track is available for playback or not.\nNote: A video track receives video frames only when its enabled."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'launch{\n  remoteTrack.onState.collect { trackState ->\n    Log.d(TAG, "onVideoTrack state ${trackState.mid}, ${trackState.isActive}")\n    if (!trackState.isActive) {\n        // Optional.\n        // The SDK automatically restores the state of the track when it transitions to `active` from an `inactive` state.\n        // You can optionally disable the video track when it becomes inactive. This step is optional. This gives you control on when to enable the track when it comes back active.\n        videoTrack.disableAsync()\n    } else {\n        // Optional.\n        // If you choose to disable a track when it became inactive, you have to enable the video track back after it is active again.\n        // At any point in time when you wish to start receive video from the track call the following.\n        videoTrack.enableAsync(videoSink = videoSink)\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Same can be done for AudioTrack."}),"\n",(0,r.jsx)(t.h3,{id:"63-receive-layer-information",children:"6.3 Receive layer information"}),"\n",(0,r.jsx)(t.p,{children:"If your video track has multiple layers(spatial or temporal), use the layers stateFlow to receive the list of active layers.\nTo receive layers, collect Layers data emitted from RemoteVideoTrackState.\nTo select a particular layer, re-enable the track by passing the layer that you would like to select."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"videoTrack.onState.collect { trackState ->\n  trackState.layers?.let { layers ->\n    video.enableAsync(videoSink = videoSink, layer = layers.activeLayers[0])\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"7-listen-to-websocket-and-peer-connection-state-changes",children:"7. Listen to Websocket and Peer connection state changes"}),"\n",(0,r.jsx)(t.p,{children:"When broadcast events occur, the SDK publishes the update to one of the flows maintained by the client object. The following Subscriber event listeners are available:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"subscriber.state.map { it.connectionState }.distinctUntilChanged()\n  .collect { state ->\n      when (state) {\n          SubscriberConnectionState.Connected -> {}\n          SubscriberConnectionState.Connecting -> {}\n          SubscriberConnectionState.Disconnected -> {}\n          is SubscriberConnectionState.DisconnectedError -> {}\n          SubscriberConnectionState.Disconnecting -> {}\n          is SubscriberConnectionState.Error -> {}\n          SubscriberConnectionState.Stopped -> {}\n          SubscriberConnectionState.Subscribed -> {}\n      }\n  }\n\nsubscriber.state.map { it.websocketConnectionState }.distinctUntilChanged().collect {}\nsubscriber.state.map { it.peerConnectionState }.distinctUntilChanged().collect {}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"8-render-video-on-the-ui",children:"8. Render video on the UI"}),"\n",(0,r.jsx)(t.p,{children:"The SDK provides a custom View (TextureViewRenderer) for rendering a video track. Use TextureViewRenderer as in the example below:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"Box(modifier = Modifier.fillMaxSize()) {\n  AndroidView(\n      modifier = Modifier\n          .aspectRatio(16F / 9)\n          .align(Alignment.Center),\n      factory = {\n          TextureViewRenderer(context).apply {\n              init(Media.eglBaseContext, null)\n          }\n      },\n      update = { view ->\n          view.setScalingType(RendererCommon.ScalingType.SCALE_ASPECT_FIT)\n            videoTrack.enableAsync(videoSink = view)\n      }\n  )\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"9-collecting-rtc-statistics",children:"9. Collecting RTC statistics"}),"\n",(0,r.jsxs)(t.p,{children:["You can periodically collect the WebRTC peer connection statistics if you enable them through the enableStats() method of the subscriber. After enabling the statistics, you will get a report every second through the rtcStatsReport stateFlow.\nThe identifiers and way to browse the stats are following the ",(0,r.jsx)(t.a,{href:"https://www.w3.org/TR/webrtc-stats/",children:"RTC specification"}),". The report contains the RtsReport object, which is a collection of several RtpStream objects. They all have a specific type, whether it is inbound, outbound, codec, or media. Inbound is the statistics of incoming transport for the viewer and outbound is a type of outgoing statistics for the publisher."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"subscriber.rtcStatsReport.collect { report ->\n  // Parse the stats report for logging or display on to the user interface\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"10-error-handling",children:"10. Error handling"}),"\n",(0,r.jsx)(t.p,{children:"To listen to the errors emitted by the subscriber, listen to the connectionState of the subscriber.state as described in section 7. In addition to that there are additional two state events that can be monitored for errors. Subscriber also provides notification for any signaling error in subscriber.signalingError."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"subscriber.state.map { it.peerConnectionState }.distinctUntilChanged().collect {}\nsubscriber.state.map { it.websocketConnectionState }.distinctUntilChanged().collect {}\n\nsubscriber.signalingError.collect {}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"11-unsubscribe-and-disconnect-the-session",children:"11. Unsubscribe and disconnect the session"}),"\n",(0,r.jsxs)(t.p,{children:["And finally, when you have finished viewing the stream, stop the subscription by calling ",(0,r.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/android/android/com.millicast/-subscriber/unsubscribe.html",children:"unsubscribe()"})," which tells the streaming server that the subscriber is no longer interested in receiving audio and video content. Then disconnect the websocket connection with the server by calling the ",(0,r.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/android/android/com.millicast/-client/disconnect.html",children:"disconnect()"})," method."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"subscriber.unsubscribe()\nsubscriber.disconnect()\n"})}),"\n",(0,r.jsxs)(t.p,{children:["And in some use cases such as subscribing to a new stream, within the same fragment or composable screen, the best practice would be to call ",(0,r.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/android/android/com.millicast/-client/release.html",children:"subscriber.release()"}),".This will internally release all listeners and resources so there is no need to call unsubscribe or disconnect. Then for a new stream, create a new subscriber instance and follow the same connection and subscription process described above. Also consider releasing the VideoSink and TextureViewRenderer to inform the SDK to stop rendering frames on that surface."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that in this case if you want to release everything and create a new subscriber, consider also releasing the VideoSink listener and the ",(0,r.jsx)(t.a,{href:"https://millicast.github.io/doc/latest/android/android/com.millicast.android.compose/-texture-view-renderer.html",children:"TextureViewRenderer"}),". This way you are telling the SDK to stop rendering video frames on the surface."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"subscriber.release() // Always make sure that in this case the subscriber instance is released 100%, so it is recommended to call it directly before creating //a new subscriber\n\n// And in between it is recommended to release your rendererView and remove the Video Sink listener from the videoTrack\nvideoTrack.removeVideoSink(textureRendererView)\ntextureRendererView.release()\n // Now everything is cleaned well so that you can create a new subscriber.\nsubscriber = Core.createSubscriber()\n"})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var i=n(67294);let r={},s=i.createContext(r);function a(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);