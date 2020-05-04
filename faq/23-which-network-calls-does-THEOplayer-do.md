# Which network calls (or requests) does THEOplayer do

The question above is related to the following questions:

- What is the call to license.theoplayer.com?
- Why is THEOplayer sending a request to licensing.theoplayer.com?
- What is the call to licenseapi.theoplayer.com, and why is it failing?

THEOplayer can do three different network requests to `*.theoplayer.com` which are not related to your stream.

1. `license.theoplayer.com`: this request logs an impression to THEOplayer's analytics server. THEOplayer uses impressions to know how many views you've received, because it's taken into account for billing purposes. The analytics server does not track personal information on your users.
2. `licensing.theoplayer.com/t?`: this request serves as a fallback request when the call to license.theoplayer.com fails.
3. `licenseapi.theoplayer.com/api/v1/check`: this request happens when your current license is invalid, for example on a domain (or IP-address) which hasn't been whitelisted. This request will not be successful because there's no service configured for this request. (This might change in the future.)