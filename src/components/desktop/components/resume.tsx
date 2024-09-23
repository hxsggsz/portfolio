import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import file from '@/assets/images/files.png';
import { EN_RESUME_LINK, PT_RESUME_LINK } from '@/constants/resume';
import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { getLangFromUrl, useTranslations } from '@/i18n/utils';
import { useLockScreenStore } from '@/stores/lockscreen';
import { cn } from '@/utils/cn';

export const Resume = () => {
  const [isDblClick, setIsDblClick] = useState(false);

  const { className } = usePrimaryColor('bg');

  const { shouldClose } = useLockScreenStore();

  const lang = getLangFromUrl();
  const t = useTranslations();

  const handleDoubleClick = () => {
    setIsDblClick((prev) => !prev);

    setTimeout(() => {
      setIsDblClick(false);
      window.open(lang === 'en-us' ? EN_RESUME_LINK : PT_RESUME_LINK);
    }, 500);
  };

  return (
    <AnimatePresence>
      {shouldClose && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween', duration: 0.4, delay: 0.4 }}
          onDoubleClick={handleDoubleClick}
          className={cn(
            'cursor-pointer p-2 grid place-items-center bg-opacity-60 rounded-md',
            isDblClick && className
          )}
        >
          <img
            src={file.src}
            className="pointer-events-none size-20 select-none"
          />

          <h1 className="select-none text-text">{t('res.title')}.pdf</h1>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
