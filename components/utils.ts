import React, { useEffect, useState } from 'react';

export const getIsMobile = () => {
  if (typeof window === 'undefined') return null;

  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

  function syncViewportWidth() {
    setViewportWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', syncViewportWidth);
    return () => window.removeEventListener('resize', syncViewportWidth);
  }, [setViewportWidth]);

  return viewportWidth <= 768;
};
