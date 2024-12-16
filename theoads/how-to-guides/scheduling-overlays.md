---
sidebar_position: 5
---

# Scheduling overlays

THEOads can insert overlays into your content, but it requires placement information to do so. This page will outline the various options for scheduling overlays.

## Using the Signaling service REST API

The recommended way to schedule overlays is through the signaling service API.

This can be done by a POST request to `{path}/overlay` where path is the usual url to interact with the signaling service for a specific monetized stream: `{signaling-service-url}/api/v1/monetized-streams/:monetizedStreamId`. Please see [CreateMonetizedStreamOverlay](/theoads/api/signaling/create-monetized-stream-overlay/).

The body of the post request can have the following properties:

```ts
{
  id: string;
  name: string | undefined;
  startDate: string;
  duration: string;
  type: string;
  position: {
    left: number | undefined;
    right: number | undefined;
    top: number | undefined;
    bottom: number | undefined;
  };
  size: {
    width: number;
    height: number; 
  };
  opacity: number | undefined;
  gamProperties: {
    iu: string;
    sz: {
      default: string;
      phone: string | undefined;
      tv: string | undefined;
    }
  } | undefined;
  resourceURI: {
    type: string;
    default: string;
    phone: string | undefined;
    tv: string | undefined;
  }[] | undefined;
  clickThroughURI: string | undefined;
}
```

- The `id` uniquely identifies the overlay inside the monetized stream.
- `name` is used to optionally identify the overlay presentation with a human-friendly name.
- `startDate` denotes when the overlay presentation should start. It should be in a Program Date Time format such as such as `YYYY-MM-DDThh:mm:ss.SSSZ`.
- `duration` is the total duration of the overlay presentation (in seconds).
- `type` can only be 'image' for now. In future we might extend this.
- `position` is required to know where the overlay needs to be presented on top of the video content. It requires a combination of either one of `left` or `right` and `top` or `bottom`. All values are percentage based and non-zero. The values denote the location from the specified side. For example: `left: 10` denotes `10% from the left edge of the video`.
- `position` is required to know what the overlay presentation width and height need to be relative to the video content display size. All values are percentage based and non-zero. For example: `width: 20` denotes 20% of the current video display width.
- `opacity` can optionally be used to make the overlay less opaque. This value is percentage based and non-zero. The default is `100`.
- `gamProperties` can optionally be used to specify the values required for requesting a pre-configured creative from GAM. It follows the [specifications](https://support.google.com/admanager/answer/2623168#zippy=%2Crequired-parameters) for a tagless request to load a creative. If `gamProperties` is not defined, you need to specify at least one `resourceURI`.
  - `iu` specifies the Google Ad Manager ad unit code, including your Google Ad Manager network code.
  - `sz` specifies the creative size configured in GAM. Next the the required `default` value, you can optionally specify alternative values for either `phone` or `tv` devices.
- `resourceURI` can optionally be used to specify one or more types required for requesting a custom overlay via a URI. If `resourceURI` is not defined, you need to specify `gamProperties`.
  - `type` is used to specify the resource type. Currently, only `png` and `svg` are supported. Based on the underlying platform, the suitable format will be chosen.
  - `default`, `phone` and `tv` can be used to specify corresponding resource URI to load when presenting the overlay. While `default` is required, `phone` and `tv` are optional.
- `clickThroughURI` is an optional field used to enable the clickthrough function on the overlay for both the `gamProperties` and `resourceURI` options.

An example of a schedule overlay request body for a GAM based image overlay can be found below:

```json
{
  "id": "1",
  "name": "Test overlay 1",
  "startDate": "2024-12-09T07:30:11.274Z",
  "duration": "30",
  "type": "image",
  "position": {
      "left": 5,
      "top": 5
  },
  "size": {
      "width": 10,
      "height": 10
  },
  "opacity": 50,
  "gamProperties": {
      "iu": "/12345678/overlay_1",
      "sz": {
          "default": "400x225",
          "phone": "400x225",
          "tv": "400x225"
      }
  },
  "clickThroughURI": "https://www.theoplayer.com/product/theoads"
}
```

An example of a schedule overlay request body for a custom image overlay can be found below:

```json
{
  "id": "2",
  "name": "Test overlay 2",
  "startDate": "2024-12-09T07:30:11.274Z",
  "duration": "30",
  "type": "image",
  "position": {
      "left": 5,
      "top": 5
  },
  "size": {
      "width": 10,
      "height": 10
  },
  "opacity": 50,
  "resourceURI": [
        {
            "type": "svg",
            "default": "https://<PATH_TO_IMAGE>/image.svg",
            "phone": "https://<PATH_TO_IMAGE>/image_phone.svg",
            "tv": "https://<PATH_TO_IMAGE>/image_tv.svg"
        },
        {
            "type": "png",
            "default": "https://<PATH_TO_IMAGE>/image.png",
            "phone": "https://<PATH_TO_IMAGE>/image_phone.png",
            "tv": "https://<PATH_TO_IMAGE>/image_tv.png"
        }
    ],
  "clickThroughURI": "https://www.theoplayer.com/product/theoads"
}
```
