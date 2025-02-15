import { motion } from 'framer-motion';

import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { useThemeMode } from '@/hooks/useThemeMode';
import { useTranslations } from '@/i18n/utils';
import { cn } from '@/utils/cn';

export const DarkMode = () => {
  const { setTheme } = useThemeMode();

  const { className } = usePrimaryColor('border');

  const t = useTranslations();
  return (
    <>
      <h1 className="mb-2 text-lg font-semibold text-text">
        {t('settings.theme.title')}
      </h1>

      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ y: -4 }}
          transition={{ type: 'tween' }}
          onClick={() => setTheme('light')}
          className={cn(
            'rounded-full border border-love bg-[#faf4ed] p-12',
            className
          )}
        />

        <motion.button
          whileHover={{ y: -4 }}
          transition={{ type: 'tween' }}
          onClick={() => setTheme('dark')}
          className={cn(
            'rounded-full border border-love bg-[#232136] p-12',
            className
          )}
        />
      </div>
    </>
  );
};
