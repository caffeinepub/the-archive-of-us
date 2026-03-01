import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import type { Friend } from '../data/friendsData';
import TributeAnimation from './TributeAnimations';

interface TributePanelProps {
  friend: Friend;
  onClose: () => void;
}

export default function TributePanel({ friend, onClose }: TributePanelProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center tribute-panel-enter"
      style={{
        zIndex: 1000,
        background: 'rgba(6, 6, 16, 0.97)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Background animation */}
      <TributeAnimation type={friend.animationType} />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 transition-all duration-300 hover:scale-110"
        style={{
          color: 'rgba(212,175,55,0.6)',
          border: '1px solid rgba(212,175,55,0.2)',
          background: 'rgba(212,175,55,0.05)',
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = '#D4AF37';
          (e.currentTarget as HTMLButtonElement).style.borderColor = '#D4AF37';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = 'rgba(212,175,55,0.6)';
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(212,175,55,0.2)';
        }}
        aria-label="Close tribute"
      >
        <X size={20} />
      </button>

      {/* Content */}
      <div
        className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl w-full mx-6 p-8 md:p-12"
        style={{
          border: '1px solid rgba(212,175,55,0.3)',
          background: 'rgba(10,10,20,0.8)',
          boxShadow: '0 0 60px rgba(212,175,55,0.1), inset 0 0 60px rgba(212,175,55,0.03)',
          zIndex: 5,
        }}
      >
        {/* Photo */}
        <div className="flex-shrink-0">
          <div
            className="relative"
            style={{
              width: '180px',
              height: '220px',
              border: '2px solid rgba(212,175,55,0.5)',
              boxShadow: '0 0 20px rgba(212,175,55,0.2), 0 0 40px rgba(212,175,55,0.1)',
            }}
          >
            <img
              src={`/assets/generated/${friend.photoFilename}`}
              alt={`${friend.name} portrait`}
              className="w-full h-full object-cover"
              style={{ filter: 'sepia(20%) contrast(1.05)' }}
            />
            {/* Gold overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, transparent 60%, rgba(10,10,20,0.6) 100%)',
              }}
            />
          </div>
          {/* Corner ornaments on photo */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: '#D4AF37', margin: '-1px' }} />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: '#D4AF37', margin: '-1px' }} />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: '#D4AF37', margin: '-1px' }} />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: '#D4AF37', margin: '-1px' }} />
        </div>

        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          {/* Name */}
          <h2
            className="font-serif font-black tracking-widest mb-1 gold-glow"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '0.2em' }}
          >
            {friend.name}
          </h2>

          {/* Title */}
          <p
            className="font-serif font-semibold tracking-widest mb-1"
            style={{ color: '#D4AF37', fontSize: '0.85rem', letterSpacing: '0.3em' }}
          >
            {friend.title}
          </p>

          {/* Epithet */}
          <p
            className="font-body italic mb-6"
            style={{ color: 'rgba(212,175,55,0.6)', fontSize: '1rem' }}
          >
            {friend.epithet}
          </p>

          {/* Divider */}
          <div
            className="mb-6"
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(212,175,55,0.6), transparent)',
              width: '120px',
            }}
          />

          {/* Message */}
          <div className="space-y-2">
            {friend.message.map((line, i) =>
              line === '' ? (
                <div key={i} className="h-3" />
              ) : (
                <p
                  key={i}
                  className="font-body"
                  style={{
                    color: 'rgba(212,175,55,0.8)',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                  }}
                >
                  {line}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
