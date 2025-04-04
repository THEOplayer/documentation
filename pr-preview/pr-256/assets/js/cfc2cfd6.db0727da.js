"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["18048"],{6632:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"getting-started/sdks/ios/ios-sdk-customization","title":"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x) Customization","description":"Custom CSS and JavaScript files","source":"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/01-ios-sdk-customization.md","sourceDirName":"getting-started/01-sdks/03-ios","slug":"/getting-started/sdks/ios/ios-sdk-customization","permalink":"/documentation/pr-preview/pr-256/theoplayer/v4/getting-started/sdks/ios/ios-sdk-customization","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/01-ios-sdk-customization.md","tags":[],"version":"v4","sidebarPosition":1,"frontMatter":{},"sidebar":"ios","previous":{"title":"Getting started on iOS","permalink":"/documentation/pr-preview/pr-256/theoplayer/v4/getting-started/sdks/ios/getting-started"},"next":{"title":"My app does not want to build for the app store","permalink":"/documentation/pr-preview/pr-256/theoplayer/v4/getting-started/sdks/ios/app-doesnt-want-to-build-app-store"}}'),a=s("85893"),i=s("50065");let r={},o="iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x) Customization",l={},c=[{value:"Custom CSS and JavaScript files",id:"custom-css-and-javascript-files",level:2},{value:"Custom CSS and the Chromeless flag",id:"custom-css-and-the-chromeless-flag",level:4},{value:"Communication between a custom JavaScript file and the THEOplayer iOS SDK (\u2265 1.0.10)",id:"communication-between-a-custom-javascript-file-and-the-theoplayer-ios-sdk--1010",level:4},{value:"Communication between the THEOplayer iOS SDK (\u2265 1.0.10) and a custom JavaScript file",id:"communication-between-the-theoplayer-ios-sdk--1010-and-a-custom-javascript-file",level:4},{value:"Publishing to App Store",id:"publishing-to-app-store",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"iostvos-sdk-and-legacy-iostvos-sdk-412x-customization",children:"iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x) Customization"})}),"\n",(0,a.jsx)(t.h2,{id:"custom-css-and-javascript-files",children:"Custom CSS and JavaScript files"}),"\n",(0,a.jsx)(t.p,{children:"If you want to use custom CSS or JavaScript files you can instantiate the player with a THEOplayerConfiguration object."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'let stylePath = Bundle.main.path(forResource:"style", ofType: "css")!\nlet scriptPath = Bundle.main.path(forResource:"script", ofType: "js")!\nlet playerConfig = THEOplayerConfiguration(defaultCSS: false, cssPaths:[stylePath], jsPaths: [scriptPath])\n/* or let playerConfig = THEOplayerConfiguration(chromeless: true, cssPaths:[stylePath], jsPaths: [scriptPath]) */\nvar theoplayer = THEOplayer(configuration: playerConfig)\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Note that the snippet above implies that you've created ",(0,a.jsx)(t.code,{children:"style.css"})," and ",(0,a.jsx)(t.code,{children:"script.js"}),' in your iOS project.\nEnsure that these files are created and referenced correctly.\nThe screenshot below demonstrates that these files are "discoverable" in our sample project because they appear in the left sidebar.']}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:s(38063).Z+"",width:"2880",height:"1800"})}),"\n",(0,a.jsx)(t.h4,{id:"custom-css-and-the-chromeless-flag",children:"Custom CSS and the Chromeless flag"}),"\n",(0,a.jsxs)(t.p,{children:["With the ",(0,a.jsx)(t.code,{children:"chromeless"})," flag you can choose to use the chromeless version of the player which does not contain the THEOplayer UI.\nThis allows you to write your own custom UI."]}),"\n",(0,a.jsxs)(t.p,{children:["The THEOplayer CSS is not loaded when ",(0,a.jsx)(t.code,{children:"chromeless"})," is enabled."]}),"\n",(0,a.jsxs)(t.p,{children:["When ",(0,a.jsx)(t.code,{children:"chromeless"})," is ",(0,a.jsx)(t.code,{children:"false"}),", the THEOplayer UI is used.\nIn that case the default style can still be disabled by setting the ",(0,a.jsx)(t.code,{children:"defaultCss"})," flag to ",(0,a.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"communication-between-a-custom-javascript-file-and-the-theoplayer-ios-sdk--1010",children:"Communication between a custom JavaScript file and the THEOplayer iOS SDK (\u2265 1.0.10)"}),"\n",(0,a.jsx)(t.p,{children:"You can send messages from within a custom JavaScript file to the iOS SDK."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Register a message listener in your native (e.g. Swift) code through ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Classes/THEOplayer.html#/c:@CM@THEOplayerSDK@objc(cs)THEOplayer(im)addJavascriptMessageListenerWithName:listener:",children:(0,a.jsx)(t.code,{children:"addJavascriptMessageListener"})}),", as demonstrated in the example below:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'func onMessageReceived(message : [String:Any]) {\n    print(message)\n    let a : String = message["a"] as! String\n    let b : Int = message["b"] as! Int // booleans get converted to integers\n    let c : Int = message["c"] as! Int\n    let d : [String:Any] = message["d"] as! [String:Any]\n    print(a, b, c, d)\n}\ntheoplayer.addJavascriptMessageListener(name: "myMessageName", listener: onMessageReceived)\n'})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:"Send a message in your custom JavaScript file (script.js):"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["To send a message the ",(0,a.jsx)(t.code,{children:"_webkit.messageHandlers.<messageName>.postMessage(<message body>)_"})," method must be used,\nas demonstrated in the example below:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"/* this example sends a message every 10 seconds */\nsetInterval(function () {\n  const message = {\n    a: 'abc',\n    b: true,\n    c: 123,\n    d: {\n      a: 'abc',\n      b: true,\n      c: 123,\n    },\n  };\n  window.webkit.messageHandlers.myMessageName.postMessage(message);\n}, 10000);\n"})}),"\n",(0,a.jsx)(t.p,{children:"The message body can be a JavaScript object or string:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["If it's an object then the resulting type in Swift will be a dictionary ",(0,a.jsx)(t.code,{children:"[String:Any]"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["If it's a string then the result in Swift is a dictionary with one value and ",(0,a.jsx)(t.code,{children:'"data"'})," as key."]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"communication-between-the-theoplayer-ios-sdk--1010-and-a-custom-javascript-file",children:"Communication between the THEOplayer iOS SDK (\u2265 1.0.10) and a custom JavaScript file"}),"\n",(0,a.jsx)(t.p,{children:"You can send messages from your native (e.g. Swift) code to your custom JavaScript file."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Create a function in your custom JavaScript file, as demonstrated in the example below:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'function foobar(value) {\n        console.log(value);\n        if (value != "test") {\n            throw new Error("An error occured.");\n        }\n        return value;\n}\n'})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["Call your JavaScript function in your native code through ",(0,a.jsx)(t.a,{href:"pathname:///theoplayer/v4/api-reference/ios/Classes/THEOplayer.html#/c:@CM@THEOplayerSDK@objc(cs)THEOplayer(im)evaluateJavaScript:completionHandler:",children:(0,a.jsx)(t.code,{children:"theoplayer.evaluateJavaScript"})}),", as demonstrated in the example below:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'theoplayer.addEventListener(type: PlayerEventTypes.PAUSE) { event in\n        print(event)\n        self.theoplayer.evaluateJavaScript("foobar(\'test\')") { result, error in\n            if error == nil {\n                let result_ = result as! String\n                print("result", result_)\n            } else {\n                print("error", error!)\n            }\n        }\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"publishing-to-app-store",children:"Publishing to App Store"}),"\n",(0,a.jsxs)(t.p,{children:["Please note that this is only necessary for versions below ",(0,a.jsx)(t.strong,{children:"2.16"}),". Do not use this step if you have a newer version."]}),"\n",(0,a.jsx)(t.p,{children:"THEOplayer.framework is released as a FAT framework containing several architectures. The framework includes the i386, x86_64, armv7 and arm64 architectures. Sometimes the App Store will not accept these (especially legacy simulator i386 and x86_64 architectures.)"}),"\n",(0,a.jsx)(t.p,{children:"In order to thin down the framework prior to archiving it and submitting it for upload, use the following command in Terminal:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"lipo [path to THEOplayer.framework] -remove [i386, x86_64] -output [path to output the thinned framework]\n"})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},38063:function(e,t,s){s.d(t,{Z:function(){return n}});let n=s.p+"assets/images/ios-sdk-customization-sidebar-fed24ff3f1393a6938576639adcecdf3.png"},50065:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return r}});var n=s(67294);let a={},i=n.createContext(a);function r(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);