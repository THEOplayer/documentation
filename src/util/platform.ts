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

export function getPlatformLabel(docsPluginId: string, platformName: PlatformName): string | undefined {
  if (docsPluginId === 'theoplayer') {
    switch (platformName) {
      case 'web':
        return 'THEOplayer Web SDK';
      case 'android':
        return 'THEOplayer Android SDK';
      case 'ios':
        return 'THEOplayer iOS & tvOS SDK';
      case 'react-native':
        return 'React Native THEOplayer';
      case 'chromecast':
        return 'THEOplayer Chromecast SDK';
      case 'roku':
        return 'THEOplayer Roku SDK';
      case 'flutter':
        return 'THEOplayer Flutter SDK';
    }
  } else if (docsPluginId === 'open-video-ui') {
    switch (platformName) {
      case 'web':
        return 'Open Video UI for Web';
      case 'android':
        return 'Open Video UI for Android';
      case 'react':
        return 'Open Video UI for React';
      case 'react-native':
        return 'React Native THEOplayer UI';
    }
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
