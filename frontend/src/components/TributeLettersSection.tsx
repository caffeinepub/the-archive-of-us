import { useRef, useEffect, useState } from 'react';
import { friends } from '../data/friendsData';
import TributeAnimation from './TributeAnimations';

function useLetterVisible(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return { ref, isVisible };
}

interface LetterCardProps {
  friend: (typeof friends)[0];
  index: number;
}

function LetterCard({ friend, index }: LetterCardProps) {
  const { ref, isVisible } = useLetterVisible(index * 80);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative w-full max-w-2xl mx-auto"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateY(0) translateX(0)'
          : `translateY(60px) translateX(${isEven ? '-30px' : '30px'})`,
        transition: 'opacity 1.1s cubic-bezier(0.22,1,0.36,1), transform 1.1s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* Letter card */}
      <div
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, rgba(15,12,8,0.97) 0%, rgba(10,8,5,0.99) 100%)',
          border: '1px solid rgba(212,175,55,0.18)',
          boxShadow: '0 0 60px rgba(212,175,55,0.06), inset 0 0 40px rgba(0,0,0,0.4)',
          padding: 'clamp(2rem, 5vw, 3.5rem)',
        }}
      >
        {/* Ambient animation background */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }}>
          <TributeAnimation type={friend.animationType} />
        </div>

        {/* Top ornament line */}
        <div
          className="mb-8"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)',
            boxShadow: '0 0 6px rgba(212,175,55,0.3)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.4s',
          }}
        />

        {/* Emoji + Name header */}
        <div className="relative text-center mb-6">
          <div
            className="text-4xl mb-4"
            style={{
              filter: 'drop-shadow(0 0 12px rgba(212,175,55,0.5))',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.7)',
              transition: 'opacity 0.7s ease 0.3s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.3s',
            }}
          >
            {friend.emoji}
          </div>

          <h2
            className="font-serif font-black tracking-widest mb-2"
            style={{
              fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
              color: '#D4AF37',
              textShadow: '0 0 20px rgba(212,175,55,0.6), 0 0 40px rgba(212,175,55,0.3)',
              letterSpacing: '0.3em',
            }}
          >
            {friend.name}
          </h2>

          <p
            className="font-serif italic tracking-widest mb-1"
            style={{
              fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
              color: 'rgba(212,175,55,0.9)',
              letterSpacing: '0.2em',
            }}
          >
            {friend.title}
          </p>

          <p
            className="font-body italic"
            style={{
              fontSize: 'clamp(0.8rem, 2vw, 1rem)',
              color: 'rgba(212,175,55,0.55)',
              letterSpacing: '0.08em',
            }}
          >
            {friend.epithet}
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center gap-4 mb-8">
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3))' }} />
          <svg width="20" height="20" viewBox="0 0 20 20" style={{ opacity: 0.6 }}>
            <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
          </svg>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(212,175,55,0.3), transparent)' }} />
        </div>

        {/* Letter body */}
        <div className="relative space-y-4">
          {friend.message.map((line, lineIdx) => {
            if (line === '') {
              return <div key={lineIdx} style={{ height: '0.5rem' }} />;
            }
            return (
              <p
                key={lineIdx}
                className="font-body"
                style={{
                  fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
                  color: 'rgba(240,220,160,0.88)',
                  lineHeight: 1.9,
                  letterSpacing: '0.03em',
                  fontStyle: 'italic',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: `opacity 0.8s ease ${0.5 + lineIdx * 0.12}s, transform 0.8s ease ${0.5 + lineIdx * 0.12}s`,
                }}
              >
                {line}
              </p>
            );
          })}
        </div>

        {/* Bottom ornament */}
        <div
          className="mt-10"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)',
            boxShadow: '0 0 6px rgba(212,175,55,0.3)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.6s',
          }}
        />

        {/* Corner flourishes */}
        <div className="absolute top-3 left-3 pointer-events-none" style={{ opacity: 0.4 }}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M 2 12 L 2 2 L 12 2" fill="none" stroke="#D4AF37" strokeWidth="1" />
          </svg>
        </div>
        <div className="absolute top-3 right-3 pointer-events-none" style={{ opacity: 0.4 }}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M 22 12 L 22 2 L 12 2" fill="none" stroke="#D4AF37" strokeWidth="1" />
          </svg>
        </div>
        <div className="absolute bottom-3 left-3 pointer-events-none" style={{ opacity: 0.4 }}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M 2 12 L 2 22 L 12 22" fill="none" stroke="#D4AF37" strokeWidth="1" />
          </svg>
        </div>
        <div className="absolute bottom-3 right-3 pointer-events-none" style={{ opacity: 0.4 }}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M 22 12 L 22 22 L 12 22" fill="none" stroke="#D4AF37" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function TributeLettersSection() {
  const { ref: headerRef, isVisible: headerVisible } = useLetterVisible(0);

  return (
    <section
      className="relative py-24 px-4 md:px-8"
      style={{
        background: 'linear-gradient(180deg, rgba(6,6,16,0) 0%, rgba(4,4,10,0.95) 10%, rgba(4,4,10,0.95) 90%, rgba(6,6,16,0) 100%)',
        zIndex: 2,
      }}
    >
      {/* Section header */}
      <div
        ref={headerRef}
        className="text-center mb-20"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 1.2s ease, transform 1.2s ease',
        }}
      >
        <p
          className="font-body italic mb-4"
          style={{
            color: 'rgba(212,175,55,0.5)',
            letterSpacing: '0.3em',
            fontSize: '0.75rem',
          }}
        >
          — LETTERS FROM THE ARCHIVE —
        </p>
        <h2
          className="font-serif font-black tracking-widest mb-4"
          style={{
            fontSize: 'clamp(1.6rem, 5vw, 3rem)',
            color: '#D4AF37',
            textShadow: '0 0 30px rgba(212,175,55,0.4)',
            letterSpacing: '0.25em',
          }}
        >
          THE SACRED SEVEN
        </h2>
        <p
          className="font-body italic"
          style={{
            color: 'rgba(212,175,55,0.55)',
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            letterSpacing: '0.08em',
          }}
        >
          Written in gold, sealed in memory, kept forever.
        </p>
        <div
          className="mx-auto mt-6"
          style={{
            width: '200px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            boxShadow: '0 0 8px rgba(212,175,55,0.5)',
          }}
        />
      </div>

      {/* Letter cards */}
      <div className="flex flex-col gap-16 md:gap-24">
        {friends.map((friend, index) => (
          <LetterCard key={friend.id} friend={friend} index={index} />
        ))}
      </div>

      {/* Bottom flourish */}
      <div className="text-center mt-24">
        <div
          className="mx-auto mb-6"
          style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(180deg, rgba(212,175,55,0.5), transparent)',
          }}
        />
        <p
          className="font-serif italic"
          style={{
            color: 'rgba(212,175,55,0.35)',
            fontSize: '0.8rem',
            letterSpacing: '0.3em',
          }}
        >
          ✦ END OF LETTERS ✦
        </p>
      </div>
    </section>
  );
}
