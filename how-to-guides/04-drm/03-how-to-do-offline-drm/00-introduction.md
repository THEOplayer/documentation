# Introduction

This how-to guide describes how to implement playback of downloadable content-protected streams using THEOplayer.

*Currently, Widevine and Fairplay (respectively for Android SDK and iOS SDK) are each supported together with the Uplynk-Verizon, Azure DRM and DRMToday integrations. *


## SDKs

| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   No   |     Yes     |   Yes   | N/A  |      Yes      |      N/A       |

## Prerequirements

##### Android SDK

In order to do offline DRM on Android, your license key should be downloadable and cacheable. The SDK will not be able to decrypt your content if your key expired.

Before you start, add the following transitive theoplayer dependency to the build.gradle file:

```java
dependencies {
    // other dependencies..
    implementation 'com.google.android.exoplayer:exoplayer:2.6.1'
}
```

##### iOS SDK

In order to do offline DRM on iOS, your license key should be downloadable and cacheable. The SDK will not be able to decrypt your content if your key expired.

This feature only works on iOS 10.0 and above.

**Known limitations**

1. If your **manifest gets redirected** when you are caching and playing back a resource, you **need to save your redirected manifest URL** (what is being cached) and **provide that (redirected) URL to the player** when you would like to play back from the cache.
2. Only **completely cached videos can be played offline**. (When the CachingTask status is DONE, then the video is playable without any internet connection
3. HLS manifests can have a tag **#EXT-X-PLAYLIST-TYPE:VOD** ([https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/video_on_demand_playlist_construction](https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/video_on_demand_playlist_construction))
If this tag is not present in the manifest of the cached quality, THEOplayer will make extra request for the manifest event if the video is completely cached. To avoid from these extra request, you need to provide **EXT-X-PLAYLIST-TYPE:VOD **in your manifests.

## Code examples

Here we provide some code examples to perform different calls. For all possible API calls, we refer you to the documentation available in the license that you've received.

### Download

##### Android SDK

The snippet below downloads a Widevine MPEG-DASH asset.

```java
private void cacheSource(String sessionId, String src, String amount, Date expirationDate) {
    Cache cache = THEOplayerGlobal.getSharedInstance(this).getCache();
    DRMConfiguration drmToday = createDrmTodayConfiguration(sessionId);
    SourceDescription source = sourceDescription(typedSource(src).drm(drmToday).build()).build();
    CachingParameters cachingParameters = new CachingParameters(amount, expirationDate);
    CachingTask cachingTask = cache.createTask(source, cachingParameters);
    cachingTask.addEventListener(CachingTaskEventTypes.CACHING_TASK_STATE_CHANGE, e -> {
        switch (cachingTask.getStatus()) {
            case DONE:
                // handle success..
                break;
            case ERROR:
                // handle error..
                break;
            default: // do nothing
                break;
        }
    });
    cachingTask.start();
}

private DRMConfiguration createDrmConfiguration(String sessionId) {
    KeySystemConfiguration widevine = KeySystemConfiguration.Builder
        .keySystemConfiguration(C.LICENSE_ACQUISITION_URL)
        .licenseType(LicenseType.PERSISTENT)
        .build();
    return YOUR_DRM_INTEGRATION_WITH_WIVDEVINE(widevine)
}
```

##### iOS SDK

The snippet below downloads a Fairplay HLS asset.

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

##### Android SDK

To playback cached material, create and play the stream as usual. The cached content will be used for the known source.

```java
private void playSourceFromCache(String sessionId, String src) {
    DRMConfiguration drmConf = createDrmConfiguration(sessionId);
    SourceDescription sourceDescription = sourceDescription(typedSource(src).drm(drmConf).build()).build();
    tpv.getPlayer().setSource(sourceDescription);
    tpv.getPlayer().play();
}
```

##### iOS SDK

To playback cached material:

```swift
func playSourceFromCache(SourceDescription source) {
    theoplayer.source = source
    theoplayer.play();
}
```

### Pause and restart

A caching task can be paused and restarted through the task object itself.

##### Android SDK

```java
private void startAndPauseTask(CachingTask task) {
    // When not started, the task will be in the "IDLE" state
    task.start();
    // The status of the task will now be "LOADING"
    task.pause();
    // The task reverts back to "IDLE" after finishing its current segment download
    task.start();
    // The task continues where it was paused
}
```

##### iOS SDK
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

##### Android SDK

```java
private void checkStorageRequirements(CachingTask unstartedTask) {
    // We can get an estimate for the amount of space this task will consume. This will be ready once the manifest is preprocessed when the task is created. Starting is not necessary.
    System.out.println(unstartedTask.getBytes());
    unstartedTask.start();

    // ... Additional logic here
    
    // At any time, we can check the current amount of bytes cached by the task
    System.out.println(unstartedTask.getBytesCached());
}
```

##### iOS SDK

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

### Listing and restarting caching tasks

##### Android SDK

An important side note when calling previously cached tasks is that you need to initialise the cache first. Initialising happens asynchronously, so calling upon the cache immediately after initialising may result in an empty list as it is still initialising. (You could initialise the cache as soon as your app opens, such that you can access it later in other pages in the app - but do note that this opens a new webview and takes around 20MB in cache).
To initialise the cache, you need to run the following command:

```java
THEOplayerGlobal theoPlayerGlobal = THEOplayerGlobal.getSharedInstance(this).setApplicationInstance(getApplication());
```

If you only want to initialise it at the moment that you need it, you can use an eventListener to see when it's initialised, e.g.

```java
Cache cache = THEOplayerGlobal.getSharedInstance(this).getCache()
cache.addEventListener(CacheStateChangeEvent.INITIALISED, e -> {
    // Logic once cache is initialised.
    // Status can always be fetched using
    // cache.getStatus(), which will return the ENUM CacheStateChangeEvent.INITIALISED or CacheStateChangeEvent.UNINITIALISED
});
```

Once the cache is properly initialised, you can call upon the cache with methods such as "getTasks()" which will return a TaskList that you can iterate through to find previously cached tasks and resume caching or play the resource. Example:

```java
// If you're in a different activity, you can always call upon the previously initialised cache
THEOplayerGlobal theoPlayerGlobal = THEOplayerGlobal.getSharedInstance(this);

// Loop over previously cached tasks
Iterator cachedVideos = theoPlayerGlobal.getCache().getTasks().iterator();
while(cachedVideos.hasNext()) {
    CachingTask cachedVideo = (CachingTask) cachedVideos.next();
    // Do logic with the found cached video e.g.
    CachingTaskStatus status = cachedVideo.getStatus();
    SourceDescription sourceDescription = cachedVideo.getSource();
    Double percentageCached = cachedVideo.getPercentageCached();
    
    cachedVideo.pause(); // Pause if not already paused
    cachedVideo.start(); // start or resume caching task}
```

##### iOS SDK

*To be completed*

### Delete

The snippet below deletes all cached assets

##### Android SDK

```java
private void cleanCache() {
    for (CachingTask task: sharedInstance.getCache().getTasks()) {
        task.remove();
    }
}
```

##### iOS SDK

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

##### Android SDK
```java
private void renewLicense() {
    DRMConfiguration newDrmConfig =
        drmToday(
            KeySystemConfiguration.Builder.keySystemConfiguration("https://lic.drmtoday.com/license-proxy-widevine/cenc/")
            .licenseType(LicenseType.PERSISTENT)
            .build()
        ).merchant(merchant).sessionId(sessionID).userId(userID).build(); // Change the session Id with data from the app

task.license().renew(newDrmConfig);
}
```

Note: the renew function from this snippet can also be used without the *newDrmConfig* parameter: in this case the same configuration previously employed is reused.

##### iOS SDK

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

##### Android SDK

*No code example available yet*

##### iOS SDK

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
    

### Sample Apps for Offline Playback

These are the sample Apps for Android and IOS: 

##### Sample App Android

This is a Sample Basic App - Android having following Capabilities:

1. Online Playback of DRM Content 
2. Download of DRM Content 
3. Pause or Resume while Downloading of Video 
4. List of Downloaded Videos 
5. Delete Specific Video from Downloaded content

Git Clone: [https://bitbucket.org/savdeepgandhi/theo-offline-android](https://bitbucket.org/savdeepgandhi/theo-offline-android)

##### Sample App IOS

This is a Sample Basic App - IOS having following Capabilities:

1. Online Playback of DRM Content
2. Download of DRM Content 
3. Pause or Resume while Downloading of Video 
4. List of Downloaded Videos 
5. Delete Specific Video from Downloaded content.

Git Clone: [https://bitbucket.org/savdeepgandhi/theo-offline-ios/](https://bitbucket.org/savdeepgandhi/theo-offline-ios/)

