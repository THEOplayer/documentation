---
title: "Osprey"
id: using-osprey-talon-whip-hardware-encoder
---
**Osprey Video** is a world leader in broadcasting solutions and an early adopter of [WHIP](/millicast/webrtc-whip.md) for their Osprey Talon 4K-SC Encoder. By supporting WHIP, Osprey is able to offer an encoder that can natively encode WebRTC streams at broadcast-level quality for a variety of applications, such as [sports broadcasting](https://dolby.io/solutions/sports-betting/), [live event broadcasting](https://dolby.io/solutions/live-events/), and [auction streaming](https://dolby.io/solutions/auctions/).

You can originate a broadcast from Osprey over a [WHIP](/millicast/webrtc-whip.md) or [SRT](/millicast/using-srt.md) source.

- [Configure WHIP](/millicast/using-osprey-talon-whip-hardware-encoder#how-to-use-osprey-talon-with-whip)
- [Configure SRT](/millicast/using-osprey-talon-whip-hardware-encoder#how-to-use-osprey-talon-with-srt)

> 👍 Getting Started
> 
> If you haven't already, begin by following the [Getting Started](/millicast/getting-started.md) tutorial to start your first broadcast. You'll need your _publish token_ and _stream name_ for the steps described below.

See the official [Osprey Video](https://www.ospreyvideo.com/) site for documentation, installation instructions, and additional support.

# Osprey Talon

For cameras that don’t have built-in encoders, you can connect the camera to an external encoder such as the Osprey Talon.


![](https://cdn.TODO.io/docs/readme/ad523f1-b12e768-Osprey_Talon.png)



You'll need to plug an ethernet connection and a power supply into your Talon encoder and power the device on. 


![](https://cdn.TODO.io/docs/readme/926e08b-Image-6-2.jpg)



Once powered on, the device will be discoverable on your local network. You can interface with the device by opening the IP address in your browser, or, if you are a Windows user, you can [download the Osprey Boss Pro](https://www.ospreyvideo.com/talon-software-and-firmware), which provides a UI for finding the encoder.

Once found in your browser, you'll be prompted to log into the device. Refer to the [Osprey Talon Encoder User Manual ](https://www.ospreyvideo.com/manuals)to learn about your device's username and password.


![](https://cdn.TODO.io/docs/readme/94926ba-2B9A2FCC-5901-4390-A7A2-4682899CBD78_1_201_a.jpeg)



## How-to use Osprey Talon with WHIP

To get started, you'll have to [login](https://dashboard.dolby.io/signup) to a Dolby.io account. Within the account, you'll need the _Stream Name_ and _Publishing Token_.

Inside the encoder UI, click on the _Channels_ tab. From the Channels tab, set the protocol to Dolby.io (WebRTC). Enter your Stream Name and Publishing Token in the corresponding fields.


![](https://cdn.TODO.io/docs/readme/89d9cec-whip-osprey-talon.png)



After inputting your credentials, switch to the Dashboard tab and click the green button to start the broadcast.


![](https://cdn.TODO.io/docs/readme/917405a-aa7dff6-osprey-broadcast.png)



The stream is now live. To view the stream, navigate back to your newly created token on the Dolby.io Dashboard and switch to the _Playback_ tab. From the Playback tab, copy the _Hosted Player Path_ URL and open it in your browser.

## How-to use Osprey Talon with SRT

To get started, you'll have to [login](https://dashboard.dolby.io/signup) to a Dolby.io account. Within the account, you'll need the _SRT stream ID_ and _SRT publish path_.

Inside the encoder UI, click on the _Channels_ tab. From the Channels tab, set the protocol to **TS over SRT**. 

- For the `SRT Dest Address` input the **SRT publish path** with the port kept separate in the `SRT Port`.
- The value of the `SRT Stream ID` must be URL encoded. To get that URL encoded value, look for the **SRT publish URL** and copy the string of characters after `_?streamId=_`. For example,  "_lq11zkzu%3Ft%3DVgkvUAa5b3QvoLW5b3QvoLW5b3QvoLW-ak_".


![](https://cdn.TODO.io/docs/readme/0a521a8-osprey-srt.png)



Once configured, you can press start and the encoder will begin streaming content.

### Turn on SRT encryption

To enable SRT encryption for the SRT feed, in the Dolby.io dashboard for your stream token, enable **Passphrase encryption** and copy the **SRT passphrase**.


![](https://cdn.TODO.io/docs/readme/0a5b23f-srt-passphrase.png)



In the Osprey Talon dashboard, enable AES-128 Encryption and paste the passphrase.


![](https://cdn.TODO.io/docs/readme/952aa65-osprey-srt-encryption.png)



Once configured, you can press start and the encoder will begin streaming content.

# Learn more

Learn more by exploring the [developer blog](https://dolby.io/blog/tag/broadcast/) and [code samples](https://github.com/orgs/dolbyio-samples/repositories?q=broadcast).





