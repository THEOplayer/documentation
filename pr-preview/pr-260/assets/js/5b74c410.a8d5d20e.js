"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["67703"],{80687:function(e,t,i){i.d(t,{ZP:function(){return l},d$:function(){return o}});var r=i(85893),n=i(50065);let o=[];function c(e){let t={a:"a",admonition:"admonition",p:"p",...(0,n.a)(),...e.components};return(0,r.jsx)(t.admonition,{title:"Getting Started with iOS SDK",type:"tip",children:(0,r.jsxs)(t.p,{children:["If you haven't already, begin by following the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/ios-getting-started-with-subscribing",children:"Getting Started"})," tutorial to become familiar with the concepts to create an application that can publish and/or subscribe using the ",(0,r.jsx)(t.a,{href:"/documentation/pr-preview/pr-260/millicast/ios",children:"iOS"})," SDK."]})})}function l(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},73437:function(e,t,i){i.r(t),i.d(t,{default:()=>d,frontMatter:()=>l,metadata:()=>r,assets:()=>s,toc:()=>u,contentTitle:()=>a});var r=JSON.parse('{"id":"client-sdks/ios/ios-how-to-add-picture-in-picture","title":"How-to Add Picture in Picture","description":"\\\\\\\\Picture-in-Picture (PiP) is compatible with iOS 16+. This feature allows you to support a floating video frame that persists even when the user sends the application to the background or switches to another application.","source":"@site/millicast/client-sdks/ios/ios-how-to-add-picture-in-picture.mdx","sourceDirName":"client-sdks/ios","slug":"/ios-how-to-add-picture-in-picture","permalink":"/documentation/pr-preview/pr-260/millicast/ios-how-to-add-picture-in-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/client-sdks/ios/ios-how-to-add-picture-in-picture.mdx","tags":[],"version":"current","frontMatter":{"title":"How-to Add Picture in Picture","slug":"/ios-how-to-add-picture-in-picture"},"sidebar":"millicast","previous":{"title":"Getting Started with Subscribing","permalink":"/documentation/pr-preview/pr-260/millicast/ios-getting-started-with-subscribing"},"next":{"title":"Migration Guide for iOS SDK","permalink":"/documentation/pr-preview/pr-260/millicast/ios-sdk-migration-guide"}}'),n=i("85893"),o=i("50065"),c=i("80687");let l={title:"How-to Add Picture in Picture",slug:"/ios-how-to-add-picture-in-picture"},a=void 0,s={},u=[...c.d$,{value:"1. Setup AVPictureInPictureController",id:"1-setup-avpictureinpicturecontroller",level:2},{value:"1.1 Confirm that current OS/Device supports PiP",id:"11-confirm-that-current-osdevice-supports-pip",level:3},{value:"1.2 Prepare the video view(MCSampleBufferVideoUIView) to show in PiP",id:"12-prepare-the-video-viewmcsamplebuffervideouiview-to-show-in-pip",level:3},{value:"1.3 Add the video view to AVPictureInPictureVideoCallViewController",id:"13-add-the-video-view-to-avpictureinpicturevideocallviewcontroller",level:3},{value:"1.4 Create the PiP content source",id:"14-create-the-pip-content-source",level:3},{value:"2. Listen to Picture-in-Picture lifecycle events",id:"2-listen-to-picture-in-picture-lifecycle-events",level:2}];function p(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"**Picture-in-Picture (PiP) is compatible with iOS 16+. This feature allows you to support a floating video frame that persists even when the user sends the application to the background or switches to another application."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(87688).Z+"",width:"410",height:"396"})}),"\n",(0,n.jsxs)(t.p,{children:["Refer to the ",(0,n.jsx)(t.a,{href:"https://github.com/dolbyio-samples/rts-app-ios-viewer/tree/main/interactive-player",children:"Interactive Player"})," sample application to learn more about implementing the code needed for PiP feature in a fully functioning iOS App."]}),"\n","\n",(0,n.jsx)(c.ZP,{}),"\n",(0,n.jsx)(t.h2,{id:"1-setup-avpictureinpicturecontroller",children:"1. Setup AVPictureInPictureController"}),"\n",(0,n.jsx)(t.p,{children:"Once you have subscribed to a stream and have access to the video tracks available in the stream, follow the steps below to add Picture-In-Picture (PiP) Support."}),"\n",(0,n.jsx)(t.h3,{id:"11-confirm-that-current-osdevice-supports-pip",children:"1.1 Confirm that current OS/Device supports PiP"}),"\n",(0,n.jsxs)(t.p,{children:["It is common practice to make sure that PiP is available on the current device given the wide range of applications and iOS versions currently in use. The ",(0,n.jsx)(t.code,{children:"isPictureInPictureSupported()"})," method allows you to check before proceeding with the necessary changes."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information on the ",(0,n.jsx)(t.code,{children:"isPictureInPictureSupported()"})," method, check out Apple's ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/ispictureinpicturesupported()",children:"documentation"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"guard AVPictureInPictureController.isPictureInPictureSupported() else { return }\n"})}),"\n",(0,n.jsx)(t.h3,{id:"12-prepare-the-video-viewmcsamplebuffervideouiview-to-show-in-pip",children:"1.2 Prepare the video view(MCSampleBufferVideoUIView) to show in PiP"}),"\n",(0,n.jsxs)(t.p,{children:["Create a video view to show in PiP by passing in the renderer, where renderer is an instance of ",(0,n.jsx)(t.strong,{children:"MCCMSampleBufferVideoRenderer"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"let videoView = MCSampleBufferVideoUIView(frame: .zero, renderer: renderer)\nvideoView.translatesAutoresizingMaskIntoConstraints = false\nvideoView.layer.bounds = sourceView.bounds\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Note: Only one renderer can be attached to a video track at a given time, so reuse the renderer(MCCMSampleBufferVideoRenderer) used to receive video in the app."})}),"\n",(0,n.jsx)(t.h3,{id:"13-add-the-video-view-to-avpictureinpicturevideocallviewcontroller",children:"1.3 Add the video view to AVPictureInPictureVideoCallViewController"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"AVPictureInPictureVideoCallViewController"})," serves as a source for the ",(0,n.jsx)(t.strong,{children:"AVPictureInPictureController"})," (iOS Only). Create an instance ",(0,n.jsx)(t.strong,{children:"AVPictureInPictureVideoCallViewController"})," and add your video view as a subview.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"MCSampleBufferVideoUIView"})," has properties to query for video size changes and notifies frame changes via ",(0,n.jsx)(t.strong,{children:"MCVideoViewDelegate"}),". This can be used to set the ",(0,n.jsx)(t.code,{children:"preferredContentSize"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"let pipVideoCallViewController = AVPictureInPictureVideoCallViewController()\npipVideoCallViewController.preferredContentSize = videoSize\npipVideoCallViewController.view.addSubview(videoView)\n\n// Setup layout constraints.\nNSLayoutConstraint.activate([\n    pipVideoCallViewController.view.topAnchor.constraint(equalTo: pipView.topAnchor),\n    pipVideoCallViewController.view.leadingAnchor.constraint(equalTo: pipView.leadingAnchor),\n    pipView.bottomAnchor.constraint(equalTo: pipVideoCallViewController.view.bottomAnchor),\n    pipView.trailingAnchor.constraint(equalTo: pipVideoCallViewController.view.trailingAnchor)\n])\n"})}),"\n",(0,n.jsx)(t.h3,{id:"14-create-the-pip-content-source",children:"1.4 Create the PiP content source"}),"\n",(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.code,{children:"sourceView"})," and the ",(0,n.jsx)(t.code,{children:"pipViewCallViewController"})," to create a ",(0,n.jsx)(t.strong,{children:"ContentSource"})," for ",(0,n.jsx)(t.strong,{children:"AVPictureInPictureController"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"let pipContentSource = AVPictureInPictureController.ContentSource(activeVideoCallSourceView: sourceView, contentViewController: pipVideoCallViewController)\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Note: Setting"})," ",(0,n.jsx)(t.code,{children:"canStartPictureInPictureAutomaticallyFromInline"})," ",(0,n.jsx)(t.em,{children:"ensures PiP playback is automatically started when your app moves to background."})]}),"\n",(0,n.jsx)(t.h2,{id:"2-listen-to-picture-in-picture-lifecycle-events",children:"2. Listen to Picture-in-Picture lifecycle events"}),"\n",(0,n.jsxs)(t.p,{children:["Conform to the ",(0,n.jsx)(t.strong,{children:"AVPictureInPictureControllerDelegate"})," protocol to receive PiP lifecycle events and manage any activities that need to occur when starting and stopping PiP."]}),"\n",(0,n.jsxs)(t.p,{children:["For more information on implementing the ",(0,n.jsx)(t.strong,{children:"AVPictureInPictureControllerDelegate"})," method, check out Apple's ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/avkit/avpictureinpicturecontrollerdelegate/",children:"documentation"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'func pictureInPictureControllerDidStartPictureInPicture(_ pictureInPictureController: AVPictureInPictureController) {\n    print("Started picture in picture")\n}\n\nfunc pictureInPictureControllerWillStartPictureInPicture(_ pictureInPictureController: AVPictureInPictureController) {\n    print("Will start picture in picture")\n}\n\nfunc pictureInPictureControllerWillStopPictureInPicture(_ pictureInPictureController: AVPictureInPictureController) {\n    print("Will stop picture in picture")\n    // Use the pictureInPictureControllerWillStopPictureInPicture delegate function to clean up the class instances created\n    pipController = nil\n}\n\nfunc pictureInPictureControllerDidStopPictureInPicture(_ pictureInPictureController: AVPictureInPictureController) {\n     print("Stopped picture in picture")\n}\n\nfunc pictureInPictureController(_ pictureInPictureController: AVPictureInPictureController, failedToStartPictureInPictureWithError error: Error) {\n    print("Failed to start picture in picture \\(error.localizedDescription)")\n}\n'})})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},87688:function(e,t,i){i.d(t,{Z:function(){return r}});let r=i.p+"assets/images/632bcf2c4c46320da939d2dcb89b95c15e2ba9c29826b7fb28d866c8-mobile-picture-in-picture-9985e78ef10631919ba2acb13c518574.png"},50065:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return c}});var r=i(67294);let n={},o=r.createContext(n);function c(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);