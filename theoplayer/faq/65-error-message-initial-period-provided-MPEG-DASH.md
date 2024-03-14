# What does the error message “Something went wrong determining the initial period of the provided MPEG-DASH stream” mean

This error, "Something went wrong determining the initial period of the provided MPEG-DASH stream", occurs whenever the player struggles to play a DASH stream due to problems determining the availability of the segments for that stream. The recommended solution for this is to make sure that the segments result available, based on the data provided in the manifest, at the time at which the manifest is requested.

## Long Answer

A number of fixes and improvements we made available in several releases throughout 2020 brought THEOplayer to apply the DASH specification regarding segments availability more strictly than in previous versions. In other words, the player now requires, for successful playback, that the manifest indicates correctly the availability of segments. This is especially relevant for dynamic Media Presentations (MPD@type="dynamic").

**How to check whether your segments are available at the right time**
For the segments to be correctly played, they must be available at the time when the manifest is requested/served. In other words,

_“start of segment availability” < “manifest is requested/served” < “end of segment availability”_

How is the segment availability time calculated? The DASH specification indicates that:

> For services with MPD@type='dynamic', the Segment availability start time of a Media Segment is the sum of
>
> - the value of the MPD@availabilityStartTime,
> - the PeriodStart time of the containing Period as defined in 5.3.2.1,
> - the MPD start time of the Media Segment, and
> - the MPD duration of the Media Segment.
>
> […]
> The Segment availability end time of a Media Segment is the sum of the Segment availability start time, the MPD duration of the Media Segment and the value of the attribute @timeShiftBufferDepth for this Representation.
>
> If the @availabilityTimeOffset attribute is present for a Representation, then the adjusted segment availability start time is determined by subtracting the value of @availabilityTimeOffset from the Segment availability start time. This adjusted segment availability start time provides a time instant in wall-clock time at which a Segment becomes an available Segment. Note that if the @availabilityTimeComplete flag is set to true for such a Representation, then the entire Segment may not yet be available at the adjusted segment availability start time.
