# FAQ - Guidelines

FAQ articles answer a question a customer (might) ask on a certain limitation, behavior or platform.

- [The Concept](#the-concept)
- [Writing the Article](#Writing-the-Article)
  - [Title of the Article](#Title-of-the-Article)
    - Examples
  - [Body of the Article](#Body-of-the-Article)
  - [Template](#Template)
    - Examples
- [Checklist](#Checklist)

## The Concept

An FAQ article answers a single question without overdoing it.

A question isn’t about a how-to-use an THEOplayer API, or a certain THEOplayer feature, because writing an article on that topic would be a “How-To-Guide” article.

For example, don’t create a FAQ article on “How do you create a custom DRM integration”, even if the customer words it like that. Instead, you create a How-To-Guide article on “Custom DRM integration through the Network API”.

A FAQ can be about a certain platform or SDK, but it does not contain code. If code is required to answer the question, create a How-To-Guide and refer to this newly created How-To-Guide from the FAQ article.

## Writing the Article

### Title of the Article

The title of the article should read like a question, but you need to omit the question mark <<?>>.

**Examples**

- [Why can't I select another video quality on iOS/tvOS?](../faq/07-why-cant-we-select-other-video-quality-on-ios-tvos.md)
- [Is YouTube supported?](../faq/08-is-youtube-supported.md)

### Body of the Article

- The first paragraph of the body provides a short answer on the question.
- Then a “Long answer” section follows.
- Then a “Resources” section follows, if applicable.

### Template

```markdown
# Title of the Article

This is a short answer to the title.

## Long Answer

This is a long answer to the title.
With a lot of information.
Or at least a bit more than in the opening paragraph.

# Resources

The following resources provide more information:

- https://developers.google.com/youtube/terms/api-services-terms-of-service
- https://developers.google.com/youtube/terms/required-minimum-functionality
- https://developers.google.com/youtube/terms/developer-policies
```

Markdown Template available [here](../contribution-guidelines/article-faq-template.md).

**Examples**

- [Is YouTube supported?](../faq/faq-08-is-youtube-supported.md)
- [Why can't I select another video quality on iOS/tvOS?](../faq/faq-07-why-cant-we-select-other-video-quality-on-ios-tvos.md)

## Checklist

- This article can’t be rewritten as a how-to-guide.
- The template is respected.
- There is no code in the answer.
