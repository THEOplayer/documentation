"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["90435"],{5872:function(e,t,n){n.r(t),n.d(t,{default:()=>f});var s=n("85893");n("67294");var a=n("67026"),r=n("66171"),i=n("86563"),l=n("23868"),o=n("53367"),c=n("7670"),d=n("83187");function u(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}function m(){let e=(0,d.default)("/");return(0,s.jsx)("li",{className:"breadcrumbs__item",children:(0,s.jsx)(o.default,{"aria-label":(0,c.translate)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,s.jsx)(u,{className:"breadcrumbHomeIcon_YNFT"})})})}function h(e){let{children:t,href:n,isLast:a}=e,r="breadcrumbs__link";return a?(0,s.jsx)("span",{className:r,itemProp:"name",children:t}):n?(0,s.jsx)(o.default,{className:r,href:n,itemProp:"item",children:(0,s.jsx)("span",{itemProp:"name",children:t})}):(0,s.jsx)("span",{className:r,children:t})}function b(e){let{children:t,active:n,index:r,addMicrodata:i}=e;return(0,s.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,a.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,s.jsx)("meta",{itemProp:"position",content:String(r+1)})]})}function f(){let e=(0,i.s1)(),t=(0,l.Ns)();return e?(0,s.jsx)("nav",{className:(0,a.Z)(r.k.docs.docBreadcrumbs,"breadcrumbsContainer_Z_bl"),"aria-label":(0,c.translate)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,s.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,s.jsx)(m,{}),e.map((t,n)=>{let a=n===e.length-1,r="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,s.jsx)(b,{active:a,index:n,addMicrodata:!!r,children:(0,s.jsx)(h,{href:r,isLast:a,children:t.label})},n)})]})}):null}},5937:function(e,t,n){n.r(t),n.d(t,{default:()=>f});var s=n("85893");n("67294");var a=n("15231"),r=n("86563"),i=n("83187"),l=n("87764"),o=n("52368"),c=n("38329"),d=n("71987"),u=n("5872"),m=n("46055");function h(e){let{categoryGeneratedIndex:t}=e;return(0,s.jsx)(a.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,i.default)(t.image)})}function b(e){let{categoryGeneratedIndex:t}=e,n=(0,r.jA)();return(0,s.jsxs)("div",{className:"generatedIndexPage_vN6x",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(u.default,{}),(0,s.jsx)(d.default,{}),(0,s.jsxs)("header",{children:[(0,s.jsx)(m.default,{as:"h1",className:"title_kItE",children:t.title}),t.description&&(0,s.jsx)("p",{children:t.description})]}),(0,s.jsx)("article",{className:"margin-top--lg",children:(0,s.jsx)(l.Z,{items:n.items,className:"list_eTzJ"})}),(0,s.jsx)("footer",{className:"margin-top--lg",children:(0,s.jsx)(o.Z,{previous:t.navigation.previous,next:t.navigation.next})})]})}function f(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h,{...e}),(0,s.jsx)(b,{...e})]})}},52368:function(e,t,n){n.d(t,{Z:()=>o});var s=n("85893");n("67294");var a=n("7670"),r=n("67026"),i=n("53367");function l(e){let{permalink:t,title:n,subLabel:a,isNext:l}=e;return(0,s.jsxs)(i.default,{className:(0,r.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,s.jsx)("div",{className:"pagination-nav__label",children:n})]})}function o(e){let{previous:t,next:n}=e;return(0,s.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,s.jsx)(l,{...t,subLabel:(0,s.jsx)(a.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,s.jsx)(l,{...n,subLabel:(0,s.jsx)(a.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},71987:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var s=n(85893);n(67294);var a=n(67026),r=n(7670),i=n(66171),l=n(89873);function o(e){let{className:t}=e,n=(0,l.E)();return n.badge?(0,s.jsx)("span",{className:(0,a.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,s.jsx)(r.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},89548:function(e,t,n){n.d(t,{Z:function(){return v}});var s=n(85893);n(67294);var a=n(67026),r=n(87262),i=n(53367),l=n(7670),o=n(18854),c=n(66171),d=n(37137),u=n(89873);let m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(l.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(l.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){let t=m[e.versionMetadata.banner];return(0,s.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:a}=e;return(0,s.jsx)(l.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,s.jsx)("b",{children:(0,s.jsx)(i.default,{to:n,onClick:a,children:(0,s.jsx)(l.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function f(e){let{className:t,versionMetadata:n}=e,{siteConfig:{title:i}}=(0,r.default)(),{pluginId:l}=(0,o.useActivePlugin)({failfast:!0}),{savePreferredVersionName:u}=(0,d.J)(l),{latestDocSuggestion:m,latestVersionSuggestion:f}=(0,o.useDocVersionSuggestions)(l),v=m??f.docs.find(e=>e.id===f.mainDocId);return(0,s.jsxs)("div",{className:(0,a.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,s.jsx)("div",{children:(0,s.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,s.jsx)("div",{className:"margin-top--md",children:(0,s.jsx)(b,{versionLabel:f.label,to:v.path,onClick:()=>u(f.name)})})]})}function v(e){let{className:t}=e,n=(0,u.E)();return n.banner?(0,s.jsx)(f,{className:t,versionMetadata:n}):null}},11107:function(e,t,n){n.d(t,{c:function(){return c}});var s=n(67294),a=n(87262),r=n(25108);let i=["zero","one","two","few","many","other"];function l(e){return i.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,a.default)();return(0,s.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return r.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&r.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);let a=n.select(t);return s[Math.min(n.pluralForms.indexOf(a),s.length-1)]})(n,t,e)}}}}]);