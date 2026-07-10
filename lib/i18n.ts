export type Locale = "en" | "vi";

export interface Localized {
  en: string;
  vi: string;
}

export function pick(value: Localized, locale: Locale): string {
  return value[locale] ?? value.en;
}

export function loc(en: string, vi: string): Localized {
  return { en, vi };
}

export const ui = {
  en: {
    nav: {
      home: "Home",
      destinations: "Destinations",
      services: "Services",
      news: "News",
      about: "About",
      contact: "Contact",
      planATrip: "Plan a Trip",
      enquiry: "Enquiry",
      partnerWithUs: "Partner with us",
      language: "Language",
      viewAllTours: "View all tours",
      visaServices: "Visa Services",
    },
    footer: {
      tagline:
        "Thoughtfully crafted journeys for travelers who want real places, real people, and real stories, not just a checklist.",
      exploreHeading: "Explore",
      destinations: "Destinations",
      allTours: "All Tours",
      aboutUs: "About Us",
      gallery: "Gallery",
      news: "News",
      contactHeading: "Contact",
      copyright: "Unico Travel. All rights reserved.",
      designedFor: "Designed for travelers who wander with intention.",
    },
    home: {
      heroTag: "Travel, designed with intention",
      heroTitle: "Journeys worth remembering",
      heroBody:
        "Unico Travel plans small-group and private trips across the world's most striking landscapes, built around real people, real places, and time well spent.",
      exploreTours: "Explore Tours",
      planATrip: "Plan a Trip",
      scroll: "Scroll",
      introTag: "Who we are",
      introHeading:
        "We build trips around places and people, not itineraries and checkboxes.",
      introBody:
        "Unico Travel is a small team of trip designers who've lived, worked, and wandered in the places we plan for. Every itinerary is built by hand, with no templates and no filler days.",
      moreAbout: "More about Unico",
      featuredTag: "Featured trips",
      featuredHeading: "Where to next",
      whyTag: "Why travel with us",
      whyHeading: "The Unico difference",
      testimonialsTag: "Traveler stories",
      testimonialsHeading: "What our travelers say",
      ctaHeading: "Ready to start planning your next trip?",
      ctaBody:
        "Tell us where you'd like to go and what matters most to you, and we'll take it from there.",
      ctaButton: "Start Your Request",
      features: [
        {
          title: "Small Group Sizes",
          description:
            "Most trips cap at 12 travelers, so days feel personal, not scheduled.",
        },
        {
          title: "Local Guides, Always",
          description:
            "Every itinerary is led by guides who live where you're visiting.",
        },
        {
          title: "Thoughtful Pacing",
          description:
            "Fewer stops, more time in each place. No 6am-to-9pm checklists.",
        },
        {
          title: "Transparent Pricing",
          description: "No hidden fees. What you see in a quote is what you pay.",
        },
      ],
      testimonials: [
        {
          quote:
            "Unico Travel planned our Vietnam trip down to the smallest detail, but it never felt rigid. Best trip we've taken as a family.",
          name: "Marissa T.",
          trip: "Vietnam Coastal Explorer",
        },
        {
          quote:
            "The Iceland aurora nights alone were worth it. Our guide knew exactly where to go based on the forecast each night.",
          name: "David & Priya K.",
          trip: "Iceland Northern Lights Expedition",
        },
        {
          quote:
            "I've used other travel companies before, but Unico is the first one that felt like it was actually designed around me.",
          name: "Owen R.",
          trip: "Swiss Alps Adventure",
        },
      ],
    },
    about: {
      tag: "About Unico Travel",
      heading:
        "We started Unico because most travel felt rushed, generic, or both.",
      body: "Founded by a small group of former guides and tour operators, Unico Travel exists to plan trips the way we'd want to take them ourselves, unhurried, well connected to place, and built around the traveler in front of us rather than a template.",
      statsTag: "",
      stats: [
        { value: "12+", label: "Years planning trips" },
        { value: "38", label: "Countries covered" },
        { value: "4,200+", label: "Travelers guided" },
        { value: "4.9/5", label: "Average trip rating" },
      ],
      valuesTag: "What we believe",
      valuesHeading: "Our approach to travel",
      values: [
        {
          title: "Slow Down, See More",
          description:
            "We'd rather give you three unforgettable days in one place than seven rushed ones across five.",
        },
        {
          title: "Real Local Partners",
          description:
            "We work directly with family-run guesthouses, independent guides, and small operators rather than resellers.",
        },
        {
          title: "Honest Planning",
          description:
            "Clear pricing, realistic itineraries, and straight answers when a plan needs to change.",
        },
      ],
      teamTag: "The people behind the plans",
      teamHeading: "Meet the team",
      team: [
        { name: "Lena Ortiz", role: "Founder & Lead Trip Designer" },
        { name: "Marcus Webb", role: "Head of Operations" },
        { name: "Aiko Tanaka", role: "Asia Program Lead" },
        { name: "Priya Nair", role: "Guest Experience Lead" },
      ],
      ctaHeading: "Want to plan a trip with us?",
      ctaBody: "We'd love to hear where you're dreaming of going.",
      ctaButton: "Get in Touch",
    },
    contact: {
      tag: "Get in touch",
      heading: "Let's plan your trip",
      body: "Fill out the form below and a trip designer will follow up within 1-2 business days with ideas and next steps.",
      formName: "Full name",
      formEmail: "Email",
      formPhone: "Phone",
      formDestination: "Destination / Tour",
      formDates: "Preferred dates",
      formDatesPlaceholder: "e.g. March 2027",
      formTravelers: "Number of travelers",
      formMessage: "Tell us about your trip",
      submit: "Send Request",
      sending: "Sending...",
      successTitle: "Request received",
      successBody:
        "Thanks for reaching out. A trip designer will get back to you within 1-2 business days.",
      errorRequired: "Name, email, and message are required.",
      errorEmail: "Please provide a valid email address.",
      errorGeneric: "Something went wrong. Please try again.",
      errorNetwork:
        "Network error. Please check your connection and try again.",
      detailsHeading: "Contact details",
      email: "Email",
      phone: "Phone",
      office: "Office",
      hours: "Hours",
      hoursValue: "Mon-Sat, 8:30am-6pm (GMT+7)",
    },
    partners: {
      tag: "For Agencies & Wholesalers",
      heading: "Partner With Us",
      body1:
        "With years of experience in designing tailor made journeys, Unico Travel continues to create fresh travel experiences across Vietnam, Cambodia, Laos and Japan. Every itinerary is carefully crafted for our partners with competitive pricing, flexible solutions and a strong operations team that ensures every detail is handled with care.",
      body2:
        "We understand that every market is different and every client has unique expectations. That is why we take the time to listen, adapt and build travel experiences that truly fit your business. Our goal is not simply to arrange a trip, but to become a trusted local partner you can rely on whenever your clients travel with us.",
      body3:
        "If you are looking for a partner who values long term relationships, consistent service and open communication, we would be delighted to hear from you.",
      getInTouch: "Get in touch",
      sendEnquiry: "Send an Enquiry",
      tradeshowsTag: "Meet Us In Person",
      tradeshowsHeading: "Trade Shows",
      tradeshowsBody:
        "We attend a number of travel trade shows and workshops throughout the year to meet partners face to face. Details of upcoming events will be listed here soon.",
      tradeshowsNote:
        "Have an event you would like to meet us at? Let us know and we will do our best to be there.",
    },
    dentalTourism: {
      tag: "New Service",
      heading: "Dental Tourism",
      intro:
        "Get quality dental care and a proper vacation in the same trip. We pair trusted dental partners in Vietnam with an itinerary built around your treatment and recovery time.",
      whyTag: "Why Vietnam",
      whyHeading: "Save on dental care without cutting corners",
      why: [
        {
          title: "Significant savings",
          description:
            "Dental treatment in Vietnam typically costs a fraction of prices in the US, Australia, or Europe, without compromising on quality.",
        },
        {
          title: "Internationally trained dentists",
          description:
            "Many of our partner clinics are staffed by dentists trained or certified abroad, using modern equipment and materials.",
        },
        {
          title: "Recovery, the pleasant way",
          description:
            "Rest and heal somewhere warm and interesting instead of stuck at home, with your itinerary paced around your treatment schedule.",
        },
        {
          title: "One point of contact",
          description:
            "We coordinate the clinic, your travel, and your recovery time so you are not juggling two separate trips.",
        },
      ],
      howTag: "How It Works",
      howHeading: "From first message to your flight home",
      how: [
        {
          title: "Tell us what you need",
          description: "Share your dental needs, rough budget, and preferred travel dates.",
        },
        {
          title: "We get you a quote",
          description:
            "We connect you with a vetted partner clinic and bring back a clear treatment plan and price.",
        },
        {
          title: "We build your itinerary",
          description:
            "Your trip is planned around appointments and recovery time, with real sightseeing in between.",
        },
        {
          title: "You travel and get treated",
          description: "You arrive, complete your treatment, and enjoy Vietnam while you heal.",
        },
      ],
      partnersTag: "Partner Clinics",
      partnersHeading: "Trusted clinics in Ho Chi Minh City",
      partnersBody:
        "We are finalizing partnerships with licensed dental clinics in Ho Chi Minh City. Details of partner clinics, treatments, and pricing will be published here soon.",
      partnersNote:
        "Run a dental clinic and want to partner with us? Get in touch and let's talk.",
      ctaHeading: "Curious if dental tourism is right for you?",
      ctaBody:
        "Tell us what treatment you are considering and we will get back to you with options and an estimated cost.",
      ctaButton: "Request a Quote",
    },
    services: {
      tag: "Our Tours",
      heading: "Find your next journey",
      body: "Every trip is designed and led in-house, with small groups, local guides, and itineraries built for travelers who want more than a checklist.",
      viewAllTours: "View all tours",
      noPackageHeading: "No fixed packages here yet",
      noPackageBody:
        "We don't have a published package for {label} yet, but every Unico trip can be built from scratch to match what you're after.",
      noPackageBodyGeneric: "No tours match this filter yet.",
      requestCustom: "Request a Custom Trip",
    },
    destinationsIndex: {
      tag: "Where We Go",
      heading: "Destinations",
      body: "Four countries, each with its own pace and character. Every itinerary is designed and led in-house.",
    },
    destinationDetail: {
      tag: "Destination",
      goodToKnow: "Good to know",
      whereItSits: "Where it sits",
      trips: "Trips",
      itineraries: "itineraries",
      noPackageHeading: "No fixed packages here yet",
      noPackageBody:
        "Every {name} trip can be built from scratch to match what you are after.",
      requestCustom: "Request a Custom Trip",
      ctaHeading: "Don't see what you're after?",
      ctaBody:
        "Every Unico itinerary can be tailor-made from scratch, in {name} or anywhere else we work.",
      ctaButton: "Start Planning",
    },
    blog: {
      tag: "The Journal",
      heading: "Notes from the field",
      body: "Destination guides, planning tips, and stories from our trip designers. Sample posts below use placeholder content, so connect a CMS or add static routes to publish your own.",
    },
    gallery: {
      tag: "Gallery",
      heading: "Moments from the road",
      body: "A small selection of places we've taken travelers over the years.",
    },
    tour: {
      highlights: "Highlights",
      itinerary: "Itinerary",
      included: "What's included",
      notIncluded: "Not included",
      perPerson: "per person",
      duration: "Duration",
      groupSize: "Group size",
      location: "Location",
      requestThisTrip: "Request This Trip",
    },
  },
  vi: {
    nav: {
      home: "Trang chủ",
      destinations: "Điểm đến",
      services: "Dịch vụ",
      news: "Tin tức",
      about: "Giới thiệu",
      contact: "Liên hệ",
      planATrip: "Tư Vấn Lịch Trình",
      enquiry: "Yêu cầu tư vấn",
      partnerWithUs: "Hợp tác cùng chúng tôi",
      language: "Ngôn ngữ",
      viewAllTours: "Xem tất cả tour",
      visaServices: "Dịch Vụ Visa",
    },
    footer: {
      tagline:
        "Unico Travel thiết kế những hành trình chỉn chu, đưa bạn đến những vùng đất thật, gặp gỡ con người thật và mang về những câu chuyện đáng nhớ, không đơn thuần chỉ là một chuyến tham quan.",
      exploreHeading: "Khám phá",
      destinations: "Điểm đến",
      allTours: "Tất cả tour",
      aboutUs: "Giới thiệu",
      gallery: "Thư viện ảnh",
      news: "Tin tức",
      contactHeading: "Liên hệ",
      copyright: "Unico Travel. Bảo lưu mọi quyền.",
      designedFor: "Dành cho những du khách đi đâu cũng có chủ đích.",
    },
    home: {
      heroTag: "Mỗi hành trình đều có chủ đích",
      heroTitle: "Những hành trình đáng nhớ",
      heroBody:
        "Unico Travel thiết kế các chuyến đi nhóm nhỏ và riêng tư đến những vùng đất ấn tượng nhất thế giới, nơi bạn được sống trọn từng khoảnh khắc bên những con người và địa danh có thật.",
      exploreTours: "Khám phá tour",
      planATrip: "Tư Vấn Lịch Trình",
      scroll: "Cuộn xuống",
      introTag: "Chúng tôi là ai",
      introHeading:
        "Chúng tôi xây dựng hành trình xoay quanh con người và vùng đất, chứ không phải một tờ lịch trình cứng nhắc.",
      introBody:
        "Unico Travel là một đội ngũ nhỏ những người thiết kế hành trình, từng sống, làm việc và rong ruổi ngay tại những nơi chúng tôi lên kế hoạch. Mỗi hành trình đều được xây dựng thủ công, không rập khuôn, không ngày nào là thừa.",
      moreAbout: "Tìm hiểu thêm về Unico",
      featuredTag: "Hành trình nổi bật",
      featuredHeading: "Điểm đến tiếp theo",
      whyTag: "Vì sao chọn chúng tôi",
      whyHeading: "Sự khác biệt của Unico",
      testimonialsTag: "Chia sẻ từ du khách",
      testimonialsHeading: "Du khách nói gì về chúng tôi",
      ctaHeading: "Sẵn sàng lên kế hoạch cho chuyến đi tiếp theo?",
      ctaBody:
        "Hãy cho chúng tôi biết bạn muốn đến đâu và điều gì quan trọng nhất với bạn, chúng tôi sẽ lo phần còn lại.",
      ctaButton: "Gửi Yêu Cầu",
      features: [
        {
          title: "Nhóm nhỏ",
          description:
            "Hầu hết các chuyến đi chỉ giới hạn tối đa 12 khách, để mỗi ngày trôi qua đều thong thả và gần gũi, không bị cuốn theo lịch trình cứng nhắc.",
        },
        {
          title: "Luôn có hướng dẫn viên bản địa",
          description:
            "Mỗi hành trình đều được dẫn dắt bởi hướng dẫn viên sinh sống tại chính nơi bạn ghé thăm.",
        },
        {
          title: "Nhịp độ hợp lý",
          description:
            "Ít điểm dừng hơn, nhiều thời gian hơn ở mỗi nơi. Không lịch trình dày đặc từ 6 giờ sáng đến 9 giờ tối.",
        },
        {
          title: "Giá cả minh bạch",
          description: "Không phí ẩn. Giá trong báo giá chính là giá bạn trả.",
        },
      ],
      testimonials: [
        {
          quote:
            "Unico Travel lên kế hoạch chuyến đi Việt Nam của gia đình tôi tới từng chi tiết nhỏ nhất, nhưng vẫn rất linh hoạt. Chuyến đi gia đình đáng nhớ nhất từ trước đến nay.",
          name: "Marissa T.",
          trip: "Vietnam Coastal Explorer",
        },
        {
          quote:
            "Chỉ riêng những đêm săn cực quang ở Iceland đã đáng giá cả chuyến đi. Hướng dẫn viên của chúng tôi luôn biết chính xác nên đến đâu dựa theo dự báo mỗi đêm.",
          name: "David & Priya K.",
          trip: "Iceland Northern Lights Expedition",
        },
        {
          quote:
            "Tôi từng dùng nhiều công ty du lịch khác, nhưng Unico là công ty đầu tiên khiến tôi cảm thấy hành trình thực sự được thiết kế riêng cho mình.",
          name: "Owen R.",
          trip: "Swiss Alps Adventure",
        },
      ],
    },
    about: {
      tag: "Giới thiệu Unico Travel",
      heading:
        "Chúng tôi lập ra Unico vì phần lớn các chuyến du lịch khi đó đều vội vã, rập khuôn, hoặc cả hai.",
      body: "Được sáng lập bởi một nhóm nhỏ cựu hướng dẫn viên và điều hành tour, Unico Travel ra đời để lên những chuyến đi đúng như cách chúng tôi muốn trải nghiệm, không vội vã, gắn bó thật sự với vùng đất, và luôn đặt du khách lên trên mọi khuôn mẫu có sẵn.",
      statsTag: "",
      stats: [
        { value: "12+", label: "Năm kinh nghiệm lên kế hoạch" },
        { value: "38", label: "Quốc gia đã phục vụ" },
        { value: "4.200+", label: "Du khách đã đồng hành" },
        { value: "4.9/5", label: "Đánh giá trung bình" },
      ],
      valuesTag: "Điều chúng tôi tin tưởng",
      valuesHeading: "Cách chúng tôi làm du lịch",
      values: [
        {
          title: "Chậm lại để thấy nhiều hơn",
          description:
            "Chúng tôi thà dành cho bạn ba ngày đáng nhớ tại một nơi, còn hơn bảy ngày vội vã qua năm địa điểm.",
        },
        {
          title: "Đối tác địa phương thật sự",
          description:
            "Chúng tôi hợp tác trực tiếp với các nhà nghỉ gia đình, hướng dẫn viên độc lập và đơn vị nhỏ, thay vì qua trung gian.",
        },
        {
          title: "Lên kế hoạch trung thực",
          description:
            "Giá cả rõ ràng, lịch trình thực tế, và câu trả lời thẳng thắn mỗi khi kế hoạch cần thay đổi.",
        },
      ],
      teamTag: "Những người đứng sau mỗi hành trình",
      teamHeading: "Gặp gỡ đội ngũ",
      team: [
        { name: "Lena Ortiz", role: "Nhà sáng lập & Trưởng nhóm thiết kế hành trình" },
        { name: "Marcus Webb", role: "Trưởng phòng Vận hành" },
        { name: "Aiko Tanaka", role: "Phụ trách chương trình Châu Á" },
        { name: "Priya Nair", role: "Phụ trách trải nghiệm khách hàng" },
      ],
      ctaHeading: "Muốn lên kế hoạch cùng chúng tôi?",
      ctaBody: "Chúng tôi rất muốn nghe bạn đang mơ đến điểm đến nào.",
      ctaButton: "Liên hệ ngay",
    },
    contact: {
      tag: "Liên hệ",
      heading: "Cùng lên kế hoạch cho chuyến đi của bạn",
      body: "Điền vào form bên dưới, đội ngũ thiết kế hành trình sẽ phản hồi trong vòng 1-2 ngày làm việc kèm ý tưởng và bước tiếp theo.",
      formName: "Họ và tên",
      formEmail: "Email",
      formPhone: "Số điện thoại",
      formDestination: "Điểm đến / Tour quan tâm",
      formDates: "Thời gian dự kiến",
      formDatesPlaceholder: "VD: Tháng 3 năm 2027",
      formTravelers: "Số lượng khách",
      formMessage: "Chia sẻ về chuyến đi bạn mong muốn",
      submit: "Gửi Yêu Cầu",
      sending: "Đang gửi...",
      successTitle: "Đã nhận được yêu cầu",
      successBody:
        "Cảm ơn bạn đã liên hệ. Đội ngũ thiết kế hành trình sẽ phản hồi trong vòng 1-2 ngày làm việc.",
      errorRequired: "Vui lòng điền họ tên, email và nội dung.",
      errorEmail: "Vui lòng nhập địa chỉ email hợp lệ.",
      errorGeneric: "Đã có lỗi xảy ra. Vui lòng thử lại.",
      errorNetwork: "Lỗi kết nối mạng. Vui lòng kiểm tra lại và thử lại.",
      detailsHeading: "Thông tin liên hệ",
      email: "Email",
      phone: "Điện thoại",
      office: "Văn phòng",
      hours: "Giờ làm việc",
      hoursValue: "Thứ 2 - Thứ 7, 8:30 - 18:00 (GMT+7)",
    },
    partners: {
      tag: "Dành cho đại lý & đối tác bán buôn",
      heading: "Hợp Tác Cùng Chúng Tôi",
      body1:
        "Với nhiều năm kinh nghiệm thiết kế những hành trình riêng biệt, Unico Travel không ngừng tạo ra những trải nghiệm du lịch mới mẻ khắp Việt Nam, Campuchia, Lào và Nhật Bản. Mỗi hành trình đều được xây dựng cẩn thận cho đối tác với mức giá cạnh tranh, giải pháp linh hoạt và một đội ngũ điều hành vững chắc đảm bảo mọi chi tiết đều được chăm chút.",
      body2:
        "Chúng tôi hiểu rằng mỗi thị trường đều khác nhau và mỗi khách hàng đều có kỳ vọng riêng. Vì vậy chúng tôi dành thời gian lắng nghe, thích ứng và xây dựng những trải nghiệm du lịch thực sự phù hợp với hoạt động kinh doanh của bạn. Mục tiêu của chúng tôi không chỉ đơn thuần là sắp xếp một chuyến đi, mà là trở thành đối tác địa phương đáng tin cậy mà bạn có thể yên tâm mỗi khi khách hàng của mình du lịch cùng chúng tôi.",
      body3:
        "Nếu bạn đang tìm kiếm một đối tác coi trọng mối quan hệ lâu dài, dịch vụ ổn định và giao tiếp cởi mở, chúng tôi rất mong được kết nối cùng bạn.",
      getInTouch: "Liên hệ với chúng tôi",
      sendEnquiry: "Gửi yêu cầu tư vấn",
      tradeshowsTag: "Gặp gỡ trực tiếp",
      tradeshowsHeading: "Hội chợ du lịch",
      tradeshowsBody:
        "Chúng tôi tham gia nhiều hội chợ và workshop du lịch trong năm để gặp gỡ trực tiếp các đối tác. Thông tin các sự kiện sắp tới sẽ sớm được cập nhật tại đây.",
      tradeshowsNote:
        "Có sự kiện nào bạn muốn gặp chúng tôi không? Hãy cho chúng tôi biết, chúng tôi sẽ cố gắng hết sức để có mặt.",
    },
    dentalTourism: {
      tag: "Dịch Vụ Mới",
      heading: "Du Lịch Nha Khoa",
      intro:
        "Vừa được chăm sóc răng miệng chất lượng, vừa có một kỳ nghỉ đúng nghĩa trong cùng một chuyến đi. Chúng tôi kết nối bạn với các phòng khám nha khoa uy tín tại Việt Nam và xây dựng lịch trình xoay quanh thời gian điều trị, hồi phục của bạn.",
      whyTag: "Vì Sao Chọn Việt Nam",
      whyHeading: "Tiết kiệm chi phí nha khoa mà không phải đánh đổi chất lượng",
      why: [
        {
          title: "Tiết kiệm đáng kể",
          description:
            "Chi phí điều trị nha khoa tại Việt Nam thường chỉ bằng một phần nhỏ so với Mỹ, Úc hay châu Âu, mà chất lượng vẫn được đảm bảo.",
        },
        {
          title: "Bác sĩ được đào tạo quốc tế",
          description:
            "Nhiều phòng khám đối tác của chúng tôi có bác sĩ từng tu nghiệp hoặc lấy chứng chỉ ở nước ngoài, sử dụng thiết bị và vật liệu hiện đại.",
        },
        {
          title: "Hồi phục theo cách dễ chịu hơn",
          description:
            "Nghỉ dưỡng và hồi phục ở một nơi ấm áp, thú vị thay vì ở nhà một mình, lịch trình được sắp xếp phù hợp với tiến độ điều trị của bạn.",
        },
        {
          title: "Một đầu mối duy nhất",
          description:
            "Chúng tôi lo luôn phần phòng khám, di chuyển và thời gian hồi phục, để bạn không phải tự sắp xếp hai chuyến đi riêng biệt.",
        },
      ],
      howTag: "Quy Trình",
      howHeading: "Từ tin nhắn đầu tiên đến ngày bạn bay về",
      how: [
        {
          title: "Cho chúng tôi biết nhu cầu của bạn",
          description: "Chia sẻ tình trạng răng miệng, ngân sách dự kiến và thời gian bạn muốn đi.",
        },
        {
          title: "Chúng tôi báo giá cho bạn",
          description:
            "Chúng tôi kết nối bạn với phòng khám đối tác đã được kiểm chứng và gửi lại phác đồ điều trị cùng mức giá rõ ràng.",
        },
        {
          title: "Chúng tôi lên lịch trình cho bạn",
          description:
            "Chuyến đi được sắp xếp quanh lịch hẹn khám và thời gian hồi phục, xen kẽ những điểm tham quan thật sự.",
        },
        {
          title: "Bạn đi và điều trị",
          description: "Bạn đến nơi, hoàn tất điều trị và tận hưởng Việt Nam trong lúc hồi phục.",
        },
      ],
      partnersTag: "Phòng Khám Đối Tác",
      partnersHeading: "Phòng khám uy tín tại Thành phố Hồ Chí Minh",
      partnersBody:
        "Chúng tôi đang hoàn tất hợp tác với các phòng khám nha khoa được cấp phép tại Thành phố Hồ Chí Minh. Thông tin phòng khám đối tác, dịch vụ và bảng giá sẽ sớm được cập nhật tại đây.",
      partnersNote:
        "Bạn đang điều hành phòng khám nha khoa và muốn hợp tác cùng chúng tôi? Hãy liên hệ để chúng tôi tìm hiểu thêm.",
      ctaHeading: "Chưa chắc du lịch nha khoa có phù hợp với bạn?",
      ctaBody:
        "Cho chúng tôi biết bạn đang cân nhắc dịch vụ nha khoa nào, chúng tôi sẽ phản hồi với các lựa chọn và chi phí dự kiến.",
      ctaButton: "Yêu Cầu Báo Giá",
    },
    services: {
      tag: "Các tour của chúng tôi",
      heading: "Tìm hành trình tiếp theo của bạn",
      body: "Mỗi hành trình đều được thiết kế và điều hành trực tiếp, với nhóm nhỏ, hướng dẫn viên bản địa và lịch trình dành cho những du khách muốn nhiều hơn một danh sách điểm đến.",
      viewAllTours: "Xem tất cả tour",
      noPackageHeading: "Chưa có tour cố định tại đây",
      noPackageBody:
        "Chúng tôi chưa có tour cố định cho {label}, nhưng mọi hành trình của Unico đều có thể được thiết kế riêng theo đúng mong muốn của bạn.",
      noPackageBodyGeneric: "Chưa có tour nào phù hợp với bộ lọc này.",
      requestCustom: "Yêu cầu tour riêng",
    },
    destinationsIndex: {
      tag: "Những nơi chúng tôi đến",
      heading: "Điểm đến",
      body: "Bốn quốc gia, mỗi nơi mang một nhịp độ và bản sắc riêng. Mọi hành trình đều được thiết kế và điều hành trực tiếp.",
    },
    destinationDetail: {
      tag: "Điểm đến",
      goodToKnow: "Thông tin hữu ích",
      whereItSits: "Vị trí địa lý",
      trips: "Hành trình",
      itineraries: "hành trình",
      noPackageHeading: "Chưa có tour cố định tại đây",
      noPackageBody:
        "Mọi hành trình tại {name} đều có thể được thiết kế riêng theo đúng mong muốn của bạn.",
      requestCustom: "Yêu cầu tour riêng",
      ctaHeading: "Chưa tìm thấy điều bạn muốn?",
      ctaBody:
        "Mọi hành trình của Unico đều có thể thiết kế riêng từ đầu, tại {name} hay bất kỳ nơi nào chúng tôi hoạt động.",
      ctaButton: "Lên Lịch Trình Ngay",
    },
    blog: {
      tag: "Nhật ký hành trình",
      heading: "Ghi chép từ thực địa",
      body: "Cẩm nang điểm đến, mẹo lên kế hoạch và câu chuyện từ đội ngũ thiết kế hành trình của chúng tôi. Các bài viết bên dưới là nội dung mẫu, hãy kết nối CMS hoặc thêm route tĩnh để đăng bài viết thật.",
    },
    gallery: {
      tag: "Thư viện ảnh",
      heading: "Khoảnh khắc trên hành trình",
      body: "Một số hình ảnh chọn lọc từ các chuyến đi chúng tôi đã đồng hành cùng du khách qua nhiều năm.",
    },
    tour: {
      highlights: "Điểm nổi bật",
      itinerary: "Lịch trình",
      included: "Đã bao gồm",
      notIncluded: "Không bao gồm",
      perPerson: "mỗi khách",
      duration: "Thời gian",
      groupSize: "Quy mô đoàn",
      location: "Địa điểm",
      requestThisTrip: "Yêu cầu hành trình này",
    },
  },
} as const;

export function t<T = string>(locale: Locale, path: string): T {
  const parts = path.split(".");
  let value: unknown = ui[locale];
  for (const part of parts) {
    if (value && typeof value === "object" && part in (value as object)) {
      value = (value as Record<string, unknown>)[part];
    } else {
      value = undefined;
      break;
    }
  }
  return (value as T) ?? (path as unknown as T);
}
