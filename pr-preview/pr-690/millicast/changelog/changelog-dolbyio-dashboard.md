# Dashboard Changes

Updates to the Dolby OptiView Real-time Dashboard and Applications.

## 2026-06-01 | Dashboard[​](#2026-06-01--dashboard "Direct link to 2026-06-01 | Dashboard")

* Bandwidth, storage, and usage are now displayed in decimal units (GB/TB, base-1000) instead of binary units (GiB/TiB) across plan limits, billing, analytics, media, and broadcaster stats
* Rebuilt the analytics world map for cleaner rendering and improved color contrast, and fixed an issue where countries stayed highlighted after moving the mouse away
* The transcoder profile dropdown is now available in the Advanced section, with the passthrough toggle moved to the top of the quality layers table; profile, height, frame rate, and passthrough selections now stay in sync, and enabling passthrough no longer asks for confirmation
* Token creation with expiry now uses an editable date and time field with a 12-hour AM/PM toggle, local timezone display, and future-date validation
* Tokens with a sub-hour expiry now show meaningful labels such as "45 minutes" or "30 seconds" instead of "0 hours"
* Fixed an issue where spillover dates from adjacent months in the date range picker appeared selected and were clickable
* Fixed a regression where error and success banners and card subtitle text were not displayed in several areas, including duplicate stream name errors, webhook and subscriber token modals, billing reactivation, the card payment form, invoices, and API secrets
* Fixed many small cosmetic issues

## 2026-04-29 | Dashboard[​](#2026-04-29--dashboard "Direct link to 2026-04-29 | Dashboard")

Updated the dashboard branding to Dolby OptiView, including a new logo.

* Fixed an issue where stream names containing `/` characters would not load correctly in Live Monitoring

## 2026-03-13 | Dashboard[​](#2026-03-13--dashboard "Direct link to 2026-03-13 | Dashboard")

* VOD upload usage is now displayed on the billing page under the current period

## 2026-03-03 | Dashboard[​](#2026-03-03--dashboard "Direct link to 2026-03-03 | Dashboard")

* Added the ability to select an Enhanced Broadcasting encoder profile on a publish token for use with OBS Enhanced Broadcasting

## 2025-10-15 | Dashboard[​](#2025-10-15--dashboard "Direct link to 2025-10-15 | Dashboard")

* Webhooks now support a regex filter to limit which events are sent to a webhook endpoint based on stream name or transcoder name

## 2025-08-14 | Dashboard[​](#2025-08-14--dashboard "Direct link to 2025-08-14 | Dashboard")

Some minor fixes were made to the streaming dashboard:

* A fix was made in the live monitor to show the correct `priority` value in some rare cases where it wasn't being correctly displayed
* Search on the Live tab was improved to search beyond the first 100 tokens

## 2025-06-23 | Dashboard[​](#2025-06-23--dashboard "Direct link to 2025-06-23 | Dashboard")

Re-stream has had an update which will allow you to add, enable, and disable re-streams for a running stream so that you can restart an individual re-stream without having to restart your entire contribution stream. See more in our [re-stream](/documentation/pr-preview/pr-690/millicast/distribution/re-streaming.md) guide including how to do this from our dashboard

## 2024-12-12 | Dashboard & Hosted Player[​](#2024-12-12--dashboard--hosted-player "Direct link to 2024-12-12 | Dashboard & Hosted Player")

### Dashboard[​](#dashboard "Direct link to Dashboard")

On the dashboard, users can now set the account-wide expiration rules rules for their recorded media. This means that media can be auto-deleted without the need for additional API calls. This includes:

* [Recordings](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings.md): The full-length stream recordings that are created when recording is enabled on a token
* [Clips](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/live-clipping.md): Clips generated from the [Media Asset API](/documentation/pr-preview/pr-690/millicast/api/media-assets-create-media-asset.md) when utilizing Dolby cloud storage
* [Timelines](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings/live-clipping.md): Timelines are the "media cache" that clips are generated from and are required to create a clip. They are always stored on Dolby cloud storage. By default timelines will expire after 1 day. Users can change this value if they wish to be able to clip further back in time.

These settings are available in the streaming dashboard under `Settings > Media`

![](/documentation/pr-preview/pr-690/assets/images/c96955004739aee7d08248a850a79c53d8774551728b5c8eadcd488f406b4e39-Screenshot_2024-12-12_at_9.59.17_AM-f64b1ddd3d25e28af632e4fbf17ddefe.png)

### Hosted Player[​](#hosted-player "Direct link to Hosted Player")

In the hosted player, we have hidden the view-timer by default. This is now able to be toggled on by adding a query parameter to the url (`&showTimer=true`) so that URLs would look like this to enable the timer: `https://viewer.millicast.com/?streamId=k9Mwad/multiview&showTimer=true`. As a reminder, the timer is how long the viewer has been watching the stream and not how long the stream has been running.

An image of what the timer looks like can be seen in the red circle below:

![](/documentation/pr-preview/pr-690/assets/images/e8a06e7d19e0fb95a528f26bf51a91ee94be340bb5dad90f1834e49c3780b211-Screenshot_2024-12-12_at_10.03.31_AM-b89ebc4fe9354c1be2fdd04216cd330c.png)

## 2024-11-07 | Dashboard[​](#2024-11-07--dashboard "Direct link to 2024-11-07 | Dashboard")

With this latest dashboard release, we’ve introduced support for RTMPS endpoints in re-stream and enhanced visibility with re-stream events in the Live Monitor event log. Additionally, re-stream usage now appears in your billing overview for easier tracking.

### 🆕<!-- --> RTMPS Re-Streaming[​](#new-rtmps-re-streaming "Direct link to new-rtmps-re-streaming")

You can now configure RTMPS endpoints in the re-stream section of the distribution tab. This added security layer allows for secure re-streaming, broadening compatibility and enhancing stream stability across a wider variety of platforms.

![](/documentation/pr-preview/pr-690/assets/images/f3506a57cdbb6ea94f379a631b08946eff022b5e3beac88bf280cf4de4709671-dashboard-restream-rtmps-url-3a1ad0d72db499167a5f72f0e4126875.png)

#### Monitor Re-Stream Events[​](#monitor-re-stream-events "Direct link to Monitor Re-Stream Events")

A new event type is now available in the [Live Monitoring](/documentation/pr-preview/pr-690/millicast/live-monitoring.md) event log, enabling you to view re-stream related events and errors in real-time as they occur.

![](/documentation/pr-preview/pr-690/assets/images/252e36192f8369547fff49a7af109c0eeaf9f6d7fde269741cb1f807674258d9-dashboard-live-monitor-restream-events-d7632ac87b79e5a4377a45534bbefd31.png)

#### Track Re-Stream Usage on Billing Page[​](#track-re-stream-usage-on-billing-page "Direct link to Track Re-Stream Usage on Billing Page")

Re-stream usage data now appears directly on your billing page, giving you a clear view of number of re-stream minutes consumed.

![](/documentation/pr-preview/pr-690/assets/images/3a112387ceffd202a53c31da649ab72eb443985f6833a72d9913f343d174cf58-dashboard-restream-billing-usage-431a7132cbcefd0c3f187f80dad81f4a.png)

## 2024-10-15 | Dashboard[​](#2024-10-15--dashboard "Direct link to 2024-10-15 | Dashboard")

You'll find this latest dashboard release provides access to the new live clipping feature and ability to manage media assets such as recordings and clips.

You can find additional related changes in the [REST APIs and GraphQL Release Notes](/documentation/pr-preview/pr-690/millicast/changelog/changelog-rest-apis.md).

### 🆕<!-- --> Live Clipping[​](#new-live-clipping "Direct link to new-live-clipping")

With **live clipping** you can capture a partial clip from an active ongoing stream that is immediately available. This can power many solutions such as social network sharing, replay capabilities, as well as archival and auditing. Learn more from the [Stream Recordings](/documentation/pr-preview/pr-690/millicast/distribution/stream-recordings.md) guide.

#### Media[​](#media "Direct link to Media")

The recordings menu has been replaced with a new **Media** section. This is where you can find any media being stored for your account. This view allows you to filter by type and all media is grouped by the token used to generate the media.

![](/documentation/pr-preview/pr-690/assets/images/16cb0b1a5e46ce8fb168ca3085daf45d4a4aa7d99637da5ef58eb6393ba78180-live-clipping-media-menu-b68e2e5864b0b6e0be9580b25a46d255.png)

#### Token Setting[​](#token-setting "Direct link to Token Setting")

Live clipping is a setting that must be enabled on a token in order to create clips. It is an optional on any [Publish Tokens](/documentation/pr-preview/pr-690/millicast/managing-your-tokens.md) and has cost implications for storage and usage. This is a premium feature so please work with your account team to have it enabled for your account.

![](/documentation/pr-preview/pr-690/assets/images/ee7359252643a2c08e31378d67dc8b360c6a857f43eb9f8ee23214ceb62788fa-live-clipping-token-details-edc65f36948f85f1ae8e8809d2c075dc.png)

## 2024-09-26 | Dashboard[​](#2024-09-26--dashboard "Direct link to 2024-09-26 | Dashboard")

You'll find usability improvements included in our latest Dolby.io dashboard release. It is now easier to manage your account profile, organization, team and security settings.

### Account Profile Dashboard[​](#account-profile-dashboard "Direct link to Account Profile Dashboard")

Select the Profile item from the account dropdown and you'll find additional settings you can use to manage your Dolby.io account.

![](/documentation/pr-preview/pr-690/assets/images/a7f4a821c575e88396154983a48160272a950376adf1354ad75bc9ff98f8fd68-dashboard-account-dropdown-profile-e70671915c64850320accf6888855c95.png)

From here you'll find additional menu items:

* **Account Profile:** This is where you can update your name, title, and contact details.
* **Organization:** Access your organization id and change the name to match your business.
* **Team:** Add additional users to your account to share access with your team.
* **Security:** Update your password, turn on two-factor, and manage active sessions.

![](/documentation/pr-preview/pr-690/assets/images/4a343b769af401e2b7b115b2f7620e3aed8ed851eec56deef46e5425ed3e8989-dashboard-account-profile-and-settings-3700649580b1ed5e8a5a9c15265d0eed.png)

## 2024-08-19 | Dashboard[​](#2024-08-19--dashboard "Direct link to 2024-08-19 | Dashboard")

### 🆕<!-- --> Distribution Tab with Re-stream Configuration[​](#new-distribution-tab-with-re-stream-configuration "Direct link to new-distribution-tab-with-re-stream-configuration")

With this dashboard update you can now find a new **Distribution** tab within the publish token with settings that allow you to modify how the CDN distributes the stream to end viewers.

* [Re-streaming](/documentation/pr-preview/pr-690/millicast/distribution/re-streaming.md): fan-out a stream to up to ten (10) endpoints that accept incoming RTMP connections for syndicated broadcasting and distribution.
* [Geo-cascading](/documentation/pr-preview/pr-690/millicast/distribution/multi-region-support/geo-cascading.md): configuration of edge servers that handle the last-mile distribution of a stream for playback can be found.

![](/documentation/pr-preview/pr-690/assets/images/6d57cb6-dashboard-distribution-tab-restream-setup-2401923116b3069f92609c001613f277.png)

## 2024-07-25 | Millicast Player ([1.5.1](https://www.npmjs.com/package/@millicast/vue-viewer-plugin?activeTab=readme))[​](#2024-07-25--millicast-player-151 "Direct link to 2024-07-25--millicast-player-151")

### 🆕<!-- --> View Metadata[​](#new-view-metadata "Direct link to new-view-metadata")

The [Hosted Player](/documentation/pr-preview/pr-690/millicast/playback/hosted-viewer.md) now supports propagation of [metadata](/documentation/pr-preview/pr-690/millicast/playback/frame-metadata.md) events to the application such as timecodes from SEI / AMF / PIC\_TIMING. There is a query parameter `&metadata=true` that will enable the processing of received metadata and displays it to a rendered canvas. Any unregistered metadata is sent to the browser console.

### 🆕<!-- --> Force Playout Delay[​](#new-force-playout-delay "Direct link to new-force-playout-delay")

You can adjust the playback buffer to make trade-offs between quality and latency. You need to specify both query string parameters `forcePlayoutDelayMin` and `forcePlayoutDelayMax` to enable this behavior

## 2024-02-15[​](#2024-02-15 "Direct link to 2024-02-15")

### Dolby.io Dashboard[​](#dolbyio-dashboard "Direct link to Dolby.io Dashboard")

#### Live Monitoring[​](#live-monitoring "Direct link to Live Monitoring")

Introduced the [Live Monitoring dashboard](/documentation/pr-preview/pr-690/millicast/live-monitoring.md), which allows customers to view information about stream ingests to quickly diagnose and triage any issues.

## 2023-10-27[​](#2023-10-27 "Direct link to 2023-10-27")

### Dolby.io Dashboard[​](#dolbyio-dashboard-1 "Direct link to Dolby.io Dashboard")

#### Multi-source Builder[​](#multi-source-builder "Direct link to Multi-source Builder")

Introduced the [Multi-source Builder](/documentation/pr-preview/pr-690/millicast/multi-source-builder.md) that allows you to build and configure multiple publishing sources from the Streaming Dashboard. You can add multiple SRT, RTMP or WebRTC sources and use the user-interface to configure multi-bitrate publishing. The Multi-source tab also includes a URL to launch the hosted player with the multi-viewer configuration, customizable `iframe` code to embed the hosted player into your webpage, and the ability to export your multi-source configuration as a file.
