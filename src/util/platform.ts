/**
 * The names of SDK platforms.
 *
 * These MUST match the name of the sidebar in the docs plugin.
 */
const platformNames = ['web', 'android', 'ios', 'react', 'react-native', 'chromecast', 'roku', 'flutter'] as const;
export type PlatformName = (typeof platformNames)[number];

export function isPlatformName(name: string): name is PlatformName {
  return platformNames.indexOf(name as PlatformName) !== -1;
}

interface PlatformDescription {
  platform: PlatformName;
  label: string;
  icon: string;
}

const theoplayerPlatforms: PlatformDescription[] = [
  {
    platform: 'web',
    label: 'THEOplayer Web SDK',
    icon: 'web',
  },
  {
    platform: 'android',
    label: 'THEOplayer Android SDK',
    icon: 'android',
  },
  {
    platform: 'ios',
    label: 'THEOplayer iOS & tvOS SDK',
    icon: 'apple',
  },
  {
    platform: 'react-native',
    label: 'React Native THEOplayer',
    icon: 'react',
  },
  {
    platform: 'chromecast',
    label: 'THEOplayer Chromecast SDK',
    icon: 'chromecast',
  },
  {
    platform: 'roku',
    label: 'THEOplayer Roku SDK',
    icon: 'roku',
  },
];

const openVideoUiPlatforms: PlatformDescription[] = [
  {
    platform: 'web',
    label: 'Open Video UI for Web',
    icon: 'web',
  },
  {
    platform: 'android',
    label: 'Open Video UI for Android',
    icon: 'android',
  },
  {
    platform: 'react',
    label: 'Open Video UI for React',
    icon: 'react',
  },
  {
    platform: 'react-native',
    label: 'React Native THEOplayer UI',
    icon: 'react',
  },
];

export function getPlatforms(docsPluginId: string): readonly PlatformDescription[] {
  if (docsPluginId === 'theoplayer') {
    return theoplayerPlatforms;
  } else if (docsPluginId === 'open-video-ui') {
    return openVideoUiPlatforms;
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
