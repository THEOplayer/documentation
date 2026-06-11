# Getting Started on Roku

<!-- -->

OptiView Rebranding

OptiView Player is the new name for THEOplayer as part of the OptiView product suite. During the transition, you may still see references to THEOplayer. OptiView Player and THEOplayer refer to the same product.

This getting started guide gets you familiar with Roku and the Dolby OptiView Player Roku SDK. Upon completion of this guide, you'll have integrated the Player SDK in Roku's Hello World! sample project, configured a video, and used an event listener.

If you're looking for our Roku API reference, you can find them [here](/documentation/pr-preview/pr-690/theoplayer/api-reference/roku.md).

Consider using the [quickstart guide](#quickstart) if you're looking for a recap because you already went through this article.

## Introduction[​](#introduction "Direct link to Introduction")

The THEOplayer Roku SDK is designed specifically for the Roku platform. It is a custom video component allowing your channel to embed the video player easily.

### Purpose[​](#purpose "Direct link to Purpose")

This guide is created to help you get started with including the THEOplayer Roku SDK inside a Roku channel. This article will show you how to include, load, and create an instance of the THEOplayer Roku SDK. It will also explain how to play a video, and how you can add an event listener.

### Prerequisites[​](#prerequisites "Direct link to Prerequisites")

To start this guide you need the following items:

1. A Roku account ([read more about Roku account](https://support.roku.com/en-gb/article/115004382968)) linked with a Roku device ([see how to activate and link a Roku device](https://support.roku.com/en-gb/article/235180868)).

2. A Roku device with development mode activated ([read more about how to enable roku developer mode](https://blog.roku.com/developer/developer-setup-guide)). It is worth mentioning that you need to enroll for a developer program in order to activate the development mode on a Roku device ([you can enroll for a developer program here](https://developer.roku.com/enrollment/standard)).

3. A television/screen which supports an HDMI input.

4. Development workstation with an IDE and a web browser (Firefox, Chrome, Safari etc.).

5. Make sure that the Roku device and workstation are on the same local network (you should be able to ping the Roku device from your workstation).

6. An internet connection.

7. A Roku development environment which is needed to create a sample Roku channel and sideload it to a Roku device ([How to setup a Roku development environment](https://developer.roku.com/en-gb/docs/developer-program/getting-started/developer-setup.md)).

## System requirements[​](#system-requirements "Direct link to System requirements")

Roku keeps all devices up-to-date by issuing automatic updates. We aim to support all the up to date Roku devices.

## Certification changes[​](#certification-changes "Direct link to Certification changes")

There are certification updates that may affect THEOplayer and channels using THEOplayer. Updates regarding certification are announced two times a year. Every update is announced 6 months before the date of implementation.

After announcing changes, we may need to update the THEOplayer Roku SDK to fulfill these new certification criteria.

## Support Roku OS[​](#support-roku-os "Direct link to Support Roku OS")

Our main focus is to support the two latest versions of Roku OS. Support for older versions might be limited.

# Building your own channel using the THEOplayer SDK

In this section, we will go through the process of creating a Roku channel and using the THEOplayer Roku SDK.

## Starting point[​](#starting-point "Direct link to Starting point")

First of all, we need to create a Roku channel. You can either [create a new Roku project in eclipse](https://www.youtube.com/watch?v=suQ0qxFs0jw) or [VS Code](https://rokucommunity.github.io/vscode-brightscript-language/index.html) or start from the [Roku “Hello world” channel example](https://github.com/rokudev/hello-world) (Here is some [extra documentation](https://developer.roku.com/en-gb/docs/developer-program/getting-started/hello-world.md) about the “hello world” example).

When you have created a Roku channel, you can copy the THEOplayer Roku SDK ("THEOplayerSDK.pkg") into the directory of your project. You can download the most recent THEOplayer SDK from <https://portal.theoplayer.com>.

## Project structure:[​](#project-structure "Direct link to Project structure:")

![Roku Project Structure](data:image/png;base64,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)

1. **Components**: Contains all your components ( ".brs" and ".xml" files ). This folder should contain all UI and logic elements.

2. **"Images"**: The folder that contains channel artworks like splash screens, icons, logos etc.

3. **"Source"**: Typically only contains the "Main.brs" file. Roku starts running the channel from this file.

4. **"Manifest"**: This file should contain all the necessary information about the channel, like name, version, URI to splash screen etc. ([read more about the manifest file](https://developer.roku.com/en-gb/docs/developer-program/getting-started/architecture/channel-manifest.md))

5. **"THEOplayer.pkg"**: This is the packaged THEOplayer SDK. This package does not have to be here if you wish to load the THEOplayer SDK via HTTPS. In this case you have to pass the link to the packaged THEOplayer SDK instead of the relative path while loading the component library.

### Include THEOplayer SDK[​](#include-theoplayer-sdk "Direct link to Include THEOplayer SDK")

To include the THEOplayer SDK into the channel, follow these steps:

1. Load the THEOplayer SDK as a component library.

   To do this we have to add the following line into the `helloworld.xml` file, between the `<children>` tags.

   ```xml
   <ComponentLibrary id="THEOsdk" uri="pkg:/THEOplayer.pkg"/>

   ```

   It is worth mentioning that the "URI" field can also be an HTTPS link to the THEOplayer package. (In our case, we will add it to the: "pkg:\components\MainScene\MainScene.xml" file.)

2. Add the THEOplayerContainer group.

   We will need this group to append THEOplayer into our channel. In our case, we will add it to the `helloworld.xml` file, next to the `<ComponentLibrary>` node.

   ```xml
   <Group id="THEOplayerContainer"></Group>

   ```

3. Wait until THEOplayer SDK is loaded.

   We just want to be sure that THEOplayer is loaded correctly. We add the following code to our BrightScript `<script>`.

   ```brightscript
   function init()
     m.THEOsdk = m.top.findNode("THEOsdk")
     m.THEOsdk.observeField("loadStatus", "THEOsdkLoaded")
   end function

   function THEOsdkLoaded()
     ' this is the moment when THEOplayer is fully included on your channel
   end function

   ```

   It is worth mentioning that "m" works like the "this" keyword from other languages. "m" keyword points to the current component local namespace. So if you want to have access to variables across different functions inside the same component, use "m" to do so.

After these 3 steps, your `helloworld.xml` should resemble the following snippet:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<component name="HelloWorld" extends="Scene">
  <children>
    <ComponentLibrary id="THEOsdk" uri="pkg:/THEOplayer.pkg"/>
    <Group id="THEOplayerContainer"></Group>
  </children>
<script type="text/brightscript" >
<![CDATA[
  function init()
    m.THEOsdk = m.top.findNode("THEOsdk")
    m.THEOsdk.observeField("loadStatus", "THEOsdkLoaded")
  end function

  function THEOsdkLoaded()
    ' this is moment when theo player is fully included to Your channel
  end function
]]>
</script>
</component>

```

When you deploy this app to your local Roku device, it should still be an empty, gray channel.

### Create an instance of the THEOplayer SDK using BrightScript[​](#create-an-instance-of-the-theoplayer-sdk-using-brightscript "Direct link to Create an instance of the THEOplayer SDK using BrightScript")

In this simple example we will create an instance inside the `THEOsdkLoaded` function, but remember that once the component library is loaded, you can use it across the whole channel.

There is also no need to load this component again. (In our case we will add it to the "pkg:\components\MainScene\MainScene.brs" file.)

```brightscript
function THEOsdkLoaded()
  m.THEOplayer = CreateObject("RoSGNode","THEOsdk:THEOplayer")
  m.playerContainer = m.top.findNode("THEOPlayerContainer")
  m.playerContainer.appendChild(m.THEOplayer)
end function

```

When you deploy your project to your local Roku device, the channel should now be a plain black background. (It's now black because it's an empty video player container.)

Make sure your files resemble this:

* pkg:/source/main.brs:

  ```brightscript
  sub Main()
      print "in showChannelSGScreen"
      'Indicate this is a Roku SceneGraph application'
      screen = CreateObject("roSGScreen")
      m.port = CreateObject("roMessagePort")
      screen.setMessagePort(m.port)

      'Create a scene and load /components/helloworld.xml'
      scene = screen.CreateScene("HelloWorld")
      screen.show()

      while(true)
          msg = wait(0, m.port)
          msgType = type(msg)
          if msgType = "roSGScreenEvent"
              if msg.isScreenClosed() then return
          end if
      end while
  end sub

  ```

* pkg:/manifest file:

  ```brightscript
  ##   Channel Details
  title=Hello World
  major_version=1
  minor_version=0
  build_version=00001

  ##   Channel Assets
  ###  Main Menu Icons / Channel Poster Artwork
  #### Image sizes are FHD: 540x405px | HD: 290x218px | SD: 214x144px
  mm_icon_focus_fhd=pkg:/images/channel-poster_fhd.png
  mm_icon_focus_hd=pkg:/images/channel-poster_hd.png
  mm_icon_focus_sd=pkg:/images/channel-poster_sd.png

  ###  Splash Screen + Loading Screen Artwork
  #### Image sizes are FHD: 1920x1080px | HD: 1280x720px | SD: 720x480px
  splash_screen_fhd=pkg:/images/splash-screen_fhd.jpg
  splash_screen_hd=pkg:/images/splash-screen_hd.jpg
  splash_screen_sd=pkg:/images/splash-screen_sd.jpg

  splash_color=#000000
  splash_min_time=1

  ```

* pkg:/components/helloworld.xml:

  ```xml
  <?xml version="1.0" encoding="utf-8" ?>
  <component name="HelloWorld" extends="Scene">
    <children>
      <ComponentLibrary id="THEOsdk" uri="pkg:/THEOplayerSDK.pkg"/>
      <Group id="THEOplayerContainer"></Group>
    </children>
  <script type="text/brightscript" >
  <![CDATA[
    function Init()
      m.THEOsdk = m.top.findNode("THEOsdk")
      m.THEOsdk.observeField("loadStatus", "THEOsdkLoaded")
    end function

    function THEOsdkLoaded()
      m.THEOplayer = CreateObject("RoSGNode","THEOsdk:THEOplayer")
      m.playerContainer = m.top.findNode("THEOplayerContainer")
      m.playerContainer.appendChild(m.THEOplayer)
    end function
  ]]>
  </script>
  </component>

  ```

Great! You have included the THEOplayer SDK into your channel now! If you run this channel, you will only see a black screen because we did not set any source and we did not start the playback. Follow the next sections to start video playback.

### Create an instance of the THEOplayer SDK using XML[​](#create-an-instance-of-the-theoplayer-sdk-using-xml "Direct link to Create an instance of the THEOplayer SDK using XML")

There is an alternative way to include the THEOplayer SDK. You can include the component library using only XML. In this approach, you want to make sure that the component library is fully loaded before including the component into the scene graph.

An example of this approach is demonstrated through our [basic-playback-app project on Github](https://github.com/THEOplayer/samples-roku-sdk/tree/master/basic-playback-app). In this project, `MainScene.xml` loads the SDK, and the instance is created through (for example) `<THEOsdk:THEOplayer id="VideoPlayerChromefull" controls="true" />` in `ChromefullView.xml`.

### Configure license[​](#configure-license "Direct link to Configure license")

You need to configure your THEOplayer Roku SDK license value through the following snippet:

```brightscript
m.THEOplayer.callFunc("configure", {license: "your-license"})

```

Add these 3 lines after `m.playerContainer.appendChild(m.THEOplayer)`.

Note that you have to replace `your-license` with your actual license value as specified on the [THEOplayer Development Portal](https://portal.theoplayer.com/) for your THEOplayer Roku SDK.

![](/documentation/pr-preview/pr-690/assets/images/roku-portal-sdk-82cbb1f9e8d639efd2c8924109f29d73.png)

### Video playback example[​](#video-playback-example "Direct link to Video playback example")

To play videos using the THEOplayer SDK, we need to take a few steps:

1. Include the THEOplayer SDK and create an instance of it. (described in above section)

2. Set a player source. To accomplish this we will edit the `THEOsdkLoaded` function. (Added later in the "Using the THEOplayer SDK" section.)

   ```brightscript
   function THEOsdkLoaded()
     m.THEOplayer = CreateObject("RoSGNode","THEOsdk:THEOplayer")
     m.playerContainer = m.top.findNode("THEOplayerContainer")
     m.playerContainer.appendChild(m.THEOplayer)
     m.THEOplayer.callFunc("configure", {license: "your-license"})
     m.THEOplayer.source = {
       "sources": [
         {
           "src": "http://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",
           "type": "application/x-mpegURL"
         }
       ]
     }
   end function

   ```

3. Set focus to the THEOplayer SDK to make sure that remote controls will work properly.

   ```brightscript
   function THEOsdkLoaded()
     m.THEOplayer = CreateObject("RoSGNode","THEOsdk:THEOplayer")
     m.playerContainer = m.top.findNode("THEOplayerContainer")
     m.playerContainer.appendChild(m.THEOplayer)
     m.THEOplayer.callFunc("configure", {license: "your-license"})
     m.THEOplayer.source = {
       "sources": [
         {
           "src": "http://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",
           "type": "application/x-mpegURL"
         }
       ]
     }
     m.THEOplayer.setFocus(true)
   end function

   ```

4. Play a video with the "play" method.

   ```brightscript
   function THEOsdkLoaded()
     m.THEOplayer = CreateObject("RoSGNode","THEOsdk:THEOplayer")
     m.playerContainer = m.top.findNode("THEOplayerContainer")
     m.playerContainer.appendChild(m.THEOplayer)
     m.THEOplayer.callFunc("configure", {license: "your-license"})
     m.THEOplayer.source = {
       "sources": [
         {
           "src": "http://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",
           "type": "application/x-mpegURL"
         }
       ]
     }
     m.THEOplayer.setFocus(true)
     m.THEOplayer.callFunc("play")
   end function

   ```

After these 4 steps, your `helloworld.xml` file should resemble the following snippet:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<component name="HelloWorld" extends="Scene">
  <children>
    <ComponentLibrary id="THEOsdk" uri="pkg:/THEOplayerSDK.pkg"/>
    <Group id="THEOplayerContainer"></Group>
  </children>
<script type="text/brightscript" >
<![CDATA[
  function Init()
    m.THEOsdk = m.top.findNode("THEOsdk")
    m.THEOsdk.observeField("loadStatus", "THEOsdkLoaded")
  end function

  function THEOsdkLoaded()
    m.THEOplayer = CreateObject("RoSGNode","THEOsdk:THEOplayer")
    m.playerContainer = m.top.findNode("THEOplayerContainer")
    m.playerContainer.appendChild(m.THEOplayer)
    m.THEOplayer.callFunc("configure", {license: "your-license"})
    m.THEOplayer.source = {
      "sources": [
        {
          "src": "https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",
          "type": "application/x-mpegURL"
        }
      ]
    }
    m.THEOplayer.setFocus(true)
    m.THEOplayer.callFunc("play")
  end function
]]>
</script>
</component>

```

Deploying this app should result in the start-up of your configured video, as demonstrated by the screenshot below.

![](/documentation/pr-preview/pr-690/assets/images/roku-loading-source-89d4166a78190aad5683764e487da9f3.jpg)

### Add a player event listener[​](#add-a-player-event-listener "Direct link to Add a player event listener")

Adding an event listener in the Roku THEOplayer SDK is straightforward. All you have to do is follow these steps:

1. Create Callback function

   This code will be executed when the event will be propagated. (In this example we will add the function to the `helloworld.xml` file.)

   ```brightscript
   function onPlaying(params)
     print("I am playing")
     print(params)
   end function

   ```

2. Add the callback function to the component interface. (In this example we will edit the `helloworld.xml` file.)

   ```xml
   <?xml version="1.0" encoding="utf-8" ?>
   <component name="HelloWorld" extends="Scene">
     <interface>
       <function name="onPlaying"/>
     </interface>
     <children>
       <ComponentLibrary id="THEOsdk" uri="pkg:/THEOplayerSDK.pkg"/>
       <Group id="THEOplayerContainer"></Group>
     </children>
   </component>

   ```

3. Set a listener and call the `addEventListener` method. (In this example we will edit the `helloworld.xml` file, and add a line inside the `THEOsdkLoaded` function.)

   ```brightscript
   m.THEOplayer.callFunc("addEventListener", "playing", m.top, "onPlaying")

   ```

4. Now You will be able to see the following output in the debug console. ([How to use the debug console in Roku.](https://developer.roku.com/en-gb/videos/courses/rsg/debugging.md))

   ```brightscript
   I am playing
   <Component: roAssociativeArray> =
   {
       currentTime: 0
       date: "2020-09-08T11:06:09Z"
       type: "playing"
   }

   ```

5. Check your code and make sure `pkg:/components/helloworld.xml` resembles the following snippet:

   ```xml
   <?xml version="1.0" encoding="utf-8" ?>
   <component name="HelloWorld" extends="Scene">
     <interface>
       <function name="onPlaying"/>
     </interface>
     <children>
       <ComponentLibrary id="THEOsdk" uri="pkg:/THEOplayerSDK.pkg"/>
       <Group id="THEOplayerContainer"></Group>
     </children>
   <script type="text/brightscript">
   <![CDATA[
     function Init()
       m.THEOsdk = m.top.findNode("THEOsdk")
       m.THEOsdk.observeField("loadStatus", "THEOsdkLoaded")
     end function

     function THEOsdkLoaded()
       m.THEOplayer = CreateObject("RoSGNode","THEOsdk:THEOplayer")
       m.playerContainer = m.top.findNode("THEOplayerContainer")
       m.playerContainer.appendChild(m.THEOplayer)
       m.THEOplayer.callFunc("configure", {license: "your-license"})
       m.THEOplayer.source = {
         "sources": [
           {
             "src": "https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",
             "type": "application/x-mpegURL"
           }
         ]
       }
       m.THEOplayer.setFocus(true)
       m.THEOplayer.callFunc("addEventListener", "playing", m.top, "onPlaying")
       m.THEOplayer.callFunc("play")
     end function

     function onPlaying(params)
       print("I am playing")
       print(params)
     end function

   ]]>
   </script>
   </component>

   ```

### Remove a player event listener[​](#remove-a-player-event-listener "Direct link to Remove a player event listener")

In order to remove an event listener, call the line below:

```brightscript
 m.THEOplayer.callFunc("removeEventListener", "playing", m.top, "onPlaying")

```

You can put this line anywhere you want. Just make sure that `m.THEOplayer` is used in the proper context. For example, in `pkg:/components/helloworld.xml` you can do something like this:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<component name="HelloWorld" extends="Scene">
  <interface>
    <function name="onPlaying"/>
  </interface>
  <children>
    <ComponentLibrary id="THEOsdk" uri="pkg:/THEOplayerSDK.pkg"/>
    <Group id="THEOplayerContainer"></Group>
  </children>
<script type="text/brightscript">
<![CDATA[
  function Init()
    m.THEOsdk = m.top.findNode("THEOsdk")
    m.THEOsdk.observeField("loadStatus", "THEOsdkLoaded")
  end function

  function THEOsdkLoaded()
    m.THEOplayer = CreateObject("RoSGNode","THEOsdk:THEOplayer")
    m.playerContainer = m.top.findNode("THEOplayerContainer")
    m.playerContainer.appendChild(m.THEOplayer)
    m.THEOplayer.callFunc("configure", {license: "your-license"})
    m.THEOplayer.source = {
      "sources": [
        {
          "src": "https://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8",
          "type": "application/x-mpegURL"
        }
      ]
    }
    m.THEOplayer.setFocus(true)
    m.THEOplayer.callFunc("addEventListener", "playing", m.top, "onPlaying")
    m.THEOplayer.callFunc("play")
  end function

  function onPlaying(params)
    print("I am playing")
    print(params)
    m.THEOplayer.callFunc("removeEventListener", "playing", m.top, "onPlaying")
  end function

]]>
</script>
</component>

```

In this example, the `onPlaying` callback will be executed only once, because we have called `removeEventListener` inside of the `onPlaying` function.

### Quickstart[​](#quickstart "Direct link to Quickstart")

Use this section if you are already familiar with setting up the THEOplayer Roku SDK.

1. Build a THEOplayer Roku SDK at <https://portal.theoplayer.com>.
2. Setup Roku's [`hello-world` sample project](https://github.com/rokudev/hello-world).
3. Add (and rename) your THEOplayer Roku SDK to the `hello-world` project.
4. Replace the code in `source/components/helloworld.xml` with the codeblock above.
5. Update the value of `license` in your updated `source/components/helloworld.xml` with your actual license value according to <https://portal.theoplayer.com>.
6. Confirm playback by deploying this project to your local Roku device.

## Next steps[​](#next-steps "Direct link to Next steps")

Consider the following actions to improve your knowledge on the THEOplayer Roku SDK:

* Clone (or download) our sample Roku applications at <https://github.com/THEOplayer/samples-roku-sdk>. These applications provide an alternative perspective on using THEOplayer in Roku.
* Go through the [how-to guides](/documentation/pr-preview/pr-690/theoplayer/how-to-guides.md). We try to provide the "Roku implementation" in as many articles as we can. (e.g. ["How to programmatically enable or disable text tracks"](/documentation/pr-preview/pr-690/theoplayer/how-to-guides/texttrack/how-to-programmatically-disable-text-tracks.md))
