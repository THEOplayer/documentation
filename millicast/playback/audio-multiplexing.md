---
title: "Audio Multiplexing"
slug: /audio-multiplexing
---
The Dolby.io platform supports Audio Multiplexing, a feature that allows viewers to receive multiple audio streams in a conference-like experience, where each audio stream is emphasized or deemphasized based on activity.

> 👍 Building a Conference Application?
> 
> [Dolby.io Communications](https://dolby-io.readme.io/communications-apis/docs) includes SDKs and APIs explicitly for building conferencing experiences. Dolby.io Communications and Streaming [integrate](ref:start-rts) to help scale conferences for interactive broadcast solutions.

## Understanding Audio Multiplexing

To first understand Audio Multiplexing, we need to understand how the Dolby.io servers ingest feeds. When [Broadcasting](/millicast/broadcast/index.mdx), the Dolby.io Streaming servers will assign the most recent published stream source as the "_Main Source_", a function that allows broadcasters to seamlessly overwrite streams or add [Redundant Streams](/millicast/broadcast/redundant-ingest/index.md). For basic broadcasts, this is sufficient, for more advanced broadcasts Dolby.io provides two features that are exceptions:

1. Creating a [Multisource stream](/millicast/broadcast/multi-source-broadcasting.md) for [Multi-view](/millicast/playback/multiview.md) experiences.
2. Audio Multiplexing, for experiences with multiple audio streams playing at once, such as that seen on "_Clubhouse_" type platforms and apps.

If you've reviewed the [Multi-source Broadcasting](/millicast/broadcast/multi-source-broadcasting.md) and [Multi-view](/millicast/playback/multiview.md) documentation, you may be confused as to why you would use Audio Multiplexing instead of Multiview. Audio multiplexing allows audio sources to overlap, a feature that is useful for

| Audio Multiplexing<br/>_Let users hear multiple audio sources at once that overlap._               |
| :------------------------------------------------------------------------------------------------- |
| Clubhouse-like apps where hosts chat virtually                                                     |
| Townhall apps or platforms where people may periodically ask questions or present.                 |
| Immersive sports apps where a commentary track is combined with an in-stadium ambient noise track. |

## Using Audio Multiplexing

To get started using Audio Multiplexing, you first need to create a Publishing token with [Multisource](/millicast/broadcast/multi-source-broadcasting.md) and have multiple audio sources ready to test, each assigned a unique `sourceID` at the publisher. 

> 📘 Not familar with our JavaScript SDK?
> 
> Audio Multiplexing is a compelx feature made availible through our [Client SDKs](/millicast/client-sdks/index.md).

Once you're streaming multiple audio sources, the next step is to set up the [Viewer](/millicast/client-sdks/web.mdx)viewer) so that the incoming audio sources can be correctly multiplexed. When connecting to the Viewer, there are a [number of parameters available in the SDK](https://millicast.github.io/millicast-sdk/View.html#connect) you can adjust depending on your workflow. Some parameters of note for audio multiplexing include:

- `multiplexedAudioTracks`: This is required to enable multiplexing. It denotes the number (`int`) of audio tracks to receive as Voice Activity Detection (VAD) multiplexed audio. This value must be greater than or equal to the number of audio tracks on the stream. Additional audio tracks will overwrite existing audio tracks. There isn't a limit to the number of audio tracks that can be rendered in the browser, only the amount of data. The current limit is a bitrate of 12 Mbps.
- `dtx`: Discontinousous transmision or DTX is a `boolean` value that signals to the viewer to only deliver audio when audio is detected such as when a person is talking. Enabling DTX will reduce bandwidth costs for audio transmission but may cause non-voice audio such as instruments to become choppy.
- `pinnedSourceId`: Pinned Source ID is a `String` that denotes the main source that will be received by the default MediaStream. This value is useful for denoting your default audio stream that will always load regardless of how many other audio channels are present.
- `excludedSourceIds`: Exclude Source IDs is an `Array` of `Strings` that denotes audio streams that should not be included in the multiplex. This feature is useful for conference-type applications where a user's **own** audio shouldn't be heard.

```javascript
const tokenGenerator = () => millicast.Director.getSubscriber({
  streamName: "YOUR STREAM NAME",
  streamAccountId: "YOUR ACCOUNT ID
});

viewer = new millicast.View("YOUR STREAM NAME", tokenGenerator)

await viewer.connect({
  pinnedSourceId: "main",
  multiplexedAudioTracks: audioElements.length + 1,
  excludeSourceIds: ["audience1","audience2"],
  disableVideo: true,
  dtx: true,
});
```

With the Viewer defined, we can assign the incoming tracks. This can be done in a variety of ways, but the simplest is to grab both the `track` event as it is created by the Viewer node and the `broadcastEvent` as it is created by the Publisher node. Additionally, we also want to create `<audio>` elements and assign them a unique ID. These `<audio>` tags will eventually be what plays the audio stream.

```javascript
const sourceEvents = [];
const trackEvents = [];
const audioElements = [];

viewer.on("track", async (event) => {
  console.log("track", event);
  trackEvents.push(event);
});

viewer.on("broadcastEvent", async (event) => {
  console.log("broadcastEvent", event);
  if (event.name === "active") {
    sourceEvents.push(event);
    
    const newAudio = document.createElement("audio");
    newAudio.id = "audioElement" + audioElements.length.toString();
    audioTrackDiv.appendChild(newAudio);
    audioElements.push(newAudio);
    projectOn(audioElements.length+1)
  } 
});
```

> 🚧 Viewer on "track" events
> 
> The Dolby.io SDKs offer `.on("track",async (event) =>{})` functionality for triggering events as tracks are added. When using Audio Multiplexing this event will trigger a number of times equal to the `multiplexedAudioTracks` value, regardless of if those tracks actually contain data.
> 
> This means that if `multiplexedAudioTracks` is set to `5` it will trigger once for the first track and five additional times for each multiplexed audio track, regardless of whether there are only two tracks broadcasting or twenty.

The `broadcastEvent` will contain the feeds as they are being published. These feeds need to be linked to Viewer `tracks` to be delivered via a function called `project` which _projects_ the media onto the track. This is because different feeds maybe be coming from different sources and hence may connect or disconnect at different intervals. The relationship between a feed and a track is organized this way so that as feeds disconnect they can be swapped or removed without all the streams being interrupted. 

The function below also establishes the relationship between the  `<audio>` tag we created above and the `track`. Allowing the `<audio>` tag to be rendered on a page for the listener to hear.

```javascript
async function projectOn(index) {
  const audioElement = audioElements[index];
  const stream = new MediaStream();
  stream.addTrack(trackEvents[index].track);
  audioElement.srcObject = stream;
  audioElement.play();
  
  const sourceEvent = sourceEvents[index];
  const trackEvent = trackEvents[index];
  console.log("About to project", sourceEvent, trackEvent);
  await viewer.project(sourceEvent.data.sourceId, [
    {
      media: sourceEvent.data.tracks[0].media,
      trackId: sourceEvent.data.tracks[0].trackId,
      mediaId: trackEvent.transceiver.mid,
    },
  ]);
}
```

To recap the above workflow:

1. The app authenticates and connects with the Dolby.io Streaming (Millicast) Director.
2. As the app connects the Director creates a main track plus an additional number of tracks equal to the `multiplexedAudioTracks` value. This triggers a `track` event for each track added.
3. An audio feed is connected to the Publisher Node triggering a Broadcast event.
4. The broadcast event creates an `<audio>` tag and triggers the `projectOn` function.
5. The `projectOn` function adds a track to the `<audio>` tag and then calls the  `viewer.project` function to project the media onto the track. Allowing the audio feed to be rendered in the `<audio>` tag.
6. Steps 3-5 are repeated as more feeds are added.

To help with understanding and implementing the Audio Multiplexing feature is included:

```html
<html>
	<head>
		<title>Dolby.io Audio Multiplexing Demo</title>
		<link rel="shortcut icon" href="https://go.dolby.io/hubfs/Dolby_April2021/images/favicon-32x32.png" />
        <!-- Dolby.io Streaming Millicast JavaScript SDK -->
		<script src="https://cdn.jsdelivr.net/npm/@millicast/sdk/dist/millicast.umd.min.js"></script>
		<!-- Bootstrap Bundle -->
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
			crossorigin="anonymous"
		/>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
	</head>
	<body>
		<div class="container bg-dark text-white gx-4 px-4 py-4 mt-3 rounded">
			<img src="https://go.dolby.io/hubfs/raw_assets/public/Dolby_April2021/images/dolby-io-logo.svg" />
			<h1>Dolby.io Audio Multiplexing Demo</h1>
		</div>
		<div class="container px-4 mt-4">
			<div class="row justify-content-around mt-3">
				<div class="col-8 shadow p-3 mb-5 bg-body rounded text-center">
					<button onclick="startStream()" id="startBtn" style={{height: "50px", width: "150px"}}>Start</button>
					<button onclick="resetStream()" id="resetBtn" style={{height: "50px", width: "150px"}} disabled>Reset</button>
					, 
					, 
					<div id="audioTrackDiv" color="grey"></div>
				</div>
			</div>
		</div>

		<script>
			// Your stream Credentials
			const streamName = "YOUR STREAM NAME";
			const streamAccountId = "YOUR ACCOUNT ID";

			var viewer;
			const audioElements = [];
			const sourceEvents = [];
			const trackEvents = [];
			const audioTrackDiv = document.getElementById("audioTrackDiv");
			const startBtn = document.getElementById("startBtn");
			const resetBtn = document.getElementById("resetBtn");

			async function startStream() {
				startBtn.disabled = true;
				resetBtn.disabled = false;
				const tokenGenerator = () =>
					millicast.Director.getSubscriber({
						streamName: streamName,
						streamAccountId: streamAccountId,
					});

				viewer = new millicast.View(streamName, tokenGenerator);

				viewer.on("broadcastEvent", async (event) => {
					console.log("broadcastEvent", event);

					if (event.name === "active") {
						const newAudio = document.createElement("audio");
						newAudio.id = "audioElement" + audioElements.length.toString();
						newAudio.controls = true;
						newAudio.autoplay = true;
						audioTrackDiv.appendChild(newAudio);
						audioTrackDiv.appendChild(document.createElement("br"));
						audioTrackDiv.appendChild(document.createElement("br"));
						audioElements.push(newAudio);
						sourceEvents.push(event);
					}
				});

				viewer.on("track", async (event) => {
					console.log("track", event);
					trackEvents.push(event);

					const midInt = parseInt(event.transceiver.mid);

					if (audioElements.length > midInt) {
						const audioElement = audioElements[midInt];

						const stream = new MediaStream();
						stream.addTrack(event.track);

						audioElement.srcObject = stream;
						audioElement.play();
					}
				});

				await viewer.connect({
					pinnedSourceId: "main",
					multiplexedAudioTracks: audioElements.length + 1,
					disableVideo: true,
					dtx: true,
				});
				project();
			}

			async function project() {
				for (let index = 0; index < sourceEvents.length; index++) {
					const sourceEvent = sourceEvents[index];

					const trackEvent = trackEvents[index];
					console.log("About to project", sourceEvent, trackEvent);

					await viewer.project(sourceEvent.data.sourceId, [
						{
							media: sourceEvent.data.tracks[0].media,
							trackId: sourceEvent.data.tracks[0].trackId,
							mediaId: trackEvent.transceiver.mid,
						},
					]);
				}
			}
			function resetStream() {
				location.reload();
			}
		</script>
	</body>
</html>
```

## Troubleshooting

### Are audio streams encrypted

One of the advantages of using Multiplexing versus audio mixing is the end-to-end encryption as the audio never needs to be processed or re-encoded.

### Only one audio track is loading

There are a number of reasons why one audio track may only be loading:

- Check that the Publishing token is Multisource enabled.
- Check that each feed has a different source ID.
- Check that the media stream is being projected onto the correct track.

### Audio is dropping in and out

There are a number of reasons why audio may be choppy:

- `dtx` may be interfering with what audio is rendered. It is designed for voice so background noise or instruments may be cut out.
- If the sum total bitrate of all audio tracks exceeds 12 Mbps audio may become choppy or drop out.
