"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "kh";

interface Translations {
  welcome: {
    invite: string;
    celebration: string;
    open: string;
    date: string;
  };
  hero: {
    gettingMarried: string;
    date: string;
  };
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    date: string;
  };
  intro: {
    title: string;
    quote: string;
    together: string;
    groomParents: string;
    brideParents: string;
    request: string;
    groom: string;
    bride: string;
  };
  loveStory: {
    title: string;
    subtitle: string;
    firstMet: {
      title: string;
      date: string;
      description: string;
    };
    firstDate: {
      title: string;
      date: string;
      description: string;
    };
    secondDate: {
      title: string;
      date: string;
      description: string;
    };
    thirdDate: {
      title: string;
      date: string;
      description: string;
    };
    proposal: {
      title: string;
      date: string;
      description: string;
    };
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  events: {
    title: string;
    subtitle: string;
    day1Tab: string;
    day2Tab: string;
    day1: {
      badge: string;
      title: string;
      date: string;
      subtitle: string;
      items: Array<{
        time: string;
        title: string;
        desc: string;
      }>;
    };
    day2: {
      badge: string;
      title: string;
      date: string;
      morningTitle: string;
      morningSubtitle: string;
      morningItems: Array<{
        time: string;
        title: string;
        desc: string;
      }>;
      eveningTitle: string;
      eveningSubtitle: string;
      eveningItems: Array<{
        time: string;
        title: string;
        desc: string;
      }>;
      location: {
        title: string;
        name: string;
        detail: string;
      };
      quote: string;
    };
    morning: {
      title: string;
      subtitle: string;
      item1: { time: string; title: string; desc: string };
      item2: { time: string; title: string; desc: string };
      item3: { time: string; title: string; desc: string };
      item4: { time: string; title: string; desc: string };
      item5: { time: string; title: string; desc: string };
    };
    evening: {
      title: string;
      subtitle: string;
      item1: { time: string; desc: string };
      item2: { time: string; desc: string };
      location: { title: string; name: string; detail: string };
      quote: string;
    };
  };
  party: {
    title: string;
    subtitle: string;
    groomsmen: string;
    bestMan: string;
    groomsman: string;
    bridesmaids: string;
    maidOfHonor: string;
    bridesmaid: string;
  };
  dressCode: {
    title: string;
    morning: {
      title: string;
      subtitle: string;
      colors: { gold: string; cream: string; rose: string };
      desc: string;
    };
    evening: {
      title: string;
      subtitle: string;
      colors: { burgundy: string; cream: string; green: string };
      desc: string;
    };
  };
  location: {
    title: string;
    subtitle: string;
    venueTag: string;
    venueName: string;
    address: string;
    button: string;
    directionsButton: string;
    copyButton: string;
    copiedToast: string;
    viewLarger: string;
  };
  gift: {
    title: string;
    desc: string;
    thanks: string;
    thanksSubtitle: string;
    bank: string;
    accountName: string;
    shareButton: string;
    shareToast: string;
  };
  footer: {
    thanks: string;
  };
  music: {
    unavailable: string;
  };
  common: {
    loading: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    welcome: {
      invite: "We are pleased to invite",
      celebration: "To our wedding celebration",
      open: "Open Invitation",
      date: "November 25, 2026",
    },
    hero: {
      gettingMarried: "We Are Getting Married",
      date: "NOVEMBER 25, 2026",
    },
    countdown: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      date: "November 25, 2026",
    },
    intro: {
      title: "Celebrate Our Love",
      quote:
        '"Love is not just looking at each other, it\'s looking in the same direction."',
      together: "Together with our families",
      groomParents: "Groom's Parents",
      brideParents: "Bride's Parents",
      request:
        "Joyfully request the honor of your presence at the marriage of their children",
      groom: "The Groom",
      bride: "The Bride",
    },
    loveStory: {
      title: "Our Love Story",
      subtitle: "How we got here",
      firstMet: {
        title: "From Classmates to Lovers",
        date: "February 13, 2022",
        description:
          "Transitioning from high school classmates into getting to know each other and opening our hearts.",
      },
      firstDate: {
        title: "First Date",
        date: "March 12, 2023",
        description:
          "The unforgettable day of our very first date together at KOI Thé, Midtown Mall.",
      },
      secondDate: {
        title: "Meeting the Families",
        date: "September 21, 2025",
        description:
          "The day we introduced each other to both families and presented traditional fruit baskets to formally ask for her hand in marriage.",
      },
      thirdDate: {
        title: "Becoming Fiancés",
        date: "November 21, 2025",
        description:
          "A special moment that transitioned our love story from sweethearts into officially betrothed fiancés.",
      },
      proposal: {
        title: "Our Wedding Day",
        date: "November 25, 2026",
        description:
          "November 25, 2026 — the sacred day of our wedding celebration, uniting our lives together forever.",
      },
    },
    gallery: {
      title: "Our Sweet Moments",
      subtitle: "Capturing our journey of love",
    },
    events: {
      title: "Wedding Timeline",
      subtitle: "Two Days of Sacred Love & Celebration",
      day1Tab: "Day 1 • Nov 24",
      day2Tab: "Day 2 • Nov 25",
      day1: {
        badge: "Day 1",
        title: "Traditional Blessing & Sacred Rituals",
        date: "Tuesday, November 24, 2026",
        subtitle: "Krong Peali & Honoring Parents",
        items: [
          {
            time: "02:00 PM",
            title: "Guest & Family Gathering",
            desc: "Warm arrival of family, relatives, and honored guests to participate in the ceremonies.",
          },
          {
            time: "03:00 PM",
            title: "Krong Peali Blessing Ceremony",
            desc: "Sacred prayer and offering rituals to invite divine blessings and guardian spirit protection.",
          },
          {
            time: "05:00 PM",
            title: "Pithi Jeav Khan Sla (Honoring Parents)",
            desc: "The bride and groom express profound gratitude to their parents for endless love and nurturing care.",
          },
          {
            time: "06:00 PM",
            title: "Family Welcome Dinner",
            desc: "A warm and joyous dinner banquet with family, elders, and honored guests.",
          },
        ],
      },
      day2: {
        badge: "Day 2",
        title: "Wedding Ceremony & Grand Celebration",
        date: "Wednesday, November 25, 2026",
        morningTitle: "Morning Traditional Ceremony",
        morningSubtitle: "Groom's Procession & Knot Tying",
        morningItems: [
          {
            time: "06:30 AM",
            title: "Guest & Family Gathering",
            desc: "Gathering of family and honored guests to prepare for the celebratory procession.",
          },
          {
            time: "07:00 AM",
            title: "Groom's Procession into Sacred Tent (Hae Chamnan)",
            desc: "The groom and family parade bearing celebratory fruit trays and wedding offerings to the bride's home.",
          },
          {
            time: "07:30 AM",
            title: "Morning Breakfast Reception",
            desc: "Honored guests and relatives are warmly invited to enjoy a morning breakfast.",
          },
          {
            time: "08:00 AM",
            title: "Engagement Negotiation & Ancestral Prayers (Sien Kong Ma)",
            desc: "Formal betrothal discussions between elders, mutual blessings, and prayers honoring ancestors.",
          },
          {
            time: "09:30 AM",
            title: "Hair Cutting Ceremony (Gaat Sah)",
            desc: "Symbolizing a pure cleansing, spiritual renewal, and auspicious beginnings for the new couple.",
          },
          {
            time: "10:30 AM",
            title: "Candle Passing & Knot Tying Ceremony (Bangvil Popil & Jong Dai)",
            desc: "Sacred passing of candle blessings and tying red blessing threads on the couple's wrists by parents and guests.",
          },
          {
            time: "11:30 AM",
            title: "Blessing of Areca Flowers (Baach Pka Sla) & Lunch",
            desc: "Scattering sacred areca flowers to conclude the traditional wedding rites, followed by lunch for all guests.",
          },
        ],
        eveningTitle: "Evening Reception & Banquet",
        eveningSubtitle: "Celebration Dinner & Festivities",
        eveningItems: [
          {
            time: "04:00 PM",
            title: "Guest Reception & Dinner Banquet",
            desc: "Honored guests are cordially invited to celebrate together and enjoy the evening wedding banquet.",
          },
        ],
        location: {
          title: "Wedding Venue & Reception",
          name: "Bride's Residence (គេហដ្ឋានខាងស្រី)",
          detail: "Located at Bride's Residence, Kampong Trach 1 Village, Kampong Trach Khang Kaeut, Kampong Trach District, Kampot Province.",
        },
        quote: '"We cordially invite you to honor us with your presence and celebrate this auspicious occasion."',
      },
      morning: {
        title: "Morning Ceremony",
        subtitle: "Pithi Hae Chamnan",
        item1: {
          time: "07:00 AM",
          title: "Groom's Procession (Hae Chamnan)",
          desc: "The groom and his family parade to the bride's house bearing gifts.",
        },
        item2: {
          time: "08:00 AM",
          title: "Ring Exchange & Sien Doan Taa",
          desc: "Paying respect to ancestors and exchanging rings.",
        },
        item3: {
          time: "09:00 AM",
          title: "Hair Cutting Ceremony (Gaat Sah)",
          desc: "Symbolizing a fresh start for the couple.",
        },
        item4: {
          time: "10:00 AM",
          title: "Monk Blessing (Soat Mun)",
          desc: "Receiving blessings from the monks.",
        },
        item5: {
          time: "11:00 AM",
          title: "Knot Tying Ceremony (Jong Dai)",
          desc: "Family and friends tie red strings around the couple's wrists.",
        },
      },
      evening: {
        title: "Evening Reception",
        subtitle: "Wedding Banquet",
        item1: { time: "05:00 PM", desc: "Guest Arrival & Welcome Photos" },
        item2: { time: "06:30 PM", desc: "Dinner & Live Music" },
        location: {
          title: "Location",
          name: "The Premier Center Sen Sok",
          detail: "Building A, Grand Ballroom",
        },
        quote: '"Please join us for a night of celebration"',
      },
    },
    party: {
      title: "The Wedding Party",
      subtitle: "The people who stand beside us",
      groomsmen: "Groomsmen",
      bestMan: "Best Man",
      groomsman: "Groomsman",
      bridesmaids: "Bridesmaids",
      maidOfHonor: "Maid of Honor",
      bridesmaid: "Bridesmaid",
    },
    dressCode: {
      title: "Attire & Theme",
      morning: {
        title: "Morning Ceremony",
        subtitle: "Traditional Khmer",
        colors: { gold: "Gold", cream: "Cream", rose: "Rose" },
        desc: "Ladies are encouraged to wear traditional Khmer silk (Hol/Pamoung). Gentlemen may wear a traditional shirt or formal suit.",
      },
      evening: {
        title: "Evening Reception",
        subtitle: "Formal / Black Tie",
        colors: { burgundy: "Burgundy", green: "Green", cream: "Cream" },
        desc: "Evening gowns for ladies and suits or tuxedos for gentlemen. Let's celebrate in style!",
      },
    },
    location: {
      title: "Wedding Location",
      subtitle: "Join us in celebrating our special day in Kampot",
      venueTag: "Bride's Residence (Wedding Venue)",
      venueName: "Bride's Residence (គេហដ្ឋានខាងស្រី)",
      address: "Kampong Trach 1 Village, Kampong Trach Khang Kaeut, Kampong Trach District, Kampot Province",
      button: "Open in Google Maps",
      directionsButton: "Get Directions",
      copyButton: "Copy Address",
      copiedToast: "Address copied to clipboard!",
      viewLarger: "View on OpenStreetMap",
    },
    gift: {
      title: "Gift of Love",
      desc: '"Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, a monetary contribution to help us start our new life together would be greatly appreciated."',
      thanks: "Thank You",
      thanksSubtitle: "For your kindness and generosity",
      bank: "ABA Bank",
      accountName: "Account Name: Chan Sokha",
      shareButton: "Share Payment Details",
      shareToast: "Bank details copied to clipboard!",
    },
    footer: {
      thanks: "Thank you for being part of our journey",
    },
    music: {
      unavailable: "Audio unavailable",
    },
    common: {
      loading: "Loading Invitation...",
    },
  },
  kh: {
    welcome: {
      invite: "យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ",
      celebration: "ចូលរួមក្នុងពិធីមង្គលការរបស់យើងខ្ញុំ",
      open: "បើកសំបុត្រអញ្ជើញ",
      date: "ថ្ងៃទី ២៥ ខែ វិច្ឆិកា ឆ្នាំ ២០២៦",
    },
    hero: {
      gettingMarried: "ថ្ងៃមង្គលជ័យ",
      date: "ថ្ងៃពុធ ទី២៥ ខែវិច្ឆិកា ឆ្នាំ២០២៦",
    },
    countdown: {
      days: "ថ្ងៃ",
      hours: "ម៉ោង",
      minutes: "នាទី",
      seconds: "វិនាទី",
      date: "ថ្ងៃទី ២៥ ខែ វិច្ឆិកា ឆ្នាំ ២០២៦",
    },
    intro: {
      title: "អបអរសាទរសេចក្តីស្រឡាញ់របស់យើង",
      quote:
        '"សេចក្តីស្រឡាញ់មិនមែនគ្រាន់តែជាការសម្លឹងមើលគ្នាទៅវិញទៅមកនោះទេ ប៉ុន្តែវាគឺជាការសម្លឹងមើលទៅក្នុងទិសដៅតែមួយ"',
      together: "រួមជាមួយក្រុមគ្រួសាររបស់យើងទាំងសងខាង",
      groomParents: "មាតាបិតាខាងកូនប្រុស",
      brideParents: "មាតាបិតាខាងកូនស្រី",
      request:
        "សូមគោរពអញ្ជើញឯកឧត្តម លោកជំទាវ លោក លោកស្រី និងញាតិមិត្តទាំងអស់ ចូលរួមជាអធិបតី និងជាសាក្សីក្នុងពិធីមង្គលការរបស់យើងខ្ញុំ",
      groom: "កូនប្រុស",
      bride: "កូនស្រី",
    },
    loveStory: {
      title: "រឿងរ៉ាវស្នេហារបស់យើង",
      subtitle: "ដំណើរដើមទងរបស់យើង",
      firstMet: {
        title: "ជួបគ្នាដំបូង",
        date: "១៣ កុម្ភៈ ២០២២",
        description:
          'ប្តូរពីរអ្នករៀនវិទ្យាល័យជាមួយគ្នាមកជាអ្នកមើលចិត្តគ្នា',
      },
      firstDate: {
        title: "ការណាត់ជួបដំបូង",
        date: "១២ មីនា ២០២៣",
        description:
          "ថ្ងៃចួបគ្នាដំបូងនៅ Koi The Midtown Mall",
      },
      secondDate: {
        title: "គ្រួសារដឹងលឺ",
        date: "២១ កញ្ញា ២០២៥",
        description:
          "ជាថ្ងៃដែលពួកយើងបានបង្ហាញវត្តមានឲ្យគ្រួសារទាំងសងខាងបានស្គាល់ និងជាថ្ងៃដែលយកកន្ត្រកផ្លែឈើទៅសុំស្តីដណ្ដឹង",
      },
      thirdDate: {
        title: "ជាគូអនាគត",
        date: "២១ វិច្ឆិកា ២០២៥",
        description:
          "ជាពេលវេលាមួយដែលប្តូរពីឈ្មោះជាសង្សារមកជាគូដណ្តឹង",
      },
      proposal: {
        title: "រៀបការ",
        date: "២៥ វិច្ឆិកា ២០២៦",
        description:
          'ថ្ងៃទី ២៥ ខែ វិច្ឆិកា ឆ្នាំ ២០២៦ ជាថ្ងៃរៀបការរបស់យើងខ្ញុំ',
      },
    },
    gallery: {
      title: "រូបភាពផ្អែមល្ហែមរបស់យើង",
      subtitle: "ការចងចាំនៃដំណើរជីវិតស្នេហារបស់យើង",
    },
    events: {
      title: "តារាងកម្មវិធីមង្គលការ",
      subtitle: "កម្មវិធីក្នុងថ្ងៃមង្គលការរបស់យើងខ្ញុំ",
      day1Tab: "ថ្ងៃទី ១ • ២៤ វិច្ឆិកា",
      day2Tab: "ថ្ងៃទី ២ • ២៥ វិច្ឆិកា",
      day1: {
        badge: "ថ្ងៃទី ១ (Day 1)",
        title: "ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត",
        date: "ថ្ងៃអង្គារ ទី២៤ ខែវិច្ឆិកា ឆ្នាំ២០២៦",
        subtitle: "ពិធីសូត្រមន្ត និងសែនដូនតា",
        items: [
          {
            time: "០២:០០ រសៀល",
            title: "ជួបជុំញាតិមិត្ត និងភ្ញៀវកិត្តិយស",
            desc: "ការមកដល់នៃបងប្អូន ញាតិមិត្ត និងភ្ញៀវកិត្តិយសដើម្បីចូលរួមពិធី",
          },
          {
            time: "០៣:០០ រសៀល",
            title: "ពិធីក្រុងពាលី",
            desc: "សែនព្រេន និងបួងសួងសុំសេចក្តីសុខចម្រើន",
          },
          {
            time: "០៥:០០ ល្ងាច",
            title: "ពិធីជាវខាន់ស្លា",
            desc: "កូនប្រុសស្រីបង្ហាញពីការដឹងគុណយ៉ាងជ្រាលជ្រៅចំពោះគុណូបការៈ និងការបីបាច់ថែរក្សាពីសំណាក់មាតាបិតា",
          },
          {
            time: "០៦:០០ ល្ងាច",
            title: "អញ្ជើញភ្ញៀវកិត្តិយសពិសារអាហារពេលល្ងាច",
            desc: "ពិសារភោជនីយអាហារសាមគ្គីជួបជុំគ្រួសារ និងញាតិមិត្ត",
          },
        ],
      },
      day2: {
        badge: "ថ្ងៃទី ២ (Day 2)",
        title: "ថ្ងៃសិរីសួស្តី ជ័យមង្គល",
        date: "ថ្ងៃពុធ ទី២៥ ខែវិច្ឆិកា ឆ្នាំ២០២៦",
        morningTitle: "ពិធីប្រពៃណីពេលព្រឹក",
        morningSubtitle: "ពិធីហែជំនូន និងសំពះផ្ទឹម",
        morningItems: [
          {
            time: "០៦:៣០ ព្រឹក",
            title: "ជួបជុំភ្ញៀវកិត្តិយស",
            desc: "ជួបជុំភ្ញៀវកិត្តិយសរៀបចំពិធីហែរជំនូន",
          },
          {
            time: "០៧:០០ ព្រឹក",
            title: "ពិធីហែរជំនូនចូលរោងជ័យ (កំណត់)",
            desc: "កូនប្រុស និងក្រុមគ្រួសារហែជំនូនផ្លែឈើ និងគ្រឿងបណ្ណាការចូលគេហដ្ឋានកូនស្រី",
          },
          {
            time: "០៧:៣០ ព្រឹក",
            title: "ពិសារអាហារពេលព្រឹក",
            desc: "អញ្ជើញភ្ញៀវកិត្តិយសពិសារអាហារពេលព្រឹក",
          },
          {
            time: "០៨:០០ ព្រឹក",
            title: "ពិធីនិយាយជើងការ និងការសែនព្រេន(សែនកុងម៉ា)",
            desc: "តំណាងឱ្យការចរចា ការសុំស្រឡាញ់រាប់អាន និងការយល់ព្រមជាផ្លូវការរវាងចាស់ទុំខាងកំលោះ និងខាងក្រមុំ",
          },
          {
            time: "០៩:៣០ ព្រឹក",
            title: "ពិធីកាត់សក់បង្កក់សិរី",
            desc: "ជានិមិត្តរូបនៃការសម្អាតជម្រះ និងចាប់ផ្តើមជីវិតគូថ្មីប្រកបដោយសិរីមង្គល",
          },
          {
            time: "១០:៣០ ព្រឹក",
            title: "ពិធីបង្វិលពពិល សំពះផ្ទឹមសែនចងដៃ",
            desc: "ពិធីសំពះផ្ទឹម និងចងអំបោះក្រហមប្រសិទ្ធពរជ័យពីមាតាបិតា និងភ្ញៀវកិត្តិយស",
          },
          {
            time: "១១:៣០ ព្រឹក",
            title: "បាចផ្កាស្លា",
            desc: "បាចផ្កាស្លា ជាកិច្ចបញ្ចប់ពិធីសិរីមង្គល និងអញ្ជើញភ្ញៀវកិត្តិយសចូលរួមពិសាអាហារពេលថ្ងៃត្រង់",
          },
        ],
        eveningTitle: "ពិធីលៀងសាយភោជន៍ពេលល្ងាច",
        eveningSubtitle: "អាហារសាមគ្គី និងអបអរសាទរ",
        eveningItems: [
          {
            time: "០៤:០០ ល្ងាច",
            title: "ទទួលភ្ញៀវ",
            desc: "អញ្ជើញភ្ញៀវកិត្តិយសពិសារអាហារពេលល្ងាច នាគេហដ្ឋានខាងស្រី ដោយមេត្រីភាព!",
          },
        ],
        location: {
          title: "ទីតាំងប្រារព្ធពិធីពេលល្ងាច",
          name: "គេហដ្ឋានខាងស្រី ",
          detail: "ភូមិកំពង់ត្រាចទី១ ឃុំកំពង់ត្រាចខាងកើត​ ស្រុកកំពង់ត្រាច ខេត្តកំពត",
        },
        quote: '"សូមគោរពអញ្ជើញចូលរួមជាកិត្តិយស និងអបអរសាទរក្នុងរាត្រីដ៏វិសេសវិសាលនេះ"',
      },
      morning: {
        title: "កម្មវិធីពេលព្រឹក",
        subtitle: "ពិធីហែជំនូន",
        item1: {
          time: "០៧:០០ ព្រឹក",
          title: "ពិធីហែជំនូន",
          desc: "កូនប្រុស និងក្រុមគ្រួសារហែជំនូនទៅកាន់ផ្ទះកូនស្រី។",
        },
        item2: {
          time: "០៨:០០ ព្រឹក",
          title: "ពិធីបំពាក់ចិញ្ចៀន និងសែនដូនតា",
          desc: "ការគោរពដឹងគុណដល់បុព្វការីជន និងការបំពាក់ចិញ្ចៀនអាពាហ៍ពិពាហ៍។",
        },
        item3: {
          time: "០៩:០០ ព្រឹក",
          title: "ពិធីកាត់សក់",
          desc: "ជានិមិត្តរូបនៃការចាប់ផ្តើមជីវិតថ្មីសម្រាប់គូស្វាមីភរិយា។",
        },
        item4: {
          time: "១០:០០ ព្រឹក",
          title: "ពិធីសូត្រមន្ត",
          desc: "ការទទួលពរជ័យពីព្រះសង្ឃ។",
        },
        item5: {
          time: "១១:០០ ព្រឹក",
          title: "ពិធីចងដៃ",
          desc: "សាច់ញាតិ និងមិត្តភក្តិចងអំបោះក្រហមលើកដៃគូស្វាមីភរិយាថ្មី។",
        },
      },
      evening: {
        title: "កម្មវិធីពិធីជប់លៀងពេលល្ងាច",
        subtitle: "អាហារសាមគ្គី",
        item1: {
          time: "០៥:០០ ល្ងាច",
          desc: "ការទទួលភ្ញៀវ និងថតរូបទុកជាអនុស្សាវរីយ៍",
        },
        item2: { time: "០៦:៣០ ល្ងាច", desc: "ពិធីជប់លៀង និងតន្ត្រីសម័យ" },
        location: {
          title: "ទីតាំង",
          name: "មជ្ឈមណ្ឌល ឌឹ ព្រីមៀ សែនសុខ",
          detail: "អាគារ A, សាលមហោស្រព",
        },
        quote: '"សូមអញ្ជើញចូលរួមអបអរសាទរក្នុងរាត្រីដ៏វិសេសវិសាលនេះ"',
      },
    },
    party: {
      title: "អ្នកកំដរ",
      subtitle: "អ្នកដែលនៅក្បែរយើងក្នុងថ្ងៃដ៏ពិសេស",
      groomsmen: "អ្នកកំដរខាងប្រុស",
      bestMan: "អ្នកកំដរឯក",
      groomsman: "អ្នកកំដរ",
      bridesmaids: "អ្នកកំដរខាងស្រី",
      maidOfHonor: "អ្នកកំដរឯក",
      bridesmaid: "អ្នកកំដរ",
    },
    dressCode: {
      title: "សម្លៀកបំពាក់ និងពណ៌",
      morning: {
        title: "កម្មវិធីពេលព្រឹក",
        subtitle: "សម្លៀកបំពាក់ប្រពៃណីខ្មែរ",
        colors: { gold: "ពណ៌មាស", cream: "ពណ៌គ្រីម", rose: "ពណ៌ផ្កាឈូក" },
        desc: "ភ្ញៀវកិត្តិយសខាងស្រីត្រូវបានលើកទឹកចិត្តឱ្យស្លៀកសម្លៀកបំពាក់ប្រពៃណីខ្មែរ (ហូល/ផាមួង)។ ភ្ញៀវកិត្តិយសខាងប្រុសអាចស្លៀកអាវប្រពៃណី ឬឈុតធំ។",
      },
      evening: {
        title: "កម្មវិធីពិធីជប់លៀងពេលល្ងាច",
        subtitle: "សម្លៀកបំពាក់សម័យ",
        colors: {
          burgundy: "ពណ៌ឈាមជ្រូក",
          cream: "ពណ៌គ្រីម",
          green: "បៃតង",
        },
        desc: "រ៉ូបវែងសម្រាប់ភ្ញៀវខាងស្រី និងឈុតធំសម្រាប់ភ្ញៀវខាងប្រុស។ សូមចូលរួមអបអរសាទរតាមស្ទីលរៀងៗខ្លួន!",
      },
    },
    location: {
      title: "ទីតាំងប្រារព្ធពិធី",
      subtitle: "សូមអញ្ជើញចូលរួមជាកិត្តិយសក្នុងទិវាដ៏វិសេសវិសាលរបស់យើង",
      venueTag: "គេហដ្ឋានខាងស្រី (ទីតាំងមង្គលការ)",
      venueName: "គេហដ្ឋានខាងស្រី",
      address: "ភូមិកំពង់ត្រាចទី១ ឃុំកំពង់ត្រាចខាងកើត​ ស្រុកកំពង់ត្រាច ខេត្តកំពត",
      button: "បើកក្នុង Google Maps",
      directionsButton: "ទិសដៅធ្វើដំណើរ",
      copyButton: "ចម្លងអាសយដ្ឋាន",
      copiedToast: "អាសយដ្ឋានត្រូវបានចម្លង!",
      viewLarger: "មើលផែនទីធំនៅលើ OpenStreetMap",
    },
    gift: {
      title: "ចំណងដៃអាពាហ៍ពិពាហ៍",
      desc: '"វត្តមានរបស់លោកអ្នកក្នុងពិធីមង្គលការរបស់យើងគឺជាកាដូដ៏ធំបំផុត។ ទោះជាយ៉ាងណាក៏ដោយ ប្រសិនបើលោកអ្នកចង់ផ្តល់ជាចំណងដៃ ការរួមចំណែកជាថវិកាដើម្បីជួយយើងចាប់ផ្តើមជីវិតថ្មីជាមួយគ្នា នឹងត្រូវបានទទួលដោយការដឹងគុណយ៉ាងជ្រាលជ្រៅ។"',
      thanks: "សូមអរគុណ",
      thanksSubtitle: "ចំពោះទឹកចិត្ត និងសប្បុរសធម៌របស់អ្នក",
      bank: "ធនាគារ ABA",
      accountName: "ឈ្មោះគណនី: ចាន់ សុខា",
      shareButton: "ចែករំលែកព័ត៌មានបង់ប្រាក់",
      shareToast: "ព័ត៌មានធនាគារត្រូវបានចម្លង!",
    },
    footer: {
      thanks: "សូមអរគុណដែលបានក្លាយជាផ្នែកមួយនៃដំណើរជីវិតរបស់យើង",
    },
    music: {
      unavailable: "មិនអាចចាក់តន្ត្រីបាន",
    },
    common: {
      loading: "កំពុងផ្ទុកសំបុត្រអញ្ជើញ...",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("kh");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
