import { useState, useCallback } from 'react';

const STORAGE_KEY_PREFIX = 'tribute_photo_';

function getStorageKey(friendId: string): string {
  return `${STORAGE_KEY_PREFIX}${friendId}`;
}

export function getStoredPhoto(friendId: string): string | null {
  try {
    return localStorage.getItem(getStorageKey(friendId));
  } catch {
    return null;
  }
}

export function usePhotoUpload(friendId: string) {
  const [photoDataUri, setPhotoDataUri] = useState<string | null>(() =>
    getStoredPhoto(friendId)
  );
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadPhoto = useCallback(
    (file: File) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        setError('Please select a JPG, PNG, GIF, or WebP image.');
        return;
      }

      setIsUploading(true);
      setError(null);

      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUri = e.target?.result as string;
        try {
          localStorage.setItem(getStorageKey(friendId), dataUri);
          setPhotoDataUri(dataUri);
        } catch {
          setError('Could not save photo. Storage may be full.');
        }
        setIsUploading(false);
      };
      reader.onerror = () => {
        setError('Failed to read the image file.');
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    },
    [friendId]
  );

  const removePhoto = useCallback(() => {
    try {
      localStorage.removeItem(getStorageKey(friendId));
      setPhotoDataUri(null);
    } catch {
      // ignore
    }
  }, [friendId]);

  return { photoDataUri, uploadPhoto, removePhoto, isUploading, error };
}
