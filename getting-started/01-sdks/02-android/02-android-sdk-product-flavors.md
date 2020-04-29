# Android SDK product flavors

## Working with multiple aar library files (≥ 1.5)

The THEOplayer library comes in two versions (since version 1.5.0). The minApi16 aar file supports all devices starting with android Jellybean and the minApi21 aar file supports all devices starting with Lollipop.

The easiest way to use the SDK if you want to support the largest possible amount of devices is to use the minApi16 version.

However, the file size of the minApi16 version is about 50MB while the minApi21 is less than 1MB.

For that reason, it is useful to use both in a way that users who have Android Lollipop or higher will have a much smaller APK file. Furthermore, for the pre-Lollipop users, it is possible to reduce the file size by only including the binary files for their target platform (armv7l or x86).


## Reducing apk file size using product flavors

To do this, first import both libraries as described in the Getting Started section.

Then you need to edit the app's builld.gradle file to use multiple product flavors and choose which aar file to compile per flavor. Using product flavors, you can differentiate based on API level and processor architecture.

The example below shows how your gradle file could look. Notice how the product  flavor names are prefixed to compile in order to achieve selective aar compilation.

When uploading your apk files to the play store (which allows uploading multiple apk files for the same application), you should have the same application id for every flavor but a different version number. The play store will select the compatible apk with the highest version number.

So it is important that the flavor with a higher minimum API level has a higher version number because the one with the lower minimum api level will still be compatible with Lollipop (and higher) devices but should not be chosen for Lollipop (and higher) devices.

You can get more information about building multiple APKs from the [official website](https://developer.android.com/studio/build/configure-apk-splits).

In our example we have chosen to not use the splits option to differentiate between processor architectures but instead we have filtered for this in the product flavors. In this way, we can specify that there should not be different apk files for different architectures but instead only one file for all architectures per flavor.


## Example build.gradle file

```java
apply plugin: 'com.android.application'

android {
    compileSdkVersion 28
    defaultConfig {
        applicationId "com.yourcomp.yourapp"
        minSdkVersion 16
        targetSdkVersion 28
        versionCode 1
        versionName "1.0"
        testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
    }
    flavorDimensions "apindktype"
    productFlavors {
        minApi16 {
            minSdkVersion 16
            versionCode Integer.parseInt("16" + android.defaultConfig.versionCode + "0")
        }

        minApi21 {
            minSdkVersion 21
            versionCode Integer.parseInt("21" + android.defaultConfig.versionCode + "0")
        }

    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    implementation fileTree(include: ['*.jar'], dir: 'libs')
    androidTestCompile('com.android.support.test.espresso:espresso-core:2.2.2', {
        exclude group: 'com.android.support', module: 'support-annotations'
    })
    testImplementation 'junit:junit:4.12'
    implementation 'com.google.code.gson:gson:2.8.2'

    implementation 'com.android.support:appcompat-v7:26.1.0'
    implementation 'com.android.support:mediarouter-v7:26.1.0'
    implementation 'com.google.android.gms:play-services-cast-framework:12.0.1'
    minApi16Implementation project(':theoplayer-android-sdk-minapi16-release')
    minApi21Implementation project(':theoplayer-android-sdk-minapi21-release')
}
```

## Building and Play Store upload

After you have successfully edited the build.gradle file of your app, you should  be able to select the build variant in the left pane under Build Variants to select which flavor is compiled when debugging and building and APK.

When building a signed APK, you can select all the flavors by holding the control button to build them all in the last screen of the signed apk creation wizard.

In the latest Android Studio (3.4.2) you have the option the build App Bundles instead of APK. This way Play Store can optimise you app distribution. It can e.g. take out unused resources, not device compatible versions of native libraries, etc.. You can find more information on the App Bundle website.

These apk/aab files can then be uploaded to the play store for the same release of your app.

## 64-bit support

The above mentioned minAPI-based app distribution helps you to provide 64 bit support for newer Android devices via Play Store.