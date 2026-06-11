# Default UI

<!-- -->

Source:

<!-- -->

Big Buck Bunny (bigBuckBunny)

Override device type:

<!-- -->

Code

```jsx
import {DefaultUI} from '@theoplayer/react-ui'

const configuration = {
    libraryLocation: "/path/to/theoplayer/",
    license: "your_theoplayer_license"
};

const source = {
    sources: {src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8'},
    metadata: {
        title: "Big Buck Bunny"
    }
};

const App = () => {
    return <DefaultUI configuration={configuration} source={source}/>;
};

```

[📜 View full source on GitHub](https://github.com/THEOplayer/web-ui/blob/main/docs/static/open-video-ui/v2/examples/react/default-ui/demo.html)
