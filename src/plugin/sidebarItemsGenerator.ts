import type {
  NormalizedSidebar,
  NormalizedSidebarItem,
  SidebarItemConfig,
  SidebarItemsGenerator,
  SidebarItemsGeneratorArgs,
} from '@docusaurus/plugin-content-docs/lib/sidebars/types';

interface PostProcessArgs extends Omit<SidebarItemsGeneratorArgs, 'item'> {
  item: NormalizedSidebarItem & {
    customProps?: {
      additionalItems?: Array<
        SidebarItemConfig & {
          position?: number;
        }
      >;
    };
  };
}

function postProcess({ item, ...args }: PostProcessArgs) {
  if (item.type === 'category') {
    // Recurse through children
    for (const childItem of item.items) {
      postProcess({ item: childItem, ...args });
    }
    // Add additional items
    if (item.customProps?.additionalItems) {
      for (const { position, ...additionalItem } of item.customProps.additionalItems) {
        if (position !== undefined) {
          item.items.splice(position - 1, 0, additionalItem);
        } else {
          item.items.push(additionalItem);
        }
      }
    }
  }
}

export default async function sidebarItemsGenerator({
  defaultSidebarItemsGenerator,
  item,
  ...args
}: { defaultSidebarItemsGenerator: SidebarItemsGenerator } & SidebarItemsGeneratorArgs) {
  const sidebarItems: NormalizedSidebar = await defaultSidebarItemsGenerator({ item, ...args });
  for (const item of sidebarItems) {
    postProcess({ item, defaultSidebarItemsGenerator, ...args });
  }
  return sidebarItems;
}
