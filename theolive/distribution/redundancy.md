---
sidebar_position: 3
sidebar_label: Redundancy
sidebar_custom_props:
  icon: 🔄
description: Configure failover and redundancy for high-availability streaming.
---

# Redundancy

Redundancy ensures that viewers can continue watching even if part of the streaming pipeline fails. The platform offers two complementary levels of failover:

- **Engine redundancy** (recommended) — connect multiple engines to a single distribution, so the player fails over to a healthy engine when one becomes unavailable.
- **Backup ingest** — give an engine a second ingest to fall back to, so the engine itself keeps running when its primary source drops.

## Engine redundancy

### How it works

A distribution can have multiple engines attached to it. Each engine processes the stream independently from its own ingest. When the player connects to a distribution, it receives the stream from the active engine. If that engine goes down, the player automatically fails over to the next available engine — without the viewer having to take any action.

This approach protects the entire path from ingest to delivery:

- **Ingest failure** — if an ingest source drops, only the engine connected to it is affected. The other engine, fed by a separate ingest, continues to serve the stream.
- **Engine failure** — if an engine fails during transcoding or packaging, the player switches to the other engine on the same distribution.

### Setting up engine redundancy

To set up a redundant channel:

1. Create **two ingests** on your channel, each receiving the same live source from a separate encoder or location.
2. Create **two engines**, each connected to one of the ingests.
3. Create a **distribution** and attach both engines to it.

The engine **priority** determines which engine is active. A lower priority number means higher precedence. The platform serves the stream from the highest-priority engine that is available, and automatically falls back to the next one when needed.

### What the viewer experiences

When a failover occurs, the player detects that the current engine is no longer available and switches to the other engine on the distribution. Viewers may see a brief interruption but do not need to reload or take any action.

#### Example: geo-redundant setup with priorities

Consider a sports broadcaster streaming a live match from a stadium in London. To protect against failures, they set up the following:

| Component        | Location  | Details                               |
| ---------------- | --------- | ------------------------------------- |
| **Ingest A**     | London    | SRT feed from the on-site encoder     |
| **Ingest B**     | Frankfurt | SRT feed from a backup encoder        |
| **Engine A**     | London    | Connected to Ingest A, priority **1** |
| **Engine B**     | Frankfurt | Connected to Ingest B, priority **2** |
| **Distribution** | —         | Both engines attached                 |

**Normal operation:** Engine A (priority 1) is active. All viewers receive the stream processed in London.

**Engine A fails** (e.g. a network issue at the London data center): The platform detects the failure and the player automatically switches to Engine B in Frankfurt. Viewers experience a brief interruption but playback resumes without any manual action.

**Engine A recovers:** Once Engine A is healthy again, new viewer sessions will connect to Engine A because it has the higher precedence (lower priority number). Existing sessions remain on Engine B and will only switch back to Engine A if Engine B also experiences issues.

**Engine A is taken out of service** (e.g. for maintenance): [Force stop](../platform/starting-and-stopping.mdx#force-stop) Engine A. Its playlist requests start failing, so OptiView Player fails over to Engine B just as it would on a failure. A regular stop would instead end the stream cleanly, and players would treat it as finished rather than fall back.

**Engine A is restarted by us** (in one of your [maintenance windows](../platform/maintenance-windows.mdx)): the engines of a channel are maintained one at a time, so Engine B stays up while Engine A is restarted. The maintenance restart ends Engine A's stream cleanly, so its viewers see the stream end rather than fall back to Engine B; they can rejoin once Engine A is back, typically within one to two minutes.

This setup provides both **geographic redundancy** — the two engines run in separate locations, protecting against regional outages — and **priority-based failover** — the platform always prefers the highest-precedence engine that is available.

## Backup ingest

Engine redundancy protects against engine failures, but it doubles the transcoding cost: every engine runs its own transcode. When your main concern is the **contribution feed** — a flaky encoder, a congested network or a cut connection — a **backup ingest** is a lighter alternative. You give a single engine a second ingest to fall back to, and the engine switches sources by itself while it keeps running.

Engine redundancy remains the recommended setup. Both options can be combined: each engine of a redundant setup can have its own backup ingest.

### How it works

An engine always has a **primary ingest** (`ingestId`). Optionally, you can set a **backup ingest** (`backupIngestId`) on it. The engine then behaves as follows:

- **At start**, the engine pulls from the primary ingest. If the primary cannot be reached or is not delivering a stream, the engine switches to the backup within seconds instead of waiting for the primary.
- **While streaming**, if the primary ingest drops, the engine switches to the backup ingest and stays on it, even when the primary comes back.
- If **neither** ingest delivers a stream, the engine keeps retrying until one does or the channel's [auto-stop timeout](../platform/starting-and-stopping.mdx#auto-stop-timeout) expires, exactly as it does with a single ingest.

The switch happens inside the engine, so it is handled like any ingest reconnect: viewers may notice a brief interruption, but they stay on the same engine and the same distribution. Nothing changes for the player, the CDN or your webhooks — the engine remains `playing` and no engine failover takes place.

:::info
The engine does not switch away from a source that is still delivering media. If you want to move viewers to the backup feed while the primary is still up, stop the primary encoder.
:::

### Setting up a backup ingest

1. Create **two ingests** on your channel, both receiving the same live source (e.g. a main and a backup encoder).
2. Create an **engine** connected to the first ingest, and pass the second one as `backupIngestId`.

The backup ingest can be set when creating an engine or added later with an update. Pass `null` to remove it again.

`POST https://api.theo.live/v2/channels/{channelId}/engines`

```bash
curl -X POST https://api.theo.live/v2/channels/ch_abc123/engines \
  -H "Authorization: Basic $AUTH" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Engine with backup ingest",
    "ingestId": "ing_primary",
    "backupIngestId": "ing_backup",
    "region": "europe-west",
    "quality": {
      "abrLadderId": "abr_abc123"
    },
    "outputs": {
      "hls": true
    }
  }'
```

`PATCH https://api.theo.live/v2/engines/{engineId}`

```bash
curl -X PATCH https://api.theo.live/v2/engines/eng_ghi789 \
  -H "Authorization: Basic $AUTH" \
  -H "Content-Type: application/json" \
  -d '{
    "backupIngestId": "ing_backup"
  }'
```

The engine response includes `backupIngestId` when one is set. Like the primary ingest, the backup ingest can only be changed while the engine is `stopped`.

:::note
When you create a channel with nested ingests and engines in a single request, the engines are bound to the ingest they are listed under and cannot reference a backup yet. Set `backupIngestId` with an engine update once the channel exists.
:::

### Requirements

The primary and backup ingest form a pair, and the API validates the pair whenever you create or update the engine or either ingest:

- The backup must be **another ingest of the same channel** — it cannot be the engine's primary ingest.
- Both ingests must be of type `srt-pull`, `srt-push`, `rtmp-pull` or `rtmp-push`. Other ingest types (such as SDI, NDI, RTSP, HLS or DASH) cannot take part in a pair.
- The backup ingest must be in the **same region** as the engine, like the primary.
- The backup ingest cannot have a [speech enhancement](../contribution/enhancements/speech.mdx) configured; live captioning and translation always follow the primary ingest.

Requests that break one of these rules are rejected with a `400` error (`backup_ingest_not_supported` or `invalid_region`), and a `backupIngestId` that does not exist on the channel yields a `404`. This also applies to ingest updates: for example, changing the type of an ingest that is the backup of an engine to `sdi-pull` fails.

An ingest that serves as the backup of an engine is treated like a connected ingest:

- It **cannot be deleted** while an engine still references it (`409 engines_connected`). Unset or change the engine's `backupIngestId` first.
- Its **source settings** (`type`, `url`, `region`, `tracks`, `captions`, `enhancements`, `restream`) cannot be changed while any engine using it — as primary or as backup — is running.

### Choosing between the two

|                    | Engine redundancy                    | Backup ingest                   |
| ------------------ | ------------------------------------ | ------------------------------- |
| Protects against   | Ingest, engine and regional failures | Ingest (contribution) failures  |
| Transcoding cost   | One transcode per engine             | One transcode                   |
| Who switches       | The player, to another engine        | The engine, to another source   |
| Viewer impact      | Brief interruption, new engine       | Brief interruption, same engine |
| Returns to primary | New sessions only                    | No                              |

Engine redundancy is the recommended setup.
