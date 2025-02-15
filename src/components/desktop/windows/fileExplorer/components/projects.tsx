import { ProjectCard } from '@/components/cards/project';
import { useOpenWindowsStore } from '@/stores/windowManager';
import type { ProjectsResponse } from '@/types/api';
import { cn } from '@/utils/cn';

interface ProjectsProps {
  windowId: string;
  projects: ProjectsResponse[];
}
export const Projects = (props: ProjectsProps) => {
  const { findWindow } = useOpenWindowsStore();
  const isWindowFullScreen = findWindow(props.windowId)?.isFullscreen;

  const renderProjects = () =>
    props.projects.map((project) => (
      <ProjectCard windowId={props.windowId} key={project.id} {...project} />
    ));

  return (
    <div
      className={cn(
        'flex w-full flex-wrap overflow-y-auto scrollbar scrollbar-track-inherit scrollbar-w-1',
        !isWindowFullScreen && 'h-full'
      )}
    >
      {renderProjects()}
    </div>
  );
};
