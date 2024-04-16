import MDXComponentsOriginal from '@theme-original/MDXComponents';
import { type MDXComponentsObject } from '@theme/MDXComponents';
import MDXA from './A';
import MDXTh from './Th';
import MDXTd from './Td';

const MDXComponents: MDXComponentsObject = {
  ...MDXComponentsOriginal,
  a: MDXA,
  th: MDXTh,
  td: MDXTd,
};
export default MDXComponents;
