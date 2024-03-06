# How to do offline DRM on iOS/tvOS SDK and Legacy iOS/tvOS SDK (4.12.x)

### Table of Contents

- [Prerequisites](#prerequisites)
- [Code example](#code-example)

## Prerequisites

In order to do offline DRM on iOS, your license key should be downloadable and cacheable. The SDK will not be able to decrypt your content if your key expired.

This feature only works on iOS 10.0 and above.

**Known limitations**

1. If your **manifest gets redirected** when you are caching and playing back a resource, you **need to save your redirected manifest URL** (what is being cached) and **provide that (redirected) URL to the player** when you would like to play back from the cache.
2. Only **completely cached videos can be played offline**. (When the CachingTask status is DONE, then the video is playable without any internet connection)
3. HLS manifests can have a tag **#EXT-X-PLAYLIST-TYPE:VOD** ([https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/video_on_demand_playlist_construction](https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/video_on_demand_playlist_construction))
   If this tag is not present in the manifest of the cached quality, THEOplayer will make extra request for the manifest event if the video is completely cached. To avoid from these extra request, you need to provide **EXT-X-PLAYLIST-TYPE:VOD **in your manifests.

## Code example

Here we provide some code examples to perform different calls. For all possible API calls, we refer you to the documentation available in the SDK that you have generated/received.

### Download

The snippet below downloads a FairPlay HLS asset.

```swift
//example source
public static var sourceToBeCached: SourceDescription {
    let src = "https://source.m3u8"
    let merchant = "merchant"
    let userId = "userId"
    let sessionId = "sessionId"
    let streamType = "application/x-mpegurl"
    let drmConfig = DRMTodayDRMConfiguration(
                        licenseAcquisitionURL: "https://lic.staging.drmtoday.com/license-server-fairplay/",
                        certificateURL: "https://lic.staging.drmtoday.com/license-server-fairplay/cert/",
                        userId: userId,
                        sessionId: sessionId,
                        merchant: merchant
                    )
    return SourceDescription(source: TypedSource(src: src, type: streamType, drm: drmConfig))
}

//example cache call
var cachingTask: CachingTask?

func cacheSource(SourceDescription source, Date expirationDate) {
            cachingTask = THEOplayer.cache.createTask(source: source, parameters: CachingParameters(expirationDate: expirationDate))
            if cachingTask != nil {
                _ = cachingTask!.addEventListener(type: CachingTaskEventTypes.STATE_CHANGE) { event in
                    print("Received state change on caching task \(self.cachingTask!.source.sources[0].src) Status: \(self.cachingTask!.status)")
                }
                _ = cachingTask!.addEventListener(type: CachingTaskEventTypes.PROGRESS) { event in
                    print("Received progress on caching task \(self.cachingTask!.source.sources[0].src) Cached: ")
                    for timeRange in self.cachingTask!.cached {
                        print(timeRange.start, timeRange.end)
                    }
                }
                cachingTask.start()
            }
}
```

### Playback

To playback cached material:

```swift
func playSourceFromCache(source: SourceDescription) {
    theoplayer.source = source
    theoplayer.play();
}
```

### Pause and restart

A caching task can be paused and restarted through the task object itself.

```swift
let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")
let sourceDescription = SourceDescription(source : typedSource)

let cachingTask = THEOplayer.cache.createTask(source: sourceDescription, parameters: nil)

// starting a caching task
cachingTask?.start()

// pausing a caching task
cachingTask?.pause()

// resuming a caching task
cachingTask?.start()
```

### Check size and progression

After creating a caching task, it is possible to check an estimate for the total size of the caching task on disk, and the current progression in bytes (stored).

```swift
let typedSource = TypedSource(src: "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8", type: "application/x-mpegurl")
let sourceDescription = SourceDescription(source : typedSource)

let cachingTask = THEOplayer.cache.createTask(source: sourceDescription, parameters: nil)

// starting a caching task
cachingTask?.start()

if let cachingTask = cachingTask {
    // Listen for state change events
    _ = cachingTask.addEventListener(type: CachingTaskEventTypes.STATE_CHANGE, listener: { event in
        print(cachingTask.status)
    })
    // Listen for progress events
    _ = cachingTask.addEventListener(type: CachingTaskEventTypes.PROGRESS, listener: { event in
        // percentage cached
        print(cachingTask.percentageCached)
        // total bytes cached
        print(cachingTask.bytesCached)
        // the amount of seconds cached
        print(cachingTask.secondsCached)
        // the range that is cached
        for timeRange in cachingTask.cached {
            print(timeRange.start, timeRange.end)
        }
    })
}
```

### Delete

The snippet below deletes all cached assets

```swift
func cleanCache() {
    for cachingTask in THEOplayer.cache.tasks {
        print("Will remove caching task \(cachingTask.source.sources[0].src)")
        cachingTask.remove()
    }
}
```

### Renew a DRM license

Renew a DRM license with specific DRM configuration:

```swift
func renewLicense() {
    let newDrmConfig = DRMTodayDRMConfiguration(
                            licenseAcquisitionURL: "https://lic.staging.drmtoday.com/license-server-fairplay/",
                            certificateURL: "https://lic.staging.drmtoday.com/license-server-fairplay/cert/",
                            userId: userId,
                            sessionId: sessionId,
                            merchant: merchant
                        )

    cachingTask.license.renew(newDrmConfig) // or we can renew it with the old drmConfig too: cachingTask.license.renew()
}
```

### Handle redirected manifest

```swift
// cache source

let url = URL(string: "MASTER_MANIFEST_URL_THAT_GETS_REDIRECTED")

let task = URLSession.shared.dataTask(with: url!) { (data, response, error) in

    Streams.SAVED_REDIRECTED_URL = (response?.url)!
    cachingTaskSource.sources[0].src = Streams.SAVED_REDIRECTED_URL!
    self.cachingTask = THEOplayer.cache.createTask(source: cachingTaskSource, parameters: CachingParameters(expirationDate: Date.distantFuture, bandwidth: cachingTaskBandwidth))
    if self.cachingTask != nil {
        _ = self.cachingTask!.addEventListener(type: CachingTaskEventTypes.STATE_CHANGE) { event in
            if let cachingTask = self.cachingTask {
                print("Received state change on caching task \(cachingTask.source.sources[0].src) Status: \(cachingTask.status)")
            }
        }
        _ = self.cachingTask!.addEventListener(type: CachingTaskEventTypes.PROGRESS) { event in
            print("Received progress on caching task \(self.cachingTask!.source.sources[0].src) Cached: ")
            for timeRange in self.cachingTask!.cached {
                print(timeRange.start, timeRange.end)
            }
        }
        print("Did create caching task \(self.cachingTask!.source.sources[0].src)")
    }
}
task.resume()

// playback of cached source

var source = cachingTaskSource
source.sources[0].src = Streams.SAVED_REDIRECTED_URL!
theoplayer.source = source
theoplayer.play()
```
