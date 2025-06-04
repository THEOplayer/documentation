---
title: STUN and TURN Service
---

### What is STUN and TURN?

STUN and TURN servers are a critical part of WebRTC communication to allow users to connect and view streams. They are IETF standard protocols for negotiating traversing Network Address Translation (NATs) when establishing communication sessions.

_Session Traversal Utilities for NAT (STUN)_ is used for servers and clients to discover their public IP address when they are located behind a NAT/Firewall. When this host wants to receive an incoming connection, it provides this public IP address as a possible location where it can receive a connection. Suppose the NAT/Firewall still won't allow the viewer and media server to connect directly. In that case, the two make a connection to the _Traversal Using Relay around NAT (TURN)_ service, which will relay media between the two parties.

### What do I need to do?

Customers don't need to do anything by default to utilize this service. When TURN is required to relay media, the service and the video player client will negotiate automatically. In some restrictive environments, customers may be required to add _allow_ rules so their web clients can reach the TURN servers. IP addresses for this are listed below.

### IP Addresses for STUN/TURN

Millicast has the following regional IP addresses for our STUN/TURN. _IP addresses were last updated 2024-11-04._

| Dolby Region       | API ID  | IP Range Information                                                                                                                |
| ------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Bangalore, India   | `blr-1` | 139.59.49.50, 139.59.49.86, 64.225.87.21, 64.225.87.66, 64.225.87.164, 174.138.120.21, 68.183.247.136, 139.59.49.159                |
| Ashburn, VA, USA   | `iad-1` | 129.213.172.222, 141.148.39.122, 193.122.165.132, 129.80.107.22, 129.80.49.52, 141.148.63.222, 150.230.164.20, 150.136.130.194      |
| Frankfurt, Germany | `fra-1` | 141.144.229.61, 89.168.103.9, 144.24.168.81, 141.147.50.224, 144.24.169.241, 130.162.224.118, 129.159.200.0, 130.162.224.21         |
| London, UK         | `lon-1` | 132.226.128.169, 84.8.154.194, 150.230.127.97, 79.72.91.241, 141.147.64.72, 141.147.113.177, 150.230.118.111, 141.147.96.45         |
| Phoenix, AZ, USA   | `phx-1` | 129.153.95.186, 129.146.214.35, 129.153.84.129, 141.148.160.171, 129.153.216.166, 144.24.9.249, 152.70.155.112, 129.146.10.49       |
| São Paulo, Brazil  | `sao-1` | 136.248.75.56, 168.138.254.134, 136.248.109.105, 167.234.230.239, 136.248.127.209, 144.22.189.247, 136.248.68.90, 150.230.78.100    |
| Singapore          | `sgp-1` | 146.190.195.233, 146.190.200.127, 146.190.200.155, 144.126.241.168, 139.59.220.163, 157.230.192.175, 139.59.192.127, 139.59.192.132 |
| Sydney, Australia  | `syd-1` | 192.9.182.131, 192.9.177.241, 192.9.181.7, 192.9.176.25, 159.13.38.8, 159.13.55.70, 158.178.143.49, 152.69.174.63                   |

Also, make sure to open up the following network ports detailed in our [Platform Requirements](/millicast/platform-requirements/index.md) page.

In rare cases, Millicast may occasionally use Twilio's service. See here for [Twilio's IP list](https://www.twilio.com/docs/stun-turn/regions) for a detailed IP range for STUN/TURN servers.
