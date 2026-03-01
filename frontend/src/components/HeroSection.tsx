import { useEffect, useState } from 'react';

interface HeroSectionProps {
  onEnter: () => void;
}

const TITLE = 'THE ARCHIVE OF US';

export default function HeroSection({ onEnter }: HeroSectionProps) {
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [poetryVisible, setPoetryVisible] = useState(false);
  const [dividerVisible, setDividerVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setTitleVisible(true), 800);
    const t2 = setTimeout(() => setSubtitleVisible(true), 2200);
    const t3 = setTimeout(() => setPoetryVisible(true), 3000);
    const t4 = setTimeout(() => setDividerVisible(true), 4000);
    const t5 = setTimeout(() => setButtonVisible(true), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ zIndex: 2 }}
    >
      {/* Animated gold border frame */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 3 }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect
          x="16"
          y="16"
          width="calc(100% - 32px)"
          height="calc(100% - 32px)"
          rx="2"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          className="border-draw"
          style={{ width: 'calc(100% - 32px)', height: 'calc(100% - 32px)' }}
        />
      </svg>

      {/* Corner ornaments */}
      <div className="fixed top-4 left-4 pointer-events-none" style={{ zIndex: 4 }}>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M 2 20 L 2 2 L 20 2" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.8" />
          <circle cx="2" cy="2" r="2" fill="#D4AF37" opacity="0.8" />
        </svg>
      </div>
      <div className="fixed top-4 right-4 pointer-events-none" style={{ zIndex: 4 }}>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M 38 20 L 38 2 L 20 2" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.8" />
          <circle cx="38" cy="2" r="2" fill="#D4AF37" opacity="0.8" />
        </svg>
      </div>
      <div className="fixed bottom-4 left-4 pointer-events-none" style={{ zIndex: 4 }}>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M 2 20 L 2 38 L 20 38" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.8" />
          <circle cx="2" cy="38" r="2" fill="#D4AF37" opacity="0.8" />
        </svg>
      </div>
      <div className="fixed bottom-4 right-4 pointer-events-none" style={{ zIndex: 4 }}>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M 38 20 L 38 38 L 20 38" fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.8" />
          <circle cx="38" cy="38" r="2" fill="#D4AF37" opacity="0.8" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative text-center px-8 max-w-3xl mx-auto" style={{ zIndex: 5 }}>
        {/* Main title */}
        <h1
          className="font-serif font-black tracking-widest mb-6"
          style={{
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            lineHeight: 1.1,
          }}
          aria-label={TITLE}
        >
          {titleVisible &&
            TITLE.split('').map((char, i) => (
              <span
                key={i}
                className="letter-animate gold-glow"
                style={{
                  animationDelay: `${i * 0.06}s`,
                  display: 'inline-block',
                  whiteSpace: char === ' ' ? 'pre' : 'normal',
                  minWidth: char === ' ' ? '0.4em' : undefined,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
        </h1>

        {/* Subtitle */}
        <p
          className="font-body italic text-lg md:text-xl mb-8 transition-all duration-1000"
          style={{
            color: 'rgba(212,175,55,0.75)',
            letterSpacing: '0.15em',
            opacity: subtitleVisible ? 1 : 0,
            transform: subtitleVisible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          Established in the Age Before Goodbyes
        </p>

        {/* Poetry */}
        <div
          className="mb-10 space-y-2 transition-all duration-1000"
          style={{
            opacity: poetryVisible ? 1 : 0,
            transform: poetryVisible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <p className="font-body text-base md:text-lg" style={{ color: 'rgba(212,175,55,0.65)', letterSpacing: '0.05em' }}>
            In the beginning, there were strangers.
          </p>
          <p className="font-body text-base md:text-lg" style={{ color: 'rgba(212,175,55,0.65)', letterSpacing: '0.05em' }}>
            Then there were names.
          </p>
          <p className="font-body text-base md:text-lg font-semibold" style={{ color: 'rgba(212,175,55,0.85)', letterSpacing: '0.05em' }}>
            Then there was us.
          </p>
        </div>

        {/* Gold divider */}
        <div
          className="mx-auto mb-10 transition-all duration-1000"
          style={{
            width: dividerVisible ? '280px' : '0px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            boxShadow: '0 0 8px rgba(212,175,55,0.6), 0 0 16px rgba(212,175,55,0.3)',
            transition: 'width 1.2s ease',
          }}
        />

        {/* Enter button */}
        <div
          className="transition-all duration-1000"
          style={{
            opacity: buttonVisible ? 1 : 0,
            transform: buttonVisible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <button
            onClick={onEnter}
            className="relative overflow-hidden font-serif tracking-widest text-sm md:text-base px-10 py-4 border transition-all duration-500 group"
            style={{
              color: '#D4AF37',
              borderColor: 'rgba(212,175,55,0.5)',
              background: 'rgba(212,175,55,0.05)',
              letterSpacing: '0.25em',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#D4AF37';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(212,175,55,0.3), 0 0 40px rgba(212,175,55,0.15)';
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(212,175,55,0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(212,175,55,0.5)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(212,175,55,0.05)';
            }}
          >
            <span className="shimmer-btn absolute inset-0 pointer-events-none" />
            ENTER THE ARCHIVE
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000"
        style={{ opacity: buttonVisible ? 0.5 : 0, zIndex: 5 }}
      >
        <span className="font-body text-xs tracking-widest" style={{ color: 'rgba(212,175,55,0.5)', letterSpacing: '0.2em' }}>
          SCROLL
        </span>
        <div
          className="w-px h-8"
          style={{
            background: 'linear-gradient(180deg, rgba(212,175,55,0.5), transparent)',
            animation: 'grain 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
