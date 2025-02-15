import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';

import file from '@/assets/images/files.png';
import { DesktopItems } from '@/components/desktop/icons/desktop-icon';
import { Window } from '@/components/desktop/windows/window/';
import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { useTranslations } from '@/i18n/utils';
import type { LanguageResponse, States } from '@/types/api';
import type { UseImperativeWindowHandler } from '@/types/windows';
import { cn } from '@/utils/cn';

interface LanguagesProps {
  languages: LanguageResponse[];
}

const STATES: States[] = ['fullstack', 'frontend', 'backend'];

export const Languages = (props: LanguagesProps) => {
  const [currentState, setCurrentState] = useState<States>('fullstack');

  const windowRef = useRef<UseImperativeWindowHandler>(null);

  const t = useTranslations();

  const windowName = t('languages');

  const { className } = usePrimaryColor('border');
  const { className: bgClass } = usePrimaryColor('bg');

  const renderFilteredLangs = useMemo(() => {
    return props.languages.filter((lang) =>
      lang.state.find((state) => {
        if (currentState === 'fullstack') {
          return true;
        }

        return state === currentState;
      })
    );
  }, [currentState]);

  const renderLanguages = () =>
    renderFilteredLangs.map((lang) => (
      <motion.div
        key={lang.id}
        layoutId={lang.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'tween', duration: 0.3 }}
        className={cn(
          'flex items-center select-none gap-2 pr-2 rounded-md pointer-events-none',
          className
        )}
      >
        <img
          src={lang.image.url}
          alt={`icon of the ${lang.name}`}
          className={cn('object-fill size-12 rounded-sm p-1', bgClass)}
        />

        <p className="select-text whitespace-nowrap capitalize">{lang.name}</p>
      </motion.div>
    ));

  const renderStates = () =>
    STATES.map((state) => {
      const activeState = state === currentState;

      const changeActiveState = () => setCurrentState(state);

      return (
        <button
          key={state}
          onClick={changeActiveState}
          className={cn(
            'flex transition-colors items-center select-none gap-2 p-1 capitalize rounded-md',
            activeState && `${bgClass} font-bold`,
            className
          )}
        >
          {state}
        </button>
      );
    });

  return (
    <>
      <DesktopItems
        name={windowName}
        icon={file.src}
        onDoubleClick={() =>
          windowRef.current?.openWindow({ name: windowName, image: file.src })
        }
      />

      <Window name={windowName} ref={windowRef}>
        <div className="w-full">
          <div className="mb-2 flex items-center gap-2 px-4">
            {renderStates()}
          </div>

          <AnimatePresence>
            <div className="flex flex-wrap gap-2 px-4">{renderLanguages()}</div>
          </AnimatePresence>
        </div>
      </Window>
    </>
  );
};
