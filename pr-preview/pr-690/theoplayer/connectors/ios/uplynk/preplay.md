# Preplay

This article explains how to leverage the Uplynk Preplay API through THEOplayer. This API allows developers to pre-integrate with Uplynk Preplay service.

Uplynk users can use an API (i.e. Preplay) to generate a streaming playlist given 1 or more assets or advertisements. The back-end of Uplynk stitches the content together and allows for server-side ad-insertion (SSAI) when applicable. This document describes how THEOplayer users should configure their source to leverage this Preplay service.

Assumptions:

* THEOplayer assumes the availability of the Preplay API and Uplynk content servers to be 100%, since these identify and provide the necessary streams for playback with this feature.
* THEOplayer assumes that developers who are interested in this feature have a basic understanding of the Preplay API. Uplynk documents this service at <https://api-docs.uplynk.com/#Develop/Preplayv2.htm>
* THEOplayer assumes that developers provide correct asset identifiers, as well as the proper content protection level.

## Stream Configuration (without ads)[​](#stream-configuration-without-ads "Direct link to Stream Configuration (without ads)")

The examples below demonstrate how to configure a stream through the Uplynk connector.

We start by creating an `UplynkSSAIConfiguration` object that describes how to configure an Uplynk source.

```swift
    let ssaiConfiguration = UplynkSSAIConfiguration(
                                id: .asset(ids: [ your list of asset IDs]),
                                assetType: .asset or .channel,
                                prefix: "https://content.uplynk.com", 
                                preplayParameters: [ Dictionary of parameters ]
                                contentProtected: true or false)

```

* `id`: The ID field identifies the asset. Instead of a single string, developers can also specify an array of asset IDs as strings, which will be stitched into a continuous stream. Assets can also be identified by `externalIds` and a `userId`. In that case, you can instantiate a `.external(ids: [list of channel IDs], userID: your user ID)` instead.

* `preplayParameters`: The `preplayParameters` object should have string-key-string-value combinations, which will be used as query parameters for the Preplay API call. Nested objects are not supported.

* `orderedPreplayParameters`: The `orderedPreplayParameters` object should have string-key-string-value combinations, which will be used as query parameters for the Preplay API call. Nested objects are not supported. Unlike `preplayParameters`, `orderedPreplayParameters` preserves the order of parameters while making a request, which is neccessary to prevent unsigned parameters that could break signature validation.

* `contentProtected`: Boolean value which will internally set any necessary content-protection information. No content-protection details have to be specified by the customer.

* **A Preplay request must include all parameters defined within the playback request, hence these parameters must be included in the THEOplayer source**. This request must also include a digital signature if the 'Require a token for playback' option is enabled in the back-end on the corresponding live channel. (See also : [Signing a Playback URL Tutorial](https://docs.uplynk.com/docs/sign-playback-url))

* Uplynk specific documentation on the available playback URL query parameters can be found on the Uplynk documentation site under [Customizing Playback via Parameters](https://docs.uplynk.com/docs/customize-playback-via-parameters)

* Some parameters can be excluded from the digital signature calculation. These parameters may enable certain use cases (e.g. DVR) and would for this reason be excluded from the digital signature.

Now, you can create a typed source, and attach the `UplynkSSAIConfiguration` object to the `ssai` property of the source

```swift
// Swift examples
let myTypedSource = TypedSource(src: "",
                                type: "application/x-mpegurl",
                                ssai: ssaiConfiguration)

let sourceDescription = SourceDescription(source: typedSource)
yourTHEOplayer.source = sourceDescription

```

## Stream Configuration (with ads)[​](#stream-configuration-with-ads "Direct link to Stream Configuration (with ads)")

Ad specific parameters can be passed in the `preplayParameters` argument of the `UplynkSSAIConfiguration`. An example of that is:

```swift
    let ssaiConfiguration = UplynkSSAIConfiguration(
                                id: ...
                                assetType: ...,
                                prefix: ..., 
                                preplayParameters: [
                                    // Parameters here should specify the necessary ad parameters for the Preplay API. Use `orderedPreplayParameters` instead to pass these in the order given.
                                    "ad.param1": "param_val1",
                                    "ad.param2": "param_val2" 
                                ],
                                contentProtected: ...)

```

## Preplay Response[​](#preplay-response "Direct link to Preplay Response")

THEOplayer automatically interprets the response returned by the Preplay service. However, if a developer wants to perform their own logic with the Preplay API response, then they can register their implementation of the `UplynkEventListener` protocol through the `UplynkConnector` constructor. There, you can get access to the `PrePlayLiveResponse` or `PrePlayVODResponse` objects through:

```swift
    func onPreplayLiveResponse(_ response: PrePlayLiveResponse) { ... }
    func onPreplayVODResponse(_ response: PrePlayVODResponse) { ... }

```

## Using Tokens[​](#using-tokens "Direct link to Using Tokens")

Uplynk users often leverage URL signatures (i.e. tokens) to further secure their content -- on top of AES-128 encryption or studio DRM.

A token is (typically) generated on back-end using an API key and a set of parameters. (The documentation at [Signing a Playback URL Tutorial](https://docs.uplynk.com/docs/sign-playback-url) describes this process.) This set of parameters should also be passed along to the `playbackURLParameters` in a `UplynkSSAIConfiguration`.

If you do not configure the `playbackURLParameters` correctly in relation to your signature parameters, then the Preplay request made by THEOplayer will most likely return an invalid Preplay response, preventing THEOplayer from setting up your stream.

# Related articles

* [Uplynk - Ads](/documentation/pr-preview/pr-690/theoplayer/connectors/ios/uplynk/ads.md)
* [Uplynk - Ping](/documentation/pr-preview/pr-690/theoplayer/connectors/ios/uplynk/ping.md)
