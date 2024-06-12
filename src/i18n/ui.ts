import { enTranslation } from './translations/en';
import { ptTranslation } from './translations/pt';

export const languages = {
  'en-us': 'English',
  'pt-br': 'Portuguese',
};

export const defaultLang = 'en-us';

export const ui = {
  'en-us': { ...enTranslation },
  'pt-br': { ...ptTranslation },
} as const;
