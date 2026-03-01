import { useEffect, useRef } from 'react';
import type { AnimationType } from '../data/friendsData';

interface TributeAnimationProps {
  type: AnimationType;
}

function HeartbeatAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-full heartbeat-pulse"
          style={{
            width: `${i * 200}px`,
            height: `${i * 200}px`,
            border: '1px solid rgba(212,175,55,0.3)',
            animationDelay: `${(i - 1) * 0.4}s`,
            animationDuration: '2s',
          }}
        />
      ))}
      <div
        className="absolute"
        style={{
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
          animation: 'heartbeat 2s ease-in-out infinite',
        }}
      />
    </div>
  );
}

function ConstellationAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const stars = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.01,
    }));

    // Create connections
    const connections: [number, number][] = [];
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) connections.push([i, j]);
      }
    }

    let t = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.01;

      connections.forEach(([a, b]) => {
        const opacity = (Math.sin(t + stars[a].phase) + 1) * 0.1;
        ctx.beginPath();
        ctx.moveTo(stars[a].x, stars[a].y);
        ctx.lineTo(stars[b].x, stars[b].y);
        ctx.strokeStyle = `rgba(212,175,55,${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      stars.forEach((s) => {
        const opacity = (Math.sin(t * s.speed * 100 + s.phase) + 1) * 0.4 + 0.1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${opacity})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

function CrownAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        viewBox="0 0 120 80"
        className="crown-glow"
        style={{ width: '180px', opacity: 0.4 }}
      >
        <path
          d="M 10 70 L 10 40 L 30 20 L 60 50 L 90 20 L 110 40 L 110 70 Z"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="40" r="4" fill="#D4AF37" opacity="0.8" />
        <circle cx="60" cy="50" r="4" fill="#D4AF37" opacity="0.8" />
        <circle cx="110" cy="40" r="4" fill="#D4AF37" opacity="0.8" />
        <circle cx="30" cy="20" r="3" fill="#D4AF37" opacity="0.6" />
        <circle cx="90" cy="20" r="3" fill="#D4AF37" opacity="0.6" />
      </svg>
    </div>
  );
}

function RippleAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute rounded-full ripple-ring"
          style={{
            width: '100px',
            height: '100px',
            border: '1px solid rgba(212,175,55,0.5)',
            animationDelay: `${(i - 1) * 0.75}s`,
            animationDuration: '3s',
          }}
        />
      ))}
    </div>
  );
}

function RadiantAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div
        className="absolute rounded-full radiant-glow"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.05) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute rounded-full radiant-glow"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)',
          animationDelay: '1.5s',
        }}
      />
    </div>
  );
}

function ShimmerAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 fabric-shimmer"
        style={{ opacity: 0.6 }}
      />
    </div>
  );
}

export default function TributeAnimation({ type }: TributeAnimationProps) {
  switch (type) {
    case 'heartbeat': return <HeartbeatAnimation />;
    case 'constellation': return <ConstellationAnimation />;
    case 'crown': return <CrownAnimation />;
    case 'ripple': return <RippleAnimation />;
    case 'radiant': return <RadiantAnimation />;
    case 'shimmer': return <ShimmerAnimation />;
    default: return null;
  }
}
