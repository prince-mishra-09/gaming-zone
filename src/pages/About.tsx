import { Gamepad2, Users, Coffee, Wifi } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useState, useRef } from 'react';
import { BUSINESS, GAMES, CAFE_PHOTOS, FEATURES } from '../data/businessData';

const ICON_MAP: Record<string, React.ElementType> = {
  Gamepad2,
  Coffee,
  Users,
  Wifi,
};

export default function About() {
  const [heroRef, heroInView] = useInView(0.1);
  const [photoRef, photoInView] = useInView(0.1);
  const [offerRef, offerInView] = useInView(0.1);
  const [gamesRef, gamesInView] = useInView(0.1);

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="py-20 bg-kai-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl reveal ${heroInView ? 'visible' : ''}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[0.95]">
              WHERE GAMERS<br /><span className="text-kai-red">COME ALIVE</span>
            </h1>
            <p className="text-kai-muted text-lg leading-relaxed">
              {BUSINESS.description}
            </p>
          </div>
        </div>
      </section>

      {/* Café Photo Grid — real cafe interior photos */}
      <section ref={photoRef} className="py-12 bg-kai-deeper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 stagger-children ${photoInView ? 'visible' : ''}`}>
            {CAFE_PHOTOS.map((photo, i) => (
              <div key={i} className="card-neo overflow-hidden aspect-video group cursor-pointer">
                <img
                  src={photo.img}
                  alt={photo.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 img-shadow"
                  onError={(e) => {
                    // Graceful fallback if real photo not loaded
                    const el = e.currentTarget as HTMLImageElement;
                    el.src = `/assets/games/${['wwe-2k25', 'fc25', 'ghost-of-tsushima', 'tekken-8'][i]}.png`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section ref={offerRef} className="py-20 bg-kai-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-black tracking-tight mb-12 text-center reveal ${offerInView ? 'visible' : ''}`}>
            WHAT WE <span className="text-kai-red">OFFER</span>
          </h2>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${offerInView ? 'visible' : ''}`}>
            {FEATURES.map((item, i) => {
              const Icon = ICON_MAP[item.icon] ?? Gamepad2;
              return (
                <div key={i} className="card-neo p-6 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all duration-100 group">
                  <div className="w-12 h-12 bg-kai-red flex items-center justify-center border-3 border-kai-ink shadow-neo-sm mb-4 group-hover:rotate-6 transition-transform duration-200">
                    <Icon size={24} className="text-kai-ink" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-kai-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Games Available */}
      <section ref={gamesRef} className="py-20 bg-kai-deeper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-black tracking-tight mb-12 text-center reveal ${gamesInView ? 'visible' : ''}`}>
            GAMES <span className="text-kai-red">AVAILABLE</span>
          </h2>
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2 stagger-children ${gamesInView ? 'visible' : ''}`}>
            {GAMES.map((game, i) => (
              <GameCard key={i} game={game} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function GameCard({ game }: { game: { name: string; img: string; category: string; multiplayer: boolean } }) {
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
      className="relative cursor-pointer aspect-square border-3 border-kai-ink max-w-[250px] max-h-[250px] mx-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="overflow-hidden w-full h-full">
        <img src={game.img} alt={game.name} className="w-full h-full object-cover img-shadow" />
      </div>
      {hovered && (
        <div
          className="fixed pointer-events-none bg-kai-red text-kai-ink px-4 py-2 font-bold text-sm border-3 border-kai-ink shadow-neo-sm z-[9999] whitespace-nowrap"
          style={{ left: pos.x + 16, top: pos.y + 16 }}
        >
          {game.name}
          {game.multiplayer && <span className="ml-2 text-xs opacity-75">👥 Multiplayer</span>}
        </div>
      )}
    </div>
  );
}
