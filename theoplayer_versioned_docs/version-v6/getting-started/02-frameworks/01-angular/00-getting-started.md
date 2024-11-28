# Getting started with Angular

_A brief guide on how to build a THEOplayer in an Angular environment._

Note that this information is for a basic player in a local testing environment. Additional information may be needed for specific cases.

## Step-by-step guide:

1. Make sure you have the Angular CLI installed

```shell
npm install -g @angular/cli
```

2. If needed, create a new workspace and initial application
   ng new appname

3. In the root project, create a new component for the player (in this case appname)

```shell
cd appname
ng generate component theoplayer
```

4. add the THEOplayer.js files to the root project
5. In index.html add the /THEOplayer.js as a script tag and /ui.css as a stylesheet
6. In theoplayer.component.html add

```html
<div class="theoplayer-container video-js theoplayer-skin"></div>
```

7. In theoplayer.component.ts add

```typescript
import { Component, OnInit } from '@angular/core';
import * as THEOplayer from '../../../THEOplayer.js';

@Component({
  selector: 'app-theoplayer',
  templateUrl: './theoplayer.component.html',
  styleUrls: ['./theoplayer.component.css'],
})
export class TheoplayerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.createPlayer();
  }

  createPlayer() {
    const element = document.querySelector('.theoplayer-container');

    const player = new THEOplayer.Player(element, {
      libraryLocation: '',
    });

    player.source = {
      sources: [
        {
          src: '//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',
          type: 'application/x-mpegurl', // sets type to MPEG-DASH
        },
      ],
    };
  }
}
```

Then

```typescript
import * as THEOplayer from '../../../THEOplayer.js';
```

will make sure to get everything needed from our sdk.

9. In app.component.html add the following code to display the player in the app component.

```html
<app-theoplayer></app-theoplayer>
```

10. Profit.

## Related articles

- https://angular.io/guide/quickstart
