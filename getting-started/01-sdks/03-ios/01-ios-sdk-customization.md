# iOS SDK Customization

## Custom CSS and JavaScript files

If you want to use custom CSS or JavaScript files you can instantiate the player with a THEOplayerConfiguration object.

```swift
let stylePath = Bundle.main.path(forResource:"style", ofType: "css")! 
let scriptPath = Bundle.main.path(forResource:"script", ofType: "js")!
let playerConfig = THEOplayerConfiguration(defaultCSS: false, cssPaths:[stylePath], jsPaths: [scriptPath])
/* or let playerConfig = THEOplayerConfiguration(chromeless: true, cssPaths:[stylePath], jsPaths: [scriptPath]) */  
var theoplayer = THEOplayer(configuration: playerConfig)
```

#### Custom CSS and the Chromeless flag

With the chromeless flag you can choose to use the chromeless version of the player which does not contain the THEOplayer UI. This allows you to write your own custom UI.

The THEOplayer css is not loaded when chromeless is enabled.

When chromeless is false, the THEOplayer UI is used. In that case the default style can still be disabled by setting the defaultCss flag to false.

#### Communication between a custom JavaScript file and the THEOplayer iOS SDK (≥ 1.0.10)

You can send messages from within a custom JavaScript file to the iOS SDK.

1. Register a message listener in your iOS app:

```swift
theoplayer.addJavascriptMessageListener(name: "myMessageName", callback: onMessageReceived)  
func onMessageReceived(message : [String:Any]) {
    print("Received message from JavaScript: " + message["data"])
}
```
2. Send a message in your custom JavaScript file (script.js):

To send a message the `_webkit.messageHandlers.<messageName>.postMessage(<message body>)_` method must be used.

```swift
/* this example sends a message every 10 seconds */  
setInterval(function() {  
    window.webkit.messageHandlers.myMessageName.postMessage("message");  
}, 10000)
```swift

The message body can be a JavaScript object, in that case the resulting type in Swift will be a dictionary [String:Any]. The message body can also be a string, then the result in Swift will be a dictionary with one value and "data" as key.

## Publishing to App Store

Please not that this is only necessary for versions below **2.16**. Do not use this step if you have a newer version.

THEOplayer.framework is released as a FAT framework containing several architectures. The framework includes the i386, x86_64, armv7 and arm64 architectures. Sometimes the App Store will not accept these (especially legacy simulator i386 and x86_64 architectures.) 

In order to thin down the framework prior to archiving it and submitting it for upload, use the following command in Terminal:

```
lipo [path to THEOplayer.framework] -remove [i386, x86_64] -output [path to output the thinned framework]
```
