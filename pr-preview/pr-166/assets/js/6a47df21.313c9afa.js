"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["27837"],{92376:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>s});var t=JSON.parse('{"id":"how-to-guides/miscellaneous/vr","title":"VR","description":"This article describes how to implement common use cases related to VR / 360 - for example how to use the API.","source":"@site/theoplayer/how-to-guides/07-miscellaneous/04-vr.md","sourceDirName":"how-to-guides/07-miscellaneous","slug":"/how-to-guides/miscellaneous/vr","permalink":"/documentation/pr-preview/pr-166/theoplayer/how-to-guides/miscellaneous/vr","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/07-miscellaneous/04-vr.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"roku","previous":{"title":"Up Next","permalink":"/documentation/pr-preview/pr-166/theoplayer/how-to-guides/miscellaneous/up-next"},"next":{"title":"Web Audio","permalink":"/documentation/pr-preview/pr-166/theoplayer/how-to-guides/miscellaneous/webaudio"}}'),r=i("85893"),o=i("50065");let s={},a="VR",l={},d=[{value:"360 / VR",id:"360--vr",level:2},{value:"SDKs",id:"sdks",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Initialization",id:"initialization",level:3},{value:"Web SDK",id:"web-sdk",level:5},{value:"Android SDK",id:"android-sdk",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5},{value:"iOS SDK",id:"ios-sdk",level:5},{value:"Legacy iOS SDK (4.12.x)",id:"legacy-ios-sdk-412x",level:5},{value:"Manipulating the viewing direction within a 360 video",id:"manipulating-the-viewing-direction-within-a-360-video",level:3},{value:"Web SDK",id:"web-sdk-1",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x-1",level:5},{value:"Legacy iOS SDK (4.12.x)",id:"legacy-ios-sdk-412x-1",level:5},{value:"Setting stereoMode",id:"setting-stereomode",level:3},{value:"Web SDK",id:"web-sdk-2",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x-2",level:5},{value:"Legacy iOS SDK (4.12.x)",id:"legacy-ios-sdk-412x-2",level:5},{value:"Listening to VR related events",id:"listening-to-vr-related-events",level:3},{value:"Web SDK",id:"web-sdk-3",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x-3",level:5},{value:"Legacy iOS SDK (4.12.x)",id:"legacy-ios-sdk-412x-3",level:5},{value:"Request Permissions",id:"request-permissions",level:2},{value:"Sample Application",id:"sample-application",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"vr",children:"VR"})}),"\n",(0,r.jsx)(n.p,{children:"This article describes how to implement common use cases related to VR / 360 - for example how to use the API."}),"\n",(0,r.jsx)(n.p,{children:"The VR feature enables video to be rendered in a VR / 360 - experience. The input should be a video source in an equirectangular format, and the output is a container where viewers can navigate around the scene."}),"\n",(0,r.jsx)(n.p,{children:"The VR feature exposes the VR API. This API allows developers to change the pitch, direction and more."}),"\n",(0,r.jsx)(n.h2,{id:"360--vr",children:"360 / VR"}),"\n",(0,r.jsx)(n.p,{children:"360-degree video is a type of video where every angle from a single viewpoint is recorded and can played back. It offers a great sense of immersion for panoramic imagery or simulation purposes."}),"\n",(0,r.jsx)(n.p,{children:"THEOplayer allows you to render these videos in your browser or on your mobile device, with a full set of API controls to control the viewing direction."}),"\n",(0,r.jsx)(n.p,{children:'Next to the spherical or 360\xb0 video playback, THEOplayer also offers integration with VR devices through stereoscopic view, dubbed "stereo mode".'}),"\n",(0,r.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Yes",(0,r.jsx)("sup",{children:"*"})]}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Yes",(0,r.jsx)("sup",{children:"*"})]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("sup",{children:"*"})," For the moment, only supported on the legacy Android and iOS SDKs (4.12.x). Please reach out to us for VR support on the native SDKs."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.h3,{id:"initialization",children:"Initialization"}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk",children:"Web SDK"}),"\n",(0,r.jsxs)(n.p,{children:["To indicate that your stream contains 360\xb0 content, pass a valid ",(0,r.jsx)(n.code,{children:"VRConfiguration"})," as ",(0,r.jsx)(n.code,{children:"vr"})," property when setting ",(0,r.jsx)(n.code,{children:"player.source"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For the full list of properties and events related to 360\xb0 video and VR, go to our ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/web/interfaces/VR.html",children:"API"})," page."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"var element = document.querySelector('.theoplayer');\nvar player = new THEOplayer.Player(element, {\n  fluid: true,\n});\n\nplayer.vr.useDeviceMotionControls = true;\n\nplayer.source = {\n  sources: {\n    type: 'application/x-mpegurl',\n    src: 'http://example.com/example-stream.m3u8',\n  },\n  vr: {\n    360: true,\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h5,{id:"android-sdk",children:"Android SDK"}),"\n",(0,r.jsx)(n.p,{children:"Currently VR is not supported on native Android SDK. Please reach out to us for VR support on the native SDKs."}),"\n",(0,r.jsx)(n.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,r.jsxs)(n.p,{children:["To indicate that your stream contains 360\xb0 content. Create a ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/source/vr/VRConfiguration.html",children:"VRConfiguration"})," variable and set it in the ",(0,r.jsx)(n.code,{children:"SourceDescription"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"VRConfiguration vrConfiguration = new VRConfiguration(true);\n\nSourceDescription sourceDescription = SourceDescription.Builder\n                .sourceDescription(typedSource)\n                .vrConfiguration(vrConfiguration)\n                .build();\n\n        tpv.getPlayer().setSource(sourceDescription);\n"})}),"\n",(0,r.jsx)(n.h5,{id:"ios-sdk",children:"iOS SDK"}),"\n",(0,r.jsx)(n.p,{children:"Currently VR is not supported on native iOS SDK. Please reach out to us for VR support on the native SDKs."}),"\n",(0,r.jsx)(n.h5,{id:"legacy-ios-sdk-412x",children:"Legacy iOS SDK (4.12.x)"}),"\n",(0,r.jsxs)(n.p,{children:["To indicate that your stream contains 360\xb0 content, set the ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Classes/SourceDescription.html#/c:@CM@THEOplayerSDK@objc(cs)THEOplayerSourceDescription(py)vr",children:"VRConfiguration"})," property when setting the ",(0,r.jsx)(n.code,{children:"SourceDescription"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'var sampleSource: SourceDescription {\n\n    let src = "https://example.com/example-stream.m3u8"\n    let stream = "application/x-mpegurl"\n    let vr = VRConfiguration(vr360: true, stereoMode: nil)\n    return SourceDescription(\n        source: TypedSource(\n            src: src,\n            type: stream\n            ),\n        vr: vr\n        )\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"manipulating-the-viewing-direction-within-a-360-video",children:"Manipulating the viewing direction within a 360 video"}),"\n",(0,r.jsx)(n.p,{children:"Below you can find an example querying the VR viewing direction and one setting the viewing direction."}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk-1",children:"Web SDK"}),"\n",(0,r.jsx)(n.p,{children:"A object contains the settings for 360 VR video playback. (Only available on iOS 11+)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"/* reading the current position */\nvar currentViewingDirection = player.vr.direction; // e.g. {pitch: 0, yaw: 0, roll: 0}\n\n/* setting the position */\nplayer.vr.direction = { pitch: 0, yaw: 180, roll: 0 };\n\n/* example of how you can update only one direction property */\nvar currentViewingDirection = player.vr.direction; /* e.g. {pitch: 0, yaw: 30, roll: 0} */\ncurrentViewingDirection.pitch = 180; /* {pitch: 180, yaw:30, roll: 0} */\nplayer.vr.direction = currentViewingDirection;\n"})}),"\n",(0,r.jsx)(n.h5,{id:"legacy-android-sdk-412x-1",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,r.jsxs)(n.p,{children:["Construct a ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/vr/VRDirection.html",children:"VRDirection"})," object to set the direction"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"VRDirection vrDirection = new VRDirection(0,0,0);  // e.g. {pitch: 0, yaw: 0, roll: 0}\ntpv.getPlayer().getVR().setDirection(vrDirection);\n"})}),"\n",(0,r.jsx)(n.h5,{id:"legacy-ios-sdk-412x-1",children:"Legacy iOS SDK (4.12.x)"}),"\n",(0,r.jsxs)(n.p,{children:["Construct a ",(0,r.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/ios/Classes/VRDirection.html",children:"VRDirection"})," object to set to the ",(0,r.jsx)(n.code,{children:"player.vr.direction"})," property:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"//setting all direction values at oncelet vrDirection = VRDirection(pitch: 0, roll: 0, yaw: 0)\ntheoplayer.vr?.direction = vrDirection//setting one specific directional valuetheoplayer.vr?.direction.roll = 0      //roll,pitch,yaw\n"})}),"\n",(0,r.jsx)(n.h3,{id:"setting-stereomode",children:"Setting stereoMode"}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk-2",children:"Web SDK"}),"\n",(0,r.jsxs)(n.p,{children:["The snippet below enables stereo mode by setting the ",(0,r.jsx)(n.code,{children:"stereoMode"})," variable to ",(0,r.jsx)(n.code,{children:"horizontal"}),"/",(0,r.jsx)(n.code,{children:"vertical"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"player.source = {\n  sources : [{\n     src : 'http://example.com/example-stream.m3u8'\n  type : 'application/x-mpegurl'\n}],\n     vr: {\n       360: true,\n       stereoMode: 'horizontal'  // horizontal, vertical, nil\n       }\n};\n"})}),"\n",(0,r.jsx)(n.h5,{id:"legacy-android-sdk-412x-2",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,r.jsx)(n.p,{children:"The snippet below activates stereo mode for Android."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"tpv.getPlayer().getVR().setStereo(true);\n"})}),"\n",(0,r.jsx)(n.h5,{id:"legacy-ios-sdk-412x-2",children:"Legacy iOS SDK (4.12.x)"}),"\n",(0,r.jsxs)(n.p,{children:["The snippet below enables stereo mode by setting ",(0,r.jsx)(n.code,{children:"stereoMode"})," to ",(0,r.jsx)(n.code,{children:"StereoMode.Horizontal"}),"/",(0,r.jsx)(n.code,{children:"StereoMode.Vertical"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"let vr = VRConfiguration(vr360: true, stereoMode: StereoMode.horizontal)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"listening-to-vr-related-events",children:"Listening to VR related events"}),"\n",(0,r.jsxs)(n.p,{children:["The following code sample listens to ",(0,r.jsx)(n.code,{children:"stereochange, directionchange"})," events thrown by THEOplayer and stores the new stereo mode in a variable."]}),"\n",(0,r.jsx)(n.h5,{id:"web-sdk-3",children:"Web SDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"player.vr.addEventlistener('stereochange', function () {\n  var isStereoEnabled = player.vr.stereo; // (boolean)\n  // do something with it\n});\n"})}),"\n",(0,r.jsx)(n.h5,{id:"legacy-android-sdk-412x-3",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'//DirectionChange\ntpv.getPlayer().getVR().addEventListener(VREventTypes.DIRECTIONCHANGE, new EventListener<DirectionChangeEvent>() {\n    @Override\n    public void handleEvent(DirectionChangeEvent directionChangeEvent) {\n        Log.v("Test","Direction");\n    }\n});\n\n//StereoChange\ntpv.getPlayer().getVR().addEventListener(VREventTypes.STEREOCHANGE, new EventListener<StereoChangeEvent>() {\n    @Override\n    public void handleEvent(StereoChangeEvent stereoChangeEvent) {\n        Log.v("Test","stereo");\n    }\n});\n\n//StateChange\ntpv.getPlayer().getVR().addEventListener(VREventTypes.STATECHANGE, new EventListener<StateChangeEvent>() {\n    @Override\n    public void handleEvent(StateChangeEvent stateChangeEvent) {\n        Log.v("Test","state");\n    }\n});\n'})}),"\n",(0,r.jsx)(n.h5,{id:"legacy-ios-sdk-412x-3",children:"Legacy iOS SDK (4.12.x)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'class VRDirectionChangeEventType : EventType<VRDirectionChangeEvent>  {\n    init() {\n        super.init(name: "directionchange", eventHandler: VRDirectionChangeEventHandler())\n    }\n}\nclass VRStereoChangeEventType : EventType<VRStereoChangeEvent>  {\n    init() {\n        super.init(name: "stereochange", eventHandler: VRStereoChangeEventHandler())\n    }\n}\npublic struct VREventTypes {\n    public static var VR_DIRECTION_CHANGE : EventType<VRDirectionChangeEvent> = VRDirectionChangeEventType()\n    public static var VR_STEREO_CHANGE : EventType<VRStereoChangeEvent> = VRStereoChangeEventType()\n}\n\n// Fires when the viewing direction changes.\npublic class VRDirectionChangeEvent: VREvent {\n    init(date: Date) {\n        super.init(type: "directionchange", date: date)\n    }\n}\n// Fires when the player enters or exists VR mode.\npublic class VRStereoChangeEvent: VREvent {\n    init(date: Date) {\n        super.init(type: "stereochange", date: date)\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"request-permissions",children:"Request Permissions"}),"\n",(0,r.jsx)(n.p,{children:"Since iOS 13, access to device orientation and motion data is disabled by default. You will need to include code to request the necessary permission, triggered by a user action."}),"\n",(0,r.jsx)(n.p,{children:"You can do this by using the following function to handle a user interaction triggered event"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function requestPermissions() {\n  DeviceMotionEvent.requestPermission()\n    .then((response) => {\n      if (response == 'granted') {\n        window.addEventListener('devicemotion', (e) => {\n          console.log('Device motion permissions granted');\n        });\n      }\n    })\n    .catch(console.error);\n  DeviceOrientationEvent.requestPermission()\n    .then((response) => {\n      if (response == 'granted') {\n        window.addEventListener('deviceorientation', (e) => {\n          console.log('Device orient permissions granted');\n        });\n      }\n    })\n    .catch(console.error);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"sample-application",children:"Sample Application"}),"\n",(0,r.jsxs)(n.p,{children:["The following demo illustrates the VR API in production for Web SDK: ",(0,r.jsx)(n.a,{href:"https://www.theoplayer.com/theoplayer-demo-virtual-reality-360-degree-view",children:"https://www.theoplayer.com/theoplayer-demo-virtual-reality-360-degree-view"})]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["When trying to use the ",(0,r.jsx)(n.code,{children:"StereoMode"})," functionality, the device must have the automatic rotation feature enabled."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return s}});var t=i(67294);let r={},o=t.createContext(r);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);