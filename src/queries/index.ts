import type { HygraphResponse } from '@/types/api';
import type { Langs } from '@/types/langs';

import { aboutMe } from './about-me';
import { language } from './language';
import { project } from './project';

export async function fetchProjects(langs: Langs[]) {
  const response = await fetch(import.meta.env.HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        {
        ${language(langs)},
        ${aboutMe(langs)},
        ${project(langs)}
        }
      `,
    }),
  });
  const json = (await response.json()) as HygraphResponse;

  return json.data;
}