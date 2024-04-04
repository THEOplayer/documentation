# How to use ProGuard with THEOplayer Android SDK

ProGuard is a popular tool to obfuscate and optimize Java code in Android projects. Depending on the settings, this tool can clash with the THEOplayer Android SDK.

Below, you can find a list of rules tested against THEOplayer Android SDK on 28 Nov 2018.

```
-keep class com.theoplayer.android.** {*;}
-dontwarn com.theoplayer.android.**
-keep public class com.google.android.gms.* { public *; }
-dontwarn com.google.android.gms.**
-keep class android.support.v7.app.MediaRouteActionProvider {*;}
-dontwarn android.support.v7.app.MediaRouteActionProvider

# In case of using yospace integration
-keep class com.yospace.util.** {*;}
-dontwarn com.yospace.util.**

# For native Google IMA integration
-keep class com.google.obf.** { *; }
-keep interface com.google.obf.** { *; }
-keep class com.google.ads.interactivemedia.** { *; }
-keep interface com.google.ads.interactivemedia.** { *; }

# And in case of using a CastOptionsProvider and/or custom MediaRouteActionProvider for chromecast, you have to keep those classes too.
# eg:
# -keep class com.yourcomp.yourchromecastpackage.** {*;}
# -dontwarn com.yourcomp.yourchromecastpackage.**
```
