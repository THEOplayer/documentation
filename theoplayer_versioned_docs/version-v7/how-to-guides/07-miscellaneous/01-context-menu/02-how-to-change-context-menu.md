# How to change the context menu

This question is typically asked by developers who want to change the logo in the context menu, change the default text or add some items.

The snippet below does exactly that.

```js
function customizeContextMenu(container) {
  var contextMenu = container.querySelector(".theo-context-menu");

  // change context menu text
  var contextMenuFirstItem = contextMenu.querySelector(".theo-context-version");
  contextMenuFirstItem.innerText = "Brand X";

  // change mini logo
  var contextLogo = contextMenu.querySelector(".theo-0logo");
  contextLogo.style.backgroundImage =
    "url('https://image.freepik.com/free-icon/line-logo_318-102660.jpg')";
  contextLogo.style.backgroundSize = "cover";
  contextLogo.querySelector("svg").style.visibility = "hidden";

  // add a line
  var contextMenuSecondItem = document.createElement("li");
  contextMenuSecondItem.innerText = "24/07/2018";
  contextMenu.appendChild(contextMenuSecondItem);
}

var element = document.querySelector(".video-container");
var player = new THEOplayer.Player(element, playerConfig);
customizeContextMenu(element);
```

It's important to note that `customizeContextMenu` is immediately called after initializing a THEOplayer instance.

Another common question is to remove the context menu altogether. The context menu can be disabled as it is one of the feature flags you can toggle. You can manage your THEOplayer configuration via [THEOportal](https://portal.theoplayer.com/login)

To verify whether this feature is enabled you can execute the query below.

```js
var contextMenuEnabled = THEOplayer.features.indexOf("contextmenu") > -1;
```
