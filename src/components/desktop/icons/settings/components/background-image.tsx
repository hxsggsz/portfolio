import { ImageBroken } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { useTranslations } from '@/i18n/utils';
import { cn } from '@/utils/cn';

interface BackgroundImageProps {
  handleUploadImage: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  removeCustomBackground: () => void;
}
export const BackgroundImage = (props: BackgroundImageProps) => {
  const t = useTranslations();

  const { className } = usePrimaryColor('border', 'bg');
  return (
    <>
      <h1 className="mt-1 text-lg font-semibold text-text">
        {t('settings.image.title')}
      </h1>

      <div className="flex items-center gap-2">
        <motion.label
          whileHover={{ y: -4 }}
          transition={{ type: 'tween' }}
          className={cn(
            'my-2 cursor-pointer p-2 rounded-lg text-sm font-semibold text-text',
            className
          )}
        >
          {t('settings.image.label')}
          <input
            type="file"
            className="hidden"
            onChange={props.handleUploadImage}
          />
        </motion.label>

        <motion.button
          whileHover={{ y: -4 }}
          transition={{ type: 'tween' }}
          className={cn('p-2 h-full text-sm text-text rounded-xl', className)}
          onClick={props.removeCustomBackground}
          title={t('settings.image.delete')}
        >
          <ImageBroken size={24} />
        </motion.button>
      </div>
    </>
  );
};
