# How to track network errors

THEOplayer currently doesn't throw an error event for all network request errors on all platforms. Sometimes you might want an event to listen for to track network related issues in your QoS/QoE dashboards. To enable this, you can use our Network API. 

## Web

You can use the Network API as follows to track network requests with status codes 4xx and 5xx

```js
function httpErrorInterceptor(response) {
        if (response.status >= 400 && response.status <= 599) {
            var errorDetails = {
                status: response.status,
                fileType: response.request.type,
                url: response.request.url
            }
            var networkErrorEvent = new CustomEvent('THEOnetworkerror', { detail: errorDetails });
            document.dispatchEvent(networkErrorEvent);
        };
    }

player.network.addResponseInterceptor(httpErrorInterceptor)
document.addEventListener('THEOnetworkerror', console.log)
```

## Android

For Android you'll also use the Network API as you would with our Web SDK but you need to do it through JavaScript injection and pass a message to your Java environment. You need to follow these steps: 

1. Make an `assets` folder, for instance under `android/app/src/main/assets` and add a JavaScript file, say `interceptor.js` 
2. Add your network interceptor code but include a line to send a message with to be able to use the event's information in your Java code
    ```js
    function createHttpErrorInterceptor() {
        var player = THEOplayer.players[0];
        var interceptor = function (response) {
            if (response.status >= 400 && response.status <= 599) {
                var errorDetails = {
                    status: response.status,
                    fileType: response.request.type,
                    url: response.request.url
                }
                theoplayerAndroid.sendMessage('THEOplayer.network.error', JSON.stringify(errorDetails));
            }
        };
        player.network.addResponseInterceptor(interceptor);
        THEOplayer.HttpErrorInterceptor = interceptor;
    }

    function destroyHttpErrorInterceptor() {
        if (THEOplayer.HttpErrorInterceptor) {
            var player = THEOplayer.players[0];
            player.network.removeResponseInterceptor(THEOplayer.Interceptor_404);
            THEOplayer.HttpErrorInterceptor = undefined;
        }
    }
    ```
3. Link the JavaScript file to your THEOplayer instance as follows
    ```xml
    <com.theoplayer.android.api.THEOplayerView
        android:id="@+id/theoPlayerView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        app:layout_behavior="@string/appbar_scrolling_view_behavior"
        app:jsPaths="interceptor.js"/>
    ```
4. In the Java file where you configure THEOplayer add the following:
    ```java
    protected void onCreate(Bundle savedInstanceState) {
        // Code to configure the player
        // ...
        // ...

        CreateInterceptor();
        SetSource();
    }

    protected void SetSource(){
        // bad url to test if the network response interceptor works
        String url =  "https://cdn.theoplayer.com/video/elephants-dream/playlist2.m3u8";

        TypedSource typedSource = TypedSource.Builder
                .typedSource()
                .src(url)
                .type(SourceType.HLS)
                .build();

        SourceDescription sourceDescription = SourceDescription.Builder
                .sourceDescription(typedSource)
                .build();

        theoPlayer.setSource(sourceDescription);
        theoPlayer.play();

    }

    protected void HandleNetworkError(String message){
        //Do something with the network error
        Log.i("THEO", "Network error: " + message);
    }

    protected void CreateInterceptor(){
        viewBinding.theoPlayerView.evaluateJavaScript("createHttpErrorInterceptor();", null);
    }

    protected void DestroyInterceptor(){
        viewBinding.theoPlayerView.evaluateJavaScript("destroyHttpErrorInterceptor();", null);
    }

    ```

## iOS

On iOS there are platform specific constraints that prevent us from giving you the control over network call like you can on Web. Therefore, we expose an event type for this on the network object. You can set up a listener as follows

```swift
self.player.network.addEventListener(type: NetworkEventTypes.ERROR) { (everror) in
    // handle the event
}
```