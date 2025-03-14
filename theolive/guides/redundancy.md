---
sidebar_position: 3
---

# Redundancy

With THEOlive we want to make sure your viewers can continue watching your stream, even if there is an ingest failure or if there are connectivity problems in a certain location. It is hence possible to set up a fallback stream. This means that if one stream is unavailable for a short amount of time, the player checks if the fallback stream is available and switches the player source automatically to this stream. In this case, the viewers only see a small interruption and can continue watching without having to act.

**Note:** Setting a fallback is possible on channel and on channel alias level. Example

- Channel A has aliases A1 and A2
- Channel B has aliases B1 and B2

This means

- Channel A can fallback to Channel B, or to one of the aliases of B (B1, B2)
- An alias of channel A (for example alias A1), can fall back to channel B, or one of its aliases (B1, B2)
- Channel B can fall back to channel A, or aliases A1, A2
- An alias of channel B can fall back to channel A, or aliases of it (A1, A2)
- It's not possible for channel A to fall back to an alias of itself (A1, A2), or for an alias to fall back to its parent channel (A1 to A). The same applies for channel B and its aliases.

In what follows, we describe the approach to set a fallback for one channel.

## 1. Create two channels and start them.

You'll need to create two THEOlive channels via the [API](https://developers.theo.live/reference/create-channel) or [management console](https://console.theo.live/). Let's say for example that we h`ave the following channels with fictive IDs:`

- Channel `<channel-in-us-west>` which is located in the `us-west` region
- Channel `<channel-in-us-east>` which is located in the `us-east` region

Don't forget to start both channels. If the fallback stream isn't started, it will be impossible to switch to it when something goes wrong with the primary one!

## 2. Set the `fallback` using the THEOlive API

Assume the channel with ID `<channel-in-us-west>` should have a fallback that links to the `<channel-in-us-east>` channel. To make this work, we need to send a request to the `PATCH https://api.theo.live/channels/<channel-in-us-west>` endpoint to update the settings of `<channel-in-us-west>`. Passing the following JSON body with the request will set the `<channel-in-us-east>` channel as the fallback channel.

```json
{
  "fallback": {
    "src": "<channel-in-us-east>",
    "enabled": true
  }
}
```

This will work as follows:

1. Before starting anything, the player will check if the primary channel has been started (`<channel-in-us-west>` in our case).
2. If the channel is playing, the player will start playing. If the channel has not been started yet, a message will be shown that the live stream isn't started yet.
3. When the primary stream becomes unavailable after a while, the player will check if a fallback is defined and switch to it if possible.
4. If this fallback becomes unavailable after a while, the player will try to switch back to the primary stream.
5. This process will continue to work this way. If both streams are unavailable, the pre-live settings will be shown (an announcement message and optionally a poster image too).
6. When the primary channel is stopped, all players will stop playing (even if the fallback channel is still streaming).

For more information, please visit our [API Reference](https://developers.theo.live/reference/update-channel).

Note that the fallback can also easily be set in our management console on the Channel Details page. Scroll down to the **Playout Configurations** section and select the _Fallback_ tab.

![Setting a fallback through the management console](../assets/img/8d77256-Screenshot_2023-06-28_131652.png)
