"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["41546"],{65093:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"getting-started/frameworks/nuxtjs/getting-started","title":"Getting started with NuxtJS","description":"This how-to guide describes how to integrate THEOplayer with NuxtJS framework.","source":"@site/theoplayer_versioned_docs/version-v8/getting-started/02-frameworks/04-nuxtjs/00-getting-started.md","sourceDirName":"getting-started/02-frameworks/04-nuxtjs","slug":"/getting-started/frameworks/nuxtjs/getting-started","permalink":"/documentation/pr-preview/pr-254/theoplayer/v8/getting-started/frameworks/nuxtjs/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v8/getting-started/02-frameworks/04-nuxtjs/00-getting-started.md","tags":[],"version":"v8","sidebarPosition":0,"frontMatter":{},"sidebar":"web","previous":{"title":"Getting started with React","permalink":"/documentation/pr-preview/pr-254/theoplayer/v8/getting-started/frameworks/react/getting-started"},"next":{"title":"Getting started with VueJS","permalink":"/documentation/pr-preview/pr-254/theoplayer/v8/getting-started/frameworks/vuejs/getting-started"}}'),r=t("85893"),i=t("50065");let o={},a="Getting started with NuxtJS",l={},c=[{value:"Instructions",id:"instructions",level:2},{value:"Build Setup",id:"build-setup",level:2}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"getting-started-with-nuxtjs",children:"Getting started with NuxtJS"})}),"\n",(0,r.jsx)(n.p,{children:"This how-to guide describes how to integrate THEOplayer with NuxtJS framework."}),"\n",(0,r.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Open your favorite IDE and then a terminal and install Vue CLI component:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npx create-nuxt-app theoplayer-nuxtjs-sample\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Follow the installation process (please note these instructions assume you\u2019ve chosen npm as a module packager)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Once the app is created, execute the following commands:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"cd theoplayer-nuxtjs-sample\nnpm install\nnpm run dev\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The default application should be served under: ",(0,r.jsx)(n.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Reference the THEOplayer Web SDK by editing file ",(0,r.jsx)(n.code,{children:"nuxt.config.js"})," like the following:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  mode: 'spa',\n  /*\n   ** Headers of the page\n   */\n  head: {\n    title: process.env.npm_package_name || '',\n    meta: [\n      { charset: 'utf-8' },\n      { name: 'viewport', content: 'width=device-width, initial-scale=1' },\n      {\n        hid: 'description',\n        name: 'description',\n        content: process.env.npm_package_description || '',\n      },\n    ],\n    link: [\n      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },\n      {\n        rel: 'stylesheet',\n        type: 'text/css',\n        href: '//cdn.theoplayer.com/dash/theoplayer/ui.css',\n      },\n    ],\n    script: [\n      {\n        type: 'text/javascript',\n        src: '//cdn.theoplayer.com/dash/theoplayer/THEOplayer.js',\n      },\n    ],\n  },\n  /*\n   ** Customize the progress-bar color\n   */\n  loading: { color: '#fff' },\n  /*\n   ** Global CSS\n   */\n  css: [],\n  /*\n   ** Plugins to load before mounting the App\n   */\n  plugins: [],\n  /*\n   ** Nuxt.js dev-modules\n   */\n  buildModules: [\n    // Doc: https://github.com/nuxt-community/eslint-module\n    '@nuxtjs/eslint-module',\n  ],\n  /*\n   ** Nuxt.js modules\n   */\n  modules: [],\n  /*\n   ** Build configuration\n   */\n  build: {\n    /*\n     ** You can extend webpack config here\n     */\n    extend(config, ctx) {},\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:"Add the new component named Player.vue under this path: components/Player.vue"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<template>\n  <div ref=\"theoplayer\" class=\"theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer\"></div>\n</template>\n\n<script>\n  import { mapState } from 'vuex';\n  export default {\n    computed: mapState({\n      source: (state) => state.source,\n    }),\n    mounted() {\n      this.playerInit();\n    },\n    methods: {\n      playerInit() {\n        const player = new window.THEOplayer.Player(this.$refs.theoplayer, {\n          fluid: true,\n          libraryLocation: '//cdn.theoplayer.com/dash/theoplayer/',\n        });\n        player.source = {\n          sources: this.source,\n        };\n      },\n    },\n  };\n<\/script>\n<style>\n  .THEOplayer {\n    width: 50%;\n    margin: 0 auto;\n  }\n\n  .video-js.vjs-16-9 {\n    padding-top: 28.12%;\n    width: 50%;\n  }\n</style>\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsx)(n.li,{children:"Please note that vuex is used to pass the player source, for this purpose add index.js file under this path: store/index.js with following content:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export const state = () => ({\n  source: null,\n});\n\nexport const mutations = {\n  setSource(state, source) {\n    state.source = source;\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"8",children:["\n",(0,r.jsx)(n.li,{children:"Now, we are ready to reference the player component in the index.vue like following:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<template>\n  <div class="container">\n    <div>\n      <logo />\n      <player />\n      <h1 class="title">theoplayer-nuxtjs-sample</h1>\n      <h2 class="subtitle">THEOplayer nuxtjs sample app</h2>\n      <div class="links">\n        <a href="https://nuxtjs.org/" target="_blank" class="button--green"> Documentation </a>\n        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey"> GitHub </a>\n      </div>\n    </div>\n  </div>\n</template>\n<script>\n  import Logo from \'~/components/Logo.vue\';\n  import Player from \'~/components/Player.vue\';\n\n  export default {\n    components: {\n      Logo,\n      Player,\n    },\n    created() {\n      this.$store.commit(\'setSource\', [\n        {\n          type: \'application/x-mpegurl\',\n          src: \'//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8\',\n        },\n      ]);\n    },\n  };\n<\/script>\n\n<style>\n  .container {\n    margin: 0 auto;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .title {\n    font-family:\n      \'Quicksand\',\n      \'Source Sans Pro\',\n      -apple-system,\n      BlinkMacSystemFont,\n      \'Segoe UI\',\n      Roboto,\n      \'Helvetica Neue\',\n      Arial,\n      sans-serif;\n    display: block;\n    font-weight: 300;\n    font-size: 100px;\n    color: #35495e;\n    letter-spacing: 1px;\n  }\n\n  .subtitle {\n    font-weight: 300;\n    font-size: 42px;\n    color: #526488;\n    word-spacing: 5px;\n    padding-bottom: 15px;\n  }\n\n  .links {\n    padding-top: 15px;\n  }\n</style>\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"9",children:["\n",(0,r.jsx)(n.li,{children:"This should result in a page which includes the THEOplayer component."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"build-setup",children:"Build Setup"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# install dependencies\n$ npm run install\n\n# serve with hot reload at localhost:3000\n$ npm run dev\n\n# build for production and launch server\n$ npm run build\n$ npm run start\n\n# generate static project\n$ npm run generate\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For detailed explanation on how things work, check out ",(0,r.jsx)(n.a,{href:"https://nuxtjs.org",children:"Nuxt.js docs"}),"."]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(67294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);