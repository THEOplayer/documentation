# How to change the Big Play Button?

The question above is typically asked by developers who want to increase/decrease the size, set a different image instead, or introduce on-hover behavior.

## SDKs

| Web SDK |      Android SDK      |        iOS SDK        | tvOS SDK | Android TV SDK | Chromecast SDK | Roku SDK |
| :-----: | :-------------------: | :-------------------: | :------: | :------------: | :------------: | :------: |
|   Yes   | Through CSS injection | Through CSS injection |   N/A    |      N/A       |      N/A       |   N/A    |

## Code example

The snippet below demonstrates how you could set another image instead of the default big play button. Additionally, the button becomes bigger when you hover it.

##### Web SDK

```css
/* Increase button size when hovering */
.theoplayer-skin .vjs-big-play-button:hover {
  background: none;
  -webkit-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  transition-duration: 0.2s;
  transform: translate(-50%, -50%) scale(1.2);
  transition: transform 0.2s;
}
/* Set other image */
.theoplayer-skin .vjs-big-play-button:before {
  content: "";
  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjcycHgiIGhlaWdodD0iNzJweCIgdmlld0JveD0iMCAwIDcyIDcyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+dmlkZW8gaWNvbiBjb3B5IDQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iSG9tZXBhZ2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJIb21lcGFnZS1fZGVza3RvcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ3MC4wMDAwMDAsIC0zMDEyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iZnd0diIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLjAwMDAwMCwgMjc4OC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJiaWctdmlkZW8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA1MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0idmlkZW8tMnB4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNTEuMDAwMDAwLCAxNzUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJ2aWRlby1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNS4wMDAwMDAsIDM1LjAwMDAwMCkgcm90YXRlKC0zNjAuMDAwMDAwKSB0cmFuc2xhdGUoLTM1LjAwMDAwMCwgLTM1LjAwMDAwMCkgIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMiIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIGZpbGwtb3BhY2l0eT0iMC4xNSIgZmlsbD0iIzAwMDAwMCIgY3g9IjM1IiBjeT0iMzUiIHI9IjM1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJUcmlhbmdsZSIgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIyNi45ODI4NTY5IDQ5Ljk1Mzc1MiAyNi45ODI4NTY5IDE5LjM0MjEwNTMgNDguNTQzNDU4OSAzMy45OTY5NDI5Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==")
    no-repeat 0 0;
  /* background: url('http://i.stack.imgur.com/LT3WE.png') no-repeat 0 0; */ /* Use image instead */
  background-size: 100%;
  display: block;
}
/* Remove default THEOplayer image */
.theo-big-play-button-svg-container svg {
  display: none;
}
/* Remove default spotlight around button on focus */
.theoplayer-skin:hover .vjs-big-play-button:after,
.theoplayer-skin .vjs-big-play-button:focus:after {
  opacity: 0;
}
```

##### Legacy Android SDK (4.12.x)

To achieve the same result on Android SDK, the same CSS need to be passed to your app.

**Step 1**

To learn how to inject CSS into your Android project, follow the guide [Android SDK Customization - Custom CSS and JavaScript files](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).

**Step 2**

In the CSS file you created, add the code reported above in the Web SDK section.

##### Legacy iOS/tvOS SDK (4.12.x)

To achieve the same result on iOS SDK, the same CSS need to be passed to your app.

**Step 1**

To learn how to inject CSS into your iOS project, follow the guide [iOS SDK Customization - Custom CSS and JavaScript files](../../faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).

**Step 2**

In the CSS file you created, add the code reported above in the Web SDK section.

The snippet above also removes some default behavior, such as the shadow-effect when hovering the big play button.

![Big Play Button](../../assets/img/big-play-button.png "Big Play Button")
