import { loc, type Localized } from "./i18n";

// The full set of tour "styles" used across the catalog (tour.category).
// Kept centralized here so the Travel Style filter and the tour data agree
// on the same stable, English-based keys regardless of the active locale.
export interface TravelStyle {
  key: string;
  label: Localized;
}

export const TRAVEL_STYLES: TravelStyle[] = [
  { key: "coastal", label: loc("Coastal", "Ven biển") },
  { key: "cultural", label: loc("Cultural", "Văn hóa") },
  { key: "nature", label: loc("Nature", "Thiên nhiên") },
  { key: "adventure", label: loc("Adventure", "Mạo hiểm") },
  { key: "family", label: loc("Family", "Gia đình") },
  { key: "culinary", label: loc("Culinary", "Ẩm thực") },
  { key: "mountain", label: loc("Mountain", "Núi non") },
  { key: "safari", label: loc("Safari", "Safari") },
  { key: "wellness", label: loc("Wellness", "Chăm sóc sức khỏe") },
];

// Turns a tour's English category text (e.g. "Coastal") into the stable key
// used in the ?style= query param and in TRAVEL_STYLES above.
export function toStyleKey(categoryEn: string): string {
  return categoryEn.trim().toLowerCase().replace(/\s+/g, "-");
}

export function getTravelStyle(key: string): TravelStyle | undefined {
  return TRAVEL_STYLES.find((s) => s.key === key);
}
