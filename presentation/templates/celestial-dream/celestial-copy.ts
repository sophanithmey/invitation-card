export interface DestinationItem {
  id: string;
  title: string;
  subtitle: string;
  targetId: string;
}

export interface CelestialCopy {
  invitationKicker: string;
  tapToExplore: string;
  chooseYourPath: string;
  swipeToExplore: string;
  explore: string;
  returnToCompass: string;
  countdownKicker: string;
  countdownTitle: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  introKicker: string;
  introTitle: string;
  introMessage: string;
  theBigDay: string;
  ceremony: string;
  ceremonyTitle: string;
  reception: string;
  receptionTitle: string;
  openMap: string;
  earlyArrivalNote: string;
  receptionNote: string;
  timelineKicker: string;
  timelineTitle: string;
  storyKicker: string;
  storyTitle: string;
  galleryKicker: string;
  galleryTitle: string;
  dressCodeKicker: string;
  dressCodeTitle: string;
  ladies: string;
  ladiesNote: string;
  gentlemen: string;
  gentlemenNote: string;
  locationKicker: string;
  accommodationKicker: string;
  accommodationTitle: string;
  travelKicker: string;
  travelTitle: string;
  giftKicker: string;
  giftTitle: string;
  giftNote: string;
  rsvpKicker: string;
  rsvpTitle: string;
  rsvpSubtitle: string;
  rsvpDeadline: string;
  rsvpButton: string;
  wishesKicker: string;
  wishesTitle: string;
  footerQuote: string;
  skipIntro: string;
  destinations: DestinationItem[];
}

export const CELESTIAL_COPY: Record<'en' | 'kh', CelestialCopy> = {
  en: {
    invitationKicker: 'Wedding Invitation',
    tapToExplore: 'Tap to explore',
    chooseYourPath: 'Choose your path',
    swipeToExplore: 'Swipe to explore',
    explore: 'Explore',
    returnToCompass: 'Return to the compass',
    countdownKicker: 'Countdown',
    countdownTitle: 'Counting down to our day',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    introKicker: 'Celebration',
    introTitle: 'Celestial Dream',
    introMessage: 'With joyful hearts, we invite you to celebrate our wedding day. Your presence is our greatest blessing.',
    theBigDay: 'The Big Day',
    ceremony: 'Ceremony',
    ceremonyTitle: 'The Holy Matrimony',
    reception: 'Reception',
    receptionTitle: 'Dinner Under the Stars',
    openMap: 'Open the map',
    earlyArrivalNote: 'Please arrive fifteen minutes prior to the commencement.',
    receptionNote: 'Evening cocktail followed by dinner and celebratory dancing.',
    timelineKicker: 'Schedule',
    timelineTitle: 'Our Wedding Day',
    storyKicker: 'The Two of Us',
    storyTitle: 'Our Love Story',
    galleryKicker: 'Memories',
    galleryTitle: 'Photo Moments',
    dressCodeKicker: 'Dress Code',
    dressCodeTitle: 'Attire Guidelines',
    ladies: 'Ladies',
    ladiesNote: 'Formal floor-length gowns in pastel or celestial tones.',
    gentlemen: 'Gentlemen',
    gentlemenNote: 'Classic dark suit or black-tie tuxedo.',
    locationKicker: 'Location',
    accommodationKicker: 'Accommodation',
    accommodationTitle: 'Where to Stay',
    travelKicker: 'Travel',
    travelTitle: 'Getting There',
    giftKicker: 'Gift Registry',
    giftTitle: 'Wedding Blessings',
    giftNote: 'Your presence at our celebration means the world to us. Should you wish to bless us with a wedding gift:',
    rsvpKicker: 'RSVP',
    rsvpTitle: 'Will you join us?',
    rsvpSubtitle: 'Please kindly respond to let us know if you can celebrate with us.',
    rsvpDeadline: 'Kindly reply by',
    rsvpButton: 'Confirm Attendance',
    wishesKicker: 'Guest Book',
    wishesTitle: 'Warm Wishes',
    footerQuote: 'Under the same sky, with the same stars, together with you.',
    skipIntro: 'Skip intro',
    destinations: [
      { id: 'our-day', title: 'Our Day', subtitle: 'The celebration begins', targetId: 'cd-details' },
      { id: 'timeline', title: 'Schedule', subtitle: 'Order of events', targetId: 'cd-timeline' },
      { id: 'our-story', title: 'Our Story', subtitle: 'How stars aligned', targetId: 'cd-story' },
      { id: 'dress-code', title: 'Dress Code', subtitle: 'Attire & colors', targetId: 'cd-dresscode' },
      { id: 'location', title: 'Location', subtitle: 'Venue & directions', targetId: 'cd-location' },
      { id: 'rsvp', title: 'RSVP', subtitle: 'Confirm attendance', targetId: 'cd-rsvp' },
    ],
  },
  kh: {
    invitationKicker: 'លិខិតអញ្ជើញអាពាហ៍ពិពាហ៍',
    tapToExplore: 'ចុចដើម្បីមើល',
    chooseYourPath: 'ជ្រើសរើសផ្នែកមើល',
    swipeToExplore: 'អូសដើម្បីផ្លាស់ប្តូរ',
    explore: 'មើល',
    returnToCompass: 'ត្រឡប់ទៅផ្ទាំងមេ',
    countdownKicker: 'រាប់ថយក្រោយ',
    countdownTitle: 'រង់ចាំថ្ងៃមង្គលដ៏វិសេសវិសាល',
    days: 'ថ្ងៃ',
    hours: 'ម៉ោង',
    minutes: 'នាទី',
    seconds: 'វិនាទី',
    introKicker: 'សិរីសួស្តីមង្គល',
    introTitle: 'រាត្រីតារាបំភ្លឺស្នេហ៍',
    introMessage: 'យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា អញ្ជើញចូលរួមជាអធិបតី និងជាសក្ខីភាពក្នុងពិធីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ',
    theBigDay: 'ទិវាមង្គលការ',
    ceremony: 'ពិធីមង្គល',
    ceremonyTitle: 'ពិធីសំពះផ្ទឹម និងសិរីសួស្តី',
    reception: 'ពិធីជប់លៀង',
    receptionTitle: 'ពិសារភោជនាហារពេលរាត្រី',
    openMap: 'មើលទីតាំងលើផែនទី',
    earlyArrivalNote: 'សូមមេត្តាអញ្ជើញមកដល់មុនពេលកម្មវិធីចាប់ផ្តើម ១៥ នាទី',
    receptionNote: 'ទទួលបដិសណ្ឋារកិច្ច និងពិសារភោជនាហារក្រោមពន្លឺតារារាត្រី',
    timelineKicker: 'កាលវិភាគ',
    timelineTitle: 'កម្មវិធីមង្គលការតាមលំដាប់',
    storyKicker: 'ដំណើររឿងស្នេហា',
    storyTitle: 'រឿងរ៉ាវគូស្រករយើងខ្ញុំ',
    galleryKicker: 'កម្រងអនុស្សាវរីយ៍',
    galleryTitle: 'រូបភាពផ្អែមល្ហែម',
    dressCodeKicker: 'ការតុបតែងខ្លួន',
    dressCodeTitle: 'ពណ៌សំលៀកបំពាក់',
    ladies: 'សុភាពនារី',
    ladiesNote: 'រ៉ូបវែង ឬសំលៀកបំពាក់ប្រពៃណីខ្មែរពណ៌ pastel ស្រស់បំព្រង',
    gentlemen: 'សុភាពបុរស',
    gentlemenNote: 'ឈុតធំ ឬអាវកាក់បែបផ្លូវការថ្លៃថ្នូរ',
    locationKicker: 'ទីតាំងរៀបចំពិធី',
    accommodationKicker: 'កន្លែងស្នាក់នៅ',
    accommodationTitle: 'សណ្ឋាគារ & ផ្ទះសំណាក់',
    travelKicker: 'ការធ្វើដំណើរ',
    travelTitle: 'មធ្យោបាយធ្វើដំណើរ',
    giftKicker: 'ចំណងដៃអាពាហ៍ពិពាហ៍',
    giftTitle: 'ពរជ័យ & ចំណងដៃ',
    giftNote: 'វត្តមានដ៏ឧត្តុង្គឧត្តមរបស់អស់លោកអ្នកជាកិត្តិយសដ៏ធំធេងបំផុតសម្រាប់យើងខ្ញុំ ប្រសិនបើលោកអ្នកមានបំណងជូនចំណងដៃ:',
    rsvpKicker: 'បញ្ជាក់ការចូលរួម',
    rsvpTitle: 'តើលោកអ្នកអាចអញ្ជើញមកបានទេ?',
    rsvpSubtitle: 'សូមមេត្តាជួយបញ្ជាក់ការចូលរួម ដើម្បីឱ្យយើងខ្ញុំរៀបចំទទួលបដិសណ្ឋារកិច្ចបានល្អប្រសើរ',
    rsvpDeadline: 'សូមឆ្លើយតបត្រឹមថ្ងៃ',
    rsvpButton: 'បញ្ជាក់ការចូលរួម',
    wishesKicker: 'សៀវភៅជូនពរ',
    wishesTitle: 'សារជូនពរពីភ្ញៀវកិត្តិយស',
    footerQuote: 'ក្រោមផ្ទៃមេឃស្រទន់ ពោរពេញដោយផ្កាយចាំងរស្មី រីករាយជាមួយអ្នកទាំងអស់គ្នា',
    skipIntro: 'រំលងការណែនាំ',
    destinations: [
      { id: 'our-day', title: 'ទិវាមង្គល', subtitle: 'កម្មវិធីមង្គលការ', targetId: 'cd-details' },
      { id: 'timeline', title: 'កម្មវិធី', subtitle: 'លំដាប់ពេលវេលា', targetId: 'cd-timeline' },
      { id: 'our-story', title: 'រឿងរ៉ាវស្នេហា', subtitle: 'អនុស្សាវរីយ៍', targetId: 'cd-story' },
      { id: 'dress-code', title: 'ការតុបតែង', subtitle: 'ពណ៌សំលៀកបំពាក់', targetId: 'cd-dresscode' },
      { id: 'location', title: 'ទីតាំង', subtitle: 'ផែនទី & ផ្លូវធ្វើដំណើរ', targetId: 'cd-location' },
      { id: 'rsvp', title: 'ចូលរួម', subtitle: 'ចុះឈ្មោះចូលរួម', targetId: 'cd-rsvp' },
    ],
  },
};
