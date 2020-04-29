# Server Side Ad Insertion

If you are a content distributor you know how difficult it is to properly monetize content. While content acquisition can be expensive, more and more users are looking for ways to access premium content for free.

When content creators and providers offer easy access to content with advertisements, users will often go one step further and install an ad-blocker which cancels out any client-side advertising. As a result the monetization of the content is offset and providers will no longer be able to cover costs.

Luckily, the design of adaptive streaming protocols allows for a solution.

## Server-Side Ad Insertion
An HLS or MPEG-DASH stream consists of a long chain of separate segments. Server-Side Ad Insertion (SSAI) is a simple concept wherein advertising content is injected into this stream of segments. This creates an experience much like traditional broadcasting, with the additional benefit that the injected advertising content can be personalized down to a single-user level. As a client can no longer make the distinction between content and advertisement download call, these calls cannot be blocked by ad blockers.

A fully-fledged SSAI system will also contain obfuscation and transcoding services that together will make your content more secure and more stable in playback. As a result, SSAI creates a solution very much like a traditional broadcasting experience. Additionally a number of modern information and advertisement technologies is leveraged to further increase its efficiency in monetizing content.

### Dynamic Ad Insertion
While often used as an interchangeable term for Server-Side Ad Injection, Dynamic Ad Insertion (DAI) actually refers to the ability to dynamically customize the advertising content that is stitched into the stream. While people around the world could be watching the same sports event, it makes very little sense to show each viewer the same advertisement. Targeted ads are much more powerful and Dynamic Ad Insertion allows you to do exactly that.

On top of that, Dynamic Ad Insertion allows you to update advertisements. If someone's looking at a live show from four years ago, advertising a four-year-old promotion on cat food at your favourite supermarket chain would not be very effective.

### Live vs Video on demand
When we look at live and video on demand, leveraging the full power of SSAI requires us to look at the differences between the use cases.

Starting from a video on demand stream without advertisements, SSAI can easily stitch in relevant advertisements for the user that requested the video stream. Since it is a video on demand, the length of the manifest can change to accommodate any ad that is injected.

Using SSAI in live streams poses a slightly more difficult use case, in the sense that simply injecting an ad in between segments in a live stream would lengthen the manifest. As a result, for a live stream to be used with SSAI, ad breaks will need to be defined, so that the server knows where it is supposed to stitch in the ads. On top of that the length of ads and ad breaks will need to be matched, whereas for a VOD this is not necessary.

The final use case to look at is a recorded live stream that is made available as a video on demand. At first glance it might look like the ad injection process would be the same as the previous use case. However, matching the ad and ad break length is not a hard requirement, as the length of the manifest is not as strict in the VOD use case.

### THEOplayer and SSAI
There are a number of solutions in the market that provide SSAI and DAI services. As a market leader in video playback, THEOplayer has chosen to integrate with a number of different partners in the market of SSAI and DAI. These integrations provide a world-class solution with modern advertisement mechanics that allow you to monetize your content successfully.