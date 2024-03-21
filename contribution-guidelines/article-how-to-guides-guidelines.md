# How-to-Guides - Guidelines

How-To-Guides explain how to use/implement a certain API/feature/SDK.

## The Concept

A how-to-guide is an advanced (or simple) tutorial on how to use and/or implement a certain API/feature related to a THEOplayer SDK.

This type of article outlines what the feature is, and what it can be used for, on which SDKs it can be used, code examples (per SDK) demonstrating the implementation, and additional resources.

## Naming the article and directories

To define some order, we work with numerical prefixes for naming both directories and files.

The structure will always look like this: `xx-directory/yy-directory/zz-filename.md`, with `xx`, `yy` and `zz` being numbers.

**Attention:** If you change a file or a directory name, you'll have to change this in every document too! Doing a right _find & replace all_ will do the trick.

## Writing the Article

### Title of the Article

The title of the article should be:

1. The name of the API,
2. Or the name of the use-case.

**Examples**

- [Up Next](/theoplayer/how-to-guides/miscellaneous/up-next)
- [How to programmatically detect audio tracks](/theoplayer/how-to-guides/mediatrack/how-to-detect-audio-tracks)

### Body of the Article

1. The first paragraph of the body describes 1) what the article is about, 2) what you’ll be leveraging and 3) why it is relevant.
   - If the article is an application / use-case of a certain API (i.e. a child page), then refer to the parent page for more explanation on the parent API – do not repeat what you can do with the API.
2. Secondly, a Table of Contents follows.
3. Thirdly, you list the SDK table
4. Fourthly, you provide more information on what you’ll be explaining. This can be a pseudo-repeat of the first paragraph.
   - In this section, you also put a “Code Examples” sub-header, where you list the implementation per SDK. You must provide every implementation if it’s already in production.
   - _The reason you sort of rephrase what you’re doing, is because in some tutorials, you’re explaining multiple (sub) use-cases._
5. Then a “Sample Applications” section follows, if applicable.
   - In this section you link to a code project / online demo page which further demonstrates the use-case.
6. Then a “Remarks” section follows, if applicable.
   - This section can be used to inform the reader on interesting information, limitations, etc.
7. Then a “Resources” section follows, if applicable.
   - This section can be used to link to relevant blog posts, industry papers, etc.

### Template

````markdown
# Title of the Document

The first paragraph of the body describes

1. what the article is about,
2. what you’ll be leveraging and
3. why it is relevant.

### Table of Contents

- [SDKs](#sdks)
- [Alternative description for use-case](#alternative-description-for-use-case)
- [Code Examples](#code-examples)
- [Sample Applications](#sample-applications)
- [Remarks](#remarks)
- [Resources](#resources)

_Don't forget to review links!:_ For links to other documents and assets, use relative links. For API references, use the absolute link to https://docs.theoplayer.com/api-reference/web/.

## SDKs

| Web SDK | Android SDK | iOS SDK | Android TV SDK | tvOS SDK | Chromecast SDK |
| ------- | ----------- | ------- | -------------- | -------- | -------------- |
| Yes/No  | Yes/No      | Yes/No  | Yes/No         | Yes/No   | Yes/No         |

## Alternative description for use-case

Alternative information on the use-case.

_Don't forget to update title of this section!_

## Code Examples

The code example below does X...

    ```js
    // some code. Use java, swift, ... instead of js if needed.
    ```

##### Web SDK

Specific code for the Web SDK.

    ```js
    // Code HTML5
    ```

Note: we use 5 # here, it will have a different style on Gatsby so it pops out

##### Android SDK

    ```java
    // Code Android
    ```

## Sample Applications

The sample application below demonstates how to do X.

- Code: (if applicable)
- Demo: (if applicable)

## Remarks

The following remarks can help:

- Limitation 1
- Something

## Resources

The following resources provide more information:

- https://developers.google.com/youtube/terms/api-services-terms-of-service
- https://developers.google.com/youtube/terms/required-minimum-functionality
- https://developers.google.com/youtube/terms/developer-policies
````

Markdown Template available [here](article-how-to-guides-template.md).

**Examples**

- [Up Next](/theoplayer/how-to-guides/miscellaneous/up-next)
- [How to programmatically detect audio tracks](/theoplayer/how-to-guides/mediatrack/how-to-detect-audio-tracks)

### Remarks

- You may use images to further illustrate the topic.

## Checklist

- The template is respected.
- The article is in the correct category on Confluence.
