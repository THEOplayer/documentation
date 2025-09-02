# Customizing Notifications for Downloading Offline DRM on Android

## Text Resources Customization

To customize the text or add translations to the notifications, you can override the following string resources:

1. `<string name="theo_download_progress_title">Downloading video</string>`
   - This resource represents the title displayed during the progress of video downloading.

2. `<string name="theo_download_status_title">Download %s</string>`
   - This resource represents the title displayed during the download process. The `%s` placeholder will be replaced with the actual file name.

3. `<string name="theo_download_status_percentage">%d%%</string>`
   - This resource represents the percentage of download progress displayed in the notification. The `%d` placeholder will be replaced with the actual progress value.

4. `<string name="theo_download_finished_status_title">Download finished</string>`
   - This resource represents the title displayed when the download is completed successfully.

5. `<string name="theo_download_paused_status_title">Download paused</string>`
   - This resource represents the title displayed when the download is paused.

6. `<string name="theo_download_failed_status_title">Download failed</string>`
   - This resource represents the title displayed when the download fails.

7. `<string name="theo_download_stopped_status_title">Download stopped</string>`
   - This resource represents the title displayed when the download is manually stopped.

8. `<string name="theo_cache_notifications_channel_name">Media downloader</string>`
   - This resource represents the name of the notification channel used for media downloading.

9. `<string name="theo_cache_notifications_channel_description">Downloads media to make it available for offline playback</string>`
   - This resource represents the description of the notification channel used for media downloading.

To customize these texts or add translations, create corresponding string resources in your app's resource file (e.g., `strings.xml`) and provide the desired values.

By overriding these resources, you can tailor the text content of the notifications to match your application's branding or localize them for different languages or regions.

## Customization of Notification Builders

The `CacheNotificationsBuilder` interface provides the ability to create customized notification appearances using the NotificationCompat.Builder. This feature allows you to design notifications according to your specific preferences and requirements.

The `CacheNotificationsBuilder` interface includes three methods:

1. `createProgressNotificationBuilder`: This method allows you to customize the `builder` parameter and create a custom progress notification builder for a specific caching task. It takes the `task` parameter, which represents the caching task for which the progress notification is being created, and the `builder` parameter, which is the base notification builder to customize. It returns the customized notification builder for the progress notification.

2. `createStatusNotificationBuilder`: In this method, you have the ability to customize the `builder` parameter and create a custom status notification builder for a given caching task. It takes the `task` parameter, which represents the caching task for which the status notification is being created, and the `builder` parameter, which is the base notification builder to customize. It returns the customized notification builder for the status notification.

3. `createNotificationChannel`: This method enables you to customize the `channel` parameter and create a custom notification channel for caching notifications. It takes the `channel` parameter, which is the base notification channel builder to customize. It returns the customized notification channel builder.

   **Note:** If you decide to return `null` in the `createNotificationChannel` method, the library will not create any notification channel. This means that notifications related to caching will not have a designated channel for grouping or presentation.

These methods allow you to customize the appearance and behavior of notifications and notification channels according to your specific requirements when downloading media files using cache in THEOplayer.

To implement this interface, follow these steps:

1. Obtain an instance of THEOplayer cache by calling `THEOplayerGlobal.getSharedInstance(this).cache`.

2. Assign an object that implements the CacheNotificationsBuilder interface to `theoCache.notificationBuilder`.

   Example:

   ```kotlin
   val theoCache = THEOplayerGlobal.getSharedInstance(this).cache
   theoCache.notificationBuilder = object : CacheNotificationsBuilder {
       override fun createNotificationChannel(channel: NotificationChannelCompat.Builder): NotificationChannelCompat.Builder {
           // Customization logic for the notification channel
           ...
           return channel
       }

       override fun createProgressNotificationBuilder(task: CachingTask, builder: NotificationCompat.Builder): NotificationCompat.Builder {
           // Customization logic for the progress notification builder
           ...
           return builder
       }

       override fun createStatusNotificationBuilder(task: CachingTask, builder: NotificationCompat.Builder): NotificationCompat.Builder {
           // Customization logic for the status notification builder
           ...
           return builder
       }
   }
   ```

In the `createProgressNotificationBuilder` and `createStatusNotificationBuilder` methods, you can refer to the official [NotificationCompat.Builder documentation](https://developer.android.com/reference/androidx/core/app/NotificationCompat.Builder) for detailed information on how to customize the notification appearance, add actions, and handle interactions.

Inside the implementation of each method, you can customize the respective notification channel or builder according to your requirements. Make sure to return the modified notification channel or builder as per the method's return type.

By completing these steps, you will set up the implementation of the CacheNotificationsBuilder interface, allowing you to customize the appearance and behavior of notifications in THEOplayer cache.

## Hiding notifications

To hide a notification, you can simply return `null` in the corresponding method of the `CacheNotificationsBuilder` interface.

For example, if you want to hide the progress notification or status notification for a specific caching task, you can return `null` in the `createProgressNotificationBuilder` or `createStatusNotificationBuilder` method, respectively. This will prevent the notification from being shown.

Please note that when you return `null` in the `createProgressNotificationBuilder` or `createStatusNotificationBuilder` methods to hide the notification, the downloading process will not be performed using a foreground service.

Ensure that you consider the implications of hiding notifications and not using a foreground service for downloading media files. It is recommended to provide alternative ways to inform the user about the download progress or completion if you choose to hide notifications.
