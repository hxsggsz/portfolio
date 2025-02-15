import { useRef, useState } from 'react';
import type { Rnd } from 'react-rnd';

import { useOpenWindowsStore } from '@/stores/windowManager';
import type { WindowTypes } from '@/types/windows';

export function useWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const rndRef = useRef<Rnd | null>(null);
  const positionRef = useRef<{ x: number; y: number }>({
    x: window.innerWidth / 6,
    y: window.innerHeight / 6,
  });

  const { addWindow, removeWindow } = useOpenWindowsStore();

  function openWindow(newWindow: WindowTypes) {
    addWindow(newWindow);
    setIsOpen(true);
  }

  function closeWindow(windowName: string) {
    removeWindow(windowName);
    setIsOpen(false);
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
    openWindow,
    closeWindow,
    isFullScreen,
    toggleFullscreen,
  };
}
