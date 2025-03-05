"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["41853"],{4216:function(e,t,n){n.r(t),n.d(t,{default:()=>u});var a=n("85893");n("67294");var s=n("67026"),l=n("74385"),i=n("66171"),r=n("23349");function o(e){let{className:t}=e;return(0,a.jsx)(r.Z,{type:"caution",title:(0,a.jsx)(l.ht,{}),className:(0,s.Z)(t,i.k.common.draftBanner),children:(0,a.jsx)(l.xo,{})})}function d(e){let{className:t}=e;return(0,a.jsx)(r.Z,{type:"caution",title:(0,a.jsx)(l.cI,{}),className:(0,s.Z)(t,i.k.common.unlistedBanner),children:(0,a.jsx)(l.eU,{})})}function c(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.T$,{}),(0,a.jsx)(d,{...e})]})}function u(e){let{metadata:t}=e,{unlisted:n,frontMatter:s}=t;return(0,a.jsxs)(a.Fragment,{children:[(n||s.unlisted)&&(0,a.jsx)(c,{}),s.draft&&(0,a.jsx)(o,{})]})}},5872:function(e,t,n){n.r(t),n.d(t,{default:()=>f});var a=n("85893");n("67294");var s=n("67026"),l=n("66171"),i=n("86563"),r=n("23868"),o=n("53367"),d=n("7670"),c=n("83187");function u(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}function h(){let e=(0,c.default)("/");return(0,a.jsx)("li",{className:"breadcrumbs__item",children:(0,a.jsx)(o.default,{"aria-label":(0,d.translate)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,a.jsx)(u,{className:"breadcrumbHomeIcon_YNFT"})})})}function m(e){let{children:t,href:n,isLast:s}=e,l="breadcrumbs__link";return s?(0,a.jsx)("span",{className:l,itemProp:"name",children:t}):n?(0,a.jsx)(o.default,{className:l,href:n,itemProp:"item",children:(0,a.jsx)("span",{itemProp:"name",children:t})}):(0,a.jsx)("span",{className:l,children:t})}function x(e){let{children:t,active:n,index:l,addMicrodata:i}=e;return(0,a.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,a.jsx)("meta",{itemProp:"position",content:String(l+1)})]})}function f(){let e=(0,i.s1)(),t=(0,r.Ns)();return e?(0,a.jsx)("nav",{className:(0,s.Z)(l.k.docs.docBreadcrumbs,"breadcrumbsContainer_Z_bl"),"aria-label":(0,d.translate)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,a.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,a.jsx)(h,{}),e.map((t,n)=>{let s=n===e.length-1,l="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,a.jsx)(x,{active:s,index:n,addMicrodata:!!l,children:(0,a.jsx)(m,{href:l,isLast:s,children:t.label})},n)})]})}):null}},57940:function(e,t,n){n.r(t),n.d(t,{default:()=>u});var a=n("85893");n("67294");var s=n("67026"),l=n("66171"),i=n("37097"),r=n("46055"),o=n("50065"),d=n("85015");function c(e){let{children:t}=e;return(0,a.jsx)(o.Z,{components:d.Z,children:t})}function u(e){let{children:t}=e,n=function(){let{metadata:e,frontMatter:t,contentTitle:n}=(0,i.k)();return t.hide_title||void 0!==n?null:e.title}();return(0,a.jsxs)("div",{className:(0,s.Z)(l.k.docs.docMarkdown,"markdown"),children:[n&&(0,a.jsx)("header",{children:(0,a.jsx)(r.default,{as:"h1",children:n})}),(0,a.jsx)(c,{children:t})]})}},31602:function(e,t,n){n.r(t),n.d(t,{default:()=>p});var a=n("85893");n("67294");var s=n("67026"),l=n("66171"),i=n("37097"),r=n("7670"),o=n("53367");let d={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function c(e){let{permalink:t,label:n,count:l,description:i}=e;return(0,a.jsxs)(o.default,{href:t,title:i,className:(0,s.Z)(d.tag,l?d.tagWithCount:d.tagRegular),children:[n,l&&(0,a.jsx)("span",{children:l})]})}function u(e){let{tags:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("b",{children:(0,a.jsx)(r.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,a.jsx)("ul",{className:(0,s.Z)("tags_jXut","padding--none","margin-left--sm"),children:t.map(e=>(0,a.jsx)("li",{className:"tag_QGVx",children:(0,a.jsx)(c,{...e})},e.permalink))})]})}function h(e){let{className:t,...n}=e;return(0,a.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)("iconEdit_Z9Sw",t),"aria-hidden":"true",...n,children:(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function m(e){let{editUrl:t}=e;return(0,a.jsxs)(o.default,{to:t,className:l.k.common.editThisPage,children:[(0,a.jsx)(h,{}),(0,a.jsx)(r.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var x=n("84221");function f(e){let{lastUpdatedAt:t}=e,n=new Date(t),s=(0,x.P)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,a.jsx)(r.default,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,a.jsx)("b",{children:(0,a.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function b(e){let{lastUpdatedBy:t}=e;return(0,a.jsx)(r.default,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,a.jsx)("b",{children:t})},children:" by {user}"})}function v(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,a.jsxs)("span",{className:l.k.common.lastUpdated,children:[(0,a.jsx)(r.default,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,a.jsx)(f,{lastUpdatedAt:t}):"",byUser:n?(0,a.jsx)(b,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}function j(e){let{className:t,editUrl:n,lastUpdatedAt:l,lastUpdatedBy:i}=e;return(0,a.jsxs)("div",{className:(0,s.Z)("row",t),children:[(0,a.jsx)("div",{className:"col",children:n&&(0,a.jsx)(m,{editUrl:n})}),(0,a.jsx)("div",{className:(0,s.Z)("col","lastUpdated_JAkA"),children:(l||i)&&(0,a.jsx)(v,{lastUpdatedAt:l,lastUpdatedBy:i})})]})}function p(){let{metadata:e}=(0,i.k)(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,tags:o}=e,d=o.length>0,c=!!(t||n||r);return d||c?(0,a.jsxs)("footer",{className:(0,s.Z)(l.k.docs.docFooter,"docusaurus-mt-lg"),children:[d&&(0,a.jsx)("div",{className:(0,s.Z)("row margin-top--sm",l.k.docs.docFooterTagsRow),children:(0,a.jsx)("div",{className:"col",children:(0,a.jsx)(u,{tags:o})})}),c&&(0,a.jsx)(j,{className:(0,s.Z)("margin-top--sm",l.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r})]}):null}},83747:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(85893);n(67294);var s=n(15231),l=n(37097);function i(){let{metadata:e,frontMatter:t,assets:n}=(0,l.k)();return(0,a.jsx)(s.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}},54963:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(85893);n(67294);var s=n(37097),l=n(52368);function i(){let{metadata:e}=(0,s.k)();return(0,a.jsx)(l.Z,{previous:e.previous,next:e.next})}},35445:function(e,t,n){n.r(t),n.d(t,{default:()=>d});var a=n("85893");n("67294");var s=n("66171"),l=n("37097"),i=n("67026"),r=n("33572");function o(e){let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,i.Z)("tableOfContents_bqdL","thin-scrollbar",t),children:(0,a.jsx)(r.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}function d(){let{toc:e,frontMatter:t}=(0,l.k)();return(0,a.jsx)(o,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:s.k.docs.docTocDesktop})}},73288:function(e,t,n){n.r(t),n.d(t,{default:()=>x});var a=n("85893");n("67294");var s=n("67026"),l=n("66171"),i=n("37097"),r=n("26850"),o=n("33572"),d=n("7670");let c={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function u(e){let{collapsed:t,...n}=e;return(0,a.jsx)("button",{type:"button",...n,className:(0,s.Z)("clean-btn",c.tocCollapsibleButton,!t&&c.tocCollapsibleButtonExpanded,n.className),children:(0,a.jsx)(d.default,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let h={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function m(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:i}=e,{collapsed:d,toggleCollapsed:c}=(0,r.u)({initialState:!0});return(0,a.jsxs)("div",{className:(0,s.Z)(h.tocCollapsible,!d&&h.tocCollapsibleExpanded,n),children:[(0,a.jsx)(u,{collapsed:d,onClick:c}),(0,a.jsx)(r.z,{lazy:!0,className:h.tocCollapsibleContent,collapsed:d,children:(0,a.jsx)(o.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})})]})}function x(){let{toc:e,frontMatter:t}=(0,i.k)();return(0,a.jsx)(m,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,s.Z)(l.k.docs.docTocMobile,"tocMobile_ITEo")})}},52368:function(e,t,n){n.d(t,{Z:()=>o});var a=n("85893");n("67294");var s=n("7670"),l=n("67026"),i=n("53367");function r(e){let{permalink:t,title:n,subLabel:s,isNext:r}=e;return(0,a.jsxs)(i.default,{className:(0,l.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,a.jsx)("div",{className:"pagination-nav__label",children:n})]})}function o(e){let{previous:t,next:n}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,a.jsx)(r,{...t,subLabel:(0,a.jsx)(s.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,a.jsx)(r,{...n,subLabel:(0,a.jsx)(s.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},71987:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(85893);n(67294);var s=n(67026),l=n(7670),i=n(66171),r=n(89873);function o(e){let{className:t}=e,n=(0,r.E)();return n.badge?(0,a.jsx)("span",{className:(0,s.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,a.jsx)(l.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},89548:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(85893);n(67294);var s=n(67026),l=n(87262),i=n(53367),r=n(7670),o=n(18854),d=n(66171),c=n(37137),u=n(89873);let h={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,a.jsx)(r.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,a.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,a.jsx)(r.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,a.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function m(e){let t=h[e.versionMetadata.banner];return(0,a.jsx)(t,{...e})}function x(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,a.jsx)(r.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,a.jsx)("b",{children:(0,a.jsx)(i.default,{to:n,onClick:s,children:(0,a.jsx)(r.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function f(e){let{className:t,versionMetadata:n}=e,{siteConfig:{title:i}}=(0,l.default)(),{pluginId:r}=(0,o.useActivePlugin)({failfast:!0}),{savePreferredVersionName:u}=(0,c.J)(r),{latestDocSuggestion:h,latestVersionSuggestion:f}=(0,o.useDocVersionSuggestions)(r),b=h??f.docs.find(e=>e.id===f.mainDocId);return(0,a.jsxs)("div",{className:(0,s.Z)(t,d.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,a.jsx)("div",{children:(0,a.jsx)(m,{siteTitle:i,versionMetadata:n})}),(0,a.jsx)("div",{className:"margin-top--md",children:(0,a.jsx)(x,{versionLabel:f.label,to:b.path,onClick:()=>u(f.name)})})]})}function b(e){let{className:t}=e,n=(0,u.E)();return n.banner?(0,a.jsx)(f,{className:t,versionMetadata:n}):null}},97853:function(e,t,n){n.d(t,{Z:()=>v});var a=n("85893"),s=n("67294"),l=n("11199"),i=n("95451");function r(e){return(0,a.jsx)("code",{...e})}var o=n("53367"),d=n("27511");function c(e){let t=s.Children.toArray(e.children),n=t.find(e=>s.isValidElement(e)&&"summary"===e.type),l=(0,a.jsx)(a.Fragment,{children:t.filter(e=>e!==n)});return(0,a.jsx)(d.default,{...e,summary:n,children:l})}var u=n("46055");function h(e){return(0,a.jsx)(u.default,{...e})}var m=n("67026");let x={containsTaskList:"containsTaskList_mC6p"};var f=n("44961"),b=n("23349");let v={Head:l.Z,details:c,Details:c,code:function(e){return void 0!==e.children&&s.Children.toArray(e.children).every(e=>"string"==typeof e&&!e.includes("\n"))?(0,a.jsx)(r,{...e}):(0,a.jsx)(i.default,{...e})},a:function(e){return(0,a.jsx)(o.default,{...e})},pre:function(e){return(0,a.jsx)(a.Fragment,{children:e.children})},ul:function(e){return(0,a.jsx)("ul",{...e,className:function(e){if(void 0!==e)return(0,m.Z)(e,e?.includes("contains-task-list")&&x.containsTaskList)}(e.className)})},li:function(e){return(0,f.Z)().collectAnchor(e.id),(0,a.jsx)("li",{...e})},img:function(e){var t;return(0,a.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,m.Z)(t,"img_ev3q"))})},h1:e=>(0,a.jsx)(h,{as:"h1",...e}),h2:e=>(0,a.jsx)(h,{as:"h2",...e}),h3:e=>(0,a.jsx)(h,{as:"h3",...e}),h4:e=>(0,a.jsx)(h,{as:"h4",...e}),h5:e=>(0,a.jsx)(h,{as:"h5",...e}),h6:e=>(0,a.jsx)(h,{as:"h6",...e}),admonition:b.Z,mermaid:()=>null}},33572:function(e,t,n){n.d(t,{Z:()=>c});var a=n("85893"),s=n("67294"),l=n("66009"),i=n("22936"),r=n("68237"),o=n("53367");let d=s.memo(function e(t){let{toc:n,className:s,linkClassName:l,isChild:i}=t;return n.length?(0,a.jsx)("ul",{className:i?void 0:s,children:n.map(t=>(0,a.jsxs)("li",{children:[(0,a.jsx)(o.default,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,a.jsx)(e,{isChild:!0,toc:t.children,className:s,linkClassName:l})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:u,maxHeadingLevel:h,...m}=e,x=(0,l.L)(),f=u??x.tableOfContents.minHeadingLevel,b=h??x.tableOfContents.maxHeadingLevel,v=(0,i.b)({toc:t,minHeadingLevel:f,maxHeadingLevel:b}),j=(0,s.useMemo)(()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:b}},[o,c,f,b]);return(0,r.S)(j),(0,a.jsx)(d,{toc:v,className:n,linkClassName:o,...m})}}}]);