---
sidebar_position: 5
---

# Player API details

A basic player API is made available in the THEOlive NPM player:

## Properties

| Property       | Type                      | Description                                                                                                                                   |
| :------------- | :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| muted          | boolean                   | Get or set whether the audio is muted.                                                                                                        |
| paused         | boolean                   | Returns whether the player is paused.                                                                                                         |
| volume         | number                    | Get or set the current volume percentage as a floating point value between 0 and 1. (Not supported on iOS safari due to browser restrictions) |
| presentation   | Presentation \| undefined | Returns the Presentation API. This value is undefined when using the version without UI.                                                      |
| badNetworkMode | boolean                   | Get whether the player is in bad network mode. Setting this value to true enters bad network mode, setting it to false exits it.              |
| videoTracks    | MediaTrackList            | Get the video tracks of the stream. (This list will always contain either no video tracks or exactly one)                                     |

## Methods

| Method                                                                      | Description                                                                                                                                                                                                                         |
| :-------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| play(): void                                                                | Start or resume playback.                                                                                                                                                                                                           |
| pause(): void                                                               | Pause playback.                                                                                                                                                                                                                     |
| destroy(): void                                                             | Destroy the player. This stops playback and releases all resources associated with this player.                                                                                                                                     |
| loadChannel(channelId: string, config?: LoadConfiguration): `Promise<void>` | Load a channel. <br /> _channelId_: The id of the channel to load. <br /> _config_: The configuration for loading the channel. (available from v3.1.0) This will always result in either a channelloaded or a channeloffline event. |
| preloadChannels(channelIds: string[]): `Promise<void>`                      | Fetch the metadata of a list of THEOlive channels. This API method is used for smooth zapping so all channel metadata is loaded up front.                                                                                           |
| addEventListener(type: string, listener: (event: Event) => void)            | Add a event listener for the given event type.                                                                                                                                                                                      |
| removeEventListener(type: string, listener: (event: Event) => void)         | Remove a previously registered event listener.                                                                                                                                                                                      |

## Events

| Event name          | Description                                                                                                                                                                                                                                                                       |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| play                | Fired when the player is no longer paused, when play() is called or autoplay is enabled.                                                                                                                                                                                          |
| pause               | Fired when the player is paused, when pause() is called.                                                                                                                                                                                                                          |
| playing             | Fired when the player is not paused and starts progressing playback, so initially when the player starts or when the player recovers from a stall.                                                                                                                                |
| waiting             | Fired when the player is not paused but stops progressing, when the buffer is empty.                                                                                                                                                                                              |
| volumechange        | Fired when either the volume or the muted property changes. (Not supported on iOS safari due to browser restrictions)                                                                                                                                                             |
| channelloaded       | Fired when the player has loaded a channel.                                                                                                                                                                                                                                       |
| channeloffline      | Fired when the player tried to load a channel but it wasn't able to start playback. Common use cases are that the channel is still starting up or it isn't receiving any ingest. As the player automatically retries to load the channel, this event might be fired periodically. |
| intenttofallback    | Fired when the player notices its channel is not in a healthy state. When a fallback channel is configured, the player will automatically fallback to that channel. Expert users can listen to this event to have full control over how to fallback to an alternative.            |
| error               | Fired when the player enters a state from which it cannot recover without a new loadChannel call.                                                                                                                                                                                 |
| enterbadnetworkmode | Fired when the player enters bad network mode.                                                                                                                                                                                                                                    |
| exitbadnetworkmode  | Fired when the player exits bad network mode.                                                                                                                                                                                                                                     |
| adbegin             | Fired when an ad begins.                                                                                                                                                                                                                                                          |
| adend               | Fired when an ad ends.                                                                                                                                                                                                                                                            |
| adbreakbegin        | Fired when an ad break begins.                                                                                                                                                                                                                                                    |
| adbreakend          | Fired when an ad break ends.                                                                                                                                                                                                                                                      |
| adskip              | Fired when an ad is skipped.                                                                                                                                                                                                                                                      |
| aderror             | Fired when an ad errors.                                                                                                                                                                                                                                                          |

### Presentation API

| Property / Method  | Return type              | Description                                                   |
| :----------------- | :----------------------- | :------------------------------------------------------------ |
| currentMode        | 'fullscreen' \| 'inline' | Returns the current presentation mode.                        |
| requestMode(mode)  | void                     | Set the mode to 'fullscreen' or 'inline'.                     |
| supportsMode(mode) | boolean                  | Returns whether the current platform supports the given mode. |

### LoadConfiguration

| Property                    | Return type      | Description                    |
| :-------------------------- | :--------------- | :----------------------------- |
| adsConfiguration (optional) | AdsConfiguration | The pre-roll ad configuration. |

### AdsConfiguration

| Property                         | Return type     | Description                                                                                                                              |
| :------------------------------- | :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| ads                              | AdDescription[] | The list of ads to play before the stream loads.                                                                                         |
| blockContentIfAdError (optional) | boolean         | Whether the player should be blocked when an ad-related error occurs. <br /> <br /> **Warning**: A blocked player is not usable anymore. |

### AdDescription

| Property        | Return type                  | Description                 |
| :-------------- | :--------------------------- | :-------------------------- |
| source          | string                       | The URL of the ad resource. |
| type (optional) | 'vast' \| 'vmap' \| 'adrule' | The type of ad resource.    |

### MediaTrackList events

| Name        | Description                                         |
| :---------- | :-------------------------------------------------- |
| addtrack    | Fired when a new track is added to the track list.  |
| removetrack | Fired when a track was removed from the track list. |

### MediaTrack

| Property      | Type      | Description                   |
| :------------ | :-------- | :---------------------------- |
| id            | string    | An id identifying the track   |
| uid           | number    | A uuid identifying the track  |
| activeQuality | Quality   | The currently playing quality |
| qualities     | Quality[] | All qualities in this track   |

### Quality

| Property         | Type                | Description                                                                       |
| :--------------- | :------------------ | :-------------------------------------------------------------------------------- |
| id               | string              | An id identifying this quality                                                    |
| uuid             | number              | A uuid identifying this quality                                                   |
| bandwidth        | number              | The peak bandwidth needed to play this quality as defined in the HESP manifest    |
| averageBandwidth | number \| undefined | The average bandwidth needed to play this quality as defined in the HESP manifest |
