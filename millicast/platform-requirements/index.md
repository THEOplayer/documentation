---
title: "Platform Requirements"
id: network-requirements
---
# Codecs

See the [Broadcast](/millicast/broadcast.md) streaming guide for additional details about supported audio and video codecs.

# Network Ports

If you have an environment that is behind a restrictive network, use the following information to create the proper firewall whitelist configuration to enable the Dolby.io Real-time Streaming services to pass:

| Traffic Type        | Ports           | Type        |
| :------------------ | :-------------- | :---------- |
| WebRTC Connection   | 443             | TCP         |
| WebRTC Media Server | 49152-65535     | UDP         |
| STUN/TURN Servers   | 443, 3478, 5349 | TCP and UDP |
| RTMP Publishing     | 1935            | TCP         |
| RTMPS Publishing    | 443             | TCP         |
| SRT Publishing      | 10000           | UDP         |

We also recommend whitelisting the following domains:

- \*.millicast.com
- \*.twilio.com
- \*.dolby.io

# IP Addresses

Some customers have firewalls in place and need to whitelist IP servers for publishing content to Dolby's cloud.  We don't publish a list of IP addresses as we cannot guarantee the same range as we dynamically scale up and down the service. 

> 👍 Dedicated IP Addresses
> 
> Dedicated publishing ingest servers are possible on enterprise plans at an additional charge. If you would like to use this capability on your projects, please [submit a support ticket](https://support.dolby.io/hc/en-au) or reach out to your [sales/solutions](https://dolby.io/contact/) contact to discuss.

## IP Addresses with Standard Publishing

The service always has servers running ready to receive streams.  Unless you are using our Real-time Cloud Transcoder, you are using this method to publish.  With RTMP or SRT you use a DNS value (such as _rtmp://rtmp-auto.millicast.com:1935/v2/pub_ for Dolby to automatically determine the closest region, or a regional DNS entry such as _rtmp://rtmp-iad-1.millicast.com:1935/v2/pub_ as an example for Ashburn, VA.) WebRTC uses the same region detection method based on the Publishing token settings.

For this method of publishing, we dynamically manage the servers for you and cannot guarantee the range of IP addresses used.  Customers with the requirement to whitelist IP ranges can refer to the region-specific IP addresses lists published by our cloud providers.  

You can access a programmatic list of our regions and their abilities with the [Get Clusters](https://docs.dolby.io/streaming-apis/reference/cluster-get) API.

| Dolby Region       | API ID  | IP Range Information                                                             |
| :----------------- | :------ | :------------------------------------------------------------------------------- |
| Bangalore, India   | `blr-1` | not published by provider (Digital Ocean)                                        |
| Ashburn, VA, USA   | `iad-1` | [us-ashburn-1](https://docs.oracle.com/en-us/iaas/tools/public_ip_ranges.json)   |
| Frankfurt, Germany | `fra-1` | [eu-frankfurt-1](https://docs.oracle.com/en-us/iaas/tools/public_ip_ranges.json) |
| London, UK         | `lon-1` | [uk-london-1](https://docs.oracle.com/en-us/iaas/tools/public_ip_ranges.json)    |
| Phoenix, AZ, USA   | `phx-1` | [us-phoenix-1](https://docs.oracle.com/en-us/iaas/tools/public_ip_ranges.json)   |
| São Paulo, Brazil  | `sao-1` | [sa-saopaulo-1](https://docs.oracle.com/en-us/iaas/tools/public_ip_ranges.json)  |
| Singapore          | `sgp-1` | not published by provider (Digital Ocean)                                        |
| Sydney, Australia  | `syd-1` | [ap-sydney-1](https://docs.oracle.com/en-us/iaas/tools/public_ip_ranges.json)    |

See [Oracle's IP list](https://docs.oracle.com/en-us/iaas/tools/public_ip_ranges.json)  for a detailed IP range for publishing ingress servers.

## IP Addresses for STUN/TURN

See our documentation page for [STUN and TURN](/millicast/stun-and-turn-service.md) for IP address ranges.

## IP Addresses with Cloud Transcoders

For customers using our real-time cloud transcoder, a static IP address is provisioned for the duration that the machine is provisioned and in use.  The IP address can be found in the Transcoding section of the dashboard or with the [Cloud Transcoder](/millicast/cloud-transcoder.md). If the instance is restarted it is possible it will use a new IP address.  A DNS name is also provided for these instances.

# Restricted Territories

The following table lists regions that are currently restricted from full access to Dolby Streaming APIs.  The table outlines what actions are possible in these regions.

<table>
  <thead>
    <th>Country / Region / Entity</th>
<th>ISO</th>
<th>Account creation</th>
<th>Portal access</th>
<th>Streaming APIs access</th>
<th>Transact payment</th>
<th>Reason</th>
  </thead>
  <tbody>
    <tr><td><p>Belarusian banks</p>
</td>
<td><p>N/A</p>
</td>
<td><p>N/A</p>
</td>
<td><p>N/A</p>
</td>
<td><p>Sanctioned banks are blocked by Stripe</p>
</td>
<td><p>No</p>
</td>
<td><p>US sanction</p>
</td></tr>
<tr><td><p>China</p>
</td>
<td><p>CN-156</p>
</td>
<td><p>Yes</p>
</td>
<td><p>Yes</p>
</td>
<td><p>Yes</p>
</td>
<td><p>No active block, requires consultation</p>
</td>
<td><p>Business decision</p>
</td></tr>
<tr><td><p>Cuba</p>
</td>
<td><p>CU-192</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>US sanction</p>
</td></tr>
<tr><td><p>Iran</p>
</td>
<td><p>IR-364</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>US sanction</p>
</td></tr>
<tr><td><p>North Korea</p>
</td>
<td><p>KP-408</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>US sanction</p>
</td></tr>
<tr><td><p>Russia</p>
</td>
<td><p>RU-643</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>Customers are blocked.<br />
API users are not blocked.</p>
</td>
<td><p>No</p>
</td>
<td><p>Business decision</p>
</td></tr>
<tr><td><p>Russian banks</p>
</td>
<td><p>N/A</p>
</td>
<td><p>N/A</p>
</td>
<td><p>N/A</p>
</td>
<td><p>All banks are blocked</p>
</td>
<td><p>No</p>
</td>
<td><p>US sanction</p>
</td></tr>
<tr><td><p>Sudan</p>
</td>
<td><p>SD-729</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>US sanction</p>
</td></tr>
<tr><td><p>Syria</p>
</td>
<td><p>SY-760</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>US sanction</p>
</td></tr>
<tr><td><p>Ukraine - Crimea</p>
</td>
<td><p>UA-43</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>US sanction</p>
</td></tr>
<tr><td><p>Ukraine - Dunbass</p>
</td>
<td><p>UA-09</p>

<p>UA-14</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>US sanction</p>
</td></tr>
<tr><td><p>Ukraine - Sevastopol</p>
</td>
<td><p>UA-40</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>No</p>
</td>
<td><p>US sanction</p>
</td></tr>
  </tbody>
</table>

