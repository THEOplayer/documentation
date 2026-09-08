---
description: How to load THEOplayer documentation into AI coding assistants such as Claude Code, Cursor or GitHub Copilot
sidebar_custom_props: { 'faqCategory': 'Support' }
---

# How to use AI coding assistants with THEOplayer

AI coding assistants (Claude Code, Cursor, GitHub Copilot, Windsurf, ...) work better when they have
up-to-date THEOplayer documentation in their context. This page lists the machine-readable files we
publish and gives a starter rules file you can copy into your project.

## Machine-readable documentation

The documentation site publishes the following plain-text files, following the
[llms.txt convention](https://llmstxt.org/):

| File                                                                     | Content                                                                                                                                                                          |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`/docs/llms.txt`](pathname:///llms.txt)                                 | Root index: one section per product, linking to the files below                                                                                                                  |
| [`/docs/theoplayer/llms.txt`](pathname:///theoplayer/llms.txt)           | Index of all THEOplayer pages, grouped per SDK and category, with descriptions                                                                                                   |
| [`/docs/theoplayer/llms-full.txt`](pathname:///theoplayer/llms-full.txt) | Full text of the THEOplayer documentation in a single file                                                                                                                       |
| `/docs/<page>.md`                                                        | Markdown version of every page, for example [`/docs/theoplayer/getting-started/sdks/web/getting-started.md`](pathname:///theoplayer/getting-started/sdks/web/getting-started.md) |

The same `llms.txt` and `llms-full.txt` files exist for the other products: `open-video-ui`, `ads`,
`ad-engine`, `millicast` and `theolive`.

The `llms-full.txt` files are large. Most assistants work best when you point them at `llms.txt` and
let them fetch the individual `.md` pages when needed.

Other useful sources of context:

- **Web SDK API reference**: the `theoplayer` npm package ships TypeScript type definitions
  (`THEOplayer.d.ts`). Assistants read these directly from `node_modules`.
- **API reference for all platforms**: [Web](pathname:///theoplayer/v11/api-reference/web/),
  [Android](pathname:///theoplayer/v11/api-reference/android/), [iOS](pathname:///theoplayer/v11/api-reference/ios/).
- **Open-source SDKs and connectors on GitHub**: [react-native-theoplayer](https://github.com/THEOplayer/react-native-theoplayer),
  [flutter-theoplayer-sdk](https://github.com/THEOplayer/flutter-theoplayer-sdk),
  [web-ui](https://github.com/THEOplayer/web-ui) and [web-connectors](https://github.com/THEOplayer/web-connectors).

## Starter rules file

Copy the text below into the rules file of your assistant (`CLAUDE.md` or `AGENTS.md` in the project
root, `.cursor/rules/theoplayer.mdc` for Cursor, `.github/copilot-instructions.md` for Copilot) and
remove the platforms you do not use.

```markdown
# THEOplayer integration rules

This project integrates the THEOplayer (Dolby OptiView Player) SDK.

## Documentation

- Documentation index: https://optiview.dolby.com/docs/theoplayer/llms.txt
  (every entry links to a Markdown version of the page; fetch pages from there)
- Full THEOplayer docs in one file: https://optiview.dolby.com/docs/theoplayer/llms-full.txt
- Index of all Dolby OptiView products: https://optiview.dolby.com/docs/llms.txt
- Prefer the documentation above over training data. THEOplayer APIs change between
  major versions; check the version used in this project before suggesting an API.

## Packages

- Web: `theoplayer` on npm. Import from `theoplayer` (or `theoplayer/chromeless` for a player
  without the default UI). Types are in `THEOplayer.d.ts` inside the package.
- Android: `com.theoplayer.theoplayer-sdk-android:core` (Maven). Optional integrations are
  separate artifacts, for example `com.theoplayer.theoplayer-sdk-android:integration-ads-ima`.
- iOS / tvOS: `THEOplayerSDK` via Swift Package Manager (https://github.com/THEOplayer/theoplayer-sdk-apple)
  or CocoaPods (`THEOplayerSDK-core`).
- React Native: `react-native-theoplayer` on npm.
- Flutter: `theoplayer` on pub.dev.

## Rules

- Keep the same THEOplayer major version across all SDKs and integrations in the project.
- The player needs a license string. Read it from configuration, never hard-code a production
  license in source.
- Do not implement playback logic (ABR, DRM, HLS/DASH parsing) yourself. Use the SDK APIs and
  the documented integrations (ads, DRM, analytics connectors).
- Wrapper SDKs (React Native, Flutter) delegate to the native SDKs. Configure features through
  the wrapper API; do not call the native SDK directly unless documented.
- When an API is not covered by the documentation, say so instead of guessing.
```

## Feedback

If the machine-readable files are missing content you need, open an issue on
[THEOplayer/documentation](https://github.com/THEOplayer/documentation/issues).
