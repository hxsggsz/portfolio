import { ArrowRight } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';

import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { useLockScreenStore } from '@/stores/lockscreen';
import { cn } from '@/utils/cn';

export const LockScreen = () => {
  const lockScreen = useLockScreenStore();

  const { className } = usePrimaryColor('bg', 'focus-within');

  const closeLockScreen = () => lockScreen.setShouldClose(true);

  function handleKeyDown(ev: React.KeyboardEvent<HTMLButtonElement>) {
    if (ev.key === 'Enter') {
      closeLockScreen();
    }
  }

  return (
    <AnimatePresence>
      {!lockScreen.shouldClose && (
        <motion.div
          initial={{ opacity: 0, y: -400 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -400 }}
          transition={{ type: 'tween', duration: 0.4 }}
          className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center overflow-hidden backdrop-blur-sm"
        >
          <div>
            <img
              width={300}
              height={300}
              className="rounded-full"
              src="https://github.com/hxsggsz.png"
              alt="hxsggsz's github profile picture"
            />

            <h1 className="text-center text-2xl font-bold text-text">
              Victor Hugo
            </h1>

            <div className="flex items-center justify-between gap-2 rounded-md border-2 border-pine bg-surface px-2 py-1 font-semibold text-text">
              ***************
              <button
                autoFocus
                onClick={closeLockScreen}
                onKeyDown={handleKeyDown}
                className={cn(
                  'rounded-full p-1 opacity-80 outline-none transition-colors',
                  className
                )}
              >
                <ArrowRight size={20} weight="bold" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
