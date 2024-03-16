# Why do I get a gray play button in my Android WebView and how to remove it?

You may ask this question if a gray play button is showed by default in your Android WebView.

Similar questions are:

- How to remove the default poster of a play button from the player?
- There’s a gray image of a play button in my video element background: how do I delete it?

This happens because this is the default image, included as a poster, displayed in Android WebView before playback start.

You may solve the problem adding the following snippet to a custom WebViewClient:

```java
@Override
public Bitmap getDefaultVideoPoster() {
    return Bitmap.createBitmap(10, 10, Bitmap.Config.ARGB_8888);
}
```
