# What is an impression

This article explains what an impression is and how THEOplayer calculates impressions.

THEOplayer will count an impression when the video or audio source is being played for the first time by our SDK. This can be triggered by a user clicking the Play button, or by playing the video automatically (autoplay). When you pause, play or seek within the same video or audio source, it still will be counted as only one impression. If a user refreshes the page or reloads the application, a second impression will be counted. If the content contains ads, these will not be counted towards the impression count. Except when the content only contains ads, then these will be counted towards the impression count.

As an example, if you start a video, pause the video and then resume again it is only considered one impression. If on the other hand you start a video and then refresh your browser, or reload your application, it would be considered 2 impressions.
