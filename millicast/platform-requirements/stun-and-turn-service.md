---
title: "STUN and TURN Service"
id: stun-and-turn-service
---
### What is STUN and TURN?

STUN and TURN servers are a critical part of WebRTC communication to allow users to connect and view streams.  They are IETF standard protocols for negotiating traversing Network Address Translation (NATs) when establishing communication sessions.

_Session Traversal Utilities for NAT (STUN)_ is used for servers and clients to discover their public IP address when they are located behind a NAT/Firewall. When this host wants to receive an incoming connection, it provides this public IP address as a possible location where it can receive a connection. Suppose the NAT/Firewall still won't allow the viewer and media server to connect directly. In that case, the two make a connection to the _Traversal Using Relay around NAT (TURN)_ service, which will relay media between the two parties.

### What do I need to do?

Customers don't need to do anything by default to utilize this service.  When TURN is required to relay media, the service and the video player client will negotiate automatically.  In some restrictive environments, customers may be required to add _allow_ rules so their web clients can reach the TURN servers.  IP addresses for this are listed below. 

### IP Addresses for STUN/TURN

Millicast has the following regional IP addresses for our STUN/TURN.  _IP addresses were last updated 2024-11-04._

<table>
  <thead>
    <th>Dolby Region</th>
<th>API ID</th>
<th>IP Range Information</th>
  </thead>
  <tbody>
    <tr><td><p>Bangalore, India</p>
</td>
<td><p><code>blr-1</code></p>
</td>
<td><p>139.59.49.50<br />
139.59.49.86<br />
64.225.87.21<br />
64.225.87.66<br />
64.225.87.164<br />
174.138.120.21<br />
68.183.247.136<br />
139.59.49.159</p>
</td></tr>
<tr><td><p>Ashburn, VA, USA</p>
</td>
<td><p><code>iad-1</code></p>
</td>
<td><p>129.213.172.222<br />
141.148.39.122<br />
193.122.165.132<br />
129.80.107.22<br />
129.80.49.52<br />
141.148.63.222<br />
150.230.164.20<br />
150.136.130.194</p>
</td></tr>
<tr><td><p>Frankfurt, Germany</p>
</td>
<td><p><code>fra-1</code></p>
</td>
<td><p>141.144.229.61<br />
89.168.103.9<br />
144.24.168.81<br />
141.147.50.224<br />
144.24.169.241<br />
130.162.224.118<br />
129.159.200.0<br />
130.162.224.21</p>
</td></tr>
<tr><td><p>London, UK</p>
</td>
<td><p><code>lon-1</code></p>
</td>
<td><p>132.226.128.169<br />
84.8.154.194<br />
150.230.127.97<br />
79.72.91.241<br />
141.147.64.72<br />
141.147.113.177<br />
150.230.118.111<br />
141.147.96.45</p>
</td></tr>
<tr><td><p>Phoenix, AZ, USA</p>
</td>
<td><p><code>phx-1</code></p>
</td>
<td><p>129.153.95.186<br />
129.146.214.35<br />
129.153.84.129<br />
141.148.160.171<br />
129.153.216.166<br />
144.24.9.249<br />
152.70.155.112<br />
129.146.10.49</p>
</td></tr>
<tr><td><p>São Paulo, Brazil</p>
</td>
<td><p><code>sao-1</code></p>
</td>
<td><p>136.248.75.56<br />
168.138.254.134<br />
136.248.109.105<br />
167.234.230.239<br />
136.248.127.209<br />
144.22.189.247<br />
136.248.68.90<br />
150.230.78.100</p>
</td></tr>
<tr><td><p>Singapore</p>
</td>
<td><p><code>sgp-1</code></p>
</td>
<td><p>146.190.195.233<br />
146.190.200.127<br />
146.190.200.155<br />
144.126.241.168<br />
139.59.220.163<br />
157.230.192.175<br />
139.59.192.127<br />
139.59.192.132</p>
</td></tr>
<tr><td><p>Sydney, Australia</p>
</td>
<td><p><code>syd-1</code></p>
</td>
<td><p>192.9.182.131<br />
192.9.177.241<br />
192.9.181.7<br />
192.9.176.25<br />
159.13.38.8<br />
159.13.55.70<br />
158.178.143.49<br />
152.69.174.63</p>
</td></tr>
  </tbody>
</table>



Also, make sure to open up the following network ports detailed in our [Platform Requirements](/millicast/network-requirements.md) page.

In rare cases, Millicast may occasionally use Twilio's service. See here for [Twilio's IP list](https://www.twilio.com/docs/stun-turn/regions) for a detailed IP range for STUN/TURN servers.
