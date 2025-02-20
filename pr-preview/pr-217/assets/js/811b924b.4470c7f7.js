"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["46104"],{13646:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"how-to-guides/ads/custom-ssai-integration","title":"Custom Server Side Ad Insertion","description":"THEOplayer provides a way to integrate with third-party advertisement providers,","source":"@site/theoplayer/how-to-guides/01-ads/13-custom-ssai-integration.md","sourceDirName":"how-to-guides/01-ads","slug":"/how-to-guides/ads/custom-ssai-integration","permalink":"/documentation/pr-preview/pr-217/theoplayer/how-to-guides/ads/custom-ssai-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer/how-to-guides/01-ads/13-custom-ssai-integration.md","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{},"sidebar":"roku","previous":{"title":"MediaTailor","permalink":"/documentation/pr-preview/pr-217/theoplayer/how-to-guides/ads/mediatailor"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-217/theoplayer/how-to-guides/analytics/introduction"}}'),t=r("85893"),s=r("50065");let o={},a="Custom Server Side Ad Insertion",d={},c=[{value:"Android SDK",id:"android-sdk",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Integration ID",id:"integration-id",level:3},{value:"ServerSideAdIntegrationFactory",id:"serversideadintegrationfactory",level:3},{value:"Setting a Source",id:"setting-a-source",level:4},{value:"Skipping an Ad",id:"skipping-an-ad",level:4},{value:"Resetting a Source",id:"resetting-a-source",level:4},{value:"Destroying the player",id:"destroying-the-player",level:4},{value:"Creating Ad objects",id:"creating-ad-objects",level:4},{value:"Playing an Ad",id:"playing-an-ad",level:4},{value:"CustomSsaiDescriptionSerializer",id:"customssaidescriptionserializer",level:3}];function l(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"custom-server-side-ad-insertion",children:"Custom Server Side Ad Insertion"})}),"\n",(0,t.jsx)(n.p,{children:"THEOplayer provides a way to integrate with third-party advertisement providers,\nand have them report their ads and ad-related events through the THEOplayer APIs."}),"\n",(0,t.jsx)(n.h2,{id:"android-sdk",children:"Android SDK"}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Your THEOplayer SDK needs to be on version 7.6.0 or higher."}),"\n",(0,t.jsx)(n.h3,{id:"integration-id",children:"Integration ID"}),"\n",(0,t.jsx)(n.p,{children:"To make use of the custom server side ad insertion, first you need an integration ID which will identify the provided sources and ads to the specific ad provider."}),"\n",(0,t.jsx)(n.h3,{id:"serversideadintegrationfactory",children:"ServerSideAdIntegrationFactory"}),"\n",(0,t.jsxs)(n.p,{children:["You would also need to register a ",(0,t.jsx)(n.code,{children:"ServerSideAdIntegrationFactory"})," that will receive a ",(0,t.jsx)(n.code,{children:"ServerSideAdIntegrationController"}),".\nThe controller can be used to create the THEOplayer ",(0,t.jsx)(n.code,{children:"AdBreak"}),"/",(0,t.jsx)(n.code,{children:"Ad"})," objects using the ",(0,t.jsx)(n.code,{children:"AdBreakInit"}),"/",(0,t.jsx)(n.code,{children:"AdInit"})," data.\nAdditionally, it can be used to keep the player's state up-to-date such as when an ad begins or ends."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ServerSideAdIntegrationFactory"})," requires an implementation of the ",(0,t.jsx)(n.code,{children:"ServerSideAdIntegrationHandler"})," interface.\nThe handler will provide few callbacks that can be overridden which allows you to setup and clear the integration as needed."]}),"\n",(0,t.jsxs)(n.p,{children:["A concrete implementation can be found ",(0,t.jsx)(n.a,{href:"https://github.com/THEOplayer/android-connector/blob/master/connectors/yospace/src/main/java/com/theoplayer/android/connector/yospace/internal/YospaceAdIntegration.kt",children:"in the Yospace Connector"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Meanwhile, an empty implementation would look like below. Details to follow."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'player.ads.registerServerSideIntegration("integrationID") { controller ->\n    object : ServerSideAdIntegrationHandler {\n\n        override suspend fun setSource(source: SourceDescription): SourceDescription {\n            return super.setSource(source)\n        }\n\n        override fun skipAd(ad: Ad) {\n            super.skipAd(ad)\n        }\n\n        override suspend fun resetSource() {\n            super.resetSource()\n        }\n\n        override suspend fun destroy() {\n            super.destroy()\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"setting-a-source",children:"Setting a Source"}),"\n",(0,t.jsxs)(n.p,{children:["When a new source is loaded into the player the ",(0,t.jsx)(n.code,{children:"setSource(source: SourceDescription)"})," callback is triggered.\nIt allows the integration to transform the source description, e.g. by calling an external service to replace the content URL (",(0,t.jsx)(n.code,{children:"TypedSource.src"}),"),\nor by adding a fixed pre-roll linear ad to the list of ads (",(0,t.jsx)(n.code,{children:"SourceDescription.ads"}),")."]}),"\n",(0,t.jsx)(n.h4,{id:"skipping-an-ad",children:"Skipping an Ad"}),"\n",(0,t.jsxs)(n.p,{children:["When an ad is requested to be skipped, the ",(0,t.jsx)(n.code,{children:"skipAd(ad: Ad)"})," is called.\nAt this point the controller should call its own ",(0,t.jsx)(n.code,{children:"skipAd()"})," method."]}),"\n",(0,t.jsx)(n.h4,{id:"resetting-a-source",children:"Resetting a Source"}),"\n",(0,t.jsxs)(n.p,{children:["Before a new source is loaded into the player, or before the player is destroyed, ",(0,t.jsx)(n.code,{children:"resetSource()"})," is triggered.\nThis allows the integration to clean up any source-specific resources, such as scheduled ads or pending HTTP requests."]}),"\n",(0,t.jsx)(n.h4,{id:"destroying-the-player",children:"Destroying the player"}),"\n",(0,t.jsxs)(n.p,{children:["When the player is destroyed, the ",(0,t.jsx)(n.code,{children:"destroy()"})," is called.\nThis allows the integration to clean up any resources, such as UI views or event listeners."]}),"\n",(0,t.jsx)(n.h4,{id:"creating-ad-objects",children:"Creating Ad objects"}),"\n",(0,t.jsxs)(n.p,{children:["When the advertisement provider reports an ad, an ",(0,t.jsx)(n.code,{children:"AdBreak"})," and an ",(0,t.jsx)(n.code,{children:"Ad"})," object should be created using\n",(0,t.jsx)(n.code,{children:"createAdBreak(props: AdBreakInit)"})," and ",(0,t.jsx)(n.code,{children:"createAd(props: AdInit, adBreak: AdBreak?)"})," methods respectively from the controller.\nFor example, for a preroll ",(0,t.jsx)(n.code,{children:"AdBreak"})," containing 2 advertisements it would be:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val adBreak = controller.createAdBreak(AdBreakInit(timeOffset = 0))\n\nval firstAdInit = AdInit(\n    type = "linear",\n    skipOffset = 5,\n    id = "first_ad_id",\n    duration = 10,\n    clickThrough = first_ad_click_through_url,\n    resourceURI = first_ad_resource_url\n)\nval firstAd = controller.createAd(firstAdInit, adBreak)\n\nval secondAdInit = AdInit(\n    type = "linear",\n    skipOffset = 5,\n    id = "second_ad_id",\n    duration = 10,\n    clickThrough = second_ad_click_through_url,\n    resourceURI = second_ad_resource_url\n)\nval secondAd = controller.createAd(secondAdInit, adBreak)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"playing-an-ad",children:"Playing an Ad"}),"\n",(0,t.jsxs)(n.p,{children:["When an Ad begins the playback, the controller must inform the player by calling ",(0,t.jsx)(n.code,{children:"beginAd(ad: Ad)"}),", this will trigger the relevant AdBreak and Ad events."]}),"\n",(0,t.jsxs)(n.p,{children:["Additionally, during the playback of the Ad, calling ",(0,t.jsx)(n.code,{children:"updateAdProgress(ad: Ad, progress: Double)"})," is needed to keep the player in sync with the progress."]}),"\n",(0,t.jsxs)(n.p,{children:["Finally, when the playback of the Ad is completed, ",(0,t.jsx)(n.code,{children:"endAd(ad: Ad)"})," should be called to notify about it."]}),"\n",(0,t.jsx)(n.h3,{id:"customssaidescriptionserializer",children:"CustomSsaiDescriptionSerializer"}),"\n",(0,t.jsxs)(n.p,{children:["To hold the configuration parameters specific to your integration, you can create a new class that inherits from ",(0,t.jsx)(n.code,{children:"CustomSsaiDescription"}),".\nThis allows it to be set on a ",(0,t.jsx)(n.code,{children:"TypedSource"})," through ",(0,t.jsx)(n.a,{href:"pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/source/TypedSource.Builder.html#ssai(com.theoplayer.android.api.source.ssai.SsaiDescription)",children:(0,t.jsx)(n.code,{children:"TypedSource.Builder.ssai()"})}),".\nThen, register a ",(0,t.jsx)(n.code,{children:"CustomSsaiDescriptionSerializer"})," using the integration ID and provide a way to serialize/deserialize the new ",(0,t.jsx)(n.code,{children:"CustomSsaiDescription"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Below is an example of a ",(0,t.jsx)(n.a,{href:"https://github.com/THEOplayer/android-connector/tree/master/connectors/yospace",children:"YoSpace integration"})," showing ",(0,t.jsx)(n.code,{children:"YospaceSsaiDescription"})," extending ",(0,t.jsx)(n.code,{children:"CustomSsaiDescription"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"data class YospaceSsaiDescription constructor(\n    /**\n     * The type of the requested stream.\n     *\n     * Default: [YospaceStreamType.LIVE]\n     */\n    val streamType: YospaceStreamType = YospaceStreamType.LIVE,\n    /**\n     * Custom properties to set when initializing the Yospace session.\n     */\n    val sessionProperties: Session.SessionProperties = Session.SessionProperties()\n) : CustomSsaiDescription() {\n    override val customIntegration = YospaceConnector.INTEGRATION_ID\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And then, the implementation of the ",(0,t.jsx)(n.code,{children:"CustomSsaiDescriptionSerializer"})," specific for YoSpace:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"class YospaceSsaiDescriptionSerializer : CustomSsaiDescriptionSerializer {\n    override fun fromJson(json: String): YospaceSsaiDescription {\n        return Json.decodeFromString(json)\n    }\n\n    override fun toJson(value: CustomSsaiDescription): String {\n        return Json.encodeToString(value)\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Finally, registering the ",(0,t.jsx)(n.code,{children:"YospaceSsaiDescriptionSerializer"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"CustomSsaiDescriptionRegistry.register(YospaceConnector.INTEGRATION_ID, YospaceSsaiDescriptionSerializer())\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Registering the ",(0,t.jsx)(n.code,{children:"CustomSsaiDescriptionSerializer"})," should happen before registering the ",(0,t.jsx)(n.code,{children:"ServerSideAdIntegrationFactory"}),"."]})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var i=r(67294);let t={},s=i.createContext(t);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);