import { useRef } from 'react';
import { Camera, X } from 'lucide-react';
import { usePhotoUpload } from '../hooks/usePhotoUpload';

interface PhotoUploadProps {
  friendId: string;
  friendName: string;
  /** Called after a photo is successfully loaded */
  onPhotoChange?: (dataUri: string | null) => void;
}

export default function PhotoUpload({ friendId, friendName, onPhotoChange }: PhotoUploadProps) {
  const { uploadPhoto, removePhoto, isUploading, error, photoDataUri } = usePhotoUpload(friendId);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    uploadPhoto(file);
    onPhotoChange?.(photoDataUri);
    // Reset input so the same file can be re-selected
    e.target.value = '';
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    removePhoto();
    onPhotoChange?.(null);
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/gif,image/webp"
        className="hidden"
        onChange={handleFileChange}
        aria-label={`Upload photo for ${friendName}`}
      />

      {/* Upload button */}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={isUploading}
        className="flex items-center gap-1.5 px-2.5 py-1.5 transition-all duration-300"
        style={{
          background: 'rgba(10,10,20,0.85)',
          border: '1px solid rgba(212,175,55,0.4)',
          color: 'rgba(212,175,55,0.85)',
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          fontFamily: 'var(--font-body, serif)',
          cursor: isUploading ? 'wait' : 'pointer',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(212,175,55,0.8)';
          (e.currentTarget as HTMLButtonElement).style.color = '#D4AF37';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 10px rgba(212,175,55,0.2)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(212,175,55,0.4)';
          (e.currentTarget as HTMLButtonElement).style.color = 'rgba(212,175,55,0.85)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
        }}
        title={photoDataUri ? 'Change photo' : 'Upload photo'}
      >
        <Camera size={11} />
        <span>{isUploading ? 'UPLOADING…' : photoDataUri ? 'CHANGE' : 'ADD PHOTO'}</span>
      </button>

      {/* Remove button — only shown when a photo exists */}
      {photoDataUri && (
        <button
          type="button"
          onClick={handleRemove}
          className="ml-1 p-1 transition-all duration-200"
          style={{
            background: 'rgba(10,10,20,0.85)',
            border: '1px solid rgba(212,175,55,0.25)',
            color: 'rgba(212,175,55,0.5)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = '#D4AF37';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(212,175,55,0.7)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = 'rgba(212,175,55,0.5)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(212,175,55,0.25)';
          }}
          title="Remove photo"
          aria-label={`Remove photo for ${friendName}`}
        >
          <X size={10} />
        </button>
      )}

      {/* Error message */}
      {error && (
        <p
          className="absolute top-full left-0 mt-1 text-xs whitespace-nowrap"
          style={{ color: 'rgba(255,100,100,0.8)', fontSize: '0.6rem' }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
