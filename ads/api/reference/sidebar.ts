import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: 'doc',
      id: 'api/reference/optiview-ads-api',
    },
    {
      type: 'category',
      label: 'Channels',
      items: [
        {
          type: 'doc',
          id: 'api/reference/get-channels',
          label: 'Get /channels',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/post-channels',
          label: 'Post /channels',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/reference/delete-channels-channel-id',
          label: 'Delete /channels/{channelId}',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id',
          label: 'Get /channels/{channelId}',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/patch-channels-channel-id',
          label: 'Patch /channels/{channelId}',
          className: 'api-method patch',
        },
      ],
    },
    {
      type: 'category',
      label: 'Breaks',
      items: [
        {
          type: 'doc',
          id: 'api/reference/delete-channels-channel-id-breaks',
          label: 'Delete /channels/{channelId}/breaks',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-breaks',
          label: 'Get /channels/{channelId}/breaks',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/post-channels-channel-id-breaks',
          label: 'Post /channels/{channelId}/breaks',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-breaks-active',
          label: 'Get /channels/{channelId}/breaks/active',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-breaks-current',
          label: 'Get /channels/{channelId}/breaks/current',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/delete-channels-channel-id-breaks-break-id',
          label: 'Delete /channels/{channelId}/breaks/{breakId}',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-breaks-break-id',
          label: 'Get /channels/{channelId}/breaks/{breakId}',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/post-channels-channel-id-breaks-break-id-punch',
          label: 'Post /channels/{channelId}/breaks/{breakId}/punch',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'Detection',
      items: [
        {
          type: 'doc',
          id: 'api/reference/post-channels-channel-id-detection-disable',
          label: 'Post /channels/{channelId}/detection/disable',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/reference/post-channels-channel-id-detection-enable',
          label: 'Post /channels/{channelId}/detection/enable',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-detection-history',
          label: 'Get /channels/{channelId}/detection/history',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-detection-history-marker-detection-id',
          label: 'Get /channels/{channelId}/detection/history/{markerDetectionId}',
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
          id: 'api/reference/delete-channels-channel-id-events',
          label: 'Delete /channels/{channelId}/events',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-events',
          label: 'Get /channels/{channelId}/events',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/post-channels-channel-id-events',
          label: 'Post /channels/{channelId}/events',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/reference/delete-channels-channel-id-events-event-id',
          label: 'Delete /channels/{channelId}/events/{eventId}',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-events-event-id',
          label: 'Get /channels/{channelId}/events/{eventId}',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/patch-channels-channel-id-events-event-id',
          label: 'Patch /channels/{channelId}/events/{eventId}',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-events-event-id-breaks',
          label: 'Get /channels/{channelId}/events/{eventId}/breaks',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-events-event-id-breaks-active',
          label: 'Get /channels/{channelId}/events/{eventId}/breaks/active',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-events-event-id-breaks-current',
          label: 'Get /channels/{channelId}/events/{eventId}/breaks/current',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-events-event-id-templates',
          label: 'Get /channels/{channelId}/events/{eventId}/templates',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-events-event-id-templates-template-id-breaks',
          label: 'Get /channels/{channelId}/events/{eventId}/templates/{templateId}/breaks',
          className: 'api-method get',
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-integrations',
          label: 'Get /channels/{channelId}/integrations',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/post-channels-channel-id-integrations',
          label: 'Post /channels/{channelId}/integrations',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/reference/delete-channels-channel-id-integrations-channel-integration-id',
          label: 'Delete /channels/{channelId}/integrations/{channelIntegrationId}',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-integrations-channel-integration-id',
          label: 'Get /channels/{channelId}/integrations/{channelIntegrationId}',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/patch-channels-channel-id-integrations-channel-integration-id',
          label: 'Patch /channels/{channelId}/integrations/{channelIntegrationId}',
          className: 'api-method patch',
        },
      ],
    },
    {
      type: 'category',
      label: 'Marker Rules',
      items: [
        {
          type: 'doc',
          id: 'api/reference/delete-channels-channel-id-marker-rules',
          label: 'Delete /channels/{channelId}/markerRules',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-marker-rules',
          label: 'Get /channels/{channelId}/markerRules',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/post-channels-channel-id-marker-rules',
          label: 'Post /channels/{channelId}/markerRules',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/reference/delete-channels-channel-id-marker-rules-marker-rule-id',
          label: 'Delete /channels/{channelId}/markerRules/{markerRuleId}',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-marker-rules-marker-rule-id',
          label: 'Get /channels/{channelId}/markerRules/{markerRuleId}',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/patch-channels-channel-id-marker-rules-marker-rule-id',
          label: 'Patch /channels/{channelId}/markerRules/{markerRuleId}',
          className: 'api-method patch',
        },
      ],
    },
    {
      type: 'category',
      label: 'Origins',
      items: [
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-origins',
          label: 'Get /channels/{channelId}/origins',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/post-channels-channel-id-origins',
          label: 'Post /channels/{channelId}/origins',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/reference/delete-channels-channel-id-origins-origin-id',
          label: 'Delete /channels/{channelId}/origins/{originId}',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/reference/get-channels-channel-id-origins-origin-id',
          label: 'Get /channels/{channelId}/origins/{originId}',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/patch-channels-channel-id-origins-origin-id',
          label: 'Patch /channels/{channelId}/origins/{originId}',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'api/reference/post-channels-channel-id-origins-origin-id-disable',
          label: 'Post /channels/{channelId}/origins/{originId}/disable',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/reference/post-channels-channel-id-origins-origin-id-enable',
          label: 'Post /channels/{channelId}/origins/{originId}/enable',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/reference/get-origins',
          label: 'Get /origins',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/post-origins',
          label: 'Post /origins',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/reference/delete-origins-origin-id',
          label: 'Delete /origins/{originId}',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/reference/get-origins-origin-id',
          label: 'Get /origins/{originId}',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/patch-origins-origin-id',
          label: 'Patch /origins/{originId}',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'api/reference/post-origins-origin-id-disable',
          label: 'Post /origins/{originId}/disable',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/reference/post-origins-origin-id-enable',
          label: 'Post /origins/{originId}/enable',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      items: [
        {
          type: 'doc',
          id: 'api/reference/delete-templates',
          label: 'Delete /templates',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/reference/get-templates',
          label: 'Get /templates',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/post-templates',
          label: 'Post /templates',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'api/reference/delete-templates-template-id',
          label: 'Delete /templates/{templateId}',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'api/reference/get-templates-template-id',
          label: 'Get /templates/{templateId}',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'api/reference/patch-templates-template-id',
          label: 'Patch /templates/{templateId}',
          className: 'api-method patch',
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
