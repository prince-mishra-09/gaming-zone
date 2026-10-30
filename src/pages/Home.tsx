import { Link } from 'react-router-dom';
import { Gamepad2, Clock, Star, ArrowRight, Sparkles, ShieldCheck, Flame, MessageCircle, HelpCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useTilt } from '../hooks/useTilt';
import { useCounter } from '../hooks/useCounter';
import CircularGallery from '../components/ui/CircularGallery';
import { BUSINESS, STATIONS, STATS, GAMES, CAFE_PHOTOS, REVIEWS, FAQS } from '../data/businessData';

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [ref, inView] = useInView(0.3);
  const count = useCounter(target, 1500, inView);
  return (
    <div ref={ref} className="p-3">
      <div className="text-3xl sm:text-4xl font-black text-kai-red mb-1">{count}{suffix}</div>
      <div className="text-kai-muted text-xs sm:text-sm font-bold uppercase tracking-wider">{label}</div>
    </div>
  );
}

function StationCard({ station }: { station: typeof STATIONS[number] }) {
  const tilt = useTilt(6);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="card-neo overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-neo-lg hover:border-kai-red/40"
      style={{ transition: 'transform 0.15s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out' }}
    >
      {/* Station Image with Badge */}
      <div className="aspect-video relative overflow-hidden bg-black/40">
        <img
          src={station.img}
          alt={station.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 img-shadow"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = station.gameImg;
          }}
        />
        <div className="absolute top-3 left-3 bg-kai-red text-kai-ink text-xs font-black px-3 py-1 uppercase tracking-wider rounded-md shadow-neo-sm border border-kai-ink">
          {station.shortName}
        </div>
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-green-400 border border-green-500/40 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Ready to Play
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs font-bold text-kai-teal uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Sparkles size={13} /> {station.specs}
          </div>
          <h3 className="text-xl font-black mb-2 text-kai-text group-hover:text-kai-red transition-colors">
            {station.name}
          </h3>
          <p className="text-kai-muted text-xs sm:text-sm leading-relaxed mb-4">
            {station.description}
          </p>

          {/* Mini Featured Game Banner using original game posters */}
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-black/30 border border-white/5 mb-4">
            <img
              src={station.gameImg}
              alt="Featured game"
              className="w-12 h-12 rounded-lg object-cover border border-white/10 shrink-0"
            />
            <div className="min-w-0 flex-1">
              <span className="text-[10px] uppercase font-bold text-kai-red tracking-wider block">Featured Titles</span>
              <span className="text-xs font-bold text-kai-text truncate block">{station.popularTitles}</span>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs text-kai-muted font-medium">DualSense Wireless Ready</span>
          <Link
            to="/booking"
            className="text-xs font-bold text-kai-red hover:text-white flex items-center gap-1 transition-colors"
          >
            Book Slot <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function GamePosterCard({ game }: { game: typeof GAMES[number] }) {
  const tilt = useTilt(4);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="card-neo overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-neo hover:border-kai-red/60"
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
      <div className="p-3 sm:p-4 text-center bg-kai-surface/90">
        <h4 className="font-bold text-sm text-kai-text truncate group-hover:text-kai-red transition-colors">
          {game.name}
        </h4>
        <span className="text-[11px] text-kai-muted font-medium block mt-0.5">{game.category}</span>
      </div>
    </div>
  );
}

function CafePhotoCard({ photo }: { photo: typeof CAFE_PHOTOS[number] }) {
  const tilt = useTilt(5);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="card-neo overflow-hidden group aspect-video relative"
      style={{ transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out' }}
    >
      <img
        src={photo.img}
        alt={photo.label}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 img-shadow"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
        <h4 className="text-white font-bold text-sm sm:text-base">{photo.label}</h4>
        <p className="text-kai-muted text-xs line-clamp-1">{photo.subtitle}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [heroRef, heroInView] = useInView(0.1);
  const [stationsRef, stationsInView] = useInView(0.1);
  const [trendingRef, trendingInView] = useInView(0.1);
  const [galleryRef, galleryInView] = useInView(0.1);
  const [pricingRef, pricingInView] = useInView(0.1);
  const [reviewsRef, reviewsInView] = useInView(0.1);
  const [faqRef, faqInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.1);

  // Pick top 8 featured games to showcase on homepage
  const featuredGames = GAMES.slice(0, 8);

  return (
    <div className="overflow-x-hidden">
      {/* ─── Hero Section (Preserved & Enhanced) ─── */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center justify-center bg-kai-dark overflow-hidden hero-grid">
        {/* Background image overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <img src="/assets/games/spider-man-2.png" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-kai-dark via-kai-dark/95 to-kai-dark/70" />
        </div>

        {/* Circular 3D WebGL Gallery behind text */}
        <div className="absolute inset-0 gallery-scale" style={{ zIndex: 1 }}>
          <CircularGallery
            items={GAMES.map((g) => ({ image: g.img, text: g.name }))}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
            font="bold 30px Orbitron"
          />
        </div>

        {/* Text content — centered, highly responsive */}
        <div
          className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pb-24 text-center"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,1), 0 4px 32px rgba(0,0,0,0.95)' }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kai-surface/90 border border-white/10 mb-6 shadow-neo-sm">
            <span className="w-2 h-2 rounded-full bg-kai-red animate-ping" />
            <span className="text-xs sm:text-sm font-bold text-kai-text uppercase tracking-wider">
              Noida's Premier Gaming & Entertainment Center
            </span>
          </div>

          <h1
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 transition-all duration-700 delay-100 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ fontFamily: "'Google Sans', sans-serif" }}
          >
            PLAY HAS <br />
            <span className="text-kai-red drop-shadow-[0_0_35px_rgba(212,36,36,0.5)]">NO LIMITS</span>
          </h1>

          <p
            className={`text-kai-text text-sm sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Console gaming lounges, 16+ top titles, bowling, arcade, and high-energy entertainment.
            Limitless cards starting at only <span className="text-kai-red font-bold">₹799</span>.
          </p>

          <div
            className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-300 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Link
              to="/booking"
              className="btn-neo bg-kai-red text-kai-ink flex items-center justify-center gap-2 text-sm sm:text-base font-bold px-7 py-3.5"
            >
              <Gamepad2 size={20} /> Book a Station <ArrowRight size={16} />
            </Link>
            <Link
              to="/pricing"
              className="btn-neo bg-kai-surface text-kai-text text-sm sm:text-base font-bold px-6 py-3.5 border border-white/10 hover:border-kai-red/50"
            >
              View Pricing Tiers
            </Link>
          </div>
        </div>

        {/* Seamless blur transition into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-kai-deeper pointer-events-none"
          style={{ zIndex: 11, backdropFilter: 'blur(2px)' }}
        />
      </section>

      {/* ─── Highlights / Amenities Strip ─── */}
      <section className="py-6 bg-kai-deeper border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-kai-muted text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Gamepad2 size={16} className="text-kai-red shrink-0" />
              <span>DualSense Wireless</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-kai-muted text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Star size={16} className="text-kai-red shrink-0" />
              <span>55″ 4K HDR Displays</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-kai-muted text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Clock size={16} className="text-kai-red shrink-0" />
              <span>Open {BUSINESS.hours}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-kai-muted text-xs sm:text-sm font-bold uppercase tracking-wider">
              <ShieldCheck size={16} className="text-kai-red shrink-0" />
              <span>E Square, Sector 96, Noida</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Stations Section (Photos + Details + Game Posters) ─── */}
      <section ref={stationsRef} className="py-20 bg-kai-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 reveal ${stationsInView ? 'visible' : ''}`}>
            <span className="text-xs font-black uppercase tracking-widest text-kai-red block mb-2">Battlestations</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              OUR <span className="text-kai-red">PS5 SETUPS</span>
            </h2>
            <p className="text-kai-muted max-w-2xl mx-auto text-sm sm:text-base">
              Each setup is equipped with a 55-inch ultra-low latency screen, immersive audio, and 2 sanitized DualSense controllers for multiplayer battles.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 stagger-children ${stationsInView ? 'visible' : ''}`}>
            {STATIONS.map((station) => (
              <StationCard key={station.id} station={station} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trending Games Library Showcase ─── */}
      <section ref={trendingRef} className="py-20 bg-kai-deeper border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 reveal ${trendingInView ? 'visible' : ''}`}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-kai-teal flex items-center gap-1.5 mb-2">
                <Flame size={14} /> Most Played Right Now
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                TRENDING <span className="text-kai-red">GAMES</span>
              </h2>
            </div>
            <Link
              to="/about"
              className="text-sm font-bold text-kai-muted hover:text-kai-text flex items-center gap-1.5 transition-colors"
            >
              Explore All 16+ Games <ArrowRight size={15} />
            </Link>
          </div>

          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 stagger-children ${trendingInView ? 'visible' : ''}`}>
            {featuredGames.map((game, i) => (
              <GamePosterCard key={i} game={game} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/booking"
              className="btn-neo bg-kai-surface text-kai-text inline-flex items-center gap-2 border border-white/10 hover:border-kai-red/50 text-sm font-bold"
            >
              <Gamepad2 size={16} className="text-kai-red" />
              Pick Your Game & Reserve a Slot
            </Link>
          </div>
        </div>
      </section>

      {/* ─── The Space & Cafe Interior Photos ─── */}
      <section ref={galleryRef} className="py-20 bg-kai-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 reveal ${galleryInView ? 'visible' : ''}`}>
            <span className="text-xs font-black uppercase tracking-widest text-kai-red block mb-2">Cafe Experience</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              THE <span className="text-kai-red">LOUNGE</span>
            </h2>
            <p className="text-kai-muted max-w-xl mx-auto text-sm sm:text-base">
              Custom cloud ceiling, ambient LED neon lighting, chilled air conditioning, and a snack bar built for champions.
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger-children ${galleryInView ? 'visible' : ''}`}>
            {CAFE_PHOTOS.map((photo, i) => (
              <CafePhotoCard key={i} photo={photo} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing Teaser & Packages ─── */}
      <section ref={pricingRef} className="py-20 bg-kai-deeper border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`card-neo p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden reveal ${pricingInView ? 'visible' : ''}`}>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-kai-red/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-kai-teal/10 rounded-full blur-3xl pointer-events-none" />

            <span className="inline-block bg-kai-red text-kai-ink text-xs font-black uppercase tracking-widest px-3 py-1 rounded-md mb-4 border border-kai-ink">
              Limitless Gaming Cards
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              STARTING AT <span className="text-kai-red">₹799</span>
            </h2>
            <p className="text-kai-muted text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Play arcade, console gaming, sports simulation, and enjoy delicious diner snacks across Noida's biggest entertainment center.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-8 text-left">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[11px] text-kai-muted font-bold block">Unlimited Card</span>
                <span className="text-lg font-black text-kai-red">₹799<span className="text-xs font-normal text-kai-muted"> (3 hrs)</span></span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[11px] text-kai-muted font-bold block">Play More</span>
                <span className="text-lg font-black text-kai-text">₹999<span className="text-xs font-normal text-kai-muted"> (4 hrs)</span></span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[11px] text-kai-muted font-bold block">Play Max</span>
                <span className="text-lg font-black text-kai-text">₹1,299<span className="text-xs font-normal text-kai-muted"> (Full Day)</span></span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[11px] text-kai-muted font-bold block">Supercharge VIP</span>
                <span className="text-lg font-black text-kai-text">₹1,699<span className="text-xs font-normal text-kai-muted"> (All-Day)</span></span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/pricing" className="btn-neo bg-kai-surface text-kai-text flex items-center gap-2 font-bold text-sm">
                <Clock size={16} /> See Full Pricing & Deals
              </Link>
              <Link to="/booking" className="btn-neo bg-kai-red text-kai-ink flex items-center gap-2 font-bold text-sm">
                <Star size={16} /> Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gamer Reviews / Social Proof ─── */}
      <section ref={reviewsRef} className="py-20 bg-kai-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 reveal ${reviewsInView ? 'visible' : ''}`}>
            <span className="text-xs font-black uppercase tracking-widest text-kai-red block mb-2">Player Feedback</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              LOVED BY <span className="text-kai-red">NOIDA GAMERS</span>
            </h2>
            <div className="inline-flex items-center gap-1 text-kai-red text-sm font-bold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#D42424" />
              ))}
              <span className="text-kai-text ml-2 font-bold">{BUSINESS.rating} / 5.0 Rating</span>
              <span className="text-kai-muted">({BUSINESS.reviewCount} local reviews)</span>
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children ${reviewsInView ? 'visible' : ''}`}>
            {REVIEWS.map((review, i) => (
              <div key={i} className="card-neo p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-kai-red mb-3">
                    {[...Array(review.stars)].map((_, s) => (
                      <Star key={s} size={14} fill="#D42424" />
                    ))}
                  </div>
                  <p className="text-kai-text text-sm sm:text-base italic leading-relaxed mb-6">
                    "{review.comment}"
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-kai-red text-kai-ink font-black flex items-center justify-center text-sm">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-kai-text">{review.name}</h4>
                      <span className="text-[11px] text-kai-muted block">{review.role}</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-kai-teal font-medium bg-kai-teal/10 px-2.5 py-1 rounded-full border border-kai-teal/20">
                    {review.game}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ─── */}
      <section ref={faqRef} className="py-20 bg-kai-deeper border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 reveal ${faqInView ? 'visible' : ''}`}>
            <span className="text-xs font-black uppercase tracking-widest text-kai-red block mb-2 flex items-center justify-center gap-1.5">
              <HelpCircle size={14} /> Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              FREQUENTLY ASKED <span className="text-kai-red">QUESTIONS</span>
            </h2>
          </div>

          <div className={`space-y-4 stagger-children ${faqInView ? 'visible' : ''}`}>
            {FAQS.map((faq, i) => (
              <div key={i} className="card-neo p-5 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-2 text-kai-text flex items-start gap-2">
                  <span className="text-kai-red font-black">Q.</span> {faq.q}
                </h3>
                <p className="text-kai-muted text-sm leading-relaxed pl-5 sm:pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Animated Stats Counters ─── */}
      <section ref={statsRef} className="py-16 bg-kai-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 text-center stagger-children ${statsInView ? 'visible' : ''}`}>
            {STATS.map((stat, i) => (
              <StatCounter key={i} target={stat.target} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA Banner ─── */}
      <section className="py-16 bg-gradient-to-r from-kai-red/20 via-kai-surface to-kai-dark border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            READY TO LEVEL UP YOUR GAMING?
          </h2>
          <p className="text-kai-muted max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Book online or send a WhatsApp message to lock in your preferred station and time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking" className="btn-neo bg-kai-red text-kai-ink font-bold flex items-center gap-2">
              <Gamepad2 size={18} /> Book a Station Now
            </Link>
            <a
              href={BUSINESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neo bg-kai-surface text-kai-text font-bold flex items-center gap-2 border border-white/10"
            >
              <MessageCircle size={18} className="text-green-400" /> WhatsApp Quick Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
