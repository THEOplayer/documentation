# What are the player seeking and seeked events and when are they fired

They are events related to the playback of media files. `seeking` is fired when the user starts seeking/moving to a new position. `seeked` is fired when the user is finished seeking/moving to a new position and the player has buffered a video portion, being therefore ready to play.

The player `seeking` and `seeked` events are not to be confused with the homonym `<video>` element events, although they mainly coincide in meaning and occurrence. In this regard, in THEOplayer you find both the player events and the video events.

_Seeking_ and _scrubbing_ are not considered equal in THEOplayer. _Seeking_ is the action of starting to move to a new position and it has the corresponding `seeking` event. _Scrubbing_ is the action to keep seeking to new positions while maintaining `mousedown` for a prolonged time. It has no corresponding event. Scrubbing can contain multiple seeking actions. While the viewer is scrubbing, the CSS class `vjs-scrubbing` is added on the `.theoplayer-container` element.

In other words, if the viewer does not seek directly to a new position with one click (`mousedown` and `mouseup`) but scrubs on the timeline instead, multiple `seeking` and `seeked` events may be fired. This is due to the not uniform movement while scrubbing. For example, if the pointer stays briefly in the same position while scrubbing and then resumes its motion, multiple `seeking` events may be thrown, as this is interpreted as different seeking actions. Even during scrubbing, if the pointer is temporarily staying in the same position, the player will try to buffer the corresponding video portion. If enough video is buffered and playback could start from that position, the `seeked` event will also be thrown at that moment, although the user may still be scrubbing.

## Remarks

The player events and `<video>` element events `seeking` and `seeked` should behave similarly, be fired on the same occasions and the same number of times. If they don’t, please report it in a ticket in our Service Desk.

## Resources

The following resources provide more information:

- https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events: MDN reference
- [Player API reference](pathname:///theoplayer/v9/api-reference/web/classes/Player.html)
