"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["38007"],{43322:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>s});var i=JSON.parse('{"id":"external/react-native-theoplayer/doc/fullscreen","title":"A Fullscreen Video Player Component","description":"Fullscreen Video on Web platforms","source":"@site/theoplayer/external/react-native-theoplayer/doc/fullscreen.md","sourceDirName":"external/react-native-theoplayer/doc","slug":"/getting-started/frameworks/react-native/fullscreen","permalink":"/documentation/pr-preview/pr-245/theoplayer/getting-started/frameworks/react-native/fullscreen","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/fullscreen.md","tags":[],"version":"current","frontMatter":{"slug":"/getting-started/frameworks/react-native/fullscreen"},"sidebar":"react-native","previous":{"title":"Digital Rights Management (DRM)","permalink":"/documentation/pr-preview/pr-245/theoplayer/getting-started/frameworks/react-native/drm"},"next":{"title":"Limitations and Known Issues","permalink":"/documentation/pr-preview/pr-245/theoplayer/getting-started/frameworks/react-native/limitations"}}'),r=t("85893"),a=t("50065");let o={slug:"/getting-started/frameworks/react-native/fullscreen"},s="A Fullscreen Video Player Component",l={},c=[{value:"Fullscreen Video on Web platforms",id:"fullscreen-video-on-web-platforms",level:2},{value:"Fullscreen Video on iOS and Android",id:"fullscreen-video-on-ios-and-android",level:2},{value:"Presenting a fullscreen video player",id:"presenting-a-fullscreen-video-player",level:3},{value:"1. A separate player screen",id:"1-a-separate-player-screen",level:3},{value:"2. An inline video player",id:"2-an-inline-video-player",level:3},{value:"Disable re-parenting on Android",id:"disable-re-parenting-on-android",level:3},{value:"iOS home indicator",id:"ios-home-indicator",level:3},{value:"Portals for iOS and Android",id:"portals-for-ios-and-android",level:2},{value:"Using Portals to transition to an in-app mini player",id:"using-portals-to-transition-to-an-in-app-mini-player",level:3}];function d(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"a-fullscreen-video-player-component",children:"A Fullscreen Video Player Component"})}),"\n",(0,r.jsx)(n.h2,{id:"fullscreen-video-on-web-platforms",children:"Fullscreen Video on Web platforms"}),"\n",(0,r.jsx)(n.p,{children:"Transitioning to fullscreen on Web platforms varies depending on the browser."}),"\n",(0,r.jsxs)(n.p,{children:["Browsers that support the\n",(0,r.jsx)(n.a,{href:"https://fullscreen.spec.whatwg.org/",children:"Fullscreen API"})," (Chrome, Firefox, Edge, etc.), allow any element to enter fullscreen\nmode. However, some - like Safari on iOS - restrict fullscreen access to ",(0,r.jsx)(n.code,{children:"<video>"})," elements only."]}),"\n",(0,r.jsxs)(n.p,{children:["While this mechanism is hidden from users of the ",(0,r.jsx)(n.code,{children:"react-native-theoplayer"})," SDK,\nit does affect the resulting user interface."]}),"\n",(0,r.jsxs)(n.p,{children:["On browsers that support the Fullscreen API, the player view together with its UI (a child component) will enter\nfullscreen mode. On the others, a UI with limited ",(0,r.jsx)(n.strong,{children:"native controls"})," will be displayed instead."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.img,{src:t(55974).Z+"",width:"638",height:"403"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.img,{src:t(74232).Z+"",width:"227",height:"403"})})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fullscreen presentation mode in a Chrome browser."}),(0,r.jsx)(n.td,{children:"Fullscreen presentation mode with native controls in iOS Safari."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"fullscreen-video-on-ios-and-android",children:"Fullscreen Video on iOS and Android"}),"\n",(0,r.jsx)(n.p,{children:"Presenting a fullscreen video player on iOS and Android through React Native poses challenges due to the need to seamlessly\ntransition between the regular view and fullscreen mode, while maintaining playback continuity.\nThis involves managing UI layers, native view hierarchies, and minimizing\ndisruptions during the transition process."}),"\n",(0,r.jsxs)(n.p,{children:["In this section we will present two ways of presenting a fullscreen player component. One that ",(0,r.jsx)(n.strong,{children:"opens a\nnew screen to present the player"}),", and a second that ",(0,r.jsx)(n.strong,{children:"transitions to fullscreen from an inline player"}),'.\nWe will also discuss the related concept of "React Portals", which, when paired with a video player component,\noffer versatile applications beyond fullscreen display.']}),"\n",(0,r.jsx)(n.h3,{id:"presenting-a-fullscreen-video-player",children:"Presenting a fullscreen video player"}),"\n",(0,r.jsxs)(n.p,{children:["A native iOS or Android video player that transitions into fullscreen typically creates another activity\nor view that ",(0,r.jsx)(n.em,{children:"overlays the existing view stack"}),", while activating an immersive mode to maximize\nscreen size.\nThis also introduces a new user interface layer that includes essential playback controls and a method for\nexiting fullscreen mode."]}),"\n",(0,r.jsxs)(n.p,{children:["React Native, as a UI framework, makes it possible to create a screen with UI elements such a buttons\nand text elements, and provides a means to create stacked views with packages such as\n",(0,r.jsx)(n.a,{href:"https://reactnavigation.org/",children:"react-native-navigation"}),". It manages the lifecycle of the native UI elements, and\nmay encounter issues when elements are generated outside its control."]}),"\n",(0,r.jsx)(n.p,{children:"When an app integrates a video player that needs the ability to present itself in fullscreen mode, there are\ntypically two possibilities to transition to the fullscreen player:"}),"\n",(0,r.jsx)(n.h3,{id:"1-a-separate-player-screen",children:"1. A separate player screen"}),"\n",(0,r.jsxs)(n.p,{children:["Navigate to a ",(0,r.jsx)(n.em,{children:"separate player screen"})," that contains only the video player presented in an immersive mode."]}),"\n",(0,r.jsx)(n.p,{children:"The first option has the advantage that it is simple and straightforward to implement. The main disadvantage is that\ntransitioning to another screen means recreating (remounting) the player, causing a visual interruption in playback.\nTypically, this option is used when the first screen has an inline preview image that transitions to a fullscreen player\nscreen when tapped."}),"\n",(0,r.jsx)(n.h3,{id:"2-an-inline-video-player",children:"2. An inline video player"}),"\n",(0,r.jsxs)(n.p,{children:["Make the current ",(0,r.jsx)(n.em,{children:"inline video player"})," component stretch itself while covering all elements in the current screen."]}),"\n",(0,r.jsx)(n.p,{children:"The second option is able to let a video play inline with the other screen elements. The player is a part of the\nview hierarchy and will need to cover the whole screen without remounting the player component."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.img,{src:t(34501).Z+"",width:"288",height:"512"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.img,{src:t(81773).Z+"",width:"288",height:"512"})})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Transitioning from an inline player to fullscreen on Android."}),(0,r.jsx)(n.td,{children:"Transitioning from an inline player to fullscreen on iOS."})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"react-native-theoplayer"})," SDK supports this option on iOS and Android by ",(0,r.jsx)(n.strong,{children:"re-parenting"})," the native view to the\ntop-most node of the view hierarchy when the player's presentation mode is set to ",(0,r.jsx)(n.code,{children:"fullscreen"}),", creating a\nseamless experience."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { PresentationMode } from './PresentationMode';\n\nplayer.presentationMode = PresentationMode.fullscreen;\n"})}),"\n",(0,r.jsx)(n.p,{children:"When the player transitions back to inline mode, the view hierarchy will be restored."}),"\n",(0,r.jsxs)(n.p,{children:["Any child of the",(0,r.jsx)(n.code,{children:"THEOplayerView"})," component, typically the user interface, will move as well through the view hierarchy."]}),"\n",(0,r.jsx)(n.h3,{id:"disable-re-parenting-on-android",children:"Disable re-parenting on Android"}),"\n",(0,r.jsxs)(n.p,{children:["On Android, it is possible to disable the re-parenting mechanism by setting build flag\n",(0,r.jsx)(n.code,{children:"THEOplayer_reparent_on_fullscreen=false"})," in the app's gradle properties. This could be useful if your\napp wants to implement its own logic, or re-parent to a different node than the top-most one.\n",(0,r.jsx)(n.a,{href:"https://developer.android.com/develop/ui/views/layout/immersive",children:"Immersive mode"})," will still be enabled in this case."]}),"\n",(0,r.jsx)(n.h3,{id:"ios-home-indicator",children:"iOS home indicator"}),"\n",(0,r.jsx)(n.p,{children:"On iOS, a visual bar at the bottom of the screen called the home indicator, allows the user to return to the device's home screen when dragging it up. This is often preceived as a disturbing visual element when viewing a stream in fullscreen mode. To hide the home indicator, The rootViewController of the application needs to be setup accordingly, via inheritance. As part of react-native-theoplayer we've prepared a basic ViewController setup (HomeIndicatorViewController) that takes care of this. To hide the home indicator you change the default rootViewcontroller from a basic UIViewController to our HomeIndicatorViewController:"}),"\n",(0,r.jsx)(n.p,{children:"Import the react-native-theoplayer swift code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"@import react_native_theoplayer;\n"})}),"\n",(0,r.jsx)(n.p,{children:"And, when using RCTAppDelegate in the native app:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"- (UIViewController *)createRootViewController {\n  return [HomeIndicatorViewController new];\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"or otherwise:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"HomeIndicatorViewController *rootViewController = [HomeIndicatorViewController new];\n...\nself.window.rootViewController = rootViewController;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Our iOS presentationMode changing code checks if the rootViewController is of type HomeIndicatorViewController and will, in that case, automatically take care of showing/hiding the home indicator."}),"\n",(0,r.jsx)(n.h2,{id:"portals-for-ios-and-android",children:"Portals for iOS and Android"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react-dom/createPortal#usage",children:"Portal"})," is a well-known concept in React that\nenables rendering a component in a different location in the DOM view hierarchy. Normally, when a component is\nrendered, it is mounted into the DOM as a child of the nearest parent node. Sometimes, however, it is useful\nto let the child mount at a different location in the DOM tree. Internally, the portal will also re-parent the\nview to a different node in the view hierarchy, similar to the approach ",(0,r.jsx)(n.code,{children:"react-native-theoplayer"})," takes when\ngoing to fullscreen."]}),"\n",(0,r.jsx)(n.p,{children:'A typical use case is when the child component needs to "break out" of its container. Examples are dialogs,\ntooltips, and floating or fullscreen video components. In the next section we will outline the creation of an\nin-app mini player.'}),"\n",(0,r.jsx)(n.h3,{id:"using-portals-to-transition-to-an-in-app-mini-player",children:"Using Portals to transition to an in-app mini player"}),"\n",(0,r.jsx)(n.p,{children:"This section introduces a basic example illustrating how Portals facilitate the creation of an inline video component\ncapable of transitioning to a mini player at the bottom of the screen, overlaying the other components."}),"\n",(0,r.jsxs)(n.p,{children:["There are many packages available that bring Portal functionality to React Native. However, we will\nuse ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@alexzunik/rn-native-portals-reborn",children:"a package"})," that not only renders the component to an alternate location in the DOM tree, but also\n",(0,r.jsx)(n.em,{children:"relocates the native view to a different parent in the native view hierarchy"}),".\nThis approach aims to prevent the remounting of the complex video component."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"export default function App() {\n  const [isMiniPlayer, setMiniPlayer] = useState(false);\n\n  const onPlayerReady = (player: THEOplayer) => {\n    // set-up player\n  }\n\n  return (\n    <View style={styles.container}>\n      <PortalOrigin destination={isMiniPlayer ? 'miniplayer' : null}>\n        <View style={isMiniPlayer ? styles.videoContainerMini : styles.videoContainer}>\n          <THEOplayerView config={playerConfig} onPlayerReady={onPlayerReady}>\n            {player !== undefined && (<UiContainer>{/*left out for clarity*/}</UiContainer>)}\n          </THEOplayerView>\n        </View>\n      </PortalOrigin>\n\n      <View style={styles.contentContainer}>\n        <Text style={{ color: '#ffffff' }}>This text will remain on screen when play-out continues into the mini-player.</Text>\n      </View>\n\n      <View style={isMiniPlayer ? styles.miniContainer : styles.miniContainerInactive}>\n        <PortalDestination name=\"miniplayer\" />\n      </View>\n    </View>);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The player component along with its UI container in the example above is wrapped in a ",(0,r.jsx)(n.code,{children:"PortalOrigin"}),".\nIts destination is left ",(0,r.jsx)(n.code,{children:"null"})," as long as the player is presented inline."]}),"\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(n.code,{children:"isMiniPlayer"})," state property is set to ",(0,r.jsx)(n.code,{children:"true"}),", the screen is re-rendered with destination set to ",(0,r.jsx)(n.code,{children:"'miniplayer'"}),".\nThe player component will become a child of the ",(0,r.jsx)(n.code,{children:"PortalDestination"})," with the same name. On a native level the view\nwill also be re-parented to the miniPlayer container at the bottom of the screen."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.img,{src:t(22824).Z+"",width:"180",height:"320"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.img,{src:t(71593).Z+"",width:"180",height:"320"})})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"A mini-player using Portals on Android"}),(0,r.jsx)(n.td,{children:"A mini-player using Portals on iOS"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["Variants of the approach discussed above put the ",(0,r.jsx)(n.code,{children:"PortalDestination"})," on a dedicated route in a\n",(0,r.jsx)(n.a,{href:"https://reactnavigation.org/docs/navigation-container/",children:(0,r.jsx)(n.code,{children:"NavigationContainer"})}),". This is\nespecially useful in a more complex app that has different routes towards showing the player component."]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},34501:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/fullscreen_android-f913c5b9498410bbd0d02e4a622cdff2.gif"},55974:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/fullscreen_chrome-6083662fda8a3afc00c6b8e6fa28cb3d.png"},81773:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/fullscreen_ios-eff1f4d528cc8f9f413d3e9ff2d3ddaf.gif"},74232:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/fullscreen_ios_safari-5f157710d5ae0aed7fb8584e7fcd22c3.png"},22824:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/miniplayer_android-717e2a8d9844bf570d423d5dfe954ff8.gif"},71593:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/miniplayer_ios-0682a98a45d38d6ff021b3aa2b39c82f.gif"},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var i=t(67294);let r={},a=i.createContext(r);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);