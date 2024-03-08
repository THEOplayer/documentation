# How to do offline DRM on Android

This how-to guide describes how to implement playback of downloadable content-protected MPEG-DASH using the THEOplayer Android SDK. Currently, Widevine is supported together with the Irdeto and DRMToday integrations.

## Prerequisites

In order to do offline DRM on Android, your license key should be downloadable, and cacheable. The SDK will not be able to decrypt your content if your key expired.

To enable the display of progress notifications for downloading content in your Android application you need to include the following permissions in your AndroidManifest.xml file:

```xml
<manifest>
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
    <application>
        ...
    </application>
</manifest>
```

- android.permission.FOREGROUND_SERVICE: This permission allows THEOplayer to run a foreground service, ensuring uninterrupted content downloads even when the application is not in the foreground. See more at [Foreground service permission](https://developer.android.com/guide/components/foreground-services#request-foreground-service-permissions).

- android.permission.POST_NOTIFICATIONS: This permission is required if an application is targeting API 33 (Android 13) and above. It enables THEOplayer to create and display notifications, keeping users informed about the progress of content downloads. For more information, refer to the [Notification runtime permission](https://developer.android.com/develop/ui/views/notifications/notification-permission).

Including these permissions in your AndroidManifest.xml file is necessary for THEOplayer to run a foreground service and provide progress notifications during content downloads.

## Code example

The snippet below downloads a Widevine MPEG-DASH asset.

```java
private void cacheSource(String sessionId, String src, String amount, Date expirationDate) {
    Cache cache = THEOplayerGlobal.getSharedInstance(this).getCache();
    DRMConfiguration drmToday = createDrmTodayConfiguration(sessionId);
    SourceDescription source = new SourceDescription.Builder(
        new TypedSource.Builder(src)
            .drm(drmToday)
        .build())
    .build();
    CachingParameters cachingParameters = new CachingParameters.Builder()
                .amount(amount)
                .expirationDate(expirationDate)
                .build();
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
    KeySystemConfiguration widevine = new KeySystemConfiguration.Builder()
        .keySystemConfiguration(LICENSE_ACQUISITION_URL)
        .licenseType(LicenseType.PERSISTENT)
        .build();
    return YOUR_DRM_INTEGRATION_WITH_WIVDEVINE(widevine)
}
```

To playback cached material, create and play the stream as per usual. The cached content will be used for the known source.

```java
private void playSourceFromCache(String sessionId, String src) {
    DRMConfiguration drmConf = createDrmConfiguration(sessionId);
    SourceDescription sourceDescription =
        new SourceDescription.Builder(
                new TypedSource.Builder(src)
                        .drm(drmConf)
                        .build())
                .build();
    tpv.getPlayer().setSource(sourceDescription);
    tpv.getPlayer().play();
}
```

A caching task can be paused and restarted through the task object itself.

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

After creating a caching task, it is possible to check an estimate for the total size of the caching task on disk, and the current progression in bytes (stored).

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

## Listing and restarting caching tasks

An important side note when calling previously cached tasks is that you need to initialize the cache first. Initializing happens asynchronously, so calling upon the cache immediately after initializing may result in an empty list as it is still initialising. (You could initialise the cache as soon as your app opens, such that you can access it later in other pages in the app).
To initialize the cache, you need to run the following command:

```java
Cache cache = THEOplayerGlobal.getSharedInstance(this).getCache();
```

If you only want to initialize it at the moment that you need it, you can use an eventListener to see when it's initialised, e.g.

```java
Cache cache = THEOplayerGlobal.getSharedInstance(this).getCache();
cache.addEventListener(CacheEventTypes.CACHE_STATE_CHANGE, new EventListener<CacheStateChangeEvent>() {
    @Override
    public void handleEvent(CacheStateChangeEvent cacheStateChangeEvent) {
        // Logic once cache is initialized.
        // Status can always be fetched using
        // cache.getStatus(), which will return the ENUM CacheStateChangeEvent.INITIALISED or CacheStateChangeEvent.UNINITIALISED
    }
});
```

Once the cache is properly initialized, you can call upon the cache with methods such as "getTasks()" which will return a TaskList that you can iterate through to find previously cached tasks and resume caching or play the resource. Example:

```java
// If you're in a different activity, you can always call upon the previously initialized cache
Cache cache = THEOplayerGlobal.getSharedInstance(this).getCache();

// Loop over previously cached tasks
for (CachingTask cachedVideo : cache.getTasks()) {
    // Do logic with the found cached video e.g.
    CachingTaskStatus status = cachedVideo.getStatus();
    SourceDescription sourceDescription = cachedVideo.getSource();
    Double percentageCached = cachedVideo.getPercentageCached();
    cachedVideo.pause(); // Pause if not already paused
    cachedVideo.start(); // start or resume caching task}
}
```

For all possible API calls, we refer you to the JavaDoc available [here](pathname:///theoplayer/v6/api-reference/android/com/theoplayer/android/api/cache/package-summary.html)
