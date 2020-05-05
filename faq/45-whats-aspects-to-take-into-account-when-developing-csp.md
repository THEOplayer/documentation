# What aspects of THEOplayer do we need to take into account to deploy a proper Content Security Policy (CSP)

The script-src 'self' and 'inline' should be allowed. The player also requires to do calls to *.theoplayer.com and to wherever the javascript files and workers are located. Additionally, depending on your active features, you may need to add some other source (e.g.: if you are using Chromecast, you will need to allow https://www.gstatic.com/, as its library is hosted there).

Designed to be fully compatible with browser versions that don’t support it, Content Security Policy (CSP) is an additional layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. Configuring Content Security Policy involves adding the Content-Security-Policy HTTP header to a web page and giving it values to control resources the user agent is allowed to load for that page. (source: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

When configuring CSP on your pages including THEOplayer, you will need to allow:

- *.theoplayer.com, as the license needs to contact this domain
- the domain(s) where your Javascript and worker files are hosted
- script-src: 'self' and 'inline'
- any domains hosting the libraries related to the features of THEOplayer that you are using. For example, google-IMA, Chromecast, FreeWheel, Youbora, Conviva, etc.

Note: In old 2.X versions the script-src 'unsafe-eval' also needed adding. As of 2.48.0 this is no longer needed.


## Resources
The following resources provide more information:
- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP/