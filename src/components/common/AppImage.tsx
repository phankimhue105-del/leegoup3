import React, { useState, useEffect, useRef } from 'react';
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
  
  // Track the original prop-resolved source to avoid resets on parent re-renders
  const [resolvedSrcProp, setResolvedSrcProp] = useState<string>(() =>
    ImageService.getImage(src, fallbackText || alt || 'Image')
  );

  // Track the source currently assigned to the img element
  const [currentSrc, setCurrentSrc] = useState<string>(resolvedSrcProp);

  const imgRef = useRef<HTMLImageElement>(null);

  // Sync state ONLY if the source resolved from props has actually changed
  useEffect(() => {
    const nextResolved = ImageService.getImage(src, fallbackText || alt || 'Image');
    if (nextResolved !== resolvedSrcProp) {
      setResolvedSrcProp(nextResolved);
      setCurrentSrc(nextResolved);
      setHasError(false);
      setLoading(true);
    }
  }, [src, fallbackText, alt, resolvedSrcProp]);

  // Handle successful image load
  const handleLoad = () => {
    setLoading(false);
  };

  // Handle image load error, falling back to SVG placeholder only once
  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setCurrentSrc(ImageService.getImage('', fallbackText || alt || 'Image'));
    } else {
      setLoading(false);
    }
  };

  // Check complete status of image element on mount or currentSrc changes
  // This resolves issues where cached images finish loading before React binds event handlers
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      if (img.naturalWidth > 0) {
        setLoading(false);
      } else {
        handleError();
      }
    }
  }, [currentSrc, hasError, fallbackText, alt]);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-slate-100 ${className}`} id={id}>
      {loading && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
          <span className="text-xs font-semibold text-slate-400">Loading...</span>
        </div>
      )}

      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};

