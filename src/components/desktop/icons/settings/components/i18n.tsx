import { motion } from 'framer-motion';

import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { useTranslations } from '@/i18n/utils';
import { cn } from '@/utils/cn';

export const I18n = () => {
  const t = useTranslations();

  const { className } = usePrimaryColor('bg', 'border', 'focus-within');
  return (
    <>
      <h1 className="mb-2 text-lg font-semibold text-text">
        {t('settings.lang.title')}
      </h1>

      <div className="flex gap-2">
        <motion.a
          href="/en-us/"
          whileHover={{ y: -4 }}
          transition={{ type: 'tween' }}
          className={cn('p-2 text-text rounded-xl', className)}
        >
          {t('english')}
        </motion.a>

        <motion.a
          href="/pt-br/"
          whileHover={{ y: -4 }}
          transition={{ type: 'tween' }}
          className={cn('p-2 text-text rounded-xl', className)}
        >
          {t('portuguese')}
        </motion.a>
      </div>
    </>
  );
};
