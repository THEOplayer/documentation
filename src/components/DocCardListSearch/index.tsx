import { Fragment, useMemo, useState, type JSX } from 'react';
import DocCardList, { type Props as DocCardListProps } from '@theme/DocCardList';
import { useDocsVersion } from '@docusaurus/plugin-content-docs/client';
import { PropSidebarItem, PropSidebarItemCategory } from '@docusaurus/plugin-content-docs';
import Heading, { type HeadingType } from '@theme/Heading';
import styles from './styles.module.css';

export interface DocCardGroup {
  label?: string;
  items: PropSidebarItem[];
}

export function isCategory(item: PropSidebarItem): item is PropSidebarItemCategory {
  return item.type === 'category';
}

function itemText(item: PropSidebarItem, groupLabel: string, description?: string): string {
  const label = item.type === 'link' || item.type === 'category' ? item.label : '';
  return `${label} ${description ?? ''} ${groupLabel}`.toLowerCase();
}

// Filters groups by whitespace-separated terms (all must match) against
// item label + doc description + group label.
// Category items match on their label + group label. Empty groups are dropped.
// With an empty query, returns groups unchanged.
export function useDocCardListSearch(groups: DocCardGroup[]): {
  query: string;
  setQuery: (q: string) => void;
  filteredGroups: DocCardGroup[];
  noMatches: boolean;
} {
  const { docs } = useDocsVersion();
  const [query, setQuery] = useState('');

  const filteredGroups = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (terms.length === 0) return groups;
    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => {
          const haystack =
            item.type === 'link'
              ? itemText(item, group.label ?? '', item.docId ? docs[item.docId]?.description : undefined)
              : item.type === 'category'
                ? itemText(item, group.label ?? '')
                : '';
          return terms.every((term) => haystack.includes(term));
        }),
      }))
      .filter((group) => group.items.length > 0);
  }, [query, groups, docs]);

  return { query, setQuery, filteredGroups, noMatches: query.trim() !== '' && filteredGroups.length === 0 };
}

export function DocCardListSearchInput({
  query,
  onQueryChange,
  placeholder = 'Search…',
}: {
  query: string;
  onQueryChange: (q: string) => void;
  placeholder?: string;
}): JSX.Element {
  return (
    <input
      type="search"
      className={styles.searchInput}
      placeholder={placeholder}
      aria-label={placeholder}
      value={query}
      onChange={(event) => onQueryChange(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === 'Escape') onQueryChange('');
      }}
    />
  );
}

export interface SearchableDocCardGroupsProps extends Omit<DocCardListProps, 'items'> {
  groups: DocCardGroup[];
  headingLevel?: HeadingType;
  searchable?: boolean;
  searchPlaceholder?: string;
}

export default function SearchableDocCardGroups({
  groups,
  headingLevel,
  searchable = false,
  searchPlaceholder = 'Search…',
  ...props
}: SearchableDocCardGroupsProps): JSX.Element {
  const { query, setQuery, filteredGroups, noMatches } = useDocCardListSearch(groups);

  return (
    <>
      {searchable && <DocCardListSearchInput query={query} onQueryChange={setQuery} placeholder={searchPlaceholder} />}
      {noMatches && <p>No results match “{query.trim()}”.</p>}
      {filteredGroups.map((group, index) => (
        <Fragment key={group.label ?? index}>
          {group.label && headingLevel && <Heading as={headingLevel}>{group.label}</Heading>}
          <DocCardList items={group.items} {...props} />
        </Fragment>
      ))}
    </>
  );
}
