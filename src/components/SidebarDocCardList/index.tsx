import { useDoc, useDocsSidebar } from '@docusaurus/theme-common/internal';
import DocCardList, { type Props as DocCardListProps } from '@theme/DocCardList';

export interface Props extends Omit<DocCardListProps, 'items'> {}

export default function SidebarDocCardList(props: Props) {
  const doc = useDoc();
  const sidebar = useDocsSidebar();
  const items = sidebar.items
    // Hide the current doc page from list
    .filter((item) => !(item.type === 'link' && item.docId === doc.metadata.id));
  return <DocCardList items={items} {...props} />;
}
