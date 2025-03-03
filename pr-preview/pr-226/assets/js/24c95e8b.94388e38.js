"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["76855"],{49538:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"how-to-guides/ui/ui-skinning","title":"UI Skinning","description":"THEOplayer allows you to style the player to your own needs. This guide will give an in-depth explanation of which colors can be changed and which parts of the player are affected. First it will explain how to change the skin of your player using 6 custom CSS classes. Afterwards, an overview follows explaining which parts of the players are affected by each class. If you don\'t already have an up-and-running version of THEOplayer, take a look at our getting started guide.","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/11-ui/13-ui-skinning.md","sourceDirName":"how-to-guides/11-ui","slug":"/how-to-guides/ui/ui-skinning","permalink":"/documentation/pr-preview/pr-226/theoplayer/v4/how-to-guides/ui/ui-skinning","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/11-ui/13-ui-skinning.md","tags":[],"version":"v4","sidebarPosition":13,"frontMatter":{},"sidebar":"roku","previous":{"title":"Customizing the UI: vertical volume slider","permalink":"/documentation/pr-preview/pr-226/theoplayer/v4/how-to-guides/ui/customising-vertical-volume-slider"},"next":{"title":"How to detect the visibility of the default control bar","permalink":"/documentation/pr-preview/pr-226/theoplayer/v4/how-to-guides/ui/how-to-detect-visibility-default-control-bar"}}'),o=t("85893"),i=t("50065");let s={},l="UI Skinning",a={},c=[{value:"SDKs",id:"sdks",level:2},{value:"CSS properties to override",id:"css-properties-to-override",level:2},{value:"Affected Components",id:"affected-components",level:2},{value:"Summary",id:"summary",level:2},{value:"Mobile",id:"mobile",level:2},{value:"Legacy iOS/tvOS SDK (4.12.x)",id:"legacy-iostvos-sdk-412x",level:5},{value:"Legacy Android SDK (4.12.x)",id:"legacy-android-sdk-412x",level:5}];function d(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"ui-skinning",children:"UI Skinning"})}),"\n",(0,o.jsxs)(n.p,{children:["THEOplayer allows you to style the player to your own needs. This guide will give an in-depth explanation of which colors can be changed and which parts of the player are affected. First it will explain how to change the skin of your player using 6 custom CSS classes. Afterwards, an overview follows explaining which parts of the players are affected by each class. If you don't already have an up-and-running version of THEOplayer, take a look at our ",(0,o.jsx)(n.a,{href:"https://support.theoplayer.com/hc/en-us/articles/115001933305-Getting-Started-with-THEOplayer-2-X",children:"getting started guide"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"sdks",children:"SDKs"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Web SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Android SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"iOS SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"tvOS SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Android TV SDK"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Chromecast SDK"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"css-properties-to-override",children:"CSS properties to override"}),"\n",(0,o.jsxs)(n.p,{children:["THEOplayer provides multiple colors you can change to create your desired look-and-feel. These colors can be changed easily by including a custom CSS file which overrides some classes. An example of such a file is given below. There is also a demo page available where you can interactively change these colors and immediately see the effect ",(0,o.jsx)(n.a,{href:"https://demo.theoplayer.com/ui-skinning",children:"here"}),". ",(0,o.jsx)(n.strong,{children:"NOTE:"})," The vjs-selected is needed to change the color of selected items in the menus."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<style>\n  .theo-primary-color,\n  .vjs-selected {\n    color: #ffc50f !important;\n  }\n\n  .theo-primary-background {\n    color: #000000 !important;\n    background-color: #ffc50f !important;\n  }\n\n  .theo-secondary-color {\n    color: #ffffff !important;\n  }\n\n  .theo-secondary-background {\n    color: #000000 !important;\n    background-color: #ffffff !important;\n  }\n\n  .theo-tertiary-color {\n    color: #000000 !important;\n  }\n\n  .theo-tertiary-background {\n    color: #ffffff !important;\n    background-color: #000000 !important;\n  }\n</style>\n"})}),"\n",(0,o.jsx)(n.h2,{id:"affected-components",children:"Affected Components"}),"\n",(0,o.jsx)(n.p,{children:"This section discusses which parts of the components are affected by each CSS class."}),"\n",(0,o.jsxs)(n.p,{children:["When the player is added to the page, the only visible control is the ",(0,o.jsx)(n.strong,{children:"big-play-button"}),". The color of this component is equal to the ",(0,o.jsx)(n.em,{children:"theoplayer-primary-color."})]}),"\n",(0,o.jsxs)(n.p,{children:["When the big-play-button is clicked, the player starts playing the video. Two components are visible now: the ",(0,o.jsx)(n.strong,{children:"control-bar"})," and the ",(0,o.jsx)(n.strong,{children:"sharing button"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The background color of the** control bar** can be styled using ",(0,o.jsx)(n.em,{children:"theoplayer-tertiary-color"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"control bar"})," exists of: ",(0,o.jsx)(n.strong,{children:"control-bar-icons"}),", the ",(0,o.jsx)(n.strong,{children:"progress bar"})," and ",(0,o.jsx)(n.strong,{children:"menu"}),"s."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The color of the control bar icons can be set using ",(0,o.jsx)(n.code,{children:"theoplayer-secondary-color"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The color of the progress bar can be set using ",(0,o.jsx)(n.code,{children:"theoplayer-primary-color"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The color and background color of the header of the menu can be set using ",(0,o.jsx)(n.code,{children:"theoplayer-primary-background"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The color and background color of the content of the menu can be set using ",(0,o.jsx)(n.code,{children:"theoplayer-tertiary-background"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The color of the selected text of the menu can be set using ",(0,o.jsx)(n.code,{children:"theoplayer-primary-color"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(n.p,{children:"After this tutorial, you should be able to style your THEOplayer to your own needs. All CSS properties and the components they affect were discussed. A brief summary of these properties is given below:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Color"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Affected components"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Primary color"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Big play button, progress bar, menu text"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Primary background"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Menu header"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Secondary color"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Control bar icons (including time and tooltips)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Secondary background"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Social sharing close button"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Tertiary color"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Control bar background"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Tertiary background"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"Menu content background"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"mobile",children:"Mobile"}),"\n",(0,o.jsxs)(n.p,{children:["Our mobile player uses the same class naming as our web version, so this is applicable to mobile as well. The CSS changes are to be gathered in a custom .CSS file, added to your project and then loaded into the PlayerConfiguration. More information on ",(0,o.jsx)(n.a,{href:"/documentation/pr-preview/pr-226/theoplayer/v4/faq/how-to-add-css-or-javascript-files-to-android-ios",children:"How to add CSS or JavaScript files to an Android/iOS project"})," ."]}),"\n",(0,o.jsx)(n.h5,{id:"legacy-iostvos-sdk-412x",children:"Legacy iOS/tvOS SDK (4.12.x)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:'let cssPath = Bundle.main.path(forResource: "style", ofType: "css")!\nlet theoConfig = THEOplayerConfiguration(cssPaths: [cssPath])\nlet theoplayer = THEOplayer(with: //frame, configuration: theoConfig)\n'})}),"\n",(0,o.jsx)(n.h5,{id:"legacy-android-sdk-412x",children:"Legacy Android SDK (4.12.x)"}),"\n",(0,o.jsx)(n.p,{children:"You can do this either by XML:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'<com.theoplayer.android.api.THEOplayerView\n    android:id="@+id/theo_player_view"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    app:defaultCss="true"\n    app:cssPaths="path/to/style1.css"/>\n'})}),"\n",(0,o.jsx)(n.p,{children:"Or directly in the player config in Java:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()\n        .chromeless(false)\n        .defaultCss(true)\n        .cssPaths("path/to/style1.css","path/to/style2.css") // Path is relative to the location of the assets directory\n        .build();\nTHEOplayerView tpv = new THEOplayerView(this, playerConfig);\n'})}),"\n",(0,o.jsx)(n.p,{children:"It is also possible to change certain parts of the UI by editing the xml resources directly.\nE.g. colors.xml:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="colorPrimary">#E361FF</color>\n    <color name="colorPrimaryDark">#00574B</color>\n    <color name="colorAccent">#D81B60</color>\n</resources>\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var r=t(67294);let o={},i=r.createContext(o);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);