---
sidebar_position: 4
---

# Scheduling breaks

THEOads can insert ad breaks into your content, but it requires placement information to do so. This page will outline the various options for scheduling ad breaks.

## Using the manifest

There are multiple ways on how to provide the general ad break information in the manifest itself.
In this section we'll go through the different options and the minimal requirements.

:::note
For HLS live streams, we require the `#EXT-X-PROGRAM-DATE-TIME` tag to be present.
This is necessary to have a clear timeline for each viewer and allows accurate scheduling of the ad breaks.
:::

As mentioned it is possible to schedule the start time and duration of the ad breaks inside of the manifest.
The signaling service will recognize this information and will translate it so that the player can request the correct ads and layout for the ad break.

There are several options on achieving this:

### DATERANGE (Manifest) {#daterange}

The `#EXT-X-DATERANGE` tag is the recommended approach to signal an ad break due to its standardization.
THEOads will recognize any `#EXT-X-DATERANGE` tag as long as the `CLASS` attribute is undefined.

The required attributes for this are:

- `ID`: a unique identifier of the Date Range in the playlist.
- `START-DATE`: A quoted string containing the date/time at which the Date Range begins.
- `DURATION` or `PLANNED-DURATION` of the Date Range.
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

Inside the manifest the ad break start can be signaled by adding an `#EXT-X-CUE-OUT` tag.
The duration of the ad break should be specified after it.
The end of the ad break and start of content would be signaled by an `#EXT-X-CUE-IN` tag.
The `CUE-OUT` tag can be accompanied by a [daterange](#daterange).
This is interesting if the ad break start does not correspond with the start of a new segment.

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

## Using the Signaling service REST API

If the ad information won't be present in the provided manifest, it is possible to schedule one through the signaling service API.

This can be done by a POST request to `{path}/break` where path is the usual url to interact with the signaling service for a specific monetized stream: `{signaling-service-url}/api/v1/monetized-streams/:monetizedStreamId`. Please see [CreateMonetizedStreamBreak](/theoads/api/signaling/create-monetized-stream-break/).

The body of the post request can have the following properties:

```ts
{
  id: string;
  startDate: string;
  duration: string;
  source: string | undefined;
  layout: string | undefined;
  assetURI: string | undefined;
}
```

- The `id` corresponds to the ID of the DATERANGE which corresponds to the ad break request.
- `startDate` denotes when the ad break should start. It should be in a Program Date Time format such as such as `YYYY-MM-DDThh:mm:ss.SSSZ`.
- `duration` is the total duration of the ad break (seconds).
- `source` is the optional identifier of the source for which the ad needs to be scheduled. The signaling service will only insert the ad for playlists containing part of this in their URL. If not set the ad is scheduled in every playlist.
- `layout` is the optional THEOads layout, which can be set to `SINGLE`, `DOUBLE` or `LSHAPE_AD`. If it is `undefined` the default layout of the signaling service will be chosen.
- `assetURI` is the optional manifest URI of an alternative ad source. If set it will use this URI during the scheduled ad break instead of Google Pod Serving.

An example of a schedule ad break request body can be found below:

```json
{
  "id": "1",
  "startDate": "2024-08-09T07:30:11.274Z",
  "duration": "10",
  "layout": "DOUBLE"
}
```

## More information

- [Enable Novel Ad Experiences](https://www.theoplayer.com/product/theoads/)
