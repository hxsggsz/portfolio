export type States = 'fullstack' | 'frontend' | 'backend';

export interface HygraphResponse {
  data: {
    aboutMe: AboutMeResponse;
    language: LanguageResponse[];
    projects: ProjectsResponse[];
  };
}

export interface LanguageResponse {
  id: string;
  name: string;
  state: States[];
  image: {
    url: string;
  };
}

export interface ProjectsResponse {
  id: string;
  locale: string;
  name: string;
  githubLink?: string;
  deployLink?: string;
  description: string;
  startAt: string;
  endAt: string;
  techs: string[];
  projectImage: {
    url: string;
  };
}

export interface AboutMeResponse {
  id: string;
  aboutMe: string;
}
