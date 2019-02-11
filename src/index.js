import React, { useEffect, useState } from 'react';
import nprogress from 'nprogress';

export default function useProgress({ mountOnly = true, configure = {}} = { mountOnly: true }) {
  const [isMounted, setIsMounted] = useState(false);
  if (!isMounted) {
    nprogress.configure(configure);
    nprogress.start();
  }
  useEffect(() => {
    setIsMounted(true);
    if (isMounted && mountOnly) {
      nprogress.done();
    }
  });
  return [nprogress.status || 1, nprogress.done];
}
