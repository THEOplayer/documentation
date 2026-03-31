---
sidebar_position: 3
sidebar_label: Redundancy
sidebar_custom_props:
  icon: 🔄
description: Configure failover and redundancy for high-availability streaming.
---

# Redundancy

Redundancy ensures that viewers can continue watching even if part of the streaming pipeline fails. By connecting multiple engines to a single distribution, the platform can automatically fail over to a healthy engine when one becomes unavailable.

## How it works

A distribution can have multiple engines attached to it. Each engine processes the stream independently from its own ingest. When the player connects to a distribution, it receives the stream from the active engine. If that engine goes down, the player automatically fails over to the next available engine — without the viewer having to take any action.

This approach protects the entire path from ingest to delivery:

- **Ingest failure** — if an ingest source drops, only the engine connected to it is affected. The other engine, fed by a separate ingest, continues to serve the stream.
- **Engine failure** — if an engine fails during transcoding or packaging, the player switches to the other engine on the same distribution.

## Setting up redundancy

To set up a redundant channel:

1. Create **two ingests** on your channel, each receiving the same live source from a separate encoder or location.
2. Create **two engines**, each connected to one of the ingests.
3. Create a **distribution** and attach both engines to it.

The engine **priority** determines which engine is active. A lower priority number means higher precedence. The platform serves the stream from the highest-priority engine that is available, and automatically falls back to the next one when needed.

## What the viewer experiences

When a failover occurs, the player detects that the current engine is no longer available and switches to the other engine on the distribution. Viewers may see a brief interruption but do not need to reload or take any action.

### Example: geo-redundant setup with priorities

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

This setup provides both **geographic redundancy** — the two engines run in separate locations, protecting against regional outages — and **priority-based failover** — the platform always prefers the highest-precedence engine that is available.
