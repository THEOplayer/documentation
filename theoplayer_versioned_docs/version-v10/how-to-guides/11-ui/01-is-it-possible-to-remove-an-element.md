# Is it possible to remove an element from the UI?

This question may be asked if you want to limit the options/controls that are showed in the UI.

There are three possible approaches to this:

1. Use the Chromeless version and build your own UI on top of it. This may be useful if you do not need to remove just one element, but want a radically different UI.
2. Hide the element through CSS
3. Remove it through JavaScript

In the following we will briefly explore the last two possibilities.

## SDKs

| Web SDK |           Android SDK            |             iOS SDK              | tvOS SDK | Android TV SDK | Chromecast SDK |
| :-----: | :------------------------------: | :------------------------------: | :------: | :------------: | :------------: |
|   Yes   | Through CSS/JavaScript injection | Through CSS/JavaScript injection |   N/A    |      N/A       |      N/A       |

## Code examples

For this example we will consider the Speed menu option (control bar > Settings > Speed) as the element to remove from the page. The following methods may of course be used for other elements.

##### Web SDK

**Hide the element with CSS**

We identify the element and hide it. Since In this specific case there is no id or class to identify this element specifically, we make use of its aria attribute. Of course, should it change, this line of code should be adapted accordingly.

```css
.theoplayer-skin li[aria-label='Open the video speed settings menu'] {
  display: none !important;
}
```

**Remove the element through JavaScript**

In alternative to CSS, it is also possible to achieve the same result with JavaScript, in the following way.

```js
function firstplay(event) {
  player.removeEventListener('playing', firstplay);
  var speed = document.querySelector('.theoplayer-skin li[aria-label="Open the video speed settings menu"]');
  speed.parentNode.removeChild(speed);
}
player.addEventListener('sourcechange', function () {
  player.removeEventListener('playing', firstplay);
  player.addEventListener('playing', firstplay);
});
```

##### Legacy Android SDK (4.12.x)

To achieve the same result on Android SDK, the same CSS need to be passed to your app.

**Step 1**

To learn how to inject CSS into your Android project, follow the guide [Android SDK Customization - Custom CSS and JavaScript files](../../../theoplayer_versioned_docs/version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).

**Step 2**

In the CSS or JavaScript file you created, add the code reported above in the Web SDK section.

##### Legacy iOS/tvOS SDK (4.12.x)

To achieve the same result on iOS SDK, the same CSS need to be passed to your app.

**Step 1**

To learn how to inject CSS into your iOS project, follow the guide [iOS SDK Customization - Custom CSS and JavaScript files](../../../theoplayer_versioned_docs/version-v4/faq/01-how-to-add-css-or-javascript-files-to-android-ios.md).

**Step 2**

In the CSS or JavaScript file you created, add the code reported above in the Web SDK section.

##### Roku SDK

What UI elements should be visible for Chromefull THEOplayer on Roku? Currently, Chromefull THEOplayer uses Roku native player and that one has e.g. a clock UI element while paused.

```xml
<?xml version="1.0" encoding="utf-8" ?>
<component name="TestScene" extends="Scene">
    <interface>
    </interface>

    <script type = "text/brightscript" >

        <![CDATA[

        function Init()
            m.player = m.top.findNode("TestPlayer")
            m.player.configuration = {
              "license": "" ' put the THEOplayer license between apostrophes
            }
            ' remove the clock UI node
            m.player.getChildren(-1, 0)[0].getChildren(-1, 0)[1].removeChildIndex(11)

            setSource()
            m.player.setFocus(true)
            m.player.callFunc("play")
        end function

        function setSource()
            sourceDescription = {
                "sources": [
                    {
                        "src": "http://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",
                        "type": "application/x-mpegURL"
                    }
                ]
            }
            m.player.source = sourceDescription
            m.player.source.Live = false
            m.player.source.LiveBoundsPauseBehavior = "pause"
        end function

        ]]>

    </script>

    <children>
	    <THEOsdk:THEOplayer id="TestPlayer"/>
    </children>
</component>
```
