/**
 * Shared helpers for the THEOplayer Web SDK examples.
 *
 * - Exposes the player created by Open Video UI as a global `player` variable,
 *   so you can use `player` and `THEOplayer` from your browser's developer console.
 * - Provides a small messaging layer between the demo page and this example.
 *   You don't need any of this in your own application.
 */

/**
 * Call `callback` with the THEOplayer instance as soon as the Open Video UI has created it.
 */
function onPlayerReady(callback) {
  const ui = document.querySelector('theoplayer-default-ui, theoplayer-ui');
  if (!ui) return;
  if (ui.player) {
    callback(ui.player);
  } else {
    ui.addEventListener('theoplayerready', () => callback(ui.player), { once: true });
  }
}

/**
 * Call `callback` whenever the demo page sends a message with the given type.
 */
function onParentMessage(type, callback) {
  window.addEventListener('message', (event) => {
    if (event.origin !== location.origin) return;
    const data = event.data;
    if (typeof data !== 'object' || data == null || data.type !== type) return;
    callback(data);
  });
}

/**
 * Send a message to the demo page (if any).
 */
function sendToParent(type, data) {
  if (window.parent === window) return;
  window.parent.postMessage({ ...data, type }, location.origin);
}

function exposePlayer() {
  onPlayerReady((player) => {
    window.player = player;
    sendToParent('ready');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', exposePlayer);
} else {
  exposePlayer();
}
