import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { useTranslations } from '@/i18n/utils';
import type { ProjectsResponse } from '@/types/api';
import { cn } from '@/utils/cn';

export const ProjectCard = (props: ProjectsResponse) => {
  const t = useTranslations();

  const card = usePrimaryColor('border');
  const button = usePrimaryColor('bg', 'active');

  return (
    <div
      className={cn(
        'w-full items-center gap-2 m-2 rounded-md p-4 flex flex-col md:items-stretch md:flex-row',
        card.className
      )}
    >
      <img
        src={props.projectImage.url}
        alt={`image of the ${props.name} project`}
        className="size-48 rounded-md bg-rose object-cover"
      />

      <div className="flex flex-col justify-between">
        <div>
          <p className="whitespace-nowrap text-xl font-bold capitalize">
            {props.name}
          </p>

          <p className="whitespace-break-spaces text-sm">{props.description}</p>

          <p className="text-sm text-text/60">
            {new Date(props.startAt).toLocaleDateString()} {t('projects.until')}{' '}
            {new Date(props.endAt).toLocaleDateString()}
          </p>
        </div>

        <div className="flex justify-center gap-2 md:justify-start">
          {props.deployLink && (
            <a
              target="_blank"
              href={props.deployLink}
              className={cn('p-2 rounded-md', button.className)}
            >
              deploy
            </a>
          )}

          {props.githubLink && (
            <a
              target="_blank"
              href={props.githubLink}
              className={cn('p-2 rounded-md', button.className)}
            >
              github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
