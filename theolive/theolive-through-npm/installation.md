---
sidebar_position: 2
---

# Installation

The package to install is available at `https://www.npmjs.com/package/@theolive/player`.

Install using your favorite package manager for Node (such as npm or yarn):

```shell
npm install @theolive/player
```

:::warning 🚧 Don't forget to make regular updates!

Using NPM means that you will need to host the .js files yourself, and periodically update these to the latest version. These updates are automatically made available when using the embed script.
:::

## Files

**THEOLive.js**  
This is the main Javascript file containing the logic to create a player and load a channel. This version contains the THEOlive UI.

**THEOLive.chromeless.js**  
The same as THEOLive.js but without a UI. Use this version if you want to build a custom UI.

**THEOLive.sw.js**  
This is a Service Worker that allows playback of THEOlive streams on iOS Safari. It is important that this file is hosted on the same domain as the webpage over https.

:::warning 🚧 Service worker deployment

In order to use THEOlive on any iOS Browser, we need the THEOlive serviceworker to be active. This implies the following rules :

- HTTPS is required
- The THEOLive.sw.js file needs to be on the same domain and path as the page initiating the player
  :::

## Typescript support

There is no separate typings package, the typings are part of the npm package. Since the version with and without ui are two separate entry points, we use the exports feature.

This way, the version with ui can be imported like:

```typescript
import { Player } from '@theolive/player';
```

And the version without ui:

```typescript
import { Player } from '@theolive/player/chromeless';
```

For this feature to work, ensure the `moduleResolution` in your `tsconfig.json` is set to `node16` or higher.
