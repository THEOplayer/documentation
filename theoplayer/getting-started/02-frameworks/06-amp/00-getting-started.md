# Getting started with AMP

_A brief guide on how to build a THEOplayer in an AMP environment._

Note that this information is for a basic player in a testing environment. Additional information may be needed for specific cases.

## AMP

Accelerated Mobile Pages (AMP) is an open-source HTML framework. More information about AMP is available at https://amp.dev/.

## Step-by-step guide:

1. Have a [valid AMP page](https://validator.ampproject.org/). _(Let's call this page A.)_
2. Prepare an embeddable page which can be served through an [`<amp-iframe>`](https://amp.dev/documentation/components/amp-iframe/?format=websites). _(Let's call this page B.)_ Read more about THEOplayer and iframes [here](../../01-sdks/01-web/03-how-can-we-embed-iframe.md). It's your responsibility to decide the most optimal approach for your use-case. You can use https://cdn.theoplayer.com/demos/iframe/iframe.html as a starting point to prepare your page.
3. Upload page B to a different (sub) domain than page A in order to adhere to the [iframe origin policy](https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md).
4. Embed page B into page A by using an `<amp-iframe>`. It's your responsibility to decide the most optimal approach for your use-case. You can use the snippet below as an example.

```html
<!doctype html>
<html ⚡>
  <head>
    <meta charset="utf-8" />
    <title>amp-iframe</title>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <!--  Import the amp-iframe component in the header. -->
    <script
      async
      custom-element="amp-iframe"
      src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
    ></script>
    <!-- You can use the `amp-bind` extension to dynamically change an iframe src. -->
    <script
      async
      custom-element="amp-bind"
      src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"
    ></script>
    <link rel="canonical" href="<% canonical %>" />
    <meta
      name="viewport"
      content="width=device-width,minimum-scale=1,initial-scale=1"
    />
    <style amp-boilerplate>
      body {
        -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        animation: -amp-start 8s steps(1, end) 0s 1 normal both;
      }
      @-webkit-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @-moz-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @-ms-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @-o-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
    </style>
    <noscript
      ><style amp-boilerplate>
        body {
          -webkit-animation: none;
          -moz-animation: none;
          -ms-animation: none;
          animation: none;
        }
      </style></noscript
    >
    <style amp-custom>
      #sample-resizable-iframe div[overflow] {
        text-align: center;
        background: #f9f7f7;
        line-height: 36px;
      }
    </style>
  </head>
  <body>
    <amp-iframe
      width="500"
      height="281"
      title="THEOplayer demo"
      layout="responsive"
      sandbox="allow-scripts allow-same-origin allow-popups"
      allowfullscreen
      frameborder="0"
      src="https://cdn.theoplayer.com/demos/iframe/iframe.html"
    >
      <amp-img
        layout="fill"
        src="https://cdn.theoplayer.com/demos/iframe/pixel.png"
        placeholder
      ></amp-img>
    </amp-iframe>
  </body>
</html>
```

5. Once again: upload page A to a different (sub) domain than page B in order to adhere to the [iframe origin policy](https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md). For example, you can put page B on https://iframe.website.com/player.html and page A on https://www.website.com/a-random-video.html

An example application of this step-by-step guide is available [here](https://f.hubspotusercontent20.net/hubfs/2163521/Demo_zone/amp-iframe-example.html).

## Alternatives

Some video players offer a **custom AMP tag**. For example, YouTube offers this through [`<amp-youtube>`](https://amp.dev/documentation/components/amp-youtube/?format=websites).
Under the hood, these video players also leverage an `<iframe>`. Although custom AMP tags are primarily syntax sugar, it is arguably a more developer-friendly implementation than `<amp-iframe>`. The advantage of using `<amp-iframe>` is flexibility: you are in full control of the page you're embedding.

Feel free to [contact us](https://www.theoplayer.com/contact) if you would like to contribute to `<amp-theoplayer>`.

## Related content

- https://amp.dev/
- https://amp.dev/documentation/components/amp-iframe/?format=websites
- https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md
