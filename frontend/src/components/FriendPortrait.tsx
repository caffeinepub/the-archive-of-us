import { usePhotoUpload } from '../hooks/usePhotoUpload';

interface FriendPortraitProps {
  friendId: string;
  friendName: string;
  className?: string;
  style?: React.CSSProperties;
  /** Gradient colors for the fallback avatar */
  gradientFrom?: string;
  gradientTo?: string;
}

/**
 * Displays the uploaded photo for a friend, or a graceful fallback
 * (gold-toned gradient with initials) when no photo has been uploaded.
 */
export default function FriendPortrait({
  friendId,
  friendName,
  className = '',
  style,
  gradientFrom = 'rgba(30,24,10,1)',
  gradientTo = 'rgba(60,48,15,1)',
}: FriendPortraitProps) {
  const { photoDataUri } = usePhotoUpload(friendId);

  if (photoDataUri) {
    return (
      <img
        src={photoDataUri}
        alt={`${friendName} portrait`}
        className={`w-full h-full object-cover object-top ${className}`}
        style={style}
      />
    );
  }

  // Fallback: gradient background with initials
  const initials = friendName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
      style={{
        background: `linear-gradient(160deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
        ...style,
      }}
    >
      <span
        className="font-serif font-black select-none"
        style={{
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          color: 'rgba(212,175,55,0.35)',
          letterSpacing: '0.15em',
          textShadow: '0 0 20px rgba(212,175,55,0.2)',
        }}
      >
        {initials}
      </span>
    </div>
  );
}
