import type {
  NormalizedSidebar,
  NormalizedSidebarItem,
  SidebarItemsGenerator,
  SidebarItemsGeneratorArgs,
} from '@docusaurus/plugin-content-docs/lib/sidebars/types.d.ts';

type SidebarItemWithCustomProps = NormalizedSidebarItem & {
  customProps?: {
    exclude?: string[];
  };
};

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
  // Remove excluded items
  if (parent.customProps?.exclude) {
    const exclude = new Set(parent.customProps.exclude);
    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i];
      if (child.type === 'category' && exclude.has(child.label)) {
        children.splice(i, 1);
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
    postProcess({ item, ...args });
  }
  postProcessChildren(item, sidebarItems);
  return sidebarItems;
}
