# Making a custom component

<!-- -->

This guide demonstrates how to make your own custom components that integrate with the player, and which you can use in your own custom UI.

note

We use [Lit](https://lit.dev/) to build all components in Open Video UI for Web, and we highly recommend it for your own custom components.

You can also use a different library (like [Svelte](https://svelte.dev/docs/svelte/custom-elements)), or you can use the [Custom Element](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements) and [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) APIs directly.

## A custom play button[​](#a-custom-play-button "Direct link to A custom play button")

First, we'll build a simple button that plays or pauses the player when clicked.

tip

The built-in [`<theoplayer-play-button>`](https://theoplayer.github.io/web-ui/api/classes/PlayButton.html) also provides this functionality.

### Step 1: Create a custom button[​](#step-1-create-a-custom-button "Direct link to Step 1: Create a custom button")

Create a new JavaScript file called `my-play-button.js` with the following code:

<!-- -->

[my-play-button.js (step 1)](https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v2/guides/web/custom-component/my-play-button-step1.js)

```js
import { Button } from '@theoplayer/web-ui';
import { html } from 'lit';

// Define a new class for our custom element.
// We extend the `Button` class from Open Video UI for Web,
// so we can inherit some logic and styles.
export class MyPlayButton extends Button {
    // This method is called whenever the button is (re-)rendered.
    // See: https://lit.dev/docs/components/rendering/
    render() {
        return html`Play`;
    }

    // This method is called whenever the button gets clicked.
    handleClick() {
        alert('My play button was clicked!');
    }
}

// Define our class as the constructor for our custom element.
// This allows us to use <my-play-button> anywhere in our HTML.
// If you're using TypeScript, you can also use
// Lit's @customElement decorator on the MyPlayButton class.
// See: https://lit.dev/docs/components/defining/
customElements.define('my-play-button', MyPlayButton);

```

Now add your new button to your custom UI. In our example, we'll place it in the `centered-chrome` slot, so it'll appear in the center of the player:

```html
<script type="module" src="./my-play-button.js"></script>
<theoplayer-ui
    configuration='{"libraryLocation":"/path/to/node_modules/theoplayer/","license":"your_theoplayer_license_goes_here"}'
    source='{"sources":{"src":"https://example.com/stream.m3u8"}}'
>
    <my-play-button slot="centered-chrome"></my-play-button>
</theoplayer-ui>

```

It should look something like this:

Try clicking the "Play" button in the middle of the screen. You should see an alert window popping up saying `My play button was clicked!`.

### Step 2: Integrate with the backing player[​](#step-2-integrate-with-the-backing-player "Direct link to Step 2: Integrate with the backing player")

Of course, we want the player to start playing instead of showing an alert! For this, we need to get access to the backing THEOplayer instance.

Open Video UI for Web provides a built-in mechanism to automatically inject dependencies into UI components, such as the player instance, or other fullscreen state of the UI. When a UI component is added as a child (or descendant) of a `<theoplayer-default-ui>` or `<theoplayer-ui>`, the parent UI will automatically inject those dependencies.

First, the UI component needs to opt into this mechanism by [mixing in](https://www.typescriptlang.org/docs/handbook/mixins.html) `StateReceiverMixin` into its superclass (see [API documentation](https://theoplayer.github.io/web-ui/api/functions/StateReceiverMixin.html)). This mixin takes the original superclass, and an array of dependencies which need to be injected:

```js
import { Button, StateReceiverMixin } from '@theoplayer/web-ui';

export class MyPlayButton extends StateReceiverMixin(Button, ['player']) {
    // ...
}

```

For TypeScript users

If you're using TypeScript, you can also use the `@stateReceiver` decorator instead.

```typescript
import { Button, stateReceiver } from '@theoplayer/web-ui';

@stateReceiver(['player'])
export class MyPlayButton extends Button {
    // ...
}

```

Once this button is added to a `<theoplayer-ui>`, it'll automatically receive the backing THEOplayer instance in its `player` property. If you want to do some custom logic when this happens, you can implement a setter for this property:

```js
export class MyPlayButton extends StateReceiverMixin(Button, ['player']) {
    set player(player) {
        this._player = player;
        console.log('My play button received a player!');
    }
}

```

Change your `handleClick()` method to call `play()` or `pause()` on the player:

[my-play-button.js (step 2)](https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v2/guides/web/custom-component/my-play-button-step2.js)

```js
import { Button, StateReceiverMixin } from '@theoplayer/web-ui';
import { html } from 'lit';

export class MyPlayButton extends StateReceiverMixin(Button, ['player']) {
    constructor() {
        super();
        this._player = undefined;
    }

    get player() {
        return this._player;
    }
    set player(player) {
        this._player = player;
        console.log('My play button received a player!');
    }

    render() {
        return html`Play`;
    }

    handleClick() {
        if (!this._player) {
            // Not (yet) attached to a player.
            return;
        }
        // Toggle the player's playing state.
        if (this._player.paused) {
            this._player.play();
        } else {
            this._player.pause();
        }
    }
}

customElements.define('my-play-button', MyPlayButton);

```

It should look something like this:

Try clicking the "Play" button in the middle of the screen. The player starts playing!<br />Clicking it again should pause the player.

### Step 3: Update the button text[​](#step-3-update-the-button-text "Direct link to Step 3: Update the button text")

Notice that the button text always says "Play", even when the player is already playing. To fix this, we will need to add a [reactive property](https://lit.dev/docs/components/properties/) that we can use inside our `render()` method.

[my-play-button.js (step 3)](https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v2/guides/web/custom-component/my-play-button-step3.js)

```js
import { Button, StateReceiverMixin } from '@theoplayer/web-ui';
import { html } from 'lit';

export class MyPlayButton extends StateReceiverMixin(Button, ['player']) {
    // Define our reactive properties.
    // See: https://lit.dev/docs/components/properties/
    static properties = {
        _paused: { state: true }
    };

    constructor() {
        super();
        this._player = undefined;
        this._paused = true;
    }

    get player() {
        return this._player;
    }
    set player(player) {
        this._player = player;
        console.log('My play button received a player!');
    }

    render() {
        // Show a different label depending on the paused state.
        return html`${this._paused ? 'Play' : 'Pause'}`;
    }

    handleClick() {
        if (!this._player) {
            // Not (yet) attached to a player.
            return;
        }
        // Toggle the player's playing state,
        // and update our paused state to trigger a re-render.
        if (this._player.paused) {
            this._player.play();
            this._paused = false;
        } else {
            this._player.pause();
            this._paused = true;
        }
    }
}

customElements.define('my-play-button', MyPlayButton);

```

For TypeScript users

If you're using TypeScript, you can also use the `@state` decorator instead.

```typescript
import { Button } from '@theoplayer/web-ui';
import { state } from 'lit';

export class MyPlayButton extends Button {
    @state()
    private accessor _paused: boolean = true;
}

```

It should look something like this:

Congratulations, you've built your very own play button! 🎉

## A custom quality label[​](#a-custom-quality-label "Direct link to A custom quality label")

Next, let's create a label that displays the resolution of the player's current video quality.

tip

The built-in [`<theoplayer-active-quality-display>`](https://theoplayer.github.io/web-ui/api/classes/ActiveQualityDisplay.html) also provides this functionality.

### Step 1: Create a custom component[​](#step-1-create-a-custom-component "Direct link to Step 1: Create a custom component")

Create a new JavaScript file called `my-quality-label.js` with the following code:

[my-quality-label.js (step 1)](https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v2/guides/web/custom-component/my-quality-label-step1.js)

```js
import { css, html, LitElement } from 'lit';

// This style will be applied to every <my-quality-label>.
const myQualityLabelStyle = css`
    /* This rule targets the element itself, i.e. <my-quality-label> */
    :host {
        /* Use the same text and background color as the rest of the UI controls */
        color: var(--theoplayer-text-color, #fff);
        background: var(--theoplayer-control-background, transparent);

        /* Add some padding */
        padding: var(--theoplayer-control-padding, 10px);
    }
`;

// Define a new class for our custom element.
export class MyQualityLabel extends LitElement {
    static styles = [myQualityLabelStyle];

    render() {
        // Show something (for testing)
        return html`1080p`;
    }
}

// Define our class as the constructor for our custom element.
// This allows us to use <my-quality-label> anywhere in our HTML.
customElements.define('my-quality-label', MyQualityLabel);

```

Now add your new label to your custom UI. In our example, we'll place it inside a `<theoplayer-control-bar>` in the default slot, so it'll appear at the bottom of the player:

```html
<script type="module" src="./my-quality-label.js"></script>
<theoplayer-ui
    configuration='{"libraryLocation":"/path/to/node_modules/theoplayer/","license":"your_theoplayer_license_goes_here"}'
    source='{"sources":{"src":"https://example.com/stream.m3u8"}}'
>
    <theoplayer-control-bar>
        <!-- A seek bar -->
        <theoplayer-time-range></theoplayer-time-range>
    </theoplayer-control-bar>
    <theoplayer-control-bar>
        <!-- A few commonly used built-in controls -->
        <theoplayer-play-button></theoplayer-play-button>
        <theoplayer-mute-button></theoplayer-mute-button>
        <!-- A spacer, to fill up the remaining space in the middle -->
        <span style="flex-grow: 1"></span>
        <!-- Your brand new quality label! -->
        <my-quality-label></my-quality-label>
        <!-- Some other controls -->
        <theoplayer-settings-menu-button menu="settings-menu"></theoplayer-settings-menu-button>
        <theoplayer-fullscreen-button></theoplayer-fullscreen-button>
    </theoplayer-control-bar>
    <!-- A settings menu, so you can manually change the active quality -->
    <theoplayer-settings-menu slot="menu" id="settings-menu"></theoplayer-settings-menu>
</theoplayer-ui>

```

It should look something like this:

### Step 2: Listen to quality changes[​](#step-2-listen-to-quality-changes "Direct link to Step 2: Listen to quality changes")

Right now, the quality label is static, it doesn't actually update when the player's quality changes. Let's fix that!

1. Once again, we use the `StateReceiverMixin` to gain access to the backing THEOplayer instance.
2. When we receive the player, we add an event listener for the `addtrack` event of `player.videoTracks`, so we'll be notified when the video track becomes available.
3. We register an `activequalitychanged` event listener on that video track, so we can respond when the active video quality changes.
4. When our `activequalitychanged` listener fires, we update the reactive property `this._activeVideoQuality`, which will trigger a re-render when changed.
5. When we re-render the component, we return an HTML template containing the active quality's height.

[my-quality-label.js (step 2)](https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v2/guides/web/custom-component/my-quality-label-step2.js)

```js
import { StateReceiverMixin } from '@theoplayer/web-ui';
import { css, html, LitElement } from 'lit';

const myQualityLabelStyle = css`
    :host {
        color: var(--theoplayer-text-color, #fff);
        background: var(--theoplayer-control-background, transparent);
        padding: var(--theoplayer-control-padding, 10px);
    }
`;

export class MyQualityLabel extends StateReceiverMixin(LitElement, ['player']) {
    static styles = [myQualityLabelStyle];
    static properties = {
        _activeVideoQuality: { state: true }
    };

    constructor() {
        super();
        this._player = undefined;
        this._activeVideoTrack = undefined;
        this._activeVideoQuality = undefined;
    }

    get player() {
        return this._player;
    }
    set player(player) {
        if (this._player) {
            // Clean up
            this._player.videoTracks.removeEventListener('addtrack', this.handleAddTrack);
            this.updateActiveTrack(undefined);
        }
        this._player = player;
        if (this._player) {
            // Listen for the 'addtrack' event
            this._player.videoTracks.addEventListener('addtrack', this.handleAddTrack);
            // If the player already has an active video track,
            // start using it right away!
            if (this._player.videoTracks.length > 0) {
                this.updateActiveTrack(this._player.videoTracks[0]);
            }
        }
    }

    handleAddTrack = (event) => {
        this.updateActiveTrack(event.track);
    };
    updateActiveTrack(track) {
        if (this._activeVideoTrack) {
            // Clean up
            this._activeVideoTrack.removeEventListener('activequalitychanged', this.handleActiveQualityChanged);
        }
        this._activeVideoTrack = track;
        if (this._activeVideoTrack) {
            // Listen for the 'activequalitychanged' event
            this._activeVideoTrack.addEventListener('activequalitychanged', this.handleActiveQualityChanged);
            // If the track already has an active quality,
            // start using it right away!
            if (this._activeVideoTrack.activeQuality) {
                this.updateActiveQuality(this._activeVideoTrack.activeQuality);
            }
        }
    }

    handleActiveQualityChanged = (event) => {
        this.updateActiveQuality(event.quality);
    };
    updateActiveQuality(quality) {
        // Update our (reactive) internal state, which will trigger a re-render.
        this._activeVideoQuality = quality;
    }

    render() {
        if (this._activeVideoQuality) {
            // Show the quality's height in our <span>
            return html`${this._activeVideoQuality.height}p`;
        } else {
            // No active quality yet...
            return html``;
        }
    }
}

customElements.define('my-quality-label', MyQualityLabel);

```

It should look something like this:

Try changing the active quality by clicking the ⚙️ (Settings) button, and changing "Automatic" to a specific quality. You should see your custom label update to show the height of the new quality.

That's it! You now have your very own active quality label! 🥳

## Further reading[​](#further-reading "Direct link to Further reading")

* [Intro to Lit](https://lit.dev/tutorials/intro-to-lit/)
* [Lit documentation](https://lit.dev/docs/)
* [Web components guide on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
