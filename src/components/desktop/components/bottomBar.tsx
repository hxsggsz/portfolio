import { AnimatePresence, motion } from 'framer-motion';

import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { useLockScreenStore } from '@/stores/lockscreen';
import { useWindowManagerStore } from '@/stores/windowManager';
import { cn } from '@/utils/cn';

export const BottonBar = () => {
  const windowManager = useWindowManagerStore();
  const shouldClose = useLockScreenStore((state) => state.shouldClose);

  const { className } = usePrimaryColor('bg');

  function toggleOpenWindow(windowId: string) {
    windowManager.toggleWindow(windowId, true);
    windowManager.minimizeWindow(windowId, false);
  }

  const renderApp = () =>
    windowManager.windows.map((window) => (
      <div className="relative" key={window.id}>
        <motion.button
          key={window.id}
          whileHover={{ y: -4 }}
          transition={{ type: 'tween' }}
          onClick={() => toggleOpenWindow(window.id)}
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

        <AnimatePresence>
          {window.isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scaleX: window.isMain ? 3 : 1,
              }}
              exit={{ opacity: 0 }}
              transition={{ type: 'tween', duration: 0.1 }}
              className={cn(
                'absolute transition mt-1 -top-4 left-1/2 -translate-x-1/2 rounded-full p-1',
                window.isMain && 'rounded-sm p-[3px]',
                className
              )}
            />
          )}
        </AnimatePresence>
      </div>
    ));

  return (
    <AnimatePresence>
      {shouldClose && (
        <motion.div
          initial={{ opacity: 0, bottom: -400 }}
          animate={{
            bottom: -100,
            opacity: 1,
          }}
          whileHover={{ bottom: -50, transition: { delay: 0 } }}
          transition={{ type: 'tween', delay: 0.4 }}
          className="absolute bottom-0 left-1/2 z-30 mb-4 flex -translate-x-1/2 -translate-y-1/2 gap-4 rounded-full border-2 border-highlightLow bg-highlightHigh/60 p-4 text-text backdrop-blur-sm"
        >
          {renderApp()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
