/**
 * KaiGaming — Centralized Static Business Data
 * Source: Google Business Profile + verified external directories (Oct 2026)
 *
 * VERIFIED DATA:
 * - Address, phone, email, Instagram: confirmed from owner-set code + external directories
 * - Hours: 10AM–11PM confirmed via Justdial listing (updated from 10PM)
 * - Pricing: set by owner, not publicly listed externally — preserved as-is
 * - Google rating: approximately 4.8–5.0 (Justdial, not directly from Google Maps)
 */

export const BUSINESS = {
  name: 'Kai Gaming',
  tagline: 'Play Has No Limits',
  type: 'Premium PS5 Gaming Cafe',
  description:
    'Kai Gaming is a premium PS5 gaming cafe in the heart of Ambernath. We built this space for gamers, by gamers — a place where you can escape into your favourite worlds with top-tier setups and an atmosphere that hits different.',
  address: 'Shop No. 23, Raj Regalia Phase 2, Palegaon Rd, near Sai Nilkanth, Pale Gaon, East, Ambernath, Maharashtra 421506',
  addressShort: 'Raj Regalia Phase 2, Ambernath East, Maharashtra',
  city: 'Ambernath',
  state: 'Maharashtra',
  pincode: '421506',
  phone: '+91 9730093803',
  phoneDigits: '919730093803',
  whatsapp: '+91 9730093803',
  email: 'kaigaming2k25@gmail.com',
  instagram: '@_kai.gaming__',
  instagramHandle: '_kai.gaming__',
  instagramUrl: 'https://instagram.com/_kai.gaming__',
  whatsappUrl: 'https://wa.me/919730093803',
  googleMapsUrl: 'https://www.google.com/maps?q=KaiGaming+Ambernath+Maharashtra+421506&z=16&output=embed',
  googleMapsLink: 'https://maps.google.com/?q=Shop+No.+23,+Raj+Regalia+Phase+2,+Palegaon+Rd,+Ambernath+East,+Maharashtra+421506',
  hours: '10:00 AM – 11:00 PM',
  hoursLabel: '10:00 AM – 11:00 PM (Daily)',
  daysOpen: 'Monday – Sunday (All 7 Days)',
  totalHoursPerDay: 13,
  rating: '4.9',
  reviewCount: '50+',
} as const;

export const STATIONS = [
  {
    id: 'station-1',
    name: 'PS5 Station 1 — Combat & Sports',
    shortName: 'Station 1',
    status: 'open' as const,
    img: '/assets/station-1.png',
    gameImg: '/assets/games/wwe-2k25.png',
    specs: '55″ 4K HDR · 2x DualSense Wireless · Surround Audio',
    description: 'High-energy setup tuned for head-to-head fighting and sports rivalries. Dual controllers ready for local multiplayer.',
    popularTitles: 'WWE 2K25, FC25, Tekken 8, Spider-Man 2',
    games: ['WWE 2K25', 'Spider-Man 2', 'God of War Ragnarök', 'FC25', 'Tekken 8', 'Mortal Kombat'],
  },
  {
    id: 'station-2',
    name: 'PS5 Station 2 — Story & Action',
    shortName: 'Station 2',
    status: 'open' as const,
    img: '/assets/station-2.png',
    gameImg: '/assets/games/god-of-war-ragnarok.png',
    specs: '55″ 4K HDR · 2x DualSense Wireless · Surround Audio',
    description: 'Immersive battle station for massive single-player campaigns and cinematic adventures with haptic trigger response.',
    popularTitles: 'God of War Ragnarök, GTA 5, Ghost of Tsushima',
    games: ['GTA 5', 'Ghost of Tsushima', 'The Last of Us', 'Cricket 24', 'Asphalt Racing'],
  },
  {
    id: 'station-3',
    name: 'PS5 Station 3 — Co-Op & Open World',
    shortName: 'Station 3',
    status: 'open' as const,
    img: '/assets/station-3.png',
    gameImg: '/assets/games/gta-5.png',
    specs: '55″ 4K HDR · 2x DualSense Wireless · Surround Audio',
    description: 'The ultimate co-op gaming lounge. Play with your gaming buddy in split-screen masterpieces or cruise vast open maps.',
    popularTitles: 'It Takes Two, A Way Out, Horizon, Uncharted',
    games: ['A Way Out', 'It Takes Two', 'Uncharted 4', 'Watch Dogs', 'Horizon Forbidden West'],
  },
] as const;

export const PRICING = {
  superHours: {
    name: 'Super Hours',
    price: '₹55',
    priceNum: 55,
    unit: '/hr per person',
    time: '10:00 AM – 2:00 PM only',
    description: 'Best value off-peak rate! Any game, any station. Premium gaming without the premium price tag.',
    games: 'All 16+ Games Included',
    highlight: true,
    badge: 'Best Value',
    conditions: 'Valid 10:00 AM – 2:00 PM every day. Walk-in or pre-book.',
  },
  quickPlay: {
    name: 'Quick Play',
    price: '₹70',
    priceNum: 70,
    unit: '/hr per person',
    time: 'Available All Day',
    description: 'Fast-paced sports, racing, and fighting titles. Jump straight in with friends and settle the score.',
    games: 'WWE 2K25, FC25, Tekken 8, Mortal Kombat, Cricket 24, Asphalt Racing',
    highlight: false,
    badge: null,
    conditions: 'Available all 13 operating hours. Ideal for 1v1 multiplayer.',
  },
  storyMode: {
    name: 'Story Mode',
    price: '₹90',
    priceNum: 90,
    unit: '/hr per person',
    time: 'Available All Day',
    description: 'Immersive single-player cinematic adventures and 2-player co-op storytelling. Take your time, live the story.',
    games: 'Spider-Man 2, The Last of Us, God of War Ragnarök, Ghost of Tsushima, A Way Out, It Takes Two',
    highlight: false,
    badge: null,
    conditions: 'Available all day. High-immersion single-player and co-op.',
  },
  openWorld: {
    name: 'Open World',
    price: '₹100',
    priceNum: 100,
    unit: '/hr per person',
    time: 'Available All Day',
    description: 'Explore massive open worlds with total freedom. Roam Los Santos, ancient Japan, or futuristic frontiers.',
    games: 'GTA 5, Uncharted 4, Watch Dogs, Horizon Forbidden West',
    highlight: false,
    badge: null,
    conditions: 'Available all day. Complete open-world experience.',
  },
} as const;

export const OFFERS = [
  {
    title: 'Quick Play Deal',
    desc: 'Book 2 Hours → Get 30 Mins Free',
    valid: 'Valid Daily After 2:00 PM',
    terms: 'Valid on all Quick Play games. Perfect for extended FC25 & Tekken sessions. Walk-in or pre-book via WhatsApp.',
    icon: '⚡',
  },
  {
    title: 'Story Mode Deal',
    desc: 'Book 3 Hours → Get 1 Hour Free',
    valid: 'Valid Daily After 2:00 PM',
    terms: 'Valid on all Story & Co-op titles. Advance booking recommended. Enjoy deep 4-hour playthroughs.',
    icon: '🏆',
  },
] as const;

export const GAMES = [
  { name: 'WWE 2K25', img: '/assets/games/wwe-2k25.png', category: 'Sports', multiplayer: true, badge: 'Popular' },
  { name: 'Spider-Man 2', img: '/assets/games/spider-man-2.png', category: 'Action-Adventure', multiplayer: false, badge: 'PS5 Exclusive' },
  { name: 'God of War Ragnarök', img: '/assets/games/god-of-war-ragnarok.png', category: 'Action-Adventure', multiplayer: false, badge: 'Masterpiece' },
  { name: 'FC25', img: '/assets/games/fc25.png', category: 'Sports', multiplayer: true, badge: '#1 Played' },
  { name: 'Tekken 8', img: '/assets/games/tekken-8.png', category: 'Fighting', multiplayer: true, badge: 'Tournament' },
  { name: 'Mortal Kombat', img: '/assets/games/mortal-kombat.png', category: 'Fighting', multiplayer: true, badge: 'PvP Favorite' },
  { name: 'GTA 5', img: '/assets/games/gta-5.png', category: 'Open World', multiplayer: true, badge: 'Legendary' },
  { name: 'Ghost of Tsushima', img: '/assets/games/ghost-of-tsushima.png', category: 'Action-Adventure', multiplayer: false, badge: 'Visual Stunner' },
  { name: 'The Last of Us', img: '/assets/games/the-last-of-us.png', category: 'Action-Adventure', multiplayer: false, badge: 'Story Epic' },
  { name: 'Cricket 24', img: '/assets/games/cricket-24.png', category: 'Sports', multiplayer: true, badge: 'Cricket Season' },
  { name: 'Asphalt Racing', img: '/assets/games/asphalt-racing.png', category: 'Racing', multiplayer: true, badge: 'Split-Screen' },
  { name: 'A Way Out', img: '/assets/games/a-way-out.png', category: 'Co-op', multiplayer: true, badge: '2-Player Co-op' },
  { name: 'It Takes Two', img: '/assets/games/it-takes-two.png', category: 'Co-op', multiplayer: true, badge: 'GOTY Co-op' },
  { name: 'Uncharted 4', img: '/assets/games/uncharted.png', category: 'Action-Adventure', multiplayer: false, badge: 'Adventure' },
  { name: 'Watch Dogs', img: '/assets/games/watch-dogs.png', category: 'Open World', multiplayer: false, badge: 'Hacking/Action' },
  { name: 'Horizon Forbidden West', img: '/assets/games/horizon-forbidden-west.png', category: 'Action-Adventure', multiplayer: false, badge: '4K 60FPS' },
] as const;

export const STATS = [
  { target: 3, suffix: '', label: 'PS5 Stations' },
  { target: 16, suffix: '+', label: 'Top Games' },
  { target: 55, suffix: '', label: '₹ Starting Rate' },
  { target: 13, suffix: 'hrs', label: 'Daily Open' },
] as const;

export const FEATURES = [
  {
    title: 'PS5 Battlestations',
    desc: '3 dedicated PlayStation 5 consoles, pristine DualSense wireless controllers, and surround sound on every station.',
    icon: 'Gamepad2',
  },
  {
    title: 'Cloud Ceiling & LED Ambiance',
    desc: 'Custom illuminated cloud ceiling and neon mood lighting created specifically to maximize gaming immersion.',
    icon: 'Sparkles',
  },
  {
    title: 'Snacks & Cold Beverages',
    desc: 'Recharge between matches with our selection of chips, energy drinks, juices, and snacks available on-premise.',
    icon: 'Coffee',
  },
  {
    title: 'Group Gaming & Tournaments',
    desc: 'Book all 3 stations for private birthdays, LAN competitions, or weekend gaming marathons with friends.',
    icon: 'Users',
  },
  {
    title: 'Fully Air Conditioned',
    desc: 'Stay cool and comfortable during intense 4-hour gaming sessions in a pristine, chill environment.',
    icon: 'Wind',
  },
  {
    title: 'Zero Latency & Updated Discs',
    desc: 'All games are pre-installed and updated with the newest patches and rosters. Zero wait time to jump in.',
    icon: 'Zap',
  },
] as const;

export const CAFE_PHOTOS = [
  { img: '/assets/cafe-1.png', label: 'Main Gaming Arena', subtitle: '3x PS5 setups with DualSense controllers' },
  { img: '/assets/cafe-2.png', label: 'Cloud Ceiling Ambiance', subtitle: 'Signature LED lighting & gamer atmosphere' },
  { img: '/assets/cafe-3.png', label: 'Console Battlestation', subtitle: '55″ 4K ultra-low-latency display' },
  { img: '/assets/cafe-4.png', label: 'Chill Lounge Area', subtitle: 'Comfortable seating & snack bar' },
] as const;

export const REVIEWS = [
  {
    name: 'Aryan Shinde',
    role: 'Competitive Gamer',
    avatar: 'A',
    game: 'Tekken 8 & FC25',
    comment: 'Hands down the best PS5 cafe in Ambernath! The DualSense controllers have zero drift, 55″ screen feels huge, and the cloud LED ceiling looks insane in the dark.',
    stars: 5,
  },
  {
    name: 'Rohan Kulkarni',
    role: 'College Student',
    avatar: 'R',
    game: 'GTA 5 & God of War',
    comment: '₹55/hr morning Super Hours is unbelievable value. We come here every weekend between 10AM to 2PM. Clean, air-conditioned, and super chill vibe.',
    stars: 5,
  },
  {
    name: 'Tanmay Patil',
    role: 'Weekend Regular',
    avatar: 'T',
    game: 'A Way Out & WWE 2K25',
    comment: 'Booked all 3 stations for my birthday with 6 friends. We played FIFA and WWE tournament for 3 hours. Great hospitality and instant WhatsApp confirmation!',
    stars: 5,
  },
] as const;

export const FAQS = [
  {
    q: 'Can 2 or more people play together on one station?',
    a: 'Yes! Every PS5 station is equipped with 2 DualSense wireless controllers. You can enjoy 2-player local multiplayer and co-op games like FC25, Tekken 8, Mortal Kombat, WWE 2K25, A Way Out, and It Takes Two at no extra console fee.',
  },
  {
    q: 'What are Super Hours and when are they available?',
    a: 'Super Hours run every single day from 10:00 AM to 2:00 PM at just ₹55/hr per person. You get full access to any game and any station during these hours. Walk-in or book via WhatsApp!',
  },
  {
    q: 'Do I need to download games or bring my own PSN account?',
    a: 'No need at all! All 16+ top titles are pre-installed on high-speed NVMe storage with the latest rosters and patches. You can also sign in to your own PSN profile if you wish to sync trophies.',
  },
  {
    q: 'How do I book a station for my friends or birthday party?',
    a: 'You can use our online booking wizard to pick your time and station, then click "Confirm on WhatsApp" to instantly lock your slot with the manager. Walk-ins are also welcome subject to availability.',
  },
  {
    q: 'What are the operating hours and location in Ambernath?',
    a: 'Kai Gaming is open all 7 days of the week from 10:00 AM to 11:00 PM. We are located at Shop No. 23, Raj Regalia Phase 2, Palegaon Road, near Sai Nilkanth, Ambernath East (Pin: 421506).',
  },
] as const;

export const TIME_SLOTS = [
  '10:00 - 12:00',
  '12:00 - 14:00',
  '14:00 - 16:00',
  '16:00 - 18:00',
  '18:00 - 20:00',
  '20:00 - 22:00',
  '22:00 - 23:00',
] as const;
