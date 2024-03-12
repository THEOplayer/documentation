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
  theoplayer: [
    'index',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      description: 'Set up your first THEOplayer in just a few minutes!',
      customProps: {
        icon: '🚀',
      },
      link: { type: 'doc', id: 'getting-started/index' },
      items: [{ type: 'autogenerated', dirName: 'getting-started' }],
    },
    {
      type: 'category',
      label: 'How-to guides',
      description: 'Learn how to implement our rich set of features and integrations.',
      customProps: {
        icon: '📖',
      },
      link: { type: 'doc', id: 'how-to-guides/index' },
      items: [{ type: 'autogenerated', dirName: 'how-to-guides' }],
    },
    {
      type: 'category',
      label: 'Knowledge base',
      description: 'Learn about topics in the video industry from our experts.',
      customProps: {
        icon: '🧠',
      },
      link: { type: 'doc', id: 'knowledge-base/index' },
      items: [{ type: 'autogenerated', dirName: 'knowledge-base' }],
    },
    {
      type: 'link',
      label: 'FAQ',
      description: `Answers to common questions we've received from our customers over the years.`,
      customProps: {
        icon: '❔',
      },
      href: '/theoplayer/faq/',
    },
    {
      type: 'category',
      label: 'Examples',
      description: 'See the player in action!',
      customProps: {
        icon: '🛝',
      },
      link: { type: 'doc', id: 'examples/index' },
      items: [{ type: 'autogenerated', dirName: 'examples' }],
    },
    'changelog',
    {
      type: 'category',
      label: 'API references',
      description: 'Discover all properties and functions of THEOplayer.',
      customProps: {
        icon: '*️⃣',
      },
      link: { type: 'generated-index', slug: 'api-reference' },
      items: [
        {
          type: 'link',
          label: 'Web',
          description: 'API references for the THEOplayer Web SDK',
          customProps: {
            icon: '🌐',
          },
          href: 'pathname:///theoplayer/v6/api-reference/web/',
        },
        {
          type: 'link',
          label: 'Android',
          description: 'API references for the THEOplayer Android SDK',
          customProps: {
            icon: 'android',
          },
          href: 'pathname:///theoplayer/v6/api-reference/android/',
        },
        {
          type: 'link',
          label: 'iOS',
          description: 'API references for the THEOplayer iOS/tvOS SDK',
          customProps: {
            icon: '🍎',
          },
          href: 'pathname:///theoplayer/v6/api-reference/ios/',
        },
        'api-reference/roku',
      ],
    },
  ],
  faq: [
    {
      type: 'link',
      label: '« Back',
      href: '/theoplayer/',
    },
    {
      type: 'category',
      label: 'FAQ',
      collapsible: false,
      link: { type: 'doc', id: 'faq/index' },
      items: [{ type: 'autogenerated', dirName: 'faq' }],
    },
  ],
};

export default sidebars;
