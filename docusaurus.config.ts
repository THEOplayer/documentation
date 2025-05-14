import 'dotenv/config';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import { GlobExcludeDefault } from '@docusaurus/utils';
import type * as Preset from '@docusaurus/preset-classic';
import type * as DocsPlugin from '@docusaurus/plugin-content-docs';
import type * as ClientRedirectsPlugin from '@docusaurus/plugin-client-redirects';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs/lib/types';
import type { Props as PlatformSidebarNavbarItemProps } from './src/theme/NavbarItem/PlatformSidebarNavbarItem';
import type { Configuration as WebpackConfiguration } from 'webpack';
import { version as webUiVersion } from './open-video-ui/external/web-ui/package.json';
import sidebarItemsGenerator from './src/plugin/sidebarItemsGenerator';
import remarkLinkRewrite from './src/plugin/remarkLinkRewrite';
import openApiLinkRewrite from './src/plugin/openApiLinkRewrite';
import path from 'path';
import fs from 'fs';
import redirectsMillicast from './redirectsMillicast.json';
import redirectsTHEOAds from './redirectsTHEOAds.json';
import redirectsTHEOPlayer from './redirectsTHEOPlayer.json';

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
    'external/web-connectors/*/README.md',
    'external/android-connector/connectors/**/README.md',
    'external/android-connector/connectors/uplynk/docs/*.md',
    'external/iOS-Connector/Code/**/README.md',
    'external/iOS-Connector/Code/Uplynk/docs/*.md',
    'external/flutter-theoplayer-sdk/flutter_theoplayer_sdk/{CHANGELOG,README}.md',
    'external/flutter-theoplayer-sdk/flutter_theoplayer_sdk/flutter_theoplayer_sdk/{CHANGELOG,README}.md',
    'external/*/{doc,docs}/**/*.{md,mdx}',
  ],
  exclude: [
    ...GlobExcludeDefault,
    // Remove index pages from external projects, we'll generate our own instead
    'external/*/{doc,docs}/**/index.{md,mdx}',
    // Ignore node_modules
    'external/**/node_modules/**/*',
    // Ignore platform-specific docs from Flutter SDK
    'external/flutter-theoplayer-sdk/flutter_theoplayer_sdk_*/**/*',
    'external/flutter-theoplayer-sdk/flutter_theoplayer_sdk/flutter_theoplayer_sdk_*/**/*',
  ],
  editUrl: ({ versionDocsDirPath, docPath }) => {
    if (docPath.startsWith('external')) {
      // Edit docs in external project
      return externalDocUrl(docPath);
    }
    // Edit docs in this project
    return `https://github.com/THEOplayer/documentation/blob/-/${versionDocsDirPath}/${docPath}`;
  },
  beforeDefaultRemarkPlugins: [
    [
      remarkLinkRewrite,
      {
        replacer: (url: string, docPath: string) => {
          // External documentation may contain relative URLs to non-Markdown files.
          // Turn them into absolute URLs to GitHub instead.
          if (isRelativeUrl(url) && !isMarkdownUrl(url)) {
            const relativePath = path.relative(__dirname, docPath).replaceAll(path.sep, '/');
            if (relativePath.includes('/external/')) {
              return new URL(url, externalDocUrl(relativePath)).href;
            }
          }
          return url;
        },
      },
    ],
  ],
} satisfies DocsPlugin.Options;

// Remove the index.md[x] from categories
function removeDocIndexItems(items) {
  const result = items
    .filter((item) => item.type !== 'doc' || !item.id.endsWith('/index'))
    .map((item) => {
      if (item.type === 'category') {
        return { ...item, items: removeDocIndexItems(item.items) };
      }
      return item;
    });

  return result;
}

const config: Config = {
  title: 'Dolby OptiView Documentation',
  tagline: 'Discover the latest developer documentation and samples for OptiView products including: Player, Streaming, Ads, and Open Video UI',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://optiview.dolby.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.DOCUSAURUS_BASE_URL || '/docs/',
  trailingSlash: true,
  noIndex: !!process.env.DOCUSAURUS_NO_INDEX,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Dolby', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  future: {
    experimental_faster: true,
  },

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
        googleTagManager: {
          containerId: 'GTM-TVR6CV9',
        },
        gtag: {
          trackingID: 'G-VCRXHMHS4M',
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
          v8: {
            label: fs.readFileSync(path.join(__dirname, 'theoplayer_versioned_docs/version-v8/version.txt'), 'utf8').trim(),
            banner: 'none',
            noIndex: true,
          },
          v7: {
            label: fs.readFileSync(path.join(__dirname, 'theoplayer_versioned_docs/version-v7/version.txt'), 'utf8').trim(),
            banner: 'unmaintained',
            noIndex: true,
          },
          v6: {
            label: fs.readFileSync(path.join(__dirname, 'theoplayer_versioned_docs/version-v6/version.txt'), 'utf8').trim(),
            banner: 'unmaintained',
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
        id: 'theoads',
        path: 'theoads',
        routeBasePath: '/theoads',
        sidebarPath: './sidebarsTHEOads.ts',
        docItemComponent: '@theme/ApiItem',
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
        id: 'theolive',
        path: 'theolive',
        routeBasePath: '/theolive',
        sidebarPath: './sidebarsTheolive.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        ...docsConfigBase,
        id: 'millicast',
        path: 'millicast',
        routeBasePath: '/millicast',
        sidebarPath: './sidebarsMillicast.ts',
        docItemComponent: '@theme/ApiItem',
        async sidebarItemsGenerator(args) {
          const sidebarItems = await sidebarItemsGenerator(args);
          return removeDocIndexItems(sidebarItems);
        },
      } satisfies DocsPlugin.Options,
    ],
    [
      'docusaurus-plugin-image-zoom',
      {
        id: 'docusaurus-plugin-image-zoom',
        path: 'millicast',
        routeBasePath: '/millicast',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        ...docsConfigBase,
        id: 'contributing',
        path: 'contributing',
        routeBasePath: '/contributing',
        sidebarPath: './sidebarsContributing.ts',
        versions: {
          current: {
            noIndex: true,
          },
        },
      } satisfies DocsPlugin.Options,
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'theoads-api',
        docsPluginId: 'theoads',
        config: {
          signaling: {
            specPath: 'theoads/api/ads-client.swagger.json',
            outputDir: 'theoads/api/signaling',
            hideSendButton: true,
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      } satisfies OpenApiPlugin.PluginOptions,
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'millicast-api',
        docsPluginId: 'millicast',
        config: {
          millicast: {
            specPath: 'https://api.millicast.com/openapi/v1/openapi.json',
            outputDir: 'millicast/api',
            hideSendButton: true,
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
            markdownGenerators: openApiLinkRewrite(),
          },
          millicastDirector: {
            specPath: 'https://director.millicast.com/openapi/v1/openapi.json',
            outputDir: 'millicast/api/director',
            hideSendButton: true,
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
          millicastReportingApi: {
            specPath: 'https://analyticsapi.millicast.com/openapi/v1/openapi.json',
            outputDir: 'millicast/api/reporting',
            hideSendButton: true,
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      } satisfies OpenApiPlugin.PluginOptions,
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [...redirectsMillicast, ...redirectsTHEOAds, ...redirectsTHEOPlayer],
        createRedirects(existingPath) {
          if (existingPath.startsWith('/theoplayer/how-to-guides/web/uplynk/')) {
            return [existingPath.replace('/theoplayer/how-to-guides/web/uplynk/', '/theoplayer/how-to-guides/miscellaneous/verizon-media/')];
          }
          if (existingPath.startsWith('/theolive/playback/web/')) {
            return [existingPath.replace('/theolive/playback/web/', '/theoplayer/how-to-guides/web/theolive/')];
          }
          return undefined;
        },
      } satisfies ClientRedirectsPlugin.Options,
    ],
    [
      (_context, options: { webpack: WebpackConfiguration }) => ({
        name: 'webpack-plugin',
        configureWebpack() {
          return options.webpack;
        },
      }),
      {
        webpack: {
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
        } satisfies WebpackConfiguration,
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  markdown: {
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      const { frontMatter } = result;
      const parsedDocPath = parseDocPath(params.filePath);
      const { docPluginId } = parsedDocPath;
      let { docPath } = parsedDocPath;
      if (!frontMatter.slug && docPath.startsWith('external/')) {
        // Add a slug to all external doc pages
        frontMatter.slug = docPath
          // Remove extension
          .replace('external/', '')
          .replace(/\.mdx?$/, '')
          // Map external projects to desired URLs
          .replace('web-ui/docs/', '/web/')
          .replace('android-ui/docs/', '/android/')
          .replace('web-ui/CHANGELOG', '/web/changelog')
          .replace('web-ui/react/CHANGELOG', '/react/changelog')
          .replace('android-ui/CHANGELOG', '/android/changelog')
          .replace('react-native-theoplayer/CHANGELOG', '/changelog/react-native')
          .replace('react-native-theoplayer/doc/', '/getting-started/frameworks/react-native/')
          .replace('flutter-theoplayer-sdk/flutter_theoplayer_sdk/flutter_theoplayer_sdk/', 'flutter-theoplayer-sdk/flutter_theoplayer_sdk/')
          .replace('flutter-theoplayer-sdk/flutter_theoplayer_sdk/CHANGELOG', '/flutter/changelog')
          .replace('flutter-theoplayer-sdk/flutter_theoplayer_sdk/README', '/getting-started/frameworks/flutter/getting-started')
          .replace('flutter-theoplayer-sdk/doc/', '/flutter/guides/')
          .replace('react-native-theoplayer-ui/CHANGELOG', '/react-native/changelog')
          .replace('react-native-theoplayer-ui/doc/', '/react-native/')
          .replace(/web-connectors\/([^/]+)\/CHANGELOG/, '/connectors/web/$1/changelog')
          .replace(/web-connectors\/([^/]+)\/README/, '/connectors/web/$1/getting-started')
          .replace(/web-connectors\/([^/]+)\/doc\//, '/connectors/web/$1/')
          .replace(/android-connector\/connectors(?:\/[^/]+)*\/([^/]+)\/CHANGELOG/, '/connectors/android/$1/changelog')
          .replace(/android-connector\/connectors(?:\/[^/]+)*\/([^/]+)\/README/, '/connectors/android/$1/getting-started')
          .replace(/android-connector\/connectors(?:\/[^/]+)*\/([^/]+)\/docs?\//, '/connectors/android/$1/')
          .replace(/iOS-Connector\/CHANGELOG/, '/connectors/ios/changelog')
          .replace(/iOS-Connector\/Code\/([^/]+)-Examples\/README/, '/connectors/ios/$1/examples')
          .replace(/iOS-Connector\/Code\/([^/]+)\/README/, '/connectors/ios/$1/getting-started')
          .replace(/iOS-Connector\/Code\/([^/]+)\/docs?\//, '/connectors/ios/$1/')
          .toLowerCase();
      }
      docPath = docPath.toLowerCase();
      if (docPath.endsWith('changelog.md') || docPath.includes('/changelog/')) {
        // Fix changelog titles
        frontMatter.title ??= 'Changelog';
        frontMatter.sidebar_custom_props ??= { icon: '📰' };
        // Don't show nested headings in table of contents for changelog
        frontMatter.toc_min_heading_level = 2;
        frontMatter.toc_max_heading_level = 2;
      } else if (docPath.endsWith('examples/readme.md')) {
        frontMatter.title ??= 'Examples';
        frontMatter.sidebar_custom_props ??= { icon: '🛝' };
      } else if (docPath.endsWith('readme.md')) {
        frontMatter.title ??= 'Getting started';
        if (!frontMatter.description) {
          if (docPluginId === 'open-video-ui') {
            frontMatter.description = 'Start building your UI in just a few minutes!';
          } else if (docPath.includes('connector')) {
            frontMatter.description = 'Set up your connector in just a few minutes!';
          } else {
            frontMatter.description = 'Set up your first THEOplayer in just a few minutes!';
          }
        }
        frontMatter.sidebar_custom_props ??= { icon: '🚀 ' };
      }
      return result;
    },
  },

  staticDirectories: ['static', 'theoplayer/static', 'open-video-ui/external/web-ui/docs/static'],

  themeConfig: {
    // TODO OpenGraph image for OptiView?
    // image: 'img/opengraph.png',
    announcementBar: process.env.DOCUSAURUS_PR_NUMBER
      ? {
          id: 'pr_preview',
          content: `This is a preview of the documentation website from <a target="_blank" rel="noopener noreferrer" href="${process.env.DOCUSAURUS_PR_URL}">pull request #${process.env.DOCUSAURUS_PR_NUMBER}</a>.`,
          backgroundColor: '#9cb9c9',
          textColor: '#344a5e',
          isCloseable: false,
        }
      : {
          id: 'dolby_optiview_new_name',
          content:
            'Dolby OptiView is the new home for everything Dolby.io and THEOplayer. <a target="_blank" rel="noopener" href="https://dolby.io/blog/introducing-dolby-optiview-redefining-immersive-streaming-experiences/">Learn more.</a>',
          backgroundColor: '#4800c4',
          textColor: '#fff',
          isCloseable: true,
        },
    navbar: {
      title: null,
      logo: {
        alt: 'Dolby OptiView',
        src: 'img/dolby-optiview-white.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Player',
          href: '/theoplayer',
          position: 'left',
          items: [
            {
              type: 'custom-platformSidebar',
              docsPluginId: 'theoplayer',
              label: 'THEOplayer',
              href: '/theoplayer',
              activeBasePath: '/theoplayer',
            } satisfies PlatformSidebarNavbarItemProps,
            {
              type: 'custom-platformSidebar',
              docsPluginId: 'open-video-ui',
              label: 'Open Video UI',
              href: '/open-video-ui',
              activeBasePath: '/open-video-ui',
            } satisfies PlatformSidebarNavbarItemProps,
          ],
        },
        {
          type: 'docSidebar',
          docsPluginId: 'theoads',
          sidebarId: 'theoads',
          label: 'Ads',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Streaming',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              docsPluginId: 'theolive',
              sidebarId: 'theolive',
              label: 'Live (THEOlive)',
              activeBasePath: '/theolive',
            },
            {
              type: 'docSidebar',
              docsPluginId: 'millicast',
              sidebarId: 'millicast',
              label: 'Real-time (Millicast)',
              activeBasePath: '/millicast',
            },
          ],
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
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://www.dolby.com/">Dolby Laboratories, Inc. All rights reserved.</a>`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['java', 'groovy', 'objectivec', 'brightscript', 'dart', 'bash', 'diff', 'json', 'ruby'],
    },
    algolia: {
      appId: '7HRS9V6FEL',
      apiKey: '415e178afdd1c3ea819b42fb9a6a1c99',
      indexName: 'theoplayer',
      contextualSearch: true,
      replaceSearchResultPathname: {
        from: '/docs/',
        to: process.env.DOCUSAURUS_BASE_URL || '/docs/',
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    zoom: {
      selector: '.markdown :not(a, em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      },
    },
  } satisfies Preset.ThemeConfig,
};

function parseDocPath(filePath: string):
  | {
      docPluginId: string;
      version: string | undefined;
      docPath: string;
    }
  | undefined {
  const parts = path.relative(__dirname, filePath).split(path.sep);
  if (parts.length < 2) {
    return;
  }
  if (parts[0].endsWith('_versioned_docs')) {
    // Versioned doc, e.g. "theoplayer_versioned_docs/version_1.x"
    const docPluginId = parts[0].replace('_versioned_docs', '');
    const version = parts[1].replace('version-', '');
    const docPath = parts.slice(2).join('/');
    return { docPluginId, version, docPath };
  } else {
    // Current doc, e.g. "theoplayer"
    const docPluginId = parts[0];
    const docPath = parts.slice(1).join('/');
    return { docPluginId, version: undefined, docPath };
  }
}

function isRelativeUrl(href: string): boolean {
  return href.startsWith('./') || href.startsWith('../');
}

function isMarkdownUrl(href: string): boolean {
  return /\.mdx?(?:#|$)/.test(href);
}

function externalDocUrl(docPath: string): string {
  const [, projectName, externalDocPath] = docPath.match(/\bexternal\/([^/]+)\/(.+)$/);
  return `https://github.com/THEOplayer/${projectName}/blob/-/${externalDocPath}`;
}

export default config;
