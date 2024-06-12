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
      <div key={window.id}>
        <button
          key={window.id}
          onClick={() => toggleOpenWindow(window.id)}
          className="rounded-md bg-highlightLow p-1 shadow-xl backdrop-blur-sm"
        >
          <img
            width={50}
            height={50}
            src={window.image}
            alt={`icon of ${window.name}`}
            className="pointer-events-none select-none"
          />
        </button>

        <AnimatePresence>
          {window.isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'tween', duration: 0.1 }}
              className={cn(
                'absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full p-1',
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
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 400 }}
          transition={{ type: 'tween', delay: 0.4 }}
          className="absolute bottom-0 left-[45%] z-30 mb-4 flex -translate-x-1/2 gap-4 rounded-full border-2 border-highlightLow bg-highlightHigh/60 p-4 text-text backdrop-blur-sm"
        >
          {renderApp()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
