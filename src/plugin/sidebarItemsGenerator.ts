import type {
  NormalizedSidebar,
  NormalizedSidebarItem,
  SidebarItemConfig,
  SidebarItemsGenerator,
  SidebarItemsGeneratorArgs,
} from '@docusaurus/plugin-content-docs/lib/sidebars/types';

type SidebarItemWithCustomProps = NormalizedSidebarItem & {
  customProps?: {
    additionalItems?: AdditionalItem[];
  };
};

interface AdditionalItem extends SidebarItemConfig {
  position?: number;
}

interface PostProcessArgs extends Omit<SidebarItemsGeneratorArgs, 'item'> {
  item: SidebarItemWithCustomProps;
}

function postProcess({ item, ...args }: PostProcessArgs) {
  if (item.type === 'category') {
    // Recurse through children
    for (const childItem of item.items) {
      postProcess({ item: childItem, ...args });
    }
    postProcessChildren(item, item.items);
  }
}

function postProcessChildren(parent: SidebarItemWithCustomProps, children: NormalizedSidebarItem[]) {
  // Add additional items
  if (parent.customProps?.additionalItems) {
    for (const { position, ...additionalItem } of parent.customProps.additionalItems) {
      if (position !== undefined) {
        children.splice(position - 1, 0, additionalItem);
      } else {
        children.push(additionalItem);
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
  postProcessChildren(item, sidebarItems);
  return sidebarItems;
}
