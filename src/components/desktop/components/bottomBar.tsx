import { AnimatePresence, motion } from 'framer-motion';

import config from '@/assets/images/config.png';
import { useLockScreenStore } from '@/stores/lockscreen';

export const BottonBar = () => {
  const shouldClose = useLockScreenStore((state) => state.shouldClose);
  return (
    <AnimatePresence>
      {shouldClose && (
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 400 }}
          transition={{ type: 'tween', delay: 0.4 }}
          className="absolute bottom-0 left-1/2 mb-2 flex -translate-x-1/2 gap-4 rounded-full border border-highlightLow px-6 py-4 text-text backdrop-blur-sm"
        >
          <div className="rounded-md p-1 shadow-xl backdrop-blur-sm">
            <img
              width={config.width / 2}
              height={config.width / 2}
              src={config.src}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
