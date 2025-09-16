---
sidebar_position: 5
---

# Scheduling breaks

OptiView Ads can insert ad breaks into your content, but it requires placement information to do so. This page will outline the various options for scheduling ad breaks.

## Using the manifest

There are multiple ways to provide the general ad break information in the manifest itself.
In this section we'll go through the different options and the minimal requirements.

:::note
For HLS live streams, we require the `#EXT-X-PROGRAM-DATE-TIME` tag to be present.
This is necessary to have a clear timeline for each viewer and allows accurate scheduling of the ad breaks.
:::

As mentioned it is possible to schedule the start time and duration of the ad breaks inside of the manifest.
The signaling service will recognize this information and will translate it so that the player can request the correct ads and layout for the ad break.

There are several options for achieving this:

### DATERANGE (Manifest) {#daterange}

The `#EXT-X-DATERANGE` tag is the recommended approach to signal an ad break due to its standardization.
OptiView Ads will recognize any `#EXT-X-DATERANGE` tag as long as the `CLASS` attribute is undefined.

The required attributes for this are:

- `ID`: a unique identifier of the daterange in the playlist.
- `START-DATE`: A quoted string containing the date/time at which the daterange begins.
- `DURATION` or `PLANNED-DURATION` of the daterange.
  - Optionally `SCTE35-OUT` could contain the duration instead.

An example snippet can be found below:

```
#EXTINF:10
1.ts
#EXT-X-DATERANGE:ID="1",START-DATE="2022-09-27T18:00:00.000Z",PLANNED-DURATION=30
#EXTINF:10
2.ts
```

### CUE-OUT (Manifest) {#cue-out}

Inside the manifest the ad break start can be signaled by adding an `#EXT-X-CUE-OUT` tag. The duration of the ad break should be specified after it. The end of the ad break and start of content would be signaled by an `#EXT-X-CUE-IN` tag. The `CUE-OUT` tag can be accompanied by a [daterange](#daterange). This is relevant if the ad break start does not correspond with the start of a new segment.

It is also recommended to add `#EXT-X-CUE-OUT-CONT` tags for each segment inside of the ad break.
This enables the tune-in feature which is able to show parts of the ad break even if the viewer joins in the middle of one.

Similar to the daterange, `SCTE35` markers could optionally be added containing the duration and the ID of the ad break.

An example manifest with these tags can be found below:

```
#EXTINF:10
1.ts
#EXT-X-CUE-OUT:30
#EXTINF:10
2.ts
#EXT-X-CUE-OUT-CONT:ElapsedTime=10,Duration=30
#EXTINF:10
3.ts
#EXT-X-CUE-OUT-CONT:ElapsedTime=20,Duration=30
#EXTINF:10
4.ts
#EXT-X-CUE-IN
#EXTINF:10
5.ts
```

### OATCLS-SCTE35 (Manifest) {#oatcls-scte35}

The `#EXT-OATCLS-SCTE35` tag is a non-standard tag which contains a SCTE marker.
The Signaling Service will parse the information in the SCTE marker such as the duration and ID.

An example snippet for an `#EXT-OATCLS-SCTE35` tag can be found below:

```
#EXTINF:10,
1.ts
#EXT-OATCLS-SCTE35:/DBFAAAAAAAAAP/wFAUAAAI+f+/+yuN1kH4Azf5gAAAAAAAgAh5DVUVJAAABy3//AADN/mAOCk5GTF9saW5lYXIwAACyYCjX
#EXTINF:10,
2.ts
```

## Using the OptiView Ads service REST API

If the ad information won't be present in the provided manifest, it is possible to schedule one through the OptiView Ads service API.

This can be done by a POST request to `{path}/break` where path is the usual url to interact with the OptiView Ads service for a specific monetized stream: `{optiview-ads-host}/ads-client/api/v1/monetized-streams/:monetizedStreamId`. Please see [CreateMonetizedStreamBreak](/ads/api/signaling/create-monetized-stream-break/).

The body of the post request can have the following properties:

```ts
{
  id: string;
  startDate: string;
  duration: string;
  source: string | undefined;
  layout: string | undefined;
  assetURI: string | undefined;
  backdropURI: string | undefined;
  backdropURIGamProperties: string | undefined;
}
```

- The `id` corresponds to the ID of the DATERANGE which corresponds to the ad break request.
- `startDate` denotes when the ad break should start. It should be in a Program Date Time format such as such as `YYYY-MM-DDThh:mm:ss.SSSZ`.
- `duration` is the total duration of the ad break (seconds).
- `source` is the optional identifier of the source for which the ad needs to be scheduled. The signaling service will only insert the ad for playlists containing part of this in their URL. If not set the ad is scheduled in every playlist.
- `layout` is the optional OptiView Ads layout, which can be set to `SINGLE`, `DOUBLE`, `LSHAPE_AD` or `LSHAPE_CONTENT`. If it is `undefined` the default layout of the signaling service will be chosen.
- `assetURI` is the optional manifest URI of an alternative ad source. If set it will use this URI during the scheduled ad break instead of Google Pod Serving.
- `backdropURI`: Optional URI containing the back-drop to be used for this ad break.
- `backdropURIGamProperties`: Optional property with configuration values for a dynamic back-drop loaded via GAM to be used for this ad break. This property has priority over `backdropURI`.

Note: for properties that are set on both the monetised stream and the ad break, the values on the ad break have priority.

An example of a schedule ad break request body can be found below:

```json
{
  "id": "1",
  "startDate": "YYYY-MM-DDTHH:MM:SS.000Z",
  "duration": "10",
  "layout": "DOUBLE"
}
```
