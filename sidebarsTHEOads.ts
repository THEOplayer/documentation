import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  theoads: [
    'index',
    {
      type: 'category',
      label: 'Getting started',
      description: 'Set up your first stream with THEOads!',
      customProps: {
        icon: '🚀',
      },
      link: { type: 'doc', id: 'getting-started/index' },
      items: [{ type: 'autogenerated', dirName: 'getting-started' }],
    },
    {
      type: 'category',
      label: 'How-to guides',
      description: 'Learn how to integrate THEOads with your setup',
      customProps: {
        icon: '📖',
      },
      link: { type: 'doc', id: 'how-to-guides/index' },
      items: [{ type: 'autogenerated', dirName: 'how-to-guides' }],
    },
    {
      type: 'category',
      label: 'API references',
      description: 'Discover all functions of THEOads.',
      customProps: {
        icon: '*️⃣',
      },
      link: { type: 'generated-index', slug: 'api' },
      items: [
        {
          type: 'link',
          label: 'Signalling Service',
          customProps: { icon: '🛜' },
          href: '/theoads/api/signalling/',
        },
        {
          type: 'link',
          label: 'Web',
          customProps: { icon: 'web' },
          href: 'pathname:///theoplayer/v8/api-reference/web/interfaces/TheoAdDescription.html',
        },
        {
          type: 'link',
          label: 'Android',
          customProps: { icon: 'android' },
          href: 'pathname:///theoplayer/v8/api-reference/android/com/theoplayer/android/api/ads/theoads/package-summary.html',
        },
      ],
    },
  ],
};

export default sidebars;
