import { Fragment, useMemo, useState } from 'react';
import DocCardList, { type Props as DocCardListProps } from '@theme/DocCardList';
import { useCurrentSidebarCategory, useDocsVersion } from '@docusaurus/plugin-content-docs/client';
import { PropSidebarItem, PropSidebarItemCategory } from '@docusaurus/plugin-content-docs';
import Heading, { type HeadingType } from '@theme/Heading';
import styles from './styles.module.css';

export interface Props extends Omit<DocCardListProps, 'items'> {
  headingLevel?: HeadingType;
  searchable?: boolean;
}

function isCategory(item: PropSidebarItem): item is PropSidebarItemCategory {
  return item.type === 'category';
}

function itemText(item: PropSidebarItem, subcategoryLabel: string, description?: string): string {
  const label = item.type === 'link' || item.type === 'category' ? item.label : '';
  return `${label} ${description ?? ''} ${subcategoryLabel}`.toLowerCase();
}

export default function SubcategoryDocCardList({ headingLevel, searchable = false, ...props }: Props) {
  const category = useCurrentSidebarCategory();
  const { docs } = useDocsVersion();
  const [query, setQuery] = useState('');
  const subcategories = category.items.filter(isCategory);

  const filtered = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (terms.length === 0) return subcategories.map((subcategory) => ({ subcategory, items: subcategory.items }));
    return subcategories
      .map((subcategory) => ({
        subcategory,
        items: subcategory.items.filter((item) => {
          const haystack =
            item.type === 'link'
              ? itemText(item, subcategory.label, item.docId ? docs[item.docId]?.description : undefined)
              : item.type === 'category'
                ? `${item.label}`.toLowerCase()
                : '';
          return terms.every((term) => haystack.includes(term));
        }),
      }))
      .filter(({ items }) => items.length > 0);
  }, [query, subcategories, docs]);

  const noMatches = searchable && query.trim() !== '' && filtered.length === 0;

  return (
    <>
      {searchable && (
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search examples…"
          aria-label="Search examples"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setQuery('');
          }}
        />
      )}
      {noMatches && <p>No examples match “{query.trim()}”.</p>}
      {filtered.map(({ subcategory, items }) => (
        <Fragment key={subcategory.label}>
          <Heading as={headingLevel ?? 'h2'}>{subcategory.label}</Heading>
          <DocCardList items={items} {...props} />
        </Fragment>
      ))}
    </>
  );
}
