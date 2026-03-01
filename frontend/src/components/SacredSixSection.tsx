import { useState } from 'react';
import { friends } from '../data/friendsData';
import type { Friend } from '../data/friendsData';
import TributePanel from './TributePanel';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

export default function SacredSixSection() {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollFadeIn();
  const { ref: gridRef, isVisible: gridVisible } = useScrollFadeIn({ threshold: 0.05 });

  return (
    <section
      className="relative py-24 px-6"
      style={{
        background: 'linear-gradient(180deg, #0a0a14 0%, #0d0d1f 50%, #0a0a14 100%)',
        zIndex: 2,
      }}
    >
      {/* Section header */}
      <div
        ref={titleRef}
        className={`text-center mb-16 fade-in-section ${titleVisible ? 'is-visible' : ''}`}
      >
        <p
          className="font-body italic mb-3"
          style={{ color: 'rgba(212,175,55,0.5)', letterSpacing: '0.3em', fontSize: '0.8rem' }}
        >
          SECTION I
        </p>
        <h2
          className="font-serif font-black tracking-widest gold-glow"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '0.2em' }}
        >
          THE SACRED SIX
        </h2>
        <div
          className="mx-auto mt-6"
          style={{
            width: '200px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            boxShadow: '0 0 8px rgba(212,175,55,0.4)',
          }}
        />
      </div>

      {/* Portrait grid */}
      <div
        ref={gridRef}
        className={`grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto fade-in-section ${gridVisible ? 'is-visible' : ''}`}
      >
        {friends.map((friend, index) => (
          <FriendCard
            key={friend.id}
            friend={friend}
            index={index}
            onClick={() => setSelectedFriend(friend)}
          />
        ))}
      </div>

      {/* Tribute panel overlay */}
      {selectedFriend && (
        <TributePanel
          friend={selectedFriend}
          onClose={() => setSelectedFriend(null)}
        />
      )}
    </section>
  );
}

interface FriendCardProps {
  friend: Friend;
  index: number;
  onClick: () => void;
}

function FriendCard({ friend, index, onClick }: FriendCardProps) {
  return (
    <button
      onClick={onClick}
      className="relative overflow-hidden group cursor-pointer card-shimmer text-left w-full"
      style={{
        border: '1px solid rgba(212,175,55,0.3)',
        background: 'rgba(10,10,20,0.8)',
        transition: 'all 0.4s ease',
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = 'rgba(212,175,55,0.7)';
        el.style.boxShadow = '0 0 20px rgba(212,175,55,0.2), 0 0 40px rgba(212,175,55,0.1)';
        el.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = 'rgba(212,175,55,0.3)';
        el.style.boxShadow = 'none';
        el.style.transform = 'translateY(0)';
      }}
      aria-label={`View tribute for ${friend.name}`}
    >
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
        <img
          src={`/assets/generated/${friend.photoFilename}`}
          alt={`${friend.name} portrait`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'sepia(15%) contrast(1.05) brightness(0.9)' }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 40%, rgba(6,6,16,0.9) 100%)',
          }}
        />
        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          className="font-serif font-black tracking-widest gold-glow-subtle"
          style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)', letterSpacing: '0.2em' }}
        >
          {friend.name}
        </p>
        <p
          className="font-body italic"
          style={{ color: 'rgba(212,175,55,0.6)', fontSize: '0.7rem', letterSpacing: '0.1em' }}
        >
          {friend.title}
        </p>
        <p
          className="font-body"
          style={{ color: 'rgba(212,175,55,0.45)', fontSize: '0.65rem', marginTop: '2px' }}
        >
          {friend.epithet}
        </p>
      </div>

      {/* Corner ornaments */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l" style={{ borderColor: 'rgba(212,175,55,0.5)' }} />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r" style={{ borderColor: 'rgba(212,175,55,0.5)' }} />
    </button>
  );
}
