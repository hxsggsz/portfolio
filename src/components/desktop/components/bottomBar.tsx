import { AnimatePresence, motion } from 'framer-motion';

import { useLockScreenStore } from '@/stores/lockscreen';
import { useWindowManagerStore } from '@/stores/windowManager';

export const BottonBar = () => {
  const windowManager = useWindowManagerStore();
  const shouldClose = useLockScreenStore((state) => state.shouldClose);

  function toggleOpenWindow(windowId: string) {
    windowManager.toggleWindow(windowId, true);
    windowManager.minimizeWindow(windowId, false);
  }

  const renderApp = () =>
    windowManager.windows.map((window) => (
      <>
        <button
          key={window.id}
          onClick={() => toggleOpenWindow(window.id)}
          className="rounded-md p-1 shadow-xl backdrop-blur-sm"
        >
          <img width={50} height={50} src={window.image} />
        </button>

        <AnimatePresence>
          {window.isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-iris p-1"
            />
          )}
        </AnimatePresence>
      </>
    ));

  return (
    <AnimatePresence>
      {shouldClose && (
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 400 }}
          transition={{ type: 'tween', delay: 0.4 }}
          className="absolute bottom-0 left-1/2 z-30 mb-4 flex -translate-x-1/2 gap-4 rounded-full border border-highlightLow bg-overlay px-6 py-4 text-text backdrop-blur-sm"
        >
          {renderApp()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
