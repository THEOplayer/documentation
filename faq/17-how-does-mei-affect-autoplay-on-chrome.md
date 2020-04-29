# How does Media Engagement Index (MEI) affect Autoplay on Chrome?

The question above is related to the following questions:

- Why is autoplay not working on Chrome?
- Is THEOplayer limited by the Media Engagement Index?

In summary, **it's possible that on the desktop-version of Chrome (unmuted) autoplay is no longer working on your web page due to the Media Engagement Index**. The following two strategies can help you resolve this issue:

1. Increase your MEI.
2. Enable muted autoplay. (How to combat autoplay policies

You can read more about Chrome's autoplay policy at https://www.theoplayer.com/blog/chrome-autoplay-policy-what-you-need-to-know. A demo illustrating this policy can be viewed at http://demo.theoplayer.com/autoplay-policy.

Remarks

- The following scenario is possible due to the Chrome autoplay policy: when you first land on a web page, unmuted autoplay is not permitted. When you click through to another page, or refresh the page, unmuted autoplay is permitted, due to the additional user interactions which affect the MEI.
- You can check your MEI at chrome://media-engagement/.