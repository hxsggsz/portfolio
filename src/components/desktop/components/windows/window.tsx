import { Browser, Browsers, Minus, X } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Rnd } from 'react-rnd';

import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import useSizeScreen from '@/hooks/useSizeScreen';
import { useWindowManagerStore } from '@/stores/windowManager';
import { cn } from '@/utils/cn';

interface WindowProps {
  id: string;
  name: string;
  children: React.ReactNode;
}

export const Window = (props: WindowProps) => {
  const windowManager = useWindowManagerStore();

  const { width } = useSizeScreen();

  const wrapper = usePrimaryColor('border');
  const header = usePrimaryColor('bg', 'border');
  const thumb = usePrimaryColor('thumb');

  const rndRef = useRef<Rnd | null>(null);
  const positionRef = useRef<{ x: number; y: number }>({
    x: window.innerWidth / 6,
    y: window.innerHeight / 6,
  });

  const isFullScreen =
    windowManager.findWindow(props.id)?.isFullscreen ?? false;

  const updateFullScreen = (fullScreenValue: boolean) => {
    windowManager.toggleFullScreen(props.id, fullScreenValue);

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

  useEffect(() => {
    if (width <= 768) {
      updateFullScreen(true);
    }
  }, [width]);

  return (
    <Rnd
      ref={rndRef}
      bounds="body"
      default={{
        ...positionRef.current,
        width: '400',
        height: '450',
      }}
      onDrag={() => windowManager.handleMainWindow(props.id)}
      dragHandleClassName="handle"
      className={cn(
        'flex z-10 transition-size relative min-h-[500px] min-w-[50%] overflow-hidden rounded-md bg-highlightLow shadow-xl',
        isFullScreen && 'min-w-[100vw] max-w-full max-h-full min-h-[100vh]',
        wrapper.className,
        windowManager.findWindow(props.id)?.isMain && 'z-20'
      )}
    >
      <header
        className={cn(
          'handle flex w-full cursor-move touch-none justify-between gap-1 px-2 py-1 text-text',
          header.className
        )}
      >
        <p>{props.name}</p>

        <div className="flex">
          <button
            onClick={() => windowManager.minimizeWindow(props.id)}
            className="rounded-md p-0.5 hover:bg-pine active:bg-white/60"
          >
            <Minus size={20} />
          </button>

          <button
            onClick={() => updateFullScreen(!isFullScreen)}
            className="rounded-md p-0.5 hover:bg-gold active:bg-white/60"
          >
            {!windowManager.findWindow(props.id)?.isFullscreen ? (
              <Browser size={20} />
            ) : (
              <Browsers size={20} />
            )}
          </button>

          <button
            onClick={() => windowManager.toggleWindow(props.id)}
            className="rounded-md p-0.5 hover:bg-love active:bg-white/60"
          >
            <X size={20} />
          </button>
        </div>
      </header>

      <motion.div
        className={cn(
          'relative h-screen scrollbar scrollbar-track-inherit scrollbar-w-1 overflow-x-hidden flex max-h-fullContent w-full overflow-y-auto',
          thumb.className
        )}
      >
        {props.children}
      </motion.div>
    </Rnd>
  );
};
