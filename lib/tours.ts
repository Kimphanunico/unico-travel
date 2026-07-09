import { loc, type Localized } from "./i18n";

export interface ItineraryDay {
  day: Localized;
  title: Localized;
  description: Localized;
}

export interface Tour {
  slug: string;
  title: Localized;
  location: Localized;
  category: Localized;
  country: string;
  serviceType: string;
  duration: Localized;
  price: string;
  groupSize: Localized;
  gradient: string;
  summary: Localized;
  description: Localized[];
  highlights: Localized[];
  itinerary: ItineraryDay[];
  includes: Localized[];
  excludes: Localized[];
}

export const tours: Tour[] = [
  {
    slug: "vietnam-coastal-explorer",
    title: loc("Vietnam Coastal Explorer", "Khám Phá Duyên Hải Việt Nam"),
    location: loc(
      "Da Nang, Hoi An & Ha Long Bay, Vietnam",
      "Đà Nẵng, Hội An & Vịnh Hạ Long, Việt Nam"
    ),
    category: loc("Coastal", "Ven biển"),
    country: "vietnam",
    serviceType: "group",
    duration: loc("9 days / 8 nights", "9 ngày / 8 đêm"),
    price: "$1,890",
    groupSize: loc("6 - 12 travelers", "6 - 12 khách"),
    gradient: "gradient-ocean",
    summary: loc(
      "Lantern-lit old towns, limestone karsts, and some of the best coastal cuisine in Southeast Asia.",
      "Phố cổ rực ánh đèn lồng, núi đá vôi kỳ vĩ và ẩm thực ven biển hàng đầu Đông Nam Á."
    ),
    description: [
      loc(
        "Trace Vietnam's coastline from the ancient trading port of Hoi An to the dramatic karsts of Ha Long Bay. This trip balances culture, cuisine, and quiet coastal downtime.",
        "Hành trình dọc theo bờ biển Việt Nam, từ thương cảng cổ Hội An đến dãy núi đá vôi kỳ vĩ của Vịnh Hạ Long, cân bằng giữa văn hóa, ẩm thực và những khoảng lặng ven biển."
      ),
      loc(
        "You'll cook with local families, cruise past limestone islands at sunset, and wander streets strung with silk lanterns.",
        "Bạn sẽ cùng nấu ăn với các gia đình địa phương, du thuyền ngắm hoàng hôn qua những hòn đảo đá vôi, và dạo bước trên những con phố treo đầy đèn lồng lụa."
      ),
    ],
    highlights: [
      loc("Overnight cruise through Ha Long Bay", "Du thuyền qua đêm trên Vịnh Hạ Long"),
      loc("Private cooking class in Hoi An", "Lớp học nấu ăn riêng tại Hội An"),
      loc("Sunrise cycling tour through rice paddies", "Đạp xe ngắm bình minh qua cánh đồng lúa"),
      loc("Free day to explore Da Nang's beaches", "Một ngày tự do khám phá biển Đà Nẵng"),
    ],
    itinerary: [
      { day: loc("Day 1-2", "Ngày 1-2"), title: loc("Arrive in Da Nang", "Đến Đà Nẵng"), description: loc("Settle in beachside, welcome dinner with the group.", "Nhận phòng ven biển, dùng bữa tối chào mừng cùng đoàn.") },
      { day: loc("Day 3-5", "Ngày 3-5"), title: loc("Hoi An Ancient Town", "Phố cổ Hội An"), description: loc("Lantern markets, tailor visits, cooking class, cycling tour.", "Chợ đèn lồng, may đo, lớp nấu ăn, đạp xe tham quan.") },
      { day: loc("Day 6-7", "Ngày 6-7"), title: loc("Ha Long Bay Cruise", "Du thuyền Vịnh Hạ Long"), description: loc("Overnight boat, kayaking, cave exploration.", "Ngủ đêm trên thuyền, chèo kayak, khám phá hang động.") },
      { day: loc("Day 8-9", "Ngày 8-9"), title: loc("Hanoi & Departure", "Hà Nội & Khởi hành"), description: loc("Old Quarter walking tour, farewell dinner, departure.", "Dạo bộ Phố Cổ, tiệc chia tay, khởi hành.") },
    ],
    includes: [
      loc("Accommodation", "Chỗ nghỉ"),
      loc("Daily breakfast", "Ăn sáng hàng ngày"),
      loc("Airport transfers", "Đưa đón sân bay"),
      loc("Local guide", "Hướng dẫn viên địa phương"),
      loc("Ha Long Bay cruise", "Du thuyền Vịnh Hạ Long"),
    ],
    excludes: [
      loc("International flights", "Vé máy bay quốc tế"),
      loc("Travel insurance", "Bảo hiểm du lịch"),
      loc("Personal expenses", "Chi tiêu cá nhân"),
    ],
  },
  {
    slug: "japan-cherry-blossom-journey",
    title: loc("Japan Cherry Blossom Journey", "Hành Trình Hoa Anh Đào Nhật Bản"),
    location: loc("Tokyo, Kyoto & Hakone, Japan", "Tokyo, Kyoto & Hakone, Nhật Bản"),
    category: loc("Cultural", "Văn hóa"),
    country: "japan",
    serviceType: "luxury",
    duration: loc("10 days / 9 nights", "10 ngày / 9 đêm"),
    price: "$3,250",
    groupSize: loc("6 - 10 travelers", "6 - 10 khách"),
    gradient: "gradient-sunset",
    summary: loc(
      "Temples, tea ceremonies, and blossom-lined streets timed to Japan's most photogenic season.",
      "Đền chùa, trà đạo và những con phố hoa anh đào nở rộ đúng mùa đẹp nhất của Nhật Bản."
    ),
    description: [
      loc(
        "This spring itinerary follows the bloom from Tokyo's parks to Kyoto's temple gardens, with a soak in Hakone's hot springs along the way.",
        "Hành trình mùa xuân này theo dấu hoa nở từ các công viên Tokyo đến những khu vườn đền chùa Kyoto, dừng chân ngâm mình tại suối nước nóng Hakone."
      ),
      loc(
        "Small-group access to a traditional tea ceremony and a private ryokan stay make this a trip of quiet, considered moments.",
        "Nhóm nhỏ được tham gia một buổi trà đạo truyền thống và nghỉ đêm riêng tư tại ryokan, mang đến một hành trình đầy những khoảnh khắc lắng đọng, tinh tế."
      ),
    ],
    highlights: [
      loc("Private tea ceremony in Kyoto", "Trà đạo riêng tại Kyoto"),
      loc("Ryokan stay with onsen access", "Nghỉ tại ryokan có suối nước nóng onsen"),
      loc("Shinkansen bullet train experience", "Trải nghiệm tàu cao tốc Shinkansen"),
      loc("Blossom viewing at Maruyama Park", "Ngắm hoa anh đào tại công viên Maruyama"),
    ],
    itinerary: [
      { day: loc("Day 1-3", "Ngày 1-3"), title: loc("Tokyo", "Tokyo"), description: loc("Shibuya, Asakusa, Meiji Shrine, sushi-making class.", "Shibuya, Asakusa, đền Meiji, lớp học làm sushi.") },
      { day: loc("Day 4-5", "Ngày 4-5"), title: loc("Hakone", "Hakone"), description: loc("Mt. Fuji views, ryokan stay, hot spring bathing.", "Ngắm núi Phú Sĩ, nghỉ tại ryokan, tắm suối nước nóng.") },
      { day: loc("Day 6-9", "Ngày 6-9"), title: loc("Kyoto", "Kyoto"), description: loc("Fushimi Inari, Arashiyama bamboo grove, tea ceremony.", "Đền Fushimi Inari, rừng tre Arashiyama, trà đạo.") },
      { day: loc("Day 10", "Ngày 10"), title: loc("Departure", "Khởi hành"), description: loc("Transfer to Osaka for international flights.", "Di chuyển đến Osaka để bay quốc tế.") },
    ],
    includes: [
      loc("Accommodation", "Chỗ nghỉ"),
      loc("Daily breakfast", "Ăn sáng hàng ngày"),
      loc("Rail passes", "Vé tàu"),
      loc("Local guide", "Hướng dẫn viên địa phương"),
      loc("Tea ceremony", "Trà đạo"),
    ],
    excludes: [
      loc("International flights", "Vé máy bay quốc tế"),
      loc("Travel insurance", "Bảo hiểm du lịch"),
      loc("Some dinners", "Một số bữa tối"),
    ],
  },
  {
    slug: "swiss-alps-adventure",
    title: loc("Swiss Alps Adventure", "Phiêu Lưu Dãy Alps Thụy Sĩ"),
    location: loc(
      "Interlaken, Zermatt & Lucerne, Switzerland",
      "Interlaken, Zermatt & Lucerne, Thụy Sĩ"
    ),
    category: loc("Mountain", "Núi non"),
    country: "switzerland",
    serviceType: "tailor-made",
    duration: loc("8 days / 7 nights", "8 ngày / 7 đêm"),
    price: "$4,100",
    groupSize: loc("4 - 10 travelers", "4 - 10 khách"),
    gradient: "gradient-snow",
    summary: loc(
      "Alpine trains, glacier hikes, and lakeside towns beneath the Matterhorn.",
      "Tàu hỏa xuyên núi Alps, leo núi băng và những thị trấn ven hồ dưới chân đỉnh Matterhorn."
    ),
    description: [
      loc(
        "A trip built for those who want their mountain views earned, with cable cars, scenic rail, and moderate hiking through some of Europe's most dramatic terrain.",
        "Hành trình dành cho ai muốn tự mình chinh phục cảnh núi non, với cáp treo, tuyến đường sắt ngắm cảnh và những cung leo núi vừa sức qua địa hình ấn tượng bậc nhất châu Âu."
      ),
      loc(
        "Evenings unwind in wood-paneled chalets and lakeside towns with fondue and clear mountain air.",
        "Buổi tối thư giãn trong những chalet gỗ ấm cúng và thị trấn ven hồ, thưởng thức fondue giữa không khí núi trong lành."
      ),
    ],
    highlights: [
      loc("Cable car up the Schilthorn", "Cáp treo lên đỉnh Schilthorn"),
      loc("Glacier Express scenic rail", "Tàu ngắm cảnh Glacier Express"),
      loc("Guided hike beneath the Matterhorn", "Leo núi có hướng dẫn dưới chân Matterhorn"),
      loc("Lake cruise on Lake Lucerne", "Du thuyền trên hồ Lucerne"),
    ],
    itinerary: [
      { day: loc("Day 1-2", "Ngày 1-2"), title: loc("Lucerne", "Lucerne"), description: loc("Old town walk, lake cruise, chapel bridge.", "Dạo phố cổ, du thuyền trên hồ, cầu nhà nguyện.") },
      { day: loc("Day 3-4", "Ngày 3-4"), title: loc("Interlaken", "Interlaken"), description: loc("Schilthorn cable car, adventure sports options.", "Cáp treo Schilthorn, lựa chọn thể thao mạo hiểm.") },
      { day: loc("Day 5-7", "Ngày 5-7"), title: loc("Zermatt", "Zermatt"), description: loc("Matterhorn hikes, Gornergrat railway, glacier views.", "Leo núi Matterhorn, tàu Gornergrat, ngắm sông băng.") },
      { day: loc("Day 8", "Ngày 8"), title: loc("Departure", "Khởi hành"), description: loc("Return to Zurich for international flights.", "Trở về Zurich để bay quốc tế.") },
    ],
    includes: [
      loc("Accommodation", "Chỗ nghỉ"),
      loc("Daily breakfast", "Ăn sáng hàng ngày"),
      loc("Rail passes", "Vé tàu"),
      loc("Local guide", "Hướng dẫn viên địa phương"),
      loc("Cable car tickets", "Vé cáp treo"),
    ],
    excludes: [
      loc("International flights", "Vé máy bay quốc tế"),
      loc("Travel insurance", "Bảo hiểm du lịch"),
      loc("Lunches & dinners", "Bữa trưa & bữa tối"),
    ],
  },
  {
    slug: "tanzania-safari-escape",
    title: loc("Tanzania Safari Escape", "Safari Trốn Tìm Tanzania"),
    location: loc(
      "Serengeti & Ngorongoro Crater, Tanzania",
      "Serengeti & Miệng Núi Lửa Ngorongoro, Tanzania"
    ),
    category: loc("Safari", "Safari"),
    country: "tanzania",
    serviceType: "luxury",
    duration: loc("7 days / 6 nights", "7 ngày / 6 đêm"),
    price: "$3,780",
    groupSize: loc("4 - 8 travelers", "4 - 8 khách"),
    gradient: "gradient-sand",
    summary: loc(
      "Big-five game drives across the Serengeti plains and the Ngorongoro Crater floor.",
      "Săn ảnh ngũ đại thú trên thảo nguyên Serengeti và đáy miệng núi lửa Ngorongoro."
    ),
    description: [
      loc(
        "Small open-vehicle game drives led by expert local guides, staying in tented camps positioned for the best wildlife access.",
        "Bạn sẽ di chuyển bằng xe mui trần nhỏ do hướng dẫn viên địa phương giàu kinh nghiệm dẫn dắt, nghỉ tại các trại lều được đặt ở những vị trí ngắm thú tốt nhất."
      ),
      loc(
        "Timed for strong wildlife viewing, with flexibility built in for the migration when it's in range.",
        "Lịch trình được sắp xếp đúng thời điểm để quan sát động vật tốt nhất, và có thể linh hoạt điều chỉnh nếu trùng mùa di cư."
      ),
    ],
    highlights: [
      loc("Big-five game drives", "Xe safari ngắm ngũ đại thú"),
      loc("Ngorongoro Crater descent", "Xuống đáy miệng núi lửa Ngorongoro"),
      loc("Maasai village cultural visit", "Thăm bản làng văn hóa Maasai"),
      loc("Sundowner drinks on the savanna", "Nhâm nhi đồ uống hoàng hôn trên thảo nguyên"),
    ],
    itinerary: [
      { day: loc("Day 1-2", "Ngày 1-2"), title: loc("Arusha & Tarangire", "Arusha & Tarangire"), description: loc("Arrival, first game drive, tented camp.", "Đến nơi, chuyến safari đầu tiên, nghỉ trại lều.") },
      { day: loc("Day 3-4", "Ngày 3-4"), title: loc("Serengeti", "Serengeti"), description: loc("Full-day game drives, sunrise safari.", "Safari trọn ngày, safari lúc bình minh.") },
      { day: loc("Day 5-6", "Ngày 5-6"), title: loc("Ngorongoro Crater", "Miệng núi lửa Ngorongoro"), description: loc("Crater floor game drive, Maasai village visit.", "Safari đáy miệng núi lửa, thăm bản Maasai.") },
      { day: loc("Day 7", "Ngày 7"), title: loc("Departure", "Khởi hành"), description: loc("Transfer to Kilimanjaro International Airport.", "Di chuyển đến sân bay quốc tế Kilimanjaro.") },
    ],
    includes: [
      loc("Tented camp accommodation", "Chỗ nghỉ trại lều"),
      loc("All meals on safari", "Toàn bộ bữa ăn trong chuyến safari"),
      loc("4x4 game drives", "Xe safari 4x4"),
      loc("Park fees", "Phí vào công viên"),
      loc("Local guide", "Hướng dẫn viên địa phương"),
    ],
    excludes: [
      loc("International flights", "Vé máy bay quốc tế"),
      loc("Travel insurance", "Bảo hiểm du lịch"),
      loc("Visa fees", "Phí visa"),
    ],
  },
  {
    slug: "bali-wellness-retreat",
    title: loc("Bali Wellness Retreat", "Nghỉ Dưỡng Chăm Sóc Sức Khỏe Bali"),
    location: loc("Ubud & Uluwatu, Bali, Indonesia", "Ubud & Uluwatu, Bali, Indonesia"),
    category: loc("Wellness", "Chăm sóc sức khỏe"),
    country: "indonesia",
    serviceType: "group",
    duration: loc("6 days / 5 nights", "6 ngày / 5 đêm"),
    price: "$1,450",
    groupSize: loc("8 - 14 travelers", "8 - 14 khách"),
    gradient: "gradient-forest",
    summary: loc(
      "Rice-terrace yoga, cliffside temples, and slow mornings by the pool.",
      "Yoga giữa ruộng bậc thang, đền thờ trên vách đá và những buổi sáng thư thái bên hồ bơi."
    ),
    description: [
      loc(
        "A softer pace built around daily yoga, plant-based meals, and time in Bali's jungle interior before a few days unwinding on the Uluwatu coast.",
        "Hành trình có nhịp độ nhẹ nhàng, xoay quanh yoga mỗi ngày, những bữa ăn thuần chay và thời gian hòa mình vào vùng rừng núi Bali, trước khi dành vài ngày thư giãn trên bờ biển Uluwatu."
      ),
      loc(
        "Optional add-ons include a traditional healer visit and a sunrise volcano trek for those who want it.",
        "Có thể thêm các hoạt động tùy chọn như thăm thầy chữa lành truyền thống hay leo núi lửa ngắm bình minh."
      ),
    ],
    highlights: [
      loc("Daily sunrise yoga overlooking rice terraces", "Yoga bình minh mỗi ngày ngắm ruộng bậc thang"),
      loc("Traditional Balinese healing session", "Buổi chữa lành truyền thống Bali"),
      loc("Cliffside sunset at Uluwatu Temple", "Ngắm hoàng hôn trên vách đá tại đền Uluwatu"),
      loc("Plant-based cooking class", "Lớp học nấu ăn thuần chay"),
    ],
    itinerary: [
      { day: loc("Day 1-3", "Ngày 1-3"), title: loc("Ubud", "Ubud"), description: loc("Rice terrace yoga, waterfall visit, healer session.", "Yoga ruộng bậc thang, thăm thác nước, buổi chữa lành.") },
      { day: loc("Day 4-5", "Ngày 4-5"), title: loc("Uluwatu", "Uluwatu"), description: loc("Cliffside resort, surf lessons optional, temple sunset.", "Resort trên vách đá, học lướt sóng tùy chọn, hoàng hôn tại đền.") },
      { day: loc("Day 6", "Ngày 6"), title: loc("Departure", "Khởi hành"), description: loc("Transfer to Denpasar for international flights.", "Di chuyển đến Denpasar để bay quốc tế.") },
    ],
    includes: [
      loc("Accommodation", "Chỗ nghỉ"),
      loc("Daily yoga", "Yoga hàng ngày"),
      loc("Most meals", "Hầu hết các bữa ăn"),
      loc("Local guide", "Hướng dẫn viên địa phương"),
      loc("Airport transfers", "Đưa đón sân bay"),
    ],
    excludes: [
      loc("International flights", "Vé máy bay quốc tế"),
      loc("Travel insurance", "Bảo hiểm du lịch"),
      loc("Spa treatments", "Liệu trình spa"),
    ],
  },
  {
    slug: "iceland-northern-lights-expedition",
    title: loc("Iceland Northern Lights Expedition", "Săn Cực Quang Iceland"),
    location: loc("Reykjavik & South Coast, Iceland", "Reykjavik & Bờ Biển Phía Nam, Iceland"),
    category: loc("Adventure", "Mạo hiểm"),
    country: "iceland",
    serviceType: "tailor-made",
    duration: loc("6 days / 5 nights", "6 ngày / 5 đêm"),
    price: "$2,690",
    groupSize: loc("6 - 12 travelers", "6 - 12 khách"),
    gradient: "gradient-dusk",
    summary: loc(
      "Glacier lagoons, black sand beaches, and nightly aurora chasing.",
      "Đầm băng, bãi biển cát đen và những đêm săn cực quang."
    ),
    description: [
      loc(
        "A compact, high-impact loop of Iceland's south coast, taking in waterfalls, glacier lagoons, and geothermal spas by day, then aurora hunting by night with a photography guide.",
        "Hành trình gọn nhưng đầy ấn tượng dọc bờ biển phía nam Iceland, ban ngày ghé thác nước, đầm băng và suối nước nóng địa nhiệt, ban đêm săn cực quang cùng hướng dẫn viên nhiếp ảnh."
      ),
      loc(
        "Small-group 4x4 transport keeps the itinerary flexible around weather and light conditions.",
        "Di chuyển bằng xe 4x4 nhóm nhỏ giúp lịch trình linh hoạt theo thời tiết và điều kiện ánh sáng."
      ),
    ],
    highlights: [
      loc("Nightly aurora chasing with a photography guide", "Săn cực quang mỗi đêm cùng hướng dẫn viên nhiếp ảnh"),
      loc("Jokulsarlon glacier lagoon boat trip", "Du thuyền trên đầm băng Jokulsarlon"),
      loc("Black sand beaches of Vik", "Bãi biển cát đen tại Vik"),
      loc("Blue Lagoon geothermal spa", "Suối nước nóng địa nhiệt Blue Lagoon"),
    ],
    itinerary: [
      { day: loc("Day 1-2", "Ngày 1-2"), title: loc("Reykjavik", "Reykjavik"), description: loc("City walk, Golden Circle day trip.", "Dạo phố, tham quan Vòng Tròn Vàng.") },
      { day: loc("Day 3-4", "Ngày 3-4"), title: loc("South Coast", "Bờ biển phía Nam"), description: loc("Waterfalls, black sand beaches, glacier lagoon.", "Thác nước, bãi biển cát đen, đầm băng.") },
      { day: loc("Day 5", "Ngày 5"), title: loc("Blue Lagoon", "Blue Lagoon"), description: loc("Geothermal spa, farewell dinner.", "Suối nước nóng địa nhiệt, tiệc chia tay.") },
      { day: loc("Day 6", "Ngày 6"), title: loc("Departure", "Khởi hành"), description: loc("Transfer to Keflavik International Airport.", "Di chuyển đến sân bay quốc tế Keflavik.") },
    ],
    includes: [
      loc("Accommodation", "Chỗ nghỉ"),
      loc("Daily breakfast", "Ăn sáng hàng ngày"),
      loc("4x4 transport", "Xe 4x4"),
      loc("Local guide", "Hướng dẫn viên địa phương"),
      loc("Blue Lagoon entry", "Vé vào Blue Lagoon"),
    ],
    excludes: [
      loc("International flights", "Vé máy bay quốc tế"),
      loc("Travel insurance", "Bảo hiểm du lịch"),
      loc("Some dinners", "Một số bữa tối"),
    ],
  },
  {
    slug: "cambodia-temples-heritage-trail",
    title: loc("Cambodia Temples & Heritage Trail", "Hành Trình Đền Đài & Di Sản Campuchia"),
    location: loc("Siem Reap & Phnom Penh, Cambodia", "Siem Reap & Phnom Penh, Campuchia"),
    category: loc("Cultural", "Văn hóa"),
    country: "cambodia",
    serviceType: "tailor-made",
    duration: loc("6 days / 5 nights", "6 ngày / 5 đêm"),
    price: "$1,280",
    groupSize: loc("Private, any size", "Riêng tư, mọi quy mô"),
    gradient: "gradient-sand",
    summary: loc(
      "Sunrise at Angkor Wat, jungle-swallowed temples, and the living history of Phnom Penh.",
      "Bình minh tại Angkor Wat, những ngôi đền chìm trong rừng và lịch sử sống động của Phnom Penh."
    ),
    description: [
      loc(
        "A private itinerary through Cambodia's temple complexes and capital, built around your pace rather than a fixed group schedule.",
        "Hành trình riêng tư qua các quần thể đền đài và thủ đô Campuchia, được sắp xếp theo nhịp độ của riêng bạn thay vì lịch trình đoàn cố định."
      ),
      loc(
        "Time is split between the temples of Angkor and the markets, riverside, and museums of Phnom Penh.",
        "Thời gian được chia đều giữa các đền đài Angkor và chợ, bờ sông, bảo tàng của Phnom Penh."
      ),
    ],
    highlights: [
      loc("Sunrise at Angkor Wat with a private guide", "Ngắm bình minh tại Angkor Wat cùng hướng dẫn viên riêng"),
      loc("Ta Prohm and the jungle-reclaimed temples", "Ta Prohm và những ngôi đền bị rừng bao phủ"),
      loc("Tuk-tuk tour of Phnom Penh's riverside", "Dạo bờ sông Phnom Penh bằng tuk-tuk"),
      loc("Local market and street food walk", "Dạo chợ địa phương và ẩm thực đường phố"),
    ],
    itinerary: [
      { day: loc("Day 1-3", "Ngày 1-3"), title: loc("Siem Reap", "Siem Reap"), description: loc("Angkor Wat sunrise, Bayon, Ta Prohm, floating villages.", "Bình minh Angkor Wat, đền Bayon, Ta Prohm, làng nổi.") },
      { day: loc("Day 4-6", "Ngày 4-6"), title: loc("Phnom Penh", "Phnom Penh"), description: loc("Royal Palace, Central Market, riverside, departure.", "Hoàng cung, chợ Trung tâm, bờ sông, khởi hành.") },
    ],
    includes: [
      loc("Accommodation", "Chỗ nghỉ"),
      loc("Daily breakfast", "Ăn sáng hàng ngày"),
      loc("Private driver & guide", "Tài xế & hướng dẫn viên riêng"),
      loc("Temple pass", "Vé vào khu đền"),
      loc("Airport transfers", "Đưa đón sân bay"),
    ],
    excludes: [
      loc("International flights", "Vé máy bay quốc tế"),
      loc("Travel insurance", "Bảo hiểm du lịch"),
      loc("Personal expenses", "Chi tiêu cá nhân"),
    ],
  },
  {
    slug: "laos-mekong-heritage-journey",
    title: loc("Laos Mekong Heritage Journey", "Hành Trình Di Sản Mekong Lào"),
    location: loc("Luang Prabang & the Mekong River, Laos", "Luang Prabang & Sông Mekong, Lào"),
    category: loc("Cultural", "Văn hóa"),
    country: "laos",
    serviceType: "tailor-made",
    duration: loc("5 days / 4 nights", "5 ngày / 4 đêm"),
    price: "$1,150",
    groupSize: loc("Private, any size", "Riêng tư, mọi quy mô"),
    gradient: "gradient-forest",
    summary: loc(
      "Slow mornings on the Mekong, saffron-robed monks, and Luang Prabang's quiet French-colonial streets.",
      "Những buổi sáng chậm rãi trên sông Mekong, các nhà sư áo vàng nghệ, và những con phố Pháp cổ yên bình của Luang Prabang."
    ),
    description: [
      loc(
        "A gentle, unhurried trip through Laos's spiritual capital, built for travelers who want space between stops rather than another checklist.",
        "Hành trình nhẹ nhàng, thong thả qua thủ phủ tâm linh của Lào, dành cho những du khách muốn có khoảng lặng giữa các điểm dừng chứ không phải một danh sách dày đặc."
      ),
      loc(
        "Includes a private Mekong river cruise and time in the surrounding waterfalls and villages.",
        "Bao gồm du thuyền riêng trên sông Mekong và thời gian ghé thăm các thác nước, bản làng xung quanh."
      ),
    ],
    highlights: [
      loc("Alms-giving ceremony at sunrise", "Lễ dâng cơm cho sư lúc bình minh"),
      loc("Private Mekong River cruise", "Du thuyền riêng trên sông Mekong"),
      loc("Kuang Si Falls and rescued bear sanctuary", "Thác Kuang Si và khu bảo tồn gấu"),
      loc("Luang Prabang night market", "Chợ đêm Luang Prabang"),
    ],
    itinerary: [
      { day: loc("Day 1-2", "Ngày 1-2"), title: loc("Luang Prabang", "Luang Prabang"), description: loc("Old town, alms ceremony, night market.", "Phố cổ, lễ dâng cơm, chợ đêm.") },
      { day: loc("Day 3", "Ngày 3"), title: loc("Mekong River", "Sông Mekong"), description: loc("Private cruise, riverside villages.", "Du thuyền riêng, bản làng ven sông.") },
      { day: loc("Day 4-5", "Ngày 4-5"), title: loc("Kuang Si Falls & Departure", "Thác Kuang Si & Khởi hành"), description: loc("Waterfall visit, bear sanctuary, departure.", "Thăm thác nước, khu bảo tồn gấu, khởi hành.") },
    ],
    includes: [
      loc("Accommodation", "Chỗ nghỉ"),
      loc("Daily breakfast", "Ăn sáng hàng ngày"),
      loc("Private driver & guide", "Tài xế & hướng dẫn viên riêng"),
      loc("River cruise", "Du thuyền"),
      loc("Airport transfers", "Đưa đón sân bay"),
    ],
    excludes: [
      loc("International flights", "Vé máy bay quốc tế"),
      loc("Travel insurance", "Bảo hiểm du lịch"),
      loc("Personal expenses", "Chi tiêu cá nhân"),
    ],
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug);
}
