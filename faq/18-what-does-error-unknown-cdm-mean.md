# What does the error message 'Unknown CDM error' mean

If you got to see this page, you probably know that CDM stands for Content Decryption Module, which is a component in the DRM pipeline, a part of the content protection process.

There are 2 scenario's where this error can be triggered:

- If a user is watching a DRM-protected stream, and then tries to Airplay **their whole screen** (In the device status bar  as opposed to Airplaying by clicking the icon in THEOplayer when watching in Safari). Because it cannot be guaranteed that the content is is not being hijacked in this scenario, the player throws the "Unknown CDM error". This scenario is Mac/Safari specific.
- A second scenario where you would see this error is when, on iOS, you record your screen with built-in or third-party software while playing DRM-protected content. This scenario is iOS specific.
Safari uses media error code 5, according to VideoJS documentation (https://docs.videojs.com/mediaerror)

Using this knowledge, developers could handle this error by capturing the 2 cases under one, more generic message towards the user e.g. 'This content is protected and can't be viewed this way.'