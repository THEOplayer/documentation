# Playback issue with Internet Explorer 11

THEOplayer supports Internet Explorer 11 on Windows 7 and above.

The THEOplayer team is aware of a memory leak which was introduced in the core of Internet Explorer 11, which might manifest is playback issues. While the THEO team has found solutions for these issues for the player in the past, updates from Microsoft have restricted these solutions. For Windows versions other than Windows 7, a workaround solution is implemented in THEOplayer.

Microsoft however no longer maintains Internet Explorer 11, except to patch security issues. As a result, the root cause memory issue in Internet Explorer will not be resolved. Please refer to https://developer.microsoft.com/en-us/microsoft-edge/platform/faq/ for more information on Microsoft's support policy.

This issue is known for following versions of Internet Explorer 11 on Windows 7:

- Internet Explorer 11.212.10586.0+
    - Issue #7409348\ A memory leak introduced in this patch (and every patch since) can cause THEOplayer to become unresponsive, and might crash the browser window. The probability of this issue occurring is positively correlated to the length of the THEOplayer session.\ This memory leak can not be addressed by THEOplayer and remains open until Microsoft resolves issue #7409348. Microsoft is aware of, and recognises the issue, but stated it is not a security issue, and has no real priority as such.