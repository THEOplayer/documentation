# Self-hosting and versioning of THEOplayer

Your licensed THEOplayer can also be hosted on your own servers or CDN (this option is currently not available for our Pay as you Go customers). This can be useful when you do not want to have a dependency on a third-party hosting infrastructure, for using THEOplayer on internal/local (and even offline) networks or for using THEOplayer inside mobile apps.

**Important notice:**
When self-hosting THEOplayer, it is important you regularly update your self-hosted THEOplayer files in order to benefit from the latest improvements.

In order to download the THEOplayer package and host it on your server, you will first have to determine which 2.X version of the player you want to use. Read up about version changes in the [changelog](https://docs.portal.theoplayer.com/changelog.md).

## Configuring self-hosting

Once you extracted the ZIP package to your server, you must configure THEOplayer and provide the information where the resources can be found. For this, you should configure 1 parameter correctly:

- `libraryLocation`: This parameter should point to the location of the library. It is the location where the ZIP package has been extracted and the resources are available on the server.

Of course, also keep in mind to correctly link to the correct JavaScript library and CSS file.

```html
<script type='text/javascript'
    src='/path/to/THEOplayer.js'>
</script> 
<link rel="stylesheet" type="text/css" href='/path/to/ui.css'>
```

## Commonly made mistakes
- Configuring the libraryLocation incorrectly. The referred location/folder should contain `theoplayer.d.js`, `theoplayer.e.js`, `theoplayer.p.js`, `THEOplayer.js`, and so on, and they need to all have the same version.
- Using the THEOplayer library on a web page which resides on a non-whitelisted domain (e.g. http://localhost/index.html). Although you can host your library assets anywhere, you can only use the actual video player on white-listed domains.
- Linking to an unreachable JavaScript or CSS library.