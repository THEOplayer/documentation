"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["4246"],{42789:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"getting-started/sdks/ios/custom-chromecast-lna-screen","title":"How to implement custom local network access (LNA) interstitial dialog for Chromecast","description":"Prerequisites","source":"@site/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/07-custom-chromecast-lna-screen.md","sourceDirName":"getting-started/01-sdks/03-ios","slug":"/getting-started/sdks/ios/custom-chromecast-lna-screen","permalink":"/documentation/pr-preview/pr-226/theoplayer/v4/getting-started/sdks/ios/custom-chromecast-lna-screen","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/getting-started/01-sdks/03-ios/07-custom-chromecast-lna-screen.md","tags":[],"version":"v4","sidebarPosition":7,"frontMatter":{},"sidebar":"ios","previous":{"title":"Building for iOS Simulator, but the linked and embedded framework THEOplayerSDK.framework was built for iOS + iOS Simulator","permalink":"/documentation/pr-preview/pr-226/theoplayer/v4/getting-started/sdks/ios/building-for-ios-simulator-but-the-linked-and"},"next":{"title":"Getting started on tvOS","permalink":"/documentation/pr-preview/pr-226/theoplayer/v4/getting-started/sdks/tvos/getting-started"}}'),o=n("85893"),r=n("50065");let a={},i="How to implement custom local network access (LNA) interstitial dialog for Chromecast",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Chromecast SDK",id:"setup-chromecast-sdk",level:2},{value:"Implement custom LNA screen",id:"implement-custom-lna-screen",level:2},{value:"Use custom LNA screen",id:"use-custom-lna-screen",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"how-to-implement-custom-local-network-access-lna-interstitial-dialog-for-chromecast",children:"How to implement custom local network access (LNA) interstitial dialog for Chromecast"})}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(t.p,{children:"THEOplayer is built in a modular way, and a THEOplayer library has a set of features enabled (e.g. HLS playback, MPEG-DASH playback, advertisements, etc.)."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"The Chromecast feature needs to be enabled in your library. Please reach out to your THEOplayer contact to ensure that this feature is enabled."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"setup-chromecast-sdk",children:"Setup Chromecast SDK"}),"\n",(0,o.jsxs)(t.p,{children:["Please follow ",(0,o.jsx)(t.a,{href:"/documentation/pr-preview/pr-226/theoplayer/v4/how-to-guides/cast/chromecast/enable-chromecast-on-the-sender#iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"our guide on how to setup the Google Cast SDK"})," in your application when using THEOplayer."]}),"\n",(0,o.jsx)(t.h2,{id:"implement-custom-lna-screen",children:"Implement custom LNA screen"}),"\n",(0,o.jsxs)(t.p,{children:["We can create a simple ",(0,o.jsx)(t.code,{children:"ViewController"})," that will present our custom screen about LNA permission for the user."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-swift",children:'import Foundation\nimport GoogleCast\n\nclass CustomChromecastLNAScreen: UIViewController {\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n\n        view.backgroundColor = .green\n\n        let introText: UILabel = UILabel(frame: CGRect(x: 0, y: 0, width: UIScreen.main.bounds.width, height: 800))\n\n        introText.text =\n\n            "This is the first time you use Chromecast!\\nAccept the permission popup and enjoy!\\n\\n(Pull down to close)"\n\n        introText.numberOfLines = 5\n        introText.textColor = .black\n        introText.lineBreakStrategy = .pushOut\n        introText.lineBreakMode = .byWordWrapping\n        introText.adjustsFontSizeToFitWidth = true\n\n        view.addSubview(introText)\n    }\n\n    override func viewDidAppear(_ animated: Bool) {\n        super.viewDidAppear(animated)\n    }\n\n    override func viewDidDisappear(_ animated: Bool) {\n    // When the user close the ViewController, we trigger the discovery. This will trigger the Apple LNA popup too.\n        GCKCastContext.sharedInstance().discoveryManager.startDiscovery()\n        super.viewDidDisappear(animated)\n    }\n\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Be aware once you opt-in for a custom LNA screen the Cast SDK will not do anything anymore regarding device discovery and device selection. (These are all part of the default LNA logic from Google)"}),"\n",(0,o.jsxs)(t.p,{children:["So the device discovery needs to be started manually by calling ",(0,o.jsx)(t.code,{children:"GCKCastContext.sharedInstance().discoveryManager.startDiscovery()"})]}),"\n",(0,o.jsx)(t.h2,{id:"use-custom-lna-screen",children:"Use custom LNA screen"}),"\n",(0,o.jsx)(t.p,{children:"To present the new LNA screen we have 2 options:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"connect it to a native Cast button"}),"\n",(0,o.jsx)(t.li,{children:"connect it to the in-player Cast button inside THEOplayer UI"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["On a ",(0,o.jsx)(t.code,{children:"ViewController"})," where we have access to THEOplayer we can do something like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-swift",children:"// Set up ChromeCast Button\n\nself.castButton = GCKUICastButton(frame: CGRect(x: CGFloat(0), y: CGFloat(0), width: CGFloat(24), height: CGFloat(24)))\nself.castButton!.tintColor = UIColor.white\nself.navigationItem.rightBarButtonItem = UIBarButtonItem(customView: self.castButton!)\n\nself.castButton?.delegate = self // native button\n\nself.theoplayer?.cast?.chromecast?.setCastButtonDelegate(self) // in-player button\n"})}),"\n",(0,o.jsxs)(t.p,{children:["As you can see ",(0,o.jsx)(t.code,{children:"self.castButton?.delegate"})," is used for the native Cast button and ",(0,o.jsx)(t.code,{children:"self.theoplayer?.cast?.chromecast?.setCastButtonDelegate()"})," is a THEOplayer API that allows you to connect custom logic for the in-player Cast button."]}),"\n",(0,o.jsxs)(t.p,{children:["Both methods request a ",(0,o.jsx)(t.code,{children:"GCKUICastButtonDelegate"})," (",(0,o.jsx)(t.a,{href:"https://developers.google.com/cast/docs/reference/ios/protocol_g_c_k_u_i_cast_button_delegate-p",children:"API"}),")"]}),"\n",(0,o.jsx)(t.p,{children:"If you implement the delegate on the ViewController itself you will have something similar:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-swift",children:"\nfunc castButtonDidTap(toPresentLocalNetworkAccessPermissionDialog castButton: GCKUICastButton) {\n    self.navigationController?.present(CustomChromecastLNAScreen(), animated: true, completion: nil)\n}\n\n\nfunc castButtonDidTap(_ castButton: GCKUICastButton, toPresentDialogFor castState: GCKCastState) {\n    GCKCastContext.sharedInstance().presentCastDialog()\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"The first method is called when you have to present your LNA screen, the second method is called when you can show the device selection screen."}),"\n",(0,o.jsx)(t.p,{children:"That's all!"}),"\n",(0,o.jsx)(t.p,{children:"Now your custom logic will be triggered whenever the user clicks on the native or on the in-player Chromecast button!"})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return a}});var s=n(67294);let o={},r=s.createContext(o);function a(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);