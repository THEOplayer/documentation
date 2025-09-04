# How to get frame-accurate currentTime display in the UI Control bar

This article will show you how to display a frame-accurate currentTime on your THEOplayer instance UI control bar. For more information regarding the currentTime itself, please refer to the [reference API](pathname:///theoplayer/v9/api-reference/web/classes/ChromelessPlayer.html).

## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :------: | :------------: | :------------: |
|   Yes   |     Yes     |   Yes   |    No    |      Yes       |      N/A       |

## Changing the currentTime UI display

At this moment there is no official THEOplayer feature to display a frame-accurate currentTime in the UI Controlbar. The following snippets rewrite the innerHTMLText of the currentTime element.

##### Web SDK

```js
function secondsToHms(d) {
  d = Number(d);
  console.log(player.currentTime);
  var ms = d % 1;
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h < 10 ? '0' + h : h;
  var mDisplay = m < 10 ? '0' + m : m;
  var sDisplay = s < 10 ? '0' + s : s;
  var msDisplay = ms.toFixed(3);
  //var msDisplay = d.toPrecision() -player.currentTime.toFixed();
  return hDisplay + ':' + mDisplay + ':' + sDisplay + '.' + String(msDisplay).split('.')[1];
}

setInterval(function () {
  document.querySelector('.vjs-current-time-display').innerText = secondsToHms(player.currentTime);
}, 1);

player.addEventListener('durationchange', function (e) {
  document.querySelector('.vjs-duration').innerText = secondsToHms(Math.floor(e.duration));
});
```

##### Android & iOS SDK

This can be done through JavaScript injection: [How to add CSS or JavaScript files to an Android/iOS project](../../../../version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md)

## Remarks

With the same logic, slightly modified, you could also decide to show the frame number for that second instead of the milliseconds.

## Resources

- [API reference - player properties](pathname:///theoplayer/v9/api-reference/web/classes/ChromelessPlayer.html)
