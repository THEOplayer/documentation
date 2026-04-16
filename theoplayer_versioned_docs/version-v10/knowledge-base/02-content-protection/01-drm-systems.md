# Digital Rights Management (DRM) Systems

Intellectual property theft has a huge economic impact. The digital media sector is one of its biggest victims with annual losses running into billions of dollars.

Due to its nature and distribution, digital media is one of the most difficult intellectual properties to secure. This is especially the case when it comes to securing digital media without impacting the user experience.

In the online streaming market, security is achieved through Digital Rights Management (DRM) Systems. These technologies use a combination of Access Control schemes and encryption to make content transparently available to authorized users, while restricting access for everyone else.

## How does it work?

DRM in HTML5 streaming is achieved by encrypting content with AES-128 Encryption. Subsequently, decryption keys are distributed through a DRM specific licensing server. Which DRM system needs to be used depends on the device and browser that is being used.

The major advantage of DRM systems over standard AES-128 Encryption as it is available in HLS streaming is the ability to pass encrypted content to the browser. For more information on AES-128 Encryption in HLS, you can read our article [here](../../knowledge-base/02-content-protection/02-aes-128-encryption.md).

## MPEG-DASH vs. HLS

HLS was one of the first and is currently most widely used HTML5 adaptive streaming protocol. The specifications for HLS are proprietary to Apple, but are published on the IETF website as the [Pantos HTTP Live Streaming Specification](https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis). The protocol is regularly updated and enhanced by Apple at a steady pace of a new update every six months.

MPEG-DASH on the other hand is backed by an industry forum with a large number of members in the online streaming market.

As you can see from the infographic above, when using a DRM system, encrypted content is passed to the browser. To be able to play the content, the browser needs to have access to a Content Decryption Module (CDM) that can handle the DRM system's security policies.

Currently, each device and browser combination provides support for just one DRM technology. Apple's FairPlay is the DRM technology to use on Apple's Safari browser and in iOS apps, while Microsoft PlayReady is available on Edge and Internet Explorer and Google's Widevine DRM is available in Firefox and Chromium based browsers such as Google Chrome, Opera and Vivaldi.

|   Operating System    |       Browser        |      DRM Content Protection      |
| :-------------------: | :------------------: | :------------------------------: |
|      **Windows**      |         Edge         | MPEG-DASH + PlayReady (in HTML5) |
|                       | Internet Explorer 11 | MPEG-DASH + PlayReady (in HTML5) |
|                       |        Chrome        | MPEG-DASH + Widevine (in HTML5)  |
|                       |       Firefox        | MPEG-DASH + Widevine (in HTML5)  |
|                       |        Opera         | MPEG-DASH + Widevine (in HTML5)  |
|                       |       Vivaldi        | MPEG-DASH + Widevine (in HTML5)  |
|       **OS X**        |        Safari        |    HLS + FairPlay (in HTML5)     |
|                       |        Chrome        | MPEG-DASH + Widevine (in HTML5)  |
|                       |       Firefox        | MPEG-DASH + Widevine (in HTML5)  |
|                       |        Opera         | MPEG-DASH + Widevine (in HTML5)  |
|                       |       Vivaldi        | MPEG-DASH + Widevine (in HTML5)  |
|       **Linux**       |        Chrome        | MPEG-DASH + Widevine (in HTML5)  |
|                       |       Firefox        | MPEG-DASH + Widevine (in HTML5)  |
|                       |        Opera         | MPEG-DASH + Widevine (in HTML5)  |
|      **Android**      |  Chrome for Android  | MPEG-DASH + Widevine (in HTML5)  |
| **Windows Phone 8.1** |  Internet Explorer   | MPEG-DASH + PlayReady (in HTML5) |

## Common Encryption

This divided landscape of DRM technologies, browsers and platforms could potentially mean that a content provider needs a lot of resources available to provide full streaming support for all these platforms.

This is however not the case in practice. The MPEG Common Encryption standards defines metadata specific for the container formats in which content can be transported. That way, the player and browser know exactly which encryption schemes were used and how specific parts of the stream were encrypted. As long as the different DRM schemes adhere to these specifications, they can be used in combination with the same stream. This allows to reduce the resources required for the streaming provider. In the end, this currently comes down to setting up an HLS stream with FairPlay and an MPEG-DASH stream with PlayReady and Widevine.

## Licensing Servers

A crucial element in the DRM workflow is the DRM licensing server. These servers control the access that users have to your content. Providing various features to fine-tune license types (subscriptions, rentals, purchases, ...) or create user profiles with fine-grained access control (e.g.: premium customers with access to content in higher quality).

This creates two drawbacks at the moment.

- To be able to support your entire viewer base, most content providers will have to use more than one licensing server.
- Available features between different DRMs and licensing servers differs, making management of the user base more complex.

## Multi-DRM Solutions

Leveraging Common Encryption and providing support for all common DRM systems on the market, multi-DRM solutions allow a content provider to reach their entire user base with a single point-of-access for their management backend. Multi-DRM solutions make it very easy to protect content with studio-approved DRM.

THEOplayer has proven integrations with a number of vendors in the multi-DRM market, as well as Widevine, PlayReady and FairPlay individually.
