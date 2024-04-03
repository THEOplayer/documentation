import MDXComponentsOriginal from '@theme-original/MDXComponents';
import { type MDXComponentsObject } from '@theme/MDXComponents';
import MDXTh from './Th';
import MDXTd from './Td';

const MDXComponents: MDXComponentsObject = {
  ...MDXComponentsOriginal,
  th: MDXTh,
  td: MDXTd,
};
export default MDXComponents;
