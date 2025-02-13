import { ExperiencesStepper } from '@/components/desktop/components/experiences-stepper';
import type { ExperienceResponse } from '@/types/api';

interface ExperiencesProps {
  experiences: ExperienceResponse[];
}

export const Experiences = (props: ExperiencesProps) => {
  const renderStepper = () =>
    props.experiences.reverse().map((exp, index) => {
      // eslint-disable-next-line no-plusplus, no-param-reassign
      const currentStepper = ++index;
      return <ExperiencesStepper {...exp} currentStepper={currentStepper} />;
    });

  return (
    <div className="h-full overflow-y-auto scrollbar scrollbar-track-inherit scrollbar-w-1">
      {renderStepper()}
    </div>
  );
};
