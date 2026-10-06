export type Language = "en" | "kh";

export interface Translations {
  welcome: {
    invite: string;
    honorifics: string;
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
    hashtag: string;
    copiedToast: string;
  };
  music: {
    unavailable: string;
  };
  common: {
    loading: string;
  };
}
