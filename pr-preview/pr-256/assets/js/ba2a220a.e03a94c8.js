"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["57133"],{90227:function(e){e.exports=JSON.parse('{"version":{"pluginId":"theolive","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"theolive":[{"type":"link","label":"Introduction","href":"/documentation/pr-preview/pr-256/theolive/","docId":"index","unlisted":false},{"type":"link","label":"Getting started","href":"/documentation/pr-preview/pr-256/theolive/getting-started","docId":"getting-started","unlisted":false},{"type":"link","label":"Player","description":"THEOlive player documentation","customProps":{"icon":"\u25B6\uFE0F"},"href":"/theoplayer/how-to-guides/web/theolive/getting-started"},{"type":"category","label":"Guides","customProps":{"icon":"\uD83D\uDE80"},"description":"THEOLive guides","items":[{"type":"link","label":"Manage your team","href":"/documentation/pr-preview/pr-256/theolive/guides/manage-team","docId":"guides/manage-team","unlisted":false},{"type":"link","label":"Authorization","href":"/documentation/pr-preview/pr-256/theolive/guides/authorization","docId":"guides/authorization","unlisted":false},{"type":"link","label":"Alias","href":"/documentation/pr-preview/pr-256/theolive/guides/multi-channel","docId":"guides/multi-channel","unlisted":false},{"type":"link","label":"Redundancy","href":"/documentation/pr-preview/pr-256/theolive/guides/redundancy","docId":"guides/redundancy","unlisted":false},{"type":"link","label":"Stream Configuration","href":"/documentation/pr-preview/pr-256/theolive/guides/stream-configuration","docId":"guides/stream-configuration","unlisted":false},{"type":"link","label":"Viewer Insights","href":"/documentation/pr-preview/pr-256/theolive/guides/viewer-insights","docId":"guides/viewer-insights","unlisted":false},{"type":"link","label":"Webhooks","href":"/documentation/pr-preview/pr-256/theolive/guides/real-time-update-with-webhooks","docId":"guides/real-time-update-with-webhooks","unlisted":false},{"type":"link","label":"Scheduler","href":"/documentation/pr-preview/pr-256/theolive/guides/scheduler","docId":"guides/scheduler","unlisted":false},{"type":"link","label":"In-stream Metadata","href":"/documentation/pr-preview/pr-256/theolive/guides/sei-messages","docId":"guides/sei-messages","unlisted":false},{"type":"link","label":"HLS","href":"/documentation/pr-preview/pr-256/theolive/guides/hls","docId":"guides/hls","unlisted":false},{"type":"category","label":"Ingesting","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"OBS","href":"/documentation/pr-preview/pr-256/theolive/guides/Ingesting/obs","docId":"guides/Ingesting/obs","unlisted":false},{"type":"link","label":"Wirecast","href":"/documentation/pr-preview/pr-256/theolive/guides/Ingesting/wirecast","docId":"guides/Ingesting/wirecast","unlisted":false},{"type":"link","label":"vMix","href":"/documentation/pr-preview/pr-256/theolive/guides/Ingesting/vmix","docId":"guides/Ingesting/vmix","unlisted":false},{"type":"link","label":"Videon","href":"/documentation/pr-preview/pr-256/theolive/guides/Ingesting/videon","docId":"guides/Ingesting/videon","unlisted":false}]},{"type":"category","label":"Security","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Geo-blocking","href":"/documentation/pr-preview/pr-256/theolive/guides/Security/geo-blocking","docId":"guides/Security/geo-blocking","unlisted":false},{"type":"link","label":"Token based security","href":"/documentation/pr-preview/pr-256/theolive/guides/Security/token-based-security","docId":"guides/Security/token-based-security","unlisted":false}]}],"collapsed":true,"collapsible":true,"href":"/documentation/pr-preview/pr-256/theolive/guides/manage-team"},{"type":"link","label":"Troubleshooting","href":"/documentation/pr-preview/pr-256/theolive/troubleshooting","docId":"troubleshooting","unlisted":false},{"type":"link","label":"API reference","description":"THEOlive backend API reference","customProps":{"icon":"*\uFE0F\u20E3"},"href":"https://developers.theo.live/reference/create-channel"}]},"docs":{"getting-started":{"id":"getting-started","title":"Backend","description":"THEOlive provides a REST api to manage channels, configure them and start / stop them. Each possible call can be found at our API Reference.","sidebar":"theolive"},"guides/authorization":{"id":"guides/authorization","title":"Authorization","description":"Making secure calls to our REST API requires authentication and authorization. THEOlive makes use of token-secret pairs to authorize requests.","sidebar":"theolive"},"guides/hls":{"id":"guides/hls","title":"HLS on older platforms","description":"THEOlive uses the HESP protocol to deliver high quality at very low latencies. However, HESP only works on platforms","sidebar":"theolive"},"guides/Ingesting/obs":{"id":"guides/Ingesting/obs","title":"Using OBS with THEOlive","description":"This guide will shortly describe how to set up OBS Studio correctly so it can be used to stream content to THEOlive.","sidebar":"theolive"},"guides/Ingesting/videon":{"id":"guides/Ingesting/videon","title":"Using Videon VersaStreamer / EdgeCaster with THEOlive","description":"This guide explains to you how to set up Videon VersaStreamer and Videon EdgeCaster correctly so they can be used to stream your content with THEOlive.","sidebar":"theolive"},"guides/Ingesting/vmix":{"id":"guides/Ingesting/vmix","title":"Using vMix with THEOlive","description":"This guide explains to you how to set up vMix correctly so it can be used to stream your content with THEOlive.","sidebar":"theolive"},"guides/Ingesting/wirecast":{"id":"guides/Ingesting/wirecast","title":"Using Wirecast with THEOlive","description":"This guide explains to you how to set up Wirecast correctly so it can be used to stream your content with THEOlive.","sidebar":"theolive"},"guides/manage-team":{"id":"guides/manage-team","title":"How to manage your team","description":"When you sign up to the THEOlive console, you might want to work together with your colleagues on the same account and the same channels. This guide describes how to set this up.","sidebar":"theolive"},"guides/multi-channel":{"id":"guides/multi-channel","title":"Multi-channel: aliases for channels","description":"This guide describes the multi-channel approach of THEOlive: ingest only once, and create multiple channel aliases to configure unique playouts. Next to a different configuration for each alias, THEOlive offers the possibility to apply some security settings (like Geoblocking and token based security) on each alias.","sidebar":"theolive"},"guides/real-time-update-with-webhooks":{"id":"guides/real-time-update-with-webhooks","title":"Real-Time Updates with webhooks","description":"---","sidebar":"theolive"},"guides/redundancy":{"id":"guides/redundancy","title":"Redundancy","description":"With THEOlive we want to make sure your viewers can continue watching your stream, even if there is an ingest failure or if there are connectivity problems in a certain location. It is hence possible to set up a fallback stream. This means that if one stream is unavailable for a short amount of time, the player checks if the fallback stream is available and switches the player source automatically to this stream. In this case, the viewers only see a small interruption and can continue watching without having to act.","sidebar":"theolive"},"guides/scheduler":{"id":"guides/scheduler","title":"THEOlive scheduler: schedule channel start & stop","description":"Define when a channel should be ready and when it should be stopped","sidebar":"theolive"},"guides/Security/geo-blocking":{"id":"guides/Security/geo-blocking","title":"Geo-blocking","description":"Geo-blocking allows you to block content in certain countries (\\"blacklisting\\"), or only allow a set of countries to have access to it (\\"whitelisting\\"). You can easily enable/disable it through the management console or via the API. We\'ll discuss both approaches in this guide.","sidebar":"theolive"},"guides/Security/token-based-security":{"id":"guides/Security/token-based-security","title":"Token based security","description":"THEOlive offers the option to enable JWT token security on channel alias level. This can be interesting if you only want valid users to access your stream.","sidebar":"theolive"},"guides/sei-messages":{"id":"guides/sei-messages","title":"In-stream metadata through SEI messages","description":"---","sidebar":"theolive"},"guides/stream-configuration":{"id":"guides/stream-configuration","title":"Stream Configuration","description":"Settings related to the THEOlive stream output","sidebar":"theolive"},"guides/viewer-insights":{"id":"guides/viewer-insights","title":"Viewer Insights","description":"Easily monitor and analyze viewer behavior of your live stream","sidebar":"theolive"},"index":{"id":"index","title":"THEOlive","description":"THEOlive is a low latency streaming solution across various platforms and devices. It","sidebar":"theolive"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"On this page you can find some additional info which can help during troubleshooting.","sidebar":"theolive"}}}}')}}]);