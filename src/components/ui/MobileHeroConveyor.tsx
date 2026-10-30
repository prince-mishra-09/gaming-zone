import React from 'react';

interface GameItem {
  name: string;
  img: string;
  category: string;
  multiplayer: boolean;
  badge?: string;
}

interface MobileHeroConveyorProps {
  games: readonly GameItem[] | GameItem[];
}

function ConveyorCard({ game }: { game: GameItem }) {
  return (
    <div className="relative shrink-0 w-24 sm:w-28 aspect-[3/4] rounded-xl overflow-hidden border border-white/20 bg-black/30 shadow-neo-sm">
      <img
        src={game.img}
        alt={game.name}
        className="w-full h-full object-cover brightness-105 contrast-105"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-1.5">
        <span className="text-[10px] font-black text-white truncate drop-shadow">
          {game.name}
        </span>
      </div>
    </div>
  );
}

export default function MobileHeroConveyor({ games }: MobileHeroConveyorProps) {
  // Split the 16 games into 4 distinct rows
  const row1 = games.slice(0, 4);
  const row2 = games.slice(4, 8);
  const row3 = games.slice(8, 12);
  const row4 = games.slice(12, 16);

  // Repeat items 4 times so the marquee is plenty long for infinite seamless looping
  const buildRow = (items: readonly GameItem[]) => [...items, ...items, ...items, ...items];

  const rows = [
    { items: buildRow(row1), direction: 'animate-marquee-left', speed: '22s' },
    { items: buildRow(row2), direction: 'animate-marquee-right', speed: '28s' },
    { items: buildRow(row3), direction: 'animate-marquee-left', speed: '20s' },
    { items: buildRow(row4), direction: 'animate-marquee-right', speed: '26s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* 4 Conveyor Belt Rows — Increased visibility & punch */}
      <div className="h-full w-full flex flex-col justify-between py-6 opacity-75">
        {rows.map((row, idx) => (
          <div key={idx} className="overflow-hidden w-full py-1">
            <div
              className={`${row.direction} flex gap-3`}
              style={{ '--marquee-speed': row.speed } as React.CSSProperties}
            >
              {row.items.map((game, i) => (
                <ConveyorCard key={`${idx}-${i}-${game.name}`} game={game} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Balanced dark vignette & readability overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(42, 43, 48, 0.25) 0%, rgba(42, 43, 48, 0.85) 90%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-kai-dark via-kai-dark/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-kai-dark via-kai-dark/85 to-transparent" />
      <div className="absolute inset-0 bg-kai-dark/15 backdrop-blur-[0.5px]" />
    </div>
  );
}
