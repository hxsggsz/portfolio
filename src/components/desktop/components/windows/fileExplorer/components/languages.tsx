import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import type { LanguageResponse, States } from '@/types/api';
import { cn } from '@/utils/cn';

interface LanguagesProps {
  languages: LanguageResponse[];
}

const STATES: States[] = ['fullstack', 'frontend', 'backend'];

export const Languages = (props: LanguagesProps) => {
  const [currentState, setCurrentState] = useState<States>('fullstack');

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
    <div className="w-full">
      <div className="mb-2 flex items-center gap-2">{renderStates()}</div>

      <AnimatePresence>
        <div className="flex flex-wrap gap-2">{renderLanguages()}</div>
      </AnimatePresence>
    </div>
  );
};
