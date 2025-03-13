"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["13267"],{18712:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>s});var t=JSON.parse('{"id":"how-to-guides/drm/how-to-do-offline-drm/offline-drm-with-android","title":"How to do offline DRM on Android","description":"This how-to guide describes how to implement playback of downloadable content-protected MPEG-DASH using the THEOplayer Android SDK. Currently, Widevine is supported together with the Irdeto and DRMToday integrations.","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/04-drm/03-how-to-do-offline-drm/01-offline-drm-with-android.md","sourceDirName":"how-to-guides/04-drm/03-how-to-do-offline-drm","slug":"/how-to-guides/drm/how-to-do-offline-drm/offline-drm-with-android","permalink":"/documentation/pr-preview/pr-234/theoplayer/v6/how-to-guides/drm/how-to-do-offline-drm/offline-drm-with-android","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/04-drm/03-how-to-do-offline-drm/01-offline-drm-with-android.md","tags":[],"version":"v6","sidebarPosition":1,"frontMatter":{},"sidebar":"roku","previous":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-234/theoplayer/v6/how-to-guides/drm/how-to-do-offline-drm/introduction"},"next":{"title":"How to do offline DRM on iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)","permalink":"/documentation/pr-preview/pr-234/theoplayer/v6/how-to-guides/drm/how-to-do-offline-drm/offline-drm-with-ios"}}'),a=i("85893"),o=i("50065");let r={},s="How to do offline DRM on Android",d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Code example",id:"code-example",level:2},{value:"Listing and restarting caching tasks",id:"listing-and-restarting-caching-tasks",level:2}];function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"how-to-do-offline-drm-on-android",children:"How to do offline DRM on Android"})}),"\n",(0,a.jsx)(n.p,{children:"This how-to guide describes how to implement playback of downloadable content-protected MPEG-DASH using the THEOplayer Android SDK. Currently, Widevine is supported together with the Irdeto and DRMToday integrations."}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"In order to do offline DRM on Android, your license key should be downloadable, and cacheable. The SDK will not be able to decrypt your content if your key expired."}),"\n",(0,a.jsx)(n.p,{children:"To enable the display of progress notifications for downloading content in your Android application you need to include the following permissions in your AndroidManifest.xml file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<manifest>\n    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />\n    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />\n    <application>\n        ...\n    </application>\n</manifest>\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["android.permission.FOREGROUND_SERVICE: This permission allows THEOplayer to run a foreground service, ensuring uninterrupted content downloads even when the application is not in the foreground. See more at ",(0,a.jsx)(n.a,{href:"https://developer.android.com/guide/components/foreground-services#request-foreground-service-permissions",children:"Foreground service permission"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["android.permission.POST_NOTIFICATIONS: This permission is required if an application is targeting API 33 (Android 13) and above. It enables THEOplayer to create and display notifications, keeping users informed about the progress of content downloads. For more information, refer to the ",(0,a.jsx)(n.a,{href:"https://developer.android.com/develop/ui/views/notifications/notification-permission",children:"Notification runtime permission"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Including these permissions in your AndroidManifest.xml file is necessary for THEOplayer to run a foreground service and provide progress notifications during content downloads."}),"\n",(0,a.jsx)(n.h2,{id:"code-example",children:"Code example"}),"\n",(0,a.jsx)(n.p,{children:"The snippet below downloads a Widevine MPEG-DASH asset."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"private void cacheSource(String sessionId, String src, String amount, Date expirationDate) {\n    Cache cache = THEOplayerGlobal.getSharedInstance(this).getCache();\n    DRMConfiguration drmToday = createDrmTodayConfiguration(sessionId);\n    SourceDescription source = new SourceDescription.Builder(\n        new TypedSource.Builder(src)\n            .drm(drmToday)\n        .build())\n    .build();\n    CachingParameters cachingParameters = new CachingParameters.Builder()\n                .amount(amount)\n                .expirationDate(expirationDate)\n                .build();\n    CachingTask cachingTask = cache.createTask(source, cachingParameters);\n    cachingTask.addEventListener(CachingTaskEventTypes.CACHING_TASK_STATE_CHANGE, e -> {\n        switch (cachingTask.getStatus()) {\n            case DONE:\n                // handle success..\n                break;\n            case ERROR:\n                // handle error..\n                break;\n            default: // do nothing\n                break;\n        }\n    });\n    cachingTask.start();\n}\n\nprivate DRMConfiguration createDrmConfiguration(String sessionId) {\n    KeySystemConfiguration widevine = new KeySystemConfiguration.Builder()\n        .keySystemConfiguration(LICENSE_ACQUISITION_URL)\n        .licenseType(LicenseType.PERSISTENT)\n        .build();\n    return YOUR_DRM_INTEGRATION_WITH_WIVDEVINE(widevine)\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"To playback cached material, create and play the stream as per usual. The cached content will be used for the known source."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"private void playSourceFromCache(String sessionId, String src) {\n    DRMConfiguration drmConf = createDrmConfiguration(sessionId);\n    SourceDescription sourceDescription =\n        new SourceDescription.Builder(\n                new TypedSource.Builder(src)\n                        .drm(drmConf)\n                        .build())\n                .build();\n    tpv.getPlayer().setSource(sourceDescription);\n    tpv.getPlayer().play();\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"A caching task can be paused and restarted through the task object itself."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'private void startAndPauseTask(CachingTask task) {\n    // When not started, the task will be in the "IDLE" state\n    task.start();\n    // The status of the task will now be "LOADING"\n    task.pause();\n    // The task reverts back to "IDLE" after finishing its current segment download\n    task.start();\n    // The task continues where it was paused\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"After creating a caching task, it is possible to check an estimate for the total size of the caching task on disk, and the current progression in bytes (stored)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"private void checkStorageRequirements(CachingTask unstartedTask) {\n    // We can get an estimate for the amount of space this task will consume. This will be ready once the manifest is preprocessed when the task is created. Starting is not necessary.\n    System.out.println(unstartedTask.getBytes());\n    unstartedTask.start();\n\n    // ... Additional logic here\n\n    // At any time, we can check the current amount of bytes cached by the task\n    System.out.println(unstartedTask.getBytesCached());\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"listing-and-restarting-caching-tasks",children:"Listing and restarting caching tasks"}),"\n",(0,a.jsx)(n.p,{children:"An important side note when calling previously cached tasks is that you need to initialize the cache first. Initializing happens asynchronously, so calling upon the cache immediately after initializing may result in an empty list as it is still initialising. (You could initialise the cache as soon as your app opens, such that you can access it later in other pages in the app).\nTo initialize the cache, you need to run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Cache cache = THEOplayerGlobal.getSharedInstance(this).getCache();\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you only want to initialize it at the moment that you need it, you can use an eventListener to see when it's initialised, e.g."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Cache cache = THEOplayerGlobal.getSharedInstance(this).getCache();\ncache.addEventListener(CacheEventTypes.CACHE_STATE_CHANGE, new EventListener<CacheStateChangeEvent>() {\n    @Override\n    public void handleEvent(CacheStateChangeEvent cacheStateChangeEvent) {\n        // Logic once cache is initialized.\n        // Status can always be fetched using\n        // cache.getStatus(), which will return the ENUM CacheStateChangeEvent.INITIALISED or CacheStateChangeEvent.UNINITIALISED\n    }\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:'Once the cache is properly initialized, you can call upon the cache with methods such as "getTasks()" which will return a TaskList that you can iterate through to find previously cached tasks and resume caching or play the resource. Example:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// If you're in a different activity, you can always call upon the previously initialized cache\nCache cache = THEOplayerGlobal.getSharedInstance(this).getCache();\n\n// Loop over previously cached tasks\nfor (CachingTask cachedVideo : cache.getTasks()) {\n    // Do logic with the found cached video e.g.\n    CachingTaskStatus status = cachedVideo.getStatus();\n    SourceDescription sourceDescription = cachedVideo.getSource();\n    Double percentageCached = cachedVideo.getPercentageCached();\n    cachedVideo.pause(); // Pause if not already paused\n    cachedVideo.start(); // start or resume caching task}\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For all possible API calls, we refer you to the JavaDoc available ",(0,a.jsx)(n.a,{href:"pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/cache/package-summary.html",children:"here"})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return r}});var t=i(67294);let a={},o=t.createContext(a);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);