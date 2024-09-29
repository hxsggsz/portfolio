import type { Langs } from '@/types/langs';

export function discord(langs: Langs[]) {
  return `
        discords(locales: ${langs}) {
            id
            serverImg {
              id
              url
            }
            serverRoom {
              id
              roomName
              roomMessage {
                id
                name
                profilePicture {
                  url
                }
                message
              }
            }
          }
      `;
}
