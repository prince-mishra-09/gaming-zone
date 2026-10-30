import { Link } from 'react-router-dom';
import { Clock, Zap, Gamepad2, Globe, ArrowRight, Check, Users, Sparkles, MessageCircle } from 'lucide-react';
import { PRICING, OFFERS, BUSINESS } from '../data/businessData';
import { useInView } from '../hooks/useInView';
import { useTilt } from '../hooks/useTilt';

const TIER_ICONS = {
  superHours: Zap,
  quickPlay: Gamepad2,
  storyMode: Clock,
  openWorld: Globe,
};

function PriceCard({ tierKey, tier }: {
  tierKey: keyof typeof PRICING;
  tier: typeof PRICING[keyof typeof PRICING];
}) {
  const tilt = useTilt(6);
  const Icon = TIER_ICONS[tierKey];
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`card-neo p-6 sm:p-7 flex flex-col ${
        tier.highlight ? 'border-kai-red bg-kai-red/10 shadow-glow' : 'hover:border-white/20'
      } transition-all duration-300 hover:shadow-neo-lg ${tier.highlight ? 'game-card-float' : ''}`}
      style={{ transition: 'transform 0.15s ease-out, box-shadow 0.2s ease-out' }}
    >
      {tier.highlight && (
        <div className="bg-kai-red text-kai-ink text-xs font-black uppercase tracking-widest px-3 py-1 mb-4 inline-block rounded-md shadow-neo-sm self-start">
          {tier.badge}
        </div>
      )}
      <div className="w-12 h-12 bg-kai-surface flex items-center justify-center rounded-xl border border-white/10 mb-4 shadow-sm">
        <Icon size={22} className="text-kai-red" />
      </div>
      <h3 className="text-xl font-black mb-1 text-kai-text">{tier.name}</h3>
      <p className="text-kai-muted text-xs font-bold uppercase tracking-wider mb-4">{tier.time}</p>

      <div className="mb-4 pb-4 border-b border-white/5">
        <span className="text-4xl sm:text-5xl font-black text-kai-red">{tier.price}</span>
        <span className="text-kai-muted text-xs font-medium ml-1.5">{tier.unit}</span>
      </div>

      <p className="text-kai-muted text-xs sm:text-sm leading-relaxed mb-6">{tier.description}</p>

      <div className="space-y-2 mb-6 text-xs text-kai-text">
        <div className="flex items-center gap-2">
          <Check size={14} className="text-kai-red shrink-0" />
          <span>55″ 4K HDR Ultra-Low Latency Display</span>
        </div>
        <div className="flex items-center gap-2">
          <Check size={14} className="text-kai-red shrink-0" />
          <span>2x PS5 DualSense Controllers (2P Ready)</span>
        </div>
        <div className="flex items-center gap-2">
          <Check size={14} className="text-kai-red shrink-0" />
          <span>Air Conditioned Ambient Lounge</span>
        </div>
      </div>

      <div className="border-t border-white/5 pt-4 mt-auto">
        <p className="text-[11px] font-black uppercase tracking-wider text-kai-red mb-1.5">Included Titles:</p>
        <p className="text-kai-muted text-xs leading-relaxed">{tier.games}</p>
      </div>

      <Link
        to="/booking"
        className={`mt-6 btn-neo text-center text-xs font-bold py-3 block ${
          tier.highlight ? 'bg-kai-red text-kai-ink' : 'bg-kai-surface text-kai-text border border-white/10 hover:border-kai-red/50'
        }`}
      >
        Book This Tier
      </Link>
    </div>
  );
}

export default function Pricing() {
  const [heroRef, heroInView] = useInView(0.1);
  const [cardsRef, cardsInView] = useInView(0.1);
  const [offersRef, offersInView] = useInView(0.1);
  const [partyRef, partyInView] = useInView(0.1);
  const [ctaRef, ctaInView] = useInView(0.1);

  const tiers = Object.entries(PRICING) as [keyof typeof PRICING, typeof PRICING[keyof typeof PRICING]][];

  return (
    <div className="overflow-x-hidden">
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="py-20 sm:py-24 bg-kai-dark hero-grid border-b border-white/5">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal ${heroInView ? 'visible' : ''}`}>
          <span className="text-xs font-black uppercase tracking-widest text-kai-red block mb-3">Transparent Rates</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[0.98]">
            SIMPLE <span className="text-kai-red">PRICING</span>
          </h1>
          <p className="text-kai-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            No hidden taxes or extra controller fees. Pick your tier, choose your game, and start playing.
          </p>
        </div>
      </section>

      {/* ─── Pricing Cards (All 4 Tiers) ─── */}
      <section ref={cardsRef} className="py-16 sm:py-20 bg-kai-deeper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${cardsInView ? 'visible' : ''}`}>
            {tiers.map(([key, tier]) => (
              <PriceCard key={key} tierKey={key} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Special Promotional Offers ─── */}
      <section ref={offersRef} className="py-20 bg-kai-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 reveal ${offersInView ? 'visible' : ''}`}>
            <span className="text-xs font-black uppercase tracking-widest text-kai-teal flex items-center justify-center gap-1.5 mb-2">
              <Sparkles size={14} /> Value Deals
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              SPECIAL <span className="text-kai-red">OFFERS</span>
            </h2>
            <p className="text-kai-muted text-sm max-w-md mx-auto mt-2">
              Play longer and save more with our afternoon and evening bundle deals.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto stagger-children ${offersInView ? 'visible' : ''}`}>
            {OFFERS.map((offer, i) => (
              <div key={i} className="card-neo p-6 sm:p-7 border-kai-red/40 relative overflow-hidden group cursor-pointer">
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <div className="text-3xl mb-3">{offer.icon}</div>
                  <h3 className="text-xl font-black mb-2 text-kai-text">{offer.title}</h3>
                  <p className="text-kai-red font-black text-2xl mb-2">{offer.desc}</p>
                  <p className="text-kai-muted text-xs sm:text-sm font-medium">{offer.valid}</p>
                  <span className="text-[11px] text-kai-teal mt-4 inline-block font-bold">
                    Hover to view terms →
                  </span>
                </div>
                {/* Terms overlay on hover */}
                <div className="absolute inset-0 p-6 sm:p-7 bg-kai-deeper/95 backdrop-blur-md border-2 border-kai-red flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-black mb-2 text-kai-red">Terms & Conditions</h3>
                  <p className="text-kai-text text-xs sm:text-sm leading-relaxed mb-4">{offer.terms}</p>
                  <Link
                    to="/booking"
                    className="btn-neo bg-kai-red text-kai-ink text-center text-xs font-bold py-2.5 inline-block self-start"
                  >
                    Claim This Offer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Group & Party Gaming Packages ─── */}
      <section ref={partyRef} className="py-16 bg-kai-deeper border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`card-neo p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 reveal ${partyInView ? 'visible' : ''}`}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-kai-red flex items-center gap-1.5 mb-2">
                <Users size={14} /> Group Gaming
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mb-3">
                LAN TOURNAMENTS & BIRTHDAY PARTIES
              </h3>
              <p className="text-kai-muted text-sm leading-relaxed max-w-xl">
                Planning a group outing or corporate event? Book custom gaming sessions, tournament brackets, birthday gaming parties, and bowling with delicious food!
              </p>
            </div>
            <a
              href={`${BUSINESS.whatsappUrl}?text=${encodeURIComponent('Hi! I am interested in a Group / Party booking at Glued Supercharged.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neo bg-kai-red text-kai-ink font-bold text-sm px-6 py-3.5 shrink-0 flex items-center gap-2"
            >
              <MessageCircle size={18} /> Inquire Group Rates
            </a>
          </div>
        </div>
      </section>

      {/* ─── Hours & Location Note ─── */}
      <section className="py-8 bg-kai-dark text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-kai-muted text-xs sm:text-sm">
            <span className="text-kai-red font-bold">Open Every Day</span> · {BUSINESS.hoursLabel} · {BUSINESS.address}
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section ref={ctaRef} className="py-16 bg-kai-deeper border-t border-white/5">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal ${ctaInView ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            READY TO <span className="text-kai-red">PLAY</span>?
          </h2>
          <p className="text-kai-muted mb-8 text-sm sm:text-base">Book your station online in 60 seconds.</p>
          <Link to="/booking" className="btn-neo bg-kai-red text-kai-ink inline-flex items-center gap-2 font-bold">
            Book a Station Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
