import { usePrimaryColor } from '@/hooks/usePrimaryColor';
import { getLangFromUrl, useTranslations } from '@/i18n/utils';
import type { ProjectsResponse } from '@/types/api';
import { cn } from '@/utils/cn';

interface ProjectCardProps extends ProjectsResponse {}

export const ProjectCard = (props: ProjectCardProps) => {
  const t = useTranslations();
  const lang = getLangFromUrl();

  // const { findWindow } = useOpenWindowsStore();
  // const isWindowFullScreen = findWindow(props.windowId)?.isFullscreen;

  const card = usePrimaryColor('border');
  const button = usePrimaryColor('bg', 'active');

  return (
    <div
      className={cn(
        'items-start w-full gap-2 md:h-56 m-2 rounded-md p-4 flex flex-col md:items-stretch md:flex-row',
        // !isWindowFullScreen && 'w-full',
        card.className
      )}
    >
      <img
        src={props.projectImage.url}
        alt={`image of the ${props.name} project`}
        className="w-full rounded-md bg-rose object-cover md:size-48"
      />

      <div className="flex flex-col justify-between">
        <div>
          <p className="whitespace-nowrap text-xl font-bold capitalize">
            {props.name}
          </p>

          <p
            className={cn(
              'line-clamp-4 w-[342px] text-ellipsis text-sm'
              // !isWindowFullScreen && 'w-full'
            )}
          >
            {props.description}
          </p>
        </div>

        <div>
          <p className="mb-2 text-sm text-text/60">
            {new Date(props.startAt).toLocaleDateString(lang)}{' '}
            {t('projects.until')}{' '}
            {new Date(props.endAt).toLocaleDateString(lang)}
          </p>

          <div className="flex justify-start gap-2">
            {props.deployLink && (
              <a
                target="_blank"
                href={props.deployLink}
                className={cn('p-2 rounded-md', button.className)}
              >
                Deploy
              </a>
            )}

            {props.githubLink && (
              <a
                target="_blank"
                href={props.githubLink}
                className={cn('p-2 rounded-md', button.className)}
              >
                Github
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
