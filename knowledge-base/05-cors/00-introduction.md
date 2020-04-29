# Cross Origin Resource Sharing (CORS)

Cross-origin resource sharing (CORS) is a content protection mechanism that allows resources (manifests, video files or encryption keys) on server to be requested from a webpage on a different domain, subdomain or port than the one on from which the resources originated.

Such "cross-origin" requests would otherwise be forbidden by web browsers, per the same-origin security policy. CORS defines a way in which the browser and the server can interact and determine whether or not the browser is allowed to make these cross-origin request.

THEOplayer makes use of CORS for downloading manifests, video files and encryption keys from the streaming infrastructure. If CORS headers are not present on these server(s), THEOplayer assumes that it is not allowed to play the provided link. Make sure CORS headers are being served along with your resources in order to ensure smooth playback by THEOplayer.

## Content Delivery Network Support

From our experience and cooperations, the following CDN's have support for honouring or even adding CORS headers to requests they handle. If you are aware of a CDN that has support for CORS and is not on the list, make sure to contact us.

| Name       | Support |
| ---------- | ------- |
| Akamai     | Yes     |
| Anevia     | Yes     |
| Bitgravity | Yes     |
| Edgecast   | Yes     |
| Highwinds  | Yes     |
| Internap   | Yes     |
| Level 3    | Yes     |
| Limelight  | Yes     |

## Enabling CORS on Wowza Media Server

Open the relevant (VOD, Live, ...) Wowza Application.xml configuration files.\
Go to the `HTTPStreamer / Properties` container.\
Add or make sure it contains:

```xml
<HTTPStreamer>
    <Properties>
        <Property>
            <Name>cupertinoUserHTTPHeaders</Name>
            <Value>Access-Control-Allow-Origin: *</Value>
        </Property>
    </Properties>
</HTTPStreamer>
```

This ensures that requested HLS files have the required CORS headers for domain \*. When in doubt, restart your Wowza Media Server instance to make sure the new configuration has been loaded.

## Enabling CORS on Adobe Flash Media Server

For Adobe Flash Media Server, CORS can be enabled by editing the .htaccess file that ships along with the installation. Add or make sure the file contains:

```xml
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin *
</IfModule>
```

This ensures that requested HLS files have the required CORS header for domain \*. When in doubt, restart your Adobe Flash Media Server instance to make sure the new configuration has been loaded.

## Other Resources

Enabling CORS depends on the backend technology and on the used CDN. More information about CORS and how to enable it on a range of backend server technology can be found at <http://enable-cors.org/>
