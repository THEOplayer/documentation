"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["11782"],{48509:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>s,metadata:()=>o,assets:()=>c,toc:()=>d,contentTitle:()=>a});var o=JSON.parse('{"id":"how-to-guides/drm/how-to-do-offline-drm/offline-drm-notifications-android","title":"Customizing Notifications for Downloading Offline DRM on Android","description":"Text Resources Customization","source":"@site/theoplayer_versioned_docs/version-v6/how-to-guides/04-drm/03-how-to-do-offline-drm/03-offline-drm-notifications-android.md","sourceDirName":"how-to-guides/04-drm/03-how-to-do-offline-drm","slug":"/how-to-guides/drm/how-to-do-offline-drm/offline-drm-notifications-android","permalink":"/documentation/pr-preview/pr-253/theoplayer/v6/how-to-guides/drm/how-to-do-offline-drm/offline-drm-notifications-android","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theoplayer_versioned_docs/version-v6/how-to-guides/04-drm/03-how-to-do-offline-drm/03-offline-drm-notifications-android.md","tags":[],"version":"v6","sidebarPosition":3,"frontMatter":{},"sidebar":"roku","previous":{"title":"How to do offline DRM on iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)","permalink":"/documentation/pr-preview/pr-253/theoplayer/v6/how-to-guides/drm/how-to-do-offline-drm/offline-drm-with-ios"},"next":{"title":"Introduction","permalink":"/documentation/pr-preview/pr-253/theoplayer/v6/how-to-guides/integrations/introduction"}}'),t=n("85893"),r=n("50065");let s={},a="Customizing Notifications for Downloading Offline DRM on Android",c={},d=[{value:"Text Resources Customization",id:"text-resources-customization",level:2},{value:"Customization of Notification Builders",id:"customization-of-notification-builders",level:2},{value:"Hiding notifications",id:"hiding-notifications",level:2}];function l(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"customizing-notifications-for-downloading-offline-drm-on-android",children:"Customizing Notifications for Downloading Offline DRM on Android"})}),"\n",(0,t.jsx)(i.h2,{id:"text-resources-customization",children:"Text Resources Customization"}),"\n",(0,t.jsx)(i.p,{children:"To customize the text or add translations to the notifications, you can override the following string resources:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'<string name="theo_download_progress_title">Downloading video</string>'})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"This resource represents the title displayed during the progress of video downloading."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'<string name="theo_download_status_title">Download %s</string>'})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["This resource represents the title displayed during the download process. The ",(0,t.jsx)(i.code,{children:"%s"})," placeholder will be replaced with the actual file name."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'<string name="theo_download_status_percentage">%d%%</string>'})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["This resource represents the percentage of download progress displayed in the notification. The ",(0,t.jsx)(i.code,{children:"%d"})," placeholder will be replaced with the actual progress value."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'<string name="theo_download_finished_status_title">Download finished</string>'})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"This resource represents the title displayed when the download is completed successfully."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'<string name="theo_download_paused_status_title">Download paused</string>'})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"This resource represents the title displayed when the download is paused."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'<string name="theo_download_failed_status_title">Download failed</string>'})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"This resource represents the title displayed when the download fails."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'<string name="theo_download_stopped_status_title">Download stopped</string>'})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"This resource represents the title displayed when the download is manually stopped."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'<string name="theo_cache_notifications_channel_name">Media downloader</string>'})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"This resource represents the name of the notification channel used for media downloading."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'<string name="theo_cache_notifications_channel_description">Downloads media to make it available for offline playback</string>'})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"This resource represents the description of the notification channel used for media downloading."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["To customize these texts or add translations, create corresponding string resources in your app's resource file (e.g., ",(0,t.jsx)(i.code,{children:"strings.xml"}),") and provide the desired values."]}),"\n",(0,t.jsx)(i.p,{children:"By overriding these resources, you can tailor the text content of the notifications to match your application's branding or localize them for different languages or regions."}),"\n",(0,t.jsx)(i.h2,{id:"customization-of-notification-builders",children:"Customization of Notification Builders"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"CacheNotificationsBuilder"})," interface provides the ability to create customized notification appearances using the NotificationCompat.Builder. This feature allows you to design notifications according to your specific preferences and requirements."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"CacheNotificationsBuilder"})," interface includes three methods:"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"createProgressNotificationBuilder"}),": This method allows you to customize the ",(0,t.jsx)(i.code,{children:"builder"})," parameter and create a custom progress notification builder for a specific caching task. It takes the ",(0,t.jsx)(i.code,{children:"task"})," parameter, which represents the caching task for which the progress notification is being created, and the ",(0,t.jsx)(i.code,{children:"builder"})," parameter, which is the base notification builder to customize. It returns the customized notification builder for the progress notification."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"createStatusNotificationBuilder"}),": In this method, you have the ability to customize the ",(0,t.jsx)(i.code,{children:"builder"})," parameter and create a custom status notification builder for a given caching task. It takes the ",(0,t.jsx)(i.code,{children:"task"})," parameter, which represents the caching task for which the status notification is being created, and the ",(0,t.jsx)(i.code,{children:"builder"})," parameter, which is the base notification builder to customize. It returns the customized notification builder for the status notification."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"createNotificationChannel"}),": This method enables you to customize the ",(0,t.jsx)(i.code,{children:"channel"})," parameter and create a custom notification channel for caching notifications. It takes the ",(0,t.jsx)(i.code,{children:"channel"})," parameter, which is the base notification channel builder to customize. It returns the customized notification channel builder."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Note:"})," If you decide to return ",(0,t.jsx)(i.code,{children:"null"})," in the ",(0,t.jsx)(i.code,{children:"createNotificationChannel"})," method, the library will not create any notification channel. This means that notifications related to caching will not have a designated channel for grouping or presentation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"These methods allow you to customize the appearance and behavior of notifications and notification channels according to your specific requirements when downloading media files using cache in THEOplayer."}),"\n",(0,t.jsx)(i.p,{children:"To implement this interface, follow these steps:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Obtain an instance of THEOplayer cache by calling ",(0,t.jsx)(i.code,{children:"THEOplayerGlobal.getSharedInstance(this).cache"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Assign an object that implements the CacheNotificationsBuilder interface to ",(0,t.jsx)(i.code,{children:"theoCache.notificationBuilder"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Example:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:"val theoCache = THEOplayerGlobal.getSharedInstance(this).cache\ntheoCache.notificationBuilder = object : CacheNotificationsBuilder {\n    override fun createNotificationChannel(channel: NotificationChannelCompat.Builder): NotificationChannelCompat.Builder {\n        // Customization logic for the notification channel\n        ...\n        return channel\n    }\n\n    override fun createProgressNotificationBuilder(task: CachingTask, builder: NotificationCompat.Builder): NotificationCompat.Builder {\n        // Customization logic for the progress notification builder\n        ...\n        return builder\n    }\n\n    override fun createStatusNotificationBuilder(task: CachingTask, builder: NotificationCompat.Builder): NotificationCompat.Builder {\n        // Customization logic for the status notification builder\n        ...\n        return builder\n    }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["In the ",(0,t.jsx)(i.code,{children:"createProgressNotificationBuilder"})," and ",(0,t.jsx)(i.code,{children:"createStatusNotificationBuilder"})," methods, you can refer to the official ",(0,t.jsx)(i.a,{href:"https://developer.android.com/reference/androidx/core/app/NotificationCompat.Builder",children:"NotificationCompat.Builder documentation"})," for detailed information on how to customize the notification appearance, add actions, and handle interactions."]}),"\n",(0,t.jsx)(i.p,{children:"Inside the implementation of each method, you can customize the respective notification channel or builder according to your requirements. Make sure to return the modified notification channel or builder as per the method's return type."}),"\n",(0,t.jsx)(i.p,{children:"By completing these steps, you will set up the implementation of the CacheNotificationsBuilder interface, allowing you to customize the appearance and behavior of notifications in THEOplayer cache."}),"\n",(0,t.jsx)(i.h2,{id:"hiding-notifications",children:"Hiding notifications"}),"\n",(0,t.jsxs)(i.p,{children:["To hide a notification, you can simply return ",(0,t.jsx)(i.code,{children:"null"})," in the corresponding method of the ",(0,t.jsx)(i.code,{children:"CacheNotificationsBuilder"})," interface."]}),"\n",(0,t.jsxs)(i.p,{children:["For example, if you want to hide the progress notification or status notification for a specific caching task, you can return ",(0,t.jsx)(i.code,{children:"null"})," in the ",(0,t.jsx)(i.code,{children:"createProgressNotificationBuilder"})," or ",(0,t.jsx)(i.code,{children:"createStatusNotificationBuilder"})," method, respectively. This will prevent the notification from being shown."]}),"\n",(0,t.jsxs)(i.p,{children:["Please note that when you return ",(0,t.jsx)(i.code,{children:"null"})," in the ",(0,t.jsx)(i.code,{children:"createProgressNotificationBuilder"})," or ",(0,t.jsx)(i.code,{children:"createStatusNotificationBuilder"})," methods to hide the notification, the downloading process will not be performed using a foreground service."]}),"\n",(0,t.jsx)(i.p,{children:"Ensure that you consider the implications of hiding notifications and not using a foreground service for downloading media files. It is recommended to provide alternative ways to inform the user about the download progress or completion if you choose to hide notifications."})]})}function h(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return s}});var o=n(67294);let t={},r=o.createContext(t);function s(e){let i=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);