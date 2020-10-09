# Introduction

Conviva is an analytics service. THEOplayer offers 2 different types of integration for this solution, which are described as below:

1. A pre-integration inside the SDK which needs to be configured with the `player.source`. The pre-integration is limited only the video analytics solution offered by Conviva.
2. A connector which can be initialised depending upon the customer requirements for measuring video and ads analytics offered by Conviva. This connector supports all the solutions offered by Conviva (Video Analytics & Ads Analytics).

## Support Matrix for Conviva Modules

| Conviva Pre-Integration Inside SDK | Conviva Connector |
| :----------------------------: | :-----------------------------: |
|         VideoAnalytics         |  Video Analytics & Ads Analytics   |

Please checkout our on How to integrate Conviva Analytics from the below links:

- [Conviva Pre-Integration Inside SDK for Video Analytics](01-conviva-preintegration.md)

- [Conviva Connector for Video Analytics & Ad Analytics](02-conviva-connector.md)


## Things to remember:

- The pre-integration inside the SDK has limited support for Video Anaytics Product only offered by Conviva. It is also not tested with every version of the conviva library released and thus could be broken with future releases. (Support only validated for library stated in the documentation)

- Conviva Connector has full support for Video and Ad Analytics offered by Conviva. This connector can be maintained and managed by accross teams as it is built using all public api's of THEOplayer and conviva. Any new updates or changes can be easily modified and customised as per customer requirements. (There is no dependancy on the THEOplayer or Conviva library version)

- More Informtaion about [Conviva Video Experience](https://www.conviva.com/experience-insights/)

- More Information about [Conviva Ad Insights](https://www.conviva.com/ad-insights/)