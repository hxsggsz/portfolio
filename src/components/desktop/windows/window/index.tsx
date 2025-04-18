import { motion } from 'framer-motion';
import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { Rnd } from 'react-rnd';

import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import useSizeScreen from '@/hooks/useSizeScreen';
import { useWindow } from '@/hooks/useWindow';
import type { UseImperativeWindowHandler } from '@/types/windows';
import { cn } from '@/utils/cn';

import { HeaderButtons } from './header-buttons';

interface WindowProps {
  name: string;
  children: React.ReactNode;
}

export const Window = forwardRef<UseImperativeWindowHandler, WindowProps>(
  (props, ref) => {
    const {
      refs: { positionRef, rndRef },
      isOpen,
      openWindow,
      closeWindow,
      isFullScreen,
      toggleFullscreen,
    } = useWindow();

    const { width } = useSizeScreen();

    const thumb = usePrimaryColor('thumb');
    const wrapper = usePrimaryColor('border');
    const header = usePrimaryColor('bg', 'border');

    useImperativeHandle(ref, () => ({
      openWindow,
    }));

    useEffect(() => {
      if (width <= 768) {
        toggleFullscreen(true);
      }
    }, [width]);

    return (
      isOpen && (
        <Rnd
          ref={rndRef}
          bounds="body"
          default={{
            ...positionRef.current,
            width: '400',
            height: '450',
          }}
          dragHandleClassName="handle"
          className={cn(
            'flex z-10 transition-size relative min-h-[500px] min-w-[50%] overflow-hidden rounded-md bg-highlightLow text-text shadow-xl',
            isFullScreen && 'min-w-[100vw] max-w-full max-h-full min-h-[100vh]',
            wrapper.className
          )}
        >
          <header
            className={cn(
              'handle flex w-full cursor-move touch-none justify-between gap-1 px-2 py-1 text-text',
              header.className
            )}
          >
            <p>{props.name}</p>

            <HeaderButtons
              isFullScreen={isFullScreen}
              updateFullscreen={toggleFullscreen}
              closeWindow={() => closeWindow(props.name)}
            />
          </header>

          <motion.div
            className={cn(
              'relative h-full p-2 scrollbar scrollbar-track-inherit scrollbar-w-1 overflow-x-hidden flex max-h-fullContent w-full overflow-y-auto',
              thumb.className
            )}
          >
            {props.children}
          </motion.div>
        </Rnd>
      )
    );
  }
);
