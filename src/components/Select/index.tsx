import { ReactNode } from 'react';
import {
  Button,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  Popover,
  Select as ReactAriaSelect,
  type SelectProps as ReactAriaSelectProps,
  SelectValue,
  Text,
  type ValidationResult,
} from 'react-aria-components';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface SelectProps<T extends object> extends Omit<ReactAriaSelectProps<T>, 'children'> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: readonly T[];
  children: ReactNode | ((item: T) => ReactNode);
  dependencies?: any[];
}

// https://react-spectrum.adobe.com/react-aria/Select.html#reusable-wrappers
export default function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  dependencies,
  className,
  ...props
}: SelectProps<T>) {
  return (
    <ReactAriaSelect {...props} className={clsx(styles.select, className)}>
      <Label>{label}</Label>
      <Button className={styles.button}>
        <SelectValue className={styles.selectValue} />
      </Button>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className={styles.popover}>
        <ListBox items={items} children={children} dependencies={dependencies} />
      </Popover>
    </ReactAriaSelect>
  );
}

export function Item({ className, ...props }: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isSelected }) => clsx('dropdown__link', { focused: isFocused, 'dropdown__link--active': isSelected }, className)}
    />
  );
}
