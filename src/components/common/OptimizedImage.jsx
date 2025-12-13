import React, { useState } from 'react';
import Loading from './Loading';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  containerClassName = '',
  loadingVariant = 'image',
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative ${containerClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <Loading variant={loadingVariant} className="w-full h-full" />
        </div>
      )}
      
      {hasError ? (
        <div className="w-full h-full bg-neutral-800 rounded-lg flex items-center justify-center">
          <span className="text-neutral-500">Failed to load image</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage;