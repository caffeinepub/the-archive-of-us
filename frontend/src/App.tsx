import { useRef } from 'react';
import GoldParticles from './components/GoldParticles';
import MughalArchBackground from './components/MughalArchBackground';
import HeroSection from './components/HeroSection';
import SacredSixSection from './components/SacredSixSection';
import TributeLettersSection from './components/TributeLettersSection';
import TestimonySection from './components/TestimonySection';
import LastPanelSection from './components/LastPanelSection';

export default function App() {
  const mainContentRef = useRef<HTMLDivElement>(null);

  const handleEnterArchive = () => {
    mainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  const appId = encodeURIComponent(window.location.hostname || 'the-archive-of-us');

  return (
    <div
      className="relative min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #0a0a14 0%, #0d0d1f 40%, #0a0a18 70%, #060610 100%)',
      }}
    >
      {/* Background layers */}
      <MughalArchBackground />
      <GoldParticles count={55} />

      {/* Hero */}
      <HeroSection onEnter={handleEnterArchive} />

      {/* Main content */}
      <div ref={mainContentRef}>
        <SacredSixSection />
        <TributeLettersSection />
        <TestimonySection />
        <LastPanelSection />
      </div>

      {/* Footer */}
      <footer
        className="relative py-10 text-center"
        style={{
          background: '#000000',
          borderTop: '1px solid rgba(212,175,55,0.1)',
          zIndex: 2,
        }}
      >
        <div className="mb-3">
          <div
            className="mx-auto"
            style={{
              width: '120px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)',
            }}
          />
        </div>
        <p
          className="font-body text-xs tracking-widest mb-2"
          style={{ color: 'rgba(212,175,55,0.3)', letterSpacing: '0.2em' }}
        >
          © {currentYear} · THE ARCHIVE OF US
        </p>
        <p
          className="font-body text-xs"
          style={{ color: 'rgba(212,175,55,0.2)', letterSpacing: '0.05em' }}
        >
          Built with{' '}
          <span style={{ color: 'rgba(212,175,55,0.4)' }}>♥</span>
          {' '}using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(212,175,55,0.4)', textDecoration: 'none' }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'rgba(212,175,55,0.8)')}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'rgba(212,175,55,0.4)')}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
