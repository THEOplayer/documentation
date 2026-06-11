# gemius-connector-web

The Gemius connector provides a Gemius integration for THEOplayer.

## Installation[​](#installation "Direct link to Installation")

```sh
npm install @theoplayer/gemius-connector-web

```

Load the gplayer.js library from Gemius. There are two options to to this: either you do it synchronously:

```html

<script type="text/javascript" src="https://PREFIX.hit.gemius.pl/gplayer.js"></script>

```

... or asynchronously

```html
<script type="text/javascript">
<!--//--><![CDATA[//><!--
function gemius_pending(i) { window[i] = window[i] || function() {var x = window[i+'_pdata']
= window[i+'_pdata'] || []; x[x.length]=arguments;};};
gemius_pending('gemius_init');
function gemius_player_pending(obj,fun) {obj[fun] = obj[fun] || function() {var x =
window['gemius_player_data'] = window['gemius_player_data'] || [];
x[x.length]=[this,fun,arguments];};};
gemius_player_pending(window,"GemiusPlayer");
gemius_player_pending(GemiusPlayer.prototype,"newProgram");
gemius_player_pending(GemiusPlayer.prototype,"newAd");
gemius_player_pending(GemiusPlayer.prototype,"adEvent");
gemius_player_pending(GemiusPlayer.prototype,"programEvent");
gemius_player_pending(GemiusPlayer.prototype,"setVideoObject");
(function(d,t) {try {var gt=d.createElement(t),s=d.getElementsByTagName(t)[0],
l='http'+((location.protocol=='https:')?'s':''); gt.setAttribute('async','async');
gt.setAttribute('defer','defer'); gt.src=l+'://PREFIX.hit.gemius.pl/gplayer.js';
s.parentNode.insertBefore(gt,s);} catch (e) {}})(document,'script');
//--><!]]>

```

Make sure you replace `PREFIX` with the short string of letters specifying the Gemius collecting server. It can be acquired as a part of the tracking code from gemiusPrism interface ( in Settings / Scripts / Streaming Players) or from your local Gemius Tech Support Department.

## Usage[​](#usage "Direct link to Usage")

First you need to add the Gemius connector to your app :

* Add as a regular script

```html

<script type="text/javascript" src="path/to/gemius-connector.umd.js"></script>
<script type="text/javascript">
    const player = new THEOplayer.Player(element, configuration);

    // Define your configuration for the connector:
    const gemiusConfig = {
        gemiusID: '<your-publisher-id>',
        debug: true
    };

    // Define the initial program parameters:
    const programParameters = {
        "programID": "000001",
        "programName": "Big Buck Bunny (DASH)",
        "programDuration": 635,
        "programType": "video",
        "transmissionType": 1,
        "programGenre": 4,
        "series": "Test Content",
        "programSeason": "season 1",
        "programProducer": "Blender",
        "customAttributes": {
            "intCategory": "Comedy",
            "intType": "vod",
            "intStatus": "public"
        }
    };

    // Create the GemiusConnector:
    const gemiusConnector = new THEOplayerGemiusConnector.GemiusConnector(player, gemiusConfig, programParameters);
</script>

```

* Add as an ES2015 module

```html
<script type="module">
    import {GemiusConnector} from "path/to/gemius-connector.esm.js";

    const player = new THEOplayer.Player(element, configuration);

    // Define your configuration for the connector:
    const gemiusConfig = {
        gemiusID: '<your-publisher-id>',
        debug: true
    };

    // Define the initial program parameters:
    const programParameters = {
        "programID": "000001",
        "programName": "Big Buck Bunny (DASH)",
        "programDuration": 635,
        "programType": "video",
        "transmissionType": 1,
        "programGenre": 4,
        "series": "Test Content",
        "programSeason": "season 1",
        "programProducer": "Blender",
        "customAttributes": {
            "intCategory": "Comedy",
            "intType": "vod",
            "intStatus": "public"
        }
    };

    // Create the GemiusConnector:
    const gemiusConnector = new GemiusConnector(player, gemiusConfig, programParameters);
</script>

```

## Updating program parameters[​](#updating-program-parameters "Direct link to Updating program parameters")

If the program parameters changed during playback, you can update it with:

```javascript
const newProgramParameters = { ... };

gemiusConnector.update(newProgramParameters);

```
