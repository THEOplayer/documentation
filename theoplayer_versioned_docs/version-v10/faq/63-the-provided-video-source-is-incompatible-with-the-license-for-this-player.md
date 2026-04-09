# The provided video source is incompatible with the license for this player

The player throws this error when the source of the player is incompatible with the license. This occurs when the domain of the source is not in the list of source domains of the license. For example, when you have **yourfirstcdn.com** and **yoursecondcdn.com** as source domains, but you use a video stream (i.e. source) from **https://yourthirdcdn.com/video.m3u8**, then the player will throw the above error because **yourthirdcdn.com** is not included in the source domains (**yourfirstcdn.com** and **yoursecondcdn.com**).

To resolve this issue you can do the following:

- Use another source which is compatible with your SDK.
- Verify the source domains of your SDK on the [Developer Portal](https://portal.theoplayer.com).
- Change the source domains of your SDK to whitelist all domains.

Additionally, you could see this error on an edge case where you are setting a `source` object with an empty `source` URL but with any other valid URL, such as a `poster`. In this case, since the source object passes a valid URL, the license check would be triggered and the empty array would cause to return this error. To work around this, you could consider setting both the `source` and any other URL contained at the same time or if possible, setting the other URLs outside the source object to avoid license check with an empty source.
