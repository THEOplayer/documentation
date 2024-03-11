# How to do offline Playback with AES-128 Encrypted Streams on Android

This how-to guide describes how to implement Offline playback of downloadable AES-128 content-protected MPEG-DASH or HLS using the THEOplayer's Legacy Android SDK (4.12.x).

## Prerequisites

In order to do offline Playback on Android, your license key should be downloadable, and cacheable. The SDK will not be able to decrypt your content if your key expired.

Before you start, add the following transitive theoplayer dependency to the build.gradle file:

```java
dependencies {
    // other dependencies..
    implementation 'com.google.android.exoplayer:exoplayer:2.6.1'
    //THEO Player 'aar' File where xx.x is the Version of Player
    implementation(name: "theoplayer-android-xxxx-2.xx.x-minapixx-release", ext: "aar")
}
```

## Code example

The snippet below downloads an AES-128 MPEG-DASH/HLS asset. Once the Download button is pressed following Code Snippet help to download the stream and Starts Playback from Cache.

```java
private void cacheSource(String src, String amount, Date expirationDate) {
    Cache cache = THEOplayerGlobal.getSharedInstance(this).getCache();
    SourceDescription source = sourceDescription(typedSource(src).build()).build();
    CachingParameters cachingParameters = new CachingParameters(amount, expirationDate);
    final CachingTask cachingTask = cache.createTask(source, cachingParameters);
    final TextView status = findViewById(R.id.status);
    cachingTask.addEventListener(CachingTaskEventTypes.CACHING_TASK_STATE_CHANGE, new EventListener<CachingTaskStateChangeEvent>() {

        @Override
        public void handleEvent(CachingTaskStateChangeEvent cachingTaskStateChangeEvent) {
            switch (cachingTask.getStatus()) {
                case DONE:
                    // handle success..
                    status.setText("Finished");
                    playSourceFromCache("http://contentserver-1.kanto.indigo:8080/videos/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd");
                    break;
                case ERROR:
                    // handle error..
                    status.setText("Download Failed");
                    break;
                default: // do nothing
                    break;
            }
        }
    });
   cachingTask.start();

}
```

To call the above method, here are some of the parameters which also needed to be created:

```java
//Getting the current Date + 2 weeks
int noOfDays = 14; //i.e two weeks
Calendar calendar = Calendar.getInstance();
calendar.add(Calendar.DAY_OF_YEAR, noOfDays);
Date date = calendar.getTime();

//Start Caching Source for Offline Playback
cacheSource(
        "http://contentserver-1.kanto.indigo:8080/videos/dash/big_buck_bunny/BigBuckBunny_10s_simple_2014_05_09.mpd",
        "100%",
        date
);
```

To playback cached material, create and play the stream as per usual. The cached content will be used for the known source.

```java
private void playSourceFromCache(String src) {
    SourceDescription sourceDescription = sourceDescription(typedSource(src).build()).build();
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

### Listing and restarting caching tasks

An important side note when calling previously cached tasks is that you need to initialise the cache first. Initializing happens asynchronously, so calling upon the cache immediately after initializing may result in an empty list as it is still initialising. (You could initialise the cache as soon as your app opens, such that you can access it later in other pages in the app).
To initialise the cache, you need to run the following command:

```java
THEOplayerGlobal theoPlayerGlobal = THEOplayerGlobal.getSharedInstance(this).setApplicationInstance(getApplication());
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

For all possible API calls, we refer you to the JavaDoc available in the License that you've received. (Next to the Android SDK there should be a source file with the complete JavaDoc that also describes all possible caching methods).
