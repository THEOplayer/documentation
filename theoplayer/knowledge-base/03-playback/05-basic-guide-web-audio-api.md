# Basic guide to Web Audio API

THEOplayer provides a [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API), which allows you to do some quite nifty stuff with the player's audio output. If you are unfamiliar with the ideas behind Web Audio API, Mozilla has an excellent intro to the basic ideas you need to know about [here](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API). This guide will help you set up a demo just like the one we have in our [Demo Zone](https://demo.theoplayer.com/web-audio-api).

This guide expects that you have a THEOplayer license. Be sure to have THEOplayer version 2.19.4 or higher.

## Getting started with THEOplayer

The first thing you need is a valid THEOplayer set-up. If you have no experience with setting up our player, we have an excellent [getting started guide](../../getting-started/01-sdks/01-web/00-getting-started.md). In the following sections, we will assume that you have just created a THEOplayer instance and bound it to the variable 'player'.

## A very basic Web Audio graph

The very first step in working with Web Audio is to create an AudioContext. This can be achieved as follows:

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
```

Once you have an AudioContext, you can create an AudioNode which contains the player's audio output:

```js
var sourceNode = player.audio.createAudioSourceNode(audioCtx);
```

If we stop now, the result is that the player's audio will be piped into the graph, but will not be connected to any outputs, resulting in no sound output from your speakers/headphones. The next step to get it working again would be:

```js
sourceNode.connect(audioCtx.destination);
```

Which will result in the audio being output again.

## Playing with the audio gain

Of course, this is not a very useful use of the Web Audio API, since essentially we are doing nothing with the audio. A first thing we could do is play with the gain, i.e. manipulate the player volume by using the Web Audio API.

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
var sourceNode = player.audio.createAudioSourceNode(audioCtx);
var gainNode = audioCtx.createGain();
sourceNode.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

This sets up a gain filter on top of the player audio output, which we can manipulate using the gainNode.gain.value property. An example would be that we could set up a callback which monitors mouse movement:

```js
var updatePage = function (e) {
  gainNode.gain.value = (screen.height - e.screenY) / screen.height;
};

document.onmousemove = updatePage;
```

The callback will be executed every time the mouse position is updated. The result will be that the gain will be adjusted to be equal to the ratio of the distance of the mouse pointer position from the bottom of the screen (in pixels) and the screen height. So the farther you move the mouse pointer down, the quieter the output of the video will become, and the opposite effect when you move the mouse pointer up.

Playing with stereo panning

Similarly, we can play with the stereo panning of the player audio output. This can be achieved by playing with the pan.value property of the StereoPanner node.

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
var sourceNode = player.audio.createAudioSourceNode(audioCtx);
var pannerNode = audioCtx.createStereoPanner();
sourceNode.connect(pannerNode);
pannerNode.connect(audioCtx.destination);

var updatePage = function (e) {
  pannerNode.pan.value = (2 * e.screenX) / screen.width - 1;
};

document.onmousemove = updatePage;
```

The result is that moving the pointer left and right changes the stereo panning of the player audio, with balanced audio at the exact middle of the screen, pan all the way to the left when the pointer's on the left edge, and pan all the way right when the pointer's on the right edge.

## Double audio trouble

We can also do both things at the same time. The way Web Audio works allows us to pipe the output of one node as input for another node (in most cases). This way, we can combine the two tricks we were doing before into one trick: modifying the volume by moving the mouse pointer up and down, and modifying the panning by moving the mouse left and right. This is achieved by the following code:

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
var sourceNode = player.audio.createAudioSourceNode(audioCtx);
var gainNode = audioCtx.createGain();
var pannerNode = audioCtx.createStereoPanner();
sourceNode.connect(pannerNode);
pannerNode.connect(gainNode);
gainNode.connect(audioCtx.destination);

var updatePage = function (e) {
  gainNode.gain.value = (screen.height - e.screenY) / screen.height;
  pannerNode.pan.value = (2 * e.screenX) / screen.width - 1;
};

document.onmousemove = updatePage;
```

## Bringing it all together

The next step we can take is to create a simple demo where we manipulate the audio of two players simultaneously. Assume that we have two players set up, bound to variables player1 and player2. Then we can set up exactly the same audio pipeline for both players, and reroute their audio to a single output.

```js
var sourceNode1 = player1.audio.createAudioSourceNode(audioCtx);
var gainNode1 = audioCtx.createGain();
var pannerNode1 = audioCtx.createStereoPanner();
sourceNode1.connect(pannerNode1);
pannerNode1.connect(gainNode1);
gainNode1.connect(audioCtx.destination);

var sourceNode2 = player2.audio.createAudioSourceNode(audioCtx);
var gainNode2 = audioCtx.createGain();
var pannerNode2 = audioCtx.createStereoPanner();
sourceNode2.connect(pannerNode2);
pannerNode2.connect(gainNode2);
gainNode2.connect(audioCtx.destination);
```

And at this point, we can do some more complex tricks. We can actually do the same thing as we did in the previous section, except that we can do the inverse for the second player's audio. That is, we can make moving the mouse pointer up decrease the volume for the second player, and we can invert the panning as well. This can be achieved with the following callback:

```js
var updatePage = function (e) {
  gainNode1.gain.value = (screen.height - e.screenY) / screen.height;
  pannerNode1.pan.value = (2 * e.screenX) / screen.width - 1;
  gainNode2.gain.value = e.screenY / screen.height;
  pannerNode2.pan.value = 1 - (2 * e.screenX) / screen.width;
};

document.onmousemove = updatePage;
```

Try it out!
