---
sidebar_position: 10
sidebar_label: Image
---

# Image Generation

The **Image API** provides a simple way to extract a single image frame from a media asset stored in the cloud. It is commonly used to generate images without downloading or transcoding the full media file.

The image is captured at a specific position in the source video and returned in a standard image format.

## Use Cases

The Image API is typically used to:

- Generate thumbnail images for media assets
- Create preview frames for asset browsers or dashboards
- Perform quick visual verification of content
- Support quality control and asset review workflows
- Extract still frames without creating intermediate proxies

This endpoint is optimized for **fast, lightweight, on-demand image extraction**.

## Image API

The Image API is accessed using an HTTP GET request with query parameters.

```
GET https://api.galaxy.dolbyrasp.com/image?url=https://my_bucket/my_folder/my_file.mxf&format=png&height=280
```

### Required Query Parameters

- **url**  
  The URL of the media file to extract the image from.

### Optional Query Parameters

- **format**  
  The image format to return.  
  Supported values: `jpeg`, `png`  
  Default: `jpeg`

- **width**  
  The desired width of the image in pixels.  
  If not specified, the width is calculated based on the source dimensions. If only width is specified, height is calculated from the source aspect ratio.

- **height**  
  The desired height of the image in pixels.  
  If not specified, the height is calculated based on the source dimensions. If only height is specified, width is calculated from the source aspect ratio.

- **offset_percent**  
  The percentage offset into the video where the image should be captured.  
  Range: `0–100`  
  Default: `10`

- **credentials_key**  
  The key of stored credentials to use when accessing the media URL.

### Using Credentials

Typically, cloud content is not publicly accessable. If the provided `url` is an encrypted link, remember to use `encodeURI()` to encode the URL inside the GET call. If you have registered cloud credentials with the Dolby OptiView Engine, you can reference those credentials in the call.

```
GET https://api.galaxy.dolbyrasp.com/image?url=s3://my_bucket/my_folder/my_file.mxf&format=png&height=280&credentials_key=my_s3_creds
```

## Response

The response is a binary image returned directly in the requested format.

- `Content-Type: image/jpeg` or `image/png`
- The response body contains the image data

This endpoint does not return JSON metadata; the response payload is the image itself.

## Notes

- The Image API is read-only and does not modify the source asset.
- The exact frame captured depends on source encoding and GOP structure.
- Width and height constraints are validated by the service.
