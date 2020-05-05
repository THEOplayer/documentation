# ITP2.1 problems using THEOplayer

Apple’s Intelligent Tracking Prevention 2.1 causes cookies to be only saved for 7 days unless the Safari user directly interacts with the website again.

**There will be no issues**
- If a third party CDN provider isn’t used.

**Could be issues**
- If a third party CDN provider is being used. Please check with the provider regarding ITP2.1 policy.
- Check with provider if they are using authentication that uses third party cookies

With ITP 2.1, all persistent client-side cookies, i.e. persistent cookies created through document.cookie, are capped to a seven day expiry.  This causes cookies older than seven days to be destroyed, which leads to the user being identified as a new user who hasn’t seen the site before.

# Resources
The following resources provide more information:
- https://www.seerinteractive.com/blog/what-is-intelligent-tracking-prevention/
- https://webkit.org/blog/8613/intelligent-tracking-prevention-2-1/