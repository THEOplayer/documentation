# What is the "`WebAssembly.compileStreaming` failed" warning and what does it mean?

When starting playback in THEOplayer, you might be seeing a warning in console that reads  
`'WebAssembly.compileStreaming' failed because your server does not serve wasm with 'application/wasm' MIME type. Falling back to 'WebAssembly.compile' which is slower. Original error: TypeError: Failed to execute 'compile' on 'WebAssembly': Incorrect response MIME type. Expected 'application/wasm'.`

The current HLS pipeline, default since THEOplayer 4.0, works (where possible) with a wasm worker.
Some implementations cannot or choose not to serve _wasm_, and we have a fallback mechanism for those cases, which avoids impact on user experience. If this fallback is triggered, this warning appears in console.

In other words, _wasm_ allows for better overall performance and the player will try to use this solution first. If this is not possible, it will use different logic, but this doesn't impact the end users. You can safely ignore this warning.

:::important

The _wasm_ file must be served with the correct MIME type ('application/wasm'), otherwise the player will not recognise it properly and fall back onto the alternative (in this case, the warning will also be shown). If the file is served with the wrong MIME type (e.g.: text/html), this must be corrected on the server side.

:::
