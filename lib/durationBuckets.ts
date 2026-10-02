import { loc, type Localized } from "./i18n";

export interface DurationBucket {
  key: string;
  min: number;
  max: number;
  label: Localized;
}

export const DURATION_BUCKETS: DurationBucket[] = [
  { key: "1-1", min: 1, max: 1, label: loc("1 Day", "1 Ngày") },
  { key: "2-5", min: 2, max: 5, label: loc("2 - 5 Days", "2 - 5 Ngày") },
  { key: "6-10", min: 6, max: 10, label: loc("6 - 10 Days", "6 - 10 Ngày") },
  { key: "11-99", min: 11, max: 99, label: loc("11+ Days", "11+ Ngày") },
];

export function getDurationBucket(key: string): DurationBucket | undefined {
  return DURATION_BUCKETS.find((b) => b.key === key);
}

export function parseDurationRange(param: string): { min: number; max: number } | null {
  const bucket = getDurationBucket(param);
  if (bucket) return { min: bucket.min, max: bucket.max };

  const match = /^(\d+)-(\d+)$/.exec(param);
  if (!match) return null;
  return { min: Number(match[1]), max: Number(match[2]) };
}
