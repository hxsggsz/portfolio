import { CloudArrowUp, ImageBroken } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';

import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { colors } from '@/hooks/usePrimaryColor/constants';
import type { PrimaryColorKeys } from '@/hooks/usePrimaryColor/types';
import { useThemeMode } from '@/hooks/useThemeMode';
import { useUploadImage } from '@/hooks/useUploadImage';
import { useTranslations } from '@/i18n/utils';
import type { DefaultWindowProps } from '@/types/windows';
import { cn } from '@/utils/cn';

import { Window } from './window';

const primaryColorsOptions: PrimaryColorKeys[] = [
  'love',
  'gold',
  'rose',
  'pine',
  'foam',
  'iris',
];

export const Settings = (props: DefaultWindowProps) => {
  const { setTheme } = useThemeMode();

  const t = useTranslations();

  const { className, changePrimaryColor } = usePrimaryColor('border');
  const buttonAndInput = usePrimaryColor('bg', 'border', 'focus-within');
  const dragAndDrop = usePrimaryColor('bg');

  const { isDragging, handlers, handleUploadImage, removeCustomBackground } =
    useUploadImage();

  const renderPrimaryColors = () =>
    primaryColorsOptions.map((color) => (
      <motion.button
        whileHover={{ y: -4 }}
        transition={{ type: 'tween' }}
        key={nanoid()}
        onClick={() => changePrimaryColor(color)}
        className={cn('rounded-full bg-rose p-8', className, colors.bg[color])}
      />
    ));

  const renderSettings = () => (
    <div className="grid place-items-center">
      <h1 className="mb-2 text-lg font-semibold text-text">
        {t('settings.lang.title')}
      </h1>

      <div className="flex gap-2">
        <motion.a
          href="/en-us/"
          whileHover={{ y: -4 }}
          transition={{ type: 'tween' }}
          className={cn('p-2 text-text rounded-xl', buttonAndInput.className)}
        >
          {t('english')}
        </motion.a>

        <motion.a
          href="/pt-br/"
          whileHover={{ y: -4 }}
          transition={{ type: 'tween' }}
          className={cn('p-2 text-text rounded-xl', buttonAndInput.className)}
        >
          {t('portuguese')}
        </motion.a>
      </div>

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

      <h1 className="mb-2 text-lg font-semibold text-text">
        {t('settings.primary.theme.title')}
      </h1>

      <div className="flex gap-2">{renderPrimaryColors()}</div>

      <h1 className="mt-1 text-lg font-semibold text-text">
        {t('settings.image.title')}
      </h1>

      <div className="flex items-center gap-2">
        <motion.label
          whileHover={{ y: -4 }}
          transition={{ type: 'tween' }}
          className={cn(
            'my-2 cursor-pointer p-2 rounded-lg text-sm font-semibold text-text',
            buttonAndInput.className
          )}
        >
          {t('settings.image.label')}
          <input type="file" className="hidden" onChange={handleUploadImage} />
        </motion.label>

        <motion.button
          whileHover={{ y: -4 }}
          transition={{ type: 'tween' }}
          className={cn(
            'p-2 h-full text-sm text-text rounded-xl',
            buttonAndInput.className
          )}
          onClick={removeCustomBackground}
          title={t('settings.image.delete')}
        >
          <ImageBroken size={24} />
        </motion.button>
      </div>
    </div>
  );

  const renderDragAndDropSinalization = () => (
    <div
      className={cn(
        dragAndDrop.className,
        'flex items-center justify-center text-text z-40 border-dashed border-text border-4 absolute inset-0 size-full'
      )}
    >
      <div className="grid place-items-center">
        <CloudArrowUp size={126} className="rounded-full bg-text/50 p-2" />
        <h1 className="text-xl font-bold">{t('settings.image.drop')}</h1>
      </div>
    </div>
  );

  return (
    <div {...handlers}>
      <Window name={t('Settings')} id={props.id}>
        {isDragging && renderDragAndDropSinalization()}
        {renderSettings()}
      </Window>
    </div>
  );
};
