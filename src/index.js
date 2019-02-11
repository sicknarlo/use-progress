import React, { useEffect, useState } from 'react';
import nprogress from 'nprogress';

export default function useProgress(loaded = true) {
  const [isMounted, setIsMounted] = useState(false);
  if (!isMounted) {
    nprogress.start();
  }
  useEffect(() => {
    setIsMounted(true);
    if (isMounted && loaded) {
      nprogress.done();
    }
  });
}
