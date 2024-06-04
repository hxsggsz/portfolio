import { AnimatePresence, motion } from 'framer-motion';

import { useLockScreenStore } from '@/stores/lockscreen';

export const Topbar = () => {
  const lockScreen = useLockScreenStore();

  return (
    <AnimatePresence>
      {lockScreen.shouldClose && (
        <motion.div
          initial={{ opacity: 0, y: -400 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -400 }}
          transition={{ type: 'tween', delay: 0.4 }}
        >
          {new Date().toISOString()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
