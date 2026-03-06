import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: 'doc',
      id: 'api/schedulers/schedulers',
    },
    {
      type: 'category',
      label: 'Schedulers',
      items: [
        {
          type: 'doc',
          id: 'api/schedulers/create-scheduler',
          label: 'Create scheduler',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/schedulers/get-schedulers',
          label: 'Get schedulers',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/schedulers/get-scheduler',
          label: 'Get scheduler',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/schedulers/delete-scheduler',
          label: 'Delete scheduler',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/schedulers/update-scheduler',
          label: 'Update scheduler',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'api/schedulers/get-scheduler-report',
          label: 'Get scheduler report',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/schedulers/terminate-scheduler',
          label: 'Terminate scheduler',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/schedulers/terminate-scheduler-copy',
          label: 'Start scheduler now',
          className: 'api-method post',
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
