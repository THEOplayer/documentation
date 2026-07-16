# Dolby OptiView Documentation

The developer documentation website for Dolby OptiView products, including:

- Player (THEOplayer),
- Ads (OptiView Ads),
- Streaming (THEOlive and Millicast)
- Open Video UI

Find the documentation at https://optiview.dolby.com/docs/

## Contributing

If you're looking to contribute to the developer documentation itself, see https://optiview.dolby.com/docs/contributing/

## Usage

1. `npm install` on first usage
2. `git submodule update --init` to install submodules
3. `npm start` to open in dev mode

### Ads API reference

The V2 Ads API reference is generated from the commit-pinned `openapi.json` in
`Dolby-OptiView/optiview-ads`. The generated MDX pages are committed, but the
fetched spec is not. Private GitHub fetches require `ADS_OPENAPI_TOKEN`,
`GITHUB_TOKEN`, or `GH_TOKEN` with `contents:read` access to `optiview-ads`.

To refresh the published contract, update `DEFAULT_SPEC_REF` in
`scripts/fetch-ads-openapi.mjs`, then run:

```bash
npm run refresh-ads-api-docs
npm run build
```

Use `ADS_OPENAPI_REF` to validate another remote commit or branch, or
`ADS_OPENAPI_SPEC_URL=/path/to/openapi.json` for a local checkout.
