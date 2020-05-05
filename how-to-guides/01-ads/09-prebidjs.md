# Prebid.js

This article explains how you can connect THEOplayer with Prebid.js. Prebid.js is an open-source header bidding solution. On the client-side, you can request bids from multiple ad networks, take a winning bid and its advertisement. You want to configure this advertisement in THEOplayer.

### Table of Contents
- [SDKs](#sdks)
- [Connecting Prebid.js and THEOplayer](#connecting-prebidjs-and-theoplayer)
  - [Code Examples](#code-examples)
- [Sample Applications](#sample-applications)
- [Remarks](#remarks)
- [Resources](#resources)


## SDKs
| Web SDK | Android SDK | iOS SDK | tvOS SDK| Android TV SDK | Chromecast SDK |
| :-----: | :---------: | :-----: | :--: | :------------: | :------------: |
|   N/A   |     N/A     |   N/A   | N/A  |      N/A       |      N/A       |

N/A was selected because Prebid.js is a separate library. You can connect Prebid.js with THEOplayer on any platform that both of them support.

## Connecting Prebid.js and THEOplayer
Prebid.js allows you to request bids. This request will respond with bids through a callback function. In this callback function, you have to select a winning bid, extract the ad tag URL. You can configure this URL as THEOplayer’s ad source.

### Code Examples
The code example below is based on the documentation offered by Prebid.org at http://prebid.org/dev-docs/examples/instream-banner-mix.html.

##### Web SDK
```html
<!DOCTYPE html>
<html>
    <head>
        <!-- Load Prebid and GPT -->
        <link rel="stylesheet" type="text/css" href="//cdn.theoplayer.com/dash/theoplayer/ui.css">
        <script type="text/javascript" src="//imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
        <script async src="//acdn.adnxs.com/prebid/not-for-prod/prebid.js"></script>
        <script async src="//www.googletagservices.com/tag/js/gpt.js"></script>

        <title>Prebid.js THEOplayer Demo</title>

        <script>
            var PREBID_TIMEOUT = 5000;
            var FAILSAFE_TIMEOUT = 5000;

            let code = 'video1';

            var videoAdUnit = {
                code: code,
                mediaTypes: {
                    video: {
                        playerSize: [640, 480],
                        context: 'instream'
                    }
                },
                bids: [
                    {
                        bidder: 'spotx',
                        params: {
                            'channel_id': 85394, // Add your own placement id here
                            'ad_unit': 'instream'
                        }
                    },
                    {
                        bidder: 'emx_digital',
                        params: {
                            tagid: '25251',
                        }
                    },
                    {
                        bidder: 'appnexus',
                        params: {
                            placementId: 13232361, // Add your own placement id here
                            video: {
                                skipppable: true,
                                playback_method: ['auto_play_sound_off']
                            }
                        }
                    }
                ]
            };

            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];
            googletag.cmd.push(function() {
                googletag.pubads().disableInitialLoad();
            });

            // Init Prebid.js
            var pbjs = pbjs || {};
            pbjs.que = pbjs.que || [];

            // define invokeVideoPlayer in advance in case we get the bids back from prebid before the entire page loads
            var tempTag = false;
            var invokeVideoPlayer = function(url) {
                tempTag = url;
            };

            pbjs.que.push(function() {
                // pbjs.addAdUnits(adUnits);
                pbjs.addAdUnits(videoAdUnit);
                pbjs.setConfig({
                    debug: true,
                    cache: {
                        url: 'https://prebid.adnxs.com/pbc/v1/cache'
                    }
                });
                pbjs.requestBids({
                    bidsBackHandler: initAdserver,
                    timeout: PREBID_TIMEOUT,
                    auctionId: 'auction_1'
                })
            });

            function initAdserver(bids) {
                if (pbjs.initAdserverSet) return;
                pbjs.initAdserverSet = true;

                // Build DFP URL with targeting for videoAdUnit
                // var videoUrl = pbjs.adServers.dfp.buildVideoUrl({
                //     adUnit: videoAdUnit,
                //     params: {
                //         iu: '/19968336/prebid_cache_video_adunit',
                //         cust_params: {
                //             section: 'blog',
                //             anotherKey: 'anotherValue'
                //         },
                //         output: 'vast'
                //     }
                // });

                let firstBidVastUrl = bids[code].bids[0].vastUrl; // SELECT AN AD TAG
                // Pass URL to Video player to make final DFP call
                invokeVideoPlayer(firstBidVastUrl);
            }
            // in case PBJS doesn't load
            setTimeout(function() {
                initAdserver();
            }, FAILSAFE_TIMEOUT);


        </script>
    </head>
    <body>
        <h2>Prebid Video - THEOplayer</h2>
        <div id="myElement1" class="video-js theoplayer-skin"></div>
        <script type="text/javascript" src="//cdn.theoplayer.com/dash/theoplayer/THEOplayer.js"></script>
        <script>
            // we initialize our player instance, specifying the div to load it into

            let element = document.querySelector('#myElement1');
            let player = new THEOplayer.Player(element, {
                ui: {
                    width: '320px',
                    height: '190px'
                },
                libraryLocation: '//cdn.theoplayer.com/dash/theoplayer/',
            });

            function invokeVideoPlayer(url) {
                player.source = {
                    "sources": [
                        {
                            "src": "//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny_metadata.m3u8"
                        }
                    ],
                    "ads": [
                        {
                            "sources": url,
                            "timeOffset": "start", // "00:00:15" for mid-roll; "stop" for post-roll
                            "integration": "google-ima"
                        }
                    ]
                };
            }

            if (tempTag) {
                invokeVideoPlayer(tempTag);
                tempTag = false;
            }
        </script>
    </body>
</html>
```
Two functions are very relevant.

- initAdserver is the callback. You can intercept the bids, and extract ad tag URL.
- invokeVideoPlayer configures the extracted ad tag URL.

Note that all included JS and CSS files are required.

##### Android SDK
Refer to http://prebid.org/prebid-mobile/pbm-api/android/code-integration-android.html. The same THEOplayer API to configure advertisements is available on the Android SDK.

##### iOS SDK
Refer to http://prebid.org/prebid-mobile/pbm-api/ios/code-integration-ios.html. The same THEOplayer API to configure advertisements is available on the iOS SDK.

The example above schedules advertisements as pre-rolls, mid-rolls or post-rolls. Note that you can also dynamically schedule advertisements with the Ads API.

## Sample Applications
The sample application below demonstates how to do X.

- Demo: https://jsfiddle.net/thijsl/hjcegyuw/2/

## Remarks
The following remarks can help:

Information on how to connect with different bidders can be found at https://github.com/prebid/Prebid.js/tree/master/modules and http://prebid.org/.

## Resources
The following resources provide more information:

- https://prebid.org/overview/intro.html: What is Prebid?
- https://prebid.org/prebid-video/video-overview.html: Prebid.js for Video Overview
- https://prebid.org/prebid-video/video-getting-started.html: Getting started with Prebid.js for Video
- https://github.com/prebid/Prebid.js/tree/57c666626c269cdabb9aac6944a889f2b944f0c0/modules: Adapters on Github.
- Some adapters might provide test data. (e.g. https://github.com/prebid/Prebid.js/blob/57c666626c269cdabb9aac6944a889f2b944f0c0/modules/spotxBidAdapter.md)