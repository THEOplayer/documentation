---
sidebar_position: 1
---

# Bad network mode

:::note
Available on npm v2.6.0 and up
:::

The ABR algorithm works best on qualities of 800 kbit/s or more. For advanced use cases, one might want qualities with a lower bitrate. Therefore we added a bad network mode to the player that activates for ABR ladders containing these very low bitrate qualities. By default, these qualities are not selected by the ABR algorithm to ensure a optimal ABR experience. However, if the player detects that it really isn't possible to play the higher bitrate qualities it will select a very low bitrate quality. This is called entering bad network mode and is signaled by the `badNetworkMode` property transitioning to true accompanied by a `enterbadnetworkmode` event. If this happens, we can provide no guarantees that the ABR algorithm will be able to switch up in the future. Therefore, we expect a explicit call by the user to exit bad network mode by setting the `badNetworkMode` property back to false. This will also result in a `exitbadnetworkmode` event. If it does happen that the ABR algorithm is able to detect enough bandwidth to switch up, the player automatically exits bad network mode and updates the property and dispatches the event.
