---
sidebar_position: 8
---

# Dynamic backdrops

Some layouts, such as L-shape and Double Box, make use of a backdrop. These can be specified on both the monetized stream and the ad break in 2 ways:

- `backdropURI`: Optional URI containing the default backdrop to be used during the Double Box or L-shape ads.
- `backdropURIGamProperties`: Optional property with configuration values for a dynamic backdrop loaded via GAM to be used during the Double Box or L-shape ads. This property has priority over `backdropURI`.

## Using the OptiView Ads service REST API

The way to specify backdrops is through the OptiView Ads service API when creating or updating both monetised streams and adbreaks.

The body of the post request for both monetised streams and ad breaks can have the following properties:

```ts
{
  ...
  backdropURI: string | undefined;
  backdropURIGamProperties: {
    iu: string;
    sz: {
      default: string;
      phone: string | undefined;
      tv: string | undefined;
    }
  } | undefined;
  ...
}
```

- `backdropURI` can optionally be used to specify a URI that returns the actual backdrop image to be used.
- `backdropURIGamProperties` can optionally be used to specify the values required for requesting a pre-configured custom creative from GAM (See below). It follows the [specifications](https://support.google.com/admanager/answer/2623168#zippy=%2Crequired-parameters) for a tagless request to load a creative. If `backdropURIGamProperties` is not defined, you need to specify `backdropURI`.
  - `iu` specifies the Google Ad Manager ad unit code, including your Google Ad Manager network code.
  - `sz` specifies the creative size configured in GAM. Aside from the required `default` value, you can optionally specify alternative values for either `phone` or `tv` devices.

Please refer to [Custom GAM Creatives](../gam-custom-creatives) for information on how to setup your own custom creatives in GAM.

That's it! You should now be able to configure dynamic backdrops for L-shape and Double Box ad breaks.
