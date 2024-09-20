import type { Langs } from '@/types/langs';

export function language(langs: Langs[]) {
  return `
        language(locales: ${langs}, first: 100) {
            id
            name
            state
            image {
              url
            }
          }
      `;
}
