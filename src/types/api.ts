export type States = 'fullstack' | 'frontend' | 'backend';

export interface HygraphResponse {
  aboutMe: AboutMeResponse;
  language: LanguageResponse[];
  projects: ProjectsResponse[];
  experiences: ExperienceResponse[];
  discords: DiscordResponse[];
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

export interface ExperienceResponse {
  title: string;
  companyName: string;
  description: string;
  startAt: Date;
  endAt: Date | null;
}
export interface DiscordResponse {
  id: string;
  serverImg: ServerImg;
  serverRoom: ServerRoom[];
}

export interface ServerImg {
  id: string;
  url: string;
}

export interface ServerRoom {
  id: string;
  roomName: string;
  roomMessage: RoomMessage[];
}

export interface RoomMessage {
  id: string;
  profilePicture: ProfilePicture;
  message: string;
}

export interface ProfilePicture {
  url: string;
}
