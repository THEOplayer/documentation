---
sidebar_position: 4
---

# Embed web player in native iOS app

How to embed the THEOlive web player into a WKWebView in a native iOS app.

---

:::note 📘 Prefer our iOS SDK
Next to our web SDK, we also offer an iOS SDK which is more optimized for native playback. Therefore, we recommend that SDK over using a WebView and loading the web SDK.
:::

## Create your webpage

Make an HTML page in which you add your THEOlive player. This example uses the embed player, but you can also use the npm player if you need more control.

```html your-custom-embed-page.com
<!DOCTYPE html>
<html>
  <head>
    <title>Testing embed.js</title>
  </head>
  <body>
    <div data-theo-live-id="<your-channel-id>" style="width: 600px; height: 400px"></div>
    <script type="text/javascript" src="https://cdn.theo.live/player/embed.js" async></script>
  </body>
</html>
```

Host this page on a location that is accessible from your native iOS application.

## Configure your WKWebView

To enable autoplay make sure to enable inline playback. To do this:

- create a [WKWebViewConfiguration](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration)
- set its [allowsInlineMediaPlayback](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/1614793-allowsinlinemediaplayback) to true
- pass that configuration to your webview when initialising it

```swift
let webConfiguration = WKWebViewConfiguration()
webConfiguration.allowsInlineMediaPlayback = true
let webView = WKWebView(frame: .zero, configuration: configuration)
```

## Add the WKWebView to your app

Now load the webpage you made in the first step and embed the WKWebView somewhere in your app.

```swift
let yourWebPageURL = URL(string: "https://your-custom-embed-page.com")!
let urlRequest = URLRequest(url: yourWebPageURL)
webView.load(urlRequest)
yourView.addSubview(webView)
```
