import { ProjectCard } from '@/components/cards/project';
import type { ProjectsResponse } from '@/types/api';

interface ProjectsProps {
  projects: ProjectsResponse[];
}
export const Projects = (props: ProjectsProps) => {
  const renderProjects = () =>
    props.projects.map((project) => (
      <ProjectCard key={project.id} {...project} />
    ));

  return <div className="space-y-2">{renderProjects()}</div>;
};
