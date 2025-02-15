import { useRef, useState } from 'react';
import type { Rnd } from 'react-rnd';

export function useWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const rndRef = useRef<Rnd | null>(null);
  const positionRef = useRef<{ x: number; y: number }>({
    x: window.innerWidth / 6,
    y: window.innerHeight / 6,
  });

  function toggleOpen(open?: boolean) {
    setIsOpen((prev) => open ?? !prev);
  }

  function toggleFullscreen(fullscreen?: boolean) {
    setIsFullScreen((prev) => fullscreen ?? !prev);

    if (!rndRef.current) return;

    if (!fullscreen) {
      rndRef.current.updatePosition(positionRef.current);
      return;
    }

    positionRef.current = rndRef.current.originalPosition;
    rndRef.current.updatePosition({
      x: 0,
      y: 0,
    });
  }

  return {
    refs: {
      rndRef,
      positionRef,
    },
    isOpen,
    toggleOpen,
    isFullScreen,
    toggleFullscreen,
  };
}
