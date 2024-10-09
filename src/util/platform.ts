import type { GlobalDoc, GlobalVersion } from '@docusaurus/plugin-content-docs/client';

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
  minVersion: number;
}

const theoplayerPlatforms: readonly PlatformDescription[] = [
  {
    platform: 'web',
    label: 'THEOplayer Web SDK',
    shortLabel: 'Web SDK',
    description: 'For desktop and mobile web browsers, and smart TVs like Tizen and WebOS',
    icon: 'web',
    minVersion: 1,
  },
  {
    platform: 'android',
    label: 'THEOplayer Android SDK',
    shortLabel: 'Android SDK',
    description: 'For smartphones, tablets and Android TVs',
    icon: 'android',
    minVersion: 1,
  },
  {
    platform: 'ios',
    label: 'THEOplayer iOS & tvOS SDK',
    shortLabel: 'iOS & tvOS SDK',
    description: 'For iPhone, iPad and Apple TV',
    icon: 'apple',
    minVersion: 1,
  },
  {
    platform: 'react-native',
    label: 'THEOplayer React Native SDK',
    shortLabel: 'React Native SDK',
    description: 'For cross-platform apps targeting web, Android and iOS',
    icon: 'react',
    minVersion: 1,
  },
  {
    platform: 'flutter',
    label: 'THEOplayer Flutter SDK',
    shortLabel: 'Flutter SDK',
    description: 'For cross-platform apps targeting web, Android and iOS',
    icon: 'flutter',
    minVersion: 7,
  },
  {
    platform: 'chromecast',
    label: 'THEOplayer Chromecast SDK',
    shortLabel: 'Chromecast SDK',
    description: 'For custom Chromecast receiver apps',
    icon: 'chromecast',
    minVersion: 1,
  },
  {
    platform: 'roku',
    label: 'THEOplayer Roku SDK',
    shortLabel: 'Roku SDK',
    description: 'For Roku smart TVs',
    icon: 'roku',
    minVersion: 1,
  },
];

const openVideoUiPlatforms: readonly PlatformDescription[] = [
  {
    platform: 'web',
    label: 'Open Video UI for Web',
    description: 'For desktop and mobile web browsers using Web Components',
    icon: 'web',
    minVersion: 1,
  },
  {
    platform: 'android',
    label: 'Open Video UI for Android',
    description: 'For Android smartphones and tablets using Jetpack Compose',
    icon: 'android',
    minVersion: 1,
  },
  {
    platform: 'react',
    label: 'Open Video UI for React',
    description: 'For web apps using React components',
    icon: 'react',
    minVersion: 1,
  },
  {
    platform: 'react-native',
    label: 'React Native THEOplayer UI',
    shortLabel: 'React Native UI',
    description: 'For cross-platform apps using React Native components',
    icon: 'react',
    minVersion: 1,
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

export function getPlatformsByVersion(docsPluginId: string, version?: string): readonly PlatformDescription[] {
  let platforms = getPlatforms(docsPluginId);
  if (version && version !== 'current') {
    const versionNumber = Number(version.slice(1)); // e.g. "v4" -> 4
    platforms = platforms.filter((desc) => desc.minVersion <= versionNumber);
  }
  return platforms;
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

export function isDocSharedWithPlatform(docsPluginId: string, doc: GlobalDoc, platformName: PlatformName) {
  if (docsPluginId === 'theoplayer') {
    if (doc.id === 'changelog') {
      return platformName === 'web' || platformName === 'android' || platformName === 'ios' || platformName === 'chromecast';
    }
    if (doc.id.startsWith('how-to-guides/')) {
      return platformName !== 'flutter';
    }
    if (doc.id.startsWith('knowledge-base/')) {
      return true;
    }
  }
  return false;
}

export function getPlatformDoc(docsPluginId: string, version: GlobalVersion, doc: GlobalDoc, platformName: PlatformName): GlobalDoc | undefined {
  if (isDocSharedWithPlatform(docsPluginId, doc, platformName)) {
    return version.docs[doc.id];
  }
  if (docsPluginId === 'theoplayer') {
    return findMatchingTheoplayerDoc(version, doc, platformName);
  } else if (docsPluginId === 'open-video-ui') {
    return findMatchingOpenVideoUiDoc(version, doc, platformName);
  }
}

function findMatchingTheoplayerDoc(version: GlobalVersion, doc: GlobalDoc, platformName: PlatformName): GlobalDoc | undefined {
  // Getting Started
  const gettingStartedMatch = doc.path.match(/^\/docs\/theoplayer\/getting-started\/(?:sdks|frameworks)\/[a-z\-]+\/(.*)$/);
  if (gettingStartedMatch) {
    const isFrameworkPlatform = platformName === 'react-native' || platformName === 'flutter';
    const docPathPrefix = `/docs/theoplayer/getting-started/${isFrameworkPlatform ? 'frameworks' : 'sdks'}/${platformName}`;
    // Find exact match
    const exactDocPath = `${docPathPrefix}/${gettingStartedMatch[1]}`;
    if (doc.path === exactDocPath) {
      return doc;
    }
    const exactDoc = version.docs.find((otherDoc) => otherDoc.path === exactDocPath);
    if (exactDoc) {
      return exactDoc;
    }
    // Find main Getting Started page
    const mainDocPath = `${docPathPrefix}/getting-started`;
    return version.docs.find((otherDoc) => otherDoc.path === mainDocPath);
  }
  // Connectors
  const connectorMatch = doc.path.match(/^\/docs\/theoplayer\/connectors\/[a-z\-]+\/(.*)$/);
  if (connectorMatch) {
    const docPathPrefix = `/docs/theoplayer/connectors/${platformName}`;
    // Find exact match
    const exactDocPath = `${docPathPrefix}/${connectorMatch[1]}`;
    if (doc.path === exactDocPath) {
      return doc;
    }
    const exactDoc = version.docs.find((otherDoc) => otherDoc.path === exactDocPath);
    if (exactDoc) {
      return exactDoc;
    }
    // Find index page
    const indexDocPath = `${docPathPrefix}/`;
    return version.docs.find((otherDoc) => otherDoc.path === indexDocPath);
  }
}

function findMatchingOpenVideoUiDoc(version: GlobalVersion, doc: GlobalDoc, platformName: PlatformName): GlobalDoc | undefined {
  const match = doc.path.match(/^\/docs\/open-video-ui\/[a-z\-]+\/(.*)$/);
  if (match) {
    const docPathPrefix = `/docs/open-video-ui/${platformName}`;
    // Find exact match
    const exactDocPath = `${docPathPrefix}/${match[1]}`;
    if (doc.path === exactDocPath) {
      return doc;
    }
    const exactDoc = version.docs.find((otherDoc) => otherDoc.path === exactDocPath);
    if (exactDoc) {
      return exactDoc;
    }
    // Find index page
    const indexDocPath = `${docPathPrefix}/`;
    return version.docs.find((otherDoc) => otherDoc.path === indexDocPath);
  }
}
