import { AnimatePresence, motion } from 'framer-motion';

import useSizeScreen from '@/hooks/useSizeScreen';
import { useLockScreenStore } from '@/stores/lockscreen';
import { useOpenWindowsStore } from '@/stores/windowManager';

export const BottonBar = () => {
  const windows = useOpenWindowsStore((state) => state.openWindows);
  const shouldClose = useLockScreenStore((state) => state.shouldClose);

  const { width } = useSizeScreen();

  const renderApp = () =>
    windows.map((window) => (
      <div className="relative" key={window.name}>
        <motion.button
          key={window.name}
          whileHover={{ y: -4 }}
          transition={{ type: 'tween' }}
          title={`icon of ${window.name}`}
          className="flex size-14 items-center justify-center rounded-md bg-highlightLow shadow-xl backdrop-blur-sm"
        >
          <img
            width={50}
            height={50}
            src={window.image}
            alt={`icon of ${window.name}`}
            className="pointer-events-none select-none"
          />
        </motion.button>
      </div>
    ));

  const shouldShowBottomBar = shouldClose && windows.length > 0;

  return (
    <AnimatePresence>
      {shouldShowBottomBar && (
        <div className="mb-4 flex w-full items-end justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              scale: width >= 768 ? 0.8 : 1.0,
              opacity: 1,
            }}
            exit={{ opacity: 0, scale: 0.4 }}
            whileHover={{ scale: 1.0, transition: { delay: 0 } }}
            transition={{ type: 'tween', delay: 0.2 }}
            className="mt-4 flex gap-4 rounded-full border-2 border-highlightLow bg-highlightHigh/60 px-6 py-4 text-text backdrop-blur-sm"
          >
            {renderApp()}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
