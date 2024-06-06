import { Browser, Browsers, Minus, X } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Rnd } from 'react-rnd';

import { useWindowManagerStore } from '@/stores/windowManager';
import { cn } from '@/utils/cn';

interface WindowProps {
  id: string;
  name: string;
}

export const Window = (props: WindowProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const windowManager = useWindowManagerStore();

  const rndRef = useRef<Rnd | null>(null);
  const positionRef = useRef<{ x: number; y: number }>({
    x: window.innerWidth / 6,
    y: window.innerHeight / 6,
  });

  const updateFullScreen = (fullScreenValue: boolean) => {
    setIsFullScreen(fullScreenValue);

    if (!rndRef.current) return;

    if (!fullScreenValue) {
      rndRef.current.updatePosition(positionRef.current);
      return;
    }

    positionRef.current = rndRef.current.originalPosition;
    rndRef.current.updatePosition({
      x: 0,
      y: 0,
    });
  };

  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.6, opacity: 0 }}
      transition={{ duration: 0.1, type: 'tween' }}
    >
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
          'flex transition-size relative z-20 min-h-[400px] min-w-[50%] overflow-hidden rounded-md border border-iris bg-highlightLow shadow-xl',
          isFullScreen && 'min-w-[100vw] max-w-full max-h-full min-h-[100vh]'
        )}
      >
        {/* eslint-disable-next-line tailwindcss/no-custom-classname -- need to pass handle class for drag */}
        <header className="handle flex w-full cursor-move touch-none justify-between gap-1 border border-iris bg-iris px-2 py-1 text-text">
          <p>{props.name}</p>

          <div className="flex gap-2">
            <button
              onClick={() => windowManager.minimizeWindow(props.id)}
              className="rounded-md p-0.5 transition-colors hover:bg-pine active:bg-white/60"
            >
              <Minus size={20} />
            </button>

            <button
              onClick={() => updateFullScreen(!isFullScreen)}
              className="rounded-md p-0.5 transition-colors hover:bg-gold active:bg-white/60"
            >
              {!isFullScreen ? <Browser size={20} /> : <Browsers size={20} />}
            </button>

            <button
              onClick={() => windowManager.toggleWindow(props.id)}
              className="rounded-md p-0.5 transition-colors hover:bg-love active:bg-white/60"
            >
              <X size={20} />
            </button>
          </div>
        </header>

        <div className="p-2">
          <h1>window</h1>
        </div>
      </Rnd>
    </motion.div>
  );
};
