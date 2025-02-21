"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["69666"],{98522:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>r,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"getting-started/real-time-update-with-webhooks","title":"Real-Time Updates with webhooks","description":"---","source":"@site/theolive/getting-started/real-time-update-with-webhooks.mdx","sourceDirName":"getting-started","slug":"/getting-started/real-time-update-with-webhooks","permalink":"/documentation/pr-preview/pr-218/theolive/getting-started/real-time-update-with-webhooks","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/theolive/getting-started/real-time-update-with-webhooks.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"theolive","previous":{"title":"How to manage your team","permalink":"/documentation/pr-preview/pr-218/theolive/getting-started/manage-team"},"next":{"title":"THEOlive scheduler: schedule channel start & stop","permalink":"/documentation/pr-preview/pr-218/theolive/getting-started/scheduler"}}'),l=n("85893"),i=n("50065");let o={sidebar_position:9},a="Real-Time Updates with webhooks",r={},d=[{value:"1. How it works",id:"1-how-it-works",level:2},{value:"2. Create and manage your webhooks",id:"2-create-and-manage-your-webhooks",level:2},{value:"3. How to act on event",id:"3-how-to-act-on-event",level:2},{value:"4. Add security to your webhooks",id:"4-add-security-to-your-webhooks",level:2},{value:"How does the verification work?",id:"how-does-the-verification-work",level:3},{value:"Full code sample",id:"full-code-sample",level:3},{value:"5. List of possible events",id:"5-list-of-possible-events",level:2}];function c(e){let t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"real-time-updates-with-webhooks",children:"Real-Time Updates with webhooks"})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.p,{children:"This guide describes how you can leverage THEOlive webhooks to receive real-time updates about your THEOlive components. You don't need to query for updates yourself anymore: we send you information when certain events happen. This guide will first explain what webhooks are, how you can create and manage them via the THEOlive console and/or API, and finally describe how you can secure your webhooks."}),"\n",(0,l.jsx)(t.h2,{id:"1-how-it-works",children:"1. How it works"}),"\n",(0,l.jsx)(t.p,{children:"When creating a webhook, you pass an endpoint URL that you control to THEOlive. This endpoint will be used by THEOlive to send real-time updates when certain events happen. It's important that this an HTTPS endpoint which is reachable by THEOlive."}),"\n",(0,l.jsxs)(t.p,{children:['You can choose on which events THEOlive has to send a message to your endpoint. For example: you can choose to get notified when a channel reaches the "playing" mode, but also when it got deleted, stopped, created, etc. A full list of available events can be found ',(0,l.jsx)(t.a,{href:"#5-list-of-possible-events",children:"at the bottom of this page"}),"."]}),"\n",(0,l.jsx)(t.p,{children:"The main advantage of webhooks is that THEOlive informs you in real-time when an event happens, and you don't have to pull our API continuously to check if there are any updates on an object."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(44944).Z+"",title:"webhooks",width:"512",height:"343"})}),"\n",(0,l.jsx)(t.h2,{id:"2-create-and-manage-your-webhooks",children:"2. Create and manage your webhooks"}),"\n",(0,l.jsxs)(t.p,{children:["You can create a webhook through the THEOlive API, or via the management console. In this document we will mainly describe the console approach, the full API reference for the actions and methods can be found ",(0,l.jsx)(t.a,{href:"https://developers.theo.live/reference/create-webhook",children:"here"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:['To create a webhook, click on "Webhooks" on the sidebar, followed by "Create". A webhook expects a name, a valid HTTPS endpoint, an optional description and a list of events it should listen and act on. A full list of events can be found at the bottom of this page. You can also select to listen to all possible events. When using the API, you can pass ',(0,l.jsx)(t.code,{children:'events: ["*"]'})," when a webhook should listen to all events."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(19002).Z+"",title:"Creating a webhook through the console",width:"1882",height:"932"})}),"\n",(0,l.jsxs)(t.p,{children:["When such an event happens, THEOlive will try to send a request to your endpoint. ",(0,l.jsx)(t.strong,{children:"It's important that you inform us as soon as possible that you received the request with a status 200 code"}),": requests that take longer than 3 seconds will be terminated by THEOlive and marked as failed. When a webhook has too many failed attempts, THEOlive will disable the webhook automatically. Below, we show a small code example of an Express app where we inform THEOlive we have received the request, before we do all other actions:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-javascript",children:"const express = require('express');\nconst port = 3000;\n\nvar app = express();\n\napp.use(express.json());\n\napp.post('/webhooks', (req, res) => {\n  res.send('ok'); // let us know ASAP you received our request\n\n  // your app-specific implementation like updating your database etc.\n});\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`);\n});\n"})}),"\n",(0,l.jsx)(t.admonition,{title:"\uD83D\uDEA7 Newly created webhooks will be disabled by default",type:"warning",children:(0,l.jsxs)(t.p,{children:["When you create a webhook, it won't be active yet. THEOlive does this so you can test things out before we actually start firing events to your endpoint. When you think you are fully ready to receive webhook mesages from THEOlive, you can enable the webhook through the console, or via the ",(0,l.jsx)(t.a,{href:"https://developers.theo.live/reference/enable-webhook",children:"/webhooks/${webhook-id}/enable"})," endpoint."]})}),"\n",(0,l.jsx)(t.p,{children:"When a webhook is created, you can update or delete it through the API or management console. At the details page you can also see the history of all message that have been sent to your endpoint, and if they've failed or not."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:n(12624).Z+"",title:"Webhook details page: option to manage your webhook, and a historical overview of all webhook messages that THEOlive sent to your endpoint",width:"1425",height:"907"})}),"\n",(0,l.jsx)(t.h2,{id:"3-how-to-act-on-event",children:"3. How to act on event"}),"\n",(0,l.jsx)(t.p,{children:"THEOlive sends a JSON body along with the request which contains all necessary information. This JSON body has the following format:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",metastring:"Request body example",children:'{\n  "created": 1661435007,\n  "type": "channel.playing",\n  "object": {\n    "type": "channel",\n    "id": "<my-channel-id>"\n  },\n  "livemode": true\n}\n'})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"created"})," is a Unix timestamp when the event happened"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"type"})," is the ",(0,l.jsx)(t.a,{href:"#5-list-of-possible-events",children:"type of event"})," that got fired"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"object"})," contains two properties: ",(0,l.jsx)(t.code,{children:"type"})," is the type of the object, ",(0,l.jsx)(t.code,{children:"id"})," the ID of it."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"livemode"}),": a boolean to indicate if the request was a test or not"]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["In your implementation, you can use this data to act on it accordingly. In the example below, we will act differently on receiving a ",(0,l.jsx)(t.code,{children:"channel.playing"})," and ",(0,l.jsx)(t.code,{children:"channel.deleted"})," event:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-javascript",metastring:"Act on events",children:"const express = require('express');\nconst port = 3000;\n\nvar app = express();\n\napp.use(express.json());\n\napp.post('/webhooks', (req, res) => {\n  res.send('ok'); // let us now ASAP you received our request\n\n  const data = req.body;\n\n  switch (data.type) {\n    case 'channel.playing':\n      setChannelActiveInMyDatabase(data.object.id); // Fictional code somewhere in your implementation\n    case 'channel.deleted':\n      console.log('Something got deleted');\n    default:\n      console.log('No code for this type implemented yet');\n  }\n});\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`);\n});\n"})}),"\n",(0,l.jsx)(t.h2,{id:"4-add-security-to-your-webhooks",children:"4. Add security to your webhooks"}),"\n",(0,l.jsxs)(t.p,{children:["THEOlive makes use of webhook signatures to verify that the webhook request was coming from us, and not from a server that was acting like THEOlive. On every request THEOlive will send a ",(0,l.jsx)(t.code,{children:"THEOlive-Signature"})," header that you can use to check if it was really THEOlive that sent the message."]}),"\n",(0,l.jsx)(t.h3,{id:"how-does-the-verification-work",children:"How does the verification work?"}),"\n",(0,l.jsxs)(t.p,{children:["Upon the creation of a webhook, you'll receive a ",(0,l.jsx)(t.code,{children:"secret"})," that looks like ",(0,l.jsx)(t.code,{children:"theosec_some-random-characters"}),". This is a key you can use in a later stage to do the necessary security checks."]}),"\n",(0,l.jsxs)(t.p,{children:["When receiving a webhook request from THEOlive, the ",(0,l.jsx)(t.code,{children:"THEOlive-Signature"})," will always get sent with it and looks similar to the following:",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.code,{children:"t=1659622850,h=6bbe0553922a31ea48cb3af9903616c3a8b65351434653251949480f2a91c037"})]}),"\n",(0,l.jsxs)(t.p,{children:["This is a string that you have to de-structure yourself to get the value of ",(0,l.jsx)(t.code,{children:"t"})," and ",(0,l.jsx)(t.code,{children:"h"}),":"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"t"})," is the Unix timestamp when the request got made. THEOlive adds this to prevent replay attacks."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"h"})," is a hexadecimal HMAC SHA-256 hash, which is a combination of the timestamp ",(0,l.jsx)(t.code,{children:"t"})," and the JSON body of the request, signed with your ",(0,l.jsx)(t.code,{children:"secret"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["As a user, you have to try to recreate the hash ",(0,l.jsx)(t.code,{children:"h"})," yourself: you take ",(0,l.jsx)(t.code,{children:"t"}),", add a stringified version of your JSON body after it, and hash it with the ",(0,l.jsx)(t.code,{children:"secret"})," you received upon webhook creation. If the result equals to ",(0,l.jsx)(t.code,{children:"h"}),", you can be sure the request was made by THEOlive. If not, someone tried to act like THEOlive."]}),"\n",(0,l.jsx)(t.h3,{id:"full-code-sample",children:"Full code sample"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-javascript",metastring:"Check THEOlive-Signature for security",children:'const express = require(\'express\');\nconst crypto = require(\'crypto\');\nconst port = 3400;\n\nvar app = express();\n\napp.use(express.json());\n\napp.post(\'/webhooks\', (req, res) => {\n  res.send(\'ok\'); // let us now ASAP you received our request\n\n  const secret = \'theosec_myverylittlesecret\'; // secret received on creation, can be retrieved anytime at the THEOlive console\n  const data = req.body; // body of the request\n\n  // 1. Grab THEOlive-Signature from header\n  const theoHeader = req.header(\'THEOlive-Signature\'); // t=1659622850,h=6bbe0553922a31ea48cb3af9903616c3a8b65351434653251949480f2a91c037\n\n  // 2. Split string: you\'ll receive a timestamp (t) and hash (h)\n  const timestampPart = theoHeader.split(\',\')[0]; // t=1659622850\n  const hashPart = theoHeader.split(\',\')[1]; // h=6bbe0553922a31ea48cb3af9903616c3a8b65351434653251949480f2a91c037\n\n  // 3. Get the values for both the timestamp and hash\n  const timestampValue = timestampPart.split(\'=\')[1]; // 1659622850\n  const hashValue = hashPart.split(\'=\')[1]; // 6bbe0553922a31ea48cb3af9903616c3a8b65351434653251949480f2a91c037\n\n  // 4. Prepare the hash string: stringify the request body\n  const dataAsString = JSON.stringify(data); // {"created":1659622849,"data":{"id":"9uiwh5owynp3ympsxqtjxa3zd","type":"channel"},"type":"channel.created","livemode":false}\n  const stringToBeHashed = `${timestampValue}.${dataAsString}`; // 1659622850.{"created":1659622849,"data":{"id":"9uiwh5owynp3ympsxqtjxa3zd","type":"channel"},"type":"channel.created","livemode":false}\n\n  // 5. Make a HMAC SHA-256 hash, using your secret as a key\n  const hashToCheck = crypto.createHmac(\'sha256\', secret).update(stringToBeHashed).digest(\'hex\'); // 6bbe0553922a31ea48cb3af9903616c3a8b65351434653251949480f2a91c037\n\n  // 6. Check if both hashes are the same\n  if (hashToCheck === hashValue) {\n    // all good, continue with code\n  } else {\n    // data not coming from THEOlive, throw an error\n  }\n});\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`);\n});\n'})}),"\n",(0,l.jsx)(t.h2,{id:"5-list-of-possible-events",children:"5. List of possible events"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.creating"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when someone initiated a creation of a channel."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.created"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when the creation of a channel is completed."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.stopping"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when someone decides to stop a channel."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.stopped"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when all procedures to stop a channel are completed."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.deleting"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when someone decides to delete a channel."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.deleted"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when the process to delete a channel is completed."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.error"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a channel goes into error state."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.deploying"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when someone starts a channel and all infrastructure starts deploying."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.starting"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when all infrastructure is deployed and channel is starting up."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.waiting"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when channel is ready, but isn't receiving ingest yet."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.ingesting"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when channel is receiving ingest."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.playing"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when manifest is ready and channel can playout content."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.scheduled"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a channel has a scheduled start time due to a scheduler. The channel itself is ready, but the stream will be available for the viewers at scheduler start time."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.log.warn"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a warning message for a channel gets received."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.log.error"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when an error message for a channel gets received."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.log.info"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when an info message for a channel gets received."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"channel.updated"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a channel got updated."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"alias.created"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when an new alias got created."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"alias.disabled"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when an alias got disabled."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"alias.enabled"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when an alias got enabled."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"alias.deleted"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when the process to delete an alias is finished."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"alias.updated"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when an alias got updated."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"webhook.created"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a webhook got created."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"webhook.enabled"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a webhook got enabled."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"webhook.disabled"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a webhook got disabled."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"webhook.updated"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a webhook got updated."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"webhook.deleted"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a webhook got deleted."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"scheduler.created"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a scheduler got created."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"scheduler.updated"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a scheduler got updated."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"scheduler.deleted"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a scheduler got deleted."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"scheduler.starting"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a scheduler moves to starting mode: all connected channels will start up, stream will not be shown to your users yet."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"scheduler.active"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a scheduler moves to active mode: the stream is now shown to your users."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"scheduler.terminated"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Occurs when a schedulers gets terminated."})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},12624:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/57e33f4-manage-webhook-481e5f46c2b0702225110fcdf91f1109.PNG"},19002:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/a1acade-create-webhook-8ff3054a695c9ca5d80a8592ab984dd9.PNG"},44944:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/d2e680e-webhooks-5fa30260631bea6dea4dc0266565482c.png"},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var s=n(67294);let l={},i=s.createContext(l);function o(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);