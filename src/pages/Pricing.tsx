import { Link } from 'react-router-dom';
import { Clock, Zap, Gamepad2, Globe, ArrowRight } from 'lucide-react';
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
      className={`card-neo p-6 flex flex-col ${
        tier.highlight ? 'border-kai-red bg-kai-red/10' : ''
      } transition-shadow duration-200 hover:shadow-neo-sm ${tier.highlight ? 'game-card-float' : ''}`}
      style={{ transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out' }}
    >
      {tier.highlight && (
        <div className="bg-kai-red text-kai-ink text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 inline-block border-3 border-kai-ink shadow-neo-sm -rotate-2">
          {tier.badge}
        </div>
      )}
      <div className="w-10 h-10 bg-kai-surface flex items-center justify-center border-3 border-kai-ink mb-4">
        <Icon size={20} className="text-kai-red" />
      </div>
      <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
      <p className="text-kai-muted text-xs mb-4">{tier.time}</p>
      <div className="mb-4">
        <span className="text-4xl font-black text-kai-red">{tier.price}</span>
        <span className="text-kai-muted text-sm ml-1">{tier.unit}</span>
      </div>
      <p className="text-kai-muted text-sm leading-relaxed mb-4 flex-1">{tier.description}</p>
      <div className="border-t-3 border-kai-ink pt-4 mt-auto">
        <p className="text-xs font-bold uppercase tracking-wide text-kai-red mb-2">Games:</p>
        <p className="text-kai-muted text-xs leading-relaxed">{tier.games}</p>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [heroRef, heroInView] = useInView(0.1);
  const [cardsRef, cardsInView] = useInView(0.1);
  const [offersRef, offersInView] = useInView(0.1);
  const [ctaRef, ctaInView] = useInView(0.1);

  const tiers = Object.entries(PRICING) as [keyof typeof PRICING, typeof PRICING[keyof typeof PRICING]][];

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="py-20 bg-kai-dark">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal ${heroInView ? 'visible' : ''}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[0.95]">
            SIMPLE <span className="text-kai-red">PRICING</span>
          </h1>
          <p className="text-kai-muted text-lg max-w-xl mx-auto">
            No hidden fees. Pick your tier, pick your game, and start playing.
          </p>
        </div>
      </section>

      {/* Pricing Cards — 4 tiers */}
      <section ref={cardsRef} className="py-12 bg-kai-deeper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${cardsInView ? 'visible' : ''}`}>
            {tiers.map(([key, tier]) => (
              <PriceCard key={key} tierKey={key} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Offers — Flip Cards */}
      <section ref={offersRef} className="py-16 bg-kai-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl font-black tracking-tight mb-8 text-center reveal ${offersInView ? 'visible' : ''}`}>
            SPECIAL <span className="text-kai-red">OFFERS</span>
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto stagger-children ${offersInView ? 'visible' : ''}`}>
            {OFFERS.map((offer, i) => (
              <div key={i} className="card-neo p-6 border-kai-red relative overflow-hidden group cursor-pointer min-h-[12rem]">
                {/* Front content */}
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <div className="text-2xl mb-3">{offer.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{offer.title}</h3>
                  <p className="text-kai-text font-bold text-xl mb-2">{offer.desc}</p>
                  <p className="text-kai-muted text-sm">{offer.valid}</p>
                </div>
                {/* Terms overlay */}
                <div className="absolute inset-0 p-6 bg-kai-deeper border-3 border-kai-red flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold mb-3 text-kai-red">Terms & Conditions</h3>
                  <p className="text-kai-muted text-sm leading-relaxed">{offer.terms}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours note */}
      <section className="py-8 bg-kai-deeper border-t-3 border-kai-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-kai-muted text-sm">
            <span className="text-kai-red font-bold">Open Daily</span> — {BUSINESS.hoursLabel} · {BUSINESS.addressShort}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-16 bg-kai-dark border-t-3 border-kai-ink">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal ${ctaInView ? 'visible' : ''}`}>
          <h2 className="text-3xl font-black tracking-tight mb-4">
            READY TO <span className="text-kai-red">PLAY</span>?
          </h2>
          <p className="text-kai-muted mb-8">Book your station now and jump into the action.</p>
          <Link to="/booking" className="btn-neo bg-kai-red text-kai-ink inline-flex items-center gap-2">
            Book a Station <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
