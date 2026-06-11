# Haivision

**Haivision** provides professional broadcasting equipment to the streaming industry. The KB series of H.264 & HEVC Internet Media Encoders and Transcoders deliver high-quality video streaming for resolutions up to 4K, available as small form factor portable appliances as well as rack-mountable enterprise-grade servers. The KB Series provides you with multiple options for live event streaming, helping you deliver the highest quality live video to your global internet audience.

* [Haivision Makito X4 Encoder with SRT](#how-to-use-haivision-makito-x4-encoder-with-srt)
* [Haivision KB Encoder with RTMP](#how-to-use-haivision-kb-encoder-with-rtmp)

See the official [Haivision](https://www.haivision.com/) site for documentation, installation instructions, and additional support.

## Haivision Encoders[​](#haivision-encoders "Direct link to Haivision Encoders")

### How to use Haivision Makito X4 encoder with SRT[​](#how-to-use-haivision-makito-x4-encoder-with-srt "Direct link to How to use Haivision Makito X4 encoder with SRT")

To get started, log into your [OptiView Real-time Streaming Account](https://streaming.dolby.io/signin).

1. Select **Live Broadcast** from the left menu.

2. Create your [Publishing Token](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md#create-a-publish-token).

3. Select the *Publishing* tab to access your [SRT Publish settings](/documentation/pr-preview/pr-690/millicast/broadcast/srt.md).

4. Open your Haivision Encoder.

5. Specify the following Destination settings:

   |                  |                        |
   | ---------------- | ---------------------- |
   | Mode             | Caller                 |
   | Address          | srt-auto-millicast.com |
   | Destination Port | 10000                  |

6. Specify the following SRT Access Control settings:

   |                      |                                             |
   | -------------------- | ------------------------------------------- |
   | Format               | Custom                                      |
   | Stream Publishing ID | Makito?t=Your\_Token\_From\_SRT\_Stream\_ID |

### How to use Haivision KB encoder with RTMP[​](#how-to-use-haivision-kb-encoder-with-rtmp "Direct link to How to use Haivision KB encoder with RTMP")

Getting Started

If you haven't already, begin by following the [Getting Started](/documentation/pr-preview/pr-690/millicast/getting-started.md) tutorial to start your first broadcast. You'll need your *RTMP publish path* and *RTMP publish stream name* for the steps described below.

To get started, log into your [OptiView Real-time Streaming Account](https://streaming.dolby.io/signin). Enter your KB web interface, switch views to the Channel Control Center, and create a new channel.

Follow the Create Channel Wizard prompts to create a channel as normal:

1. Enter the desired channel name.
2. Identify your live source for the channel input.
3. Choose RTMP for the channel output and copy the RTMP publish path from the *Publishing* tab of the stream token.
   <br />
   <!-- -->
   RTMP URL: `rtmp://rtmp-auto.millicast.com:1935/v2/pub`
4. Enter the RTMP publish stream name from your OptiView Real-time Streaming Dashboard.
   <br />
   <!-- -->
   Stream Name: `myStreamName?token=3bc330607a15a0ecebebd8c9ee2a559fd143c937174bd276e213a96425bb107e`

With the broadcast credentials set up, the stream is ready to go live. To view the stream, navigate back to your newly created token and switch to the *Playback* tab. From the Playback tab, copy the *Hosted Player path* URL and open it in your browser.

### Recommended Haivision encoder settings[​](#recommended-haivision-encoder-settings "Direct link to Recommended Haivision encoder settings")

Here are some adjustments recommended by the [Haivision support](https://www.haivision.com/support/) team:

| Settings Location                        | Recommendation                                     |
| ---------------------------------------- | -------------------------------------------------- |
| In Input settings                        | Change Timestamps from System Time to Zero-Based\* |
| In Video Encoder settings > Settings tab | Change the Framing from IBBP to IP                 |
| In the Advanced tab                      | Change the Codec Present to Baseline               |
| Set GOP                                  | Fixed Mode with 2000ms                             |
| Set Entropy coding mode                  | CABAC                                              |
| Set Recommended Bitrate                  | 4,000 @ 720p                                       |

\*Note: The timestamp seeding seemed to be the magic change on the KBs.
