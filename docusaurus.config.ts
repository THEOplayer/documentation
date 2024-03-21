import 'dotenv/config';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import { GlobExcludeDefault } from '@docusaurus/utils';
import type * as Preset from '@docusaurus/preset-classic';
import type * as DocsPlugin from '@docusaurus/plugin-content-docs';
import type { Configuration as WebpackConfiguration } from 'webpack';
import { version as webUiVersion } from './open-video-ui/external/web-ui/package.json';
import sidebarItemsGenerator from './src/plugin/sidebarItemsGenerator';
import path from 'path';
import fs from 'fs';

// THEOplayer license URL: /docs/theoplayer-license.txt
const theoplayerLicense = process.env.THEOPLAYER_LICENSE || '';
fs.writeFileSync(path.join(__dirname, 'static/theoplayer-license.txt'), theoplayerLicense);

const docsConfigBase = {
  include: [
    '**/*.{md,mdx}',
    // For external projects: include changelogs and /docs folder
    '!(external/**)',
    'external/*/CHANGELOG.md',
    'external/*/*/CHANGELOG.md',
    'external/*/{doc,docs}/**/*.{md,mdx}',
  ],
  exclude: [
    ...GlobExcludeDefault,
    // Remove index pages from external projects, we'll generate our own instead
    'external/*/{doc,docs}/**/index.{md,mdx}',
    // Ignore node_modules
    'external/**/node_modules/**/*',
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
  title: 'THEOdocs',
  tagline: 'Discover the latest developer documentation and samples for THEOplayer, Open Video UI and THEOlive.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.theoplayer.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.DOCUSAURUS_BASE_URL || '/docs/',
  trailingSlash: true,
  noIndex: !!process.env.DOCUSAURUS_NO_INDEX,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'THEOplayer', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',

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
            label: fs.readFileSync(path.join(__dirname, 'theoplayer/version.txt'), 'utf8').trim(),
          },
          v6: {
            label: fs.readFileSync(path.join(__dirname, 'theoplayer_versioned_docs/version-v6/version.txt'), 'utf8').trim(),
            banner: 'none',
            noIndex: true,
          },
          v4: {
            label: fs.readFileSync(path.join(__dirname, 'theoplayer_versioned_docs/version-v4/version.txt'), 'utf8').trim(),
            banner: 'unmaintained',
            noIndex: true,
          },
        },
        sidebarItemsGenerator,
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
        sidebarItemsGenerator,
      } satisfies DocsPlugin.Options,
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        ...docsConfigBase,
        id: 'contribution-guidelines',
        path: 'contribution-guidelines',
        routeBasePath: '/contribution-guidelines',
        sidebarPath: './sidebarsContributionGuidelines.ts',
        versions: {
          current: {
            noIndex: true,
          },
        },
      } satisfies DocsPlugin.Options,
    ],
    () => ({
      name: 'webpack-plugin',
      configureWebpack() {
        return {
          module: {
            // https://github.com/WebCoder49/code-input only exports to the global scope.
            // Insert some `import` and `export` statements where needed.
            rules: [
              {
                test: require.resolve('@webcoder49/code-input/code-input'),
                loader: 'exports-loader',
                options: {
                  type: 'commonjs',
                  exports: 'single codeInput',
                },
              },
              {
                test: require.resolve('@webcoder49/code-input/plugins/indent'),
                loader: 'imports-loader',
                options: {
                  type: 'commonjs',
                  imports: {
                    syntax: 'single',
                    name: 'codeInput',
                    moduleName: '@webcoder49/code-input/code-input',
                  },
                },
              },
            ],
          },
        } satisfies WebpackConfiguration;
      },
    }),
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
          .replace('android-ui/CHANGELOG', '/android/changelog')
          .replace('react-native-theoplayer/CHANGELOG', '/getting-started/frameworks/react-native/changelog')
          .replace('react-native-theoplayer/doc/', '/getting-started/frameworks/react-native/')
          .replace('react-native-theoplayer-ui/CHANGELOG', '/react-native/changelog')
          .replace('react-native-theoplayer-ui/doc/', '/react-native/');
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

  stylesheets: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: true,
    },
    'https://fonts.googleapis.com/css2?family=Francois+One&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
  ],

  themeConfig: {
    // TODO Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    announcementBar: process.env.DOCUSAURUS_PR_NUMBER
      ? {
          id: 'pr_preview',
          content: `This is a preview of the documentation website from <a target="_blank" rel="noopener noreferrer" href="${process.env.DOCUSAURUS_PR_URL}">pull request #${process.env.DOCUSAURUS_PR_NUMBER}</a>.`,
          backgroundColor: '#9cb9c9',
          textColor: '#344a5e',
          isCloseable: false,
        }
      : undefined,
    navbar: {
      title: null,
      logo: {
        alt: 'THEOdocs',
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
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://www.theoplayer.com/">THEO Technologies</a>`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['java', 'groovy', 'objectivec', 'brightscript', 'bash'],
    },
    algolia: {
      appId: '7HRS9V6FEL',
      apiKey: '415e178afdd1c3ea819b42fb9a6a1c99',
      indexName: 'theoplayer',
      contextualSearch: true,
      replaceSearchResultPathname: process.env.DOCUSAURUS_BASE_URL
        ? {
            from: '/docs/',
            to: process.env.DOCUSAURUS_BASE_URL,
          }
        : undefined,
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
