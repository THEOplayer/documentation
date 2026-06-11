# Migrating to Open Video UI for Web 2.x

This article will guide you through updating to Open Video UI for Web version 2 (from version 1), and the changes needed in your code.

## Update dependencies[​](#update-dependencies "Direct link to Update dependencies")

Run the following command to install Open Video UI for Web version 2:

```sh
npm install @theoplayer/web-ui@2

```

Open Video UI for Web now depends on [Lit version 3](https://www.npmjs.com/package/lit). If your project already uses Lit, make sure you use a compatible version.

## Update polyfill for legacy browsers[​](#update-polyfill-for-legacy-browsers "Direct link to Update polyfill for legacy browsers")

In version 1, we recommended loading the [Web Components Polyfills](https://github.com/webcomponents/polyfills) on legacy browsers that do not natively support the Custom Elements API.

As of version 2, Open Video UI for Web ships its own polyfill bundle, which includes:

* [Web Components Polyfills](https://github.com/webcomponents/polyfills)
* [Lit's `polyfill-support` module](https://lit.dev/docs/v2/tools/requirements/#polyfills)

We recommend switching to our polyfill bundle, so you'll always have all the necessary polyfills needed to support legacy browsers. Alternatively, [you can load these polyfills manually](https://github.com/THEOplayer/web-ui/blob/%40theoplayer/web-ui%402.0.0/src/polyfills.ts).

```diff
- import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
- import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';
+ import '@theoplayer/web-ui/polyfills';

```

## Migrate to Lit for custom components[​](#migrate-to-lit-for-custom-components "Direct link to Migrate to Lit for custom components")

If you've written your own custom components that extend from built-in components provided by Open Video UI (such as the `Button` component), you may notice that these components now extend from [`LitElement`](https://lit.dev/docs/api/LitElement/). This allows you to use Lit's [reactive properties](https://lit.dev/docs/components/properties/) and [template-based rendering](https://lit.dev/docs/components/rendering/) to facilitate developing your custom components.

Previously, your custom component would need to pass a `<template>` element to the built-in component to customize the rendered content.

Custom component in version 1.x

```js
import { Button, buttonTemplate } from '@theoplayer/web-ui';

const myButtonCss = `:host { color: red; }`;
const template = document.createElement('template');
template.innerHTML = buttonTemplate('Custom content', myButtonCss);

export class MyCustomButton extends Button {
    constructor() {
        super({ template });
    }

    handleClick() {
        alert('My custom button was clicked!');
    }
}

```

Now, you can override the `render` method instead and return an [`html`](https://lit.dev/docs/api/static-html/#html) template. To add styles, you can add a [`static styles` property](https://lit.dev/docs/components/styles/).

Custom component in version 2.x

```js
import { Button } from '@theoplayer/web-ui';
import { html, css } from 'lit';

export class MyCustomButton extends Button {
    static styles = [
        ...Button.styles,
        css`
            :host {
                color: red;
            }
        `
    ];

    constructor() {
        super();
    }

    render() {
        return html`Custom content`;
    }

    handleClick() {
        alert('My custom button was clicked!');
    }
}

```

note

The old constructor-based API is still supported in version 2, although we highly recommend switching to the `render` method.

See the [updated custom component guide](/documentation/pr-preview/pr-690/open-video-ui/web/guides/custom-component.md) for more information.
