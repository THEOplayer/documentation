# How to implement Keyboard Hotkeys

This how-to guide describes how you can implement keyboard hotkeys in THEOplayer 2.X. Hotkeys allow viewers to control the player by using their keyboard.

## Step-by-step guide

### Adding the script

Keyboard Hotkeys is not an out-of-the-box feature provided by THEOplayer, and you'll have to add custom code. The script below implements the 7 hotkeys described in the article listed above.

THEOplayer-hotkeys

```js
function THEOplayer_UI_Hotkeys(player) {
  var togglePlay = function() {
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
    },
    toggleMute = function() {
      player.muted = !player.muted;
    },
    toggleFullScreen = function() {
      if ((player.presentationMode = "fullscreen")) {
        player.presentationMode = "inline";
      } else {
        player.presentationMode = "fullscreen";
      }
    },
    rewind = function() {
      player.currentTime -= 5;
    },
    forward = function() {
      player.currentTime += 5;
    },
    increaseVolume = function() {
      player.volume = Math.min(player.volume + 0.05, 1);
    },
    decreaseVolume = function() {
      player.volume = Math.max(player.volume - 0.05, 0);
    },
    preventStandardHotKeyActions = function(event) {
      event.stopPropagation();
      event.preventDefault();
      return false;
    },
    charCodeMap = {
      32: togglePlay, // spacebar
      37: rewind, // left
      38: increaseVolume, // up
      39: forward, // right
      40: decreaseVolume, // down
      70: toggleFullScreen, // f
      77: toggleMute // m
    },
    isTHEOplayerFocused = function() {
      var node = document.activeElement;
      while (node !== null) {
        if (player.element === node) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    },
    processKeyEvent = function(event) {
      var action;

      if (!event) {
        event = window.event;
      }

      action = charCodeMap[event.keyCode];

      if (
        action &&
        !event.altKey &&
        !event.ctrlKey &&
        !event.shiftKey &&
        isTHEOplayerFocused()
      ) {
        action();
        return preventStandardHotKeyActions(event);
      }
    },
    load = function() {
      player.element.tabIndex = 1;
      document.addEventListener("keydown", processKeyEvent);
    };

  load();
}
```

### Connect with THEOplayer instance

The script above requires you to configure it for a THEOplayer instance. For example:

```js
var player = new THEOplayer.Player(document.querySelector(".video-container"), {
  libraryLocation: "//cdn.theoplayer.com/dash/theoplayer/"
});
THEOplayer_UI_Hotkeys(player);
```
