"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["78435"],{27204:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"how-to-guides/analytics/custom-analytics-integration","title":"Custom Analytics Integration","description":"As mentioned in our Introduction, video analytics provide tremendous insights into your user\'s QoE, bring extra business intelligence and enhance decision-making.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/02-analytics/06-custom-analytics-integration.md","sourceDirName":"how-to-guides/02-analytics","slug":"/how-to-guides/analytics/custom-analytics-integration","permalink":"/documentation/pr-preview/pr-253/theoplayer/v6/how-to-guides/analytics/custom-analytics-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/02-analytics/06-custom-analytics-integration.md","tags":[],"version":"v6","sidebarPosition":6,"frontMatter":{},"sidebar":"roku","previous":{"title":"Conviva Connector for VideoAnalytics & AdsAnalytics","permalink":"/documentation/pr-preview/pr-253/theoplayer/v6/how-to-guides/analytics/conviva/conviva-connector"},"next":{"title":"Adobe Analytics","permalink":"/documentation/pr-preview/pr-253/theoplayer/v6/how-to-guides/analytics/adobe-analytics"}}'),i=t("85893"),r=t("50065");let s={},o="Custom Analytics Integration",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"API",id:"api",level:2},{value:"Video analytics metrics and events",id:"video-analytics-metrics-and-events",level:3},{value:"Session management",id:"session-management",level:3},{value:"Integrating Google Analytics",id:"integrating-google-analytics",level:2},{value:"Web SDK",id:"web-sdk",level:3},{value:"Android (/TV) SDK &amp; iOS (/tvOS) SDK",id:"android-tv-sdk--ios-tvos-sdk",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"custom-analytics-integration",children:"Custom Analytics Integration"})}),"\n",(0,i.jsxs)(n.p,{children:["As mentioned in our ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theoplayer/v6/how-to-guides/analytics/introduction",children:"Introduction"}),", video analytics provide tremendous insights into your user's QoE, bring extra business intelligence and enhance decision-making.\nThere are a wide selection of analytics systems in the current landscape (e.g. Google Analytics, Conviva, ...), often with their own focus, expertise and value."]}),"\n",(0,i.jsx)(n.p,{children:"What most video analytics systems have in common is that their insights (partly) originate from video events:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"play"})," event: a user clicks the play button, or resumes playback after a pause"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fullscreen"})," event: a user goes fullscreen on their device"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"quality"})," change event: the video quality switches from a lower resolution to a higher one"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"waiting"})," event: the video is stalled and unable to continue playback for some time"]}),"\n",(0,i.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To access these video events, and forward them to a video analytics system, an application developer must hook into\nthe video player API."}),"\n",(0,i.jsx)(n.p,{children:"This guide explains the role of the THEOplayer API.\nAdditionally, it explains how to do a custom integration with an analytics system, with Google Analytics as a sample case.\nThis guide should be useful when THEOplayer doesn't have an existing sample integration with a specific (commercial) video analytics service,\nor when you want to fully control the data flow."}),"\n",(0,i.jsxs)(n.p,{children:["Keep in mind that GA is not the only analytics system out there. The APIs and concepts that we'll discuss are relevant for all analytics systems.\nFor example, you can easily swap out the Google Analytics example with something like ",(0,i.jsx)(n.a,{href:"http://www.nielsen.com/eu/en/solutions/capabilities/media-analytics.html",children:"Nielsen"}),"\nor ",(0,i.jsx)(n.a,{href:"https://nicepeopleatwork.com/youbora/",children:"Youbora"})," (Nice People At Work), or even your own custom analytics back-end."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"There are two prerequisites in order to continue with this guide:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["You have a THEOplayer license. You can grab a license at ",(0,i.jsx)(n.a,{href:"https://portal.theoplayer.com",children:"https://portal.theoplayer.com"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["You have some ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theoplayer/v6/getting-started/sdks/web/getting-started",children:"basic knowledge"})," on how to use THEOplayer,\nand can navigate comfortable through ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/",children:"the API"})," to find ",(0,i.jsx)(n.a,{href:"http://demo.theoplayer.com/using-events-examples",children:"relevant events"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Refer to our ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theoplayer/v6/getting-started/sdks/web/getting-started",children:"getting started guide"})," before advancing\nto the code samples."]}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(n.p,{children:["You can access the video data through the THEOplayer API. Through the API, you can subscribe to events, and attach a callback.\nFor example, when the ",(0,i.jsx)(n.code,{children:"ended"})," event is triggered (meaning: someone completely watched the video),\nyour callback could be that when this happens, you do a request to a remote video analytics service."]}),"\n",(0,i.jsxs)(n.p,{children:["Events are organized across interfaces and subinterfaces, as illustrated by the image below. For example, the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html",children:(0,i.jsx)(n.code,{children:"Player"})})," contains\ngeneral video player events like ",(0,i.jsx)(n.code,{children:"play"}),", ",(0,i.jsx)(n.code,{children:"pause"})," and ",(0,i.jsx)(n.code,{children:"ended"}),".\nThe ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/AdsEventMap.html",children:(0,i.jsx)(n.code,{children:"Ads"})})," interface contains events related to advertisements,\nlike ",(0,i.jsx)(n.code,{children:"adbreakbegin"})," and ",(0,i.jsx)(n.code,{children:"adend"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"THEOplayer API Interfaces and Events",src:t(52878).Z+"",title:"THEOplayer API Interfaces and Events",width:"768",height:"713"})}),"\n",(0,i.jsxs)(n.p,{children:["When creating a custom analytics implementation, you must familiarize yourself with the relevant interfaces and events.\nLuckily, all information is available at ",(0,i.jsx)(n.a,{href:"https://docs.theoplayer.com/",children:"https://docs.theoplayer.com/"}),",\nand the names of interfaces and events are very similar across all the THEOplayer SDKs."]}),"\n",(0,i.jsx)(n.p,{children:"Below is an (incomplete) list of some common interface event maps."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Player is the interface the represents the video player instance.\nYou use this interface to detect general video events, like a play, a pause, and so on.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html",children:"Web"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Structs/PlayerEventTypes.html",children:"iOS"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/event/player/PlayerEventTypes.html",children:"Android"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Ads is the interface that represents the advertisements.\nYou use this interface to detect when an ad starts and stops.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/AdsEventMap.html",children:"Web"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Ads%20Events.html",children:"iOS"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/event/ads/AdsEventTypes.html",children:"Android"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["AudioTrackList is the interface that represents the list of audio tracks.\nYou use this interface to detect when a new audio track is added, or when another audio track becomes active.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/TrackListEventMap.html",children:"Web"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Structs/AudioTrackListEventTypes.html",children:"iOS"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/event/track/mediatrack/audio/list/AudioTrackListEventTypes.html",children:"Android"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["VideoTrack is the interface that represents a single video track containing one or more video qualities.\nYou use this interface to detect when another video quality becomes active.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/MediaTrackEventMap.html",children:"Web"})}),"\n",(0,i.jsx)(n.li,{children:"iOS: unavailable due to Apple limitations"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/event/track/mediatrack/video/VideoTrackEventTypes.html",children:"Android"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["TextTrackList is comparable AudioTrackList, but for subtitles, closed captions and metadata (e.g. id3, emsg, EventStream, EXT-X-DATERANGE).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/TrackListEventMap.html",children:"Web"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Structs/TextTrackListEventTypes.html",children:"iOS"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/event/track/texttrack/list/TextTrackListEventTypes.html",children:"Android"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Cast is the interface that is used to detect events related to Chromecast and AirPlay.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/VendorCastEventMap.html",children:"Web"})}),"\n",(0,i.jsxs)(n.li,{children:["iOS: ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Structs/AirPlayEventTypes.html",children:"AirPlay"})," & ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/ios/Structs/ChromecastEventTypes.html",children:"Chromecast"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/event/chromecast/package-summary.html",children:"Android"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Network is the interface that is used to intercept HTTP(S) requests and responses.\nYou should only use this API on the THEOplayer Web SDK, and only when you can't use ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers",children:"Service Workers"})," to accomplish the same.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theoplayer/v6/how-to-guides/network/introduction",children:"Web"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note that maintaining the above list manually is unfortunately a no-go because our interfaces evolve.\nThis means that you should research your events through our automatically managed API references at ",(0,i.jsx)(n.a,{href:"https://docs.theoplayer.com/",children:"https://docs.theoplayer.com/"}),".\nFor example, interfaces like VR, TextTrackCueList, VideoTrackList, Verizon Media and Yospace are omitted because manually maintaining this would be too challenging."]}),"\n",(0,i.jsxs)(n.p,{children:["When doing a custom analytics integration, you should also check our ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/Metrics.html",children:"Metrics"})," API,\nand our articles on ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theoplayer/v6/how-to-guides/miscellaneous/error/introduction",children:"error handling"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"video-analytics-metrics-and-events",children:"Video analytics metrics and events"}),"\n",(0,i.jsx)(n.p,{children:"Let's discuss some popular metrics, and how you could track it with a video player events."}),"\n",(0,i.jsxs)(n.p,{children:["Plays (or Impressions). This metric represents the amount of plays.\nYou can calculate this event by identifying the first ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#playing",children:(0,i.jsx)(n.code,{children:"playing"})})," event after every ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#sourcechange",children:(0,i.jsx)(n.code,{children:"sourcechange"})})," event."]}),"\n",(0,i.jsxs)(n.p,{children:["Video Startup Time (or Time-to-First-Frame or Join Latency). This metric represents the time it takes your video to start.\nYou can calculate this event by calculating the difference between the timestamps of the first ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#playing",children:(0,i.jsx)(n.code,{children:"playing"})})," and the first ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#play",children:(0,i.jsx)(n.code,{children:"play"})})," event after every ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#sourcechange",children:(0,i.jsx)(n.code,{children:"sourcechange"})})," event."]}),"\n",(0,i.jsxs)(n.p,{children:["Seek Time (or Seek Latency). This metric represents the time it takes for your video to resume when you scrub to another position.\nYou can calculate this event by calculating the difference between the timestamps of the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#seeking",children:(0,i.jsx)(n.code,{children:"seeking"})})," and the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#seeked",children:(0,i.jsx)(n.code,{children:"seeked"})})," event."]}),"\n",(0,i.jsxs)(n.p,{children:["Watch Time. This metric represents how much time is spent watching content by your viewers.\nYou calculate this value by tracking the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#playing",children:(0,i.jsx)(n.code,{children:"playing"})})," event,\nand halting it when the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#waiting",children:(0,i.jsx)(n.code,{children:"waiting"})}),",\n",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#pause",children:(0,i.jsx)(n.code,{children:"pause"})}),",\n",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#ended",children:(0,i.jsx)(n.code,{children:"ended"})})," or\n",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#error",children:(0,i.jsx)(n.code,{children:"error"})})," event occurs."]}),"\n",(0,i.jsxs)(n.p,{children:['Rebuffer Ratio (or Stalls). This metric represents how often the viewer is watching the "spinner icon" versus the actual video.\nThis metric is closely related to the Watch Time.\nYou can calculate this event by tracking the ',(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#waiting",children:(0,i.jsx)(n.code,{children:"waiting"})})," event, which is triggered when the video starts to stall,\nand the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#playing",children:(0,i.jsx)(n.code,{children:"playing"})})," event."]}),"\n",(0,i.jsxs)(n.p,{children:["Average Bitrate. This metric represents the average video quality that your viewers are watching.\nYou can calculate this metric by tracking the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/MediaTrackEventMap.html#activequalitychanged",children:(0,i.jsx)(n.code,{children:"activequalitychanged"})})," event."]}),"\n",(0,i.jsxs)(n.p,{children:["Average % Complete (or Watched Ratio). This metric represents the relative completion rate of your videos.\nThis metric is related to the Watch Time, and related in a similar fashion.\nYou could also use the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/classes/ChromelessPlayer.html#duration",children:(0,i.jsx)(n.code,{children:"duration"})})," to determine the length of the asset."]}),"\n",(0,i.jsxs)(n.p,{children:["Exit Before Video Start. This metric represents how often your viewers aren't able to start the video, even though they had the intent to watch it.\nYou can calculate this metric by tracking the first ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#play",children:(0,i.jsx)(n.code,{children:"play"})})," event,\nand it never getting to the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#playing",children:(0,i.jsx)(n.code,{children:"playing"})})," event."]}),"\n",(0,i.jsxs)(n.p,{children:["Video Playback Failure. This metric represents how often your viewers have a problem with playback once a video starts.\nYou can calculate this metric by tracking the ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#error",children:(0,i.jsx)(n.code,{children:"error"})})," event\nafter the first ",(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/interfaces/PlayerEventMap.html#playing",children:(0,i.jsx)(n.code,{children:"playing"})})," event."]}),"\n",(0,i.jsx)(n.p,{children:"Note that these proposed calculations are only loosely formulated to help you understand the relationship between video metrics and a video player API."}),"\n",(0,i.jsx)(n.p,{children:'When talking about metrics, you often apply dimensions or filters to a metric.\nFor example, when talking about the "Plays" metric (see above), the base metric would apply to all logs throughout all time.\nWhen analyzing your data, you might want to apply a filter (or dimension), such time (to consider all "Plays" for a specific period of time), asset (to research a specific asset), user (to check a specific user\'s activity), and so on.\nIt is up to you (or your commercial analytics service) to associate certain dimensions with a raw video player event.'}),"\n",(0,i.jsx)(n.h3,{id:"session-management",children:"Session management"}),"\n",(0,i.jsx)(n.p,{children:'It\'s important to note that THEOplayer doesn\'t associate a user ID or session ID with an event.\n(This is pretty normal, because THEOplayer is a client-side video player library.\nIt\'s not aware of your "back-end" "CMS", "users" or "sessions".)'}),"\n",(0,i.jsx)(n.p,{children:"When you are implementing an analytics service, you usually want to associate a session or user with an event\nwhen forwarding the event to your remote analytics database. As an app developer, it is your responsibility\nto do this association."}),"\n",(0,i.jsx)(n.h2,{id:"integrating-google-analytics",children:"Integrating Google Analytics"}),"\n",(0,i.jsx)(n.p,{children:"This subsection shows you how you could connect the THEOplayer Web SDK with Google Analytics."}),"\n",(0,i.jsx)(n.h3,{id:"web-sdk",children:"Web SDK"}),"\n",(0,i.jsxs)(n.p,{children:["Google Analytics (GA) requires you to ",(0,i.jsx)(n.a,{href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/",children:"load in the GA library"})," and configure it through JavaScript.\nThis script also sets up a default tracker for your tracking ID UA-XXXXX-Y."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<head>\n  ... (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new\n  Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-XXXXX-Y', 'auto'); ga('send', 'pageview'); ...\n</head>\n"})}),"\n",(0,i.jsx)(n.p,{children:'Then, you must use the THEOplayer API to "add an event listener".\nIn an event listener, you specify which events you want to track,\nand what the reaction should be when such an event should be detected.'}),"\n",(0,i.jsxs)(n.p,{children:["For example, with Google Analytics, we could subscribe to a list of events,\nand call the ",(0,i.jsx)(n.code,{children:"ga('send')"})," function from the Google Analytics API to forward this event to your Google Analytics database."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"player.addEventListener(['durationchange', 'stalled', 'ended', 'seeking', 'seeked', 'waiting', 'playing', 'pause', 'volumechange'], function (event) {\n  ga('send', {\n    hitType: 'event',\n    eventCategory: 'video',\n    eventAction: event.type,\n    eventLabel: player.src,\n    eventValue: Math.floor(player.currentTime),\n  });\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more advanced integrations, Google Analytics also allows you to ",(0,i.jsx)(n.a,{href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/creating-trackers",children:"create multiple named trackers"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:['Of course, you control the code, so you could send custom "made up" events.\nA useful example would a ',(0,i.jsx)(n.code,{children:"firstplay"}),' event, which would map to the "first play" event for a session.']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"var firstplay = true;\nplayer.addEventListener('play', function (event) {\n  if (firstplay) {\n    ga('send', {\n      hitType: 'event',\n      eventCategory: 'video',\n      eventAction: 'firstplay',\n      eventLabel: player.src,\n      eventValue: Math.floor(player.currentTime),\n    });\n    firstplay = false;\n  }\n  ga('send', {\n    hitType: 'event',\n    eventCategory: 'video',\n    eventAction: event.type,\n    eventLabel: player.src,\n    eventValue: Math.floor(player.currentTime),\n  });\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["(Keep in mind that you should reset ",(0,i.jsx)(n.code,{children:"firstplay"})," to ",(0,i.jsx)(n.code,{children:"true"})," when you configure another video.)"]}),"\n",(0,i.jsxs)(n.p,{children:['Another useful "fake" event that you could track is the "video startup time", as discussed at ',(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theoplayer/v6/how-to-guides/player/how-can-we-track-the-first-playing-event",children:"How to measure time-to-first-frame?"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Remember that not every event is accessible through the ",(0,i.jsx)(n.code,{children:"Player"})," interface which is accessible through the ",(0,i.jsx)(n.code,{children:"player"})," property.\nFor example, if you want to notify GA of a video quality change event, you have to subscribe to the correct video track,\nand leverage the ",(0,i.jsx)(n.code,{children:"VideoTrackList"})," interface and the ",(0,i.jsx)(n.code,{children:"VideoTrack"})," interface."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"player.videoTracks.addEventListener('addtrack', function (e0) {\n  e0.track.addEventListener('activequalitychanged', function (e1) {\n    ga('send', {\n      hitType: 'event',\n      eventCategory: 'video',\n      eventAction: e1.type,\n      eventLabel: player.src,\n      eventValue: Math.floor(player.currentTime),\n    });\n  });\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"android-tv-sdk--ios-tvos-sdk",children:"Android (/TV) SDK & iOS (/tvOS) SDK"}),"\n",(0,i.jsxs)(n.p,{children:["Refer to Google Analytics' documentation at ",(0,i.jsx)(n.a,{href:"https://developers.google.com/analytics/solutions/mobile",children:"https://developers.google.com/analytics/solutions/mobile"})," if you\u2019re interested in integrating Google Analytics on an Android or iOS-based platform. Similar to the Web SDK, developers would subscribe to events and properties emitted by THEOplayer and create a custom mapping to the Google Analytics library."]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["A custom analytics integration gives you full control over your code, and the data you want to submit to your analytics system. This data is exposed through the THEOplayer API, and allows you to subscribe to events such as the ",(0,i.jsx)(n.a,{href:"https://support.theoplayer.com/hc/en-us/articles/115000275789-Ads-API",children:"start of an ad"}),", or a\xa0",(0,i.jsx)(n.a,{href:"https://support.theoplayer.com/hc/en-us/articles/115003088225-360-Video-and-VR-API",children:"direction change event in 360/VR"}),"\xa0playback."]}),"\n",(0,i.jsx)(n.p,{children:"Extra resources:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/web/",children:"THEOplayer API"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/theoplayer/v6/getting-started/sdks/web/getting-started",children:"THEOplayer Getting Started Guide"})}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},52878:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/analytics-events-185d6ab52b556af08d8300b545ae5876.png"},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var a=t(67294);let i={},r=a.createContext(i);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);