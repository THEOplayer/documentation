import { useEffect, useRef, useState } from 'react';
import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface CopyPageDropdownProps {
  markdownUrl: string;
  className?: string;
}

function DocumentIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <path d="M4 1.75h5l3 3v9.5H4z" />
      <path d="M9 1.75v3h3M6 8h4M6 10.5h4" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <rect x="5.25" y="5.25" width="7" height="8" rx="1" />
      <path d="M10.75 5.25V3.5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h.5" />
    </svg>
  );
}

export default function CopyPageDropdown({ markdownUrl, className }: CopyPageDropdownProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== undefined) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyMarkdown = async () => {
    try {
      const response = await fetch(markdownUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch Markdown: ${response.status}`);
      }
      await navigator.clipboard.writeText(await response.text());
      setCopied(true);
      if (timeoutRef.current !== undefined) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MenuTrigger>
      <Button className={clsx(styles.button, className)}>{copied ? 'Copied' : 'Copy page'}</Button>
      <Popover className={styles.popover} placement="bottom end" offset={4}>
        <Menu className={styles.menu}>
          <MenuItem
            href={markdownUrl}
            target="_blank"
            rel="noopener"
            className={({ isFocused }) => clsx('dropdown__link', { focused: isFocused }, styles.item)}
          >
            <span className={styles.itemContent} title="Open this page as plain text">
              <DocumentIcon />
              View as Markdown
            </span>
          </MenuItem>
          <MenuItem onAction={copyMarkdown} className={({ isFocused }) => clsx('dropdown__link', { focused: isFocused }, styles.item)}>
            <span className={styles.itemContent} title="Copy this page as Markdown for LLMs">
              <CopyIcon />
              Copy as Markdown
            </span>
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
