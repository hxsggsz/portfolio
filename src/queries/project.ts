import type { Langs } from '@/types/langs';

export function project(langs: Langs[]) {
  return `
        projects(orderBy: publishedAt_DESC, locales: ${langs}, first: 100) {
            id
            locale
            name
            githubLink
            deployLink
            description
            startAt
            endAt
            techs
            projectImage {
              url
            }
          }
      `;
}
