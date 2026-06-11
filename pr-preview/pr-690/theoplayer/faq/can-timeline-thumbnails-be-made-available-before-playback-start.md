# Can timeline thumbnails be made available before playback start

Yes, this is possible using the preload feature, provided your timeline is already visible. Both “metadata” and “auto” will be effective values to this end.

If the player on your implementation shows the timeline before playback start (differently than on our demo pages), you may indeed be interested to show the timeline thumbnails, and possibly other data (e.g.: video duration). As explained above, this may be achieved using the preload. Both values “metadata” and “auto” will work for this. The advantage of using “auto” is that also some media files will be buffered, reducing the start-up time. To know more about preload, please visit the linked resources.

In case your timeline is not visible before playback start, however, using preload will have no visible impact on the timeline thumbnails.

## Resources[​](#resources "Direct link to Resources")

The following resources provide more information:

* [Preloading - How to](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/miscellaneous/preloading.md)
* [What are the benefits of preloading?](/documentation/pr-preview/pr-690/theoplayer/faq/what-are-the-benefits-of-preloading.md)
* [PreloadType API reference](/documentation/pr-preview/pr-690/theoplayer/v11/api-reference/web/types/PreloadType.html)
