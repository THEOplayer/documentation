"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["8708"],{8831:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>a,assets:()=>l,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"analytics/index","title":"Analytics APIs","description":"The Analytics APIs allow you to query your usage independent of the Dolby.io dashboard and get details of how your users are consuming your streams.","source":"@site/millicast/analytics/index.md","sourceDirName":"analytics","slug":"/analytics-api","permalink":"/documentation/pr-preview/pr-254/millicast/analytics-api","draft":false,"unlisted":false,"editUrl":"https://github.com/THEOplayer/documentation/blob/-/millicast/analytics/index.md","tags":[],"version":"current","frontMatter":{"title":"Analytics APIs","slug":"/analytics-api"},"sidebar":"millicast","previous":{"title":"Token API","permalink":"/documentation/pr-preview/pr-254/millicast/token-api"},"next":{"title":"Media Stats","permalink":"/documentation/pr-preview/pr-254/millicast/media-stats"}}'),s=n("85893"),o=n("50065");let r={title:"Analytics APIs",slug:"/analytics-api"},i=void 0,l={},c=[{value:"Access restrictions",id:"access-restrictions",level:2},{value:"Basic call structure",id:"basic-call-structure",level:2},{value:"Example tutorial: JS / Nodejs",id:"example-tutorial-js--nodejs",level:2},{value:"Bandwidth per stream",id:"bandwidth-per-stream",level:2},{value:"Viewers per stream",id:"viewers-per-stream",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"No Results Returned for Stream",id:"no-results-returned-for-stream",level:3},{value:"Special Characters in Stream Names",id:"special-characters-in-stream-names",level:4}];function d(e){let t={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The Analytics APIs allow you to query your usage independent of the Dolby.io dashboard and get details of how your users are consuming your streams."}),"\n",(0,s.jsxs)(t.p,{children:["To access the analytics APIs you must have an API token. To learn more on how to get your API token, please read the following article ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/token-api",children:"Acquiring Your API Token"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Another thing to note is that analytics API calls will not work directly from the Browser, there is no CORS support. To successfully call the API you must use Curl or a back end solution like Nodejs, Java, or anything outside the browser that can do HTTPS requests."}),"\n",(0,s.jsxs)(t.p,{children:["All requests made to the analytics APIs require that you provide a ",(0,s.jsx)(t.strong,{children:"start"})," and ",(0,s.jsx)(t.strong,{children:"stop"}),' date range. The date must be structured in a UTC format containing the year, month, day and hour (eg 2020-01-01T00:00:00Z). These series based requests require you to set an analytics formatting resolution value of "Month", "Day" or "Hour", the resulting data will follow the specified format accordingly. The time part of your date string is optional and used only if you\'re querying the API for hourly information.']}),"\n",(0,s.jsx)(t.h2,{id:"access-restrictions",children:"Access restrictions"}),"\n",(0,s.jsxs)(t.p,{children:["There are few restrictions to note regarding the Analytics APIs. Currently the stats are updated every 15 minutes of the hour (ex: XX:00, XX:15, XX:30, XX:45). Also, analytics providing a daily breakdown of your usage (Day) are stored for a window of ",(0,s.jsx)(t.strong,{children:"90 days"}),", and the hourly data (Hour) is stored for a window of ",(0,s.jsx)(t.strong,{children:"7 days"}),". This means you can query your data using the ",(0,s.jsx)(t.strong,{children:"Day"})," format for a maximum timeframe of the last 90 days. ",(0,s.jsx)(t.strong,{children:"Hourly"})," data is available to be queried for a maximum timeframe of last 7 days from the current day of your query. After the respective timeframes, this detailed data is purged from our system and you will then only have access to summarized monthly data."]}),"\n",(0,s.jsx)(t.p,{children:"A breakdown of per-stream data is also only available within a 7 day window. This includes geographic data as well as detailed bandwidth usage information per stream. If this detailed usage data is valuable to you, it is advised that you regularly download this data before it expires and is no longer available for querying."}),"\n",(0,s.jsxs)(t.p,{children:["To query for a particular month\u2019s data, the API requires the date range to be from ",(0,s.jsx)(t.strong,{children:"day 1"})," of the month in question to ",(0,s.jsx)(t.strong,{children:"day 1"})," of the next month. An example of the query would look like this: startDate=2021-",(0,s.jsx)(t.strong,{children:"01-01"}),"&stopDate=2021-",(0,s.jsx)(t.strong,{children:"02-01"}),"&resolution=",(0,s.jsx)(t.strong,{children:"Month"}),". This query would return the total bandwidth usage for the month of January 2021."]}),"\n",(0,s.jsx)(t.p,{children:"It is advised that you save your Daily and Hourly data if you feel that you would need it beyond the 90 and 7 day retention provided by Dolby.io Real-time Streaming."}),"\n",(0,s.jsx)(t.p,{children:"Wildcards"}),"\n",(0,s.jsx)(t.p,{children:"The Dolby.io Real-time Streaming publisher token provides a Wildcard option which allows you to use an arbitrary stream name on-the-fly, rather than specifying the stream name in advance. This is beneficial if you are dynamically generating streams and are not sure how many streams you will need to generate or which names you will need to use. Because queries for stream analytics require a stream name, it is important for you to keep track of which stream names are being used if you would later like to query the analytics data for these individual streams."}),"\n",(0,s.jsx)(t.h2,{id:"basic-call-structure",children:"Basic call structure"}),"\n",(0,s.jsxs)(t.p,{children:["In this example we want to query the API to get usage information for our entire account. There are 3 main calls you can do to get this information, Account Total, Account Series and Account Geo. Each one respectively has its own format and function, however, each call at the minimum requires a ",(0,s.jsx)(t.strong,{children:"start"})," and a ",(0,s.jsx)(t.strong,{children:"stop"})," date."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Account Total"})," will give you the total bandwidth usage in bytes for your overall account based on a specified date range. ",(0,s.jsx)(t.strong,{children:"Account Geo"})," will do the same but will provide the totals based on the geographic region of the viewers. Similar to Geo, the ",(0,s.jsx)(t.strong,{children:"Account Series"}),' will also breakdown the totals based on your specified resolution. For example if you chose "monthly" as your resolution format, the data would be broken down by month and so on. You can save this data into your own database for your own querying later, or you can plug this data into data visualizers like Google Charts to visually display the results of your usage.']}),"\n",(0,s.jsx)(t.h2,{id:"example-tutorial-js--nodejs",children:"Example tutorial: JS / Nodejs"}),"\n",(0,s.jsxs)(t.p,{children:["In the following example, we will use the Analytics APIs to query a Dolby.io Real-time Streaming account for a date range of usage and display it in a graph using Google Charts (see: ",(0,s.jsx)(t.a,{href:"https://developers.google.com/chart/interactive/docs/gallery/areachart",children:"https://developers.google.com/chart/interactive/docs/gallery/areachart"}),")"]}),"\n",(0,s.jsx)(t.p,{children:"Before proceeding we assume you are familiar with Nodejs and have some familiarity with Google Charts. For this example we used a Nodejs server version 12.19 (the latest stable version as of February 2021)."}),"\n",(0,s.jsx)(t.p,{children:"As with all API calls to our platform you must have your API token ready, you can find this in your Dolby.io dashboard."}),"\n",(0,s.jsx)(t.p,{children:"Let's start by creating a new Nodejs project:"}),"\n",(0,s.jsx)(t.p,{children:"npm init"}),"\n",(0,s.jsx)(t.p,{children:"Create an app.js file that will run the code for the API calls. Then add the following code snippet to your app.js file."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const express = require('express');\nconst https = require('https');\nconst fs = require('fs');\n\nconst port = 8443;\nconst startUTC = '2020-08-01'; // UTC year-month-day\nconst stopUTC = '2021-01-01';\nconst token = '__TOKEN__';\n\n// Dolby.io Real-time Streaming request details\nconst options = {\n  hostname: 'api.millicast.com',\n  path: '/api/analytics/account/series?startDate=' + startUTC + '&stopDate=' + stopUTC + '&resolution=Month',\n  method: 'GET',\n  headers: {\n    Authorization: 'Bearer ' + token,\n    'Content-Type': 'application/json',\n  },\n};\nconsole.log('options: ', options);\n\nconst app = express();\n\n// app.use(bodyParser.json());\napp.use((req, resp, next) => {\n  resp.setHeader('Access-Control-Allow-Origin', '*');\n  next();\n});\n\napp.get('/usage', (req, resp, next) => {\n  console.log('app.get ', arguments.length);\n  // Call api\n  let apiReq = https\n    .request(options, (res) => {\n      console.log('result:', res.statusCode);\n      let body = '';\n      res.on('data', (d) => {\n        body = body + d;\n      });\n      res.on('end', () => {\n        let s = JSON.parse(body);\n        console.log('END:', s);\n        resp.send(body);\n      });\n    })\n    .on('error', (e) => {\n      console.log('ERROR', e);\n      resp.satus(404).json(e);\n    });\n  apiReq.end();\n});\n\nhttps.createServer({ key: fs.readFileSync('ssl/key.pem'), cert: fs.readFileSync('ssl/cert.pem') }, app).listen(port);\n\nconsole.log('running! see port https://localhost:' + port + '/usage');\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In this example we use the standard Express module along with the built in HTTPS module to handle secure requests coming from the client HTML side and for calls going out to the Dolby.io Real-time Streaming from the server. This example uses openssl self-signed certificates to satisfy the key and conf requirement in the HTTPS module on Nodejs. We are testing locally so we run a simple local web server from the Visual Studio Code editor to do the calls over HTTPS locally (",(0,s.jsx)(t.a,{href:"https://localhost:8443/",children:"https://localhost:8443/"}),"). In this case, you would only need to bypass the browser warning that comes up to access your HTML file."]}),"\n",(0,s.jsxs)(t.p,{children:["The express ",(0,s.jsx)(t.strong,{children:'"get"'}),' method handles the request call to the API when the HTML user makes calls via the "/usage" path specified in the method. The path here is an arbitrary label, feel free to use whatever path name you prefer, just remember the call on the HTML counterpart has to match the path.']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"app.get('/usage', (req, resp, next) => {\n  console.log('app.get ', arguments.length);\n  // Call api\n  let apiReq = https\n    .request(options, (res) => {\n      console.log('result:', res.statusCode);\n      let body = '';\n      res.on('data', (d) => {\n        body = body + d;\n      });\n      res.on('end', () => {\n        let s = JSON.parse(body);\n        console.log('END:', s);\n        resp.send(body);\n      });\n    })\n    .on('error', (e) => {\n      console.log('ERROR', e);\n      resp.satus(404).json(e);\n    });\n  apiReq.end();\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"GET"})," call will run a HTTPS request to query the API for the account usage using the ",(0,s.jsx)(t.strong,{children:'"account/series"'})," call (see: ",(0,s.jsx)(t.a,{href:"/millicast/api/analytics-account-series",children:"Analytics AccountSeries API"}),". It is required that you add a date range which you can adjust yourself using the ",(0,s.jsx)(t.strong,{children:'"startUTC"'})," and ",(0,s.jsx)(t.strong,{children:'"stopUTC"'})," variables at the top of this example. Remember, the time value you use needs to be set in a UTC format, the data that is returned will also be in UTC time format so please take note of this."]}),"\n",(0,s.jsxs)(t.p,{children:["If you wanted to do a quick test without the client counterpart you can run your node server (node app.js) and your webserver, then browse to ",(0,s.jsxs)(t.strong,{children:['"',(0,s.jsx)(t.a,{href:"https://localhost:8443/usage",children:"https://localhost:8443/usage"}),'"']})," (again, bypass the security message if you are using a self-signed cert) to see the results."]}),"\n",(0,s.jsxs)(t.p,{children:["Next, we can create our client html code that will do the actual call to our nodejs server using Javascript and the built in ",(0,s.jsx)(t.strong,{children:'"fetch"'})," call."]}),"\n",(0,s.jsx)(t.p,{children:"First open your editor and create a blank html file, save it as index.html. In your editor add the following bit of code into your index.html file."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"\n<html lang=\"en\">\n<head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Document</title>\n        <script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"><\/script>\n</head>\n<body>\n        <button id=\"fetchButton\">Get Account Usage</button>\n        <div id=\"chart_div\" style={{width: \"100%\", height: \"500px\"}}></div>\n        <script type=\"text/javascript\">\n\n                const btn = document.getElementById('fetchButton');\n\n                var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];\n                var bwData = {};\n\n                btn.addEventListener('click', e => {\n                        const url = **'https://localhost:8443/usage'**;\n                        console.log('fetching data:',url);\n                        **fetch**(url)\n                                .then( resp =>{\n                                        return resp.json();\n                                }).then( o => {\n                                        bwData = o.data.bandwidth;\n                                        google.charts.load('current', {'packages':['corechart']});\n                                        google.charts.setOnLoadCallback(drawBandwidthChart);\n                                }).catch( e => {\n                                        console.log('error: ',e);\n                                });\n                })\n\n                function drawBandwidthChart(){\n                        console.log('bw',bwData);\n                        // table headers\n                        let o = [ ['Month', 'bytesIn', 'bytesOut'] ];\n                        let n = 1;//shift array position to next slot\n                        for(let i in bwData){\n                                let mth = new Date(i).**getUTCMonth();\n                                let bw = bwData[i];\n                                o[n++] = [months[mth], bw.bytesIn, bw.bytesOut];\n                        }\n                        console.log('sorted table:',o);\n                        let data = google.visualization.arrayToDataTable(o);\n\n                        let opt = {\n                                title: 'Dolby.io Real-time Streaming Usage',\n                                hAxis: {title: 'Month', titleTextStyle: {color: '#333'}},\n                                vAxis: {minValue: 0}\n                        };\n\n                        let chart = new google.visualization.AreaChart(document.getElementById('chart_div'));\n                        chart.draw(data, opt);\n                }\n\n        <\/script>\n</body>\n</html>\n"})}),"\n",(0,s.jsx)(t.p,{children:"On the client end, there is only a simple button to fetch the data using the dates specified on the server. You can design the user application as advanced as you want, however, for the sake of simplicity we are just doing a simple request here to show its function."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(52789).Z+"",width:"460",height:"240"})}),"\n",(0,s.jsxs)(t.p,{children:["A simple click on the button will call our Nodejs server counterpart using the ",(0,s.jsx)(t.strong,{children:'"fetch"'})," command. Once the data from the API is received on the client JavaScript, we convert the data back into JSON and then sort it in a table that Google Charts can understand and display."]}),"\n",(0,s.jsx)(t.p,{children:'Remember the data is in UTC format which a simple Date object can accept, however, calling "getMonth" from the date object will result in a date that is based on your local time, in the case above we\u2019ve kept it UTC time so that there is no confusion.'}),"\n",(0,s.jsx)(t.p,{children:"Once the data is sorted and the chart is created, you can push the table data to the Google Chart to display it visually."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(52116).Z+"",width:"1043",height:"535"})}),"\n",(0,s.jsx)(t.p,{children:"You can add the other API calls in the Nodejs side to load more information about your usage. You could also provide a HTML form to allow the user to specify query dates to send up to Nodejs, just remember to format the date information to UTC before you query it."}),"\n",(0,s.jsxs)(t.p,{children:["See more API calls here: ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/api/analytics-account-total",children:"Account Analytics"})]}),"\n",(0,s.jsx)(t.h2,{id:"bandwidth-per-stream",children:"Bandwidth per stream"}),"\n",(0,s.jsxs)(t.p,{children:["The Analytics API allows you to not only get the bandwidth you need from your account itself but also from each individual stream. These calls follow the same rules as the call structure explained above (",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/analytics-api#basic-call-structure",children:"Basic Call Structure"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:['There is one slight difference we have to be aware of. For the fact that we are requesting data for a stream, in the query it is necessary to include the stream names along with the start and stop times. The use of multiple stream names is also supported. In order to use this feature you simply add each stream to a "streamNames" variable in the query, as an example your query stream might look like this:',(0,s.jsx)(t.br,{}),"\n","startDate=2020-01-01&stopDate=2020-04-01&",(0,s.jsx)(t.strong,{children:"streamNames"}),"=mystream&",(0,s.jsx)(t.strong,{children:"streamNames"}),"=otherstream",(0,s.jsx)(t.br,{}),"\n","You can add up to 10 stream names at a time."]}),"\n",(0,s.jsx)(t.p,{children:"To begin, below is the new modified app.js code from the example above, that supports a request for the stream data. The calls are modified to accept incoming data from the client side, making our data gathering more dynamic."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const express = require('express'); const https = require('https');\nconst fs = require('fs');\n\nconst port = 8443;\nconst token = '__TOKEN__';\nconst app = express();\n\napp.use(express.urlencoded({extended: false}));\napp.use( (req, resp, next) => {\n        resp.setHeader('Access-Control-Allow-Origin', '*');\n        next();\n});\n\napp.get( '/usage', (req, resp, next) => {\n        console.log('/usage - time start:',req.query.start,' stop:',req.query.stop);\n        let start = req.query.start;\n        let stop = req.query.stop;// Must be max 90 day UTC window form today for monthly or 7 days for daily/hourly.\n        let o = {\n                hostname: 'api.millicast.com',\n                path: '/api/analytics/account/series?startDate='+start+'&stopDate='+stop+'&resolution=Month',\n                method: 'GET',\n                headers: {\n                        'Authorization': 'Bearer ' + token,\n                        'Content-Type': 'application/json'\n                }\n        }\n        // Call api\n        let apiReq = https.request(o, res => {\n                console.log('result:',res.statusCode);\n                let body = '';\n                res.on('data', d => {\n                        body = body + d;\n                })\n                res.on('end', () => {\n                        let s = JSON.parse(body);\n                        resp.send(body);\n                })\n        })\n        .on('error', e => {\n                console.log('ERROR',e);\n                resp.satus(404).json(e);\n        });\n        apiReq.end();\n});\n\napp.**get( '/streamusage'**, (req, resp, next) => {\n        console.log('/streamusage - streamName:',req.query.streamNames,'time start:',req.query.start,' stop:',req.query.stop);\n        // Millicast API request details\n        let **streamNames** = req.query.streamNames;\n        let start = dreq.query.start;\n        let stop = req.query.stop;// Must be max 90 day UTC window form today for monthly or 7 days for the daily/hourly data.\n        let o = {\n                hostname: 'api.millicast.com',\n                path: '/api/analytics/streams/series?startDate='+start+'&stopDate='+stop+'&streamNames='+streamNames+'&resolution=Day',\n                method: 'GET',\n                headers: {\n                        'Authorization': 'Bearer '+token,\n                        'Content-Type': 'application/json'\n                }\n        }\n        console.log('app.get ',o);\n        // Call api\n        let apiReq = https.request( o, res => {\n                console.log('result:',res.statusCode);\n        let body = '';\n                res.on('data', d => {\n                        body = body + d;\n                })\n                res.on('end', () => {\n                        let s = JSON.parse(body);\n                        console.log('END:',s);\n                        resp.send(body);\n                })\n        })\n        .on('error', e => {\n                console.log('ERROR',e);\n                resp.satus(404).json(e);\n        });\n        apiReq.end();\n});\n\nhttps.createServer(\n        {key: fs.readFileSync('ssl/key.pem'),\n                cert: fs.readFileSync('ssl/cert.pem')},\n        app )\n.listen(port);\n\nconsole.log('running! see port https://localhost:'+port+'/');\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We\u2019ve changed the original ",(0,s.jsx)(t.strong,{children:'"/usage"'})," call to get its start and stop time from the request (req) argument instead of a global variable. With that, we moved the call options object into the method ",(0,s.jsx)(t.strong,{children:"get '/usage'"})," itself in order to update every time new dates are sent by the client."]}),"\n",(0,s.jsxs)(t.p,{children:["The new method, labeled ",(0,s.jsx)(t.strong,{children:"'/streamusage'"}),' is what securely handles the call to the API for our client code, which is also updated. The call basically mirrors the original one above it, however we use a "streamNames" variable to handle the requirement needed for querying streams. You can definitely join these into 1 method but for the example we\'ll keep them separated, feel free to modify as needed.']}),"\n",(0,s.jsx)(t.p,{children:"Notice, in the method, where we receive the start, stop and streamName strings, these variables are to be sent by our client code so they must match."}),"\n",(0,s.jsx)(t.p,{children:"Below is a sample of the new client index.html code."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"\n<html lang=\"en\">\n<head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Document</title>\n        <script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"><\/script>\n        <style>\n                #forms {\n                        display: flex;\n                }\n                .m-r-20 {\n                        margin-right: 20px;\n                }\n        </style>\n</head>\n<body>\n        <div id=\"forms\">\n                <div class=\"m-r-20\">\n                        <h3>Stream </h3>\n                        <div>\n                                <p>Stream Name/s:</p>\n                                <input id=\"strmNameTxt\" type=\"text\" value=\"myfeed1\">\n                        </div>\n                        <div>\n                                <p>Start UTC:</p>\n                                <input id=\"startTxt\" type=\"text\" value=\"2021-02-01\">\n                        </div>\n                        <div>\n                                <p>Stop UTC:</p>\n                                <input id=\"stopTxt\" type=\"text\" value=\"2021-02-13\">\n                        </div>\n                        <br/>\n                        <button id=\"strmButton\">Get Stream Usage</button>\n                </div>\n                <div>\n                        <h3>Account </h3>\n                        <div>\n                                <p>Start UTC:</p>\n                                <input id=\"accStartTxt\" type=\"text\" value=\"2020-10-01\">\n                        </div>\n                        <div>\n                                <p>Stop UTC:</p>\n                                <input id=\"accStopTxt\" type=\"text\" value=\"2021-02-13\">\n                        </div>\n                        <br/>\n                        <button id=\"acctButton\">Get Account Usage</button>\n                </div>\n        </div>\n        <hr/>\n\n        <div id=\"chart_div\" style={{width: \"100%\", height: \"500px\"}}></div>\n\n        <script type=\"text/javascript\">\n\n                const btnAccnt = document.getElementById('acctButton');\n                const btnStrm = document.getElementById('strmButton');\n                const txtStart = document.getElementById('startTxt');\n                const txtStop = document.getElementById('stopTxt');\n                const txtStrmName = document.getElementById('strmNameTxt');\n\n                var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];\n                var acctBWData = {};\n                var strmBWData = {};\n                var selStreamName = '';\n\n                btnAccnt.addEventListener('click', e => {\n                        let startDt = accStartTxt.value;\n                        let stopDt = accStopTxt.value;\n                        const url = 'https://localhost:8443/usage?start='+startDt+'&stop='+stopDt;\n                        console.log('fetching data:',url);\n                        fetch(url)\n                                .then( resp =>{\n                                        return resp.json();\n                                }).then( o => {\n                                        acctBWData = o.data.bandwidth;\n                                        google.charts.load('current', {'packages':['corechart']});\n                                        google.charts.setOnLoadCallback(drawAcctBWChart);\n                                }).catch( e => {\n                                        console.log('error: ',e);\n                                });\n                })\n\n                btnStrm.addEventListener('click', e => {\n                        // Get user input data\n                        selStreamName = txtStrmName.value;\n                        let startDt = txtStart.value;\n                        let stopDt = txtStop.value;\n                        const url = 'https://localhost:8443/streamusage?streamNames='+selStreamName+'&start='+startDt+'&stop='+stopDt;\n                        console.log('fetching data at:',url);\n                        fetch(url)\n                                .then( resp =>{\n                                        return resp.json();\n                                }).then( o => {\n                                        console.log('o ',o);\n                                        let d = o.data[selStreamName];\n                                        strmBWData = !!d ? d.bandwidth : {};\n                                        google.charts.load('current', {'packages':['corechart']});\n                                        google.charts.setOnLoadCallback(drawStrmBWChart);\n                                }).catch( e => {\n                                        console.log('error: ',e);\n                                });\n                })\n\n                function drawAcctBWChart(){\n                        console.log('drawAcctBWChart',acctBWData);\n                        // Table headers\n                        let o = [ ['Month', 'bytesIn', 'bytesOut'] ];\n                        let n = 1;//shift array position to next slot\n                        for(let i in acctBWData){\n                                let mth = new Date(i).getUTCMonth();\n                                let bw = acctBWData[i];\n                                o[n++] = [months[mth], bw.bytesIn, bw.bytesOut];\n                        }\n                        console.log('sorted table:',o);\n                        let data = google.visualization.arrayToDataTable(o);\n\n                        let opt = {\n                                title: 'Millicast Account Usage',\n                                hAxis: {title: 'Month', titleTextStyle: {color: '#333'}},\n                                vAxis: {minValue: 0}\n                        };\n\n                        let chart = new google.visualization.AreaChart(document.getElementById('chart_div'));\n                        chart.draw(data, opt);\n                }\n\n                function **drawStrmBWChart(){\n                        console.log('drawStrmBWChart',strmBWData);\n                        // Table headers\n                        let o = [ ['Day', 'bytesIn', 'bytesOut'] ];\n                        let n = 1;//shift array position to next slot\n                        for(let i in strmBWData){\n                                let mth = new Date(i).getUTCMonth();\n                                let dy = new Date(i).getUTCDate();\n                                let bw = strmBWData[i];\n                                o[n++] = [(mth+1)+'/'+dy, bw.bytesIn, bw.bytesOut];\n                        }\n                        console.log('sorted table:',o);\n                        let data = google.visualization.arrayToDataTable(o);\n\n                        let opt = {\n                                title: 'Millicast '+selStreamName+' Usage',\n                                hAxis: {title: 'Days', titleTextStyle: {color: '#333'}},\n                                vAxis: {minValue: 0}\n                        };\n\n                        let chart = new google.visualization.AreaChart(document.getElementById('chart_div'));\n                        chart.draw(data, opt);\n                }\n\n        <\/script>\n</body>\n</html>\n"})}),"\n",(0,s.jsx)(t.p,{children:"The new index.html file has been modified to be more dynamic and add more interactivity than the original one. In this example, we\u2019ve added some rudimentary forms for each call to send the dates and stream names to the server. Remember to write your dates in UTC format (2021-02-01) so that our Nodejs server counterpart can send them successfully."}),"\n",(0,s.jsx)(t.p,{children:'If you noticed in the new method "drawStrmBWChart", the sorting procedure is different than the one for account bandwidth. The data is similar but formatted to separate not just the dates but the streams as well. Here, we also use a "Day" format for daily breakdown instead of a monthly one. This format breaks down the data for daily totals instead of monthly.'}),"\n",(0,s.jsx)(t.p,{children:"The Google chart is updated accordingly and we can see each visual as we switch it out by pressing the corresponding buttons and adding the dates."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(78051).Z+"",width:"1999",height:"1478"})}),"\n",(0,s.jsx)(t.p,{children:"Notice, the data sent to the server is in the same format that is expected on the methods we added to the app.js file earlier. You can try another method using the Geo calls, just remember to format accordingly."}),"\n",(0,s.jsx)(t.h2,{id:"viewers-per-stream",children:"Viewers per stream"}),"\n",(0,s.jsxs)(t.p,{children:["Calculating the viewers per stream (daily or hourly), which region they viewed from, and how much bandwidth they consumed is a straightforward process. Navigate to the Dolby.io API reference and select the ",(0,s.jsx)(t.a,{href:"/millicast/api/analytics-streams-geo-series",children:"Analytics Streams Geo Series API"}),". Add your startDate, stopDate, resolution, and streamName. Additionally, in the top right corner, add your API Secret key found in the ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/about-dash#settings",children:"Settings Tab"})," of the dashboard. Once all the fields have correct values click the ",(0,s.jsx)(t.code,{children:"Try It!"})," button to get your data."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\uD83D\uDEA7 Get your data before it expires!"}),"\n",(0,s.jsxs)(t.p,{children:["Hourly data is only stored seven days after the stream started. For more information see ",(0,s.jsx)(t.a,{href:"/documentation/pr-preview/pr-254/millicast/analytics-api#access-restrictions",children:"Access Restrictions"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(751).Z+"",width:"2270",height:"1127"})}),"\n",(0,s.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(t.h3,{id:"no-results-returned-for-stream",children:"No Results Returned for Stream"}),"\n",(0,s.jsx)(t.h4,{id:"special-characters-in-stream-names",children:"Special Characters in Stream Names"}),"\n",(0,s.jsxs)(t.p,{children:["When querying usage with the ",(0,s.jsx)(t.a,{href:"/millicast/api/analytics-streams-series",children:"Analytics"})," APIs using ",(0,s.jsx)(t.code,{children:"streamNames"})," it is expected that the streams have not used special characters such as ",(0,s.jsx)(t.code,{children:"/"}),", ",(0,s.jsx)(t.code,{children:"*"}),", or ",(0,s.jsx)(t.code,{children:"--"})," as this will fail to report results. Recommendation is to avoid using special characters in stream names and sticking with alpha-numeric characters and single dashes."]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},52789:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/analytics-accnt-call-btn-8abd2bda110e98e1ed5f019636d9c7fa.png"},52116:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/analytics-goog-graph1-2666258ba0e85961cf19c5384b686b23.png"},78051:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/analytics-goog-graph2-2299c39aafde9e04d6386c99f3ec13f7.png"},751:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/millicastViewerCount-c6493468ab4dbb57492948385438b458.png"},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return r}});var a=n(67294);let s={},o=a.createContext(s);function r(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);