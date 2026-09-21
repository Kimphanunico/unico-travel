import { loc, type Localized } from "./i18n";

export interface ItineraryDay {
  day: Localized;
  title: Localized;
  description: Localized;
  activityLine?: Localized;
}

export type TransportMode = "car" | "flight" | "boat";

export interface GallerySegment {
  title: Localized;
  stops: Localized[];
  gradient: string;
  accent: string;
  transport: TransportMode;
  travelTime: Localized;
  description: Localized;
}

export type InclusionIcon =
  | "bed"
  | "car"
  | "users"
  | "utensils"
  | "camera"
  | "shield";

export interface InclusionItem {
  icon: InclusionIcon;
  category: Localized;
  summary: Localized;
  details: Localized[];
}

export interface HotelEntry {
  city: Localized;
  hotel: Localized;
  roomType: Localized;
}

export interface HotelTier {
  tierLabel: Localized;
  hotels: HotelEntry[];
}

export interface FAQItem {
  question: Localized;
  answer: Localized;
}

export interface Tour {
  slug: string;
  title: Localized;
  location: Localized;
  category: Localized;
  country: string;
  serviceType: string;
  duration: Localized;
  days: number;
  price: string;
  groupSize: Localized;
  gradient: string;
  summary: Localized;
  // Optional: tours added as a name-only "frame" (product name + basic info,
  // full write-up to follow) omit these. TourDetail shows a friendly
  // "being written" placeholder instead of an empty section when absent.
  description?: Localized[];
  highlights?: Localized[];
  itinerary?: ItineraryDay[];
  includes?: Localized[];
  excludes?: Localized[];
  // Badge shown on the card and hero (e.g. "Private and tailored tour",
  // "SIC tour") -- independent of serviceType, which drives the /services
  // filter dropdown.
  tourType?: Localized;
  // Optional real photography for the hero, shown as a slow crossfade
  // slideshow instead of the flat gradient. Omit to keep the gradient hero.
  heroImages?: string[];
  routeStops?: Localized[];
  gallerySegments?: GallerySegment[];
  inclusionsGrid?: InclusionItem[];
  hotels?: HotelTier[];
  faqs?: FAQItem[];
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
    days: 9,
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
      loc("Kayaking beneath limestone caves", "Chèo kayak dưới chân những hang động đá vôi"),
      loc("Old Quarter food walk in Hanoi", "Dạo phố ẩm thực tại Phố Cổ Hà Nội"),
    ],
    itinerary: [
      {
        day: loc("Day 1-2", "Ngày 1-2"),
        title: loc("Arrive in Da Nang", "Đến Đà Nẵng"),
        activityLine: loc(
          "Airport pickup, beachside check-in, welcome dinner.",
          "Đón sân bay, nhận phòng ven biển, tiệc tối chào mừng."
        ),
        description: loc(
          "Our driver meets you at Da Nang International Airport and transfers you to a beachside hotel. Take the rest of the day to rest and settle in. In the evening, the group gathers for a welcome dinner with fresh local seafood, where your guide walks you through the days ahead.",
          "Tài xế của chúng tôi đón bạn tại sân bay quốc tế Đà Nẵng và đưa về khách sạn ven biển. Bạn có thời gian còn lại trong ngày để nghỉ ngơi. Buổi tối, cả đoàn cùng dùng bữa tối chào mừng với hải sản tươi địa phương, hướng dẫn viên sẽ giới thiệu sơ lược hành trình những ngày tới."
        ),
      },
      {
        day: loc("Day 3-5", "Ngày 3-5"),
        title: loc("Hoi An Ancient Town", "Phố cổ Hội An"),
        activityLine: loc(
          "Lantern markets, tailor visits, cooking class, cycling tour.",
          "Chợ đèn lồng, may đo, lớp nấu ăn, đạp xe tham quan."
        ),
        description: loc(
          "Transfer south to Hoi An, the lantern-lit trading port that has barely changed in two centuries. Wander the old town's tailor shops and riverside market, join a hands-on cooking class with a local family, and spend a morning cycling through the surrounding rice paddies as the sun comes up over the fields.",
          "Di chuyển về phía nam đến Hội An, thương cảng rực ánh đèn lồng gần như không đổi thay suốt hai thế kỷ. Dạo quanh phố cổ với các tiệm may và khu chợ ven sông, tham gia lớp học nấu ăn cùng một gia đình địa phương, và dành một buổi sáng đạp xe giữa những cánh đồng lúa lúc mặt trời vừa lên."
        ),
      },
      {
        day: loc("Day 6-7", "Ngày 6-7"),
        title: loc("Ha Long Bay Cruise", "Du thuyền Vịnh Hạ Long"),
        activityLine: loc(
          "Overnight boat, kayaking, cave exploration.",
          "Ngủ đêm trên thuyền, chèo kayak, khám phá hang động."
        ),
        description: loc(
          "Board a private cruise through the limestone karsts of Ha Long Bay, a UNESCO World Heritage Site. Kayak between towering islands, explore hidden caves by paddle, and watch the sunset from the top deck before an overnight stay on the water.",
          "Lên du thuyền riêng xuyên qua những dãy núi đá vôi của Vịnh Hạ Long, Di sản Thế giới được UNESCO công nhận. Chèo kayak giữa những hòn đảo cao vút, khám phá các hang động ẩn giấu, và ngắm hoàng hôn từ boong tàu trước khi nghỉ đêm ngay trên vịnh."
        ),
      },
      {
        day: loc("Day 8-9", "Ngày 8-9"),
        title: loc("Hanoi & Departure", "Hà Nội & Khởi hành"),
        activityLine: loc(
          "Old Quarter walking tour, farewell dinner, departure.",
          "Dạo bộ Phố Cổ, tiệc chia tay, khởi hành."
        ),
        description: loc(
          "Return to shore and transfer to Hanoi. Spend the afternoon wandering the 36 streets of the Old Quarter with a local guide, sampling street food along the way. The trip closes with a farewell dinner before your transfer to the airport for departure.",
          "Trở về đất liền và di chuyển đến Hà Nội. Dành buổi chiều dạo bộ 36 phố phường Phố Cổ cùng hướng dẫn viên địa phương, nếm thử ẩm thực đường phố trên đường đi. Hành trình khép lại với bữa tối chia tay trước khi ra sân bay khởi hành."
        ),
      },
    ],
    includes: [
      loc("Accommodation as specified in the itinerary", "Chỗ nghỉ theo đúng lịch trình"),
      loc("Daily breakfast", "Ăn sáng hàng ngày"),
      loc("Airport and inter-city transfers", "Đưa đón sân bay và di chuyển giữa các điểm"),
      loc("Private air-conditioned vehicle throughout", "Xe riêng có máy lạnh trong suốt hành trình"),
      loc("English-speaking local guide", "Hướng dẫn viên địa phương nói tiếng Anh"),
      loc("Overnight Ha Long Bay cruise with onboard meals", "Du thuyền qua đêm tại Vịnh Hạ Long kèm bữa ăn trên tàu"),
      loc("Entrance fees for sights listed in the itinerary", "Vé tham quan tại các điểm đã có trong lịch trình"),
      loc("Bottled water during tours", "Nước uống đóng chai trong các buổi tham quan"),
    ],
    excludes: [
      loc("International flights to and from Vietnam", "Vé máy bay quốc tế đến và rời Việt Nam"),
      loc("Domestic flights, if applicable", "Vé máy bay nội địa (nếu có)"),
      loc("Vietnam visa and entry stamp fees", "Phí visa và đóng dấu nhập cảnh Việt Nam"),
      loc("Travel insurance", "Bảo hiểm du lịch"),
      loc("Personal expenses (shopping, laundry, spa)", "Chi tiêu cá nhân (mua sắm, giặt ủi, spa)"),
      loc("Meals not listed in the itinerary", "Các bữa ăn không có trong lịch trình"),
      loc("Beverages with meals", "Đồ uống trong bữa ăn"),
      loc("Tips and gratuities for guides and drivers", "Tiền tip cho hướng dẫn viên và tài xế"),
      loc("Early check-in or late check-out surcharges", "Phụ phí nhận phòng sớm hoặc trả phòng muộn"),
    ],
    routeStops: [
      loc("Da Nang", "Đà Nẵng"),
      loc("Hoi An", "Hội An"),
      loc("Ha Long Bay", "Vịnh Hạ Long"),
      loc("Hanoi", "Hà Nội"),
    ],
    gallerySegments: [
      {
        title: loc("Da Nang to Hoi An", "Đà Nẵng đến Hội An"),
        stops: [loc("Da Nang", "Đà Nẵng"), loc("Hoi An", "Hội An")],
        gradient: "gradient-sunset",
        accent: "#c1622d",
        transport: "car",
        travelTime: loc("45 min drive", "45 phút lái xe"),
        description: loc(
          "A short coastal drive links Da Nang's beaches to Hoi An's lantern-lit lanes.",
          "Một quãng đường ven biển ngắn nối bãi biển Đà Nẵng với những con phố rực đèn lồng Hội An."
        ),
      },
      {
        title: loc("Hoi An to Ha Long Bay", "Hội An đến Vịnh Hạ Long"),
        stops: [loc("Hoi An", "Hội An"), loc("Ha Long Bay", "Vịnh Hạ Long")],
        gradient: "gradient-ocean",
        accent: "#3f7c82",
        transport: "flight",
        travelTime: loc("1h20 flight + transfer", "1 giờ 20 bay + di chuyển"),
        description: loc(
          "Fly north to board a private cruise through towering limestone islands.",
          "Bay ra phía bắc để lên du thuyền riêng xuyên qua những hòn đảo đá vôi sừng sững."
        ),
      },
      {
        title: loc("Ha Long Bay to Hanoi", "Vịnh Hạ Long đến Hà Nội"),
        stops: [loc("Ha Long Bay", "Vịnh Hạ Long"), loc("Hanoi", "Hà Nội")],
        gradient: "gradient-forest",
        accent: "#445340",
        transport: "car",
        travelTime: loc("3.5 hr drive", "3,5 giờ lái xe"),
        description: loc(
          "Close the loop back on land, ending among the Old Quarter's 36 streets.",
          "Khép lại hành trình trên đất liền, dừng chân giữa 36 phố phường của Phố Cổ."
        ),
      },
    ],
    inclusionsGrid: [
      {
        icon: "bed",
        category: loc("Accommodation", "Chỗ nghỉ"),
        summary: loc("Hotel (8 nights)", "Khách sạn (8 đêm)"),
        details: [
          loc("Beachside hotel in Da Nang", "Khách sạn ven biển tại Đà Nẵng"),
          loc("Boutique hotel in Hoi An", "Khách sạn boutique tại Hội An"),
          loc("Overnight cabin on Ha Long Bay cruise", "Cabin ngủ đêm trên du thuyền Vịnh Hạ Long"),
          loc("Hotel in Hanoi Old Quarter", "Khách sạn tại Phố Cổ Hà Nội"),
        ],
      },
      {
        icon: "car",
        category: loc("Transport", "Di chuyển"),
        summary: loc("Private car, cruise, domestic flight", "Xe riêng, du thuyền, chuyến bay nội địa"),
        details: [
          loc("Private air-conditioned vehicle", "Xe riêng có máy lạnh"),
          loc("Bicycles for the Hoi An cycling tour", "Xe đạp cho buổi đạp xe tại Hội An"),
          loc("Domestic flight to Ha Long", "Vé máy bay nội địa đến Hạ Long"),
        ],
      },
      {
        icon: "users",
        category: loc("Team", "Đội ngũ"),
        summary: loc("Private guide, driver", "Hướng dẫn viên và tài xế riêng"),
        details: [
          loc("English-speaking local guide throughout", "Hướng dẫn viên nói tiếng Anh suốt hành trình"),
          loc("Dedicated private driver", "Tài xế riêng đồng hành"),
        ],
      },
      {
        icon: "utensils",
        category: loc("Meals", "Bữa ăn"),
        summary: loc("8 breakfasts, 3 lunches", "8 bữa sáng, 3 bữa trưa"),
        details: [
          loc("Daily breakfast at each hotel", "Ăn sáng hàng ngày tại khách sạn"),
          loc("Welcome and farewell dinners", "Tiệc tối chào mừng và chia tay"),
          loc("Lunch included on cruise days", "Bữa trưa trong những ngày du thuyền"),
        ],
      },
      {
        icon: "camera",
        category: loc("Experiences", "Trải nghiệm"),
        summary: loc("6 curated experiences", "6 trải nghiệm được chọn lọc"),
        details: [
          loc("Hoi An cooking class", "Lớp học nấu ăn Hội An"),
          loc("Sunrise cycling tour", "Đạp xe ngắm bình minh"),
          loc("Ha Long Bay kayaking", "Chèo kayak Vịnh Hạ Long"),
          loc("Cave exploration", "Khám phá hang động"),
          loc("Old Quarter food walk", "Dạo phố ẩm thực Phố Cổ"),
        ],
      },
      {
        icon: "shield",
        category: loc("Services", "Dịch vụ hỗ trợ"),
        summary: loc("Entrance fees, transfers, support", "Vé tham quan, đưa đón, hỗ trợ"),
        details: [
          loc("All entrance and activity fees", "Toàn bộ vé tham quan và hoạt động"),
          loc("Airport transfers on arrival and departure", "Đưa đón sân bay lúc đến và khởi hành"),
          loc("24/7 support from your trip designer", "Hỗ trợ 24/7 từ người thiết kế hành trình của bạn"),
        ],
      },
    ],
    hotels: [
      {
        tierLabel: loc("Superior Category / 4-star Hotel", "Hạng tiêu chuẩn cao / Khách sạn 4 sao"),
        hotels: [
          { city: loc("Da Nang", "Đà Nẵng"), hotel: loc("Melia Danang Beach Resort", "Melia Danang Beach Resort"), roomType: loc("Deluxe Room", "Phòng Deluxe") },
          { city: loc("Hoi An", "Hội An"), hotel: loc("Hoi An Ancient House Resort & Spa", "Hoi An Ancient House Resort & Spa"), roomType: loc("Garden View Room", "Phòng hướng vườn") },
          { city: loc("Ha Long Bay", "Vịnh Hạ Long"), hotel: loc("Paradise Elegance Cruise", "Paradise Elegance Cruise"), roomType: loc("Deluxe Cabin", "Cabin Deluxe") },
          { city: loc("Hanoi", "Hà Nội"), hotel: loc("Hanoi La Siesta Hotel & Spa", "Hanoi La Siesta Hotel & Spa"), roomType: loc("Classic Room", "Phòng Classic") },
        ],
      },
      {
        tierLabel: loc("Deluxe Category / 5-star Hotel", "Hạng sang / Khách sạn 5 sao"),
        hotels: [
          { city: loc("Da Nang", "Đà Nẵng"), hotel: loc("InterContinental Danang Sun Peninsula Resort", "InterContinental Danang Sun Peninsula Resort"), roomType: loc("Junior Suite", "Junior Suite") },
          { city: loc("Hoi An", "Hội An"), hotel: loc("Four Seasons Resort The Nam Hai", "Four Seasons Resort The Nam Hai"), roomType: loc("Ocean View Room", "Phòng hướng biển") },
          { city: loc("Ha Long Bay", "Vịnh Hạ Long"), hotel: loc("Heritage Cruises Binh Chuan", "Heritage Cruises Bình Chuẩn"), roomType: loc("Premium Suite", "Premium Suite") },
          { city: loc("Hanoi", "Hà Nội"), hotel: loc("Sofitel Legend Metropole Hanoi", "Sofitel Legend Metropole Hanoi"), roomType: loc("Premium Room", "Premium Room") },
        ],
      },
    ],
    faqs: [
      {
        question: loc("How do I reserve this tour?", "Làm sao để đặt tour này?"),
        answer: loc(
          "Send an enquiry through our contact form with your preferred dates and number of travelers. A trip designer will follow up within 1-2 business days with a tailored quote.",
          "Gửi yêu cầu qua form liên hệ kèm ngày dự kiến và số lượng khách. Người thiết kế hành trình sẽ phản hồi trong 1-2 ngày làm việc kèm báo giá phù hợp với bạn."
        ),
      },
      {
        question: loc("Can the itinerary be customized?", "Tôi có thể tùy chỉnh lịch trình không?"),
        answer: loc(
          "Yes. This itinerary is a starting point. We can adjust the pace, upgrade hotels, or add extra days in any of the destinations.",
          "Được. Lịch trình này chỉ là điểm khởi đầu. Chúng tôi có thể điều chỉnh nhịp độ, nâng cấp khách sạn, hoặc thêm ngày ở bất kỳ điểm đến nào."
        ),
      },
      {
        question: loc("How much deposit is required?", "Cần đặt cọc bao nhiêu?"),
        answer: loc(
          "A 30% deposit confirms your booking, with the balance due 30 days before departure.",
          "Đặt cọc 30% để xác nhận đặt chỗ, phần còn lại thanh toán trước ngày khởi hành 30 ngày."
        ),
      },
      {
        question: loc("What is the cancellation policy?", "Chính sách hủy tour ra sao?"),
        answer: loc(
          "Cancellations more than 30 days before departure receive a full refund minus the deposit. Details vary by season, your trip designer will confirm the exact terms with your quote.",
          "Hủy trước ngày khởi hành hơn 30 ngày sẽ được hoàn tiền toàn bộ trừ tiền cọc. Điều khoản cụ thể tùy mùa, người thiết kế hành trình sẽ xác nhận chi tiết cùng báo giá của bạn."
        ),
      },
      {
        question: loc("What if my flight is delayed?", "Nếu chuyến bay của tôi bị trễ thì sao?"),
        answer: loc(
          "Let your guide know as soon as possible. We build buffer time into every itinerary and will adjust the first day's plan around your new arrival time.",
          "Báo ngay cho hướng dẫn viên khi có thể. Mỗi lịch trình đều có thời gian dự phòng, chúng tôi sẽ điều chỉnh kế hoạch ngày đầu theo giờ đến mới của bạn."
        ),
      },
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
    days: 10,
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
    days: 8,
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
    days: 7,
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
    days: 6,
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
    days: 6,
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
    days: 6,
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
    days: 5,
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
  {
    slug: "luxury-halong-bay-1-day-tour",
    title: loc("Luxury Halong Bay 1 Day Tour", "Du Thuyền Sang Trọng Vịnh Hạ Long 1 Ngày"),
    location: loc("Ha Long Bay, Vietnam", "Vịnh Hạ Long, Việt Nam"),
    category: loc("Northern Vietnam", "Miền Bắc Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-ocean",
    heroImages: [
      "/images/tours/halong-bay-cruise-sunset.png",
      "/images/tours/halong-bay-kayak.png",
    ],
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "private-perfume-pagoda-1-day",
    title: loc("Private Perfume Pagoda 1 Day Tour", "Chùa Hương 1 Ngày - Tour Riêng"),
    location: loc("Hanoi, Vietnam", "Hà Nội, Việt Nam"),
    category: loc("Northern Vietnam", "Miền Bắc Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-forest",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "private-bai-dinh-trang-an-full-day",
    title: loc("Private Bai Dinh Pagoda and Trang An Full-Day", "Bái Đính và Tràng An Trọn Ngày - Tour Riêng"),
    location: loc("Ninh Binh, Vietnam", "Ninh Bình, Việt Nam"),
    category: loc("Northern Vietnam", "Miền Bắc Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-sand",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "private-hoa-lu-tam-coc-full-day",
    title: loc("Private Hoa Lu - Tam Coc Full-Day", "Hoa Lư - Tam Cốc Trọn Ngày - Tour Riêng"),
    location: loc("Ninh Binh, Vietnam", "Ninh Bình, Việt Nam"),
    category: loc("Northern Vietnam", "Miền Bắc Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-sunset",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "private-hanoi-city-tour-full-day",
    title: loc("Private Hanoi City Tour Full-Day", "Tham Quan Hà Nội Trọn Ngày - Tour Riêng"),
    location: loc("Hanoi, Vietnam", "Hà Nội, Việt Nam"),
    category: loc("Northern Vietnam", "Miền Bắc Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-dusk",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "hanoi-private-motorbike-tour",
    title: loc("Hanoi Private Motorbike Tour", "Tour Xe Máy Riêng Tại Hà Nội"),
    location: loc("Hanoi, Vietnam", "Hà Nội, Việt Nam"),
    category: loc("Northern Vietnam", "Miền Bắc Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-snow",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "bana-hills-tour",
    title: loc("Ba Na Hills Tour", "Tour Bà Nà Hills"),
    location: loc("Da Nang, Vietnam", "Đà Nẵng, Việt Nam"),
    category: loc("Middle Vietnam", "Miền Trung Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-ocean",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "danang-city-tour",
    title: loc("Da Nang City Tour", "Tham Quan Thành Phố Đà Nẵng"),
    location: loc("Da Nang, Vietnam", "Đà Nẵng, Việt Nam"),
    category: loc("Middle Vietnam", "Miền Trung Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-forest",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "hoi-an-ancient-town-full-day",
    title: loc("Hoi An Ancient Town Full-Day", "Phố Cổ Hội An Trọn Ngày"),
    location: loc("Hoi An, Vietnam", "Hội An, Việt Nam"),
    category: loc("Middle Vietnam", "Miền Trung Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-sand",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "hoi-an-cycling-tour",
    title: loc("Hoi An Cycling Tour", "Tour Đạp Xe Hội An"),
    location: loc("Hoi An, Vietnam", "Hội An, Việt Nam"),
    category: loc("Middle Vietnam", "Miền Trung Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-sunset",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "hoi-an-cooking-class-half-day",
    title: loc("Hoi An Cooking Class (Half Day)", "Lớp Học Nấu Ăn Hội An (Nửa Ngày)"),
    location: loc("Hoi An, Vietnam", "Hội An, Việt Nam"),
    category: loc("Middle Vietnam", "Miền Trung Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("Half Day", "Nửa Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-dusk",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "mekong-delta-1-day-tour",
    title: loc("Mekong Delta 1 Day Tour", "Đồng Bằng Sông Cửu Long 1 Ngày"),
    location: loc("Mekong Delta, Vietnam", "Đồng Bằng Sông Cửu Long, Việt Nam"),
    category: loc("Southern Vietnam", "Miền Nam Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private or shared group", "Nhóm riêng hoặc ghép đoàn"),
    gradient: "gradient-snow",
    tourType: loc("Private or group tour", "Tour riêng hoặc tour ghép đoàn"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "ho-chi-minh-city-tour-1-day",
    title: loc("Ho Chi Minh City Tour (1 Day)", "Tham Quan Thành Phố Hồ Chí Minh 1 Ngày"),
    location: loc("Ho Chi Minh City, Vietnam", "TP. Hồ Chí Minh, Việt Nam"),
    category: loc("Southern Vietnam", "Miền Nam Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-ocean",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "ho-chi-minh-cu-chi-tunnels-full-day",
    title: loc("Ho Chi Minh City and Cu Chi Tunnels Full-Day", "TP. Hồ Chí Minh và Địa Đạo Củ Chi Trọn Ngày"),
    location: loc("Ho Chi Minh City, Vietnam", "TP. Hồ Chí Minh, Việt Nam"),
    category: loc("Southern Vietnam", "Miền Nam Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-forest",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "cao-dai-temple-cu-chi-tunnels-day-tour",
    title: loc("Cao Dai Temple and Cu Chi Tunnels Day Tour", "Tòa Thánh Cao Đài và Địa Đạo Củ Chi"),
    location: loc("Tay Ninh, Vietnam", "Tây Ninh, Việt Nam"),
    category: loc("Southern Vietnam", "Miền Nam Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-sand",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "can-gio-ecological-full-day-tour",
    title: loc("Can Gio Ecological Full-Day Tour", "Rừng Ngập Mặn Cần Giờ Trọn Ngày"),
    location: loc("Can Gio, Vietnam", "Cần Giờ, Việt Nam"),
    category: loc("Southern Vietnam", "Miền Nam Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-sunset",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "ho-chi-minh-motorbike-tour",
    title: loc("Ho Chi Minh City Motorbike Tour", "Tour Xe Máy TP. Hồ Chí Minh"),
    location: loc("Ho Chi Minh City, Vietnam", "TP. Hồ Chí Minh, Việt Nam"),
    category: loc("Southern Vietnam", "Miền Nam Việt Nam"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-dusk",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "nha-trang-cruise-sic-tour",
    title: loc("Discover Nha Trang with Cruise", "Khám Phá Nha Trang Bằng Du Thuyền"),
    location: loc("Nha Trang, Vietnam", "Nha Trang, Việt Nam"),
    category: loc("Nha Trang", "Nha Trang"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Small shared group", "Nhóm nhỏ ghép đoàn"),
    gradient: "gradient-snow",
    tourType: loc("SIC tour", "Tour ghép đoàn (SIC)"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
  {
    slug: "nha-trang-island-private-tailored-tour",
    title: loc("Nha Trang Island Private and Tailored Tour", "Đảo Nha Trang - Tour Riêng Thiết Kế Theo Yêu Cầu"),
    location: loc("Nha Trang, Vietnam", "Nha Trang, Việt Nam"),
    category: loc("Nha Trang", "Nha Trang"),
    country: "vietnam",
    serviceType: "tailor-made",
    duration: loc("1 Day", "1 Ngày"),
    days: 1,
    price: "Contact Us",
    groupSize: loc("Private group", "Nhóm riêng"),
    gradient: "gradient-ocean",
    tourType: loc("Private and tailored tour", "Riêng tư và thiết kế theo yêu cầu"),
    summary: loc(
      "Full itinerary details are being finalized -- enquire and our team will share the complete plan.",
      "Chi tiết chương trình đang được hoàn thiện - liên hệ để được đội ngũ tư vấn gửi lịch trình đầy đủ."
    ),
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug);
}
