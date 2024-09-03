# Signaling breaks

THEOads is able to insert ad breaks into your content, but it needs some information for this.
On this page we will go over the multiple break scheduling possibilities.

:::note
Currently only HLS streams are supported. In the future DASH and HESP streams will also be supported.
:::

## Through the manifest

There are multiple ways on how to provide the general ad break information in the manifest itself.
In this section we'll go through the different options and the minimal requirements.

### Requirements

For HLS live streams, we require qn `#EXT-X-PROGRAM-DATE-TIME` tag to be present. 
This is necessary to have a clear timeline for each viewer and allows accurate scheduling of the ad breaks.

### Manifest scheduling

As mentioned it is possible to schedule the start time and duration of the ad breaks inside of the manifest.
The signaling service will recognize this information and will translate it so that the player can request the correct ads and layout for the ad break.

There are several options on achieving this:

#### DATERANGE

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

#### CUE-OUT 

Inside of the manifest the ad break start can be signaled by adding an `#EXT-X-CUE-OUT` tag. 
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

## Through the signaling service

If the ad information won't be present in the provided manifest, it is possible to schedule one through the signaling service API.

This can be done by a POST request to `{path}/schedule-ad-break` where path is the usual url to interact with the signaling service: `signaling-service-url/stream-id`.

The body of the post request can have the following properties:

```ts
{
    id: string;
    startDate: string;
    duration: string;
    source: string | undefined;
    layout: string | undefined;
}
```

- The `id` corresponds to the ID of the DATERANGE which corresponds to the ad break request.
- `startDate` denotes when the ad break should start. It should be in a Program Date Time format such as such as `YYYY-MM-DDThh:mm:ss.SSSZ`.
- `duration` is the total duration of the ad break.
- `source` is optional. In case multiple streams use the same signaling service you can specify part of the stream base uri here. In this case only for the specified stream the ad will be inserted. If it is undefined the ad will be scheduled for all streams that use the signaling service.
- `layout` is the optional THEOads layout, which can be set to `SINGLE`, `DOUBLE` or `LSHAPE_AD`.

An example of such a schedule ad break request body can be found below:

```json
{
    "id": "1",
    "startDate": "2024-08-09T07:30:11.274Z",
    "duration": "10",
    "source": "https://cdn.theoplayer.com/video/big_buck_bunny/",
    "layout": "DOUBLE"
}
```