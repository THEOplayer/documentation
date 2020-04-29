# Why are not all response headers exposed?

You may ask this question if, for example, you are trying to intercept a certain XHR response to use data contained in custom headers but you don't find these among the exposed headers (see documentation below regarding network interceptors).

This happens because by default, only some headers are exposed by default. You can however decide to specify which additional headers you want exposed. This is done through the Access-Control-Expose-Headers response header. It "indicates which headers can be exposed as part of the response by listing their names" (see [documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers)).
