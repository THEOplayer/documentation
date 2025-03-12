"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["30499"],{72605:function(e,n,a){a.r(n),a.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"how-to-guides/drm/how-to-do-offline-drm/offline-drm-with-ios","title":"How to do offline DRM on iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)","description":"Prerequisites","source":"@site/theoplayer_versioned_docs/version-v4/how-to-guides/04-drm/03-how-to-do-offline-drm/02-offline-drm-with-ios.md","sourceDirName":"how-to-guides/04-drm/03-how-to-do-offline-drm","slug":"/how-to-guides/drm/how-to-do-offline-drm/offline-drm-with-ios","permalink":"/documentation/pr-preview/pr-233/theoplayer/v4/how-to-guides/drm/how-to-do-offline-drm/offline-drm-with-ios","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v4/how-to-guides/04-drm/03-how-to-do-offline-drm/02-offline-drm-with-ios.md","tags":[],"version":"v4","sidebarPosition":2,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to do offline DRM on Android","permalink":"/documentation/pr-preview/pr-233/theoplayer/v4/how-to-guides/drm/how-to-do-offline-drm/offline-drm-with-android"},"next":{"title":"Customizing Notifications for Downloading Offline DRM on Android","permalink":"/documentation/pr-preview/pr-233/theoplayer/v4/how-to-guides/drm/how-to-do-offline-drm/offline-drm-notifications-android"}}'),t=a("85893"),i=a("50065");let r={},c="How to do offline DRM on iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)",o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Code example",id:"code-example",level:2},{value:"Download",id:"download",level:3},{value:"Playback",id:"playback",level:3},{value:"Pause and restart",id:"pause-and-restart",level:3},{value:"Check size and progression",id:"check-size-and-progression",level:3},{value:"Delete",id:"delete",level:3},{value:"Renew a DRM license",id:"renew-a-drm-license",level:3},{value:"Handle redirected manifest",id:"handle-redirected-manifest",level:3}];function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"how-to-do-offline-drm-on-iostvos-sdk-and-legacy-iostvos-sdk-412x",children:"How to do offline DRM on iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)"})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"In order to do offline DRM on iOS, your license key should be downloadable and cacheable. The SDK will not be able to decrypt your content if your key expired."}),"\n",(0,t.jsx)(n.p,{children:"This feature only works on iOS 10.0 and above."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Known limitations"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["If your ",(0,t.jsx)(n.strong,{children:"manifest gets redirected"})," when you are caching and playing back a resource, you ",(0,t.jsx)(n.strong,{children:"need to save your redirected manifest URL"})," (what is being cached) and ",(0,t.jsx)(n.strong,{children:"provide that (redirected) URL to the player"})," when you would like to play back from the cache."]}),"\n",(0,t.jsxs)(n.li,{children:["Only ",(0,t.jsx)(n.strong,{children:"completely cached videos can be played offline"}),". (When the CachingTask status is DONE, then the video is playable without any internet connection)"]}),"\n",(0,t.jsxs)(n.li,{children:["HLS manifests can have a tag ",(0,t.jsxs)(n.strong,{children:["#EXT-X-PLAYLIST-TYPE",":VOD"]})," (",(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/video_on_demand_playlist_construction",children:"https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/video_on_demand_playlist_construction"}),")\nIf this tag is not present in the manifest of the cached quality, THEOplayer will make extra request for the manifest event if the video is completely cached. To avoid from these extra request, you need to provide **EXT-X-PLAYLIST-TYPE",":VOD"," **in your manifests."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"code-example",children:"Code example"}),"\n",(0,t.jsx)(n.p,{children:"Here we provide some code examples to perform different calls. For all possible API calls, we refer you to the documentation available in the SDK that you have generated/received."}),"\n",(0,t.jsx)(n.h3,{id:"download",children:"Download"}),"\n",(0,t.jsx)(n.p,{children:"The snippet below downloads a FairPlay HLS asset."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'//example source\npublic static var sourceToBeCached: SourceDescription {\n    let src = "https://source.m3u8"\n    let merchant = "merchant"\n    let userId = "userId"\n    let sessionId = "sessionId"\n    let streamType = "application/x-mpegurl"\n    let drmConfig = DRMTodayDRMConfiguration(\n                        licenseAcquisitionURL: "https://lic.staging.drmtoday.com/license-server-fairplay/",\n                        certificateURL: "https://lic.staging.drmtoday.com/license-server-fairplay/cert/",\n                        userId: userId,\n                        sessionId: sessionId,\n                        merchant: merchant\n                    )\n    return SourceDescription(source: TypedSource(src: src, type: streamType, drm: drmConfig))\n}\n\n//example cache call\nvar cachingTask: CachingTask?\n\nfunc cacheSource(SourceDescription source, Date expirationDate) {\n            cachingTask = THEOplayer.cache.createTask(source: source, parameters: CachingParameters(expirationDate: expirationDate))\n            if cachingTask != nil {\n                _ = cachingTask!.addEventListener(type: CachingTaskEventTypes.STATE_CHANGE) { event in\n                    print("Received state change on caching task \\(self.cachingTask!.source.sources[0].src) Status: \\(self.cachingTask!.status)")\n                }\n                _ = cachingTask!.addEventListener(type: CachingTaskEventTypes.PROGRESS) { event in\n                    print("Received progress on caching task \\(self.cachingTask!.source.sources[0].src) Cached: ")\n                    for timeRange in self.cachingTask!.cached {\n                        print(timeRange.start, timeRange.end)\n                    }\n                }\n                cachingTask.start()\n            }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"playback",children:"Playback"}),"\n",(0,t.jsx)(n.p,{children:"To playback cached material:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"func playSourceFromCache(source: SourceDescription) {\n    theoplayer.source = source\n    theoplayer.play();\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"pause-and-restart",children:"Pause and restart"}),"\n",(0,t.jsx)(n.p,{children:"A caching task can be paused and restarted through the task object itself."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")\nlet sourceDescription = SourceDescription(source : typedSource)\n\nlet cachingTask = THEOplayer.cache.createTask(source: sourceDescription, parameters: nil)\n\n// starting a caching task\ncachingTask?.start()\n\n// pausing a caching task\ncachingTask?.pause()\n\n// resuming a caching task\ncachingTask?.start()\n'})}),"\n",(0,t.jsx)(n.h3,{id:"check-size-and-progression",children:"Check size and progression"}),"\n",(0,t.jsx)(n.p,{children:"After creating a caching task, it is possible to check an estimate for the total size of the caching task on disk, and the current progression in bytes (stored)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")\nlet sourceDescription = SourceDescription(source : typedSource)\n\nlet cachingTask = THEOplayer.cache.createTask(source: sourceDescription, parameters: nil)\n\n// starting a caching task\ncachingTask?.start()\n\nif let cachingTask = cachingTask {\n    // Listen for state change events\n    _ = cachingTask.addEventListener(type: CachingTaskEventTypes.STATE_CHANGE, listener: { event in\n        print(cachingTask.status)\n    })\n    // Listen for progress events\n    _ = cachingTask.addEventListener(type: CachingTaskEventTypes.PROGRESS, listener: { event in\n        // percentage cached\n        print(cachingTask.percentageCached)\n        // total bytes cached\n        print(cachingTask.bytesCached)\n        // the amount of seconds cached\n        print(cachingTask.secondsCached)\n        // the range that is cached\n        for timeRange in cachingTask.cached {\n            print(timeRange.start, timeRange.end)\n        }\n    })\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"delete",children:"Delete"}),"\n",(0,t.jsx)(n.p,{children:"The snippet below deletes all cached assets"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'func cleanCache() {\n    for cachingTask in THEOplayer.cache.tasks {\n        print("Will remove caching task \\(cachingTask.source.sources[0].src)")\n        cachingTask.remove()\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"renew-a-drm-license",children:"Renew a DRM license"}),"\n",(0,t.jsx)(n.p,{children:"Renew a DRM license with specific DRM configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'func renewLicense() {\n    let newDrmConfig = DRMTodayDRMConfiguration(\n                            licenseAcquisitionURL: "https://lic.staging.drmtoday.com/license-server-fairplay/",\n                            certificateURL: "https://lic.staging.drmtoday.com/license-server-fairplay/cert/",\n                            userId: userId,\n                            sessionId: sessionId,\n                            merchant: merchant\n                        )\n\n    cachingTask.license.renew(newDrmConfig) // or we can renew it with the old drmConfig too: cachingTask.license.renew()\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"handle-redirected-manifest",children:"Handle redirected manifest"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'// cache source\n\nlet url = URL(string: "MASTER_MANIFEST_URL_THAT_GETS_REDIRECTED")\n\nlet task = URLSession.shared.dataTask(with: url!) { (data, response, error) in\n\n    Streams.SAVED_REDIRECTED_URL = (response?.url)!\n    cachingTaskSource.sources[0].src = Streams.SAVED_REDIRECTED_URL!\n    self.cachingTask = THEOplayer.cache.createTask(source: cachingTaskSource, parameters: CachingParameters(expirationDate: Date.distantFuture, bandwidth: cachingTaskBandwidth))\n    if self.cachingTask != nil {\n        _ = self.cachingTask!.addEventListener(type: CachingTaskEventTypes.STATE_CHANGE) { event in\n            if let cachingTask = self.cachingTask {\n                print("Received state change on caching task \\(cachingTask.source.sources[0].src) Status: \\(cachingTask.status)")\n            }\n        }\n        _ = self.cachingTask!.addEventListener(type: CachingTaskEventTypes.PROGRESS) { event in\n            print("Received progress on caching task \\(self.cachingTask!.source.sources[0].src) Cached: ")\n            for timeRange in self.cachingTask!.cached {\n                print(timeRange.start, timeRange.end)\n            }\n        }\n        print("Did create caching task \\(self.cachingTask!.source.sources[0].src)")\n    }\n}\ntask.resume()\n\n// playback of cached source\n\nvar source = cachingTaskSource\nsource.sources[0].src = Streams.SAVED_REDIRECTED_URL!\ntheoplayer.source = source\ntheoplayer.play()\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return c},a:function(){return r}});var s=a(67294);let t={},i=s.createContext(t);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);