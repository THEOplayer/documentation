# How to change text in THEOplayer

Using language localization, you should be able to change any text in the player to the one you desire.

Language localization is not limited to only translating. It can also be used to change any text in the player.

You can change the language localization in the player configuration.

```js
ui: {
    // your other ui configuration
    language: 'fr',
    languages: { 'fr':
        {
            "Something went wrong during native playback." : "Une erreur s'est produite pendant la lectue native."
            // any other translation
        }
    }
}
```

An example on how to use language localization can be found [here](https://www.theoplayer.com/theoplayer-demo-language-localization).
