import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

const externalDocsDir = path.join(__dirname, 'docs/external');

const config: Config = {
  title: 'THEOplayer Documentation',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.theoplayer.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          include: [
            '**/*.{md,mdx}',
            // Only include docs folder from external projects
            '!external/**/*',
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
              return `https://github.com/THEOplayer/${projectName}/edit/main/${externalDocPath}`;
            }
            // Edit docs in this project
            return `https://github.com/THEOplayer/documentation/edit/main/${versionDocsDirPath}/${docPath}`;
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    parseFrontMatter: async (params) => {
      const frontMatter = await params.defaultParseFrontMatter(params);
      const relativePath = path.relative(externalDocsDir, params.filePath).replaceAll(path.sep, '/');
      if (!relativePath.startsWith('..')) {
        // Add a slug to all external doc pages
        if (!frontMatter.frontMatter.slug) {
          frontMatter.frontMatter.slug = relativePath
            // Remove extension
            .replace(/\.mdx?$/, '')
            // Map /external/web-ui/ to /open-video-ui/web/
            .replace('web-ui/docs/', '/open-video-ui/web/')
            // Map /external/android-ui/ to /open-video-ui/android/
            .replace('android-ui/docs/', '/open-video-ui/android/');
        }
      }
      return frontMatter;
    },
  },

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
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
          label: 'THEOplayer',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'openVideoUi',
          label: 'Open Video UI',
          position: 'left',
        },
        {
          label: 'THEOlive',
          href: 'https://developers.theo.live/',
          position: 'left',
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

export default config;
