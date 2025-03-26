import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import millicastApiSidebar from './millicast/api/sidebar';

const sidebars: SidebarsConfig = {
  millicast: [
    'index',
    'introduction-to-streaming-apis',
    {
      type: 'category',
      label: 'Getting started',
      customProps: {
        icon: '🚀',
      },
      description: 'Getting started with Millicast',
      link: { type: 'doc', id: 'getting-started' },
      items: [{ type: 'autogenerated', dirName: 'getting-started' }],
    },
    {
      type: 'category',
      label: 'Streaming guides',
      customProps: {
        icon: '📖',
      },
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Capture',
          customProps: {
            icon: '🎥',
          },
          link: { type: 'doc', id: 'capture/index' },
          items: [{ type: 'autogenerated', dirName: 'capture' }],
        },
        {
          type: 'category',
          label: 'Broadcast',
          customProps: {
            icon: '📡',
          },
          link: { type: 'doc', id: 'broadcast/index' },
          items: [{ type: 'autogenerated', dirName: 'broadcast' }],
        },
        {
          type: 'category',
          label: 'Distribution',
          customProps: {
            icon: '🚚',
          },
          link: { type: 'doc', id: 'distribution/index' },
          items: [{ type: 'autogenerated', dirName: 'distribution' }],
        },
        {
          type: 'category',
          label: 'Playback',
          customProps: {
            icon: '▶️',
          },
          link: { type: 'doc', id: 'playback/index' },
          items: [{ type: 'autogenerated', dirName: 'playback' }],
        },
      ],
    },
    {
      type: 'category',
      label: 'Platform guides',
      customProps: {
        icon: '📖',
      },
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Platform Requirements',
          customProps: {
            icon: '✅',
          },
          link: { type: 'doc', id: 'platform-requirements/index' },
          items: [{ type: 'autogenerated', dirName: 'platform-requirements' }],
        },
        {
          type: 'category',
          label: 'Streaming Dashboard',
          customProps: {
            icon: '📡',
          },
          link: { type: 'doc', id: 'streaming-dashboard/index' },
          items: [{ type: 'autogenerated', dirName: 'streaming-dashboard' }],
        },
        {
          type: 'category',
          label: 'Analytics',
          customProps: {
            icon: '📊',
          },
          link: { type: 'doc', id: 'analytics/index' },
          items: [{ type: 'autogenerated', dirName: 'analytics' }],
        },
        {
          type: 'category',
          label: 'Webhooks',
          customProps: {
            icon: '🪝',
          },
          link: { type: 'doc', id: 'webhooks/index' },
          items: [{ type: 'autogenerated', dirName: 'webhooks' }],
        },
      ],
    },
    {
      type: 'category',
      label: 'SDKs and tools',
      customProps: {
        icon: '🔧',
      },
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Client SDKs',
          customProps: {
            icon: '▶️',
          },
          link: { type: 'doc', id: 'client-sdks/index' },
          items: [
            'client-sdks/web',
            {
              type: 'category',
              label: 'Android',
              customProps: {
                icon: 'android',
              },
              link: { type: 'doc', id: 'client-sdks/android/index' },
              items: [{ type: 'autogenerated', dirName: 'client-sdks/android' }],
            },
            {
              type: 'category',
              label: 'iOS',
              customProps: {
                icon: 'apple',
              },
              link: { type: 'doc', id: 'client-sdks/ios/index' },
              items: [{ type: 'autogenerated', dirName: 'client-sdks/ios' }],
            },
            'client-sdks/rn',
            'client-sdks/flutter',
            {
              type: 'category',
              label: 'Desktop',
              customProps: {
                icon: '🖥️',
              },
              link: { type: 'doc', id: 'client-sdks/desktop/index' },
              items: [{ type: 'autogenerated', dirName: 'client-sdks/desktop' }],
            },
          ],
        },
        {
          type: 'category',
          label: 'Sample Apps',
          customProps: {
            icon: '🛝',
          },
          link: { type: 'doc', id: 'sample-apps/index' },
          items: [{ type: 'autogenerated', dirName: 'sample-apps' }],
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      customProps: {
        icon: '🔌',
      },
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Client Analytics',
          customProps: {
            icon: '📊',
          },
          link: { type: 'doc', id: 'client-analytics/index' },
          items: [{ type: 'autogenerated', dirName: 'client-analytics' }],
        },
        {
          type: 'category',
          label: 'Hardware Encoders',
          customProps: {
            icon: '🖥️',
          },
          items: [{ type: 'autogenerated', dirName: 'hardware-encoders' }],
        },
        {
          type: 'category',
          label: 'Software Encoders',
          customProps: {
            icon: '💿',
          },
          items: [{ type: 'autogenerated', dirName: 'software-encoders' }],
        },
        // TODO Port https://docs.dolby.io/streaming-apis/docs/amino
        // {
        //   type: 'category',
        //   label: 'Playback Devices',
        //   customProps: {
        //     icon: '📺',
        //   },
        //   items: ['amino'],
        // },
      ],
    },
    {
      type: 'link',
      label: 'Millicast REST API',
      customProps: {
        icon: '🛜',
      },
      href: '/millicast/api/millicast-api',
    },
  ],
  millicastApi: [
    {
      type: 'link',
      label: '« Back',
      href: '/millicast/',
    },
    ...millicastApiSidebar,
  ],
};

export default sidebars;
