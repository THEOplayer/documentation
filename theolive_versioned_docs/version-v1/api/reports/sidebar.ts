import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: 'doc',
      id: 'api/reports/reports',
    },
    {
      type: 'category',
      label: 'Reports',
      items: [
        {
          type: 'doc',
          id: 'api/reports/create-report',
          label: 'Create report',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/reports/get-reports',
          label: 'Get reports',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reports/update-report',
          label: 'Update report',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'api/reports/delete-report',
          label: 'Delete report',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/reports/get-report',
          label: 'Get report',
          className: 'api-method get',
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
