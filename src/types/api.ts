export type States = 'fullstack' | 'frontend' | 'backend';

export interface LanguageResponse {
  id: string;
  name: string;
  state: States[];
  image: {
    url: string;
  };
}
