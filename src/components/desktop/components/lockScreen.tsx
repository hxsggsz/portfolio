import { ArrowRight } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';

import { useLockScreenStore } from '@/stores/lockscreen';

export const LockScreen = () => {
  const lockScreen = useLockScreenStore();

  return (
    <AnimatePresence>
      {!lockScreen.shouldClose && (
        <motion.div
          initial={{ opacity: 0, y: -400 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -400 }}
          transition={{ type: 'tween' }}
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
                onClick={() => lockScreen.setShouldClose(true)}
                className="rounded-full p-1 opacity-80 transition-colors hover:bg-red-900/40 active:bg-rose"
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