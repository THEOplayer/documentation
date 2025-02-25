---
sidebar_position: 3
---

# UI Customization

The UI tries to cover the most common use cases however for advanced use cases we recommend using the version without UI and creating a custom UI yourself. However, if the default UI is almost sufficient and you just need a few small adaptations we offer some options.

## Theming

By default the player will use a black and white color scheme with yellow as accent color. You can change these colors using the API or the console. You can find more information [here](../../playout-configuration/customize-theolive-player.md).

## Hiding / Customizing elements

The player uses web components to build its UI. This ensures no CSS is leaked on your page but provides a bit less flexibility when it comes to styling. It is still easy to remove a component for example.

To hide the play/pause button you can use:

```Text css
theo-live::part(play-button) {
  display: none;
}
```

The parts you can style like this are:

- logo
- announcement
- watermark
- loading-indicator
- center-play-button
- play-button
- mute-button
- volume-range
- live-button
- quality-button
- fullscreen-button
- error-display
