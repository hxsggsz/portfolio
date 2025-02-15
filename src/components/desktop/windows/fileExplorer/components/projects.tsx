import { useRef } from 'react';

import file from '@/assets/images/files.png';
import { ProjectCard } from '@/components/cards/project';
import { DesktopItems } from '@/components/desktop/icons/desktop-icon';
import { Window } from '@/components/desktop/windows/window/';
import { useTranslations } from '@/i18n/utils';
import type { ProjectsResponse } from '@/types/api';
import type { UseImperativeWindowHandler } from '@/types/windows';
import { cn } from '@/utils/cn';

interface ProjectsProps {
  projects: ProjectsResponse[];
}
export const Projects = (props: ProjectsProps) => {
  // const { findWindow } = useOpenWindowsStore();
  // const isWindowFullScreen = findWindow(props.windowId)?.isFullscreen;

  const windowRef = useRef<UseImperativeWindowHandler>(null);

  const t = useTranslations();

  const windowName = t('projects');

  const renderProjects = () =>
    props.projects.map((project) => (
      <ProjectCard key={project.id} {...project} />
    ));

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
        <div
          className={cn(
            'flex size-full flex-wrap overflow-y-auto scrollbar scrollbar-track-inherit scrollbar-w-1'
          )}
        >
          {renderProjects()}
        </div>
      </Window>
    </>
  );
};
