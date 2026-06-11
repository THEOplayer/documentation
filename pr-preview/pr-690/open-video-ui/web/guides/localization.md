# Localization

The Open Video UI for Web can be localized to different languages, enabling you to reach audiences from different regions of the world.

Localization works by [registering one or more locales](#register-a-locale) and then [selecting one of the registered locales using the `lang` attribute](#select-a-language).

## Register a locale[​](#register-a-locale "Direct link to Register a locale")

A locale is a JavaScript object mapping translation IDs to translated messages. You can register a locale with the `addLocale` function:

French locale

```javascript
import { addLocale } from '@theoplayer/web-ui';

addLocale('fr', {
    playAria: 'lire',
    pauseAria: 'pauser',
    replayAria: 'revoir'
    // ...
});

```

Some messages may need to be formatted with one or more values, based on the configuration or active state of the player. For those messages, the translation ID maps to a JavaScript function that takes those values as arguments and returns the formatted translation.

French locale (continued)

```javascript
addLocale('fr', {
    // ...
    seekForwardAria: (offset) => `avancer de ${offset}`,
    seekBackwardAria: (offset) => `reculer de ${offset}`
    // ...
});

```

Refer to the [`Locale` interface definition](https://theoplayer.github.io/web-ui/api/interfaces/Locale.html) in the API references for the complete list of translatable messages.

## Select a language[​](#select-a-language "Direct link to Select a language")

The UI automatically selects the locale based on the `lang` attribute of the `<theoplayer-ui>` (or `<theoplayer-default-ui>`) element, or from the closest parent element with such an attribute.

The value of the `lang` attribute must exactly match the locale name as it was passed to `addLocale`.

Setting the language on the UI

```html
<theoplayer-default-ui lang="fr" source='{"sources":{"src":"https://example.com/stream.m3u8"}}'></theoplayer-default-ui>

```

You can also put the `lang` attribute on any parent element. For example, if the entire page is in French, you could put the attribute on the `<html>` element:

Setting the language on the HTML document

```html
<!doctype html>
<html lang="fr">
    <head>
        <title>Ma page</title>
    </head>
    <body>
        <theoplayer-default-ui source='{"sources":{"src":"https://example.com/stream.m3u8"}}'></theoplayer-default-ui>
    </body>
</html>

```

## Remarks[​](#remarks "Direct link to Remarks")

### Update translations when upgrading Open Video UI[​](#update-translations-when-upgrading-open-video-ui "Direct link to Update translations when upgrading Open Video UI")

Newer versions of the Open Video UI for Web may add new messages that need to be translated. We follow [semantic versioning](https://semver.org/), so new messages can only be added in *major* or *minor* versions.

When using custom translations in your app, we recommend pinning the `@theoplayer/web-ui` dependency in your app's `package.json` to a specific minor version using a tilde constraint (`~`). Avoid using a caret constraint (`^`), since this may cause upgrading past your currently selected minor version.

package.json

```json
{
    "dependencies": {
        "@theoplayer/web-ui": "~2.2.0"
    }
}

```

When you decide to upgrade Open Video UI to the latest version, make sure to also update your translations. Check the history for [`i18n/Locale.ts`](https://github.com/THEOplayer/web-ui/commits/main/src/i18n/Locale.ts) to see whether any messages were added or changed since the previous version.
