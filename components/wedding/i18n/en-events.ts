import { Translations } from "./types";

export const enEvents: Translations["events"] = {
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
};
