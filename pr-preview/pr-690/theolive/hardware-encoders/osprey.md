# Osprey

**Osprey Video** is a world leader in broadcasting solutions and an early adopter of [WHIP](/documentation/pr-preview/pr-690/millicast/broadcast/webrtc-and-whip.md) for their Osprey Talon 4K-SC Encoder.

See the official [Osprey Video](https://www.ospreyvideo.com/) site for documentation, installation instructions, and additional support.

## Osprey Talon[​](#osprey-talon "Direct link to Osprey Talon")

You'll need to plug an ethernet connection and a power supply into your Talon encoder and power the device on.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/osprey-talon-c3c917e4a03c4fa8d68ff000daea356a.jpg)

### Connect to the encoder[​](#connect-to-the-encoder "Direct link to Connect to the encoder")

Once powered on, the device will be discoverable on your local network. You can interface with the device by opening the IP address in your browser, or, if you are a Windows user, you can [download the Osprey Boss Pro](https://www.ospreyvideo.com/talon-software-and-firmware), which provides a UI for finding the encoder.

Once found in your browser, you'll be prompted to log into the device. Refer to the [Osprey Talon Encoder User Manual ](https://www.ospreyvideo.com/manuals)to learn about your device's username and password.

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/osprey-login-c771ae81835605a1a1fb690bf2809ce8.jpeg)

### Configure RTMP settings[​](#configure-rtmp-settings "Direct link to Configure RTMP settings")

Inside the encoder UI, click on the *Channels* tab. From the Channels tab, set the protocol to **RTMP/RTMPS**.

* For the `Destination` copy the RTMP publish path from the Dolby *channel* you have created.
  <br />
  <!-- -->
  RTMP URL: `rtmps://rtmp.<my-channel-region>.theo.live/live`
* For the `Stream Key` input RTMP publish stream name from the ingest server section.
  <br />
  <!-- -->
  Stream Name: `<my-stream-key>`

<!-- -->

![](/documentation/pr-preview/pr-690/assets/images/osprey-rtmp-live-f3eb597577fa990d61b0d82e1882576b.png)

Once configured, you can press start and the encoder will begin streaming content.
