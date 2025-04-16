---
title: 'Datadog'
slug: /datadog
---

**Datadog** is a tool for monitoring application performance measurements and user engagement.

This page guides you on some of the metrics that are collected and setps to integrate the [Millicast SDK](/millicast/client-sdks/web.mdx) to the browser agent.

## Client Analytics

To monitor the health of your application, [client analytics](/millicast/playback/client-analytics-and-monitoring.md) for monitoring and troubleshooting are critical. You can customize Datadog with dashboards to display collected data such as:

- Device analytics such as user agent, browser, operating system, device size, versions
- Geolocation details including country, city, ip address and network details
- WebRTC statistics like fps, round trip time, jitter, packet and frame loss rates, and bitrate

When combined with our [Live Monitoring](/millicast/streaming-dashboard/live-monitoring.mdx) and [Stream Syndication](/millicast/syndication) capabilities you can effectively monitor playback issues and track viewer characteristics.

## Setting Up Datadog Browser Agent

### 1\. Initialize the Datadog Browser Agent

Include the browser agent:

```html
<script type="text/javascript" src="https://www.datadoghq-browser-agent.com/us1/v5/datadog-logs.js"></script>
```

Early in your application you will need to initialize the agent with details from your Datadog account. You'll need your **clientToken** and **site**.

```javascript
window.DD_LOGS &&
  window.DD_LOGS.init({
    clientToken: 'pub922...187',
    site: 'datadoghq.eu',
    forwardErrorsToLogs: true,
    sessionSampleRate: 100,
  });
```

### 2\. Capture Millicast Track Events

When receiving a track event after connecting, you can send the event.

```javascript
millicastView.on('track', (event) => {
  // ...
  window.DD_LOGS.logger.info(event);
});
```

You may also want to capture [Broadcast Events](/millicast/playback/viewer-events.md) for a fuller picture.

### 3\. Collect WebRTC Stats

See the [Client Analytics](/millicast/playback/client-analytics-and-monitoring.md) guide to learn more about what media statistics and metrics are captured for the WebRTC connection.

```javascript
millicastView.webRTCPeer.on('stats', (stats) => {
  window.DD_LOGS.logger.info(stats);
});
```

### 4\. Setup a Datadog Dashboard

As the events are logged in Datadog, you can create a custom Dashboard to display the metrics that are of most interest to you.

## Sample

Here is an example payload from the Datadog agent:

```json
{
  "id": "AgA...j",
  "content": {
    "timestamp": "2024-04-03T18:30:16.236Z",
    "tags": ["sdk_version:5.14.0", "source:browser", "api:fetch", "datadog.submission_auth:client_token"],
    "attributes": {
      "date": 1712169016236,
      "candidateType": "prflx",
      "origin": "logger",
      "session_id": "c98...1",
      "raw": "[RTCStatsReport]",
      "video": {
        "inbounds": [
          {
            "frameHeight": 1080,
            "totalBytesReceived": 389271613,
            "packetsLostDeltaPerSecond": 0,
            "mid": "0",
            "totalPacketsReceived": 342289,
            "bitrate": 3004616,
            "mimeType": "video/H264",
            "trackIdentifier": "ad5...6",
            "frameWidth": 1920,
            "jitter": 0.001,
            "packetsLostRatioPerSecond": 0,
            "totalPacketsLost": 0,
            "framesPerSecond": 24,
            "id": "IT0...0",
            "timestamp": 1712169016229.288
          }
        ]
      },
      "availableOutgoingBitrate": 300000,
      "network": {
        "client": {
          "geoip": {
            "continent": {
              "code": "EU",
              "name": "Europe"
            },
            "country": {
              "name": "United Kingdom",
              "iso_code": "GB"
            },
            "subdivision": {
              "name": "England",
              "iso_code": "GB-ENG"
            },
            "as": {
              "number": "AS13237",
              "route": "127.n.n.0/16",
              "domain": "eunetworks.com",
              "name": "euNetworks GmbH",
              "type": "hosting"
            },
            "city": {
              "name": "London"
            },
            "timezone": "Europe/London",
            "ipAddress": "127.n.n.0",
            "location": {
              "latitude": 0.0,
              "longitude": 0.0
            }
          },
          "ip": "127.n.n.0"
        }
      },
      "view": {
        "referrer": "http://127.0.0.1:8000/demo/index.html",
        "url_details": {
          "path": "/demo/index.html",
          "scheme": "http",
          "port": 5500,
          "host": "127.0.0.1"
        },
        "referrer_details": {
          "path": "/demo/index.html",
          "scheme": "http",
          "port": 5500,
          "host": "127.0.0.1"
        },
        "url": "http://127.0.0.1:5500/demo/index.html"
      },
      "totalRoundTripTime": 11.284,
      "http": {
        "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        "useragent_details": {
          "os": {
            "patch": "7",
            "major": "10",
            "minor": "15",
            "family": "Mac OS X"
          },
          "browser": {
            "patch": "0",
            "patch_minor": "0",
            "major": "123",
            "minor": "0",
            "family": "Chrome"
          },
          "device": {
            "model": "Mac",
            "family": "Mac",
            "category": "Desktop",
            "brand": "Apple"
          }
        }
      },
      "audio": {
        "inbounds": [
          {
            "jitter": 0.002,
            "totalBytesReceived": 12901210,
            "packetsLostRatioPerSecond": 0,
            "packetsLostDeltaPerSecond": 0,
            "totalPacketsLost": 0,
            "mid": "1",
            "totalPacketsReceived": 51984,
            "bitrate": 96272,
            "mimeType": "audio/opus",
            "id": "IT0...3",
            "trackIdentifier": "3e5...4",
            "timestamp": 1712169016229.288
          }
        ]
      },
      "currentRoundTripTime": 0.006,
      "status": "info"
    }
  }
}
```
