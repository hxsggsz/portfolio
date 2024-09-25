import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { useLockScreenStore } from '@/stores/lockscreen';
import { cn } from '@/utils/cn';

interface DesktopItemsProps {
  name: string;
  icon: string;
  onDoubleClick: () => void;
}

export const DesktopItems = (props: DesktopItemsProps) => {
  const [hasClicked, setHasClicked] = useState(false);

  const { className } = usePrimaryColor('bg');

  const { shouldClose } = useLockScreenStore();

  const handleDoubleClick = () => {
    setTimeout(() => {
      props.onDoubleClick();
    }, 500);
  };

  return (
    <AnimatePresence>
      {shouldClose && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween', duration: 0.4, delay: 0.4 }}
          onClick={() => setHasClicked((prev) => !prev)}
          onDoubleClick={handleDoubleClick}
          className={cn(
            'cursor-pointer p-1 w-full grid place-items-center bg-opacity-60 rounded-md',
            hasClicked && className
          )}
        >
          <img
            src={props.icon}
            className="pointer-events-none size-20 select-none"
          />

          <h1 className="select-none whitespace-nowrap text-text">
            {props.name}
          </h1>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
