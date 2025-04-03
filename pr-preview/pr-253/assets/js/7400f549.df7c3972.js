"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["55872"],{95352:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>a,assets:()=>c,toc:()=>l,contentTitle:()=>r});var a=JSON.parse('{"id":"client-analytics/datazoom","title":"Datazoom","description":"Datazoom enables the capture of streaming quality analytics, measurement of user engagement, tracking of content consumption, and understanding Quality of Experience (QoE) metrics that occur during playback.","source":"@site/millicast/client-analytics/datazoom.md","sourceDirName":"client-analytics","slug":"/datazoom","permalink":"/documentation/pr-preview/pr-253/millicast/datazoom","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/client-analytics/datazoom.md","tags":[],"version":"current","frontMatter":{"title":"Datazoom","slug":"/datazoom"},"sidebar":"millicast","previous":{"title":"Datadog","permalink":"/documentation/pr-preview/pr-253/millicast/datadog"},"next":{"title":"Teradek","permalink":"/documentation/pr-preview/pr-253/millicast/broadcasting-teradek-vidiu"}}'),i=t("85893"),s=t("50065");let o={title:"Datazoom",slug:"/datazoom"},r=void 0,c={},l=[{value:"Client Analytics",id:"client-analytics",level:2},{value:"Setting Up Datazoom with the Web SDK",id:"setting-up-datazoom-with-the-web-sdk",level:2},{value:"1. Include Datazoom Beacon",id:"1-include-datazoom-beacon",level:3},{value:"2. Track Player Engagement",id:"2-track-player-engagement",level:3},{value:"3. Collect Custom WebRTC Stats",id:"3-collect-custom-webrtc-stats",level:3},{value:"4. Monitor with a Datazoom Connector",id:"4-monitor-with-a-datazoom-connector",level:3},{value:"Splunk",id:"splunk",level:4},{value:"Datadog",id:"datadog",level:4},{value:"Sample",id:"sample",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Datazoom"})," enables the capture of streaming quality analytics, measurement of user engagement, tracking of content consumption, and understanding ",(0,i.jsx)(n.strong,{children:"Quality of Experience (QoE)"})," metrics that occur during playback."]}),"\n",(0,i.jsxs)(n.p,{children:["This page guides you on some of the metrics that are collected and steps to integrate the ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/millicast/web",children:"Millicast SDK"})," as a collector and connect to observability tools such as Splunk, Datadog, New Relic, Amazon Kinesis Firehose, etc."]}),"\n",(0,i.jsx)(n.h2,{id:"client-analytics",children:"Client Analytics"}),"\n",(0,i.jsxs)(n.p,{children:["To monitor the health of your application, ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/millicast/client-analytics-and-monitoring",children:"client analytics"})," for monitoring and troubleshooting are critical. You can choose among many observability tools for creating a dashboard with collected data such as:"]}),"\n",(0,i.jsxs)("ul",{class:"checkBoxList",children:[(0,i.jsx)("li",{children:"Playback engagement metrics like startup time, playback rate, pause events, and durations"}),(0,i.jsx)("li",{children:"Device analytics such as user agent, browser, operating system, device size, versions"}),(0,i.jsx)("li",{children:"Geolocation details including country, city, IP address, and network details"}),(0,i.jsx)("li",{children:"WebRTC statistics like fps, round trip time, jitter, packet and frame loss rates, and bitrate"})]}),"\n",(0,i.jsxs)(n.p,{children:["When combined with our ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/millicast/live-monitoring",children:"Live Monitoring"})," and ",(0,i.jsx)(n.a,{href:"/millicast/syndication",children:"Stream Syndication"})," capabilities you can effectively monitor playback issues and track viewer characteristics."]}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-datazoom-with-the-web-sdk",children:"Setting Up Datazoom with the Web SDK"}),"\n",(0,i.jsxs)(n.p,{children:["This section outlines the steps required to initialize client-side data collection with the Millicast ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/millicast/web",children:"Web SDK"}),". There are also ",(0,i.jsx)(n.a,{href:"https://help.datazoom.io/hc/en-us/sections/360000455512-Collectors",children:"collectors"})," available that will work similarly with Android and iOS."]}),"\n",(0,i.jsx)(n.h3,{id:"1-include-datazoom-beacon",children:"1. Include Datazoom Beacon"}),"\n",(0,i.jsx)(n.p,{children:"Include the Datazoom library with your configuration id:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script src="https://platform.datazoom.io/beacon/v1/config?configuration_id=4a1ef...7a"><\/script>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2-track-player-engagement",children:"2. Track Player Engagement"}),"\n",(0,i.jsx)(n.p,{children:"Attaching a context on the player will gather user engagement details like when the stream is paused and how long it took from play to start displaying video."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"millicastView.on('track', (event) => {\n  // ...\n  window.datazoom.createContext(videoElement);\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-collect-custom-webrtc-stats",children:"3. Collect Custom WebRTC Stats"}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/documentation/pr-preview/pr-253/millicast/client-analytics-and-monitoring",children:"Client Analytics"})," guide to learn more about what media statistics and metrics are captured for the WebRTC connection."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"millicastView.webRTCPeer.on('stats', (stats) => {\n  window.datazoom.setMetadata({ webRTCStats: stats });\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will collect statistics every second. To reduce frequency of collection, you can keep a counter and reduce the number of calls to ",(0,i.jsx)(n.code,{children:"window.datazoom.setMetadata"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// Only store metrics every 60 seconds\nconst statCollectionInterval = 60;\n\nlet statsTicker = 0;\nmillicastView.webRTCPeer.on('stats', (stats) => {\n  if (statsTicker >= statCollectionInterval) {\n    window.datazoom.setMetadata({ webRTCStats: stats });\n    statsTicker = 0;\n  } else {\n    statsTicker++;\n  }\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"4-monitor-with-a-datazoom-connector",children:"4. Monitor with a Datazoom Connector"}),"\n",(0,i.jsx)(n.p,{children:"Datazoom provides connectors on their platform that can be used to aggregate client metrics in your observability and monitoring tools."}),"\n",(0,i.jsx)(n.h4,{id:"splunk",children:"Splunk"}),"\n",(0,i.jsx)(n.p,{children:"Here is a preview of what a dashboard might look like in Splunk:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(23298).Z+"",width:"2614",height:"1560"})}),"\n",(0,i.jsx)(n.h4,{id:"datadog",children:"Datadog"}),"\n",(0,i.jsx)(n.p,{children:"Here is a preview of what a dashboard might look like in Datadog:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(95895).Z+"",width:"3290",height:"2642"})}),"\n",(0,i.jsx)(n.h2,{id:"sample",children:"Sample"}),"\n",(0,i.jsx)(n.p,{children:"Here is an example payload from the Datazoom connector:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "event": {\n      "metrics": {\n        "engagement_duration_ms": 11653618,\n        "num_ad_plays": 0,\n        "num_content_plays": 23,\n        "num_errors": 0,\n        "num_errors_ads": 0,\n        "num_errors_content": 0,\n        "num_requests_content": 23,\n        "bandwidth_kbps": 4200,\n        "buffer_duration_ms": 0,\n        "buffer_duration_ads_ms": 0,\n        "buffer_duration_content_ms": 0,\n        "buffer_length_ms": 0,\n        "content_session_start_ts_ms": 1712167309643,\n        "pause_duration_ms": 0,\n        "pause_duration_ads_ms": 0,\n        "pause_duration_content_ms": 0,\n        "playback_duration_ms": 2640,\n        "playback_duration_ads_ms": 0,\n        "playback_duration_content_ms": 2640,\n        "playback_rate": 1,\n        "player_state": "playing",\n        "player_viewable": true,\n        "player_viewable_percent": 100,\n        "playhead_position_sec": 2.686,\n        "rendition_height": 1080,\n        "rendition_name": "1080p",\n        "rendition_width": 1920,\n        "stall_count": 0,\n        "stall_count_ads": 0,\n        "stall_count_content": 0,\n        "stall_duration_ms": 0,\n        "stall_duration_ads_ms": 0,\n        "stall_duration_content_ms": 0,\n        "time_since_last_ad_break_start_ms": 0,\n        "time_since_last_ad_completed_ms": 0,\n        "time_since_last_buffer_start_ms": 2640,\n        "time_since_last_buffer_start_ad_ms": 0,\n        "time_since_last_buffer_start_content_ms": 2640,\n        "time_since_last_heartbeat_ms": 0,\n        "time_since_last_milestone_ad_ms": 0,\n        "time_since_last_milestone_content_ms": 0,\n        "time_since_last_pause_ms": 0,\n        "time_since_last_rendition_change_ms": 600,\n        "time_since_last_request_ad_ms": 0,\n        "time_since_last_seek_start_ms": 0,\n        "time_since_last_stall_start_ms": 0,\n        "time_since_last_stall_start_ad_ms": 0,\n        "time_since_last_stall_start_content_ms": 0,\n        "time_since_last_started_ad_ms": 0,\n        "time_since_request_content_ms": 2641,\n        "time_since_started_content_ms": 2640,\n        "volume_level_percent": 100,\n        "event_count": 591\n      },\n      "attributes": {\n        "abs_shift": "up"\n      },\n      "type": "rendition_change",\n      "timestamp": 1712167312284\n    },\n    "configuration_id": "4a3...a",\n    "connector_list": "dz-connector-splunk,dz-connector-kinesis-firehose,dz-connector-datadog",\n    "customer_code": "486...f",\n    "user_details": {\n      "app_session_id": "a9c...2",\n      "app_session_start_ts_ms": 1712155658666,\n      "client_ip": "128.n.n.0",\n      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",\n      "content_session_id": "c12...2"\n    },\n    "player": {\n      "player_name": "HTML5 Native Player",\n      "autostart": true,\n      "default_muted": true,\n      "default_playback_rate": 1,\n      "fullscreen": false,\n      "loop": false,\n      "muted": true,\n      "preload": "none",\n      "ready_state": 4,\n      "streaming_protocol": ""\n    },\n    "device": {\n      "browser_name": "Chrome",\n      "browser_height": 1334,\n      "browser_version": "123.0.0.0",\n      "browser_width": 1904,\n      "cookies_enabled": true,\n      "device_id": "bc6...3",\n      "device_type": "pc",\n      "os_name": "Mac OS X",\n      "os_version": "10.15.7"\n    },\n    "geo_location": {\n      "city": "London",\n      "country": "United Kingdom",\n      "country_code": "GB",\n      "latitude": 51.5074,\n      "longitude": -0.1196,\n      "postal_code": "EC1N",\n      "region": "England",\n      "region_code": "ENG",\n      "continent": "Europe",\n      "continent_code": "EU",\n      "district": "",\n      "timezone_name": "Europe/London",\n      "timezone_offset": 1\n    },\n    "ops_metadata": {\n      "server_ts_offset_ms": 208,\n      "player_context_id": "360...2",\n      "collector_observability": [\n        {\n          "time": 1712167311684,\n          "metric_name": "process_duration_ms",\n          "dimension": {\n            "target": "log",\n            "attempt_count": 1,\n            "status_code": 200\n          },\n          "metric_value": 171\n        },\n        {\n          "time": 1712167311684,\n          "metric_name": "queue_duration_ms",\n          "dimension": {\n            "target": "log"\n          },\n          "metric_value": 56\n        },\n        {\n          "time": 1712167311740,\n          "metric_name": "send_duration_ms",\n          "dimension": {\n            "target": "log",\n            "attempt_count": 1,\n            "status_code": 200\n          },\n          "metric_value": 115\n        },\n        {\n          "time": 1712167311740,\n          "metric_name": "call_duration_ms",\n          "dimension": {\n            "target": "log",\n            "attempt": 1,\n            "status_code": 200\n          },\n          "metric_value": 115\n        }\n      ]\n    },\n    "ad": {\n      "ad_blocker": false\n    },\n    "video": {\n      "media_type": "content",\n      "player_height": 360,\n      "player_width": 640,\n      "source": ""\n    },\n    "custom": {\n      "webRTCStats": {\n        "audio": {\n          "inbounds": [\n            {\n              "mimeType": "audio/opus",\n              "timestamp": 1712167311343.687,\n              "totalBytesReceived": 23460,\n              "totalPacketsReceived": 94,\n              "totalPacketsLost": 0,\n              "jitter": 0.004,\n              "id": "IT0...2",\n              "mid": "1",\n              "trackIdentifier": "ad9...a",\n              "bitrate": 100952,\n              "packetsLostRatioPerSecond": 0,\n              "packetsLostDeltaPerSecond": 0\n            }\n          ],\n          "outbounds": []\n        },\n        "video": {\n          "inbounds": [\n            {\n              "mimeType": "video/H264",\n              "framesPerSecond": 20,\n              "frameHeight": 540,\n              "frameWidth": 960,\n              "timestamp": 1712167311343.687,\n              "totalBytesReceived": 256532,\n              "totalPacketsReceived": 1057,\n              "totalPacketsLost": 0,\n              "jitter": 0.003,\n              "id": "IT0...8",\n              "mid": "0",\n              "trackIdentifier": "dd8...4",\n              "bitrate": 1244344,\n              "packetsLostRatioPerSecond": 0,\n              "packetsLostDeltaPerSecond": 0\n            }\n          ],\n          "outbounds": []\n        },\n        "raw": {},\n        "totalRoundTripTime": 0.031,\n        "currentRoundTripTime": 0.005,\n        "availableOutgoingBitrate": 300000,\n        "candidateType": "prflx"\n      }\n    },\n    "event_id": "a9c...0"\n  }\n]\n'})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},95895:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/datazoom-and-datadog-27a6b9274261f834af0550933ef18661.png"},23298:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/images/datazoom-splunk-dashboard-04ddbc7ea3f5caaab837d78c265258b5.png"},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var a=t(67294);let i={},s=a.createContext(i);function o(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);