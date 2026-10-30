export type Language = 'ar' | 'en';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  iconName: string;
}

export interface BookItem {
  id: number;
  number: string;
  title: string;
  arabicTitle: string;
  stage: string;
  stageType: 'foundation' | 'intermediate' | 'advanced';
  description: string;
  image?: string;
  units: string;
  badge: string;
  author?: string;
  authorUrl?: string;
  publisher?: string;
  publisherUrl?: string;
  subject?: string;
  subjectUrl?: string;
  bulletPoints?: string[];
  keyFeatures?: string[];
}

export interface BooksSectionData {
  badge: string;
  title: string;
  titleAccent: string;
  description: string;
  filterAll: string;
  filterFoundation: string;
  filterIntermediate: string;
  filterAdvanced: string;
  ctaText: string;
  placeholderNotice: string;
  seeMore: string;
  showLess: string;
  showingCountText?: string;
  books: BookItem[];
}

export interface ContentData {
  brand: {
    name: string;
    subname: string;
    tagline: string;
  };
  nav: {
    home: string;
    about: string;
    books?: string;
    journey: string;
    features: string;
    whyUs: string;
    contact: string;
    login: string;
    getStarted: string;
  };
  booksSection?: BooksSectionData;
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: {
      studentsCount: string;
      studentsLabel: string;
      lessonsCount: string;
      lessonsLabel: string;
      ratingValue: string;
      ratingLabel: string;
    };
    previewCard: {
      dailyWordTitle: string;
      word: string;
      diacritics: string;
      meaning: string;
      root: string;
      grammarTip: string;
      audioLabel: string;
      progressLabel: string;
      streakLabel: string;
    };
  };
  about: {
    badge: string;
    title: string;
    titleAccent: string;
    description1: string;
    description2: string;
    bulletPoints: {
      title: string;
      text: string;
    }[];
    quote: string;
    quoteAuthor: string;
    badgeYears: string;
    badgeYearsText: string;
  };
  journey: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    steps: StepItem[];
  };
  features: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    items: FeatureItem[];
  };
  whyChooseUs: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    benefits: BenefitItem[];
    experienceBox: {
      title: string;
      subtitle: string;
      actionText: string;
    };
  };
  cta: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    buttonText: string;
    secondaryButtonText: string;
    guaranteeText: string;
    features: string[];
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    programsTitle: string;
    contactTitle: string;
    programs: { label: string; href: string }[];
    quickLinks: { label: string; href: string }[];
    contactInfo: {
      email: string;
      phone: string;
      location: string;
      workingHours: string;
    };
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  modal: {
    loginTitle: string;
    loginSubtitle: string;
    getStartedTitle: string;
    getStartedSubtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    nameLabel: string;
    namePlaceholder: string;
    levelLabel: string;
    levelOptions: string[];
    submitLogin: string;
    submitGetStarted: string;
    successMessage: string;
    successTitle: string;
    close: string;
    note: string;
  };
}

export const content: Record<Language, ContentData> = {
  ar: {
    brand: {
      name: "رِحْلَةُ الْعَرَبِيَّة",
      subname: "Riḥlat al-ʿArabiyyah",
      tagline: "أكاديمية إتقان لغة الضاد والبيان",
    },
    nav: {
      home: "الرئيسية",
      books: "الكتب (١٢)",
      about: "عن المنصة",
      journey: "المسار",
      features: "المزايا",
      whyUs: "الأثر",
      contact: "تواصل",
      login: "دخول",
      getStarted: "ابدأ مجاناً",
    },
    booksSection: {
      badge: "المناهج والكتب المقررة",
      title: "المسار التعليمي الشامل",
      titleAccent: "عبر ١٢ كتاباً متدرجاً",
      description:
        "سلسلة أكاديمية متكاملة مؤلفة من اثني عشر كتاباً متدرجاً ترتقي بلسانك وفهمك خطوة بخطوة من رسم الحرف الأول حتى بلاغة الفصاحة والبيان.",
      filterAll: "جميع الكتب (١٢)",
      filterFoundation: "المرحلة التأسيسية (١ - ٤)",
      filterIntermediate: "المرحلة المتوسطة (٥ - ٨)",
      filterAdvanced: "المرحلة المتقدمة والبلاغة (٩ - ١٢)",
      ctaText: "تفاصيل الكتاب",
      placeholderNotice: "المساحة المخصصة لغلاف الكتاب",
      seeMore: "عرض جميع الكتب (١٢ كتاباً)",
      showLess: "عرض أقل",
      showingCountText: "يتم عرض ٤ من أصل ١٢ كتاباً في هذه النظرة السريعة",
      books: [
        {
          id: 1,
          number: "٠١",
          title: "العربية بين يدي أولادنا — الكتاب الأول",
          arabicTitle: "الكتاب الأول: التأسيس الصوتي والتواصل الأولي",
          stage: "المرحلة التأسيسية",
          stageType: "foundation",
          description:
            "المجلد التأسيسي الأول من سلسلة 'العربية بين يدي أولادنا' الموجهة للناشئة والأطفال غير الناطقين بالعربية (الأعمار ٥-١٨ عاماً). يعتمد منهجية الانغماس اللغوي المباشر لمحاكاة اكتساب اللغة الأم دون وسيط مترجم؛ متدرجاً من الاستماع والنطق إلى إتقان مخارج الحروف والتعبير الأولي.",
          image: "/book1.jpg",
          units: "١٢ وحدة تعليمية",
          badge: "الكتاب ١ • للأعمار ٥-١٨",
          author: "د. عبد الرحمن الفوزان ود. محمد آل الشيخ",
          authorUrl: "https://ilannoor.com/author/dr-abdur-rahman-bin-ibrahim-al-fawjan/books",
          publisher: "دار إيلان نور للنشر",
          publisherUrl: "https://ilannoor.com/publisher/ilannoor-publication/books",
          subject: "العربية للجميع",
          subjectUrl: "https://ilannoor.com/subject/arabic-for-all/books",
          bulletPoints: [
            "طريقة الانغماس اللغوي المباشر دون الحاجة إلى لغة وسيطة كاللغة الأم تماماً",
            "تأسيس صوتي متكامل للنطق السليم والاستماع وتمييز مخارج الحروف الهجائية",
            "مفردات مصورة وتراكيب حوارية ميسرة للمواقف اليومية للطفل والناشئ",
            "رموز QR مدمجة للاستماع الفوري للتسجيلات الصوتية النقية من متحدثين أصليين",
          ],
          keyFeatures: [
            "أسلوب شيق وجذاب يدمج بين الرسوم التوضيحية والأنشطة اللغوية التطبيقية",
            "بناء تدريجي مدروس لعناصر اللغة العربية وأصواتها لبناء الثقة في التحدث",
            "تحقيق الكفايات الثلاث: اللغوية (المعرفة)، والاتصالية (التعبير)، والثقافية",
            "مدخل متين للارتقاء لفهم لغة القرآن الكريم والحديث النبوي الشريف",
          ],
        },
        {
          id: 2,
          number: "٠٢",
          title: "العربية بين يدي أولادنا — الكتاب الثاني",
          arabicTitle: "الكتاب الثاني: المفردات والتعبير اليومي والنشاط",
          stage: "المرحلة التأسيسية",
          stageType: "foundation",
          description:
            "الكتاب الثاني من سلسلة 'العربية بين يدي أولادنا'؛ يرتقي بالمتعلم من مرحلة الكلمات المفردة إلى بناء الجمل الحوارية اليومية وأيام الأسبوع والأنشطة المدرسية والرياضية. يتميز بتكامله التام مع سلسلة 'العربية بين يديك' للكبار لضمان مسار تعليمي متصل ومثمر.",
          image: "/book2.jpg",
          units: "١٤ وحدة تعليمية",
          badge: "الكتاب ٢ • للأعمار ٥-١٨",
          author: "د. عبد الرحمن الفوزان ود. محمد آل الشيخ",
          authorUrl: "https://ilannoor.com/author/dr-abdur-rahman-bin-ibrahim-al-fawjan/books",
          publisher: "دار إيلان نور للنشر",
          publisherUrl: "https://ilannoor.com/publisher/ilannoor-publication/books",
          subject: "العربية للجميع",
          subjectUrl: "https://ilannoor.com/subject/arabic-for-all/books",
          bulletPoints: [
            "توسيع الحصيلة اللغوية بمواقف حوارية حيوية (أيام الأسبوع، المدرسة، الأنشطة، الرياضة)",
            "تعزيز مهارات الاستماع والتحدث والتعبير الشفهي وبدايات القراءة السليمة",
            "تدريبات مكررة ومنتظمة لترسيخ التراكيب اللغوية الأساسية دون تعقيد",
            "تناغم منهجي كامل يمهد للانتقال السلس إلى سلسلة 'العربية بين يديك'",
          ],
          keyFeatures: [
            "السير نحو تمكين الطالب من أكثر من ٢٠٠٠ مفردة شائعة للحياة اليومية",
            "دعم صوتي كامل بتقنية QR Code لتمارين النطق والمحادثة في الصف والبيت",
            "تمارين تطبيقية وكتابية ثرية تكسر حاجز التردد وتعزز الطلاقة",
            "أدلة إرشادية وتوجيهات تربوية دقيقة للمعلمين وأولياء الأمور",
          ],
        },
        {
          id: 3,
          number: "٠٣",
          title: "العربية بين يدي أولادنا — الكتاب الثالث",
          arabicTitle: "الكتاب الثالث: القراءة والكتابة والتراكيب الوظيفية",
          stage: "المرحلة التأسيسية",
          stageType: "foundation",
          description:
            "المجلد الثالث الذي يركز على مهارات 'اقرأ واكتب' والتعبير الكتابي والوظيفي. يقود المتعلم عبر مشاهد تعاونية وأنشطة ممتعة لاستيعاب قواعد الجمل البسيطة، وصيغ الاستفهام والجواب، والتعبير الدقيق عن المشاعر والاهتمامات ومحيط الطفل الاجتماعي.",
          image: "/book3.jpg",
          units: "١٦ وحدة تعليمية",
          badge: "الكتاب ٣ • للأعمار ٥-١٨",
          author: "د. عبد الرحمن الفوزان ود. محمد آل الشيخ",
          authorUrl: "https://ilannoor.com/author/dr-abdur-rahman-bin-ibrahim-al-fawjan/books",
          publisher: "دار إيلان نور للنشر",
          publisherUrl: "https://ilannoor.com/publisher/ilannoor-publication/books",
          subject: "العربية للجميع",
          subjectUrl: "https://ilannoor.com/subject/arabic-for-all/books",
          bulletPoints: [
            "وحدات تطبيقية متكاملة لمهارات 'اقرأ واكتب' وممارسة التراكيب اللغوية الوظيفية",
            "تمكين صياغة السؤال والجواب والتفاعل الحواري التلقائي مع الزملاء والمعلمين",
            "غرس القواعد الأساسية والصوتية بصورة عملية وتطبيقية ميسرة ومشوقة",
            "استماع ومتابعة مباشرة لنصوص القراءة عبر مسح رموز الـ QR المصاحبة",
          ],
          keyFeatures: [
            "تنمية التفكير باللغة العربية الفصحى والتعبير العفوي في المواقف المختلفة",
            "تمارين مصورة مكثفة تعزز مخزون المفردات الحية لدى الطالب الشاب",
            "غرس القيم والآداب الإسلامية والثقافية عبر الحوارات الممتعة الهادفة",
            "إعداد منهجي متين للمراحل الدراسية والامتحانات اللغوية التأسيسية",
          ],
        },
        {
          id: 4,
          number: "٠٤",
          title: "العربية بين يدي أولادنا — الكتاب الرابع",
          arabicTitle: "الكتاب الرابع: السفر والمحادثة المركبة والنصوص المتصلة",
          stage: "المرحلة التأسيسية",
          stageType: "foundation",
          description:
            "الكتاب الختامي للمرحلة التأسيسية؛ ينقل الطالب إلى رحاب النصوص المتصلة وسياقات السفر والمواصلات والجغرافيا والحوارات المركبة. يمكّن الطالب من فهم الخطاب العربي الممتد وكتابة فقرات متماسكة، متوجاً المرحلة التأسيسية وممهداً للانطلاق في المرحلة المتوسطة.",
          image: "/book4.jpg",
          units: "١٦ وحدة تعليمية",
          badge: "الكتاب ٤ • للأعمار ٥-١٨",
          author: "د. عبد الرحمن الفوزان ود. محمد آل الشيخ",
          authorUrl: "https://ilannoor.com/author/dr-abdur-rahman-bin-ibrahim-al-fawjan/books",
          publisher: "دار إيلان نور للنشر",
          publisherUrl: "https://ilannoor.com/publisher/ilannoor-publication/books",
          subject: "العربية للجميع",
          subjectUrl: "https://ilannoor.com/subject/arabic-for-all/books",
          bulletPoints: [
            "نصوص قرائية وتعبيرية متصلة ترتقي بأسلوب التعبير والإنشاء والربط بين الجمل",
            "موضوعات شيقة تدور حول السفر والتنقل والجغرافيا والبيئة الاجتماعية المحيطة",
            "استكمال ٢٠٠٠ مفردة أساسية مع ترسيخ طلاقة النطق والاستعمال الفعلي",
            "جسر عبور مباشر ومتين نحو سلسلة 'العربية بين يديك' والمرحلة المتوسطة",
          ],
          keyFeatures: [
            "ترسيخ الكفاية الاتصالية والثقافية للتعامل مع الناطقين بالعربية بثقة تامة",
            "وحدات مراجعة شاملة واختبارات قياس الكفاءة التراكمية للمرحلة التأسيسية",
            "مكتبة صوتية تفاعلية بـ QR Code لتدريب الأذن على النطق السليم وسرعة الفهم",
            "بناء جسر معرفي حصين لفهم الآيات الكريمة والأحاديث النبوية الشريفة",
          ],
        },
        {
          id: 5,
          number: "٠٥",
          title: "مبادئ النحو وقواعد الإعراب",
          arabicTitle: "الكتاب الخامس: أصول الجملة العربية",
          stage: "المرحلة المتوسطة",
          stageType: "intermediate",
          description: "دراسة الجملة الاسمية والجملة الفعلية، وعلامات الإعراب الأصلية والفرعية، وأساسيات الضبط.",
          image: "",
          units: "١٨ وحدة",
          badge: "المستوى الخامس",
        },
        {
          id: 6,
          number: "٠٦",
          title: "علم الصرف وأوزان الأفعال",
          arabicTitle: "الكتاب السادس: البنية الصرفية والمشتقات",
          stage: "المرحلة المتوسطة",
          stageType: "intermediate",
          description: "أوزان الأفعال المجردة والمزيدة، واسم الفاعل والمفعول والمصادر وتصريف الأزمنة.",
          image: "",
          units: "١٦ وحدة",
          badge: "المستوى السادس",
        },
        {
          id: 7,
          number: "٠٧",
          title: "الحوار والتواصل الفصيح",
          arabicTitle: "الكتاب السابع: فنون المحادثة الفصيحة",
          stage: "المرحلة المتوسطة",
          stageType: "intermediate",
          description: "تدريبات مكثفة على التحدث بالفصحى العفوية، والمناظرات اللغوية، والمواقف الحوارية.",
          image: "",
          units: "١٤ وحدة",
          badge: "المستوى السابع",
        },
        {
          id: 8,
          number: "٠٨",
          title: "شواهد النصوص والتحليل اللغوي",
          arabicTitle: "الكتاب الثامن: روائع البيان والتذوق",
          stage: "المرحلة المتوسطة",
          stageType: "intermediate",
          description: "تحليل نصوص قرآنية وأحاديث نبوية وأقوال أدبية مأثورة تجمع بين الإعراب والتدبر الدقيق.",
          image: "",
          units: "١٦ وحدة",
          badge: "المستوى الثامن",
        },
        {
          id: 9,
          number: "٠٩",
          title: "علم المعاني ودقائق التعبير",
          arabicTitle: "الكتاب التاسع: أسرار التقديم والتأخير",
          stage: "المرحلة المتقدمة",
          stageType: "advanced",
          description: "مقدمة علم البلاغة في أحوال الإسناد، والتقديم والتأخير، والحذف والذكر، وأساليب القصر.",
          image: "",
          units: "٢٠ وحدة",
          badge: "المستوى التاسع",
        },
        {
          id: 10,
          number: "١٠",
          title: "علم البيان وفنون التشبيه",
          arabicTitle: "الكتاب العاشر: الصور البيانية والمجاز",
          stage: "المرحلة المتقدمة",
          stageType: "advanced",
          description: "دراسة معمقة في التشبيه التمثيلي والضمني، والاستعارة المكنية والتصريحية، والكناية الأدبية.",
          image: "",
          units: "١٨ وحدة",
          badge: "المستوى العاشر",
        },
        {
          id: 11,
          number: "١١",
          title: "الأدب العربي وشواهد الشعر",
          arabicTitle: "الكتاب الحادي عشر: عيون الشعر العربي",
          stage: "المرحلة المتقدمة",
          stageType: "advanced",
          description: "قراءة نقدية وتذوق لروائع الشعر الجاهلي والإسلامي والأندلسي وأصول العروض والإيقاع.",
          image: "",
          units: "١٦ وحدة",
          badge: "المستوى الحادي عشر",
        },
        {
          id: 12,
          number: "١٢",
          title: "ملكة اللسان وبلاغة التأليف",
          arabicTitle: "الكتاب الثاني عشر: تاج الفصاحة والبيان",
          stage: "المرحلة المتقدمة",
          stageType: "advanced",
          description: "المشروع التتويجي للملكة اللغوية: الكتابة الإنشائية الرفيعة، والارتجال الخطابي، والإتقان التام.",
          image: "",
          units: "٢٠ وحدة",
          badge: "المستوى الثاني عشر",
        },
      ],
    },
    hero: {
      badge: "المنصة الأولى للفصاحة والبيان",
      headline: "فَصَاحَةُ اللِّسَانِ،",
      headlineAccent: "وَجَمَالُ الْبَيَان",
      description:
        "منهجية أصيلة متدرجة ترتقي بلسانك من رسم الحرف إلى بلاغة القول والتدبر، بأسلوب عصري يجمع بين عمق التراث والذكاء التفاعلي.",
      primaryCta: "ابدأ رحلتك الآن",
      secondaryCta: "استكشف المنهج",
      stats: {
        studentsCount: "+١٥,٠٠٠",
        studentsLabel: "طالب حول العالم",
        lessonsCount: "+٤٥٠",
        lessonsLabel: "درس تفاعلي متقن",
        ratingValue: "٤.٩ / ٥",
        ratingLabel: "تقييم المتعلمين",
      },
      previewCard: {
        dailyWordTitle: "فائدة لغوية",
        word: "الفَصَاحَةُ",
        diacritics: "الـْفَـصَـاحَـةُ • اسم",
        meaning: "خلوص الكلام من التعقيد، ووضوح دلالة المعنى.",
        root: "الجذر: (ف - ص - ح)",
        grammarTip: "﴿وَأَخِي هَارُونُ هُوَ أَفْصَحُ مِنِّي لِسَانًا﴾",
        audioLabel: "استمع للنطق الفصيح",
        progressLabel: "المستوى: متوسط فصيح",
        streakLabel: "١٢ يوماً من الالتزام 🔥",
      },
    },
    about: {
      badge: "عن الأكاديمية",
      title: "تأصيلٌ معرفي،",
      titleAccent: "وتجربةٌ تعليميةٌ استثنائية",
      description1:
        "بيئة تعليمية هادئة صُممت لتمنحك تمكناً لغوياً أصيلاً وتذوقاً لجماليات اللغة العربية دون تشتيت.",
      description2:
        "تدرج منهجي يربط بين كتب النحو والبلاغة المعتمدة، وشروح صوتية ومرئية فائقة الدقة تركز على الملكة اللسانية.",
      bulletPoints: [
        {
          title: "مناهج مؤصلة",
          text: "مستمدة من أمهات كتب اللغة وفق تدرج أكاديمي رصين.",
        },
        {
          title: "تكامل المهارات",
          text: "تدريب متوازن على الاستماع، القراءة الصامتة والجهرية، والإعراب.",
        },
        {
          title: "تركيز عميق",
          text: "واجهة معتمة فاخرة تعين على الاستغراق وصفاء الذهن.",
        },
      ],
      quote: "«تعلَّموا العربيةَ؛ فإنّها تُثبّتُ العقلَ، وتزيدُ في المروءةِ»",
      quoteAuthor: "عمر بن الخطاب رضي الله عنه",
      badgeYears: "١٠٠٪",
      badgeYearsText: "منهج معتمد وموثق لغوياً",
    },
    journey: {
      badge: "مسار التعلم",
      title: "أربعُ محطاتٍ متقنة،",
      titleAccent: "تقودك للإتقان التام",
      description:
        "خريطة طريق واضحة تبني لغتك خطوة بخطوة من التأسيس الصوتي حتى بلاغة التعبير.",
      steps: [
        {
          number: "٠١",
          title: "تحديد المستوى",
          description: "تقييم ذكي فوري يحدد مستواك ونقطة انطلاقك المناسبة.",
          highlight: "تقييم في ٥ دقائق",
          iconName: "Compass",
        },
        {
          number: "٠٢",
          title: "الكتب المنهجية",
          description: "كتب رقمية تفاعلية مدعومة بنطق صوتي نقي وشرح دقيق.",
          highlight: "محتوى رقمي متكامل",
          iconName: "BookOpen",
        },
        {
          number: "٠٣",
          title: "التطبيقات والتمارين",
          description: "تدريبات مستمرة على الضبط بالشكل، الإعراب، وتصريف الأفعال.",
          highlight: "تصحيح تلقائي وشرح فوري",
          iconName: "PenTool",
        },
        {
          number: "٠٤",
          title: "الإتقان والاعتماد",
          description: "لوحة مؤشرات لمتابعة نمو حصيلتك اللغوية وشهادات إتمام معتمدة.",
          highlight: "شهادات موثقة رقمياً",
          iconName: "Award",
        },
      ],
    },
    features: {
      badge: "المزايا",
      title: "أدواتٌ ذكية،",
      titleAccent: "لأثرٍ معرفيٍّ مستدام",
      description:
        "كل ميزة صُممت لتيسير اكتساب الملكة اللغوية واستحضارها بيسر وفصاحة.",
      items: [
        {
          title: "منهج عربي مؤصل",
          description: "تدرج شامل يغطي الأصوات، النحو، الصرف، وفنون البلاغة الأدبية.",
          iconName: "Library",
          tag: "شامل ومؤصل",
        },
        {
          title: "تسجيلات صوتية نقية",
          description: "نطق فصيح بأصوات نخبة من القراء المتخصصين مع تظليل متزامن للنص.",
          iconName: "Volume2",
          tag: "نطق فصيح",
        },
        {
          title: "تمارين تطبيقية تفاعلية",
          description: "تدريبات ذكية لضبط أواخر الكلمات وحفظ المفردات في سياقها القرآني والأدبي.",
          iconName: "CheckCircle2",
          tag: "ممارسة عملية",
        },
        {
          title: "تقييمات فورية",
          description: "اختبارات مرحلية بعد كل باب مع توجيهات لغوية دقيقة لسد أي فجوة.",
          iconName: "FileCheck",
          tag: "قياس دقيق",
        },
        {
          title: "متابعة التقدم الذكي",
          description: "إحصاءات بيانية للكلمات المكتسبة، ساعات الاستماع، وسلاسل الالتزام.",
          iconName: "TrendingUp",
          tag: "مؤشرات حية",
        },
        {
          title: "تكرار متباعد ذكي",
          description: "خوارزمية ذكية تعيد مراجعة القواعد والمفردات لتثبيتها في الذاكرة الدائمة.",
          iconName: "Sparkles",
          tag: "تثبيت الذاكرة",
        },
      ],
    },
    whyChooseUs: {
      badge: "معايير الجودة",
      title: "معايير النخبة،",
      titleAccent: "في تعليم لغة الضاد",
      description:
        "نبني لك الأساس اللغوي المتين الذي يمكّنك من التفكير والتحدث بالعربية الفصحى باقتدار.",
      benefits: [
        {
          title: "محتوى محكّم لغوياً",
          description: "مراجعة دقيقة بإشراف نخبة من أساتذة العربية المتخصصين.",
          stat: "١٠٠٪",
          statLabel: "تدقيق معتمد",
          iconName: "ShieldCheck",
        },
        {
          title: "تدرج منهجي متقن",
          description: "سلم تعليمي يضمن الانتقال السلس دون فجوات معرفية.",
          stat: "٦",
          statLabel: "مستويات مدروسة",
          iconName: "Layers",
        },
        {
          title: "تجربة رقمية ميسرة",
          description: "واجهة معتمة فائقة الأناقة تعمل بسلاسة على كافة الأجهزة.",
          stat: "٢٤/٧",
          statLabel: "وصول دائم",
          iconName: "Smartphone",
        },
        {
          title: "شواهد قرآنية وأدبية",
          description: "ربط القواعد النحوية بالسياقات الأدبية والقرآنية الرفيعة.",
          stat: "+٢,٠٠٠",
          statLabel: "شاهد أدبي أصيل",
          iconName: "BookMarked",
        },
      ],
      experienceBox: {
        title: "هل ترغب في تحديد مستواك اللغوي الآن؟",
        subtitle: "أجرِ التقييم المجاني في ٥ دقائق واكتشف مسارك التعليمي المقترح.",
        actionText: "ابدأ التقييم مجاناً",
      },
    },
    cta: {
      badge: "انضم للنخبة",
      title: "ابْدَأْ رِحْلَتَكَ الْيَوْمَ فِي",
      titleAccent: "عَالَمِ الْفَصَاحَةِ وَالْبَيَان",
      description:
        "لا تؤجل إتقان لغة القرآن والأدب. انضم لآلاف المتعلمين وابدأ المستوى التأسيسي مجاناً.",
      buttonText: "ابدأ التعلم الآن مجاناً",
      secondaryButtonText: "استكشف الخطة",
      guaranteeText: "وصول فوري • بدون بطاقة ائتمان • مستوى تمهيدي كامل مجاناً",
      features: [
        "وصول مجاني للكتاب الأول",
        "تقييم مستوى فوري",
        "مجتمع طلابي تفاعلي",
      ],
    },
    footer: {
      description:
        "أكاديمية رقمية متطورة لإتقان اللغة العربية الفصحى وعلوم البيان، تجمع بين أصالة المنهج وأحدث تقنيات التعلم التفاعلي.",
      quickLinksTitle: "روابط سريعة",
      programsTitle: "المسارات",
      contactTitle: "التواصل",
      programs: [
        { label: "الأصوات والتأسيس", href: "#features" },
        { label: "القراءة المتدرجة", href: "#features" },
        { label: "النحو والصرف", href: "#features" },
        { label: "البلاغة والبيان", href: "#features" },
      ],
      quickLinks: [
        { label: "الرئيسية", href: "#home" },
        { label: "عن المنصة", href: "#about" },
        { label: "المسار", href: "#journey" },
        { label: "المزايا", href: "#features" },
        { label: "الأثر", href: "#why-us" },
      ],
      contactInfo: {
        email: "support@arabicpath.edu",
        phone: "+966 11 400 8899",
        location: "الرياض، المملكة العربية السعودية",
        workingHours: "الأحد - الخميس: ٩:٠٠ ص - ٦:٠٠ م",
      },
      newsletterTitle: "النشرة اللغوية",
      newsletterDesc: "درر لغوية وفوائد نحوية أسبوعية.",
      newsletterPlaceholder: "بريدك الإلكتروني...",
      newsletterButton: "اشتراك",
      rights: "جميع الحقوق محفوظة © 2026 رِحْلَةُ الْعَرَبِيَّة",
      privacy: "الخصوصية",
      terms: "الشروط",
    },
    modal: {
      loginTitle: "تسجيل الدخول",
      loginSubtitle: "أهلاً بك مجدداً في رحلتك في لغة الضاد",
      getStartedTitle: "ابدأ رحلتك في العربية",
      getStartedSubtitle: "أنشئ حسابك المجاني في ثوانٍ وابدأ التعلم فوراً",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "name@example.com",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "زيد بن ثابت",
      levelLabel: "مستواك الحالي",
      levelOptions: [
        "مبتدئ (الحروف والقراءة التأسيسية)",
        "متوسط (قواعد النحو والمحادثة)",
        "متقدم (البلاغة والأدب والفصاحة)",
        "أرغب في إجراء اختبار تحديد المستوى",
      ],
      submitLogin: "دخول",
      submitGetStarted: "تأكيد وبدء التجربة المجانية",
      successTitle: "تم استلام طلبك بنجاح!",
      successMessage:
        "مرحباً بك في رِحْلَةِ الْعَرَبِيَّة! تم إرسال رابط التفعيل إلى بريدك الإلكتروني.",
      close: "إغلاق",
      note: "نحافظ على خصوصية بياناتك بأعلى معايير الأمان.",
    },
  },
  en: {
    brand: {
      name: "Riḥlat al-ʿArabiyyah",
      subname: "رِحْلَةُ الْعَرَبِيَّة",
      tagline: "The Premier Academy for Classical Arabic Mastery",
    },
    nav: {
      home: "Home",
      books: "12 Books",
      about: "About",
      journey: "Path",
      features: "Features",
      whyUs: "Impact",
      contact: "Contact",
      login: "Log In",
      getStarted: "Start Free",
    },
    booksSection: {
      badge: "Core Curriculum Textbooks",
      title: "The 12-Book Pathway To",
      titleAccent: "Classical Eloquence",
      description:
        "A rigorous, graduated series of 12 master textbooks guiding learners step-by-step from foundational phonetics to advanced classical rhetoric.",
      filterAll: "All 12 Books",
      filterFoundation: "Foundation (1–4)",
      filterIntermediate: "Intermediate (5–8)",
      filterAdvanced: "Advanced & Rhetoric (9–12)",
      ctaText: "Explore Book",
      placeholderNotice: "Cover image placeholder",
      seeMore: "See More Books (12 Total)",
      showLess: "Show Less",
      showingCountText: "Showing 4 of 12 curriculum books",
      books: [
        {
          id: 1,
          number: "01",
          title: "Al-Arabiyatu Bayna Yadai Awladina — Book 1",
          arabicTitle: "الكتاب الأول: التأسيس الصوتي والتواصل الأولي",
          stage: "Stage 1: Foundation",
          stageType: "foundation",
          description:
            "The premiere volume of the acclaimed 'Arabic in the Hands of Our Children' curriculum, engineered specifically for non-native youth (ages 5–18). Adopting a cutting-edge direct immersion methodology—mirroring natural mother-tongue acquisition without intermediary translation—it nurtures foundational listening and speaking skills, letter articulation, and immediate conversational confidence.",
          image: "/book1.jpg",
          units: "12 Units",
          badge: "Book 1 • Age 5–18",
          author: "Dr. Abdur Rahman Al-Fawzan & Dr. Muhammad Al Al-Sheikh",
          authorUrl: "https://ilannoor.com/author/dr-abdur-rahman-bin-ibrahim-al-fawjan/books",
          publisher: "Ilannoor Publication",
          publisherUrl: "https://ilannoor.com/publisher/ilannoor-publication/books",
          subject: "Arabic for All",
          subjectUrl: "https://ilannoor.com/subject/arabic-for-all/books",
          bulletPoints: [
            "Direct mother-tongue immersion approach without relying on any intermediary language",
            "Nurtures primary phonetics, letter recognition, and spontaneous spoken Arabic",
            "Introduces high-frequency everyday vocabulary and elementary communication",
            "QR-code integration for instant native audio pronunciation streaming",
          ],
          keyFeatures: [
            "Engaging illustrated format with interactive language activities",
            "Targeted progression through the building blocks of Classical Arabic",
            "Balanced development across linguistic, expressive, and cultural competency",
            "Essential stepping stone for understanding the language of the Quran and Hadith",
          ],
        },
        {
          id: 2,
          number: "02",
          title: "Al-Arabiyatu Bayna Yadai Awladina — Book 2",
          arabicTitle: "الكتاب الثاني: المفردات والتعبير اليومي والنشاط",
          stage: "Stage 1: Foundation",
          stageType: "foundation",
          description:
            "The second milestone in the 'Arabic in the Hands of Our Children' series, expanding conversational fluency and practical dialogue. Learners progress from single-word comprehension to interactive sentence structures—covering days of the week, school activities, sports, and family life—fully aligned with the adult 'Al-Arabiyyah Bayna Yadayk' continuum for seamless lifelong learning.",
          image: "/book2.jpg",
          units: "14 Units",
          badge: "Book 2 • Age 5–18",
          author: "Dr. Abdur Rahman Al-Fawzan & Dr. Muhammad Al Al-Sheikh",
          authorUrl: "https://ilannoor.com/author/dr-abdur-rahman-bin-ibrahim-al-fawjan/books",
          publisher: "Ilannoor Publication",
          publisherUrl: "https://ilannoor.com/publisher/ilannoor-publication/books",
          subject: "Arabic for All",
          subjectUrl: "https://ilannoor.com/subject/arabic-for-all/books",
          bulletPoints: [
            "Expands active functional vocabulary with situational dialogues (calendar, school, sports, home)",
            "Systematic consolidation of listening comprehension and expressive speech",
            "Spaced repetition drills ensuring long-term retention of sentence patterns",
            "Seamless pedagogical continuity leading into 'Al-Arabiyyah Bayna Yadayk'",
          ],
          keyFeatures: [
            "Builds toward a shared target of 2,000+ vital everyday words",
            "Full audio support via integrated QR codes for classroom and home practice",
            "Rich theoretical and applied drills designed to eliminate hesitation",
            "Comprehensive teacher instructions for lesson delivery and assessment",
          ],
        },
        {
          id: 3,
          number: "03",
          title: "Al-Arabiyatu Bayna Yadai Awladina — Book 3",
          arabicTitle: "الكتاب الثالث: القراءة والكتابة والتراكيب الوظيفية",
          stage: "Stage 1: Foundation",
          stageType: "foundation",
          description:
            "The third volume focuses on reading comprehension ('Iqra’ wa-Ktub'), active writing, and functional language structures. Through collaborative scenes, artistic themes, and structured questions, non-native students master question-and-answer routines, basic grammar mechanics, and descriptive phrases for deeper social interaction.",
          image: "/book3.jpg",
          units: "16 Units",
          badge: "Book 3 • Age 5–18",
          author: "Dr. Abdur Rahman Al-Fawzan & Dr. Muhammad Al Al-Sheikh",
          authorUrl: "https://ilannoor.com/author/dr-abdur-rahman-bin-ibrahim-al-fawjan/books",
          publisher: "Ilannoor Publication",
          publisherUrl: "https://ilannoor.com/publisher/ilannoor-publication/books",
          subject: "Arabic for All",
          subjectUrl: "https://ilannoor.com/subject/arabic-for-all/books",
          bulletPoints: [
            "Integrated reading and penmanship modules ('Read & Write' methodology)",
            "Core question-and-answer patterns for fluent communicative exchanges",
            "Implicit grammar fundamentals and phonological accuracy without complex terminology",
            "Accompanying QR audio tracks for real-time auditory validation",
          ],
          keyFeatures: [
            "Stimulates critical thinking and spontaneous response in standard Arabic",
            "Extensive illustrated exercises cementing the 2,000+ vocabulary threshold",
            "Reinforces Islamic and classical cultural literacy naturally",
            "Standardized preparation for academic and secondary school advancement",
          ],
        },
        {
          id: 4,
          number: "04",
          title: "Al-Arabiyatu Bayna Yadai Awladina — Book 4",
          arabicTitle: "الكتاب الرابع: السفر والمحادثة المركبة والنصوص المتصلة",
          stage: "Stage 1: Foundation",
          stageType: "foundation",
          description:
            "The crowning textbook of the Foundation Stage, Book 4 immerses students in rich narrative contexts—travel, transportation, geography, and storytelling. Students transition to comprehending extended spoken Arabic and expressing opinions in cohesive paragraphs, successfully finalizing their bridge to the Intermediate Level and 'Al-Arabiyyah Bayna Yadayk'.",
          image: "/book4.jpg",
          units: "16 Units",
          badge: "Book 4 • Age 5–18",
          author: "Dr. Abdur Rahman Al-Fawzan & Dr. Muhammad Al Al-Sheikh",
          authorUrl: "https://ilannoor.com/author/dr-abdur-rahman-bin-ibrahim-al-fawjan/books",
          publisher: "Ilannoor Publication",
          publisherUrl: "https://ilannoor.com/publisher/ilannoor-publication/books",
          subject: "Arabic for All",
          subjectUrl: "https://ilannoor.com/subject/arabic-for-all/books",
          bulletPoints: [
            "Connected thematic reading and paragraph-level composition",
            "Advanced situational topics: journey, modern transport, global geography, and dialogue",
            "Mastery of the 2,000 core functional vocabulary items with native nuance",
            "Direct gateway into the adult 'Al-Arabiyyah Bayna Yadayk' series and Stage 2",
          ],
          keyFeatures: [
            "Cultivates authentic communicative and cultural competence across Arab contexts",
            "Rigorous review units with cumulative assessment drills",
            "Comprehensive QR-code audio library for high-speed listening comprehension",
            "Equips learners with confidence to engage with Qur'anic and classical texts",
          ],
        },
        {
          id: 5,
          number: "05",
          title: "Syntax & Grammatical Cases (Naḥw)",
          arabicTitle: "الكتاب الخامس: مبادئ النحو وقواعد الإعراب",
          stage: "Stage 2: Intermediate",
          stageType: "intermediate",
          description: "Nominal vs. verbal sentences, case endings (I'rāb), and essential grammatical mechanics.",
          image: "",
          units: "18 Units",
          badge: "Level 5",
        },
        {
          id: 6,
          number: "06",
          title: "Morphology & Verb Forms (Ṣarf)",
          arabicTitle: "الكتاب السادس: علم الصرف وأوزان الأفعال",
          stage: "Stage 2: Intermediate",
          stageType: "intermediate",
          description: "Systematic exploration of tri-literal roots, derived verb scales (Awzān), active/passive participles, and verbal nouns.",
          image: "",
          units: "16 Units",
          badge: "Level 6",
        },
        {
          id: 7,
          number: "07",
          title: "Classical Dialogue & Spontaneous Speech",
          arabicTitle: "الكتاب السابع: الحوار والتواصل الفصيح",
          stage: "Stage 2: Intermediate",
          stageType: "intermediate",
          description: "Interactive dialectical exercises designed to develop spontaneous, grammatically accurate spoken classical Arabic.",
          image: "",
          units: "14 Units",
          badge: "Level 7",
        },
        {
          id: 8,
          number: "08",
          title: "Literary Citations & Textual Analysis",
          arabicTitle: "الكتاب الثامن: شواهد النصوص والتحليل اللغوي",
          stage: "Stage 2: Intermediate",
          stageType: "intermediate",
          description: "Deep dive into selected Qur'anic passages and classical literary texts with syntax parsing and analytical breakdown.",
          image: "",
          units: "16 Units",
          badge: "Level 8",
        },
        {
          id: 9,
          number: "09",
          title: "Rhetoric I: Syntax & Semantics ('Ilm al-Ma'ānī)",
          arabicTitle: "الكتاب التاسع: علم المعاني ودقائق التعبير",
          stage: "Stage 3: Advanced",
          stageType: "advanced",
          description: "Nuances of word order, omission, emphasis, restriction (Qaṣr), and semantic precision in high literature.",
          image: "",
          units: "20 Units",
          badge: "Level 9",
        },
        {
          id: 10,
          number: "10",
          title: "Rhetoric II: Imagery & Tropes ('Ilm al-Bayān)",
          arabicTitle: "الكتاب العاشر: علم البيان وفنون التشبيه",
          stage: "Stage 3: Advanced",
          stageType: "advanced",
          description: "Comprehensive study of simile, explicit and implicit metaphor (Isti'ārah), metonymy (Kināyah), and imagery.",
          image: "",
          units: "18 Units",
          badge: "Level 10",
        },
        {
          id: 11,
          number: "11",
          title: "Classical Literature & Canonical Poetry",
          arabicTitle: "الكتاب الحادي عشر: الأدب العربي وشواهد الشعر",
          stage: "Stage 3: Advanced",
          stageType: "advanced",
          description: "Critical appreciation of pre-Islamic (Jāhilī), Islamic, and Andalusian poetic masterpieces with prosodic foundations.",
          image: "",
          units: "16 Units",
          badge: "Level 11",
        },
        {
          id: 12,
          number: "12",
          title: "The Eloquence Capstone & Composition",
          arabicTitle: "الكتاب الثاني عشر: ملكة اللسان وبلاغة التأليف",
          stage: "Stage 3: Advanced",
          stageType: "advanced",
          description: "Capstone mastery: high-level essay composition, oratorical fluency, and effortless command of the classical linguistic faculty.",
          image: "",
          units: "20 Units",
          badge: "Level 12",
        },
      ],
    },
    hero: {
      badge: "The Premier Academy for Arabic Mastery",
      headline: "Classical Fluency,",
      headlineAccent: "Timeless Eloquence",
      description:
        "A rigorous, graduated methodology designed to take your Arabic from basic letters to profound classical rhetoric and literature.",
      primaryCta: "Start Free Journey",
      secondaryCta: "Explore Curriculum",
      stats: {
        studentsCount: "15K+",
        studentsLabel: "Global students",
        lessonsCount: "450+",
        lessonsLabel: "Structured lessons",
        ratingValue: "4.9 / 5",
        ratingLabel: "Learner rating",
      },
      previewCard: {
        dailyWordTitle: "Linguistic Insight",
        word: "الفَصَاحَةُ",
        diacritics: "al-fa-ṣā-ḥah • Noun",
        meaning: "Purity of speech, clarity of meaning, and natural eloquence.",
        root: "Root: (ف - ص - ح)",
        grammarTip: "Quran 28:34: 'He is more eloquent than I in speech.'",
        audioLabel: "Listen to pronunciation",
        progressLabel: "Level: Classical Intermediate",
        streakLabel: "12-day active streak 🔥",
      },
    },
    about: {
      badge: "About Us",
      title: "Classical Grounding,",
      titleAccent: "Modern Digital Elegance",
      description1:
        "A focused, distraction-free environment engineered for deep immersion in Arabic linguistics.",
      description2:
        "Structured textbooks, studio-grade audio, and continuous diagnostic drills that build spontaneous fluency.",
      bulletPoints: [
        {
          title: "Authoritative Curriculum",
          text: "Built upon verified classical pedagogical traditions.",
        },
        {
          title: "Integrated Mastery",
          text: "Balanced practice across listening, reading, and parsing.",
        },
        {
          title: "Deep Focus",
          text: "An aesthetic dark theme tailored for cognitive clarity.",
        },
      ],
      quote: "«Learn Arabic, for it sharpens the intellect and elevates nobility.»",
      quoteAuthor: "Umar ibn al-Khattāb (RA)",
      badgeYears: "100%",
      badgeYearsText: "Linguistically verified curriculum",
    },
    journey: {
      badge: "Roadmap",
      title: "Four Deliberate Steps,",
      titleAccent: "To Absolute Eloquence",
      description:
        "A seamless progression that eliminates guesswork, guiding you from phonetics to rhetoric.",
      steps: [
        {
          number: "01",
          title: "Level Diagnostic",
          description: "Intelligent assessment determining your exact entry point.",
          highlight: "5-min smart test",
          iconName: "Compass",
        },
        {
          number: "02",
          title: "Structured Books",
          description: "Interactive digital textbooks with synchronized audio.",
          highlight: "Interactive digital texts",
          iconName: "BookOpen",
        },
        {
          number: "03",
          title: "Applied Practice",
          description: "Targeted inflection drills with immediate feedback.",
          highlight: "Instant grammatical reasoning",
          iconName: "PenTool",
        },
        {
          number: "04",
          title: "Mastery Credentials",
          description: "Visual progress tracking and verified certificates.",
          highlight: "Accredited certificates",
          iconName: "Award",
        },
      ],
    },
    features: {
      badge: "Features",
      title: "Refined Tools,",
      titleAccent: "For Lasting Fluency",
      description:
        "Every single capability is optimized for retention and intuitive mastery.",
      items: [
        {
          title: "Structured Pathways",
          description: "Complete tracks spanning phonetics, morphology, syntax, and rhetoric.",
          iconName: "Library",
          tag: "Complete",
        },
        {
          title: "Native Studio Audio",
          description: "High-definition recordings by distinguished scholars with synchronized text.",
          iconName: "Volume2",
          tag: "Native Articulation",
        },
        {
          title: "Interactive Drills",
          description: "Active practice for case endings (Tashkeel) and verb conjugations.",
          iconName: "CheckCircle2",
          tag: "Active Practice",
        },
        {
          title: "Instant Assessments",
          description: "Milestone quizzes identifying grammar gaps with precision.",
          iconName: "FileCheck",
          tag: "Precision Testing",
        },
        {
          title: "Visual Retention Metrics",
          description: "Clear analytics tracking vocabulary retention and daily commitment.",
          iconName: "TrendingUp",
          tag: "Live Analytics",
        },
        {
          title: "Spaced Repetition",
          description: "Adaptive algorithms ensuring difficult constructs are locked in memory.",
          iconName: "Sparkles",
          tag: "Adaptive Learning",
        },
      ],
    },
    whyChooseUs: {
      badge: "Excellence",
      title: "The Elite Standard,",
      titleAccent: "In Arabic Education",
      description:
        "We construct the grammatical bedrock enabling you to think and articulate in Arabic.",
      benefits: [
        {
          title: "Peer-Reviewed Content",
          description: "Curated and verified by university linguists.",
          stat: "100%",
          statLabel: "Vetted accuracy",
          iconName: "ShieldCheck",
        },
        {
          title: "Seamless Gradation",
          description: "Progressive stages without confusing leaps.",
          stat: "6",
          statLabel: "Graded stages",
          iconName: "Layers",
        },
        {
          title: "Effortless Experience",
          description: "Distraction-free dark UI accessible 24/7.",
          stat: "24/7",
          statLabel: "All devices",
          iconName: "Smartphone",
        },
        {
          title: "Living Literature",
          description: "Direct ties to timeless Quranic and poetic masterpieces.",
          stat: "2,000+",
          statLabel: "Literary citations",
          iconName: "BookMarked",
        },
      ],
      experienceBox: {
        title: "Ready to test your Arabic proficiency?",
        subtitle: "Take our free 5-minute diagnostic test and get your learning blueprint.",
        actionText: "Take Free Placement Test",
      },
    },
    cta: {
      badge: "Join Today",
      title: "Begin Your Sacred Journey Into",
      titleAccent: "Classical Arabic Eloquence",
      description:
        "Join thousands of dedicated learners worldwide and begin Stage 1 free of charge.",
      buttonText: "Start Learning Free",
      secondaryButtonText: "Explore Blueprint",
      guaranteeText: "Instant access • No credit card • Stage 1 included free",
      features: [
        "Free full access to Book 1",
        "Instant level diagnostic",
        "Interactive study community",
      ],
    },
    footer: {
      description:
        "The premier digital academy for classical Arabic fluency, uniting traditional scholarship with modern interactive technology.",
      quickLinksTitle: "Navigation",
      programsTitle: "Curriculum",
      contactTitle: "Contact",
      programs: [
        { label: "Phonetics & Reading", href: "#features" },
        { label: "Graded Readers", href: "#features" },
        { label: "Applied Syntax", href: "#features" },
        { label: "Classical Rhetoric", href: "#features" },
      ],
      quickLinks: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Path", href: "#journey" },
        { label: "Features", href: "#features" },
        { label: "Impact", href: "#why-us" },
      ],
      contactInfo: {
        email: "support@arabicpath.edu",
        phone: "+966 11 400 8899",
        location: "Riyadh, Kingdom of Saudi Arabia",
        workingHours: "Sun - Thu: 9:00 AM - 6:00 PM (AST)",
      },
      newsletterTitle: "Weekly Insights",
      newsletterDesc: "Concise linguistic gems & grammar insights.",
      newsletterPlaceholder: "Your email address...",
      newsletterButton: "Subscribe",
      rights: "All rights reserved © 2026 Riḥlat al-ʿArabiyyah",
      privacy: "Privacy",
      terms: "Terms",
    },
    modal: {
      loginTitle: "Sign In",
      loginSubtitle: "Welcome back to your Arabic learning sanctuary",
      getStartedTitle: "Begin Your Journey",
      getStartedSubtitle: "Create your free account in seconds",
      emailLabel: "Email Address",
      emailPlaceholder: "name@example.com",
      nameLabel: "Full Name",
      namePlaceholder: "Zaid bin Thabit",
      levelLabel: "Your Current Level",
      levelOptions: [
        "Beginner (Letters & foundations)",
        "Intermediate (Syntax & speaking)",
        "Advanced (Rhetoric & literature)",
        "Take the diagnostic placement test",
      ],
      submitLogin: "Sign In",
      submitGetStarted: "Confirm & Start Free",
      successTitle: "Welcome aboard!",
      successMessage: "Your confirmation and study blueprint have been sent to your email.",
      close: "Close",
      note: "Your personal data is encrypted and secure.",
    },
  },
};
