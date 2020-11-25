# Video Clipping

THEOplayer supports playing only a selected part of a video-on-demand stream, rather than playing it from start to finish. This can be used for example to watch a single game-changing event from a sports match, highlight an important part of a long video presentation, or skip straight to the best part of a song's video clip.

## API

The start and end of the clipping window can be controlled through the [Clip API](https://docs.theoplayer.com/api-reference/web/theoplayer.clip.md):

- `startTime` and `endTime`, expressed in seconds

These properties are optional, and you don't need to specify both `startTime` and `endTime`. For example, you can set just `startTime = 30` to have the video start at 30 seconds and play the rest of the video normally.

## Basic setup

The following example shows a video clipped to start at 30 seconds and end at 60 seconds.

```js
var player = ...;
player.source = {
    sources : [{
     src : '//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8', // sets HLS source
     type : 'application/x-mpegurl' // sets type to HLS
    }],
  poster: '//cdn.theoplayer.com/video/big_buck_bunny/poster.jpg'
    };

player.clip.startTime = 30;
player.clip.endTime = 60;
```
