export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  gradient: string;
  intro: string[];
  facts: { label: string; value: string }[];
  neighborsLabel: string;
  neighbors: string[];
}

export const destinations: Destination[] = [
  {
    slug: "vietnam",
    name: "Vietnam",
    tagline: "Where the coast, the mountains and the old towns all sit within a day's drive of each other",
    gradient: "gradient-ocean",
    intro: [
      "Vietnam runs the full length of a coastline, from limestone bays in the north to river deltas in the south, with terraced highlands and centuries-old trading towns in between.",
      "It's a country that rewards slower travel, whether that's a few extra days in Hoi An, a detour into the highlands, or an early start for Ha Long Bay before the day boats arrive. We build every Vietnam itinerary around that kind of pacing.",
    ],
    facts: [
      { label: "Best time to visit", value: "November to April" },
      { label: "Currency", value: "Vietnamese Dong (VND)" },
      { label: "Language", value: "Vietnamese" },
      { label: "Time zone", value: "GMT+7" },
    ],
    neighborsLabel: "Borders",
    neighbors: ["China", "Laos", "Cambodia"],
  },
  {
    slug: "cambodia",
    name: "Cambodia",
    tagline: "Temple complexes at sunrise and a capital that moves at its own unhurried pace",
    gradient: "gradient-sand",
    intro: [
      "Cambodia is anchored by Angkor, the largest religious complex on earth, but there's far more to the country than its temples, from riverside Phnom Penh to quiet floating villages and a hospitality that's hard to overstate.",
      "We keep Cambodia itineraries private and unhurried, timed around sunrise at the temples and long lunches by the Mekong.",
    ],
    facts: [
      { label: "Best time to visit", value: "November to March" },
      { label: "Currency", value: "Cambodian Riel (USD widely accepted)" },
      { label: "Language", value: "Khmer" },
      { label: "Time zone", value: "GMT+7" },
    ],
    neighborsLabel: "Borders",
    neighbors: ["Thailand", "Laos", "Vietnam"],
  },
  {
    slug: "laos",
    name: "Laos",
    tagline: "Slow mornings on the Mekong and a spiritual capital that hasn't rushed anywhere in centuries",
    gradient: "gradient-forest",
    intro: [
      "Laos is the least visited of its neighbors, and that's exactly its appeal. Quiet riverside towns, saffron-robed monks at dawn, and a pace of life set by the Mekong rather than a clock.",
      "Luang Prabang is the natural centerpiece of most trips here, but we also build in time along the river itself, away from any fixed itinerary.",
    ],
    facts: [
      { label: "Best time to visit", value: "November to March" },
      { label: "Currency", value: "Lao Kip (LAK)" },
      { label: "Language", value: "Lao" },
      { label: "Time zone", value: "GMT+7" },
    ],
    neighborsLabel: "Borders",
    neighbors: ["Vietnam", "Thailand", "Cambodia"],
  },
  {
    slug: "japan",
    name: "Japan",
    tagline: "Temples and tea houses in the same week as bullet trains and neon-lit crossings",
    gradient: "gradient-sunset",
    intro: [
      "Japan holds tradition and modern life closer together than almost anywhere else, with a tea ceremony in the morning and a shinkansen in the afternoon. Every region has its own character, from Kyoto's temple gardens to Hakone's hot springs.",
      "We time most Japan trips around the seasons themselves, whether that's cherry blossoms in spring or the maple color of autumn.",
    ],
    facts: [
      { label: "Best time to visit", value: "March–April & October–November" },
      { label: "Currency", value: "Japanese Yen (JPY)" },
      { label: "Language", value: "Japanese" },
      { label: "Time zone", value: "GMT+9" },
    ],
    neighborsLabel: "Nearest neighbors",
    neighbors: ["South Korea", "China", "Taiwan"],
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
