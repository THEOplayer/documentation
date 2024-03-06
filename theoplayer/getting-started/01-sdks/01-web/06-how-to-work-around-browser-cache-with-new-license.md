# How to work around browser cache with new THEOplayer SDK libraries?

In some cases you may experience problems related to cached versions of the THEOplayer library (e.g. if you are dealing with users who are getting expired license errors even though you already deployed new SDK libraries).

Related questions may be:

- Can I implement a cachebuster on the THEOplayer library load?
- Can I force a file to be called always from the server to prevent it from being fetched from the cache?
- How can I make sure that users always get the newest version of THEOplayer libraries I deployed?

## Cache

To reduce the internet usage and increase the responsiveness of a webpage, browsers use caching.

In simple terms, it may take a while to download a file (e.g. `THEOplayer.js`). The browser will therefore keep files stored locally in its cache for a certain amount of time for later usage. After some time, the browser will remove the file and update it the next time you visit that page. By keeping it locally, the browser can use the local file instead of having to fetch a new one. This makes your page faster, but the downside is that the browser may not get the most up-to-date file.

If you really need users to use the latest library you serve or renew at the expiration date of your contract, you may still run into caching issues.

Luckily there are some ways to ensure that the browser updates the file.

## Ways to force the browser to update

### Change the file path

A good way to ensure that the file gets updated, is by changing the file path. If your file path is different, the browser will see all the files within that new directory as new files and download them again.

You could, for example, keep track of the version of THEOplayer or the deploy date by using different directories:

For example:

```html
<yoursite.com
  >/resource/file/path/5.5.0/THEOplayer.js
  <yoursite.com
    >/resource/file/path/5.5.1/THEOplayer.js
    <yoursite.com
      >/resource/file/path/31-01-2023/THEOplayer.js</yoursite.com
    ></yoursite.com
  ></yoursite.com
>
```

### Add a variable at the end of the file

Another way to trick the browser into updating the file immediately, is by adding a variable at the end of the filename. This variable on its own, in the case of `THEOplayer.js`, won't change anything to the file.

By adding something like the version or the date, you can be sure that the browser updates the file.

For example:

```html
<yoursite.com
  >/resource/file/path/THEOplayer.js?d=10012023
  <yoursite.com
    >/resource/file/path/THEOplayer.js?v=5.5.1</yoursite.com
  ></yoursite.com
>
```

**Note**: For HLS playback, the player uses worker files. These workers must be present in the `libraryLocation` set on the player configuration. You do not need to link to them in the webpage as they are dynamically called from the `libraryLocation`.

The downside of adding a variable at the end of the filename is that these worker files will not get this variable and therefore may still be cached, resulting in a `THEOplayer.js` file from a newer version, while the workers are still on the old version from the cache. In this case you may see an error from the player like the following:

`THEOplayer workers could not be loaded. please check that the worker's version matches THEOplayer's version (5.5.1)`

You can make sure that the variable is a different one for each call, thus requesting the server version of the file each time (and ignoring the cached version).

Here's an example on how to dynamically generate such a cachebuster variable in JavaScript (taken from [this original article](https://www.virendrachandak.com/techtalk/cachebuster-code-in-javascript/)):

```html
<script type="text/javascript">
  var cachebuster = Math.round(new Date().getTime() / 1000);
  document.write(
    "<scr" +
      'ipt type="text/javascript" src="external.js?cb=' +
      cachebuster +
      '"></scr' +
      "ipt>"
  );
</script>
```

## Related articles

- [How to update an SDK](../01-how-to-update-a-sdk.md)
- [License](https://docs.theoplayer.com/how-to-guides/12-license/00-introduction.md)
- [How to reduce data usage on mobile devices on mobile web](../../../how-to-guides/06-mediatrack/06-how-to-reduce-data-usage-on-mobile-devices.md)
