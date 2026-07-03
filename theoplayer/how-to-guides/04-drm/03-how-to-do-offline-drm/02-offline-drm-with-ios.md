# How to do offline DRM on iOS/tvOS SDK

## Prerequisites

In order to do offline DRM on iOS, your license key must be downloadable and persistable. The SDK will not be able to decrypt your content once the persisted key expires.

DRM on iOS SDK is configured through a **DRM connector** (a `ContentProtectionIntegration`) In order to do so, you need to:

1. Implement a `ContentProtectionIntegration` and its `ContentProtectionIntegrationFactory`.
2. Register the factory once at app startup with `THEOplayer.registerContentProtectionIntegration(...)`.
3. Reference the connector from a `FairPlayDRMConfiguration` via its `customIntegrationId`.

For offline playback, you additionally need to request a persistent license (`licenseType: .persistent`) and make the connector's license request offline aware.

In order to cache without a player instance, a valid THEOplayer license must be present in your app's `Info.plist`.

**Known limitations**

1. If your manifest is redirected while caching, you need to save the redirected manifest URL (the one that is actually being cached) and provide that URL to the player when you want to play back from the cache.
2. Only completely cached videos can be played offline. When the `CachingTask` status is `done`, the video is playable without any internet connection.
3. HLS manifests can have a tag `#EXT-X-PLAYLIST-TYPE:VOD` ([see here for reference](https://developer.apple.com/documentation/http-live-streaming/video-on-demand-playlist-construction)). If this tag is not present in the playlist of the cached quality, The player will make an extra request for the playlist even if the video is completely cached. To avoid these extra requests, provide `#EXT-X-PLAYLIST-TYPE:VOD` in your playlists.

## Code example

You can find code examples for the different calls below. For all the possible API calls, please take a look at [the API reference for iOS SDK](https://docs.optiview.dolby.com/theoplayer/v11/api-reference/ios/index.html).

You can also find a full sample application with a FairPlay HLS asset and a working DRM connector [here](https://github.com/THEOplayer/samples-ios-sdk/tree/master/Offline-Playback).

For ready-made connectors covering a range of DRM providers (along with a guide on how to integrate them), see the [sample DRM integrations repository](https://github.com/THEOplayer/samples-drm-integration/tree/master/ios).

### Register a DRM connector

Before you can play or cache a protected stream, register your FairPlay connector once, for example in your `AppDelegate`. The connector is where you communicate with your DRM provider: fetching the certificate, extracting the FairPlay content ID, and exchanging the SPC for a CKC. For offline support, request a persistent license; for some providers this also means adding an `offline=true` flag to the license request.

```swift
import THEOplayerSDK

// A barebones FairPlay connector.
// Replace the placeholder logic with your DRM provider's requirements.
class MyDRMIntegration: ContentProtectionIntegration {
    static let integrationID = "MyDRMIntegration"

    let configuration: DRMConfiguration

    init(configuration: DRMConfiguration) {
        self.configuration = configuration
    }

    // Extract the FairPlay content ID from the skd:// URL in the manifest.
    func onExtractFairplayContentId(skdUrl: String, callback: ExtractContentIdCallback) {
        var contentId = skdUrl
        if skdUrl.hasPrefix("skd://") {
            contentId = String(skdUrl.dropFirst("skd://".count))
        }
        callback.respond(contentID: contentId.data(using: .utf8))
    }

    // Fetch the FairPlay certificate. `request.url` is prefilled with `certificateURL`.
    func onCertificateRequest(request: CertificateRequest, callback: CertificateRequestCallback) {
        // Add provider-specific headers here if needed, e.g.:
        // request.headers = ["x-custom-header": "..."]
        callback.request(request: request)
    }

    func onCertificateResponse(response: CertificateResponse, callback: CertificateResponseCallback) {
        callback.respond(certificate: response.body)
    }

    // Send the SPC to the license server and return the CKC.
    // `request.url` is prefilled with `licenseAcquisitionURL`.
    func onLicenseRequest(request: LicenseRequest, callback: LicenseRequestCallback) {
        // For offline/persistent licenses, some providers require an explicit flag.
        if var components = URLComponents(string: request.url) {
            var queryItems = components.queryItems ?? []
            queryItems.append(URLQueryItem(name: "offline", value: "true"))
            components.queryItems = queryItems
            if let updated = components.string {
                request.url = updated
            }
        }
        // Add provider-specific headers/body encoding here if needed.
        callback.request(request: request)
    }

    func onLicenseResponse(response: LicenseResponse, callback: LicenseResponseCallback) {
        // If your provider wraps the CKC (e.g. <ckc>...</ckc> or base64), unwrap it here.
        callback.respond(license: response.body)
    }
}

class MyDRMIntegrationFactory: ContentProtectionIntegrationFactory {
    func build(configuration: DRMConfiguration) -> ContentProtectionIntegration {
        return MyDRMIntegration(configuration: configuration)
    }
}
```

Register the factory once at app startup:

```swift
func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    THEOplayer.registerContentProtectionIntegration(
        integrationId: MyDRMIntegration.integrationID,
        keySystem: .FAIRPLAY,
        integrationFactory: MyDRMIntegrationFactory()
    )
    return true
}
```

For a complete, production-ready connector (including certificate/license headers, custom-data handling, and CKC unwrapping), see the `CastLabsDRMIntegration` in the [Offline-Playback sample app](https://github.com/THEOplayer/samples-ios-sdk/tree/master/Offline-Playback), or the provider-specific connectors and integration guide in the [samples-drm-integration repository](https://github.com/THEOplayer/samples-drm-integration/tree/master/ios).

### Download

The snippet below builds a `SourceDescription` that references the registered connector and downloads a FairPlay HLS asset. Note the use of `customIntegrationId` to bind the source to your connector, and `licenseType: .persistent` so the license can be stored for offline playback.

```swift
import THEOplayerSDK

// Example source referencing the registered DRM connector.
var sourceToBeCached: SourceDescription {
    let drmConfig = FairPlayDRMConfiguration(
        customIntegrationId: MyDRMIntegration.integrationID,
        licenseAcquisitionURL: "<LICENSE_ACQUISITION_URL>",
        certificateURL: "<CERTIFICATE_URL>",
        licenseType: .persistent,
        integrationParameters: [
            // Any provider-specific parameters your connector reads, e.g.:
            // "userId": "...", "sessionId": "...", "merchant": "..."
        ]
    )
    let typedSource = TypedSource(
        src: "<HLS_STREAM_URL>",
        type: "application/x-mpegurl",
        drm: drmConfig
    )
    return SourceDescription(source: typedSource)
}

// Example cache call.
var cachingTask: CachingTask?

func cacheSource(source: SourceDescription, expirationDate: Date) {
    guard let task = THEOplayer.cache.createTask(
        source: source,
        parameters: CachingParameters(expirationDate: expirationDate)
    ) else { return }
    cachingTask = task

    _ = task.addEventListener(type: CachingTaskEventTypes.STATE_CHANGE) { _ in
        print("State change on caching task \(task.source.sources[0].src) - status: \(task.status)")
    }
    _ = task.addEventListener(type: CachingTaskEventTypes.PROGRESS) { _ in
        print("Progress on caching task \(task.source.sources[0].src) - cached:")
        for timeRange in task.cached {
            print(timeRange.start, timeRange.end)
        }
    }
    task.start()
}
```

### Playback

To play cached material, set the cached task's source on the player from the cache. A common pattern is to check whether the requested stream is already cached and, if so, play from the cache; otherwise play online.

```swift
func play(onlineSource: SourceDescription) {
    let onlineSrc = onlineSource.sources.first?.src

    if let cachedTask = THEOplayer.cache.tasks.first(where: { $0.source.sources.first?.src == onlineSrc }),
       cachedTask.status == .done {
        // Play from cache using the source stored with the caching task.
        theoplayer.source = cachedTask.source
    } else {
        // Play online.
        theoplayer.source = onlineSource
    }
    theoplayer.play()
}
```

### Pause and restart

A caching task can be paused and restarted through the task object itself.

```swift
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl")
let sourceDescription = SourceDescription(source: typedSource)

let cachingTask = THEOplayer.cache.createTask(source: sourceDescription, parameters: nil)

// Starting a caching task
cachingTask?.start()

// Pausing a caching task
cachingTask?.pause()

// Resuming a caching task
cachingTask?.start()
```

### Check size and progression

After creating a caching task, you can inspect the estimated total size on disk and the current progression.

```swift
let typedSource = TypedSource(src: "<HLS_STREAM_URL>", type: "application/x-mpegurl")
let sourceDescription = SourceDescription(source: typedSource)

let cachingTask = THEOplayer.cache.createTask(source: sourceDescription, parameters: nil)

// Starting a caching task
cachingTask?.start()

if let cachingTask = cachingTask {
    // Listen for state change events
    _ = cachingTask.addEventListener(type: CachingTaskEventTypes.STATE_CHANGE, listener: { _ in
        print(cachingTask.status)
    })
    // Listen for progress events
    _ = cachingTask.addEventListener(type: CachingTaskEventTypes.PROGRESS, listener: { _ in
        // percentage cached (0.0 - 1.0)
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

To inspect caching errors, cast the `STATE_CHANGE` event to `CachingTaskErrorStateChangeEvent`:

```swift
_ = cachingTask?.addEventListener(type: CachingTaskEventTypes.STATE_CHANGE, listener: { event in
    if cachingTask?.status == .error,
       let errorEvent = event as? CachingTaskErrorStateChangeEvent,
       let error = errorEvent.error {
        print("Caching task error - code: \(error.code), message: \(error.message)")
    }
})
```

### Delete

The snippet below deletes all cached assets.

```swift
func cleanCache() {
    for cachingTask in THEOplayer.cache.tasks {
        print("Will remove caching task \(cachingTask.source.sources[0].src)")
        cachingTask.remove()
    }
}
```

### Renew a DRM license

The snippet below renews a stored (persistent) DRM license. You can renew with the original configuration, or provide an updated `FairPlayDRMConfiguration` that references the same connector.

```swift
func renewLicense() {
    let newDrmConfig = FairPlayDRMConfiguration(
        customIntegrationId: MyDRMIntegration.integrationID,
        licenseAcquisitionURL: "<LICENSE_ACQUISITION_URL>",
        certificateURL: "<CERTIFICATE_URL>",
        licenseType: .persistent,
        integrationParameters: [
            // updated provider-specific parameters (e.g. a fresh auth token)
        ]
    )

    // Renew with the new configuration...
    cachingTask?.license.renew(newDrmConfig)
    // ...or renew with the configuration originally stored on the task:
    // cachingTask?.license.renew()
}
```

### Handle redirected manifest

If your master manifest URL redirects, cache the redirected URL and play back from that same URL.

```swift
// Cache source
let url = URL(string: "<MASTER_MANIFEST_URL_THAT_GETS_REDIRECTED>")!

let task = URLSession.shared.dataTask(with: url) { (_, response, _) in
    guard let redirectedURL = response?.url else { return }
    Streams.SAVED_REDIRECTED_URL = redirectedURL

    // Rebuild the source against the redirected URL, still referencing the connector.
    let drmConfig = FairPlayDRMConfiguration(
        customIntegrationId: MyDRMIntegration.integrationID,
        licenseAcquisitionURL: "<LICENSE_ACQUISITION_URL>",
        certificateURL: "<CERTIFICATE_URL>",
        licenseType: .persistent
    )
    let typedSource = TypedSource(src: redirectedURL.absoluteString, type: "application/x-mpegurl", drm: drmConfig)
    let cachingTaskSource = SourceDescription(source: typedSource)

    guard let cachingTask = THEOplayer.cache.createTask(
        source: cachingTaskSource,
        parameters: CachingParameters(expirationDate: .distantFuture, bandwidth: cachingTaskBandwidth)
    ) else { return }
    self.cachingTask = cachingTask

    _ = cachingTask.addEventListener(type: CachingTaskEventTypes.STATE_CHANGE) { _ in
        print("State change on caching task \(cachingTask.source.sources[0].src) - status: \(cachingTask.status)")
    }
    _ = cachingTask.addEventListener(type: CachingTaskEventTypes.PROGRESS) { _ in
        for timeRange in cachingTask.cached {
            print(timeRange.start, timeRange.end)
        }
    }
    cachingTask.start()
}
task.resume()

// Playback of cached source (use the redirected URL)
let drmConfig = FairPlayDRMConfiguration(
    customIntegrationId: MyDRMIntegration.integrationID,
    licenseAcquisitionURL: "<LICENSE_ACQUISITION_URL>",
    certificateURL: "<CERTIFICATE_URL>",
    licenseType: .persistent
)
let typedSource = TypedSource(src: Streams.SAVED_REDIRECTED_URL!.absoluteString, type: "application/x-mpegurl", drm: drmConfig)
theoplayer.source = SourceDescription(source: typedSource)
theoplayer.play()
```
