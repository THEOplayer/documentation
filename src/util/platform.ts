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
      // how-to-guides/ads/ = shared
      // how-to-guides/web/ = not shared, because platform-specific
      const [, docPlatformName] = doc.id.split('/', 2);
      return !isPlatformName(docPlatformName) || docPlatformName === platformName;
    }
    if (doc.id.startsWith('knowledge-base/')) {
      return true;
    }
  }
  return false;
}

export function getPlatformDoc(docsPluginId: string, version: GlobalVersion, doc: GlobalDoc, platformName: PlatformName): GlobalDoc | undefined {
  if (isDocSharedWithPlatform(docsPluginId, doc, platformName)) {
    return doc;
  }
  if (docsPluginId === 'theoplayer') {
    return findMatchingTheoplayerDoc(version, doc, platformName);
  } else if (docsPluginId === 'open-video-ui') {
    return findMatchingOpenVideoUiDoc(version, doc, platformName);
  }
}

function findMatchingTheoplayerDoc(version: GlobalVersion, doc: GlobalDoc, platformName: PlatformName): GlobalDoc | undefined {
  const docPath = doc.path.replace(version.path, '');
  // Millicast React Native guide to Web/iOS/Android guide
  if (platformName === 'web' || platformName === 'android' || platformName === 'ios') {
    const millicastMatch = docPath.match(/^\/getting-started\/frameworks\/react-native\/millicast$/);
    if (millicastMatch) {
      const prefix = `${version.path}/how-to-guides/${platformName}/millicast`;
      const matchingDoc = findMatchingDoc(version, doc, prefix, '', '/getting-started');
      if (matchingDoc) return matchingDoc;
    }
  }
  // Getting Started
  const gettingStartedMatch = docPath.match(/^\/getting-started\/(?:sdks|frameworks)\/([a-z-]+)(|\/.*)$/);
  if (gettingStartedMatch && isPlatformName(gettingStartedMatch[1])) {
    const isFrameworkPlatform = platformName === 'react-native' || platformName === 'flutter';
    const prefix = `${version.path}/getting-started/${isFrameworkPlatform ? 'frameworks' : 'sdks'}/${platformName}`;
    return findMatchingDoc(version, doc, prefix, gettingStartedMatch[2], '/getting-started');
  }
  // Uplynk Web guide to Android/iOS connector
  if (platformName === 'android' || platformName === 'ios') {
    const uplynkWebMatch = docPath.match(/^\/how-to-guides\/web\/uplynk(|\/.*)$/);
    if (uplynkWebMatch) {
      const prefix = `${version.path}/connectors/${platformName}/uplynk`;
      const matchingDoc = findMatchingDoc(version, doc, prefix, uplynkWebMatch[1], '');
      if (matchingDoc) return matchingDoc;
    }
  }
  // Uplynk Android/iOS connector to Web guide
  if (platformName === 'web') {
    const uplynkConnectorMatch = docPath.match(/^\/connectors\/([a-z-]+)\/uplynk(|\/.*)$/);
    if (uplynkConnectorMatch && isPlatformName(uplynkConnectorMatch[1])) {
      const prefix = `${version.path}/how-to-guides/web/uplynk`;
      const matchingDoc = findMatchingDoc(version, doc, prefix, uplynkConnectorMatch[2], '/introduction');
      if (matchingDoc) return matchingDoc;
    }
  }
  // Millicast Web/iOS/Android guide to React Native guide
  if (platformName === 'react-native') {
    const millicastMatch = docPath.match(/^\/how-to-guides\/([a-z-]+)\/millicast(|\/.*)$/);
    if (millicastMatch && isPlatformName(millicastMatch[1])) {
      const prefix = `${version.path}/getting-started/frameworks/react-native/millicast/`;
      const matchingDoc = findMatchingDoc(version, doc, prefix, '', '');
      if (matchingDoc) return matchingDoc;
    }
  }
  // CMCD Web connector to Android/iOS guide
  if (platformName === 'android' || platformName === 'ios') {
    const cmcdConnectorMatch = docPath.match(/^\/connectors\/web\/cmcd(|\/.*)$/);
    if (cmcdConnectorMatch) {
      const prefix = `${version.path}/how-to-guides/${platformName}/cmcd`;
      const matchingDoc = findMatchingDoc(version, doc, prefix, cmcdConnectorMatch[1], '/getting-started');
      if (matchingDoc) return matchingDoc;
    }
  }
  // CMCD Android/iOS guide to Web connector
  if (platformName === 'web') {
    const cmcdGuideMatch = docPath.match(/^\/how-to-guides\/([a-z-]+)\/cmcd(|\/.*)$/);
    if (cmcdGuideMatch && isPlatformName(cmcdGuideMatch[1])) {
      const prefix = `${version.path}/connectors/web/cmcd`;
      const matchingDoc = findMatchingDoc(version, doc, prefix, cmcdGuideMatch[2], '/getting-started');
      if (matchingDoc) return matchingDoc;
    }
  }
  // How-to guides
  const howToGuideMatch = docPath.match(/^\/how-to-guides\/([a-z-]+)(|\/.*)$/);
  if (howToGuideMatch && isPlatformName(howToGuideMatch[1])) {
    const prefix = `${version.path}/how-to-guides/${platformName}`;
    return findMatchingDoc(version, doc, prefix, howToGuideMatch[2], '');
  }
  // Connectors
  const connectorMatch = docPath.match(/^\/connectors\/([a-z-]+)(|\/.*)$/);
  if (connectorMatch && isPlatformName(connectorMatch[1])) {
    const prefix = `${version.path}/connectors/${platformName}`;
    return findMatchingDoc(version, doc, prefix, connectorMatch[2], '');
  }
}

function findMatchingOpenVideoUiDoc(version: GlobalVersion, doc: GlobalDoc, platformName: PlatformName): GlobalDoc | undefined {
  const docPath = doc.path.replace(version.path, '');
  const match = docPath.match(/^\/([a-z-]+)(|\/.*)$/);
  if (match && isPlatformName(match[1])) {
    const prefix = `${version.path}/${platformName}`;
    return findMatchingDoc(version, doc, prefix, match[2], '');
  }
}

function findMatchingDoc(version: GlobalVersion, doc: GlobalDoc, prefix: string, suffix: string, fallbackSuffix: string): GlobalDoc | undefined {
  // Find exact match
  const exactDocPath = `${prefix}${suffix}`.replace(/\/$/, '');
  if (doc.path === exactDocPath) {
    return doc;
  }
  const exactDoc = version.docs.find((otherDoc) => otherDoc.path === exactDocPath);
  if (exactDoc) {
    return exactDoc;
  }
  // Find a loose match with fewer path parts
  const suffixParts = suffix.split('/');
  suffixParts.pop();
  while (suffixParts.length > 0) {
    const looseDocPath = `${prefix}${suffixParts.join('/')}`;
    const looseDoc = version.docs.find((otherDoc) => otherDoc.path === looseDocPath);
    if (looseDoc) {
      return looseDoc;
    }
    suffixParts.pop();
  }
  // Find fallback page
  const fallbackDocPath = `${prefix}${fallbackSuffix}`;
  return version.docs.find((otherDoc) => otherDoc.path === fallbackDocPath);
}
