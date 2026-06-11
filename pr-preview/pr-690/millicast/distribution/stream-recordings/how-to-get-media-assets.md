# How-to Get Media Assets

Media assets are media recordings that are created one of several ways:

* **[Stream Recordings](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings.md):** Media captured by enabling *recording* on a token, the entire stream from first to last frame is stored in the cloud as a single-layer "mezzanine" recording, usually stored in an MP4 container
* **[Live-to-VOD clips](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/live-clipping.md):** These assets are "clipped" out of a live streaming workflow as a servable HLS manifest that can be used for distribution and replays of the stream. These are referred to as "live clips" or "live clipping". You can also extract a single MP4 mezzanine "clip" appropriate for social sharing or archive
* **[Media Uploads](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/how-to-upload-media-assets.md):** Files that are pre-transcoded before upload for distribution and are served over Dolby's CDN

With [Stream Recordings](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings.md) you will want to be able to retrieve and operate on any media assets that are created. You can do this manually using the [Streaming Dashboard](/documentation/pr-preview/pr-690/millicast/about-dash.md) or automate workflows using the [Media Assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md) REST endpoints. There are also [Media Webhooks](/documentation/pr-preview/pr-690/millicast/webhooks/media.md) available for building event-driven integrations.

*Note: At this time, **Stream Recordings** are currently visible in the dashboard, for **live-to-vod** and **media uploads**, you must use the API to retrieve your assets. Creating live-to-vod assets requires consultation with the Dolby team to enable the workflow.*

## Stream Recordings in the Dashboard[​](#stream-recordings-in-the-dashboard "Direct link to Stream Recordings in the Dashboard")

You can find recordings by visiting the [Streaming Dashboard](/documentation/pr-preview/pr-690/millicast/about-dash.md).

### Find Stream Recordings by Token[​](#find-stream-recordings-by-token "Direct link to Find Stream Recordings by Token")

To find stream recordings for a specific token, open your Publish token from the **Live Broadcast** section and click the **Settings** button to open the management screen. Select the **Recordings tab** from the top of the panel. Each thumbnail is displayed with a reference to your stream recording. A newly created stream recording can take a few seconds to several minutes to render, depending on length. Once the stream recording has been processed, you can view it. You can click on the **More Files** button to see all the files recorded with the respective token.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/0f4fe76-rec-token-recordings-a21af0bdc0b8329142643485360023e3.png)

### Find All Account Recordings[​](#find-all-account-recordings "Direct link to Find All Account Recordings")

Alternatively, to find all your recordings, open the **Recordings** section of the dashboard. You can view your recordings either as a thumbnail grid or a basic list by clicking the **List View** button on the top right section menu. Additionally, you can see the current total storage used in the top right corner of the Recording page, or get your current billable storage in the **Billing** page.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/rec-player-4f18720696b1f726d9f2ad70139f6c07.png)![](/documentation/pr-preview/pr-690/assets/images/rec-list-view-selected-06fe08bff5ccb7e70904b92457157ba4.png)

### Preview a Recording[​](#preview-a-recording "Direct link to Preview a Recording")

To preview your recordings, click on the thumbnail image which will open the **Preview Player** and begin playing the video. The player also provides more information about your recording including length, quality, and dimensions. Click on the **More Details** button under the player to explore.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/rec-details-b00182b24b8080b65aee41425eac3731.png)

You can close the player using the close button located on the top right or you can scroll down to choose another video.

### Download Recordings[​](#download-recordings "Direct link to Download Recordings")

To download recordings, click the arrow icon visible on the thumbnail. You can also download your video using the icon menu under the preview player. Clicking the download icon immediately initiates a download.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/rec-player_1-4b851fff28cf1a32c7fbc3d4b02f197a.png)

Audio Missing?

The downloaded recording will use the Opus audio codec. Playback on various media players may not support Opus and audio may not be heard. You can use [VLC](https://www.videolan.org/) for playback and converting sound to AAC.

### Delete Recordings[​](#delete-recordings "Direct link to Delete Recordings")

The retention policy for recordings is determined by your business rules for removing and deleting the files.

Located next to the download button, the delete icon deletes the recording. To delete multiple videos you can select the checkboxes on the thumbnails and then click the **Delete Selected** button from the section menu on the top right.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/rec-chbx-select2-5f7474e4ff7d19de76a187b637988f7a.png)

To delete all items at once, click the **Select All** button from the same top section menu. This will select every thumb on the screen. Then, click the **Delete Selected** button to delete them all.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/rec-select-all2-f9473954cf87fdbc02ed18cd0e480e8f.png)

Deletion is Permanent

If you delete a recording or clip it is immediate and permanent. We are unable to recover a recording once it has been deleted and removed from the cloud servers.

## Finding Media by API[​](#finding-media-by-api "Direct link to Finding Media by API")

The [Media Assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md) API can help you with automating workflows with stream recordings, live-to-vod clips, and media uploads.

<!-- -->

Getting Started with REST APIs

Review the REST API [Getting Started](/documentation/pr-preview/pr-690/millicast/getting-started/using-rest-apis.md) tutorial for details on retrieving your API Key for authenticating your API calls. The examples included here use the `cURL` command-line utility. Alternatively, there are [Postman Collections](https://www.postman.com/dolbyio/dolby-io-streaming-apis/) and a [REST Client for Node](https://github.com/DolbyIO/dolbyio-rest-apis-client-node) that may be helpful for your project.

Use the [List Media Assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md) endpoint to query a list of media assets for your account. There are some parameters you can use to filter the results returned.

### How-to Find All Recordings and/or Clips[​](#how-to-find-all-recordings-andor-clips "Direct link to How-to Find All Recordings and/or Clips")

Use the `type` parameter to retrieve assets that match the given type. If you omit the parameter, both recordings and clips will be returned together.

```curl
curl --request GET \
  --url https://api.millicast.com/api/v3/media/assets?type=clip \
  --header 'authorization: Bearer abc123'

```

You can use this parameter to find *recording* or *timeline* assets as well. See the [List Media Assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md) reference specification for the full list.

### How-to Find Recordings Still in Progress[​](#how-to-find-recordings-still-in-progress "Direct link to How-to Find Recordings Still in Progress")

Use the `status` parameter to retrieve assets that match a given status.

```curl
curl --request GET \
  --url https://api.millicast.com/api/v3/media/assets?status=processing \
  --header 'authorization: Bearer abc123'

```

You can use this parameter to find any *errored* assets as well. See the [List Media Assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md) reference specification for the full list.

### How-to Find Media By Name[​](#how-to-find-media-by-name "Direct link to How-to Find Media By Name")

Use the `name` parameter to find clips that were given a specific label or `streamName` to find just those that were captured for a specific broadcast.

```curl
curl --request GET \
  --url https://api.millicast.com/api/v3/media/assets?name=2024-10-01a \
  --header 'authorization: Bearer abc123'

```

## Removing Media by API[​](#removing-media-by-api "Direct link to Removing Media by API")

Use the [Delete Media Assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-delete-media-assets.md) endpoint to remove either recordings or clips. You'll need to first find the **mediaAssetId** before you can delete specific assets. This is given as a query parameter so that you can delete more than one asset at a time.

```curl
curl --request DELETE \
  --url https://api.millicast.com/api/v3/media/assets?id=1&id=2 \
  --header 'Authorization: Bearer abc123'

```

### How-to Remove All Media[​](#how-to-remove-all-media "Direct link to How-to Remove All Media")

To remove everything from your account you can use the [Delete All Media Assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-delete-media-assets-2.md) REST endpoint. This operation works on one `type` at a time so will be called to remove `recording`, `clip`, and `timeline` independently.

Deletion is Permanent

If you delete a recording or clip it is immediate and permanent. We are unable to recover a recording once it has been deleted and removed from the cloud servers.

## Downloading Media by API[​](#downloading-media-by-api "Direct link to Downloading Media by API")

Using the [Media Assets](/documentation/pr-preview/pr-690/millicast/api/media-assets-list-media-assets.md) API you can identify the cloud storage location where recordings and clips are stored.

### How-to Retrieve a Media Asset[​](#how-to-retrieve-a-media-asset "Direct link to How-to Retrieve a Media Asset")

Media Assets are typically stored on Dolby's servers and made available for retrieval. You'll need to know the `mediaAssetId` of the item you want to download. This includes all media types including stream recordings, live-to-vod clips, and media uploads.

#### Example GET Response[​](#example-get-response "Direct link to Example GET Response")

This is an example of a JSON response from the [/media/asset/{mediaAssetId}](/documentation/pr-preview/pr-690/millicast/api/media-assets-read-media-asset.md) endpoint.

```json
{
  "status": "success",
  "data": {
    "id": "string",
    "type": "recording",
    "feed": {
      "tokenId": 0,
      "streamName": "string",
      "sourceId": "string",
      "simulcastId": "string",
      "priority": 0
    },
    "startTime": "2024-10-01",
    "stopTime": "2024-10-01",
    "name": "string",
    "storage": {
      "type": "gcs",
      "path": "string"
    },
    "status": "processing",
    "error": "string",
    "created": "2024-10-01",
    "expiration": "2024-10-01",
    "removed": "2024-10-01",
    "metadata": {
      "format": "string",
      "sizes": {
        "additionalProp": 0
      },
      "duration": 0,
      "tracks": [
        {
          "type": "string",
          "codec": "string",
          "bitrate": 0,
          "width": 0,
          "height": 0,
          "framerate": 0,
          "channels": 0,
          "samplerate": 0
        }
      ],
      "thumbnails": ["string"]
    },
    "download": {
      "downloadUrl": "string",
      "downloadExpiresOn": "2024-10-01T18:47:26.836Z",
      "url": "string"
    }
  }
}

```

The `downloadUrl` gives you the storage location where a file is available to download using whichever software or libraries are most appropriate for your application needs. Generally this is a short-lived encrypted link intended for a one-time download.

After your `downloadUrl` expires call the [/media/asset/{mediaAssetId}](/documentation/pr-preview/pr-690/millicast/api/media-assets-read-media-asset.md) endpoint to retrieve a new one.

## Managing Media Security[​](#managing-media-security "Direct link to Managing Media Security")

If you want to construct download URLs without repeated API calls, or want fine-grain control over access to media assets, use the base `url` field and media distributions. These links are usually of the form `https://cdn.optiview.dolby.com/vod/...` and are intended to be served over Dolby's CDN. In order to use this you need to configure a **Media Distribution**.

### Media Distributions[​](#media-distributions "Direct link to Media Distributions")

A *media distribution* is an object defining security settings for a subset of media assets on your account. You may have multiple media distributions with different security settings. Create and manage media distributions using the [Media Distributions](/documentation/pr-preview/pr-690/millicast/api/media-distributions-create-media-distribution.md) API.

Each media asset can be associated with one media distribution in one of the following ways:

1. Specify the `mediaDistributionId` when creating a live-to-vod clip using the [Create Media Asset](/documentation/pr-preview/pr-690/millicast/api/media-assets-create-media-asset.md) endpoint.
2. Update the `mediaDistributionId` on an existing media asset using the [Update Media Asset](/documentation/pr-preview/pr-690/millicast/api/media-assets-update-media-asset.md) endpoint.
3. Set a default media distribution for your account using the [Create Media Distribution](/documentation/pr-preview/pr-690/millicast/api/media-distributions-create-media-distribution.md) or [Update Media Distribution](/documentation/pr-preview/pr-690/millicast/api/media-distributions-update-media-distribution.md) endpoint. Any new media assets created on your account will be associated with the default media distribution.

If a media asset is not associated with a media distribution it cannot be viewed using the base `url`. There is no default media distribution created for you. This is because your assets would be unsecured if we made the distribution public and in order to create secure playback (assets protected by a JWT viewer token), you must provide a secret when creating the media distribution.

### Unsecured Playback[​](#unsecured-playback "Direct link to Unsecured Playback")

An unsecured media distribution is one with no security keys. Create an unsecured media distribution using the following curl command.

```curl
curl --request POST \
  --url https://api.millicast.com/api/v3/media/distributions \
  --header 'Authorization: Bearer abc123' \
  --data '
{
  "name": "myUnsecuredDistribution"
}
'

```

To view a media asset associated with this distribution, simply use the `url` field from the [Read Media Asset](/documentation/pr-preview/pr-690/millicast/api/media-assets-read-media-asset.md) response. You will see that the asset `url` is publicly readable by anyone with the link.

### Secured Playback[​](#secured-playback "Direct link to Secured Playback")

If you want to secure your media assets so that a signed JWT is required to view them, create a secured media distribution with your secret key.

```curl
curl --request POST \
  --url https://api.millicast.com/api/v3/media/distributions \
  --header 'Authorization: Bearer abc123' \
  --data '
{
  "name": "mySecuredDistribution",
  "security": {
    "keys": [
      {
        "name": "mySecurityKey",
        "key": "abcdefghijklmnopqrstuvwxyz1234567890"
      }
    ]
  }
}
'

```

Retrieve the `id` of your security key from the response. Keep a record of your secret key since you will not be able to retrieve it again via the OptiView APIs.

Any media assets associated with a media distribution with a security key cannot be viewed without a valid JWT.

Create a JWT with a payload including the `id` of your media distribution security key as `mediaKeyId`, an expiry time and optionally a mediaAssetId. Use your secret key to sign the JWT. Below is an example JWT payload.

```text
{
  "mediaKeyId": "4d2ec682-12aa-4d20-b7d2-ffcf1825f735",
  "mediaAssetId": "718f44d9319044fa908a5c6e6f70e26d",
  "exp": 1770330326
}

```

You may omit the `mediaAssetId` if you wish to create a token that is valid for all media assets associated with this media distribution.

Retrieve the base download `url` from the [Read Media Asset](/documentation/pr-preview/pr-690/millicast/api/media-assets-read-media-asset.md) response. Append the JWT as a `token` query parameter. The resulting url will look like

```text
https://cdn.optiview.dolby.com/vod/{organisationId}/{mediaAssetId}/{filename}.{fileExtension}?token={jwt}

```

You may add a second security key to a media distribution for the purpose of key rotation. Either key can be used to sign your JWTs.

## Predictable Paths[​](#predictable-paths "Direct link to Predictable Paths")

Generally the url to download a media asset looks like

```text
https://cdn.optiview.dolby.com/vod/{organisationId}/{mediaAssetId}/{filename}.{fileExtension}

```

When creating or uploading a media asset you may provide a `customPath` that will replace the `mediaAssetId` in the download path. The resulting url will look like

```text
https://cdn.optiview.dolby.com/vod/{organisationId}/{customPath}/{filename}.{fileExtension}

```

Using custom paths enables prediction of the download url path without reading the `mediaAssetId` from the API response. This is commonly used in order to give 3rd parties predicable access to regular recordings without having them integrate with an API. In this case the `customPath` might be a date or `eventName-date`.
