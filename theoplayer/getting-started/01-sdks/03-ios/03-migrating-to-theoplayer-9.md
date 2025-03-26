# Migrating to THEOplayer iOS/tvOS SDK 9.x

This article will guide you through updating from THEOplayer iOS/tvOS SDK version 9 (from version 8),
and the changes needed in your code.

## Update THEOplayer

Update THEOplayer iOS/tvOS SDK to version 9 in your Podfile:

```ruby
target 'MyApp' do
  pod 'THEOplayerSDK-core', '~> 9'
end
```

If you're using one of [our connectors](/theoplayer/connectors/ios/),
make sure to update them to the latest version too to ensure proper support for THEOplayer version 9.

## Objective-C support has been removed

In version 9, the THEOplayer API is no longer available through Objective-C.
It was [deprecated since version 8](03-migrating-to-theoplayer-8.md#objective-c-support-is-deprecated).

When it was introduced, the goal of the Objective-C APIs was to provide bindings to bridge our native SDK to React Native.
Over time, that became unneeded as React Native became capable to interact directly with Swift APIs.

## API changes to THEOplayerSDK

Removing `IntegrationType` in favor of using `IntegrationKind`:

Before 9.0:

```swift
let theoLiveIntegration = THEOliveIntegrationFactory.createIntegration()

if theoLiveIntegration.type == .THEOlive {
  // ...
}
```

After 9.0:

```swift
let theoLiveIntegration = THEOliveIntegrationFactory.createIntegration()

if theoLiveIntegration.kind == .THEOlive {
  // ...
}
```

Removing `MillicastSource` initializer in favor of another one whose arguments are more clearly named:

Before 9.0:

```swift
let source: MillicastSource = .init(streamName: "streamName", accountID: "accountID", token: token, connectOptions: clientOptions)
```

After 9.0:

```swift
let source: MillicastSource = .init(src: "streamName", streamAccountId: "accountID", subscriberToken: token, connectOptions: clientOptions)
```

Replacing the `TypedSource` initialize which takes a `URL` object as a src with one that takes a URL `String` instead:

Before 9.0:

```swift
var builder = URLComponents()
builder.scheme = "scheme"
builder.host = "host"
builder.path = "/path"
let src: TypedSource = .init(src: builder.url!)
```

After 9.0:

```swift
let src: TypedSource = .init(src: "scheme://host/path")
```

`TextTrackCue`'s `uid` is converted to an `Int` from a `Double`. Its `startTime` and `endTime` properties have become non-null `Double`s

The `dai` property is removed from the `Ads` object by default, and will only be available as an extension to the object when adding the `GoogleIMAIntegration`.
