# How to use THEOplayer feature modules

The Web SDK ships every feature as a separate JavaScript module, next to the classic
`theoplayer` and `theoplayer/chromeless` entry points.
Instead of importing the whole package at once, you can import the core player plus exactly
the features your app needs. A bundler then only includes the modules you actually use,
which reduces the download size of your app.

```javascript
import * as THEOplayer from 'theoplayer/core';
import 'theoplayer/dash';

const element = document.querySelector('.theoplayer-container');
const player = new THEOplayer.Player(element, {
  libraryLocation: '/url/to/node_modules/theoplayer/',
  license: 'your_license_string',
});
```

:::warning[Import before constructing a player]
A feature registers itself when its module is imported, and the player reads the
registry when it is constructed. Import every feature module _before_ constructing your
first player — statically, like above. A dynamic `import()` after the player was
created is not supported.
:::

## Base modules

| Import name             | Registers                                    | What you get                                                                                         |
| ----------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `theoplayer/core`       | —                                            | The chromeless player, without any features.                                                         |
| `theoplayer/ui`         | `ui`                                         | The player with the default UI (imports `theoplayer/core` itself). Also add the `ui.css` stylesheet. |
| `theoplayer`            | `ui` + every feature of your package variant | The player with the default UI and all features of your package variant (backward compatible).       |
| `theoplayer/chromeless` | every non-UI feature of your package variant | The chromeless player with all non-UI features of your package variant (backward compatible).        |

All four export the `Player` class and the player API; `theoplayer` and `theoplayer/chromeless` additionally
re-export the named exports (`cast`, `cache`, `MultiViewPlayer`) of the feature modules they enable.
Note that `theoplayer/chromeless` does not enable `ui` or the eight UI-plugin features, even when your package
variant selects them — import `theoplayer/ui` and the UI-plugin modules explicitly in that case.

## Feature modules

Each module below registers the feature listed next to it in `THEOplayer.features`.
Every module requires `theoplayer/core` or `theoplayer/ui`; modules listed under
"Also imports" additionally need that module (it is imported automatically).

| Import name                           | `THEOplayer.features`    | Also imports | Named exports     | Description                      |
| ------------------------------------- | ------------------------ | ------------ | ----------------- | -------------------------------- |
| `theoplayer/hls`                      | `hls`                    |              |                   | HLS playback                     |
| `theoplayer/dash`                     | `dash`                   |              |                   | MPEG-DASH playback               |
| `theoplayer/hesp`                     | `hesp`                   |              |                   | HESP (THEOlive) playback         |
| `theoplayer/millicast`                | `millicast`              |              |                   | Millicast playback               |
| `theoplayer/lcevc-hls`                | `lcevc`                  | `hls`        |                   | MPEG-5 LCEVC on top of HLS       |
| `theoplayer/lcevc-dash`               | `lcevc`                  | `dash`       |                   | MPEG-5 LCEVC on top of DASH      |
| `theoplayer/hbbtv`                    | `hbbtv`                  |              |                   | HbbTV device support             |
| `theoplayer/chromecast`               | `chromecast`             |              | `cast`            | Chromecast sending               |
| `theoplayer/airplay`                  | `airplay`                |              |                   | AirPlay sending                  |
| `theoplayer/vr`                       | `vr`                     |              |                   | 360° and VR playback             |
| `theoplayer/cache`                    | `cache`                  |              | `cache`           | Downloading and offline playback |
| `theoplayer/ads`                      | `ads`                    |              |                   | Client-side advertising (CSAI)   |
| `theoplayer/theoads`                  | `theoads`                |              |                   | OptiView Ads (server-guided ads) |
| `theoplayer/google-dai`               | `google-dai`             |              |                   | Google DAI ad insertion          |
| `theoplayer/freewheel`                | `freewheel`              |              |                   | FreeWheel ad scheduling          |
| `theoplayer/mediatailor`              | `mediatailor`            |              |                   | AWS MediaTailor ad tracking      |
| `theoplayer/spotx`                    | `spotx`                  | `ads`        |                   | SpotX ad serving                 |
| `theoplayer/moat`                     | `moat`                   |              |                   | Moat ad analytics                |
| `theoplayer/streamone`                | `streamone`              |              |                   | StreamOne ad serving             |
| `theoplayer/uplynk`                   | `uplynk`                 |              |                   | Uplynk/Verizon Media SSAI        |
| `theoplayer/youbora`                  | `youbora`                |              |                   | Youbora analytics                |
| `theoplayer/mediamelon`               | `mediamelon`             |              |                   | MediaMelon analytics             |
| `theoplayer/agama`                    | `agama`                  |              |                   | Agama analytics                  |
| `theoplayer/related-content`          | `relatedcontent`         | `ui`         |                   | Related-content overlay          |
| `theoplayer/social-sharing`           | `social`                 | `ui`         |                   | Social sharing overlay           |
| `theoplayer/up-next`                  | `upnext`                 | `ui`         |                   | Up-next countdown                |
| `theoplayer/context-menu`             | `contextmenu`            | `ui`         |                   | Right-click context menu         |
| `theoplayer/text-track-style-ui`      | `texttrackstyle-ui`      | `ui`         |                   | Subtitle styling menu            |
| `theoplayer/active-quality-label`     | `activequalitylabel`     | `ui`         |                   | Quality label on the control bar |
| `theoplayer/upcoming-ad-notification` | `upcomingadnotification` | `ui`         |                   | "Upcoming ad" notification       |
| `theoplayer/multiview`                | `multiview`              | `ui`         | `MultiViewPlayer` | Multi-angle playback             |

### Notes

- The `theoplayer` package (and every npm variant of it) ships all of these modules.
  Your package variant only decides which features `theoplayer` and
  `theoplayer/chromeless` enable by default; it does not limit which modules you can import.
- `theoplayer/uplynk` also covers sources configured for the `verizonmedia` feature.
- The eight UI-plugin modules (the rows whose "Also imports" column says `ui`) need
  `theoplayer/ui` and are not re-exported by `theoplayer/chromeless` — in a custom
  `--features` build without `ui` they are unavailable entirely.
- `theoplayer/cache` can only cache the formats whose module is loaded: import
  `theoplayer/hls` and/or `theoplayer/dash` to cache those streams.
- The type declarations of `theoplayer/core` still list `cast` and `cache` (and those of
  `theoplayer/ui` list `MultiViewPlayer`). At run time they are only defined when the
  corresponding feature module is imported.
- Feature modules only change which code your app loads. The player configuration
  (`license`, `libraryLocation`, ...) is unchanged — `libraryLocation` still needs to
  point at the directory containing the library files so the workers can be loaded.
- Modules whose code is shared with other modules are split automatically by your
  bundler; you never import shared chunks yourself.

## Recipes

### Minimal chromeless DASH player (e.g. smart TV)

```javascript
import * as THEOplayer from 'theoplayer/core';
import 'theoplayer/dash';
import 'theoplayer/hbbtv'; // HbbTV devices only

const element = document.querySelector('.theoplayer-container');
const player = new THEOplayer.Player(element, {
  libraryLocation: '/url/to/node_modules/theoplayer/',
  license: 'your_license_string',
});
```

### Player with the default UI and a plugin

```html
<link rel="stylesheet" href="/url/to/node_modules/theoplayer/ui.css" />
```

```javascript
import * as THEOplayer from 'theoplayer/ui';
import 'theoplayer/hls';
import 'theoplayer/up-next';

const element = document.querySelector('.theoplayer-container');
const player = new THEOplayer.Player(element, {
  libraryLocation: '/url/to/node_modules/theoplayer/',
  license: 'your_license_string',
});
```

### Caching for offline playback

```javascript
import * as THEOplayer from 'theoplayer/core';
import 'theoplayer/dash';
import { cache } from 'theoplayer/cache';
```

The `cache` object exposes the caching API (creating and starting caching tasks).

## See also

- [How to use THEOplayer as a JavaScript module](11-how-to-use-javascript-module.md)
- [Getting started with the Web SDK](00-getting-started.mdx)
