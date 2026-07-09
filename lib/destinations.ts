import { loc, type Localized } from "./i18n";

export interface Destination {
  slug: string;
  name: Localized;
  tagline: Localized;
  gradient: string;
  intro: Localized[];
  facts: { label: Localized; value: Localized }[];
  neighborsLabel: Localized;
  neighbors: Localized[];
}

export const destinations: Destination[] = [
  {
    slug: "vietnam",
    name: loc("Vietnam", "Việt Nam"),
    tagline: loc(
      "Where the coast, the mountains and the old towns all sit within a day's drive of each other",
      "Nơi bờ biển, núi non và phố cổ đều chỉ cách nhau một ngày đường"
    ),
    gradient: "gradient-ocean",
    intro: [
      loc(
        "Vietnam runs the full length of a coastline, from limestone bays in the north to river deltas in the south, with terraced highlands and centuries-old trading towns in between.",
        "Việt Nam trải dài suốt một bờ biển, từ những vịnh đá vôi ở phía bắc đến vùng đồng bằng sông nước ở phía nam, xen giữa là cao nguyên ruộng bậc thang và những phố cổ giao thương hàng trăm năm tuổi."
      ),
      loc(
        "It's a country that rewards slower travel, whether that's a few extra days in Hoi An, a detour into the highlands, or an early start for Ha Long Bay before the day boats arrive. We build every Vietnam itinerary around that kind of pacing.",
        "Đây là đất nước xứng đáng để bạn đi chậm lại, dù đó là thêm vài ngày ở Hội An, một chuyến rẽ lên cao nguyên, hay khởi hành sớm đến Vịnh Hạ Long trước khi tàu du lịch đông đúc. Chúng tôi xây dựng mọi hành trình Việt Nam theo đúng nhịp độ đó."
      ),
    ],
    facts: [
      { label: loc("Best time to visit", "Thời điểm lý tưởng"), value: loc("November to April", "Tháng 11 đến tháng 4") },
      { label: loc("Currency", "Tiền tệ"), value: loc("Vietnamese Dong (VND)", "Việt Nam Đồng (VND)") },
      { label: loc("Language", "Ngôn ngữ"), value: loc("Vietnamese", "Tiếng Việt") },
      { label: loc("Time zone", "Múi giờ"), value: loc("GMT+7", "GMT+7") },
    ],
    neighborsLabel: loc("Borders", "Giáp ranh"),
    neighbors: [loc("China", "Trung Quốc"), loc("Laos", "Lào"), loc("Cambodia", "Campuchia")],
  },
  {
    slug: "cambodia",
    name: loc("Cambodia", "Campuchia"),
    tagline: loc(
      "Temple complexes at sunrise and a capital that moves at its own unhurried pace",
      "Quần thể đền đài lúc bình minh và một thủ đô luôn giữ nhịp sống thong thả của riêng mình"
    ),
    gradient: "gradient-sand",
    intro: [
      loc(
        "Cambodia is anchored by Angkor, the largest religious complex on earth, but there's far more to the country than its temples, from riverside Phnom Penh to quiet floating villages and a hospitality that's hard to overstate.",
        "Campuchia gắn liền với Angkor, quần thể tôn giáo lớn nhất thế giới, nhưng đất nước này còn nhiều hơn thế, từ Phnom Penh ven sông đến những làng nổi yên bình và lòng hiếu khách khó nơi nào sánh được."
      ),
      loc(
        "We keep Cambodia itineraries private and unhurried, timed around sunrise at the temples and long lunches by the Mekong.",
        "Chúng tôi giữ hành trình Campuchia riêng tư và thong thả, canh đúng giờ bình minh tại các ngôi đền và những bữa trưa dài bên sông Mekong."
      ),
    ],
    facts: [
      { label: loc("Best time to visit", "Thời điểm lý tưởng"), value: loc("November to March", "Tháng 11 đến tháng 3") },
      { label: loc("Currency", "Tiền tệ"), value: loc("Cambodian Riel (USD widely accepted)", "Riel Campuchia (USD được chấp nhận rộng rãi)") },
      { label: loc("Language", "Ngôn ngữ"), value: loc("Khmer", "Tiếng Khmer") },
      { label: loc("Time zone", "Múi giờ"), value: loc("GMT+7", "GMT+7") },
    ],
    neighborsLabel: loc("Borders", "Giáp ranh"),
    neighbors: [loc("Thailand", "Thái Lan"), loc("Laos", "Lào"), loc("Vietnam", "Việt Nam")],
  },
  {
    slug: "laos",
    name: loc("Laos", "Lào"),
    tagline: loc(
      "Slow mornings on the Mekong and a spiritual capital that hasn't rushed anywhere in centuries",
      "Những buổi sáng chậm rãi bên sông Mekong và một thủ phủ tâm linh chưa từng vội vã suốt hàng thế kỷ"
    ),
    gradient: "gradient-forest",
    intro: [
      loc(
        "Laos is the least visited of its neighbors, and that's exactly its appeal. Quiet riverside towns, saffron-robed monks at dawn, and a pace of life set by the Mekong rather than a clock.",
        "Lào là nơi ít du khách ghé thăm nhất trong khu vực, và đó chính là sức hút của nó. Những thị trấn ven sông yên bình, các nhà sư áo vàng nghệ lúc bình minh, và nhịp sống được đặt theo dòng Mekong chứ không phải đồng hồ."
      ),
      loc(
        "Luang Prabang is the natural centerpiece of most trips here, but we also build in time along the river itself, away from any fixed itinerary.",
        "Luang Prabang là điểm nhấn tự nhiên của hầu hết các chuyến đi tại đây, nhưng chúng tôi cũng dành thời gian dọc theo dòng sông, tách khỏi mọi lịch trình cố định."
      ),
    ],
    facts: [
      { label: loc("Best time to visit", "Thời điểm lý tưởng"), value: loc("November to March", "Tháng 11 đến tháng 3") },
      { label: loc("Currency", "Tiền tệ"), value: loc("Lao Kip (LAK)", "Kip Lào (LAK)") },
      { label: loc("Language", "Ngôn ngữ"), value: loc("Lao", "Tiếng Lào") },
      { label: loc("Time zone", "Múi giờ"), value: loc("GMT+7", "GMT+7") },
    ],
    neighborsLabel: loc("Borders", "Giáp ranh"),
    neighbors: [loc("Vietnam", "Việt Nam"), loc("Thailand", "Thái Lan"), loc("Cambodia", "Campuchia")],
  },
  {
    slug: "japan",
    name: loc("Japan", "Nhật Bản"),
    tagline: loc(
      "Temples and tea houses in the same week as bullet trains and neon-lit crossings",
      "Đền chùa và trà thất trong cùng một tuần với tàu cao tốc và những giao lộ rực ánh đèn neon"
    ),
    gradient: "gradient-sunset",
    intro: [
      loc(
        "Japan holds tradition and modern life closer together than almost anywhere else, with a tea ceremony in the morning and a shinkansen in the afternoon. Every region has its own character, from Kyoto's temple gardens to Hakone's hot springs.",
        "Nhật Bản gắn kết truyền thống và đời sống hiện đại gần nhau hơn bất kỳ nơi nào khác, với một buổi trà đạo vào buổi sáng và chuyến tàu shinkansen vào buổi chiều. Mỗi vùng miền đều mang bản sắc riêng, từ những khu vườn đền chùa Kyoto đến suối nước nóng Hakone."
      ),
      loc(
        "We time most Japan trips around the seasons themselves, whether that's cherry blossoms in spring or the maple color of autumn.",
        "Chúng tôi sắp xếp hầu hết các chuyến đi Nhật Bản theo đúng mùa, dù đó là hoa anh đào mùa xuân hay sắc lá phong mùa thu."
      ),
    ],
    facts: [
      { label: loc("Best time to visit", "Thời điểm lý tưởng"), value: loc("March–April & October–November", "Tháng 3–4 & Tháng 10–11") },
      { label: loc("Currency", "Tiền tệ"), value: loc("Japanese Yen (JPY)", "Yên Nhật (JPY)") },
      { label: loc("Language", "Ngôn ngữ"), value: loc("Japanese", "Tiếng Nhật") },
      { label: loc("Time zone", "Múi giờ"), value: loc("GMT+9", "GMT+9") },
    ],
    neighborsLabel: loc("Nearest neighbors", "Các nước lân cận"),
    neighbors: [loc("South Korea", "Hàn Quốc"), loc("China", "Trung Quốc"), loc("Taiwan", "Đài Loan")],
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
