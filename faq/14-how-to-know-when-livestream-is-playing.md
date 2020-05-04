# How to know whether a live stream is playing

The question is related to knowing if a stream is live or on-demand.

##### Web SDK

```js
var isLive = (player.duration === Infinity); // true or false
```

##### Android SDK

```java
boolean isLive = Double.isNaN(tpv.getPlayer().getDuration()); // true or false
```

