import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay = 500) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay]);
}
