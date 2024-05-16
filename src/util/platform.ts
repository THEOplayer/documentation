/**
 * The names of SDK platforms.
 *
 * These MUST match the name of the sidebar in the docs plugin.
 */
const platformNames = ['web', 'android', 'ios', 'react', 'react-native', 'chromecast', 'roku', 'flutter'] as const;
export type PlatformName = (typeof platformNames)[number];

export const defaultPlatformName = 'web' satisfies PlatformName;

export function isPlatformName(name: string): name is PlatformName {
  return platformNames.indexOf(name as PlatformName) !== -1;
}

interface PlatformDescription {
  platform: PlatformName;
  label: string;
  shortLabel?: string;
  description: string;
  icon: string;
}

export const theoplayerPlatforms: readonly PlatformDescription[] = [
  {
    platform: 'web',
    label: 'THEOplayer Web SDK',
    shortLabel: 'Web SDK',
    description: 'For desktop and mobile web browsers, and smart TVs like Tizen and WebOS',
    icon: 'web',
  },
  {
    platform: 'android',
    label: 'THEOplayer Android SDK',
    shortLabel: 'Android SDK',
    description: 'For smartphones, tablets and Android TVs',
    icon: 'android',
  },
  {
    platform: 'ios',
    label: 'THEOplayer iOS & tvOS SDK',
    shortLabel: 'iOS & tvOS SDK',
    description: 'For iPhone, iPad and Apple TV',
    icon: 'apple',
  },
  {
    platform: 'react-native',
    label: 'THEOplayer React Native SDK',
    shortLabel: 'React Native SDK',
    description: 'For cross-platform apps targeting web, Android and iOS',
    icon: 'react',
  },
  {
    platform: 'chromecast',
    label: 'THEOplayer Chromecast SDK',
    shortLabel: 'Chromecast SDK',
    description: 'For custom Chromecast receiver apps',
    icon: 'chromecast',
  },
  {
    platform: 'roku',
    label: 'THEOplayer Roku SDK',
    shortLabel: 'Roku SDK',
    description: 'For Roku smart TVs',
    icon: 'roku',
  },
];

export const openVideoUiPlatforms: readonly PlatformDescription[] = [
  {
    platform: 'web',
    label: 'Open Video UI for Web',
    description: 'For desktop and mobile web browsers using Web Components',
    icon: 'web',
  },
  {
    platform: 'android',
    label: 'Open Video UI for Android',
    description: 'For Android smartphones and tablets using Jetpack Compose',
    icon: 'android',
  },
  {
    platform: 'react',
    label: 'Open Video UI for React',
    description: 'For web apps using React components',
    icon: 'react',
  },
  {
    platform: 'react-native',
    label: 'React Native THEOplayer UI',
    shortLabel: 'React Native UI',
    description: 'For cross-platform apps using React Native components',
    icon: 'react',
  },
];

export function getPlatforms(docsPluginId: string): readonly PlatformDescription[] {
  if (docsPluginId === 'theoplayer') {
    return theoplayerPlatforms;
  } else if (docsPluginId === 'open-video-ui') {
    return openVideoUiPlatforms;
  } else {
    return [];
  }
}

type PlatformDescriptionsByName = Record<PlatformName, PlatformDescription>;
const theoplayerPlatformsByName = Object.fromEntries(theoplayerPlatforms.map((desc) => [desc.platform, desc])) as PlatformDescriptionsByName;
const openVideoUiPlatformsByName = Object.fromEntries(openVideoUiPlatforms.map((desc) => [desc.platform, desc])) as PlatformDescriptionsByName;

export function getPlatformByName(docsPluginId: string, platformName: PlatformName): PlatformDescription | undefined {
  if (docsPluginId === 'theoplayer') {
    return theoplayerPlatformsByName[platformName];
  } else if (docsPluginId === 'open-video-ui') {
    return openVideoUiPlatformsByName[platformName];
  }
}

export function isDocSharedWithPlatform(docsPluginId: string, docId: string, platformName: PlatformName) {
  if (docsPluginId === 'theoplayer') {
    if (docId === 'changelog') {
      return platformName === 'web' || platformName === 'android' || platformName === 'ios' || platformName === 'chromecast';
    }
    if (docId.startsWith('how-to-guides/') || docId.startsWith('knowledge-base/')) {
      return true;
    }
  }
  return false;
}
