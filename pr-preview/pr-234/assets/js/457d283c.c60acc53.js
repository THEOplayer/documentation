"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["19626"],{22083:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>r,metadata:()=>a,assets:()=>s,toc:()=>c,contentTitle:()=>l});var a=JSON.parse('{"id":"external/react-native-theoplayer-ui/doc/getting-started","title":"Getting started","description":"Start building your UI in just a few minutes!","source":"@site/open-video-ui/external/react-native-theoplayer-ui/doc/getting-started.md","sourceDirName":"external/react-native-theoplayer-ui/doc","slug":"/react-native/getting-started","permalink":"/documentation/pr-preview/pr-234/open-video-ui/react-native/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/react-native-theoplayer-ui/blob/-/doc/getting-started.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Getting started","description":"Start building your UI in just a few minutes!","sidebar_position":1,"sidebar_custom_props":{"icon":"\uD83D\uDE80"},"slug":"/react-native/getting-started"},"sidebar":"react-native","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-234/open-video-ui/react-native/"},"next":{"title":"Limitations and Known Issues","permalink":"/documentation/pr-preview/pr-234/open-video-ui/react-native/limitations"}}'),i=n("85893"),o=n("50065");let r={title:"Getting started",description:"Start building your UI in just a few minutes!",sidebar_position:1,sidebar_custom_props:{icon:"\uD83D\uDE80"},slug:"/react-native/getting-started"},l="Getting started with the React Native THEOplayer UI",s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Using the THEOplayerDefaultUi",id:"using-the-theoplayerdefaultui",level:2},{value:"Available components",id:"available-components",level:2},{value:"Creating your own custom UI",id:"creating-your-own-custom-ui",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-with-the-react-native-theoplayer-ui",children:"Getting started with the React Native THEOplayer UI"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/@theoplayer/react-native-ui",children:(0,i.jsx)(t.code,{children:"@theoplayer/react-native-ui"})})," package provides\na collection of UI components for ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/react-native-theoplayer",children:(0,i.jsx)(t.code,{children:"react-native-theoplayer"})}),",\nthe official THEOplayer React Native video player.\nThe following platforms are supported:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Android, Android TV & FireTV"}),"\n",(0,i.jsx)(t.li,{children:"iOS & tvOS (Apple TV)"}),"\n",(0,i.jsx)(t.li,{children:"Web"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This guide covers how to set up the React Native UI, and how to add a UI to your ",(0,i.jsx)(t.code,{children:"THEOplayerView"})," component."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"basic-ui",src:n(92930).Z+"",width:"874",height:"495"})}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["If you have no previous experience in React Native, we encourage you to first explore the\n",(0,i.jsx)(t.a,{href:"https://reactnative.dev/docs/getting-started",children:"React Native Documentation"}),",\nas it gives you a good start on one of the most popular app development frameworks."]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["Using ",(0,i.jsx)(t.code,{children:"npm"}),", ",(0,i.jsx)(t.code,{children:"yarn"}),", or any other package manager, add ",(0,i.jsx)(t.code,{children:"@theoplayer/react-native-ui"})," to your project's dependencies."]}),"\n",(0,i.jsxs)(t.p,{children:["The UI components will depend on a ",(0,i.jsx)(t.code,{children:"THEOplayerView"})," instance provided by ",(0,i.jsx)(t.code,{children:"react-native-theoplayer"}),", so make\nsure this package is installed."]}),"\n",(0,i.jsx)(t.p,{children:"The UI components also have a few non-transitive dependencies that are required to be installed manually."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install \\\n  @theoplayer/react-native-ui \\\n  react-native-theoplayer \\\n  react-native-svg\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The package contains a number of transitive dependencies that contain native iOS and Android platform code\nas well. These are not auto-linked if your project does not already have them as a dependency,\nso they need to be explicitly defined in the\n",(0,i.jsx)(t.a,{href:"https://github.com/react-native-community/cli/blob/main/docs/configuration.md",children:(0,i.jsx)(t.code,{children:"react-native.config.js"})})," file\nin project's root:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",metastring:'title="react-native.config.js"',children:"module.exports = {\n  dependencies: {\n    'react-native-google-cast': {},\n    'react-native-svg': {},\n  },\n};\n"})}),"\n",(0,i.jsx)(t.h2,{id:"using-the-theoplayerdefaultui",children:"Using the THEOplayerDefaultUi"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"THEOplayerDefaultUi"})," can be used to provide basic playback controls to the viewer.\nAs the default UI also includes Chromecast & Airplay support, make sure to configure these first as explained in the\n",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/develop/doc/cast.md",children:"cast documentation"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"const App = () => {\n  return (\n    <THEOplayerDefaultUi\n      style={StyleSheet.absoluteFill}\n      config={playerConfig}\n      onPlayerReady={onPlayerReady}\n    />\n  );\n};\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The UI can be styled with a ",(0,i.jsx)(t.code,{children:"theme: THEOplayerTheme"})," prop, to give it your own look and feel."]}),"\n",(0,i.jsxs)(t.p,{children:["Additional components can be passed as properties to be added to the top/bottom control bars of the UI. These can be\ncomponents from the ",(0,i.jsx)(t.code,{children:"react-native-theoplayer"})," package, or they could be your own custom components:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"const App = () => {\n  return (\n    <THEOplayerDefaultUi\n      style={StyleSheet.absoluteFill}\n      config={playerConfig}\n      {/* A UI component provided by react-native-theoplayer.*/}\n      bottomSlot={<PipButton/>}\n      {/* A custom component.*/}\n      topSlot={<MyCustomComponent/>}\n    />\n  );\n};\n"})}),"\n",(0,i.jsx)(t.h2,{id:"available-components",children:"Available components"}),"\n",(0,i.jsxs)(t.p,{children:["The API documentation of all available components can be found ",(0,i.jsx)(t.a,{href:"https://theoplayer.github.io/react-native-theoplayer-ui/api/",children:"here"}),".\nTheir source code can be found ",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer-ui/tree/develop/src/ui",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"creating-your-own-custom-ui",children:"Creating your own custom UI"}),"\n",(0,i.jsxs)(t.p,{children:["All components inside the ",(0,i.jsx)(t.code,{children:"THEOplayerDefaultUi"})," are available through the ",(0,i.jsx)(t.code,{children:"react-native-theoplayer"})," package and can\nbe used to create your own custom layout. Since ",(0,i.jsx)(t.code,{children:"THEOplayerDefaultUi"}),' is our version of a "custom" UI, you could\nuse this as a starting point for your own custom layout.']}),"\n",(0,i.jsxs)(t.p,{children:["This use-case is implemented in the ",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/develop/doc/example-app.md",children:"example app"}),"\nthat is included in the ",(0,i.jsx)(t.code,{children:"react-native-theoplayer"})," repository, which adds a\ncustom ",(0,i.jsx)(t.a,{href:"https://github.com/THEOplayer/react-native-theoplayer/blob/develop/example/src/custom/SourceMenuButton.tsx",children:"SourceMenuButton"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"During ad playback the UI probably needs to be different compared to during content. This can include disabling seeking,\nshowing the ad break duration and when the user can skip to content."}),"\n",(0,i.jsxs)(t.p,{children:["Similarly to content playback, the ad UI can be customized by adding components to their respective\nslots: ",(0,i.jsx)(t.code,{children:"adTop"}),", ",(0,i.jsx)(t.code,{children:"adCenter"})," and ",(0,i.jsx)(t.code,{children:"adBottom"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The customized ad UI is only available for web at this moment. Android and iOS will have a play/pause interaction\nin the middle of the screen together with the default Google IMA ad layout."}),"\n",(0,i.jsx)(t.p,{children:"The following example shows a UI layout with only basic playback controls:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"export default function App() {\n  const [player, setPlayer] = useState<THEOplayer | undefined>(undefined);\n  const onPlayerReady = (player: THEOplayer) => {\n    setPlayer(player);\n  };\n  return (\n    <View style={StyleSheet.absoluteFill}>\n      <THEOplayerView config={playerConfig} onPlayerReady={onPlayerReady}>\n        {player !== undefined && (\n          <UiContainer\n            theme={DEFAULT_THEOPLAYER_THEME}\n            player={player}\n            behind={<CenteredDelayedActivityIndicator size={50} />}\n            center={\n              <CenteredControlBar\n                left={<SkipButton skip={-10}/>}\n                middle={<PlayButton/>}\n                right={<SkipButton skip={30}/>}\n              />\n            }\n            bottom={\n              <>\n                <ControlBar>\n                  <SeekBar />\n                </ControlBar>\n                <ControlBar>\n                  <MuteButton />\n                  <TimeLabel showDuration={true} />\n                  <Spacer />\n                  <FullscreenButton />\n                </ControlBar>\n              </>\n            }\n            adTop={\n              <ControlBar>\n                <AdClickThroughButton />\n              </ControlBar>\n            }\n            adCenter={<CenteredControlBar middle={<PlayButton />} />}\n            adBottom={\n              <>\n                <ControlBar style={{ justifyContent: 'flex-start' }}>\n                  <AdDisplay />\n                  <AdCountdown />\n                  <Spacer />\n                  <AdSkipButton />\n                </ControlBar>\n                <ControlBar>\n                  <MuteButton />\n                  <SeekBar />\n                </ControlBar>\n              </>\n            }\n          />\n        )}\n      </THEOplayerView>\n    </View>\n  );\n}\n"})})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},92930:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/example-app-player-ui-028fd4ae776c8d714aa787cd82c253ab.png"},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return r}});var a=n(67294);let i={},o=a.createContext(i);function r(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);