# Why does the Network API not work on iOS devices

Most Network API capabilities are not available on iOS devices. Generally speaking, video playback on iOS behaves like a black box. This black box handles the requests (and responses) related to video manifests and segments, which makes them impossible to intercept. This limits the possible uses of the Network API on such devices.

The Network API can still be used to intercept and alter requests and responses unrelated to video playback manifests and segments (e.g.: DRM-related requests and responses).
