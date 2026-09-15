import { loc, type Localized } from "./i18n";

export interface MapStat {
  value: string;
  label: Localized;
}

export interface MapMarker {
  name: Localized;
  x: number;
  y: number;
}

export interface Destination {
  slug: string;
  name: Localized;
  tagline: Localized;
  gradient: string;
  video?: string;
  videoPoster?: string;
  intro: Localized[];
  facts: { label: Localized; value: Localized }[];
  neighborsLabel: Localized;
  neighbors: Localized[];
  mapStats?: MapStat[];
  mapCities?: MapMarker[];
  mapImage?: string;
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
    video: "/videos/vietnam-hero.mp4",
    videoPoster: "/videos/vietnam-hero-poster.jpg",
    intro: [
      loc(
        "Vietnam reaches the senses before it reaches an itinerary: golden rice terraces cut into the hillsides, limestone islands rising out of jade-green water, lantern light spilling across centuries-old trading streets at dusk. It's a country of striking contrast, from the misty highlands of the north to the sun-warmed river deltas of the south.",
        "Việt Nam chạm đến các giác quan trước cả khi chạm đến lịch trình: những thửa ruộng bậc thang vàng óng trên sườn núi, những hòn đảo đá vôi vươn lên giữa làn nước xanh ngọc, ánh đèn lồng trải dài trên những con phố cổ mỗi khi chiều buông. Đây là đất nước của những tương phản đầy cuốn hút, từ cao nguyên sương mù phía bắc đến vùng đồng bằng sông nước ấm áp phía nam."
      ),
      loc(
        "What stays with travelers longest usually isn't the sights, it's the warmth: a bowl of pho shared with strangers, a fisherman's wave from a bamboo boat, a grandmother's smile at a village market. We build every Vietnam itinerary to leave room for those unplanned moments, not just the landmarks.",
        "Điều đọng lại lâu nhất với du khách thường không phải là cảnh đẹp, mà là sự ấm áp: một tô phở sẻ chia cùng người lạ, cái vẫy tay của ngư dân trên chiếc thuyền tre, nụ cười của một cụ bà nơi phiên chợ làng. Chúng tôi xây dựng mọi hành trình Việt Nam để luôn dành chỗ cho những khoảnh khắc bất ngờ ấy, chứ không chỉ là các điểm tham quan."
      ),
    ],
    facts: [
      { label: loc("Best time to visit", "Thời điểm lý tưởng"), value: loc("November to April", "Tháng 11 đến tháng 4") },
      { label: loc("Population", "Dân số"), value: loc("About 102 million", "Khoảng 102 triệu người") },
      { label: loc("Capital", "Thủ đô"), value: loc("Hanoi", "Hà Nội") },
      { label: loc("People", "Dân tộc"), value: loc("54 ethnic groups", "54 dân tộc anh em") },
      { label: loc("Language", "Ngôn ngữ"), value: loc("Vietnamese", "Tiếng Việt") },
      { label: loc("Currency", "Tiền tệ"), value: loc("Vietnamese Dong (VND)", "Việt Nam Đồng (VND)") },
      { label: loc("Time zone", "Múi giờ"), value: loc("GMT+7", "GMT+7") },
      { label: loc("Dialing code", "Mã vùng điện thoại"), value: loc("+84", "+84") },
    ],
    neighborsLabel: loc("Borders", "Giáp ranh"),
    neighbors: [loc("China", "Trung Quốc"), loc("Laos", "Lào"), loc("Cambodia", "Campuchia")],
    mapStats: [
      { value: "8", label: loc("UNESCO World Heritage Sites", "Di sản Thế giới UNESCO") },
      { value: "54", label: loc("Ethnic groups", "Dân tộc anh em") },
      { value: "34", label: loc("Provinces & cities", "Tỉnh, thành phố") },
    ],
    mapCities: [
      { name: loc("Da Nang", "Đà Nẵng"), x: 87, y: 205 },
      { name: loc("Ho Chi Minh City", "TP. Hồ Chí Minh"), x: 100, y: 345 },
    ],
    mapImage: "/images/vietnam-map.png",
  },
  {
    slug: "cambodia",
    name: loc("Cambodia", "Campuchia"),
    tagline: loc(
      "Temple complexes at sunrise and a capital that moves at its own unhurried pace",
      "Quần thể đền đài lúc bình minh và một thủ đô luôn giữ nhịp sống thong thả của riêng mình"
    ),
    gradient: "gradient-sand",
    video: "/videos/cambodia-hero.mp4",
    videoPoster: "/videos/cambodia-hero-poster.jpg",
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
    video: "/videos/japan-hero.mp4",
    videoPoster: "/videos/japan-hero-poster.jpg",
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
