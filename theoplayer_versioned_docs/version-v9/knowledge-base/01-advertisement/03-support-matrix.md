# Support matrix

THEOplayer currently supports two ad implementations:

- an in-house advertisement implementation
- an implementation of Google IMA which is [DFP certified](https://support.google.com/admanager/answer/186110?hl=en)

A more in-depth advertisement guide can be found [here](../../knowledge-base/01-advertisement/01-user-guide.md)

|       Ad Standard       |         Type         | Supported through |
| :---------------------: | :------------------: | :---------------: |
|      **VAST 2.0**       |        Linear        |        1.2        |
|                         | Non-linear (Overlay) |        1.2        |
|                         |      Companion       |        1.2        |
|                         |       Wrapper        |        1.2        |
|      **VAST 3.0**       |        Linear        |        1.2        |
|                         | Non-linear (Overlay) |        1.2        |
|                         |      Companion       |        1.2        |
|                         |       Wrapper        |        1.2        |
|                         |        Ad Pod        |        1.2        |
|                         |   Skippable linear   |        1.2        |
|      **VAST 4.0**       |        Linear        |        1.2        |
|                         | Non-linear (Overlay) |        1.2        |
|                         |      Companion       |        1.2        |
|                         |       Wrapper        |        1.2        |
|                         |        Ad Pod        |        1.2        |
|                         |   Skippable linear   |        1.2        |
| **VPAID 2.0 (HTML+JS)** |        Linear        |         2         |
|                         | Non-linear (Overlay) |         2         |
|                         |      Companion       |        N/A        |
|                         |       Wrapper        |        N/A        |
|                         |        Ad Pod        |        N/A        |
|                         |   Skippable linear   |         2         |
|     **VMAP 1.0.1**      |                      |         2         |

_Notes:_

- Support for VPAID 1.0 (Flash) was dropped by Google IMA in May 2018.
- THEOplayer also supports [SpotX](../../how-to-guides/01-ads/07-spotx.md).
