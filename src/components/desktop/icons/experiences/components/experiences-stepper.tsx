import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { getLangFromUrl, useTranslations } from '@/i18n/utils';
import { cn } from '@/utils/cn';

interface StepperProps {
  currentStepper: number;
  title: string;
  description: string;
  startAt: Date;
  endAt: Date | null;
}

export const ExperiencesStepper = (props: StepperProps) => {
  const t = useTranslations();
  const language = getLangFromUrl();

  const bg = usePrimaryColor('bg');

  return (
    <div className="relative pb-8 pl-8 last:pb-0">
      <div className={cn('absolute inset-y-0 left-3 w-px', bg.className)} />

      <div
        className={cn(
          'absolute text-center left-0 top-0 size-6 rounded-full',
          bg.className
        )}
      >
        {props.currentStepper}
      </div>

      <div>
        <h3 className="text-lg font-semibold capitalize">{props.title}</h3>

        <p className="text-xs text-text/60">
          {new Date(props.startAt).toLocaleDateString(language)}{' '}
          {t('projects.until')}{' '}
          {props.endAt
            ? new Date(props.endAt).toLocaleDateString(language)
            : t('now')}
        </p>
        <p className="whitespace-break-spaces text-sm first-letter:capitalize">
          {props.description}
        </p>
      </div>
    </div>
  );
};
