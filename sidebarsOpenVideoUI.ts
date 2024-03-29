import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  openVideoUi: [
    'index',
    {
      type: 'category',
      label: 'Web',
      description: 'Build an astonishing player UI with Web Components.',
      customProps: {
        icon: '🌐',
      },
      link: {
        type: 'generated-index',
        slug: 'web',
        title: 'Open Video UI for Web',
      },
      items: [
        { type: 'doc', id: 'external/web-ui/docs/getting-started' },
        {
          type: 'category',
          label: 'How-to guides',
          description: 'Learn how to integrate our rich set of features into your own UI.',
          customProps: {
            icon: '📖',
          },
          link: { type: 'generated-index', slug: 'web/guides' },
          items: [{ type: 'autogenerated', dirName: 'external/web-ui/docs/guides' }],
        },
        {
          type: 'category',
          label: 'Examples',
          description: 'Find inspiration for your UI from our live demos!',
          customProps: {
            icon: '🛝',
          },
          link: { type: 'generated-index', slug: 'web/examples' },
          items: [{ type: 'autogenerated', dirName: 'external/web-ui/docs/examples' }],
        },
        { type: 'doc', id: 'external/web-ui/CHANGELOG' },
        {
          type: 'link',
          label: 'API reference',
          description: 'Discover all components provided by Open Video UI for Web.',
          customProps: {
            icon: '*️⃣',
          },
          href: 'https://theoplayer.github.io/web-ui/api/',
        },
      ],
    },
    {
      type: 'category',
      label: 'React',
      description: 'Build a stunning player UI with React components.',
      customProps: {
        icon: 'react',
      },
      link: {
        type: 'generated-index',
        slug: 'react',
        title: 'Open Video UI for React',
      },
      items: [
        { type: 'doc', id: 'external/web-ui/docs/react/getting-started' },
        {
          type: 'category',
          label: 'How-to guides',
          description: 'Learn how to integrate our rich set of features into your own UI.',
          customProps: {
            icon: '📖',
          },
          link: { type: 'generated-index', slug: 'react/guides' },
          items: [
            // { type: 'autogenerated', dirName: 'external/web-ui/docs/guides' }
          ],
        },
        {
          type: 'category',
          label: 'Examples',
          description: 'Find inspiration for your UI from our live demos!',
          customProps: {
            icon: '🛝',
          },
          link: { type: 'generated-index', slug: 'react/examples' },
          items: [{ type: 'autogenerated', dirName: 'external/web-ui/docs/react/examples' }],
        },
        { type: 'doc', id: 'external/web-ui/react/CHANGELOG' },
        {
          type: 'link',
          label: 'API reference',
          description: 'Discover all components and hooks provided by Open Video UI for React.',
          customProps: {
            icon: '*️⃣',
          },
          href: 'https://theoplayer.github.io/web-ui/react-api/',
        },
      ],
    },
    {
      type: 'category',
      label: 'Android',
      description: 'Build a mobile-first player UI for Android with Jetpack Compose.',
      customProps: {
        icon: 'android',
      },
      link: {
        type: 'generated-index',
        slug: 'android',
        title: 'Open Video UI for Android',
      },
      items: [
        { type: 'doc', id: 'android/getting-started' },
        {
          type: 'category',
          label: 'How-to guides',
          description: 'Learn how to integrate our rich set of features into your own UI.',
          customProps: {
            icon: '📖',
          },
          link: { type: 'generated-index', slug: 'android/guides' },
          items: [{ type: 'autogenerated', dirName: 'external/android-ui/docs/guides' }],
        },
        { type: 'doc', id: 'external/android-ui/CHANGELOG' },
        {
          type: 'link',
          label: 'API reference',
          description: 'Discover all components provided by Open Video UI for Android.',
          customProps: {
            icon: '*️⃣',
          },
          href: 'https://theoplayer.github.io/android-ui/api/',
        },
      ],
    },
  ],
};

export default sidebars;
