import React, { type JSX } from 'react';
import styles from '../shared.module.css';

export interface TimeRange {
  start: number;
  end: number;
}

interface RangeBarProps {
  label: string;
  ranges: TimeRange[];
  start: number;
  end: number;
  color: string;
  currentTime?: number;
}

export default function RangeBar({ label, ranges, start, end, color, currentTime }: RangeBarProps): JSX.Element {
  const windowDuration = end - start;
  const isValidWindow = Number.isFinite(start) && Number.isFinite(end) && windowDuration > 0;
  const playheadPosition =
    isValidWindow && currentTime !== undefined && Number.isFinite(currentTime)
      ? Math.max(0, Math.min(100, ((currentTime - start) / windowDuration) * 100))
      : null;

  return (
    <div className={styles.rangeRow}>
      <div className={styles.rangeLabel}>
        <strong>{label}</strong>
      </div>
      <div className={styles.rangeBar}>
        {isValidWindow &&
          ranges.map((range, index) => {
            if (!Number.isFinite(range.start) || !Number.isFinite(range.end)) return null;
            const segmentStart = Math.max(start, range.start);
            const segmentEnd = Math.min(end, range.end);
            if (segmentEnd <= segmentStart) return null;
            return (
              <span
                key={`${segmentStart}-${index}`}
                className={styles.rangeSegment}
                style={{
                  left: `${((segmentStart - start) / windowDuration) * 100}%`,
                  width: `${((segmentEnd - segmentStart) / windowDuration) * 100}%`,
                  backgroundColor: color,
                }}
              />
            );
          })}
        {playheadPosition !== null && <span className={styles.rangePlayhead} style={{ left: `${playheadPosition}%` }} />}
      </div>
    </div>
  );
}
