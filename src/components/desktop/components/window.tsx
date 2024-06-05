import { Browser, Browsers, Minus, X } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';

import { cn } from '@/utils/cn';

export const Window = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const rndRef = useRef<Rnd | null>(null);
  const positionRef = useRef<{ x: number; y: number }>({
    x: window.innerWidth / 4,
    y: window.innerHeight / 6,
  });

  const updateFullScreen = () => setIsFullScreen((prev) => !prev);

  useEffect(() => {
    if (!rndRef.current) return;

    if (!isFullScreen) {
      rndRef.current.updatePosition(positionRef.current);
      return;
    }

    positionRef.current = rndRef.current.originalPosition;
    rndRef.current.updatePosition({
      x: 0,
      y: 0,
    });
  }, [isFullScreen]);

  return (
    <Rnd
      ref={rndRef}
      bounds="body"
      default={{
        ...positionRef.current,
        width: 'auto',
        height: 'auto',
      }}
      dragHandleClassName="handle"
      className={cn(
        'flex absolute left-1/2 top-1/2 z-20 min-h-[400px] min-w-[50%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border border-iris bg-highlightLow shadow-xl',
        isFullScreen && 'min-w-[100vw] max-w-full max-h-full min-h-[100vh]'
      )}
    >
      {/* eslint-disable-next-line tailwindcss/no-custom-classname -- need to pass handle class for drag */}
      <header className="handle flex w-full touch-none justify-end gap-1 border border-iris bg-iris px-2 py-1">
        <button className="rounded-md p-0.5 transition-colors hover:bg-white/60 active:bg-pine">
          <Minus size={20} />
        </button>
        <button
          onClick={updateFullScreen}
          className="rounded-md p-0.5 transition-colors hover:bg-white/60 active:bg-gold"
        >
          {!isFullScreen ? <Browser size={20} /> : <Browsers size={20} />}
        </button>
        <button className="rounded-md p-0.5 transition-colors hover:bg-white/60 active:bg-love">
          <X size={20} />
        </button>
      </header>
      <h1>window</h1>
    </Rnd>
  );
};
