import React, { useEffect, useState } from 'react';

export function GetIsMobile() {
  const isClient = typeof window !== 'undefined';

  const [viewportWidth, setViewportWidth] = useState<number | null>(
    isClient ? window.innerWidth : null
  );

  function syncViewportWidth() {
    setViewportWidth(window.innerWidth);
  }

  useEffect(() => {
    if (isClient) {
      window.addEventListener('resize', syncViewportWidth);
      return () => window.removeEventListener('resize', syncViewportWidth);
    }
  }, [isClient]);

  return viewportWidth === null ? null : viewportWidth <= 768;
}
