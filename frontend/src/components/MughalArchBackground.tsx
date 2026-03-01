export default function MughalArchBackground() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <svg
        viewBox="0 0 400 600"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: 'min(70vw, 600px)',
          height: 'auto',
          opacity: 0.045,
        }}
      >
        {/* Mughal pointed arch */}
        <path
          d="M 60 580 L 60 280 Q 60 80 200 40 Q 340 80 340 280 L 340 580 Z"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
        />
        {/* Inner arch */}
        <path
          d="M 90 560 L 90 290 Q 90 110 200 75 Q 310 110 310 290 L 310 560 Z"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1"
        />
        {/* Decorative top finial */}
        <path
          d="M 185 40 Q 200 10 215 40"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
        />
        <circle cx="200" cy="8" r="5" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
        {/* Side decorations */}
        <path d="M 60 300 Q 40 300 35 280 Q 40 260 60 260" fill="none" stroke="#D4AF37" strokeWidth="1" />
        <path d="M 340 300 Q 360 300 365 280 Q 360 260 340 260" fill="none" stroke="#D4AF37" strokeWidth="1" />
        {/* Base ornaments */}
        <path d="M 60 580 L 40 580 L 40 560 L 60 560" fill="none" stroke="#D4AF37" strokeWidth="1" />
        <path d="M 340 580 L 360 580 L 360 560 L 340 560" fill="none" stroke="#D4AF37" strokeWidth="1" />
        {/* Lattice pattern inside arch */}
        <path d="M 120 400 L 200 350 L 280 400 L 200 450 Z" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" />
        <path d="M 140 480 L 200 440 L 260 480 L 200 520 Z" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" />
        <circle cx="200" cy="200" r="30" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
        <circle cx="200" cy="200" r="20" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
      </svg>
    </div>
  );
}
