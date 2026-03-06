import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: 'doc',
      id: 'api/channels/channels',
    },
    {
      type: 'category',
      label: 'Channels',
      items: [
        {
          type: 'doc',
          id: 'api/channels/create-channel',
          label: 'Create channel',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/channels/start-channel',
          label: 'Start channel',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/channels/stop-channel',
          label: 'Stop channel',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/channels/delete-channel',
          label: 'Delete channel',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/channels/update-channel',
          label: 'Update channel',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'api/channels/get-channel',
          label: 'Get channel',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/channels/get-channels',
          label: 'Get channels',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Channel Status',
      items: [
        {
          type: 'doc',
          id: 'api/channels/get-channel-status',
          label: 'Get channel status',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Channel Aliases',
      items: [
        {
          type: 'doc',
          id: 'api/channels/create-channel-alias',
          label: 'Create channel alias',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/channels/get-all-channel-aliases',
          label: 'Get channel aliases',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/channels/enable-channel-alias',
          label: 'Enable channel alias',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/channels/disable-channel-alias',
          label: 'Disable channel alias',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/channels/update-channel-alias',
          label: 'Update channel alias',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'api/channels/get-channel-alias',
          label: 'Get channel alias',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/channels/delete-channel-alias',
          label: 'Delete channel alias',
          className: 'api-method delete',
        },
      ],
    },
    {
      type: 'category',
      label: 'Analytics',
      items: [
        {
          type: 'doc',
          id: 'api/channels/get-channel-alias-analytics',
          label: 'Get channel alias analytics',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Events',
      items: [
        {
          type: 'doc',
          id: 'api/channels/get-channel-events',
          label: 'Get channel events',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/channels/get-channel-alias-events',
          label: 'Get channel alias events',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        {
          type: 'doc',
          id: 'api/channels/enable-token-security-for-alias',
          label: 'Enable token security for alias',
          className: 'menu__list-item--deprecated api-method post',
        },
        {
          type: 'doc',
          id: 'api/channels/disable-token-security-for-alias',
          label: 'Disable token security for alias',
          className: 'menu__list-item--deprecated api-method post',
        },
        {
          type: 'doc',
          id: 'api/channels/get-token-security-for-alias',
          label: 'Get token security of alias',
          className: 'menu__list-item--deprecated api-method get',
        },
        {
          type: 'doc',
          id: 'api/channels/enable-token-security-for-channel',
          label: 'Enable token security for channel',
          className: 'menu__list-item--deprecated api-method post',
        },
        {
          type: 'doc',
          id: 'api/channels/disable-token-security-for-channel',
          label: 'Disable token security for channel',
          className: 'menu__list-item--deprecated api-method post',
        },
        {
          type: 'doc',
          id: 'api/channels/get-cdn-security-keys',
          label: 'Get channel CDN security keys',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/channels/add-channel-cdn-security-key',
          label: 'Add channel CDN security keys',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/channels/delete-channel-cdn-security',
          label: 'Disable CDN security (deleting all keys)',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/channels/get-channel-alias-cdn-security-keys',
          label: 'Get channel alias CDN security keys',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/channels/add-channel-alias-cdn-security-keys',
          label: 'Add channel alias CDN security key',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/channels/delete-channel-alias-cdn-security',
          label: 'Disable CDN security for alias (deleting all keys)',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/channels/delete-channel-alias-cdn-security-key',
          label: 'Delete channel alias CDN security key',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/channels/delete-channel-cdn-security-key-copy',
          label: 'Delete channel CDN security key (COPY)',
          className: 'api-method delete',
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
