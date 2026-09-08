---
sidebar_position: 4
---

# Variant selection

Not every device can render every ad experience: a Double Box needs two simultaneous video streams, an L-shape needs room to scale the content down, and a phone screen is better served by a plain fullscreen ad. With **variants**, a single break carries multiple ad experiences, and the player selects the one that fits the device it runs on — you schedule one break, and every viewer gets an experience their device supports.

## Available formats

A variant's `format` determines how the ad and your content share the screen:

| Format          | `format`         | Description                                                         |
| --------------- | ---------------- | ------------------------------------------------------------------- |
| Single          | `single`         | The ad replaces the content fullscreen.                             |
| Double Box      | `double`         | Content and ad side by side over a companion backdrop.              |
| L-shape ad      | `lshape_ad`      | The ad scales into a corner over a companion backdrop.              |
| L-shape content | `lshape_content` | Your content scales into a corner over a companion backdrop.        |
| Overlay         | `overlay`        | An overlay is rendered on top of your content, which keeps playing. |

See [Layouts](../concepts/breaks.mdx#layouts) for a visual overview of each format.

## Provide a preferred and a fallback variant

Set the break's `variant` to a **list** to offer multiple experiences. Each variant can carry a `targeting.deviceType` (`desktop`, `tablet`, `mobile`, or `tv`); a variant without `targeting` is a **default** that matches any device. The player walks the list in order and renders the first variant it matches and supports, so put your preferred experience first and a broadly supported fallback last:

```json
{
  "duration": 30,
  "variant": [
    {
      "format": "double",
      "targeting": { "deviceType": "desktop" },
      "assets": [
        {
          "type": "static",
          "mediaType": "video",
          "uri": "https://cdn.example.com/ads/desktop.m3u8",
          "companion": {
            "type": "static",
            "mediaType": "image",
            "uri": "https://cdn.example.com/ads/desktop-backdrop.jpg"
          }
        }
      ]
    },
    {
      "format": "single",
      "assets": [
        {
          "type": "static",
          "mediaType": "video",
          "uri": "https://cdn.example.com/ads/default.m3u8"
        }
      ]
    }
  ]
}
```

With this break, a desktop viewer gets the Double Box experience, while every other device — including Smart TVs that cannot render two video streams at once — falls back to the fullscreen Single ad.

The ordering also resolves ties: when multiple variants target the same device, or multiple defaults exist, the earlier one wins if the player can render it; otherwise the player falls through to the next. See [Variants](../concepts/breaks.mdx#variants) for the full selection rules.

## Verify the selection

Schedule a break with your variant list through the API or the dashboard, and play the channel on the devices you target. Each device should render the first variant in the list that matches it — if a device unexpectedly falls back, check that the variant's `targeting.deviceType` matches the device and that the device supports the format.

## Related resources

| Resource                                              | Description                                     |
| ----------------------------------------------------- | ----------------------------------------------- |
| [Breaks](../concepts/breaks.mdx)                      | Break configuration, layouts, and variants.     |
| [Create backdrop images](./create-backdrop-layout.md) | Designing backdrops for the advanced layouts.   |
| [Player integration](../player-integration/index.mdx) | Integrating a player that renders the variants. |
