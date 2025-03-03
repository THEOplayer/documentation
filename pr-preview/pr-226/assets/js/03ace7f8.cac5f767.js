"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["35844"],{58181:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"how-to-guides/objective-C/introduction","title":"Introduction","description":"In this guide, we will explore how to use the Objective-C APIs available in the THEOplayer iOS SDK.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/13-objective-C/00-introduction.md","sourceDirName":"how-to-guides/13-objective-C","slug":"/how-to-guides/objective-C/introduction","permalink":"/documentation/pr-preview/pr-226/theoplayer/v6/how-to-guides/objective-C/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/13-objective-C/00-introduction.md","tags":[],"version":"v6","sidebarPosition":0,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-226/theoplayer/v6/how-to-guides/license/introduction"},"next":{"title":"Roku","permalink":"/documentation/pr-preview/pr-226/theoplayer/v6/api-reference/roku"}}'),r=n("85893"),o=n("50065");let s={},a="Introduction",c={},l=[{value:"THEOplayer Objective-C API guide",id:"theoplayer-objective-c-api-guide",level:2},{value:"Getting started",id:"getting-started",level:4},{value:"Declarations",id:"declarations",level:4},{value:"Classes",id:"classes",level:4},{value:"Protocols",id:"protocols",level:4},{value:"Enums",id:"enums",level:4},{value:"Primitive Types",id:"primitive-types",level:4},{value:"Changes to THEOplayer Swift API",id:"changes-to-theoplayer-swift-api",level:2},{value:"Structs are now Classes",id:"structs-are-now-classes",level:4},{value:"Enums",id:"enums-1",level:4}];function d(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,r.jsx)(i.p,{children:"In this guide, we will explore how to use the Objective-C APIs available in the THEOplayer iOS SDK.\nWe will also dive into some of the changes made to the Swift APIs to accommodate the compatibility of the Objective-C APIs."}),"\n",(0,r.jsx)(i.h2,{id:"theoplayer-objective-c-api-guide",children:"THEOplayer Objective-C API guide"}),"\n",(0,r.jsx)(i.h4,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsxs)(i.p,{children:["Get the latest THEOplayer iOS SDK. The simplest way to do so is through ",(0,r.jsx)(i.a,{href:"https://github.com/THEOplayer/theoplayer-sdk-ios",children:"Cocoapods"}),".\nStarting from version 2.89.0, the THEOplayer iOS SDK comes with Objective-C support! This single framework contains all the declarations available in Swift and Objective-C (except for the Verizon Media APIs which are still only available in Swift)."]}),"\n",(0,r.jsx)(i.p,{children:"To use it, simply import the framework in the header or implementation files like so:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-objc",children:"#import <THEOplayerSDK/THEOplayerSDK-Swift.h>\n"})}),"\n",(0,r.jsxs)(i.p,{children:["You should now be able to access all the APIs provided.\n",(0,r.jsx)(i.strong,{children:"Tip:"})," Start typing the prefix ",(0,r.jsx)(i.code,{children:"THEOplayer"})," for a ",(0,r.jsx)(i.code,{children:"@property"})," declaration for example, then Xcode should already auto-complete some THEOplayerSDK related declarations."]}),"\n",(0,r.jsx)(i.h4,{id:"declarations",children:"Declarations"}),"\n",(0,r.jsxs)(i.p,{children:["Always expect to see the ",(0,r.jsx)(i.code,{children:"THEOplayer"})," prefix for all the declarations that are related to THEOplayerSDK. We do this to follow the convention and to avoid conflict with declarations with similar naming from other modules."]}),"\n",(0,r.jsx)(i.h4,{id:"classes",children:"Classes"}),"\n",(0,r.jsxs)(i.p,{children:["All classes are inherited from ",(0,r.jsx)(i.code,{children:"NSObject"})," as per standard and are initialized using the ",(0,r.jsx)(i.code,{children:"alloc/init"})," convention.\nFor example, the class ",(0,r.jsx)(i.code,{children:"THEOplayerSourceDescription"})," initialization is done by:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-objc",children:"[[THEOplayerSourceDescription alloc] initWithSource:(THEOplayerTypedSource * _Nonnull)]\n"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Note:"})," If you are familiar with the THEOplayer Swift SDK, you might be used to encountering ",(0,r.jsx)(i.code,{children:"struct"})," declarations. These are all converted to ",(0,r.jsx)(i.code,{children:"class"})," (except for event types) since ",(0,r.jsx)(i.code,{children:"struct"})," is not supported in Objective-C. More information about this topic can be found in the ",(0,r.jsx)(i.a,{href:"#changes-to-theoplayer-swift-api",children:"Changes to THEOplayer Swift API"})," section."]}),"\n",(0,r.jsx)(i.h4,{id:"protocols",children:"Protocols"}),"\n",(0,r.jsx)(i.p,{children:"All protocols declared in Swift are also available in Objective-C. To access them from a property declaration, use the following syntax format:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-objc",children:"id<THEOplayerTextTrack> textTrack;\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Notice the ",(0,r.jsx)(i.code,{children:"id<>"})," notation, this is required for Xcode to detect that you are trying to declare a property of type ",(0,r.jsx)(i.code,{children:"protocol"})," declaration."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Limitations:"}),"\nFor THEOplayerTextTrackList and THEOplayerMediaTrackList protocols, the convenient subscript operator is unsupported in Objective-C. Instead, use the ",(0,r.jsx)(i.code,{children:"count"})," property alongside the ",(0,r.jsx)(i.code,{children:"get"})," method to achieve the same goal."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-objc",children:'THEOplayer *player;\nfor (int i = 0; i < player.textTracks.count; i += 1) {\n    NSLog(@"The textTrack is: %@", [player.textTracks get: i]);\n}\n'})}),"\n",(0,r.jsx)(i.h4,{id:"enums",children:"Enums"}),"\n",(0,r.jsxs)(i.p,{children:["All enums have ",(0,r.jsx)(i.code,{children:"NSInteger"})," type raw values. Similar to the enum, all the cases in the enum are prefixed with ",(0,r.jsx)(i.code,{children:"THEOplayer"}),". This is necessary since enum cases can be directly accessed.\nThe case values start at 1 and increment from there for each new case. The value 0 is reserved for a special ",(0,r.jsx)(i.code,{children:"NONE"})," case which should be treated similarly to having a ",(0,r.jsx)(i.code,{children:"nil"})," value whenever present."]}),"\n",(0,r.jsx)(i.h4,{id:"primitive-types",children:"Primitive Types"}),"\n",(0,r.jsxs)(i.p,{children:["For integer and double values, we use ",(0,r.jsx)(i.code,{children:"NSNumber"})," over ",(0,r.jsx)(i.code,{children:"int"})," and ",(0,r.jsx)(i.code,{children:"double"}),". The benefit this provides is that ",(0,r.jsx)(i.code,{children:"NSNumber"})," can be nullable while ",(0,r.jsx)(i.code,{children:"int"})," and ",(0,r.jsx)(i.code,{children:"double"})," cannot. This helps keep the parity between the Swift and Objective-C APIs.\nFor each individual use case, refer to the documentation for the precision of the ",(0,r.jsx)(i.code,{children:"NSNumber"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Consider the following method call, the visibility parameter expect an argument of type ",(0,r.jsx)(i.code,{children:"NSNumber"}),". You can simply pass a literal ",(0,r.jsx)(i.code,{children:"NSNumber"})," value by using the ",(0,r.jsx)(i.code,{children:"@"})," prefix:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-objc",children:"THEOplayer *player;\n[player.pip configureWithMovable: true defaultCorner: THEOplayerPictureInPictureCornerTOP_LEFT scale: 1 visibility: @0.5];\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Consider the following ",(0,r.jsx)(i.code,{children:"duration"})," property which has type ",(0,r.jsx)(i.code,{children:"NSNumber"}),", to access the double value is simple as:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-objc",children:'THEOplayer *player;\nNSLog(@"The player duration is: %f", player.duration.doubleValue);\n'})}),"\n",(0,r.jsxs)(i.p,{children:["Note: You can always refer to the documentation to retrieve the number precision. In case it is integer, then you could access it with ",(0,r.jsx)(i.code,{children:"player.duration.integerValue"})," instead."]}),"\n",(0,r.jsx)(i.h2,{id:"changes-to-theoplayer-swift-api",children:"Changes to THEOplayer Swift API"}),"\n",(0,r.jsx)(i.p,{children:"Some changes were accommodated in the existing THEOplayer Swift API for the benefit of having Objective-C compatibility.\nThe impact of these changes are minimal but worth noting for reference in case there are ambiguities."}),"\n",(0,r.jsx)(i.h4,{id:"structs-are-now-classes",children:"Structs are now Classes"}),"\n",(0,r.jsxs)(i.p,{children:["This change is necessary because Objective-C does not support ",(0,r.jsx)(i.code,{children:"struct"}),"s, and this can cause a behavioral change in a codebase where comparisons are done between different instances because ",(0,r.jsx)(i.code,{children:"struct"}),"s are value types while ",(0,r.jsx)(i.code,{children:"class"}),"s are reference types. Normally this should not be a concern if you are already using these declarations since the ",(0,r.jsx)(i.code,{children:"struct"}),"s were not conforming to the ",(0,r.jsx)(i.code,{children:"Equatable"})," protocol and so comparison was not possible."]}),"\n",(0,r.jsx)(i.p,{children:"One difference that might be observed is when setting the property of a reference to a class instead of a struct. Consider this example:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-swift",children:"let vrDir_1: VRDirection? = VRDirection(pitch: 90, roll: 90, yaw: 90)\n\nif var vrDir_2 = vrDir_1 {\n    vrDir_2.pitch = 180\n}\n\nprint(vrDir_1?.pitch)\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Previously ",(0,r.jsx)(i.code,{children:"VRDirection"})," was a struct, therefore ",(0,r.jsx)(i.code,{children:"vrDir_2"})," would reference the value of ",(0,r.jsx)(i.code,{children:"vrDir_1"})," and setting the ",(0,r.jsx)(i.code,{children:"pitch"})," property on ",(0,r.jsx)(i.code,{children:"vrDir_2"})," would not affect ",(0,r.jsx)(i.code,{children:"vrDir_1"}),". Now that ",(0,r.jsx)(i.code,{children:"VRDirection"})," is a class, ",(0,r.jsx)(i.code,{children:"vrDir_2"})," will refer to ",(0,r.jsx)(i.code,{children:"vrDir_1"})," and set the ",(0,r.jsx)(i.code,{children:"pitch"})," property of ",(0,r.jsx)(i.code,{children:"vrDir_1"}),"."]}),"\n",(0,r.jsx)(i.h4,{id:"enums-1",children:"Enums"}),"\n",(0,r.jsxs)(i.p,{children:["Previously, all the enums had a rawValue of type ",(0,r.jsx)(i.code,{children:"String"}),". Since Objective-C enums support only ",(0,r.jsx)(i.code,{children:"NSInteger"})," as rawValue, we changed the rawValue type of enums to ",(0,r.jsx)(i.code,{children:"Int"})," which will be exposed as ",(0,r.jsx)(i.code,{children:"NSInteger"})," for Objective-C.\nIn case the ",(0,r.jsx)(i.code,{children:"String"})," value is still needed, it can still be accessed via the ",(0,r.jsx)(i.code,{children:"_rawValue"})," property."]}),"\n",(0,r.jsx)(i.p,{children:"Before:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-swift",children:'let presentationMode: PresentationMode = PresentationMode.inline\nprint(presentationMode.rawValue) // prints "inline"\n'})}),"\n",(0,r.jsx)(i.p,{children:"After:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-swift",children:'let presentationMode: PresentationMode = PresentationMode.inline\nprint(presentationMode.rawValue) // prints 1\nprint(presentationMode._rawValue) // prints "inline"\n'})}),"\n",(0,r.jsx)(i.p,{children:"But in most cases, the rawValue is not required when passing an argument or setting a property, or when comparing:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-swift",children:"let player = THEOplayer()\nif player.presentationMode == .inline {}\nplayer.presentationMode = .inline\n"})})]})}function h(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return s}});var t=n(67294);let r={},o=t.createContext(r);function s(e){let i=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);