# How to use ProGuard with THEOplayer Android SDK

ProGuard is a popular tool to obfuscate and optimise Java code in Android projects. Depending on the settings, this tool can clash with the THEOplayer Android SDK. Below, you can find a test listed. Note that this has been last tested at 28 Nov 2018.

```java
-keep class com.theoplayer.android.** {*;}
-dontwarn com.theoplayer.android.**
-keep public class com.google.android.gms.* { public *; }
-dontwarn com.google.android.gms.**
-keep class android.support.v7.app.MediaRouteActionProvider {*;}
-dontwarn android.support.v7.app.MediaRouteActionProvider
 
# In case of using yospace integration
-keep class com.yospace.util.** {*;}
-dontwarn com.yospace.util.**
 
# And in case of using a CastOptionsProvider and/or custom MediaRouteActionProvider for chromecast, you have to keep those classes too.
# eg:
# -keep class com.yourcomp.yourchromecastpackage.** {*;}
# -dontwarn com.yourcomp.yourchromecastpackage.**
```