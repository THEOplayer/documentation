# Token API

The **Token API** is a REST endpoint that allows you to automate the creation and management of tokens for your applications. You can create, read, update, and delete **publish tokens** and **subscribe tokens** that are used for authorizations with a broadcast stream.

<!-- -->

## [🎥Publish tokens](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md)

[Used to publish and manage starting a broadcast.](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md)

## [▶️Subscribe tokens](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md)

[Used to subscribe and manage the playback viewing of a stream. (optional)](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md)

This guide covers the following:

* [Getting Your API Secret](#acquiring-your-api-secret)
* [Create and Manage Publish Tokens](#creating-publishing-tokens)
* [Create and Manage a Subscribe Tokens](#creating-subscribe-tokens)

Using the REST APIs

Review the [REST API](/documentation/pr-preview/pr-690/millicast/getting-started/using-rest-apis.md) platform guide for more details on generating an API secret for authentication. You will need an *API Secret* from the dashboard in order to make requests.

## Acquiring your API secret[​](#acquiring-your-api-secret "Direct link to Acquiring your API secret")

To use the REST APIs, you must provide an API Secret to authenticate your application. Without a valid secret, API calls will be rejected with an Unauthorized error.

To acquire an API Secret, log into the OptiView Real-time Streaming Dashboard, and click on "*Settings*" in the left-side menu.

Navigate to the Security tab and click the `+ Create` button to add an API Secret.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/add-api-token-b472208778d105cff8a20d153343a3fe.png)

Once you have created your initial API Secret, you can use the same edit button to refresh the API Secret, and any further access using old tokens will then be rejected. You can also delete the token and **disallow ALL API access to your account** as it was by default when you first signed up.

From here, you can start using any of the APIs in the [API reference](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-read-token.md) or continue through the guide below to learn more about managing publish and subscribe tokens.

## Creating publishing tokens[​](#creating-publishing-tokens "Direct link to Creating publishing tokens")

Publish tokens are required to start a stream and can be used to control who, where, and what kind of stream can be started. The easiest way to begin learning about programmatically creating a publish token is by going to the [PublishToken Create Token interface of the API reference](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-create-token.md).

Inside the reference, you'll see a section on the right where you can select your preferred programming language, add your [API Secret key](/documentation/pr-preview/pr-690/millicast/token-api.md#acquiring-your-api-secret), and see the sample call based on the parameters you've added so far. In the middle, you'll see where you can add and adjust the required and optional parameters, along with the respective parameter definitions.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/pubtok-d96d8404307edcb6be26be6bacd63a26.png)

There are a lot of parameters to adjust when creating a token. For a full list of definitions, refer to the [Creating a Publish Token](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md#create-a-publish-token) guide, which goes into more detail.

As an example, we can use the API reference UI to create a basic publish token via a cURL request:

cURL

```curl
curl --request POST \
     --url https://api.millicast.com/api/publish_token \
     --header 'accept: application/json' \
     --header 'authorization: Bearer YOUR_API_SECRET' \
     --header 'content-type: application/json' \
     --data '
{
  "streams": [
    {
      "streamName": "MainCam",
      "isRegex": false
    },
    {
      "streamName": "BackupCam",
      "isRegex": false
    },
    {
      "streamName": "StageCam",
      "isRegex": false
    }
  ],
  "label": "DevTestToken",
  "expires": 2592000
}
'

```

The above request would use my API secret to create a publish token valid for 30 days that supports three streams: "*MainCam*", "*BackupCam*", and "*StageCam*".

You can also use Regex for Stream names, giving your token the ability to **use ANY arbitrary stream name** in the publishing path. The only rule to note here is that anyone using their own viewer must know what stream name the broadcaster is using in order to view the stream correctly.

cURL

```curl
curl --request POST \
     --url https://api.millicast.com/api/publish_token \
     --header 'accept: application/json' \
     --header 'authorization: Bearer YOUR_API_SECRET' \
     --header 'content-type: application/json' \
     --data '
{
  "streams": [
    {
      "streamName": ".*",
      "isRegex": true
    }
  ],
  "allowedCountries": [
    "PL",
    "ZA"
  ],
  "label": "DevTestToken",
  "expires": 2628000
}
'

```

In the above example, I also used the `allowedCountries` parameter to limit the token to only broadcasting from *Poland (PL)* and *South Africa (ZA)*.

### Managing publish tokens[​](#managing-publish-tokens "Direct link to Managing publish tokens")

Once you've created a publish token, you can use the REST APIs to manage the token. The REST APIs support [Reading](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-read-token.md), [Deleting](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-delete-token.md), [Listing](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-list-tokens.md), [Updating](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-update-token.md), [Disabling](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-disable-tokens.md), and [Getting Token IDs](/documentation/pr-preview/pr-690/millicast/api/publish-token-v-1-get-all-active-tokens-by-account.md).

For example, If I wanted to list the most recent 30 tokens created on my account, I could run the following command:

```curl
curl --request GET \
     --url 'https://api.millicast.com/api/publish_token/list?sortBy=AddedOn&page=1&itemsOnPage=30&isDescending=true' \
     --header 'accept: application/json' \
     --header 'authorization: Bearer YOUR_API_SECRET'

```

Once listed, I could pick a token by its `tokenID` and delete it:

```curl
curl --request DELETE \
     --url https://api.millicast.com/api/publish_token/Your_Token_ID \
     --header 'accept: application/json' \
     --header 'authorization: Bearer YOUR_API_SECRET'

```

## Creating subscribe tokens[​](#creating-subscribe-tokens "Direct link to Creating subscribe tokens")

Unlike the publisher, the viewer, by default, does not need a subscribe token to view a broadcast. However, if you want to [secure your feed](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md#create-a-publish-token) from being viewed by unauthorized users, using a subscribe token is recommended. The subscribe token also has its own set of rules you can use to protect your feed. You can create a token with a time limit, set the token to work from single or multiple specified domains, or you can even set it to use a specific IP or IPs as well.

The easiest way to begin learning about creating a subscribe token is by going to [the *SubscribeToken Create Token* interface of the API reference](/documentation/pr-preview/pr-690/millicast/api/subscribe-token-v-1-create-token.md).

Inside the reference, you'll see a section on the right where you can select your preferred programming language, add your [API Secret key](/documentation/pr-preview/pr-690/millicast/token-api.md#acquiring-your-api-secret), and see the sample call based on the parameters you've added so far. In the middle, you'll see where you can add and adjust the required and optional parameters, along with the respective parameter definitions.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/subtok-9cd29306339c243539268331e8d0ca83.png)

There are a lot of parameters to adjust when creating a token. For a full list of definitions, refer to the [Creating a Subscribe Token guide](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md), which goes into more detail.

As an example, we can use the API reference UI to create a basic subscribe token via a cURL request:

```curl
curl --request POST \
     --url https://api.millicast.com/api/subscribe_token \
     --header 'accept: application/json' \
     --header 'authorization: Bearer YOUR_API_SECRET' \
     --header 'content-type: application/json' \
     --data '
{
  "streams": [
    {
      "streamName": "StageCamera"
    }
  ],
  "label": "DevTestToken",
  "expires": 2628000
}
'

```

The above request would use my API secret to create a subscribe token valid for 30 days that supports the stream "*StageCam*".

You can also use Regex for Stream names, giving your token the ability to **use ANY arbitrary stream name** in the publishing path. The only rule to note here is that since the subscribe token supports any arbitrary stream name, it can hence be used to access any stream on the account.

```curl
curl --request POST \
     --url https://api.millicast.com/api/subscribe_token \
     --header 'accept: application/json' \
     --header 'authorization: Bearer YOUR_API_SECRET' \
     --header 'content-type: application/json' \
     --data '
{
  "streams": [
    {
      "streamName": ".*",
      "isRegex": true
    }
  ],
  "label": "DevTestToken",
  "bindIpsOnUsage": 1,
  "expires": 2628000
}
'

```

The above example also uses the `bindIpsOnUsage` parameter to bind the token to the first IP address that connects to it.

Another feature that can be useful is *"Tracking"*. Tracking allows you to add a `trackingId` to your token that you can [use to list the total bandwidth consumed](/documentation/pr-preview/pr-690/millicast/api/analytics-get-tracking-total-for-streams.md) by a `trackingId` associated with a subscribe token. The example below showcases creating a token with a `trackingId` "*Tracking\_ID\_1*:

```curl
curl --request POST \
     --url https://api.millicast.com/api/subscribe_token \
     --header 'accept: application/json' \
     --header 'authorization: Bearer YOUR_API_SECRET' \
     --header 'content-type: application/json' \
     --data '
{
  "streams": [
    {
      "streamName": "StageCam"
    }
  ],
  "tracking": {
    "trackingId": "Tracking_ID_1"
  },
  "label": "DevTestToken"
}
'

```

You can use the Analytics APIs to get the [bandwidth consumed by this token](/documentation/pr-preview/pr-690/millicast/api/analytics-get-total-bandwidth-for-tracking-id.md), a useful feature for checking if a subscribe token has been shared:

```curl
curl --request GET \
     --url 'https://api.millicast.com/api/analytics/tracking/total?trackingIds=Tracking_ID_1&startDate=2023-02-02&stopDate=2023-07-27' \
     --header 'accept: application/json' \
     --header 'authorization: Bearer YOUR_API_SECRET'

```

### Self-sign subscribe tokens[​](#self-sign-subscribe-tokens "Direct link to Self-sign subscribe tokens")

Depending on how secure you want your stream to be, you may need to create many subscribe tokens. OptiView Real-time Streaming supports the ability to self-sign subscribe tokens without having to make an API call to the OptiView Real-time server. Self-signing subscribe tokens locally allows you to generate your subscribe token more efficiently. The self-signed token is a user-generated JSON Web Token (JWT) that is generated from an existing subscribe token.

To learn more about self-signing subscribe tokens, [check out this guide](/documentation/pr-preview/pr-690/millicast/subscribe-tokens.md#self-signing-subscribe-tokens).

### Managing subscribe tokens[​](#managing-subscribe-tokens "Direct link to Managing subscribe tokens")

Once you've created a subscribe token, you can use the REST APIs to manage the token. The REST APIs support [Reading](/documentation/pr-preview/pr-690/millicast/api/subscribe-token-v-1-read-token.md), [Deleting](/documentation/pr-preview/pr-690/millicast/api/subscribe-token-v-1-delete-token.md), [Listing](/documentation/pr-preview/pr-690/millicast/api/subscribe-token-v-1-list-tokens.md), and [Updating](/documentation/pr-preview/pr-690/millicast/api/subscribe-token-v-1-update-token.md).

For example, if I wanted to list the 30 most recent subscribe tokens, I could run the following request:

```curl
curl --request GET \
     --url 'https://api.millicast.com/api/subscribe_token/list?sortBy=AddedOn&page=1&itemsOnPage=30&isDescending=true' \
     --header 'accept: application/json' \
     --header 'authorization: Bearer YOUR_API_SECRET'

```

Then if I wanted to delete one of the tokens listed, I could run the following request:

```curl
curl --request DELETE \
     --url https://api.millicast.com/api/subscribe_token/Your_Token_ID \
     --header 'accept: application/json' \
     --header 'authorization: Bearer YOUR_API_SECRET'

```
