import React, { useState, useEffect } from 'react';
import { ImageService } from '../../services/imageService';

interface AppImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  id?: string;
}

export const AppImage: React.FC<AppImageProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  id,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [currentSrc, setCurrentSrc] = useState<string>(() =>
    ImageService.getImage(src, fallbackText || alt || 'Image')
  );

  // Sync state if src or fallback dependencies change
  useEffect(() => {
    setCurrentSrc(ImageService.getImage(src, fallbackText || alt || 'Image'));
    setHasError(false);
    setLoading(true);
  }, [src, fallbackText, alt]);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-slate-100 ${className}`} id={id}>
      {loading && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
          <span className="text-xs font-semibold text-slate-400">Loading...</span>
        </div>
      )}

      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => {
          if (!hasError) {
            setHasError(true);
            // Replace broken remote image with SVG placeholder dynamically
            setCurrentSrc(ImageService.getImage('', fallbackText || alt || 'Image'));
          } else {
            setLoading(false);
          }
        }}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};

