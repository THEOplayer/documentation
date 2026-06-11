# How to know whether a live stream is playing

You can check if a stream being played is live or VOD by checking its duration. If the duration returns `Infinity`, the stream would be live. Examples:

##### Web SDK[​](#web-sdk "Direct link to Web SDK")

```js
var isLive = player.duration === Infinity; // true or false

```

##### Android SDK[​](#android-sdk "Direct link to Android SDK")

```java
boolean isLive = Double.isNaN(tpv.getPlayer().getDuration()); // true or false

```
