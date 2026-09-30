export interface QualityInfo {
  id?: string;
  width?: number;
  height?: number;
  bandwidth?: number;
  frameRate?: number;
}

export function formatBandwidth(bandwidth: number | undefined): string {
  if (bandwidth === undefined || !isFinite(bandwidth)) return '-';
  if (bandwidth >= 1e6) return `${(bandwidth / 1e6).toFixed(2)} Mbps`;
  return `${Math.round(bandwidth / 1e3)} kbps`;
}

export function formatQuality(quality: QualityInfo | undefined): string {
  if (!quality) return '-';
  const resolution = quality.width && quality.height ? `${quality.width}×${quality.height}` : quality.height ? `${quality.height}p` : '?';
  return `${resolution} (${formatBandwidth(quality.bandwidth)})`;
}
