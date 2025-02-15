import { useRef } from 'react';

import file from '@/assets/images/files.png';
import { DesktopItems } from '@/components/desktop/icons/desktop-icon';
import { ExperiencesStepper } from '@/components/desktop/icons/experiences/components/experiences-stepper';
import { Window } from '@/components/desktop/windows/window/';
import { useTranslations } from '@/i18n/utils';
import type { ExperienceResponse } from '@/types/api';
import type { UseImperativeWindowHandler } from '@/types/windows';

interface ExperiencesProps {
  experiences: ExperienceResponse[];
}

export const Experiences = (props: ExperiencesProps) => {
  const windowRef = useRef<UseImperativeWindowHandler>(null);

  const t = useTranslations();

  const windowName = t('exp.title');

  const renderStepper = () =>
    props.experiences.map((exp, index) => {
      // eslint-disable-next-line no-plusplus, no-param-reassign
      const currentStepper = ++index;
      return <ExperiencesStepper {...exp} currentStepper={currentStepper} />;
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
        <div className="scrollbar scrollbar-track-inherit scrollbar-w-1">
          {renderStepper()}
        </div>
      </Window>
    </>
  );
};
