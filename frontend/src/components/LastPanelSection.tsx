import { useState, useEffect } from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

export default function LastPanelSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollFadeIn({ threshold: 0.1 });
  const [frameVisible, setFrameVisible] = useState(true);
  const [foreverVisible, setForeverVisible] = useState(false);

  useEffect(() => {
    if (!sectionVisible) return;
    const t1 = setTimeout(() => setFrameVisible(false), 6000);
    const t2 = setTimeout(() => setForeverVisible(true), 7500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [sectionVisible]);

  return (
    <section
      className="relative py-24 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #060610 0%, #030308 50%, #000000 100%)',
        zIndex: 2,
      }}
    >
      <div
        ref={sectionRef}
        className={`w-full max-w-3xl mx-auto fade-in-section ${sectionVisible ? 'is-visible' : ''}`}
      >
        {/* Section label */}
        <p
          className="font-body italic text-center mb-8"
          style={{ color: 'rgba(212,175,55,0.4)', letterSpacing: '0.3em', fontSize: '0.75rem' }}
        >
          THE LAST PANEL
        </p>

        {/* Main framed box */}
        <div
          className="relative p-10 md:p-16 text-center transition-all duration-2000"
          style={{
            border: `2px solid ${frameVisible ? 'rgba(212,175,55,0.6)' : 'transparent'}`,
            boxShadow: frameVisible
              ? '0 0 40px rgba(212,175,55,0.15), 0 0 80px rgba(212,175,55,0.08), inset 0 0 40px rgba(212,175,55,0.03)'
              : 'none',
            background: 'rgba(6,6,16,0.8)',
            transition: 'border-color 2s ease, box-shadow 2s ease',
          }}
        >
          {/* Corner ornaments */}
          {frameVisible && (
            <>
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: '#D4AF37', margin: '-1px' }} />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: '#D4AF37', margin: '-1px' }} />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: '#D4AF37', margin: '-1px' }} />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: '#D4AF37', margin: '-1px' }} />
            </>
          )}

          {/* Main heading */}
          <h2
            className="font-serif font-black tracking-widest mb-10 gold-glow"
            style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
              letterSpacing: '0.2em',
            }}
          >
            THIS IS NOT AN ENDING.
          </h2>

          {/* Farewell message */}
          <div
            className="space-y-3 mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {[
              'We will scatter.',
              'We will grow.',
              'We will change.',
              '',
              'But somewhere — in the quiet parts of our lives —',
              'there will always be a version of us sitting together,',
              'unaware that we were already legendary.',
              '',
              'You were my safe place.',
              'You were my strength.',
              'You were my favorite chapter.',
              '',
              'And no time, no distance, no growing up —',
              'can erase that.',
            ].map((line, i) =>
              line === '' ? (
                <div key={i} className="h-3" />
              ) : (
                <p
                  key={i}
                  className="italic"
                  style={{
                    color: 'rgba(212,175,55,0.75)',
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                    lineHeight: 1.9,
                  }}
                >
                  {line}
                </p>
              )
            )}
          </div>

          {/* Divider */}
          <div
            className="mx-auto mb-8"
            style={{
              width: '120px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)',
            }}
          />

          {/* Signature */}
          <p
            className="font-handwritten"
            style={{
              color: 'rgba(212,175,55,0.6)',
              fontSize: '1.1rem',
              letterSpacing: '0.05em',
            }}
          >
            — Written in gratitude. Carved in memory.
          </p>
        </div>

        {/* Forever Archived */}
        {foreverVisible && (
          <div className="text-center mt-20">
            <p
              className="font-serif font-black forever-text gold-glow"
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                letterSpacing: '0.3em',
              }}
            >
              Forever Archived.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
