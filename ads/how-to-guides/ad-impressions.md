---
sidebar_position: 2
---

# Ad impression tracking

An ad impression is counted for every ad break that is presented to a viewer with OptiView Ads. The impression is recorded when the break starts playing — the moment the player fires its **ad break begin** event — so a break that is scheduled but never shown to a viewer does not count as an impression.

## How impressions are tracked

When a break begins, the OptiView Ads SDK reports the impression through CMCD (Common Media Client Data) events. These events carry the **channel information** and the **break ID**, which is how OptiView Ads identifies that a specific break on a specific channel was presented to a viewer.

No personal information about your viewers is collected for impression tracking — only the identifiers needed to attribute the impression to your channel and break.

## View your impression usage

You can view your impression usage in the OptiView unified dashboard under the **Impressions** tab. There you can see:

- your total number of ad impressions over a selected time range,
- how impressions trend over time, so you can correlate spikes with your programming,
- a breakdown per channel, showing which channels drive your impression volume.

## Related resources

| Resource                                              | Description                                        |
| ----------------------------------------------------- | -------------------------------------------------- |
| [Breaks](../concepts/breaks.mdx)                      | The break lifecycle and configuration.             |
| [Events](../concepts/events.mdx)                      | Grouping breaks under an event.                    |
| [Player integration](../player-integration/index.mdx) | Integrating the OptiView Ads SDK with your player. |
