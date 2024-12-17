declare module '*.svg' {
  import type { ReactSVG } from 'react';

  const svg: ReactSVG['svg'];
  export default svg;
}

declare module '*.png' {
  const url: string;
  export default url;
}
