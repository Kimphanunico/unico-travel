export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface Tour {
  slug: string;
  title: string;
  location: string;
  category: string;
  duration: string;
  price: string;
  groupSize: string;
  gradient: string;
  summary: string;
  description: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
}

export const tours: Tour[] = [
  {
    slug: "vietnam-coastal-explorer",
    title: "Vietnam Coastal Explorer",
    location: "Da Nang, Hoi An & Ha Long Bay, Vietnam",
    category: "Coastal",
    duration: "9 days / 8 nights",
    price: "$1,890",
    groupSize: "6 - 12 travelers",
    gradient: "gradient-ocean",
    summary:
      "Lantern-lit old towns, limestone karsts, and some of the best coastal cuisine in Southeast Asia.",
    description: [
      "Trace Vietnam's coastline from the ancient trading port of Hoi An to the dramatic karsts of Ha Long Bay. This trip balances culture, cuisine, and quiet coastal downtime.",
      "You'll cook with local families, cruise past limestone islands at sunset, and wander streets strung with silk lanterns.",
    ],
    highlights: [
      "Overnight cruise through Ha Long Bay",
      "Private cooking class in Hoi An",
      "Sunrise cycling tour through rice paddies",
      "Free day to explore Da Nang's beaches",
    ],
    itinerary: [
      { day: "Day 1-2", title: "Arrive in Da Nang", description: "Settle in beachside, welcome dinner with the group." },
      { day: "Day 3-5", title: "Hoi An Ancient Town", description: "Lantern markets, tailor visits, cooking class, cycling tour." },
      { day: "Day 6-7", title: "Ha Long Bay Cruise", description: "Overnight boat, kayaking, cave exploration." },
      { day: "Day 8-9", title: "Hanoi & Departure", description: "Old Quarter walking tour, farewell dinner, departure." },
    ],
    includes: ["Accommodation", "Daily breakfast", "Airport transfers", "Local guide", "Ha Long Bay cruise"],
    excludes: ["International flights", "Travel insurance", "Personal expenses"],
  },
  {
    slug: "japan-cherry-blossom-journey",
    title: "Japan Cherry Blossom Journey",
    location: "Tokyo, Kyoto & Hakone, Japan",
    category: "Cultural",
    duration: "10 days / 9 nights",
    price: "$3,250",
    groupSize: "6 - 10 travelers",
    gradient: "gradient-sunset",
    summary:
      "Temples, tea ceremonies, and blossom-lined streets timed to Japan's most photogenic season.",
    description: [
      "This spring itinerary follows the bloom from Tokyo's parks to Kyoto's temple gardens, with a soak in Hakone's hot springs along the way.",
      "Small-group access to a traditional tea ceremony and a private ryokan stay make this a trip of quiet, considered moments.",
    ],
    highlights: [
      "Private tea ceremony in Kyoto",
      "Ryokan stay with onsen access",
      "Shinkansen bullet train experience",
      "Blossom viewing at Maruyama Park",
    ],
    itinerary: [
      { day: "Day 1-3", title: "Tokyo", description: "Shibuya, Asakusa, Meiji Shrine, sushi-making class." },
      { day: "Day 4-5", title: "Hakone", description: "Mt. Fuji views, ryokan stay, hot spring bathing." },
      { day: "Day 6-9", title: "Kyoto", description: "Fushimi Inari, Arashiyama bamboo grove, tea ceremony." },
      { day: "Day 10", title: "Departure", description: "Transfer to Osaka for international flights." },
    ],
    includes: ["Accommodation", "Daily breakfast", "Rail passes", "Local guide", "Tea ceremony"],
    excludes: ["International flights", "Travel insurance", "Some dinners"],
  },
  {
    slug: "swiss-alps-adventure",
    title: "Swiss Alps Adventure",
    location: "Interlaken, Zermatt & Lucerne, Switzerland",
    category: "Mountain",
    duration: "8 days / 7 nights",
    price: "$4,100",
    groupSize: "4 - 10 travelers",
    gradient: "gradient-snow",
    summary:
      "Alpine trains, glacier hikes, and lakeside towns beneath the Matterhorn.",
    description: [
      "A trip built for those who want their mountain views earned — with cable cars, scenic rail, and moderate hiking through some of Europe's most dramatic terrain.",
      "Evenings unwind in wood-paneled chalets and lakeside towns with fondue and clear mountain air.",
    ],
    highlights: [
      "Cable car up the Schilthorn",
      "Glacier Express scenic rail",
      "Guided hike beneath the Matterhorn",
      "Lake cruise on Lake Lucerne",
    ],
    itinerary: [
      { day: "Day 1-2", title: "Lucerne", description: "Old town walk, lake cruise, chapel bridge." },
      { day: "Day 3-4", title: "Interlaken", description: "Schilthorn cable car, adventure sports options." },
      { day: "Day 5-7", title: "Zermatt", description: "Matterhorn hikes, Gornergrat railway, glacier views." },
      { day: "Day 8", title: "Departure", description: "Return to Zurich for international flights." },
    ],
    includes: ["Accommodation", "Daily breakfast", "Rail passes", "Local guide", "Cable car tickets"],
    excludes: ["International flights", "Travel insurance", "Lunches & dinners"],
  },
  {
    slug: "tanzania-safari-escape",
    title: "Tanzania Safari Escape",
    location: "Serengeti & Ngorongoro Crater, Tanzania",
    category: "Safari",
    duration: "7 days / 6 nights",
    price: "$3,780",
    groupSize: "4 - 8 travelers",
    gradient: "gradient-sand",
    summary:
      "Big-five game drives across the Serengeti plains and the Ngorongoro Crater floor.",
    description: [
      "Small open-vehicle game drives led by expert local guides, staying in tented camps positioned for the best wildlife access.",
      "Timed for strong wildlife viewing, with flexibility built in for the migration when it's in range.",
    ],
    highlights: [
      "Big-five game drives",
      "Ngorongoro Crater descent",
      "Maasai village cultural visit",
      "Sundowner drinks on the savanna",
    ],
    itinerary: [
      { day: "Day 1-2", title: "Arusha & Tarangire", description: "Arrival, first game drive, tented camp." },
      { day: "Day 3-4", title: "Serengeti", description: "Full-day game drives, sunrise safari." },
      { day: "Day 5-6", title: "Ngorongoro Crater", description: "Crater floor game drive, Maasai village visit." },
      { day: "Day 7", title: "Departure", description: "Transfer to Kilimanjaro International Airport." },
    ],
    includes: ["Tented camp accommodation", "All meals on safari", "4x4 game drives", "Park fees", "Local guide"],
    excludes: ["International flights", "Travel insurance", "Visa fees"],
  },
  {
    slug: "bali-wellness-retreat",
    title: "Bali Wellness Retreat",
    location: "Ubud & Uluwatu, Bali, Indonesia",
    category: "Wellness",
    duration: "6 days / 5 nights",
    price: "$1,450",
    groupSize: "8 - 14 travelers",
    gradient: "gradient-forest",
    summary:
      "Rice-terrace yoga, cliffside temples, and slow mornings by the pool.",
    description: [
      "A softer pace built around daily yoga, plant-based meals, and time in Bali's jungle interior before a few days unwinding on the Uluwatu coast.",
      "Optional add-ons include a traditional healer visit and a sunrise volcano trek for those who want it.",
    ],
    highlights: [
      "Daily sunrise yoga overlooking rice terraces",
      "Traditional Balinese healing session",
      "Cliffside sunset at Uluwatu Temple",
      "Plant-based cooking class",
    ],
    itinerary: [
      { day: "Day 1-3", title: "Ubud", description: "Rice terrace yoga, waterfall visit, healer session." },
      { day: "Day 4-5", title: "Uluwatu", description: "Cliffside resort, surf lessons optional, temple sunset." },
      { day: "Day 6", title: "Departure", description: "Transfer to Denpasar for international flights." },
    ],
    includes: ["Accommodation", "Daily yoga", "Most meals", "Local guide", "Airport transfers"],
    excludes: ["International flights", "Travel insurance", "Spa treatments"],
  },
  {
    slug: "iceland-northern-lights-expedition",
    title: "Iceland Northern Lights Expedition",
    location: "Reykjavik & South Coast, Iceland",
    category: "Adventure",
    duration: "6 days / 5 nights",
    price: "$2,690",
    groupSize: "6 - 12 travelers",
    gradient: "gradient-dusk",
    summary:
      "Glacier lagoons, black sand beaches, and nightly aurora chasing.",
    description: [
      "A compact, high-impact loop of Iceland's south coast — waterfalls, glacier lagoons, and geothermal spas by day, aurora hunting by night with a photography guide.",
      "Small-group 4x4 transport keeps the itinerary flexible around weather and light conditions.",
    ],
    highlights: [
      "Nightly aurora chasing with a photography guide",
      "Jokulsarlon glacier lagoon boat trip",
      "Black sand beaches of Vik",
      "Blue Lagoon geothermal spa",
    ],
    itinerary: [
      { day: "Day 1-2", title: "Reykjavik", description: "City walk, Golden Circle day trip." },
      { day: "Day 3-4", title: "South Coast", description: "Waterfalls, black sand beaches, glacier lagoon." },
      { day: "Day 5", title: "Blue Lagoon", description: "Geothermal spa, farewell dinner." },
      { day: "Day 6", title: "Departure", description: "Transfer to Keflavik International Airport." },
    ],
    includes: ["Accommodation", "Daily breakfast", "4x4 transport", "Local guide", "Blue Lagoon entry"],
    excludes: ["International flights", "Travel insurance", "Some dinners"],
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug);
}
