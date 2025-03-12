"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["92580"],{45888:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"getting-started/sdks/ios/ios-sdk-touch-gestures","title":"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x) Touch-events (gestures)","description":"Introduction","source":"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/05-ios-sdk-touch-gestures.md","sourceDirName":"getting-started/01-sdks/03-ios","slug":"/getting-started/sdks/ios/ios-sdk-touch-gestures","permalink":"/documentation/pr-preview/pr-233/theoplayer/v4/getting-started/sdks/ios/ios-sdk-touch-gestures","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/05-ios-sdk-touch-gestures.md","tags":[],"version":"v4","sidebarPosition":5,"frontMatter":{},"sidebar":"ios","previous":{"title":"How to couple the native GCKUICastButton to THEOplayer","permalink":"/documentation/pr-preview/pr-233/theoplayer/v4/getting-started/sdks/ios/how-to-couple-native-gckuicastbutton"},"next":{"title":"Building for iOS Simulator, but the linked and embedded framework THEOplayerSDK.framework was built for iOS + iOS Simulator","permalink":"/documentation/pr-preview/pr-233/theoplayer/v4/getting-started/sdks/ios/building-for-ios-simulator-but-the-linked-and"}}'),i=s("85893"),r=s("50065");let o={},l="iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x) Touch-events (gestures)",a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"General Notions about gestures recognizers",id:"general-notions-about-gestures-recognizers",level:4},{value:"Supported use cases",id:"supported-use-cases",level:4},{value:"How to use in THEOplayer iOS SDK",id:"how-to-use-in-theoplayer-ios-sdk",level:4},{value:"Resources",id:"resources",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-touch-events-gestures",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x) Touch-events (gestures)"})}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"This page describes how to implement Touch-events (gestures recognizers) for THEOplayer in your iOS app. This is useful if you want to add specific behaviors for some or all gestures and need therefore to recognize them."}),"\n",(0,i.jsx)(t.p,{children:"Note: To this end, the UIGestureRecognizerDelegate protocol needs to be implemented into the THEOplayerInternal_iOS class."}),"\n",(0,i.jsx)(t.h4,{id:"general-notions-about-gestures-recognizers",children:"General Notions about gestures recognizers"}),"\n",(0,i.jsx)(t.p,{children:"This section contains some general notions about gesture-recognizers. For more complete information in this regard, please consult the Apple documentation pages (see link in Resources), from which most of the content of this section is a (though rearranged) quotation:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"A gesture recognizer decouples the logic for recognizing a sequence of touches (or other input) and acting on that recognition."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"A gesture recognizer has one or more target-action pairs associated with it. If there are multiple target-action pairs, they are discrete, and not cumulative. Recognition of a gesture results in the dispatch of an action message to a target for each of the associated pairs."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The interpreted gesture can be either discrete or continuous. A discrete gesture (e.g.: double tap) results in a single action sent. A continuous gesture (e.g.: rotation gesture), an action message is sent for each incremental change until the multi-touch sequence concludes."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"A gesture recognizer operates on touches hit-tested to a specific view (and all its subviews). Therefore, it must be associated with that view."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The THEOplayer css is not loaded when chromeless is enabled."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"supported-use-cases",children:"Supported use cases"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Supported SDK's"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"UITapGestureRecognizer"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"iOS 3.2+"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Single or multiple taps. For this gesture to be recognized, the specified number of fingers must tap the view a specified number of times."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"UIPinchGestureRecognizer"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"iOS 3.2+"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Pinching gestures involving two touches. When the user moves the two fingers toward each other, the conventional meaning is zoom-out; when the user moves the two fingers away from each other, the conventional meaning is zoom-in."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"UIRotationGestureRecognizer"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"iOS 3.2+"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Rotation gestures involving two touches. When the user moves the fingers opposite each other in a circular motion, the underlying view should rotate in a corresponding direction and speed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"UISwipeGestureRecognizer"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"iOS 3.2+"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Swiping gestures in one or more directions. A swipe is a discrete gesture, and thus the associated action message is sent only once per gesture."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"UIPanGestureRecognizer"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"iOS 3.2+"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Panning (dragging) gestures. The user must be pressing one or more fingers on a view while they pan it. Clients implementing the action method for this gesture recognizer can ask it for the current translation and velocity of the gesture."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"UIScreenEdgePanGestureRecognizer"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"iOS 3.2+"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A gesture recognizer that looks for panning (dragging) gestures that start near an edge of the screen. The system uses screen edge gestures in some cases to initiate view controller transitions. You can use this class to replicate the same gesture behavior for your own actions."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"UILongPressGestureRecognizer"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"iOS 3.2+"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Long-press gestures. The user must press one or more fingers on a view and hold them there for a minimum period of time before the action triggers. While down, the user\u2019s fingers may not move more than a specified distance; if they move beyond the specified distance, the gesture fails."})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"how-to-use-in-theoplayer-ios-sdk",children:"How to use in THEOplayer iOS SDK"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"// create the Gesture Recognizer\nlet tapGesture = UITapGestureRecognizer(target: self, action: #selector(self.tapGestureFired(sender:)))\ntapGesture.numberOfTapsRequired = 1\n\n// attach the gesture to THEOplayer\nself.theoplayer.addGestureRecognizer(tapG)\n\n// get an array of all the attached Gesture Recognizers on THEOplayer\nself.theoplayer.gestureRecognizers\n\n// remove the gesture from THEOplayer\nself.theoplayer.removeGestureRecognizer(tapG)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(t.p,{children:"The following resources provide more information:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/uigesturerecognizer",children:"Apple Touch Gestures Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return l},a:function(){return o}});var n=s(67294);let i={},r=n.createContext(i);function o(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);