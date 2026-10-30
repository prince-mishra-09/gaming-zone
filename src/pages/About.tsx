import { Gamepad2, Users, Coffee, Sparkles, Wind, Zap, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useState, useRef } from 'react';
import { BUSINESS, GAMES, CAFE_PHOTOS, FEATURES, STATIONS } from '../data/businessData';
import { Link } from 'react-router-dom';

const ICON_MAP: Record<string, React.ElementType> = {
  Gamepad2,
  Sparkles,
  Coffee,
  Users,
  Wind,
  Zap,
};

const CATEGORIES = ['All', 'Sports', 'Action-Adventure', 'Fighting', 'Co-op', 'Open World'] as const;

export default function About() {
  const [heroRef, heroInView] = useInView(0.1);
  const [photoRef, photoInView] = useInView(0.1);
  const [specsRef, specsInView] = useInView(0.1);
  const [offerRef, offerInView] = useInView(0.1);
  const [gamesRef, gamesInView] = useInView(0.1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredGames = selectedCategory === 'All'
    ? GAMES
    : GAMES.filter(g => g.category === selectedCategory);

  return (
    <div className="overflow-x-hidden">
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="py-20 sm:py-24 bg-kai-dark hero-grid border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl reveal ${heroInView ? 'visible' : ''}`}>
            <span className="text-xs font-black uppercase tracking-widest text-kai-red block mb-3">
              About Kai Gaming Ambernath
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[0.98]">
              WHERE GAMERS<br /><span className="text-kai-red">COME ALIVE</span>
            </h1>
            <p className="text-kai-muted text-base sm:text-lg leading-relaxed mb-6">
              {BUSINESS.description}
            </p>
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-bold text-kai-text">
              <span className="px-3 py-1.5 rounded-full bg-kai-surface border border-white/10">📍 {BUSINESS.addressShort}</span>
              <span className="px-3 py-1.5 rounded-full bg-kai-surface border border-white/10">⏰ {BUSINESS.hoursLabel}</span>
              <span className="px-3 py-1.5 rounded-full bg-kai-surface border border-white/10">⭐ {BUSINESS.rating} / 5.0 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Café Real Photo Gallery ─── */}
      <section ref={photoRef} className="py-16 bg-kai-deeper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              OUR <span className="text-kai-red">LOUNGE & SETUPS</span>
            </h2>
            <p className="text-kai-muted text-xs sm:text-sm max-w-lg mx-auto">
              Real photos from our gaming lounge in Ambernath East. Designed for maximum comfort and immersion.
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger-children ${photoInView ? 'visible' : ''}`}>
            {CAFE_PHOTOS.map((photo, i) => (
              <div key={i} className="card-neo overflow-hidden aspect-video group relative">
                <img
                  src={photo.img}
                  alt={photo.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 img-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-white font-bold text-sm sm:text-base">{photo.label}</h4>
                  <p className="text-kai-muted text-xs line-clamp-1">{photo.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Hardware & Setup Specifications ─── */}
      <section ref={specsRef} className="py-16 bg-kai-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 reveal ${specsInView ? 'visible' : ''}`}>
            <span className="text-xs font-black uppercase tracking-widest text-kai-teal block mb-2">Hardware Standard</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              PREMIUM <span className="text-kai-red">HARDWARE SPECS</span>
            </h2>
            <p className="text-kai-muted text-sm max-w-xl mx-auto">
              We never compromise on display quality, controller condition, or audio clarity.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children ${specsInView ? 'visible' : ''}`}>
            {STATIONS.map((station) => (
              <div key={station.id} className="card-neo p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-wider bg-kai-red text-kai-ink px-2.5 py-1 rounded">
                      {station.shortName}
                    </span>
                    <span className="text-xs font-bold text-green-400 flex items-center gap-1">
                      <CheckCircle2 size={13} /> Active Station
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-kai-text mb-2">{station.name}</h3>
                  <p className="text-kai-muted text-xs leading-relaxed mb-4">{station.description}</p>

                  <div className="space-y-2 text-xs text-kai-text border-t border-white/5 pt-3 mb-4">
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span className="text-kai-muted">Display</span>
                      <span className="font-bold">55″ 4K Ultra HD HDR</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span className="text-kai-muted">Controllers</span>
                      <span className="font-bold">2x PS5 DualSense Haptic</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span className="text-kai-muted">Audio</span>
                      <span className="font-bold">Cinematic Surround Sound</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-kai-muted">Storage</span>
                      <span className="font-bold">High-Speed NVMe SSD</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/booking"
                  className="btn-neo bg-kai-surface text-kai-text text-center text-xs font-bold py-2.5 border border-white/10 hover:border-kai-red/50 block"
                >
                  Book {station.shortName}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What We Offer / Amenities ─── */}
      <section ref={offerRef} className="py-20 bg-kai-deeper border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 reveal ${offerInView ? 'visible' : ''}`}>
            <span className="text-xs font-black uppercase tracking-widest text-kai-red block mb-2">Amenities</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              WHY PLAY AT <span className="text-kai-red">KAI GAMING?</span>
            </h2>
            <p className="text-kai-muted text-sm max-w-xl mx-auto">
              Designed from the ground up to give you and your friends the best gaming session possible.
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${offerInView ? 'visible' : ''}`}>
            {FEATURES.map((item, i) => {
              const Icon = ICON_MAP[item.icon] ?? Gamepad2;
              return (
                <div key={i} className="card-neo p-6 hover:shadow-neo transition-all duration-200 group">
                  <div className="w-12 h-12 bg-kai-red flex items-center justify-center rounded-xl shadow-neo-sm mb-4 group-hover:rotate-6 transition-transform duration-200">
                    <Icon size={22} className="text-kai-ink" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-kai-text">{item.title}</h3>
                  <p className="text-kai-muted text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Games Library with Category Filters ─── */}
      <section ref={gamesRef} className="py-20 bg-kai-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-10 reveal ${gamesInView ? 'visible' : ''}`}>
            <span className="text-xs font-black uppercase tracking-widest text-kai-teal block mb-2">16+ Top Titles</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              FULL GAME <span className="text-kai-red">LIBRARY</span>
            </h2>
            <p className="text-kai-muted text-sm max-w-lg mx-auto mb-8">
              All games are pre-installed with the latest updates and rosters. Ready to play instantly.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-kai-red text-kai-ink shadow-neo-sm'
                      : 'bg-kai-surface text-kai-muted hover:text-kai-text border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 stagger-children ${gamesInView ? 'visible' : ''}`}>
            {filteredGames.map((game, i) => (
              <GameCard key={i} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gamer Etiquette Banner ─── */}
      <section className="py-12 bg-kai-deeper border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-black text-kai-text uppercase tracking-wider mb-2">Gamer Etiquette at Kai Gaming</h3>
          <p className="text-kai-muted text-xs sm:text-sm leading-relaxed">
            1. Treat fellow gamers with respect · 2. Handle DualSense controllers with care · 3. Advance slots held for up to 10 minutes past start time.
          </p>
        </div>
      </section>
    </div>
  );
}

function GameCard({ game }: { game: { name: string; img: string; category: string; multiplayer: boolean; badge?: string } }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      className="card-neo overflow-hidden flex flex-col group relative transition-all duration-300 hover:shadow-neo hover:border-kai-red/60"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="aspect-[3/4] relative overflow-hidden bg-black/40">
        <img
          src={game.img}
          alt={game.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 img-shadow"
        />
        {game.badge && (
          <span className="absolute top-2.5 left-2.5 bg-kai-red text-kai-ink text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm border border-kai-ink">
            {game.badge}
          </span>
        )}
        {game.multiplayer && (
          <span className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-md text-kai-teal text-[10px] font-bold px-2 py-0.5 rounded border border-kai-teal/30">
            2P Co-Op
          </span>
        )}
      </div>

      <div className="p-3 bg-kai-surface/90 text-center">
        <h4 className="font-bold text-xs sm:text-sm text-kai-text truncate group-hover:text-kai-red transition-colors">
          {game.name}
        </h4>
        <span className="text-[11px] text-kai-muted font-medium block mt-0.5">{game.category}</span>
      </div>

      {hovered && (
        <div
          className="fixed pointer-events-none bg-kai-red text-kai-ink px-3 py-1.5 font-bold text-xs rounded shadow-neo-sm z-[9999] whitespace-nowrap hidden sm:block border border-kai-ink"
          style={{ left: pos.x + 16, top: pos.y + 16 }}
        >
          {game.name} {game.multiplayer ? '· 2-Player Co-Op' : '· Single Player'}
        </div>
      )}
    </div>
  );
}
