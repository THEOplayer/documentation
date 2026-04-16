# How to remove CORS restrictions from a reproduction stream

A "CORS-issue" is a common cause of a stream not starting. In a nutshell, a CORS issue implies that the origin is not allowed to fetch the resource. This issue has to be resolved from the server-side.

Additionally, sometimes we ask customers to alter their CORS-policy in order to playback streams from a development environment. A CORS-issue blocks us from deploying the stream in our development environment.
