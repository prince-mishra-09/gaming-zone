/**
 * KaiGaming — Centralized Static Business Data
 * Source: Google Business Profile + verified external directories (Oct 2026)
 *
 * VERIFIED DATA:
 * - Address, phone, email, Instagram: confirmed from owner-set code + external directories
 * - Hours: 10AM–11PM confirmed via Justdial listing (updated from 10PM)
 * - Pricing: set by owner, not publicly listed externally — preserved as-is
 * - Google rating: approximately 4.8–5.0 (Justdial, not directly from Google Maps)
 *
 * FLAGGED FOR OWNER CONFIRMATION:
 * - Google Maps rating (show on site only when confirmed directly)
 * - Exact review count
 */

export const BUSINESS = {
  name: 'KaiGaming',
  tagline: 'Play Has No Limits',
  type: 'Premium PS5 Gaming Cafe',
  description:
    'KaiGaming is a premium PS5 gaming cafe in the heart of Ambernath. We built this space for gamers, by gamers — a place where you can escape into your favourite worlds with top-tier setups and an atmosphere that hits different.',
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
  // Hours confirmed via Justdial listing — updated from 10PM to 11PM
  hours: '10:00 AM – 11:00 PM',
  hoursLabel: '10:00 AM – 11:00 PM (Daily)',
  daysOpen: 'Monday – Sunday',
  totalHoursPerDay: 13,
} as const;

export const STATIONS = [
  {
    id: 'station-1',
    name: 'PS5 Station 1',
    status: 'open' as const,
    img: '/assets/station-1.png',
    fallbackImg: '/assets/games/wwe-2k25.png',
    description: 'Premium 55″ display with DualSense controller. All games available.',
    games: ['WWE 2K25', 'Spider-Man 2', 'God of War Ragnarök', 'FC25', 'Tekken 8', 'Mortal Kombat'],
  },
  {
    id: 'station-2',
    name: 'PS5 Station 2',
    status: 'open' as const,
    img: '/assets/station-2.png',
    fallbackImg: '/assets/games/god-of-war-ragnarok.png',
    description: 'Premium 55″ display with DualSense controller. All games available.',
    games: ['GTA 5', 'Ghost of Tsushima', 'The Last of Us', 'Cricket 24', 'Asphalt Racing'],
  },
  {
    id: 'station-3',
    name: 'PS5 Station 3',
    status: 'open' as const,
    img: '/assets/station-3.png',
    fallbackImg: '/assets/games/gta-5.png',
    description: 'Premium 55″ display with DualSense controller. All games available.',
    games: ['A Way Out', 'It Takes Two', 'Uncharted 4', 'Watch Dogs', 'Horizon Forbidden West'],
  },
] as const;

export const PRICING = {
  superHours: {
    name: 'Super Hours',
    price: '₹55',
    priceNum: 55,
    unit: '/hr per person',
    time: '10AM – 2PM only',
    description: 'Best value! Any game, any station during off-peak hours.',
    games: 'All 16 Games',
    highlight: true,
    badge: 'Best Value',
    conditions: 'Valid 10AM–2PM daily. Any game, any station.',
  },
  quickPlay: {
    name: 'Quick Play',
    price: '₹70',
    priceNum: 70,
    unit: '/hr per person',
    time: 'Any Time',
    description: 'Competitive and fighting games. Jump in and dominate.',
    games: 'WWE 2K25, FC25, Tekken 8, Mortal Kombat, Cricket 24, Asphalt Racing',
    highlight: false,
    badge: null,
    conditions: 'Available all day. Sports and fighting titles.',
  },
  storyMode: {
    name: 'Story Mode',
    price: '₹90',
    priceNum: 90,
    unit: '/hr per person',
    time: 'Any Time',
    description: 'Immersive single-player adventures. Take your time, live the story.',
    games: 'Spider-Man 2, The Last of Us, God of War Ragnarök, Ghost of Tsushima, A Way Out, It Takes Two',
    highlight: false,
    badge: null,
    conditions: 'Available all day. Story and adventure titles.',
  },
  openWorld: {
    name: 'Open World',
    price: '₹100',
    priceNum: 100,
    unit: '/hr per person',
    time: 'Any Time',
    description: 'Explore massive open worlds. GTA, Uncharted, Watch Dogs and more.',
    games: 'GTA 5, Uncharted 4, Watch Dogs, Horizon Forbidden West',
    highlight: false,
    badge: null,
    conditions: 'Available all day. Open-world titles.',
  },
} as const;

export const OFFERS = [
  {
    title: 'Quick Play Deal',
    desc: '2 Hour Booking / Half Hour Free',
    valid: 'After 2PM, everyday till 31st December',
    terms: 'Valid on all Quick Play games. Cannot be combined with other offers. Walk-in or pre-book.',
    icon: '🎮',
  },
  {
    title: 'Story Mode Deal',
    desc: '3 Hour Booking / 1 Hour Free',
    valid: 'After 2PM, everyday till 31st December',
    terms: 'Valid on Story Mode tier games only. Advance booking recommended. Subject to availability.',
    icon: '🏆',
  },
] as const;

export const GAMES = [
  { name: 'WWE 2K25', img: '/assets/games/wwe-2k25.png', category: 'Sports', multiplayer: true },
  { name: 'Spider-Man 2', img: '/assets/games/spider-man-2.png', category: 'Action-Adventure', multiplayer: false },
  { name: 'God of War Ragnarök', img: '/assets/games/god-of-war-ragnarok.png', category: 'Action-Adventure', multiplayer: false },
  { name: 'FC25', img: '/assets/games/fc25.png', category: 'Sports', multiplayer: true },
  { name: 'Tekken 8', img: '/assets/games/tekken-8.png', category: 'Fighting', multiplayer: true },
  { name: 'Mortal Kombat', img: '/assets/games/mortal-kombat.png', category: 'Fighting', multiplayer: true },
  { name: 'GTA 5', img: '/assets/games/gta-5.png', category: 'Open World', multiplayer: true },
  { name: 'Ghost of Tsushima', img: '/assets/games/ghost-of-tsushima.png', category: 'Action-Adventure', multiplayer: false },
  { name: 'The Last of Us', img: '/assets/games/the-last-of-us.png', category: 'Action-Adventure', multiplayer: false },
  { name: 'Cricket 24', img: '/assets/games/cricket-24.png', category: 'Sports', multiplayer: true },
  { name: 'Asphalt Racing', img: '/assets/games/asphalt-racing.png', category: 'Racing', multiplayer: true },
  { name: 'A Way Out', img: '/assets/games/a-way-out.png', category: 'Co-op', multiplayer: true },
  { name: 'It Takes Two', img: '/assets/games/it-takes-two.png', category: 'Co-op', multiplayer: true },
  { name: 'Uncharted 4', img: '/assets/games/uncharted.png', category: 'Action-Adventure', multiplayer: false },
  { name: 'Watch Dogs', img: '/assets/games/watch-dogs.png', category: 'Open World', multiplayer: false },
  { name: 'Horizon Forbidden West', img: '/assets/games/horizon-forbidden-west.png', category: 'Action-Adventure', multiplayer: false },
] as const;

export const STATS = [
  { target: 3, suffix: '', label: 'PS5 Stations' },
  { target: 16, suffix: '+', label: 'Games Available' },
  { target: 55, suffix: '', label: '₹ Starting/Hr' },
  { target: 13, suffix: 'hrs', label: 'Open Daily' },
] as const;

export const FEATURES = [
  {
    title: 'PS5 Gaming',
    desc: '3 premium PlayStation 5 setups with DualSense controllers and 16+ top titles.',
    icon: 'Gamepad2',
  },
  {
    title: 'Snacks & Drinks',
    desc: 'Fuel your gaming sessions with our range of snacks and beverages available at the cafe.',
    icon: 'Coffee',
  },
  {
    title: 'Group Bookings',
    desc: 'Book multiple stations for parties, events, or gaming nights with friends. Great for 2–6 players.',
    icon: 'Users',
  },
  {
    title: 'Perfect Vibe',
    desc: 'LED mood lighting, premium displays, surround sound — a setup built purely for immersion.',
    icon: 'Wifi',
  },
] as const;

// CAFE PHOTOS — real interior / station photos
export const CAFE_PHOTOS = [
  { img: '/assets/cafe-1.png', label: 'Gaming Area' },
  { img: '/assets/cafe-2.png', label: 'PS5 Setup' },
  { img: '/assets/cafe-3.png', label: 'Station View' },
  { img: '/assets/cafe-4.png', label: 'Atmosphere' },
] as const;

// TIME SLOTS — kept in sync with booking system
export const TIME_SLOTS = [
  '10:00 - 12:00',
  '12:00 - 14:00',
  '14:00 - 16:00',
  '16:00 - 18:00',
  '18:00 - 20:00',
  '20:00 - 22:00',
  '22:00 - 23:00',
] as const;
