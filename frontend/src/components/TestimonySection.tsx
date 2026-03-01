import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

const polaroids = [
  { caption: 'We thought this was forever.', rotate: '-4deg', delay: '0s', left: '5%' },
  { caption: "We didn't know we were becoming memories.", rotate: '2deg', delay: '0.3s', left: '35%' },
  { caption: 'We laughed like time was ours.', rotate: '-2deg', delay: '0.6s', left: '65%' },
];

export default function TestimonySection() {
  const { ref: textRef, isVisible: textVisible } = useScrollFadeIn({ threshold: 0.2 });
  const { ref: polaroidRef, isVisible: polaroidVisible } = useScrollFadeIn({ threshold: 0.1 });

  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #060610 0%, #04040e 50%, #060610 100%)',
        zIndex: 2,
      }}
    >
      {/* Manuscript text */}
      <div
        ref={textRef}
        className={`max-w-2xl mx-auto text-center mb-24 fade-in-section ${textVisible ? 'is-visible' : ''}`}
      >
        <p
          className="font-body italic mb-3"
          style={{ color: 'rgba(212,175,55,0.4)', letterSpacing: '0.3em', fontSize: '0.75rem' }}
        >
          SECTION II
        </p>
        <h2
          className="font-serif font-bold tracking-widest mb-10 gold-glow"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '0.15em' }}
        >
          TESTIMONY
        </h2>

        <div
          className="space-y-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: 'rgba(212,175,55,0.7)',
          }}
        >
          <p className="text-lg md:text-xl italic" style={{ lineHeight: 1.9 }}>
            You have entered the Archive.
          </p>
          <p className="text-lg md:text-xl italic" style={{ lineHeight: 1.9 }}>
            What you find here is not memory.
          </p>
          <p className="text-xl md:text-2xl font-semibold" style={{ color: '#D4AF37', lineHeight: 1.9 }}>
            It is evidence.
          </p>
          <div className="h-4" />
          <p className="text-base md:text-lg italic" style={{ color: 'rgba(212,175,55,0.6)', lineHeight: 1.9 }}>
            Evidence that we existed like this —
          </p>
          <p className="text-lg md:text-xl font-semibold" style={{ color: 'rgba(212,175,55,0.85)', lineHeight: 1.9 }}>
            loud, loyal, alive.
          </p>
        </div>

        <div
          className="mx-auto mt-10"
          style={{
            width: '160px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)',
          }}
        />
      </div>

      {/* Polaroid frames */}
      <div
        ref={polaroidRef}
        className="relative max-w-5xl mx-auto"
        style={{ height: '380px' }}
      >
        {polaroids.map((p, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: p.left,
              top: '20px',
              transform: `rotate(${p.rotate})`,
              opacity: polaroidVisible ? 1 : 0,
              transition: `opacity 1.2s ease ${p.delay}, transform 1.2s ease ${p.delay}`,
              animation: polaroidVisible
                ? `polaroidDrift 8s ease-in-out ${p.delay} infinite alternate`
                : 'none',
              '--rotate': p.rotate,
            } as React.CSSProperties}
          >
            <PolaroidFrame caption={p.caption} />
          </div>
        ))}
      </div>
    </section>
  );
}

function PolaroidFrame({ caption }: { caption: string }) {
  return (
    <div
      style={{
        width: '200px',
        background: 'rgba(10,10,20,0.9)',
        border: '1px solid rgba(212,175,55,0.4)',
        padding: '12px 12px 40px 12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 20px rgba(212,175,55,0.1)',
      }}
    >
      {/* Photo area — abstract gold pattern */}
      <div
        style={{
          width: '100%',
          height: '160px',
          background: 'linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(212,175,55,0.12) 50%, rgba(212,175,55,0.05) 100%)',
          border: '1px solid rgba(212,175,55,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Abstract gold ornament */}
        <svg viewBox="0 0 100 100" style={{ width: '60px', opacity: 0.3 }}>
          <circle cx="50" cy="50" r="30" fill="none" stroke="#D4AF37" strokeWidth="1" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
          <path d="M 50 20 L 50 80 M 20 50 L 80 50" stroke="#D4AF37" strokeWidth="0.5" />
          <path d="M 29 29 L 71 71 M 71 29 L 29 71" stroke="#D4AF37" strokeWidth="0.5" />
        </svg>
        {/* Shimmer overlay */}
        <div
          className="absolute inset-0 fabric-shimmer"
          style={{ opacity: 0.4 }}
        />
      </div>

      {/* Caption */}
      <p
        className="font-handwritten text-center mt-3"
        style={{
          color: 'rgba(212,175,55,0.7)',
          fontSize: '0.75rem',
          lineHeight: 1.4,
        }}
      >
        {caption}
      </p>
    </div>
  );
}
