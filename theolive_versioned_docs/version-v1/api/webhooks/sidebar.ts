import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: 'doc',
      id: 'api/webhooks/webhooks',
    },
    {
      type: 'category',
      label: 'Webhooks',
      items: [
        {
          type: 'doc',
          id: 'api/webhooks/enable-webhook',
          label: 'Enable webhook',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/webhooks/disable-webhook',
          label: 'Disable webhook',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/webhooks/update-webhook',
          label: 'Update webhook',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'api/webhooks/get-webhook',
          label: 'Get webhook',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/webhooks/delete-webhook',
          label: 'Delete webhook',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/webhooks/create-webhook',
          label: 'Create webhook',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/webhooks/get-webhooks',
          label: 'Get webhooks',
          className: 'api-method get',
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
