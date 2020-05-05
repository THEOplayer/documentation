# Can clipping be used on a playlist

Yes. This is in principle not different than using it on a single video: a startTime and an endTime must be given for each video and applied when the video is loaded/played.

Let’s expand slightly the idea. You can have 2 use cases:


- The same start and end time can be used for all contents.
- Each content has a different start and end time.


## The same start and end time can be used for all contents

In this case, you can apply the Clip API without any further precaution or modification. You can find an example at the page Video Clipping in 2.X. Please remember to make sure that clipping happens after the source is set (e.g.: use a durationchange event).


## Each content has a different start and end time.

In this case, some adjustment is needed to be able to provide and read the right custom start and end time for each content. One possible way to do it is to simply pass such data together with the source data and read it directly from there when clipping the video, like in the example below.

```js
// an array is provided, containing multiple player.source. Each source contains startTime and endTime.
var playlist = [
  {
    "source": {
      "sources": {
        "src": "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8",
        "startTime" : 100,
        "endTime" : 150
      },
    "title": "Big Buck Bunny",
    "description": "Big Buck Bunny",
    "poster": "https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg",
    }
  },
  {
    "source": {
      "sources": {
        "src": "https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",
        "startTime" : 120,
        "endTime" : 180
      },
    "title": "Star Wars Reel",
    "description": "Star Wars Reel",
    "poster": "https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/poster.jpg",
    }
  },
  {
    "source": {
      "sources": {
        "src": "https://cdn.theoplayer.com/video/tears_of_steel/index.m3u8",
        "startTime" : 50,
        "endTime" : 150
      }
   "title": "Tears of Steel",
    "description": "Tears of Steel",
    "poster": "https://cdn.theoplayer.com/video/tears_of_steel/poster.jpg",
 }   
  }
];

// the desired source is set in the player - 
// this is not reported here as it depends on your implementation, 
// but an example can be seen in the resources linked below.
// For the purpose of this example 
// player.source = playlist[0];

// the following lines make sure that 
// when the first playing event is fired for each (new) content
// clipping times are read from directly within the player.source

function firstplaying(){
player.clip.startTime = player.source.sources.startTime; 
player.clip.endTime = player.source.sources.endTime;
 THEOplayer.players[0].removeEventListener('durationchange', firstplaying);
}

THEOplayer.players[0].addEventListener('sourcechange', function() {  
    THEOplayer.players[0].removeEventListener('durationchange', firstplaying);
    THEOplayer.players[0].addEventListener('durationchange', firstplaying);
});
```

Notes:

- In this example, we are only describing how to apply the clipping, not how to play a playlist. For this, please consult the linked resources.
- The example is provided only in Javascript because clipping is currently available only for the Javascript SDK. It may be used also in other SDKs through Javascript injection.


## Resources
The following resources provide more information:

https://docs.portal.theoplayer.com/api-reference/web/theoplayer-clip/: API reference - Clip API


https://support.theoplayer.com/hc/en-us/articles/206773139-Video-Clipping-in-2-X: Video clipping in THEOplayer 2.X

https://demo.theoplayer.com/playlist: Demo page - Playlist

Clipping: How-to guide - Clipping