import type { Langs } from '@/types/langs';

export function aboutMe(langs: Langs[]) {
  return `
        aboutMe(where: {id: "cm16tr0ul07d308lp95uiri62"}, locales: ${langs}) {
            id
            aboutMe
          }
      `;
}
