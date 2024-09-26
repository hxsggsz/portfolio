import type { Langs } from '@/types/langs';

export function experience(langs: Langs[]) {
  return `
          experiences(locales: ${langs}) {
            title
            companyName
            description
            startAt
            endAt
          }
      `;
}
