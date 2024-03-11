# How to implement Keyboard Hotkeys

This how-to guide describes how you can implement keyboard shortcuts in THEOplayer.
Hotkeys allow viewers to also control THEOplayer functionality by using their keyboard.

## TLDR:

1. Add an id attribute to the player element in your HTML.

2. **Copy, Paste** and **Link** [this script](#full-javascript-code-example) in your HTML to enable the following set of hotkeys.

## List of Hotkeys

Keyboard hotkeys are not an 'out-of-the-box' feature provided by THEOplayer.
This means you'll have to insert a bit of custom code to enable this functionality.

The script below will implement the following shortcuts:

- Spacebar : Toggles between Pause and Play.
- Left Arrow: Rewinds the video. (default: 5s)
- Right Arrow: Forwards the video. (default: 5s)
- Up Arrow: Increases the volume.
- Down Arrow: Lowers the volume.
- ' F ' Key: Toggles fullscreen mode.
- ' M ' Key: Toggles audio mute.

## Step-by-step Guide

### 1. THEOplayer-wrapper

Because the hotkeys we're about to include also have default browser functionality
(e.g. space bar skipping down the page),
we have two options:

1. Disable default browser hotkeys
   and overwrite them with our custom player hotkeys.

2. Enable THEOplayer hotkeys only when the viewer's mouse is inside the player area or when the player is focused.

Start by adding an id attribute to the player element in your HTML:

```html
<div id="yourPlayerId" class="video-js theoplayer-skin"></div>
```

### 2. JavaScript

Make a new JavaScript file and include it to your project with the rest of your scripts.

First off we're going to make a variable that holds the element in which we want to check for user interaction.

```javascript
const wrapper = document.getElementById("yourPlayerId");
```

Next up are the individual functions:

### 2.1 Disabling Default browser hotkeys

#### preventStandardHotKeyActions()

With event[.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) we prevent the pressed key from performing their default browser functionality.

In our case this will disable the 'keydown' event if conditions are met.

```javascript
function preventStandardHotKeyActions(event) {
  event.stopPropagation();
  event.preventDefault();
}
```

### 2.2 Pause and Play

#### togglePlay()

Switches between pausing and playing the video. This function is triggered by pressing the spacebar.

```javascript
function togglePlay() {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}
```

### 2.3 Rewinding and Skipping

#### rewind()

Rewinds the video 5 seconds (default) back in time when triggered.

```javascript
function rewind() {
  player.currentTime -= 5; //Subtracts 5 seconds
}
```

#### forward()

Skips the video 5 seconds (default) forward in time when triggered.

```javascript
function forward() {
  player.currentTime += 5; //Adds 5 seconds
}
```

### 2.4 Volume Settings

#### increaseVolume()

Increases the THEOplayer's volume in 5% increments (default).

```javascript
function increaseVolume() {
  player.volume = Math.min(player.volume + 0.05, 1); //Increases volume by 5%
}
```

#### decreaseVolume():

Lowers the THEOplayer's volume in 5% increments (default).

```javascript
function decreaseVolume() {
  player.volume = Math.max(player.volume - 0.05, 1); //Lowers volume by 5%
}
```

### 2.5 Toggle Fullscreen

#### toggleFullScreen()

Checks what presentation mode THEOplayer is in and switches the presentation mode to 'fullscreen' or 'inline' accordingly.

```javascript
function toggleFullScreen() {
  if (player.presentation.currentMode === "fullscreen") {
    player.presentation.requestMode("inline");
  } else {
    player.presentation.requestMode("fullscreen");
  }
}
```

### 2.6 Toggle Mute

#### toggleMute()

Turns THEOplayer's audio on or off.

```javascript
function toggleMute() {
  player.muted = !player.muted;
}
```

### 2.7 KeyPressed Event

#### getPressedKey()

This function gets the 'key' property of the event object that triggered it (In our case a 'keydown' event). [List of Key values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)

Start by initiating a variable for any key's that are pressed ('pressedKey') and a variable called 'action' that's going to call one of the functions we made earlier.

Next we make a switch case where we check the event's 'key' property for the ones we want to catch (e.g. ArrowLeft, " " for space, ... etc).
If there's a match, we assign the corresponding function to 'action' to call after our conditions have been met.

```javascript
function getPressedKey(event) {
  const pressedKey = event.key;
  let action;
  switch (pressedKey) {
    case " ":
      action = togglePlay(); //Pauses or Unpauses with Space
      break;
    case "ArrowLeft":
      action = rewind(); //Rewinds the video with the Left Arrow Key
      break;
    case "ArrowRight":
      action = forward(); //Forwards the video with the Right Arrow Key
      break;
    case "ArrowUp":
      action = increaseVolume(); //Increases volume with the Up Arrow Key
      break;
    case "ArrowDown":
      action = decreaseVolume(); //Lowers volume with the Down Arrow Key
      break;
    case "f":
      action = toggleFullScreen(); //Toggle Fullscreen mode with the 'F' Key
      break;
    case "m":
      action = toggleMute(); //Toggle Mute with the 'M' Key
      break;
  }
  if (
    action &&
    pressedKey !== "Control" &&
    pressedKey !== "Alt" &&
    pressedKey !== "Shift"
  ) {
    action();
    preventStandardHotKeyActions(event); //Stops the default key behavior like jumping the page with space.
  }
}
```

### 2.8 Enable hotkeys with focus

#### playerFocused():

Next we will allow the use of the THEOplayer hotkeys whenever the active element on the site is an element inside the player.

Any element that the user interacts with is set to be the active element. (e.g.: pressing a button with the mouse or by selecting something with tab for example.)

The snippet below will catch when the active element changes. If this element is part of the THEOplayer, we will enable the use of player hotkeys.

```javascript
function playerFocused() {
  if (wrapper.contains(document.activeElement)) {
    document.addEventListener("keydown", getPressedKey);
  } else {
    document.removeEventListener("keydown", getPressedKey);
  }
}
```

### 2.9 Enable Hotkeys on mouseEnter

Since browsers have default hotkey functionality (like skipping down the page by pressing space), you may only want to allow the use of the hotkeys whenever the viewer is actively watching the player.

The following functions will handle that use-case.

#### mouseInPlayer()

Gets called when a viewer enters the specified wrapper area with their cursor.

Creates an eventListener for both 'keydown' events and when the viewer's mouse leaves the wrapper area we specified at the beginning.

```javascript
function mouseInPlayer() {
  //Adds listeners for the keydown event and mouse leave event
  document.addEventListener("keydown", getPressedKey);
  wrapper.addEventListener("mouseleave", mouseOutPlayer);
}
```

#### mouseOutPlayer()

Gets called when a viewer exits the wrapper area.

When the viewer has left the wrapper area, the unused eventListeners are removed.

```javascript
function mouseOutPlayer() {
  //Checks if the mouse leaves the player wrapper area
  wrapper.removeEventListener("mouseleave", mouseOutPlayer);
  document.removeEventListener("keydown", getPressedKey);
}
```

### 3.0 Enabling the Hotkeys

#### enableShortcuts()

This function lets you choose between enabling the hotkeys site-wide, or only enabling them when the viewer's mouse is inside the player or the player is focused.

When calling this function you can use:

1. `enableShortcuts();` -To enable THEOplayer hotkeys site-wide.
2. `enableShortcuts('mouseOver');` -To enable THEOplayer hotkeys when the viewer's mouse is inside the specified area.

```javascript
function enableShortcuts(method) {
  switch (method) {
    case "mouseOver": //If the param reads 'mouseOver' shortcuts are only enabled when the mouse is inside of the player.
      wrapper.addEventListener("mouseenter", mouseInPlayer);
      break;
    case "playerFocused": //If the param reads 'playerFocused' shortcuts are only enabled when the player is focused.
      document.addEventListener("focus", playerFocused, true);
      break;
    default:
      document.addEventListener("keydown", getPressedKey); //Else player shortcuts are always enabled.
  }
}
enableShortcuts("mouseOver");
```

---

## Full JavaScript Code Example

```javascript
const wrapper = document.getElementById("yourPlayerId");
const element = document.querySelector(".video-js");

const player = new THEOplayer.Player(element, {
  ui: {
    fluid: true
  },
  libraryLocation: "/YourTHEOplayerLibraryLocation/",
  license: "your-license-here"
});

player.source = {
  sources: ["https://example.mpd"],
  metadata: {
    images: [
      {
        src: "https://thumbnail.jpg"
      }
    ],
    releaseDate: "2014-10-31",
    releaseYear: 2014,
    subtitle: "My movie subtitle",
    title: "My movie",
    type: "movie"
  }
};

function togglePlay() {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

function rewind() {
  player.currentTime -= 5; //Subtracts 5 seconds
}

function forward() {
  player.currentTime += 5; //Adds 5 seconds
}

function increaseVolume() {
  player.volume = Math.min(player.volume + 0.05, 1); //Increases volume by 5%
}

function decreaseVolume() {
  player.volume = Math.max(player.volume - 0.05, 1); //Lowers volume by 5%
}

function toggleFullScreen() {
  if (player.presentation.currentMode === "fullscreen") {
    player.presentation.requestMode("inline");
  } else {
    player.presentation.requestMode("fullscreen");
  }
}

function toggleMute() {
  player.muted = !player.muted;
}

function preventStandardHotKeyActions(event) {
  event.stopPropagation();
  event.preventDefault();
}

function getPressedKey(event) {
  const pressedKey = event.key;
  let action;
  switch (pressedKey) {
    case " ":
      action = togglePlay(); //Pauses or Unpauses with Space
      break;
    case "ArrowLeft":
      action = rewind(); //Rewinds the video with the Left Arrow Key
      break;
    case "ArrowRight":
      action = forward(); //Forwards the video with the Right Arrow Key
      break;
    case "ArrowUp":
      action = increaseVolume(); //Increases volume with the Up Arrow Key
      break;
    case "ArrowDown":
      action = decreaseVolume(); //Lowers volume with the Down Arrow Key
      break;
    case "f":
      action = toggleFullScreen(); //Toggle Fullscreen mode with the 'F' Key
      break;
    case "m":
      action = toggleMute(); //Toggle Mute with the 'M' Key
      break;
  }
  if (
    action &&
    pressedKey !== "Control" &&
    pressedKey !== "Alt" &&
    pressedKey !== "Shift"
  ) {
    action();
    preventStandardHotKeyActions(event); //Stops the default key behavior like jumping the page with space.
  }
}

function playerFocused() {
  if (wrapper.contains(document.activeElement)) {
    document.addEventListener("keydown", getPressedKey);
  } else {
    document.removeEventListener("keydown", getPressedKey);
  }
}

function mouseInPlayer() {
  //Checks if the mouse is inside the player wrapper area
  document.addEventListener("keydown", getPressedKey);
  wrapper.addEventListener("mouseleave", mouseOutPlayer);
}

function mouseOutPlayer() {
  //Checks if the mouse leaves the player wrapper area
  wrapper.removeEventListener("mouseleave", mouseOutPlayer);
  document.removeEventListener("keydown", getPressedKey);
}

function enableShortcuts(method) {
  switch (method) {
    case "mouseOver": //If the param reads 'mouseOver' shortcuts are only enabled when the mouse is inside of the player.
      wrapper.addEventListener("mouseenter", mouseInPlayer);
      break;
    case "playerFocused": //If the param reads 'playerFocused' shortcuts are only enabled when the player is focused.
      document.addEventListener("focus", playerFocused, true);
      break;
    default:
      document.addEventListener("keydown", getPressedKey); //Else player shortcuts are always enabled.
  }
}

//enableShortcuts('mouseOver');    //Enable player shortcuts only when mouse inside the player area.
enableShortcuts(); //Always enable shortcuts.
```

## Additional Resources

- [preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

- [stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)

- [List of Key values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)
