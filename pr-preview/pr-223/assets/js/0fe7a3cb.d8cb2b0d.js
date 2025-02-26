"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["69920"],{96505:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>o,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>r});var a=JSON.parse('{"id":"getting-started/sdks/web/how-to-implement-seamless-transition","title":"How to implement a seamless transition between videos?","description":"You may need an answer to this question if you want to play one video after the other without letting the user know the source has changed (to the user they will seem as if playing just one video). Similar questions may be:","source":"@site/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/01-web/04-how-to-implement-seamless-transition.md","sourceDirName":"getting-started/01-sdks/01-web","slug":"/getting-started/sdks/web/how-to-implement-seamless-transition","permalink":"/documentation/pr-preview/pr-223/theoplayer/v6/getting-started/sdks/web/how-to-implement-seamless-transition","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/getting-started/01-sdks/01-web/04-how-to-implement-seamless-transition.md","tags":[],"version":"v6","sidebarPosition":4,"frontMatter":{},"sidebar":"web","previous":{"title":"How to embed an iframe","permalink":"/documentation/pr-preview/pr-223/theoplayer/v6/getting-started/sdks/web/how-can-we-embed-iframe"},"next":{"title":"How to work around browser cache with new THEOplayer SDK libraries?","permalink":"/documentation/pr-preview/pr-223/theoplayer/v6/getting-started/sdks/web/how-to-work-around-browser-cache-with-new-license"}}'),s=n("85893"),i=n("50065");let o={},r="How to implement a seamless transition between videos?",l={},c=[];function h(e){let t={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"how-to-implement-a-seamless-transition-between-videos",children:"How to implement a seamless transition between videos?"})}),"\n",(0,s.jsx)(t.p,{children:"You may need an answer to this question if you want to play one video after the other without letting the user know the source has changed (to the user they will seem as if playing just one video). Similar questions may be:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Is it possible to make 2 video files play one after the other without pause?"}),"\n",(0,s.jsx)(t.li,{children:"How can I play a second video file after the first without the user notice what happened?"}),"\n",(0,s.jsx)(t.li,{children:"How to make a forking video, one where the user can choose his/her own path?"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"This result is achieved taking advantage of a HTML5 canvas element to cover the source change."})," An example can be seen on ",(0,s.jsx)(t.a,{href:"http://cdn.theoplayer.com/demos/confluence/seamless-video-transition.html",children:"this page"}),"."]}),"\n",(0,s.jsx)(t.p,{children:'You can find the code of the page here below, opportunely commented to clarify how it works (hint: all interesting comments start with "COMMENT:" to aid the search).'}),"\n",(0,s.jsx)(t.p,{children:"Seamless video transitionExpand source"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\n    <meta http-equiv="x-ua-compatible" content="ie=edge" />\n\n    <title>Seamless video transition</title>\n    <link\n      rel="stylesheet"\n      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css"\n      integrity="sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi"\n      crossorigin="anonymous"\n    />\n    <link rel="stylesheet" type="text/css" href="//cdn.theoplayer.com/dash/theoplayer/ui.css" />\n\n    <script type="text/javascript" src="//cdn.theoplayer.com/dash/theoplayer/THEOplayer.js"><\/script>\n\n    <style>\n      canvas {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        display: none;\n      }\n      button {\n        margin: 1em 0;\n      }\n    </style>\n  </head>\n  <body>\n    <h1>Seamless video transition</h1>\n    <div class="container">\n      <div id="theoplayer-wrapper">\n        <div class="video-js theoplayer-skin">\n          \x3c!-- COMMENT: a canvas element is set inside the THEOplayer wrapper. Initial sizes are set but will be reset when the canvas is called --\x3e\n          <canvas width="503px" height="283px"> </canvas>\n        </div>\n        <button id="sourcechange-btn">Change video</button>\n      </div>\n    </div>\n\n    <script type="text/javascript">\n      var element = document.querySelector(\'.video-js\');\n\n      // COMMENT: some player configuration here - interesting but nothing related to this example\n      var player = new THEOplayer.Player(element, {\n        ui: {\n          //fluid: true\n          width: \'800\',\n          height: \'450\',\n        },\n        libraryLocation: \'//cdn.theoplayer.com/dash/theoplayer/\',\n      });\n      player.autoplay = true;\n      player.source = {\n        sources: \'//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8\',\n      };\n\n      //COMMENT: objective: hide the transition between 2 videos.\n      // To do this, we:\n      // - detect when the source must be changed\n      // - save the last frame in the canvas poster that is placed on top of the player\n      // - we load the new source\n      // - when playback starts, the canvas is hidden\n\n      // COMMENT: this detects the first play event and calls the function firstplay()\n      player.addEventListener(\'sourcechange\', function () {\n        //console.log("A new SourceDescription has been set.");\n        player.removeEventListener(\'playing\', firstplay);\n        player.addEventListener(\'playing\', firstplay);\n      });\n\n      // COMMENT: on click we call writeToCanvas() and change the player source after a small delay (time is needed for the canvas content to be loaded)\n      var button = document.querySelector(\'#sourcechange-btn\');\n      button.addEventListener(\'click\', () => {\n        writeToCanvas();\n        setTimeout(function () {\n          player.src =\n            \'https://amssamples.streaming.mediaservices.windows.net/bb34a723-f69a-4231-afba-dc850f9e3da8/ChildOfThe90s.ism/manifest(format=m3u8-aapl)\';\n        }, 50);\n      });\n\n      // COMMENT: canvas is hidden when the first play event is fired\n      function firstplay(event) {\n        var canvas = document.querySelector(\'canvas\');\n        player.removeEventListener(\'playing\', firstplay);\n        //console.log("first play event!", event);\n        canvas.style.display = \'none\';\n      }\n\n      // COMMENT:\n      // (1) Canvas is detected, its sizes adapted to those of the player and it gets the last frame as content.\n      // (2) It is displayed as block (as opposed to the initial "none")\n      function writeToCanvas() {\n        var canvas = document.querySelector(\'canvas\');\n        canvas.setAttribute(\'width\', player.videoWidth + \'px\');\n        canvas.setAttribute(\'height\', player.videoHeight + \'px\');\n        var ctx = canvas.getContext(\'2d\');\n        canvas.style.display = \'block\';\n        player.canvas.drawImage(ctx, 0, 0);\n      }\n    <\/script>\n  </body>\n</html>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The result on your page can also be improved implementing ",(0,s.jsx)(t.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/Cache.html",children:"cache"})," for your videos."]})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return o}});var a=n(67294);let s={},i=a.createContext(s);function o(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);