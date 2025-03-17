---
title: "3. Automate using REST APIs"
id: basic-api-tutorial
---
The Dolby.io Streaming REST API allows remote management of your Dolby.io Real-time Streaming account. To enable remote access you must first use the Token system to securely authenticate your applications with Dolby.io Real-time Streaming. To acquire an API Token, log into your Dolby.io Real-time Streaming account and follow the directions here: [acquiring your API token](/millicast/streaming-dashboard/token-api#acquiring-your-api-token).

For security you should always make your API calls from a secure server like Node.js, .NET or PHP. If you feel that your token has been compromised you can manage your token from your account by creating a new token or simply disabling access all together. Refer back to [acquiring a token](/millicast/streaming-dashboard/token-api#acquiring-your-api-token) to learn how to achieve this.

In this tutorial we will build a very rudimentary example for calling the API service and delivering the results down to the publishing client. You will be using Node.js as a secure layer to your Dolby.io Real-time Streaming account, as to not expose the secret API Token publicly. If you have not worked with Node.js before, its best to start with a tutorial or one of their basic guides https://nodejs.org/en/docs/guides/getting-started-guide/ to better understand how things are setup. You can also just follow along, learn the concepts, and use the server-side technology of your choice to achieve the same outcome.

* [REST API Client](https://github.com/DolbyIO/dolbyio-rest-apis-client-node): Client sample code for calling REST APIs from a Node environment
* [Postman Collection](https://www.postman.com/dolbyio): The Dolby.io Streaming API workspace has collections for the
      REST APIs.
* [API Reference](TODO): The API Reference documentation



## Setting up the environment

First we need to setup our secure server layer which is our Node.js server. Download Node.js from [https://nodejs.org](https://nodejs.org/) and follow the setup process to install it (note: At the time this was written it was Node.js 11.6.0).

Begin by creating a new Node.js project, then create a **server.js** file in the root of that project. In addition create two folders labeled **"certs"** and **"public"** respectfully in the same root directory. The _certs_ folder will house SSL certificates that we will need, and public will house the html files. For this example we are going to run our server locally, but you can run it on any Nodejs supported service you would like.

WebRTC requires HTTPS in order to securely grab the users media. That said, we are going to use a self-signed certificate and key in our HTTPS server so it is setup for whatever WebRTC application you decide to build. For an example on how to create a self-signed certificate you can refer to [this tutorial](https://www.sslshopper.com/article-how-to-create-a-self-signed-certificate.html).

For a free, CA-signed SSL certificate, you can use the service LetsEncrypt: https://letsencrypt.org/. You can also use any valid SSL certificate of your choice.

Assuming you now have your certificate and key, add them to a folder labeled "certs" that you created in your project. To finish our required files, create an **"index.html"** file inside of the public folder you created. With all that we are now ready to start our code.

## Calling the API

From your preferred text editor open the “server.js” file you created earlier in the root directory. Now copy this code into your server.js file:

```javascript Node.JS
const https = require("https");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");

const apiKey = 'ENTER_API_KEY_HERE';
const port = '8084';
const url = new URL('https://api.millicast.com/api/publish_token/');
const defaultOptions = {
  protocol: url.protocol,
  host: url.host,
  port: url.port,
  path: url.path,
  headers: {
    Authorization: 'Bearer ' + apiKey,
    'Content-Type': 'application/json',
  },
};

// Secure certs for https
const httpsOptions = {
  key: fs.readFileSync('certs/server.key'),
  cert: fs.readFileSync('certs/server.crt'),
};

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

function createToken(data) {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject({ msg: 'Something went wrong.' });
      return;
    }

    const opts = {
      ...defaultOptions,
      method: 'POST',
    };

    const req = https.request(opts, (resp) => {
      let result = '';
      resp.on('data', (chunk) => {
        result += chunk;
      });
      resp.on('end', () => {
        resolve(result);
      });
      resp.on('error', (err) => {
        reject(err);
      });
    });

    req.write(JSON.stringify(data));
    req.end();
  });
}

// Listen to client requests
app.use('/millicast/:endpoint', (req, res) => {
  const params = req.params;
  console.log(`on /millicast ${params}, endpoint: ${params.endpoint}, body: ${req.body}`);

  switch (params.endpoint) {
    case 'createToken':
      createToken(req.body)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.send(JSON.stringify({ status: 'fail', data: err }));
        });
      break;
    default:
      res.send(JSON.stringify({ status: 'error', desc: 'No endpoint specified' }));
  }
});

// Https server for serving our html files. (WebRTC requires https)
https.createServer(httpsOptions, app).listen(port, (err) => {
  if (err) throw err;
  console.log(`Secure server is listening on ${port}`);
});
```

Find the variable labeled **"apiKey"** and update the string to the Dolby.io Real-time Streaming **API key**, which you created earlier. Without your secret key, the API calls will be rejected. Also the **port** variable has a default value, but you can update that port number to whatever best suits your needs. After you have updated these properties go ahead and save your file.

Now open your index.html file in the text editor, copy this code and save it:

```html
<!DOCTYPE >
<html>
  <head>
    <title>Dolby.io Real-time Streaming Token API Tutorial</title>
  </head>
  <body>
    <label for="streamName">Stream Name</label>
    <input id="streamName" type="text" value="test" />
    <button onclick="createToken()">Create Token</button>
    <script>
      const servicePath = "/millicast";

      async function createToken() {
        const name = document.getElementById("streamName").value;
        console.log("createToken", name);
        if (name == null || name.length === 0) return;

        const data = {
          label: name,
          streams: [{ streamName: name }],
        };

        const fetchResponse = await fetch(servicePath + "/createToken", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const response = await fetchResponse.json();
        console.log(response);
      }
    </script>
  </body>
</html>
```

This small sample creates an HTTPS server and listens to a call from the client html to request a new token from the API. The server app then proxies the call securely and sends the result back down to the client for processing. This is a simple solution which will keep your API credentials private from the client.

Now that you have your files save, lets run our Nodejs server. Go to your DOS, TERMINAL, or if you're using a service use their tools to run your Node project. Now, type in **`node server`** in your Terminal or DOS command line to run the server.js script. For simplicity’s sake, this example is running on the localhost.

The server will initiate and display the port that it is listening to. In this case, we are using 8084, so the path to the file in the browser will be https://localhost:8084/. You should see a simple UI for getting a new token and that's it. To test, first open your browser’s developer console, then on the UI enter an arbitrary name for the stream we want to use and click the button. The server will proxy your request to the Dolby.io Real-time Streaming where the service generates your new token and returns the results down to you. You should see the results in the developer console window.


![](https://cdn.TODO.io/docs/readme/3868c7d-basic-api-result.png)



In addition, if you log into your Dolby.io dashboard, you should now see your new token there in the list. If you are already on the page, a simple page refresh will do.

## The code in detail

Let us go over the code above with a little more detail to understand what is happening. Again, we’re assuming you have a basic understanding of Nodejs so this will focus more on the API calls than on the server.

If you look at your **server.js** code you can see that at the top we are importing a few requirements for the app like our **HTTPS** server for the calls and **express** for serving our files.

```javascript
const https = require("https");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");

const apiKey = 'ENTER_API_KEY_HERE';
const port = '8084';
const url = new URL('https://api.millicast.com/api/publish_token/');
const defaultOptions = {
  protocol: url.protocol,
  host: url.host,
  port: url.port,
  path: url.path,
  headers: {
    Authorization: 'Bearer ' + apiKey,
    'Content-Type': 'application/json',
  },
};

// Secure certs for https
const httpsOptions = {
  key: fs.readFileSync('certs/server.key'),
  cert: fs.readFileSync('certs/server.crt'),
};
```

In addition, we import some standard tools to help with the parsing of the html data and using the filesystem.

Under that, we setup our constant variables like the port we want to use, our API secret and path, as well as initiating our express and HTTPS services.

If you look at the express code, there is a routing method that listens to calls to the **/millicast/:endpoint** path.

This is the path that must be used on the client to initiate a request to the API. This path is arbitrary so you can change it to suit your needs, but you must update both the server.js as well as the html client code if you do.

```javascript
app.use('/millicast/:endpoint', (req, res) => {
  const params = req.params;
  console.log(`on /millicast ${params}, endpoint: ${params.endpoint}, body: ${req.body}`);

  switch (params.endpoint) {
    case 'createToken':
      createToken(req.body)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.send(JSON.stringify({ status: 'fail', data: err }));
        });
      break;
    default:
      res.send(JSON.stringify({ status: 'error', desc: 'No endpoint specified' }));
  }
});
```

In the body of the route we use a switch to filter the endpoints from the request. If an endpoint of **createToken** is requested by the client, the switch catches it and then calls our **createToken method** below to query the API and return a new token down to the client, otherwise it will return an error message.

Here you can add more cases to the switch command to handle additional calls to the API, for example you can add a **deleteToken** call to delete the token you just created after the user has finished with their broadcast.

Below this is our HTTPS server which listens to a specific port. If you move down you can see the actual method for calling the API for createToken. This returns a promise to the calling method in express, but notice it also uses the details sent from the client. The client sends the required information for the token like **streamName** and we pass it along to the API. You can approach this differently if you want to, but a streamName value is required for this call. With that said, we can move on to the index.html file.

Open the index.html file in your text editor and move down to the body tag. You can see that we created very simple markup to show a field and a button. The text field is where the user enters the arbitrary name of the stream they want, and the button is to submit it. It simply calls a method **createToken** which mirrors the name of the call on our server side counterpart.


![](https://cdn.TODO.io/docs/readme/71266c2-basic-api-index1-snap.png)



In the body of the createToken method you can see the data object which has the **label** and **streams** object that contains the **streamName** that we want to use and that we will send to the server. You can also see how we use the route path dynamically to create a request to the specified endpoint.

```javascript
const servicePath = "/millicast";

await fetch(servicePath + "/createToken", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
    },
});
```

To learn more about the other API Calls you can use see our [API docs](ref:welcome).

You can add the rest of the API calls into the server side code, however it best makes sense for your application. Here is an example of what the server code will look like.

#### server.js

```javascript
const https = require("https");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");

const apiKey = "ENTER_API_KEY_HERE";
const port = "8084";
const url = new URL("https://api.millicast.com/api/publish_token/");
const defaultOptions = {
  protocol: url.protocol,
  host: url.host,
  port: url.port,
  path: url.path,
  headers: {
    Authorization: "Bearer " + apiKey,
    "Content-Type": "application/json",
  },
};

// Secure certs for https
const httpsOptions = {
  key: fs.readFileSync("certs/server.key"),
  cert: fs.readFileSync("certs/server.crt"),
};

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));


function sendRequest(opts, data) {
  console.log(`sendRequest opts: ${opts}, data: ${data}`);

  return new Promise((resolve, reject) => {
    const req = https.request(opts, (resp) => {
      let result = "";
      resp.on("data", (chunk) => {
        result += chunk;
      });
      resp.on("end", () => {
        console.log("Success", result);
        resolve(result);
      });
      resp.on("error", (err) => {
        reject(err);
      });
    });

    if (!!data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

async function createToken(data) {
  const opts = {
    ...defaultOptions,
    method: "POST",
  };
  return await sendRequest(opts, data);
}

/* Delete token that has id specified  
@info: { tokenId: 1234 }*/
async function deleteToken(info) {
  console.log("deleteToken - ", info);
  if (!info) info = { tokenId: "" };

  const opts = {
    ...defaultOptions,
    path: defaultOptions.path + info.tokenId,
    method: "DELETE",
  };
  return await sendRequest(opts, data);
}

async function updateToken(info) {
  const opts = {
    ...defaultOptions,
    path: defaultOptions.path + info.tokenId,
    method: "PUT",
  };
  return await sendRequest(opts, info.data);
}

async function getToken(info) {
  console.log("getToken - ", info);
  if (!info) info = { tokenId: "" };

  const opts = {
    ...defaultOptions,
    path: defaultOptions.path + info.tokenId,
    method: "GET",
  };
  return await sendRequest(opts);
}

async function getTokenList(info) {
  if (!info) info = new Object();
  let page = info.page ? info.page : 1;
  let items = info.itemsOnPage ? info.itemsOnPage : 100;

  console.log("getTokenList", info);

  const opts = {
    ...defaultOptions,
    path: defaultOptions.path + "list?page=" + page + "&itemsOnPage=" + items,
    method: "GET",
  };
  return await sendRequest(opts);
}

// Listen to client requests
app.use('/millicast/:endpoint', (req, res) => {
  const params = req.params;
  console.log(`on /millicast ${params}, endpoint: ${params.endpoint}, body: ${req.body}`);

  switch (params.endpoint) {
    case "createToken":
      createToken(req.body)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.send(JSON.stringify({ status: "fail", data: err }));
        });
      break;
    case "deleteToken":
      deleteToken(req.body)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.send(JSON.stringify({ status: "fail", data: err }));
        });
      break;
    case "getToken":
      getToken(req.body)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.send(JSON.stringify({ status: "fail", data: err }));
        });
      break;
    case "updateToken":
      updateToken(req.body)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.send(JSON.stringify({ status: "fail", data: err }));
        });
      break;
    case "getList":
      getTokenList()
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.send(JSON.stringify({ status: "fail", data: err }));
        });
      break;
    default:
      res.send(JSON.stringify({ status: 'error', desc: 'No endpoint specified' }));
  }
});

// Https server for serving our html files. (WebRTC requires https)
https.createServer(httpsOptions, app).listen(port, (err) => {
  if (err) throw err;
  console.log(`Secure server is listening on ${port}`);
});
```

index.html

```html
<!DOCTYPE >
<html>
  <head>
    <title>Dolby.io Real-time Streaming Token API Tutorial</title>
    <style>
      .mb-1 {
        margin-bottom: 0.7rem;
      }
      .mt-1 {
        margin-top: 0.7rem;
      }
      label {
        font-size: 0.8rem;
      }
      .scroll-box {
        height: 400px;
        width: 600px;
        border: 1px solid #ccc;
        overflow-y: auto;
      }
      .container {
        display: flex;
      }
      .ui-item {
        display: inline-block;
        padding: 0.9em;
      }
    </style>
  </head>
  <body>
    <h2>Token Management</h2>

    <div><textarea id="logWin" class="scroll-box"></textarea></div>

    <div class="container">
      <div class="ui-item">
        <label for="crtFeedName">Stream Name:</label>
        <div><input id="crtFeedName" type="text" value="test" /></div>

        <div class="mt-1">
          <button onclick="createToken()">Create Token</button>
        </div>
      </div>

      <div class="ui-item">
        <div><label for="getTokenId">Token ID:</label></div>
        <input id="getTokenId" type="text" value="" />
        <div class="mt-1"><button onclick="getToken()">Get Token</button></div>
      </div>

      <div class="ui-item">
        <div><label for="delTokenId">Token ID:</label></div>
        <input id="delTokenId" type="text" value="" />
        <div class="mt-1">
          <button onclick="deleteToken()">Delete Token</button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="ui-item">
        <div><label for="updTokenId">Token ID:</label></div>
        <input id="updTokenId" type="text" value="" />
        <div class="mt-1">
          <label for="ckActive">Token is Active</label>
          <input id="ckActive" type="checkbox" checked />
        </div>

        <div class="mt-1">
          <button onclick="updateToken()">Update Token</button>
        </div>
      </div>

      <div class="ui-item mt-1">
        <button onclick="getTokenList()">Get Tokens List</button>
      </div>
    </div>

    <script>
      const servicePath = "/millicast";
      let log;

      async function createToken() {
        let name = document.getElementById("crtFeedName").value;
        console.log("createToken ", name);
        if (name == null || name.length == 0) return; //create payload
        let data = {
          label: name, // Can be any label
          streams: [
            {
              // Can be multiple streams in array.
              streamName: name, // Name to stream with
            },
          ],
        };

        try {
          const response = await sendRequest("POST", "/createToken", data);
          appendLog(`- CREATE TOKEN -\n${JSON.stringify(response)}\n\n- END -\n`);
        } catch (error) {
            console.error("createToken - error:", error);
            log.value += "createToken - error: " + error;
        }
      }

      async function updateToken() {
        let id = document.getElementById("updTokenId").value;
        console.log("updateToken ", id);
        if (id == null || id.length == 0) return false; //create payload
        let data = {
          tokenId: id,
          data: {
            isActive: document.getElementById("ckActive").checked,
          },
        };
        console.log("active: ", data);

        try {
          const response = await sendRequest("PUT", "/updateToken", data);
          appendLog(`- UPDATE TOKEN -\n${JSON.stringify(response)}\n\n- END -\n`);
        } catch (error) {
            console.error("updateToken - error:", error);
            log.value += "updateToken - error: " + error;
        }
      }

      async function deleteToken() {
        let id = document.getElementById("delTokenId").value;
        console.log("deleteToken ", id);
        if (id == null || id.length == 0) return;

        try {
          const response = await sendRequest("DELETE", "/deleteToken", { tokenId: id });
          appendLog(`- DELETE TOKEN - id: ${id}\n`);
        } catch (error) {
            console.error("deleteToken - error:", error);
            log.value += "deleteToken - error: " + error;
        }
      }

      async function getToken() {
        let id = document.getElementById("getTokenId").value;
        console.log("getToken ", id);
        if (id == null || id.length == 0) return;

        try {
          const response = await sendRequest("POST", "/getToken", { tokenId: id });

          const s = `- GET TOKEN - \n\n${response.label}\n---------------\nid: ${response.id}\nactive: ${response.isActive}\ntoken: ${response.token}\nadded: ${response.addedOn}\n- END - \n`;
          appendLog(s);
        } catch (error) {
            console.error("getToken - error:", error);
            log.value += "getToken - error: " + error;
        }
      }

      async function getTokenList() {
        console.log("getTokenList");

        try {
          const response = await sendRequest("GET", "/getList");

          let s = "- GET TOKEN LIST - \n\n";
          for (let i = 0; i < response.length; i++) {
            const item = response[i];
            s += `${item.label}\n---------------\nid: ${item.id}\nactive: ${item.isActive}\ntoken: ${item.token}\nadded: ${item.addedOn}\n`;
          }
          s += "- END - \n";
          appendLog(s);
        } catch (error) {
            console.error("getTokenList - error:", error);
            log.value += "getTokenList - error: " + error;
        }
      }

      // Handle general request to server
      async function sendRequest(method, path, data) {
        console.log(`sendRequest: ${method} path: ${path} data: ${data}`);

        const fetchOptions = {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
        };
        if (data) {
          data.body = JSON.stringify(data);
        }
        
        const fetchResponse = await fetch(servicePath + path, fetchOptions);
        return await fetchResponse.json();
      }

      // Handle displaying data
      function appendLog(s) {
        if (!log) log = document.getElementById("logWin");
        log.value += s + "\n";
        log.scrollTop = log.scrollHeight;
      }
    </script>
  </body>
</html>
```


Please send any feedback, comments or suggestions regarding this tutorial to the [Dolby.io Support](https://support.dolby.io/) team.
