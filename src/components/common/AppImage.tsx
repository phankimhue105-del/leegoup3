import React, { useState } from 'react';
import { PLACEHOLDER_IMAGES, getPlaceholderImageUrl } from '../../data/placeholderMedia';
import { ImageOff } from 'lucide-react';

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

  // Resolve preset key or fallback URL
  let resolvedSrc = src;
  if (src && src in PLACEHOLDER_IMAGES) {
    resolvedSrc = PLACEHOLDER_IMAGES[src as keyof typeof PLACEHOLDER_IMAGES];
  } else if (!src) {
    resolvedSrc = getPlaceholderImageUrl(fallbackText || alt || 'Image');
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-slate-100 ${className}`} id={id}>
      {loading && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
          <span className="text-xs font-semibold text-slate-400">Loading...</span>
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-4 text-center">
          <ImageOff className="w-8 h-8 text-slate-400 mb-1" />
          <span className="text-xs font-medium text-slate-500">
            {fallbackText || alt || 'Image unavailable'}
          </span>
        </div>
      ) : (
        <img
          src={resolvedSrc}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setHasError(true);
          }}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}
    </div>
  );
};
