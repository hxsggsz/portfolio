import { BatteryHigh, SpeakerHigh, WifiHigh } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { useInterval } from '@/hooks/useInterval';
import { useLockScreenStore } from '@/stores/lockscreen';
import { formatClock, formatDate } from '@/utils/format';

export const Topbar = () => {
  const [dateTime, setDateTime] = useState(new Date());

  const lockScreen = useLockScreenStore();

  useInterval(() => setDateTime(new Date()), 1000);

  return (
    <AnimatePresence>
      {lockScreen.shouldClose && (
        <motion.div
          initial={{ opacity: 0, y: -400 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -400 }}
          transition={{ type: 'tween', delay: 0.4 }}
          className="flex w-full justify-center"
        >
          <div className="mt-4 flex gap-4 rounded-full border border-highlightLow bg-overlay px-6 py-4 text-text backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <SpeakerHigh size={20} />
              <WifiHigh size={20} />
              <BatteryHigh size={20} />
            </div>
            {/* TODO: pass dynamically the locale to this functions */}
            {formatDate('en', dateTime)}|{formatClock('en', dateTime)}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
