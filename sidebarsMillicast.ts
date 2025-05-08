import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import type { SidebarItem, SidebarItemCategory, SidebarItemConfig, SidebarItemDoc } from '@docusaurus/plugin-content-docs/lib/sidebars/types.d.ts';
import rawMillicastApiSidebar from './millicast/api/sidebar';
import rawMillicastAdvancedReportingApiSidebar from './millicast/api/reporting/sidebar';
import rawMillicastDirectorApiSidebar from './millicast/api/director/sidebar';

function isCategory(item: SidebarItemConfig): item is SidebarItemCategory {
  return (item as SidebarItem).type === 'category';
}

function isDoc(item: SidebarItemConfig): item is SidebarItemDoc {
  return (item as SidebarItem).type === 'doc';
}

function removeHiddenItems(data: SidebarItemConfig[], hiddenIds: string[]): SidebarItemConfig[] {
  const hiddenIdsSet = new Set(hiddenIds);
  return data
    .map((category) => {
      // filter out items from other categories that match the hidden IDs
      if (isCategory(category)) {
        // filter out the items that match any of the hidden IDs
        const filteredItems = category.items.filter((item) => !(isDoc(item) && hiddenIdsSet.has(item.id)));

        // if all items are removed, omit the category entirely
        if (filteredItems.length === 0) {
          // remove the category
          return null;
        }

        // return the category with filtered items
        return { ...category, items: filteredItems };
      }
      return category;
    })
    .filter((category) => {
      // Remove null categories
      return category !== null;
    });
}

function fixLabels(items: SidebarItemConfig[], replacements: Record<string, string> = {}): SidebarItemConfig[] {
  return items.map((item) => {
    if (!(isCategory(item) || isDoc(item))) {
      return item;
    }
    let label = item.label;
    if (label) {
      if (replacements[label]) {
        // Replace label
        label = replacements[label];
      } else if (isCategory(item)) {
        // Add spaces between capitalized words
        label = item.label.replace(/([a-z])([A-Z])/g, '$1 $2');
      }
    }
    if (isCategory(item)) {
      return { ...item, label, items: fixLabels(item.items, replacements) };
    } else {
      return { ...item, label };
    }
  });
}

function mergeCategories(items: SidebarItemConfig[]): SidebarItemConfig[] {
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    if (isCategory(item)) {
      // Merge categories with same label
      const otherIndex = items.findIndex((other, otherIndex) => {
        return otherIndex > index && isCategory(other) && other.label === item.label;
      });
      if (otherIndex > 0) {
        const otherItem = items[otherIndex] as SidebarItemCategory;
        const mergedItems = [...otherItem.items];
        for (const otherChild of item.items) {
          // Insert before existing child with same label (if any).
          // Otherwise, insert at the end.
          const existingChildIndex = mergedItems.findIndex((existingChild) => {
            return isDoc(otherChild) && isDoc(existingChild) && existingChild.label === otherChild.label;
          });
          if (existingChildIndex >= 0) {
            mergedItems.splice(existingChildIndex, 0, otherChild);
          } else {
            mergedItems.push(otherChild);
          }
        }
        items[index] = { ...item, items: mergedItems };
        items.splice(otherIndex, 1);
        index--;
      }
    }
  }
  return items;
}

let millicastApiSidebar: SidebarItemConfig[] = removeHiddenItems(rawMillicastApiSidebar, [
  'api/record-files-v-2-list-media-assets',
  'api/record-files-v-2-read-media-asset',
  'api/record-files-v-2-delete-media-assets',
  'api/record-files-create-record-clip',
  'api/record-files-get-clip-request',
  'api/record-files-delete-clip-request-live',
  'api/record-files-list-clip-requests',
  'api/record-files-list-available-clip-sources',
  'api/record-files-validate-storage-profile',
  'api/record-files-update-expiry-rule',
  'api/record-files-get-expiry-rule',
  'api/record-files-delete-expiry-rule',
  'api/record-files-delete-clip-sources',
]);
millicastApiSidebar = fixLabels(millicastApiSidebar, {
  PublishTokenV1: 'Publish Token',
  PublishTokenV2: 'Publish Token',
  SubscribeTokenV1: 'Subscribe Token',
  SubscribeTokenV2: 'Subscribe Token',
});
millicastApiSidebar = mergeCategories(millicastApiSidebar);
const millicastAdvancedReportingApiSidebar: SidebarItemConfig[] = rawMillicastAdvancedReportingApiSidebar;
const millicastDirectorApiSidebar: SidebarItemConfig[] = fixLabels(rawMillicastDirectorApiSidebar, {
  DrmLicence: 'DRM Licence',
  DrmLicence_GetDrmLicence: 'Get DRM Licence',
  DrmLicence_GetFairplayCertificate: 'Get Fairplay Certificate',
  Whep: 'WHEP',
  Whip: 'WHIP',
});

const sidebars: SidebarsConfig = {
  millicast: [
    'introduction-to-streaming-apis',
    {
      type: 'category',
      label: 'Getting started',
      customProps: {
        icon: '🚀',
      },
      description: 'Getting started with Millicast',
      link: { type: 'doc', id: 'getting-started/index' },
      items: [{ type: 'autogenerated', dirName: 'getting-started' }],
    },
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
    {
      type: 'category',
      label: 'Platform guides',
      customProps: {
        icon: '📖',
      },
      collapsible: true,
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
      type: 'html',
      value: '<hr />',
      defaultStyle: true,
    },
    {
      type: 'doc',
      id: 'broadcast/hardware-encoders/index'
    },
    {
      type: 'doc',
      id: 'broadcast/software-encoders/index'
    },
    {
      type: 'doc',
      id: 'playback/players-sdks/index'
    },
    {
      type: 'link',
      label: 'Millicast REST API',
      customProps: {
        icon: '🛜',
      },
      href: '/millicast/api/millicast-api',
    },
    {
      type: 'link',
      label: 'Release Notes',
      customProps: {
        icon: '📝',
      },
      href: '/millicast/changelog/',
    },
  ],
  millicastReleaseNotes: [
    {
      type: 'link',
      label: '« Back',
      href: '/millicast/',
    },
    {
      type: 'category',
      label: 'Release Notes',
      customProps: {
        icon: '📝',
      },
      link: { type: 'doc', id: 'changelog' },
      items: [
        {
          type: 'doc',
          label: 'Platform and Media Server',
          id: 'changelog/changelog-dolbyio-platform-media-server',
        },
        {
          type: 'doc',
          label: 'REST APIs Changes',
          id: 'changelog/changelog-rest-apis',
        },
        {
          type: 'doc',
          label: 'Dashboard Changes',
          id: 'changelog/changelog-dolbyio-dashboard',
        },
        {
          type: 'doc',
          label: 'Native SDK',
          id: 'changelog/changelog-native-sdk',
        },
        {
          type: 'doc',
          label: 'Web SDK',
          id: 'changelog/changelog-web-platform',
        },
        {
          type: 'doc',
          label: 'OBS WebRTC',
          id: 'changelog/changelog-obs-webrtc',
        },
      ],
    },
  ],
  millicastApi: [
    {
      type: 'link',
      label: '« Back',
      href: '/millicast/',
    },
    {
      type: 'category',
      label: 'Millicast API',
      collapsible: true,
      collapsed: false,
      items: millicastApiSidebar,
    },
    {
      type: 'category',
      label: 'Millicast Advanced Reporting API',
      collapsible: true,
      collapsed: true,
      items: millicastAdvancedReportingApiSidebar,
    },
    {
      type: 'category',
      label: 'Millicast Director API',
      collapsible: true,
      collapsed: true,
      items: millicastDirectorApiSidebar,
    },
  ],
};

export default sidebars;
