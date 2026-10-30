/**
 * Glued Supercharged — Centralized Static Business Data
 * Source: https://gluedsupercharged.com/ (Noida, Sector 96)
 *
 * All photos and visual assets are strictly preserved from existing assets.
 */

export const BUSINESS = {
  name: 'Glued Supercharged',
  shortName: 'Glued',
  tagline: "Noida's Biggest Gaming & Entertainment Center — We Make Your Parties Super! ⚡",
  type: 'Mega Gaming & Entertainment Center',
  description:
    'Glued Supercharged is Noida’s ultimate gaming and entertainment destination. From glowing bowling lanes and limitless arcade classics to PlayStation 5 battlestations, AR/VR cricket, laser tag, and cue sports — an electric atmosphere built for champions and parties.',
  address: 'Unit No. 101, 1st Floor, E Square, Plot No. C2, Noida-Greater Noida Expressway, Sector 96, Noida, Uttar Pradesh 201304',
  addressShort: 'E Square, Sector 96, Noida, Uttar Pradesh',
  city: 'Noida',
  state: 'Uttar Pradesh',
  pincode: '201304',
  phone: '+91 9311661750',
  phoneDigits: '919311661750',
  phoneAlt: '+91 9311661749',
  whatsapp: '+91 9311661750',
  email: 'supercharged.glued@gmail.com',
  website: 'https://gluedsupercharged.com/',
  instagram: '@gluedsupercharged',
  instagramHandle: 'gluedsupercharged',
  instagramUrl: 'https://instagram.com/gluedsupercharged',
  whatsappUrl: 'https://wa.me/919311661750',
  googleMapsUrl: 'https://www.google.com/maps?q=Glued+Supercharged+E+Square+Sector+96+Noida+Uttar+Pradesh+201304&z=16&output=embed',
  googleMapsLink: 'https://maps.google.com/?q=Glued+Supercharged+E+Square+Sector+96+Noida+Uttar+Pradesh+201304',
  hours: '11:00 AM – 11:00 PM',
  hoursLabel: '11:00 AM – 11:00 PM (Daily)',
  daysOpen: 'Monday – Sunday (All 7 Days)',
  totalHoursPerDay: 12,
  rating: '4.8',
  reviewCount: '500+',
} as const;

export const STATIONS = [
  {
    id: 'station-1',
    name: 'PS5 Battlestation 1 — Combat & Sports',
    shortName: 'Station 1',
    status: 'open' as const,
    img: '/assets/station-1.png',
    gameImg: '/assets/games/wwe-2k25.png',
    specs: '55″ 4K HDR · 2x DualSense Wireless · Surround Audio',
    description: 'High-energy console station for fighting tournaments and sports rivalries. Dual controllers ready for local multiplayer.',
    popularTitles: 'WWE 2K25, FC25, Tekken 8, Spider-Man 2',
    games: ['WWE 2K25', 'Spider-Man 2', 'God of War Ragnarök', 'FC25', 'Tekken 8', 'Mortal Kombat'],
  },
  {
    id: 'station-2',
    name: 'PS5 Battlestation 2 — Story & Action',
    shortName: 'Station 2',
    status: 'open' as const,
    img: '/assets/station-2.png',
    gameImg: '/assets/games/god-of-war-ragnarok.png',
    specs: '55″ 4K HDR · 2x DualSense Wireless · Surround Audio',
    description: 'Cinematic gaming station for massive campaigns and open-world adventures with responsive DualSense haptics.',
    popularTitles: 'God of War Ragnarök, GTA 5, Ghost of Tsushima',
    games: ['GTA 5', 'Ghost of Tsushima', 'The Last of Us', 'Cricket 24', 'Asphalt Racing'],
  },
  {
    id: 'station-3',
    name: 'PS5 Battlestation 3 — Co-Op & Open World',
    shortName: 'Station 3',
    status: 'open' as const,
    img: '/assets/station-3.png',
    gameImg: '/assets/games/gta-5.png',
    specs: '55″ 4K HDR · 2x DualSense Wireless · Surround Audio',
    description: 'Split-screen co-op gaming lounge. Team up with friends for 2-player cooperative journeys or explore open maps.',
    popularTitles: 'It Takes Two, A Way Out, Horizon, Uncharted',
    games: ['A Way Out', 'It Takes Two', 'Uncharted 4', 'Watch Dogs', 'Horizon Forbidden West'],
  },
] as const;

export const PRICING = {
  superHours: {
    name: 'Play Unlimited Card',
    price: '₹799',
    priceNum: 799,
    unit: '/person (3 Hours)',
    time: '3 Hours Unlimited Play',
    description: 'Unlimited access to all retro and modern video arcade games + 1 vending/prize-machine play.',
    games: 'Unlimited Arcades, Racing Simulators & Video Games',
    highlight: false,
    badge: 'Arcade Pass',
    conditions: 'Valid all day. Excludes bowling & cricket.',
  },
  quickPlay: {
    name: 'Play More Card',
    price: '₹999',
    priceNum: 999,
    unit: '/person (4 Hours)',
    time: '4 Hours Multi-Zone Access',
    description: 'Unlimited arcade & video games + 1 Bowling game + 1 Cricket/RoboKeeper session + 1 Archery or Laser Tag + 2 vending plays.',
    games: 'Arcade + 1 Bowling + 1 Cricket/RoboKeeper + 1 Laser Tag/Archery',
    highlight: true,
    badge: 'Most Popular',
    conditions: 'Valid daily. Most loved multi-zone entertainment pass.',
  },
  storyMode: {
    name: 'Play Max Card',
    price: '₹1,299',
    priceNum: 1299,
    unit: '/person (Full Day)',
    time: 'Full Day Unlimited Pass',
    description: 'Full-day unlimited arcade and video games + 1 Bowling game + 1 Cricket session + 2 Adventure activities (Archery / Laser Tag) + 4 vending plays.',
    games: 'Full Day Arcade + Bowling + Cricket + 2 Activities',
    highlight: false,
    badge: 'Full Day Pass',
    conditions: 'All-day unlimited gaming pass. Total entertainment freedom.',
  },
  openWorld: {
    name: 'Supercharge VIP',
    price: '₹1,699',
    priceNum: 1699,
    unit: '/person (VIP All-Day)',
    time: 'All-Day VIP Access',
    description: 'Full-day all-zone access including Super Cue Lounge (Pool & Snooker), Bowling, AR Sports, and priority gaming lounge slots.',
    games: 'Complete Center Access + Cue Sports + Bowling + VIP Lounge',
    highlight: false,
    badge: 'VIP Experience',
    conditions: 'Ideal for VIP gaming, group celebrations, and extended outings.',
  },
} as const;

export const OFFERS = [
  {
    title: 'Online Booking Perk',
    desc: 'Book Online & Save 15%',
    valid: 'Valid on Select Limitless Cards',
    terms: 'Pre-book online via official channels or WhatsApp to claim up to 15% discount on Limitless Cards.',
    icon: '⚡',
  },
  {
    title: 'Super Party & Corporate Outings',
    desc: 'Custom Packages from ₹1,199/person',
    valid: 'For Groups of 10+ Players',
    terms: 'Includes bowling tournaments, limitless arcade access, sports sessions, and food catering options.',
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
  { target: 4, suffix: '+', label: 'Mega Zones' },
  { target: 16, suffix: '+', label: 'PS5 & Arcades' },
  { target: 799, suffix: '', label: '₹ Starting Pass' },
  { target: 12, suffix: 'hrs', label: 'Daily Open' },
] as const;

export const FEATURES = [
  {
    title: 'Super Arcade & VR',
    desc: 'Hundreds of retro and modern video arcades, VR games, air hockey, and thrilling racing simulators.',
    icon: 'Gamepad2',
  },
  {
    title: 'Super Lanes Bowling',
    desc: 'Signature neon glow-in-the-dark bowling alley designed for high-energy casual games and tournaments.',
    icon: 'Sparkles',
  },
  {
    title: 'PS5 Battlestations',
    desc: 'Dedicated PlayStation 5 setups with DualSense wireless controllers and top global titles on 55″ displays.',
    icon: 'Gamepad2',
  },
  {
    title: 'Super Cricket & RoboKeeper',
    desc: 'Interactive AR/VR cricket nets and the legendary RoboKeeper football goalkeeping challenge.',
    icon: 'Zap',
  },
  {
    title: 'Super Cue Lounge',
    desc: 'International-standard pool tables, snooker, and table tennis lounge for chill social sports.',
    icon: 'Users',
  },
  {
    title: 'Cafe, Bar & Party Zone',
    desc: 'Delicious food, refreshing beverages, and custom catering packages for birthdays and corporate events.',
    icon: 'Coffee',
  },
] as const;

export const CAFE_PHOTOS = [
  { img: '/assets/cafe-1.png', label: 'Super Entertainment Arena', subtitle: 'Multi-zone gaming, arcades, and console stations' },
  { img: '/assets/cafe-2.png', label: 'Neon Glow Ambiance', subtitle: 'Signature LED lighting & vibrant nightlife atmosphere' },
  { img: '/assets/cafe-3.png', label: 'Console & Simulator Stations', subtitle: '55″ 4K ultra-low-latency display battlestations' },
  { img: '/assets/cafe-4.png', label: 'Chill Lounge & Snack Bar', subtitle: 'Comfortable seating & party zones' },
] as const;

export const REVIEWS = [
  {
    name: 'Karan Sharma',
    role: 'Noida Resident',
    avatar: 'K',
    game: 'Bowling & Arcades',
    comment: 'Glued Supercharged in Sector 96 is on another level! The Play More card is insane value — bowling, cricket, and unlimited arcade games for 4 hours.',
    stars: 5,
  },
  {
    name: 'Sneha Verma',
    role: 'Corporate Team Lead',
    avatar: 'S',
    game: 'Party Package',
    comment: 'Hosted our team outing here with 25 people. Flawless management, super fun bowling tournament, and delicious food. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Aditya Mehra',
    role: 'Gamer & Regular',
    avatar: 'A',
    game: 'PS5 & VR Sports',
    comment: 'The PS5 setups are pristine, controllers are top notch, and the neon vibe is unbeatable. Best entertainment center in Noida hands down.',
    stars: 5,
  },
] as const;

export const FAQS = [
  {
    q: 'What is Glued Supercharged and where is it located?',
    a: 'Glued Supercharged is Noida’s premier gaming and entertainment center located at Unit No. 101, 1st Floor, E Square, Plot No. C2, Noida-Greater Noida Expressway, Sector 96, Noida, Uttar Pradesh (201304).',
  },
  {
    q: 'How does the Limitless Card system work?',
    a: 'Instead of purchasing single tokens, you buy a time-bound Limitless Card (like the Play Unlimited at ₹799 or Play More at ₹999). This gives you continuous, unlimited access to video arcades, plus included slots for bowling, sports, and laser tag depending on your tier.',
  },
  {
    q: 'Can we book bowling lanes or party packages in advance?',
    a: 'Yes! You can reserve your preferred time and passes online or via WhatsApp. For birthdays, corporate events, and group outings of 10+ people, we offer customized packages starting from ₹1,199 per person.',
  },
  {
    q: 'What are the operating hours of Glued Supercharged?',
    a: 'We are open all 7 days of the week from 11:00 AM to 11:00 PM.',
  },
  {
    q: 'Are food and beverages available inside the center?',
    a: 'Yes, we have a fully equipped cafe and snack bar offering delicious pizzas, appetizers, cold beverages, and combo meals to keep your energy high.',
  },
] as const;

export const TIME_SLOTS = [
  '11:00 - 13:00',
  '13:00 - 15:00',
  '15:00 - 17:00',
  '17:00 - 19:00',
  '19:00 - 21:00',
  '21:00 - 23:00',
] as const;
