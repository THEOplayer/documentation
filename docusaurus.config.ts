import 'dotenv/config';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as DocsPlugin from '@docusaurus/plugin-content-docs';
import { version as webUiVersion } from './open-video-ui/external/web-ui/package.json';
import path from 'path';
import fs from 'fs';

// THEOplayer license URL: /docs/theoplayer-license.txt
const theoplayerLicense = process.env.THEOPLAYER_LICENSE || '';
fs.writeFileSync(path.join(__dirname, 'static/theoplayer-license.txt'), theoplayerLicense);

const docsConfigBase = {
  include: [
    '**/*.{md,mdx}',
    // Only include docs folder from external projects
    '!external/**/*',
    'external/**/CHANGELOG.md',
    'external/*/docs/**/*.{md,mdx}',
  ],
  exclude: [
    // Remove index pages from external projects, we'll generate our own instead
    'external/*/docs/**/index.{md,mdx}',
  ],
  editUrl: ({ versionDocsDirPath, docPath }) => {
    if (docPath.startsWith('external')) {
      // Edit docs in external project
      const [, projectName, externalDocPath] = docPath.match(/^external\/([^/]+)\/(.+)$/);
      return `https://github.com/THEOplayer/${projectName}/blob/-/${externalDocPath}`;
    }
    // Edit docs in this project
    return `https://github.com/THEOplayer/documentation/blob/-/${versionDocsDirPath}/${docPath}`;
  },
} satisfies DocsPlugin.Options;

const config: Config = {
  title: 'THEOplayer Documentation',
  tagline: 'Your one-stop shop for everything THEOplayer.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://theoplayer.prudentgiraffe.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'THEOplayer', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        ...docsConfigBase,
        id: 'theoplayer',
        path: 'theoplayer',
        routeBasePath: '/theoplayer',
        sidebarPath: './sidebarsTheoplayer.ts',
        lastVersion: 'current',
        versions: {
          current: {
            label: '6.9.0', // TODO Retrieve automatically?
          },
        },
      } satisfies DocsPlugin.Options,
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        ...docsConfigBase,
        id: 'open-video-ui',
        path: 'open-video-ui',
        routeBasePath: '/open-video-ui',
        sidebarPath: './sidebarsOpenVideoUI.ts',
        lastVersion: 'current',
        versions: {
          current: {
            label: webUiVersion,
          },
        },
      } satisfies DocsPlugin.Options,
    ],
  ],

  markdown: {
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      const { frontMatter } = result;
      let externalDocPath = getExternalDocPath(params.filePath);
      if (externalDocPath) {
        // Add a slug to all external doc pages
        frontMatter.slug ??= externalDocPath
          // Remove extension
          .replace(/\.mdx?$/, '')
          // Map external projects to desired URLs
          .replace('web-ui/docs/', '/web/')
          .replace('android-ui/docs/', '/android/')
          .replace('web-ui/CHANGELOG', '/web/changelog')
          .replace('web-ui/react/CHANGELOG', '/react/changelog')
          .replace('android-ui/CHANGELOG', '/android/changelog');
      }
      if (params.filePath.toLowerCase().endsWith('changelog.md')) {
        frontMatter.title ??= 'Changelog';
        // Don't show nested headings in table of contents for changelog
        frontMatter.toc_min_heading_level = 2;
        frontMatter.toc_max_heading_level = 2;
      }
      return result;
    },
  },

  staticDirectories: ['static', 'theoplayer/static', 'open-video-ui/external/web-ui/docs/static'],

  scripts: [
    {
      // HubSpot Analytics for theoplayer.com
      src: '//js.hs-scripts.com/2163521.js',
      id: 'hs-script-loader',
      async: true,
      defer: true,
    },
  ],

  themeConfig: {
    // TODO Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'THEO',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'theoplayer',
          docsPluginId: 'theoplayer',
          label: 'THEOplayer',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'openVideoUi',
          docsPluginId: 'open-video-ui',
          label: 'Open Video UI',
          position: 'left',
        },
        {
          label: 'THEOlive',
          href: 'https://developers.theo.live/',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'theoplayer',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'open-video-ui',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'THEOplayer',
              to: '/theoplayer/',
            },
            {
              label: 'Open Video UI',
              to: '/open-video-ui/',
            },
            {
              label: 'THEOlive',
              href: 'https://developers.theo.live/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/THEOplayer',
            },
            {
              label: 'X (Twitter)',
              href: 'https://twitter.com/THEO_player',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/theoplayer/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} THEO Technologies`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

function getExternalDocPath(filePath: string): string | undefined {
  const parts = path.relative(__dirname, filePath).split(path.sep);
  if (parts.length < 2) {
    return;
  }
  if (/^([^_]+)_versioned_docs$/.test(parts[0])) {
    // Versioned doc, remove first two directories (e.g. "theoplayer_versioned_docs/version_1.x")
    parts.splice(0, 2);
  } else {
    // Current doc, remove first directory (e.g. "theoplayer")
    parts.splice(0, 1);
  }
  const firstPart = parts.shift();
  if (firstPart !== 'external') {
    // Not an external doc
    return;
  }
  return parts.join('/');
}

export default config;
