"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["14877"],{41082:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"getting-started/frameworks/angular/getting-started","title":"Getting started with Angular","description":"A brief guide on how to build a THEOplayer in an Angular environment.","source":"@site/theoplayer_versioned_docs/version-v7/getting-started/02-frameworks/01-angular/00-getting-started.md","sourceDirName":"getting-started/02-frameworks/01-angular","slug":"/getting-started/frameworks/angular/getting-started","permalink":"/documentation/pr-preview/pr-226/theoplayer/v7/getting-started/frameworks/angular/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v7/getting-started/02-frameworks/01-angular/00-getting-started.md","tags":[],"version":"v7","sidebarPosition":0,"frontMatter":{},"sidebar":"web","previous":{"title":"Deploying a test app on a Tizen emulator","permalink":"/documentation/pr-preview/pr-226/theoplayer/v7/getting-started/sdks/tizen/setting-up-emulator"},"next":{"title":"Getting started with React","permalink":"/documentation/pr-preview/pr-226/theoplayer/v7/getting-started/frameworks/react/getting-started"}}'),a=t("85893"),l=t("50065");let i={},s="Getting started with Angular",o={},d=[{value:"Step-by-step guide:",id:"step-by-step-guide",level:2},{value:"Related articles",id:"related-articles",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"getting-started-with-angular",children:"Getting started with Angular"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"A brief guide on how to build a THEOplayer in an Angular environment."})}),"\n",(0,a.jsx)(n.p,{children:"Note that this information is for a basic player in a local testing environment. Additional information may be needed for specific cases."}),"\n",(0,a.jsx)(n.h2,{id:"step-by-step-guide",children:"Step-by-step guide:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Make sure you have the Angular CLI installed"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"npm install -g @angular/cli\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"If needed, create a new workspace and initial application\nng new appname"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In the root project, create a new component for the player (in this case appname)"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cd appname\nng generate component theoplayer\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"add the THEOplayer.js files to the root project"}),"\n",(0,a.jsx)(n.li,{children:"In index.html add the /THEOplayer.js as a script tag and /ui.css as a stylesheet"}),"\n",(0,a.jsx)(n.li,{children:"In theoplayer.component.html add"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<div class="theoplayer-container video-js theoplayer-skin"></div>\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"7",children:["\n",(0,a.jsx)(n.li,{children:"In theoplayer.component.ts add"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Component, OnInit } from '@angular/core';\nimport * as THEOplayer from '../../../THEOplayer.js';\n\n@Component({\n  selector: 'app-theoplayer',\n  templateUrl: './theoplayer.component.html',\n  styleUrls: ['./theoplayer.component.css'],\n})\nexport class TheoplayerComponent implements OnInit {\n  constructor() {}\n\n  ngOnInit() {\n    this.createPlayer();\n  }\n\n  createPlayer() {\n    const element = document.querySelector('.theoplayer-container');\n\n    const player = new THEOplayer.Player(element, {\n      libraryLocation: '',\n    });\n\n    player.source = {\n      sources: [\n        {\n          src: '//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',\n          type: 'application/x-mpegurl', // sets type to MPEG-DASH\n        },\n      ],\n    };\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import * as THEOplayer from '../../../THEOplayer.js';\n"})}),"\n",(0,a.jsx)(n.p,{children:"will make sure to get everything needed from our sdk."}),"\n",(0,a.jsxs)(n.ol,{start:"9",children:["\n",(0,a.jsx)(n.li,{children:"In app.component.html add the following code to display the player in the app component."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<app-theoplayer></app-theoplayer>\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"10",children:["\n",(0,a.jsx)(n.li,{children:"Profit."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://angular.io/guide/quickstart",children:"https://angular.io/guide/quickstart"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var r=t(67294);let a={},l=r.createContext(a);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);