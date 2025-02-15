import { CloudArrowUp } from '@phosphor-icons/react';
import { useRef } from 'react';

import config from '@/assets/images/config.png';
import { Window } from '@/components/desktop/windows/window/';
import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { useUploadImage } from '@/hooks/useUploadImage';
import { useTranslations } from '@/i18n/utils';
import type { UseImperativeWindowHandler } from '@/types/windows';
import { cn } from '@/utils/cn';

import { DesktopItems } from '../desktop-icon';
import { BackgroundImage } from './components/background-image';
import { DarkMode } from './components/dark-mode';
import { I18n } from './components/i18n';
import { Theme } from './components/theme';

export const Settings = () => {
  const windowRef = useRef<UseImperativeWindowHandler>(null);

  const t = useTranslations();

  const windowName = t('Settings');

  const dragAndDrop = usePrimaryColor('bg');

  const { isDragging, handlers, handleUploadImage, removeCustomBackground } =
    useUploadImage();

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
    <>
      <DesktopItems
        name={windowName}
        icon={config.src}
        onDoubleClick={() =>
          windowRef.current?.openWindow({ name: windowName, image: config.src })
        }
      />

      <div {...handlers}>
        <Window name={t('Settings')} ref={windowRef}>
          {isDragging && renderDragAndDropSinalization()}

          <div className="grid h-fit w-full place-items-center gap-2">
            <I18n />
            <DarkMode />
            <Theme />
            <BackgroundImage
              handleUploadImage={handleUploadImage}
              removeCustomBackground={removeCustomBackground}
            />
          </div>
        </Window>
      </div>
    </>
  );
};
