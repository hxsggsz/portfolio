import type { HygraphResponse } from '@/types/api';
import type { Langs } from '@/types/langs';

import { aboutMe } from './about-me';
import { discord } from './discord';
import { experience } from './experience';
import { language } from './language';
import { project } from './project';

export async function fetchProjects(langs: Langs[]) {
  const response = await fetch(import.meta.env.HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        {
        ${language(['en_us'])},
        ${aboutMe(langs)},
        ${project(langs)},
        ${experience(langs)}
        ${discord(langs)}
        }
      `,
    }),
  });

  const json = await response.json();

  return json.data as HygraphResponse;
}
