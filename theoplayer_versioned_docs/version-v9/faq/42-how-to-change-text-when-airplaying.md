# Change text when Airplaying

You will need to add the 'metadata' parameter to the SourceDescription with the 'title' property filled with the title to be displayed.

In order for the Airplay title text to be changed, you will need to add a MetadataDescription. Within this MetadataDescription you have to provide metadataKeys (which can be set to nil to ignore) and a title. This title is the variable that changes the text shown when using Airplay.

## Code example

```swift
 public static var bigBuckBunny : SourceDescription {
    let typedSource = TypedSource(src: bigBuckBunnyURL, type: StreamType.hls)
    return SourceDescription(source : typedSource, metadata: MetadataDescription(metadataKeys: nil, title: "A title"))
}
```
