import type { NormalizedSidebarItem, SidebarItemConfig, SidebarItemsGeneratorArgs } from '@docusaurus/plugin-content-docs/lib/sidebars/types';

interface PostProcessArgs extends Omit<SidebarItemsGeneratorArgs, 'item'> {
  item: NormalizedSidebarItem & {
    customProps?: {
      additionalItems?: SidebarItemConfig[];
    };
  };
}

async function postProcess({ item, ...args }: PostProcessArgs) {
  if (item.type === 'category') {
    // Recurse through children
    for (const childItem of item.items) {
      await postProcess({ item: childItem, ...args });
    }
    // Add additional items
    if (item.customProps?.additionalItems) {
      item.items.push(...item.customProps.additionalItems);
    }
  }
}

export default async function sidebarItemsGenerator({ defaultSidebarItemsGenerator, item, ...args }: SidebarItemsGeneratorArgs) {
  const sidebarItems = await defaultSidebarItemsGenerator({ item, ...args });
  for (const item of sidebarItems) {
    await postProcess({ item, defaultSidebarItemsGenerator, ...args });
  }
  return sidebarItems;
}
