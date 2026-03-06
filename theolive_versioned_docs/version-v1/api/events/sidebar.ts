import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: 'doc',
      id: 'api/events/events',
    },
    {
      type: 'category',
      label: 'Events',
      items: [
        {
          type: 'doc',
          id: 'api/events/get-event',
          label: 'Get event',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/events/get-events',
          label: 'Get events',
          className: 'api-method get',
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
