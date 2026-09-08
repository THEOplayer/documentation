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

The V2 Ads API reference is generated from the public OpenAPI document served
by the Ads API (`https://us.ads.optiview.dolby.com/api/v1/docs/json`). The
generated MDX pages are committed, but the fetched spec is not.

The reference is kept in sync by the `update-ads-api-docs` workflow: the Ads
service repository triggers a `repository_dispatch` event (type
`update-ads-api-docs`) whenever its contract changes, and the workflow
regenerates the pages and opens a PR. It can also be run manually from the
Actions tab.

To refresh locally:

```bash
npm run refresh-ads-api-docs
npm run build
```

Use `ADS_OPENAPI_SPEC_URL` to point at another URL or a local
`/path/to/openapi.json`.
