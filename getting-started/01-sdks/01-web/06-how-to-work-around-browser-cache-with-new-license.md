# How to work around browser cache with a new license?

You may be asking this question if you are experiencing problems related to cached versions of the library (e.g.: if you are dealing with users who are getting expired license errors even though you already renewed). 

Related questions may be:

- Is it possible to implement a cachebuster on the THEOplayer library load?
- Can I force a file to be called always from the sever (preventing it being provided by the cache)?
- How to make sure that users always get the newest version of a file that is being updated in time?

## Cache
To reduce the internet usage and increase the responsiveness of a webpage, browsers use caching.
In simple terms, it may take a while to download a file (e.g. THEOplayer.js). The browser will therefore keep files stored locally (in its cache) for a certain amount of time for later usage. If some time has passed, the browser will remove the file and update it the next time you visit that page. By keeping it locally, the browser can use the local file instead of having to search for the online one. This results in much faster webpages, but the downside is that they may not get the latest update.

To prevent browsers from using an old THEOplayer file (e.g. with an expired license), THEO technologies implemented several measures, such as a grace period and proactively contacting customers for renewals.
However, if you really need users to update a version immediately or renew at the expiration date, you may still run into caching issues.

Luckily there are some ways to ensure that the browser updates the file.

## Ways to force the browser to update

### Change the file path
A good way to ensure that the file gets updated, is by changing the file path. If your file path is different, the browser will see all the files within that new directory as new files and download them again.

You could, for example, keep track of the version of THEOplayer or the deploy date by using different directories:

For example:
```
<yoursite.com>/resource/file/path/2.32.0/THEOplayer.js
<yoursite.com>/resource/file/path/2.37.0/THEOplayer.js
<yoursite.com>/resource/file/path/31-01-2019/THEOplayer.js
```

### Add a variable at the end of the file
Another way to trick the browser into updating the file immediately, is by adding a variable at the end of the filename. This variable on its own, in the case of THEOplayer.js, won't change anything to the file.
By adding something like the version or the date, you can be sure that the browser updates the file.

For example:
```
<yoursite.com>/resource/file/path/THEOplayer.js?d=10012018
<yoursite.com>/resource/file/path/THEOplayer.js?v=2.47.0
```

*Note*: for HLS, we use worker files. These worker files are present in the player directory, but you don't need to link to them in the webpage as they are dynamically called through the player. (e.g. THEOplayer.e.js)
The downside of adding a variable at the end of the filename is that these worker files won't get this variable and therefore may still be cached.

Such variable may also be generated so that it varies at each call, thus requesting the server version of the file each time (and ignoring the cached version).

Here's an example on how to dynamically generate such a cachebuster variable in javascript (taken from [this original article](https://www.virendrachandak.com/techtalk/cachebuster-code-in-javascript/)):

```html
<script type="text/javascript">
var cachebuster = Math.round(new Date().getTime() / 1000);
document.write('<scr'+'ipt type="text/javascript" src="external.js?cb=' +cachebuster+'"></scr' + 'ipt>');
</script>
```