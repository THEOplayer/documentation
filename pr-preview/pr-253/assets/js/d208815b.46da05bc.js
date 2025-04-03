"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["5972"],{79709:function(e,n,s){s.r(n),s.d(n,{default:()=>l,frontMatter:()=>c,metadata:()=>a,assets:()=>h,toc:()=>d,contentTitle:()=>r});var a=JSON.parse('{"id":"external/react-native-theoplayer/doc/media-caching","title":"Media Cache","description":"Overview","source":"@site/theoplayer_versioned_docs/version-v4/external/react-native-theoplayer/doc/media-caching.md","sourceDirName":"external/react-native-theoplayer/doc","slug":"/getting-started/frameworks/react-native/media-caching","permalink":"/documentation/pr-preview/pr-253/theoplayer/v4/getting-started/frameworks/react-native/media-caching","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/react-native-theoplayer/blob/-/doc/media-caching.md","tags":[],"version":"v4","frontMatter":{"slug":"/getting-started/frameworks/react-native/media-caching"},"sidebar":"react-native","previous":{"title":"Limitations and Known Issues","permalink":"/documentation/pr-preview/pr-253/theoplayer/v4/getting-started/frameworks/react-native/limitations"},"next":{"title":"Migrating to react-native-theoplayer v2.x","permalink":"/documentation/pr-preview/pr-253/theoplayer/v4/getting-started/frameworks/react-native/migrating-v2"}}'),t=s("85893"),i=s("50065");let c={slug:"/getting-started/frameworks/react-native/media-caching"},r="Media Cache",h={},d=[{value:"Overview",id:"overview",level:2},{value:"Caching Workflow",id:"caching-workflow",level:3},{value:"Creating a CachingTask",id:"creating-a-cachingtask",level:2},{value:"Controlling the CachingTask",id:"controlling-the-cachingtask",level:2},{value:"Listening for Cache events",id:"listening-for-cache-events",level:2},{value:"MediaCache events",id:"mediacache-events",level:3},{value:"CachingTask events",id:"cachingtask-events",level:3},{value:"Using React hooks",id:"using-react-hooks",level:2},{value:"useCachingTaskList",id:"usecachingtasklist",level:3},{value:"useCachingTaskProgress and useCachingTaskStatus",id:"usecachingtaskprogress-and-usecachingtaskstatus",level:3},{value:"The Example App",id:"the-example-app",level:2},{value:"Known Limitations",id:"known-limitations",level:2}];function o(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"media-cache",children:"Media Cache"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"The Media Cache API is available as of v3.0.0 and facilitates the download of media assets for offline playback.\nThis section provides an overview of how to utilize the Media Caching API,\ncreate caching tasks, and control the media cache."}),"\n",(0,t.jsx)(n.p,{children:"The process of caching a media asset involves several steps to enable offline playback.\nIt starts with the creation and initiation of a CachingTask, which downloads the media content for local storage.\nOnce cached, the asset can be played offline seamlessly."}),"\n",(0,t.jsx)(n.p,{children:"The Media Cache feature is accessible on all platforms except for tvOS."}),"\n",(0,t.jsx)(n.p,{children:"This page is structured as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#caching-workflow",children:"Caching Workflow"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#creating-a-cachingtask",children:"Creating a CachingTask"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#controlling-the-cachingtask",children:"Controlling the CachingTask"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#listening-for-cache-events",children:"Listening for Cache events"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#using-react-hooks",children:"Using React hooks"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#known-limitations",children:"Known Limitations"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"caching-workflow",children:"Caching Workflow"}),"\n",(0,t.jsx)(n.p,{children:"Caching a media asset encompasses the following stages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"CachingTask creation: The caching process commences by creating a CachingTask, which orchestrates the downloading of the media content for offline access."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Starting the CachingTask: Once the CachingTask is established, the download process is initiated using the start() method. This triggers the download of the complete media stream to the device's local storage."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Offline Playback: After successful caching, the cached media asset can be played offline. This is accomplished by providing the original source to the player. The player checks if the asset is available offline; if it is, playback occurs from the local cache. If not, the player fetches the content from the network."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-cachingtask",children:"Creating a CachingTask"}),"\n",(0,t.jsxs)(n.p,{children:["To initiate the download process of a media asset, you need to create a ",(0,t.jsx)(n.code,{children:"CachingTask"}),".\nThis task requires two essential parameters: a ",(0,t.jsx)(n.code,{children:"SourceDescription"})," specifying the asset\nto be cached, and ",(0,t.jsx)(n.code,{children:"CachingTaskParameters"})," that define caching settings."]}),"\n",(0,t.jsx)(n.p,{children:"Below is an example of creating a caching task:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'// The source we want to cache.\nconst source = {\n    source: [\n        {\n            src: "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8",\n            type: "application/x-mpegurl"\n        }\n    ],\n    metadata: {\n        title: "Big Buck Bunny"\n    }\n} as SourceDescription;\n\n// Caching parameters\nconst parameters = {\n    // Cache the whole stream\n    amount: \'100%\',\n\n    // Cache for 24 hours\n    expirationDate: new Date(Date.now() + 24 * 60 * 60 * 1000),\n\n    // Cache quality\n    bandwidth: 2000000,\n} as CachingTaskParameters;\n\n// Create a caching task\nconst task = await MediaCache.createTask(source, parameters);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"controlling-the-cachingtask",children:"Controlling the CachingTask"}),"\n",(0,t.jsxs)(n.p,{children:["Once the ",(0,t.jsx)(n.code,{children:"CachingTask"})," is created, it enters the ",(0,t.jsx)(n.code,{children:"idle"})," state. To initiate the download process:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"task.start();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Additionally, you can pause or remove the task from the media cache using these methods:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"task.pause();\ntask.remove();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"listening-for-cache-events",children:"Listening for Cache events"}),"\n",(0,t.jsxs)(n.p,{children:["Both ",(0,t.jsx)(n.code,{children:"MediaCache"})," and ",(0,t.jsx)(n.code,{children:"CachingTask"})," instances dispatch events to notify about changes and status updates."]}),"\n",(0,t.jsx)(n.h3,{id:"mediacache-events",children:"MediaCache events"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"MediaCache"})," dispatches the following events:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Event name"}),(0,t.jsx)(n.th,{children:"Purpose"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"statechange"})}),(0,t.jsxs)(n.td,{children:["Dispatched if the status of the Media Cache changes from ",(0,t.jsx)(n.code,{children:"uninitialised"})," to ",(0,t.jsx)(n.code,{children:"initialised"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"addtask"})}),(0,t.jsxs)(n.td,{children:["Dispatched if a new ",(0,t.jsx)(n.code,{children:"CachingTask"})," is added to the ",(0,t.jsx)(n.code,{children:"MediaCache.tasks"})," list."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"removetask"})}),(0,t.jsxs)(n.td,{children:["Dispatched if ",(0,t.jsx)(n.code,{children:"CachingTask"})," is removed from the ",(0,t.jsx)(n.code,{children:"MediaCache.tasks"})," list."]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["As an example, listening to the ",(0,t.jsx)(n.code,{children:"addtask"})," event is done as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"MediaCache.addEventListener(CacheEventType.addtask, (event: AddCachingTaskEvent) => {\n    console.log('[MediaCache] a new task was added: ', event.task.id);\n  }\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"cachingtask-events",children:"CachingTask events"}),"\n",(0,t.jsxs)(n.p,{children:["Each individual ",(0,t.jsx)(n.code,{children:"CachingTask"})," also dispatches events to advertise changes in ",(0,t.jsx)(n.code,{children:"progress"})," or ",(0,t.jsx)(n.code,{children:"status"}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Event name"}),(0,t.jsx)(n.th,{children:"Purpose"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"statechange"})}),(0,t.jsxs)(n.td,{children:["Dispatched if the status of the task changes. Possible values are ",(0,t.jsx)(n.code,{children:"idle"}),", ",(0,t.jsx)(n.code,{children:"loading"}),", ",(0,t.jsx)(n.code,{children:"done"}),", ",(0,t.jsx)(n.code,{children:"error"})," or ",(0,t.jsx)(n.code,{children:"evicted"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"progress"})}),(0,t.jsxs)(n.td,{children:["Dispatched on a regular interval while ",(0,t.jsx)(n.code,{children:"loading"}),"."]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["As an example, listening for ",(0,t.jsx)(n.code,{children:"progress"})," events is done as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"task.addEventListener(CachingTaskEventType.progress, () => {\n    console.log('[MediaCache]', `Progress for task ${task.id}: ${task.percentageCached}`);\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-react-hooks",children:"Using React hooks"}),"\n",(0,t.jsx)(n.p,{children:"For convenience, React hooks are available to simplify handling caching tasks without the need to subscribe or\nunsubscribe to listeners."}),"\n",(0,t.jsx)(n.h3,{id:"usecachingtasklist",children:"useCachingTaskList"}),"\n",(0,t.jsxs)(n.p,{children:["This hooks listens for updates in the ",(0,t.jsx)(n.code,{children:"MediaCache.tasks"})," list, and returns the updated list."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"function TaskListView(props: {debug: boolean}) {\n    const tasks = useCachingTaskList(props.debug);\n    return <View style={styles.container}>\n        {tasks.map((task, index) => <Text key={index} style={styles.taskListItem}>{task.id}</Text>)}\n    </View>\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"usecachingtaskprogress-and-usecachingtaskstatus",children:"useCachingTaskProgress and useCachingTaskStatus"}),"\n",(0,t.jsxs)(n.p,{children:["These hooks listen for updates in both progress and status of a ",(0,t.jsx)(n.code,{children:"CachingTask"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"function CachingTaskView(props: {task: CachingTask, debug: boolean}) {\n    const { task, debug } = props;\n    const status = useCachingTaskStatus(task, debug);\n    const progress = useCachingTaskProgress(task, debug);\n    return <View>\n        <Text>{`status: ${status}`}</Text>\n        <Text>{`progress: ${progress}`}</Text>\n    </View>\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"the-example-app",children:"The Example App"}),"\n",(0,t.jsx)(n.p,{children:"The example app that is part of this repository demonstrates the Media Cache features through\na basic user interface. It provides a menu with options to start caching the currently selected\nsource, and show a list of the currently available caching tasks."}),"\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.img,{alt:"main",src:s(7790).Z+"",width:"720",height:"1280"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.img,{alt:"main",src:s(29544).Z+"",width:"720",height:"1280"})})]})})}),"\n",(0,t.jsx)(n.h2,{id:"known-limitations",children:"Known Limitations"})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},7790:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/media_caching_1-291dc509ba26ee47cc721f8bd89e0e30.png"},29544:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/media_caching_2-980927a546367feead24e464ea8aaa0e.png"},50065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return c}});var a=s(67294);let t={},i=a.createContext(t);function c(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);