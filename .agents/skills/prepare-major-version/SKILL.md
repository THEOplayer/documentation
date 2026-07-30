---
name: prepare-major-version
description: Prepare the THEOplayer documentation for a new major version (snapshot current docs as a versioned copy, prepare /theoplayer for the next major)
argument-hint: "[new major version, e.g. v12]"
triggers:
  - user
  - model
---

# Prepare documentation for a new THEOplayer major version

This skill prepares the docs for a new THEOplayer major release. It moves the
current docs in `/theoplayer` to `/theoplayer_versioned_docs/version-v<OLD>`,
and prepares `/theoplayer` to become the docs for the new major version.

Reference PRs (use them if in doubt about any step):

- v11: https://github.com/THEOplayer/documentation/pull/576
- v10: https://github.com/THEOplayer/documentation/pull/407

## Determine versions

- `OLD` = the major version of `theoplayer/version.txt` (e.g. `11` if it contains `11.7.0`).
- `NEW` = `OLD + 1`, or the version given as `$ARGUMENTS` (e.g. `v12`).

Work on a new branch named `theoplayer-v<NEW>`.

Make **one commit per step below**, using the step title as the commit message.
This keeps the PR reviewable, exactly like the reference PRs.

## Step 1: `npm run docusaurus docs:version:theoplayer v<OLD>`

Run exactly that command. It copies `theoplayer/` to
`theoplayer_versioned_docs/version-v<OLD>/`, creates
`theoplayer_versioned_sidebars/version-v<OLD>-sidebars.json`, and adds `v<OLD>`
to `theoplayer_versions.json`.

The command copies **everything** inside `theoplayer/`, including `assets/`,
`external/` and `static/`. **Delete those three directories** from
`theoplayer_versioned_docs/version-v<OLD>/` before committing, so no extra
files are created that would need to be deleted again in a subsequent commit:

- `assets/` and `static/` stay shared with the current docs (relative links
  into them are fixed in step 5).
- `external/` contains plain-file copies of the submodule checkouts; it is
  re-added as proper git submodules in step 2.

Commit with the literal command as the message: `npm run docusaurus docs:version:theoplayer v<OLD>`.

## Step 2: Add submodules for v<OLD>

The versioning command does **not** copy the `external/` submodules. Add new
entries to `.gitmodules` for each submodule under `theoplayer/external/`,
following the exact pattern of the existing `-v<OLD-1>` entries:

| Submodule name | Path under `theoplayer_versioned_docs/version-v<OLD>/external/` | Branch |
| --- | --- | --- |
| `react-native-v<OLD>` | `react-native-theoplayer` | `<OLD>.x` |
| `flutter-v<OLD>` | `flutter-theoplayer-sdk` | `<OLD>.x` |
| `web-connectors-v<OLD>` | `web-connectors` | `main` |
| `android-connector-v<OLD>` | `android-connector` | `<OLD>.x` |
| `ios-connector-v<OLD>` | `iOS-Connector` | `<OLD>.x` |
| `react-native-connectors-v<OLD>` | `react-native-connectors` | `main` |

All new entries must have `shallow = true`. Use the same URL as the
corresponding current-version submodule. Verify the `<OLD>.x` branches actually
exist in the upstream repos (`git ls-remote --heads <url> "<OLD>.x"`); if a
branch doesn't exist yet, ask how to proceed and flag it in the PR
description. Then initialize them:

```
git submodule update --init --depth 1 -- theoplayer_versioned_docs/version-v<OLD>/external
```

## Step 3: Update config for v<OLD>

In `docusaurus.config.ts`, in the `theoplayer` docs plugin:

- Add `'v<OLD>'` to the non-production `onlyIncludeVersions` list (after `'current'`).
- Add a `v<OLD>` entry to `versions` (before `v<OLD-1>`):
  ```ts
  v<OLD>: {
    label: fs.readFileSync(path.join(__dirname, 'theoplayer_versioned_docs/version-v<OLD>/version.txt'), 'utf8').trim(),
    banner: 'none',
    noIndex: true,
  },
  ```
- Change the `v<OLD-1>` entry's `banner` from `'none'` to `'unmaintained'`.

## Step 4: Make v<OLD> the latest version

Until the new major is actually released, `v<OLD>` must stay the "latest"
(default) version in production. In the `theoplayer` plugin config, change:

```ts
lastVersion: 'current',
```

to:

```ts
lastVersion: 'v<OLD>',
includeCurrentVersion: !isProductionDeployment,
```

Since the current version is now excluded from production builds, the
`current` entry in the `versions` map must also be conditional, otherwise a
production build fails with `unknown versions (current) found`:

```ts
versions: {
  ...(!isProductionDeployment && {
    current: {
      label: fs.readFileSync(path.join(__dirname, 'theoplayer/version.txt'), 'utf8').trim(),
    },
  }),
  // ...
},
```

Verify with a production-mode build (`docusaurus build` sets
`NODE_ENV=production`; CI PR builds set `DOCUSAURUS_PR_NUMBER` which makes
`isProductionDeployment` false).

This commit is **reverted at the end** of the PR (see step 12), right before
the new major version ships. If the PR will only be merged when v<NEW> is
released, still make this commit and its revert, so it can be cherry-picked if
plans change.

## Step 5: Fix asset links

The `theoplayer/assets/` directory is not copied into the versioned docs.
In `theoplayer_versioned_docs/version-v<OLD>/`, links like:

```
../assets/img/foo.png
```

must be rewritten to point at the current docs' assets, adding the extra
directory levels:

```
../../../theoplayer/assets/img/foo.png
```

Search for `assets/` in the new versioned docs and fix every relative link
that resolves to a non-existent path (the number of `../` segments depends on
the depth of the referencing file).

## Step 6: Copy THEOplayer examples to v<NEW>

- Copy `theoplayer/static/theoplayer/v<OLD>/examples/` to `theoplayer/static/theoplayer/v<NEW>/examples/`.
  Copy **only** the `examples/` subfolder — the rest of
  `theoplayer/static/theoplayer/v<OLD>/` (e.g. `api-reference/`) is large
  generated content that must not be duplicated.
- In `theoplayer/examples/*.mdx`, update iframe URLs from `/theoplayer/v<OLD>/examples/...` to `/theoplayer/v<NEW>/examples/...`.

The versioned docs (`version-v<OLD>/examples/`) keep pointing at the v<OLD> examples.

## Step 7: Fix links to versioned docs

In `theoplayer_versioned_docs/version-v<OLD>/`, links into *other* versioned
docs that were written from the perspective of `theoplayer/` no longer resolve.
Rewrite paths like:

```
../../theoplayer_versioned_docs/version-v4/faq/foo.md
```

to relative paths within the versioned docs tree:

```
../../version-v4/faq/foo.md
```

Keep the **same number** of `../` segments and only remove the
`theoplayer_versioned_docs/` segment: the versioned copy lives one directory
deeper than `theoplayer/`, which exactly compensates for the removed segment.

Also fix any links from the versioned docs to files that only exist in the
current docs. Run a local build (step 11) to find all broken links.

## Step 8: Update links to API references for version <NEW>

In the **current** docs (`theoplayer/`), update API reference links:

- `pathname:///theoplayer/v<OLD>/api-reference/...` → `pathname:///theoplayer/v<NEW>/api-reference/...`

Only change files under `theoplayer/`, not the versioned docs. Note: these
links will 404 until the v<NEW> API reference is published; that's expected,
since this PR only merges when v<NEW> ships.

After the release, also update `sidebarsTheoplayer.ts` (`apiReferencesLink`
hrefs) and API links in the other doc trees (`ads/`, `millicast/`, `theolive/`)
that point to `/theoplayer/v<OLD>/api-reference/`.

## Step 9: Update version for v<NEW>

Set `theoplayer/version.txt` to `<NEW>.0.0`.

## Step 10: Migration guides

1. **Move** (git mv, preserving numeric prefixes) the migration guides in the
   current docs, renaming `<OLD>` to `<NEW>`:
   - `theoplayer/getting-started/01-sdks/01-web/13-migrating-to-theoplayer-<NEW>.md`
   - `theoplayer/getting-started/01-sdks/02-android/03-migrating-to-theoplayer-<NEW>.md`
   - `theoplayer/getting-started/01-sdks/03-ios/03-migrating-to-theoplayer-<NEW>.md`
   - `theoplayer/getting-started/01-sdks/09-roku/01-migrating-to-theoplayer-<NEW>.md`

   Commit as "Move migration guides".

2. **Prepare** each guide as a template for the new version, as a separate
   "Prepare migration guides" commit:
   - Update the title and intro: "Migrating to THEOplayer <Platform> SDK <NEW>.x",
     "...updating from THEOplayer <Platform> SDK version <NEW> (from version <OLD>)".
   - Bump install snippets (`npm install theoplayer@<NEW>`,
     `com.theoplayer.theoplayer-sdk-android:core:<NEW>.+`, etc.).
   - **Remove** all breaking-change sections specific to the old major, keeping
     only the generic "Update THEOplayer" and empty "Replace usages of
     deprecated APIs" skeleton. The real breaking changes are added later by
     each platform team before release.
   - Keep the structure/wording aligned across the four platform guides.

3. Check for any older versioned docs (e.g. v4) that link to "latest version"
   migration guides and update them.

## Step 11: Update metadata for v<OLD> changelog, run Prettier, verify

- Retitle `theoplayer_versioned_docs/version-v<OLD>/changelog.md` from
  `# Changelog` (with the "release notes for ... and higher" intro) to:

  ```md
  # Changelog for version <OLD>.x

  <head>
    <meta name="robots" content="index, follow" />
  </head>
  ```

- Update the intro list in `theoplayer/changelog.md` to say "release notes for
  THEOplayer <NEW>.0.0 and higher" and add a link line for
  `[Version <OLD>.x](https://optiview.dolby.com/docs/theoplayer/v<OLD>/changelog/)`.
- Run Prettier over the changed files (`npx prettier --write .`), commit as "Run Prettier".
- Verify with `npm run build`; the build fails on broken links — fix any
  reported in `theoplayer/` or `version-v<OLD>/` (add "Fix link" commits).

## Step 12: When v<NEW> is released (before merging the PR)

- Revert the "Make v<OLD> the latest version" commit (step 4), i.e. restore
  `lastVersion: 'current'`, remove `includeCurrentVersion`, and make the
  `current` entry in `versions` unconditional again. Commit as
  "Make v<NEW> the latest version".
- Merge the v<NEW>.0.0 release-notes PR (created by the bot) into this branch,
  and update both changelogs so the `<NEW>.0.0` entry only lives in
  `theoplayer/changelog.md` and the v<OLD> changelog stays at `<OLD>.x`.
- Update `sidebarsTheoplayer.ts` API reference links and remaining
  `/theoplayer/v<OLD>/api-reference/` links in other doc trees to `v<NEW>`
  (see step 8).
- **Fix links to the v<OLD> migration guides**: the `<OLD>.0` release notes in
  both `theoplayer/changelog.md` and
  `theoplayer_versioned_docs/version-v<OLD>/changelog.md` link to the
  migration guides; point them at the versioned docs, e.g.
  `/theoplayer/getting-started/sdks/web/migrating-to-theoplayer-<OLD>/` →
  `/theoplayer/v<OLD>/getting-started/sdks/web/migrating-to-theoplayer-<OLD>/`.
  This must happen **after** the flip to `lastVersion: 'current'` — while
  v<OLD> is still the latest version, its docs are served at `/theoplayer/`
  without the `/v<OLD>/` prefix, so these links would break the build.
- Ensure the platform teams have filled in the migration guides (Web, Android,
  iOS, Roku) with the real breaking changes.

## PR description

Use the same summary as the reference PRs:

> This PR moves the v<OLD> docs to `/theoplayer_versioned_docs/version-v<OLD>`,
> and prepares `/theoplayer` to contain the v<NEW> docs.
