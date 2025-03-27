# Introduction

In this guide, we will explore how to use the Objective-C APIs available in the THEOplayer iOS SDK.
We will also dive into some of the changes made to the Swift APIs to accommodate the compatibility of the Objective-C APIs.

## THEOplayer Objective-C API guide

#### Getting started

Get the latest THEOplayer iOS SDK. The simplest way to do so is through [Cocoapods](https://github.com/THEOplayer/theoplayer-sdk-ios).
Starting from version 2.89.0, the THEOplayer iOS SDK comes with Objective-C support! This single framework contains all the declarations available in Swift and Objective-C (except for the legacy Verizon Media APIs which are still only available in Swift).

To use it, simply import the framework in the header or implementation files like so:

```objc
#import <THEOplayerSDK/THEOplayerSDK-Swift.h>
```

You should now be able to access all the APIs provided.
**Tip:** Start typing the prefix `THEOplayer` for a `@property` declaration for example, then Xcode should already auto-complete some THEOplayerSDK related declarations.

#### Declarations

Always expect to see the `THEOplayer` prefix for all the declarations that are related to THEOplayerSDK. We do this to follow the convention and to avoid conflict with declarations with similar naming from other modules.

#### Classes

All classes are inherited from `NSObject` as per standard and are initialized using the `alloc/init` convention.
For example, the class `THEOplayerSourceDescription` initialization is done by:

```objc
[[THEOplayerSourceDescription alloc] initWithSource:(THEOplayerTypedSource * _Nonnull)]
```

**Note:** If you are familiar with the THEOplayer Swift SDK, you might be used to encountering `struct` declarations. These are all converted to `class` (except for event types) since `struct` is not supported in Objective-C. More information about this topic can be found in the [Changes to THEOplayer Swift API](#changes-to-theoplayer-swift-api) section.

#### Protocols

All protocols declared in Swift are also available in Objective-C. To access them from a property declaration, use the following syntax format:

```objc
id<THEOplayerTextTrack> textTrack;
```

Notice the `id<>` notation, this is required for Xcode to detect that you are trying to declare a property of type `protocol` declaration.

**Limitations:**
For THEOplayerTextTrackList and THEOplayerMediaTrackList protocols, the convenient subscript operator is unsupported in Objective-C. Instead, use the `count` property alongside the `get` method to achieve the same goal.

```objc
THEOplayer *player;
for (int i = 0; i < player.textTracks.count; i += 1) {
    NSLog(@"The textTrack is: %@", [player.textTracks get: i]);
}
```

#### Enums

All enums have `NSInteger` type raw values. Similar to the enum, all the cases in the enum are prefixed with `THEOplayer`. This is necessary since enum cases can be directly accessed.
The case values start at 1 and increment from there for each new case. The value 0 is reserved for a special `NONE` case which should be treated similarly to having a `nil` value whenever present.

#### Primitive Types

For integer and double values, we use `NSNumber` over `int` and `double`. The benefit this provides is that `NSNumber` can be nullable while `int` and `double` cannot. This helps keep the parity between the Swift and Objective-C APIs.
For each individual use case, refer to the documentation for the precision of the `NSNumber`.

Consider the following method call, the visibility parameter expect an argument of type `NSNumber`. You can simply pass a literal `NSNumber` value by using the `@` prefix:

```objc
THEOplayer *player;
[player.pip configureWithMovable: true defaultCorner: THEOplayerPictureInPictureCornerTOP_LEFT scale: 1 visibility: @0.5];
```

Consider the following `duration` property which has type `NSNumber`, to access the double value is simple as:

```objc
THEOplayer *player;
NSLog(@"The player duration is: %f", player.duration.doubleValue);
```

Note: You can always refer to the documentation to retrieve the number precision. In case it is integer, then you could access it with `player.duration.integerValue` instead.

## Changes to THEOplayer Swift API

Some changes were accommodated in the existing THEOplayer Swift API for the benefit of having Objective-C compatibility.
The impact of these changes are minimal but worth noting for reference in case there are ambiguities.

#### Structs are now Classes

This change is necessary because Objective-C does not support `struct`s, and this can cause a behavioral change in a codebase where comparisons are done between different instances because `struct`s are value types while `class`s are reference types. Normally this should not be a concern if you are already using these declarations since the `struct`s were not conforming to the `Equatable` protocol and so comparison was not possible.

One difference that might be observed is when setting the property of a reference to a class instead of a struct. Consider this example:

```swift
let vrDir_1: VRDirection? = VRDirection(pitch: 90, roll: 90, yaw: 90)

if var vrDir_2 = vrDir_1 {
    vrDir_2.pitch = 180
}

print(vrDir_1?.pitch)
```

Previously `VRDirection` was a struct, therefore `vrDir_2` would reference the value of `vrDir_1` and setting the `pitch` property on `vrDir_2` would not affect `vrDir_1`. Now that `VRDirection` is a class, `vrDir_2` will refer to `vrDir_1` and set the `pitch` property of `vrDir_1`.

#### Enums

Previously, all the enums had a rawValue of type `String`. Since Objective-C enums support only `NSInteger` as rawValue, we changed the rawValue type of enums to `Int` which will be exposed as `NSInteger` for Objective-C.
In case the `String` value is still needed, it can still be accessed via the `_rawValue` property.

Before:

```swift
let presentationMode: PresentationMode = PresentationMode.inline
print(presentationMode.rawValue) // prints "inline"
```

After:

```swift
let presentationMode: PresentationMode = PresentationMode.inline
print(presentationMode.rawValue) // prints 1
print(presentationMode._rawValue) // prints "inline"
```

But in most cases, the rawValue is not required when passing an argument or setting a property, or when comparing:

```swift
let player = THEOplayer()
if player.presentationMode == .inline {}
player.presentationMode = .inline
```
