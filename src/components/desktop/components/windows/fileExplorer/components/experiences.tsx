import type { ExperienceResponse } from '@/types/api';

import { ExperiencesStepper } from '../../../experiences-stepper';

interface ExperiencesProps {
  experiences: ExperienceResponse[];
}

export const Experiences = (props: ExperiencesProps) => {
  const renderStepper = () =>
    props.experiences.reverse().map((exp, index) => (
      // eslint-disable-next-line no-plusplus, no-param-reassign
      <ExperiencesStepper {...exp} currentStepper={++index} />
    ));

  return (
    <div className="h-full overflow-y-auto scrollbar scrollbar-track-inherit scrollbar-w-1">
      {renderStepper()}
    </div>
  );
};
