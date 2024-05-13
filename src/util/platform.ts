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
