# What are the Edgio challenges

The purpose of this article is to group common challenges application developers might encounter when using [Edgio](../how-to-guides/05-integrations/uplynk/00-introduction.mdx) (formerly known as Verizon Media and Edgecast) as the back-end.

1. [Why does Chromecast or AirPlay not work?](#why-does-chromecast-or-airplay-not-work)
2. [Why aren't all video qualities showing up?](#why-arent-all-video-qualities-showing-up)
3. [What should I know before tokenizing my stream?](#what-should-i-know-before-tokenizing-my-stream)

## Why does Chromecast or AirPlay not work?

If you've [correctly enabled Chromecast](../how-to-guides/03-cast/01-chromecast/06-enable-chromecast-on-the-sender.md) or AirPlay,
but you are not getting any playback on your Chromecast or AirPlay device,
then a likely cause is your [tokenization](../how-to-guides/05-integrations/uplynk/01-preplay.md#using-tokens) approach.

1/ When you tokenize a URL, you are also specifying an expiration date.
It is possible that your expiration date has passed when you initiate the casting session.
Your stream will no longer be valid when this is the case, and result in unsuccessful casting.

The solution? Use an expiration date that is valid for a longer time.

2/ An Edgio token will be attached to one IP address when it's invoked for the first time (i.e. request to the Preplay URL with the token as a query parameter).
This could cause problems when either your sender device (i.e. iOS app, Android app, browser) or reciever device (i.e. Chromecast device)
uses an iPv6 address, because those addresses are unique. (Meaning: the token could be invalid for your IPv6 receiver device because it was already attached to your different IPv4 sender device.)

The solution?

1. You can disable IP address checking by adding `pp2ip=0` to your token (and Preplay parameters).
2. You can implement a [custom Chromecast receiver app](https://github.com/THEOplayer/samples-google-cast-v3-receiver) that generates its own unique token.
   (This however doesn't address the issue on AirPlay, and also gives rise to challenges related to building a custom Chromecast app.)
3. You can disable tokenization (if it's not a requirement).

## Why aren't all video qualities showing up?

If you notice that THEOplayer doesn't expose all your Edgio MPEG-DASH video qualities,
then the likely culprit is not aggregating the different `AdaptationSet`s as part of Edgio's multi-key approach.

The solution?

Add `singlevideolicense=1` to your Preplay parameters and/or token.
Doing so will group all qualities to one `AdaptationSet` with one key.

## What should I know before tokenizing my stream?

Refer to [Preplay - tokenization](../how-to-guides/05-integrations/uplynk/01-preplay.md#using-tokens).
