import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';

import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { colors } from '@/hooks/usePrimaryColor/constants';
import type { PrimaryColorKeys } from '@/hooks/usePrimaryColor/types';
import { useTranslations } from '@/i18n/utils';
import { cn } from '@/utils/cn';

const primaryColorsOptions: PrimaryColorKeys[] = [
  'love',
  'gold',
  'rose',
  'pine',
  'foam',
  'iris',
];
export const Theme = () => {
  const t = useTranslations();

  const { className, changePrimaryColor } = usePrimaryColor('border');

  const renderPrimaryColors = () =>
    primaryColorsOptions.map((color) => (
      <motion.button
        key={nanoid()}
        whileHover={{ y: -4 }}
        transition={{ type: 'tween' }}
        onClick={() => changePrimaryColor(color)}
        className={cn('rounded-full bg-rose p-8', className, colors.bg[color])}
      />
    ));

  return (
    <>
      <h1 className="mb-2 text-lg font-semibold text-text">
        {t('settings.primary.theme.title')}
      </h1>

      <div className="flex gap-2">{renderPrimaryColors()}</div>
    </>
  );
};
