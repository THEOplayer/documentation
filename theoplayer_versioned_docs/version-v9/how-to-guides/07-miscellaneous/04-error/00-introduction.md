# Introduction

We live in an imperfect world, and sometimes things go wrong.
A viewer might not be able to watch a video stream for a variety of reasons.
Some example reasons are:

- The video stream is unavailable,
- The video stream is not supported on the selected browser,
- The THEOplayer license is incorrectly configured.

**When an issue occurs, an error should be triggered**.

When a fatal playback issue occurs, THEOplayer overlays an error message on top of the video player.
This error message indicates to the viewer that playback is unsuccessful.
Additionally, THEOplayer exposes information about the error through the THEOplayer API.

The THEOplayer API allows you to detect errors. As a developer, you can use an event handler to catch (and handle) `error` events.
This feature (i.e. being able to intercept errors and act on it) may be mandatory to you to achieve a use-case:

- You want to log the error on an analytics stacks,
- You want to replace the default error message of THEOplayer with your own error message,
- ...

THEOplayer associates error codes with errors to categorize types of issues.
As a developer, these error codes may help you to log an error on an analytics stack,
or may help you to generate a custom error message towards your viewer.

## Related resources

The following resources help you to understand error handling in THEOplayer.

- [How to do error handling](01-how-to-do-error-handling.md): this article explains how you use event listeners to intercept the `error` event.
- [Error codes](02-error-codes.md): this article explains what error codes are, and why they are useful
